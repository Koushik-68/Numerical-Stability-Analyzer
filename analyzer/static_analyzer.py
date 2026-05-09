import re

def detect_patterns(code):
    issues = []

    # Catastrophic cancellation
    if re.search(r'\w+\s*-\s*\w+', code):
        issues.append("Possible catastrophic cancellation (a - b)")

    # Division by small value
    if re.search(r'/\s*\(.*-.*\)', code):
        issues.append("Division by potentially small number")

    # sqrt(x*x + 1) - x pattern
    if "sqrt" in code and "-" in code:
        issues.append("Loss of significance in sqrt(x*x + 1) - x")

    return issues


def analyze_file(file_path):
    with open(file_path, 'r') as f:
        code = f.read()

    issues = detect_patterns(code)

    print("\n[Static Analysis Report]")
    for issue in issues:
        print("⚠️", issue)

    return issues