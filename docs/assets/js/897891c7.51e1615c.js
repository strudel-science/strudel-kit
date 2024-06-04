"use strict";(self.webpackChunkdocusaurus_example=self.webpackChunkdocusaurus_example||[]).push([[883],{161:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var a=n(4848),s=n(8453),i=n(4110);const o='import { ContributeDataConfig } from "./taskflow.types";\n\nexport const taskflow: ContributeDataConfig = {\n  data: {\n    datasets: {\n      /**\n       * Source of the data for the initial list of datasets on the portal page. \n       */\n      source: "default/contribute-data/contributor_datasets.json",\n      /**\n       * Name of the field in the data that represents a unique identifier for each record. \n       */\n      idField: "id"\n    }\n  },\n  pages: {\n    index: {\n      /**\n       * Title to appear at the top of the register page.\n       */\n      title: "Register as a data contributor"\n    },\n    portal: {\n      /**\n       * Title to appear at the top of the portal page.\n       */\n      title: "Your Dataset Uploads",\n      /**\n       * List of column definition objects for the columns in the table on the portal page.\n       */\n      tableColumns: [\n        {\n          field: "title",\n          headerName: "Dataset Title",\n          width: 200\n        },\n        {\n          field: "category",\n          headerName: "Category",\n          width: 200\n        },\n        {\n          field: "summary",\n          headerName: "Summary",\n          width: 200\n        },\n        {\n          field: "doi",\n          headerName: "DOI",\n          width: 200\n        },\n        {\n          field: "publication_date",\n          headerName: "Created Date",\n          width: 200\n        },\n        {\n          field: "status",\n          headerName: "Status",\n          width: 200\n        }\n      ]\n    },\n    new: {\n      /**\n       * Title to appear at the top of the new dataset page.\n       */\n      title: "Upload a new dataset",\n      /**\n       * Text to appear underneath the title at the top of the new dataset page.\n       */\n      description: "Description of this app section"\n    },\n    review: {\n      /**\n       * Title to appear at the top of the review page.\n       */\n      title: "Review your new dataset"\n    }\n  }\n}',r={title:"Contribute Data"},d="Contribute Data",l={id:"task-flows/contribute-data",title:"Contribute Data",description:"Links",source:"@site/docs/task-flows/contribute-data.mdx",sourceDirName:"task-flows",slug:"/task-flows/contribute-data",permalink:"/strudel-kit/docs/task-flows/contribute-data",draft:!1,unlisted:!1,editUrl:"https://github.com/strudel-science/strudel-kit/tree/main/docs/docs/task-flows/contribute-data.mdx",tags:[],version:"current",frontMatter:{title:"Contribute Data"},sidebar:"mainSidebar",previous:{title:"Compare Data",permalink:"/strudel-kit/docs/task-flows/compare-data"},next:{title:"Explore Data",permalink:"/strudel-kit/docs/task-flows/explore-data"}},c={},h=[{value:"Links",id:"links",level:2},{value:"Use this Task Flow",id:"use-this-task-flow",level:2},{value:"Generated Files",id:"generated-files",level:2},{value:"Pages",id:"pages",level:2},{value:"<code>index.tsx</code>",id:"indextsx",level:4},{value:"<code>portal.tsx</code>",id:"portaltsx",level:4},{value:"<code>new.tsx</code>",id:"newtsx",level:4},{value:"<code>review.tsx</code>",id:"reviewtsx",level:4},{value:"Configuration",id:"configuration",level:2}];function u(e){const t={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"contribute-data",children:"Contribute Data"}),"\n",(0,a.jsx)(t.h2,{id:"links",children:"Links"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://strudel.science/design-system/task-flows/contribute-data/",children:"Description and guidelines"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://strudel.science/strudel-kit/#/contribute-data",children:"Live example"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/strudel-science/strudel-kit/tree/main/strudel-taskflows/src/pages/contribute-data",children:"Source code"})}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"use-this-task-flow",children:"Use this Task Flow"}),"\n",(0,a.jsxs)(t.p,{children:["Before continuing, make sure you have followed the instructions to ",(0,a.jsx)(t.a,{href:"/strudel-kit/docs/getting-started/installation",children:"install the strudel-cli"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"From the root of your app, run the following on the command line:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"strudel add-taskflow my-taskflow --template contribute-data\n"})}),"\n",(0,a.jsx)(t.h2,{id:"generated-files",children:"Generated Files"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"my-taskflow\n\u251c\u2500\u2500 _components\n\u2502  \u251c\u2500\u2500 DataFilesPanel.tsx\n\u2502  \u251c\u2500\u2500 DatasetView.tsx\n\u2502  \u251c\u2500\u2500 MetadataPanel.tsx\n\u2502  \u2514\u2500\u2500 ValidationChecks.tsx\n\u251c\u2500\u2500 _config\n\u2502  \u251c\u2500\u2500 taskflow.config.ts\n\u2502  \u2514\u2500\u2500 taskflow.types.ts\n\u251c\u2500\u2500 _context\n\u2502  \u251c\u2500\u2500 ContextProvider.tsx\n\u2502  \u251c\u2500\u2500 actions.ts\n\u2502  \u2514\u2500\u2500 utils.ts\n\u251c\u2500\u2500 _layout.tsx\n\u251c\u2500\u2500 index.tsx\n\u251c\u2500\u2500 new.tsx\n\u251c\u2500\u2500 portal.tsx\n\u2514\u2500\u2500 review.tsx\n"})}),"\n",(0,a.jsx)(t.h2,{id:"pages",children:"Pages"}),"\n",(0,a.jsx)(t.h4,{id:"indextsx",children:(0,a.jsx)(t.code,{children:"index.tsx"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"URL Route"}),": ",(0,a.jsx)(t.code,{children:"/"}),(0,a.jsx)(t.br,{}),"\n","First page of the Contribute Data Task Flow. Displays a user registration form for users that want to contribute datasets."]}),"\n",(0,a.jsx)(t.h4,{id:"portaltsx",children:(0,a.jsx)(t.code,{children:"portal.tsx"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"URL Route"}),": ",(0,a.jsx)(t.code,{children:"/portal"}),(0,a.jsx)(t.br,{}),"\n","User portal page of the Contribute Data Task Flow. Displays a list of the user's current uploaded datasets."]}),"\n",(0,a.jsx)(t.h4,{id:"newtsx",children:(0,a.jsx)(t.code,{children:"new.tsx"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"URL Route"}),": ",(0,a.jsx)(t.code,{children:"/new"}),(0,a.jsx)(t.br,{}),"\n","New dataset page of the Contribute Data Task Flow. Displays a metadata form and data upload panel for adding new data contributions."]}),"\n",(0,a.jsx)(t.h4,{id:"reviewtsx",children:(0,a.jsx)(t.code,{children:"review.tsx"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"URL Route"}),": ",(0,a.jsx)(t.code,{children:"/review"}),(0,a.jsx)(t.br,{}),"\n","Review new dataset page of the Contribute Data Task Flow. Displays a preview of the dataset information to be uploaded and performs standard validation checks on the data."]}),"\n",(0,a.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,a.jsxs)(t.p,{children:["This Task Flow can be configured from the ",(0,a.jsx)(t.code,{children:"taskflow.config.ts"})," file in the ",(0,a.jsx)(t.code,{children:"_config"})," directory of the generated template files."]}),"\n",(0,a.jsx)(i.A,{language:"ts",title:"taskflow.config.ts",children:o})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},9777:(e,t,n)=>{n.d(t,{A:()=>s});var a=n(6540);const s={React:a,...a}}}]);