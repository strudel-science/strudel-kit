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

## Quickstart

Install the STRUDEL CLI tool:

```
pip install strudel-cli
```

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

```json
{
  // Title of the project to display in the top app bar.
  "project_name": "My Base App",
  // Short description of the project.
  "project_short_description": "This is my science app built with strudel and my custom json config."
}
```

| Property | Description |
| -------- | ------- |
| `projectName` | Title of the project to display in the top app bar. |
| `projectShortDescription` | Short description of the project. |

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
| `--output-dir`, `-o` | optional | Path to the directory where the app should be created. Defaults to current directory. |
| `--branch`, `-b` | optional | Branch in strudel-kit repo that should be used for the templates. Defaults to `main`. This option is primarily for use by contributors. |

#### Task Flow Config File

```json
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
| Property | Description |
| -------- | ------- |
| `projectName` | Title of the project to display in the top app bar. |
| `taskflowName` | Title of the task flow to display in navigation. |
| `pageTitle` | Title to display on the task flow page. |
| `pageDescription` | Title to display on the task flow page. |