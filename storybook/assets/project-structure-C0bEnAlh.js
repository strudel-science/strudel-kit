import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-3EyqOuys.js";import{M as i}from"./blocks-B4NPRWxa.js";import{L as a}from"./LinkCard-Ca7tcZED.js";import{G as n}from"./Grid-BOh2b8tF.js";import"./iframe-BiaxjWoJ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-O-s7iJmp.js";import"./index-BKPKUIEW.js";import"./index-BQkhufpm.js";import"./DefaultPropsProvider-SDp22Tyy.js";import"./Paper-Du-VHNRZ.js";import"./extendSxProp-Cj_SnhT5.js";import"./useSlot-RYtHUwT8.js";import"./mergeSlotProps-B6cFIGk9.js";import"./ButtonBase-BP7DpbGw.js";import"./emotion-react.browser.esm-NCs7nFKc.js";import"./isFocusVisible-B8k4qzLc.js";import"./Stack-ChquVhXR.js";import"./Box-p382ixrC.js";import"./Typography-wweMabGO.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";function s(o){const t={a:"a",code:"code",p:"p",pre:"pre",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Getting Started/Project Structure"}),`
`,e.jsx(t.p,{children:"After creating a new project from the strudel-kit code, you will have the basic scaffolding for a STRUDEL-powered React app."}),`
`,e.jsx(t.p,{children:"The app comes pre-baked with all libraries in the STRUDEL Tech Stack, all the Task Flow templates currently available, a set of custom components that are used across the app, and some handy development and CI tools."}),`
`,e.jsx(t.p,{children:"There are quite a few directories and files that are part of the project structure. These handle things such as pages, shared components, routing, configurations, and continuous integration. Below is a breakdown of the project structure:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-py",children:`├── .github # GitHub actions and templates
├── .husky # Pre-commit hook to run before "git commit"
├── cypress # End-to-end testing
├── docs # Docs app, can be deleted or replaced with your own docs
├── public # Static files e.g. images, data, favicon
├── src
│  ├── components # Components that are shared across the app
│  ├── context # State variables and actions shared across the app
│  ├── hooks # Custom React functions for data fetching and more
│  ├── pages # File-based router entry point (TanStack Router)
│  │  ├── compare-data # Task Flow template (/compare-data page)
│  │  ├── contribute-data # Task Flow template (/contribute-data page)
│  │  ├── explore-data # Task Flow template (/explore-data page)
│  │  ├── monitor-activities # Task Flow template (/monitor-activites page)
│  │  ├── playground # Playground template (/playground page)
│  │  ├── run-computation # Task Flow template (/run-computation page)
│  │  ├── search-data-repositories # Task Flow template (/search-data-repositories page)
│  │  ├── __root.tsx # Wrapper component for all pages
│  │  └── index.tsx # Home page (/ page)
│  ├── types # TypeScript definitions used across the app
│  ├── utils # Utility functions used across the app
│  ├── App.tsx # Top-level app component
│  ├── declarations.d.ts # Type extensions for MUI
│  ├── index.css # Base CSS styles
│  ├── main.tsx # App entry point
│  ├── routeTree.gen.ts # Auto-generated route tree by TanStack Router (do not edit manually)
│  ├── theme.tsx # Full MUI theme configuration
│  └── vite-env.d.ts
├── .eslintrc.json # ESLint configuration
├── .gitignore # Files for git to ignore
├── .lintstagedrc.json # Linstaged configuration (executed on precommit)
├── .prettierrc.json # Prettier configuration for code formatting
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── COPYRIGHT.md
├── LICENSE
├── README.md
├── cypress.config.ts # Testing configuration
├── index.html # HTML entry point
├── package-lock.json # Full dependency list
├── package.json # Dependencies and project metadata
├── tsconfig.json # TypeScript configuration
├── tsconfig.node.json # Vite-level TypeScript configuration
├── tsr.config.json # TanStack Router configuration
└── vite.config.ts # Vite configuration
`})}),`
`,e.jsxs(t.p,{children:["The primary areas for customization purposes are ",e.jsx(t.code,{children:"src/pages"})," and ",e.jsx(t.code,{children:"src/components"}),". The ",e.jsx(t.code,{children:"src/pages"})," directory contains all of the unique pages and routing structure in the app. Each Task Flow template is a top-level directory in ",e.jsx(t.code,{children:"src/pages"}),'. To see a breakdown of a specific Task Flow, go to its page in the docs under the "Task Flows" section.']}),`
`,e.jsxs(t.p,{children:["You can also customize the global theme in ",e.jsx(t.code,{children:"src/theme.tsx"}),". This uses the MUI theme object to make app-wide style adjustments. See ",e.jsx(t.a,{href:"https://mui.com/material-ui/customization/default-theme/",rel:"nofollow",children:"MUI's theme documentation"}),"."]}),`
`,e.jsxs(n,{container:!0,columnSpacing:2,rowSpacing:2,marginBottom:2,children:[e.jsx(n,{item:!0,sm:4,children:e.jsx(a,{href:"/strudel-kit/docs/task-flows/overview",target:"_self",label:"Task Flows"})}),e.jsx(n,{item:!0,sm:4,children:e.jsx(a,{href:"/strudel-kit/docs/guides/tutorials/basic-app-with-strudel/customize-taskflow",target:"_self",label:"Customize Your Task Flow"})}),e.jsx(n,{item:!0,sm:4,children:e.jsx(a,{href:"/strudel-kit/docs/guides/combine-sections",target:"_self",label:"Combining Sections"})}),e.jsx(n,{item:!0,sm:4,children:e.jsx(a,{href:"/strudel-kit/docs/guides/connect-task-flows-together",target:"_self",label:"Connecting Task Flows"})})]})]})}function R(o={}){const{wrapper:t}={...r(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(s,{...o})}):s(o)}export{R as default};
