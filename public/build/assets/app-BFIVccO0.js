function cn(e,t){return function(){return e.apply(t,arguments)}}const{toString:hr}=Object.prototype,{getPrototypeOf:st}=Object,{iterator:Te,toStringTag:un}=Symbol,_e=(e=>t=>{const n=hr.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),P=e=>(e=e.toLowerCase(),t=>_e(t)===e),Ae=e=>t=>typeof t===e,{isArray:ee}=Array,Z=Ae("undefined");function ae(e){return e!==null&&!Z(e)&&e.constructor!==null&&!Z(e.constructor)&&O(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const ln=P("ArrayBuffer");function pr(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&ln(e.buffer),t}const mr=Ae("string"),O=Ae("function"),dn=Ae("number"),ce=e=>e!==null&&typeof e=="object",gr=e=>e===!0||e===!1,ge=e=>{if(_e(e)!=="object")return!1;const t=st(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(un in e)&&!(Te in e)},br=e=>{if(!ce(e)||ae(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},wr=P("Date"),yr=P("File"),Er=e=>!!(e&&typeof e.uri<"u"),Sr=e=>e&&typeof e.getParts<"u",Tr=P("Blob"),_r=P("FileList"),Ar=e=>ce(e)&&O(e.pipe);function Ir(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const It=Ir(),Rt=typeof It.FormData<"u"?It.FormData:void 0,Rr=e=>{let t;return e&&(Rt&&e instanceof Rt||O(e.append)&&((t=_e(e))==="formdata"||t==="object"&&O(e.toString)&&e.toString()==="[object FormData]"))},Or=P("URLSearchParams"),[Cr,vr,Dr,Nr]=["ReadableStream","Request","Response","Headers"].map(P),kr=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ue(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),ee(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{if(ae(e))return;const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let a;for(r=0;r<i;r++)a=o[r],t.call(null,e[a],a,e)}}function fn(e,t){if(ae(e))return null;t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const W=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,hn=e=>!Z(e)&&e!==W;function Ke(){const{caseless:e,skipUndefined:t}=hn(this)&&this||{},n={},r=(s,o)=>{if(o==="__proto__"||o==="constructor"||o==="prototype")return;const i=e&&fn(n,o)||o;ge(n[i])&&ge(s)?n[i]=Ke(n[i],s):ge(s)?n[i]=Ke({},s):ee(s)?n[i]=s.slice():(!t||!Z(s))&&(n[i]=s)};for(let s=0,o=arguments.length;s<o;s++)arguments[s]&&ue(arguments[s],r);return n}const Pr=(e,t,n,{allOwnKeys:r}={})=>(ue(t,(s,o)=>{n&&O(s)?Object.defineProperty(e,o,{value:cn(s,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(e,o,{value:s,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:r}),e),Br=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),xr=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),Object.defineProperty(e.prototype,"constructor",{value:e,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Fr=(e,t,n,r)=>{let s,o,i;const a={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!a[i]&&(t[i]=e[i],a[i]=!0);e=n!==!1&&st(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Lr=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Mr=e=>{if(!e)return null;if(ee(e))return e;let t=e.length;if(!dn(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},$r=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&st(Uint8Array)),jr=(e,t)=>{const r=(e&&e[Te]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},Ur=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Hr=P("HTMLFormElement"),qr=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Ot=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Vr=P("RegExp"),pn=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};ue(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},Wr=e=>{pn(e,(t,n)=>{if(O(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(O(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},zr=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return ee(e)?r(e):r(String(e).split(t)),n},Kr=()=>{},Jr=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function Gr(e){return!!(e&&O(e.append)&&e[un]==="FormData"&&e[Te])}const Xr=e=>{const t=new Array(10),n=(r,s)=>{if(ce(r)){if(t.indexOf(r)>=0)return;if(ae(r))return r;if(!("toJSON"in r)){t[s]=r;const o=ee(r)?[]:{};return ue(r,(i,a)=>{const d=n(i,s+1);!Z(d)&&(o[a]=d)}),t[s]=void 0,o}}return r};return n(e,0)},Yr=P("AsyncFunction"),Qr=e=>e&&(ce(e)||O(e))&&O(e.then)&&O(e.catch),mn=((e,t)=>e?setImmediate:t?((n,r)=>(W.addEventListener("message",({source:s,data:o})=>{s===W&&o===n&&r.length&&r.shift()()},!1),s=>{r.push(s),W.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",O(W.postMessage)),Zr=typeof queueMicrotask<"u"?queueMicrotask.bind(W):typeof process<"u"&&process.nextTick||mn,es=e=>e!=null&&O(e[Te]),c={isArray:ee,isArrayBuffer:ln,isBuffer:ae,isFormData:Rr,isArrayBufferView:pr,isString:mr,isNumber:dn,isBoolean:gr,isObject:ce,isPlainObject:ge,isEmptyObject:br,isReadableStream:Cr,isRequest:vr,isResponse:Dr,isHeaders:Nr,isUndefined:Z,isDate:wr,isFile:yr,isReactNativeBlob:Er,isReactNative:Sr,isBlob:Tr,isRegExp:Vr,isFunction:O,isStream:Ar,isURLSearchParams:Or,isTypedArray:$r,isFileList:_r,forEach:ue,merge:Ke,extend:Pr,trim:kr,stripBOM:Br,inherits:xr,toFlatObject:Fr,kindOf:_e,kindOfTest:P,endsWith:Lr,toArray:Mr,forEachEntry:jr,matchAll:Ur,isHTMLForm:Hr,hasOwnProperty:Ot,hasOwnProp:Ot,reduceDescriptors:pn,freezeMethods:Wr,toObjectSet:zr,toCamelCase:qr,noop:Kr,toFiniteNumber:Jr,findKey:fn,global:W,isContextDefined:hn,isSpecCompliantForm:Gr,toJSONObject:Xr,isAsyncFn:Yr,isThenable:Qr,setImmediate:mn,asap:Zr,isIterable:es};let g=class gn extends Error{static from(t,n,r,s,o,i){const a=new gn(t.message,n||t.code,r,s,o);return a.cause=t,a.name=t.name,t.status!=null&&a.status==null&&(a.status=t.status),i&&Object.assign(a,i),a}constructor(t,n,r,s,o){super(t),Object.defineProperty(this,"message",{value:t,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),r&&(this.config=r),s&&(this.request=s),o&&(this.response=o,this.status=o.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:c.toJSONObject(this.config),code:this.code,status:this.status}}};g.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";g.ERR_BAD_OPTION="ERR_BAD_OPTION";g.ECONNABORTED="ECONNABORTED";g.ETIMEDOUT="ETIMEDOUT";g.ERR_NETWORK="ERR_NETWORK";g.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";g.ERR_DEPRECATED="ERR_DEPRECATED";g.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";g.ERR_BAD_REQUEST="ERR_BAD_REQUEST";g.ERR_CANCELED="ERR_CANCELED";g.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";g.ERR_INVALID_URL="ERR_INVALID_URL";const ts=null;function Je(e){return c.isPlainObject(e)||c.isArray(e)}function bn(e){return c.endsWith(e,"[]")?e.slice(0,-2):e}function Pe(e,t,n){return e?e.concat(t).map(function(s,o){return s=bn(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function ns(e){return c.isArray(e)&&!e.some(Je)}const rs=c.toFlatObject(c,{},null,function(t){return/^is[A-Z]/.test(t)});function Ie(e,t,n){if(!c.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=c.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,h){return!c.isUndefined(h[m])});const r=n.metaTokens,s=n.visitor||u,o=n.dots,i=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&c.isSpecCompliantForm(t);if(!c.isFunction(s))throw new TypeError("visitor must be a function");function l(f){if(f===null)return"";if(c.isDate(f))return f.toISOString();if(c.isBoolean(f))return f.toString();if(!d&&c.isBlob(f))throw new g("Blob is not supported. Use a Buffer instead.");return c.isArrayBuffer(f)||c.isTypedArray(f)?d&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function u(f,m,h){let S=f;if(c.isReactNative(t)&&c.isReactNativeBlob(f))return t.append(Pe(h,m,o),l(f)),!1;if(f&&!h&&typeof f=="object"){if(c.endsWith(m,"{}"))m=r?m:m.slice(0,-2),f=JSON.stringify(f);else if(c.isArray(f)&&ns(f)||(c.isFileList(f)||c.endsWith(m,"[]"))&&(S=c.toArray(f)))return m=bn(m),S.forEach(function(T,I){!(c.isUndefined(T)||T===null)&&t.append(i===!0?Pe([m],I,o):i===null?m:m+"[]",l(T))}),!1}return Je(f)?!0:(t.append(Pe(h,m,o),l(f)),!1)}const p=[],b=Object.assign(rs,{defaultVisitor:u,convertValue:l,isVisitable:Je});function y(f,m){if(!c.isUndefined(f)){if(p.indexOf(f)!==-1)throw Error("Circular reference detected in "+m.join("."));p.push(f),c.forEach(f,function(S,v){(!(c.isUndefined(S)||S===null)&&s.call(t,S,c.isString(v)?v.trim():v,m,b))===!0&&y(S,m?m.concat(v):[v])}),p.pop()}}if(!c.isObject(e))throw new TypeError("data must be an object");return y(e),t}function Ct(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function ot(e,t){this._pairs=[],e&&Ie(e,this,t)}const wn=ot.prototype;wn.append=function(t,n){this._pairs.push([t,n])};wn.toString=function(t){const n=t?function(r){return t.call(this,r,Ct)}:Ct;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function ss(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function yn(e,t,n){if(!t)return e;const r=n&&n.encode||ss,s=c.isFunction(n)?{serialize:n}:n,o=s&&s.serialize;let i;if(o?i=o(t,s):i=c.isURLSearchParams(t)?t.toString():new ot(t,s).toString(r),i){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class vt{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){c.forEach(this.handlers,function(r){r!==null&&t(r)})}}const it={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},os=typeof URLSearchParams<"u"?URLSearchParams:ot,is=typeof FormData<"u"?FormData:null,as=typeof Blob<"u"?Blob:null,cs={isBrowser:!0,classes:{URLSearchParams:os,FormData:is,Blob:as},protocols:["http","https","file","blob","url","data"]},at=typeof window<"u"&&typeof document<"u",Ge=typeof navigator=="object"&&navigator||void 0,us=at&&(!Ge||["ReactNative","NativeScript","NS"].indexOf(Ge.product)<0),ls=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",ds=at&&window.location.href||"http://localhost",fs=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:at,hasStandardBrowserEnv:us,hasStandardBrowserWebWorkerEnv:ls,navigator:Ge,origin:ds},Symbol.toStringTag,{value:"Module"})),_={...fs,...cs};function hs(e,t){return Ie(e,new _.classes.URLSearchParams,{visitor:function(n,r,s,o){return _.isNode&&c.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)},...t})}function ps(e){return c.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function ms(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function En(e){function t(n,r,s,o){let i=n[o++];if(i==="__proto__")return!0;const a=Number.isFinite(+i),d=o>=n.length;return i=!i&&c.isArray(s)?s.length:i,d?(c.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!a):((!s[i]||!c.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&c.isArray(s[i])&&(s[i]=ms(s[i])),!a)}if(c.isFormData(e)&&c.isFunction(e.entries)){const n={};return c.forEachEntry(e,(r,s)=>{t(ps(r),s,n,0)}),n}return null}function gs(e,t,n){if(c.isString(e))try{return(t||JSON.parse)(e),c.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const le={transitional:it,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=c.isObject(t);if(o&&c.isHTMLForm(t)&&(t=new FormData(t)),c.isFormData(t))return s?JSON.stringify(En(t)):t;if(c.isArrayBuffer(t)||c.isBuffer(t)||c.isStream(t)||c.isFile(t)||c.isBlob(t)||c.isReadableStream(t))return t;if(c.isArrayBufferView(t))return t.buffer;if(c.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return hs(t,this.formSerializer).toString();if((a=c.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return Ie(a?{"files[]":t}:t,d&&new d,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),gs(t)):t}],transformResponse:[function(t){const n=this.transitional||le.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(c.isResponse(t)||c.isReadableStream(t))return t;if(t&&c.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t,this.parseReviver)}catch(a){if(i)throw a.name==="SyntaxError"?g.from(a,g.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:_.classes.FormData,Blob:_.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};c.forEach(["delete","get","head","post","put","patch"],e=>{le.headers[e]={}});const bs=c.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ws=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&bs[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Dt=Symbol("internals");function re(e){return e&&String(e).trim().toLowerCase()}function be(e){return e===!1||e==null?e:c.isArray(e)?e.map(be):String(e).replace(/[\r\n]+$/,"")}function ys(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Es=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Be(e,t,n,r,s){if(c.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!c.isString(t)){if(c.isString(r))return t.indexOf(r)!==-1;if(c.isRegExp(r))return r.test(t)}}function Ss(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Ts(e,t){const n=c.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}let C=class{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(a,d,l){const u=re(d);if(!u)throw new Error("header name must be a non-empty string");const p=c.findKey(s,u);(!p||s[p]===void 0||l===!0||l===void 0&&s[p]!==!1)&&(s[p||d]=be(a))}const i=(a,d)=>c.forEach(a,(l,u)=>o(l,u,d));if(c.isPlainObject(t)||t instanceof this.constructor)i(t,n);else if(c.isString(t)&&(t=t.trim())&&!Es(t))i(ws(t),n);else if(c.isObject(t)&&c.isIterable(t)){let a={},d,l;for(const u of t){if(!c.isArray(u))throw TypeError("Object iterator must return a key-value pair");a[l=u[0]]=(d=a[l])?c.isArray(d)?[...d,u[1]]:[d,u[1]]:u[1]}i(a,n)}else t!=null&&o(n,t,r);return this}get(t,n){if(t=re(t),t){const r=c.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return ys(s);if(c.isFunction(n))return n.call(this,s,r);if(c.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=re(t),t){const r=c.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Be(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=re(i),i){const a=c.findKey(r,i);a&&(!n||Be(r,r[a],a,n))&&(delete r[a],s=!0)}}return c.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||Be(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return c.forEach(this,(s,o)=>{const i=c.findKey(r,o);if(i){n[i]=be(s),delete n[o];return}const a=t?Ss(o):String(o).trim();a!==o&&delete n[o],n[a]=be(s),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return c.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&c.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Dt]=this[Dt]={accessors:{}}).accessors,s=this.prototype;function o(i){const a=re(i);r[a]||(Ts(s,i),r[a]=!0)}return c.isArray(t)?t.forEach(o):o(t),this}};C.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);c.reduceDescriptors(C.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});c.freezeMethods(C);function xe(e,t){const n=this||le,r=t||n,s=C.from(r.headers);let o=r.data;return c.forEach(e,function(a){o=a.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function Sn(e){return!!(e&&e.__CANCEL__)}let de=class extends g{constructor(t,n,r){super(t??"canceled",g.ERR_CANCELED,n,r),this.name="CanceledError",this.__CANCEL__=!0}};function Tn(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new g("Request failed with status code "+n.status,[g.ERR_BAD_REQUEST,g.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function _s(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function As(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(d){const l=Date.now(),u=r[o];i||(i=l),n[s]=d,r[s]=l;let p=o,b=0;for(;p!==s;)b+=n[p++],p=p%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),l-i<t)return;const y=u&&l-u;return y?Math.round(b*1e3/y):void 0}}function Is(e,t){let n=0,r=1e3/t,s,o;const i=(l,u=Date.now())=>{n=u,s=null,o&&(clearTimeout(o),o=null),e(...l)};return[(...l)=>{const u=Date.now(),p=u-n;p>=r?i(l,u):(s=l,o||(o=setTimeout(()=>{o=null,i(s)},r-p)))},()=>s&&i(s)]}const ye=(e,t,n=3)=>{let r=0;const s=As(50,250);return Is(o=>{const i=o.loaded,a=o.lengthComputable?o.total:void 0,d=i-r,l=s(d),u=i<=a;r=i;const p={loaded:i,total:a,progress:a?i/a:void 0,bytes:d,rate:l||void 0,estimated:l&&a&&u?(a-i)/l:void 0,event:o,lengthComputable:a!=null,[t?"download":"upload"]:!0};e(p)},n)},Nt=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},kt=e=>(...t)=>c.asap(()=>e(...t)),Rs=_.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,_.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(_.origin),_.navigator&&/(msie|trident)/i.test(_.navigator.userAgent)):()=>!0,Os=_.hasStandardBrowserEnv?{write(e,t,n,r,s,o,i){if(typeof document>"u")return;const a=[`${e}=${encodeURIComponent(t)}`];c.isNumber(n)&&a.push(`expires=${new Date(n).toUTCString()}`),c.isString(r)&&a.push(`path=${r}`),c.isString(s)&&a.push(`domain=${s}`),o===!0&&a.push("secure"),c.isString(i)&&a.push(`SameSite=${i}`),document.cookie=a.join("; ")},read(e){if(typeof document>"u")return null;const t=document.cookie.match(new RegExp("(?:^|; )"+e+"=([^;]*)"));return t?decodeURIComponent(t[1]):null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function Cs(e){return typeof e!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function vs(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function _n(e,t,n){let r=!Cs(t);return e&&(r||n==!1)?vs(e,t):t}const Pt=e=>e instanceof C?{...e}:e;function J(e,t){t=t||{};const n={};function r(l,u,p,b){return c.isPlainObject(l)&&c.isPlainObject(u)?c.merge.call({caseless:b},l,u):c.isPlainObject(u)?c.merge({},u):c.isArray(u)?u.slice():u}function s(l,u,p,b){if(c.isUndefined(u)){if(!c.isUndefined(l))return r(void 0,l,p,b)}else return r(l,u,p,b)}function o(l,u){if(!c.isUndefined(u))return r(void 0,u)}function i(l,u){if(c.isUndefined(u)){if(!c.isUndefined(l))return r(void 0,l)}else return r(void 0,u)}function a(l,u,p){if(p in t)return r(l,u);if(p in e)return r(void 0,l)}const d={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:a,headers:(l,u,p)=>s(Pt(l),Pt(u),p,!0)};return c.forEach(Object.keys({...e,...t}),function(u){if(u==="__proto__"||u==="constructor"||u==="prototype")return;const p=c.hasOwnProp(d,u)?d[u]:s,b=p(e[u],t[u],u);c.isUndefined(b)&&p!==a||(n[u]=b)}),n}const An=e=>{const t=J({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:o,headers:i,auth:a}=t;if(t.headers=i=C.from(i),t.url=yn(_n(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),a&&i.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):""))),c.isFormData(n)){if(_.hasStandardBrowserEnv||_.hasStandardBrowserWebWorkerEnv)i.setContentType(void 0);else if(c.isFunction(n.getHeaders)){const d=n.getHeaders(),l=["content-type","content-length"];Object.entries(d).forEach(([u,p])=>{l.includes(u.toLowerCase())&&i.set(u,p)})}}if(_.hasStandardBrowserEnv&&(r&&c.isFunction(r)&&(r=r(t)),r||r!==!1&&Rs(t.url))){const d=s&&o&&Os.read(o);d&&i.set(s,d)}return t},Ds=typeof XMLHttpRequest<"u",Ns=Ds&&function(e){return new Promise(function(n,r){const s=An(e);let o=s.data;const i=C.from(s.headers).normalize();let{responseType:a,onUploadProgress:d,onDownloadProgress:l}=s,u,p,b,y,f;function m(){y&&y(),f&&f(),s.cancelToken&&s.cancelToken.unsubscribe(u),s.signal&&s.signal.removeEventListener("abort",u)}let h=new XMLHttpRequest;h.open(s.method.toUpperCase(),s.url,!0),h.timeout=s.timeout;function S(){if(!h)return;const T=C.from("getAllResponseHeaders"in h&&h.getAllResponseHeaders()),k={data:!a||a==="text"||a==="json"?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:T,config:e,request:h};Tn(function(D){n(D),m()},function(D){r(D),m()},k),h=null}"onloadend"in h?h.onloadend=S:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.indexOf("file:")===0)||setTimeout(S)},h.onabort=function(){h&&(r(new g("Request aborted",g.ECONNABORTED,e,h)),h=null)},h.onerror=function(I){const k=I&&I.message?I.message:"Network Error",H=new g(k,g.ERR_NETWORK,e,h);H.event=I||null,r(H),h=null},h.ontimeout=function(){let I=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const k=s.transitional||it;s.timeoutErrorMessage&&(I=s.timeoutErrorMessage),r(new g(I,k.clarifyTimeoutError?g.ETIMEDOUT:g.ECONNABORTED,e,h)),h=null},o===void 0&&i.setContentType(null),"setRequestHeader"in h&&c.forEach(i.toJSON(),function(I,k){h.setRequestHeader(k,I)}),c.isUndefined(s.withCredentials)||(h.withCredentials=!!s.withCredentials),a&&a!=="json"&&(h.responseType=s.responseType),l&&([b,f]=ye(l,!0),h.addEventListener("progress",b)),d&&h.upload&&([p,y]=ye(d),h.upload.addEventListener("progress",p),h.upload.addEventListener("loadend",y)),(s.cancelToken||s.signal)&&(u=T=>{h&&(r(!T||T.type?new de(null,e,h):T),h.abort(),h=null)},s.cancelToken&&s.cancelToken.subscribe(u),s.signal&&(s.signal.aborted?u():s.signal.addEventListener("abort",u)));const v=_s(s.url);if(v&&_.protocols.indexOf(v)===-1){r(new g("Unsupported protocol "+v+":",g.ERR_BAD_REQUEST,e));return}h.send(o||null)})},ks=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,s;const o=function(l){if(!s){s=!0,a();const u=l instanceof Error?l:this.reason;r.abort(u instanceof g?u:new de(u instanceof Error?u.message:u))}};let i=t&&setTimeout(()=>{i=null,o(new g(`timeout of ${t}ms exceeded`,g.ETIMEDOUT))},t);const a=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach(l=>{l.unsubscribe?l.unsubscribe(o):l.removeEventListener("abort",o)}),e=null)};e.forEach(l=>l.addEventListener("abort",o));const{signal:d}=r;return d.unsubscribe=()=>c.asap(a),d}},Ps=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,s;for(;r<n;)s=r+t,yield e.slice(r,s),r=s},Bs=async function*(e,t){for await(const n of xs(e))yield*Ps(n,t)},xs=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},Bt=(e,t,n,r)=>{const s=Bs(e,t);let o=0,i,a=d=>{i||(i=!0,r&&r(d))};return new ReadableStream({async pull(d){try{const{done:l,value:u}=await s.next();if(l){a(),d.close();return}let p=u.byteLength;if(n){let b=o+=p;n(b)}d.enqueue(new Uint8Array(u))}catch(l){throw a(l),l}},cancel(d){return a(d),s.return()}},{highWaterMark:2})},xt=64*1024,{isFunction:me}=c,Fs=(({Request:e,Response:t})=>({Request:e,Response:t}))(c.global),{ReadableStream:Ft,TextEncoder:Lt}=c.global,Mt=(e,...t)=>{try{return!!e(...t)}catch{return!1}},Ls=e=>{e=c.merge.call({skipUndefined:!0},Fs,e);const{fetch:t,Request:n,Response:r}=e,s=t?me(t):typeof fetch=="function",o=me(n),i=me(r);if(!s)return!1;const a=s&&me(Ft),d=s&&(typeof Lt=="function"?(f=>m=>f.encode(m))(new Lt):async f=>new Uint8Array(await new n(f).arrayBuffer())),l=o&&a&&Mt(()=>{let f=!1;const m=new Ft,h=new n(_.origin,{body:m,method:"POST",get duplex(){return f=!0,"half"}}).headers.has("Content-Type");return m.cancel(),f&&!h}),u=i&&a&&Mt(()=>c.isReadableStream(new r("").body)),p={stream:u&&(f=>f.body)};s&&["text","arrayBuffer","blob","formData","stream"].forEach(f=>{!p[f]&&(p[f]=(m,h)=>{let S=m&&m[f];if(S)return S.call(m);throw new g(`Response type '${f}' is not supported`,g.ERR_NOT_SUPPORT,h)})});const b=async f=>{if(f==null)return 0;if(c.isBlob(f))return f.size;if(c.isSpecCompliantForm(f))return(await new n(_.origin,{method:"POST",body:f}).arrayBuffer()).byteLength;if(c.isArrayBufferView(f)||c.isArrayBuffer(f))return f.byteLength;if(c.isURLSearchParams(f)&&(f=f+""),c.isString(f))return(await d(f)).byteLength},y=async(f,m)=>{const h=c.toFiniteNumber(f.getContentLength());return h??b(m)};return async f=>{let{url:m,method:h,data:S,signal:v,cancelToken:T,timeout:I,onDownloadProgress:k,onUploadProgress:H,responseType:D,headers:Ne,withCredentials:fe="same-origin",fetchOptions:yt}=An(f),Et=t||fetch;D=D?(D+"").toLowerCase():"text";let he=ks([v,T&&T.toAbortSignal()],I),ne=null;const q=he&&he.unsubscribe&&(()=>{he.unsubscribe()});let St;try{if(H&&l&&h!=="get"&&h!=="head"&&(St=await y(Ne,S))!==0){let M=new n(m,{method:"POST",body:S,duplex:"half"}),Q;if(c.isFormData(S)&&(Q=M.headers.get("content-type"))&&Ne.setContentType(Q),M.body){const[ke,pe]=Nt(St,ye(kt(H)));S=Bt(M.body,xt,ke,pe)}}c.isString(fe)||(fe=fe?"include":"omit");const R=o&&"credentials"in n.prototype,Tt={...yt,signal:he,method:h.toUpperCase(),headers:Ne.normalize().toJSON(),body:S,duplex:"half",credentials:R?fe:void 0};ne=o&&new n(m,Tt);let L=await(o?Et(ne,yt):Et(m,Tt));const _t=u&&(D==="stream"||D==="response");if(u&&(k||_t&&q)){const M={};["status","statusText","headers"].forEach(At=>{M[At]=L[At]});const Q=c.toFiniteNumber(L.headers.get("content-length")),[ke,pe]=k&&Nt(Q,ye(kt(k),!0))||[];L=new r(Bt(L.body,xt,ke,()=>{pe&&pe(),q&&q()}),M)}D=D||"text";let fr=await p[c.findKey(p,D)||"text"](L,f);return!_t&&q&&q(),await new Promise((M,Q)=>{Tn(M,Q,{data:fr,headers:C.from(L.headers),status:L.status,statusText:L.statusText,config:f,request:ne})})}catch(R){throw q&&q(),R&&R.name==="TypeError"&&/Load failed|fetch/i.test(R.message)?Object.assign(new g("Network Error",g.ERR_NETWORK,f,ne,R&&R.response),{cause:R.cause||R}):g.from(R,R&&R.code,f,ne,R&&R.response)}}},Ms=new Map,In=e=>{let t=e&&e.env||{};const{fetch:n,Request:r,Response:s}=t,o=[r,s,n];let i=o.length,a=i,d,l,u=Ms;for(;a--;)d=o[a],l=u.get(d),l===void 0&&u.set(d,l=a?new Map:Ls(t)),u=l;return l};In();const ct={http:ts,xhr:Ns,fetch:{get:In}};c.forEach(ct,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const $t=e=>`- ${e}`,$s=e=>c.isFunction(e)||e===null||e===!1;function js(e,t){e=c.isArray(e)?e:[e];const{length:n}=e;let r,s;const o={};for(let i=0;i<n;i++){r=e[i];let a;if(s=r,!$s(r)&&(s=ct[(a=String(r)).toLowerCase()],s===void 0))throw new g(`Unknown adapter '${a}'`);if(s&&(c.isFunction(s)||(s=s.get(t))))break;o[a||"#"+i]=s}if(!s){const i=Object.entries(o).map(([d,l])=>`adapter ${d} `+(l===!1?"is not supported by the environment":"is not available in the build"));let a=n?i.length>1?`since :
`+i.map($t).join(`
`):" "+$t(i[0]):"as no adapter specified";throw new g("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return s}const Rn={getAdapter:js,adapters:ct};function Fe(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new de(null,e)}function jt(e){return Fe(e),e.headers=C.from(e.headers),e.data=xe.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Rn.getAdapter(e.adapter||le.adapter,e)(e).then(function(r){return Fe(e),r.data=xe.call(e,e.transformResponse,r),r.headers=C.from(r.headers),r},function(r){return Sn(r)||(Fe(e),r&&r.response&&(r.response.data=xe.call(e,e.transformResponse,r.response),r.response.headers=C.from(r.response.headers))),Promise.reject(r)})}const On="1.14.0",Re={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Re[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Ut={};Re.transitional=function(t,n,r){function s(o,i){return"[Axios v"+On+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,a)=>{if(t===!1)throw new g(s(i," has been removed"+(n?" in "+n:"")),g.ERR_DEPRECATED);return n&&!Ut[i]&&(Ut[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,a):!0}};Re.spelling=function(t){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function Us(e,t,n){if(typeof e!="object")throw new g("options must be an object",g.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const a=e[o],d=a===void 0||i(a,o,e);if(d!==!0)throw new g("option "+o+" must be "+d,g.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new g("Unknown option "+o,g.ERR_BAD_OPTION)}}const we={assertOptions:Us,validators:Re},N=we.validators;let K=class{constructor(t){this.defaults=t||{},this.interceptors={request:new vt,response:new vt}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const o=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=J(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&we.assertOptions(r,{silentJSONParsing:N.transitional(N.boolean),forcedJSONParsing:N.transitional(N.boolean),clarifyTimeoutError:N.transitional(N.boolean),legacyInterceptorReqResOrdering:N.transitional(N.boolean)},!1),s!=null&&(c.isFunction(s)?n.paramsSerializer={serialize:s}:we.assertOptions(s,{encode:N.function,serialize:N.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),we.assertOptions(n,{baseUrl:N.spelling("baseURL"),withXsrfToken:N.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&c.merge(o.common,o[n.method]);o&&c.forEach(["delete","get","head","post","put","patch","common"],f=>{delete o[f]}),n.headers=C.concat(i,o);const a=[];let d=!0;this.interceptors.request.forEach(function(m){if(typeof m.runWhen=="function"&&m.runWhen(n)===!1)return;d=d&&m.synchronous;const h=n.transitional||it;h&&h.legacyInterceptorReqResOrdering?a.unshift(m.fulfilled,m.rejected):a.push(m.fulfilled,m.rejected)});const l=[];this.interceptors.response.forEach(function(m){l.push(m.fulfilled,m.rejected)});let u,p=0,b;if(!d){const f=[jt.bind(this),void 0];for(f.unshift(...a),f.push(...l),b=f.length,u=Promise.resolve(n);p<b;)u=u.then(f[p++],f[p++]);return u}b=a.length;let y=n;for(;p<b;){const f=a[p++],m=a[p++];try{y=f(y)}catch(h){m.call(this,h);break}}try{u=jt.call(this,y)}catch(f){return Promise.reject(f)}for(p=0,b=l.length;p<b;)u=u.then(l[p++],l[p++]);return u}getUri(t){t=J(this.defaults,t);const n=_n(t.baseURL,t.url,t.allowAbsoluteUrls);return yn(n,t.params,t.paramsSerializer)}};c.forEach(["delete","get","head","options"],function(t){K.prototype[t]=function(n,r){return this.request(J(r||{},{method:t,url:n,data:(r||{}).data}))}});c.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,a){return this.request(J(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}K.prototype[t]=n(),K.prototype[t+"Form"]=n(!0)});let Hs=class Cn{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(a=>{r.subscribe(a),o=a}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,a){r.reason||(r.reason=new de(o,i,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new Cn(function(s){t=s}),cancel:t}}};function qs(e){return function(n){return e.apply(null,n)}}function Vs(e){return c.isObject(e)&&e.isAxiosError===!0}const Xe={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Xe).forEach(([e,t])=>{Xe[t]=e});function vn(e){const t=new K(e),n=cn(K.prototype.request,t);return c.extend(n,K.prototype,t,{allOwnKeys:!0}),c.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return vn(J(e,s))},n}const E=vn(le);E.Axios=K;E.CanceledError=de;E.CancelToken=Hs;E.isCancel=Sn;E.VERSION=On;E.toFormData=Ie;E.AxiosError=g;E.Cancel=E.CanceledError;E.all=function(t){return Promise.all(t)};E.spread=qs;E.isAxiosError=Vs;E.mergeConfig=J;E.AxiosHeaders=C;E.formToJSON=e=>En(c.isHTMLForm(e)?new FormData(e):e);E.getAdapter=Rn.getAdapter;E.HttpStatusCode=Xe;E.default=E;const{Axios:Xa,AxiosError:Ya,CanceledError:Qa,isCancel:Za,CancelToken:ec,VERSION:tc,all:nc,Cancel:rc,isAxiosError:sc,spread:oc,toFormData:ic,AxiosHeaders:ac,HttpStatusCode:cc,formToJSON:uc,getAdapter:lc,mergeConfig:dc}=E;window.axios=E;window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";var Ht={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},Ws=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=e[n++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=e[n++],i=e[n++],a=e[n++],d=((s&7)<<18|(o&63)<<12|(i&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(d>>10)),t[r++]=String.fromCharCode(56320+(d&1023))}else{const o=e[n++],i=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|i&63)}}return t.join("")},Nn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const o=e[s],i=s+1<e.length,a=i?e[s+1]:0,d=s+2<e.length,l=d?e[s+2]:0,u=o>>2,p=(o&3)<<4|a>>4;let b=(a&15)<<2|l>>6,y=l&63;d||(y=64,i||(b=64)),r.push(n[u],n[p],n[b],n[y])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Dn(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Ws(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const o=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const l=s<e.length?n[e.charAt(s)]:64;++s;const p=s<e.length?n[e.charAt(s)]:64;if(++s,o==null||a==null||l==null||p==null)throw new zs;const b=o<<2|a>>4;if(r.push(b),l!==64){const y=a<<4&240|l>>2;if(r.push(y),p!==64){const f=l<<6&192|p;r.push(f)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class zs extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ks=function(e){const t=Dn(e);return Nn.encodeByteArray(t,!0)},kn=function(e){return Ks(e).replace(/\./g,"")},Js=function(e){try{return Nn.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gs(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xs=()=>Gs().__FIREBASE_DEFAULTS__,Ys=()=>{if(typeof process>"u"||typeof Ht>"u")return;const e=Ht.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Qs=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Js(e[1]);return t&&JSON.parse(t)},Zs=()=>{try{return Xs()||Ys()||Qs()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Pn=()=>{var e;return(e=Zs())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}function Bn(){try{return typeof indexedDB=="object"}catch{return!1}}function xn(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}function to(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const no="FirebaseError";class te extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=no,Object.setPrototypeOf(this,te.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Oe.prototype.create)}}class Oe{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,o=this.errors[t],i=o?ro(o,r):"Error",a=`${this.serviceName}: ${i} (${s}).`;return new te(s,a,r)}}function ro(e,t){return e.replace(so,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const so=/\{\$([^}]+)}/g;function Ye(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const o=e[s],i=t[s];if(qt(o)&&qt(i)){if(!Ye(o,i))return!1}else if(o!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function qt(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(e){return e&&e._delegate?e._delegate:e}class U{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new eo;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(ao(t))try{this.getOrInitializeService({instanceIdentifier:V})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=V){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=V){return this.instances.has(t)}getOptions(t=V){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,i]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&i.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const i=this.instances.get(s);return i&&t(i,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:io(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=V){return this.component?this.component.multipleInstances?t:V:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function io(e){return e===V?void 0:e}function ao(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new oo(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var w;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(w||(w={}));const uo={debug:w.DEBUG,verbose:w.VERBOSE,info:w.INFO,warn:w.WARN,error:w.ERROR,silent:w.SILENT},lo=w.INFO,fo={[w.DEBUG]:"log",[w.VERBOSE]:"log",[w.INFO]:"info",[w.WARN]:"warn",[w.ERROR]:"error"},ho=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=fo[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class po{constructor(t){this.name=t,this._logLevel=lo,this._logHandler=ho,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in w))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?uo[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,w.DEBUG,...t),this._logHandler(this,w.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,w.VERBOSE,...t),this._logHandler(this,w.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,w.INFO,...t),this._logHandler(this,w.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,w.WARN,...t),this._logHandler(this,w.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,w.ERROR,...t),this._logHandler(this,w.ERROR,...t)}}const mo=(e,t)=>t.some(n=>e instanceof n);let Vt,Wt;function go(){return Vt||(Vt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function bo(){return Wt||(Wt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Fn=new WeakMap,Qe=new WeakMap,Ln=new WeakMap,Le=new WeakMap,lt=new WeakMap;function wo(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",o),e.removeEventListener("error",i)},o=()=>{n(x(e.result)),s()},i=()=>{r(e.error),s()};e.addEventListener("success",o),e.addEventListener("error",i)});return t.then(n=>{n instanceof IDBCursor&&Fn.set(n,e)}).catch(()=>{}),lt.set(t,e),t}function yo(e){if(Qe.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",i),e.removeEventListener("abort",i)},o=()=>{n(),s()},i=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",o),e.addEventListener("error",i),e.addEventListener("abort",i)});Qe.set(e,t)}let Ze={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Qe.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Ln.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return x(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Eo(e){Ze=e(Ze)}function So(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Me(this),t,...n);return Ln.set(r,t.sort?t.sort():[t]),x(r)}:bo().includes(e)?function(...t){return e.apply(Me(this),t),x(Fn.get(this))}:function(...t){return x(e.apply(Me(this),t))}}function To(e){return typeof e=="function"?So(e):(e instanceof IDBTransaction&&yo(e),mo(e,go())?new Proxy(e,Ze):e)}function x(e){if(e instanceof IDBRequest)return wo(e);if(Le.has(e))return Le.get(e);const t=To(e);return t!==e&&(Le.set(e,t),lt.set(t,e)),t}const Me=e=>lt.get(e);function Ce(e,t,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const i=indexedDB.open(e,t),a=x(i);return r&&i.addEventListener("upgradeneeded",d=>{r(x(i.result),d.oldVersion,d.newVersion,x(i.transaction),d)}),n&&i.addEventListener("blocked",d=>n(d.oldVersion,d.newVersion,d)),a.then(d=>{o&&d.addEventListener("close",()=>o()),s&&d.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}function $e(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",r=>t(r.oldVersion,r)),x(n).then(()=>{})}const _o=["get","getKey","getAll","getAllKeys","count"],Ao=["put","add","delete","clear"],je=new Map;function zt(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(je.get(t))return je.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=Ao.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||_o.includes(n)))return;const o=async function(i,...a){const d=this.transaction(i,s?"readwrite":"readonly");let l=d.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&d.done]))[0]};return je.set(t,o),o}Eo(e=>({...e,get:(t,n,r)=>zt(t,n)||e.get(t,n,r),has:(t,n)=>!!zt(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ro(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Ro(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const et="@firebase/app",Kt="0.10.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F=new po("@firebase/app"),Oo="@firebase/app-compat",Co="@firebase/analytics-compat",vo="@firebase/analytics",Do="@firebase/app-check-compat",No="@firebase/app-check",ko="@firebase/auth",Po="@firebase/auth-compat",Bo="@firebase/database",xo="@firebase/data-connect",Fo="@firebase/database-compat",Lo="@firebase/functions",Mo="@firebase/functions-compat",$o="@firebase/installations",jo="@firebase/installations-compat",Uo="@firebase/messaging",Ho="@firebase/messaging-compat",qo="@firebase/performance",Vo="@firebase/performance-compat",Wo="@firebase/remote-config",zo="@firebase/remote-config-compat",Ko="@firebase/storage",Jo="@firebase/storage-compat",Go="@firebase/firestore",Xo="@firebase/vertexai",Yo="@firebase/firestore-compat",Qo="firebase";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tt="[DEFAULT]",Zo={[et]:"fire-core",[Oo]:"fire-core-compat",[vo]:"fire-analytics",[Co]:"fire-analytics-compat",[No]:"fire-app-check",[Do]:"fire-app-check-compat",[ko]:"fire-auth",[Po]:"fire-auth-compat",[Bo]:"fire-rtdb",[xo]:"fire-data-connect",[Fo]:"fire-rtdb-compat",[Lo]:"fire-fn",[Mo]:"fire-fn-compat",[$o]:"fire-iid",[jo]:"fire-iid-compat",[Uo]:"fire-fcm",[Ho]:"fire-fcm-compat",[qo]:"fire-perf",[Vo]:"fire-perf-compat",[Wo]:"fire-rc",[zo]:"fire-rc-compat",[Ko]:"fire-gcs",[Jo]:"fire-gcs-compat",[Go]:"fire-fst",[Yo]:"fire-fst-compat",[Xo]:"fire-vertex","fire-js":"fire-js",[Qo]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ee=new Map,ei=new Map,nt=new Map;function Jt(e,t){try{e.container.addComponent(t)}catch(n){F.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function G(e){const t=e.name;if(nt.has(t))return F.debug(`There were multiple attempts to register component ${t}.`),!1;nt.set(t,e);for(const n of Ee.values())Jt(n,e);for(const n of ei.values())Jt(n,e);return!0}function dt(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},$=new Oe("app","Firebase",ti);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new U("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw $.create("app-deleted",{appName:this._name})}}function Mn(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:tt,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw $.create("bad-app-name",{appName:String(s)});if(n||(n=Pn()),!n)throw $.create("no-options");const o=Ee.get(s);if(o){if(Ye(n,o.options)&&Ye(r,o.config))return o;throw $.create("duplicate-app",{appName:s})}const i=new co(s);for(const d of nt.values())i.addComponent(d);const a=new ni(n,r,i);return Ee.set(s,a),a}function ri(e=tt){const t=Ee.get(e);if(!t&&e===tt&&Pn())return Mn();if(!t)throw $.create("no-app",{appName:e});return t}function j(e,t,n){var r;let s=(r=Zo[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),i=t.match(/\s|\//);if(o||i){const a=[`Unable to register library "${s}" with version "${t}":`];o&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&i&&a.push("and"),i&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),F.warn(a.join(" "));return}G(new U(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si="firebase-heartbeat-database",oi=1,se="firebase-heartbeat-store";let Ue=null;function $n(){return Ue||(Ue=Ce(si,oi,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(se)}catch(n){console.warn(n)}}}}).catch(e=>{throw $.create("idb-open",{originalErrorMessage:e.message})})),Ue}async function ii(e){try{const n=(await $n()).transaction(se),r=await n.objectStore(se).get(jn(e));return await n.done,r}catch(t){if(t instanceof te)F.warn(t.message);else{const n=$.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});F.warn(n.message)}}}async function Gt(e,t){try{const r=(await $n()).transaction(se,"readwrite");await r.objectStore(se).put(t,jn(e)),await r.done}catch(n){if(n instanceof te)F.warn(n.message);else{const r=$.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});F.warn(r.message)}}}function jn(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai=1024,ci=720*60*60*1e3;class ui{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new di(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Xt();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(i=>i.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const a=new Date(i.date).valueOf();return Date.now()-a<=ci}),this._storage.overwrite(this._heartbeatsCache))}catch(r){F.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Xt(),{heartbeatsToSend:r,unsentEntries:s}=li(this._heartbeatsCache.heartbeats),o=kn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return F.warn(n),""}}}function Xt(){return new Date().toISOString().substring(0,10)}function li(e,t=ai){const n=[];let r=e.slice();for(const s of e){const o=n.find(i=>i.agent===s.agent);if(o){if(o.dates.push(s.date),Yt(n)>t){o.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Yt(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class di{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Bn()?xn().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ii(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Gt(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Gt(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Yt(e){return kn(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fi(e){G(new U("platform-logger",t=>new Io(t),"PRIVATE")),G(new U("heartbeat",t=>new ui(t),"PRIVATE")),j(et,Kt,e),j(et,Kt,"esm2017"),j("fire-js","")}fi("");var hi="firebase",pi="11.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */j(hi,pi,"app");const Un="@firebase/installations",ft="0.6.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn=1e4,qn=`w:${ft}`,Vn="FIS_v2",mi="https://firebaseinstallations.googleapis.com/v1",gi=3600*1e3,bi="installations",wi="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yi={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},X=new Oe(bi,wi,yi);function Wn(e){return e instanceof te&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn({projectId:e}){return`${mi}/projects/${e}/installations`}function Kn(e){return{token:e.token,requestStatus:2,expiresIn:Si(e.expiresIn),creationTime:Date.now()}}async function Jn(e,t){const r=(await t.json()).error;return X.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Gn({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Ei(e,{refreshToken:t}){const n=Gn(e);return n.append("Authorization",Ti(t)),n}async function Xn(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Si(e){return Number(e.replace("s","000"))}function Ti(e){return`${Vn} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _i({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=zn(e),s=Gn(e),o=t.getImmediate({optional:!0});if(o){const l=await o.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const i={fid:n,authVersion:Vn,appId:e.appId,sdkVersion:qn},a={method:"POST",headers:s,body:JSON.stringify(i)},d=await Xn(()=>fetch(r,a));if(d.ok){const l=await d.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Kn(l.authToken)}}else throw await Jn("Create Installation",d)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ai(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii=/^[cdef][\w-]{21}$/,rt="";function Ri(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Oi(e);return Ii.test(n)?n:rt}catch{return rt}}function Oi(e){return Ai(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn=new Map;function Zn(e,t){const n=ve(e);er(n,t),Ci(n,t)}function er(e,t){const n=Qn.get(e);if(n)for(const r of n)r(t)}function Ci(e,t){const n=vi();n&&n.postMessage({key:e,fid:t}),Di()}let z=null;function vi(){return!z&&"BroadcastChannel"in self&&(z=new BroadcastChannel("[Firebase] FID Change"),z.onmessage=e=>{er(e.data.key,e.data.fid)}),z}function Di(){Qn.size===0&&z&&(z.close(),z=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ni="firebase-installations-database",ki=1,Y="firebase-installations-store";let He=null;function ht(){return He||(He=Ce(Ni,ki,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Y)}}})),He}async function Se(e,t){const n=ve(e),s=(await ht()).transaction(Y,"readwrite"),o=s.objectStore(Y),i=await o.get(n);return await o.put(t,n),await s.done,(!i||i.fid!==t.fid)&&Zn(e,t.fid),t}async function tr(e){const t=ve(e),r=(await ht()).transaction(Y,"readwrite");await r.objectStore(Y).delete(t),await r.done}async function De(e,t){const n=ve(e),s=(await ht()).transaction(Y,"readwrite"),o=s.objectStore(Y),i=await o.get(n),a=t(i);return a===void 0?await o.delete(n):await o.put(a,n),await s.done,a&&(!i||i.fid!==a.fid)&&Zn(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pt(e){let t;const n=await De(e.appConfig,r=>{const s=Pi(r),o=Bi(e,s);return t=o.registrationPromise,o.installationEntry});return n.fid===rt?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Pi(e){const t=e||{fid:Ri(),registrationStatus:0};return nr(t)}function Bi(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(X.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=xi(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Fi(e)}:{installationEntry:t}}async function xi(e,t){try{const n=await _i(e,t);return Se(e.appConfig,n)}catch(n){throw Wn(n)&&n.customData.serverCode===409?await tr(e.appConfig):await Se(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Fi(e){let t=await Qt(e.appConfig);for(;t.registrationStatus===1;)await Yn(100),t=await Qt(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await pt(e);return r||n}return t}function Qt(e){return De(e,t=>{if(!t)throw X.create("installation-not-found");return nr(t)})}function nr(e){return Li(e)?{fid:e.fid,registrationStatus:0}:e}function Li(e){return e.registrationStatus===1&&e.registrationTime+Hn<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mi({appConfig:e,heartbeatServiceProvider:t},n){const r=$i(e,n),s=Ei(e,n),o=t.getImmediate({optional:!0});if(o){const l=await o.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const i={installation:{sdkVersion:qn,appId:e.appId}},a={method:"POST",headers:s,body:JSON.stringify(i)},d=await Xn(()=>fetch(r,a));if(d.ok){const l=await d.json();return Kn(l)}else throw await Jn("Generate Auth Token",d)}function $i(e,{fid:t}){return`${zn(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mt(e,t=!1){let n;const r=await De(e.appConfig,o=>{if(!rr(o))throw X.create("not-registered");const i=o.authToken;if(!t&&Hi(i))return o;if(i.requestStatus===1)return n=ji(e,t),o;{if(!navigator.onLine)throw X.create("app-offline");const a=Vi(o);return n=Ui(e,a),a}});return n?await n:r.authToken}async function ji(e,t){let n=await Zt(e.appConfig);for(;n.authToken.requestStatus===1;)await Yn(100),n=await Zt(e.appConfig);const r=n.authToken;return r.requestStatus===0?mt(e,t):r}function Zt(e){return De(e,t=>{if(!rr(t))throw X.create("not-registered");const n=t.authToken;return Wi(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Ui(e,t){try{const n=await Mi(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Se(e.appConfig,r),n}catch(n){if(Wn(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await tr(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Se(e.appConfig,r)}throw n}}function rr(e){return e!==void 0&&e.registrationStatus===2}function Hi(e){return e.requestStatus===2&&!qi(e)}function qi(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+gi}function Vi(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Wi(e){return e.requestStatus===1&&e.requestTime+Hn<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zi(e){const t=e,{installationEntry:n,registrationPromise:r}=await pt(t);return r?r.catch(console.error):mt(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ki(e,t=!1){const n=e;return await Ji(n),(await mt(n,t)).token}async function Ji(e){const{registrationPromise:t}=await pt(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(e){if(!e||!e.options)throw qe("App Configuration");if(!e.name)throw qe("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw qe(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function qe(e){return X.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr="installations",Xi="installations-internal",Yi=e=>{const t=e.getProvider("app").getImmediate(),n=Gi(t),r=dt(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Qi=e=>{const t=e.getProvider("app").getImmediate(),n=dt(t,sr).getImmediate();return{getId:()=>zi(n),getToken:s=>Ki(n,s)}};function Zi(){G(new U(sr,Yi,"PUBLIC")),G(new U(Xi,Qi,"PRIVATE"))}Zi();j(Un,ft);j(Un,ft,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea="/firebase-messaging-sw.js",ta="/firebase-cloud-messaging-push-scope",or="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",na="https://fcmregistrations.googleapis.com/v1",ir="google.c.a.c_id",ra="google.c.a.c_l",sa="google.c.a.ts",oa="google.c.a.e",en=1e4;var tn;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(tn||(tn={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var oe;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})(oe||(oe={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function ia(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),s=new Uint8Array(r.length);for(let o=0;o<r.length;++o)s[o]=r.charCodeAt(o);return s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ve="fcm_token_details_db",aa=5,nn="fcm_token_object_Store";async function ca(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(o=>o.name).includes(Ve))return null;let t=null;return(await Ce(Ve,aa,{upgrade:async(r,s,o,i)=>{var a;if(s<2||!r.objectStoreNames.contains(nn))return;const d=i.objectStore(nn),l=await d.index("fcmSenderId").get(e);if(await d.clear(),!!l){if(s===2){const u=l;if(!u.auth||!u.p256dh||!u.endpoint)return;t={token:u.fcmToken,createTime:(a=u.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:u.auth,p256dh:u.p256dh,endpoint:u.endpoint,swScope:u.swScope,vapidKey:typeof u.vapidKey=="string"?u.vapidKey:B(u.vapidKey)}}}else if(s===3){const u=l;t={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:B(u.auth),p256dh:B(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:B(u.vapidKey)}}}else if(s===4){const u=l;t={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:B(u.auth),p256dh:B(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:B(u.vapidKey)}}}}}})).close(),await $e(Ve),await $e("fcm_vapid_details_db"),await $e("undefined"),ua(t)?t:null}function ua(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la="firebase-messaging-database",da=1,ie="firebase-messaging-store";let We=null;function ar(){return We||(We=Ce(la,da,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(ie)}}})),We}async function fa(e){const t=cr(e),r=await(await ar()).transaction(ie).objectStore(ie).get(t);if(r)return r;{const s=await ca(e.appConfig.senderId);if(s)return await gt(e,s),s}}async function gt(e,t){const n=cr(e),s=(await ar()).transaction(ie,"readwrite");return await s.objectStore(ie).put(t,n),await s.done,t}function cr({appConfig:e}){return e.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ha={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},A=new Oe("messaging","Messaging",ha);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pa(e,t){const n=await wt(e),r=ur(t),s={method:"POST",headers:n,body:JSON.stringify(r)};let o;try{o=await(await fetch(bt(e.appConfig),s)).json()}catch(i){throw A.create("token-subscribe-failed",{errorInfo:i==null?void 0:i.toString()})}if(o.error){const i=o.error.message;throw A.create("token-subscribe-failed",{errorInfo:i})}if(!o.token)throw A.create("token-subscribe-no-token");return o.token}async function ma(e,t){const n=await wt(e),r=ur(t.subscriptionOptions),s={method:"PATCH",headers:n,body:JSON.stringify(r)};let o;try{o=await(await fetch(`${bt(e.appConfig)}/${t.token}`,s)).json()}catch(i){throw A.create("token-update-failed",{errorInfo:i==null?void 0:i.toString()})}if(o.error){const i=o.error.message;throw A.create("token-update-failed",{errorInfo:i})}if(!o.token)throw A.create("token-update-no-token");return o.token}async function ga(e,t){const r={method:"DELETE",headers:await wt(e)};try{const o=await(await fetch(`${bt(e.appConfig)}/${t}`,r)).json();if(o.error){const i=o.error.message;throw A.create("token-unsubscribe-failed",{errorInfo:i})}}catch(s){throw A.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}}function bt({projectId:e}){return`${na}/projects/${e}/registrations`}async function wt({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function ur({p256dh:e,auth:t,endpoint:n,vapidKey:r}){const s={web:{endpoint:n,auth:t,p256dh:e}};return r!==or&&(s.web.applicationPubKey=r),s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ba=10080*60*1e3;async function wa(e){const t=await Ea(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:B(t.getKey("auth")),p256dh:B(t.getKey("p256dh"))},r=await fa(e.firebaseDependencies);if(r){if(Sa(r.subscriptionOptions,n))return Date.now()>=r.createTime+ba?ya(e,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await ga(e.firebaseDependencies,r.token)}catch(s){console.warn(s)}return rn(e.firebaseDependencies,n)}else return rn(e.firebaseDependencies,n)}async function ya(e,t){try{const n=await ma(e.firebaseDependencies,t),r=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await gt(e.firebaseDependencies,r),n}catch(n){throw n}}async function rn(e,t){const r={token:await pa(e,t),createTime:Date.now(),subscriptionOptions:t};return await gt(e,r),r.token}async function Ea(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:ia(t)})}function Sa(e,t){const n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,s=t.auth===e.auth,o=t.p256dh===e.p256dh;return n&&r&&s&&o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return Ta(t,e),_a(t,e),Aa(t,e),t}function Ta(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const r=t.notification.body;r&&(e.notification.body=r);const s=t.notification.image;s&&(e.notification.image=s);const o=t.notification.icon;o&&(e.notification.icon=o)}function _a(e,t){t.data&&(e.data=t.data)}function Aa(e,t){var n,r,s,o,i;if(!t.fcmOptions&&!(!((n=t.notification)===null||n===void 0)&&n.click_action))return;e.fcmOptions={};const a=(s=(r=t.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&s!==void 0?s:(o=t.notification)===null||o===void 0?void 0:o.click_action;a&&(e.fcmOptions.link=a);const d=(i=t.fcmOptions)===null||i===void 0?void 0:i.analytics_label;d&&(e.fcmOptions.analyticsLabel=d)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(e){return typeof e=="object"&&!!e&&ir in e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ra(e){if(!e||!e.options)throw ze("App Configuration Object");if(!e.name)throw ze("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const r of t)if(!n[r])throw ze(r);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function ze(e){return A.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(t,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=Ra(t);this.firebaseDependencies={app:t,appConfig:s,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ca(e){try{e.swRegistration=await navigator.serviceWorker.register(ea,{scope:ta}),e.swRegistration.update().catch(()=>{}),await va(e.swRegistration)}catch(t){throw A.create("failed-service-worker-registration",{browserErrorMessage:t==null?void 0:t.message})}}async function va(e){return new Promise((t,n)=>{const r=setTimeout(()=>n(new Error(`Service worker not registered after ${en} ms`)),en),s=e.installing||e.waiting;e.active?(clearTimeout(r),t()):s?s.onstatechange=o=>{var i;((i=o.target)===null||i===void 0?void 0:i.state)==="activated"&&(s.onstatechange=null,clearTimeout(r),t())}:(clearTimeout(r),n(new Error("No incoming service worker found.")))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Da(e,t){if(!t&&!e.swRegistration&&await Ca(e),!(!t&&e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw A.create("invalid-sw-registration");e.swRegistration=t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Na(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=or)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lr(e,t){if(!navigator)throw A.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw A.create("permission-blocked");return await Na(e,t==null?void 0:t.vapidKey),await Da(e,t==null?void 0:t.serviceWorkerRegistration),wa(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ka(e,t,n){const r=Pa(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[ir],message_name:n[ra],message_time:n[sa],message_device_time:Math.floor(Date.now()/1e3)})}function Pa(e){switch(e){case oe.NOTIFICATION_CLICKED:return"notification_open";case oe.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ba(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===oe.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(sn(n)):e.onMessageHandler.next(sn(n)));const r=n.data;Ia(r)&&r[oa]==="1"&&await ka(e,n.messageType,r)}const on="@firebase/messaging",an="0.12.15";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xa=e=>{const t=new Oa(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>Ba(t,n)),t},Fa=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:r=>lr(t,r)}};function La(){G(new U("messaging",xa,"PUBLIC")),G(new U("messaging-internal",Fa,"PRIVATE")),j(on,an),j(on,an,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ma(){try{await xn()}catch{return!1}return typeof window<"u"&&Bn()&&to()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $a(e,t){if(!navigator)throw A.create("only-available-in-window");return e.onMessageHandler=t,()=>{e.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ja(e=ri()){return Ma().then(t=>{if(!t)throw A.create("unsupported-browser")},t=>{throw A.create("indexed-db-unsupported")}),dt(ut(e),"messaging").getImmediate()}async function Ua(e,t){return e=ut(e),lr(e,t)}function Ha(e,t){return e=ut(e),$a(e,t)}La();const qa={apiKey:"AIzaSyC5YfSaBGQ4wNpKA82IOBtV1Q2-juAr8EE",authDomain:"sparklem-management.firebaseapp.com",projectId:"sparklem-management",storageBucket:"sparklem-management.firebasestorage.app",messagingSenderId:"858863366626",appId:"1:858863366626:web:4073a2909f2038ac4949bb",measurementId:"G-SGC8YBNVCS"},Va=Mn(qa),dr=ja(Va);function Wa(){var e=new Audio("/happy-bell-notification.wav");console.log(e),e.play()}const za=()=>({deviceToken:"",notificationPermission:!1,init(){this.requestPermission()},requestPermission(){"Notification"in window?Notification.requestPermission().then(e=>{e==="granted"?(this.notificationPermission=!0,this.getToken()):console.log(e==="denied"?"Notification permission denied.":"Notification permission request was dismissed.")}):console.log("This browser does not support notifications.")},async getToken(){try{const t=await Ua(dr,{vapidKey:"BAG3h0uJp2_kakuaD4Qkg1fFIwD2-Ehd9485cz5Vhiw-QT_OvmzjIXKLSiIaqx5l-V1ak6_9he9peF9CQJuKjN0"});t?(this.deviceToken=t,this.$refs.token.value=this.deviceToken,this.$refs.token.dispatchEvent(new Event("input")),console.log("Device Token:",this.deviceToken)):console.warn("No registration token available. Request permission to generate one.")}catch(e){console.error("An error occurred while retrieving token:",e)}}});window.firebaseHandler=za;Ha(dr,e=>{console.log("Message received: ",e),Livewire.dispatch("notification-received"),Wa()});"serviceWorker"in navigator&&navigator.serviceWorker.register("/firebase-messaging-sw.js").then(e=>{console.log("Service Worker registered successfully with scope:",e.scope)}).catch(e=>{console.error("Service Worker registration failed:",e)});
