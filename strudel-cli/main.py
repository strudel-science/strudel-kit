import typer
import subprocess

app = typer.Typer()


@app.command()
def create_app():
  print("Creating your app...")
  subprocess.run(["cookiecutter", "../strudel-cookiecutter/base", "--output-dir", "../strudel-cookiecutter/output"])


@app.command()
def add_taskflow(name: str):
  print("Adding task flow to your app...")
  subprocess.run(["cookiecutter", f"../strudel-cookiecutter/{name}", "--output-dir", "../strudel-cookiecutter/output/my_science_app/src/app"])


if __name__ == "__main__":
  app()