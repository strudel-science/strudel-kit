import{j as n}from"./jsx-runtime-u17CrQMm.js";import{u as a,M as i}from"./blocks-f6TVuizq.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-tfrRrPdJ.js";import"./index-DQyiXVlV.js";import"./index-Yi8Cfbpp.js";import"./index-DArmJvln.js";function o(t){const e={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...a(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Customization/Columns"}),`
`,n.jsx(e.h1,{id:"columns",children:"Columns"}),`
`,n.jsxs(e.p,{children:["Columns can be defined in an array that follows the ",n.jsx(e.a,{href:"https://mui.com/x/react-data-grid/column-definition/",rel:"nofollow",children:"MUI column definition syntax"}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`const columns: GridColDef[] = [
  {
    field: 'title',
    headerName: 'Dataset Title',
    width: 200,
  },
  {
    field: 'category',
    headerName: 'Category',
    width: 200,
  },
  {
    field: 'summary',
    headerName: 'Summary',
    width: 200,
  },
  {
    field: 'doi',
    headerName: 'DOI',
    width: 200,
  },
];
`})}),`
`,n.jsxs(e.p,{children:["For the Compare Data Task Flow, there is also an additional column, ",n.jsx(e.code,{children:"isComparisonMetric"})," which is used to denote which columns should be displayed on the comparison page."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// CUSTOMIZE: the columns for the main data table
const columns = [
  {
    field: 'name',
    headerName: 'Scenario Name',
    width: 200,
  },
  {
    field: 'acetic_acid_concentration',
    headerName: 'Acetic Acid Concentration',
    width: 200,
    isComparisonMetric: true,
  },
];
`})})]})}function u(t={}){const{wrapper:e}={...a(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{u as default};
