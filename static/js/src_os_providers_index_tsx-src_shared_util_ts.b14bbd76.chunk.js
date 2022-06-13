"use strict";(globalThis.webpackChunkmini_royale=globalThis.webpackChunkmini_royale||[]).push([["src_os_providers_index_tsx-src_shared_util_ts","src_os_providers_index_tsx"],{80039:(e,t,s)=>{s.r(t),s.d(t,{AccountProvider:()=>I,MintProvider:()=>B,PoolProvider:()=>f,UIProvider:()=>c,WalletProvider:()=>v,useAccount:()=>P,useMint:()=>_,usePool:()=>y,useUI:()=>h,useWallet:()=>b,withAccount:()=>j,withMint:()=>U,withPool:()=>w,withUI:()=>u,withWallet:()=>C});var a=s(92950),n=s(32659),r=s(87358),i=s(87482),l=s(45263);const o=(0,a.createContext)({}),c=e=>{let{children:t,appId:s,style:c={},antd:d=!1}=e;const u=(0,r.u5)(),h=(0,r.Qy)((e=>e.ui)),p=(0,a.useCallback)((async function(){return await u((0,i.AY)(...arguments)).unwrap()}),[u]),f=(0,a.useMemo)((()=>({ui:h,setBackground:p})),[h,p]),g=d?{getPopupContainer:()=>document.getElementById(s),..."object"===typeof d?d:{}}:void 0;return(0,l.jsx)(o.Provider,{value:f,children:(0,l.jsx)("section",{id:s,style:{backgroundColor:"transparent",...c},children:g?(0,l.jsx)(n.ConfigProvider,{...g,children:t}):t})})},d=e=>{let{children:t}=e;return(0,l.jsx)(o.Consumer,{children:e=>a.Children.map(t,(t=>(0,a.cloneElement)(t,{...e})))})},u=e=>{class t extends a.Component{render(){const{forwardedRef:t,...s}=this.props;return(0,l.jsx)(d,{children:(0,l.jsx)(e,{ref:t,...s})})}}return(0,a.forwardRef)(((e,s)=>(0,l.jsx)(t,{...e,ref:s})))},h=()=>(0,a.useContext)(o),p=(0,a.createContext)({}),f=e=>{let{children:t}=e;const s=(0,r.Qy)((e=>e.pools)),n=(0,a.useMemo)((()=>({pools:s})),[s]);return(0,l.jsx)(p.Provider,{value:n,children:t})},g=e=>{let{children:t}=e;return(0,l.jsx)(p.Consumer,{children:e=>a.Children.map(t,(t=>(0,a.cloneElement)(t,{...e})))})},w=e=>{class t extends a.Component{render(){const{forwardedRef:t,...s}=this.props;return(0,l.jsx)(g,{children:(0,l.jsx)(e,{ref:t,...s})})}}return(0,a.forwardRef)(((e,s)=>(0,l.jsx)(t,{...e,ref:s})))},y=()=>(0,a.useContext)(p),m=(0,a.createContext)({}),v=e=>{let{children:t}=e;const s=(0,r.Qy)((e=>e.wallet)),n=(0,a.useMemo)((()=>({wallet:s})),[s]);return(0,l.jsx)(m.Provider,{value:n,children:t})},k=e=>{let{children:t}=e;return(0,l.jsx)(m.Consumer,{children:e=>a.Children.map(t,(t=>(0,a.cloneElement)(t,{...e})))})},C=e=>{class t extends a.Component{render(){const{forwardedRef:t,...s}=this.props;return(0,l.jsx)(k,{children:(0,l.jsx)(e,{ref:t,...s})})}}return(0,a.forwardRef)(((e,s)=>(0,l.jsx)(t,{...e,ref:s})))},b=()=>(0,a.useContext)(m),x=(0,a.createContext)({}),I=e=>{let{children:t}=e;const s=(0,r.Qy)((e=>e.accounts)),n=(0,a.useMemo)((()=>({accounts:s})),[s]);return(0,l.jsx)(x.Provider,{value:n,children:t})},A=e=>{let{children:t}=e;return(0,l.jsx)(x.Consumer,{children:e=>a.Children.map(t,(t=>(0,a.cloneElement)(t,{...e})))})},j=e=>{class t extends a.Component{render(){const{forwardedRef:t,...s}=this.props;return(0,l.jsx)(A,{children:(0,l.jsx)(e,{ref:t,...s})})}}return(0,a.forwardRef)(((e,s)=>(0,l.jsx)(t,{...e,ref:s})))},P=()=>(0,a.useContext)(x);var S=s(95418),R=s(33015),T=s(94757),E=s.n(T),Z=s(67845),O=s(63805);const q=e=>({symbol:"SOL",name:"Solana",address:"11111111111111111111111111111111",decimals:9,chainId:e,extensions:{coingeckoId:"solana"},logoURI:"https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png"}),M=e=>({symbol:"SNTR",name:"Sentre",address:"5YwUkPdXLoujGkZuo9B4LsLKj3hdkDcfP4derpspifSJ",decimals:9,chainId:e,extensions:{coingeckoId:"sentre"},logoURI:"https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/SENBBKVCM7homnf5RX9zqpf1GFe935hnbU4uVzY1Y6M/logo.png"}),L=[q(103),M(103),{symbol:"wBTC",name:"Wrapped Bitcoin",address:"8jk4eJymMfNZV9mkRNxJEt2VJ3pRvdJvD5FE94GXGBPM",decimals:9,chainId:103,extensions:{coingeckoId:"bitcoin"},logoURI:"https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/qfnqNqs3nCAHjnyCgLRDbBtq4p2MtHZxw8YjSyYhPoL/logo.png"},{symbol:"wETH",name:"Ethereum",address:"27hdcZv7RtuMp75vupThR3T4KLsL61t476eosMdoec4c",decimals:9,chainId:103,extensions:{coingeckoId:"ethereum"},logoURI:"https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FeGn77dhg1KXRRFeSwwMiykZnZPw5JXW6naf2aQgZDQf/logo.png"},{symbol:"UNI",name:"Uniswap",address:"FVZFSXu3yn17YdcxLD72TFDUqkdE5xZvcW18EUpRQEbe",decimals:9,chainId:103,extensions:{coingeckoId:"uniswap"},logoURI:"https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/3MVa4e32PaKmPxYUQ6n8vFkWtCma68Ld7e7fTktWDueQ/logo.png"},{symbol:"USDC",name:"USD Coin",address:"2z6Ci38Cx6PyL3tFrT95vbEeB3izqpoLdxxBkJk2euyj",decimals:9,chainId:103,extensions:{coingeckoId:"usd-coin"},logoURI:"https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png"}];const D=new class{constructor(){var e=this;this.tokenMap=void 0,this.engine=void 0,this.chainId=void 0,this.cluster=void 0,this.loading=void 0,this.queue=void 0,this._init=async()=>this.tokenMap.size&&this.engine?[this.tokenMap,this.engine]:new Promise((async e=>{if(this.loading)return this.queue.push(e);this.loading=!0;let t=await(await(new Z.DK).resolve()).filterByChainId(this.chainId).getList();for("devnet"===this.cluster&&(t=t.concat(L)),t="testnet"===this.cluster?t.concat([M(102),q(102)]):t.concat([q(101)]),t.forEach((e=>this.tokenMap.set(e.address,e))),this.engine=E()((function(){this.ref("address"),this.field("symbol"),this.field("name"),t.forEach((e=>this.add(e)))})),e([this.tokenMap,this.engine]);this.queue.length;)this.queue.shift()([this.tokenMap,this.engine]);this.loading=!1})),this.all=async()=>{const[e]=await this._init();return Array.from(e.values())},this.findByAddress=async e=>{const[t]=await this._init();return t.get(e)},this.find=async function(t){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;const[a,n]=await e._init();let r=[];if(!t)return[];const i=t+"~1";return n.search(i).forEach((e=>{let{ref:t}=e;if(r.findIndex((e=>{let{address:s}=e;return s===t}))<0){const e=a.get(t);e&&r.push(e)}})),0===s?r:r.slice(0,s)},this.tokenMap=new Map,this.engine=void 0,this.chainId=O.Bv,this.cluster=O.ef,this.loading=!1,this.queue=[],this._init()}},W=(0,a.createContext)({}),B=e=>{let{children:t}=e;const s=(0,r.u5)(),n=(0,r.Qy)((e=>e.mints)),i=(0,r.Qy)((e=>e.pools)),o=(0,a.useCallback)((async function(){return await s((0,R.ih)(...arguments)).unwrap()}),[s]),c=(0,a.useCallback)((async e=>{var t;if(!S.account.isAddress(e))throw new Error("Invalid mint address");const s=await D.findByAddress(e);if(void 0!==(null===s||void 0===s?void 0:s.decimals))return s.decimals;if(Object.values(i).findIndex((t=>{let{mint_lpt:s}=t;return s===e}))>=0)return 9;const a=await o({address:e});if(null!==(t=a[e])&&void 0!==t&&t.decimals)return a[e].decimals;throw new Error("Cannot find mint decimals")}),[o,i]),d=(0,a.useMemo)((()=>({mints:n,getMint:o,getDecimals:c,tokenProvider:D})),[n,o,c]);return(0,l.jsx)(W.Provider,{value:d,children:t})},Q=e=>{let{children:t}=e;return(0,l.jsx)(W.Consumer,{children:e=>a.Children.map(t,(t=>(0,a.cloneElement)(t,{...e})))})},U=e=>{class t extends a.Component{render(){const{forwardedRef:t,...s}=this.props;return(0,l.jsx)(Q,{children:(0,l.jsx)(e,{ref:t,...s})})}}return(0,a.forwardRef)(((e,s)=>(0,l.jsx)(t,{...e,ref:s})))},_=()=>(0,a.useContext)(W)},65090:(e,t,s)=>{s.d(t,{ZP:()=>d});var a=s(19289),n=s(95418);const r="accounts",i=(0,a.createAsyncThunk)(`${r}/getAccounts`,(async e=>{let{owner:t}=e;if(!n.account.isAddress(t))throw new Error("Invalid owner/wallet address");const{splt:s}=window.sentre,a=n.account.fromAddress(t),{value:r}=await s.connection.getTokenAccountsByOwner(a,{programId:s.spltProgramId});let i={};return r.forEach((e=>{let{pubkey:t,account:{data:a}}=e;const n=t.toBase58(),r=s.parseAccountData(a);return i[n]=r})),i})),l=(0,a.createAsyncThunk)(`${r}/getAccount`,(async(e,t)=>{let{address:s}=e,{getState:a}=t;if(!n.account.isAddress(s))throw new Error("Invalid account address");const{accounts:{[s]:r}}=a();if(r)return{[s]:r};const{splt:i}=window.sentre;return{[s]:await i.getAccountData(s)}})),o=(0,a.createAsyncThunk)(`${r}/upsetAccount`,(async e=>{let{address:t,data:s}=e;if(!n.account.isAddress(t))throw new Error("Invalid address");if(!s)throw new Error("Data is empty");return{[t]:s}})),c=(0,a.createAsyncThunk)(`${r}/deleteAccount`,(async e=>{let{address:t}=e;if(!n.account.isAddress(t))throw new Error("Invalid address");return{address:t}})),d=(0,a.createSlice)({name:r,initialState:{},reducers:{},extraReducers:e=>{e.addCase(i.fulfilled,((e,t)=>{let{payload:s}=t;return s})).addCase(l.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(o.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(c.fulfilled,((e,t)=>{let{payload:s}=t;delete e[s.address]}))}}).reducer},5105:(e,t,s)=>{s.d(t,{ZP:()=>d});var a=s(19289),n=s(95418),r=s(3007);const i="flags",l=(0,a.createAsyncThunk)("flags/loadVisited",(async(e,t)=>{let{getState:s}=t;const{wallet:{address:a}}=s();if(!n.account.isAddress(a))throw new Error("Wallet is not connected yet");const i=new r.Z(a).createInstance("sentre");return{visited:await i.getItem("visited")||!1}})),o=(0,a.createAsyncThunk)("flags/updateVisited",(async(e,t)=>{let{getState:s}=t;const{wallet:{address:a}}=s();if(!n.account.isAddress(a))throw new Error("Wallet is not connected yet");const i=new r.Z(a).createInstance("sentre");return await i.setItem("visited",e),{visited:e}})),c=(0,a.createAsyncThunk)("flags/updateLoading",(async e=>({loading:e}))),d=(0,a.createSlice)({name:i,initialState:{visited:!0,loading:!0},reducers:{},extraReducers:e=>{e.addCase(l.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(o.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(c.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)}))}}).reducer},87358:(e,t,s)=>{s.d(t,{Qy:()=>y,u5:()=>w});var a=s(55754),n=s(19289),r=s(48128),i=s(22027),l=s(87482),o=s(5105),c=s(58851),d=s(21028),u=s(65090),h=s(33015),p=s(92871),f=s(33361),g=s(51865);(0,a.createStoreHook)(r.RootContext);const w=(0,a.createDispatchHook)(r.RootContext),y=(0,a.createSelectorHook)(r.RootContext);(0,n.configureStore)({middleware:e=>e(i.h),devTools:(0,i.$)("sentre"),reducer:{ui:l.ZP,flags:o.ZP,page:c.ZP,wallet:d.ZP,accounts:u.ZP,mints:h.ZP,pools:p.ZP,search:f.ZP,walkthrough:g.ZP}})},58851:(e,t,s)=>{s.d(t,{ZP:()=>k});var a=s(19289),n=s(95418),r=s(3007),i=s(55852),l=s(63805);const{register:{senreg:o,extra:c,devAppId:d}}=i.Z,u=(e,t)=>t&&Array.isArray(t)?("development"!==l.OB||t.includes(d)||t.unshift(d),t.filter((t=>e[t]))):[],h="page",p={register:{},appIds:[]},f=(0,a.createAsyncThunk)("page/loadRegister",(async()=>({register:{...await(async()=>{try{const e=await fetch(o);return await e.json()}catch(e){return{}}})(),...c}}))),g=(0,a.createAsyncThunk)("page/installManifest",(async(e,t)=>{let{getState:s}=t;const{wallet:{address:a},page:{appIds:r,register:i}}=s();if(!n.account.isAddress(a))throw new Error("Wallet is not connected yet.");if(r.includes(e.appId))throw new Error("Cannot run sandbox for an installed application.");const l=[...r];l.push(e.appId);const o={...i};return o[e.appId]=e,{appIds:l,register:o}})),w=(0,a.createAsyncThunk)("page/loadPage",(async(e,t)=>{let{getState:s}=t;const{wallet:{address:a},page:{register:i}}=s();if(!n.account.isAddress(a))throw new Error("Wallet is not connected yet.");const l=new r.Z(a).createInstance("sentre");return{appIds:u(i,await l.getItem("appIds")||p.appIds)}})),y=(0,a.createAsyncThunk)("page/updatePage",(async(e,t)=>{let{getState:s}=t;const{wallet:{address:a},page:{register:i}}=s();if(!n.account.isAddress(a))throw new Error("Wallet is not connected yet.");e=u(i,e);const l=new r.Z(a).createInstance("sentre");return await l.setItem("appIds",e),{appIds:e}})),m=(0,a.createAsyncThunk)("page/installApp",(async(e,t)=>{let{getState:s}=t;const{wallet:{address:a},page:{appIds:i}}=s();if(!n.account.isAddress(a))throw new Error("Wallet is not connected yet.");if(i.includes(e))return{};const l=[...i];l.push(e);const o=new r.Z(a).createInstance("sentre");return await o.setItem("appIds",l),{appIds:l}})),v=(0,a.createAsyncThunk)("page/uninstallApp",(async(e,t)=>{let{getState:s}=t;const{wallet:{address:a},page:{appIds:i}}=s();if(!n.account.isAddress(a))throw new Error("Wallet is not connected yet.");if(!i.includes(e))return{};const l=i.filter((t=>t!==e)),o=new r.Z(a),c=o.createInstance("sentre");return await c.setItem("appIds",l),await o.dropInstance(e),{appIds:l}})),k=(0,a.createSlice)({name:h,initialState:p,reducers:{},extraReducers:e=>{e.addCase(f.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(g.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(w.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(y.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(m.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(v.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)}))}}).reducer},92871:(e,t,s)=>{s.d(t,{ZP:()=>u});var a=s(19289),n=s(95418),r=s(55852);const{sol:{taxmanAddress:i}}=r.Z,l="pools",o=(0,a.createAsyncThunk)("pools/getPools",(async()=>{const{swap:e}=window.sentre,t=await e.connection.getProgramAccounts(e.swapProgramId,{filters:[{dataSize:257},{memcmp:{bytes:i,offset:65}}]});let s={};return t.forEach((t=>{let{pubkey:a,account:{data:n}}=t;const r=a.toBase58(),i=e.parsePoolData(n);s[r]=i})),s})),c=(0,a.createAsyncThunk)("pools/getPool",(async(e,t)=>{let{address:s}=e,{getState:a}=t;if(!n.account.isAddress(s))throw new Error("Invalid pool address");const{pools:{[s]:r}}=a();if(r)return{[s]:r};const{swap:i}=window.sentre;return{[s]:await i.getPoolData(s)}})),d=(0,a.createAsyncThunk)("pools/upsetPool",(async e=>{let{address:t,data:s}=e;if(!n.account.isAddress(t))throw new Error("Invalid pool address");if(!s)throw new Error("Data is empty");return{[t]:s}})),u=(0,a.createSlice)({name:l,initialState:{},reducers:{},extraReducers:e=>{e.addCase(o.fulfilled,((e,t)=>{let{payload:s}=t;return s})).addCase(c.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(d.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)}))}}).reducer},33361:(e,t,s)=>{s.d(t,{ZP:()=>c});var a=s(19289);const n="search",r=(0,a.createAsyncThunk)("search/setVisible",(async e=>({visible:e}))),i=(0,a.createAsyncThunk)("search/setValue",(async e=>({value:e}))),l=(0,a.createAsyncThunk)("search/setLoading",(async e=>({loading:e}))),o=(0,a.createAsyncThunk)("search/setDisabled",(async e=>({disabled:e}))),c=(0,a.createSlice)({name:n,initialState:{visible:!1,value:"",loading:!1,disabled:!1},reducers:{},extraReducers:e=>{e.addCase(r.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(i.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(l.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(o.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)}))}}).reducer},87482:(e,t,s)=>{s.d(t,{AY:()=>u,ZP:()=>h});var a=s(19289);const n=()=>{const e=window.innerWidth;return e<576?"xs":e<768?"sm":e<992?"md":e<1200?"lg":e<1400?"xl":"xxl"},r="ui",i={theme:window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark",width:window.innerWidth,infix:n(),touchable:"ontouchstart"in window||navigator.maxTouchPoints>0,visibleActionCenter:!1,visibleInstaller:!1,background:{light:"",dark:""}},l=(0,a.createAsyncThunk)("ui/setTheme",(async e=>({theme:e}))),o=(0,a.createAsyncThunk)("ui/resize",(async()=>({width:window.innerWidth,infix:n()}))),c=(0,a.createAsyncThunk)("ui/setVisibleActionCenter",(async e=>({visibleActionCenter:e}))),d=(0,a.createAsyncThunk)("ui/setVisibleInstaller",(async e=>({visibleInstaller:e}))),u=(0,a.createAsyncThunk)("ui/setBackground",(async e=>({background:e}))),h=(0,a.createSlice)({name:r,initialState:i,reducers:{},extraReducers:e=>{e.addCase(l.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(o.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(c.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(d.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(u.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)}))}}).reducer},51865:(e,t,s)=>{s.d(t,{ZP:()=>o});var a=s(19289);let n;!function(e){e[e.Default=0]="Default",e[e.NewComer=1]="NewComer"}(n||(n={}));const r="walkthrough",i={type:n.Default,run:!1,step:0},l=(0,a.createAsyncThunk)(`${r}/setWalkthrough`,(async e=>({...e}))),o=(0,a.createSlice)({name:r,initialState:i,reducers:{},extraReducers:e=>{e.addCase(l.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)}))}}).reducer},21028:(e,t,s)=>{s.d(t,{ZP:()=>g});var a=s(19289),n=s(95418),r=s(55852),i=s(90951);const l=async e=>{const{sol:{node:t,spltAddress:s,splataAddress:a,swapAddress:l}}=r.Z;window.sentre={wallet:e||new i.kI,lamports:new n.Lamports(t),splt:new n.SPLT(s,a,t),swap:new n.Swap(l,s,a,t)}},o="wallet",c={visible:!1,address:"",lamports:BigInt(0)},d=(0,a.createAsyncThunk)("wallet/openWallet",(async()=>({visible:!0}))),u=(0,a.createAsyncThunk)("wallet/closeWallet",(async()=>({visible:!1}))),h=(0,a.createAsyncThunk)("wallet/connectWallet",(async e=>{if(!e)throw new Error("Invalid wallet instance");await l(e);const t=await e.getAddress(),s=await window.sentre.lamports.getLamports(t);return{address:t,lamports:BigInt(s),visible:!1}})),p=(0,a.createAsyncThunk)("wallet/updateWallet",(async e=>{let{lamports:t}=e;return{lamports:t}})),f=(0,a.createAsyncThunk)("wallet/disconnectWallet",(async()=>{await(async()=>{var e;null!==(e=window.sentre)&&void 0!==e&&e.wallet&&window.sentre.wallet.disconnect(),await l()})(),window.location.reload()})),g=(0,a.createSlice)({name:o,initialState:c,reducers:{},extraReducers:e=>{e.addCase(d.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(u.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(h.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(p.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(f.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)}))}}).reducer},90951:(e,t,s)=>{s.d(t,{kI:()=>a.Z});var a=s(58181),n=s(99715),r=s(95418),i=s(97429).Buffer;class l extends n.Z{constructor(e,t){super(l.extractSecretKey(e,t),t)}}l.extractSecretKey=(e,t)=>{const s=r.account.fromKeystore(e,t);if(!s)throw new Error("Invalid ketstore or password");return i.from(s.secretKey).toString("hex")};s(6051),s(37344),s(2491),s(13974),s(31669),s(60766),s(80781)},12677:(e,t,s)=>{s.d(t,{sA:()=>o});s(95418),s(16200),s(63805);var a=s(15822),n=s(85964),r=s(67751);class i{static getSingleFlight(e){const t=JSON.stringify(e);if(this.mapInstance.has(t)){const e=this.mapInstance.get(t);if(e)return e}let s=new l(e);return this.mapInstance.set(t,s),s}static async load(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};"object"===typeof e&&(e=JSON.stringify(e));let a=i.getSingleFlight(s);i.mapInstance.set(e,a);const r=new n.g(e);return a.load(r,t)}}i.mapInstance=new Map;class l{constructor(e){this.config=void 0,this.intervalRequest=void 0,this.timeLogs=[],this.mapRequestCalling=new Map,this.requestQueue=[],this.config=Object.assign(a.Dt,e)}async load(e,t){const s=r.U.get(e.key);if(s)return Promise.resolve(s);let a=!1,n=this.mapRequestCalling.get(e.key);return n||(n=e,a=!0,this.mapRequestCalling.set(n.key,n)),new Promise(((e,s)=>{if(!n)return s("Not found request!");n.add(e,s),a&&this.fetch(n,t)}))}fetch(e,t){if(!this.validateLimit())return this.addRequestQueue(e,t);this.createTimeLogs(),t().then((t=>{r.U.set(e.key,t,this.config.cache),e.resolves(t)})).catch((t=>{e.rejects(t)})).finally((()=>{this.mapRequestCalling.delete(e.key),this.fetchRequestQueue(t)}))}fetchRequestQueue(e){if(!this.validateLimit())return;const t=this.requestQueue.shift();t&&this.load(t,e),0===this.requestQueue.length&&this.intervalRequest&&clearInterval(this.intervalRequest)}addRequestQueue(e,t){var s;this.requestQueue.push(e),this.intervalRequest=setInterval((()=>{this.fetchRequestQueue(t)}),null===(s=this.config.limit)||void 0===s?void 0:s.time)}validateLimit(){return!0}createTimeLogs(){var e;if(!this.config.limit)return;const t=(new Date).getTime();this.timeLogs.push(t),this.timeLogs.length>(null===(e=this.config.limit)||void 0===e?void 0:e.calls)&&this.timeLogs.shift()}}const o=e=>new Promise((t=>setTimeout(t,e)))}}]);
//# sourceMappingURL=src_os_providers_index_tsx-src_shared_util_ts.b14bbd76.chunk.js.map