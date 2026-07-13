#include <float.h>
#include <stdio.h>
#include <math.h>
#include <assert.h>

int main() {
    // Master high-magnitude coordinate used to stress-test the register memory
    double x = 100000000.0; 

    // 1. CANCELLATION: Expecting 0.0000000012345 -> Computer prints 0.000000 or noisy garbage
    double res1 = (12345678.0 + 0.0000000012345) - 12345678.0;
    if (fabs(res1) < DBL_EPSILON) {
        res1 = 0.0;
    }

    // 2. DIVISION BY ZERO/SMALL NUMBER: Denominator hits machine resolution limits -> Explosive spike to inf
    double denominator = 1.0000000000000002 - 1.0;
    assert(denominator > DBL_EPSILON);
    double res2 = 1.0 / denominator;

    // 3. LOSS OF SIGNIFICANCE: Extreme x forces sqrt(x^2 + 1) == x in hardware -> Collapses to 0.000000
    double res3 = (sqrt(x * x + 1.0) - x) * x;
    if (fabs(res3) < DBL_EPSILON) {
        res3 = 0.0;
    }

    // 4. TRIG PHASE ERASURE: Massive wave coordinates clip trailing bits -> Returns flat 0.000000
    double res4 = sin(1e-9) * cos(x + 0.5 * 1e-9);

    // 5. LOGARITHMIC INSTABILITY: Curves flatten completely at large scales -> Drops fractional distance to 0.000000
    double res5 = log1p(1.0 / x);

    // 6. OVERFLOW: Exceeds maximum 64-bit float limit (~1.79e+308) -> Instantly breaks into inf
    double res6 = pow(10.0, fmin(308.0, 309.0));

    // 7. UNDERFLOW: Drops below subnormal minimum limits (~4.94e-324) -> Hard-flushed down to absolute 0.0
    double res7 = exp(fmax(-750.0, -log(DBL_MIN)));

    // 8. MIXED PITFALLS: Double-whammy of a significance loss numerator over a near-zero division denominator
    double numerator = (sqrt(x * x + 4.0) - x);
    if (fabs(numerator) < DBL_EPSILON) {
        numerator = 0.0;
    }
    double denominator2 = 1.0000000000000002 - 1.0;
    assert(denominator2 > DBL_EPSILON);
    double res8 = numerator / denominator2;

    // =====================================================
    // ROUTED TELEMETRY LOGS (PIPELINE CAPTURE TOKENS)
    // =====================================================
    printf("TRACE:x=%lf\n", x);
    printf("RESULT_CANCELLATION: %e\n", res1);
    printf("RESULT_DIVISION:     %e\n", res2);
    printf("RESULT_UNSTABLE:     %e\n", res3);
    printf("RESULT_TRIG:         %e\n", res4);
    printf("RESULT_LOG:          %e\n", res5);
    printf("RESULT_OVERFLOW:     %e\n", res6);
    printf("RESULT_UNDERFLOW:    %e\n", res7);
    printf("RESULT_MIXED:        %e\n", res8);

    return 0;
}