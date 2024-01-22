import json


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