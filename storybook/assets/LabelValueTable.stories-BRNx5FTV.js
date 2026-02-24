import{j as l}from"./jsx-runtime-u17CrQMm.js";import{r as u}from"./iframe-Je2dcYBY.js";import{a as v,g as f,u as g,s as T,c as w,d as C,m as j}from"./DefaultPropsProvider-DmCZUX_Q.js";import{T as $,a as O,b as h}from"./TableCell-DZ91EX3O.js";import"./preload-helper-PPVm8Dsz.js";function B(e){return v("MuiTable",e)}f("MuiTable",["root","stickyHeader"]);const G=e=>{const{classes:o,stickyHeader:a}=e;return C({root:["root",a&&"stickyHeader"]},B,o)},U=T("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:a}=e;return[o.root,a.stickyHeader&&o.stickyHeader]}})(j(({theme:e})=>({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":{...e.typography.body2,padding:e.spacing(2),color:(e.vars||e).palette.text.secondary,textAlign:"left",captionSide:"bottom"},variants:[{props:({ownerState:o})=>o.stickyHeader,style:{borderCollapse:"separate"}}]}))),x="table",H=u.forwardRef(function(o,a){const t=g({props:o,name:"MuiTable"}),{className:r,component:s=x,padding:n="normal",size:c="medium",stickyHeader:i=!1,...d}=t,p={...t,component:s,padding:n,size:c,stickyHeader:i},y=G(p),L=u.useMemo(()=>({padding:n,size:c,stickyHeader:i}),[n,c,i]);return l.jsx($.Provider,{value:L,children:l.jsx(U,{as:s,role:s===x?null:"table",ref:a,className:w(y.root,r),ownerState:p,...d})})});function N(e){return v("MuiTableBody",e)}f("MuiTableBody",["root"]);const W=e=>{const{classes:o}=e;return C({root:["root"]},N,o)},P=T("tbody",{name:"MuiTableBody",slot:"Root"})({display:"table-row-group"}),V={variant:"body"},R="tbody",_=u.forwardRef(function(o,a){const t=g({props:o,name:"MuiTableBody"}),{className:r,component:s=R,...n}=t,c={...t,component:s},i=W(c);return l.jsx(O.Provider,{value:V,children:l.jsx(P,{className:w(i.root,r),as:s,ref:a,role:s===R?null:"rowgroup",ownerState:c,...n})})});function A(e){return v("MuiTableRow",e)}const S=f("MuiTableRow",["root","selected","hover","head","footer"]),D=e=>{const{classes:o,selected:a,hover:t,head:r,footer:s}=e;return C({root:["root",a&&"selected",t&&"hover",r&&"head",s&&"footer"]},A,o)},E=T("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:a}=e;return[o.root,a.head&&o.head,a.footer&&o.footer]}})(j(({theme:e})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${S.hover}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${S.selected}`]:{backgroundColor:e.alpha((e.vars||e).palette.primary.main,(e.vars||e).palette.action.selectedOpacity),"&:hover":{backgroundColor:e.alpha((e.vars||e).palette.primary.main,`${(e.vars||e).palette.action.selectedOpacity} + ${(e.vars||e).palette.action.hoverOpacity}`)}}}))),M="tr",q=u.forwardRef(function(o,a){const t=g({props:o,name:"MuiTableRow"}),{className:r,component:s=M,hover:n=!1,selected:c=!1,...i}=t,d=u.useContext(O),p={...t,component:s,hover:n,selected:c,head:d&&d.variant==="head",footer:d&&d.variant==="footer"},y=D(p);return l.jsx(E,{as:s,ref:a,className:w(y.root,r),role:s===M?null:"row",ownerState:p,...i})}),k=({rows:e,labelWidth:o=150,...a})=>l.jsx(H,{size:"small","aria-label":"label value table",...a,children:l.jsx(_,{children:e?.map((t,r)=>l.jsxs(q,{sx:{border:0},children:[l.jsx(h,{width:o,component:"th",scope:"row",sx:{border:0,color:"neutral.dark",pl:0},children:t.label}),l.jsx(h,{align:"left",sx:{border:0,pl:0},children:t.value})]},`${t.label}-${r}`))})});k.__docgenInfo={description:`Component for displaying a flat list of label-value pairs
in a two column table.`,methods:[],displayName:"LabelValueTable",props:{rows:{required:!1,tsType:{name:"Array",elements:[{name:"LabelValuePair"}],raw:"LabelValuePair[]"},description:""},labelWidth:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"150",computed:!1}}},composes:["TableProps"]};const Q={title:"Components/LabelValueTable",component:k,parameters:{layout:"centered"},tags:["autodocs"]},b={args:{rows:[{label:"Gene Symbol",value:"LOC100737821"},{label:"Gene type",value:"protein coding"},{label:"Organism",value:"Sus scrofa"}]}},m={args:{rows:[{label:"Gene Symbol",value:"LOC100737821"},{label:"Gene type",value:"protein coding"},{label:"Organism",value:"Sus scrofa"}],labelWidth:200}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    rows: [{
      label: 'Gene Symbol',
      value: 'LOC100737821'
    }, {
      label: 'Gene type',
      value: 'protein coding'
    }, {
      label: 'Organism',
      value: 'Sus scrofa'
    }]
  }
}`,...b.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    rows: [{
      label: 'Gene Symbol',
      value: 'LOC100737821'
    }, {
      label: 'Gene type',
      value: 'protein coding'
    }, {
      label: 'Organism',
      value: 'Sus scrofa'
    }],
    labelWidth: 200
  }
}`,...m.parameters?.docs?.source}}};const X=["Default","WithLabelWidth"];export{b as Default,m as WithLabelWidth,X as __namedExportsOrder,Q as default};
