# Customizing a task flow (notes)

Before you get started, clone the repo and follow install instructions in the README.md file in the top directory.

## Configure your new app

Modify the configuration file app.yaml (see https://yaml.org or one of the many guides like https://docs.ansible.com/ansible/latest/reference_appendices/YAMLSyntax.html for YAML syntax).

For this example, just uncomment the line "exploring-datasets:", which will add the task flow by that name.
The resulting file (without comments) will be:
```yaml
application:
    name: "my application"
    dir: ~/src/my-project
flows:
    exploring-entities:
```

## Run the strudel script to create the app

Run:
```shell
npm run strudel
```

This makes a copy of necessary files, including any task flows you have configured in the configuration file described previously.

By default, the files are copied into a directory named after your application,
with spaces and other special characters changed to dashes.
In this example, the new directory will be called `my-application`.
You should change to this directory before continuing.

```shell
cd my-application
```

## Install and run

The new application directory is itself a package, so you need to be in that directory, then run the same install steps you did for STRUDEL itself:

```shell
npm install
npm run build
```

If this succeeds (which it should), you can run the app
```shell
npm start
```

At this point the application will pretty much be a copy of the original STRUDEL demonstration application.
The following sections describe how to customize it for your needs.

## Customizing the app

**Note**: In the following instructions you will be editing the source code for the app.
Because we are running the application in developer mode, once you run `npm start`, 
the app will automatically refresh to reflect changes in the source code.
Since this refresh may happen mid-edit, you may see temporary errors in the page.
If you stop the app, just run `npm start` again to show the new version.

### Choose a starting task flow

We want to start with the "exploring-entities" task flow, so we need to change the code
to jump right there instead of showing the list of all the task flows.

Edit the file "src/app/App.tsx" and find the section starting `const router = createBrowserRouter([`.
This is the "routing" for the application, which controls which URL paths go to which page.
We are going to make the default route, "/", go to the exploring-entities task flow.
To do this, make two changes:

1. Comment out current "/" route

OLD:
```typescript jsx
  {
    path: "/",
    element: <TaskFlowsPage />,
  },
```
NEW:
```typescript jsx
/*
  {
    path: "/",
    element: <TaskFlowsPage />,
  },
*/
```
2. Make the base route be the exploring entities page.

OLD:
```typescript jsx
 {
    path: "/exploring-entities",
    element: <ExploringEntitiesWrapper />,
  },
```

NEW:
```typescript jsx
 {
    path: "/",
    element: <ExploringEntitiesWrapper />,
  },
```

After this change, when you visit the app's home page in the browser, http://localhost:3000/strudel-kit,
you should be taken to the "exploring-entities" page.

### Set project name

Open the main page  of your copied task flow in an editor.
This page is found at "src/app/exploring-entities/ExploringEntitiesContent.tsx".

In that file change "Project name" in the section that looks like this:
```typescript jsx
<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    Project name
</Typography>
```

## Load your own data

The data used by the "exploring-entities" task flow is a text file found under "public/data/" called "Current_Genomes.tsv".
In this section we are going to create a new data file and change the task flow to load it and display it.

### Create new data file

Cut and paste the following text into a file called "planets.csv" under the directory "public/data/".
```text
Name, Diameter, Mass, Inclination, Eccentricity, Semi_majorAxis, SurfaceGravity, OrbitalPeriod, SiderealRotation, Satellites
Mercury, 4879.4, 3.302×10^23, 7.004, 0.20563593, 0.38709927, 3.7, 0.241, 58.65, 0
Venus, 12103.6, 4.869×10^24, 3.39471, 0.00677672, 0.72333566, 8.87, 0.615, 243.0187, 0
Earth, 12756.3, 5.974×10^24, 0.00005, 0.01671123, 1.00000261, 9.78, 1, 0.997271, 1
Mars, 6794.4, 6.419×10^23, 1.85061, 0.0933941, 1.52371034, 3.71, 1.881, 1.02595, 2
Jupiter, 142984, 1.899×10^27, 1.3053, 0.04838624, 5.202887, 24.79, 11.86, 0.4135, 63
Saturn, 120536, 5.688×10^26, 2.48446, 0.05386179, 9.53667594, 8.96, 29.46, 0.4264, 64
Uranus, 51118, 8.683×10^25, 0.774, 0.04725744, 19.18916464, 7.77, 84.01, 0.7181, 27
Neptune, 49572, 1.024×10^26, 1.76917, 0.00859048, 30.06992276, 11, 164.79, 0.6712, 14
Pluto, 2370.0, 1.3×10^22, 17.08900092, 0.250248713, 39.44506973, 0.62, 247.7406624, 6.387230, 5
```

### Change the file

The file is loaded into the task flow in the file "ExploringEntitiesWrapper.tsx" (under "src/app/exploring-entities").
We will change this file to load our new file, and change the display properties so the proper
columns are displayed.

1. Change the file being loaded (in the "useEffect()" function)

OLD :
```typescript jsx
const data = await d3.tsv(`${basename}/data/Current_Genomes.tsv`);
```

NEW:
```typescript jsx
const data = await d3.csv(`${basename}/data/planets.csv`);
```

*Note that after this change the page will temporarily be broken*

2. Change the header information for the new data
```typescript jsx

const columns: GridColDef[] = [
  { 
    field: 'method', 
    headerName: 'Organism', 
    width: 200 
  },
  {
    field: 'Common Name',
    headerName: 'Common Name',
    width: 150,
  },
  {
    field: 'Assembly',
    headerName: 'Assembly',
    width: 150,
  },
  {
    field: 'Data Usage Policy',
    headerName: 'Data Usage Policy',
    width: 150,
  },
  {
    field: 'Euk. BUSCO %',
    headerName: 'Euk. BUSCO %',
    type: 'number',
    width: 110,
  },
  {
    field: 'Emb. BUSCO %',
    headerName: 'Emb. BUSCO %',
    type: 'number',
    width: 110,
  }
];
```

OLD:
### Refresh the UI and look at the data

