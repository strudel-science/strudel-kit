:warning: ***This library is in early-stage development. Check back soon for more updates!***

# STRUDEL Command-Line Interface

The strudel-cli is a command-line tool for bootstrapping web applications based on the [STRUDEL Design System](https://strudel.science/). 

#### How it Works

1. Configure your app with a simple JSON configuration.
2. Generate a base web app built with the STRUDEL stack and STRUDEL design system.
3. Add task flows to your app using the [STRUDEL task flow templates](https://strudel.science/design-system/task-flows/overview/).
4. Dive into the code and start customizing. After generating your app you are in full control.

#### The Stack

The strudel-cli generates your app using a pre-defined stack based on principles from the STRUDEL Design System.

- [TypeScript](https://www.typescriptlang.org/)
- [React](https://react.dev/)
- [Material UI](https://mui.com/material-ui/getting-started/)
- [React Router](https://reactrouter.com/en/main)
- [Create React App](https://create-react-app.dev/)

## User Quickstart

### Prequisites

Node.js and NPM must be installed to run the web applications you generate with strudel-cli. To check if you already have Node.js and NPM installed, open a terminal and run:

```
node --version
npm --version
```

If both commands return a version number, you should be good to go. If not, you can download both tools together here: https://nodejs.org/en/download

### Get Started

Install the STRUDEL CLI tool:

```
pip install -i https://test.pypi.org/simple/ strudel-cli
```
:warning: ***strudel-cli is only on TestPyPI for the moment. When it is published to PyPI, you will be able to omit the -i option***

Create a base app:

```
strudel create-app my-app
```

Go to the root directory of your new app:

```
cd my-app
```

Add the `compare-data` task flow to your app:

```
strudel add-taskflow my-taskflow --template compare-data
```

Install dependencies and start your app.

```
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.

Didn't work? Make sure you have [installed NPM and Node.JS](https://nodejs.org/en/download).

## Commands

### `strudel create-app`

Creates the base scaffolding for a web app based on the STRUDEL design system.

```
strudel create-app <app-name> [OPTIONS]
```

#### Options

| Option &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Required or Optional | Description |
| -------- | ------- | ------- |
| `<app-name>` | required | Name to use for the app's root directory (e.g. `my-app`). Must be a valid directory name.|
| `--config`, `-c`  | optional | JSON configuration file to use to build the base app. See the Base Config File section for how to format this file. If not supplied, you will be prompted on the command-line to give configuration values. |
| `--output-dir`, `-o` | optional | Path to the directory where the app should be created. Defaults to current directory. |
| `--branch`, `-b` | optional | Branch in strudel-kit repo that should be used for the templates. Defaults to `main`. This option is primarily for use by contributors. |

#### Base Config File

```js
{
  // Title of the project to display in the top app bar.
  "projectName": "My Base App",
  // Short description of the project.
  "projectShortDescription": "This is my science app built with strudel and my custom json config."
}
```

### `strudel add-taskflow`

Adds a new task flow to an existing strudel app. Give the task flow a name and choose one of the strudel task flow templates to base your section on.

```
strudel add-taskflow <taskflow-name> --template <taskflow-template> [OPTIONS]
```

#### Options

| Option &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Required or Optional | Description |
| -------- | ------- | ------- |
| `<taskflow-name>` | required | Name to use for the task flow's root directory (e.g. `my-taskflow`). Must be a valid directory name.|
| `--template`, `-t` | required | Name of the strudel task flow template to use to scaffold the task flow. Available options: `compare-data`, `contribute-data`, `explore-data`, `monitor-activities`, `run-computation`, `search-data-repositories` |
| `--config`, `-c`  | optional | JSON configuration file to use to build the task flow. See the Task Flow Config File section for how to format this file. If not supplied, you will be prompted on the command-line to give configuration values. |
| `--output-dir`, `-o` | optional | Path to the directory where the task flow should be created. Defaults to `src/apps`. |
| `--branch`, `-b` | optional | Branch in strudel-kit repo that should be used for the templates. Defaults to `main`. This option is primarily for use by contributors. |

#### Task Flow Config File

```js
{
  // Title of the project to display in the top app bar.
  "projectName": "My Project",
  // Title of the task flow to display in navigation.
  "taskflowName": "My Compare Data Flow",
  // Title to display on the task flow page.
  "pageTitle": "Compare Data App",
  // Title to display on the task flow page.
  "pageDescription": "Description of this app section"
}
```

## Developer Quickstart

### Install

Clone the strudel-kit repo:

```
git clone git@github.com:strudel-science/strudel-kit.git
```

Navigate to the strudel-cli package of the strudel-kit repo:

```
cd strudel-kit/strudel-cli
```

(Recommended) Create a new conda environment or venv with python 3.9.6+ and activate it:

```
conda create strudel-env python=3.9
conda activate strudel-env
```

Install the package in editable mode:

```
pip install -e .
```

Run the strudel commands:

```
strudel create-app <app-name> [OPTIONS]
```

### Testing

From the strudel-cli directory, run:

```
pytest
```

All the tests live in `strudel-cli/tests`

### Publishing

#### 1. Authenticate with PyPi

In order to publish, you will have to authenticate with pypi and your account must have permission to administer the strudel-cli package on pypi.

#### 2. Build a distrubtable package

```
python -m build
```

This will generate `.whl` and `.tar.gz` files in the `dist/` folder.

#### 3. Upload to (Test)PyPi

```
python -m twine upload --repository testpypi dist/*
```