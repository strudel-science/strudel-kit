# Getting Started with the STRUDEL Design System

Contents

* Set Up Your Development Environment
* Build an App
* Add a Task Flow to Your App

## Set Up Your Development Environment

The current interface to using the STRUDEL Design System is a command-line tool written in Python. To use this tool, you need to set up a development environment that lets you invoke Python commands from a terminal.

The first step is to start a terminal program. The rest of this tutorial will assume you are using a standard MacOS, UNIX, or Windows PowerShell (not command.exe) terminal. The exact shell interpreter should not matter, as most of the work is done by the Python script. Thus, you need to have a supported [version](https://devguide.python.org/versions/) of Python  installed on your system (Python 3.8 or above at the time of this writing). We recommend using a Python "environment" such as [miniconda](https://docs.anaconda.com/free/miniconda/index.html) or [pyenv](https://github.com/pyenv/pyenv) to isolate any changes you make here from your system Python installation. Please look at the documentation for these tools for more information.

Since the STRUDEL application is based on JavaScript, later you will also need to have the [NodeJS package manager](https://nodejs.org/) (NPM) installed. Follow the [instructions on the NodeJS download page](https://nodejs.org/en/download) to install NPM for your operating system.

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

If all the above steps went well (!) you should be able to run the `strudel` command in your current environment.

```
❯ strudel --version
strudel-cli 0.0.2
```

If this fails, some common problems are that you are running in a terminal where you have not activated the (e.g., *miniconda*) Python environment into which you installed strudel-cli (you must do this every time you start a new terminal), or the installation somehow did not complete. Feel free to reach out to the team at [strudel@lbl.gov](mailto:strudel@lbl.gov) for help.

Now that you have the client installed, you can start building your first STRUDEL application.

## Build an App

We will now start to create your first STRUDEL app. In this documentation, we will use the traditional computing nonsense-word "foo" for the name of app, but please feel free to choose a name more to your own liking. The `strudel` command has several sub-commands to do different tasks; to create an app named *foo* use the `create-app` sub-command like this:

```
strudel create-app foo
```

This will generate some output and prompt you for some values, with default values supplied in parentheses. Here, we will assume you simply hit `[Enter]` to accept the default values. If this is the case, the command should give the message `Successfully created your strudel app!` and provide some additional hints on next steps (which we will not show here).

At this point you will have a directory named for your app that is ready to run. Now you will change to that directory and use the Node Package Manager that you installed earlier to install the dependencies needed by your app.

```
cd foo
npm install
```

 This will produce a fair amount of output as the NPM tool fetches and installs all the JavaScript dependencies that STRUDEL uses. It will print out some warnings about deprecated packages and security vulnerabilities. This is normal. For a real-world deployment, you would need to look at these warnings and vulnerabilities more closely, but you can safely ignore them for now.

Assuming you didn't get any errors in the  step above, you can now run your app from the same directory:

```
npm start
```

This will generate some more warnings and informational messages on the console, but should eventually cause your browser to open a new page with a simple welcome banner. If your browser does not open automatically, you can manually go to [http://localhost:3000/](http://localhost:3000/) to connect to the app.

In the future, when you run your app, you will not need to perform the install step -- just `npm start`. In fact, the development server that this runs is able to update the app "live" as you change the code in this directory, so you don't need to stop and restart the app for each change.

Next we will learn how to do something a bit more useful with the app by adding your first task flow.

## Add a Task Flow to Your App

### Introduction

As described elsewhere in the [documentation](https://strudel.science/design-system/task-flows/overview/), Task Flows are are a set of steps (represented by a series of screens) that help to accomplish a task and represent how a user progresses through a UI. To start building your app, you first add a Task Flow. In this example, we will add the Task Flow called "Explore Data".

There are 3 basic steps to adding a new Task Flow, which will be covered in more detail below: (1) Create a simple configuration for your Task Flow -- currently this is done by editing a file, (2) Add the configured Task Flow into your app's source code, (3) Connect the Task Flow's page to the navigation of the main app.

### (1) Configure Task Flow

You only need to configure a Task Flow once, at creation time. You can think of configuration as a "helper" that is providing some simple text-based information that STRUDEL translates into the appropriate JavaScript code as it copies the files for your chosen Task Flow. 

The configuration for a Task Flow is stored in a JSON file, though this is optional. If you don't provide a configuration file, you will be prompted for a couple of key values interactively. For "Explore Data", configuration is a chance to give some example starting data, so we will use the JSON file.

#### Create JSON input

To create the configuration file, cut and paste the following text into a file named, e.g., `explore.json`. We will refer back to the contents of this file later when it will be easier to see what effect the various parts of it had on the initial app setup. Also remember that this entire file is *optional* and you can get started with no configuration file at all (in which case you will be simply be prompted for a couple of values).

```
{
  "taskflowName": "foo",
  "content": {
    "pageTitle": "Explore Data App",
    "pageDescription": "Explore some simple genome data",
    "dataSource": "Current_Genomes.tsv",
    "columns": [
      { 
        "field": "Organism", 
        "headerName": "Organism", 
        "width": 200 
      },
      {
        "field": "Proteome_ID",
        "headerName": "Proteome ID",
        "width": 150
      },
      {
        "field": "Common_Name",
        "headerName": "Common name",
        "width": 200
      }
    ],
    "filters": [
      {
        "field": "Organism",
        "displayName": "Organism",
        "filterType": "CheckboxList",
        "props": {
          "options": [
            {
              "label": "Acorus",
              "value": "Acorus"
            },
            {
              "label": "Zostera",
              "value": "Zostera"
            }
          ]
        }
      },
      {
        "field": "Proteome_ID",
        "displayName": "Proteome ID",
        "filterType": "Slider",
        "props": {
          "min": 0,
          "max": 1000
        }
      }
    ]
  }
}
```

#### Data files

You may have noticed the reference to "Current_Genomes.tsv" in the file above. This is the data file that will be explored by the Task Flow. In a real app you may have a much more sophisticated backend, of course, but the Task Flow comes with the ability to read spreadsheet-like files out of the box. We have taken a shortcut here and used a file that is built in to the distribution. If you are curious, you can see it for yourself in the `public/data/` directory of your app. You could start with your own comma-separated or tab-separated values file by just changing the name in the configuration and modifying the columns and fields accordingly.

#### Next steps

Now we are ready to create and add the task flow!

### (2) Add Task Flow

To add a Task Flow, use the `add-taskflow` sub-command of the `strudel` command-line program. In your terminal, in the directory of the app and configuration file you just created, type:

```
strudel add-taskflow --template explore-data -c explore.json explore
```

If this succeeds, then the JavaScript code will all be set up in your app directory and you will have a new page that can browse your data set. You can tell it succeeds if you get a message like:

```
Successfully added a task flow to your strudel app!
Your new task flow was built in /some/path/to/foo/src/app/explore
```

#### Next steps

We will now connect the task flow as a sub-page in our app.

### (3) Connect the Task Flow

Change to the `src/app` directory under your app, e.g.:

```
cd foo/src/app
```

In this directory you will see a file `routes.tsx` that you should open in an editor. This is the file that tells your app which URL paths map to which pages.

In that file, add the following text after the line that ends `createHashRouter([`, which introduces a list of route objects:

```
{
    path: "/explore",
    element: <ExploreDataWrapper />,
    children: [
      {
        index: true,
        element: <DataExplorer />
      },
    ]
},
```

also at the top of the file in the imports section, add these lines:

```
import { ExploreDataWrapper } from "./explore/ExploreDataWrapper";
import { DataExplorer } from "./explore/DataExplorer";
```

You can test out your changes by reloading the app or restarting it (as a reminder, this is done with `npm start` from the `foo/src` directory that contains the 'package.json' file).



1. The basic 

2. 1. Configure the task flow

   2. Add the task flow

   3. Connect the task flow

   4. 1. Add routes
      2. Add dataset