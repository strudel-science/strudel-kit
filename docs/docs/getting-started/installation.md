---
title: 'Installation'
---

## Prerequisites

- Python 3.8+
- Node.js 18+
- NPM 

## Install strudel-cli with pip (recommended)

The strudel-cli can be installed from PyPi via the `pip` package installer for Python.

```
pip install strudel-cli
```

It is recommended that **before** you install strudel-cli, you use either conda or pipx to install it inside of an isolated virtual environment. See below how to install strudel-cli using either of these options.

### Install strudel-cli inside a conda environment

Run the following commands on the command line:

```
conda create -y -n strudel-cli-env -c python=3.9 pip
conda activate strudel-cli-env
pip install strudel-cli
```

After executing the above commands, the `strudel` command can be used on any command line where you activate `strudel-cli-env`.

### Install strudel-cli using pipx

Run the following commands on the command line:

```
pip install --user pipx
pipx install strudel-cli
```

After executing the above commands, the `strudel` command can be used on any command line for the current user.

## Install strudel-cli from GitHub

If you want the freshly baked code right from the main repository instead, use the following recipe:

```
# note: use only if you want 'freshly baked' code from GitHub main branch
git clone https://github.com/strudel-science/strudel-kit
pip install strudel-kit/strudel-cli
```