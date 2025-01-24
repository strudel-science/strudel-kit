"use strict";(self.webpackChunkstrudel_docs=self.webpackChunkstrudel_docs||[]).push([[3289],{332:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var i=t(4848),a=t(8453),s=t(4110);const l="import { ExploreDataConfig } from './taskflow.types';\n\nexport const taskflow: ExploreDataConfig = {\n  data: {\n    /**\n     * Data definition for the initial items list\n     */\n    list: {\n      /**\n       * URL or path to the data source\n       */\n      source: 'data/default/explore-data/exoplanets.csv',\n      /**\n       * Key-value object of params that should always be included in the query URL\n       */\n      staticParams: null,\n      /**\n       * Name of the field in the data that represents a unique identifier for each record.\n       */\n      idField: 'Id',\n      /**\n       * Method by which data should be filtered, either client or server.\n       */\n      queryMode: 'client',\n    },\n    /**\n     * Data definition for the item detail page\n     */\n    detail: {\n      source: 'data/default/explore-data/exoplanets.csv',\n      staticParams: null,\n      idField: 'Id',\n      queryMode: 'client',\n    },\n  },\n  pages: {\n    index: {\n      /**\n       * Title to appear at the top of the main page.\n       */\n      title: 'Explore Data App',\n      /**\n       * Text to appear underneath the title at the top of the main page.\n       */\n      description: 'Description of this app section',\n      /**\n       * List of column definition objects for the columns in the table on the main page.\n       */\n      tableColumns: [\n        {\n          field: 'Planet Name',\n          headerName: 'Planet Name',\n          width: 200,\n        },\n        {\n          field: 'Planet Host',\n          headerName: 'Planet Host',\n          width: 200,\n        },\n        {\n          field: 'Discovery Method',\n          headerName: 'Discovery Method',\n          width: 200,\n        },\n        {\n          field: 'Orbital Period Days',\n          headerName: 'Orbital Period',\n          units: 'days',\n          type: 'number',\n          width: 200,\n        },\n        {\n          field: 'Mass',\n          headerName: 'Mass',\n          units: 'Earth Mass',\n          type: 'number',\n          width: 200,\n        },\n        {\n          field: 'Eccentricity',\n          headerName: 'Eccentricity',\n          type: 'number',\n          width: 200,\n        },\n      ],\n      /**\n       * List of filters to display on the main page and use to filter the main table data.\n       * Each filter has a definition object to determine how it renders and functions.\n       */\n      tableFilters: [\n        {\n          field: 'Discovery Method',\n          label: 'Discovery Method',\n          operator: 'contains-one-of',\n          filterComponent: 'CheckboxList',\n          filterProps: {\n            options: [\n              {\n                label: 'Astrometry',\n                value: 'Astrometry',\n              },\n              {\n                label: 'Disk Kinematics',\n                value: 'Disk Kinematics',\n              },\n              {\n                label: 'Eclipse Timing Variations',\n                value: 'Eclipse Timing Variations',\n              },\n              {\n                label: 'Imaging',\n                value: 'Imaging',\n              },\n              {\n                label: 'Microlensing',\n                value: 'Microlensing',\n              },\n              {\n                label: 'Radial Velocity',\n                value: 'Radial Velocity',\n              },\n              {\n                label: 'Transit',\n                value: 'Transit',\n              },\n            ],\n          },\n        },\n        {\n          field: 'Mass',\n          label: 'Mass',\n          operator: 'between-inclusive',\n          filterComponent: 'RangeSlider',\n          filterProps: {\n            min: 0,\n            max: 10000,\n          },\n        },\n      ],\n    },\n  },\n};\n",o={title:"Explore Data"},r="Explore Data",d={id:"task-flows/explore-data",title:"Explore Data",description:"Links",source:"@site/docs/task-flows/explore-data.mdx",sourceDirName:"task-flows",slug:"/task-flows/explore-data",permalink:"/strudel-kit/docs/task-flows/explore-data",draft:!1,unlisted:!1,editUrl:"https://github.com/strudel-science/strudel-kit/tree/main/docs/docs/task-flows/explore-data.mdx",tags:[],version:"current",frontMatter:{title:"Explore Data"},sidebar:"mainSidebar",previous:{title:"Contribute Data",permalink:"/strudel-kit/docs/task-flows/contribute-data"},next:{title:"Monitor Activities",permalink:"/strudel-kit/docs/task-flows/monitor-activities"}},c={},h=[{value:"Links",id:"links",level:2},{value:"Use this Task Flow",id:"use-this-task-flow",level:2},{value:"Generated Files",id:"generated-files",level:2},{value:"Pages",id:"pages",level:2},{value:"<code>index.tsx</code>",id:"indextsx",level:4},{value:"<code>[id].tsx</code>",id:"idtsx",level:4},{value:"Configuration",id:"configuration",level:2}];function p(e){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"explore-data",children:"Explore Data"}),"\n",(0,i.jsx)(n.h2,{id:"links",children:"Links"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://strudel.science/design-system/task-flows/explore-data/",children:"Description and guidelines"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://strudel.science/strudel-kit/#/explore-data",children:"Live example"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/strudel-science/strudel-kit/tree/main/strudel-taskflows/src/pages/explore-data",children:"Source code"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"use-this-task-flow",children:"Use this Task Flow"}),"\n",(0,i.jsxs)(n.p,{children:["Before continuing, make sure you have followed the instructions to ",(0,i.jsx)(n.a,{href:"/strudel-kit/docs/getting-started/installation",children:"install the strudel-cli"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"From the root of your app, run the following on the command line:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"strudel add-taskflow my-taskflow --template explore-data\n"})}),"\n",(0,i.jsx)(n.h2,{id:"generated-files",children:"Generated Files"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"my-taskflow\n\u251c\u2500\u2500 _components\n\u2502  \u251c\u2500\u2500 DataView.tsx\n\u2502  \u251c\u2500\u2500 DataViewHeader.tsx\n\u2502  \u251c\u2500\u2500 FiltersPanel.tsx\n\u2502  \u2514\u2500\u2500 PreviewPanel.tsx\n\u251c\u2500\u2500 _config\n\u2502  \u251c\u2500\u2500 taskflow.config.ts\n\u2502  \u2514\u2500\u2500 taskflow.types.ts\n\u251c\u2500\u2500 [id].tsx\n\u251c\u2500\u2500 _layout.tsx\n\u2514\u2500\u2500 index.tsx\n"})}),"\n",(0,i.jsx)(n.h2,{id:"pages",children:"Pages"}),"\n",(0,i.jsx)(n.h4,{id:"indextsx",children:(0,i.jsx)(n.code,{children:"index.tsx"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"URL Route"}),": ",(0,i.jsx)(n.code,{children:"/"}),(0,i.jsx)(n.br,{}),"\n","First page of the Explore Data Task Flow. Displays a data table, filters panel, and a data preview panel."]}),"\n",(0,i.jsx)(n.h4,{id:"idtsx",children:(0,i.jsx)(n.code,{children:"[id].tsx"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"URL Route"}),": ",(0,i.jsx)(n.code,{children:"/:id"}),(0,i.jsx)(n.br,{}),"\n","Data detail page of the Explore Data Task Flow. When a user drills into a record in the data table, the detail page shows more data about the selected item."]}),"\n",(0,i.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsxs)(n.p,{children:["This Task Flow can be configured from the ",(0,i.jsx)(n.code,{children:"taskflow.config.ts"})," file in the ",(0,i.jsx)(n.code,{children:"_config"})," directory of the generated template files."]}),"\n",(0,i.jsx)(s.A,{language:"ts",title:"taskflow.config.ts",children:l})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},9777:(e,n,t)=>{t.d(n,{A:()=>a});var i=t(6540);const a={React:i,...i}}}]);