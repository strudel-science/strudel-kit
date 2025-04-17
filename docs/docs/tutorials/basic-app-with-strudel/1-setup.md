# Setup

The current interface to using the STRUDEL Design System is a command-line tool written in Python. To use this tool, you need to set up a development environment that lets you invoke Python commands from a terminal.

## Prerequisites

STRUDEL Kit requires Python to run the CLI and Node.js with NPM to run the web applications you build. If you don't already have these tools on your system, use the links below to install them:

- [Python 3.8+](https://www.python.org/downloads/)
- [Node.js 18+ with NPM](https://nodejs.org/en/download)

Confirm your NodeJS and NPM installation:

```
node --version
npm --version
```

### Open a Terminal Window

The first step is to start a terminal program. The rest of this tutorial will assume you are using a standard MacOS, UNIX, or [Windows PowerShell](https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-windows?view=powershell-7.4) (not command.exe) terminal. This ensures that all the command line steps follow the same syntax. The exact shell interpreter should not matter, as most of the work is done by the Python script. Thus, you need to have a supported [version](https://devguide.python.org/versions/) of Python installed on your system (Python 3.8 or above at the time of this writing). We recommend using a Python "environment" such as [miniconda](https://docs.anaconda.com/free/miniconda/index.html) or [pyenv](https://github.com/pyenv/pyenv) to isolate any changes you make here from your system Python installation. Please look at the documentation for these tools for more information.

### Create an Isolated Environment with Conda

Once you have these base requirements installed, create a new environment and a working directory. Here is an example of the steps you would use to set up a new environment with _miniconda_:

```
 conda create -y -n strudel-learn-env -c python=3.9 pip
 conda activate strudel-learn-env
```

Once you have the environment set up, create a working directory and move into it:

```
 mkdir learning-strudel
 cd learning-strudel
```

### Install strudel-cli using pip

Once this is setup, use the "pip" Python package manager tool, which is standard with any modern Python installation, to install the STRUDEL command-line tools:

```
pip install strudel-cli
```

### Test strudel-cli Installation

If all the above steps went well (!) you should be able to run the `strudel` command in your current environment.

```
❯ strudel --version
strudel-cli 0.0.2
```

If this fails, some common problems are that you are running in a terminal where you have not activated the (e.g., _miniconda_) Python environment into which you installed strudel-cli (you must do this every time you start a new terminal), or the installation somehow did not complete. Feel free to reach out to the team at [strudel@lbl.gov](mailto:strudel@lbl.gov) for help.

## Next Steps

Now that you have the CLI installed, you can start building your first STRUDEL application.
