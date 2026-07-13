import re

def instrument_code(input_path, output_path):
    with open(input_path, 'r') as f:
        code = f.readlines()

    instrumented = []

    for line in code:
        instrumented.append(line)

        # Track assignments like: double x = ...
        assign_match = re.search(r'(double|float)\s+(\w+)\s*=\s*(.*);', line)
        if assign_match:
            var_name = assign_match.group(2)
            instrumented.append(f'printf("TRACE:{var_name}=%lf\\n", {var_name});\n')

        # Track return
        if "return" in line:
            match = re.search(r'return (.*);', line)
            if match:
                expr = match.group(1)
                instrumented.append(f'printf("DEBUG:%lf\\n", {expr});\n')

    with open(output_path, 'w') as f:
        f.writelines(instrumented)

    print("[OK] Code Instrumented with TRACE")