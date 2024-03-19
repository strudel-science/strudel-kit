:warning: ***This library is in early-stage development and is subject to change frequently. Check back soon for more updates!***

# STRUDEL Kit (Beta)

STRUDEL Kit is a React-based JavaScript library for building scientific UIs based on the STRUDEL Design System and Task Flows. Visit [strudel.science](https://strudel.science) for more information about the STRUDEL project.

This library provides a suite of templates to implement UIs for various different task flows common to the scientific domain. The app is intended to be used as a starting point for building out a web app that includes one or more of the task flows provided.

### [Browse the Docs](https://github.com/strudel-science/strudel-kit/tree/main/docs)

## Quickstart

Install the STRUDEL CLI tool:

```
pip install strudel-cli
```

Create a base app (enter values at the prompts or hit Enter to use the default value):

```
strudel create-app my-app
```

Go to the root directory of your new app:

```
cd my-app
```

Add a new Task Flow to your app using the default configurations (hit Enter at each prompt):

```
strudel add-taskflow my-default-taskflow --template run-computation
```

Or create a config file for your new task flow based on [the config example](https://github.com/strudel-science/strudel-kit/blob/main/docs/task-flows/run-computation/config.md) for the selected Task Flow template.

```
strudel add-taskflow --config ../my-taskflow-config.json
```

Install dependencies and start your app.

```
npm install
npm start
```

For a complete guide to using STRUDEL Kit check out the [Getting Started Tutorial](https://github.com/strudel-science/strudel-kit/blob/main/docs/getting-started/0-introduction.md).

## Packages

### [strudel-cli](https://github.com/strudel-science/strudel-kit/blob/main/strudel-cli/README.md)

The strudel-cli is a command-line tool for bootstrapping web applications based on the STRUDEL Design System. If you're looking to get started building web applications with STRUDEL, this is the best way to start.

### [strudel-demo-app](https://github.com/strudel-science/strudel-kit/tree/main/strudel-demo-app)

Demo react app that implements each of the STRUDEL task flows. This code is an example of what you can build using the strudel-cli. If you prefer to just copy and paste code from GitHub, this is a good place to start.

### [strudel-cookiecutter](https://github.com/strudel-science/strudel-kit/tree/main/strudel-cookiecutter)

Templates designed for the [cookiecutter](https://cookiecutter.readthedocs.io/en/latest/README.html) tool. These templates are what strudel-cli uses to generate apps/task-flows. This package is not intended to be interacted with directly. It's best to use the strudel-cli.