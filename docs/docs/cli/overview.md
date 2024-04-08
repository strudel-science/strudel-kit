# Command-Line Interface - Overview

The strudel-cli is a command-line tool for bootstrapping web applications based on the [STRUDEL Design System](https://strudel.science/). 

:warning: ***This library is in early-stage development. Check back soon for more updates!***

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
pip install strudel-cli
```

Create a config file based on the [create-app config json](https://github.com/strudel-science/strudel-kit/blob/main/strudel-cli/CONFIGS.md#create-app-config-file):

_my-app-config.json_
```js
{
  "name": "my-strudel-app",
  "appTitle": "My Science App"
}
```

Create a base app:

```
strudel create-app --config my-app-config.json
```

Create a config file for a new task flow based on [one of the config examples](https://github.com/strudel-science/strudel-kit/blob/main/strudel-cli/CONFIGS.md#compare-data):

_my-taskflow-config.json_
```js
{
  "name": "my-taskflow",
  "template": "compare-data",
  "compareItem": "scenario",
  "compareItemPlural": "scenarios",
  "mainPageTitle": "Compare Data App",
  "mainPageDescription": "Description of this app section",
  "newItemPageTitle": "Compare Data App",
  "newItemPageDescription": "Description of this app section",
  "comparePageDescription": "Description of this app section"
}
```

Go to the root directory of your new app:

```
cd my-app
```

Add the task flow to your app:

```
strudel add-taskflow --config ../my-taskflow-config.json
```

Install dependencies and start your app.

```
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.

Didn't work? Make sure you have [installed NPM and Node.JS](https://nodejs.org/en/download).

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
rm -rf dist/* && python -m build
```

This will generate `.whl` and `.tar.gz` files in the `dist/` folder.

#### 3. Upload to (Test)PyPi

```
python -m twine upload --repository pypi dist/*
```