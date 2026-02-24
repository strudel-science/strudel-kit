import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as a}from"./index-CdBz_BW3.js";import{M as o}from"./blocks-BcgF5v40.js";import"./iframe-Je2dcYBY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B9Dg0B64.js";import"./index-lRMvVXJi.js";import"./index-Dn6zoxiH.js";function s(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Tutorials/Get Started With STRUDEL/Configure Taskflow"}),`
`,e.jsx(n.h1,{id:"configure-your-task-flow",children:"Configure Your Task Flow"}),`
`,e.jsx(n.h2,{id:"introduction",children:"Introduction"}),`
`,e.jsx(n.p,{children:`Task Flows are are a set of steps (represented by a series of screens) that help a user accomplish a task and represent how a user progresses through a UI. STRUDEL has several Task Flow templates that built into a the starter app. In this example, you will work with the Task Flow called "Explore Data". Let's configure this Task Flow so that users can search and filter data about planets in the Solar System.`}),`
`,e.jsx(n.h2,{id:"remove-unused-task-flows",children:"Remove Unused Task Flows"}),`
`,e.jsxs(n.p,{children:["Before we start working with the Explore Data Task Flow, let's remove the Task Flows that we aren't going to be working with. Go to the ",e.jsx(n.code,{children:"src/pages"})," directory and delete the following folders (don't worry, you can bring them back using the command-line later if you wish):"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"compare-data"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"contribute-data"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"monitor-activities"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"playground"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"run-computation"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"search-data-repositories"})}),`
`]}),`
`,e.jsxs(n.p,{children:[`:::info Reference
To re-add or duplicate a Task Flow, you can navigate to the `,e.jsx(n.code,{children:"src/pages"})," directory and run:"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"npx degit strudel-science/strudel-kit/src/pages/TASK-FLOW-NAME"}),`
:::`]}),`
`,e.jsx(n.h2,{id:"rename-your-task-flow",children:"Rename Your Task Flow"}),`
`,e.jsxs(n.p,{children:["Let's rename the Explore Data Task Flow something that is more appropriate for our example. Inside the ",e.jsx(n.code,{children:"src/pages"})," directory, rename the ",e.jsx(n.code,{children:"explore-data"})," directory ",e.jsx(n.code,{children:"solar-system"}),". Doing this will change the URL route to this Task Flow's page. It will also update the link to the Task Flow on the home page. You should now be able to navigate to your Task Flow template at http://localhost:5175/solar-system."]}),`
`,e.jsx(n.p,{children:"If you followed that link, you will be taken to the default Explore Data page. Right now it is configured with default data and settings. Let's keep going to configure this Task Flow for own usecase."}),`
`,e.jsx(n.h2,{id:"task-flow-breakdown",children:"Task Flow Breakdown"}),`
`,e.jsxs(n.p,{children:["Let's look at the contents of ",e.jsx(n.code,{children:"src/pages/solar-system"}),", the directory that holds the Explore Data Task Flow template:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-py",children:`solar-system
├── -components
│  ├── DataView.tsx # Data grid component
│  ├── DataViewHeader.tsx # Header above data table
│  ├── FiltersPanel.tsx # Left side panel of filters
│  └── PreviewPanel.tsx # Panel displayable on row-click
├── -tests
│  └── explore-data.cy.ts # End-to-end test for this Task Flow
├── $id.tsx # Detail page for a single row
└── index.tsx # Data explorer page
`})}),`
`,e.jsx(n.p,{children:"There are three types of files in this template:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Page components"}),`
`,e.jsx(n.li,{children:"Sub-components"}),`
`,e.jsx(n.li,{children:"Tests"}),`
`]}),`
`,e.jsxs(n.p,{children:["The page components are the files that aren't inside a directory prefixed with ",e.jsx(n.code,{children:"-"}),". In this template that includes ",e.jsx(n.code,{children:"$id.tsx"})," and ",e.jsx(n.code,{children:"index.tsx"}),". These define the pages and URL routes that exist in our application. The strudel-kit uses TanStack Router to handle this. You may find it useful to scan their ",e.jsx(n.a,{href:"https://tanstack.com/router/latest/docs/framework/react/routing/file-based-routing",rel:"nofollow",children:"documentation and conventions"}),"."]}),`
`,e.jsxs(n.p,{children:["Sub-components are the files nested inside of the ",e.jsx(n.code,{children:"-components"})," directory. These are pieces of pages that are broken into their own files for brevity. Typically these are used inside page components."]}),`
`,e.jsx(n.p,{children:"The last type of file in this template is a test. This tests the basic functionality and flow of the Task Flow."}),`
`,e.jsxs(n.p,{children:["You can read more about the structure of Task Flow templates on the Task Flows ",e.jsx(n.a,{href:"/strudel-kit/docs/task-flows/overview",children:"Overview"})," page in the strudel-kit docs."]}),`
`,e.jsx(n.h2,{id:"add-a-data-source",children:"Add a Data Source"}),`
`,e.jsxs(n.p,{children:["Right now the Task Flow you created is pulling its data from the ",e.jsx(n.code,{children:"public/dummy-data/"})," directory. Let's instead create a new new data file that we will use for our Task Flow."]}),`
`,e.jsx(n.p,{children:"Open up a blank file and paste in the following content:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`Name,Diameter,Mass,Inclination,Eccentricity,Semi_majorAxis,SurfaceGravity,OrbitalPeriod,SiderealRotation,Satellites
Mercury,4879.4, 3.302×10^23, 7.004, 0.20563593, 0.38709927, 3.7, 0.241, 58.65, 0
Venus,12103.6, 4.869×10^24, 3.39471, 0.00677672, 0.72333566, 8.87, 0.615, 243.0187, 0
Earth,12756.3, 5.974×10^24, 0.00005, 0.01671123, 1.00000261, 9.78, 1, 0.997271, 1
Mars,6794.4, 6.419×10^23, 1.85061, 0.0933941, 1.52371034, 3.71, 1.881, 1.02595, 2
Jupiter,142984, 1.899×10^27, 1.3053, 0.04838624, 5.202887, 24.79, 11.86, 0.4135, 63
Saturn,120536, 5.688×10^26, 2.48446, 0.05386179, 9.53667594, 8.96, 29.46, 0.4264, 64
Uranus,51118, 8.683×10^25, 0.774, 0.04725744, 19.18916464, 7.77, 84.01, 0.7181, 27
Neptune,49572, 1.024×10^26, 1.76917, 0.00859048, 30.06992276, 11, 164.79, 0.6712, 14
`})}),`
`,e.jsxs(n.p,{children:["Save this file in ",e.jsx(n.code,{children:"public/data"})," and name it ",e.jsx(n.code,{children:"planets.csv"}),"."]}),`
`,e.jsx(n.h3,{id:"edit-the-task-flow-data-source",children:"Edit the Task Flow Data Source"}),`
`,e.jsxs(n.p,{children:["Now you need to tell the Task Flow to use the new data source you just created. For this template, the data source is referenced inside the file ",e.jsx(n.code,{children:"solar-system/-components/DataView.tsx"}),"."]}),`
`,e.jsx(n.p,{children:":::info Reference"}),`
`,e.jsxs(n.p,{children:["The primary configurable portions of a Task Flow template are marked with comments that say ",e.jsx(n.code,{children:"CUSTOMIZE:"}),`. You might find it useful to do a project-wide search for this phrase when you are setting up a new Task Flow.
:::`]}),`
`,e.jsxs(n.p,{children:["Inside ",e.jsx(n.code,{children:"DataView.tsx"}),", locate the following line of code:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`dataSource: 'dummy-data/exoplanets.csv',
`})}),`
`,e.jsx(n.p,{children:"Now change this to reflect the path to your newly created CSV file:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`dataSource: 'data/planets.csv',
`})}),`
`,e.jsxs(n.p,{children:["Then locate ",e.jsx(n.code,{children:"dataIdField"})," and change this to ",e.jsx(n.code,{children:"Name"})," (the unique column in your new dataset):"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`const dataIdField = 'Id';
`})}),`
`,e.jsx(n.p,{children:"Becomes:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`const dataIdField = 'Name';
`})}),`
`,e.jsxs(n.p,{children:["Now instead of pointing to the default dataset, your Task Flow points to the planets dataset you made. Next, we need to change the page titles, table columns, and filters for the main ",e.jsx(n.code,{children:"index"})," page."]}),`
`,e.jsx(n.h2,{id:"modify-page-elements",children:"Modify Page Elements"}),`
`,e.jsx(n.p,{children:"Let's first start simple by changing the page titles for this Task Flow."}),`
`,e.jsx(n.h3,{id:"page-titles",children:"Page Titles"}),`
`,e.jsxs(n.p,{children:["Open up ",e.jsx(n.code,{children:"src/pages/solar-system/index.tsx"}),". This is the initial page of the Task Flow. Scan this file for the ",e.jsx(n.code,{children:"<PageHeader />"})," component:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<PageHeader
  // CUSTOMIZE: the page title
  pageTitle="Explore Data App"
  // CUSTOMIZE: the page description
  description="Description of this app"
  sx={{
    marginBottom: 1,
    padding: 2,
  }}
/>
`})}),`
`,e.jsxs(n.p,{children:["Replace the ",e.jsx(n.code,{children:"pageTitle"})," prop value with ",e.jsx(n.code,{children:'"Solar System Explorer"'})," and the ",e.jsx(n.code,{children:"description"})," prop value with ",e.jsx(n.code,{children:'"Explore data about the planets that orbit the Sun."'}),"."]}),`
`,e.jsx(n.p,{children:":::info Reference"}),`
`,e.jsx(n.p,{children:`A prop is like an input or argument for a React component. They are used to make components more reusable and dynamic.
:::`}),`
`,e.jsx(n.p,{children:"Your component should now look like this:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<PageHeader
  // CUSTOMIZE: the page title
  pageTitle="Solar System Explorer"
  // CUSTOMIZE: the page description
  description="Explore data about the planets that orbit the Sun."
  sx={{
    marginBottom: 1,
    padding: 2,
  }}
/>
`})}),`
`,e.jsx(n.p,{children:"Save this file and you should see the new page titles in your browser at http://localhost:5175/solar-system."}),`
`,e.jsx(n.h3,{id:"filters",children:"Filters"}),`
`,e.jsxs(n.p,{children:["The filters are also defined in the ",e.jsx(n.code,{children:"index.tsx"})," file so keep that file open for this next step. Locate the array towards the top of the file called ",e.jsx(n.code,{children:"filterConfigs"}),". This array defines which filters to render, how they should render, and how they should connect to the data."]}),`
`,e.jsx(n.p,{children:"Replace that whole array definition with one that works with our new data source:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`// CUSTOMIZE: the filter definitions
const filterConfigs: FilterConfig[] = [
  {
    field: "Diameter",
    label: "Diameter (km)",
    filterComponent: "Slider",
    filterProps: {
      min: 4000,
      max: 150000
    }
  }
];
`})}),`
`,e.jsx(n.p,{children:"Save this file and you should see the new filter in your browser at http://localhost:5175/solar-system."}),`
`,e.jsx(n.h3,{id:"columns",children:"Columns"}),`
`,e.jsxs(n.p,{children:["The columns to display in the table are defined in the ",e.jsx(n.code,{children:"DataView.tsx"})," component inside the ",e.jsx(n.code,{children:"-components"})," directory (the same one where we defined the data source). Open up that file and locate the ",e.jsx(n.code,{children:"<SciDataGrid />"})," component."]}),`
`,e.jsxs(n.p,{children:["Inside this component is a prop called ",e.jsx(n.code,{children:"columns"}),". Replace the value of this prop with an array of column definitions for our new dataset:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`// CUSTOMIZE: the table columns
columns={[
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
]}
`})}),`
`,e.jsx(n.p,{children:"Save this file and you should see the new columns show up in the table in your browser at http://localhost:5175/solar-system."}),`
`,e.jsxs(n.p,{children:["You should now have a fully functioning Explore Data Task Flow page when you navigate to the ",e.jsx(n.code,{children:"/solar-system"})," route!"]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/img/tutorial/start-explore-data-2.png",alt:"Screenshot of solar system Task Flow in a browser"})}),`
`,e.jsx(n.p,{children:"This is great, but it would be good to be able to access this page from the navbar instead. Let's add a link to the Solar System page in the top navigation bar."}),`
`,e.jsx(n.h2,{id:"update-the-navigation-bar",children:"Update the Navigation Bar"}),`
`,e.jsxs(n.p,{children:["Open the file located at ",e.jsx(n.code,{children:"src/components/TopBar.tsx"}),". This component controls the contents of the top navigation bar."]}),`
`,e.jsxs(n.p,{children:["Locate the last closing ",e.jsx(n.code,{children:"</AppLink>"})," and add another ",e.jsx(n.code,{children:"<AppLink>"})," component directly after:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<AppLink to="/solar-system">Solar System</AppLink>
`})}),`
`,e.jsxs(n.p,{children:["You may also want to update the title in the previous ",e.jsx(n.code,{children:"<AppLink>"}),' to say something other than "My Project":']}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<AppLink to="/">
  <Typography variant="h6" component="div" fontWeight="bold">
    Planets
  </Typography>
</AppLink>
`})}),`
`,e.jsxs(n.p,{children:["To do this we are going to open the global strudel configuration file ",e.jsx(n.code,{children:"strudel.config.ts"})," located at the root of our app."]}),`
`,e.jsx(n.p,{children:'Save that file and you should see a new "Solar System" link in the navbar.'}),`
`,e.jsx(n.p,{children:"Woohoo! You now have your first fully connected Task Flow."}),`
`,e.jsx(n.h2,{id:"next-steps",children:"Next steps"}),`
`,e.jsx(n.p,{children:"The next section provides some examples of how to customize your Task Flow."})]})}function u(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{u as default};
