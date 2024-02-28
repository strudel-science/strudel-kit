import json
import yaml
import typer
import os
import shutil
import re


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


def json_to_yaml(json_file: str, output_file: str):
    """
    Create a yaml file from a given path to a json file.
    """
    json_file = open(json_file)
    json_data = json.load(json_file)
    json_data = {"default_context": json_data}
    yaml_file=open(output_file,"w")
    yaml.dump(json_data, yaml_file)
    yaml_file.close()
    json_file.close()


def snake_to_pascal_case(snake_str):
    """
    Convert snake_case string to PascalCase string
    """
    return "".join(x.capitalize() for x in snake_str.lower().split("_"))


def snake_to_camel_case(snake_str):
    """
    Convert snake_case string to camelCase string
    """
    camel_string = snake_to_pascal_case(snake_str)
    return snake_str[0].lower() + camel_string[1:]


def camel_to_snake(value: str):
    """
    Convert camelCase string to snake_case string
    """
    return re.sub(r'(?<!^)(?=[A-Z])', '_', value).lower()