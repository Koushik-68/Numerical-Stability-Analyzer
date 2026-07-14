# Comprehensive Project Guide: Numerical Stability Analyzer

---

## 1. Executive Summary & Core Concepts

Standard computers represent numbers in binary using the **IEEE-754 standard for floating-point arithmetic**. While this format is highly efficient and maps directly to CPU hardware registers, it has a physical limitation: it uses a finite number of bits. 
- A standard `float` (32-bit) allocates only **23 bits** to represent the mantissa (fractional part).
- A standard `double` (64-bit) allocates **52 bits** to the mantissa.

Because of this finite resolution, real numbers must be rounded to the nearest representable floating-point number. While the rounding error on a single operation is tiny (roughly $2.22 \times 10^{-16}$ for doubles, known as **machine epsilon**), complex calculations or specific arithmetic combinations can cause these errors to amplify exponentially.

The **Numerical Stability Analyzer** is a diagnostic tool that scans C programs statically and dynamically, compiles and executes code inside sandboxes, measures floating-point drift against a 60-decimal-place variable-precision reference engine, and suggests optimized, stable rewrites.

---

### ⚠️ Floating-Point Vulnerabilities Explained

1. **Catastrophic Cancellation:**
   - **What happens:** When you subtract two nearly equal numbers, the most significant bits cancel out, leaving only the rounded fractional noise.
   - **Example:** $(1.000000000000001 - 1.0) \times 10^{15}$. In double precision, the result might become highly inaccurate because the trailing bits represent garbage noise.
   - **Remediation:** Introduce an epsilon guardrail checking if the difference is below a threshold relative to the base values, resolving safely to `0.0`.

2. **Loss of Significance:**
   - **What happens:** Adding a very small number to a very large number causes the smaller number's bits to fall completely out of the mantissa window.
   - **Example:** $\sqrt{x^2 + 1} - x$ for a very large $x$ (e.g., $10^9$). Since $x^2 \gg 1$, $\sqrt{x^2 + 1} \approx x$. Subtraction cancels the leading terms, collapsing the result to `0.0`.
   - **Remediation:** Rewrite algebraically using conjugate multiplication: $\frac{1}{\sqrt{x^2 + 1} + x}$. This converts the subtraction into a safe addition where bits are preserved.

3. **Division by Near-Zero / Small Numbers:**
   - **What happens:** If a denominator approaches zero due to mathematical cancellation or subnormal scales, standard division spikes towards positive or negative infinity, or crashes the program.
   - **Remediation:** Inject assertion check thresholds (using `DBL_MIN` or `DBL_EPSILON` guards) that intercept values and clamp the output safely to `INFINITY`.

4. **Trigonometric Phase Erasure:**
   - **What happens:** Evaluating $\sin(x) - \sin(x + \delta)$ for large angles $x$ compresses waves, making the two inputs indistinguishable to standard float registers and erasing wave phase information.
   - **Remediation:** Re-engineer using trigonometric sum-to-product identities: $-2 \sin(\delta / 2) \cos(x + \delta / 2)$.

5. **Logarithmic Singularity Drift:**
   - **What happens:** Subtracting natural logarithms of closely matching inputs: $\log(x + \delta) - \log(x)$ loses fractional precision for large values of $x$.
   - **Remediation:** Combine logs algebraically using $\log(\frac{x + \delta}{x}) = \log(1 + \frac{\delta}{x})$ and evaluate using the specialized hardware instruction `log1p(delta / x)`.

6. **Floating-Point Overflow & Underflow:**
   - **What happens:** Exceeding bounds saturates values to `inf` (overflow) or collapses subnormal numbers to absolute `0.0` (underflow).
   - **Remediation:** Clamp the inputs inside predictive bounds (e.g., limit $x$ in $\exp(x)$ to $709.78$ for double limits) to prevent registers from blowing up.

---

## 2. Overall Directory Structure

Here is how the project files are organized:

```
CD EL/                      <-- Project Root Directory
├── api_server.py           <-- Core Python Web Server (HTTP REST Endpoint Router)
├── app.py                  <-- Alternative Streamlit Dashboard application
├── main.py                 <-- CLI console tool for running numerical diagnostics
├── PROJECT_REPORT.md       <-- Diagnostic report for slides & research documentation
├── PROJECT_EXPLANATION.md  <-- This beginner-friendly project guide
│
├── analyzer/               <-- Backend Analyzer Engine
│   ├── ai_engine.py        <-- Groq Llama AI pipeline connector & token parser
│   ├── dynamic_analyzer.py <-- Defines standard equations & run references
│   ├── error_metrics.py    <-- Absolute & relative error math calculations
│   ├── executor.py         <-- Subprocess compiler runner (invokes GCC)
│   ├── fixer.py            <-- Local deterministic algebraic replacement rules
│   ├── instrumentor.py     <-- Rewrites C code to inject printing TRACE lines
│   ├── runtime_parser.py   <-- Parses stdout outputs, maps errors, rates safety
│   └── static_analyzer.py  <-- Regex scanner for code pattern signatures
│
└── frontend/               <-- React Frontend Workspace
    ├── package.json        <-- Vite and React dependency definitions
    ├── vite.config.js      <-- Frontend server proxy setups mapping /api/ -> 8000
    └── src/
        ├── main.jsx        <-- Mounts the React virtual DOM
        ├── App.jsx         <-- Entry node rendering the layout shell
        ├── styles.css      <-- Dark mode glassmorphic styling sheet
        ├── components/
        │   └── Sidebar.jsx <-- App sidebar navigation and status scores
        └── dashboard/
            ├── Dashboard.jsx        <-- Central app shell & state workspace
            ├── HeatmapView.jsx      <-- 2D error canvas plotter (X vs Y variables)
            ├── AstVisualizerView.jsx <-- Visualizes original vs rewritten compiler ASTs
            ├── ComparisonView.jsx   <-- Side-by-side git diff layout of code fixes
            ├── PlaygroundView.jsx   <-- Dynamic equation compiler & JS AST scanner
            └── VisualizationView.jsx<-- Line chart plotting error growth curves
```

---

## 3. File-by-File Details

### 3.1 Backend Modules (`analyzer/`)

#### 📂 [static_analyzer.py](file:///c:/Users/Admin/Desktop/CD%20EL/analyzer/static_analyzer.py)
- **Role:** Statically parses code text using Regular Expressions.
- **Inside Operations:** Scans code for indicators of instability, such as subtracting variables `\w+\s*-\s*\w+`, divisions with complex denominators `/\s*\(.*-.*\)`, and keywords like `sqrt`. It does not execute the code, making it extremely fast.

#### 📂 [instrumentor.py](file:///c:/Users/Admin/Desktop/CD%20EL/analyzer/instrumentor.py)
- **Role:** Rewrites C code so it reports variable values as it runs.
- **Inside Operations:** Scans the code line-by-line. When it matches variable declarations (e.g., `double x = ...`) or `return` statements, it injects custom printing calls right after, printing variables formatted as `TRACE:var_name=value`.

#### 📂 [executor.py](file:///c:/Users/Admin/Desktop/CD%20EL/analyzer/executor.py)
- **Role:** Safely compiles and executes C binaries.
- **Inside Operations:** Spawns a background OS process to run the GCC compiler: `gcc source.c -o output.exe -lm`. It catches any syntax or compilation errors, executes the binary, and captures the console output string (stdout) for processing.

#### 📂 [error_metrics.py](file:///c:/Users/Admin/Desktop/CD%20EL/analyzer/error_metrics.py)
- **Role:** Measures precision loss mathematically.
- **Inside Operations:** Implements safety-guarded calculations for relative and absolute errors. It handles complex limits, such as matching infinity inputs to prevent division-by-zero errors.

#### 📂 [dynamic_analyzer.py](file:///c:/Users/Admin/Desktop/CD%20EL/analyzer/dynamic_analyzer.py)
- **Role:** Simulates mathematical reference behavior.
- **Inside Operations:** Contains baseline implementations of common equations. It uses Python's high-precision `decimal` library to compute reference values at ultra-high precision, establishing a baseline comparison.

#### 📂 [runtime_parser.py](file:///c:/Users/Admin/Desktop/CD%20EL/analyzer/runtime_parser.py)
- **Role:** Analyzes stdout logs and rates stability.
- **Inside Operations:** Parses C program output to extract results and traces. It evaluates errors against reference values, categorizing the execution path as `✅ Stable`, `⚠️ Risky`, or `❌ Unstable`.

#### 📂 [ai_engine.py](file:///c:/Users/Admin/Desktop/CD%20EL/analyzer/ai_engine.py)
- **Role:** Communicates with the external LLM to obtain recommendations.
- **Inside Operations:** Reads `.env` parameters, authenticates with the Groq API, and sends C code to `llama-3.3-70b-versatile`. It parses the returned JSON string containing corrected code and stability explanations.

#### 📂 [fixer.py](file:///c:/Users/Admin/Desktop/CD%20EL/analyzer/fixer.py)
- **Role:** Fallback solver using regex.
- **Inside Operations:** Uses deterministic find-and-replace rules to rewrite common unstable equations (such as square roots or logs) into stable equivalent math functions.

---

### 3.2 Frontend Views (`frontend/src/`)

#### 📂 [Sidebar.jsx](file:///c:/Users/Admin/Desktop/CD%20EL/frontend/src/components/Sidebar.jsx)
- **Role:** App navigation and metric badges.
- **Inside Operations:** Manages the main selection items (Analyzer, Visualization, Comparison, AST, Playground, Heatmap) and displays the count of static and dynamic findings.

#### 📂 [Dashboard.jsx](file:///c:/Users/Admin/Desktop/CD%20EL/frontend/src/dashboard/Dashboard.jsx)
- **Role:** App engine workspace.
- **Inside Operations:** Renders the active layout page, holds state variables, and handles network fetch queries to backend endpoints (`/api/analyze` and `/api/autofix`).

#### 📂 [HeatmapView.jsx](file:///c:/Users/Admin/Desktop/CD%20EL/frontend/src/dashboard/HeatmapView.jsx)
- **Role:** Renders the 2D precision maps.
- **Inside Operations:** Sweeps parameters $x$ and $y$ across user-defined range inputs (linear or logarithmic scales) at set resolutions. It draws coordinate cells on an HTML5 Canvas colored by error severity. It features a mouse-move listener to inspect values on hover.

#### 📂 [AstVisualizerView.jsx](file:///c:/Users/Admin/Desktop/CD%20EL/frontend/src/dashboard/AstVisualizerView.jsx)
- **Role:** Visualizes C AST changes.
- **Inside Operations:** Uses recursive SVG drawing to render hierarchical AST trees, demonstrating how vulnerable operators are restructured into stable expressions.

#### 📂 [PlaygroundView.jsx](file:///c:/Users/Admin/Desktop/CD%20EL/frontend/src/dashboard/PlaygroundView.jsx)
- **Role:** Live custom parser and sandbox.
- **Inside Operations:** Tokenizes standard mathematical strings, checks structures for division-by-zero or subtractive cancellation, compiles custom C functions in real time, and prints trace graphs.

#### 📂 [ComparisonView.jsx](file:///c:/Users/Admin/Desktop/CD%20EL/frontend/src/dashboard/ComparisonView.jsx)
- **Role:** Visualizes Git-style diffs.
- **Inside Operations:** Computes the Longest Common Subsequence (LCS) of lines between the original and remediated code, displaying them side-by-side with added/deleted highlights.

#### 📂 [VisualizationView.jsx](file:///c:/Users/Admin/Desktop/CD%20EL/frontend/src/dashboard/VisualizationView.jsx)
- **Role:** Plots error progression.
- **Inside Operations:** Graphs error curve progression across input magnitudes, displaying performance differences between the original and remediated formulas.

---

## 4. Key Workflows

### 🔄 Dynamic C Code Analysis Workflow
1. **Developer enters code:** The user pastes standard C code into the editor on the **Analyzer** tab.
2. **Click Run Analysis:** The frontend sends an HTTP POST request to `/api/analyze`.
3. **Static Scan:** The backend runs the regex pattern matches in `static_analyzer.py`.
4. **Code Instrumentation:** The backend injects variable tracking prints using `instrumentor.py`.
5. **Compilation Sandbox:** The backend writes the instrumented code to disk and compiles it using GCC via subprocess triggers (`executor.py`).
6. **Program Execution:** The compiled executable runs, and the backend captures its stdout stream.
7. **Reference Check:** The backend evaluates the math expressions at 60-decimal-place precision using Python's `mpmath` library.
8. **Precision Loss Rating:** Values are compared, relative errors are computed, and results are labeled (Stable, Risky, Unstable).
9. **UI Display:** The backend returns the results as JSON, updating the editor reports, charts, and metric status tags in the UI.

---

### 🔄 AI Code Remediation Workflow
1. **User clicks Auto-Fix:** The frontend sends a request to `/api/autofix`.
2. **Groq API Connection:** The backend sends the user's code and a system prompt to the Groq API, invoking the `llama-3.3-70b-versatile` model.
3. **Optimization Response:** The model evaluates the equations, constructs stable code, and writes a diagnostic explanation.
4. **LCS Diff Alignment:** The frontend receives the fixed code, runs a line-by-line diff matching check, and renders the side-by-side differences with colored highlights.

---

### 🔄 2D Numerical Sensitivity Heatmap Workflow
1. **Configure Grid parameters:** The user selects a math equation (e.g. `sin(x) - sin(x + y)`) and configures range bounds and scale steps for $x$ and $y$.
2. **Send Heatmap request:** The frontend submits parameters to `/api/heatmap`.
3. **Compile coordinate loop:** The backend generates a temporary C program containing nested loops over the coordinate ranges.
4. **Capture Grid execution:** The program prints execution traces for every coordinate point.
5. **Compute exact values:** In Python, the backend evaluates the same coordinates using high-precision `mpmath`.
6. **Draw Canvas Grid:** The relative error arrays are returned to the frontend, rendering colored cell pixels. Green represents perfect stability, while red highlights catastrophic precision loss.
