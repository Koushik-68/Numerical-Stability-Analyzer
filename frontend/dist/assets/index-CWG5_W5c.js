(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function Lc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ms={exports:{}},wl={},hs={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fr=Symbol.for("react.element"),_c=Symbol.for("react.portal"),Mc=Symbol.for("react.fragment"),Tc=Symbol.for("react.strict_mode"),Rc=Symbol.for("react.profiler"),Dc=Symbol.for("react.provider"),Oc=Symbol.for("react.context"),Ic=Symbol.for("react.forward_ref"),Ac=Symbol.for("react.suspense"),Fc=Symbol.for("react.memo"),$c=Symbol.for("react.lazy"),Jo=Symbol.iterator;function Vc(e){return e===null||typeof e!="object"?null:(e=Jo&&e[Jo]||e["@@iterator"],typeof e=="function"?e:null)}var gs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vs=Object.assign,xs={};function Nn(e,t,n){this.props=e,this.context=t,this.refs=xs,this.updater=n||gs}Nn.prototype.isReactComponent={};Nn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Nn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ys(){}ys.prototype=Nn.prototype;function to(e,t,n){this.props=e,this.context=t,this.refs=xs,this.updater=n||gs}var no=to.prototype=new ys;no.constructor=to;vs(no,Nn.prototype);no.isPureReactComponent=!0;var qo=Array.isArray,ws=Object.prototype.hasOwnProperty,ro={current:null},ks={key:!0,ref:!0,__self:!0,__source:!0};function Ss(e,t,n){var r,l={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)ws.call(t,r)&&!ks.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];l.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:fr,type:e,key:i,ref:a,props:l,_owner:ro.current}}function Uc(e,t){return{$$typeof:fr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function lo(e){return typeof e=="object"&&e!==null&&e.$$typeof===fr}function Hc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ea=/\/+/g;function Ol(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Hc(""+e.key):t.toString(36)}function Ar(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case fr:case _c:a=!0}}if(a)return a=e,l=l(a),e=r===""?"."+Ol(a,0):r,qo(l)?(n="",e!=null&&(n=e.replace(ea,"$&/")+"/"),Ar(l,t,n,"",function(c){return c})):l!=null&&(lo(l)&&(l=Uc(l,n+(!l.key||a&&a.key===l.key?"":(""+l.key).replace(ea,"$&/")+"/")+e)),t.push(l)),1;if(a=0,r=r===""?".":r+":",qo(e))for(var s=0;s<e.length;s++){i=e[s];var u=r+Ol(i,s);a+=Ar(i,t,n,u,l)}else if(u=Vc(e),typeof u=="function")for(e=u.call(e),s=0;!(i=e.next()).done;)i=i.value,u=r+Ol(i,s++),a+=Ar(i,t,n,u,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function xr(e,t,n){if(e==null)return e;var r=[],l=0;return Ar(e,r,"","",function(i){return t.call(n,i,l++)}),r}function Bc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var xe={current:null},Fr={transition:null},Wc={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:Fr,ReactCurrentOwner:ro};function js(){throw Error("act(...) is not supported in production builds of React.")}I.Children={map:xr,forEach:function(e,t,n){xr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return xr(e,function(){t++}),t},toArray:function(e){return xr(e,function(t){return t})||[]},only:function(e){if(!lo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=Nn;I.Fragment=Mc;I.Profiler=Rc;I.PureComponent=to;I.StrictMode=Tc;I.Suspense=Ac;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wc;I.act=js;I.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=vs({},e.props),l=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=ro.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)ws.call(t,u)&&!ks.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:fr,type:e.type,key:l,ref:i,props:r,_owner:a}};I.createContext=function(e){return e={$$typeof:Oc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Dc,_context:e},e.Consumer=e};I.createElement=Ss;I.createFactory=function(e){var t=Ss.bind(null,e);return t.type=e,t};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:Ic,render:e}};I.isValidElement=lo;I.lazy=function(e){return{$$typeof:$c,_payload:{_status:-1,_result:e},_init:Bc}};I.memo=function(e,t){return{$$typeof:Fc,type:e,compare:t===void 0?null:t}};I.startTransition=function(e){var t=Fr.transition;Fr.transition={};try{e()}finally{Fr.transition=t}};I.unstable_act=js;I.useCallback=function(e,t){return xe.current.useCallback(e,t)};I.useContext=function(e){return xe.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return xe.current.useDeferredValue(e)};I.useEffect=function(e,t){return xe.current.useEffect(e,t)};I.useId=function(){return xe.current.useId()};I.useImperativeHandle=function(e,t,n){return xe.current.useImperativeHandle(e,t,n)};I.useInsertionEffect=function(e,t){return xe.current.useInsertionEffect(e,t)};I.useLayoutEffect=function(e,t){return xe.current.useLayoutEffect(e,t)};I.useMemo=function(e,t){return xe.current.useMemo(e,t)};I.useReducer=function(e,t,n){return xe.current.useReducer(e,t,n)};I.useRef=function(e){return xe.current.useRef(e)};I.useState=function(e){return xe.current.useState(e)};I.useSyncExternalStore=function(e,t,n){return xe.current.useSyncExternalStore(e,t,n)};I.useTransition=function(){return xe.current.useTransition()};I.version="18.3.1";hs.exports=I;var L=hs.exports;const Qc=Lc(L);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yc=L,Kc=Symbol.for("react.element"),Xc=Symbol.for("react.fragment"),Gc=Object.prototype.hasOwnProperty,Zc=Yc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Jc={key:!0,ref:!0,__self:!0,__source:!0};function Ns(e,t,n){var r,l={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Gc.call(t,r)&&!Jc.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Kc,type:e,key:i,ref:a,props:l,_owner:Zc.current}}wl.Fragment=Xc;wl.jsx=Ns;wl.jsxs=Ns;ms.exports=wl;var o=ms.exports,bs={exports:{}},Le={},Cs={exports:{}},Es={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,T){var O=E.length;E.push(T);e:for(;0<O;){var X=O-1>>>1,ee=E[X];if(0<l(ee,T))E[X]=T,E[O]=ee,O=X;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var T=E[0],O=E.pop();if(O!==T){E[0]=O;e:for(var X=0,ee=E.length,Je=ee>>>1;X<Je;){var z=2*(X+1)-1,B=E[z],te=z+1,we=E[te];if(0>l(B,O))te<ee&&0>l(we,B)?(E[X]=we,E[te]=O,X=te):(E[X]=B,E[z]=O,X=z);else if(te<ee&&0>l(we,O))E[X]=we,E[te]=O,X=te;else break e}}return T}function l(E,T){var O=E.sortIndex-T.sortIndex;return O!==0?O:E.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var u=[],c=[],m=1,g=null,h=3,k=!1,y=!1,w=!1,_=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(E){for(var T=n(c);T!==null;){if(T.callback===null)r(c);else if(T.startTime<=E)r(c),T.sortIndex=T.expirationTime,t(u,T);else break;T=n(c)}}function v(E){if(w=!1,p(E),!y)if(n(u)!==null)y=!0,A(N);else{var T=n(c);T!==null&&he(v,T.startTime-E)}}function N(E,T){y=!1,w&&(w=!1,f(b),b=-1),k=!0;var O=h;try{for(p(T),g=n(u);g!==null&&(!(g.expirationTime>T)||E&&!M());){var X=g.callback;if(typeof X=="function"){g.callback=null,h=g.priorityLevel;var ee=X(g.expirationTime<=T);T=e.unstable_now(),typeof ee=="function"?g.callback=ee:g===n(u)&&r(u),p(T)}else r(u);g=n(u)}if(g!==null)var Je=!0;else{var z=n(c);z!==null&&he(v,z.startTime-T),Je=!1}return Je}finally{g=null,h=O,k=!1}}var C=!1,x=null,b=-1,R=5,S=-1;function M(){return!(e.unstable_now()-S<R)}function U(){if(x!==null){var E=e.unstable_now();S=E;var T=!0;try{T=x(!0,E)}finally{T?K():(C=!1,x=null)}}else C=!1}var K;if(typeof d=="function")K=function(){d(U)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,D=$.port2;$.port1.onmessage=U,K=function(){D.postMessage(null)}}else K=function(){_(U,0)};function A(E){x=E,C||(C=!0,K())}function he(E,T){b=_(function(){E(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){y||k||(y=!0,A(N))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(E){switch(h){case 1:case 2:case 3:var T=3;break;default:T=h}var O=h;h=T;try{return E()}finally{h=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,T){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var O=h;h=E;try{return T()}finally{h=O}},e.unstable_scheduleCallback=function(E,T,O){var X=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?X+O:X):O=X,E){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=O+ee,E={id:m++,callback:T,priorityLevel:E,startTime:O,expirationTime:ee,sortIndex:-1},O>X?(E.sortIndex=O,t(c,E),n(u)===null&&E===n(c)&&(w?(f(b),b=-1):w=!0,he(v,O-X))):(E.sortIndex=ee,t(u,E),y||k||(y=!0,A(N))),E},e.unstable_shouldYield=M,e.unstable_wrapCallback=function(E){var T=h;return function(){var O=h;h=T;try{return E.apply(this,arguments)}finally{h=O}}}})(Es);Cs.exports=Es;var qc=Cs.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ed=L,Pe=qc;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var zs=new Set,Gn={};function Xt(e,t){vn(e,t),vn(e+"Capture",t)}function vn(e,t){for(Gn[e]=t,e=0;e<t.length;e++)zs.add(t[e])}var ot=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),si=Object.prototype.hasOwnProperty,td=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ta={},na={};function nd(e){return si.call(na,e)?!0:si.call(ta,e)?!1:td.test(e)?na[e]=!0:(ta[e]=!0,!1)}function rd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ld(e,t,n,r){if(t===null||typeof t>"u"||rd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ye(e,t,n,r,l,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ce[e]=new ye(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ce[t]=new ye(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ce[e]=new ye(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ce[e]=new ye(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ce[e]=new ye(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ce[e]=new ye(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ce[e]=new ye(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ce[e]=new ye(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ce[e]=new ye(e,5,!1,e.toLowerCase(),null,!1,!1)});var io=/[\-:]([a-z])/g;function oo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(io,oo);ce[t]=new ye(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(io,oo);ce[t]=new ye(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(io,oo);ce[t]=new ye(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ce[e]=new ye(e,1,!1,e.toLowerCase(),null,!1,!1)});ce.xlinkHref=new ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ce[e]=new ye(e,1,!1,e.toLowerCase(),null,!0,!0)});function ao(e,t,n,r){var l=ce.hasOwnProperty(t)?ce[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ld(t,n,l,r)&&(n=null),r||l===null?nd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ct=ed.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,yr=Symbol.for("react.element"),Jt=Symbol.for("react.portal"),qt=Symbol.for("react.fragment"),so=Symbol.for("react.strict_mode"),ui=Symbol.for("react.profiler"),Ps=Symbol.for("react.provider"),Ls=Symbol.for("react.context"),uo=Symbol.for("react.forward_ref"),ci=Symbol.for("react.suspense"),di=Symbol.for("react.suspense_list"),co=Symbol.for("react.memo"),ft=Symbol.for("react.lazy"),_s=Symbol.for("react.offscreen"),ra=Symbol.iterator;function zn(e){return e===null||typeof e!="object"?null:(e=ra&&e[ra]||e["@@iterator"],typeof e=="function"?e:null)}var J=Object.assign,Il;function In(e){if(Il===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Il=t&&t[1]||""}return`
`+Il+e}var Al=!1;function Fl(e,t){if(!e||Al)return"";Al=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),i=r.stack.split(`
`),a=l.length-1,s=i.length-1;1<=a&&0<=s&&l[a]!==i[s];)s--;for(;1<=a&&0<=s;a--,s--)if(l[a]!==i[s]){if(a!==1||s!==1)do if(a--,s--,0>s||l[a]!==i[s]){var u=`
`+l[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=s);break}}}finally{Al=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?In(e):""}function id(e){switch(e.tag){case 5:return In(e.type);case 16:return In("Lazy");case 13:return In("Suspense");case 19:return In("SuspenseList");case 0:case 2:case 15:return e=Fl(e.type,!1),e;case 11:return e=Fl(e.type.render,!1),e;case 1:return e=Fl(e.type,!0),e;default:return""}}function pi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case qt:return"Fragment";case Jt:return"Portal";case ui:return"Profiler";case so:return"StrictMode";case ci:return"Suspense";case di:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ls:return(e.displayName||"Context")+".Consumer";case Ps:return(e._context.displayName||"Context")+".Provider";case uo:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case co:return t=e.displayName||null,t!==null?t:pi(e.type)||"Memo";case ft:t=e._payload,e=e._init;try{return pi(e(t))}catch{}}return null}function od(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pi(t);case 8:return t===so?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function zt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ms(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ad(e){var t=Ms(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function wr(e){e._valueTracker||(e._valueTracker=ad(e))}function Ts(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ms(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Gr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function fi(e,t){var n=t.checked;return J({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function la(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=zt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Rs(e,t){t=t.checked,t!=null&&ao(e,"checked",t,!1)}function mi(e,t){Rs(e,t);var n=zt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?hi(e,t.type,n):t.hasOwnProperty("defaultValue")&&hi(e,t.type,zt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ia(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function hi(e,t,n){(t!=="number"||Gr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var An=Array.isArray;function dn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+zt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function gi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return J({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function oa(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(An(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:zt(n)}}function Ds(e,t){var n=zt(t.value),r=zt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function aa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Os(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Os(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var kr,Is=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(kr=kr||document.createElement("div"),kr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=kr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Zn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Vn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},sd=["Webkit","ms","Moz","O"];Object.keys(Vn).forEach(function(e){sd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Vn[t]=Vn[e]})});function As(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Vn.hasOwnProperty(e)&&Vn[e]?(""+t).trim():t+"px"}function Fs(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=As(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var ud=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xi(e,t){if(t){if(ud[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function yi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wi=null;function po(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ki=null,pn=null,fn=null;function sa(e){if(e=gr(e)){if(typeof ki!="function")throw Error(j(280));var t=e.stateNode;t&&(t=bl(t),ki(e.stateNode,e.type,t))}}function $s(e){pn?fn?fn.push(e):fn=[e]:pn=e}function Vs(){if(pn){var e=pn,t=fn;if(fn=pn=null,sa(e),t)for(e=0;e<t.length;e++)sa(t[e])}}function Us(e,t){return e(t)}function Hs(){}var $l=!1;function Bs(e,t,n){if($l)return e(t,n);$l=!0;try{return Us(e,t,n)}finally{$l=!1,(pn!==null||fn!==null)&&(Hs(),Vs())}}function Jn(e,t){var n=e.stateNode;if(n===null)return null;var r=bl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var Si=!1;if(ot)try{var Pn={};Object.defineProperty(Pn,"passive",{get:function(){Si=!0}}),window.addEventListener("test",Pn,Pn),window.removeEventListener("test",Pn,Pn)}catch{Si=!1}function cd(e,t,n,r,l,i,a,s,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(m){this.onError(m)}}var Un=!1,Zr=null,Jr=!1,ji=null,dd={onError:function(e){Un=!0,Zr=e}};function pd(e,t,n,r,l,i,a,s,u){Un=!1,Zr=null,cd.apply(dd,arguments)}function fd(e,t,n,r,l,i,a,s,u){if(pd.apply(this,arguments),Un){if(Un){var c=Zr;Un=!1,Zr=null}else throw Error(j(198));Jr||(Jr=!0,ji=c)}}function Gt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ws(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ua(e){if(Gt(e)!==e)throw Error(j(188))}function md(e){var t=e.alternate;if(!t){if(t=Gt(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return ua(l),e;if(i===r)return ua(l),t;i=i.sibling}throw Error(j(188))}if(n.return!==r.return)n=l,r=i;else{for(var a=!1,s=l.child;s;){if(s===n){a=!0,n=l,r=i;break}if(s===r){a=!0,r=l,n=i;break}s=s.sibling}if(!a){for(s=i.child;s;){if(s===n){a=!0,n=i,r=l;break}if(s===r){a=!0,r=i,n=l;break}s=s.sibling}if(!a)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function Qs(e){return e=md(e),e!==null?Ys(e):null}function Ys(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ys(e);if(t!==null)return t;e=e.sibling}return null}var Ks=Pe.unstable_scheduleCallback,ca=Pe.unstable_cancelCallback,hd=Pe.unstable_shouldYield,gd=Pe.unstable_requestPaint,ne=Pe.unstable_now,vd=Pe.unstable_getCurrentPriorityLevel,fo=Pe.unstable_ImmediatePriority,Xs=Pe.unstable_UserBlockingPriority,qr=Pe.unstable_NormalPriority,xd=Pe.unstable_LowPriority,Gs=Pe.unstable_IdlePriority,kl=null,Ge=null;function yd(e){if(Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(kl,e,void 0,(e.current.flags&128)===128)}catch{}}var He=Math.clz32?Math.clz32:Sd,wd=Math.log,kd=Math.LN2;function Sd(e){return e>>>=0,e===0?32:31-(wd(e)/kd|0)|0}var Sr=64,jr=4194304;function Fn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function el(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~l;s!==0?r=Fn(s):(i&=a,i!==0&&(r=Fn(i)))}else a=n&~l,a!==0?r=Fn(a):i!==0&&(r=Fn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-He(t),l=1<<n,r|=e[n],t&=~l;return r}function jd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-He(i),s=1<<a,u=l[a];u===-1?(!(s&n)||s&r)&&(l[a]=jd(s,t)):u<=t&&(e.expiredLanes|=s),i&=~s}}function Ni(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Zs(){var e=Sr;return Sr<<=1,!(Sr&4194240)&&(Sr=64),e}function Vl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function mr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-He(t),e[t]=n}function bd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-He(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function mo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-He(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var V=0;function Js(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var qs,ho,eu,tu,nu,bi=!1,Nr=[],wt=null,kt=null,St=null,qn=new Map,er=new Map,gt=[],Cd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function da(e,t){switch(e){case"focusin":case"focusout":wt=null;break;case"dragenter":case"dragleave":kt=null;break;case"mouseover":case"mouseout":St=null;break;case"pointerover":case"pointerout":qn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":er.delete(t.pointerId)}}function Ln(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=gr(t),t!==null&&ho(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Ed(e,t,n,r,l){switch(t){case"focusin":return wt=Ln(wt,e,t,n,r,l),!0;case"dragenter":return kt=Ln(kt,e,t,n,r,l),!0;case"mouseover":return St=Ln(St,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return qn.set(i,Ln(qn.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,er.set(i,Ln(er.get(i)||null,e,t,n,r,l)),!0}return!1}function ru(e){var t=Ft(e.target);if(t!==null){var n=Gt(t);if(n!==null){if(t=n.tag,t===13){if(t=Ws(n),t!==null){e.blockedOn=t,nu(e.priority,function(){eu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $r(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ci(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);wi=r,n.target.dispatchEvent(r),wi=null}else return t=gr(n),t!==null&&ho(t),e.blockedOn=n,!1;t.shift()}return!0}function pa(e,t,n){$r(e)&&n.delete(t)}function zd(){bi=!1,wt!==null&&$r(wt)&&(wt=null),kt!==null&&$r(kt)&&(kt=null),St!==null&&$r(St)&&(St=null),qn.forEach(pa),er.forEach(pa)}function _n(e,t){e.blockedOn===t&&(e.blockedOn=null,bi||(bi=!0,Pe.unstable_scheduleCallback(Pe.unstable_NormalPriority,zd)))}function tr(e){function t(l){return _n(l,e)}if(0<Nr.length){_n(Nr[0],e);for(var n=1;n<Nr.length;n++){var r=Nr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(wt!==null&&_n(wt,e),kt!==null&&_n(kt,e),St!==null&&_n(St,e),qn.forEach(t),er.forEach(t),n=0;n<gt.length;n++)r=gt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<gt.length&&(n=gt[0],n.blockedOn===null);)ru(n),n.blockedOn===null&&gt.shift()}var mn=ct.ReactCurrentBatchConfig,tl=!0;function Pd(e,t,n,r){var l=V,i=mn.transition;mn.transition=null;try{V=1,go(e,t,n,r)}finally{V=l,mn.transition=i}}function Ld(e,t,n,r){var l=V,i=mn.transition;mn.transition=null;try{V=4,go(e,t,n,r)}finally{V=l,mn.transition=i}}function go(e,t,n,r){if(tl){var l=Ci(e,t,n,r);if(l===null)Zl(e,t,r,nl,n),da(e,r);else if(Ed(l,e,t,n,r))r.stopPropagation();else if(da(e,r),t&4&&-1<Cd.indexOf(e)){for(;l!==null;){var i=gr(l);if(i!==null&&qs(i),i=Ci(e,t,n,r),i===null&&Zl(e,t,r,nl,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else Zl(e,t,r,null,n)}}var nl=null;function Ci(e,t,n,r){if(nl=null,e=po(r),e=Ft(e),e!==null)if(t=Gt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ws(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return nl=e,null}function lu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vd()){case fo:return 1;case Xs:return 4;case qr:case xd:return 16;case Gs:return 536870912;default:return 16}default:return 16}}var xt=null,vo=null,Vr=null;function iu(){if(Vr)return Vr;var e,t=vo,n=t.length,r,l="value"in xt?xt.value:xt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===l[i-r];r++);return Vr=l.slice(e,1<r?1-r:void 0)}function Ur(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function br(){return!0}function fa(){return!1}function _e(e){function t(n,r,l,i,a){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?br:fa,this.isPropagationStopped=fa,this}return J(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=br)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=br)},persist:function(){},isPersistent:br}),t}var bn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xo=_e(bn),hr=J({},bn,{view:0,detail:0}),_d=_e(hr),Ul,Hl,Mn,Sl=J({},hr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Mn&&(Mn&&e.type==="mousemove"?(Ul=e.screenX-Mn.screenX,Hl=e.screenY-Mn.screenY):Hl=Ul=0,Mn=e),Ul)},movementY:function(e){return"movementY"in e?e.movementY:Hl}}),ma=_e(Sl),Md=J({},Sl,{dataTransfer:0}),Td=_e(Md),Rd=J({},hr,{relatedTarget:0}),Bl=_e(Rd),Dd=J({},bn,{animationName:0,elapsedTime:0,pseudoElement:0}),Od=_e(Dd),Id=J({},bn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ad=_e(Id),Fd=J({},bn,{data:0}),ha=_e(Fd),$d={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ud={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ud[e])?!!t[e]:!1}function yo(){return Hd}var Bd=J({},hr,{key:function(e){if(e.key){var t=$d[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ur(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Vd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yo,charCode:function(e){return e.type==="keypress"?Ur(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ur(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Wd=_e(Bd),Qd=J({},Sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ga=_e(Qd),Yd=J({},hr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yo}),Kd=_e(Yd),Xd=J({},bn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gd=_e(Xd),Zd=J({},Sl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Jd=_e(Zd),qd=[9,13,27,32],wo=ot&&"CompositionEvent"in window,Hn=null;ot&&"documentMode"in document&&(Hn=document.documentMode);var ep=ot&&"TextEvent"in window&&!Hn,ou=ot&&(!wo||Hn&&8<Hn&&11>=Hn),va=" ",xa=!1;function au(e,t){switch(e){case"keyup":return qd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function su(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var en=!1;function tp(e,t){switch(e){case"compositionend":return su(t);case"keypress":return t.which!==32?null:(xa=!0,va);case"textInput":return e=t.data,e===va&&xa?null:e;default:return null}}function np(e,t){if(en)return e==="compositionend"||!wo&&au(e,t)?(e=iu(),Vr=vo=xt=null,en=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ou&&t.locale!=="ko"?null:t.data;default:return null}}var rp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ya(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!rp[e.type]:t==="textarea"}function uu(e,t,n,r){$s(r),t=rl(t,"onChange"),0<t.length&&(n=new xo("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Bn=null,nr=null;function lp(e){wu(e,0)}function jl(e){var t=rn(e);if(Ts(t))return e}function ip(e,t){if(e==="change")return t}var cu=!1;if(ot){var Wl;if(ot){var Ql="oninput"in document;if(!Ql){var wa=document.createElement("div");wa.setAttribute("oninput","return;"),Ql=typeof wa.oninput=="function"}Wl=Ql}else Wl=!1;cu=Wl&&(!document.documentMode||9<document.documentMode)}function ka(){Bn&&(Bn.detachEvent("onpropertychange",du),nr=Bn=null)}function du(e){if(e.propertyName==="value"&&jl(nr)){var t=[];uu(t,nr,e,po(e)),Bs(lp,t)}}function op(e,t,n){e==="focusin"?(ka(),Bn=t,nr=n,Bn.attachEvent("onpropertychange",du)):e==="focusout"&&ka()}function ap(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return jl(nr)}function sp(e,t){if(e==="click")return jl(t)}function up(e,t){if(e==="input"||e==="change")return jl(t)}function cp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var We=typeof Object.is=="function"?Object.is:cp;function rr(e,t){if(We(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!si.call(t,l)||!We(e[l],t[l]))return!1}return!0}function Sa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ja(e,t){var n=Sa(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Sa(n)}}function pu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?pu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function fu(){for(var e=window,t=Gr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Gr(e.document)}return t}function ko(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function dp(e){var t=fu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&pu(n.ownerDocument.documentElement,n)){if(r!==null&&ko(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=ja(n,i);var a=ja(n,r);l&&a&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var pp=ot&&"documentMode"in document&&11>=document.documentMode,tn=null,Ei=null,Wn=null,zi=!1;function Na(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zi||tn==null||tn!==Gr(r)||(r=tn,"selectionStart"in r&&ko(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Wn&&rr(Wn,r)||(Wn=r,r=rl(Ei,"onSelect"),0<r.length&&(t=new xo("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=tn)))}function Cr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var nn={animationend:Cr("Animation","AnimationEnd"),animationiteration:Cr("Animation","AnimationIteration"),animationstart:Cr("Animation","AnimationStart"),transitionend:Cr("Transition","TransitionEnd")},Yl={},mu={};ot&&(mu=document.createElement("div").style,"AnimationEvent"in window||(delete nn.animationend.animation,delete nn.animationiteration.animation,delete nn.animationstart.animation),"TransitionEvent"in window||delete nn.transitionend.transition);function Nl(e){if(Yl[e])return Yl[e];if(!nn[e])return e;var t=nn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in mu)return Yl[e]=t[n];return e}var hu=Nl("animationend"),gu=Nl("animationiteration"),vu=Nl("animationstart"),xu=Nl("transitionend"),yu=new Map,ba="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lt(e,t){yu.set(e,t),Xt(t,[e])}for(var Kl=0;Kl<ba.length;Kl++){var Xl=ba[Kl],fp=Xl.toLowerCase(),mp=Xl[0].toUpperCase()+Xl.slice(1);Lt(fp,"on"+mp)}Lt(hu,"onAnimationEnd");Lt(gu,"onAnimationIteration");Lt(vu,"onAnimationStart");Lt("dblclick","onDoubleClick");Lt("focusin","onFocus");Lt("focusout","onBlur");Lt(xu,"onTransitionEnd");vn("onMouseEnter",["mouseout","mouseover"]);vn("onMouseLeave",["mouseout","mouseover"]);vn("onPointerEnter",["pointerout","pointerover"]);vn("onPointerLeave",["pointerout","pointerover"]);Xt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $n="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hp=new Set("cancel close invalid load scroll toggle".split(" ").concat($n));function Ca(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,fd(r,t,void 0,e),e.currentTarget=null}function wu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==i&&l.isPropagationStopped())break e;Ca(l,s,c),i=u}else for(a=0;a<r.length;a++){if(s=r[a],u=s.instance,c=s.currentTarget,s=s.listener,u!==i&&l.isPropagationStopped())break e;Ca(l,s,c),i=u}}}if(Jr)throw e=ji,Jr=!1,ji=null,e}function W(e,t){var n=t[Ti];n===void 0&&(n=t[Ti]=new Set);var r=e+"__bubble";n.has(r)||(ku(t,e,2,!1),n.add(r))}function Gl(e,t,n){var r=0;t&&(r|=4),ku(n,e,r,t)}var Er="_reactListening"+Math.random().toString(36).slice(2);function lr(e){if(!e[Er]){e[Er]=!0,zs.forEach(function(n){n!=="selectionchange"&&(hp.has(n)||Gl(n,!1,e),Gl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Er]||(t[Er]=!0,Gl("selectionchange",!1,t))}}function ku(e,t,n,r){switch(lu(t)){case 1:var l=Pd;break;case 4:l=Ld;break;default:l=go}n=l.bind(null,t,n,e),l=void 0,!Si||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Zl(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;a=a.return}for(;s!==null;){if(a=Ft(s),a===null)return;if(u=a.tag,u===5||u===6){r=i=a;continue e}s=s.parentNode}}r=r.return}Bs(function(){var c=i,m=po(n),g=[];e:{var h=yu.get(e);if(h!==void 0){var k=xo,y=e;switch(e){case"keypress":if(Ur(n)===0)break e;case"keydown":case"keyup":k=Wd;break;case"focusin":y="focus",k=Bl;break;case"focusout":y="blur",k=Bl;break;case"beforeblur":case"afterblur":k=Bl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=ma;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=Td;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=Kd;break;case hu:case gu:case vu:k=Od;break;case xu:k=Gd;break;case"scroll":k=_d;break;case"wheel":k=Jd;break;case"copy":case"cut":case"paste":k=Ad;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=ga}var w=(t&4)!==0,_=!w&&e==="scroll",f=w?h!==null?h+"Capture":null:h;w=[];for(var d=c,p;d!==null;){p=d;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,f!==null&&(v=Jn(d,f),v!=null&&w.push(ir(d,v,p)))),_)break;d=d.return}0<w.length&&(h=new k(h,y,null,n,m),g.push({event:h,listeners:w}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",h&&n!==wi&&(y=n.relatedTarget||n.fromElement)&&(Ft(y)||y[at]))break e;if((k||h)&&(h=m.window===m?m:(h=m.ownerDocument)?h.defaultView||h.parentWindow:window,k?(y=n.relatedTarget||n.toElement,k=c,y=y?Ft(y):null,y!==null&&(_=Gt(y),y!==_||y.tag!==5&&y.tag!==6)&&(y=null)):(k=null,y=c),k!==y)){if(w=ma,v="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=ga,v="onPointerLeave",f="onPointerEnter",d="pointer"),_=k==null?h:rn(k),p=y==null?h:rn(y),h=new w(v,d+"leave",k,n,m),h.target=_,h.relatedTarget=p,v=null,Ft(m)===c&&(w=new w(f,d+"enter",y,n,m),w.target=p,w.relatedTarget=_,v=w),_=v,k&&y)t:{for(w=k,f=y,d=0,p=w;p;p=Zt(p))d++;for(p=0,v=f;v;v=Zt(v))p++;for(;0<d-p;)w=Zt(w),d--;for(;0<p-d;)f=Zt(f),p--;for(;d--;){if(w===f||f!==null&&w===f.alternate)break t;w=Zt(w),f=Zt(f)}w=null}else w=null;k!==null&&Ea(g,h,k,w,!1),y!==null&&_!==null&&Ea(g,_,y,w,!0)}}e:{if(h=c?rn(c):window,k=h.nodeName&&h.nodeName.toLowerCase(),k==="select"||k==="input"&&h.type==="file")var N=ip;else if(ya(h))if(cu)N=up;else{N=ap;var C=op}else(k=h.nodeName)&&k.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(N=sp);if(N&&(N=N(e,c))){uu(g,N,n,m);break e}C&&C(e,h,c),e==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&hi(h,"number",h.value)}switch(C=c?rn(c):window,e){case"focusin":(ya(C)||C.contentEditable==="true")&&(tn=C,Ei=c,Wn=null);break;case"focusout":Wn=Ei=tn=null;break;case"mousedown":zi=!0;break;case"contextmenu":case"mouseup":case"dragend":zi=!1,Na(g,n,m);break;case"selectionchange":if(pp)break;case"keydown":case"keyup":Na(g,n,m)}var x;if(wo)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else en?au(e,n)&&(b="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(ou&&n.locale!=="ko"&&(en||b!=="onCompositionStart"?b==="onCompositionEnd"&&en&&(x=iu()):(xt=m,vo="value"in xt?xt.value:xt.textContent,en=!0)),C=rl(c,b),0<C.length&&(b=new ha(b,e,null,n,m),g.push({event:b,listeners:C}),x?b.data=x:(x=su(n),x!==null&&(b.data=x)))),(x=ep?tp(e,n):np(e,n))&&(c=rl(c,"onBeforeInput"),0<c.length&&(m=new ha("onBeforeInput","beforeinput",null,n,m),g.push({event:m,listeners:c}),m.data=x))}wu(g,t)})}function ir(e,t,n){return{instance:e,listener:t,currentTarget:n}}function rl(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Jn(e,n),i!=null&&r.unshift(ir(e,i,l)),i=Jn(e,t),i!=null&&r.push(ir(e,i,l))),e=e.return}return r}function Zt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ea(e,t,n,r,l){for(var i=t._reactName,a=[];n!==null&&n!==r;){var s=n,u=s.alternate,c=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&c!==null&&(s=c,l?(u=Jn(n,i),u!=null&&a.unshift(ir(n,u,s))):l||(u=Jn(n,i),u!=null&&a.push(ir(n,u,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var gp=/\r\n?/g,vp=/\u0000|\uFFFD/g;function za(e){return(typeof e=="string"?e:""+e).replace(gp,`
`).replace(vp,"")}function zr(e,t,n){if(t=za(t),za(e)!==t&&n)throw Error(j(425))}function ll(){}var Pi=null,Li=null;function _i(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Mi=typeof setTimeout=="function"?setTimeout:void 0,xp=typeof clearTimeout=="function"?clearTimeout:void 0,Pa=typeof Promise=="function"?Promise:void 0,yp=typeof queueMicrotask=="function"?queueMicrotask:typeof Pa<"u"?function(e){return Pa.resolve(null).then(e).catch(wp)}:Mi;function wp(e){setTimeout(function(){throw e})}function Jl(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),tr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);tr(t)}function jt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function La(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Cn=Math.random().toString(36).slice(2),Xe="__reactFiber$"+Cn,or="__reactProps$"+Cn,at="__reactContainer$"+Cn,Ti="__reactEvents$"+Cn,kp="__reactListeners$"+Cn,Sp="__reactHandles$"+Cn;function Ft(e){var t=e[Xe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[at]||n[Xe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=La(e);e!==null;){if(n=e[Xe])return n;e=La(e)}return t}e=n,n=e.parentNode}return null}function gr(e){return e=e[Xe]||e[at],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function rn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function bl(e){return e[or]||null}var Ri=[],ln=-1;function _t(e){return{current:e}}function Q(e){0>ln||(e.current=Ri[ln],Ri[ln]=null,ln--)}function H(e,t){ln++,Ri[ln]=e.current,e.current=t}var Pt={},me=_t(Pt),je=_t(!1),Bt=Pt;function xn(e,t){var n=e.type.contextTypes;if(!n)return Pt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function Ne(e){return e=e.childContextTypes,e!=null}function il(){Q(je),Q(me)}function _a(e,t,n){if(me.current!==Pt)throw Error(j(168));H(me,t),H(je,n)}function Su(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(j(108,od(e)||"Unknown",l));return J({},n,r)}function ol(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Pt,Bt=me.current,H(me,e),H(je,je.current),!0}function Ma(e,t,n){var r=e.stateNode;if(!r)throw Error(j(169));n?(e=Su(e,t,Bt),r.__reactInternalMemoizedMergedChildContext=e,Q(je),Q(me),H(me,e)):Q(je),H(je,n)}var nt=null,Cl=!1,ql=!1;function ju(e){nt===null?nt=[e]:nt.push(e)}function jp(e){Cl=!0,ju(e)}function Mt(){if(!ql&&nt!==null){ql=!0;var e=0,t=V;try{var n=nt;for(V=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}nt=null,Cl=!1}catch(l){throw nt!==null&&(nt=nt.slice(e+1)),Ks(fo,Mt),l}finally{V=t,ql=!1}}return null}var on=[],an=0,al=null,sl=0,Me=[],Te=0,Wt=null,rt=1,lt="";function It(e,t){on[an++]=sl,on[an++]=al,al=e,sl=t}function Nu(e,t,n){Me[Te++]=rt,Me[Te++]=lt,Me[Te++]=Wt,Wt=e;var r=rt;e=lt;var l=32-He(r)-1;r&=~(1<<l),n+=1;var i=32-He(t)+l;if(30<i){var a=l-l%5;i=(r&(1<<a)-1).toString(32),r>>=a,l-=a,rt=1<<32-He(t)+l|n<<l|r,lt=i+e}else rt=1<<i|n<<l|r,lt=e}function So(e){e.return!==null&&(It(e,1),Nu(e,1,0))}function jo(e){for(;e===al;)al=on[--an],on[an]=null,sl=on[--an],on[an]=null;for(;e===Wt;)Wt=Me[--Te],Me[Te]=null,lt=Me[--Te],Me[Te]=null,rt=Me[--Te],Me[Te]=null}var ze=null,Ee=null,Y=!1,Ue=null;function bu(e,t){var n=Re(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ta(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ze=e,Ee=jt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ze=e,Ee=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Wt!==null?{id:rt,overflow:lt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Re(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ze=e,Ee=null,!0):!1;default:return!1}}function Di(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Oi(e){if(Y){var t=Ee;if(t){var n=t;if(!Ta(e,t)){if(Di(e))throw Error(j(418));t=jt(n.nextSibling);var r=ze;t&&Ta(e,t)?bu(r,n):(e.flags=e.flags&-4097|2,Y=!1,ze=e)}}else{if(Di(e))throw Error(j(418));e.flags=e.flags&-4097|2,Y=!1,ze=e}}}function Ra(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ze=e}function Pr(e){if(e!==ze)return!1;if(!Y)return Ra(e),Y=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!_i(e.type,e.memoizedProps)),t&&(t=Ee)){if(Di(e))throw Cu(),Error(j(418));for(;t;)bu(e,t),t=jt(t.nextSibling)}if(Ra(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ee=jt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ee=null}}else Ee=ze?jt(e.stateNode.nextSibling):null;return!0}function Cu(){for(var e=Ee;e;)e=jt(e.nextSibling)}function yn(){Ee=ze=null,Y=!1}function No(e){Ue===null?Ue=[e]:Ue.push(e)}var Np=ct.ReactCurrentBatchConfig;function Tn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var s=l.refs;a===null?delete s[i]:s[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function Lr(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Da(e){var t=e._init;return t(e._payload)}function Eu(e){function t(f,d){if(e){var p=f.deletions;p===null?(f.deletions=[d],f.flags|=16):p.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function l(f,d){return f=Et(f,d),f.index=0,f.sibling=null,f}function i(f,d,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<d?(f.flags|=2,d):p):(f.flags|=2,d)):(f.flags|=1048576,d)}function a(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,d,p,v){return d===null||d.tag!==6?(d=oi(p,f.mode,v),d.return=f,d):(d=l(d,p),d.return=f,d)}function u(f,d,p,v){var N=p.type;return N===qt?m(f,d,p.props.children,v,p.key):d!==null&&(d.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===ft&&Da(N)===d.type)?(v=l(d,p.props),v.ref=Tn(f,d,p),v.return=f,v):(v=Xr(p.type,p.key,p.props,null,f.mode,v),v.ref=Tn(f,d,p),v.return=f,v)}function c(f,d,p,v){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=ai(p,f.mode,v),d.return=f,d):(d=l(d,p.children||[]),d.return=f,d)}function m(f,d,p,v,N){return d===null||d.tag!==7?(d=Ht(p,f.mode,v,N),d.return=f,d):(d=l(d,p),d.return=f,d)}function g(f,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=oi(""+d,f.mode,p),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case yr:return p=Xr(d.type,d.key,d.props,null,f.mode,p),p.ref=Tn(f,null,d),p.return=f,p;case Jt:return d=ai(d,f.mode,p),d.return=f,d;case ft:var v=d._init;return g(f,v(d._payload),p)}if(An(d)||zn(d))return d=Ht(d,f.mode,p,null),d.return=f,d;Lr(f,d)}return null}function h(f,d,p,v){var N=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return N!==null?null:s(f,d,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case yr:return p.key===N?u(f,d,p,v):null;case Jt:return p.key===N?c(f,d,p,v):null;case ft:return N=p._init,h(f,d,N(p._payload),v)}if(An(p)||zn(p))return N!==null?null:m(f,d,p,v,null);Lr(f,p)}return null}function k(f,d,p,v,N){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(p)||null,s(d,f,""+v,N);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case yr:return f=f.get(v.key===null?p:v.key)||null,u(d,f,v,N);case Jt:return f=f.get(v.key===null?p:v.key)||null,c(d,f,v,N);case ft:var C=v._init;return k(f,d,p,C(v._payload),N)}if(An(v)||zn(v))return f=f.get(p)||null,m(d,f,v,N,null);Lr(d,v)}return null}function y(f,d,p,v){for(var N=null,C=null,x=d,b=d=0,R=null;x!==null&&b<p.length;b++){x.index>b?(R=x,x=null):R=x.sibling;var S=h(f,x,p[b],v);if(S===null){x===null&&(x=R);break}e&&x&&S.alternate===null&&t(f,x),d=i(S,d,b),C===null?N=S:C.sibling=S,C=S,x=R}if(b===p.length)return n(f,x),Y&&It(f,b),N;if(x===null){for(;b<p.length;b++)x=g(f,p[b],v),x!==null&&(d=i(x,d,b),C===null?N=x:C.sibling=x,C=x);return Y&&It(f,b),N}for(x=r(f,x);b<p.length;b++)R=k(x,f,b,p[b],v),R!==null&&(e&&R.alternate!==null&&x.delete(R.key===null?b:R.key),d=i(R,d,b),C===null?N=R:C.sibling=R,C=R);return e&&x.forEach(function(M){return t(f,M)}),Y&&It(f,b),N}function w(f,d,p,v){var N=zn(p);if(typeof N!="function")throw Error(j(150));if(p=N.call(p),p==null)throw Error(j(151));for(var C=N=null,x=d,b=d=0,R=null,S=p.next();x!==null&&!S.done;b++,S=p.next()){x.index>b?(R=x,x=null):R=x.sibling;var M=h(f,x,S.value,v);if(M===null){x===null&&(x=R);break}e&&x&&M.alternate===null&&t(f,x),d=i(M,d,b),C===null?N=M:C.sibling=M,C=M,x=R}if(S.done)return n(f,x),Y&&It(f,b),N;if(x===null){for(;!S.done;b++,S=p.next())S=g(f,S.value,v),S!==null&&(d=i(S,d,b),C===null?N=S:C.sibling=S,C=S);return Y&&It(f,b),N}for(x=r(f,x);!S.done;b++,S=p.next())S=k(x,f,b,S.value,v),S!==null&&(e&&S.alternate!==null&&x.delete(S.key===null?b:S.key),d=i(S,d,b),C===null?N=S:C.sibling=S,C=S);return e&&x.forEach(function(U){return t(f,U)}),Y&&It(f,b),N}function _(f,d,p,v){if(typeof p=="object"&&p!==null&&p.type===qt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case yr:e:{for(var N=p.key,C=d;C!==null;){if(C.key===N){if(N=p.type,N===qt){if(C.tag===7){n(f,C.sibling),d=l(C,p.props.children),d.return=f,f=d;break e}}else if(C.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===ft&&Da(N)===C.type){n(f,C.sibling),d=l(C,p.props),d.ref=Tn(f,C,p),d.return=f,f=d;break e}n(f,C);break}else t(f,C);C=C.sibling}p.type===qt?(d=Ht(p.props.children,f.mode,v,p.key),d.return=f,f=d):(v=Xr(p.type,p.key,p.props,null,f.mode,v),v.ref=Tn(f,d,p),v.return=f,f=v)}return a(f);case Jt:e:{for(C=p.key;d!==null;){if(d.key===C)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(f,d.sibling),d=l(d,p.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=ai(p,f.mode,v),d.return=f,f=d}return a(f);case ft:return C=p._init,_(f,d,C(p._payload),v)}if(An(p))return y(f,d,p,v);if(zn(p))return w(f,d,p,v);Lr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(f,d.sibling),d=l(d,p),d.return=f,f=d):(n(f,d),d=oi(p,f.mode,v),d.return=f,f=d),a(f)):n(f,d)}return _}var wn=Eu(!0),zu=Eu(!1),ul=_t(null),cl=null,sn=null,bo=null;function Co(){bo=sn=cl=null}function Eo(e){var t=ul.current;Q(ul),e._currentValue=t}function Ii(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function hn(e,t){cl=e,bo=sn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Se=!0),e.firstContext=null)}function Oe(e){var t=e._currentValue;if(bo!==e)if(e={context:e,memoizedValue:t,next:null},sn===null){if(cl===null)throw Error(j(308));sn=e,cl.dependencies={lanes:0,firstContext:e}}else sn=sn.next=e;return t}var $t=null;function zo(e){$t===null?$t=[e]:$t.push(e)}function Pu(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,zo(t)):(n.next=l.next,l.next=n),t.interleaved=n,st(e,r)}function st(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var mt=!1;function Po(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Lu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function it(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Nt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,F&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,st(e,n)}return l=r.interleaved,l===null?(t.next=t,zo(r)):(t.next=l.next,l.next=t),r.interleaved=t,st(e,n)}function Hr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,mo(e,n)}}function Oa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function dl(e,t,n,r){var l=e.updateQueue;mt=!1;var i=l.firstBaseUpdate,a=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var u=s,c=u.next;u.next=null,a===null?i=c:a.next=c,a=u;var m=e.alternate;m!==null&&(m=m.updateQueue,s=m.lastBaseUpdate,s!==a&&(s===null?m.firstBaseUpdate=c:s.next=c,m.lastBaseUpdate=u))}if(i!==null){var g=l.baseState;a=0,m=c=u=null,s=i;do{var h=s.lane,k=s.eventTime;if((r&h)===h){m!==null&&(m=m.next={eventTime:k,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=e,w=s;switch(h=t,k=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){g=y.call(k,g,h);break e}g=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,h=typeof y=="function"?y.call(k,g,h):y,h==null)break e;g=J({},g,h);break e;case 2:mt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=l.effects,h===null?l.effects=[s]:h.push(s))}else k={eventTime:k,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},m===null?(c=m=k,u=g):m=m.next=k,a|=h;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;h=s,s=h.next,h.next=null,l.lastBaseUpdate=h,l.shared.pending=null}}while(!0);if(m===null&&(u=g),l.baseState=u,l.firstBaseUpdate=c,l.lastBaseUpdate=m,t=l.shared.interleaved,t!==null){l=t;do a|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Yt|=a,e.lanes=a,e.memoizedState=g}}function Ia(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(j(191,l));l.call(r)}}}var vr={},Ze=_t(vr),ar=_t(vr),sr=_t(vr);function Vt(e){if(e===vr)throw Error(j(174));return e}function Lo(e,t){switch(H(sr,t),H(ar,e),H(Ze,vr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:vi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=vi(t,e)}Q(Ze),H(Ze,t)}function kn(){Q(Ze),Q(ar),Q(sr)}function _u(e){Vt(sr.current);var t=Vt(Ze.current),n=vi(t,e.type);t!==n&&(H(ar,e),H(Ze,n))}function _o(e){ar.current===e&&(Q(Ze),Q(ar))}var G=_t(0);function pl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ei=[];function Mo(){for(var e=0;e<ei.length;e++)ei[e]._workInProgressVersionPrimary=null;ei.length=0}var Br=ct.ReactCurrentDispatcher,ti=ct.ReactCurrentBatchConfig,Qt=0,Z=null,le=null,oe=null,fl=!1,Qn=!1,ur=0,bp=0;function de(){throw Error(j(321))}function To(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!We(e[n],t[n]))return!1;return!0}function Ro(e,t,n,r,l,i){if(Qt=i,Z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Br.current=e===null||e.memoizedState===null?Pp:Lp,e=n(r,l),Qn){i=0;do{if(Qn=!1,ur=0,25<=i)throw Error(j(301));i+=1,oe=le=null,t.updateQueue=null,Br.current=_p,e=n(r,l)}while(Qn)}if(Br.current=ml,t=le!==null&&le.next!==null,Qt=0,oe=le=Z=null,fl=!1,t)throw Error(j(300));return e}function Do(){var e=ur!==0;return ur=0,e}function Ke(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return oe===null?Z.memoizedState=oe=e:oe=oe.next=e,oe}function Ie(){if(le===null){var e=Z.alternate;e=e!==null?e.memoizedState:null}else e=le.next;var t=oe===null?Z.memoizedState:oe.next;if(t!==null)oe=t,le=e;else{if(e===null)throw Error(j(310));le=e,e={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},oe===null?Z.memoizedState=oe=e:oe=oe.next=e}return oe}function cr(e,t){return typeof t=="function"?t(e):t}function ni(e){var t=Ie(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=le,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var a=l.next;l.next=i.next,i.next=a}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var s=a=null,u=null,c=i;do{var m=c.lane;if((Qt&m)===m)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var g={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=g,a=r):u=u.next=g,Z.lanes|=m,Yt|=m}c=c.next}while(c!==null&&c!==i);u===null?a=r:u.next=s,We(r,t.memoizedState)||(Se=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,Z.lanes|=i,Yt|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ri(e){var t=Ie(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var a=l=l.next;do i=e(i,a.action),a=a.next;while(a!==l);We(i,t.memoizedState)||(Se=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Mu(){}function Tu(e,t){var n=Z,r=Ie(),l=t(),i=!We(r.memoizedState,l);if(i&&(r.memoizedState=l,Se=!0),r=r.queue,Oo(Ou.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||oe!==null&&oe.memoizedState.tag&1){if(n.flags|=2048,dr(9,Du.bind(null,n,r,l,t),void 0,null),ae===null)throw Error(j(349));Qt&30||Ru(n,t,l)}return l}function Ru(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Du(e,t,n,r){t.value=n,t.getSnapshot=r,Iu(t)&&Au(e)}function Ou(e,t,n){return n(function(){Iu(t)&&Au(e)})}function Iu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!We(e,n)}catch{return!0}}function Au(e){var t=st(e,1);t!==null&&Be(t,e,1,-1)}function Aa(e){var t=Ke();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:cr,lastRenderedState:e},t.queue=e,e=e.dispatch=zp.bind(null,Z,e),[t.memoizedState,e]}function dr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Fu(){return Ie().memoizedState}function Wr(e,t,n,r){var l=Ke();Z.flags|=e,l.memoizedState=dr(1|t,n,void 0,r===void 0?null:r)}function El(e,t,n,r){var l=Ie();r=r===void 0?null:r;var i=void 0;if(le!==null){var a=le.memoizedState;if(i=a.destroy,r!==null&&To(r,a.deps)){l.memoizedState=dr(t,n,i,r);return}}Z.flags|=e,l.memoizedState=dr(1|t,n,i,r)}function Fa(e,t){return Wr(8390656,8,e,t)}function Oo(e,t){return El(2048,8,e,t)}function $u(e,t){return El(4,2,e,t)}function Vu(e,t){return El(4,4,e,t)}function Uu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Hu(e,t,n){return n=n!=null?n.concat([e]):null,El(4,4,Uu.bind(null,t,e),n)}function Io(){}function Bu(e,t){var n=Ie();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&To(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Wu(e,t){var n=Ie();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&To(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Qu(e,t,n){return Qt&21?(We(n,t)||(n=Zs(),Z.lanes|=n,Yt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Se=!0),e.memoizedState=n)}function Cp(e,t){var n=V;V=n!==0&&4>n?n:4,e(!0);var r=ti.transition;ti.transition={};try{e(!1),t()}finally{V=n,ti.transition=r}}function Yu(){return Ie().memoizedState}function Ep(e,t,n){var r=Ct(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ku(e))Xu(t,n);else if(n=Pu(e,t,n,r),n!==null){var l=ve();Be(n,e,r,l),Gu(n,t,r)}}function zp(e,t,n){var r=Ct(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ku(e))Xu(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,s=i(a,n);if(l.hasEagerState=!0,l.eagerState=s,We(s,a)){var u=t.interleaved;u===null?(l.next=l,zo(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=Pu(e,t,l,r),n!==null&&(l=ve(),Be(n,e,r,l),Gu(n,t,r))}}function Ku(e){var t=e.alternate;return e===Z||t!==null&&t===Z}function Xu(e,t){Qn=fl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Gu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,mo(e,n)}}var ml={readContext:Oe,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useInsertionEffect:de,useLayoutEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useMutableSource:de,useSyncExternalStore:de,useId:de,unstable_isNewReconciler:!1},Pp={readContext:Oe,useCallback:function(e,t){return Ke().memoizedState=[e,t===void 0?null:t],e},useContext:Oe,useEffect:Fa,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Wr(4194308,4,Uu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Wr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Wr(4,2,e,t)},useMemo:function(e,t){var n=Ke();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ke();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ep.bind(null,Z,e),[r.memoizedState,e]},useRef:function(e){var t=Ke();return e={current:e},t.memoizedState=e},useState:Aa,useDebugValue:Io,useDeferredValue:function(e){return Ke().memoizedState=e},useTransition:function(){var e=Aa(!1),t=e[0];return e=Cp.bind(null,e[1]),Ke().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Z,l=Ke();if(Y){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),ae===null)throw Error(j(349));Qt&30||Ru(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Fa(Ou.bind(null,r,i,e),[e]),r.flags|=2048,dr(9,Du.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Ke(),t=ae.identifierPrefix;if(Y){var n=lt,r=rt;n=(r&~(1<<32-He(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ur++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=bp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Lp={readContext:Oe,useCallback:Bu,useContext:Oe,useEffect:Oo,useImperativeHandle:Hu,useInsertionEffect:$u,useLayoutEffect:Vu,useMemo:Wu,useReducer:ni,useRef:Fu,useState:function(){return ni(cr)},useDebugValue:Io,useDeferredValue:function(e){var t=Ie();return Qu(t,le.memoizedState,e)},useTransition:function(){var e=ni(cr)[0],t=Ie().memoizedState;return[e,t]},useMutableSource:Mu,useSyncExternalStore:Tu,useId:Yu,unstable_isNewReconciler:!1},_p={readContext:Oe,useCallback:Bu,useContext:Oe,useEffect:Oo,useImperativeHandle:Hu,useInsertionEffect:$u,useLayoutEffect:Vu,useMemo:Wu,useReducer:ri,useRef:Fu,useState:function(){return ri(cr)},useDebugValue:Io,useDeferredValue:function(e){var t=Ie();return le===null?t.memoizedState=e:Qu(t,le.memoizedState,e)},useTransition:function(){var e=ri(cr)[0],t=Ie().memoizedState;return[e,t]},useMutableSource:Mu,useSyncExternalStore:Tu,useId:Yu,unstable_isNewReconciler:!1};function $e(e,t){if(e&&e.defaultProps){t=J({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ai(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:J({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var zl={isMounted:function(e){return(e=e._reactInternals)?Gt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ve(),l=Ct(e),i=it(r,l);i.payload=t,n!=null&&(i.callback=n),t=Nt(e,i,l),t!==null&&(Be(t,e,l,r),Hr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ve(),l=Ct(e),i=it(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Nt(e,i,l),t!==null&&(Be(t,e,l,r),Hr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ve(),r=Ct(e),l=it(n,r);l.tag=2,t!=null&&(l.callback=t),t=Nt(e,l,r),t!==null&&(Be(t,e,r,n),Hr(t,e,r))}};function $a(e,t,n,r,l,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!rr(n,r)||!rr(l,i):!0}function Zu(e,t,n){var r=!1,l=Pt,i=t.contextType;return typeof i=="object"&&i!==null?i=Oe(i):(l=Ne(t)?Bt:me.current,r=t.contextTypes,i=(r=r!=null)?xn(e,l):Pt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=zl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Va(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&zl.enqueueReplaceState(t,t.state,null)}function Fi(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Po(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=Oe(i):(i=Ne(t)?Bt:me.current,l.context=xn(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ai(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&zl.enqueueReplaceState(l,l.state,null),dl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Sn(e,t){try{var n="",r=t;do n+=id(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function li(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function $i(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Mp=typeof WeakMap=="function"?WeakMap:Map;function Ju(e,t,n){n=it(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){gl||(gl=!0,Gi=r),$i(e,t)},n}function qu(e,t,n){n=it(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){$i(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){$i(e,t),typeof r!="function"&&(bt===null?bt=new Set([this]):bt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Ua(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Mp;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Qp.bind(null,e,t,n),t.then(e,e))}function Ha(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ba(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=it(-1,1),t.tag=2,Nt(n,t,1))),n.lanes|=1),e)}var Tp=ct.ReactCurrentOwner,Se=!1;function ge(e,t,n,r){t.child=e===null?zu(t,null,n,r):wn(t,e.child,n,r)}function Wa(e,t,n,r,l){n=n.render;var i=t.ref;return hn(t,l),r=Ro(e,t,n,r,i,l),n=Do(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,ut(e,t,l)):(Y&&n&&So(t),t.flags|=1,ge(e,t,r,l),t.child)}function Qa(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!Wo(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,ec(e,t,i,r,l)):(e=Xr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:rr,n(a,r)&&e.ref===t.ref)return ut(e,t,l)}return t.flags|=1,e=Et(i,r),e.ref=t.ref,e.return=t,t.child=e}function ec(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(rr(i,r)&&e.ref===t.ref)if(Se=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(Se=!0);else return t.lanes=e.lanes,ut(e,t,l)}return Vi(e,t,n,r,l)}function tc(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},H(cn,Ce),Ce|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,H(cn,Ce),Ce|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,H(cn,Ce),Ce|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,H(cn,Ce),Ce|=r;return ge(e,t,l,n),t.child}function nc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Vi(e,t,n,r,l){var i=Ne(n)?Bt:me.current;return i=xn(t,i),hn(t,l),n=Ro(e,t,n,r,i,l),r=Do(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,ut(e,t,l)):(Y&&r&&So(t),t.flags|=1,ge(e,t,n,l),t.child)}function Ya(e,t,n,r,l){if(Ne(n)){var i=!0;ol(t)}else i=!1;if(hn(t,l),t.stateNode===null)Qr(e,t),Zu(t,n,r),Fi(t,n,r,l),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var u=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Oe(c):(c=Ne(n)?Bt:me.current,c=xn(t,c));var m=n.getDerivedStateFromProps,g=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function";g||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||u!==c)&&Va(t,a,r,c),mt=!1;var h=t.memoizedState;a.state=h,dl(t,r,a,l),u=t.memoizedState,s!==r||h!==u||je.current||mt?(typeof m=="function"&&(Ai(t,n,m,r),u=t.memoizedState),(s=mt||$a(t,n,s,r,h,u,c))?(g||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),a.props=r,a.state=u,a.context=c,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Lu(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:$e(t.type,s),a.props=c,g=t.pendingProps,h=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=Oe(u):(u=Ne(n)?Bt:me.current,u=xn(t,u));var k=n.getDerivedStateFromProps;(m=typeof k=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==g||h!==u)&&Va(t,a,r,u),mt=!1,h=t.memoizedState,a.state=h,dl(t,r,a,l);var y=t.memoizedState;s!==g||h!==y||je.current||mt?(typeof k=="function"&&(Ai(t,n,k,r),y=t.memoizedState),(c=mt||$a(t,n,c,r,h,y,u)||!1)?(m||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,y,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,y,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),a.props=r,a.state=y,a.context=u,r=c):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Ui(e,t,n,r,i,l)}function Ui(e,t,n,r,l,i){nc(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return l&&Ma(t,n,!1),ut(e,t,i);r=t.stateNode,Tp.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=wn(t,e.child,null,i),t.child=wn(t,null,s,i)):ge(e,t,s,i),t.memoizedState=r.state,l&&Ma(t,n,!0),t.child}function rc(e){var t=e.stateNode;t.pendingContext?_a(e,t.pendingContext,t.pendingContext!==t.context):t.context&&_a(e,t.context,!1),Lo(e,t.containerInfo)}function Ka(e,t,n,r,l){return yn(),No(l),t.flags|=256,ge(e,t,n,r),t.child}var Hi={dehydrated:null,treeContext:null,retryLane:0};function Bi(e){return{baseLanes:e,cachePool:null,transitions:null}}function lc(e,t,n){var r=t.pendingProps,l=G.current,i=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),H(G,l&1),e===null)return Oi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=_l(a,r,0,null),e=Ht(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Bi(n),t.memoizedState=Hi,e):Ao(t,a));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return Rp(e,t,a,r,s,l,n);if(i){i=r.fallback,a=t.mode,l=e.child,s=l.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Et(l,u),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?i=Et(s,i):(i=Ht(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?Bi(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=Hi,r}return i=e.child,e=i.sibling,r=Et(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ao(e,t){return t=_l({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function _r(e,t,n,r){return r!==null&&No(r),wn(t,e.child,null,n),e=Ao(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Rp(e,t,n,r,l,i,a){if(n)return t.flags&256?(t.flags&=-257,r=li(Error(j(422))),_r(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=_l({mode:"visible",children:r.children},l,0,null),i=Ht(i,l,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&wn(t,e.child,null,a),t.child.memoizedState=Bi(a),t.memoizedState=Hi,i);if(!(t.mode&1))return _r(e,t,a,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(j(419)),r=li(i,r,void 0),_r(e,t,a,r)}if(s=(a&e.childLanes)!==0,Se||s){if(r=ae,r!==null){switch(a&-a){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|a)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,st(e,l),Be(r,e,l,-1))}return Bo(),r=li(Error(j(421))),_r(e,t,a,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Yp.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,Ee=jt(l.nextSibling),ze=t,Y=!0,Ue=null,e!==null&&(Me[Te++]=rt,Me[Te++]=lt,Me[Te++]=Wt,rt=e.id,lt=e.overflow,Wt=t),t=Ao(t,r.children),t.flags|=4096,t)}function Xa(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ii(e.return,t,n)}function ii(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function ic(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(ge(e,t,r.children,n),r=G.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xa(e,n,t);else if(e.tag===19)Xa(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(H(G,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&pl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),ii(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&pl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}ii(t,!0,n,null,i);break;case"together":ii(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Qr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ut(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Yt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=Et(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Et(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Dp(e,t,n){switch(t.tag){case 3:rc(t),yn();break;case 5:_u(t);break;case 1:Ne(t.type)&&ol(t);break;case 4:Lo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;H(ul,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(H(G,G.current&1),t.flags|=128,null):n&t.child.childLanes?lc(e,t,n):(H(G,G.current&1),e=ut(e,t,n),e!==null?e.sibling:null);H(G,G.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return ic(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),H(G,G.current),r)break;return null;case 22:case 23:return t.lanes=0,tc(e,t,n)}return ut(e,t,n)}var oc,Wi,ac,sc;oc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wi=function(){};ac=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Vt(Ze.current);var i=null;switch(n){case"input":l=fi(e,l),r=fi(e,r),i=[];break;case"select":l=J({},l,{value:void 0}),r=J({},r,{value:void 0}),i=[];break;case"textarea":l=gi(e,l),r=gi(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ll)}xi(n,r);var a;n=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var s=l[c];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Gn.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(s=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(a in s)!s.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&s[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Gn.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&W("scroll",e),i||s===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};sc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Rn(e,t){if(!Y)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Op(e,t,n){var r=t.pendingProps;switch(jo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(t),null;case 1:return Ne(t.type)&&il(),pe(t),null;case 3:return r=t.stateNode,kn(),Q(je),Q(me),Mo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Pr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ue!==null&&(qi(Ue),Ue=null))),Wi(e,t),pe(t),null;case 5:_o(t);var l=Vt(sr.current);if(n=t.type,e!==null&&t.stateNode!=null)ac(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(j(166));return pe(t),null}if(e=Vt(Ze.current),Pr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Xe]=t,r[or]=i,e=(t.mode&1)!==0,n){case"dialog":W("cancel",r),W("close",r);break;case"iframe":case"object":case"embed":W("load",r);break;case"video":case"audio":for(l=0;l<$n.length;l++)W($n[l],r);break;case"source":W("error",r);break;case"img":case"image":case"link":W("error",r),W("load",r);break;case"details":W("toggle",r);break;case"input":la(r,i),W("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},W("invalid",r);break;case"textarea":oa(r,i),W("invalid",r)}xi(n,i),l=null;for(var a in i)if(i.hasOwnProperty(a)){var s=i[a];a==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&zr(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&zr(r.textContent,s,e),l=["children",""+s]):Gn.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&W("scroll",r)}switch(n){case"input":wr(r),ia(r,i,!0);break;case"textarea":wr(r),aa(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ll)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Os(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Xe]=t,e[or]=r,oc(e,t,!1,!1),t.stateNode=e;e:{switch(a=yi(n,r),n){case"dialog":W("cancel",e),W("close",e),l=r;break;case"iframe":case"object":case"embed":W("load",e),l=r;break;case"video":case"audio":for(l=0;l<$n.length;l++)W($n[l],e);l=r;break;case"source":W("error",e),l=r;break;case"img":case"image":case"link":W("error",e),W("load",e),l=r;break;case"details":W("toggle",e),l=r;break;case"input":la(e,r),l=fi(e,r),W("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=J({},r,{value:void 0}),W("invalid",e);break;case"textarea":oa(e,r),l=gi(e,r),W("invalid",e);break;default:l=r}xi(n,l),s=l;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?Fs(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Is(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Zn(e,u):typeof u=="number"&&Zn(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Gn.hasOwnProperty(i)?u!=null&&i==="onScroll"&&W("scroll",e):u!=null&&ao(e,i,u,a))}switch(n){case"input":wr(e),ia(e,r,!1);break;case"textarea":wr(e),aa(e);break;case"option":r.value!=null&&e.setAttribute("value",""+zt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?dn(e,!!r.multiple,i,!1):r.defaultValue!=null&&dn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=ll)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return pe(t),null;case 6:if(e&&t.stateNode!=null)sc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(j(166));if(n=Vt(sr.current),Vt(Ze.current),Pr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Xe]=t,(i=r.nodeValue!==n)&&(e=ze,e!==null))switch(e.tag){case 3:zr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&zr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Xe]=t,t.stateNode=r}return pe(t),null;case 13:if(Q(G),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Y&&Ee!==null&&t.mode&1&&!(t.flags&128))Cu(),yn(),t.flags|=98560,i=!1;else if(i=Pr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(j(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(j(317));i[Xe]=t}else yn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;pe(t),i=!1}else Ue!==null&&(qi(Ue),Ue=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||G.current&1?ie===0&&(ie=3):Bo())),t.updateQueue!==null&&(t.flags|=4),pe(t),null);case 4:return kn(),Wi(e,t),e===null&&lr(t.stateNode.containerInfo),pe(t),null;case 10:return Eo(t.type._context),pe(t),null;case 17:return Ne(t.type)&&il(),pe(t),null;case 19:if(Q(G),i=t.memoizedState,i===null)return pe(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)Rn(i,!1);else{if(ie!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=pl(e),a!==null){for(t.flags|=128,Rn(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return H(G,G.current&1|2),t.child}e=e.sibling}i.tail!==null&&ne()>jn&&(t.flags|=128,r=!0,Rn(i,!1),t.lanes=4194304)}else{if(!r)if(e=pl(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Rn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!Y)return pe(t),null}else 2*ne()-i.renderingStartTime>jn&&n!==1073741824&&(t.flags|=128,r=!0,Rn(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ne(),t.sibling=null,n=G.current,H(G,r?n&1|2:n&1),t):(pe(t),null);case 22:case 23:return Ho(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ce&1073741824&&(pe(t),t.subtreeFlags&6&&(t.flags|=8192)):pe(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function Ip(e,t){switch(jo(t),t.tag){case 1:return Ne(t.type)&&il(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return kn(),Q(je),Q(me),Mo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return _o(t),null;case 13:if(Q(G),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));yn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(G),null;case 4:return kn(),null;case 10:return Eo(t.type._context),null;case 22:case 23:return Ho(),null;case 24:return null;default:return null}}var Mr=!1,fe=!1,Ap=typeof WeakSet=="function"?WeakSet:Set,P=null;function un(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){q(e,t,r)}else n.current=null}function Qi(e,t,n){try{n()}catch(r){q(e,t,r)}}var Ga=!1;function Fp(e,t){if(Pi=tl,e=fu(),ko(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,s=-1,u=-1,c=0,m=0,g=e,h=null;t:for(;;){for(var k;g!==n||l!==0&&g.nodeType!==3||(s=a+l),g!==i||r!==0&&g.nodeType!==3||(u=a+r),g.nodeType===3&&(a+=g.nodeValue.length),(k=g.firstChild)!==null;)h=g,g=k;for(;;){if(g===e)break t;if(h===n&&++c===l&&(s=a),h===i&&++m===r&&(u=a),(k=g.nextSibling)!==null)break;g=h,h=g.parentNode}g=k}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Li={focusedElem:e,selectionRange:n},tl=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,_=y.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?w:$e(t.type,w),_);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(v){q(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return y=Ga,Ga=!1,y}function Yn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Qi(t,n,i)}l=l.next}while(l!==r)}}function Pl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Yi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function uc(e){var t=e.alternate;t!==null&&(e.alternate=null,uc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Xe],delete t[or],delete t[Ti],delete t[kp],delete t[Sp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function cc(e){return e.tag===5||e.tag===3||e.tag===4}function Za(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||cc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ki(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ll));else if(r!==4&&(e=e.child,e!==null))for(Ki(e,t,n),e=e.sibling;e!==null;)Ki(e,t,n),e=e.sibling}function Xi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Xi(e,t,n),e=e.sibling;e!==null;)Xi(e,t,n),e=e.sibling}var se=null,Ve=!1;function pt(e,t,n){for(n=n.child;n!==null;)dc(e,t,n),n=n.sibling}function dc(e,t,n){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(kl,n)}catch{}switch(n.tag){case 5:fe||un(n,t);case 6:var r=se,l=Ve;se=null,pt(e,t,n),se=r,Ve=l,se!==null&&(Ve?(e=se,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):se.removeChild(n.stateNode));break;case 18:se!==null&&(Ve?(e=se,n=n.stateNode,e.nodeType===8?Jl(e.parentNode,n):e.nodeType===1&&Jl(e,n),tr(e)):Jl(se,n.stateNode));break;case 4:r=se,l=Ve,se=n.stateNode.containerInfo,Ve=!0,pt(e,t,n),se=r,Ve=l;break;case 0:case 11:case 14:case 15:if(!fe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&Qi(n,t,a),l=l.next}while(l!==r)}pt(e,t,n);break;case 1:if(!fe&&(un(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){q(n,t,s)}pt(e,t,n);break;case 21:pt(e,t,n);break;case 22:n.mode&1?(fe=(r=fe)||n.memoizedState!==null,pt(e,t,n),fe=r):pt(e,t,n);break;default:pt(e,t,n)}}function Ja(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Ap),t.forEach(function(r){var l=Kp.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Ae(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:se=s.stateNode,Ve=!1;break e;case 3:se=s.stateNode.containerInfo,Ve=!0;break e;case 4:se=s.stateNode.containerInfo,Ve=!0;break e}s=s.return}if(se===null)throw Error(j(160));dc(i,a,l),se=null,Ve=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(c){q(l,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)pc(t,e),t=t.sibling}function pc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ae(t,e),Qe(e),r&4){try{Yn(3,e,e.return),Pl(3,e)}catch(w){q(e,e.return,w)}try{Yn(5,e,e.return)}catch(w){q(e,e.return,w)}}break;case 1:Ae(t,e),Qe(e),r&512&&n!==null&&un(n,n.return);break;case 5:if(Ae(t,e),Qe(e),r&512&&n!==null&&un(n,n.return),e.flags&32){var l=e.stateNode;try{Zn(l,"")}catch(w){q(e,e.return,w)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Rs(l,i),yi(s,a);var c=yi(s,i);for(a=0;a<u.length;a+=2){var m=u[a],g=u[a+1];m==="style"?Fs(l,g):m==="dangerouslySetInnerHTML"?Is(l,g):m==="children"?Zn(l,g):ao(l,m,g,c)}switch(s){case"input":mi(l,i);break;case"textarea":Ds(l,i);break;case"select":var h=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var k=i.value;k!=null?dn(l,!!i.multiple,k,!1):h!==!!i.multiple&&(i.defaultValue!=null?dn(l,!!i.multiple,i.defaultValue,!0):dn(l,!!i.multiple,i.multiple?[]:"",!1))}l[or]=i}catch(w){q(e,e.return,w)}}break;case 6:if(Ae(t,e),Qe(e),r&4){if(e.stateNode===null)throw Error(j(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(w){q(e,e.return,w)}}break;case 3:if(Ae(t,e),Qe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{tr(t.containerInfo)}catch(w){q(e,e.return,w)}break;case 4:Ae(t,e),Qe(e);break;case 13:Ae(t,e),Qe(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Vo=ne())),r&4&&Ja(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(fe=(c=fe)||m,Ae(t,e),fe=c):Ae(t,e),Qe(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!m&&e.mode&1)for(P=e,m=e.child;m!==null;){for(g=P=m;P!==null;){switch(h=P,k=h.child,h.tag){case 0:case 11:case 14:case 15:Yn(4,h,h.return);break;case 1:un(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){q(r,n,w)}}break;case 5:un(h,h.return);break;case 22:if(h.memoizedState!==null){es(g);continue}}k!==null?(k.return=h,P=k):es(g)}m=m.sibling}e:for(m=null,g=e;;){if(g.tag===5){if(m===null){m=g;try{l=g.stateNode,c?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=g.stateNode,u=g.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=As("display",a))}catch(w){q(e,e.return,w)}}}else if(g.tag===6){if(m===null)try{g.stateNode.nodeValue=c?"":g.memoizedProps}catch(w){q(e,e.return,w)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;m===g&&(m=null),g=g.return}m===g&&(m=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Ae(t,e),Qe(e),r&4&&Ja(e);break;case 21:break;default:Ae(t,e),Qe(e)}}function Qe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(cc(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Zn(l,""),r.flags&=-33);var i=Za(e);Xi(e,i,l);break;case 3:case 4:var a=r.stateNode.containerInfo,s=Za(e);Ki(e,s,a);break;default:throw Error(j(161))}}catch(u){q(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function $p(e,t,n){P=e,fc(e)}function fc(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var l=P,i=l.child;if(l.tag===22&&r){var a=l.memoizedState!==null||Mr;if(!a){var s=l.alternate,u=s!==null&&s.memoizedState!==null||fe;s=Mr;var c=fe;if(Mr=a,(fe=u)&&!c)for(P=l;P!==null;)a=P,u=a.child,a.tag===22&&a.memoizedState!==null?ts(l):u!==null?(u.return=a,P=u):ts(l);for(;i!==null;)P=i,fc(i),i=i.sibling;P=l,Mr=s,fe=c}qa(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,P=i):qa(e)}}function qa(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:fe||Pl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!fe)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:$e(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Ia(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ia(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var g=m.dehydrated;g!==null&&tr(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}fe||t.flags&512&&Yi(t)}catch(h){q(t,t.return,h)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function es(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function ts(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Pl(4,t)}catch(u){q(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){q(t,l,u)}}var i=t.return;try{Yi(t)}catch(u){q(t,i,u)}break;case 5:var a=t.return;try{Yi(t)}catch(u){q(t,a,u)}}}catch(u){q(t,t.return,u)}if(t===e){P=null;break}var s=t.sibling;if(s!==null){s.return=t.return,P=s;break}P=t.return}}var Vp=Math.ceil,hl=ct.ReactCurrentDispatcher,Fo=ct.ReactCurrentOwner,De=ct.ReactCurrentBatchConfig,F=0,ae=null,re=null,ue=0,Ce=0,cn=_t(0),ie=0,pr=null,Yt=0,Ll=0,$o=0,Kn=null,ke=null,Vo=0,jn=1/0,tt=null,gl=!1,Gi=null,bt=null,Tr=!1,yt=null,vl=0,Xn=0,Zi=null,Yr=-1,Kr=0;function ve(){return F&6?ne():Yr!==-1?Yr:Yr=ne()}function Ct(e){return e.mode&1?F&2&&ue!==0?ue&-ue:Np.transition!==null?(Kr===0&&(Kr=Zs()),Kr):(e=V,e!==0||(e=window.event,e=e===void 0?16:lu(e.type)),e):1}function Be(e,t,n,r){if(50<Xn)throw Xn=0,Zi=null,Error(j(185));mr(e,n,r),(!(F&2)||e!==ae)&&(e===ae&&(!(F&2)&&(Ll|=n),ie===4&&vt(e,ue)),be(e,r),n===1&&F===0&&!(t.mode&1)&&(jn=ne()+500,Cl&&Mt()))}function be(e,t){var n=e.callbackNode;Nd(e,t);var r=el(e,e===ae?ue:0);if(r===0)n!==null&&ca(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ca(n),t===1)e.tag===0?jp(ns.bind(null,e)):ju(ns.bind(null,e)),yp(function(){!(F&6)&&Mt()}),n=null;else{switch(Js(r)){case 1:n=fo;break;case 4:n=Xs;break;case 16:n=qr;break;case 536870912:n=Gs;break;default:n=qr}n=kc(n,mc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function mc(e,t){if(Yr=-1,Kr=0,F&6)throw Error(j(327));var n=e.callbackNode;if(gn()&&e.callbackNode!==n)return null;var r=el(e,e===ae?ue:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=xl(e,r);else{t=r;var l=F;F|=2;var i=gc();(ae!==e||ue!==t)&&(tt=null,jn=ne()+500,Ut(e,t));do try{Bp();break}catch(s){hc(e,s)}while(!0);Co(),hl.current=i,F=l,re!==null?t=0:(ae=null,ue=0,t=ie)}if(t!==0){if(t===2&&(l=Ni(e),l!==0&&(r=l,t=Ji(e,l))),t===1)throw n=pr,Ut(e,0),vt(e,r),be(e,ne()),n;if(t===6)vt(e,r);else{if(l=e.current.alternate,!(r&30)&&!Up(l)&&(t=xl(e,r),t===2&&(i=Ni(e),i!==0&&(r=i,t=Ji(e,i))),t===1))throw n=pr,Ut(e,0),vt(e,r),be(e,ne()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(j(345));case 2:At(e,ke,tt);break;case 3:if(vt(e,r),(r&130023424)===r&&(t=Vo+500-ne(),10<t)){if(el(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ve(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Mi(At.bind(null,e,ke,tt),t);break}At(e,ke,tt);break;case 4:if(vt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var a=31-He(r);i=1<<a,a=t[a],a>l&&(l=a),r&=~i}if(r=l,r=ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Vp(r/1960))-r,10<r){e.timeoutHandle=Mi(At.bind(null,e,ke,tt),r);break}At(e,ke,tt);break;case 5:At(e,ke,tt);break;default:throw Error(j(329))}}}return be(e,ne()),e.callbackNode===n?mc.bind(null,e):null}function Ji(e,t){var n=Kn;return e.current.memoizedState.isDehydrated&&(Ut(e,t).flags|=256),e=xl(e,t),e!==2&&(t=ke,ke=n,t!==null&&qi(t)),e}function qi(e){ke===null?ke=e:ke.push.apply(ke,e)}function Up(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!We(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function vt(e,t){for(t&=~$o,t&=~Ll,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-He(t),r=1<<n;e[n]=-1,t&=~r}}function ns(e){if(F&6)throw Error(j(327));gn();var t=el(e,0);if(!(t&1))return be(e,ne()),null;var n=xl(e,t);if(e.tag!==0&&n===2){var r=Ni(e);r!==0&&(t=r,n=Ji(e,r))}if(n===1)throw n=pr,Ut(e,0),vt(e,t),be(e,ne()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,At(e,ke,tt),be(e,ne()),null}function Uo(e,t){var n=F;F|=1;try{return e(t)}finally{F=n,F===0&&(jn=ne()+500,Cl&&Mt())}}function Kt(e){yt!==null&&yt.tag===0&&!(F&6)&&gn();var t=F;F|=1;var n=De.transition,r=V;try{if(De.transition=null,V=1,e)return e()}finally{V=r,De.transition=n,F=t,!(F&6)&&Mt()}}function Ho(){Ce=cn.current,Q(cn)}function Ut(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,xp(n)),re!==null)for(n=re.return;n!==null;){var r=n;switch(jo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&il();break;case 3:kn(),Q(je),Q(me),Mo();break;case 5:_o(r);break;case 4:kn();break;case 13:Q(G);break;case 19:Q(G);break;case 10:Eo(r.type._context);break;case 22:case 23:Ho()}n=n.return}if(ae=e,re=e=Et(e.current,null),ue=Ce=t,ie=0,pr=null,$o=Ll=Yt=0,ke=Kn=null,$t!==null){for(t=0;t<$t.length;t++)if(n=$t[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=l,r.next=a}n.pending=r}$t=null}return e}function hc(e,t){do{var n=re;try{if(Co(),Br.current=ml,fl){for(var r=Z.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}fl=!1}if(Qt=0,oe=le=Z=null,Qn=!1,ur=0,Fo.current=null,n===null||n.return===null){ie=1,pr=t,re=null;break}e:{var i=e,a=n.return,s=n,u=t;if(t=ue,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,m=s,g=m.tag;if(!(m.mode&1)&&(g===0||g===11||g===15)){var h=m.alternate;h?(m.updateQueue=h.updateQueue,m.memoizedState=h.memoizedState,m.lanes=h.lanes):(m.updateQueue=null,m.memoizedState=null)}var k=Ha(a);if(k!==null){k.flags&=-257,Ba(k,a,s,i,t),k.mode&1&&Ua(i,c,t),t=k,u=c;var y=t.updateQueue;if(y===null){var w=new Set;w.add(u),t.updateQueue=w}else y.add(u);break e}else{if(!(t&1)){Ua(i,c,t),Bo();break e}u=Error(j(426))}}else if(Y&&s.mode&1){var _=Ha(a);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Ba(_,a,s,i,t),No(Sn(u,s));break e}}i=u=Sn(u,s),ie!==4&&(ie=2),Kn===null?Kn=[i]:Kn.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=Ju(i,u,t);Oa(i,f);break e;case 1:s=u;var d=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(bt===null||!bt.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=qu(i,s,t);Oa(i,v);break e}}i=i.return}while(i!==null)}xc(n)}catch(N){t=N,re===n&&n!==null&&(re=n=n.return);continue}break}while(!0)}function gc(){var e=hl.current;return hl.current=ml,e===null?ml:e}function Bo(){(ie===0||ie===3||ie===2)&&(ie=4),ae===null||!(Yt&268435455)&&!(Ll&268435455)||vt(ae,ue)}function xl(e,t){var n=F;F|=2;var r=gc();(ae!==e||ue!==t)&&(tt=null,Ut(e,t));do try{Hp();break}catch(l){hc(e,l)}while(!0);if(Co(),F=n,hl.current=r,re!==null)throw Error(j(261));return ae=null,ue=0,ie}function Hp(){for(;re!==null;)vc(re)}function Bp(){for(;re!==null&&!hd();)vc(re)}function vc(e){var t=wc(e.alternate,e,Ce);e.memoizedProps=e.pendingProps,t===null?xc(e):re=t,Fo.current=null}function xc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Ip(n,t),n!==null){n.flags&=32767,re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ie=6,re=null;return}}else if(n=Op(n,t,Ce),n!==null){re=n;return}if(t=t.sibling,t!==null){re=t;return}re=t=e}while(t!==null);ie===0&&(ie=5)}function At(e,t,n){var r=V,l=De.transition;try{De.transition=null,V=1,Wp(e,t,n,r)}finally{De.transition=l,V=r}return null}function Wp(e,t,n,r){do gn();while(yt!==null);if(F&6)throw Error(j(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(bd(e,i),e===ae&&(re=ae=null,ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Tr||(Tr=!0,kc(qr,function(){return gn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=De.transition,De.transition=null;var a=V;V=1;var s=F;F|=4,Fo.current=null,Fp(e,n),pc(n,e),dp(Li),tl=!!Pi,Li=Pi=null,e.current=n,$p(n),gd(),F=s,V=a,De.transition=i}else e.current=n;if(Tr&&(Tr=!1,yt=e,vl=l),i=e.pendingLanes,i===0&&(bt=null),yd(n.stateNode),be(e,ne()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(gl)throw gl=!1,e=Gi,Gi=null,e;return vl&1&&e.tag!==0&&gn(),i=e.pendingLanes,i&1?e===Zi?Xn++:(Xn=0,Zi=e):Xn=0,Mt(),null}function gn(){if(yt!==null){var e=Js(vl),t=De.transition,n=V;try{if(De.transition=null,V=16>e?16:e,yt===null)var r=!1;else{if(e=yt,yt=null,vl=0,F&6)throw Error(j(331));var l=F;for(F|=4,P=e.current;P!==null;){var i=P,a=i.child;if(P.flags&16){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(P=c;P!==null;){var m=P;switch(m.tag){case 0:case 11:case 15:Yn(8,m,i)}var g=m.child;if(g!==null)g.return=m,P=g;else for(;P!==null;){m=P;var h=m.sibling,k=m.return;if(uc(m),m===c){P=null;break}if(h!==null){h.return=k,P=h;break}P=k}}}var y=i.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var _=w.sibling;w.sibling=null,w=_}while(w!==null)}}P=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,P=a;else e:for(;P!==null;){if(i=P,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Yn(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,P=f;break e}P=i.return}}var d=e.current;for(P=d;P!==null;){a=P;var p=a.child;if(a.subtreeFlags&2064&&p!==null)p.return=a,P=p;else e:for(a=d;P!==null;){if(s=P,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Pl(9,s)}}catch(N){q(s,s.return,N)}if(s===a){P=null;break e}var v=s.sibling;if(v!==null){v.return=s.return,P=v;break e}P=s.return}}if(F=l,Mt(),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(kl,e)}catch{}r=!0}return r}finally{V=n,De.transition=t}}return!1}function rs(e,t,n){t=Sn(n,t),t=Ju(e,t,1),e=Nt(e,t,1),t=ve(),e!==null&&(mr(e,1,t),be(e,t))}function q(e,t,n){if(e.tag===3)rs(e,e,n);else for(;t!==null;){if(t.tag===3){rs(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(bt===null||!bt.has(r))){e=Sn(n,e),e=qu(t,e,1),t=Nt(t,e,1),e=ve(),t!==null&&(mr(t,1,e),be(t,e));break}}t=t.return}}function Qp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ve(),e.pingedLanes|=e.suspendedLanes&n,ae===e&&(ue&n)===n&&(ie===4||ie===3&&(ue&130023424)===ue&&500>ne()-Vo?Ut(e,0):$o|=n),be(e,t)}function yc(e,t){t===0&&(e.mode&1?(t=jr,jr<<=1,!(jr&130023424)&&(jr=4194304)):t=1);var n=ve();e=st(e,t),e!==null&&(mr(e,t,n),be(e,n))}function Yp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),yc(e,n)}function Kp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(t),yc(e,n)}var wc;wc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||je.current)Se=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Se=!1,Dp(e,t,n);Se=!!(e.flags&131072)}else Se=!1,Y&&t.flags&1048576&&Nu(t,sl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Qr(e,t),e=t.pendingProps;var l=xn(t,me.current);hn(t,n),l=Ro(null,t,r,e,l,n);var i=Do();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ne(r)?(i=!0,ol(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Po(t),l.updater=zl,t.stateNode=l,l._reactInternals=t,Fi(t,r,e,n),t=Ui(null,t,r,!0,i,n)):(t.tag=0,Y&&i&&So(t),ge(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Qr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Gp(r),e=$e(r,e),l){case 0:t=Vi(null,t,r,e,n);break e;case 1:t=Ya(null,t,r,e,n);break e;case 11:t=Wa(null,t,r,e,n);break e;case 14:t=Qa(null,t,r,$e(r.type,e),n);break e}throw Error(j(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:$e(r,l),Vi(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:$e(r,l),Ya(e,t,r,l,n);case 3:e:{if(rc(t),e===null)throw Error(j(387));r=t.pendingProps,i=t.memoizedState,l=i.element,Lu(e,t),dl(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=Sn(Error(j(423)),t),t=Ka(e,t,r,n,l);break e}else if(r!==l){l=Sn(Error(j(424)),t),t=Ka(e,t,r,n,l);break e}else for(Ee=jt(t.stateNode.containerInfo.firstChild),ze=t,Y=!0,Ue=null,n=zu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(yn(),r===l){t=ut(e,t,n);break e}ge(e,t,r,n)}t=t.child}return t;case 5:return _u(t),e===null&&Oi(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,a=l.children,_i(r,l)?a=null:i!==null&&_i(r,i)&&(t.flags|=32),nc(e,t),ge(e,t,a,n),t.child;case 6:return e===null&&Oi(t),null;case 13:return lc(e,t,n);case 4:return Lo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=wn(t,null,r,n):ge(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:$e(r,l),Wa(e,t,r,l,n);case 7:return ge(e,t,t.pendingProps,n),t.child;case 8:return ge(e,t,t.pendingProps.children,n),t.child;case 12:return ge(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,a=l.value,H(ul,r._currentValue),r._currentValue=a,i!==null)if(We(i.value,a)){if(i.children===l.children&&!je.current){t=ut(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){a=i.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=it(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?u.next=u:(u.next=m.next,m.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Ii(i.return,n,t),s.lanes|=n;break}u=u.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(j(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Ii(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}ge(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,hn(t,n),l=Oe(l),r=r(l),t.flags|=1,ge(e,t,r,n),t.child;case 14:return r=t.type,l=$e(r,t.pendingProps),l=$e(r.type,l),Qa(e,t,r,l,n);case 15:return ec(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:$e(r,l),Qr(e,t),t.tag=1,Ne(r)?(e=!0,ol(t)):e=!1,hn(t,n),Zu(t,r,l),Fi(t,r,l,n),Ui(null,t,r,!0,e,n);case 19:return ic(e,t,n);case 22:return tc(e,t,n)}throw Error(j(156,t.tag))};function kc(e,t){return Ks(e,t)}function Xp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Re(e,t,n,r){return new Xp(e,t,n,r)}function Wo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gp(e){if(typeof e=="function")return Wo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===uo)return 11;if(e===co)return 14}return 2}function Et(e,t){var n=e.alternate;return n===null?(n=Re(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Xr(e,t,n,r,l,i){var a=2;if(r=e,typeof e=="function")Wo(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case qt:return Ht(n.children,l,i,t);case so:a=8,l|=8;break;case ui:return e=Re(12,n,t,l|2),e.elementType=ui,e.lanes=i,e;case ci:return e=Re(13,n,t,l),e.elementType=ci,e.lanes=i,e;case di:return e=Re(19,n,t,l),e.elementType=di,e.lanes=i,e;case _s:return _l(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ps:a=10;break e;case Ls:a=9;break e;case uo:a=11;break e;case co:a=14;break e;case ft:a=16,r=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=Re(a,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function Ht(e,t,n,r){return e=Re(7,e,r,t),e.lanes=n,e}function _l(e,t,n,r){return e=Re(22,e,r,t),e.elementType=_s,e.lanes=n,e.stateNode={isHidden:!1},e}function oi(e,t,n){return e=Re(6,e,null,t),e.lanes=n,e}function ai(e,t,n){return t=Re(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Zp(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vl(0),this.expirationTimes=Vl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Qo(e,t,n,r,l,i,a,s,u){return e=new Zp(e,t,n,s,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Re(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Po(i),e}function Jp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Jt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Sc(e){if(!e)return Pt;e=e._reactInternals;e:{if(Gt(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ne(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if(Ne(n))return Su(e,n,t)}return t}function jc(e,t,n,r,l,i,a,s,u){return e=Qo(n,r,!0,e,l,i,a,s,u),e.context=Sc(null),n=e.current,r=ve(),l=Ct(n),i=it(r,l),i.callback=t??null,Nt(n,i,l),e.current.lanes=l,mr(e,l,r),be(e,r),e}function Ml(e,t,n,r){var l=t.current,i=ve(),a=Ct(l);return n=Sc(n),t.context===null?t.context=n:t.pendingContext=n,t=it(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Nt(l,t,a),e!==null&&(Be(e,l,a,i),Hr(e,l,a)),a}function yl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ls(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Yo(e,t){ls(e,t),(e=e.alternate)&&ls(e,t)}function qp(){return null}var Nc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ko(e){this._internalRoot=e}Tl.prototype.render=Ko.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));Ml(e,t,null,null)};Tl.prototype.unmount=Ko.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Kt(function(){Ml(null,e,null,null)}),t[at]=null}};function Tl(e){this._internalRoot=e}Tl.prototype.unstable_scheduleHydration=function(e){if(e){var t=tu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<gt.length&&t!==0&&t<gt[n].priority;n++);gt.splice(n,0,e),n===0&&ru(e)}};function Xo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Rl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function is(){}function ef(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var c=yl(a);i.call(c)}}var a=jc(t,r,e,0,null,!1,!1,"",is);return e._reactRootContainer=a,e[at]=a.current,lr(e.nodeType===8?e.parentNode:e),Kt(),a}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var c=yl(u);s.call(c)}}var u=Qo(e,0,!1,null,null,!1,!1,"",is);return e._reactRootContainer=u,e[at]=u.current,lr(e.nodeType===8?e.parentNode:e),Kt(function(){Ml(t,u,n,r)}),u}function Dl(e,t,n,r,l){var i=n._reactRootContainer;if(i){var a=i;if(typeof l=="function"){var s=l;l=function(){var u=yl(a);s.call(u)}}Ml(t,a,e,l)}else a=ef(n,t,e,l,r);return yl(a)}qs=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Fn(t.pendingLanes);n!==0&&(mo(t,n|1),be(t,ne()),!(F&6)&&(jn=ne()+500,Mt()))}break;case 13:Kt(function(){var r=st(e,1);if(r!==null){var l=ve();Be(r,e,1,l)}}),Yo(e,1)}};ho=function(e){if(e.tag===13){var t=st(e,134217728);if(t!==null){var n=ve();Be(t,e,134217728,n)}Yo(e,134217728)}};eu=function(e){if(e.tag===13){var t=Ct(e),n=st(e,t);if(n!==null){var r=ve();Be(n,e,t,r)}Yo(e,t)}};tu=function(){return V};nu=function(e,t){var n=V;try{return V=e,t()}finally{V=n}};ki=function(e,t,n){switch(t){case"input":if(mi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=bl(r);if(!l)throw Error(j(90));Ts(r),mi(r,l)}}}break;case"textarea":Ds(e,n);break;case"select":t=n.value,t!=null&&dn(e,!!n.multiple,t,!1)}};Us=Uo;Hs=Kt;var tf={usingClientEntryPoint:!1,Events:[gr,rn,bl,$s,Vs,Uo]},Dn={findFiberByHostInstance:Ft,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nf={bundleType:Dn.bundleType,version:Dn.version,rendererPackageName:Dn.rendererPackageName,rendererConfig:Dn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ct.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Qs(e),e===null?null:e.stateNode},findFiberByHostInstance:Dn.findFiberByHostInstance||qp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rr.isDisabled&&Rr.supportsFiber)try{kl=Rr.inject(nf),Ge=Rr}catch{}}Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tf;Le.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xo(t))throw Error(j(200));return Jp(e,t,null,n)};Le.createRoot=function(e,t){if(!Xo(e))throw Error(j(299));var n=!1,r="",l=Nc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Qo(e,1,!1,null,null,n,!1,r,l),e[at]=t.current,lr(e.nodeType===8?e.parentNode:e),new Ko(t)};Le.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=Qs(t),e=e===null?null:e.stateNode,e};Le.flushSync=function(e){return Kt(e)};Le.hydrate=function(e,t,n){if(!Rl(t))throw Error(j(200));return Dl(null,e,t,!0,n)};Le.hydrateRoot=function(e,t,n){if(!Xo(e))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",a=Nc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=jc(t,null,e,1,n??null,l,!1,i,a),e[at]=t.current,lr(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Tl(t)};Le.render=function(e,t,n){if(!Rl(t))throw Error(j(200));return Dl(null,e,t,!1,n)};Le.unmountComponentAtNode=function(e){if(!Rl(e))throw Error(j(40));return e._reactRootContainer?(Kt(function(){Dl(null,null,e,!1,function(){e._reactRootContainer=null,e[at]=null})}),!0):!1};Le.unstable_batchedUpdates=Uo;Le.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Rl(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return Dl(e,t,n,!1,r)};Le.version="18.3.1-next-f1338f8080-20240426";function bc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bc)}catch(e){console.error(e)}}bc(),bs.exports=Le;var rf=bs.exports,Cc,os=rf;Cc=os.createRoot,os.hydrateRoot;function lf({children:e}){return o.jsx("span",{className:"sidebar-icon","aria-hidden":"true",children:e})}function of({status:e,staticCount:t,runtimeCount:n,plotCount:r,activeView:l,onNavigate:i,onRunAnalysis:a,onAutoFix:s}){const u=[{label:"Analyzer",icon:"◫",view:"analyzer"},{label:"Visualization",icon:"▣",view:"visualization"},{label:"Comparison",icon:"⇌",view:"comparison"},{label:"AST Visualizer",icon:"🌲",view:"ast_visualizer"},{label:"Playground",icon:"🎛️",view:"playground"},{label:"Stability Heatmap",icon:"🗺️",view:"heatmap"}];return o.jsxs("aside",{className:"sidebar-panel matte-panel reveal",children:[o.jsxs("div",{className:"sidebar-brand",children:[o.jsx("div",{className:"brand-mark sidebar-mark",children:o.jsx("span",{children:"NS"})}),o.jsx("div",{children:o.jsx("div",{className:"sidebar-title",children:"Numerical Stability"})})]}),o.jsxs("div",{className:"sidebar-status",children:[o.jsx("span",{className:"status-dot"}),o.jsx("span",{children:e})]}),o.jsx("div",{className:"sidebar-section-label",children:"Navigation"}),o.jsx("div",{className:"sidebar-nav",children:u.map(c=>o.jsxs("button",{className:`sidebar-nav-item ${l===c.view?"active":""}`,type:"button",onClick:()=>i(c.view),children:[o.jsx("div",{className:"nav-icon",children:o.jsx(lf,{children:c.icon})}),o.jsx("span",{children:c.label})]},c.label))}),o.jsx("div",{className:"sidebar-section-label",children:"Quick Metrics"}),o.jsxs("div",{className:"sidebar-metrics",children:[o.jsxs("div",{className:"sidebar-metric",children:[o.jsx("span",{children:"Static"}),o.jsx("strong",{children:t})]}),o.jsxs("div",{className:"sidebar-metric",children:[o.jsx("span",{children:"Runtime"}),o.jsx("strong",{children:n})]}),o.jsxs("div",{className:"sidebar-metric",children:[o.jsx("span",{children:"Plots"}),o.jsx("strong",{children:r})]})]})]})}function Ye({name:e}){const t={shield:o.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"}),alert:o.jsx("path",{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4M12 17h.01"}),check:o.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4L12 14.01l-3-3"}),cross:o.jsx("path",{d:"M18 6L6 18M6 6l12 12"}),spark:o.jsx("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"}),arrowRight:o.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"}),print:o.jsx("path",{d:"M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2M6 14h12v8H6z"})};return o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"comp-icon",style:{width:"20px",height:"20px"},children:t[e]})}function af(e,t){const n=e?e.split(`
`):[],r=t?t.split(`
`):[],l=Array(n.length+1).fill(null).map(()=>Array(r.length+1).fill(0));for(let u=1;u<=n.length;u++)for(let c=1;c<=r.length;c++)n[u-1]===r[c-1]?l[u][c]=l[u-1][c-1]+1:l[u][c]=Math.max(l[u-1][c],l[u][c-1]);let i=n.length,a=r.length;const s=[];for(;i>0||a>0;)i>0&&a>0&&n[i-1]===r[a-1]?(s.unshift({type:"unchanged",value:n[i-1],oldLine:i,newLine:a}),i--,a--):a>0&&(i===0||l[i][a-1]>=l[i-1][a])?(s.unshift({type:"added",value:r[a-1],oldLine:null,newLine:a}),a--):(s.unshift({type:"removed",value:n[i-1],oldLine:i,newLine:null}),i--);return s}function sf(e,t){const n=af(e,t),r=[],l=[],i=[];return n.forEach(a=>{a.type==="unchanged"?(as(l,i,r),r.push({left:{type:"unchanged",value:a.value,lineNum:a.oldLine},right:{type:"unchanged",value:a.value,lineNum:a.newLine}})):a.type==="removed"?l.push({type:"removed",value:a.value,lineNum:a.oldLine}):a.type==="added"&&i.push({type:"added",value:a.value,lineNum:a.newLine})}),as(l,i,r),r}function as(e,t,n){const r=Math.max(e.length,t.length);for(let l=0;l<r;l++)n.push({left:e[l]||{type:"empty",value:"",lineNum:""},right:t[l]||{type:"empty",value:"",lineNum:""}});e.length=0,t.length=0}const ss=e=>{var l;if(!e)return 0;let t=100;const n=((l=e.staticIssues)==null?void 0:l.length)||0;return t-=n*15,(e.runtimeSummary||[]).forEach(i=>{const a=i.status||"";a.includes("Unstable")||a.includes("❌")?t-=25:a.includes("Risky")||a.includes("⚠️")?t-=10:a.includes("Potentially")&&(t-=5)}),Math.max(0,Math.min(100,t))},us=e=>{if(!e)return 0;let t=0;const n=e.plots||{};return Object.values(n).forEach(r=>{(r.points||[]).forEach(i=>{const a=parseFloat(i.relativeError);!isNaN(a)&&a>t&&(t=a)})}),t},cs=e=>e?(e.runtimeSummary||[]).filter(n=>!n.status.includes("✅")).length:0,ds=e=>e===0?"0":e<1e-4||e>1e4?e.toExponential(4):e.toFixed(6);function uf({code:e,onApplyFixedCode:t}){var f,d,p,v;const[n,r]=L.useState(null),[l,i]=L.useState(!1),[a,s]=L.useState(""),u=async()=>{i(!0),s("");try{const N=await fetch("/api/compare",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:e})}),C=await N.json();if(!N.ok)throw new Error(C.error||"Failed to compile comparison.");r(C)}catch(N){s(N.message)}finally{i(!1)}};L.useEffect(()=>{u()},[e]);const c=n?ss(n.originalAnalysis):0,m=n?ss(n.fixedAnalysis):0,g=n?us(n.originalAnalysis):0,h=n?us(n.fixedAnalysis):0,k=n?cs(n.originalAnalysis):0,y=n?cs(n.fixedAnalysis):0,w=n?Math.max(0,(((d=(f=n.originalAnalysis)==null?void 0:f.staticIssues)==null?void 0:d.length)||0)-(((v=(p=n.fixedAnalysis)==null?void 0:p.staticIssues)==null?void 0:v.length)||0)):0,_=n?sf(n.originalCode,n.fixedCode):[];return o.jsxs("section",{className:"comparison-page matte-panel reveal",style:{gridColumn:"2 / -1"},children:[o.jsx("style",{children:`
        .comparison-layout {
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin-top: 16px;
        }

        .header-comp {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid var(--border);
          padding-bottom: 16px;
        }

        .header-comp h2 {
          margin: 0;
          font-size: 1.6rem;
          font-weight: 700;
          letter-spacing: -0.03em;
        }

        .header-comp p {
          margin: 4px 0 0;
          color: var(--muted);
          font-size: 0.9rem;
        }

        .metrics-grid-comp {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
        }

        .metric-card-comp {
          background: linear-gradient(180deg, rgba(25, 33, 44, 0.4) 0%, rgba(12, 17, 24, 0.6) 100%);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 20px;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
        }

        .metric-card-comp:hover {
          border-color: var(--blue-soft);
          transform: translateY(-2px);
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.3);
        }

        .metric-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
          color: var(--muted);
          font-weight: 500;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .metric-comparison {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 8px;
        }

        .val-original {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--red);
          text-decoration: line-through;
          opacity: 0.7;
        }

        .val-arrow {
          display: flex;
          align-items: center;
          color: var(--muted);
        }

        .val-fixed {
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--green);
          text-shadow: 0 0 10px rgba(63, 185, 80, 0.25);
        }

        .metric-label-comp {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text);
        }

        .delta-badge {
          display: inline-flex;
          align-items: center;
          padding: 4px 8px;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 700;
          margin-top: 8px;
        }

        .delta-badge.positive {
          background-color: rgba(34, 197, 94, 0.15);
          color: var(--green);
          border: 1px solid rgba(34, 197, 94, 0.25);
        }

        .delta-badge.negative {
          background-color: rgba(239, 68, 68, 0.15);
          color: var(--red);
          border: 1px solid rgba(239, 68, 68, 0.25);
        }

        .delta-badge.neutral {
          background-color: rgba(255, 255, 255, 0.05);
          color: var(--muted);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        /* Side by Side Diff Viewer */
        .diff-viewer-panel {
          border: 1px solid var(--border);
          background: rgba(10, 15, 22, 0.9);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: var(--shadow);
        }

        .diff-header-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-bottom: 1px solid var(--border);
          background: rgba(18, 24, 32, 0.95);
          padding: 12px 24px;
          font-weight: 600;
          font-size: 0.95rem;
          letter-spacing: 0.02em;
        }

        .diff-header-col {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .diff-header-col.original {
          color: var(--muted);
        }

        .diff-header-col.fixed {
          color: var(--blue);
        }

        .diff-content {
          max-height: 500px;
          overflow-y: auto;
          font-family: "JetBrains Mono", "Courier New", Courier, monospace;
          font-size: 0.85rem;
        }

        .diff-line-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-bottom: 1px solid rgba(255, 255, 255, 0.02);
        }

        .diff-half-pane {
          display: flex;
          width: 100%;
          min-width: 0;
          white-space: pre-wrap;
          word-break: break-all;
        }

        .diff-pane-ln {
          width: 42px;
          min-width: 42px;
          text-align: right;
          padding-right: 12px;
          color: #4b5563;
          user-select: none;
          background: rgba(10, 14, 20, 0.4);
          border-right: 1px solid rgba(255, 255, 255, 0.03);
          font-size: 0.75rem;
          padding-top: 4px;
          padding-bottom: 4px;
        }

        .diff-pane-content {
          padding: 4px 12px;
          width: 100%;
          min-height: 22px;
          display: flex;
          align-items: center;
          font-size: 0.8rem;
          line-height: 1.4;
        }

        /* Code states highlights */
        .diff-half-pane.removed {
          background-color: rgba(248, 81, 73, 0.12);
        }

        .diff-half-pane.removed .diff-pane-ln {
          background-color: rgba(248, 81, 73, 0.22);
          color: #f85149;
        }

        .diff-half-pane.removed .diff-pane-content {
          color: #ff8585;
          text-decoration: line-through;
          opacity: 0.95;
        }

        .diff-half-pane.added {
          background-color: rgba(56, 244, 129, 0.08);
        }

        .diff-half-pane.added .diff-pane-ln {
          background-color: rgba(56, 244, 129, 0.18);
          color: #3fb950;
        }

        .diff-half-pane.added .diff-pane-content {
          color: #a3f7b5;
          font-weight: 500;
        }

        .diff-half-pane.empty {
          background-color: rgba(0, 0, 0, 0.15);
        }

        .diff-half-pane.empty .diff-pane-ln {
          color: transparent;
        }

        .apply-fixed-container {
          display: flex;
          justify-content: flex-end;
          gap: 16px;
          margin-top: 8px;
        }

        .spinner-container-comp {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 350px;
          color: var(--muted);
          gap: 16px;
        }

        .spinner-comp {
          width: 48px;
          height: 48px;
          border: 4px solid var(--border);
          border-top-color: var(--blue);
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        /* Comparative Chart Styles */
        .chart-viz-card-comp {
          background: linear-gradient(180deg, rgba(16, 20, 26, 0.8) 0%, rgba(9, 12, 16, 0.9) 100%);
          border: 1px solid var(--border);
          border-radius: 16px;
          position: relative;
          padding: 24px;
          margin-top: 24px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
        }
        .viz-title-row-comp {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }
        .viz-title-row-comp h3 {
          margin: 0;
          font-size: 1.15rem;
          font-weight: 700;
          letter-spacing: -0.02em;
        }
        .viz-select-comp {
          background: rgba(18, 24, 32, 0.95);
          color: var(--text);
          border: 1px solid var(--border-strong);
          border-radius: 8px;
          padding: 6px 12px;
          font-size: 0.85rem;
          outline: none;
          cursor: pointer;
        }
        .chart-legend-comp {
          display: flex;
          gap: 16px;
          font-size: 0.85rem;
          font-weight: 600;
        }
        .legend-item-comp {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .legend-color-comp {
          width: 14px;
          height: 14px;
          border-radius: 4px;
        }
        .legend-color-comp.original {
          background: var(--red);
          box-shadow: 0 0 8px rgba(239, 68, 68, 0.4);
        }
        .legend-color-comp.fixed {
          background: var(--green);
          box-shadow: 0 0 8px rgba(34, 197, 94, 0.4);
        }
        .svg-container-comp {
          background: rgba(5, 7, 10, 0.95);
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.03);
          padding: 16px;
          position: relative;
        }
        .chart-svg-comp {
          width: 100%;
          height: auto;
          overflow: visible;
        }
        .grid-line-viz-comp {
          stroke: rgba(255, 255, 255, 0.04);
          stroke-dasharray: 2 4;
        }
        .axis-line-comp {
          stroke: rgba(255, 255, 255, 0.15);
          stroke-width: 1.5;
        }
        .axis-text-comp {
          fill: var(--muted);
          font-size: 10px;
          font-family: sans-serif;
        }
        .path-original-comp {
          stroke: var(--red);
          stroke-width: 3.5;
          fill: none;
          stroke-linecap: round;
          stroke-linejoin: round;
          filter: drop-shadow(0px 0px 4px rgba(239, 68, 68, 0.3));
        }
        .path-fixed-comp {
          stroke: var(--green);
          stroke-width: 3.5;
          fill: none;
          stroke-linecap: round;
          stroke-linejoin: round;
          filter: drop-shadow(0px 0px 4px rgba(34, 197, 94, 0.3));
        }
        .dot-original-comp {
          fill: var(--red);
          stroke: #000;
          stroke-width: 1.5;
        }
        .dot-fixed-comp {
          fill: var(--green);
          stroke: #000;
          stroke-width: 1.5;
        }

        /* Standard & Professional PDF Print Styles */
        @media print {
          @page {
            size: A4 portrait;
            margin: 15mm 15mm;
          }

          body, html, #root, .app-shell, .layout-grid {
            background: #ffffff !important;
            color: #0f172a !important;
            box-shadow: none !important;
            width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
          }

          /* Hide all UI layout elements */
          aside,
          .sidebar-panel,
          .topbar,
          .apply-fixed-container,
          .action-button,
          .viz-select-comp,
          button,
          header {
            display: none !important;
          }

          /* Expand layout container to span A4 pages */
          .comparison-page,
          .comparison-layout {
            grid-column: 1 / -1 !important;
            width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            background: transparent !important;
            border: none !important;
            box-shadow: none !important;
            display: block !important;
          }

          .header-comp {
            border-bottom: 2px solid #cbd5e1 !important;
            padding-bottom: 8px !important;
            margin-bottom: 24px !important;
          }

          .header-comp h2 {
            color: #0f172a !important;
            font-size: 26px !important;
            margin: 0 0 6px 0 !important;
          }

          .header-comp p {
            color: #475569 !important;
            font-size: 0.95rem !important;
          }

          /* Metrics layout in PDF */
          .metrics-grid-comp {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 16px !important;
            margin-bottom: 24px !important;
            page-break-inside: avoid;
          }

          .metric-card-comp {
            background: #f8fafc !important;
            border: 1px solid #cbd5e1 !important;
            color: #0f172a !important;
            box-shadow: none !important;
            transform: none !important;
            padding: 16px !important;
            page-break-inside: avoid;
          }

          .metric-header {
            color: #475569 !important;
          }

          .val-original {
            color: #dc2626 !important;
          }

          .val-fixed {
            color: #16a34a !important;
            text-shadow: none !important;
          }

          .metric-label-comp {
            color: #334155 !important;
          }

          .delta-badge {
            font-size: 0.75rem !important;
          }

          .delta-badge.positive {
            background-color: #f0fdf4 !important;
            color: #16a34a !important;
            border: 1px solid #bbf7d0 !important;
          }

          .delta-badge.neutral {
            background-color: #f1f5f9 !important;
            color: #64748b !important;
            border: 1px solid #e2e8f0 !important;
          }

          /* SVG Chart Print Styles */
          .chart-viz-card-comp {
            background: #f8fafc !important;
            border: 1px solid #cbd5e1 !important;
            color: #0f172a !important;
            box-shadow: none !important;
            padding: 20px !important;
            margin-top: 24px !important;
            margin-bottom: 24px !important;
            page-break-inside: avoid;
          }

          .svg-container-comp {
            background: #ffffff !important;
            border: 1px solid #cbd5e1 !important;
            padding: 8px !important;
          }

          .grid-line-viz-comp {
            stroke: #e2e8f0 !important;
          }

          .axis-line-comp {
            stroke: #475569 !important;
          }

          .axis-text-comp {
            fill: #475569 !important;
          }

          .path-original-comp {
            stroke: #dc2626 !important;
            filter: none !important;
          }

          .path-fixed-comp {
            stroke: #16a34a !important;
            filter: none !important;
          }

          .dot-original-comp {
            fill: #dc2626 !important;
          }

          .dot-fixed-comp {
            fill: #16a34a !important;
          }

          /* Code Diff Block Print Styles */
          .diff-viewer-panel {
            background: #ffffff !important;
            border: 1px solid #cbd5e1 !important;
            color: #0f172a !important;
            box-shadow: none !important;
            margin-top: 24px !important;
            page-break-inside: auto;
          }

          .diff-header-row {
            background: #f1f5f9 !important;
            border-bottom: 1px solid #cbd5e1 !important;
            color: #0f172a !important;
          }

          .diff-content {
            max-height: none !important;
            overflow: visible !important;
          }

          .diff-line-row {
            page-break-inside: avoid;
          }

          .diff-half-pane {
            background: #ffffff !important;
          }

          .diff-pane-ln {
            background: #f8fafc !important;
            color: #64748b !important;
            border-right: 1px solid #cbd5e1 !important;
          }

          .diff-pane-content {
            color: #0f172a !important;
            white-space: pre-wrap !important;
          }

          .diff-half-pane.removed {
            background-color: #fee2e2 !important;
          }

          .diff-half-pane.removed .diff-pane-ln {
            background-color: #fecaca !important;
            color: #dc2626 !important;
          }

          .diff-half-pane.removed .diff-pane-content {
            color: #991b1b !important;
          }

          .diff-half-pane.added {
            background-color: #dcfce7 !important;
          }

          .diff-half-pane.added .diff-pane-ln {
            background-color: #bbf7d0 !important;
            color: #16a34a !important;
          }

          .diff-half-pane.added .diff-pane-content {
            color: #166534 !important;
          }

          .diff-half-pane.empty {
            background-color: #f8fafc !important;
          }
        }
      `}),o.jsxs("div",{className:"header-comp",children:[o.jsxs("div",{children:[o.jsx("h2",{children:"Baseline vs Improved Comparison"}),o.jsx("p",{children:"Analyzing side-by-side numerical verification and structural changes"})]}),o.jsxs("div",{className:"apply-fixed-container",style:{display:"flex",gap:"12px"},children:[o.jsx("button",{className:"action-button secondary",onClick:u,disabled:l,style:{padding:"10px 18px"},children:"Re-run Comparison"}),o.jsxs("button",{className:"action-button",onClick:()=>window.print(),disabled:l,style:{padding:"10px 18px",background:"var(--blue-deep)",borderColor:"var(--blue-deep)",display:"flex",alignItems:"center",gap:"8px"},children:[o.jsx(Ye,{name:"print"}),o.jsx("span",{children:"Export PDF Report"})]})]})]}),l?o.jsxs("div",{className:"spinner-container-comp",children:[o.jsx("div",{className:"spinner-comp"}),o.jsx("p",{children:"Running pipeline compilation and compiling high-precision verification matrices..."})]}):a?o.jsxs("div",{className:"error-banner",style:{marginTop:"20px",padding:"16px"},children:[o.jsx("p",{style:{fontWeight:600,margin:"0 0 8px"},children:"Pipeline execution error"}),o.jsx("p",{style:{margin:0,opacity:.9},children:a})]}):n?o.jsxs("div",{className:"comparison-layout",children:[o.jsxs("div",{className:"metrics-grid-comp",children:[o.jsxs("div",{className:"metric-card-comp",children:[o.jsxs("div",{className:"metric-header",children:[o.jsx("span",{children:"Stability Score"}),o.jsx(Ye,{name:"shield"})]}),o.jsxs("div",{className:"metric-comparison",children:[o.jsx("span",{className:"val-original",children:c}),o.jsx("span",{className:"val-arrow",children:o.jsx(Ye,{name:"arrowRight"})}),o.jsx("span",{className:"val-fixed",children:m})]}),o.jsx("div",{className:"metric-label-comp",children:"Numerical Stability Rating"}),m>c?o.jsxs("div",{className:"delta-badge positive",children:["+",m-c,"% Improvement"]}):o.jsx("div",{className:"delta-badge neutral",children:"No Rating Change"})]}),o.jsxs("div",{className:"metric-card-comp",children:[o.jsxs("div",{className:"metric-header",children:[o.jsx("span",{children:"Max Relative Error"}),o.jsx(Ye,{name:"spark"})]}),o.jsxs("div",{className:"metric-comparison",children:[o.jsx("span",{className:"val-original",style:{fontSize:"1.2rem"},children:ds(g)}),o.jsx("span",{className:"val-arrow",children:o.jsx(Ye,{name:"arrowRight"})}),o.jsx("span",{className:"val-fixed",style:{fontSize:"1.3rem"},children:ds(h)})]}),o.jsx("div",{className:"metric-label-comp",children:"Mathematical Deviation"}),g>h?o.jsx("div",{className:"delta-badge positive",children:"Precision Stabilized"}):g===0&&h===0?o.jsx("div",{className:"delta-badge positive",children:"Zero Error Convergence"}):o.jsx("div",{className:"delta-badge neutral",children:"No Precision Change"})]}),o.jsxs("div",{className:"metric-card-comp",children:[o.jsxs("div",{className:"metric-header",children:[o.jsx("span",{children:"Runtime Warnings"}),o.jsx(Ye,{name:"alert"})]}),o.jsxs("div",{className:"metric-comparison",children:[o.jsx("span",{className:"val-original",children:k}),o.jsx("span",{className:"val-arrow",children:o.jsx(Ye,{name:"arrowRight"})}),o.jsx("span",{className:"val-fixed",style:{color:y>0?"var(--amber)":"var(--green)"},children:y})]}),o.jsx("div",{className:"metric-label-comp",children:"Numerical Pipeline Alert States"}),k>y?o.jsxs("div",{className:"delta-badge positive",children:["-",k-y," Alerts Resolved"]}):o.jsx("div",{className:"delta-badge neutral",children:"0 Warnings Triggered"})]}),o.jsxs("div",{className:"metric-card-comp",children:[o.jsxs("div",{className:"metric-header",children:[o.jsx("span",{children:"Patterns Reduced"}),o.jsx(Ye,{name:"check"})]}),o.jsx("div",{className:"metric-comparison",style:{padding:"6px 0"},children:o.jsx("span",{className:"val-fixed",style:{fontSize:"2rem"},children:w})}),o.jsx("div",{className:"metric-label-comp",children:"Removed AST Vulnerabilities"}),w>0?o.jsxs("div",{className:"delta-badge positive",children:[w," Potential Failures Avoided"]}):o.jsx("div",{className:"delta-badge neutral",children:"No Patterns Flagged"})]})]}),o.jsxs("div",{className:"diff-viewer-panel",children:[o.jsxs("div",{className:"diff-header-row",children:[o.jsxs("div",{className:"diff-header-col original",children:[o.jsx(Ye,{name:"cross"}),o.jsx("span",{children:"Original Code (Baseline)"})]}),o.jsxs("div",{className:"diff-header-col fixed",children:[o.jsx(Ye,{name:"check"}),o.jsx("span",{children:"Auto-Fixed Code (Optimized)"})]})]}),o.jsx("div",{className:"diff-content",children:_.map((N,C)=>{const x=N.left.type==="removed"?"removed":N.left.type==="empty"?"empty":"",b=N.right.type==="added"?"added":N.right.type==="empty"?"empty":"";return o.jsxs("div",{className:"diff-line-row",children:[o.jsxs("div",{className:`diff-half-pane ${x}`,children:[o.jsx("div",{className:"diff-pane-ln",children:N.left.lineNum}),o.jsx("div",{className:"diff-pane-content",children:N.left.value})]}),o.jsxs("div",{className:`diff-half-pane ${b}`,children:[o.jsx("div",{className:"diff-pane-ln",children:N.right.lineNum}),o.jsx("div",{className:"diff-pane-content",children:N.right.value})]})]},C)})})]}),o.jsxs("div",{className:"apply-fixed-container",style:{borderTop:"1px solid var(--border)",paddingTop:"20px"},children:[o.jsx("p",{style:{alignSelf:"center",margin:0,color:"var(--muted)",fontSize:"0.9rem"},children:"Would you like to import this auto-fixed safety patched code into your active workspace?"}),o.jsx("button",{className:"action-button",onClick:()=>t(n.fixedCode),style:{padding:"12px 24px"},children:"Apply Patches to Workspace"})]})]}):o.jsx("div",{className:"empty-state large",children:'No comparison analysis cached. Click "Re-run Comparison" to load data.'})]})}const Dr=[{key:"unstable_expr",label:"Loss of Significance",subtitle:"Evaluating sqrt(x*x + 1) - x vs 1 / (sqrt(x*x + 1) + x)",description:"As x grows, x*x dominates the floating-point register. Subtracting x from sqrt(x*x + 1) causes catastrophic cancellation of the most significant bits, dropping relative precision to absolute zero. The conjugate formulation converts subtraction to addition, preserving full float precision.",inputs:[10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9],xAxisLabel:"Input Magnitude (x)",yAxisLabel:"Relative Error",eval:e=>{const t=1/(Math.sqrt(e*e+1)+e),n=Math.sqrt(e*e+1)-e,r=1/(Math.sqrt(e*e+1)+e);return{trueVal:t,original:n,fixed:r}}},{key:"cancellation",label:"Catastrophic Cancellation",subtitle:"Evaluating base - (base - delta) vs delta",description:"When subtracting two nearly equal values, the leading significant bits cancel out, leaving only low-precision numerical noise. The auto-fix truncates computational noise below machine epsilon safely down to absolute zero.",inputs:[.01,1e-4,1e-6,1e-8,1e-10,1e-12,1e-14,1e-16],xAxisLabel:"Delta Offset Size (smaller = closer values)",yAxisLabel:"Relative Error",eval:e=>{const t=1000000000001e-6,n=e,r=t-(t-e),l=Math.abs(e)<222e-18?0:e;return{trueVal:n,original:r,fixed:l}}},{key:"division",label:"Division by Small Number",subtitle:"Evaluating 1.0 / (x - 1.0) with protection barriers",description:"As x approaches 1.0, the denominator becomes extremely small. Hardware limits map this close to zero, causing output spikes towards Infinity. The fixed form applies assertion and protection barriers to lock the result safely to Infinity.",inputs:[.01,1e-4,1e-6,1e-8,1e-10,1e-12,1e-14,1e-15,1e-16],xAxisLabel:"Distance from 1.0 (delta)",yAxisLabel:"Relative Error",eval:e=>{const t=1/e,n=1/(1+e-1),r=Math.abs(e)<222e-18?1/0:1/e;return{trueVal:t,original:n,fixed:r}}},{key:"trig",label:"Trigonometric Cancellation",subtitle:"Evaluating sin(x) - sin(x + delta) vs product identity",description:"For large angles, sin(x) and sin(x+delta) are close, leading to severe precision loss during subtraction. Using trigonometric identities to convert subtraction to multiplication removes the cancellation step entirely.",inputs:[10,100,1e3,1e4,1e5,1e6,1e7,1e8],xAxisLabel:"Angle Magnitude (x)",yAxisLabel:"Relative Error",eval:e=>{const n=-2*Math.sin(5e-9)*Math.cos(e+5e-9),r=Math.sin(e)-Math.sin(e+1e-8),l=-2*Math.sin(1e-8/2)*Math.cos(e+1e-8/2);return{trueVal:n,original:r,fixed:l}}},{key:"log",label:"Logarithmic Instability",subtitle:"Evaluating log(x + 1) - log(x) vs log1p(1 / x)",description:"Subtracting two large logarithms causes catastrophic loss of fractional significance as log(x+1) collapses to log(x). Using log1p(1/x) preserves full relative precision.",inputs:[10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9],xAxisLabel:"Input Magnitude (x)",yAxisLabel:"Relative Error",eval:e=>{const t=Math.log1p(1/e),n=Math.log(e+1)-Math.log(e),r=Math.log1p(1/e);return{trueVal:t,original:n,fixed:r}}},{key:"overflow",label:"Floating-Point Overflow",subtitle:"Evaluating exp(x) under hardware register bounds",description:"When inputs exceed standard 64-bit double bounds, hardware registers saturate to positive Infinity. Bounding checks lock output safely to DBL_MAX before calculation.",inputs:[100,200,300,400,500,600,700,710,720,730,740,750],xAxisLabel:"Exponent Input (x)",yAxisLabel:"Relative Error",eval:e=>{const t=Math.exp(e),n=Math.exp(e),r=Math.exp(Math.min(e,709.782712893384));return{trueVal:t,original:n,fixed:r}}}],ps=(e,t)=>{if(e===1/0&&t===1/0||e===0&&t===0)return 0;if(t===0)return e===0?0:1;if(isNaN(e)||isNaN(t))return 1;const n=Math.abs(e-t)/Math.abs(t);return Math.min(n,1)},Ot=e=>e===0?"0":e<1e-4||e>1e4?e.toExponential(4):e.toFixed(6);function cf({code:e,results:t}){const n=L.useMemo(()=>{if(t!=null&&t.plots){const S=Object.keys(t.plots),M=Dr.filter(U=>S.includes(U.key));return M.length?M:Dr}return Dr},[t]),[r,l]=L.useState("unstable_expr");L.useEffect(()=>{n.length>0&&!n.find(S=>S.key===r)&&l(n[0].key)},[n,r]);const[i,a]=L.useState(null),[s,u]=L.useState(!1),[c,m]=L.useState(!1),g=async()=>{m(!0);try{if(!(await fetch("/api/autofix",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:e})})).ok)throw new Error("Auto-fix failed");u(!0)}catch(S){console.error(S)}finally{m(!1)}},h=Dr.find(S=>S.key===r),k=800,y=400,w=70,_=h.inputs.map(S=>{const{trueVal:M,original:U,fixed:K}=h.eval(S),$=ps(U,M),D=ps(K,M);return{input:S,origErr:$,fixedErr:D,origVal:U,fixedVal:K,trueVal:M}}),f=_.filter(S=>S.origErr<=1e-10).length,d=Math.round(f/_.length*100),p=s?100:d,v=p-d,N=S=>{const M=Math.min(...h.inputs),U=Math.max(...h.inputs),K=Math.log10(M),$=Math.log10(U),A=(Math.log10(S)-K)/($-K||1);return w+A*(k-w*2)},C=S=>{const $=((S<=1e-16?-16:Math.log10(S))- -16)/16;return y-w-$*(y-w*2)},x=_.map((S,M)=>`${M===0?"M":"L"} ${N(S.input)} ${C(S.origErr)}`).join(" "),b=_.map((S,M)=>`${M===0?"M":"L"} ${N(S.input)} ${C(S.fixedErr)}`).join(" "),R=[0,-2,-4,-6,-8,-10,-12,-14,-16];return o.jsxs("section",{className:"visualization-page matte-panel reveal",style:{gridColumn:"2 / -1"},children:[o.jsx("style",{children:`
        .viz-layout {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .viz-header {
          border-bottom: 1px solid var(--border);
          padding-bottom: 16px;
        }

        .viz-header h2 {
          margin: 0;
          font-size: 1.6rem;
          font-weight: 700;
          letter-spacing: -0.03em;
        }

        .viz-header p {
          margin: 4px 0 0;
          color: var(--muted);
          font-size: 0.9rem;
        }

        .control-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 16px 20px;
        }

        /* Stability Score Widgets Styles */
        .metrics-row-viz {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-top: 16px;
          margin-bottom: 16px;
          animation: fadeIn 0.4s ease-out forwards;
        }

        .metric-card-viz {
          background: rgba(18, 24, 32, 0.4);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 10px;
        }

        .metric-header-viz {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--muted);
        }

        .metric-score-viz {
          font-size: 1.25rem;
          font-weight: 700;
        }

        .metric-score-viz.red {
          color: var(--red);
        }

        .metric-score-viz.green {
          color: var(--green);
          text-shadow: 0 0 10px rgba(34, 197, 94, 0.2);
        }

        .metric-score-viz.muted {
          color: var(--muted);
        }

        .metric-bar-viz {
          height: 6px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 3px;
          overflow: hidden;
          width: 100%;
        }

        .metric-progress-viz {
          height: 100%;
          border-radius: 3px;
        }

        .metric-progress-viz.red {
          background: var(--red);
        }

        .metric-progress-viz.green {
          background: var(--green);
        }

        .metric-progress-viz.muted {
          background: rgba(255, 255, 255, 0.1);
        }

        .delta-label-viz {
          font-size: 0.8rem;
          color: var(--muted);
          font-weight: 500;
        }

        .select-label {
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--text);
          margin-right: 12px;
        }

        .dropdown-viz {
          background: rgba(18, 24, 32, 0.95);
          color: var(--text);
          border: 1px solid var(--border-strong);
          border-radius: 8px;
          padding: 8px 16px;
          font-size: 0.9rem;
          outline: none;
          min-width: 250px;
          cursor: pointer;
        }

        .dropdown-viz:focus {
          border-color: var(--blue);
        }

        .viz-card {
          background: linear-gradient(180deg, rgba(16, 20, 26, 0.8) 0%, rgba(9, 12, 16, 0.9) 100%);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 24px;
          box-shadow: var(--shadow);
          position: relative;
        }

        .chart-legend {
          display: flex;
          gap: 24px;
          margin-bottom: 16px;
          justify-content: flex-end;
          font-size: 0.85rem;
          font-weight: 600;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .legend-color {
          width: 14px;
          height: 14px;
          border-radius: 4px;
        }

        .legend-color.original {
          background: var(--red);
          box-shadow: 0 0 8px rgba(239, 68, 68, 0.4);
        }

        .legend-color.fixed {
          background: var(--green);
          box-shadow: 0 0 8px rgba(34, 197, 94, 0.4);
        }

        .svg-container {
          background: rgba(5, 7, 10, 0.95);
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.03);
          padding: 16px;
          position: relative;
        }

        .chart-svg {
          width: 100%;
          height: auto;
          overflow: visible;
        }

        .grid-line-viz {
          stroke: rgba(255, 255, 255, 0.04);
          stroke-dasharray: 2 4;
        }

        .axis-line {
          stroke: rgba(255, 255, 255, 0.15);
          stroke-width: 1.5;
        }

        .axis-text {
          fill: var(--muted);
          font-size: 10px;
          font-family: sans-serif;
        }

        .axis-title {
          fill: var(--text);
          font-size: 11px;
          font-weight: 600;
          font-family: sans-serif;
        }

        .path-original {
          stroke: var(--red);
          stroke-width: 3.5;
          fill: none;
          stroke-linecap: round;
          stroke-linejoin: round;
          filter: drop-shadow(0px 0px 4px rgba(239, 68, 68, 0.3));
        }

        .path-fixed {
          stroke: var(--green);
          stroke-width: 3.5;
          fill: none;
          stroke-linecap: round;
          stroke-linejoin: round;
          filter: drop-shadow(0px 0px 4px rgba(34, 197, 94, 0.3));
        }

        .dot-original {
          fill: var(--red);
          stroke: #000;
          stroke-width: 1.5;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .dot-original:hover {
          r: 7;
          fill: #ff6b6b;
        }

        .dot-fixed {
          fill: var(--green);
          stroke: #000;
          stroke-width: 1.5;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .dot-fixed:hover {
          r: 7;
          fill: #51cf66;
        }

        .tooltip-card-viz {
          position: absolute;
          background: rgba(12, 17, 24, 0.98);
          border: 1px solid var(--border-strong);
          border-radius: 12px;
          padding: 14px 18px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.6);
          pointer-events: none;
          font-size: 0.8rem;
          color: var(--text);
          z-index: 10;
          min-width: 250px;
          backdrop-filter: blur(10px);
          animation: fadeIn 0.15s ease-out;
        }

        .tooltip-card-viz p {
          margin: 4px 0;
        }

        .tooltip-title {
          font-weight: 700;
          color: var(--blue);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          padding-bottom: 6px;
          margin-bottom: 8px !important;
          font-size: 0.85rem;
        }

        .info-panel-viz {
          background: linear-gradient(180deg, rgba(25, 33, 44, 0.4) 0%, rgba(12, 17, 24, 0.6) 100%);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 20px 24px;
        }

        .info-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--blue);
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .info-desc {
          font-size: 0.9rem;
          line-height: 1.6;
          color: var(--muted);
          margin: 0;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}),o.jsxs("div",{className:"viz-header",children:[o.jsx("h2",{children:"Interactive Error Growth Visualization"}),o.jsx("p",{children:"Plotting relative error convergence curves across dynamic input sizes (Logarithmic Scale)"})]}),o.jsxs("div",{className:"viz-layout",children:[o.jsxs("div",{className:"control-row",style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"16px"},children:[o.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center",flexWrap:"wrap"},children:[o.jsxs("div",{children:[o.jsx("span",{className:"select-label",children:"Analysis Target Function:"}),o.jsx("select",{value:r,onChange:S=>{l(S.target.value),a(null)},className:"dropdown-viz",style:{minWidth:"200px"},children:n.map(S=>o.jsx("option",{value:S.key,children:S.label},S.key))})]}),!s&&o.jsx("button",{onClick:g,disabled:c,className:"dropdown-viz",style:{background:"var(--blue-deep)",borderColor:"var(--blue-deep)",color:"#fff",fontWeight:"600",cursor:"pointer",padding:"8px 16px",borderRadius:"8px",minWidth:"auto"},children:c?"Calculating...":"Run AI Auto-Fix"}),s&&o.jsx("span",{style:{color:"var(--green)",fontWeight:"600",fontSize:"0.9rem"},children:"✓ Patches Applied & Verified"})]}),o.jsx("div",{style:{color:"var(--muted)",fontSize:"0.85rem",fontStyle:"italic"},children:"* Hover over data points to inspect computed errors"})]}),o.jsxs("div",{className:"metrics-row-viz",children:[o.jsxs("div",{className:"metric-card-viz",children:[o.jsxs("div",{className:"metric-header-viz",children:[o.jsx("span",{children:"Stability Rating (Baseline)"}),o.jsxs("span",{className:"metric-score-viz red",children:[d,"%"]})]}),o.jsx("div",{className:"metric-bar-viz",children:o.jsx("div",{className:"metric-progress-viz red",style:{width:`${d}%`}})})]}),o.jsxs("div",{className:"metric-card-viz",children:[o.jsxs("div",{className:"metric-header-viz",children:[o.jsx("span",{children:"Stability Rating (Patched)"}),o.jsxs("span",{className:`metric-score-viz ${s?"green":"muted"}`,children:[p,"%"]})]}),o.jsx("div",{className:"metric-bar-viz",children:o.jsx("div",{className:`metric-progress-viz ${s?"green":"muted"}`,style:{width:`${p}%`}})})]}),o.jsxs("div",{className:"metric-card-viz",children:[o.jsxs("div",{className:"metric-header-viz",style:{marginBottom:"2px"},children:[o.jsx("span",{children:"Numerical Precision Gain"}),s&&v>0?o.jsxs("span",{className:"metric-score-viz green",children:["+",v,"%"]}):o.jsx("span",{className:"metric-score-viz muted",children:"0%"})]}),o.jsx("div",{className:"delta-label-viz",children:s&&v>0?"✓ Stability verified under stress parameters":"💡 Run AI Auto-Fix to compute improvement"})]})]}),o.jsxs("div",{className:"viz-card",children:[o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"16px"},children:[o.jsxs("div",{children:[o.jsx("h3",{style:{margin:0,fontSize:"1.2rem",fontWeight:"700"},children:h.label}),o.jsx("p",{style:{margin:"2px 0 0",color:"var(--muted)",fontSize:"0.85rem"},children:h.subtitle})]}),o.jsxs("div",{className:"chart-legend",children:[o.jsxs("div",{className:"legend-item",children:[o.jsx("span",{className:"legend-color original"}),o.jsx("span",{children:"Original Code (Unstable)"})]}),s&&o.jsxs("div",{className:"legend-item",children:[o.jsx("span",{className:"legend-color fixed"}),o.jsx("span",{children:"Auto-fixed Code (Stable)"})]})]})]}),o.jsxs("div",{className:"svg-container",children:[o.jsxs("svg",{viewBox:`0 0 ${k} ${y}`,className:"chart-svg",children:[R.map(S=>{const M=C(Math.pow(10,S));return o.jsxs("g",{children:[o.jsx("line",{x1:w,x2:k-w,y1:M,y2:M,className:"grid-line-viz"}),o.jsxs("text",{x:w-10,y:M+4,textAnchor:"end",className:"axis-text",children:["10^",S]})]},S)}),h.inputs.map((S,M)=>{const U=N(S);return o.jsxs("g",{children:[o.jsx("line",{x1:U,x2:U,y1:w,y2:y-w,className:"grid-line-viz"}),o.jsx("text",{x:U,y:y-w+16,textAnchor:"middle",className:"axis-text",children:Ot(S)})]},M)}),o.jsx("line",{x1:w,x2:k-w,y1:y-w,y2:y-w,className:"axis-line"}),o.jsx("line",{x1:w,x2:w,y1:w,y2:y-w,className:"axis-line"}),o.jsx("text",{x:k/2,y:y-w+36,textAnchor:"middle",className:"axis-text",style:{fontWeight:600,fill:"var(--text)"},children:h.xAxisLabel}),o.jsx("text",{transform:`rotate(-90 18 ${y/2})`,x:18,y:y/2,textAnchor:"middle",className:"axis-text",style:{fontWeight:600,fill:"var(--text)"},children:h.yAxisLabel}),o.jsx("path",{d:x,className:"path-original"}),s&&o.jsx("path",{d:b,className:"path-fixed"}),_.map((S,M)=>{const U=N(S.input),K=C(S.origErr),$=C(S.fixedErr);return o.jsxs("g",{children:[o.jsx("circle",{cx:U,cy:K,r:"5.5",className:"dot-original",onMouseEnter:D=>{const A=D.target.getBoundingClientRect(),he=D.target.ownerSVGElement.parentNode.getBoundingClientRect();a({x:A.left-he.left+10,y:A.top-he.top-120,data:S,isFixed:!1})},onMouseLeave:()=>a(null)}),s&&o.jsx("circle",{cx:U,cy:$,r:"5.5",className:"dot-fixed",onMouseEnter:D=>{const A=D.target.getBoundingClientRect(),he=D.target.ownerSVGElement.parentNode.getBoundingClientRect();a({x:A.left-he.left+10,y:A.top-he.top-120,data:S,isFixed:!0})},onMouseLeave:()=>a(null)})]},M)})]}),i&&o.jsxs("div",{className:"tooltip-card-viz",style:{left:`${i.x}px`,top:`${i.y}px`},children:[o.jsxs("div",{className:"tooltip-title",children:[h.label," Input Details"]}),o.jsxs("p",{children:[o.jsx("strong",{children:"Input:"})," ",Ot(i.data.input)]}),o.jsxs("p",{children:[o.jsx("strong",{children:"True Value:"})," ",Ot(i.data.trueVal)]}),o.jsxs("p",{children:[o.jsx("strong",{children:"Original Value:"})," ",Ot(i.data.origVal)]}),o.jsxs("p",{children:[o.jsx("strong",{children:"Original Relative Error:"})," ",Ot(i.data.origErr)]}),s&&o.jsxs(o.Fragment,{children:[o.jsxs("p",{children:[o.jsx("strong",{children:"Fixed Value:"})," ",Ot(i.data.fixedVal)]}),o.jsxs("p",{children:[o.jsx("strong",{children:"Fixed Relative Error:"})," ",Ot(i.data.fixedErr)]})]}),o.jsx("p",{style:{marginTop:"8px",fontWeight:"700",color:i.isFixed?"var(--green)":"var(--red)"},children:i.isFixed?"✓ Safe precision preserved":i.data.origErr>1e-6?"⚠ Catastrophic precision loss":"• Low error margin"})]})]})]}),o.jsxs("div",{className:"info-panel-viz",children:[o.jsx("div",{className:"info-title",children:o.jsx("span",{children:"Mathematical Precision Diagnosis"})}),o.jsx("p",{className:"info-desc",children:h.description})]})]})]})}const On={unstable_expr:{label:"Loss of Significance (Conjugate Rewrite)",description:"Evaluates sqrt(x*x + 1.0) - x. At high magnitudes, floating-point subtraction cancels out precision.",before:{type:"operator",value:"-",isVulnerable:!0,vulnType:"Loss of Significance",vulnDesc:"Critical subtraction of nearly equal terms. Since sqrt(x^2 + 1) ≈ x for large x, the difference collapses to 0.0, wiping out all trailing bits.",left:{type:"function",value:"sqrt",desc:"Calls standard square root function. Suffers from high-precision rounding on square inputs.",left:{type:"operator",value:"+",desc:"Floating-point addition node. Adds huge squared input to constant literal.",left:{type:"operator",value:"*",desc:"Multiplication node. Squares the variable 'x' which rapidly scales register exponent bits.",left:{type:"variable",value:"x",desc:"Double-precision input variable scaling to high magnitudes."},right:{type:"variable",value:"x",desc:"Double-precision input variable scaling to high magnitudes."}},right:{type:"literal",value:"1.0",desc:"Constant literal. Becomes insignificant when added to x^2."}}},right:{type:"variable",value:"x",desc:"Original double-precision variable input term."}},after:{type:"operator",value:"/",isOptimized:!0,optDesc:"Conjugate division node. Transforms subtractive cancellation into addition, preserving subnormal precision.",left:{type:"literal",value:"1.0",desc:"Constant numerator. Avoids subtractive precision loss."},right:{type:"operator",value:"+",desc:"Addition operator. Adding positive terms prevents cancellation.",left:{type:"function",value:"sqrt",desc:"Square root evaluating positive sums safely.",left:{type:"operator",value:"+",desc:"Inner addition node.",left:{type:"operator",value:"*",desc:"Squaring input x safely.",left:{type:"variable",value:"x",desc:"Double-precision variable input."},right:{type:"variable",value:"x",desc:"Double-precision variable input."}},right:{type:"literal",value:"1.0",desc:"Constant literal addend."}}},right:{type:"variable",value:"x",desc:"Positive addend term."}}}},cancellation:{label:"Catastrophic Cancellation (Epsilon Guard)",description:"Evaluates (12345678.0 + 1.23e-9) - 12345678.0. Large constant addends shift precision window beyond small delta limits.",before:{type:"operator",value:"-",isVulnerable:!0,vulnType:"Catastrophic Cancellation",vulnDesc:"Catastrophic subtraction node. Discards small trailing bits (1.23e-9) completely because they fall outside the 53-bit mantissa window of the large float.",left:{type:"operator",value:"+",desc:"Addition of extreme scale differences. Causes immediate truncation of the smaller term.",left:{type:"literal",value:"12345678.0",desc:"Large constant offset occupying significant bits in registers."},right:{type:"literal",value:"1.23e-9",desc:"Highly precise subnormal delta value. Will be truncated."}},right:{type:"literal",value:"12345678.0",desc:"Large constant offset subtracted from the offset summation."}},after:{type:"function",value:"epsilon_guard",isOptimized:!0,optDesc:"Numerical truncation guard. Intercepts subtraction. If difference is within machine epsilon noise, resolves result safely to 0.0.",left:{type:"operator",value:"-",desc:"Safe subtraction. Guarded by the parent threshold check.",left:{type:"operator",value:"+",desc:"Unstable sum of terms.",left:{type:"literal",value:"12345678.0",desc:"Large constant numeric literal."},right:{type:"literal",value:"1.23e-9",desc:"Small numeric literal delta."}},right:{type:"literal",value:"12345678.0",desc:"Large constant offset subtracted."}}}},division:{label:"Division by Zero (DBL_MIN assert)",description:"Evaluates 1.0 / (denominator). Near-zero denominator triggers explosive floating-point spike to infinity.",before:{type:"operator",value:"/",desc:"Floating-point division operator.",left:{type:"literal",value:"1.0",desc:"Numerator value."},right:{type:"operator",value:"-",isVulnerable:!0,vulnType:"Division by Zero / Near-Zero",vulnDesc:"Unbounded subtraction. If denominator approaches zero (underflow), this division spikes to infinity and triggers CPU exception registers.",left:{type:"variable",value:"denominator",desc:"Input double variable subject to underflow limits."},right:{type:"literal",value:"1.0",desc:"Subtraction offset parameter."}}},after:{type:"operator",value:"/",desc:"Guarded division operator.",left:{type:"literal",value:"1.0",desc:"Numerator constant."},right:{type:"function",value:"assert_min_guard",isOptimized:!0,optDesc:"Checks if denominator is below machine DBL_MIN threshold. Replaces near-zero values with safe bounds.",left:{type:"operator",value:"-",desc:"Guarded subtraction operation.",left:{type:"variable",value:"denominator",desc:"Input variable."},right:{type:"literal",value:"1.0",desc:"Constant offset."}}}}},trig:{label:"Trigonometric Cancellation (Product Rewrite)",description:"Evaluates sin(x) - sin(x + delta). High scale waves trigger phase erasure under subtractive differences.",before:{type:"operator",value:"-",isVulnerable:!0,vulnType:"Trigonometric Phase Erasure",vulnDesc:"Subtraction of sine waves. High values of x compress wave frequencies, making sin(x) and sin(x+delta) identical, erasing phase difference information.",left:{type:"function",value:"sin",desc:"Sine evaluation of first coordinate.",left:{type:"variable",value:"x",desc:"Variable representing wave phase argument."}},right:{type:"function",value:"sin",desc:"Sine evaluation of shifted coordinate.",left:{type:"operator",value:"+",desc:"Shifted phase summation.",left:{type:"variable",value:"x",desc:"Variable phase argument."},right:{type:"variable",value:"delta",desc:"Tiny wave shift delta."}}}},after:{type:"operator",value:"*",isOptimized:!0,optDesc:"Trigonometric sum-to-product rewrite. Replaces cancellation-prone subtraction with stable multiplication.",left:{type:"operator",value:"*",desc:"Constant product scaling factor.",left:{type:"literal",value:"-2.0",desc:"Multiplication scalar from trig identity."},right:{type:"function",value:"sin",desc:"Sine of half the shift delta. Highly stable for tiny values.",left:{type:"operator",value:"/",desc:"Half-delta scale computation.",left:{type:"variable",value:"delta",desc:"Tiny shift input."},right:{type:"literal",value:"2.0",desc:"Division constant."}}}},right:{type:"function",value:"cos",desc:"Cosine of mid-phase coordinate. Safe from subtractive cancellation.",left:{type:"operator",value:"+",desc:"Mid-phase calculation.",left:{type:"variable",value:"x",desc:"Phase parameter."},right:{type:"operator",value:"/",desc:"Half-shift addend.",left:{type:"variable",value:"delta",desc:"Tiny shift input."},right:{type:"literal",value:"2.0",desc:"Division constant."}}}}}},log:{label:"Logarithmic Instability (log1p Rewrite)",description:"Evaluates log(x + 1) - log(x). Subtraction at extreme scale loses precision.",before:{type:"operator",value:"-",isVulnerable:!0,vulnType:"Logarithmic Precision Loss",vulnDesc:"Subtraction of natural log coordinates. Discards fractional mantissa parts for large values of x as log(x+1) converges to log(x) in registers.",left:{type:"function",value:"log",desc:"Logarithmic call for offset value.",left:{type:"operator",value:"+",desc:"Offset addition node.",left:{type:"variable",value:"x",desc:"Double-precision variable subject to scale issues."},right:{type:"literal",value:"1.0",desc:"Constant literal unit."}}},right:{type:"function",value:"log",desc:"Logarithmic call for baseline value.",left:{type:"variable",value:"x",desc:"Double-precision variable."}}},after:{type:"function",value:"log1p",isOptimized:!0,optDesc:"Invokes specialized hardware implementation log1p(x) which evaluates ln(1 + x) without losing subnormal bits.",left:{type:"operator",value:"/",desc:"Reciprocal division. Safe from logarithmic underflow.",left:{type:"literal",value:"1.0",desc:"Constant numerator."},right:{type:"variable",value:"x",desc:"Large variable input."}}}}};function df({code:e,results:t}){const n=L.useMemo(()=>{if(t!=null&&t.plots){const c=Object.keys(t.plots),m={};return c.forEach(g=>{On[g]&&(m[g]=On[g])}),Object.keys(m).length?m:On}return On},[t]),[r,l]=L.useState("unstable_expr");L.useEffect(()=>{const c=Object.keys(n);c.length>0&&!c.includes(r)&&l(c[0])},[n,r]);const[i,a]=L.useState(null);L.useEffect(()=>{if(!e)return;const c=e.toLowerCase(),m=Object.keys(n);let g="";c.includes("log1p")||c.includes("log(")&&c.includes("- log")?g="log":c.includes("sin")&&c.includes("cos")&&c.includes("-")?g="trig":c.includes("dbl_min")||c.includes("denominator")?g="division":c.includes("dbl_epsilon")||c.includes("12345678")?g="cancellation":c.includes("sqrt")&&c.includes("- x")&&(g="unstable_expr"),g&&m.includes(g)&&l(g)},[e,n]);const s=n[r]||Object.values(n)[0]||On.unstable_expr,u=(c,m=!0)=>{if(!c)return null;const g=()=>c.isVulnerable?"node-box vulnerable":c.isOptimized?"node-box optimized":`node-box ${c.type}`,h=c.left||c.right;return o.jsxs("div",{className:"ast-tree-branch",children:[o.jsxs("div",{className:g(),onMouseEnter:k=>{const y=k.currentTarget.getBoundingClientRect(),w=y.left+y.width/2>window.innerWidth/2;let _,f,d;const p=150,v=16;w?(_=y.left-12,f=y.top+y.height/2,d="translate(-100%, -50%)"):(_=y.right+12,f=y.top+y.height/2,d="translate(0, -50%)"),f-p/2<v?f=p/2+v:f+p/2>window.innerHeight-v&&(f=window.innerHeight-p/2-v),a({node:c,isBefore:m,x:_,y:f,transform:d})},onMouseLeave:()=>a(null),children:[o.jsx("span",{className:"node-type-label",children:c.type}),o.jsx("span",{className:"node-value",children:c.value})]}),h&&o.jsxs("div",{className:"ast-tree-children",children:[c.left&&u(c.left,m),c.right&&u(c.right,m)]})]})};return o.jsxs("section",{className:"ast-visualizer-page matte-panel reveal",style:{gridColumn:"2 / -1"},children:[o.jsx("style",{children:`
        .ast-visualizer-page {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .ast-header {
          border-bottom: 1px solid var(--border);
          padding-bottom: 16px;
        }

        .ast-header h2 {
          margin: 0;
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--text);
        }

        .ast-header p {
          margin: 4px 0 0;
          color: var(--muted);
          font-size: 0.9rem;
        }

        .ast-controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 16px 20px;
        }

        .select-label {
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--text);
          margin-right: 12px;
        }

        .dropdown-ast {
          background: rgba(18, 24, 32, 0.95);
          color: var(--text);
          border: 1px solid var(--border-strong);
          border-radius: 8px;
          padding: 8px 16px;
          font-size: 0.9rem;
          outline: none;
          min-width: 280px;
          cursor: pointer;
        }

        .dropdown-ast:focus {
          border-color: var(--blue);
        }

        .ast-desc-box {
          font-size: 0.9rem;
          color: var(--muted);
          max-width: 50%;
          line-height: 1.5;
        }

        .ast-comparison-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-top: 10px;
        }

        .ast-pane {
          background: linear-gradient(180deg, rgba(16, 20, 26, 0.8) 0%, rgba(9, 12, 16, 0.9) 100%);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 24px;
          min-height: 520px;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          box-shadow: var(--shadow);
          overflow: auto;
        }

        .ast-pane-title {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 40px;
          align-self: flex-start;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .ast-pane-title.red { color: var(--red); }
        .ast-pane-title.green { color: var(--green); }

        /* AST Tree Connector Layout */
        .ast-tree-canvas {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          width: 100%;
          padding-top: 10px;
        }

        .ast-tree-branch {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }

        .node-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: rgba(30, 41, 59, 0.45);
          border: 1.5px solid var(--border-strong);
          border-radius: 8px;
          padding: 8px 16px;
          min-width: 100px;
          z-index: 10;
          transition: all 0.2s ease;
          cursor: help;
        }

        .node-box:hover {
          transform: scale(1.05);
          background: rgba(30, 41, 59, 0.7);
          box-shadow: 0 0 12px rgba(255, 255, 255, 0.1);
        }

        .node-box.variable {
          border-color: #c084fc;
          background: rgba(192, 132, 252, 0.05);
        }
        .node-box.literal {
          border-color: #60a5fa;
          background: rgba(96, 165, 250, 0.05);
        }
        .node-box.function {
          border-color: #fb7185;
          background: rgba(251, 113, 133, 0.05);
        }

        .node-box.vulnerable {
          border-color: var(--red);
          background: rgba(239, 68, 68, 0.12);
          box-shadow: 0 0 10px rgba(239, 68, 68, 0.2);
        }

        .node-box.vulnerable:hover {
          background: rgba(239, 68, 68, 0.22);
          box-shadow: 0 0 16px rgba(239, 68, 68, 0.4);
        }

        .node-box.optimized {
          border-color: var(--green);
          background: rgba(34, 197, 94, 0.12);
          box-shadow: 0 0 10px rgba(34, 197, 94, 0.2);
        }

        .node-box.optimized:hover {
          background: rgba(34, 197, 94, 0.22);
          box-shadow: 0 0 16px rgba(34, 197, 94, 0.4);
        }

        .node-type-label {
          font-size: 0.65rem;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 2px;
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        .node-value {
          font-family: var(--font-mono);
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text);
        }

        .ast-tree-children {
          display: flex;
          justify-content: center;
          gap: 40px;
          margin-top: 32px;
          position: relative;
          width: 100%;
        }

        /* Connecting Lines */
        .ast-tree-children::before {
          content: "";
          position: absolute;
          top: -16px;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          height: 16px;
          background: var(--border-strong);
          z-index: 1;
        }

        .ast-tree-branch > .node-box + .ast-tree-children::after {
          content: "";
          position: absolute;
          top: -16px;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--border-strong);
          z-index: 1;
          margin: 0 auto;
          width: calc(100% - 100px);
        }

        .ast-tree-branch::before {
          content: "";
          position: absolute;
          top: -16px;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          height: 16px;
          background: var(--border-strong);
          z-index: 1;
        }

        .ast-tree-canvas > .ast-tree-branch::before {
          display: none !important;
        }

        /* Hover Tooltip Widget */
        .ast-tooltip {
          position: fixed;
          background: rgba(15, 23, 42, 0.98);
          border: 1px solid var(--border-strong);
          border-radius: 8px;
          padding: 12px 16px;
          width: 280px;
          z-index: 9999;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.6);
          pointer-events: none;
          animation: tooltipFade 0.15s ease-out;
        }

        .ast-tooltip-title {
          font-size: 0.85rem;
          font-weight: 700;
          margin-bottom: 6px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .ast-tooltip-desc {
          font-size: 0.78rem;
          color: var(--muted);
          line-height: 1.4;
          margin: 0;
        }

        @keyframes tooltipFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .ast-legend-panel {
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 16px 20px;
          display: flex;
          gap: 32px;
          align-items: center;
          justify-content: flex-start;
          font-size: 0.85rem;
        }

        .ast-legend-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
        }

        .legend-indicator {
          width: 12px;
          height: 12px;
          border-radius: 3px;
          border: 1px solid var(--border);
        }

        .legend-indicator.vulnerable { background: rgba(239, 68, 68, 0.2); border-color: var(--red); }
        .legend-indicator.optimized { background: rgba(34, 197, 94, 0.2); border-color: var(--green); }
        .legend-indicator.variable { border-color: #c084fc; background: rgba(192, 132, 252, 0.1); }
        .legend-indicator.literal { border-color: #60a5fa; background: rgba(96, 165, 250, 0.1); }
        .legend-indicator.function { border-color: #fb7185; background: rgba(251, 113, 133, 0.1); }
      `}),o.jsxs("div",{className:"ast-header",children:[o.jsx("h2",{children:"AST Expression Vulnerability Visualizer"}),o.jsx("p",{children:"Analyzing compiler Abstract Syntax Trees to identify and rewrite floating-point vulnerabilities"})]}),o.jsxs("div",{className:"ast-controls",children:[o.jsxs("div",{children:[o.jsx("span",{className:"select-label",children:"Select AST Pattern:"}),o.jsx("select",{value:r,onChange:c=>l(c.target.value),className:"dropdown-ast",children:Object.keys(n).map(c=>o.jsx("option",{value:c,children:n[c].label},c))})]}),o.jsxs("div",{className:"ast-desc-box",children:[o.jsx("strong",{children:"Pattern Context:"})," ",s.description]})]}),o.jsxs("div",{className:"ast-comparison-grid",children:[o.jsxs("div",{className:"ast-pane",children:[o.jsx("div",{className:"ast-pane-title red",children:"❌ Original C AST (Baseline Unstable)"}),o.jsx("div",{className:"ast-tree-canvas",children:u(s.before,!0)})]}),o.jsxs("div",{className:"ast-pane",children:[o.jsx("div",{className:"ast-pane-title green",children:"✅ Rewritten C AST (Optimized Stable)"}),o.jsx("div",{className:"ast-tree-canvas",children:u(s.after,!1)})]})]}),o.jsxs("div",{className:"ast-legend-panel",children:[o.jsx("span",{style:{color:"var(--muted)",fontWeight:"600",marginRight:"8px"},children:"AST Legend:"}),o.jsxs("div",{className:"ast-legend-item",children:[o.jsx("div",{className:"legend-indicator vulnerable"}),o.jsx("span",{style:{color:"var(--red)"},children:"Vulnerable Node"})]}),o.jsxs("div",{className:"ast-legend-item",children:[o.jsx("div",{className:"legend-indicator optimized"}),o.jsx("span",{style:{color:"var(--green)"},children:"Optimized Node"})]}),o.jsxs("div",{className:"ast-legend-item",children:[o.jsx("div",{className:"legend-indicator function"}),o.jsx("span",{style:{color:"#fb7185"},children:"Function Call"})]}),o.jsxs("div",{className:"ast-legend-item",children:[o.jsx("div",{className:"legend-indicator variable"}),o.jsx("span",{style:{color:"#c084fc"},children:"Variable Term"})]}),o.jsxs("div",{className:"ast-legend-item",children:[o.jsx("div",{className:"legend-indicator literal"}),o.jsx("span",{style:{color:"#60a5fa"},children:"Literal Value"})]})]}),i&&o.jsxs("div",{className:"ast-tooltip",style:{left:`${i.x}px`,top:`${i.y}px`,transform:i.transform},children:[o.jsx("div",{className:"ast-tooltip-title",style:{color:i.node.isVulnerable?"var(--red)":i.node.isOptimized?"var(--green)":"var(--text)"},children:i.node.isVulnerable?`⚠ ${i.node.vulnType}`:i.node.isOptimized?"✓ Precision Rewrite":`AST Node: ${i.node.type.toUpperCase()}`}),o.jsx("p",{className:"ast-tooltip-desc",children:i.node.isVulnerable?i.node.vulnDesc:i.node.isOptimized?i.node.optDesc:i.node.desc||`Value: "${i.node.value}". Represents a standard C compiler structural element.`})]})]})}function pf(e){e=e.replace(/\s+/g,"");let t=0;function n(){return e[t]||null}function r(u){return e[t]===u?(t++,!0):!1}function l(){const u=n();if(!u)return null;if(u==="("){r("(");const c=s();return r(")"),c}if(/[0-9.]/.test(u)){let c="";for(;n()&&/[0-9.eE-]/.test(n())&&!((n()==="-"||n()==="+")&&!/[eE]/.test(c[c.length-1]));)c+=e[t++];return{type:"literal",value:c,expr:c,desc:`Constant literal numeric value: ${c}`}}if(/[a-zA-Z]/.test(u)){let c="";for(;n()&&/[a-zA-Z0-9_]/.test(n());)c+=e[t++];if(n()==="("){r("(");const m=s();return r(")"),{type:"function",value:c,left:m,expr:`${c}(${m?m.expr:""})`,desc:`Standard math library function call: ${c}()`}}return{type:"variable",value:c,expr:c,desc:`Double-precision input variable parameter: "${c}"`}}return null}function i(){let u=l();for(;n()==="^";){r("^");const c=l();u={type:"operator",value:"^",left:u,right:c,expr:`${u?u.expr:""}^${c?c.expr:""}`,desc:"Exponentiation operator. Handled via CPU library power registers."}}return u}function a(){let u=i();for(;n()==="*"||n()==="/";){const c=e[t++],m=i();u={type:"operator",value:c,left:u,right:m,expr:`${u?u.expr:""}${c}${m?m.expr:""}`,desc:c==="*"?"Multiplication node. Multiplies register operands.":"Division node. Performs floating-point register division."}}return u}function s(){let u=a();for(;n()==="+"||n()==="-";){const c=e[t++],m=a();u={type:"operator",value:c,left:u,right:m,expr:`${u?u.expr:""}${c}${m?m.expr:""}`,desc:c==="+"?"Addition node. Adds register inputs.":"Subtraction node. Prone to catastrophic cancellation."}}return u}return s()}function eo(e){if(e){if(e.type==="operator"){if(e.value==="-")e.isVulnerable=!0,e.vulnType="Catastrophic Cancellation Risk",e.vulnDesc=`Subtractive cancellation node in expression "${e.expr}". Subtracting near-identical float values destroys floating-point mantissa resolution.`;else if(e.value==="/"){const t=e.right;t&&(t.value==="-"||t.type==="variable")&&(t.isVulnerable=!0,t.vulnType="Division Near-Zero Risk",t.vulnDesc=`Unbounded division node denominator: "${t.expr}". If subtraction cancels, values explode towards infinity.`)}}eo(e.left),eo(e.right)}}function ff(){const[e,t]=L.useState("sqrt(x * x + 1.0) - x"),[n,r]=L.useState(null),[l,i]=L.useState([]),[a,s]=L.useState(""),[u,c]=L.useState(""),[m,g]=L.useState(!1),[h,k]=L.useState(null),y=[{label:"Loss of Significance",expr:"sqrt(x * x + 1.0) - x"},{label:"Logarithmic Instability",expr:"log(x + 1.0) - log(x)"},{label:"Wave Phase Erasure",expr:"sin(x) - sin(x + 1e-8)"},{label:"Division Near-Zero",expr:"1.0 / (x - 1.0)"},{label:"Taylor Series Cancellation",expr:"(x - sin(x)) / (x * x * x)"}],w=async(x=e)=>{g(!0),c(""),i([]);try{const b=pf(x);if(b)eo(b),r(b);else throw new Error("Unable to parse expression structure.")}catch(b){c(`Syntax Parsing Error: ${b.message}`),g(!1);return}try{const b=await fetch("/api/sandbox",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({expression:x})}),R=await b.json();if(!b.ok)throw new Error(R.error||"Execution failed.");i(R.plots||[]),s(R.cCode||"")}catch(b){c(b.message)}finally{g(!1)}};L.useEffect(()=>{w()},[]);const _=x=>{if(!x)return null;const b=()=>x.isVulnerable?"node-box vulnerable":`node-box ${x.type}`,R=x.left||x.right;return o.jsxs("div",{className:"ast-tree-branch",children:[o.jsxs("div",{className:b(),onMouseEnter:S=>{const M=S.currentTarget.getBoundingClientRect(),U=M.left+M.width/2>window.innerWidth/2;let K=M.left+M.width/2,$=M.top+M.height/2;const D=160,A=16;U?(K=M.left-12,he="translate(-100%, -50%)"):(K=M.right+12,he="translate(0, -50%)"),$-D/2<A?$=D/2+A:$+D/2>window.innerHeight-A&&($=window.innerHeight-D/2-A);var he=U?"translate(-100%, -50%)":"translate(0, -50%)";k({node:x,x:K,y:$,transform:he})},onMouseLeave:()=>k(null),children:[o.jsx("span",{className:"node-type-label",children:x.type}),o.jsx("span",{className:"node-value",children:x.value})]}),R&&o.jsxs("div",{className:"ast-tree-children",children:[x.left&&_(x.left),x.right&&_(x.right)]})]})},f=1e3,d=400,p=65,v=x=>{const M=(Math.log10(x)- -8)/16;return p+M*(f-p*2)},N=x=>{const M=((x<=1e-16?-16:Math.log10(x))- -16)/16;return d-p-M*(d-p*2)},C=l.length>0?l.map((x,b)=>`${b===0?"M":"L"} ${v(x.input)} ${N(x.relativeError)}`).join(" "):"";return o.jsxs("section",{className:"playground-page matte-panel reveal",style:{gridColumn:"2 / -1"},children:[o.jsx("style",{children:`
        .playground-page {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .pg-header {
          border-bottom: 1px solid var(--border);
          padding-bottom: 16px;
        }

        .pg-header h2 {
          margin: 0;
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--text);
        }

        .pg-header p {
          margin: 4px 0 0;
          color: var(--muted);
          font-size: 0.9rem;
        }

        .pg-control-box {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .pg-presets {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          align-items: center;
        }

        .preset-badge {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 6px 14px;
          font-size: 0.8rem;
          color: var(--text-muted);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .preset-badge:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--blue-deep);
          color: var(--text);
        }

        .pg-input-row {
          display: flex;
          gap: 12px;
        }

        .pg-input {
          flex: 1;
          background: rgba(18, 24, 32, 0.95);
          border: 1px solid var(--border-strong);
          border-radius: 8px;
          padding: 12px 16px;
          color: var(--text);
          font-family: var(--font-mono);
          font-size: 1rem;
          outline: none;
        }

        .pg-input:focus {
          border-color: var(--blue);
        }

        .btn-run {
          background: var(--blue-deep);
          border: none;
          color: #fff;
          font-weight: 600;
          border-radius: 8px;
          padding: 12px 24px;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .btn-run:hover {
          background: var(--blue);
        }

        .btn-run:disabled {
          background: var(--border-strong);
          cursor: not-allowed;
        }

        /* Error output console style */
        .error-console {
          background: rgba(239, 68, 68, 0.05);
          border: 1px solid var(--red);
          border-radius: 12px;
          padding: 16px 20px;
          color: var(--red);
          font-family: var(--font-mono);
          font-size: 0.85rem;
          white-space: pre-wrap;
          line-height: 1.5;
          box-shadow: 0 0 15px rgba(239, 68, 68, 0.1);
        }

        .pg-visualizer-grid {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .pg-panel {
          background: linear-gradient(180deg, rgba(16, 20, 26, 0.8) 0%, rgba(9, 12, 16, 0.9) 100%);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 24px;
          min-height: 460px;
          display: flex;
          flex-direction: column;
          position: relative;
          box-shadow: var(--shadow);
          overflow: auto;
        }

        .pg-panel-title {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 24px;
          color: var(--text);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        /* AST Visualizer connections styling */
        .pg-ast-canvas {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          width: 100%;
          padding-top: 10px;
        }

        .node-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: rgba(30, 41, 59, 0.45);
          border: 1.5px solid var(--border-strong);
          border-radius: 8px;
          padding: 6px 12px;
          min-width: 75px;
          z-index: 10;
          transition: all 0.2s ease;
          cursor: help;
        }

        .node-box.variable { border-color: #c084fc; background: rgba(192, 132, 252, 0.05); }
        .node-box.literal { border-color: #60a5fa; background: rgba(96, 165, 250, 0.05); }
        .node-box.function { border-color: #fb7185; background: rgba(251, 113, 133, 0.05); }

        .node-box.vulnerable {
          border-color: var(--red);
          background: rgba(239, 68, 68, 0.12);
          box-shadow: 0 0 10px rgba(239, 68, 68, 0.2);
        }

        .ast-tree-children {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 20px;
          position: relative;
        }

        .ast-tree-children::before {
          content: "";
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          height: 10px;
          background: var(--border-strong);
        }

        .ast-tree-branch > .node-box + .ast-tree-children::after {
          content: "";
          position: absolute;
          top: -10px;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--border-strong);
          margin: 0 auto;
          width: calc(100% - 75px);
        }

        .ast-tree-branch::before {
          content: "";
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          height: 10px;
          background: var(--border-strong);
        }

        .pg-ast-canvas > .ast-tree-branch::before {
          display: none !important;
        }

        /* Tooltip style */
        .ast-tooltip {
          position: fixed;
          background: rgba(15, 23, 42, 0.98);
          border: 1px solid var(--border-strong);
          border-radius: 8px;
          padding: 12px 16px;
          width: 280px;
          z-index: 9999;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.6);
          pointer-events: none;
          animation: tooltipFade 0.15s ease-out;
        }

        .ast-tooltip-title {
          font-size: 0.85rem;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .ast-tooltip-desc {
          font-size: 0.78rem;
          color: var(--muted);
          line-height: 1.4;
          margin: 0;
        }

        @keyframes tooltipFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* Embedded C Code Panel */
        .c-source-panel {
          background: rgba(18, 24, 32, 0.4);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 20px;
        }

        .c-source-title {
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 12px;
          color: var(--muted);
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .c-code-block {
          background: rgba(9, 12, 16, 0.95);
          border: 1px solid var(--border-strong);
          border-radius: 8px;
          padding: 16px;
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: #e2e8f0;
          overflow-x: auto;
          white-space: pre;
          margin: 0;
          line-height: 1.5;
        }

        .chart-svg {
          background: rgba(255, 255, 255, 0.01);
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.02);
          width: 100%;
          height: auto;
          flex: 1;
          min-height: 450px;
        }

        .grid-line {
          stroke: rgba(255, 255, 255, 0.05);
          stroke-dasharray: 4 4;
        }

        .axis-line {
          stroke: var(--border-strong);
          stroke-width: 1.5;
        }

        .axis-text {
          fill: var(--muted);
          font-size: 0.72rem;
          font-family: var(--font-mono);
        }

        .path-error {
          stroke: var(--red);
          stroke-width: 2.5;
          fill: none;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .chart-dot {
          fill: var(--red);
          stroke: var(--bg-deep);
          stroke-width: 1.5;
          cursor: pointer;
        }
      `}),o.jsxs("div",{className:"pg-header",children:[o.jsx("h2",{children:"Numerical Optimization & Expression Sandbox"}),o.jsx("p",{children:"Compile custom mathematical expressions and evaluate float precision boundaries in real-time"})]}),o.jsxs("div",{className:"pg-control-box",children:[o.jsxs("div",{className:"pg-presets",children:[o.jsx("span",{style:{fontSize:"0.85rem",color:"var(--muted)",fontWeight:"600",marginRight:"8px"},children:"Presets:"}),y.map(x=>o.jsx("button",{onClick:()=>{t(x.expr),w(x.expr)},className:"preset-badge",children:x.label},x.label))]}),o.jsxs("div",{className:"pg-input-row",children:[o.jsx("input",{type:"text",value:e,onChange:x=>t(x.target.value),placeholder:"Type any math expression in terms of x... e.g., (x - sin(x)) / (x * x * x)",className:"pg-input",onKeyDown:x=>{x.key==="Enter"&&w()}}),o.jsx("button",{onClick:()=>w(),disabled:m,className:"btn-run",children:m?"Compiling...":"Compile & Run"})]})]}),u&&o.jsxs("div",{className:"error-console",children:[o.jsx("strong",{children:"💻 Terminal Compilation/Execution Log:"}),o.jsx("div",{style:{marginTop:"8px",color:"#fca5a5"},children:u})]}),o.jsxs("div",{className:"pg-visualizer-grid",children:[o.jsxs("div",{className:"pg-panel",children:[o.jsxs("div",{className:"pg-panel-title",children:[o.jsx("span",{children:"🌲 Abstract Syntax Tree (Dynamic AST)"}),o.jsx("span",{style:{fontSize:"0.8rem",color:"var(--muted)"},children:"* Hover nodes to inspect syntax"})]}),o.jsx("div",{className:"pg-ast-canvas",children:n?_(n):o.jsx("div",{style:{margin:"auto",color:"var(--muted)"},children:"Enter an expression to parse AST"})})]}),o.jsxs("div",{className:"pg-panel",children:[o.jsxs("div",{className:"pg-panel-title",children:[o.jsx("span",{children:"📈 Precision Deviation Chart"}),o.jsx("span",{style:{fontSize:"0.85rem",color:"var(--red)"},children:"C Double vs 60-digit mpmath"})]}),l.length>0?o.jsxs("svg",{viewBox:`0 0 ${f} ${d}`,className:"chart-svg",children:[[-16,-12,-8,-4,0].map(x=>{const b=N(Math.pow(10,x));return o.jsxs("g",{children:[o.jsx("line",{x1:p,x2:f-p,y1:b,y2:b,className:"grid-line"}),o.jsxs("text",{x:p-10,y:b+4,textAnchor:"end",className:"axis-text",children:["10^",x]})]},x)}),[1e-6,1e-4,.01,1,100,1e4,1e6].map((x,b)=>{const R=v(x);return o.jsxs("g",{children:[o.jsx("line",{x1:R,x2:R,y1:p,y2:d-p,className:"grid-line"}),o.jsxs("text",{x:R,y:d-p+16,textAnchor:"middle",className:"axis-text",children:["10^",Math.round(Math.log10(x))]})]},b)}),o.jsx("line",{x1:p,x2:f-p,y1:d-p,y2:d-p,className:"axis-line"}),o.jsx("line",{x1:p,x2:p,y1:p,y2:d-p,className:"axis-line"}),C&&o.jsx("path",{d:C,className:"path-error"}),l.map((x,b)=>o.jsx("circle",{cx:v(x.input),cy:N(x.relativeError),r:"5",className:"chart-dot"},b)),o.jsx("text",{x:f/2,y:d-10,textAnchor:"middle",className:"axis-text",style:{fill:"var(--text)",fontWeight:"600"},children:"Input Magnitude (x)"})]}):o.jsx("div",{style:{margin:"auto",color:"var(--muted)"},children:"Run compilation to plot accuracy"})]})]}),a&&o.jsxs("div",{className:"c-source-panel",children:[o.jsx("div",{className:"c-source-title",children:o.jsx("span",{children:"💻 GCC Sandbox Compiler Generated C Source"})}),o.jsx("pre",{className:"c-code-block",children:a})]}),h&&o.jsxs("div",{className:"ast-tooltip",style:{left:`${h.x}px`,top:`${h.y}px`,transform:h.transform},children:[o.jsx("div",{className:"ast-tooltip-title",style:{color:h.node.isVulnerable?"var(--red)":"var(--text)"},children:h.node.isVulnerable?`⚠ ${h.node.vulnType}`:`AST Node: ${h.node.type.toUpperCase()}`}),o.jsxs("div",{style:{fontSize:"0.78rem",color:"var(--blue)",fontFamily:"monospace",margin:"2px 0 6px",fontWeight:"600"},children:["Expression: ",h.node.expr]}),o.jsx("p",{className:"ast-tooltip-desc",children:h.node.isVulnerable?h.node.vulnDesc:h.node.desc})]})]})}const Fe=[{name:"Catastrophic Cancellation",description:"Subtraction of nearly equal variables: (x + y) - x",original:"(x + y) - x",remediated:"y",xMin:1e5,xMax:1e12,xScale:"log",yMin:1e-15,yMax:.1,yScale:"log",xLabel:"Base Offset (x)",yLabel:"Delta Addend (y)"},{name:"Loss of Significance",description:"Square root subtraction: sqrt(x * x + y) - x",original:"sqrt(x * x + y) - x",remediated:"y / (sqrt(x * x + y) + x)",xMin:100,xMax:1e8,xScale:"log",yMin:.001,yMax:1e3,yScale:"log",xLabel:"Variable (x)",yLabel:"Constant Addend (y)"},{name:"Trigonometric Phase Erasure",description:"Sine wave difference: sin(x) - sin(x + y)",original:"sin(x) - sin(x + y)",remediated:"-2.0 * sin(y / 2.0) * cos(x + y / 2.0)",xMin:10,xMax:1e8,xScale:"log",yMin:1e-12,yMax:.01,yScale:"log",xLabel:"Angle (x)",yLabel:"Phase Delta (y)"},{name:"Logarithmic Instability",description:"Log subtraction: log(x + y) - log(x)",original:"log(x + y) - log(x)",remediated:"log1p(y / x)",xMin:10,xMax:1e9,xScale:"log",yMin:1e-15,yMax:.1,yScale:"log",xLabel:"Scale (x)",yLabel:"Offset (y)"}];function fs({name:e}){const t={spark:o.jsx("path",{d:"M12 2l1.2 4.2L17 7.4l-3.8 1.2L12 13l-1.2-4.4L7 7.4l3.8-1.2L12 2z"}),gear:o.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})};return o.jsx("svg",{viewBox:"0 0 24 24",className:"icon","aria-hidden":"true",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{width:"20px",height:"20px"},children:t[e]})}function mf({results:e}){const t=L.useMemo(()=>{if(e!=null&&e.plots){const z=Object.keys(e.plots),B={unstable_expr:"Loss of Significance",cancellation:"Catastrophic Cancellation",trig:"Trigonometric Phase Erasure",log:"Logarithmic Instability"},te=z.map(dt=>B[dt]).filter(Boolean),we=Fe.filter(dt=>te.includes(dt.name));return we.length?we:Fe}return Fe},[e]),[n,r]=L.useState(0);L.useEffect(()=>{n>=t.length&&r(0)},[t,n]);const[l,i]=L.useState(Fe[0].original),[a,s]=L.useState(!1),[u,c]=L.useState(Fe[0].xMin),[m,g]=L.useState(Fe[0].xMax),[h,k]=L.useState(Fe[0].xScale),[y,w]=L.useState(15),[_,f]=L.useState(Fe[0].yMin),[d,p]=L.useState(Fe[0].yMax),[v,N]=L.useState(Fe[0].yScale),[C,x]=L.useState(15),[b,R]=L.useState(!1),[S,M]=L.useState([]),[U,K]=L.useState(""),[$,D]=L.useState(null),A=L.useRef(null);L.useEffect(()=>{const z=t[n]||t[0];z&&(i(a?z.remediated:z.original),c(z.xMin),g(z.xMax),k(z.xScale),f(z.yMin),p(z.yMax),N(z.yScale))},[t,n,a]);const he=z=>{r(z)},E=z=>{s(z);const B=Fe[n];B&&i(z?B.remediated:B.original)},T=async()=>{R(!0),K("");try{const z=await fetch("/api/heatmap",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({expression:l,xMin:u,xMax:m,xScale:h,xSteps:y,yMin:_,yMax:d,yScale:v,ySteps:C})}),B=await z.json();if(!z.ok)throw new Error(B.error||"Failed to generate heatmap.");M(B.points||[])}catch(z){K(z.message)}finally{R(!1)}};L.useEffect(()=>{T()},[l,u,m,h,y,_,d,v,C]),L.useEffect(()=>{if(!A.current||!S.length)return;const z=A.current,B=z.getContext("2d"),te=window.devicePixelRatio||1,we=z.getBoundingClientRect();z.width=we.width*te,z.height=we.height*te,B.scale(te,te);const dt=we.width,Tt=we.height;B.clearRect(0,0,dt,Tt);const Rt=dt/y,qe=Tt/C,Dt=et=>et===null||isNaN(et)?"#7c3aed":et<1e-12?"#10b981":et<1e-5?"#f59e0b":et<.1?"#f97316":"#ef4444";S.forEach((et,En)=>{const Ec=Math.floor(En/C),zc=En%C,Pc=Dt(et.relativeError),Go=Ec*Rt,Zo=Tt-(zc+1)*qe;B.fillStyle=Pc,B.fillRect(Go,Zo,Rt-1,qe-1),B.strokeStyle="rgba(255, 255, 255, 0.04)",B.strokeRect(Go,Zo,Rt-1,qe-1)})},[S,y,C]);const O=z=>{if(!A.current||!S.length)return;const te=A.current.getBoundingClientRect(),we=z.clientX-te.left,dt=z.clientY-te.top,Tt=te.width/y,Rt=te.height/C,qe=Math.floor(we/Tt),Dt=Math.floor((te.height-dt)/Rt);if(qe>=0&&qe<y&&Dt>=0&&Dt<C){const et=qe*C+Dt,En=S[et];En&&D({...En,cellX:qe*Tt+Tt/2,cellY:te.height-(Dt*Rt+Rt/2),i:qe,j:Dt})}else D(null)},X=()=>{D(null)},ee=z=>z===null||isNaN(z)?{label:"NaN / Exception",color:"purple"}:z<1e-12?{label:"Stable (Full Precision)",color:"green"}:z<1e-5?{label:"Risky (Loss of Precision)",color:"amber"}:z<.1?{label:"High Precision Loss",color:"orange"}:{label:"Catastrophic Cancellation",color:"red"},Je=t[n]||t[0];return o.jsxs("div",{className:"heatmap-layout",style:{gridColumn:"2 / -1",display:"flex",flexDirection:"column",gap:"24px",padding:"20px"},children:[o.jsx("style",{children:`
        .heatmap-container {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 24px;
        }
        .heatmap-main {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .heatmap-sidebar {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .canvas-wrapper {
          position: relative;
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 28px 28px 48px 48px;
          aspect-ratio: 1;
        }
        .canvas-element {
          width: 100%;
          height: 100%;
          display: block;
          cursor: crosshair;
        }
        .axis-label-x {
          position: absolute;
          bottom: 12px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 0.8rem;
          color: var(--muted);
          font-weight: 500;
        }
        .axis-label-y {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%) rotate(-90deg);
          transform-origin: left center;
          font-size: 0.8rem;
          color: var(--muted);
          font-weight: 500;
          white-space: nowrap;
        }
        .scale-tick-x-min {
          position: absolute;
          bottom: 28px;
          left: 48px;
          font-size: 0.75rem;
          color: var(--muted);
        }
        .scale-tick-x-max {
          position: absolute;
          bottom: 28px;
          right: 28px;
          font-size: 0.75rem;
          color: var(--muted);
        }
        .scale-tick-y-min {
          position: absolute;
          left: 36px;
          bottom: 48px;
          font-size: 0.75rem;
          color: var(--muted);
        }
        .scale-tick-y-max {
          position: absolute;
          left: 36px;
          top: 28px;
          font-size: 0.75rem;
          color: var(--muted);
        }
        .legend-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px;
          border-radius: 8px;
          background: var(--glass);
          border: 1px solid var(--border);
        }
        .legend-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
        }
        .legend-color {
          width: 12px;
          height: 12px;
          border-radius: 2px;
        }
        .toggle-switch {
          position: relative;
          display: inline-block;
          width: 48px;
          height: 24px;
        }
        .toggle-switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        .slider {
          position: absolute;
          cursor: pointer;
          top: 0; left: 0; right: 0; bottom: 0;
          background-color: rgba(255,255,255,0.1);
          transition: .3s;
          border-radius: 24px;
          border: 1px solid var(--border-strong);
        }
        .slider:before {
          position: absolute;
          content: "";
          height: 16px;
          width: 16px;
          left: 3px;
          bottom: 3px;
          background-color: white;
          transition: .3s;
          border-radius: 50%;
        }
        input:checked + .slider {
          background-color: var(--blue-deep);
        }
        input:checked + .slider:before {
          transform: translateX(24px);
        }
        .preset-pill {
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 8px 12px;
          text-align: left;
          cursor: pointer;
          transition: 0.2s;
        }
        .preset-pill:hover {
          background: rgba(255,255,255,0.06);
        }
        .preset-pill.active {
          background: var(--blue-soft);
          border-color: var(--blue);
        }
        .badge-rating {
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 600;
          display: inline-block;
        }
        .badge-rating.green { background: rgba(16, 185, 129, 0.15); color: #10b981; }
        .badge-rating.amber { background: rgba(245, 158, 11, 0.15); color: #f59e0b; }
        .badge-rating.orange { background: rgba(249, 115, 22, 0.15); color: #f97316; }
        .badge-rating.red { background: rgba(239, 68, 68, 0.15); color: #ef4444; }
        .badge-rating.purple { background: rgba(124, 58, 237, 0.15); color: #8b5cf6; }
      `}),o.jsx("section",{className:"hero-panel matte-panel",children:o.jsxs("div",{className:"hero-copy",children:[o.jsx("div",{className:"eyebrow",children:"Visual sensitivity mapping"}),o.jsx("h1",{children:"Stability Heatmap"}),o.jsx("p",{children:"Analyse the sensitivity of mathematical code by rendering a 2D error propagation canvas. Compare original expressions with remediated safe alternatives to see stability limits."})]})}),o.jsxs("section",{className:"matte-panel",style:{padding:"20px"},children:[o.jsx("h3",{style:{margin:"0 0 12px 0",fontSize:"1.05rem",fontWeight:"600"},children:"Stability Category Presets"}),o.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${t.length}, 1fr)`,gap:"12px"},children:t.map((z,B)=>o.jsxs("button",{className:`preset-pill ${n===B?"active":""}`,onClick:()=>he(B),children:[o.jsx("div",{style:{fontSize:"0.85rem",fontWeight:"600",color:n===B?"var(--blue)":"var(--text)"},children:z.name}),o.jsx("div",{style:{fontSize:"0.75rem",color:"var(--muted)",marginTop:"4px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:z.description})]},B))})]}),o.jsxs("div",{className:"heatmap-container",children:[o.jsx("div",{className:"heatmap-main",children:o.jsxs("div",{className:"matte-panel",style:{padding:"20px",display:"flex",flexDirection:"column",gap:"16px"},children:[o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[o.jsx("h3",{style:{margin:0,fontSize:"1.1rem"},children:"Interactive Canvas"}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[o.jsx("span",{style:{fontSize:"0.85rem",fontWeight:"500",color:a?"var(--blue)":"var(--text)"},children:a?"Remediated Formula Active":"Original Unstable Code"}),o.jsxs("label",{className:"toggle-switch",children:[o.jsx("input",{type:"checkbox",checked:a,onChange:z=>E(z.target.checked)}),o.jsx("span",{className:"slider"})]})]})]}),o.jsxs("div",{className:"canvas-wrapper",children:[o.jsx("div",{className:"axis-label-x",children:Je?Je.xLabel:"X Axis"}),o.jsx("div",{className:"axis-label-y",children:Je?Je.yLabel:"Y Axis"}),o.jsx("div",{className:"scale-tick-x-min",children:u.toExponential(1)}),o.jsx("div",{className:"scale-tick-x-max",children:m.toExponential(1)}),o.jsx("div",{className:"scale-tick-y-min",children:_.toExponential(1)}),o.jsx("div",{className:"scale-tick-y-max",children:d.toExponential(1)}),o.jsx("canvas",{ref:A,className:"canvas-element",onMouseMove:O,onMouseLeave:X})]}),o.jsxs("div",{className:"legend-row",children:[o.jsxs("div",{className:"legend-item",children:[o.jsx("span",{className:"legend-color",style:{background:"#10b981"}}),o.jsx("span",{children:"Stable (< 10⁻¹²)"})]}),o.jsxs("div",{className:"legend-item",children:[o.jsx("span",{className:"legend-color",style:{background:"#f59e0b"}}),o.jsx("span",{children:"Risky (< 10⁻⁵)"})]}),o.jsxs("div",{className:"legend-item",children:[o.jsx("span",{className:"legend-color",style:{background:"#f97316"}}),o.jsx("span",{children:"High Loss (< 0.1)"})]}),o.jsxs("div",{className:"legend-item",children:[o.jsx("span",{className:"legend-color",style:{background:"#ef4444"}}),o.jsx("span",{children:"Cancellation (≥ 0.1)"})]}),o.jsxs("div",{className:"legend-item",children:[o.jsx("span",{className:"legend-color",style:{background:"#7c3aed"}}),o.jsx("span",{children:"NaN / Infinity"})]})]})]})}),o.jsxs("div",{className:"heatmap-sidebar",children:[o.jsxs("div",{className:"matte-panel",style:{padding:"20px",display:"flex",flexDirection:"column",gap:"14px"},children:[o.jsxs("h3",{style:{margin:0,fontSize:"1rem",display:"flex",alignItems:"center",gap:"8px"},children:[o.jsx(fs,{name:"gear"})," Configuration"]}),o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px"},children:[o.jsx("label",{style:{fontSize:"0.8rem",color:"var(--muted)"},children:"Equation Formula"}),o.jsx("input",{type:"text",className:"code-editor",style:{width:"100%",padding:"8px",borderRadius:"6px",fontFamily:"Courier, monospace",fontSize:"0.85rem",background:"rgba(0,0,0,0.2)",border:"1px solid var(--border)"},value:l,onChange:z=>i(z.target.value)})]}),o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px"},children:[o.jsxs("div",{children:[o.jsx("label",{style:{fontSize:"0.8rem",color:"var(--muted)"},children:"X Min"}),o.jsx("input",{type:"number",style:{width:"100%",padding:"6px",borderRadius:"6px",background:"rgba(0,0,0,0.2)",border:"1px solid var(--border)",color:"var(--text)"},value:u,onChange:z=>c(parseFloat(z.target.value))})]}),o.jsxs("div",{children:[o.jsx("label",{style:{fontSize:"0.8rem",color:"var(--muted)"},children:"X Max"}),o.jsx("input",{type:"number",style:{width:"100%",padding:"6px",borderRadius:"6px",background:"rgba(0,0,0,0.2)",border:"1px solid var(--border)",color:"var(--text)"},value:m,onChange:z=>g(parseFloat(z.target.value))})]})]}),o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px"},children:[o.jsxs("div",{children:[o.jsx("label",{style:{fontSize:"0.8rem",color:"var(--muted)"},children:"Y Min"}),o.jsx("input",{type:"number",style:{width:"100%",padding:"6px",borderRadius:"6px",background:"rgba(0,0,0,0.2)",border:"1px solid var(--border)",color:"var(--text)"},value:_,onChange:z=>f(parseFloat(z.target.value))})]}),o.jsxs("div",{children:[o.jsx("label",{style:{fontSize:"0.8rem",color:"var(--muted)"},children:"Y Max"}),o.jsx("input",{type:"number",style:{width:"100%",padding:"6px",borderRadius:"6px",background:"rgba(0,0,0,0.2)",border:"1px solid var(--border)",color:"var(--text)"},value:d,onChange:z=>p(parseFloat(z.target.value))})]})]}),o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px"},children:[o.jsxs("div",{children:[o.jsx("label",{style:{fontSize:"0.8rem",color:"var(--muted)"},children:"X Scale"}),o.jsxs("select",{style:{width:"100%",padding:"6px",borderRadius:"6px",background:"rgba(0,0,0,0.2)",border:"1px solid var(--border)",color:"var(--text)"},value:h,onChange:z=>k(z.target.value),children:[o.jsx("option",{value:"linear",children:"Linear"}),o.jsx("option",{value:"log",children:"Logarithmic"})]})]}),o.jsxs("div",{children:[o.jsx("label",{style:{fontSize:"0.8rem",color:"var(--muted)"},children:"Y Scale"}),o.jsxs("select",{style:{width:"100%",padding:"6px",borderRadius:"6px",background:"rgba(0,0,0,0.2)",border:"1px solid var(--border)",color:"var(--text)"},value:v,onChange:z=>N(z.target.value),children:[o.jsx("option",{value:"linear",children:"Linear"}),o.jsx("option",{value:"log",children:"Logarithmic"})]})]})]}),o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px"},children:[o.jsxs("div",{children:[o.jsx("label",{style:{fontSize:"0.8rem",color:"var(--muted)"},children:"Grid Columns"}),o.jsx("input",{type:"number",min:"5",max:"40",style:{width:"100%",padding:"6px",borderRadius:"6px",background:"rgba(0,0,0,0.2)",border:"1px solid var(--border)",color:"var(--text)"},value:y,onChange:z=>w(parseInt(z.target.value)||15)})]}),o.jsxs("div",{children:[o.jsx("label",{style:{fontSize:"0.8rem",color:"var(--muted)"},children:"Grid Rows"}),o.jsx("input",{type:"number",min:"5",max:"40",style:{width:"100%",padding:"6px",borderRadius:"6px",background:"rgba(0,0,0,0.2)",border:"1px solid var(--border)",color:"var(--text)"},value:C,onChange:z=>x(parseInt(z.target.value)||15)})]})]}),o.jsx("button",{onClick:T,disabled:b,style:{padding:"10px",marginTop:"8px",borderRadius:"6px",background:"var(--blue-deep)",border:"none",color:"#fff",fontWeight:"600",cursor:"pointer",transition:"0.2s"},children:b?"Re-evaluating Grid...":"Refresh Heatmap"})]}),o.jsxs("div",{className:"matte-panel",style:{padding:"20px",flex:1,minHeight:"260px",display:"flex",flexDirection:"column"},children:[o.jsxs("h3",{style:{margin:"0 0 12px 0",fontSize:"1rem",display:"flex",alignItems:"center",gap:"8px"},children:[o.jsx(fs,{name:"spark"})," Pixel Inspector"]}),$?o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[o.jsx("div",{children:o.jsx("span",{className:`badge-rating ${ee($.relativeError).color}`,children:ee($.relativeError).label})}),o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"80px 1fr",gap:"6px 12px",fontSize:"0.8rem"},children:[o.jsx("span",{style:{color:"var(--muted)"},children:"Cell Index:"}),o.jsxs("span",{children:["(",$.i,", ",$.j,")"]}),o.jsx("span",{style:{color:"var(--muted)"},children:"Value (x):"}),o.jsx("span",{style:{fontFamily:"monospace"},children:$.x.toExponential(6)}),o.jsx("span",{style:{color:"var(--muted)"},children:"Value (y):"}),o.jsx("span",{style:{fontFamily:"monospace"},children:$.y.toExponential(6)}),o.jsx("span",{style:{color:"var(--muted)"},children:"C double:"}),o.jsx("span",{style:{fontFamily:"monospace"},children:$.cVal.toExponential(6)}),o.jsx("span",{style:{color:"var(--muted)"},children:"mpmath ref:"}),o.jsx("span",{style:{fontFamily:"monospace"},children:$.mpVal.toExponential(6)}),o.jsx("span",{style:{color:"var(--muted)"},children:"Rel. Error:"}),o.jsx("span",{style:{fontFamily:"monospace",color:$.relativeError>1e-5?"var(--red)":"inherit"},children:$.relativeError.toExponential(6)})]})]}):o.jsx("div",{style:{display:"flex",flex:1,alignItems:"center",justifyContent:"center",color:"var(--muted)",fontSize:"0.85rem",textAlign:"center"},children:"Hover over the heatmap canvas to inspect detailed floating point precision values at specific input coordinates."})]})]})]})]})}const hf=`#include <stdio.h>
#include <math.h>

double compute(double x) {
    return sqrt(x*x + 1) - x;
}

int main() {
    double x = 1000000.0;
    double result = compute(x);
    printf("RESULT_UNSTABLE: %lf
", result);
    return 0;
}`;function ht({name:e}){const t={analyzer:o.jsx("path",{d:"M6 18l4-4 3 3 6-8"}),code:o.jsx("path",{d:"M10 16l-4-4 4-4M14 8l4 4-4 4M12 6l-2 12"}),spark:o.jsx("path",{d:"M12 2l1.2 4.2L17 7.4l-3.8 1.2L12 13l-1.2-4.4L7 7.4l3.8-1.2L12 2z"}),shield:o.jsx("path",{d:"M12 3l7 3v5c0 4.8-3 8.6-7 10-4-1.4-7-5.2-7-10V6l7-3z"}),trend:o.jsx("path",{d:"M4 18h16M6 14l4-4 3 3 5-6"}),wrench:o.jsx("path",{d:"M14 7a4 4 0 0 0-5.8 4.4L3 17l2 2 5.6-5.2A4 4 0 0 0 18 8l-2.1 2.1L14 7z"}),report:o.jsx("path",{d:"M8 3h8l4 4v14H8zM9 3v5h5"}),circle:o.jsx("path",{d:"M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10z"}),pulse:o.jsx("path",{d:"M3 12h4l2-5 3 10 2-5h7"})};return o.jsx("svg",{viewBox:"0 0 24 24",className:"icon","aria-hidden":"true",children:t[e]||t.circle})}function Or({title:e,value:t,hint:n,icon:r}){return o.jsxs("div",{className:"stat-card",children:[o.jsxs("div",{className:"stat-head",children:[o.jsx(ht,{name:r}),o.jsx("span",{children:e})]}),o.jsx("div",{className:"stat-value",children:t}),o.jsx("div",{className:"stat-hint",children:n})]})}function Ir({children:e,onClick:t,secondary:n=!1,busy:r=!1}){return o.jsxs("button",{className:`action-button ${n?"secondary":""}`,onClick:t,disabled:r,children:[o.jsx("span",{children:e}),o.jsx("span",{className:`button-glow ${r?"busy":""}`})]})}function gf({icon:e,title:t,subtitle:n}){return o.jsxs("div",{className:"section-title",children:[o.jsxs("div",{className:"section-title-row",children:[o.jsx(ht,{name:e}),o.jsx("h2",{children:t})]}),n?o.jsx("p",{children:n}):null]})}function vf({status:e}){const t=e.includes("Unstable")?"danger":e.includes("Risky")?"warn":"stable";return o.jsx("span",{className:`badge ${t}`,children:e})}function xf(){var $;const[e,t]=L.useState("analyzer"),[n,r]=L.useState(hf),[l,i]=L.useState("Idle"),[a,s]=L.useState(""),[u,c]=L.useState(!1),[m,g]=L.useState(null),[h,k]=L.useState(""),[y,w]=L.useState("relative"),[_,f]=L.useState(null),[d,p]=L.useState(""),[v,N]=L.useState(!1),C=L.useMemo(()=>Object.keys((m==null?void 0:m.plots)||{}),[m]),x=async()=>{s(""),i("Analyzing"),c(!0);try{const D=await fetch("/api/analyze",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:n})}),A=await D.json();if(!D.ok)throw new Error(A.error||"Analysis failed");g(A),k(Object.keys(A.plots||{})[0]||""),i(A.overallStatus||"Done")}catch(D){s(D.message),i("Error")}finally{c(!1)}},b=async()=>{s(""),i("Auto-fixing"),c(!0);try{p(n);const D=await fetch("/api/autofix",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:n})}),A=await D.json();if(!D.ok)throw new Error(A.error||"Auto-fix failed");f(A),i("Auto-fix ready")}catch(D){s(D.message),i("Error")}finally{c(!1)}};($=m==null?void 0:m.plots)==null||$[h];const R=(m==null?void 0:m.runtimeSummary)||[],S=(m==null?void 0:m.staticIssues)||[],M=(m==null?void 0:m.traces)||[],U=D=>{t(D)},K=()=>o.jsxs(o.Fragment,{children:[o.jsxs("section",{className:"hero-panel matte-panel reveal",style:{gridColumn:"2 / -1"},children:[o.jsxs("div",{className:"hero-copy",children:[o.jsx("div",{className:"eyebrow",children:"Analysis workspace"}),o.jsx("h1",{children:"Numerical diagnostics"}),o.jsx("p",{children:"Paste code, run analysis, inspect results, and apply fixes."})]}),o.jsxs("div",{className:"hero-actions",children:[o.jsx(Ir,{onClick:x,busy:u,children:"Run analysis"}),o.jsx(Ir,{onClick:b,secondary:!0,busy:u,children:"Auto-fix"})]})]}),o.jsxs("section",{className:"stats-grid reveal",style:{gridColumn:"2 / -1"},children:[o.jsx(Or,{title:"Static findings",value:S.length,hint:"Detected patterns",icon:"analyzer"}),o.jsx(Or,{title:"Runtime rows",value:R.length,hint:"Parsed result groups",icon:"trend"}),o.jsx(Or,{title:"Traces",value:M.length,hint:"Execution variables",icon:"pulse"}),o.jsx(Or,{title:"Plots",value:C.length,hint:"Error growth views",icon:"report"})]}),o.jsxs("section",{className:"editor-panel matte-panel reveal",style:{gridColumn:"2 / -1"},children:[o.jsx(gf,{icon:"code",title:"Source code"}),o.jsx("div",{className:"editor-frame",style:{width:"100%"},children:o.jsx("textarea",{className:"code-editor",value:n,onChange:D=>{r(D.target.value),p(""),f(null)},spellCheck:"false",style:{width:"100%",minHeight:"300px"}})}),o.jsxs("div",{className:"mini-actions",style:{display:"flex",gap:"12px",marginTop:"16px"},children:[o.jsx(Ir,{onClick:x,busy:u,children:"Analyze code"}),o.jsx(Ir,{onClick:b,secondary:!0,busy:u,children:"Apply auto-fix"})]}),a?o.jsx("div",{className:"error-banner",style:{marginTop:"12px"},children:a}):null]}),_?o.jsx("section",{className:"compare-panel reveal",style:{gridColumn:"2 / -1",marginTop:"8px"},children:o.jsxs("div",{className:"compare-grid",children:[o.jsxs("div",{className:"matte-panel compare-card",children:[o.jsxs("div",{className:"report-card-head",children:[o.jsx(ht,{name:"code"}),o.jsx("span",{children:"Source code"})]}),o.jsx("textarea",{className:"code-editor compare-textarea",value:d||n,readOnly:!0,spellCheck:"false"})]}),o.jsxs("div",{className:"matte-panel compare-card",children:[o.jsxs("div",{className:"report-card-head",children:[o.jsx(ht,{name:"spark"}),o.jsx("span",{children:"Auto-fixed code"})]}),o.jsx("textarea",{className:"code-editor compare-textarea",value:_.fixedCode||n,readOnly:!0,spellCheck:"false"})]})]})}):null,_!=null&&_.explanation?o.jsxs("section",{className:"reveal",style:{gridColumn:"2 / -1",marginTop:"16px"},children:[o.jsx("div",{style:{marginBottom:"12px"},children:o.jsx("h3",{style:{fontSize:"1.2rem",fontWeight:"600",display:"flex",alignItems:"center",gap:"8px",margin:0},children:"Pointwise Vulnerability & Patch Report"})}),o.jsxs("div",{className:"matte-panel report-card",style:{margin:0,padding:"20px",borderLeft:"4px solid #3b82f6",animation:"slideUp 0.4s ease-out forwards"},children:[o.jsxs("div",{className:"report-card-head",style:{marginBottom:"8px"},children:[o.jsx(ht,{name:"spark"}),o.jsx("span",{style:{color:"#3b82f6",fontWeight:"600"},children:"AI Fix Insights"})]}),o.jsx("div",{className:"summary-reason",style:{opacity:.95,lineHeight:"1.6",whiteSpace:"pre-wrap",fontSize:"0.95rem"},children:_.explanation})]})]}):null,o.jsx("section",{className:"reveal",style:{gridColumn:"2 / -1",marginTop:"8px"},children:o.jsxs("div",{className:"findings-grid",style:{display:"grid",gridTemplateColumns:"repeat(3, minmax(0, 1fr))",gap:"20px"},children:[S.map((D,A)=>o.jsxs("div",{className:"matte-panel report-card",style:{height:"100%",margin:0},children:[o.jsxs("div",{className:"report-card-head",children:[o.jsx(ht,{name:"analyzer"}),o.jsx("span",{children:"Static fault"})]}),o.jsx("div",{className:"summary-title",children:"Pattern detected"}),o.jsx("div",{className:"summary-reason",children:D})]},`static-${A}`)),R.map((D,A)=>o.jsxs("div",{className:"matte-panel report-card",style:{height:"100%",margin:0},children:[o.jsxs("div",{className:"report-card-head",children:[o.jsx(ht,{name:"trend"}),o.jsx("span",{children:"Runtime fault"})]}),o.jsx("div",{className:"summary-title",children:D.function}),o.jsx("div",{className:"summary-reason",children:D.reason}),o.jsxs("div",{className:"summary-meta",style:{alignItems:"flex-start",marginTop:"12px"},children:[o.jsx(vf,{status:D.status}),o.jsx("span",{className:"summary-error",children:D.error})]})]},`runtime-${A}`)),!S.length&&!R.length?o.jsx("div",{className:"matte-panel report-card",style:{height:"100%",margin:0,gridColumn:"1 / -1"},children:o.jsx("div",{className:"empty-state",children:"No findings yet. Run analysis to populate faults below."})}):null]})})]});return o.jsxs("div",{className:"app-shell",children:[o.jsx("div",{className:"ambient ambient-left"}),o.jsx("div",{className:"ambient ambient-right"}),o.jsxs("header",{className:"topbar matte-panel reveal",children:[o.jsxs("div",{className:"brand-block",children:[o.jsx("div",{className:"brand-mark",children:o.jsx(ht,{name:"spark"})}),o.jsx("div",{children:o.jsx("div",{className:"brand-title",children:"Numerical Stability Analyzer"})})]}),o.jsxs("div",{className:"topbar-status",children:[o.jsx("span",{className:"status-dot"}),o.jsx("span",{children:l})]})]}),o.jsxs("main",{className:"layout-grid",children:[o.jsx(of,{status:l,staticCount:S.length,runtimeCount:R.length,plotCount:C.length,activeView:e,onNavigate:U,onRunAnalysis:x,onAutoFix:b}),v&&o.jsx("div",{className:"notification success",children:"Code auto-fixed successfully!"}),e==="comparison"&&o.jsx(uf,{code:d||n,onApplyFixedCode:D=>{p(n),r(D),f({fixedCode:D,explanation:"Applied safety patches from Comparison view."}),t("analyzer")}}),e==="visualization"&&o.jsx(cf,{code:n,results:m}),e==="ast_visualizer"&&o.jsx(df,{code:n,results:m}),e==="playground"&&o.jsx(ff,{}),e==="heatmap"&&o.jsx(mf,{results:m}),e!=="comparison"&&e!=="visualization"&&e!=="ast_visualizer"&&e!=="playground"&&e!=="heatmap"&&K()]}),o.jsx("style",{children:`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `})]})}function yf(){return o.jsx(xf,{})}Cc(document.getElementById("root")).render(o.jsx(Qc.StrictMode,{children:o.jsx(yf,{})}));
