(globalThis.webpackChunkmini_royale=globalThis.webpackChunkmini_royale||[]).push([["src_os_store_devTools_ts-src_os_store_mints_reducer_ts-src_os_view_wallet_lib_cloverWallet_ts-abf022"],{55852:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var s=r(63805);const n={spltAddress:"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",splataAddress:"ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"},a={devnet:{...n,node:s.f4,swapAddress:"4erFSLP7oBFSVC1t35jdxmbfxEhYCKfoM6XdG2BLR3UF",taxmanAddress:"8UaZw2jDhJzv5V53569JbCd3bD4BnyCfBH3sjwgajGS9",platformFee:5e3},testnet:{...n,node:s.f4,swapAddress:"4erFSLP7oBFSVC1t35jdxmbfxEhYCKfoM6XdG2BLR3UF",taxmanAddress:"8UaZw2jDhJzv5V53569JbCd3bD4BnyCfBH3sjwgajGS9",platformFee:5e3},mainnet:{...n,node:s.f4,swapAddress:"SSW7ooZ1EbEognq5GosbygA3uWW1Hq1NsFq6TsftCFV",taxmanAddress:"9doo2HZQEmh2NgfT3Yx12M89aoBheycYqH1eaR5gKb3e",platformFee:5e3}};const o="mini_royale",i={[o]:{url:"https://descartesnetwork.github.io/miniroyale-iframe/index.js",appId:o,name:"Mini Royale",author:{name:"faraway",email:"https://discord.com/invite/miniroyale"},tags:"game,NFT,P2E".split(",").map((e=>e.trim())),description:"\ud83d\udd2b Open economy FPS on #Solana.",verified:!1}},c={development:{devAppId:o,extra:i,senreg:"https://descartesnetwork.github.io/senreg/register.json"},staging:{devAppId:o,extra:i,senreg:"https://descartesnetwork.github.io/senreg/register.json"},production:{devAppId:o,extra:{},senreg:"https://descartesnetwork.github.io/senreg/register.json"}},d={sol:a[s.ef],register:c[s.OB]}},22027:(e,t,r)=>{"use strict";r.d(t,{$:()=>i,h:()=>c});var s=r(71256),n=r(48744),a=r.n(n),o=r(97429).Buffer;const i=e=>!1;BigInt.prototype.toJSON=function(){return this.toString()};const c={serializableCheck:{isSerializable:e=>"undefined"===typeof e||null===e||"string"===typeof e||"boolean"===typeof e||"number"===typeof e||Array.isArray(e)||(e=>{if(null===e)return!1;const t=Object.getPrototypeOf(e);return null!==t&&null===Object.getPrototypeOf(t)})(e)||"bigint"===typeof e||e instanceof s.PublicKey||e instanceof a()||o.isBuffer(e)}}},33015:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>d,ih:()=>o});var s=r(19289),n=r(95418);const a="mints",o=(0,s.createAsyncThunk)("mints/getMint",(async(e,t)=>{let{address:r,force:s=!1}=e,{getState:a}=t;if(!n.account.isAddress(r))throw new Error("Invalid mint address");if(!s){const{accounts:{[r]:e}}=a();if(e)return{[r]:e}}const{splt:o}=window.sentre;return{[r]:await o.getMintData(r)}})),i=(0,s.createAsyncThunk)("mints/upsetMint",(async e=>{let{address:t,data:r}=e;if(!n.account.isAddress(t))throw new Error("Invalid address");if(!r)throw new Error("Data is empty");return{[t]:r}})),c=(0,s.createAsyncThunk)("mints/deleteMint",(async e=>{let{address:t}=e;if(!n.account.isAddress(t))throw new Error("Invalid address");return{address:t}})),d=(0,s.createSlice)({name:a,initialState:{},reducers:{},extraReducers:e=>{e.addCase(o.fulfilled,((e,t)=>{let{payload:r}=t;Object.assign(e,r)})).addCase(i.fulfilled,((e,t)=>{let{payload:r}=t;Object.assign(e,r)})).addCase(c.fulfilled,((e,t)=>{let{payload:r}=t;delete e[r.address]}))}}).reducer},55721:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var s=r(53933);const n=class{constructor(e){this.walletType=void 0,this.walletType=e,s.Z.set("WalletType",this.walletType)}async getProvider(){throw new Error("Wallet is not connected")}async getAddress(){throw new Error("Wallet is not connected")}async signTransaction(e){throw new Error("Wallet is not connected")}async signAllTransactions(e){throw new Error("Wallet is not connected")}async signMessage(e){throw new Error("Wallet is not connected")}async verifySignature(e,t,r){throw new Error("Wallet is not connected")}async disconnect(){s.Z.clear("WalletType");(await this.getProvider()).disconnect()}}},80781:(e,t,r)=>{"use strict";r.d(t,{Z:()=>g});var s,n=r(53229),a=r(44967),o=r(95418),i=r(55721),c=r(35369),d=r(97429).Buffer;const g=(s=class extends i.Z{constructor(){super("Clover")}async getProvider(){const{clover_solana:e}=window;if(null===e||void 0===e||!e.isCloverWallet)throw new Error("Wallet is not connected");return e}async getAddress(){const e=await this.getProvider(),t=await e.getAccount();if(!o.account.isAddress(t))throw new Error("There is no Solana account");return t}async signTransaction(e){const t=await this.getProvider(),r=await this.getAddress(),s=o.account.fromAddress(r);return e.feePayer||(e.feePayer=s),await t.signTransaction(e)}async signAllTransactions(e){const t=await this.getProvider(),r=await this.getAddress(),s=o.account.fromAddress(r);return e.forEach((e=>{e.feePayer||(e.feePayer=s)})),await t.signAllTransactions(e)}async signMessage(e){if(!e)throw new Error("Message must be a non-empty string");const t=await this.getProvider(),r=await this.getAddress(),s=(new TextEncoder).encode(e),{signature:n}=await t.signMessage(s,"utf8");return{address:r,signature:d.from(n).toString("hex"),message:e}}async verifySignature(e,t,r){r=r||await this.getAddress();const s=o.account.fromAddress(r),n=d.from(e,"hex"),i=(new TextEncoder).encode(t);return a.sign.detached.verify(i,n,s.toBuffer())}},(0,n.Z)(s.prototype,"signTransaction",[c.n],Object.getOwnPropertyDescriptor(s.prototype,"signTransaction"),s.prototype),(0,n.Z)(s.prototype,"signAllTransactions",[c.Y],Object.getOwnPropertyDescriptor(s.prototype,"signAllTransactions"),s.prototype),s)},6051:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var s,n=r(53229),a=r(95418),o=r(68532),i=r(55721),c=r(35369);const d=(s=class extends i.Z{constructor(){super("Coin98")}async getProvider(){var e;const{sol:t}=(null===(e=window)||void 0===e?void 0:e.coin98)||{};if(!t)throw new Error("Wallet is not connected");return t}async getAddress(){const e=await this.getProvider(),[t]=await e.request({method:"sol_accounts"})||[];if(!a.account.isAddress(t))throw new Error("There is no Solana account");return t}async signTransaction(e){const t=await this.getProvider(),r=await this.getAddress(),s=a.account.fromAddress(r);e.feePayer||(e.feePayer=s);const{signature:n}=await t.request({method:"sol_sign",params:[e]}),i=(0,o.decode)(n);return e.addSignature(s,i),e}async signAllTransactions(e){const t=await this.getProvider(),r=await this.getAddress(),s=a.account.fromAddress(r);e.forEach((e=>{e.feePayer||(e.feePayer=s)}));const{signatures:n}=await t.request({method:"sol_signAllTransactions",params:[e]});return n.forEach(((t,r)=>{const n=(0,o.decode)(t);e[r].addSignature(s,n)})),e}async signMessage(e){if(!e)throw new Error("Message must be a non-empty string");const t=await this.getProvider();return await t.request({method:"sol_sign",params:[e]})}async verifySignature(e,t,r){r=r||await this.getAddress();return await a.account.verifySignature(r,e,t)}},(0,n.Z)(s.prototype,"signTransaction",[c.n],Object.getOwnPropertyDescriptor(s.prototype,"signTransaction"),s.prototype),(0,n.Z)(s.prototype,"signAllTransactions",[c.Y],Object.getOwnPropertyDescriptor(s.prototype,"signAllTransactions"),s.prototype),s)},35369:(e,t,r)=>{"use strict";r.d(t,{Y:()=>c,n:()=>i});var s=r(71256),n=r(55852);const{sol:{taxmanAddress:a,platformFee:o}}=n.Z,i=(e,t,r)=>{const n=r.value;r.value=async function(t){const r=s.SystemProgram.transfer({fromPubkey:t.feePayer||await e.getAddress(),toPubkey:new s.PublicKey(a),lamports:o});return t.add(r),n.call(this,t)}},c=(e,t,r)=>{const n=r.value;r.value=async function(t){for(const r of t){const t=s.SystemProgram.transfer({fromPubkey:r.feePayer||await e.getAddress(),toPubkey:new s.PublicKey(a),lamports:o});r.add(t)}return n.call(this,t)}}},58181:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var s=r(55721);class n extends s.Z{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:()=>{};super("Guest"),this._callback=()=>{},this._error=()=>{throw new Error("You are in the Guest Mode. Please connect your personal wallet to proceed the action.")},this._callback=e}async getProvider(){return{address:"GuestAccount11111111111111111111111111111111",disconnect:()=>{}}}async getAddress(){const{address:e}=await this.getProvider();return e}async signTransaction(e){return await this._callback(),this._error()}async signAllTransaction(e){return await this._callback(),this._error()}async signMessage(e){return await this._callback(),this._error()}async verifySignature(e,t,r){return await this._callback(),this._error()}}const a=n},37344:(e,t,r)=>{"use strict";r.d(t,{Z:()=>g});var s,n=r(53229),a=r(44967),o=r(95418),i=r(55721),c=r(35369),d=r(97429).Buffer;const g=(s=class extends i.Z{constructor(){super("Phantom")}async getProvider(){const{solana:e}=window;if(null===e||void 0===e||!e.isPhantom)throw new Error("Wallet is not connected");return e.isConnected?e:await new Promise((t=>(e.on("connect",(()=>t(e))),e.connect())))}async getAddress(){const e=(await this.getProvider()).publicKey.toString();if(!o.account.isAddress(e))throw new Error("There is no Solana account");return e}async signTransaction(e){const t=await this.getProvider(),r=await this.getAddress(),s=o.account.fromAddress(r);return e.feePayer||(e.feePayer=s),await t.signTransaction(e)}async signAllTransactions(e){const t=await this.getProvider(),r=await this.getAddress(),s=o.account.fromAddress(r);return e.forEach((e=>{e.feePayer||(e.feePayer=s)})),await t.signAllTransactions(e)}async signMessage(e){if(!e)throw new Error("Message must be a non-empty string");const t=await this.getProvider(),r=await this.getAddress(),s=(new TextEncoder).encode(e),{signature:n}=await t.signMessage(s,"utf8");return{address:r,signature:d.from(n).toString("hex"),message:e}}async verifySignature(e,t,r){r=r||await this.getAddress();const s=o.account.fromAddress(r),n=d.from(e,"hex"),i=(new TextEncoder).encode(t);return a.sign.detached.verify(i,n,s.toBuffer())}},(0,n.Z)(s.prototype,"signTransaction",[c.n],Object.getOwnPropertyDescriptor(s.prototype,"signTransaction"),s.prototype),(0,n.Z)(s.prototype,"signAllTransactions",[c.Y],Object.getOwnPropertyDescriptor(s.prototype,"signAllTransactions"),s.prototype),s)},99715:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var s=r(53229),n=r(44967),a=r(95418),o=r(55721);const i="sentre",c=window.sessionStorage,d=e=>{try{return e?JSON.parse(e):null}catch(t){return!1}},g={set:(e,t)=>{let r=d(c.getItem(i));r&&"object"===typeof r||(r={}),r[e]=t,c.setItem(i,JSON.stringify(r))},get:e=>{let t=d(c.getItem(i));return t&&"object"===typeof t?t[e]:null},clear:e=>{g.set(e,null)}},l=g;var u,w=r(53933),h=r(35369),y=r(97429).Buffer;const p=(u=class e extends o.Z{constructor(t,r){super("SecretKey"),e.setSecretKey(t,r)}static xor(e,t){if(e.length!==t.length)throw new Error("Cannot XOR two different-length buffers");const r=y.alloc(e.length);for(let s=0;s<r.length;s++)r[s]=e[s]^t[s];return r}static getPassword(){let e=l.get("Password");if(e||(e=window.prompt("Input the password:")),!e)throw new Error("User rejects to sign the transaction");return l.set("Password",e),e}static setSecretKey(t,r){const{secretKey:s}=a.account.fromSecretKey(t)||{};if(!s)throw new Error("Invalid secret key");r=r||e.getPassword();const o=(0,n.hash)(y.from(r)),i=e.xor(o,s);w.Z.set("SecretKey",i.toString("hex"))}static getSecretKey(t){t=t||e.getPassword();const r=(0,n.hash)(y.from(t)),s=w.Z.get("SecretKey");if(!s)throw new Error("Invalid secret key");return e.xor(r,y.from(s,"hex")).toString("hex")}async getProvider(){const t=e.getSecretKey(),r=a.account.fromSecretKey(t);if(!r)throw new Error("Cannot get the keystore-based provider");return{keypair:r,disconnect:()=>l.clear("SecretKey")}}async getAddress(){const{keypair:e}=await this.getProvider();return e.publicKey.toBase58()}async signTransaction(e){if(!window.confirm("Please confirm to sign the transaction!"))throw new Error("User rejects to sign the transaction");const{keypair:t}=await this.getProvider(),r=e.serializeMessage(),s=t.publicKey;e.feePayer||(e.feePayer=s);const a=n.sign.detached(r,t.secretKey);return e.addSignature(s,y.from(a)),e}async signAllTransactions(e){if(!window.confirm("Please confirm to sign the transactions!"))throw new Error("User rejects to sign the transactions");const{keypair:t}=await this.getProvider(),r=[];for(const s of e){const e=s.serializeMessage(),a=t.publicKey;s.feePayer||(s.feePayer=a);const o=n.sign.detached(e,t.secretKey);s.addSignature(a,y.from(o)),r.push(s)}return r}async signMessage(e){if(!e)throw new Error("Message must be a non-empty string");if(!window.confirm(`Please confirm to sign the message! Message: ${e}`))throw new Error("User rejects to sign the message");const{keypair:t}=await this.getProvider(),r=y.from(t.secretKey).toString("hex");return{...a.account.signMessage(e,r)}}async verifySignature(e,t,r){r=r||await this.getAddress();return a.account.verifySignature(r,e,t)}},(0,s.Z)(u.prototype,"signTransaction",[h.n],Object.getOwnPropertyDescriptor(u.prototype,"signTransaction"),u.prototype),(0,s.Z)(u.prototype,"signAllTransactions",[h.Y],Object.getOwnPropertyDescriptor(u.prototype,"signAllTransactions"),u.prototype),u)},13974:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var s,n=r(53229),a=r(44967),o=r(95418),i=r(68532),c=r(55721),d=r(35369),g=r(97429).Buffer;const l=(s=class extends c.Z{constructor(){super("Slope"),this.provider=void 0,this.provider=null}async getProvider(){const{Slope:e}=window||{};if(!e)throw new Error("Cannot connect to Slope");return this.provider||(this.provider=new e,await this.provider.connect()),this.provider}async getAddress(){const e=await this.getProvider(),{data:t}=await e.connect();if(!t.publicKey)throw new Error("Wallet is not connected");return t.publicKey}async signTransaction(e){const t=await this.getProvider(),r=await this.getAddress(),s=o.account.fromAddress(r);e.feePayer||(e.feePayer=s);const n=(0,i.encode)(e.serializeMessage()),{msg:a,data:c}=await t.signTransaction(n);if(!c.publicKey||!c.signature)throw new Error(a);const d=(0,i.decode)(c.signature);return e.addSignature(s,d),e}async signAllTransactions(e){var t;const r=await this.getProvider(),s=await this.getAddress(),n=o.account.fromAddress(s);e.forEach((e=>{e.feePayer||(e.feePayer=n)}));const a=e.map((e=>(0,i.encode)(e.serializeMessage()))),{msg:c,data:d}=await r.signAllTransactions(a);if(!d.publicKey||(null===(t=d.signatures)||void 0===t?void 0:t.length)!==e.length)throw new Error(c);return d.signatures.forEach(((t,r)=>{const s=(0,i.decode)(t);e[r].addSignature(n,s)})),e}async verifySignature(e,t,r){const s=r||await this.getAddress(),n=o.account.fromAddress(s),i=g.from(e,"hex"),c=(new TextEncoder).encode(t);return a.sign.detached.verify(c,i,n.toBuffer())}},(0,n.Z)(s.prototype,"signTransaction",[d.n],Object.getOwnPropertyDescriptor(s.prototype,"signTransaction"),s.prototype),(0,n.Z)(s.prototype,"signAllTransactions",[d.Y],Object.getOwnPropertyDescriptor(s.prototype,"signAllTransactions"),s.prototype),s)},60766:(e,t,r)=>{"use strict";r.d(t,{Z:()=>g});var s,n=r(53229),a=r(44967),o=r(95418),i=r(55721),c=r(35369),d=r(97429).Buffer;const g=(s=class extends i.Z{constructor(){super("SolflareExtension")}async getProvider(){const{solflare:e}=window;if(!e.isSolflare)throw new Error("Wallet is not connected");return e.isConnected?e:await new Promise((t=>(e.on("connect",(()=>t(e))),e.connect())))}async getAddress(){const e=(await this.getProvider()).publicKey.toString();if(!o.account.isAddress(e))throw new Error("There is no Solana account");return e}async signTransaction(e){const t=await this.getProvider(),r=await this.getAddress(),s=o.account.fromAddress(r);return e.feePayer||(e.feePayer=s),await t.signTransaction(e)}async signAllTransactions(e){const t=await this.getProvider(),r=await this.getAddress(),s=o.account.fromAddress(r);return e.forEach((e=>{e.feePayer||(e.feePayer=s)})),await t.signAllTransactions(e)}async signMessage(e){if(!e)throw new Error("Message must be a non-empty string");const t=await this.getProvider(),r=await this.getAddress(),s=(new TextEncoder).encode(e),{signature:n}=await t.signMessage(s,"utf8");return{address:r,signature:d.from(n).toString("hex"),message:e}}async verifySignature(e,t,r){r=r||await this.getAddress();const s=o.account.fromAddress(r),n=d.from(e,"hex"),i=(new TextEncoder).encode(t);return a.sign.detached.verify(i,n,s.toBuffer())}},(0,n.Z)(s.prototype,"signTransaction",[c.n],Object.getOwnPropertyDescriptor(s.prototype,"signTransaction"),s.prototype),(0,n.Z)(s.prototype,"signAllTransactions",[c.Y],Object.getOwnPropertyDescriptor(s.prototype,"signAllTransactions"),s.prototype),s)},31669:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var s,n=r(53229),a=r(44967),o=r(95418),i=r(12053),c=r(55721),d=r(55852),g=r(35369),l=r(97429).Buffer;const u=(s=class extends c.Z{constructor(){super("SolflareWeb"),this.provider=void 0;const{sol:{node:e}}=d.Z;this.provider=new i.Z("https://solflare.com/provider",e)}async getProvider(){return this.provider.connected||await this.provider.connect(),this.provider}async getAddress(){const e=await this.getProvider();if(!e.publicKey)throw new Error("Cannot connect to Solflare");return e.publicKey.toBase58()}async signTransaction(e){const t=await this.getProvider(),r=await this.getAddress(),s=o.account.fromAddress(r);return e.feePayer||(e.feePayer=s),await t.signTransaction(e)}async signAllTransactions(e){const t=await this.getProvider(),r=await this.getAddress(),s=o.account.fromAddress(r);return e.forEach((e=>{e.feePayer||(e.feePayer=s)})),await t.signAllTransactions(e)}async signMessage(e){if(!e)throw new Error("Message must be a non-empty string");const t=await this.getProvider(),r=await this.getAddress(),s=(new TextEncoder).encode(e),{signature:n}=await t.sign(s,"utf8");return{address:r,signature:l.from(n).toString("hex"),message:e}}async verifySignature(e,t,r){r=r||await this.getAddress();const s=o.account.fromAddress(r),n=l.from(e,"hex"),i=(new TextEncoder).encode(t);return a.sign.detached.verify(i,n,s.toBuffer())}},(0,n.Z)(s.prototype,"signTransaction",[g.n],Object.getOwnPropertyDescriptor(s.prototype,"signTransaction"),s.prototype),(0,n.Z)(s.prototype,"signAllTransactions",[g.Y],Object.getOwnPropertyDescriptor(s.prototype,"signAllTransactions"),s.prototype),s)},2491:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var s,n=r(53229),a=r(44967),o=r(95418),i=r(12053),c=r(55721),d=r(55852),g=r(35369),l=r(97429).Buffer;const u=(s=class extends c.Z{constructor(){super("SolletWeb"),this.provider=void 0;const{sol:{node:e}}=d.Z;this.provider=new i.Z("https://www.sollet.io",e)}async getProvider(){return this.provider.connected||await this.provider.connect(),this.provider}async getAddress(){const e=await this.getProvider();if(!e.publicKey)throw new Error("Cannot connect to Sollet Web");return e.publicKey.toBase58()}async signTransaction(e){const t=await this.getProvider(),r=await this.getAddress(),s=o.account.fromAddress(r);return e.feePayer||(e.feePayer=s),await t.signTransaction(e)}async signAllTransactions(e){const t=await this.getProvider(),r=await this.getAddress(),s=o.account.fromAddress(r);return e.forEach((e=>{e.feePayer||(e.feePayer=s)})),await t.signAllTransactions(e)}async signMessage(e){if(!e)throw new Error("Message must be a non-empty string");const t=await this.getProvider(),r=await this.getAddress(),s=(new TextEncoder).encode(e),{signature:n}=await t.sign(s,"utf8");return{address:r,signature:l.from(n).toString("hex"),message:e}}async verifySignature(e,t,r){r=r||await this.getAddress();const s=o.account.fromAddress(r),n=l.from(e,"hex"),i=(new TextEncoder).encode(t);return a.sign.detached.verify(i,n,s.toBuffer())}},(0,n.Z)(s.prototype,"signTransaction",[g.n],Object.getOwnPropertyDescriptor(s.prototype,"signTransaction"),s.prototype),(0,n.Z)(s.prototype,"signAllTransactions",[g.Y],Object.getOwnPropertyDescriptor(s.prototype,"signAllTransactions"),s.prototype),s)},67751:(e,t,r)=>{"use strict";r.d(t,{U:()=>n});var s=r(15822);class n{static set(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s.qf;this.mapCache.set(e,t),setTimeout((()=>{this.mapCache.delete(e)}),r.ttl)}static get(e){return this.mapCache.get(e)}}n.mapCache=new Map},15822:(e,t,r)=>{"use strict";r.d(t,{Dt:()=>n,qf:()=>s});const s={ttl:3e4},n={limit:{calls:10,time:1e3},cache:s}},85964:(e,t,r)=>{"use strict";r.d(t,{g:()=>s});class s{constructor(e){this.key="",this.resolveQueue=[],this.rejectQueue=[],this.key=e}add(e,t){this.resolveQueue.push(e),this.rejectQueue.push(t)}resolves(e){for(;this.resolveQueue.length>0;){this.resolveQueue.shift()(e)}}rejects(e){for(;this.rejectQueue.length>0;){this.rejectQueue.shift()(e)}}}},3007:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var s=r(15454),n=r.n(s),a=r(95418),o=r(83868);class i{constructor(e){if(this.dbName=void 0,this.driver=void 0,this.ipfs=void 0,this.createInstance=e=>n().createInstance({driver:this.driver,name:this.dbName,storeName:e}),this.dropInstance=async e=>{const t=this.createInstance(e);return await t.clear(),await n().dropInstance({name:this.dbName,storeName:e})},this.all=async()=>{let e={};const t=(await this.createInstance("sentre").getItem("appIds")||[]).flat().concat(["sentre"]);for(const r of t){e[r]={};const t=this.createInstance(r);await t.iterate(((t,s)=>{e[r][s]=t}))}return e},this.fetch=async e=>await this.ipfs.get(e),this.backup=async()=>{const e=await this.all();return await this.ipfs.set(e)},this.restore=async e=>{const t=await this.fetch(e);for(const r in t){const e=await this.createInstance(r);for(const s in t[r]){const n=t[r][s];await e.setItem(s,n)}}return t},!a.account.isAddress(e))throw new Error("Invalid address");this.dbName=e,this.driver=[n().WEBSQL,n().LOCALSTORAGE],this.ipfs=new o.Z}}const c=i},83868:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var s=r(83643),n=r(12677),a=r(97429).Buffer;class o{constructor(){this._ipfs=async()=>{try{return window.ipfs||(window.ipfs=await(0,s.Ue)()),window.ipfs}catch(e){return await(0,n.sA)(500),await this._ipfs()}},this.get=async e=>{if(!o.isCID(e))throw new Error("Invalid CID");const t=await this._ipfs(),r=await t.cat(e);let s="";for await(const n of r)s+=a.from(n).toString();return JSON.parse(s)},this.set=async e=>{if(!e)throw new Error("Empty data");const t=JSON.stringify(e),r=await this._ipfs(),{cid:s}=await r.add(t);return s.toString()}}}o.isCID=e=>{try{return!!e&&s.bf.multihash(e)}catch(t){return!1}};const i=o},43094:()=>{},69159:()=>{},35883:()=>{},5696:()=>{},64009:()=>{},42611:()=>{},88795:()=>{},89408:()=>{},47956:()=>{},21724:()=>{},62678:()=>{},25819:()=>{},52361:()=>{},94616:()=>{}}]);
//# sourceMappingURL=src_os_store_devTools_ts-src_os_store_mints_reducer_ts-src_os_view_wallet_lib_cloverWallet_ts-abf022.41dca9ad.chunk.js.map