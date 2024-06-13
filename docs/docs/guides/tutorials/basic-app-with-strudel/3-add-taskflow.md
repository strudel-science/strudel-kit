# Add a Task Flow to Your App

### Introduction

Task Flows are are a set of steps (represented by a series of screens) that help a user accomplish a task and represent how a user progresses through a UI. STRUDEL has several Task Flow templates that can be added into a base app as a new set of pages. In this example, you will add the Task Flow called "Explore Data".

### Add a Task Flow

Let's extend your base app to include a new section where users search and filter data about planets in the Solar System. The first thing you will do is add a new Task Flow called `solar-system` that uses the `explore-data` template. Make sure your terminal is in the directory of your app (i.e., `learning-strudel/planets-app` in this example), then, run this command:

```
strudel add-taskflow solar-system --template explore-data
```

If this succeeds, then the you will see a message in the terminal like:

```
Successfully added a task flow to your strudel app!
Your new task flow was built in /some/path/to/learning-strudel/planets-app/src/pages/solar-system
```

You should notice two new things:
1. A new directory called `solar-system` inside `src/pages` 
2. A new link on the home page to `/solar-system`

First let's break down the new files that were added:

```py
solar-system
├── _components
│  ├── DataTablePanel.tsx # Data table on the main page
│  ├── FiltersPanel.tsx # Filters panel on the main page
│  └── PreviewPanel.tsx # Preview panel on the main page
├── _config
│  ├── taskflow.config.ts # Task Flow configuration file
│  └── taskflow.types.ts
├── _context
│  ├── ContextProvider.tsx
│  └── actions.ts
├── [id].tsx # Data detail page component
├── _layout.tsx # Layout wrapper component
└── index.tsx # Main page component
```

These files are from the Explore Data Task Flow template. They include four main pieces: page components, a configuration file, a layout component, and inner page components. If you want to read about each of these in detail, check out the [Task Flows](/strudel-kit/docs/task-flows/overview) page. Right now, we will cover the basics as each piece comes up.

Next, if you click on the new `/solar-system` link on the home page, you will be taken to the default Explore Data page. Right now it is configured with default data and settings. Let's keep going to configure this Task Flow for own usecase.

### Add a data source

Right now the Task Flow you created is pulling its data from the `public/data/default/explore-data/` directory. Let's instead create a new new data file that we will use for our Task Flow. 

Open up a blank file and paste in the following content:

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

Save this file in `public/data` and name it `planets.csv`.

### Edit the Task Flow Configuration

Now you need to tell the Task Flow to use the new data source you just created. Open up the solar-system Task Flow's configuration file in `src/pages/solar-system/_config/taskflow.config.ts`.

:::info Reference

`taskflow.config.ts` contains configurable properties for your Task Flow. Read more about this file on the [Task Flows](/strudel-kit/docs/task-flows/overview) page.
:::

Replace the `data` object at the top of the file with the following:

```js
data: {
  items: {
    /**
     * Source of the data for the initial list of items on the main page.
     */
    source: "planets.csv",
    /**
     * Name of the field in the data that represents a unique identifier for each record.
     */
    idField: "Name"
  }
},
```

Now instead of pointing to the default dataset, your Task Flow points to the planets dataset you made. Next, we need to change the page titles, table columns, and filters for the main `index` page.

Replace the `pages` object with the following:

```js
pages: {
  index: {
    /**
     * Title to appear at the top of the main page.
     */
    title: "Solar System Explorer",
    /**
     * Text to appear underneath the title at the top of the main page.
     */
    description: "Explore data about the planets that orbit the Sun.",
    /**
     * List of column definition objects for the columns in the table on the main page.
     */
    tableColumns: [
      {
        field: "Name",
        headerName: "Name",
        width: 200
      },
      {
        field: "Diameter",
        headerName: "Diameter (km)",
        width: 150
      },
      {
        field: "Mass",
        headerName: "Mass (kg)",
        width: 150
      },
      {
        field: "Inclination",
        headerName: "Inclination (deg)",
        width: 150
      },
      {
        field: "Eccentricity",
        headerName: "Eccentricity",
        width: 150
      }
    ],
    /**
     * List of filters to display on the main page and use to filter the main table data. 
     * Each filter has a definition object to determine how it renders and functions.
     */
    tableFilters: [
      {
        field: "Diameter",
        displayName: "Diameter (km)",
        filterType: "Slider",
        props: {
          min: 4000,
          max: 150000
        }
      }
    ]
  }
}
```

Save this file. You should now have a fully functioning Explore Data Task Flow page when you navigate to the `/solar-system` route. Test this out by navigating your browser to http://localhost:5173/solar-system.

![Screenshot of solar system Task Flow in a browser](/img/tutorial/start-explore-data-2.png)

This is great, but it would be good to be able to access this page from the navbar instead. Let's add a link to the Solar System page in the top navigation bar.

To do this we are going to open the global strudel configuration file `strudel.config.ts` located at the root of our app.

Right now there is one item, `Playground`, in the list of items to render in the `navbar`. We don't need this item so let's replace it with a link to our solar system page:

```js
{
  label: 'Solar System',
  path: '/solar-system'
}
```

Save that file and you should see a new "Solar System" link in the navbar.

Woohoo! You now have your first fully connected Task Flow.

## Next steps

The next section provides some examples of how to customize your Task Flow.