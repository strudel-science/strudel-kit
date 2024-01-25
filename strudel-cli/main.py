import typer
import subprocess
from typing_extensions import Annotated
from utils import parse_json_to_args, name_callback
from enum import Enum

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
    *(['--no-input'] if len(extra_args) > 0 else []),
    f"projectSlug={name}"
  ] + extra_args)


class TaskFlow(str, Enum):
  """
  Possible values for task flow names to pass
  to the --template cli option.
  """
  compare_data = "compare-data"
  contribute_data = "contribute-data"
  explore_data = "explore-data"
  monitor_activities = "monitor-activities"
  run_computation = "run-computation"
  search_data_repositories = "search-data-repositories"


@app.command()
def add_taskflow(
  name: str,
  template: Annotated[TaskFlow, typer.Option("--template", "-t")],
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
    f"strudel-cookiecutter/{template.value}",
    "--output-dir",
    output_dir,
    *(['--no-input'] if len(extra_args) > 0 else []),
    f"taskflowSlug={name}"
  ] + extra_args)


if __name__ == "__main__":
  app()