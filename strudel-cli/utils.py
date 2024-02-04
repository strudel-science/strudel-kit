import json
import typer


def parse_json_to_args(filename: str):
  """
  A JSON config file can be passed to the command 
  to override the default cookiecutter.json and surpass
  the cookiecutter command-line prompts. This file is parsed
  and added as extra_context args to cookiecutter.
  """

  args = []
  if filename:
    f = open(filename)
    data = json.load(f)
    for d in data:
      args.append(f"{d}={data[d]}")
    f.close()
  return args


def name_callback(value: str):
  """
  Ensure app and taskflow names are good react module names
  """
  
  if value and not value[0].isalpha():
    raise typer.BadParameter("App names must start with a letter")
  elif any(char in value for char in [" ", "/", "\\", ">", "<", "\"", "|", "?", "*", ":"]):
    raise typer.BadParameter("Could not create your app because there's a special character in your app name. For your app name, it's best to use only letters, hyphens, and underscores.")
  return value