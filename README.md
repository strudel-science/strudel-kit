:warning: ***This library is in early-stage development and is subject to change frequently. Check back soon for more updates!***

# STRUDEL Kit

STRUDEL Kit is a React-based JavaScript library for building scientific UIs based on the STRUDEL Design System and Task Flows. Visit [strudel.science](https://strudel.science) for more information about the STRUDEL project.

This library provides a suite of templates to implement UIs for various different task flows common to the scientific domain. The app is intended to be used as a starting point for building out a web app that includes one or more of the task flows provided.

## Quickstart

Install the STRUDEL CLI tool:

```
pip install -i https://test.pypi.org/simple/ strudel-cli
```
:warning: _strudel-cli is only on TestPyPI right now. When it is published to PyPI, you won't need the -i option._

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

## Packages

### [strudel-cli](https://github.com/strudel-science/strudel-kit/blob/main/strudel-cli/README.md)

The strudel-cli is a command-line tool for bootstrapping web applications based on the STRUDEL Design System. If you're looking to get started building web applications with STRUDEL, this is the best way to start.

### [strudel-demo-app](https://github.com/strudel-science/strudel-kit/tree/main/strudel-demo-app)

Demo react app that implements each of the STRUDEL task flows. This code is an example of what you can build using the strudel-cli. If you prefer to just copy and paste code from GitHub, this is a good place to start.

### [strudel-cookiecutter](https://github.com/strudel-science/strudel-kit/tree/main/strudel-cookiecutter)

Templates designed for the [cookiecutter](https://cookiecutter.readthedocs.io/en/latest/README.html) tool. These templates are what strudel-cli uses to generate apps/task-flows. This package is not intended to be interacted with directly. It's best to use the strudel-cli.