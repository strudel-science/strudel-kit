import typer
import json
from .utils import snake_to_camel_case

defaults = {
    "create-app": {
        "name": "",
        "output_dir": "",
        "branch": "main",
        "config": "",
        "verbose": 0
    },
    "add-taskflow": {
        "name": "",
        "template": "",
        "output_dir": "src/app",
        "branch": "main",
        "config": "",
        "verbose": 0
    }
}


def name_callback(value: str):
    """
    Ensure app and taskflow names are good react module names
    """
    if not value:
        raise typer.BadParameter("Your app name is blank. Please specify a name for your app.")
    elif value and not value[0].isalpha():
        raise typer.BadParameter("App names must start with a letter")
    elif any(char in value for char in [" ", "/", "\\", ">", "<", "\"", "|", "?", "*", ":"]):
        raise typer.BadParameter("Could not create your app because there's a special character in your app name. For your app name, it's best to use only letters, hyphens, and underscores.")
    return value


def version_callback(value: bool):
    if value:
        print(f"strudel-cli {__version__}")
        raise typer.Exit()


def config_callback(ctx: typer.Context, param: typer.CallbackParam, value: str):
    """
    Update the default command-line arguments and options based on values from
    the config file passed in the --config option.
    """
    if value:
        typer.echo(f"Loading config file: {value}")
        try: 
            with open(value) as config_file:
                config_json = json.load(config_file)

            # Look for command-line options in the config file
            defaults_from_config = {}

            for key in defaults[ctx.command.name]:
                # The config file uses camelCase so convert key before checking
                key_in_camel_case = snake_to_camel_case(key)
                if key_in_camel_case in config_json:
                    defaults_from_config[key] = config_json[key_in_camel_case]
                # Support snake_case in config too for convenience
                elif key in config_json:
                    defaults_from_config[key] = config_json[key]

            ctx.default_map = defaults[ctx.command.name]
            ctx.default_map.update(defaults_from_config)
            print(ctx.default_map)
        except Exception as ex:
            raise typer.BadParameter(str(ex))
    return value