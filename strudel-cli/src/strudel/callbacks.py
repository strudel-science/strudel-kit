import typer


def name_callback(value: str):
    """
    Ensure app and taskflow names are good react module names
    """

    if value and not value[0].isalpha():
        raise typer.BadParameter("App names must start with a letter")
    elif any(char in value for char in [" ", "/", "\\", ">", "<", "\"", "|", "?", "*", ":"]):
        raise typer.BadParameter("Could not create your app because there's a special character in your app name. For your app name, it's best to use only letters, hyphens, and underscores.")
    return value


def version_callback(value: bool):
    if value:
        print(f"strudel-cli {__version__}")
        raise typer.Exit()