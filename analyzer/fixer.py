import re

def apply_fix(code):
    fixed_code = code

    # 1. Loss of Significance Conjugate Rewrite
    # Matches: sqrt(x * x + 1.0) - x with any spacing and optional .0
    loss_pattern = re.compile(r'sqrt\s*\(\s*(\w+)\s*\*\s*\1\s*\+\s*1(?:\.0)?\s*\)\s*-\s*\1')
    fixed_code = loss_pattern.sub(r'1.0 / (sqrt(\1 * \1 + 1.0) + \1)', fixed_code)

    # 2. Logarithmic Instability Rewrite
    # Matches: log(x + 1.0) - log(x)
    log_pattern = re.compile(r'log\s*\(\s*(\w+)\s*\+\s*1(?:\.0)?\s*\)\s*-\s*log\s*\(\s*\1\s*\)')
    fixed_code = log_pattern.sub(r'log1p(1.0 / \1)', fixed_code)

    # 3. Trigonometric Cancellation Rewrite
    # Matches: sin(x) - sin(x + 1e-8)
    trig_pattern = re.compile(r'sin\s*\(\s*(\w+)\s*\)\s*-\s*sin\s*\(\s*\1\s*\+\s*([0-9e.-]+)\s*\)')
    fixed_code = trig_pattern.sub(r'-2.0 * sin((\2) / 2.0) * cos(\1 + (\2) / 2.0)', fixed_code)

    # 4. Catastrophic Cancellation simple epsilon check guard
    # Matches: a - b
    cancel_pattern = re.compile(r'return\s+(\w+)\s*-\s*(\w+)\s*;')
    fixed_code = cancel_pattern.sub(r'return (fabs(\1 - \2) < 1e-9) ? 0.0 : (\1 - \2);', fixed_code)

    return fixed_code


def suggest_fix(code):
    suggestions = []

    if "sqrt" in code and "-" in code:
        suggestions.append(
            "Replace sqrt(x*x + 1) - x with conjugate conjugate 1/(sqrt(x*x + 1) + x)"
        )

    if "sin" in code and "-" in code:
        suggestions.append(
            "Replace sin(x) - sin(x+delta) with trigonometric product logic to avoid cancellation"
        )

    if "log" in code and "-" in code:
        suggestions.append(
            "Rewrite log(x+1) - log(x) to log1p(1/x) to preserve underflow bits"
        )

    if "-" in code:
        suggestions.append(
            "Avoid subtracting nearly equal numbers (catastrophic cancellation)"
        )

    return suggestions