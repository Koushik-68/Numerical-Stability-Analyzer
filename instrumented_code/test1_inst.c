#include <stdio.h>
#include <math.h>

double compute(double x) {
    return sqrt(x*x + 1) - x;
printf("DEBUG:%lf\n", sqrt(x*x + 1) - x);
}

int main() {
    double x = 1000000.0;
printf("TRACE:x=%lf\n", x);
    double result = compute(x);
printf("TRACE:result=%lf\n", result);
    printf("RESULT:%lf\n", result);
    return 0;
printf("DEBUG:%lf\n", 0);
}