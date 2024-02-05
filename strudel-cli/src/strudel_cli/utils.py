import json
import typer
import os
import shutil
from . import __version__


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


def version_callback(value: bool):
  if value:
    print(f"strudel-cli version {__version__}")
    raise typer.Exit()


def clear_cookiecutter_cache():
  """
  Remove the cached cookiecutter template for strudel-kit if it exists.
  This ensures that the latest template is pulled from github any time a command is run.
  This is necessary to bypass the cookiecutter "Is it okay to delete and re-download it?" step.
  """
  home = os.path.expanduser("~")
  strudel_template_cache = os.path.join(home, ".cookiecutters/strudel-kit")
  if os.path.exists(strudel_template_cache) and os.path.isdir(strudel_template_cache):
    shutil.rmtree(strudel_template_cache)