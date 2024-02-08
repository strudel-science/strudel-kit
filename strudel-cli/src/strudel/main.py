import typer
import logging
import subprocess
import os
import traceback
from typing import Optional
from typing_extensions import Annotated
from .utils import (
    json_to_yaml,
    name_callback,
    version_callback,
    clear_cookiecutter_cache,
)
from enum import Enum
from rich import print
from rich.padding import Padding
from rich.logging import RichHandler
from rich.console import Console

app = typer.Typer(no_args_is_help=True)

logging.basicConfig(
    level=logging.NOTSET, format="%(message)s", datefmt="[%X]", handlers=[RichHandler()]
)
_log = logging.getLogger(__name__)
_console = Console()


def _set_verbosity(vb):
    if vb > 1:
        _log.setLevel(logging.DEBUG)
    elif vb > 0:
        _log.setLevel(logging.INFO)
    else:
        _log.setLevel(logging.WARN)


def _fatal_error(e):
    _log.error(f"creating app: {e}")
    _console.print_exception()

def _clear_cache(action):
    try:
        clear_cookiecutter_cache()
    except Exception as e:
        _log.warning(f"could not clear cookiecutter cache: {e}")
        print(f"[white]continuing to {action}...")


@app.command()
def create_app(
    name: Annotated[
        str,
        typer.Argument(
            callback=name_callback,
            help="The name of your app. It's best to use only letters, hyphens, and underscores.",
        ),
    ],
    config: Annotated[
        str,
        typer.Option(
            "--config",
            "-c",
            help="JSON file with configuration values to use to build your app.",
        ),
    ] = "",
    output_dir: Annotated[
        str,
        typer.Option(
            "--output-dir",
            "-o",
            help="Directory where the app should be created. Defaults to current directory.",
        ),
    ] = "",
    branch: Annotated[
        str,
        typer.Option(
            "--branch",
            "-b",
            help="Branch in strudel-kit repo that should be used for the templates. This option is primarily for use by contributors.",
        ),
    ] = "main",
    verbose: Annotated[int, typer.Option("--verbose", "-v", count=True)] = 0,
):
    """
    Create a base strudel web application.
    """
    _set_verbosity(verbose)
    proc = None
    try:
        print("[white]Creating your app...")
        _clear_cache("create your app")
        args = [
            "cookiecutter",
            "gh:strudel-science/strudel-kit",
            "--checkout",
            branch,
            "--directory",
            "strudel-cookiecutter/base",
            "--output-dir",
            output_dir,
            f"projectName={name}",
        ]

        if config:
            # Convert the user's json config into a yaml config
            # so that it is compatible with cookiecutter and follows its specs.
            temp_yaml_config = "temp_strudel_config.yaml"
            json_to_yaml(config, temp_yaml_config)
            # Add in extra args so the config file is used
            args[1:1] = ["--config-file", temp_yaml_config]
            args.insert(-1, "--no-input")

        proc = subprocess.run(args, check=True)
    except subprocess.CalledProcessError as e:
        print(
            "[bold red]Cookiecutter execution failed.[/bold red]"
            "Your app has not been created."
        )
        raise typer.Abort()
    except Exception as e:
        print(
            "[bold red]Encountered a problem.[/bold red] Your app has not been created."
        )
        _fatal_error(e)
        raise typer.Abort()
    else:
        print(
            Padding("[bold green]Successfully created your strudel app!", (1, 0, 0, 0))
        )
        print(
            f"[white]Your app was built in {os.path.abspath(os.path.join(output_dir, name))}"
        )
        print(Padding("First, get your app up and running:", (1, 0)))
        print(
            Padding(
                f"[white]$ cd {os.path.relpath(os.path.join(output_dir, name))}",
                (0, 0, 0, 4),
            )
        )
        print(Padding("$ npm install", (0, 0, 0, 4)))
        print(Padding("$ npm start", (0, 0, 0, 4)))
        print(Padding("Then start adding task flows to your app:", (1, 0)))
        print(
            Padding(
                "$ strudel add-taskflow my-first-taskflow --template explore-data",
                (0, 0, 0, 4),
            )
        )
        print(
            Padding(
                "$ strudel add-taskflow my-second-taskflow --template run-computation",
                (0, 0, 0, 4),
            )
        )
        print(
            Padding(
                "Browse all the task flows: https://strudel.science/design-system/task-flows/overview",
                (1, 0, 0, 0),
            )
        )
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
    name: Annotated[
        str,
        typer.Argument(
            callback=name_callback,
            help="The name of your task flow module. It's best to use only letters, hyphens, and underscores.",
        ),
    ],
    template: Annotated[
        TaskFlow,
        typer.Option(
            "--template",
            "-t",
            help="Name of the strudel task flow template to use as the basis for your task flow.",
        ),
    ],
    config: Annotated[
        str,
        typer.Option(
            "--config",
            "-c",
            help="JSON file with configuration values to use to build your task flow.",
        ),
    ] = "",
    output_dir: Annotated[
        str,
        typer.Option(
            "--output-dir",
            "-o",
            help="Directory where the task flow module should be created.",
        ),
    ] = "src/app",
    branch: Annotated[
        str,
        typer.Option(
            "--branch",
            "-b",
            help="Branch in strudel-kit repo that should be used for the templates. This option is primarily for use by contributors.",
        ),
    ] = "main",
):
    """
    Add a new task flow section to an existing strudel web application.
    """
    try:
        print("[white]Adding a Task Flow to your app...")
        _clear_cache("add a Task Flow")
        args = [
            "cookiecutter",
            "gh:strudel-science/strudel-kit",
            "--checkout",
            branch,
            "--directory",
            f"strudel-cookiecutter/{template.value}",
            "--output-dir",
            output_dir,
            f"taskflowName={name}",
        ]

        if config:
            # Convert the user's json config into a yaml config
            # so that it is compatible with cookiecutter and follows its specs.
            temp_yaml_config = "temp_strudel_config.yaml"
            json_to_yaml(config, temp_yaml_config)
            # Add in extra args so the config file is used
            args[1:1] = ["--config-file", temp_yaml_config]
            args.insert(-1, "--no-input")

        subprocess.run(args, check=True)
    except subprocess.CalledProcessError as e:
        print(
            "[bold red]Cookiecutter execution failed.[/bold red]"
            "Your Task Flow has not been created."
        )
        raise typer.Abort()
    except Exception as e:
        print(
            "[bold red]Encountered a problem.[/bold red]. "
            "Your Task Flow has not been created."
        )
        print(str(e))
        raise typer.Abort()
    else:
        print(
            Padding(
                "[bold green]Successfully added a task flow to your strudel app!",
                (1, 0, 0, 0),
            )
        )
        print(
            f"[white]Your new task flow was built in {os.path.abspath(os.path.join(output_dir, name))}"
        )
        print(
            Padding(
                "Browse more task flows: https://strudel.science/design-system/task-flows/overview",
                (1, 0, 0, 0),
            )
        )
        print("Onwards!")
    finally:
        if config:
            os.remove(temp_yaml_config)


@app.callback()
def main(
    version: Annotated[
        Optional[bool], typer.Option("--version", callback=version_callback)
    ] = None
):
    """
    Handle options for running strudel without any commands.
    The --help option is not here because it is already implemented by default.
    """
    pass


if __name__ == "__main__":
    app()
