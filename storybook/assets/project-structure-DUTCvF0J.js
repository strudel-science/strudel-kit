import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-CdBz_BW3.js";import{M as r}from"./blocks-BcgF5v40.js";import{L as i}from"./LinkCard-BWhM_QW1.js";import{G as o}from"./Grid-Bi6VWcn7.js";import"./iframe-Je2dcYBY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B9Dg0B64.js";import"./index-lRMvVXJi.js";import"./index-Dn6zoxiH.js";import"./DefaultPropsProvider-DmCZUX_Q.js";import"./Paper-XlOy8olP.js";import"./extendSxProp-nhoTuOHl.js";import"./useSlot-CGzPBc31.js";import"./mergeSlotProps-Cw2JTtl4.js";import"./ButtonBase-Bs_ku2KR.js";import"./emotion-react.browser.esm-DwrgU1Wr.js";import"./isFocusVisible-B8k4qzLc.js";import"./Stack-DwG_ahgA.js";import"./Box-BD4s5P7O.js";import"./Typography-CXZGHGVu.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";function a(t){const n={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Getting Started/Template Structure"}),`
`,e.jsx(n.h1,{id:"template-structure",children:"Template Structure"}),`
`,e.jsx(n.p,{children:"After creating a new project from the strudel-kit code, you will have the basic scaffolding for a STRUDEL-powered app."}),`
`,e.jsx(n.p,{children:"The app comes pre-baked with all libraries in the STRUDEL Tech Stack, the specified Task Flow template, a set of custom components that are used across the app, and some handy development and CI tools."}),`
`,e.jsx(n.p,{children:"There are quite a few directories and files that are part of the project structure. These handle things such as pages, shared components, routing, configurations, and continuous integration. Below is a breakdown of the project structure:"}),`
`,e.jsx(n.h3,{id:"root",children:"Root"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-yaml",children:`├── backend # Backend scaffolding using FastAPI
├── frontend # Frontend scaffolding using React
├── .clinerules # Rules to be followed by the Cline coding assistant
├── .env.example # Example values to be copied into a .env file for local development
├── .gitignore # Files for git to ignore
├── COPYRIGHT.md # Copyright notice for STRUDEL
├── docker-compose.yml # Configuration for locally running the backend and frontend
├── LICENSE # Open source license for STRUDEL
├── README.md # Project overview and instructions
`})}),`
`,e.jsx(n.h3,{id:"frontend",children:"Frontend"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-yaml",children:`├── cypress # End-to-end testing
├── public # Static files e.g. images, data, favicon
├── src
│  ├── api # Utility functions for making API calls to the backend
│  ├── components # Components that are shared across the app
│  ├── context # State variables and actions shared across the app
│  ├── hooks # Custom React functions for data fetching and more
│  ├── pages # File-based router entry point (TanStack Router)
│  │  ├── compare-data # Task Flow template specified in degit command (/compare-data page)
│  │  ├── playground # Playground template (/playground page)
│  │  ├── users # Users template (/users page)
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
│  └── vite-env.d.ts # Vite environment type definitions (import.meta.env)
├── .eslintrc.json # ESLint configuration
├── .gitignore # Files for git to ignore
├── .prettierrc.json # Prettier configuration for code formatting
├── cypress.config.ts # Testing configuration
├── Dockerfile # Docker configuration for building the frontend
├── index.html # HTML entry point
├── package-lock.json # Full dependency list
├── package.json # Dependencies and project metadata
├── README.md # Frontend overview and instructions
├── tsconfig.json # TypeScript configuration
├── tsconfig.node.json # Vite-level TypeScript configuration
├── tsr.config.json # TanStack Router configuration
└── vite.config.ts # Vite configuration
`})}),`
`,e.jsxs(n.p,{children:["The primary areas for customization purposes are ",e.jsx(n.code,{children:"src/pages"})," and ",e.jsx(n.code,{children:"src/components"}),". The ",e.jsx(n.code,{children:"src/pages"})," directory contains all of the unique pages and routing structure in the app. Each Task Flow template is a top-level directory in ",e.jsx(n.code,{children:"src/pages"}),'. To see a breakdown of a specific Task Flow, go to its page in the docs under the "Task Flows" section.']}),`
`,e.jsxs(n.p,{children:["You can also customize the global theme in ",e.jsx(n.code,{children:"src/theme.tsx"}),". This uses the MUI theme object to make app-wide style adjustments. See ",e.jsx(n.a,{href:"https://mui.com/material-ui/customization/default-theme/",rel:"nofollow",children:"MUI's theme documentation"}),"."]}),`
`,e.jsx(n.h3,{id:"backend",children:"Backend"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-yaml",children:`├── app # Top-level FastAPI app
│  ├── migrations # Database migration files managed by Alembic
│  ├── __init__.py # App package initializer
│  ├── api.py # API route definitions
│  ├── crud.py # Create, Read, Update, Delete operations for database models
│  ├── database.py # Database connection and session management
│  ├── main.py # App entry point
│  └── models.py # Database model definitions
├── .gitignore # Files for git to ignore
├── .python-version # Python version for pyenv
├── Dockerfile # Docker configuration for building the backend
├── README.md # Backend overview and instructions
├── alembic.ini # Alembic configuration for database migrations
├── pyproject.toml # Python dependencies and project metadata
└── uv.lock # Full Python dependency list
`})}),`
`,e.jsxs(o,{container:!0,columnSpacing:2,rowSpacing:2,marginBottom:2,children:[e.jsx(o,{item:!0,sm:4,children:e.jsx(i,{href:"/strudel-kit/docs/task-flows/overview",target:"_self",label:"Task Flows"})}),e.jsx(o,{item:!0,sm:4,children:e.jsx(i,{href:"/strudel-kit/docs/guides/tutorials/basic-app-with-strudel/customize-taskflow",target:"_self",label:"Customize Your Task Flow"})}),e.jsx(o,{item:!0,sm:4,children:e.jsx(i,{href:"/strudel-kit/docs/guides/combine-sections",target:"_self",label:"Combining Sections"})}),e.jsx(o,{item:!0,sm:4,children:e.jsx(i,{href:"/strudel-kit/docs/guides/connect-task-flows-together",target:"_self",label:"Connecting Task Flows"})})]})]})}function R(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a(t)}export{R as default};
