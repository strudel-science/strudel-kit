import typer
import subprocess

app = typer.Typer()


@app.command()
def create_app():
  print("Creating your app...")
  subprocess.run([
    "cookiecutter", 
    "gh:strudel-science/strudel-kit", 
    "--checkout", 
    "feature/cli",
    "--directory", 
    "strudel-cookiecutter/base"
  ])


@app.command()
def add_taskflow(name: str, output_dir: str = "src/app"):
  print("Adding task flow to your app...")
  subprocess.run([
    "cookiecutter", 
    "gh:strudel-science/strudel-kit", 
    "--checkout", 
    "feature/cli",
    "--directory", 
    f"strudel-cookiecutter/{name}",
    "--output-dir",
    output_dir
  ])


if __name__ == "__main__":
  app()