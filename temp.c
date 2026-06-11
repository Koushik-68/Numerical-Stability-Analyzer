#include <stdio.h>
#include <math.h>

// 1. Catastrophic Cancellation Pattern (a ≈ b, high precision loss)
double cancellation_test(double a, double b) {
    return a - b;
}

// 2. Division by Small Number Pattern (denominator approaches zero)
double division_test(double x) {
    return 1.0 / (x - 1.0);
}

// 3. Loss of Significance Pattern
double unstable_expr_test(double x) {
    return sqrt(x * x + 1.0) - x;
}

// 4. Trigonometric Cancellation Pattern
double trig_test(double x) {
    return sin(x) - sin(x + 1e-8);
}

// 5. Logarithmic Instability Pattern (subtracting large logs)
double log_test(double x) {
    return log(x + 1.0) - log(x);
}

// 6. Overflow Pattern (exceeds floating-point maximum limits)
double overflow_test(double x) {
    return exp(x);
}

// 7. Underflow Pattern (drops below floating-point minimum precision limits)
double underflow_test(double x) {
    return exp(-x);
}

// 8. Mixed Instability Pattern (combined algebraic pitfalls)
double mixed_test(double x) {
    return (sqrt(x * x + 1.0) - x) / (x - 1.0);
}

int main() {
    // Dynamic input variables to trace
    double x = 1000000.0;
    double close_to_one = 1.0000000001;
    double nearly_equal_a = 123456.78901234;
    double nearly_equal_b = 123456.78901233;
    double overflow_input = 710.0;  // exp(710) overflows double (~1.79e308)
    double underflow_input = 750.0; // exp(-750) underflows to 0.0

    // Compute execution results
    double res_cancel   = cancellation_test(nearly_equal_a, nearly_equal_b);
    double res_division = division_test(close_to_one);
    double res_unstable = unstable_expr_test(x);
    double res_trig     = trig_test(x);
    double res_log      = log_test(x);
    double res_overflow = overflow_test(overflow_input);
    double res_underflow= underflow_test(underflow_input);
    double res_mixed    = mixed_test(x);

    // =====================================================
    // ROUTED OUTPUT MATCHING RUNTIME_PARSER ALIASES
    // =====================================================
    printf("RESULT_CANCELLATION: %e\n", res_cancel);
    printf("RESULT_DIVISION: %e\n", res_division);
    printf("RESULT_UNSTABLE: %e\n", res_unstable);
    printf("RESULT_TRIG: %e\n", res_trig);
    printf("RESULT_LOG: %e\n", res_log);
    printf("RESULT_OVERFLOW: %e\n", res_overflow);
    printf("RESULT_UNDERFLOW: %e\n", res_underflow);
    printf("RESULT_MIXED: %e\n", res_mixed);

    return 0;
}