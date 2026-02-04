import{r as l,R as H}from"./iframe-C8JEZrMR.js";import{_ as Te,c as y,g as re,u as ae,s as Q,a as ve,d as Pe}from"./DefaultPropsProvider-BQnO_Pez.js";import{j as N}from"./jsx-runtime-u17CrQMm.js";import{_ as Ve,a as Be,T as oe,b as Se,c as we}from"./useSlot-B2ptTx3n.js";import{k as Z}from"./emotion-react.browser.esm-xuh6yhWU.js";import{u as ie,c as _}from"./mergeSlotProps-ozwSsWOK.js";import{i as se}from"./isFocusVisible-B8k4qzLc.js";function De(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function ee(t,e){var o=function(i){return e&&l.isValidElement(i)?e(i):i},a=Object.create(null);return t&&l.Children.map(t,function(n){return n}).forEach(function(n){a[n.key]=o(n)}),a}function Le(t,e){t=t||{},e=e||{};function o(d){return d in e?e[d]:t[d]}var a=Object.create(null),n=[];for(var i in t)i in e?n.length&&(a[i]=n,n=[]):n.push(i);var s,c={};for(var u in e){if(a[u])for(s=0;s<a[u].length;s++){var p=a[u][s];c[a[u][s]]=o(p)}c[u]=o(u)}for(s=0;s<n.length;s++)c[n[s]]=o(n[s]);return c}function k(t,e,o){return o[e]!=null?o[e]:t.props[e]}function je(t,e){return ee(t.children,function(o){return l.cloneElement(o,{onExited:e.bind(null,o),in:!0,appear:k(o,"appear",t),enter:k(o,"enter",t),exit:k(o,"exit",t)})})}function ke(t,e,o){var a=ee(t.children),n=Le(e,a);return Object.keys(n).forEach(function(i){var s=n[i];if(l.isValidElement(s)){var c=i in e,u=i in a,p=e[i],d=l.isValidElement(p)&&!p.props.in;u&&(!c||d)?n[i]=l.cloneElement(s,{onExited:o.bind(null,s),in:!0,exit:k(s,"exit",t),enter:k(s,"enter",t)}):!u&&c&&!d?n[i]=l.cloneElement(s,{in:!1}):u&&c&&l.isValidElement(p)&&(n[i]=l.cloneElement(s,{onExited:o.bind(null,s),in:p.props.in,exit:k(s,"exit",t),enter:k(s,"enter",t)}))}}),n}var Ne=Object.values||function(t){return Object.keys(t).map(function(e){return t[e]})},$e={component:"div",childFactory:function(e){return e}},te=(function(t){Ve(e,t);function e(a,n){var i;i=t.call(this,a,n)||this;var s=i.handleExited.bind(De(i));return i.state={contextValue:{isMounting:!0},handleExited:s,firstRender:!0},i}var o=e.prototype;return o.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},o.componentWillUnmount=function(){this.mounted=!1},e.getDerivedStateFromProps=function(n,i){var s=i.children,c=i.handleExited,u=i.firstRender;return{children:u?je(n,c):ke(n,s,c),firstRender:!1}},o.handleExited=function(n,i){var s=ee(this.props.children);n.key in s||(n.props.onExited&&n.props.onExited(i),this.mounted&&this.setState(function(c){var u=Te({},c.children);return delete u[n.key],{children:u}}))},o.render=function(){var n=this.props,i=n.component,s=n.childFactory,c=Be(n,["component","childFactory"]),u=this.state.contextValue,p=Ne(this.state.children).map(s);return delete c.appear,delete c.enter,delete c.exit,i===null?H.createElement(oe.Provider,{value:u},p):H.createElement(oe.Provider,{value:u},H.createElement(i,c,p))},e})(H.Component);te.propTypes={};te.defaultProps=$e;class G{static create(){return new G}static use(){const e=Se(G.create).current,[o,a]=l.useState(!1);return e.shouldMount=o,e.setShouldMount=a,l.useEffect(e.mountEffect,[o]),e}constructor(){this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}mount(){return this.mounted||(this.mounted=Ie(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}mountEffect=()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())};start(...e){this.mount().then(()=>this.ref.current?.start(...e))}stop(...e){this.mount().then(()=>this.ref.current?.stop(...e))}pulsate(...e){this.mount().then(()=>this.ref.current?.pulsate(...e))}}function Fe(){return G.use()}function Ie(){let t,e;const o=new Promise((a,n)=>{t=a,e=n});return o.resolve=t,o.reject=e,o}function Ue(t){const{className:e,classes:o,pulsate:a=!1,rippleX:n,rippleY:i,rippleSize:s,in:c,onExited:u,timeout:p}=t,[d,h]=l.useState(!1),M=y(e,o.ripple,o.rippleVisible,a&&o.ripplePulsate),P={width:s,height:s,top:-(s/2)+i,left:-(s/2)+n},b=y(o.child,d&&o.childLeaving,a&&o.childPulsate);return!c&&!d&&h(!0),l.useEffect(()=>{if(!c&&u!=null){const w=setTimeout(u,p);return()=>{clearTimeout(w)}}},[u,c,p]),N.jsx("span",{className:M,style:P,children:N.jsx("span",{className:b})})}const g=re("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),J=550,ze=80,Ae=Z`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,Oe=Z`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,Xe=Z`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,Ye=Q("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),Ke=Q(Ue,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${g.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Ae};
    animation-duration: ${J}ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
  }

  &.${g.ripplePulsate} {
    animation-duration: ${({theme:t})=>t.transitions.duration.shorter}ms;
  }

  & .${g.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${g.childLeaving} {
    opacity: 0;
    animation-name: ${Oe};
    animation-duration: ${J}ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
  }

  & .${g.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Xe};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,We=l.forwardRef(function(e,o){const a=ae({props:e,name:"MuiTouchRipple"}),{center:n=!1,classes:i={},className:s,...c}=a,[u,p]=l.useState([]),d=l.useRef(0),h=l.useRef(null);l.useEffect(()=>{h.current&&(h.current(),h.current=null)},[u]);const M=l.useRef(!1),P=we(),b=l.useRef(null),w=l.useRef(null),C=l.useCallback(f=>{const{pulsate:E,rippleX:R,rippleY:I,rippleSize:D,cb:z}=f;p(x=>[...x,N.jsx(Ke,{classes:{ripple:y(i.ripple,g.ripple),rippleVisible:y(i.rippleVisible,g.rippleVisible),ripplePulsate:y(i.ripplePulsate,g.ripplePulsate),child:y(i.child,g.child),childLeaving:y(i.childLeaving,g.childLeaving),childPulsate:y(i.childPulsate,g.childPulsate)},timeout:J,pulsate:E,rippleX:R,rippleY:I,rippleSize:D},d.current)]),d.current+=1,h.current=z},[i]),$=l.useCallback((f={},E={},R=()=>{})=>{const{pulsate:I=!1,center:D=n||E.pulsate,fakeElement:z=!1}=E;if(f?.type==="mousedown"&&M.current){M.current=!1;return}f?.type==="touchstart"&&(M.current=!0);const x=z?null:w.current,V=x?x.getBoundingClientRect():{width:0,height:0,left:0,top:0};let B,T,S;if(D||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)B=Math.round(V.width/2),T=Math.round(V.height/2);else{const{clientX:A,clientY:L}=f.touches&&f.touches.length>0?f.touches[0]:f;B=Math.round(A-V.left),T=Math.round(L-V.top)}if(D)S=Math.sqrt((2*V.width**2+V.height**2)/3),S%2===0&&(S+=1);else{const A=Math.max(Math.abs((x?x.clientWidth:0)-B),B)*2+2,L=Math.max(Math.abs((x?x.clientHeight:0)-T),T)*2+2;S=Math.sqrt(A**2+L**2)}f?.touches?b.current===null&&(b.current=()=>{C({pulsate:I,rippleX:B,rippleY:T,rippleSize:S,cb:R})},P.start(ze,()=>{b.current&&(b.current(),b.current=null)})):C({pulsate:I,rippleX:B,rippleY:T,rippleSize:S,cb:R})},[n,C,P]),Y=l.useCallback(()=>{$({},{pulsate:!0})},[$]),F=l.useCallback((f,E)=>{if(P.clear(),f?.type==="touchend"&&b.current){b.current(),b.current=null,P.start(0,()=>{F(f,E)});return}b.current=null,p(R=>R.length>0?R.slice(1):R),h.current=E},[P]);return l.useImperativeHandle(o,()=>({pulsate:Y,start:$,stop:F}),[Y,$,F]),N.jsx(Ye,{className:y(g.root,i.root,s),ref:w,...c,children:N.jsx(te,{component:null,exit:!0,children:u})})});function He(t){return ve("MuiButtonBase",t)}const _e=re("MuiButtonBase",["root","disabled","focusVisible"]),Ge=t=>{const{disabled:e,focusVisible:o,focusVisibleClassName:a,classes:n}=t,s=Pe({root:["root",e&&"disabled",o&&"focusVisible"]},He,n);return o&&a&&(s.root+=` ${a}`),s},qe=Q("button",{name:"MuiButtonBase",slot:"Root"})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${_e.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),it=l.forwardRef(function(e,o){const a=ae({props:e,name:"MuiButtonBase"}),{action:n,centerRipple:i=!1,children:s,className:c,component:u="button",disabled:p=!1,disableRipple:d=!1,disableTouchRipple:h=!1,focusRipple:M=!1,focusVisibleClassName:P,LinkComponent:b="a",onBlur:w,onClick:C,onContextMenu:$,onDragLeave:Y,onFocus:F,onFocusVisible:f,onKeyDown:E,onKeyUp:R,onMouseDown:I,onMouseLeave:D,onMouseUp:z,onTouchEnd:x,onTouchMove:V,onTouchStart:B,tabIndex:T=0,TouchRippleProps:S,touchRippleRef:A,type:L,...U}=a,O=l.useRef(null),m=Fe(),le=ie(m.ref,A),[j,K]=l.useState(!1);p&&j&&K(!1),l.useImperativeHandle(n,()=>({focusVisible:()=>{K(!0),O.current.focus()}}),[]);const ue=m.shouldMount&&!d&&!p;l.useEffect(()=>{j&&M&&!d&&m.pulsate()},[d,M,j,m]);const ce=v(m,"start",I,h),pe=v(m,"stop",$,h),fe=v(m,"stop",Y,h),de=v(m,"stop",z,h),he=v(m,"stop",r=>{j&&r.preventDefault(),D&&D(r)},h),me=v(m,"start",B,h),be=v(m,"stop",x,h),ge=v(m,"stop",V,h),Me=v(m,"stop",r=>{se(r.target)||K(!1),w&&w(r)},!1),Re=_(r=>{O.current||(O.current=r.currentTarget),se(r.target)&&(K(!0),f&&f(r)),F&&F(r)}),q=()=>{const r=O.current;return u&&u!=="button"&&!(r.tagName==="A"&&r.href)},Ee=_(r=>{M&&!r.repeat&&j&&r.key===" "&&m.stop(r,()=>{m.start(r)}),r.target===r.currentTarget&&q()&&r.key===" "&&r.preventDefault(),E&&E(r),r.target===r.currentTarget&&q()&&r.key==="Enter"&&!p&&(r.preventDefault(),C&&C(r))}),xe=_(r=>{M&&r.key===" "&&j&&!r.defaultPrevented&&m.stop(r,()=>{m.pulsate(r)}),R&&R(r),C&&r.target===r.currentTarget&&q()&&r.key===" "&&!r.defaultPrevented&&C(r)});let W=u;W==="button"&&(U.href||U.to)&&(W=b);const X={};if(W==="button"){const r=!!U.formAction;X.type=L===void 0&&!r?"button":L,X.disabled=p}else!U.href&&!U.to&&(X.role="button"),p&&(X["aria-disabled"]=p);const ye=ie(o,O),ne={...a,centerRipple:i,component:u,disabled:p,disableRipple:d,disableTouchRipple:h,focusRipple:M,tabIndex:T,focusVisible:j},Ce=Ge(ne);return N.jsxs(qe,{as:W,className:y(Ce.root,c),ownerState:ne,onBlur:Me,onClick:C,onContextMenu:pe,onFocus:Re,onKeyDown:Ee,onKeyUp:xe,onMouseDown:ce,onMouseLeave:he,onMouseUp:de,onDragLeave:fe,onTouchEnd:be,onTouchMove:ge,onTouchStart:me,ref:ye,tabIndex:p?-1:T,type:L,...X,...U,children:[s,ue?N.jsx(We,{ref:le,center:i,...S}):null]})});function v(t,e,o,a=!1){return _(n=>(o&&o(n),a||t[e](n),!0))}export{it as B,te as T};
