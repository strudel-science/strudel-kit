:warning: ***This library is in early-stage development and is subject to change frequently. Check back soon for more updates!***

# STRUDEL Kit (Beta)

STRUDEL Kit is a React-based JavaScript library for building scientific UIs based on the STRUDEL Design System and Task Flows. Visit [strudel.science](https://strudel.science) for more information about the STRUDEL project.

This library provides a suite of templates to implement UIs for various different task flows common to the scientific domain. The app is intended to be used as a starting point for building out a web app that includes one or more of the task flows provided.

### [Browse the Docs](https://github.com/strudel-science/strudel-kit/tree/main/docs)

## Quickstart

Install strudel-cli from PyPi:

```bash
pip install strudel-cli
```

Create a strudel base app:

```bash
strudel create-app my-app
```

This will generate a base web application in a new directory called `my-app`. Go into the new directory:

```bash
cd my-app
```

Install the app dependencies:

```bash
npm install
```

Start up your app locally:

```bash
npm start
```

Open your app in the browser at http://localhost:5173

Add a Task Flow to your app:

```bash
strudel add-taskflow my-taskflow --template compare-data
```

This generates new template files for your Task Flow in `my-app/src/pages/my-taskflow`. Check out the Usage and Configuration page for the template you are using to learn how to customize it.

Navigate to http://localhost:5173/my-taskflow to see your new Task Flow.

## Packages

### [strudel-cli](https://github.com/strudel-science/strudel-kit/blob/main/strudel-cli/README.md)

The strudel-cli is a command-line tool for bootstrapping web applications based on the STRUDEL Design System. If you're looking to get started building web applications with STRUDEL, this is the best way to start.

### [strudel-demo-app](https://github.com/strudel-science/strudel-kit/tree/main/strudel-demo-app)

Demo react app that implements each of the STRUDEL task flows. This code is an example of what you can build using the strudel-cli. If you prefer to just copy and paste code from GitHub, this is a good place to start.

### [strudel-cookiecutter](https://github.com/strudel-science/strudel-kit/tree/main/strudel-cookiecutter)

Templates designed for the [cookiecutter](https://cookiecutter.readthedocs.io/en/latest/README.html) tool. These templates are what strudel-cli uses to generate apps/task-flows. This package is not intended to be interacted with directly. It's best to use the strudel-cli.