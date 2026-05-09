#include <stdio.h>
#include <math.h>

// ======================================
// 1. Catastrophic Cancellation
// ======================================
double cancellation(double a, double b) {
    return a - b;  // a ≈ b → loss of precision
}

// ======================================
// 2. Division by Small Number
// ======================================
double division_issue(double x) {
    return 1.0 / (x - 1.0);  // x ≈ 1 → unstable
}

// ======================================
// 3. Loss of Significance (Classic)
// ======================================
double unstable_expr(double x) {
    return sqrt(x*x + 1) - x;
}

// Stable version
double stable_expr(double x) {
    return 1.0 / (sqrt(x*x + 1) + x);
}

// ======================================
// 4. Trigonometric Cancellation
// ======================================
double trig_issue(double x) {
    return sin(x) - sin(x + 1e-8);
}

// ======================================
// 5. Logarithmic Cancellation
// ======================================
double log_issue(double x) {
    return log(x + 1) - log(x);
}

// ======================================
// 6. Overflow
// ======================================
double overflow_case(double x) {
    return exp(x);  // large x → overflow
}

// ======================================
// 7. Underflow
// ======================================
double underflow_case(double x) {
    return exp(-x);  // large x → underflow
}

// ======================================
// 8. Mixed Instability
// ======================================
double mixed_issue(double x) {
    return (sqrt(x*x + 1) - x) / (x - 1);
}

// ======================================
// MAIN FUNCTION
// ======================================
int main() {

    double a = 1000000.000001;
    double b = 1000000.000000;

    double x = 1000000.0;
    double y = 1.000001;

    // Compute results
    double res1 = cancellation(a, b);
    double res2 = division_issue(y);
    double res3 = unstable_expr(x);
    double res4 = stable_expr(x);
    double res5 = trig_issue(x);
    double res6 = log_issue(x);
    double res7 = overflow_case(1000);
    double res8 = underflow_case(1000);
    double res9 = mixed_issue(x);

    // ======================================
    // OUTPUT (IMPORTANT FORMAT)
    // ======================================
    printf("RESULT_CANCELLATION: %e\n", res1);
    printf("RESULT_DIVISION: %e\n", res2);
    printf("RESULT_UNSTABLE: %e\n", res3);
    printf("RESULT_STABLE: %e\n", res4);
    printf("RESULT_TRIG: %e\n", res5);
    printf("RESULT_LOG: %e\n", res6);
    printf("RESULT_OVERFLOW: %e\n", res7);
    printf("RESULT_UNDERFLOW: %e\n", res8);
    printf("RESULT_MIXED: %e\n", res9);

    return 0;
}