/*! For license information please see src_bootstrap_app_tsx-src_static_images_bg_jpeg.4c7f6876.chunk.js.LICENSE.txt */
(globalThis.webpackChunkmini_royale=globalThis.webpackChunkmini_royale||[]).push([["src_bootstrap_app_tsx-src_static_images_bg_jpeg"],{45597:(e,t,n)=>{"use strict";Object.defineProperty(t,"X$",{value:!0}),Object.defineProperty(t,"jY",{enumerable:!0,get:function(){return o.default}}),t.h0=void 0,Object.defineProperty(t,"ng",{enumerable:!0,get:function(){return a.default}});var i=c(n(96369)),r=c(n(18126)),s=c(n(26252)),o=c(n(69363)),a=c(n(83272));function c(e){return e&&e.__esModule?e:{default:e}}const l=[i.default,r.default,s.default];t.h0=l},57393:(e,t,n)=>{"use strict";n.r(t),n.d(t,{Page:()=>O,__esModule:()=>w.X$,logo:()=>w.jY,panels:()=>w.h0,readme:()=>w.ng});var i=n(55754),r=n(44490),s=n(92950),o=n(45263),a=n(80754);const c=function(e){var t=e.appId,n=e.src,i=e.title,r=e.wallet,c=e.verbose,l=void 0!==c&&c;return(0,s.useEffect)((function(){return new a.Gateway(r,l).terminate}),[]),(0,o.jsx)("iframe",{id:t+"-iframe",src:n,title:i,style:{height:"calc(100vh - 64px)",margin:-12,marginTop:-24,border:"none",width:"100vw"},loading:"lazy",allowFullScreen:!0})};const l={appId:"mini_royale",url:"https://descartesnetwork.github.io/miniroyale-iframe/index.js"},d={devnet:{node:"https://api.devnet.solana.com",spltAddress:"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",splataAddress:"ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"},testnet:{node:"https://api.testnet.solana.com",spltAddress:"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",splataAddress:"ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"},mainnet:{node:"https://api.mainnet-beta.solana.com",spltAddress:"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",splataAddress:"ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"}},u={manifest:{development:{...l},staging:{...l},production:{...l}}[r.env],sol:d[r.net]},f=n.p+"static/media/bg.08cabc9a080d99cedcf4.jpeg",{manifest:{appId:h}}=u,p=()=>{const{setBackground:e}=(0,r.useUI)();return(0,s.useEffect)((()=>{e({light:f,dark:f})}),[e]),(0,o.jsx)(c,{wallet:window.sentre.wallet,appId:h,src:"https://miniroyale.io/",title:"Mini Royale: Open economy FPS on #Solana."})};var v=n(19289),S=n(42224),m=n(48744),g=n.n(m),E=n(97429).Buffer;BigInt.prototype.toJSON=function(){return this.toString()};const y={serializableCheck:{isSerializable:e=>"undefined"===typeof e||null===e||"string"===typeof e||"boolean"===typeof e||"number"===typeof e||Array.isArray(e)||(e=>{if(null===e)return!1;const t=Object.getPrototypeOf(e);return null!==t&&null===Object.getPrototypeOf(t)})(e)||"bigint"===typeof e||e instanceof S.PublicKey||e instanceof g()||E.isBuffer(e)}},b="main",N=(0,v.createAsyncThunk)("main/increaseCounter",(async(e,t)=>{let{getState:n}=t;const{main:{counter:i}}=n();return{counter:i+1}})),_=(0,v.createSlice)({name:b,initialState:{counter:0},reducers:{},extraReducers:e=>{e.addCase(N.fulfilled,((e,t)=>{let{payload:n}=t;Object.assign(e,n)}))}}).reducer,T=(0,v.configureStore)({middleware:e=>e(y),devTools:!1,reducer:{main:_}});var w=n(45597);const{manifest:{appId:A}}=u,O=()=>(0,o.jsx)(r.UIProvider,{appId:A,antd:!0,children:(0,o.jsx)(i.Provider,{store:T,children:(0,o.jsx)(p,{})})})},39297:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Messenger=void 0;const n="sentre";t.Messenger=class{constructor(e){let{name:t="unknown",verbose:i=!1}=e;this.emit=(e,t)=>e.postMessage({type:n,payload:t},"*"),this.listen=e=>{const t=t=>{let{data:{type:i,payload:r},origin:s}=t;if(i===n)return this.verbose&&console.log(this.name,s,r),e(r)};window.addEventListener("message",t);const i=()=>window.removeEventListener("message",t);return this.killers.push(i),i},this.killAll=()=>{for(;this.killers.length>0;){const e=this.killers.pop();e&&e()}},this.name=t,this.verbose=i,this.killers=[]}}},94559:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ONE_SEC=t.EVENTS=void 0,function(e){e[e.CONNECT=0]="CONNECT",e[e.GET_ADDRESS=1]="GET_ADDRESS",e[e.SIGN_TRANSACTION=2]="SIGN_TRANSACTION",e[e.SIGN_ALL_TRANSACTIONS=3]="SIGN_ALL_TRANSACTIONS",e[e.SIGN_MESSAGE=4]="SIGN_MESSAGE"}(t.EVENTS||(t.EVENTS={})),t.ONE_SEC=1e3},83179:function(e,t,n){"use strict";var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(r,s){function o(e){try{c(i.next(e))}catch(t){s(t)}}function a(e){try{c(i.throw(e))}catch(t){s(t)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}c((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.Gateway=void 0;const r=n(42224),s=n(39297),o=n(94559);t.Gateway=class{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.terminate=()=>this.messenger.killAll(),this.emit=(e,t)=>{const n=document.getElementById(e);if(!n||"IFRAME"!==n.tagName)throw new Error(`Cannot find iframe with id ${e}`);const i=null===n||void 0===n?void 0:n.contentWindow;if(!i)throw new Error("Cannot access to iframe window");return this.messenger.emit(i,t)},this.onConnect=(e,t)=>this.emit(e,{uid:t,event:o.EVENTS.CONNECT,data:!0}),this.onGetAddress=(e,t)=>i(this,void 0,void 0,(function*(){const n=yield this.wallet.getAddress();return this.emit(e,{uid:t,event:o.EVENTS.GET_ADDRESS,data:n})})),this.onSignTransaction=(e,t,n)=>i(this,void 0,void 0,(function*(){const i=r.Transaction.from(n),s=(yield this.wallet.signTransaction(i)).serialize();return this.emit(e,{uid:t,event:o.EVENTS.SIGN_TRANSACTION,data:s})})),this.onSignAllTransactions=(e,t,n)=>i(this,void 0,void 0,(function*(){const i=n.map((e=>r.Transaction.from(e))),s=(yield this.wallet.signAllTransactions(i)).map((e=>e.serialize()));return this.emit(e,{uid:t,event:o.EVENTS.SIGN_ALL_TRANSACTIONS,data:s})})),this.onSignMessage=(e,t,n)=>i(this,void 0,void 0,(function*(){const i=yield this.wallet.signMessage(n);return this.emit(e,{uid:t,event:o.EVENTS.SIGN_MESSAGE,data:i})})),this.messenger=new s.Messenger({name:"gateway",verbose:t}),this.wallet=e,this.messenger.listen((e=>{let{id:t,uid:n,event:r,data:s}=e;return i(this,void 0,void 0,(function*(){return r===o.EVENTS.CONNECT?this.onConnect(t,n):r===o.EVENTS.GET_ADDRESS?this.onGetAddress(t,n):r===o.EVENTS.SIGN_TRANSACTION?this.onSignTransaction(t,n,s):r===o.EVENTS.SIGN_ALL_TRANSACTIONS?this.onSignAllTransactions(t,n,s):r===o.EVENTS.SIGN_MESSAGE?this.onSignMessage(t,n,s):void 0}))}))}}},80754:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,r)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),r=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),r(n(39297),t),r(n(94559),t),r(n(83179),t),r(n(17543),t)},17543:function(e,t,n){"use strict";var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(r,s){function o(e){try{c(i.next(e))}catch(t){s(t)}}function a(e){try{c(i.throw(e))}catch(t){s(t)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}c((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.WalletConnector=t.UID=void 0;const r=n(42224),s=n(39297),o=n(94559);t.UID=()=>Math.round(Math.random()*Math.pow(10,9));t.WalletConnector=class{constructor(e){let n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.interact=e=>{let{event:n,data:r={},timeout:s=3*o.ONE_SEC}=e;return i(this,void 0,void 0,(function*(){return new Promise(((e,i)=>{try{if(!window.parent)throw new Error("Cannot access to parent window");const o=setTimeout((()=>i("Request timeout")),s),a=this.id,c=(0,t.UID)(),l=this.messenger.listen((t=>{let{event:i,uid:r,data:s}=t;if(n===i&&c===r)return clearTimeout(o),l(),e(s)}));return this.messenger.emit(window.parent,{event:n,id:a,uid:c,data:r})}catch(o){return i(o.message)}}))}))},this.isConnected=()=>i(this,void 0,void 0,(function*(){return yield this.interact({event:o.EVENTS.CONNECT,timeout:3*o.ONE_SEC})})),this.getAddress=()=>i(this,void 0,void 0,(function*(){return yield this.interact({event:o.EVENTS.GET_ADDRESS,timeout:6*o.ONE_SEC})})),this.signTransaction=e=>i(this,void 0,void 0,(function*(){const t=yield this.interact({event:o.EVENTS.SIGN_TRANSACTION,data:e.serialize({requireAllSignatures:!1,verifySignatures:!1}),timeout:60*o.ONE_SEC});return r.Transaction.from(t)})),this.signAllTransactions=e=>i(this,void 0,void 0,(function*(){return(yield this.interact({event:o.EVENTS.SIGN_ALL_TRANSACTIONS,data:e.map((e=>e.serialize({requireAllSignatures:!1,verifySignatures:!1}))),timeout:120*o.ONE_SEC})).map((e=>r.Transaction.from(e)))})),this.signMessage=e=>i(this,void 0,void 0,(function*(){return yield this.interact({event:o.EVENTS.SIGN_MESSAGE,data:e,timeout:60*o.ONE_SEC})})),this.id=e+"-iframe",this.messenger=new s.Messenger({name:this.id,verbose:n})}}},25882:e=>{"use strict";var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function r(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach((function(e){i[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},i)).join("")}catch(r){return!1}}()?Object.assign:function(e,s){for(var o,a,c=r(e),l=1;l<arguments.length;l++){for(var d in o=Object(arguments[l]))n.call(o,d)&&(c[d]=o[d]);if(t){a=t(o);for(var u=0;u<a.length;u++)i.call(o,a[u])&&(c[a[u]]=o[a[u]])}}return c}},62175:(e,t,n)=>{"use strict";n(25882);var i=n(92950),r=60103;if(60107,"function"===typeof Symbol&&Symbol.for){var s=Symbol.for;r=s("react.element"),s("react.fragment")}var o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var i,s={},l=null,d=null;for(i in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,i)&&!c.hasOwnProperty(i)&&(s[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===s[i]&&(s[i]=t[i]);return{$$typeof:r,type:e,key:l,ref:d,props:s,_owner:o.current}}t.jsx=l,t.jsxs=l},45263:(e,t,n)=>{"use strict";e.exports=n(62175)},83272:(e,t,n)=>{"use strict";e.exports=n.p+"static/media/README.d9bd72e45484b93cd18e.md"},69363:(e,t,n)=>{"use strict";e.exports=n.p+"static/media/logo.4eec7392e81c8bf748fa.png"},96369:(e,t,n)=>{"use strict";e.exports=n.p+"static/media/panel-1.0adf0b580a2e76a93ed8.png"},18126:(e,t,n)=>{"use strict";e.exports=n.p+"static/media/panel-2.ad584d3a7b81517180cd.png"},26252:(e,t,n)=>{"use strict";e.exports=n.p+"static/media/panel-3.832bce6ba000469875af.png"},46601:()=>{},89214:()=>{},85568:()=>{},55024:()=>{}}]);
//# sourceMappingURL=src_bootstrap_app_tsx-src_static_images_bg_jpeg.4c7f6876.chunk.js.map