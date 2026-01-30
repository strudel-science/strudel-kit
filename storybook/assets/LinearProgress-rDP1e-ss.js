import{r as j}from"./iframe-CSA8vn2M.js";import{g as R,a as q,u as O,s as b,c as z,b as t,d as M,m as d}from"./DefaultPropsProvider-DHuEpUAe.js";import{u as N}from"./index-CxsOcysA.js";import{c as l}from"./createSimplePaletteValueFilter-bm0fmN_7.js";import{j as u}from"./jsx-runtime-u17CrQMm.js";import{c as P,k as $}from"./emotion-react.browser.esm-DhLz2Ig-.js";function D(a){return q("MuiLinearProgress",a)}const Q=R("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","bar1","bar2","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]),v=4,y=$`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`,w=typeof y!="string"?P`
        animation: ${y} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      `:null,C=$`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`,A=typeof C!="string"?P`
        animation: ${C} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
      `:null,h=$`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`,S=typeof h!="string"?P`
        animation: ${h} 3s infinite linear;
      `:null,T=a=>{const{classes:r,variant:e,color:o}=a,m={root:["root",`color${t(o)}`,e],dashed:["dashed",`dashedColor${t(o)}`],bar1:["bar","bar1",`barColor${t(o)}`,(e==="indeterminate"||e==="query")&&"bar1Indeterminate",e==="determinate"&&"bar1Determinate",e==="buffer"&&"bar1Buffer"],bar2:["bar","bar2",e!=="buffer"&&`barColor${t(o)}`,e==="buffer"&&`color${t(o)}`,(e==="indeterminate"||e==="query")&&"bar2Indeterminate",e==="buffer"&&"bar2Buffer"]};return M(m,D,r)},k=(a,r)=>a.vars?a.vars.palette.LinearProgress[`${r}Bg`]:a.palette.mode==="light"?a.lighten(a.palette[r].main,.62):a.darken(a.palette[r].main,.5),U=b("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(a,r)=>{const{ownerState:e}=a;return[r.root,r[`color${t(e.color)}`],r[e.variant]]}})(d(({theme:a})=>({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},variants:[...Object.entries(a.palette).filter(l()).map(([r])=>({props:{color:r},style:{backgroundColor:k(a,r)}})),{props:({ownerState:r})=>r.color==="inherit"&&r.variant!=="buffer",style:{"&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}}},{props:{variant:"buffer"},style:{backgroundColor:"transparent"}},{props:{variant:"query"},style:{transform:"rotate(180deg)"}}]}))),K=b("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(a,r)=>{const{ownerState:e}=a;return[r.dashed,r[`dashedColor${t(e.color)}`]]}})(d(({theme:a})=>({position:"absolute",marginTop:0,height:"100%",width:"100%",backgroundSize:"10px 10px",backgroundPosition:"0 -23px",variants:[{props:{color:"inherit"},style:{opacity:.3,backgroundImage:"radial-gradient(currentColor 0%, currentColor 16%, transparent 42%)"}},...Object.entries(a.palette).filter(l()).map(([r])=>{const e=k(a,r);return{props:{color:r},style:{backgroundImage:`radial-gradient(${e} 0%, ${e} 16%, transparent 42%)`}}})]})),S||{animation:`${h} 3s infinite linear`}),E=b("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(a,r)=>{const{ownerState:e}=a;return[r.bar,r.bar1,r[`barColor${t(e.color)}`],(e.variant==="indeterminate"||e.variant==="query")&&r.bar1Indeterminate,e.variant==="determinate"&&r.bar1Determinate,e.variant==="buffer"&&r.bar1Buffer]}})(d(({theme:a})=>({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",variants:[{props:{color:"inherit"},style:{backgroundColor:"currentColor"}},...Object.entries(a.palette).filter(l()).map(([r])=>({props:{color:r},style:{backgroundColor:(a.vars||a).palette[r].main}})),{props:{variant:"determinate"},style:{transition:`transform .${v}s linear`}},{props:{variant:"buffer"},style:{zIndex:1,transition:`transform .${v}s linear`}},{props:({ownerState:r})=>r.variant==="indeterminate"||r.variant==="query",style:{width:"auto"}},{props:({ownerState:r})=>r.variant==="indeterminate"||r.variant==="query",style:w||{animation:`${y} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`}}]}))),X=b("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(a,r)=>{const{ownerState:e}=a;return[r.bar,r.bar2,r[`barColor${t(e.color)}`],(e.variant==="indeterminate"||e.variant==="query")&&r.bar2Indeterminate,e.variant==="buffer"&&r.bar2Buffer]}})(d(({theme:a})=>({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",variants:[...Object.entries(a.palette).filter(l()).map(([r])=>({props:{color:r},style:{"--LinearProgressBar2-barColor":(a.vars||a).palette[r].main}})),{props:({ownerState:r})=>r.variant!=="buffer"&&r.color!=="inherit",style:{backgroundColor:"var(--LinearProgressBar2-barColor, currentColor)"}},{props:({ownerState:r})=>r.variant!=="buffer"&&r.color==="inherit",style:{backgroundColor:"currentColor"}},{props:{color:"inherit"},style:{opacity:.3}},...Object.entries(a.palette).filter(l()).map(([r])=>({props:{color:r,variant:"buffer"},style:{backgroundColor:k(a,r),transition:`transform .${v}s linear`}})),{props:({ownerState:r})=>r.variant==="indeterminate"||r.variant==="query",style:{width:"auto"}},{props:({ownerState:r})=>r.variant==="indeterminate"||r.variant==="query",style:A||{animation:`${C} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`}}]}))),W=j.forwardRef(function(r,e){const o=O({props:r,name:"MuiLinearProgress"}),{className:m,color:B="primary",value:g,valueBuffer:x,variant:i="indeterminate",...I}=o,s={...o,color:B,variant:i},f=T(s),L=N(),p={},c={bar1:{},bar2:{}};if((i==="determinate"||i==="buffer")&&g!==void 0){p["aria-valuenow"]=Math.round(g),p["aria-valuemin"]=0,p["aria-valuemax"]=100;let n=g-100;L&&(n=-n),c.bar1.transform=`translateX(${n}%)`}if(i==="buffer"&&x!==void 0){let n=(x||0)-100;L&&(n=-n),c.bar2.transform=`translateX(${n}%)`}return u.jsxs(U,{className:z(f.root,m),ownerState:s,role:"progressbar",...p,ref:e,...I,children:[i==="buffer"?u.jsx(K,{className:f.dashed,ownerState:s}):null,u.jsx(E,{className:f.bar1,ownerState:s,style:c.bar1}),i==="determinate"?null:u.jsx(X,{className:f.bar2,ownerState:s,style:c.bar2})]})});export{W as L,Q as l};
