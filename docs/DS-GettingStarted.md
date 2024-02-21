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

There are 3 basic steps to adding a new Task Flow:  (1) Create a simple configuration for your Task Flow -- currently this is done by editing a file, (2) Add the configured Task Flow into your app's source code, (3) Connect the Task Flow's page to the navigation of the main app.

### (1) Configure Task Flow

You only need to configure a Task Flow once, at creation time. You can think of configuration as a "helper" that is providing some text-based information that STRUDEL translates into the appropriate JavaScript code as it creates your Task Flow. 

The configuration for a Task Flow is stored in a JSON file. You need to create this file with an editor before you run the command to create the Task Flow. If you don't provide a configuration file, you will be prompted for a couple of key values interactively. But in most cases, as in the Explore Data Task Flow, it will save time to use a configuration file to specify some more details, so the Strudel command-line tool can create more of the JavaScript code for you automatically. In the future, we plan to have a more graphical, "wizard"-like interface for the configuration, but right now it's just you and your favorite text editor.

#### Add a data file

Before we create our configuration file, we are going to add a data source -- in this case, a simple comma-separate values (CSV) file with information about the planets (and one "dwarf planet") in our solar system. 

In the directory of your app (i.e., `learning-strudel/foo` in this example), create a file called `planets.csv` with the following content:

```
Name,Diameter,Mass,Inclination,Eccentricity,Semi_majorAxis,SurfaceGravity,OrbitalPeriod,SiderealRotation,Satellites
Mercury,4879.4, 3.302×10^23, 7.004, 0.20563593, 0.38709927, 3.7, 0.241, 58.65, 0
Venus,12103.6, 4.869×10^24, 3.39471, 0.00677672, 0.72333566, 8.87, 0.615, 243.0187, 0
Earth,12756.3, 5.974×10^24, 0.00005, 0.01671123, 1.00000261, 9.78, 1, 0.997271, 1
Mars,6794.4, 6.419×10^23, 1.85061, 0.0933941, 1.52371034, 3.71, 1.881, 1.02595, 2
Jupiter,142984, 1.899×10^27, 1.3053, 0.04838624, 5.202887, 24.79, 11.86, 0.4135, 63
Saturn,120536, 5.688×10^26, 2.48446, 0.05386179, 9.53667594, 8.96, 29.46, 0.4264, 64
Uranus,51118, 8.683×10^25, 0.774, 0.04725744, 19.18916464, 7.77, 84.01, 0.7181, 27
Neptune,49572, 1.024×10^26, 1.76917, 0.00859048, 30.06992276, 11, 164.79, 0.6712, 14
Pluto,2370.0, 1.3×10^22, 17.08900092, 0.250248713, 39.44506973, 0.62, 247.7406624, 6.387230, 5
```

In UNIX or MacOS, you can run the command: `cat - > planets.csv`, and then paste the text above (you may need to hit Control-D to close the file and return to the prompt).

In Windows, one way to do this is run the command `notepad planets.csv`, paste the text above into the new notepad document, then save this file.

#### Create Task Flow configuration

Before you continue, make sure you are in the directory of your app (i.e., `learning-strudel/foo` in this example).

To create the configuration file, cut and paste the following text into a file named, e.g., `explore.json`. 

```
{
  "name": "explorer",
  "pageTitle": "Explore Data for Foo",
  "pageDescription": "Explore data for the foo application",
  "dataSource": "planets.csv",
  "dataIdField": "Name",
  "definitions": {
    "columns": {
      "main": [
        {
          "field": "Name",
          "headerName": "Name",
          "width": 200
        },
        {
          "field": "Diameter",
          "headerName": "Diameter (km)",
          "width": 150
        },
        {
          "field": "Mass",
          "headerName": "Mass (kg)",
          "width": 150
        },
        {
          "field": "Inclination",
          "headerName": "Inclination (deg)",
          "width": 150
        },
        {
          "field": "Eccentricity",
          "headerName": "Eccentricity",
          "width": 150
        }

      ]
    },
    "filters": {
      "main": [
        {
          "field": "Diameter",
          "displayName": "Diameter (km)",
          "filterType": "Slider",
          "props": {
            "min": 4000,
            "max": 150000
          }
        }
      ]
    }
  }
}
```

Now we will briefly explain the contents of this file. This is purely informational, so you can skip this and come back to it later if you want to get on with seeing your Task Flow in action.

There are two basic sections to the configuration. First, a list of key-value pairs. Some of these set some general values you will have in an Task Flow:

```
  "name": "explorer",
  "pageTitle": "Explore Data for Foo",
  "pageDescription": "Explore data for the foo application",
```

We can see above that we are giving the Task Flow a name, a title to display on its web page, and a description. 

There also may be some key-value pairs that are specific to this type of Task Flow:

```
  "dataSource": "planets.csv",
  "dataIdField": "Name",
```

In this case, `dataSource` specifies where the Explore Data Task Flow should get its initial data, and `dataIdField` tells the code that loads the data which field (i.e., which column in tabular data like this one) should be used to uniquely identify a record.

The second section is called `definitions`. It provides some more detailed data that is made available to the Task Flow and its value is some structured chunk of JSON. In the case of the Explore Data Task Flow, this section defines which columns of the data to display and which (if any) filters to create for the "filters" sidebar. The values here will depend on the data source.

#### Next steps

Now we are ready to create and add the task flow!

### (2) Add Task Flow

To add a Task Flow, use the `add-taskflow` sub-command of the `strudel` command-line program. Again, make sure your terminal is in the directory of your app (i.e., `learning-strudel/foo` in this example). Then, run this command:

```
strudel add-taskflow --template explore-data -c explore.json explore
```

If this succeeds, then the JavaScript code will all be set up in your app directory and you will have a new page that can browse your data set. You can tell it succeeds if the output contains a message like:

```
Successfully added a task flow to your strudel app!
Your new task flow was built in /some/path/to/learning-strudel/foo/src/app/explore
```

#### Next steps

We will now connect the task flow as a sub-page in our app.

### (3) Connect the Task Flow

Change to the `src/app` directory under your app, e.g.:

```
cd src/app
```

In this directory you will see a file `routes.tsx`. This is the file that tells your app which URL paths map to which pages.

Open `routes.tx` in an editor.  Near the top of the file, in the JavaScript imports section, add these lines:

```
import { ExploreDataWrapper } from "./explore/ExploreDataWrapper";
import { DataExplorer } from "./explore/DataExplorer";
```

This says to import the ReactJS components that were created by the "add-taskflow" command above from the appropriate directory. Next we will create a "route" that associates these components with a page URL. 

Add the following text after the line that ends `createHashRouter([`. This is the section that tells the app how to map the URL path to a given page in the app (after a "/#/", thus the name). 

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

Save this file. And you're done! You should now have a fully functioning Explore Data Task Flow page.

You can test out your changes by reloading the app or restarting it, then navigating to your page:

 http://localhost:3000/#/explore

#### Next steps

The next section provides some examples of how to customize your Task Flow.