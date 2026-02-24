import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-CdBz_BW3.js";import{M as s}from"./blocks-BcgF5v40.js";import"./iframe-Je2dcYBY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B9Dg0B64.js";import"./index-lRMvVXJi.js";import"./index-Dn6zoxiH.js";function o(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Tutorials/Get Started With STRUDEL/Setup"}),`
`,e.jsx(t.h1,{id:"setup-your-project",children:"Setup Your Project"}),`
`,e.jsxs(t.p,{children:["The first step is to start a terminal program. The rest of this tutorial will assume you are using a standard MacOS, UNIX, or ",e.jsx(t.a,{href:"https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-windows?view=powershell-7.4",rel:"nofollow",children:"Windows PowerShell"})," (not command.exe) terminal. This ensures that all the command line steps follow the same syntax."]}),`
`,e.jsxs(t.p,{children:["Then, make sure you have followed the instructions on the ",e.jsx(t.a,{href:"/strudel-kit/docs/getting-started/installation",children:"Installation"})," page so that you have node, npm, and npx installed on your system. You can confirm you have these tools using the commands below:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{children:`node --version
npm --version
npx --version
`})}),`
`,e.jsx(t.h2,{id:"generate-a-new-project",children:"Generate a New Project"}),`
`,e.jsxs(t.p,{children:["Start a new project named ",e.jsx(t.code,{children:"planets-app"})," using the strudel-kit code:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{children:`npx degit strudel-science/strudel-kit planets-app
`})}),`
`,e.jsx(t.p,{children:'Note that this may prompt you to install degit from npm. Make sure you click select "yes" to install it.'}),`
`,e.jsxs(t.p,{children:["Once installed, this will generate a new folder called ",e.jsx(t.code,{children:"planets-app"})," with the strudel-kit base app and Task Flow templates embedded in it. See the ",e.jsx(t.a,{href:"/strudel-kit/docs/getting-started/project-structure",children:"Project Structure"})," page to get a breakdown of all the generated files."]}),`
`,e.jsx(t.h2,{id:"run-your-project",children:"Run Your Project"}),`
`,e.jsx(t.p,{children:"Go into the new directory:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-bash",children:`cd planets-app
`})}),`
`,e.jsx(t.p,{children:"Install the app dependencies:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-bash",children:`npm install
`})}),`
`,e.jsx(t.p,{children:"Start up your app locally:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-bash",children:`npm start
`})}),`
`,e.jsx(t.p,{children:"Open your app in the browser at http://localhost:5175"}),`
`,e.jsxs(t.p,{children:["In the future, when you run your app, you will not need to perform the install step -- just ",e.jsx(t.code,{children:"npm start"}),`. In fact, the development server that this runs is able to update the app "live" as you change the code in this directory, so you don't need to stop and restart the app for each change.`]}),`
`,e.jsx(t.h2,{id:"open-your-application-code",children:"Open Your Application Code"}),`
`,e.jsxs(t.p,{children:["For the rest of the tutorial you will need a code editor to make changes to the files in your app. We recommend ",e.jsx(t.a,{href:"https://code.visualstudio.com/",rel:"nofollow",children:"VSCode"})," but any editor will do."]}),`
`,e.jsxs(t.p,{children:["From your code editor, open the ",e.jsx(t.code,{children:"planets-app"})," folder."]})]})}function m(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{m as default};
