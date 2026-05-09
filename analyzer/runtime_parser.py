import math
import re


RESULT_PATTERN = re.compile(
    r'^(RESULT(?:_[A-Z0-9]+)?):\s*([+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?|inf|infinity|nan)$',
    re.IGNORECASE | re.MULTILINE,
)

TRACE_PATTERN = re.compile(
    r'^TRACE:(\w+)\s*=\s*([+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?|inf|infinity|nan)$',
    re.IGNORECASE | re.MULTILINE,
)


RESULT_LABEL_ALIASES = {
    "RESULT_CANCELLATION": ("cancellation", "Cancellation"),
    "RESULT_DIVISION": ("division", "Division"),
    "RESULT_UNSTABLE": ("unstable_expr", "Unstable Expr"),
    "RESULT_STABLE": ("stable_expr", "Stable Expr"),
    "RESULT_TRIG": ("trig", "Trig"),
    "RESULT_LOG": ("log", "Log"),
    "RESULT_OVERFLOW": ("overflow", "Overflow"),
    "RESULT_UNDERFLOW": ("underflow", "Underflow"),
    "RESULT_MIXED": ("mixed", "Mixed"),
}


def _parse_numeric(value):
    value = value.strip().lower()

    if value in {"inf", "+inf", "infinity", "+infinity"}:
        return float("inf")
    if value in {"-inf", "-infinity"}:
        return float("-inf")
    if value in {"nan", "+nan", "-nan"}:
        return float("nan")

    return float(value)


def format_result_label(label):
    label_upper = label.upper()

    if label_upper in RESULT_LABEL_ALIASES:
        return RESULT_LABEL_ALIASES[label_upper][1]

    if label_upper == "RESULT":
        return "Result"

    if label.startswith("RESULT_"):
        return label.removeprefix("RESULT_").replace("_", " ").title()

    return label.replace("_", " ").title()


def result_function_key(label):
    label_upper = label.upper()

    if label_upper in RESULT_LABEL_ALIASES:
        return RESULT_LABEL_ALIASES[label_upper][0]

    if label_upper == "RESULT":
        return "single_result"

    if label_upper.startswith("RESULT_"):
        return label_upper.removeprefix("RESULT_").lower()

    return label.lower()


def classify_result(label, value, stable_reference=None):
    label_upper = label.upper()
    # default reason
    reason = ""

    # ===== Special numeric cases =====
    if math.isinf(value):
        return "High", "❌ Unstable", "Infinite result (overflow)"

    if math.isnan(value):
        return "High", "❌ Unstable", "Non-numeric result (NaN)"

    # ===== Explicit label-based rules =====
    if "OVERFLOW" in label_upper:
        return "High", "❌ Unstable", "Overflow detected in result"

    if "UNDERFLOW" in label_upper:
        return "High", "❌ Unstable", "Underflow detected in result"

    if "CANCELLATION" in label_upper:
        reason = "Subtraction of nearly equal numbers causes precision loss"
        return "High", "❌ Unstable", reason

    if "DIVISION" in label_upper:
        reason = "Division by a value near zero may amplify errors"
        if stable_reference is not None and stable_reference != 0:
            relative = abs(value - stable_reference) / abs(stable_reference)
            if relative > 1e-6:
                return "High", "❌ Unstable", reason
            if relative > 1e-10:
                return "Medium", "⚠️ Risky", reason
            return "Low", "⚠️ Potentially Unstable", f"{reason} (low error for current input)"
        return "Medium", "⚠️ Risky", reason

    if "TRIG" in label_upper:
        reason = "Subtraction of nearly equal trig values can cause cancellation"
        if stable_reference is not None and stable_reference != 0:
            relative = abs(value - stable_reference) / abs(stable_reference)
            if relative > 1e-6:
                return "High", "❌ Unstable", reason
            if relative > 1e-10:
                return "Medium", "⚠️ Risky", reason
            return "Low", "⚠️ Potentially Unstable", f"{reason} (low error for current input)"
        return "Medium", "⚠️ Risky", reason

    if "LOG" in label_upper:
        reason = "Difference of logarithms can cancel for large inputs"
        if stable_reference is not None and stable_reference != 0:
            relative = abs(value - stable_reference) / abs(stable_reference)
            if relative > 1e-6:
                return "High", "❌ Unstable", reason
            if relative > 1e-10:
                return "Medium", "⚠️ Risky", reason
            return "Low", "⚠️ Potentially Unstable", f"{reason} (low error for current input)"
        return "Medium", "⚠️ Risky", reason

    # ===== Stable case (safe check) =====
    if "STABLE" in label_upper and not (math.isnan(value) or math.isinf(value)):
        return "Low", "✅ Stable", "Marked as stable by instrumentation"

    # ===== Relative comparison =====
    if stable_reference is not None and stable_reference != 0:
        relative = abs(value - stable_reference) / abs(stable_reference)

        if relative > 1e-6:
            return "High", "❌ Unstable", "Large relative deviation from stable reference"

        if relative > 1e-10:
            return "Medium", "⚠️ Risky", "Moderate relative deviation from stable reference"

        # numerical agreement but pattern may be unstable
        if any(tok in label_upper for tok in ["CANCELLATION", "UNSTABLE", "DIVISION", "TRIG", "LOG", "MIXED"]):
            return "Low", "⚠️ Potentially Unstable", "Pattern detected; low error for current input"

        return "Low", "✅ Stable", "Matches stable reference"

    # fallback
    return "Medium", "⚠️ Risky", "No stable reference to compare against"


def extract_results(output):
    results = []

    for label, value in RESULT_PATTERN.findall(output):
        results.append((label.strip(), _parse_numeric(value)))

    return results


def summarize_results(output):
    results = extract_results(output)

    stable_reference = next(
        (value for label, value in results if label.upper() == "RESULT_STABLE"),
        None,
    )

    summary = []

    for label, value in results:
        error_level, status, reason = classify_result(label, value, stable_reference)

        summary.append(
            {
                "label": label,
                "function": format_result_label(label),
                "function_key": result_function_key(label),
                "value": value,
                "error": error_level,
                "status": status,
                "reason": reason,
            }
        )

    return summary


def overall_status_from_summary(summary):
    if any(row["status"].startswith("❌") for row in summary):
        return "❌ Unstable"

    if any(row["status"].startswith("⚠️") for row in summary):
        return "⚠️ Risky"

    if summary:
        return "✅ Stable"

    return "Unknown"


def extract_result(output):
    results = extract_results(output)

    if results:
        return results[0][1]

    return None


def extract_traces(output):
    matches = TRACE_PATTERN.findall(output)
    return [(var, _parse_numeric(val)) for var, val in matches]