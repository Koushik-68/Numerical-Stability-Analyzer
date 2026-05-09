# Numerical Stability Analyzer

### Hybrid Static and Dynamic Analysis for Floating-Point Error Detection

An advanced numerical analysis system designed to detect, analyze, and visualize floating-point instability in C programs using a hybrid approach that combines static analysis, runtime validation, error metrics, and interactive visualization.

This project helps identify common numerical computation problems such as catastrophic cancellation, division instability, overflow, underflow, logarithmic instability, and trigonometric cancellation.

---

# 🚀 Features

## 🔍 Static Analysis

Detects common numerical instability patterns such as:

- Catastrophic cancellation
- Division by small numbers
- Loss of significance
- Trigonometric cancellation
- Logarithmic instability
- Mixed unstable expressions

---

## ⚙️ Dynamic Runtime Analysis

Performs runtime numerical evaluation using:

- Floating-point computation
- High-precision reference comparison
- Relative error calculation
- Absolute error calculation

---

## 📊 Multi-Result Analysis

Supports function-wise analysis with:

- Severity classification
- Stability detection
- Error explanations
- Overall program status

---

## 📈 Interactive Visualization

Provides graphical visualization for:

- Relative Error vs Input
- Error Growth Analysis
- Stable vs Unstable Comparison
- Absolute Error Difference

---

## 🛠 Auto-Fix Suggestions

Suggests numerically stable alternatives for known unstable expressions.

### Example

Unstable expression:

```c
sqrt(x*x + 1) - x
```

# Tech Stack

Python
Streamlit
Matplotlib
Pandas
Decimal Module
Regular Expressions
C Language (for testing)

# Supported Numerical Instability Types

| Instability Type           | Supported |
| -------------------------- | --------- |
| Catastrophic Cancellation  | ✅        |
| Division by Small Number   | ✅        |
| Loss of Significance       | ✅        |
| Trigonometric Cancellation | ✅        |
| Logarithmic Instability    | ✅        |
| Overflow Detection         | ✅        |
| Underflow Detection        | ✅        |
| Mixed Expressions          | ✅        |

# 🚀 How to Run

## Install Dependencies

```bash
pip install -r requirements.txt
```

## Run Application

```bash
streamlit run app.py
```

# ⭐ Support

If you found this project useful, consider giving it a star ⭐
