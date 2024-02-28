# Set Up Your Development Environment

The current interface to using the STRUDEL Design System is a command-line tool written in Python. To use this tool, you need to set up a development environment that lets you invoke Python commands from a terminal.

The first step is to start a terminal program. The rest of this tutorial will assume you are using a standard MacOS, UNIX, or Windows PowerShell (not command.exe) terminal. The exact shell interpreter should not matter, as most of the work is done by the Python script. Thus, you need to have a supported [version](https://devguide.python.org/versions/) of Python  installed on your system (Python 3.8 or above at the time of this writing). We recommend using a Python "environment" such as [miniconda](https://docs.anaconda.com/free/miniconda/index.html) or [pyenv](https://github.com/pyenv/pyenv) to isolate any changes you make here from your system Python installation. Please look at the documentation for these tools for more information.

Since the STRUDEL application is based on JavaScript, later you will also need to have the [NodeJS package manager](https://nodejs.org/) (NPM) installed. Follow the [instructions on the NodeJS download page](https://nodejs.org/en/download) to install NPM for your operating system.

Once you have these base requirements installed, create a new environment and a working directory. Here is an example of the steps you would use to set up a new environment with _miniconda_:

```
 conda create -y -n strudel-kit-learn python=3.12 pip
 conda activate strudel-kit-learn
```

Once you have the environment set up, create a working directory and move into it:

```
 mkdir learning-strudel
 cd learning-strudel
```

Once this is setup, use the "pip" Python package manager tool, which is standard with any modern Python installation, to install the STRUDEL command-line tools:

```
pip install --index-url https://test.pypi.org/simple/ --extra-index-url https://pypi.org/simple strudel-cli
```
:warning: _strudel-cli is only on TestPyPI right now. When it is published to PyPI, you will be able to omit the extra options._

This will install the latest *released* version of the CLI code. If you want the freshly baked code right from the main repository instead, use the following recipe:

```
# note: use only if you want 'freshly baked' code from GitHub main branch
git clone https://github.com/strudel-science/strudel-kit
pip install strudel-kit/strudel-cli
```

If all the above steps went well (!) you should be able to run the `strudel` command in your current environment.

```
❯ strudel --version
strudel-cli 0.0.2
```

If this fails, some common problems are that you are running in a terminal where you have not activated the (e.g., *miniconda*) Python environment into which you installed strudel-cli (you must do this every time you start a new terminal), or the installation somehow did not complete. Feel free to reach out to the team at [strudel@lbl.gov](mailto:strudel@lbl.gov) for help.

## Next Steps

Now that you have the client installed, you can start building your first STRUDEL application.

Previous           |  Next
:-------------------------:|:-------------------------:
[Introduction](https://github.com/strudel-science/strudel-kit/blob/main/docs/getting-started/1-introduction.md)  |  [Build an App with STRUDEL](https://github.com/strudel-science/strudel-kit/blob/main/docs/getting-started/3-create-app.md)