import math
from decimal import Decimal, getcontext

getcontext().prec = 50  # high precision


def _cancellation_float(delta):
    base = 1000000.000001
    return base - (base - delta)


def _cancellation_reference(delta):
    return float(delta)


def _division_float(x):
    return 1.0 / (x - 1.0)


def _division_reference(x):
    return float(Decimal(1) / (Decimal(str(x)) - Decimal(1)))


def _unstable_expr_float(x):
    return math.sqrt(x * x + 1) - x


def _unstable_expr_reference(x):
    return 1.0 / (math.sqrt(x * x + 1) + x)


def _trig_float(x):
    return math.sin(x) - math.sin(x + 1e-8)


def _trig_reference(x):
    delta = 1e-8
    return -2.0 * math.sin(delta / 2.0) * math.cos(x + delta / 2.0)


def _log_float(x):
    return math.log(x + 1) - math.log(x)


def _log_reference(x):
    return math.log1p(1.0 / x)


def _mixed_float(x):
    return (math.sqrt(x * x + 1) - x) / (x - 1)


def _mixed_reference(x):
    return 1.0 / ((math.sqrt(x * x + 1) + x) * (x - 1))


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
    x = Decimal(x)
    return (x*x + Decimal(1)).sqrt() - x


def run_dynamic_analysis(x):
    float_result = compute_float(x)
    high_prec_result = compute_high_precision(x)

    return float_result, high_prec_result