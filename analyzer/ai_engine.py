import os
import re
import sys
from openai import OpenAI

def load_local_env():
    """
    Manually parses a local .env file in the root project directory 
    and adds variables to os.environ safely.
    """
    env_path = ".env"
    print(f"[DEBUG AI] Looking for .env file at path: {os.path.abspath(env_path)}")
    
    if os.path.exists(env_path):
        print("[DEBUG AI] Found .env file! Parsing contents...")
        with open(env_path, "r") as f:
            for line_idx, line in enumerate(f, 1):
                line = line.strip()
                if not line or line.startswith("#"):
                    continue
                if "=" in line:
                    key, value = line.split("=", 1)
                    key = key.strip()
                    value = value.strip().strip('"').strip("'")
                    os.environ[key] = value
                    hidden_val = value[:6] + "..." + value[-4:] if len(value) > 10 else "SHORT_VAL"
                    print(f"  └─ Line {line_idx}: Loaded environment variable '{key}' = {hidden_val}")
    else:
        print(f"[⚠️ WARNING AI] No .env file discovered at {os.path.abspath(env_path)}.")

def get_grok_client():
    # Force load local configuration entries
    load_local_env()
    
    api_key = os.environ.get("XAI_API_KEY")
    print(f"[DEBUG AI] Retrieving 'XAI_API_KEY' from os.environ: {'FOUND' if api_key else 'NOT FOUND'}")
    
    if not api_key:
        print("[❌ ERROR AI] Missing API Key footprint.")
        return None
        
    print("[DEBUG AI] Routing pipeline configuration to official Groq API gateway endpoints...")
    return OpenAI(
        api_key=api_key,
        base_url="https://api.groq.com/openai/v1",  # FIXED: Pointing directly to Groq's API engine
    )

def ai_suggest_and_fix(c_code):
    print("\n" + "="*60)
    print("[🚀 AI PIPELINE TRIGGERED] Starting ai_suggest_and_fix...")
    print("="*60)
    
    try:
        client = get_grok_client()
        if not client:
            err_msg = "Configuration Error: API Key missing from local environment layout."
            return {"fixed_code": c_code, "explanation": err_msg}

        prompt = """
You are an expert systems programmer and numerical analysis specialist.
Analyze the following C code for floating-point vulnerabilities (catastrophic cancellation, loss of significance, overflow, underflow, division by zero).

Provide two things:
1. The completely corrected, stable C code. Maintain the exact function names and signatures. CRITICAL: You must explicitly include <float.h> at the top of the code if you use macros like DBL_EPSILON, DBL_MAX, or DBL_MIN.
2. An academic explanation of why the changes improve numerical stability.

Your response MUST follow this exact format:
---FIXED_CODE---
[Paste only the complete, updated C code here]
---EXPLANATION---
### 🔍 Pointwise Vulnerability & Patch Report

* **1. Catastrophic Cancellation:**
  * **Vulnerability:** Subtracting nearly equal numbers causes the most significant digits to cancel out, leaving behind low-precision floating-point noise.
  * **Mitigation:** Implemented relative margin bounds checking using machine epsilon (`DBL_EPSILON`) to safely truncate computational noise down to a stable `0.0`.

* **2. Division by Small Numbers:**
  * **Vulnerability:** Denominators drifting close to zero trigger extreme values approaching infinity, destabilizing execution paths.
  * **Mitigation:** Injected an assertion barrier that safely intercepts near-zero denominators and maps them explicitly to `INFINITY` before processing.

* **3. Loss of Significance:**
  * **Vulnerability:** Large values in operations like `sqrt(x*x + 1) - x` lose precision due to machine limitations handling massive squares.
  * **Mitigation:** Refactored the algebraic expression dynamically into its conjugate form `1.0 / (sqrt(x*x + 1) + x)` to convert unstable subtraction into stable addition.

* **4. Trigonometric Phase Erasure:**
  * **Vulnerability:** Very small variations in compressed sine phases collapse to a flat zero delta.
  * **Mitigation:** Re-engineered using exact phase scaling products to compute trigonometric deltas reliably without subtraction loops.

* **5. Logarithmic Singularity Drift:**
  * **Vulnerability:** Subtracting overlapping large logs kills the fractional precision.
  * **Mitigation:** Applied logarithmic division rules and bound the evaluation to the robust standard `log1p()` API call.

* **6. Floating-Point Overflow:**
  * **Vulnerability:** Unchecked scaling metrics passed to `exp(x)` crash registers when exceeding hardware boundaries.
  * **Mitigation:** Built predictive guard-rail conditions to lock bounds cleanly to `DBL_MAX` before overflow states hit the micro-architecture.

* **7. Floating-Point Underflow:**
  * **Vulnerability:** Highly negative inputs force subnormal precision states that collapse to unpredictable parameters.
  * **Mitigation:** Injected bounding limits to flush subnormal register traces cleanly down to an exact `0.0`.
"""

        # FIXED: Using Groq's flagship high-intelligence reasoning model string
        # FIXED: Updated to Groq's current active production flagship model string
        target_model = "llama-3.3-70b-versatile"
        print(f"[DEBUG AI] Dispatching network request payload to Groq platform engine ('{target_model}')...")
        
        response = client.chat.completions.create(
            model=target_model,
            messages=[
                {"role": "system", "content": "You are a precise tool that strictly outputs requested formats without conversational filler. Do not wrap code inside markdown ticks."},
                {"role": "user", "content": f"{prompt}\n\nCode to analyze:\n{c_code}"}
            ],
            temperature=0.1
        )
        
        raw_text = response.choices[0].message.content
        print("\n[🛰️ RAW AI RESPONSE RECEIVED SUCCESSFULLY]")
        print("-" * 50)
        print(raw_text)
        print("-" * 50)
        
        # Parse boundaries via Regex segment flags
        code_part = re.search(r'---FIXED_CODE---\s*([\s\S]*?)\s*---EXPLANATION---', raw_text)
        expl_part = re.search(r'---EXPLANATION---\s*([\s\S]*)$', raw_text)
        
        if code_part:
            print("[DEBUG AI] Structural regex match successful. Extracting segments...")
            fixed_code = code_part.group(1).strip()
            explanation = expl_part.group(1).strip() if expl_part else "Patched successfully."
        else:
            print("[⚠️ WARNING AI] Standard parsing anchors missing. Attempting structural string fallback parsing...")
            if "int main" in raw_text:
                fixed_code = raw_text
                explanation = "Applied optimization pass without explicit format anchors."
            else:
                print("[❌ ERROR AI] Response formatting unexpected.")
                fixed_code = c_code
                explanation = f"Parsing Error: Could not locate text boundaries."
        
        fixed_code = re.sub(r'^```c\n|^```|```$', '', fixed_code, flags=re.MULTILINE).strip()
        
        print("[✓ SUCCESS AI] Pipeline completed processing sequence cleanly.")
        print("="*60 + "\n")
        return {"fixed_code": fixed_code, "explanation": explanation}

    except Exception as e:
        print("\n" + "!"*60)
        print(f"[💥 CRITICAL API EXCEPTION CAUGHT]")
        print(f"  Exception Type: {type(e).__name__}")
        print(f"  Error Message:  {str(e)}")
        print("!"*60 + "\n")
        return {"fixed_code": c_code, "explanation": f"API Connection Exception: {str(e)}"}