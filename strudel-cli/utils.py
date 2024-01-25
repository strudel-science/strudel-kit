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
  Ensure app and taskflow names are valid directory names
  """
  
  if value and not value[0].isalpha():
    raise typer.BadParameter("App names must start with a letter")
  elif any(char in value for char in [" ", "/", "\\", ">", "<", "\"", "|", "?", "*", ":"]):
    raise typer.BadParameter("There's an invalid character in your app name. Make sure your app name is a valid directory name.")
  return value