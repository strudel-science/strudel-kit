import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-CdBz_BW3.js";import{M as s}from"./blocks-BcgF5v40.js";import"./iframe-Je2dcYBY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B9Dg0B64.js";import"./index-lRMvVXJi.js";import"./index-Dn6zoxiH.js";function a(n){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Tutorials/Get Started With STRUDEL/Customize Taskflow"}),`
`,e.jsx(t.h1,{id:"customize-your-task-flow",children:"Customize Your Task Flow"}),`
`,e.jsx(t.p,{children:"Now that you have set up your initial task flow let's customize some of the content within it. In this section you will learn how to remove, add, and edit sections in a task flow page."}),`
`,e.jsx(t.h2,{id:"remove-an-element",children:"Remove an Element"}),`
`,e.jsx(t.p,{children:`Often you won't want to use all of the page elements that come with a Task Flow. For this tutorial, you remove the "Related Data" table in the preview panel that displays when you click on a row. Because you don't have any nested or linked data for each planet in the table, this element isn't useful to the UI right now.`}),`
`,e.jsxs(t.p,{children:["First, look inside the ",e.jsx(t.code,{children:"src/pages/solar-system/"})," directory that was generated when you first added your task flow."]}),`
`,e.jsxs(t.p,{children:["These are the files that determine how this specific Task Flow will be rendered in the UI. Some of these files reference other components that are common to the whole app, but these components are specific to the ",e.jsx(t.code,{children:"solar-system"})," Task Flow."]}),`
`,e.jsxs(t.p,{children:["For this step, open ",e.jsx(t.code,{children:"PreviewPanel.tsx"}),' because the "Related Data" table is in the preview panel.']}),`
`,e.jsx(t.p,{children:'Next, find the code that renders the "Related Data" section:'}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`<Box>
  <Typography fontWeight="medium" mb={1}>
    Related Data
  </Typography>
  <DataGrid
    rows={relatedRows}
    columns={relatedColumns}
    disableRowSelectionOnClick
    initialState={{
      pagination: { paginationModel: { pageSize: 5 } },
    }}
  />
</Box>
`})}),`
`,e.jsxs(t.p,{children:["This section of code includes a ",e.jsx(t.code,{children:"Box"})," component to wrap around the whole section, a ",e.jsx(t.code,{children:"Typography"})," component to display the section heading, and a ",e.jsx(t.code,{children:"DataGrid"})," component to display the related data in a table."]}),`
`,e.jsxs(t.p,{children:["Delete this whole section of code, from ",e.jsx(t.code,{children:"<Box>"})," to ",e.jsx(t.code,{children:"</Box>"})," and save ",e.jsx(t.code,{children:"PreviewPanel.tsx"}),'. Refresh the Explorer page in the browser. The "Related Data" section should now be gone and the "View Details" and "Export Data" buttons should be directly below the other content.']}),`
`,e.jsx(t.h2,{id:"edit-the-preview-panel-content",children:"Edit the Preview Panel Content"}),`
`,e.jsxs(t.p,{children:["Now let's make the preview panel display more useful information. In this step, you are going to edit the property-value tables in the preview panel so that they display data from your data source: ",e.jsx(t.code,{children:"planets.csv"}),"."]}),`
`,e.jsxs(t.p,{children:["With ",e.jsx(t.code,{children:"PreviewPanel.tsx"}),' open, find the code that renders the "Property Group 1" section:']}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`<Box>
  <Typography fontWeight="medium" mb={1}>
    Property Group 1
  </Typography>
  <LabelValueTable
    rows={[
      { label: 'Property 1', value: 'value' },
      { label: 'Property 2', value: 'value' },
      { label: 'Property 3', value: 'value' },
    ]}
  />
</Box>
`})}),`
`,e.jsxs(t.p,{children:['Just like the "Related Data" section, there is a ',e.jsx(t.code,{children:"Box"})," component and a ",e.jsx(t.code,{children:"Typography"})," component but there is also a ",e.jsx(t.code,{children:"LabelValueTable"})," component. This component renders a list of properties and their values in a readable two-column format."]}),`
`,e.jsx(t.h3,{id:"replace-the-section-label",children:"Replace the Section Label"}),`
`,e.jsx(t.p,{children:`For this first section, let's display the physical characteristics of the planet. Replace "Property Group 1" with "Physical Characteristics".`}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`<Typography fontWeight="medium" mb={1}>
  Physical Characteristics
</Typography>
`})}),`
`,e.jsx(t.p,{children:'Refresh your browser and make sure "Physical Characteristics" displays as the section label.'}),`
`,e.jsx(t.h3,{id:"connect-your-data-to-the-preview-panel-using-the-state-variable",children:"Connect your data to the preview panel using the state variable"}),`
`,e.jsxs(t.p,{children:["Next, you will replace the rows in the ",e.jsx(t.code,{children:"LabelValueTable"})," with data from the planet that the user has clicked. To do this, you need to access the ",e.jsx(t.code,{children:"props"})," of the ",e.jsx(t.code,{children:"PreviewPanel"})," component. This component has a prop called ",e.jsx(t.code,{children:"previewItem"}),". Data in the ",e.jsx(t.code,{children:"previewItem"})," prop is dynamic. This means that it changes based on actions that the user takes or external events like data requests. In this case, it changes when a user clicks on a row in the main data table."]}),`
`,e.jsxs(t.p,{children:["In the ",e.jsx(t.code,{children:"PreviewPanel"})," component, the ",e.jsx(t.code,{children:"previewItem"})," prop is defined near the top of the component:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`export const PreviewPanel: React.FC<PreviewPanelProps> = ({ previewItem, onClose }) => {
  ...
}
`})}),`
`,e.jsxs(t.p,{children:["There are other pieces here, but for now just focus on the ",e.jsx(t.code,{children:"previewItem"})," variable. When a user clicks on a row in this task flow, the data in that row is stored in ",e.jsx(t.code,{children:"previewItem"}),'. Now, replace "Property 1" in the first ',e.jsx(t.code,{children:"LabelValueTable"}),' with the "Diameter" property for the selected planet:']}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`<LabelValueTable
  rows={[
    { label: 'Diameter', value: previewItem['Diameter'] },
    { label: 'Property 2', value: 'value' },
    { label: 'Property 3', value: 'value' },
  ]}
/>
`})}),`
`,e.jsxs(t.p,{children:['Here you have replaced the first label with "Diameter" and replaced the value with the value of the ',e.jsx(t.code,{children:"Diameter"}),' property from the selected row. Refresh the page and make sure your see a number next to the "Diameter" label in the preview panel. Click around to different rows. Do you see the number changing?']}),`
`,e.jsx(t.p,{children:"Add a few more dynamic rows to the table in this section:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`<LabelValueTable
  rows={[
    { label: 'Diameter', value: previewItem['Diameter'] },
    { label: 'Mass', value: previewItem['Mass'] },
    { label: 'Surface Gravity', value: previewItem['SurfaceGravity'] },
  ]}
/>
`})}),`
`,e.jsxs(t.p,{children:["Notice that you can access properties that aren't displayed in the main table. Even though ",e.jsx(t.code,{children:"SurfaceGravity"})," wasn't defined in the main table columns, it is still part of the underlying data so it is present in the internal task flow ",e.jsx(t.code,{children:"state"}),". Also notice that the label can be any string you want, but the value must use the exact name of the property column in ",e.jsx(t.code,{children:"planets.csv"}),"."]}),`
`,e.jsxs(t.p,{children:["Next, add dynamic rows to the second ",e.jsx(t.code,{children:"LabelValueTable"}),'. Replace the section label "Property Group 2" with "Orbital Characteristics" and add dynamic data points for the other columns in ',e.jsx(t.code,{children:"planets.csv"}),":"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`<Box>
  <Typography fontWeight="medium" mb={1}>
    Orbital Characteristics
  </Typography>
  <LabelValueTable
    rows={[
      { label: 'Inclination', value: previewItem['Inclination'] },
      { label: 'Eccentricity', value: previewItem['Eccentricity'] },
      { label: 'Semi Major Axis', value: previewItem['Semi_majorAxis'] },
      { label: 'Orbital Period', value: previewItem['OrbitalPeriod'] },
      { label: 'Sidereal Rotation', value: previewItem['SiderealRotation'] },
      { label: 'Satellites', value: previewItem['Satellites'] },
    ]}
  />
</Box>
`})}),`
`,e.jsx(t.p,{children:"Refresh the page and make sure you see dynamic values in both sections of the preview panel."}),`
`,e.jsx(t.p,{children:"Let's clean up the preview panel so that there's no more placeholder content. Find the placeholder subtitle section and remove it:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`// Delete this line
<Typography variant="body2">
  Row description, subtitle, or helper text.
</Typography>
`})}),`
`,e.jsx(t.p,{children:'Now find the code that renders the "Preview Heading":'}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`<Typography variant="h6" component="h3" flex={1}>
  <Link component={RouterLink} to="." underline="hover">
    Preview Heading
  </Link>
</Typography>
`})}),`
`,e.jsxs(t.p,{children:['Replace "Preview Heading" with the name of the planet by accessing the ',e.jsx(t.code,{children:"Name"})," column:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`<Typography variant="h6" component="h3" flex={1}>
  <Link component={RouterLink} to="." underline="hover">
    {previewItem['Name']}
  </Link>
</Typography>
`})}),`
`,e.jsxs(t.p,{children:["Here you are doing the same thing you did in the ",e.jsx(t.code,{children:"LabelValueTable"})," components, except there is one small difference: the variable is wrapped with curly braces ",e.jsx(t.code,{children:"{...}"}),`. This is necessary because in React, curly braces indicate that a variable or function is going to be used in the component, otherwise it would render the literal text, "previewItem['Name']". This wasn't necessary in the `,e.jsx(t.code,{children:"LabelValueTable"})," because there are already curly braces around the whole ",e.jsx(t.code,{children:"row"})," prop."]}),`
`,e.jsx(t.p,{children:"Refresh the page. You should see the planet name at the top of the preview panel."}),`
`,e.jsx(t.h3,{id:"add-dynamic-images",children:"Add dynamic images"}),`
`,e.jsxs(t.p,{children:["In this step you will add an image for each planet and display it in the preview panel. First, create a new ",e.jsx(t.code,{children:"images"})," directory inside the ",e.jsx(t.code,{children:"public/"})," directory at the top level of the app."]}),`
`,e.jsxs(t.p,{children:["Then, download the ",e.jsx(t.code,{children:"planets.zip"})," file using the link below:"]}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"/img/tutorial/planets.zip",children:"Click to download planets.zip"})}),`
`,e.jsxs(t.p,{children:["Double-click the ",e.jsx(t.code,{children:"planets.zip"})," file you downloaded to unpack the files, then drill into the ",e.jsx(t.code,{children:"planets"})," directory and copy the 8 files. There should be one file for each planet."]}),`
`,e.jsxs(t.p,{children:["Paste the 8 planet images into ",e.jsx(t.code,{children:"public/images"}),"."]}),`
`,e.jsxs(t.p,{children:["Now you are ready to start incorporating the images into the preview panel. Open ",e.jsx(t.code,{children:"PreviewPanel.tsx"}),' and fine the "Physical Characteristics" section you edited earlier:']}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`<Box>
  <Typography fontWeight="medium" mb={1}>
    Physical Characteristics
  </Typography>
  <LabelValueTable
    rows={[
      { label: 'Diameter', value: previewItem['Diameter'] },
      { label: 'Mass', value: previewItem['Mass'] },
      { label: 'Surface Gravity', value: previewItem['SurfaceGravity'] },
    ]}
  />
</Box>
`})}),`
`,e.jsxs(t.p,{children:["Add an ",e.jsx(t.code,{children:"<img>"})," tag directly above this section. The ",e.jsx(t.code,{children:"img"})," tag uses the ",e.jsx(t.code,{children:"src"})," attribute to tell it which image to display. In this case, you want the image to be different depending on the row that is selected. To do that, you are going to inject the planet's name into the path to the image:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:"<img src={`images/${previewItem['Name']}.jpg`} />\n"})}),`
`,e.jsxs(t.p,{children:["Here you are using a JavaScript syntax called a ",e.jsx(t.em,{children:"template literal"}),". Instead of using quotes to wrap the string, you use backticks (",e.jsx(t.code,{children:"`"}),") which lets you embed dynamic content inside the string using a dollar sign and curly braces (",e.jsx(t.code,{children:"${expression}"}),")."]}),`
`,e.jsx(t.p,{children:"Refresh your browser and check that the planet images are showing up in the preview panel when you click on a planet row."}),`
`,e.jsx(t.p,{children:"This is great but the images are looking a little too big. Let's add a uniform height to the images so that users can more easily see both the image and the characteristics data."}),`
`,e.jsxs(t.p,{children:["To do this, import the ",e.jsx(t.code,{children:"ImageWrapper"})," component below the other imports at the top of the file:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`import { ImageWrapper } from '../../components/ImageWrapper';
`})}),`
`,e.jsxs(t.p,{children:["Then wrap your image with the ",e.jsx(t.code,{children:"ImageWrapper"})," component and specify a height using the component's ",e.jsx(t.code,{children:"height"})," prop:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`<ImageWrapper height="300px">
  <img src={\`images/\${previewItem['Name']}.jpg\`} />
</ImageWrapper>
`})}),`
`,e.jsxs(t.p,{children:["To make sure the images are accessible, add alt text to the ",e.jsx(t.code,{children:"img"})," tag. Alt text is used by screen readers to describe images to users and it is also displayed if the image has trouble loading."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`<ImageWrapper height="300px">
  <img
    src={\`images/\${previewItem['Name']}.jpg\`}
    alt={\`Satellite image of \${previewItem['Name']}\`}
  />
</ImageWrapper>
`})}),`
`,e.jsx(t.p,{children:"Refresh your page and make sure the images are smaller and all the same height."}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/img/tutorial/mid-preview-panel-2.png",alt:"Screenshot of planet images in the preview panel"})}),`
`,e.jsx(t.p,{children:"Woohoo! You're done with task flow customizations for now."}),`
`,e.jsx(t.h2,{id:"next-steps",children:"Next Steps"}),`
`,e.jsx(t.p,{children:"At this point you have a task flow that is starting to be tailored to a particular data source and use-case. In the next section you will learn how to customize the app as a whole and make it your own."})]})}function u(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(a,{...n})}):a(n)}export{u as default};
