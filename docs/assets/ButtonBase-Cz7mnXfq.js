import{r as l,R as H}from"./iframe-EhI0uGp8.js";import{j as T}from"./jsx-runtime-u17CrQMm.js";import{a as ce,g as te,u as ne,s as J,c as S,b as G,d as pe,m as we,_ as Pe}from"./DefaultPropsProvider-ekbbHYGi.js";import{_ as Ve,b as Be,T as ae,c as Ie,a as Ne}from"./useSlot-Cv2FWrvd.js";import{k as oe}from"./emotion-react.browser.esm-DZL9HSDL.js";import{u as le,c as _}from"./mergeSlotProps-DDD5jXAB.js";import{i as ue}from"./isFocusVisible-B8k4qzLc.js";function je(e){return ce("MuiSvgIcon",e)}te("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const De=e=>{const{color:t,fontSize:o,classes:r}=e,n={root:["root",t!=="inherit"&&`color${G(t)}`,`fontSize${G(o)}`]};return pe(n,je,r)},Le=J("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.color!=="inherit"&&t[`color${G(o.color)}`],t[`fontSize${G(o.fontSize)}`]]}})(we(({theme:e})=>({userSelect:"none",width:"1em",height:"1em",display:"inline-block",flexShrink:0,transition:e.transitions?.create?.("fill",{duration:(e.vars??e).transitions?.duration?.shorter}),variants:[{props:t=>!t.hasSvgAsChild,style:{fill:"currentColor"}},{props:{fontSize:"inherit"},style:{fontSize:"inherit"}},{props:{fontSize:"small"},style:{fontSize:e.typography?.pxToRem?.(20)||"1.25rem"}},{props:{fontSize:"medium"},style:{fontSize:e.typography?.pxToRem?.(24)||"1.5rem"}},{props:{fontSize:"large"},style:{fontSize:e.typography?.pxToRem?.(35)||"2.1875rem"}},...Object.entries((e.vars??e).palette).filter(([,t])=>t&&t.main).map(([t])=>({props:{color:t},style:{color:(e.vars??e).palette?.[t]?.main}})),{props:{color:"action"},style:{color:(e.vars??e).palette?.action?.active}},{props:{color:"disabled"},style:{color:(e.vars??e).palette?.action?.disabled}},{props:{color:"inherit"},style:{color:void 0}}]}))),Z=l.forwardRef(function(t,o){const r=ne({props:t,name:"MuiSvgIcon"}),{children:n,className:i,color:s="inherit",component:c="svg",fontSize:u="medium",htmlColor:p,inheritViewBox:d=!1,titleAccess:f,viewBox:b="0 0 24 24",...R}=r,m=l.isValidElement(n)&&n.type==="svg",x={...r,color:s,component:c,fontSize:u,instanceFontSize:t.fontSize,inheritViewBox:d,viewBox:b,hasSvgAsChild:m},M={};d||(M.viewBox=b);const P=De(x);return T.jsxs(Le,{as:c,className:S(P.root,i),focusable:"false",color:p,"aria-hidden":f?void 0:!0,role:f?"img":void 0,ref:o,...M,...R,...m&&n.props,ownerState:x,children:[m?n.props.children:n,f?T.jsx("title",{children:f}):null]})});Z.muiName="SvgIcon";function ct(e,t){function o(r,n){return T.jsx(Z,{"data-testid":void 0,ref:n,...r,children:e})}return o.muiName=Z.muiName,l.memo(l.forwardRef(o))}function $e(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ie(e,t){var o=function(i){return t&&l.isValidElement(i)?t(i):i},r=Object.create(null);return e&&l.Children.map(e,function(n){return n}).forEach(function(n){r[n.key]=o(n)}),r}function ke(e,t){e=e||{},t=t||{};function o(d){return d in t?t[d]:e[d]}var r=Object.create(null),n=[];for(var i in e)i in t?n.length&&(r[i]=n,n=[]):n.push(i);var s,c={};for(var u in t){if(r[u])for(s=0;s<r[u].length;s++){var p=r[u][s];c[r[u][s]]=o(p)}c[u]=o(u)}for(s=0;s<n.length;s++)c[n[s]]=o(n[s]);return c}function L(e,t,o){return o[t]!=null?o[t]:e.props[t]}function Fe(e,t){return ie(e.children,function(o){return l.cloneElement(o,{onExited:t.bind(null,o),in:!0,appear:L(o,"appear",e),enter:L(o,"enter",e),exit:L(o,"exit",e)})})}function Ue(e,t,o){var r=ie(e.children),n=ke(t,r);return Object.keys(n).forEach(function(i){var s=n[i];if(l.isValidElement(s)){var c=i in t,u=i in r,p=t[i],d=l.isValidElement(p)&&!p.props.in;u&&(!c||d)?n[i]=l.cloneElement(s,{onExited:o.bind(null,s),in:!0,exit:L(s,"exit",e),enter:L(s,"enter",e)}):!u&&c&&!d?n[i]=l.cloneElement(s,{in:!1}):u&&c&&l.isValidElement(p)&&(n[i]=l.cloneElement(s,{onExited:o.bind(null,s),in:p.props.in,exit:L(s,"exit",e),enter:L(s,"enter",e)}))}}),n}var Ae=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},Oe={component:"div",childFactory:function(t){return t}},se=(function(e){Ve(t,e);function t(r,n){var i;i=e.call(this,r,n)||this;var s=i.handleExited.bind($e(i));return i.state={contextValue:{isMounting:!0},handleExited:s,firstRender:!0},i}var o=t.prototype;return o.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},o.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(n,i){var s=i.children,c=i.handleExited,u=i.firstRender;return{children:u?Fe(n,c):Ue(n,s,c),firstRender:!1}},o.handleExited=function(n,i){var s=ie(this.props.children);n.key in s||(n.props.onExited&&n.props.onExited(i),this.mounted&&this.setState(function(c){var u=Pe({},c.children);return delete u[n.key],{children:u}}))},o.render=function(){var n=this.props,i=n.component,s=n.childFactory,c=Be(n,["component","childFactory"]),u=this.state.contextValue,p=Ae(this.state.children).map(s);return delete c.appear,delete c.enter,delete c.exit,i===null?H.createElement(ae.Provider,{value:u},p):H.createElement(ae.Provider,{value:u},H.createElement(i,c,p))},t})(H.Component);se.propTypes={};se.defaultProps=Oe;class q{static create(){return new q}static use(){const t=Ie(q.create).current,[o,r]=l.useState(!1);return t.shouldMount=o,t.setShouldMount=r,l.useEffect(t.mountEffect,[o]),t}constructor(){this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}mount(){return this.mounted||(this.mounted=Ye(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}mountEffect=()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())};start(...t){this.mount().then(()=>this.ref.current?.start(...t))}stop(...t){this.mount().then(()=>this.ref.current?.stop(...t))}pulsate(...t){this.mount().then(()=>this.ref.current?.pulsate(...t))}}function Xe(){return q.use()}function Ye(){let e,t;const o=new Promise((r,n)=>{e=r,t=n});return o.resolve=e,o.reject=t,o}function Ke(e){const{className:t,classes:o,pulsate:r=!1,rippleX:n,rippleY:i,rippleSize:s,in:c,onExited:u,timeout:p}=e,[d,f]=l.useState(!1),b=S(t,o.ripple,o.rippleVisible,r&&o.ripplePulsate),R={width:s,height:s,top:-(s/2)+i,left:-(s/2)+n},m=S(o.child,d&&o.childLeaving,r&&o.childPulsate);return!c&&!d&&f(!0),l.useEffect(()=>{if(!c&&u!=null){const x=setTimeout(u,p);return()=>{clearTimeout(x)}}},[u,c,p]),T.jsx("span",{className:b,style:R,children:T.jsx("span",{className:m})})}const y=te("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),ee=550,We=80,He=oe`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,_e=oe`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,Ge=oe`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,qe=J("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),Je=J(Ke,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${y.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${He};
    animation-duration: ${ee}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  &.${y.ripplePulsate} {
    animation-duration: ${({theme:e})=>e.transitions.duration.shorter}ms;
  }

  & .${y.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${y.childLeaving} {
    opacity: 0;
    animation-name: ${_e};
    animation-duration: ${ee}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  & .${y.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Ge};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,Qe=l.forwardRef(function(t,o){const r=ne({props:t,name:"MuiTouchRipple"}),{center:n=!1,classes:i={},className:s,...c}=r,[u,p]=l.useState([]),d=l.useRef(0),f=l.useRef(null);l.useEffect(()=>{f.current&&(f.current(),f.current=null)},[u]);const b=l.useRef(!1),R=Ne(),m=l.useRef(null),x=l.useRef(null),M=l.useCallback(h=>{const{pulsate:C,rippleX:v,rippleY:k,rippleSize:N,cb:U}=h;p(E=>[...E,T.jsx(Je,{classes:{ripple:S(i.ripple,y.ripple),rippleVisible:S(i.rippleVisible,y.rippleVisible),ripplePulsate:S(i.ripplePulsate,y.ripplePulsate),child:S(i.child,y.child),childLeaving:S(i.childLeaving,y.childLeaving),childPulsate:S(i.childPulsate,y.childPulsate)},timeout:ee,pulsate:C,rippleX:v,rippleY:k,rippleSize:N},d.current)]),d.current+=1,f.current=U},[i]),P=l.useCallback((h={},C={},v=()=>{})=>{const{pulsate:k=!1,center:N=n||C.pulsate,fakeElement:U=!1}=C;if(h?.type==="mousedown"&&b.current){b.current=!1;return}h?.type==="touchstart"&&(b.current=!0);const E=U?null:x.current,V=E?E.getBoundingClientRect():{width:0,height:0,left:0,top:0};let B,z,I;if(N||h===void 0||h.clientX===0&&h.clientY===0||!h.clientX&&!h.touches)B=Math.round(V.width/2),z=Math.round(V.height/2);else{const{clientX:A,clientY:j}=h.touches&&h.touches.length>0?h.touches[0]:h;B=Math.round(A-V.left),z=Math.round(j-V.top)}if(N)I=Math.sqrt((2*V.width**2+V.height**2)/3),I%2===0&&(I+=1);else{const A=Math.max(Math.abs((E?E.clientWidth:0)-B),B)*2+2,j=Math.max(Math.abs((E?E.clientHeight:0)-z),z)*2+2;I=Math.sqrt(A**2+j**2)}h?.touches?m.current===null&&(m.current=()=>{M({pulsate:k,rippleX:B,rippleY:z,rippleSize:I,cb:v})},R.start(We,()=>{m.current&&(m.current(),m.current=null)})):M({pulsate:k,rippleX:B,rippleY:z,rippleSize:I,cb:v})},[n,M,R]),Y=l.useCallback(()=>{P({},{pulsate:!0})},[P]),$=l.useCallback((h,C)=>{if(R.clear(),h?.type==="touchend"&&m.current){m.current(),m.current=null,R.start(0,()=>{$(h,C)});return}m.current=null,p(v=>v.length>0?v.slice(1):v),f.current=C},[R]);return l.useImperativeHandle(o,()=>({pulsate:Y,start:P,stop:$}),[Y,P,$]),T.jsx(qe,{className:S(y.root,i.root,s),ref:x,...c,children:T.jsx(se,{component:null,exit:!0,children:u})})});function Ze(e){return ce("MuiButtonBase",e)}const et=te("MuiButtonBase",["root","disabled","focusVisible"]),tt=e=>{const{disabled:t,focusVisible:o,focusVisibleClassName:r,classes:n}=e,s=pe({root:["root",t&&"disabled",o&&"focusVisible"]},Ze,n);return o&&r&&(s.root+=` ${r}`),s},nt=J("button",{name:"MuiButtonBase",slot:"Root"})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${et.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),pt=l.forwardRef(function(t,o){const r=ne({props:t,name:"MuiButtonBase"}),{action:n,centerRipple:i=!1,children:s,className:c,component:u="button",disabled:p=!1,disableRipple:d=!1,disableTouchRipple:f=!1,focusRipple:b=!1,focusVisibleClassName:R,LinkComponent:m="a",onBlur:x,onClick:M,onContextMenu:P,onDragLeave:Y,onFocus:$,onFocusVisible:h,onKeyDown:C,onKeyUp:v,onMouseDown:k,onMouseLeave:N,onMouseUp:U,onTouchEnd:E,onTouchMove:V,onTouchStart:B,tabIndex:z=0,TouchRippleProps:I,touchRippleRef:A,type:j,...F}=r,O=l.useRef(null),g=Xe(),fe=le(g.ref,A),[D,K]=l.useState(!1);p&&D&&K(!1),l.useImperativeHandle(n,()=>({focusVisible:()=>{K(!0),O.current.focus()}}),[]);const de=g.shouldMount&&!d&&!p;l.useEffect(()=>{D&&b&&!d&&g.pulsate()},[d,b,D,g]);const he=w(g,"start",k,f),me=w(g,"stop",P,f),ge=w(g,"stop",Y,f),be=w(g,"stop",U,f),Me=w(g,"stop",a=>{D&&a.preventDefault(),N&&N(a)},f),ye=w(g,"start",B,f),ve=w(g,"stop",E,f),Se=w(g,"stop",V,f),Re=w(g,"stop",a=>{ue(a.target)||K(!1),x&&x(a)},!1),xe=_(a=>{O.current||(O.current=a.currentTarget),ue(a.target)&&(K(!0),h&&h(a)),$&&$(a)}),Q=()=>{const a=O.current;return u&&u!=="button"&&!(a.tagName==="A"&&a.href)},Ce=_(a=>{b&&!a.repeat&&D&&a.key===" "&&g.stop(a,()=>{g.start(a)}),a.target===a.currentTarget&&Q()&&a.key===" "&&a.preventDefault(),C&&C(a),a.target===a.currentTarget&&Q()&&a.key==="Enter"&&!p&&(a.preventDefault(),M&&M(a))}),Ee=_(a=>{b&&a.key===" "&&D&&!a.defaultPrevented&&g.stop(a,()=>{g.pulsate(a)}),v&&v(a),M&&a.target===a.currentTarget&&Q()&&a.key===" "&&!a.defaultPrevented&&M(a)});let W=u;W==="button"&&(F.href||F.to)&&(W=m);const X={};if(W==="button"){const a=!!F.formAction;X.type=j===void 0&&!a?"button":j,X.disabled=p}else!F.href&&!F.to&&(X.role="button"),p&&(X["aria-disabled"]=p);const Te=le(o,O),re={...r,centerRipple:i,component:u,disabled:p,disableRipple:d,disableTouchRipple:f,focusRipple:b,tabIndex:z,focusVisible:D},ze=tt(re);return T.jsxs(nt,{as:W,className:S(ze.root,c),ownerState:re,onBlur:Re,onClick:M,onContextMenu:me,onFocus:xe,onKeyDown:Ce,onKeyUp:Ee,onMouseDown:he,onMouseLeave:Me,onMouseUp:be,onDragLeave:ge,onTouchEnd:ve,onTouchMove:Se,onTouchStart:ye,ref:Te,tabIndex:p?-1:z,type:j,...X,...F,children:[s,de?T.jsx(Qe,{ref:fe,center:i,...I}):null]})});function w(e,t,o,r=!1){return _(n=>(o&&o(n),r||e[t](n),!0))}export{pt as B,se as T,ct as c};
