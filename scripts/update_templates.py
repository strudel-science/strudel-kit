import shutil
import os
import json
import re
from pathlib import Path


# Run this script from the root of the strudel-kit repo
# to update the strudel-cookiecutter template files from
# the files in strudel-taskflows.

# Get all the taskflow directories that are in strudel-taskflows
taskflows = os.listdir('./strudel-taskflows/src/pages')
taskflows.remove('index.tsx')
taskflows.remove('playground')

# Update each taskflow cookiecutter template
for tf in taskflows:
  # Source of the updated template files
  taskflow_src = Path(f'./strudel-taskflows/src/pages/{tf}')
  # Root of the cookiecutter template
  cookiecutter_root = Path(f'./strudel-cookiecutter/{tf}')
  # Destination of the new template files
  cookiecutter_dest = Path(f'{cookiecutter_root}/{{@cookiecutter.name@}}')
  # Remove existing files inside the cookiecutter template
  if cookiecutter_dest.exists() and cookiecutter_dest.is_dir():
    shutil.rmtree(cookiecutter_dest)
  # Create a root cookiecutter directory for new taskflows
  elif not cookiecutter_root.exists():
    os.makedirs(cookiecutter_root)
    # Include a default cookiecutter.json for the new taskflow
    cookiecutterJson = {
      "name": "my-taskflow",
      "_jinja2_env_vars": {
        "variable_start_string": "{@", 
        "variable_end_string": "@}"
      }
    }
    with open(f'{cookiecutter_root}/cookiecutter.json', 'w') as file:
      json.dump(cookiecutterJson, file)
  # Copy and paste the new template files into the cookiecutter template
  shutil.copytree(taskflow_src, cookiecutter_dest)

# Update the base app template
base_src = Path('./strudel-taskflows/')
base_dest = Path('./strudel-cookiecutter/base/{@cookiecutter.name@}')
if base_dest.exists() and base_dest.is_dir():
    shutil.rmtree(base_dest)

# Copy and paste the whole strudel-taskflows app
# but ignore the taskflows, some other files
ignore_files = (
  *taskflows,
  'node_modules',
  'package-lock.json',
  'COPYRIGHT.md',
  'LICENSE',
  '.vite'
)
shutil.copytree(base_src, base_dest, ignore=shutil.ignore_patterns(*ignore_files))

# Copy the default data files separately because they are ignored above
base_data_dest = Path(f'{base_dest}/public/data')
if base_data_dest.exists() and base_data_dest.is_dir():
    shutil.rmtree(base_data_dest)
shutil.copytree(f'{base_src}/public/data', base_data_dest)

# Replace parts package.json with cookiecutter template string
with open(f'{base_dest}/package.json', 'r') as file:
  packageJson = file.read()

packageJson = packageJson.replace('"name": "strudel-taskflows"', '"name": "{@ cookiecutter.name @}"')
packageJson = re.sub('"version": ".+"', '"version": "0.0.0"', packageJson)

with open(f'{base_dest}/package.json', 'w') as file:
  file.write(packageJson)