import typer
import subprocess
from typing_extensions import Annotated
from utils import parse_json_to_args, name_callback

app = typer.Typer()


@app.command()
def create_app(
  name: Annotated[str, typer.Argument(callback=name_callback)],
  config: Annotated[str, typer.Option("--config", "-c")] = "",
  output_dir: Annotated[str, typer.Option("--output_dir", "-o")] = "",
  branch: Annotated[str, typer.Option("--branch", "-b")] = "main"
):
  """
  Create a base strudel web application.
  """

  print("Creating your app...")

  extra_args = parse_json_to_args(config)
  
  subprocess.run([
    "cookiecutter", 
    "gh:strudel-science/strudel-kit",
    "--checkout", 
    branch,
    "--directory", 
    "strudel-cookiecutter/base",
    "--output-dir",
    output_dir,
    *(['--no-input'] if len(extra_args) > 0 else [])
  ] + extra_args)


@app.command()
def add_taskflow(
  name: str,
  template: Annotated[str, typer.Option("--template", "-t")],
  config: Annotated[str, typer.Option("--config", "-c")] = "",
  output_dir: Annotated[str, typer.Option("--output_dir", "-o")] = "src/app",
  branch: Annotated[str, typer.Option("--branch", "-b")] = "main"
):
  """
  Add a new task flow section to an existing strudel web application.
  """

  print("Adding task flow to your app...")
  
  extra_args = parse_json_to_args(config)

  subprocess.run([
    "cookiecutter", 
    "gh:strudel-science/strudel-kit", 
    "--checkout", 
    branch,
    "--directory", 
    f"strudel-cookiecutter/{name}",
    "--output-dir",
    output_dir,
    *(['--no-input'] if len(extra_args) > 0 else []),
  ] + extra_args)


if __name__ == "__main__":
  app()