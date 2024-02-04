import typer
import subprocess
from typing_extensions import Annotated
from utils import parse_json_to_args, name_callback
from enum import Enum

app = typer.Typer()


@app.command()
def create_app(
  name: Annotated[str, typer.Argument(callback=name_callback, help="The name of your app. It's best to use only letters, hyphens, and underscores.")],
  config: Annotated[str, typer.Option("--config", "-c", help="JSON file with configuration values to use to build your app.")] = "",
  output_dir: Annotated[str, typer.Option("--output_dir", "-o", help="Directory where the app should be created. Defaults to current directory.")] = "",
  branch: Annotated[str, typer.Option("--branch", "-b", help="Branch in strudel-kit repo that should be used for the templates. This option is primarily for use by contributors.")] = "main"
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
  name: Annotated[str, typer.Argument(callback=name_callback, help="The name of your task flow module. It's best to use only letters, hyphens, and underscores.")],
  template: Annotated[TaskFlow, typer.Option("--template", "-t", help="Name of the strudel task flow template to use as the basis for your task flow.")],
  config: Annotated[str, typer.Option("--config", "-c", help="JSON file with configuration values to use to build your task flow.")] = "",
  output_dir: Annotated[str, typer.Option("--output_dir", "-o", help="Directory where the task flow module should be created.")] = "src/app",
  branch: Annotated[str, typer.Option("--branch", "-b", help="Branch in strudel-kit repo that should be used for the templates. This option is primarily for use by contributors.")] = "main"
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