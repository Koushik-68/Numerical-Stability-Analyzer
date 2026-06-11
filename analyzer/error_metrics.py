import math

def relative_error(computed, true):
    """
    Computes numerical relative error with safety guards for 
    zero-division and infinity cases.
    """
    # 1. Handle cases where the reference (true) value is absolute zero
    if true == 0.0:
        # If both are zero, the error is 0. If only true is zero, error is 100% (1.0)
        return 0.0 if computed == 0.0 else 1.0
        
    # 2. Handle cases where the true value is Infinity
    if math.isinf(true):
        # If both are Infinity, error is 0. Otherwise, it's a total mismatch (1.0)
        return 0.0 if math.isinf(computed) else 1.0

    # 3. Standard relative error calculation
    rel_err = abs(computed - true) / abs(true)
    
    # Optional: Cap relative error at 1.0 (100%) to prevent graph distortion 
    # in visualization when precision is totally lost.
    return min(rel_err, 1.0)


def absolute_error(computed, true):
    """
    Computes the absolute difference between computed and true values.
    """
    # Handle Infinity - Infinity cases safely
    if math.isinf(computed) and math.isinf(true):
        return 0.0 if (computed > 0) == (true > 0) else float('inf')
        
    return abs(computed - true)