import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-CdBz_BW3.js";import{M as a}from"./blocks-BcgF5v40.js";import"./iframe-Je2dcYBY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B9Dg0B64.js";import"./index-lRMvVXJi.js";import"./index-Dn6zoxiH.js";function o(n){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Customization/Connecting Task Flows"}),`
`,e.jsx(t.h1,{id:"connecting-task-flows",children:"Connecting Task Flows"}),`
`,e.jsx(t.h2,{id:"how-to-connect-task-flows-together",children:"How to Connect Task Flows Together"}),`
`,e.jsx(t.p,{children:"Task Flows don't always exist in isolation inside apps. Instead, Task Flows often fit together in various ways. In this article you will learn how to connect steps from two different task flows into a larger flow."}),`
`,e.jsx(t.p,{children:"In this example, you will connect an Explore Data Task Flow with a Run Computation Task Flow. For this new app, you want to have an explorer page like the one in Explore Data but you also want to be able to run different computations based on a selected row from the explorer."}),`
`,e.jsx(t.h3,{id:"1-add-both-task-flows-to-your-app",children:"1. Add both Task Flows to your app"}),`
`,e.jsx(t.p,{children:"If you haven't already, add both the Explore Data and Run Computation Task Flows into your app:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{children:`cd src/pages
npx degit strudel-science/strudel-kit/src/pages/explore-data explore
npx degit strudel-science/strudel-kit/src/pages/run-computation compute
`})}),`
`,e.jsx(t.h3,{id:"2-plan-the-page-flow",children:"2. Plan the page flow"}),`
`,e.jsxs(t.p,{children:["First, you need to determine how the user should flow through the pages of the two apps. Where will a user go from one Task Flow to another? Are there any pages you should skip or eliminate? In this example, you want users to be able to click on a row and run a compuation for that row by clicking a new button in the ",e.jsx(t.code,{children:"<PreviewPanel>"})," of the ",e.jsx(t.code,{children:"<DataExplorer>"}),". Then you want users to be able to enter in some parameters, initiate the computation, and see some results."]}),`
`,e.jsx(t.h3,{id:"3-add-direct-links-between-pages-from-two-task-flows",children:"3. Add direct links between pages from two Task Flows."}),`
`,e.jsxs(t.p,{children:["For this flow, you want users to go from the ",e.jsx(t.code,{children:"<PreviewPanel>"})," in the Explore Data Task Flow to the ",e.jsx(t.code,{children:"<Settings>"})," page in the Run Computation Task Flow. The first thing you need to do is create a new button link in the ",e.jsx(t.code,{children:"<PreviewPanel>"})," that links to the ",e.jsx(t.code,{children:"<Settings>"})," page. Open up ",e.jsx(t.code,{children:"PreviewPanel.tsx"})," inside the ",e.jsx(t.code,{children:"_components"}),' folder of the explore page and add a new link and button right next to the "View Details" button:']}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`<AppLink to="/compute/scenario/settings">
  <Button variant="contained">Analyze</Button>
</AppLink>
`})}),`
`,e.jsxs(t.p,{children:["In the ",e.jsx(t.code,{children:"to"})," prop, you will notice that we are linking to the route of the settings page. Now, clicking this button will take us directly to that step. This is the most straightforward way to connect two Task Flows with STRUDEL Kit."]}),`
`,e.jsxs(t.p,{children:["To add a link back to the explore page from the settings page, open up ",e.jsx(t.code,{children:"compute/_layout/$id/_layout.tsx"})," in the compute Task Flow folder, delete the whole ",e.jsx(t.code,{children:"<Breadcrumbs>...</Breadcrumbs>"})," component, and replace it with a link button:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`<AppLink to="/explore">
  <Button variant="contained">Back to Explorer</Button>
</AppLink>
`})}),`
`,e.jsx(t.h2,{id:"optional-steps",children:"Optional Steps"}),`
`,e.jsx(t.h3,{id:"remove-unused-pages-and-elements",children:"Remove unused pages and elements"}),`
`,e.jsx(t.p,{children:"If you do not need to keep the original Run Computation Task Flow intact, then you can safely delete the unused pages/components from the file system."}),`
`,e.jsxs(t.p,{children:["In this example, you are no longer using the ",e.jsx(t.code,{children:"data-inputs.tsx"})," page or the ",e.jsx(t.code,{children:"index.tsx"})," page in the compute Task Flow directory. At this point you can safely delete those two files."]}),`
`,e.jsxs(t.p,{children:['You should also delete the "Data Inputs" step from the ',e.jsx(t.code,{children:"<Stepper>"})," component in ",e.jsx(t.code,{children:"settings.tsx"}),", ",e.jsx(t.code,{children:"running.tsx"}),", and ",e.jsx(t.code,{children:"results.tsx"})," which all live in ",e.jsx(t.code,{children:"compute/_layout/$id/_layout"}),":"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`// Remove this code from \`settings.tsx\`, \`running.tsx\`, and \`results.tsx\`
<Step key={taskflow.pages.dataInputs.title}>
  <StepLabel>
    <AppLink
      to="/run-computation/$id/data-inputs"
      params={{ id: 'new' }}
      sx={{ color: 'inherit', textDecoration: 'none' }}
    >
      Data Inputs
    </AppLink>
  </StepLabel>
</Step>
`})}),`
`,e.jsx(t.h2,{id:"limitations-and-next-steps",children:"Limitations and Next Steps"}),`
`,e.jsxs(t.p,{children:["These instructions have helped you connect the user interfaces of two different Task Flows but they did not cover how to connect the ",e.jsx(t.em,{children:"data"})," between two Task Flows. This is absolutely possible and necessary but requires more knowledge of the React state. If you would like help passing data between app sections and loading data dynamically based on URL parameters, check out the Kent C. Dodds' article on ",e.jsx(t.a,{href:"https://kentcdodds.com/blog/application-state-management-with-react",rel:"nofollow",children:"Application State Management in React"}),"."]})]})}function x(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{x as default};
