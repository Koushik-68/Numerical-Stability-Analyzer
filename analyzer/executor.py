import subprocess

def compile_code(source_file):
    exe_file = "instrumented_code/output.exe"

    compile_cmd = ["gcc", source_file, "-o", exe_file]

    subprocess.run(compile_cmd, check=True)
    print("[✓] Compilation Successful")

    return exe_file


def run_code(exe_file):
    result = subprocess.run(exe_file, capture_output=True, text=True)
    
    print("\n[Program Output]")
    print(result.stdout)

    return result.stdout