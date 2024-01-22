import re
import sys


MODULE_REGEX = r'^[_a-zA-Z][_a-zA-Z0-9-]+$'

module_name = '{{ cookiecutter.taskflow_slug }}'

if not re.match(MODULE_REGEX, module_name):
    print('ERROR: The task flow slug (%s) is not a valid app name.' % module_name)

    #Exit to cancel project
    sys.exit(1)