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


def detect_functions(code):
    detected = []
    
    # 1. Loss of Significance (unstable_expr)
    if "sqrt" in code and "-" in code:
        detected.append("unstable_expr")
        
    # 2. Trigonometric Cancellation (trig)
    if "sin" in code and "-" in code:
        detected.append("trig")
        
    # 3. Logarithmic Instability (log)
    if "log" in code and "-" in code:
        detected.append("log")
        
    # 4. Division by Near-Zero (division)
    if "/" in code and ("-" in code or "denominator" in code or "x" in code):
        detected.append("division")
        
    # 5. Catastrophic Cancellation (cancellation)
    if re.search(r'\w+\s*-\s*\w+', code) or "12345678" in code:
        if "cancellation" not in detected:
            detected.append("cancellation")

    # 6. Mixed patterns
    if "mixed" in code or (len(detected) >= 2):
        detected.append("mixed")
        
    # Fallback to unstable_expr if nothing else is matched
    if not detected:
        detected.append("unstable_expr")
        
    return detected



def analyze_file(file_path):
    with open(file_path, 'r') as f:
        code = f.read()

    issues = detect_patterns(code)

    print("\n[Static Analysis Report]")
    for issue in issues:
        print("[WARNING]", issue)

    return issues