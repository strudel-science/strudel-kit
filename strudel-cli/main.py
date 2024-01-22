import typer
import subprocess
import json

app = typer.Typer()


@app.command()
def create_app(config: str = ""):
  """
  Create a base strudel web application.
  """

  print("Creating your app...")

  # A JSON config file can be passed to the command
  # to override the default cookiecutter.json and surpass
  # the cookiecutter command-line prompts. This file is parsed
  # and added as extra_context args to cookiecutter.
  extra_args = []
  if config:
    f = open(config)
    data = json.load(f)
    for d in data:
      extra_args.append(f"{d}={data[d]}")
    f.close()

  subprocess.run([
    "cookiecutter", 
    "gh:strudel-science/strudel-kit",
    "--checkout", 
    "feature/cli",
    "--directory", 
    "strudel-cookiecutter/base",
    "--no-input",
  ] + extra_args)


@app.command()
def add_taskflow(name: str, output_dir: str = "src/app"):
  """
  Add a new task flow section to an existing strudel web application.
  """

  print("Adding task flow to your app...")
  subprocess.run([
    "cookiecutter", 
    "gh:strudel-science/strudel-kit", 
    "--checkout", 
    "feature/cli",
    "--directory", 
    f"strudel-cookiecutter/{name}",
    "--output-dir",
    output_dir
  ])


if __name__ == "__main__":
  app()