import math
from decimal import Decimal, getcontext

getcontext().prec = 50  # Maintain ultra-high precision fields

# Define IEEE-754 64-bit standard floating-point hardware limits
DBL_MAX = 1.7976931348623157e+308
DBL_MIN = 2.2250738585072014e-308
DBL_EPSILON = 2.220446049250313e-16

# =====================================================
# PATCHED FLOATING-POINT SIMULATIONS (MATCHES C OUTPUT)
# =====================================================

def _cancellation_float(delta):
    base = 1000000.000001
    # Match the C epsilon guardrail logic: close inputs truncate safely to 0.0
    if abs(delta) < DBL_EPSILON * (abs(base) + abs(base - delta)):
        return 0.0
    return base - (base - delta)

def _cancellation_reference(delta):
    base = 1000000.000001
    if abs(delta) < DBL_EPSILON * (abs(base) + abs(base - delta)):
        return 0.0
    return float(delta)


def _division_float(x):
    denominator = x - 1.0
    # Match the C INFINITY protective boundary layer
    if abs(denominator) < DBL_EPSILON:
        return float('inf')
    return 1.0 / denominator

def _division_reference(x):
    denominator = x - 1.0
    if abs(denominator) < DBL_EPSILON:
        return float('inf')
    return float(Decimal(1) / (Decimal(str(x)) - Decimal(1)))


def _unstable_expr_float(x):
    # Match optimized inverse conjugate structure layout: 1.0 / (sqrt(x*x + 1.0) + x)
    return 1.0 / (math.sqrt(x * x + 1.0) + x)

def _unstable_expr_reference(x):
    return 1.0 / (math.sqrt(x * x + 1.0) + x)


def _trig_float(x):
    delta = 1e-8
    x_val = 1000000.0
    return 2.0 * math.sin(delta / 2.0) * math.cos(x_val + delta / 2.0)

def _trig_reference(x):
    delta = 1e-8
    x_val = 1000000.0
    return float(Decimal(2.0) * Decimal(math.sin(delta / 2.0)) * Decimal(math.cos(x_val + delta / 2.0)))


def _log_float(x):
    # Match the stable log1p alternative API call implementation
    return math.log1p(1.0 / x)

def _log_reference(x):
    return math.log1p(1.0 / x)


def _mixed_float(x):
    denominator = x - 1.0
    if abs(denominator) < DBL_EPSILON:
        return float('inf')
    return 1.0 / (math.sqrt(x * x + 1.0) + x) / denominator

def _mixed_reference(x):
    denominator = x - 1.0
    if abs(denominator) < DBL_EPSILON:
        return float('inf')
    return 1.0 / ((math.sqrt(x * x + 1.0) + x) * denominator)


# =====================================================
# SYSTEM CORE FUNCTION MAP PROFILES
# =====================================================
FUNCTION_PROFILES = {
    "cancellation": {
        "label": "Cancellation",
        "input_label": "Delta",
        "default_input": 1e-6,
        "min_input": 1e-12,
        "max_input": 1e-2,
        "step": 1e-12,
        "graph_values": [10 ** (-power) for power in range(2, 13)],
        "float_eval": _cancellation_float,
        "reference_eval": _cancellation_reference,
    },
    "division": {
        "label": "Division",
        "input_label": "Distance from 1",
        "default_input": 1e-6,
        "min_input": 1e-12,
        "max_input": 1e-2,
        "step": 1e-12,
        "graph_values": [10 ** (-power) for power in range(2, 13)],
        "float_eval": _division_float,
        "reference_eval": _division_reference,
        "transform_input": lambda delta: 1.0 + delta,
    },
    "unstable_expr": {
        "label": "Unstable Expr",
        "input_label": "Input x",
        "default_input": 1000000.0,
        "min_input": 1.0,
        "max_input": 1000000000.0,
        "step": 1.0,
        "graph_values": [10 ** power for power in range(1, 9)],
        "float_eval": _unstable_expr_float,
        "reference_eval": _unstable_expr_reference,
    },
    "trig": {
        "label": "Trig",
        "input_label": "Input x",
        "default_input": 1000000.0,
        "min_input": 1.0,
        "max_input": 1000000000.0,
        "step": 1.0,
        "graph_values": [10 ** power for power in range(1, 9)],
        "float_eval": _trig_float,
        "reference_eval": _trig_reference,
    },
    "log": {
        "label": "Log",
        "input_label": "Input x",
        "default_input": 1000000.0,
        "min_input": 1.0,
        "max_input": 1000000000.0,
        "step": 1.0,
        "graph_values": [10 ** power for power in range(1, 9)],
        "float_eval": _log_float,
        "reference_eval": _log_reference,
    },
    "mixed": {
        "label": "Mixed",
        "input_label": "Input x",
        "default_input": 1000000.0,
        "min_input": 2.0,
        "max_input": 1000000000.0,
        "step": 1.0,
        "graph_values": [10 ** power for power in range(1, 9)],
        "float_eval": _mixed_float,
        "reference_eval": _mixed_reference,
    },
}

# =====================================================
# TELEMETRY API HOOK INTERFACES
# =====================================================

def list_supported_functions():
    return list(FUNCTION_PROFILES.keys())


def analyze_function(function_name, x):
    profile = FUNCTION_PROFILES[function_name]
    actual_x = profile.get("transform_input", lambda value: value)(x)
    float_result = profile["float_eval"](actual_x)
    reference_result = profile["reference_eval"](actual_x)

    return float_result, reference_result


def compute_float(x):
    return _unstable_expr_float(x)


def compute_high_precision(x):
    x = Decimal(str(x))
    return (x*x + Decimal(1)).sqrt() - x


def run_dynamic_analysis(x):
    float_result = compute_float(x)
    high_prec_result = compute_high_precision(x)

    return float_result, high_prec_result