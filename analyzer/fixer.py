def apply_fix(code):
    fixed_code = code

    # Fix: sqrt(x*x + 1) - x
    if "sqrt" in code and "- x" in code:
        fixed_code = fixed_code.replace(
            "sqrt(x*x + 1) - x",
            "1 / (sqrt(x*x + 1) + x)"
        )

    return fixed_code


def suggest_fix(code):
    suggestions = []

    if "sqrt" in code and "- x" in code:
        suggestions.append(
            "Replace sqrt(x*x + 1) - x with 1/(sqrt(x*x + 1) + x)"
        )

    if "-" in code:
        suggestions.append(
            "Avoid subtracting nearly equal numbers (catastrophic cancellation)"
        )

    return suggestions