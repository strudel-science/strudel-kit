import typer
import subprocess
from typing_extensions import Annotated
from utils import parse_json_to_args

app = typer.Typer()


@app.command()
def create_app(
  config: Annotated[str, typer.Option("--config", "-c")] = "",
  output_dir: Annotated[str, typer.Option("--output_dir", "-o")] = ""
):
  """
  Create a base strudel web application.
  """

  print("Creating your app...")

  extra_args = parse_json_to_args(config)
  
  subprocess.run([
    "cookiecutter", 
    "gh:strudel-science/strudel-kit",
    "--directory", 
    "strudel-cookiecutter/base",
    "--output-dir",
    output_dir,
    "--no-input",
  ] + extra_args)


@app.command()
def add_taskflow(
  name: str, 
  config: Annotated[str, typer.Option("--config", "-c")] = "",
  output_dir: Annotated[str, typer.Option("--output_dir", "-o")] = "src/app", 
):
  """
  Add a new task flow section to an existing strudel web application.
  """

  print("Adding task flow to your app...")
  
  extra_args = parse_json_to_args(config)

  subprocess.run([
    "cookiecutter", 
    "gh:strudel-science/strudel-kit", 
    "--directory", 
    f"strudel-cookiecutter/{name}",
    "--output-dir",
    output_dir,
    "--no-input",
  ] + extra_args)


if __name__ == "__main__":
  app()