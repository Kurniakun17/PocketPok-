(()=>{var e={723:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(81),o=n.n(r),s=n(645),i=n.n(s)()(o());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;600;800&display=swap);"]),i.push([e.id,"*{\r\n  margin: 0;\r\n  padding: 0px;\r\n  font-family: sans-serif, cursive;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody{\r\n  background-color: #2c3333;\r\n}\r\n\r\n.flex{\r\n  display: flex;\r\n}\r\n\r\n.navbar{\r\n  border-bottom: 1px solid #A5C9CA;\r\n  text-align: center;\r\n  position: relative;\r\n  padding: 30px 0px;\r\n  background-color: #2c3333;\r\n}\r\n\r\n.navbar h1{\r\n  color: white;\r\n}\r\n\r\n#form{\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.content{\r\n  margin-top: 2em;\r\n  margin: 2em auto;\r\n  flex-direction: column;\r\n  text-align: center;\r\n  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  border-radius: 10px;\r\n  width: 70%;\r\n  overflow: hidden;\r\n  padding: 2em;\r\n  border: 1px solid white;\r\n}\r\n\r\n.content h2{\r\n  color: white;\r\n}\r\n\r\n.poke-input{\r\n  width: 78%;\r\n  height: 30px;\r\n  border: 3px solid white;\r\n  border-radius: 7px;\r\n  padding: 5px;\r\n  margin: 10px 0px;\r\n  background-color: #A5C9CA;\r\n  color: rgb(57, 91, 100);\r\n  font-size: 15px;\r\n  font-weight: bold; \r\n}\r\n\r\n.submit-button{\r\n  width: 20%;\r\n  height: 30px;\r\n  border-radius: 7px;\r\n  color: black;\r\n  font-weight: bold;\r\n  background-color: #A5C9CA ;\r\n  color: rgb(57, 91, 100);\r\n  border: 3px solid white;\r\n}\r\n\r\n.submit-button:hover{\r\n  background-color: rgb(57, 91, 100);\r\n  color: #A5C9CA;\r\n}\r\n\r\n.poke-info{\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  border-radius: 5px;\r\n  color: black;\r\n  padding-bottom: 1em;\r\n  margin-top: 1.5em;\r\n}\r\n\r\n.poke-info h3{\r\n  font-size: 2em;\r\n}\r\n\r\n.poke-info h4{\r\n  margin: 10px 0px;\r\n  font-size: 1.3em;\r\n  font-weight: lighter;\r\n}\r\n\r\n.poke-id{\r\n  width: min-content;\r\n  padding: 10px;\r\n  background-color: white;\r\n  border-radius: 5px;\r\n  font-weight: bold;\r\n}\r\n\r\n.poke-misc{\r\n  width: 80%;\r\n}\r\n\r\n.poke-miscHW{\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  text-align: left;\r\n  width: 100%;\r\n  margin: 10px auto;\r\n  gap: 10px;\r\n  font-weight: 400;\r\n  font-size: 1.2em;\r\n}\r\n\r\n/* bar stats */\r\n.stats-bar-container{\r\n  flex-direction: column;\r\n  gap: 1em;\r\n}\r\n\r\n.bar-container{\r\n  position: relative;\r\n  height: 1em;\r\n  width: 100%;\r\n  background-color: black;\r\n  border-radius: 4px;\r\n  overflow: hidden;\r\n}\r\n\r\n.bar-stat{\r\n  position: absolute;\r\n  height: 1em;\r\n  background-color: white;\r\n}\r\n\r\n/* PokeType Color */\r\n\r\n.rock{\r\n  background-color: rgb(182,158,49);\r\n}\r\n\r\n.ghost{\r\n  background-color: rgb(112,85,155);\r\n}\r\n\r\n.steel{\r\n  background-color: rgb(183,185,208);\r\n}\r\n\r\n.water{\r\n  background-color: rgb(100,147,235);\r\n}\r\n\r\n.grass{  \r\n  background-color: rgb(64,176,136);\r\n}\r\n\r\n.rock{\r\n  background-color: rgb(182,158,49);\r\n}\r\n\r\n.psychic{\r\n  background-color: rgb(251,82,132);\r\n}\r\n\r\n.ice{\r\n  background-color: rgb(154,214,223);\r\n}\r\n\r\n.dark{\r\n  background-color: rgb(117,87,56);\r\n}\r\n\r\n.fairy{\r\n  background-color: rgb(230,158,172);\r\n}\r\n\r\n.normal{\r\n  background-color: rgb(170,166,127);\r\n}\r\n\r\n.fighting{\r\n  background-color: rgb(193,34,57);\r\n}\r\n\r\n.flying{\r\n  background-color: rgb(168,145,236);\r\n}\r\n\r\n.ground{\r\n  background-color: rgb(222,193,107);\r\n}\r\n\r\n.fire{\r\n  background-color: rgb(245,125,49);\r\n}\r\n\r\n.electric{\r\n  background-color: rgb(242, 205, 56);\r\n}\r\n\r\n.dragon{\r\n  background-color: rgb(112,55,255)\r\n}",""]);const a=i},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,s){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(i[c]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);r&&i[l[0]]||(void 0!==s&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=s),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{"use strict";e.exports=function(e){return e[1]}},230:e=>{e.exports="object"==typeof self?self.FormData:window.FormData},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var s={},i=[],a=0;a<e.length;a++){var c=e[a],u=r.base?c[0]+r.base:c[0],l=s[u]||0,d="".concat(u," ").concat(l);s[u]=l+1;var f=n(d),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)t[f].references++,t[f].updater(p);else{var h=o(p,r);r.byIndex=a,t.splice(a,0,{identifier:d,updater:h,references:1})}i.push(d)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var s=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<s.length;i++){var a=n(s[i]);t[a].references--}for(var c=r(e,o),u=0;u<s.length;u++){var l=n(s[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}s=c}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var s=t[r]={id:r,exports:{}};return e[r](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{"use strict";var e=n(379),t=n.n(e),r=n(795),o=n.n(r),s=n(569),i=n.n(s),a=n(565),c=n.n(a),u=n(216),l=n.n(u),d=n(589),f=n.n(d),p=n(723),h={};function m(e){return e.charAt(0).toUpperCase()+e.substr(1)}function g(e,t){return function(){return e.apply(t,arguments)}}h.styleTagTransform=f(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),t()(p.Z,h),p.Z&&p.Z.locals&&p.Z.locals;const{toString:b}=Object.prototype,{getPrototypeOf:y}=Object,w=(E=Object.create(null),e=>{const t=b.call(e);return E[t]||(E[t]=t.slice(8,-1).toLowerCase())});var E;const O=e=>(e=e.toLowerCase(),t=>w(t)===e),x=e=>t=>typeof t===e,{isArray:v}=Array,S=x("undefined"),A=O("ArrayBuffer"),R=x("string"),T=x("function"),C=x("number"),k=e=>null!==e&&"object"==typeof e,j=e=>{if("object"!==w(e))return!1;const t=y(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},N=O("Date"),P=O("File"),_=O("Blob"),L=O("FileList"),B=O("URLSearchParams");function D(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let r,o;if("object"!=typeof e&&(e=[e]),v(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let i;for(r=0;r<s;r++)i=o[r],t.call(null,e[i],i,e)}}function U(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;for(;o-- >0;)if(r=n[o],t===r.toLowerCase())return r;return null}const F="undefined"==typeof self?"undefined"==typeof global?void 0:global:self,I=e=>!S(e)&&e!==F,M=(z="undefined"!=typeof Uint8Array&&y(Uint8Array),e=>z&&e instanceof z);var z;const H=O("HTMLFormElement"),J=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),q=O("RegExp"),W=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};D(n,((n,o)=>{!1!==t(n,o,e)&&(r[o]=n)})),Object.defineProperties(e,r)},K={isArray:v,isArrayBuffer:A,isBuffer:function(e){return null!==e&&!S(e)&&null!==e.constructor&&!S(e.constructor)&&T(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{const t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||b.call(e)===t||T(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&A(e.buffer),t},isString:R,isNumber:C,isBoolean:e=>!0===e||!1===e,isObject:k,isPlainObject:j,isUndefined:S,isDate:N,isFile:P,isBlob:_,isRegExp:q,isFunction:T,isStream:e=>k(e)&&T(e.pipe),isURLSearchParams:B,isTypedArray:M,isFileList:L,forEach:D,merge:function e(){const{caseless:t}=I(this)&&this||{},n={},r=(r,o)=>{const s=t&&U(n,o)||o;j(n[s])&&j(r)?n[s]=e(n[s],r):j(r)?n[s]=e({},r):v(r)?n[s]=r.slice():n[s]=r};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&D(arguments[e],r);return n},extend:(e,t,n,{allOwnKeys:r}={})=>(D(t,((t,r)=>{n&&T(t)?e[r]=g(t,n):e[r]=t}),{allOwnKeys:r}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let o,s,i;const a={};if(t=t||{},null==e)return t;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)i=o[s],r&&!r(i,e,t)||a[i]||(t[i]=e[i],a[i]=!0);e=!1!==n&&y(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:w,kindOfTest:O,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(v(e))return e;let t=e.length;if(!C(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:H,hasOwnProperty:J,hasOwnProp:J,reduceDescriptors:W,freezeMethods:e=>{W(e,((t,n)=>{if(T(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];T(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return v(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:U,global:F,isContextDefined:I,toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(k(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const o=v(e)?[]:{};return D(e,((e,t)=>{const s=n(e,r+1);!S(s)&&(o[t]=s)})),t[r]=void 0,o}}return e};return n(e,0)}};function V(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}K.inherits(V,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:K.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const $=V.prototype,Z={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{Z[e]={value:e}})),Object.defineProperties(V,Z),Object.defineProperty($,"isAxiosError",{value:!0}),V.from=(e,t,n,r,o,s)=>{const i=Object.create($);return K.toFlatObject(e,i,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),V.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};const X=V,G=n(230);function Q(e){return K.isPlainObject(e)||K.isArray(e)}function Y(e){return K.endsWith(e,"[]")?e.slice(0,-2):e}function ee(e,t,n){return e?e.concat(t).map((function(e,t){return e=Y(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const te=K.toFlatObject(K,{},null,(function(e){return/^is[A-Z]/.test(e)})),ne=function(e,t,n){if(!K.isObject(e))throw new TypeError("target must be an object");t=t||new(G||FormData);const r=(n=K.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!K.isUndefined(t[e])}))).metaTokens,o=n.visitor||l,s=n.dots,i=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&(c=t)&&K.isFunction(c.append)&&"FormData"===c[Symbol.toStringTag]&&c[Symbol.iterator];var c;if(!K.isFunction(o))throw new TypeError("visitor must be a function");function u(e){if(null===e)return"";if(K.isDate(e))return e.toISOString();if(!a&&K.isBlob(e))throw new X("Blob is not supported. Use a Buffer instead.");return K.isArrayBuffer(e)||K.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function l(e,n,o){let a=e;if(e&&!o&&"object"==typeof e)if(K.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(K.isArray(e)&&function(e){return K.isArray(e)&&!e.some(Q)}(e)||K.isFileList(e)||K.endsWith(n,"[]")&&(a=K.toArray(e)))return n=Y(n),a.forEach((function(e,r){!K.isUndefined(e)&&null!==e&&t.append(!0===i?ee([n],r,s):null===i?n:n+"[]",u(e))})),!1;return!!Q(e)||(t.append(ee(o,n,s),u(e)),!1)}const d=[],f=Object.assign(te,{defaultVisitor:l,convertValue:u,isVisitable:Q});if(!K.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!K.isUndefined(n)){if(-1!==d.indexOf(n))throw Error("Circular reference detected in "+r.join("."));d.push(n),K.forEach(n,(function(n,s){!0===(!(K.isUndefined(n)||null===n)&&o.call(t,n,K.isString(s)?s.trim():s,r,f))&&e(n,r?r.concat(s):[s])})),d.pop()}}(e),t};function re(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function oe(e,t){this._pairs=[],e&&ne(e,this,t)}const se=oe.prototype;se.append=function(e,t){this._pairs.push([e,t])},se.toString=function(e){const t=e?function(t){return e.call(this,t,re)}:re;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};const ie=oe;function ae(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ce(e,t,n){if(!t)return e;const r=n&&n.encode||ae,o=n&&n.serialize;let s;if(s=o?o(t,n):K.isURLSearchParams(t)?t.toString():new ie(t,n).toString(r),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}const ue=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){K.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},le={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},de="undefined"!=typeof URLSearchParams?URLSearchParams:ie,fe=FormData,pe=(()=>{let e;return("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&"undefined"!=typeof window&&"undefined"!=typeof document})(),he="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,me={isBrowser:!0,classes:{URLSearchParams:de,FormData:fe,Blob},isStandardBrowserEnv:pe,isStandardBrowserWebWorkerEnv:he,protocols:["http","https","file","blob","url","data"]},ge=function(e){function t(e,n,r,o){let s=e[o++];const i=Number.isFinite(+s),a=o>=e.length;return s=!s&&K.isArray(r)?r.length:s,a?(K.hasOwnProp(r,s)?r[s]=[r[s],n]:r[s]=n,!i):(r[s]&&K.isObject(r[s])||(r[s]=[]),t(e,n,r[s],o)&&K.isArray(r[s])&&(r[s]=function(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}(r[s])),!i)}if(K.isFormData(e)&&K.isFunction(e.entries)){const n={};return K.forEachEntry(e,((e,r)=>{t(function(e){return K.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null},be={"Content-Type":void 0},ye={transitional:le,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=K.isObject(e);if(o&&K.isHTMLForm(e)&&(e=new FormData(e)),K.isFormData(e))return r&&r?JSON.stringify(ge(e)):e;if(K.isArrayBuffer(e)||K.isBuffer(e)||K.isStream(e)||K.isFile(e)||K.isBlob(e))return e;if(K.isArrayBufferView(e))return e.buffer;if(K.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return ne(e,new me.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return me.isNode&&K.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((s=K.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return ne(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),function(e,t,n){if(K.isString(e))try{return(0,JSON.parse)(e),K.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||ye.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(e&&K.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(e){if(n){if("SyntaxError"===e.name)throw X.from(e,X.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:me.classes.FormData,Blob:me.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};K.forEach(["delete","get","head"],(function(e){ye.headers[e]={}})),K.forEach(["post","put","patch"],(function(e){ye.headers[e]=K.merge(be)}));const we=ye,Ee=K.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Oe=Symbol("internals");function xe(e){return e&&String(e).trim().toLowerCase()}function ve(e){return!1===e||null==e?e:K.isArray(e)?e.map(ve):String(e)}function Se(e,t,n,r){return K.isFunction(r)?r.call(this,t,n):K.isString(t)?K.isString(r)?-1!==t.indexOf(r):K.isRegExp(r)?r.test(t):void 0:void 0}class Ae{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function o(e,t,n){const o=xe(t);if(!o)throw new Error("header name must be a non-empty string");const s=K.findKey(r,o);(!s||void 0===r[s]||!0===n||void 0===n&&!1!==r[s])&&(r[s||t]=ve(e))}const s=(e,t)=>K.forEach(e,((e,n)=>o(e,n,t)));return K.isPlainObject(e)||e instanceof this.constructor?s(e,t):K.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z]+$/.test(e.trim())?s((e=>{const t={};let n,r,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&Ee[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t})(e),t):null!=e&&o(t,e,n),this}get(e,t){if(e=xe(e)){const n=K.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(K.isFunction(t))return t.call(this,e,n);if(K.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=xe(e)){const n=K.findKey(this,e);return!(!n||t&&!Se(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function o(e){if(e=xe(e)){const o=K.findKey(n,e);!o||t&&!Se(0,n[o],o,t)||(delete n[o],r=!0)}}return K.isArray(e)?e.forEach(o):o(e),r}clear(){return Object.keys(this).forEach(this.delete.bind(this))}normalize(e){const t=this,n={};return K.forEach(this,((r,o)=>{const s=K.findKey(n,o);if(s)return t[s]=ve(r),void delete t[o];const i=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(o):String(o).trim();i!==o&&delete t[o],t[i]=ve(r),n[i]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return K.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&K.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[Oe]=this[Oe]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=xe(e);t[r]||(function(e,t){const n=K.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}(n,e),t[r]=!0)}return K.isArray(e)?e.forEach(r):r(e),this}}Ae.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),K.freezeMethods(Ae.prototype),K.freezeMethods(Ae);const Re=Ae;function Te(e,t){const n=this||we,r=t||n,o=Re.from(r.headers);let s=r.data;return K.forEach(e,(function(e){s=e.call(n,s,o.normalize(),t?t.status:void 0)})),o.normalize(),s}function Ce(e){return!(!e||!e.__CANCEL__)}function ke(e,t,n){X.call(this,null==e?"canceled":e,X.ERR_CANCELED,t,n),this.name="CanceledError"}K.inherits(ke,X,{__CANCEL__:!0});const je=ke,Ne=me.isStandardBrowserEnv?{write:function(e,t,n,r,o,s){const i=[];i.push(e+"="+encodeURIComponent(t)),K.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),K.isString(r)&&i.push("path="+r),K.isString(o)&&i.push("domain="+o),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function Pe(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const _e=me.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=K.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0};function Le(e,t){let n=0;const r=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,s=0,i=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),u=r[i];o||(o=c),n[s]=a,r[s]=c;let l=i,d=0;for(;l!==s;)d+=n[l++],l%=e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),c-o<t)return;const f=u&&c-u;return f?Math.round(1e3*d/f):void 0}}(50,250);return o=>{const s=o.loaded,i=o.lengthComputable?o.total:void 0,a=s-n,c=r(a);n=s;const u={loaded:s,total:i,progress:i?s/i:void 0,bytes:a,rate:c||void 0,estimated:c&&i&&s<=i?(i-s)/c:void 0,event:o};u[t?"download":"upload"]=!0,e(u)}}const Be={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let r=e.data;const o=Re.from(e.headers).normalize(),s=e.responseType;let i;function a(){e.cancelToken&&e.cancelToken.unsubscribe(i),e.signal&&e.signal.removeEventListener("abort",i)}K.isFormData(r)&&(me.isStandardBrowserEnv||me.isStandardBrowserWebWorkerEnv)&&o.setContentType(!1);let c=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(t+":"+n))}const u=Pe(e.baseURL,e.url);function l(){if(!c)return;const r=Re.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders());!function(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new X("Request failed with status code "+n.status,[X.ERR_BAD_REQUEST,X.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}((function(e){t(e),a()}),(function(e){n(e),a()}),{data:s&&"text"!==s&&"json"!==s?c.response:c.responseText,status:c.status,statusText:c.statusText,headers:r,config:e,request:c}),c=null}if(c.open(e.method.toUpperCase(),ce(u,e.params,e.paramsSerializer),!0),c.timeout=e.timeout,"onloadend"in c?c.onloadend=l:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(l)},c.onabort=function(){c&&(n(new X("Request aborted",X.ECONNABORTED,e,c)),c=null)},c.onerror=function(){n(new X("Network Error",X.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const r=e.transitional||le;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new X(t,r.clarifyTimeoutError?X.ETIMEDOUT:X.ECONNABORTED,e,c)),c=null},me.isStandardBrowserEnv){const t=(e.withCredentials||_e(u))&&e.xsrfCookieName&&Ne.read(e.xsrfCookieName);t&&o.set(e.xsrfHeaderName,t)}void 0===r&&o.setContentType(null),"setRequestHeader"in c&&K.forEach(o.toJSON(),(function(e,t){c.setRequestHeader(t,e)})),K.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),s&&"json"!==s&&(c.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&c.addEventListener("progress",Le(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",Le(e.onUploadProgress)),(e.cancelToken||e.signal)&&(i=t=>{c&&(n(!t||t.type?new je(null,e,c):t),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(i),e.signal&&(e.signal.aborted?i():e.signal.addEventListener("abort",i)));const d=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(u);d&&-1===me.protocols.indexOf(d)?n(new X("Unsupported protocol "+d+":",X.ERR_BAD_REQUEST,e)):c.send(r||null)}))}};K.forEach(Be,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));function De(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new je(null,e)}function Ue(e){return De(e),e.headers=Re.from(e.headers),e.data=Te.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1),(e=>{e=K.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let o=0;o<t&&(n=e[o],!(r=K.isString(n)?Be[n.toLowerCase()]:n));o++);if(!r){if(!1===r)throw new X(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(K.hasOwnProp(Be,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!K.isFunction(r))throw new TypeError("adapter is not a function");return r})(e.adapter||we.adapter)(e).then((function(t){return De(e),t.data=Te.call(e,e.transformResponse,t),t.headers=Re.from(t.headers),t}),(function(t){return Ce(t)||(De(e),t&&t.response&&(t.response.data=Te.call(e,e.transformResponse,t.response),t.response.headers=Re.from(t.response.headers))),Promise.reject(t)}))}const Fe=e=>e instanceof Re?e.toJSON():e;function Ie(e,t){t=t||{};const n={};function r(e,t,n){return K.isPlainObject(e)&&K.isPlainObject(t)?K.merge.call({caseless:n},e,t):K.isPlainObject(t)?K.merge({},t):K.isArray(t)?t.slice():t}function o(e,t,n){return K.isUndefined(t)?K.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function s(e,t){if(!K.isUndefined(t))return r(void 0,t)}function i(e,t){return K.isUndefined(t)?K.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,o,s){return s in t?r(n,o):s in e?r(void 0,n):void 0}const c={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:a,headers:(e,t)=>o(Fe(e),Fe(t),!0)};return K.forEach(Object.keys(e).concat(Object.keys(t)),(function(r){const s=c[r]||o,i=s(e[r],t[r],r);K.isUndefined(i)&&s!==a||(n[r]=i)})),n}const Me={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{Me[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const ze={};Me.transitional=function(e,t,n){function r(e,t){return"[Axios v1.2.1] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,o,s)=>{if(!1===e)throw new X(r(o," has been removed"+(t?" in "+t:"")),X.ERR_DEPRECATED);return t&&!ze[o]&&(ze[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,s)}};const He={assertOptions:function(e,t,n){if("object"!=typeof e)throw new X("options must be an object",X.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],i=t[s];if(i){const t=e[s],n=void 0===t||i(t,s,e);if(!0!==n)throw new X("option "+s+" must be "+n,X.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new X("Unknown option "+s,X.ERR_BAD_OPTION)}},validators:Me},Je=He.validators;class qe{constructor(e){this.defaults=e,this.interceptors={request:new ue,response:new ue}}request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=Ie(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:o}=t;let s;void 0!==n&&He.assertOptions(n,{silentJSONParsing:Je.transitional(Je.boolean),forcedJSONParsing:Je.transitional(Je.boolean),clarifyTimeoutError:Je.transitional(Je.boolean)},!1),void 0!==r&&He.assertOptions(r,{encode:Je.function,serialize:Je.function},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase(),s=o&&K.merge(o.common,o[t.method]),s&&K.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=Re.concat(s,o);const i=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,i.unshift(e.fulfilled,e.rejected))}));const c=[];let u;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let l,d=0;if(!a){const e=[Ue.bind(this),void 0];for(e.unshift.apply(e,i),e.push.apply(e,c),l=e.length,u=Promise.resolve(t);d<l;)u=u.then(e[d++],e[d++]);return u}l=i.length;let f=t;for(d=0;d<l;){const e=i[d++],t=i[d++];try{f=e(f)}catch(e){t.call(this,e);break}}try{u=Ue.call(this,f)}catch(e){return Promise.reject(e)}for(d=0,l=c.length;d<l;)u=u.then(c[d++],c[d++]);return u}getUri(e){return ce(Pe((e=Ie(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}K.forEach(["delete","get","head","options"],(function(e){qe.prototype[e]=function(t,n){return this.request(Ie(n||{},{method:e,url:t,data:(n||{}).data}))}})),K.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(Ie(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}qe.prototype[e]=t(),qe.prototype[e+"Form"]=t(!0)}));const We=qe;class Ke{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,o){n.reason||(n.reason=new je(e,r,o),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new Ke((function(t){e=t})),cancel:e}}}const Ve=Ke,$e=function e(t){const n=new We(t),r=g(We.prototype.request,n);return K.extend(r,We.prototype,n,{allOwnKeys:!0}),K.extend(r,n,null,{allOwnKeys:!0}),r.create=function(n){return e(Ie(t,n))},r}(we);$e.Axios=We,$e.CanceledError=je,$e.CancelToken=Ve,$e.isCancel=Ce,$e.VERSION="1.2.1",$e.toFormData=ne,$e.AxiosError=X,$e.Cancel=$e.CanceledError,$e.all=function(e){return Promise.all(e)},$e.spread=function(e){return function(t){return e.apply(null,t)}},$e.isAxiosError=function(e){return K.isObject(e)&&!0===e.isAxiosError},$e.mergeConfig=Ie,$e.AxiosHeaders=Re,$e.formToJSON=e=>ge(K.isHTMLForm(e)?new FormData(e):e),$e.default=$e;const Ze=$e;let Xe="";class Ge extends HTMLElement{}customElements.define("poke-image",Ge),document.getElementById("form").addEventListener("submit",(function(e){e.preventDefault();const t=document.getElementById("poke-input"),n=t.value.toLowerCase();t.innerText="",Ze.get(`https://pokeapi.co/api/v2/pokemon/${n}`).then((e=>e.data)).then((e=>function(e){const t=document.getElementById("poke-info");t.innerHTML="",Xe&&t.classList.remove(Xe);let n=e.types[0].type.name;Xe=n,t.classList.add(n);const r=document.createElement("h4"),o=document.createElement("h4"),s=document.createElement("poke-image"),i=document.createElement("h3");r.classList.add("poke-id"),e.id<10?r.innerText="#00":e.id<100?r.innerText="#0":r.innerText="#",r.innerText+=`${e.id}`,i.innerText=m(e.name),s.innerHTML=`\n  <img src=${e.sprites.front_default} width="250em">\n  `,console.log(e),o.innerText="Types : ";for(let t=0;t<e.types.length;t++)o.innerText+=m(e.types[t].type.name),t!=e.types.length-1&&(o.innerText+=", ");t.appendChild(r),t.appendChild(s),t.appendChild(i),t.appendChild(o);const a=function(e){const t=document.createElement("div"),n=document.createElement("div");t.classList.add("poke-misc"),n.classList.add("poke-miscHW"),n.classList.add("flex");const r=document.createElement("p"),o=document.createElement("p"),s=parseInt(e.height)/10,i=parseInt(e.weight)/10;r.innerText=`Height : ${s} m`,o.innerText=`Weight : ${i} kg`,n.appendChild(r),n.appendChild(o);const a=function(e,t,n,r,o,s){const i=document.createElement("div");i.classList.add("stats-bar-container"),i.classList.add("flex");const a=(e,t)=>{const n=document.createElement("div"),r=document.createElement("div"),o=document.createElement("div"),s=document.createElement("p");return r.classList.add("bar-container"),o.classList.add("bar-stat"),s.innerText=t,o.style.width=parseInt(e)/255*100+"%",r.appendChild(o),r.style.marginTop="2px",n.appendChild(s),n.appendChild(r),n.style.textAlign="left",i.appendChild(n)};return a(e,"HP"),a(t,"Defense"),a(n,"Attack"),a(r,"SP Attack"),a(o,"SP Defense"),a(s,"Speed"),i}(e.stats[0].base_stat,e.stats[1].base_stat,e.stats[2].base_stat,e.stats[3].base_stat,e.stats[4].base_stat,e.stats[5].base_stat);return t.appendChild(n),t.appendChild(a),t}(e);t.appendChild(a)}(e))).catch((e=>console.log(e)))})),document.addEventListener("DOMContentLoaded",(function(){}))})()})();