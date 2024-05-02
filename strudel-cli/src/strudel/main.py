import typer
import logging
import subprocess
import os
import traceback
import json
from typing import Optional
from typing_extensions import Annotated
from .callbacks import (
    defaults,
    name_callback,
    version_callback,
    config_callback
)
from .utils import (
    json_to_yaml,
    clear_cookiecutter_cache
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
    ] = defaults["create-app"]["name"],
    config: Annotated[
        str,
        typer.Option(
            "--config",
            "-c",
            help="JSON file with configuration values to use to build your app.",
            callback=config_callback,
            is_eager=True
        ),
    ] = defaults["create-app"]["config"],
    output_dir: Annotated[
        str,
        typer.Option(
            "--output-dir",
            "-o",
            help="Directory where the app should be created. Defaults to current directory.",
        ),
    ] = defaults["create-app"]["output_dir"],
    repo: Annotated[
        str,
        typer.Option(
            "--repo",
            "-r",
            help="Repository to pull templates from (in the form 'gh:ORG/REPO-NAME'). This should only be used by contributors testing on their own fork. In most all other cases, the default repo should be used.",
        ),
    ] = defaults["create-app"]["repo"],
    branch: Annotated[
        str,
        typer.Option(
            "--branch",
            "-b",
            help="Branch in strudel-kit repo that should be used for the templates. This option is primarily for use by contributors.",
        ),
    ] = defaults["create-app"]["branch"],
    verbose: Annotated[
        int, 
        typer.Option(
            "--verbose", 
            "-v", 
            count=True
        ),
    ] = defaults["create-app"]["verbose"],
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
            repo,
            "--checkout",
            branch,
            "--directory",
            "strudel-cookiecutter/base",
            "--output-dir",
            output_dir,
            f"name={name}",
            "--no-input"
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
    finally:
        if config:
            os.remove(temp_yaml_config)


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
    ] = defaults["add-taskflow"]["name"],
    template: Annotated[
        TaskFlow,
        typer.Option(
            "--template",
            "-t",
            help="Name of the strudel task flow template to use as the basis for your task flow.",
        ),
    ] = defaults["add-taskflow"]["template"],
    config: Annotated[
        str,
        typer.Option(
            "--config",
            "-c",
            help="JSON file with configuration values to use to build your task flow.",
            callback=config_callback,
            is_eager=True
        ),
    ] = defaults["add-taskflow"]["config"],
    output_dir: Annotated[
        str,
        typer.Option(
            "--output-dir",
            "-o",
            help="Directory where the task flow module should be created.",
        ),
    ] = defaults["add-taskflow"]["output_dir"],
    repo: Annotated[
        str,
        typer.Option(
            "--repo",
            "-r",
            help="Repository to pull templates from (in the form 'gh:ORG/REPO-NAME'). This should only be used by contributors testing on their own fork. In most all other cases, the default repo should be used.",
        ),
    ] = defaults["add-taskflow"]["repo"],
    branch: Annotated[
        str,
        typer.Option(
            "--branch",
            "-b",
            help="Branch in strudel-kit repo that should be used for the templates. This option is primarily for use by contributors.",
        ),
    ] = defaults["add-taskflow"]["branch"],
):
    """
    Add a new task flow section to an existing strudel web application.
    """
    try:
        print("[white]Adding a Task Flow to your app...")
        _clear_cache("add a Task Flow")

        args = [
            "cookiecutter",
            repo,
            "--checkout",
            branch,
            "--directory",
            f"strudel-cookiecutter/{template.value}",
            "--output-dir",
            output_dir,
            f"name={name}",
            "--no-input"
        ]
        config_output_dir = False
        if config:
            # Convert the user's json config into a yaml config
            # so that it is compatible with cookiecutter and follows its specs.
            temp_yaml_config = "temp_strudel_config.yaml"
            json_to_yaml(config, temp_yaml_config)
            # Add in extra args so the config file is used
            args[1:1] = ["--config-file", temp_yaml_config]
            args.insert(-1, "--no-input")
            # Get config output dir to check for existence
            with open(config) as config_file:
                config_json = json.load(config_file)
                if 'output_dir' in config_json:
                    config_output_dir = config_json['output_dir']

        final_output_dir = config_output_dir if config_output_dir else output_dir
        
        if not os.path.isdir(final_output_dir):
            raise ValueError(f"The output directory {final_output_dir} does not exist in your current working directory. Make sure you are executing add-taskflow from inside your app directory.")

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
        if config:
            try:
                with open(config) as config_file:
                    config_json = json.load(config_file)
                # If the task flow config has a definitions object
                # then copy the contents of that object into 
                # the definitions.json file in the generated task flow.
                # This is necessary because cookiecutter can't copy json verbatim into files.
                if "definitions" in config_json:
                    with open(os.path.join(output_dir, name, 'definitions.json'), "w", encoding="utf-8") as definitions_file:
                        json.dump(config_json['definitions'], definitions_file, ensure_ascii=False, indent=2)
            except Exception as e:
                print("Error copying definitions into json file")
                print(e)
            
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
        Optional[bool], typer.Option("--version", "-v", callback=version_callback)
    ] = None
):
    """
    Handle options for running strudel without any commands.
    The --help option is not here because it is already implemented by default.
    """
    pass


if __name__ == "__main__":
    app()
