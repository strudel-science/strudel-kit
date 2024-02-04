import typer
import subprocess
import os
import shutil
from os.path import expanduser
from typing_extensions import Annotated
from utils import parse_json_to_args, name_callback, clear_cookiecutter_cache
from enum import Enum
from rich import print
from rich.padding import Padding

app = typer.Typer()


@app.command()
def create_app(
  name: Annotated[str, typer.Argument(callback=name_callback, help="The name of your app. It's best to use only letters, hyphens, and underscores.")],
  config: Annotated[str, typer.Option("--config", "-c", help="JSON file with configuration values to use to build your app.")] = "",
  output_dir: Annotated[str, typer.Option("--output-dir", "-o", help="Directory where the app should be created. Defaults to current directory.")] = "",
  branch: Annotated[str, typer.Option("--branch", "-b", help="Branch in strudel-kit repo that should be used for the templates. This option is primarily for use by contributors.")] = "main"
):
  """
  Create a base strudel web application.
  """

  try:
    print("[white]Creating your app...")
    clear_cookiecutter_cache()
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
    ] + extra_args, check=True)
  except:
    print("[bold red]Encountered a problem.[/bold red] Your app has not been created.")
    raise typer.Abort()
  else:
    print(Padding("[bold green]Successfully created your strudel app!", (1, 0, 0, 0)))
    print(f"Your app was built in {os.path.abspath(os.path.join(output_dir, name))}")
    print(Padding("First, get your app up and running:", (1, 0)))
    print(Padding(f"[white]$ cd {os.path.relpath(os.path.join(output_dir, name))}", (0, 0, 0, 4)))
    print(Padding("$ npm install", (0, 0, 0, 4)))
    print(Padding("$ npm start", (0, 0, 0, 4)))
    print(Padding("Then start adding task flows to your app:", (1, 0)))
    print(Padding("$ strudel add-taskflow my-first-taskflow --template explore-data", (0, 0, 0, 4)))
    print(Padding("$ strudel add-taskflow my-second-taskflow --template run-computation", (0, 0, 0, 4)))
    print(Padding("Browse all the task flows: https://strudel.science/design-system/task-flows/overview", (1, 0, 0, 0)))
    print("Onwards!")



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
  output_dir: Annotated[str, typer.Option("--output-dir", "-o", help="Directory where the task flow module should be created.")] = "src/app",
  branch: Annotated[str, typer.Option("--branch", "-b", help="Branch in strudel-kit repo that should be used for the templates. This option is primarily for use by contributors.")] = "main"
):
  """
  Add a new task flow section to an existing strudel web application.
  """

  try:
    print("[white]Adding a task flow to your app...")
    clear_cookiecutter_cache()
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
    ] + extra_args, check=True)
  except:
    print("[bold red]Encountered a problem.[/bold red] Your app has not been created.")
    raise typer.Abort()
  else:
    print(Padding("[bold green]Successfully added a task flow to your strudel app!", (1, 0, 0, 0)))
    print(f"Your new task flow was built in {os.path.abspath(os.path.join(output_dir, name))}")
    print(Padding("Browse more task flows: https://strudel.science/design-system/task-flows/overview", (1, 0, 0, 0)))
    print("Onwards!")


if __name__ == "__main__":
  app()