import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DfS9kn39.js";import{M as l}from"./blocks-D924Z-Ts.js";import{L as r}from"./LinkCard-4L9H1KUE.js";import{G as o}from"./Grid-CFrOU1Su.js";import"./iframe-Dh3RriLC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-lX2PCvs9.js";import"./index-Cy8KTulP.js";import"./index-By1d73sw.js";import"./DefaultPropsProvider-QJ5kGH-K.js";import"./Paper-Cfw5dosL.js";import"./extendSxProp-Ct73gjyh.js";import"./useSlot-C7tA_WyJ.js";import"./mergeSlotProps-Bt4LBVWm.js";import"./ButtonBase-B0aqup6I.js";import"./emotion-react.browser.esm-B63p52zG.js";import"./isFocusVisible-B8k4qzLc.js";import"./Stack-1Kr5QA_Z.js";import"./Box-Cmw11ESO.js";import"./Typography-5YrRGSyO.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";function i(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Getting Started/Installation"}),`
`,e.jsx(t.h1,{id:"installation",children:"Installation"}),`
`,e.jsx(t.p,{children:"Follow the instructions below to get started with one of the STRUDEL Kit templates."}),`
`,e.jsx(t.h2,{id:"requirements",children:"Requirements"}),`
`,e.jsx(t.h4,{id:"nodejs-24-with-npm-and-npx",children:e.jsx(t.a,{href:"https://nodejs.org/en/download",rel:"nofollow",children:"Node.js 24+ with npm and npx"})}),`
`,e.jsx(t.p,{children:"Node.js is required to run the frontend templates included in STRUDEL Kit. Installing Node.js will also install npm (Node Package Manager) and npx (Node Package Executor), which are required to manage and run JavaScript packages."}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Mac and Linux Users"}),": It is recommended to use nvm to install node, npm, and npx."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Windows Users"}),": You have two recommended options for installing node and npm. If you use Powershell, the recommended way is to install using fnm. If you do not use Powershell, the recommended way is to download and run the Windows Installer from the nodejs download page. After running the installer, you will need to either completely reboot your terminal application or run ",e.jsx(t.code,{children:"SET PATH=C:\\Program Files\\nodejs;%PATH%"})," in order to use the node and npm commands on the command line."]}),`
`,e.jsx(t.h4,{id:"degit",children:e.jsx(t.a,{href:"https://github.com/Rich-Harris/degit",rel:"nofollow",children:"Degit"})}),`
`,e.jsx(t.p,{children:"Degit is a tool for cloning repositories and scaffolding projects without including the git history. It is recommended to install degit globally using npm."}),`
`,e.jsx(t.h4,{id:"docker",children:e.jsx(t.a,{href:"https://www.docker.com/get-started/",rel:"nofollow",children:"Docker"})}),`
`,e.jsx(t.p,{children:"Docker is required to run the backend templates included in STRUDEL Kit. Follow the instructions on the Docker website to install Docker for your operating system."}),`
`,e.jsx(t.h2,{id:"copy-a-template",children:"Copy a template"}),`
`,e.jsx(t.p,{children:"Open a terminal and navigate to the directory where you want your app to live."}),`
`,e.jsx(t.h4,{id:"fullstack-template",children:"Fullstack Template"}),`
`,e.jsxs(t.p,{children:["Copy your template of choice (e.g. ",e.jsx(t.code,{children:"explore-data"}),"):"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{children:`degit strudel-science/strudel-kit/templates/explore-data my-app
`})}),`
`,e.jsx(t.h4,{id:"frontend-template",children:"Frontend Template"}),`
`,e.jsx(t.p,{children:"You can also copy sections of a fullstack template if you don't need the whole backend and frontend:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{children:`degit strudel-science/strudel-kit/templates/explore-data/frontend my-frontend-app
`})}),`
`,e.jsx(t.h4,{id:"task-flow-template",children:"Task Flow Template"}),`
`,e.jsx(t.p,{children:"You may even want to combine or add a specific task flow to an existing frontend:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{children:`degit strudel-science/strudel-kit/templates/explore-data/frontend/src/pages/compare-data my-compare-data-page
`})}),`
`,e.jsx(t.h2,{id:"start-the-fullstack-app-with-docker",children:"Start the Fullstack App with Docker"}),`
`,e.jsxs(t.p,{children:["Follow the instructions in the ",e.jsx(t.a,{href:"https://github.com/strudel-science/strudel-kit/blob/main/templates/base-app/README.md#getting-started-with-docker",rel:"nofollow",children:"top-level README"})," of your template to start the whole app with Docker."]}),`
`,e.jsx(t.h2,{id:"start-the-frontend",children:"Start the Frontend"}),`
`,e.jsxs(t.p,{children:["Follow the instructions in the ",e.jsx(t.a,{href:"https://github.com/strudel-science/strudel-kit/blob/main/templates/base-app/frontend/README.md",rel:"nofollow",children:"frontend README"})," to start up just the frontend of your app."]}),`
`,e.jsx(t.h2,{id:"next-steps",children:"Next Steps"}),`
`,e.jsxs(o,{container:!0,columnSpacing:2,rowSpacing:2,marginBottom:2,children:[e.jsx(o,{item:!0,sm:4,children:e.jsx(r,{href:"/strudel-kit/docs/getting-started/first-steps",target:"_self",label:"First Steps",description:"Learn the basics with some guidance"})}),e.jsx(o,{item:!0,sm:4,children:e.jsx(r,{href:"/strudel-kit/docs/task-flows/overview",target:"_self",label:"Task Flows",description:"Learn how to customize Task Flows"})})]})]})}function v(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{v as default};
