#include <stdio.h>
#include <math.h>

int main() {
    // Master high-magnitude coordinate used to stress-test the register memory
    double x = 100000000.0; 
printf("TRACE:x=%lf\n", x);

    // 1. CANCELLATION: Expecting 0.0000000012345 -> Computer prints 0.000000 or noisy garbage
    double res1 = (12345678.0 + 0.0000000012345) - 12345678.0;
printf("TRACE:res1=%lf\n", res1);

    // 2. DIVISION BY ZERO/SMALL NUMBER: Denominator hits machine resolution limits -> Explosive spike to inf
    double res2 = 1.0 / (1.0000000000000002 - 1.0);
printf("TRACE:res2=%lf\n", res2);

    // 3. LOSS OF SIGNIFICANCE: Extreme x forces sqrt(x^2 + 1) == x in hardware -> Collapses to 0.000000
    double res3 = x * (sqrt(x * x + 1.0) - x);
printf("TRACE:res3=%lf\n", res3);

    // 4. TRIG PHASE ERASURE: Massive wave coordinates clip trailing bits -> Returns flat 0.000000
    double res4 = cos(x + 1e-9) - cos(x);
printf("TRACE:res4=%lf\n", res4);

    // 5. LOGARITHMIC INSTABILITY: Curves flatten completely at large scales -> Drops fractional distance to 0.000000
    double res5 = log(x + 1.0) - log(x);
printf("TRACE:res5=%lf\n", res5);

    // 6. OVERFLOW: Exceeds maximum 64-bit float limit (~1.79e+308) -> Instantly breaks into inf
    double res6 = pow(10.0, 309.0);
printf("TRACE:res6=%lf\n", res6);

    // 7. UNDERFLOW: Drops below subnormal minimum limits (~4.94e-324) -> Hard-flushed down to absolute 0.0
    double res7 = exp(-750.0);
printf("TRACE:res7=%lf\n", res7);

    // 8. MIXED PITFALLS: Double-whammy of a significance loss numerator over a near-zero division denominator
    double res8 = (sqrt(x * x + 4.0) - x) / (1.0000000000000002 - 1.0);
printf("TRACE:res8=%lf\n", res8);


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
printf("DEBUG:%lf\n", 0);
}