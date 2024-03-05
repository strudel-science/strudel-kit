## Add a Task Flow to Your App

### Introduction

Task Flows are are a set of steps (represented by a series of screens) that help to accomplish a task and represent how a user progresses through a UI. To start building your app, you first add a Task Flow. In this example, we will add the Task Flow called "Explore Data".

There are 3 basic steps to adding a new Task Flow:

1. Create a simple configuration for your Task Flow in a JSON file.
2. Add the configured Task Flow into your app's source code.
3. Connect the Task Flow's page to the navigation of the main app.

### 1. Configure Task Flow

You only need to configure a Task Flow once, at creation time. You can think of configuration as a "helper" that is providing some text-based information that STRUDEL translates into the appropriate JavaScript code as it creates your Task Flow. 

The configuration for a Task Flow is stored in a JSON file. You need to create this file with an editor before you run the command to create the Task Flow. If you don't provide a configuration file, you will be prompted for a couple of key values interactively. But in most cases, as in the Explore Data Task Flow, it will save time to use a configuration file to specify some more details, so strudel-cli can create more of the JavaScript code for you automatically.

#### Add a data file

Before we create our configuration file, we are going to add a data source -- in this case, a simple comma-separate values (CSV) file with information about the planets in our solar system. 

Switch back to your original terminal and make sure you still have the `strudel-learn-env` activated (you should see `(strudel-learn-env)` at the start of the command line). Leave the app running in your other terminal. 

In the directory of your app (i.e., `learning-strudel/planets-app` in this example), create a file called `planets.csv`.

In UNIX or MacOS, you can run the command: `cat - > planets.csv`, and then paste the text above (you may need to hit Control-D to close the file and return to the prompt).

In Windows, one way to do this is run the command `notepad planets.csv`, paste the text above into the new notepad document, then save this file.

Paste the following content into `planets.csv`:

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
```

Once you have created this file, **copy it to the `public/data` directory**, which is the default location for data files in this (and other) Task Flows. This way Strudel will be able to find it without any custom modifications:

```
cp planets.csv public/data
```

#### Create Task Flow configuration

Before you continue, make sure you are in the directory of your app (i.e., `learning-strudel/planets-app` in this example).

To create the configuration file, first create a file named `solar-system.json`. The name of this file can be anything you want, but it must be a valid `.json` file. Copy and paste the following text into `solar-system.json`. 

```
{
  "name": "solar-system",
  "template": "explore-data",
  "pageTitle": "Solar System Explorer",
  "pageDescription": "Explore data about the planets that orbit the Sun.",
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
  "name": "solar-system",
  "pageTitle": "Solar System Explorer",
  "pageDescription": "Explore data about the planets that orbit the Sun.",
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

### 2. Add Task Flow

To add a Task Flow, use the `add-taskflow` sub-command of the `strudel` command-line program. Again, make sure your terminal is in the directory of your app (i.e., `learning-strudel/planets-app` in this example). Then, run this command:

```
strudel add-taskflow --config solar-system.json
```

If this succeeds, then the JavaScript code will all be set up in your app directory and you will have a new page that can browse your data set. You can tell it succeeds if the output contains a message like:

```
Successfully added a task flow to your strudel app!
Your new task flow was built in /some/path/to/learning-strudel/planets-app/src/app/solar-system
```

#### Next steps

We will now connect the task flow as a sub-page in our app.

### 3. Connect the Task Flow

Change to the `src/app` directory under your app, e.g.:

```
cd src/app
```

In this directory you will see a file `routes.tsx`. This is the file that tells your app which URL paths map to which pages.

Open `routes.tsx` in an editor.  Near the top of the file, in the JavaScript imports section, add these lines:

```
import { ExploreDataWrapper } from "./solar-system/ExploreDataWrapper";
import { DataExplorer } from "./solar-system/DataExplorer";
```

This says to import the ReactJS components that were created by the "add-taskflow" command above from the appropriate directory. Next we will create a "route" that associates these components with a page URL. 

Add the following text after the line that ends `createHashRouter([`. This is the section that tells the app how to map the URL path to a given page in the app (after a "/#/", thus the name). 

```
{
    path: "/solar-system",
    element: <ExploreDataWrapper />,
    children: [
      {
        index: true,
        element: <DataExplorer />
      },
    ]
},
```

Save this file. You should now have a fully functioning Explore Data Task Flow page when you navigate to the `/solar-system` route. Test this out by navigating your browser to http://localhost:3000/#/solar-system.

![Screenshot of solar system Task Flow in a browser](https://github.com/strudel-science/strudel-kit/blob/main/docs/getting-started/images/start-explore-data-2.png?raw=true)

<details>
  <summary>Note</summary>
  The `#/` section of the URL is added by React to enable single-page routing that doesn't require extra page reloads. It can be removed by using <code>createBrowerRouter</code> instead of <code>createHashRouter</code>. See the <a href="https://reactrouter.com/en/main/routers/picking-a-router" target="_blank">react-router docs on picking a router</a>.
</details>
<br>

This is great, but it would be good to be able to access this page without having to type in the URL every time. Let's add a link to the Explore page in the top navigation bar.

Go to the `src/components` directory and open the file `TopBar.tsx`. This is the component for the top navigation bar that is displayed on the home page and all the other task flow pages.

First, find the code where the app title is rendered so you can render the link directly to the right of the app title:

```js
<AppLink to="/">
  <Typography variant="h6" component="div">
    {app.state.appTitle}
  </Typography>
</AppLink>
```

Then add a new `AppLink` component directly underneath the `AppLink` component that renders the app title:

```js
<AppLink to="/solar-system">
  Solar System
</AppLink>
```

The `AppLink` component is used for links to internal pages in your app. The `to` prop tells the component which route it should link to and the content in between the opening (`<AppLink>`) and closing (`</AppLink>`) tags is the clickable content that displays on the page. Go to the home page at http://localhost:3000 and try out the link.

![Screenshot of home page with new navigation link in a browser](https://github.com/strudel-science/strudel-kit/blob/main/docs/getting-started/images/mid-home-page.png?raw=true)

Woohoo! You have connected your first Task Flow.

## Next steps

The next section provides some examples of how to customize your Task Flow.

Previous           |  Next
:-------------------------:|:-------------------------:
[Build an App with STRUDEL](https://github.com/strudel-science/strudel-kit/blob/main/docs/getting-started/2-create-app.md)  |  [Customize Task Flow](https://github.com/strudel-science/strudel-kit/blob/main/docs/getting-started/4-customize-taskflow.md)
