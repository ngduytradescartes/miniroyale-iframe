(globalThis.webpackChunkmini_royale=globalThis.webpackChunkmini_royale||[]).push([[637,402],{578:(e,t,n)=>{"use strict";var r=n(61250);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,i){if(i!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},43091:(e,t,n)=>{e.exports=n(578)()},61250:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},9402:(e,t,n)=>{"use strict";n.r(t),n.d(t,{BrowserRouter:()=>f,HashRouter:()=>p,Link:()=>R,MemoryRouter:()=>r.VA,NavLink:()=>E,Prompt:()=>r.NL,Redirect:()=>r.l_,Route:()=>r.AW,Router:()=>r.F0,StaticRouter:()=>r.gx,Switch:()=>r.rs,generatePath:()=>r.Gn,matchPath:()=>r.LX,useHistory:()=>r.k6,useLocation:()=>r.TH,useParams:()=>r.UO,useRouteMatch:()=>r.$B,withRouter:()=>r.EN});var r=n(2521),o=n(94578),a=n(92950),i=n.n(a),c=n(45976),s=n(87462),u=n(63366),l=n(86243),f=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).history=(0,c.lX)(t.props),t}return(0,o.Z)(t,e),t.prototype.render=function(){return i().createElement(r.F0,{history:this.history,children:this.props.children})},t}(i().Component);var p=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).history=(0,c.q_)(t.props),t}return(0,o.Z)(t,e),t.prototype.render=function(){return i().createElement(r.F0,{history:this.history,children:this.props.children})},t}(i().Component);var h=function(e,t){return"function"===typeof e?e(t):e},y=function(e,t){return"string"===typeof e?(0,c.ob)(e,null,null,t):e},v=function(e){return e},m=i().forwardRef;"undefined"===typeof m&&(m=v);var d=m((function(e,t){var n=e.innerRef,r=e.navigate,o=e.onClick,a=(0,u.Z)(e,["innerRef","navigate","onClick"]),c=a.target,l=(0,s.Z)({},a,{onClick:function(e){try{o&&o(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||c&&"_self"!==c||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),r())}});return l.ref=v!==m&&t||n,i().createElement("a",l)}));var R=m((function(e,t){var n=e.component,o=void 0===n?d:n,a=e.replace,f=e.to,p=e.innerRef,R=(0,u.Z)(e,["component","replace","to","innerRef"]);return i().createElement(r.s6.Consumer,null,(function(e){e||(0,l.Z)(!1);var n=e.history,r=y(h(f,e.location),e.location),u=r?n.createHref(r):"",d=(0,s.Z)({},R,{href:u,navigate:function(){var t=h(f,e.location),r=(0,c.Ep)(e.location)===(0,c.Ep)(y(t));(a||r?n.replace:n.push)(t)}});return v!==m?d.ref=t||p:d.innerRef=p,i().createElement(o,d)}))})),g=function(e){return e},C=i().forwardRef;"undefined"===typeof C&&(C=g);var E=C((function(e,t){var n=e["aria-current"],o=void 0===n?"page":n,a=e.activeClassName,c=void 0===a?"active":a,f=e.activeStyle,p=e.className,v=e.exact,m=e.isActive,d=e.location,E=e.sensitive,b=e.strict,k=e.style,_=e.to,w=e.innerRef,T=(0,u.Z)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return i().createElement(r.s6.Consumer,null,(function(e){e||(0,l.Z)(!1);var n=d||e.location,a=y(h(_,n),n),u=a.pathname,P=u&&u.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),Z=P?(0,r.LX)(n.pathname,{path:P,exact:v,sensitive:E,strict:b}):null,O=!!(m?m(Z,n):Z),N="function"===typeof p?p(O):p,x="function"===typeof k?k(O):k;O&&(N=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return e})).join(" ")}(N,c),x=(0,s.Z)({},x,f));var A=(0,s.Z)({"aria-current":O&&o||null,className:N,style:x,to:a},T);return g!==C?A.ref=t||w:A.innerRef=w,i().createElement(R,A)}))}))}}]);
//# sourceMappingURL=637.5782d486.chunk.js.map