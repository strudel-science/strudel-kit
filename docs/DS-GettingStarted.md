# Getting Started with the STRUDEL Design System

Contents



## Set Up Your Development Environment

The current interface to using the STRUDEL Design System is a command-line tool written in Python. To use this tool, you need to set up a development environment that lets you invoke Python commands from a terminal.

The first step is to start a terminal program. The rest of this tutorial will assume you are using a standard MacOS, UNIX, or Windows PowerShell (not command.exe) terminal. The exact shell interpreter should not matter, as most of the work is done by the Python script. Thus, you need to have a supported [version](https://devguide.python.org/versions/) of Python  installed on your system (Python 3.8 or above at the time of this writing). We recommend using a Python "environment" such as [miniconda](https://docs.anaconda.com/free/miniconda/index.html) or [pyenv](https://github.com/pyenv/pyenv) to isolate any changes you make here from your system Python installation. Please look at the documentation for these tools for more information.

Once you have these base requirements installed, create a new environment and a working directory. Here is an example of the steps you would use to set up a new environment with _miniconda_:

```
 conda create -y -n strudel-kit-learn python=3.12
 conda activate strudel-kit-learn
```

Once you have the environment set up, create a working directory and move into it:

```
 mkdir learning-strudel
 cd learning-strudel
```

Once this is setup, use the "pip" Python package manager tool, which is standard with any modern Python installation, to install the STRUDEL command-line tools:

```
pip install strudel-cli
```

This will install the latest *released* version of the CLI code. If you want the freshly baked code right from the main repository instead, use the following recipe:

```
# note: use only if you want 'freshly baked' code from GitHub main branch
git clone https://github.com/strudel-science/strudel-kit
pip install strudel-kit/strudel-cli
```



## Build an App with STRUDEL

## Add a Task Flow to Your App

1. 1. Configure the task flow

   2. Add the task flow

   3. Connect the task flow

   4. 1. Add routes
      2. Add dataset