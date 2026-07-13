(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function zc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ps={exports:{}},vl={},fs={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cr=Symbol.for("react.element"),Pc=Symbol.for("react.portal"),_c=Symbol.for("react.fragment"),Lc=Symbol.for("react.strict_mode"),Mc=Symbol.for("react.profiler"),Tc=Symbol.for("react.provider"),Rc=Symbol.for("react.context"),Dc=Symbol.for("react.forward_ref"),Ic=Symbol.for("react.suspense"),Oc=Symbol.for("react.memo"),Ac=Symbol.for("react.lazy"),Xo=Symbol.iterator;function Fc(e){return e===null||typeof e!="object"?null:(e=Xo&&e[Xo]||e["@@iterator"],typeof e=="function"?e:null)}var ms={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},hs=Object.assign,gs={};function Sn(e,t,n){this.props=e,this.context=t,this.refs=gs,this.updater=n||ms}Sn.prototype.isReactComponent={};Sn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Sn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function vs(){}vs.prototype=Sn.prototype;function Ji(e,t,n){this.props=e,this.context=t,this.refs=gs,this.updater=n||ms}var qi=Ji.prototype=new vs;qi.constructor=Ji;hs(qi,Sn.prototype);qi.isPureReactComponent=!0;var Go=Array.isArray,xs=Object.prototype.hasOwnProperty,eo={current:null},ys={key:!0,ref:!0,__self:!0,__source:!0};function ws(e,t,n){var r,l={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)xs.call(t,r)&&!ys.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];l.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:cr,type:e,key:i,ref:a,props:l,_owner:eo.current}}function Vc(e,t){return{$$typeof:cr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function to(e){return typeof e=="object"&&e!==null&&e.$$typeof===cr}function $c(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Zo=/\/+/g;function Tl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?$c(""+e.key):t.toString(36)}function Dr(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case cr:case Pc:a=!0}}if(a)return a=e,l=l(a),e=r===""?"."+Tl(a,0):r,Go(l)?(n="",e!=null&&(n=e.replace(Zo,"$&/")+"/"),Dr(l,t,n,"",function(c){return c})):l!=null&&(to(l)&&(l=Vc(l,n+(!l.key||a&&a.key===l.key?"":(""+l.key).replace(Zo,"$&/")+"/")+e)),t.push(l)),1;if(a=0,r=r===""?".":r+":",Go(e))for(var s=0;s<e.length;s++){i=e[s];var u=r+Tl(i,s);a+=Dr(i,t,n,u,l)}else if(u=Fc(e),typeof u=="function")for(e=u.call(e),s=0;!(i=e.next()).done;)i=i.value,u=r+Tl(i,s++),a+=Dr(i,t,n,u,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function hr(e,t,n){if(e==null)return e;var r=[],l=0;return Dr(e,r,"","",function(i){return t.call(n,i,l++)}),r}function Uc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ge={current:null},Ir={transition:null},Hc={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:Ir,ReactCurrentOwner:eo};function ks(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:hr,forEach:function(e,t,n){hr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return hr(e,function(){t++}),t},toArray:function(e){return hr(e,function(t){return t})||[]},only:function(e){if(!to(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=Sn;O.Fragment=_c;O.Profiler=Mc;O.PureComponent=Ji;O.StrictMode=Lc;O.Suspense=Ic;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hc;O.act=ks;O.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=hs({},e.props),l=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=eo.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)xs.call(t,u)&&!ys.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:cr,type:e.type,key:l,ref:i,props:r,_owner:a}};O.createContext=function(e){return e={$$typeof:Rc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Tc,_context:e},e.Consumer=e};O.createElement=ws;O.createFactory=function(e){var t=ws.bind(null,e);return t.type=e,t};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:Dc,render:e}};O.isValidElement=to;O.lazy=function(e){return{$$typeof:Ac,_payload:{_status:-1,_result:e},_init:Uc}};O.memo=function(e,t){return{$$typeof:Oc,type:e,compare:t===void 0?null:t}};O.startTransition=function(e){var t=Ir.transition;Ir.transition={};try{e()}finally{Ir.transition=t}};O.unstable_act=ks;O.useCallback=function(e,t){return ge.current.useCallback(e,t)};O.useContext=function(e){return ge.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return ge.current.useDeferredValue(e)};O.useEffect=function(e,t){return ge.current.useEffect(e,t)};O.useId=function(){return ge.current.useId()};O.useImperativeHandle=function(e,t,n){return ge.current.useImperativeHandle(e,t,n)};O.useInsertionEffect=function(e,t){return ge.current.useInsertionEffect(e,t)};O.useLayoutEffect=function(e,t){return ge.current.useLayoutEffect(e,t)};O.useMemo=function(e,t){return ge.current.useMemo(e,t)};O.useReducer=function(e,t,n){return ge.current.useReducer(e,t,n)};O.useRef=function(e){return ge.current.useRef(e)};O.useState=function(e){return ge.current.useState(e)};O.useSyncExternalStore=function(e,t,n){return ge.current.useSyncExternalStore(e,t,n)};O.useTransition=function(){return ge.current.useTransition()};O.version="18.3.1";fs.exports=O;var L=fs.exports;const Bc=zc(L);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wc=L,Qc=Symbol.for("react.element"),Yc=Symbol.for("react.fragment"),Kc=Object.prototype.hasOwnProperty,Xc=Wc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Gc={key:!0,ref:!0,__self:!0,__source:!0};function Ss(e,t,n){var r,l={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Kc.call(t,r)&&!Gc.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Qc,type:e,key:i,ref:a,props:l,_owner:Xc.current}}vl.Fragment=Yc;vl.jsx=Ss;vl.jsxs=Ss;ps.exports=vl;var o=ps.exports,js={exports:{}},Ee={},Ns={exports:{}},bs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,T){var R=C.length;C.push(T);e:for(;0<R;){var U=R-1>>>1,E=C[U];if(0<l(E,T))C[U]=T,C[R]=E,R=U;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var T=C[0],R=C.pop();if(R!==T){C[0]=R;e:for(var U=0,E=C.length,A=E>>>1;U<A;){var ne=2*(U+1)-1,Qe=C[ne],Pe=ne+1,_e=C[Pe];if(0>l(Qe,R))Pe<E&&0>l(_e,Qe)?(C[U]=_e,C[Pe]=R,U=Pe):(C[U]=Qe,C[ne]=R,U=ne);else if(Pe<E&&0>l(_e,R))C[U]=_e,C[Pe]=R,U=Pe;else break e}}return T}function l(C,T){var R=C.sortIndex-T.sortIndex;return R!==0?R:C.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var u=[],c=[],h=1,g=null,m=3,w=!1,k=!1,j=!1,M=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(C){for(var T=n(c);T!==null;){if(T.callback===null)r(c);else if(T.startTime<=C)r(c),T.sortIndex=T.expirationTime,t(u,T);else break;T=n(c)}}function x(C){if(j=!1,p(C),!k)if(n(u)!==null)k=!0,J(N);else{var T=n(c);T!==null&&We(x,T.startTime-C)}}function N(C,T){k=!1,j&&(j=!1,f(v),v=-1),w=!0;var R=m;try{for(p(T),g=n(u);g!==null&&(!(g.expirationTime>T)||C&&!D());){var U=g.callback;if(typeof U=="function"){g.callback=null,m=g.priorityLevel;var E=U(g.expirationTime<=T);T=e.unstable_now(),typeof E=="function"?g.callback=E:g===n(u)&&r(u),p(T)}else r(u);g=n(u)}if(g!==null)var A=!0;else{var ne=n(c);ne!==null&&We(x,ne.startTime-T),A=!1}return A}finally{g=null,m=R,w=!1}}var b=!1,y=null,v=-1,P=5,_=-1;function D(){return!(e.unstable_now()-_<P)}function V(){if(y!==null){var C=e.unstable_now();_=C;var T=!0;try{T=y(!0,C)}finally{T?Y():(b=!1,y=null)}}else b=!1}var Y;if(typeof d=="function")Y=function(){d(V)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,I=B.port2;B.port1.onmessage=V,Y=function(){I.postMessage(null)}}else Y=function(){M(V,0)};function J(C){y=C,b||(b=!0,Y())}function We(C,T){v=M(function(){C(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){k||w||(k=!0,J(N))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(C){switch(m){case 1:case 2:case 3:var T=3;break;default:T=m}var R=m;m=T;try{return C()}finally{m=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,T){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var R=m;m=C;try{return T()}finally{m=R}},e.unstable_scheduleCallback=function(C,T,R){var U=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?U+R:U):R=U,C){case 1:var E=-1;break;case 2:E=250;break;case 5:E=1073741823;break;case 4:E=1e4;break;default:E=5e3}return E=R+E,C={id:h++,callback:T,priorityLevel:C,startTime:R,expirationTime:E,sortIndex:-1},R>U?(C.sortIndex=R,t(c,C),n(u)===null&&C===n(c)&&(j?(f(v),v=-1):j=!0,We(x,R-U))):(C.sortIndex=E,t(u,C),k||w||(k=!0,J(N))),C},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(C){var T=m;return function(){var R=m;m=T;try{return C.apply(this,arguments)}finally{m=R}}}})(bs);Ns.exports=bs;var Zc=Ns.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jc=L,Ce=Zc;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Cs=new Set,Yn={};function Yt(e,t){hn(e,t),hn(e+"Capture",t)}function hn(e,t){for(Yn[e]=t,e=0;e<t.length;e++)Cs.add(t[e])}var ot=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ii=Object.prototype.hasOwnProperty,qc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Jo={},qo={};function ed(e){return ii.call(qo,e)?!0:ii.call(Jo,e)?!1:qc.test(e)?qo[e]=!0:(Jo[e]=!0,!1)}function td(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function nd(e,t,n,r){if(t===null||typeof t>"u"||td(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ve(e,t,n,r,l,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ue[e]=new ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ue[t]=new ve(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ue[e]=new ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ue[e]=new ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ue[e]=new ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ue[e]=new ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ue[e]=new ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ue[e]=new ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ue[e]=new ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var no=/[\-:]([a-z])/g;function ro(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(no,ro);ue[t]=new ve(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(no,ro);ue[t]=new ve(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(no,ro);ue[t]=new ve(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ue[e]=new ve(e,1,!1,e.toLowerCase(),null,!1,!1)});ue.xlinkHref=new ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ue[e]=new ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function lo(e,t,n,r){var l=ue.hasOwnProperty(t)?ue[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(nd(t,n,l,r)&&(n=null),r||l===null?ed(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ct=Jc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,gr=Symbol.for("react.element"),Gt=Symbol.for("react.portal"),Zt=Symbol.for("react.fragment"),io=Symbol.for("react.strict_mode"),oi=Symbol.for("react.profiler"),Es=Symbol.for("react.provider"),zs=Symbol.for("react.context"),oo=Symbol.for("react.forward_ref"),ai=Symbol.for("react.suspense"),si=Symbol.for("react.suspense_list"),ao=Symbol.for("react.memo"),pt=Symbol.for("react.lazy"),Ps=Symbol.for("react.offscreen"),ea=Symbol.iterator;function Cn(e){return e===null||typeof e!="object"?null:(e=ea&&e[ea]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,Rl;function Rn(e){if(Rl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Rl=t&&t[1]||""}return`
`+Rl+e}var Dl=!1;function Il(e,t){if(!e||Dl)return"";Dl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),i=r.stack.split(`
`),a=l.length-1,s=i.length-1;1<=a&&0<=s&&l[a]!==i[s];)s--;for(;1<=a&&0<=s;a--,s--)if(l[a]!==i[s]){if(a!==1||s!==1)do if(a--,s--,0>s||l[a]!==i[s]){var u=`
`+l[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=s);break}}}finally{Dl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Rn(e):""}function rd(e){switch(e.tag){case 5:return Rn(e.type);case 16:return Rn("Lazy");case 13:return Rn("Suspense");case 19:return Rn("SuspenseList");case 0:case 2:case 15:return e=Il(e.type,!1),e;case 11:return e=Il(e.type.render,!1),e;case 1:return e=Il(e.type,!0),e;default:return""}}function ui(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Zt:return"Fragment";case Gt:return"Portal";case oi:return"Profiler";case io:return"StrictMode";case ai:return"Suspense";case si:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case zs:return(e.displayName||"Context")+".Consumer";case Es:return(e._context.displayName||"Context")+".Provider";case oo:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ao:return t=e.displayName||null,t!==null?t:ui(e.type)||"Memo";case pt:t=e._payload,e=e._init;try{return ui(e(t))}catch{}}return null}function ld(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ui(t);case 8:return t===io?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Et(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _s(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function id(e){var t=_s(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function vr(e){e._valueTracker||(e._valueTracker=id(e))}function Ls(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=_s(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Yr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ci(e,t){var n=t.checked;return Z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ta(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Et(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ms(e,t){t=t.checked,t!=null&&lo(e,"checked",t,!1)}function di(e,t){Ms(e,t);var n=Et(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?pi(e,t.type,n):t.hasOwnProperty("defaultValue")&&pi(e,t.type,Et(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function na(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function pi(e,t,n){(t!=="number"||Yr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Dn=Array.isArray;function un(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Et(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function fi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return Z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ra(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(Dn(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Et(n)}}function Ts(e,t){var n=Et(t.value),r=Et(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function la(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Rs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Rs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var xr,Ds=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(xr=xr||document.createElement("div"),xr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=xr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Kn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var An={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},od=["Webkit","ms","Moz","O"];Object.keys(An).forEach(function(e){od.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),An[t]=An[e]})});function Is(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||An.hasOwnProperty(e)&&An[e]?(""+t).trim():t+"px"}function Os(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Is(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var ad=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hi(e,t){if(t){if(ad[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function gi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vi=null;function so(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xi=null,cn=null,dn=null;function ia(e){if(e=fr(e)){if(typeof xi!="function")throw Error(S(280));var t=e.stateNode;t&&(t=Sl(t),xi(e.stateNode,e.type,t))}}function As(e){cn?dn?dn.push(e):dn=[e]:cn=e}function Fs(){if(cn){var e=cn,t=dn;if(dn=cn=null,ia(e),t)for(e=0;e<t.length;e++)ia(t[e])}}function Vs(e,t){return e(t)}function $s(){}var Ol=!1;function Us(e,t,n){if(Ol)return e(t,n);Ol=!0;try{return Vs(e,t,n)}finally{Ol=!1,(cn!==null||dn!==null)&&($s(),Fs())}}function Xn(e,t){var n=e.stateNode;if(n===null)return null;var r=Sl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var yi=!1;if(ot)try{var En={};Object.defineProperty(En,"passive",{get:function(){yi=!0}}),window.addEventListener("test",En,En),window.removeEventListener("test",En,En)}catch{yi=!1}function sd(e,t,n,r,l,i,a,s,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var Fn=!1,Kr=null,Xr=!1,wi=null,ud={onError:function(e){Fn=!0,Kr=e}};function cd(e,t,n,r,l,i,a,s,u){Fn=!1,Kr=null,sd.apply(ud,arguments)}function dd(e,t,n,r,l,i,a,s,u){if(cd.apply(this,arguments),Fn){if(Fn){var c=Kr;Fn=!1,Kr=null}else throw Error(S(198));Xr||(Xr=!0,wi=c)}}function Kt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Hs(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function oa(e){if(Kt(e)!==e)throw Error(S(188))}function pd(e){var t=e.alternate;if(!t){if(t=Kt(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return oa(l),e;if(i===r)return oa(l),t;i=i.sibling}throw Error(S(188))}if(n.return!==r.return)n=l,r=i;else{for(var a=!1,s=l.child;s;){if(s===n){a=!0,n=l,r=i;break}if(s===r){a=!0,r=l,n=i;break}s=s.sibling}if(!a){for(s=i.child;s;){if(s===n){a=!0,n=i,r=l;break}if(s===r){a=!0,r=i,n=l;break}s=s.sibling}if(!a)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function Bs(e){return e=pd(e),e!==null?Ws(e):null}function Ws(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ws(e);if(t!==null)return t;e=e.sibling}return null}var Qs=Ce.unstable_scheduleCallback,aa=Ce.unstable_cancelCallback,fd=Ce.unstable_shouldYield,md=Ce.unstable_requestPaint,ee=Ce.unstable_now,hd=Ce.unstable_getCurrentPriorityLevel,uo=Ce.unstable_ImmediatePriority,Ys=Ce.unstable_UserBlockingPriority,Gr=Ce.unstable_NormalPriority,gd=Ce.unstable_LowPriority,Ks=Ce.unstable_IdlePriority,xl=null,Ze=null;function vd(e){if(Ze&&typeof Ze.onCommitFiberRoot=="function")try{Ze.onCommitFiberRoot(xl,e,void 0,(e.current.flags&128)===128)}catch{}}var Ue=Math.clz32?Math.clz32:wd,xd=Math.log,yd=Math.LN2;function wd(e){return e>>>=0,e===0?32:31-(xd(e)/yd|0)|0}var yr=64,wr=4194304;function In(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Zr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~l;s!==0?r=In(s):(i&=a,i!==0&&(r=In(i)))}else a=n&~l,a!==0?r=In(a):i!==0&&(r=In(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ue(t),l=1<<n,r|=e[n],t&=~l;return r}function kd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Ue(i),s=1<<a,u=l[a];u===-1?(!(s&n)||s&r)&&(l[a]=kd(s,t)):u<=t&&(e.expiredLanes|=s),i&=~s}}function ki(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Xs(){var e=yr;return yr<<=1,!(yr&4194240)&&(yr=64),e}function Al(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function dr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ue(t),e[t]=n}function jd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Ue(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function co(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ue(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var $=0;function Gs(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Zs,po,Js,qs,eu,Si=!1,kr=[],yt=null,wt=null,kt=null,Gn=new Map,Zn=new Map,ht=[],Nd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sa(e,t){switch(e){case"focusin":case"focusout":yt=null;break;case"dragenter":case"dragleave":wt=null;break;case"mouseover":case"mouseout":kt=null;break;case"pointerover":case"pointerout":Gn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zn.delete(t.pointerId)}}function zn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=fr(t),t!==null&&po(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function bd(e,t,n,r,l){switch(t){case"focusin":return yt=zn(yt,e,t,n,r,l),!0;case"dragenter":return wt=zn(wt,e,t,n,r,l),!0;case"mouseover":return kt=zn(kt,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Gn.set(i,zn(Gn.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Zn.set(i,zn(Zn.get(i)||null,e,t,n,r,l)),!0}return!1}function tu(e){var t=Ot(e.target);if(t!==null){var n=Kt(t);if(n!==null){if(t=n.tag,t===13){if(t=Hs(n),t!==null){e.blockedOn=t,eu(e.priority,function(){Js(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Or(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ji(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);vi=r,n.target.dispatchEvent(r),vi=null}else return t=fr(n),t!==null&&po(t),e.blockedOn=n,!1;t.shift()}return!0}function ua(e,t,n){Or(e)&&n.delete(t)}function Cd(){Si=!1,yt!==null&&Or(yt)&&(yt=null),wt!==null&&Or(wt)&&(wt=null),kt!==null&&Or(kt)&&(kt=null),Gn.forEach(ua),Zn.forEach(ua)}function Pn(e,t){e.blockedOn===t&&(e.blockedOn=null,Si||(Si=!0,Ce.unstable_scheduleCallback(Ce.unstable_NormalPriority,Cd)))}function Jn(e){function t(l){return Pn(l,e)}if(0<kr.length){Pn(kr[0],e);for(var n=1;n<kr.length;n++){var r=kr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(yt!==null&&Pn(yt,e),wt!==null&&Pn(wt,e),kt!==null&&Pn(kt,e),Gn.forEach(t),Zn.forEach(t),n=0;n<ht.length;n++)r=ht[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ht.length&&(n=ht[0],n.blockedOn===null);)tu(n),n.blockedOn===null&&ht.shift()}var pn=ct.ReactCurrentBatchConfig,Jr=!0;function Ed(e,t,n,r){var l=$,i=pn.transition;pn.transition=null;try{$=1,fo(e,t,n,r)}finally{$=l,pn.transition=i}}function zd(e,t,n,r){var l=$,i=pn.transition;pn.transition=null;try{$=4,fo(e,t,n,r)}finally{$=l,pn.transition=i}}function fo(e,t,n,r){if(Jr){var l=ji(e,t,n,r);if(l===null)Kl(e,t,r,qr,n),sa(e,r);else if(bd(l,e,t,n,r))r.stopPropagation();else if(sa(e,r),t&4&&-1<Nd.indexOf(e)){for(;l!==null;){var i=fr(l);if(i!==null&&Zs(i),i=ji(e,t,n,r),i===null&&Kl(e,t,r,qr,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else Kl(e,t,r,null,n)}}var qr=null;function ji(e,t,n,r){if(qr=null,e=so(r),e=Ot(e),e!==null)if(t=Kt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Hs(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return qr=e,null}function nu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hd()){case uo:return 1;case Ys:return 4;case Gr:case gd:return 16;case Ks:return 536870912;default:return 16}default:return 16}}var vt=null,mo=null,Ar=null;function ru(){if(Ar)return Ar;var e,t=mo,n=t.length,r,l="value"in vt?vt.value:vt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===l[i-r];r++);return Ar=l.slice(e,1<r?1-r:void 0)}function Fr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Sr(){return!0}function ca(){return!1}function ze(e){function t(n,r,l,i,a){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Sr:ca,this.isPropagationStopped=ca,this}return Z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Sr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Sr)},persist:function(){},isPersistent:Sr}),t}var jn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ho=ze(jn),pr=Z({},jn,{view:0,detail:0}),Pd=ze(pr),Fl,Vl,_n,yl=Z({},pr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:go,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_n&&(_n&&e.type==="mousemove"?(Fl=e.screenX-_n.screenX,Vl=e.screenY-_n.screenY):Vl=Fl=0,_n=e),Fl)},movementY:function(e){return"movementY"in e?e.movementY:Vl}}),da=ze(yl),_d=Z({},yl,{dataTransfer:0}),Ld=ze(_d),Md=Z({},pr,{relatedTarget:0}),$l=ze(Md),Td=Z({},jn,{animationName:0,elapsedTime:0,pseudoElement:0}),Rd=ze(Td),Dd=Z({},jn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Id=ze(Dd),Od=Z({},jn,{data:0}),pa=ze(Od),Ad={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $d(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Vd[e])?!!t[e]:!1}function go(){return $d}var Ud=Z({},pr,{key:function(e){if(e.key){var t=Ad[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Fd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:go,charCode:function(e){return e.type==="keypress"?Fr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Hd=ze(Ud),Bd=Z({},yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fa=ze(Bd),Wd=Z({},pr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:go}),Qd=ze(Wd),Yd=Z({},jn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kd=ze(Yd),Xd=Z({},yl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Gd=ze(Xd),Zd=[9,13,27,32],vo=ot&&"CompositionEvent"in window,Vn=null;ot&&"documentMode"in document&&(Vn=document.documentMode);var Jd=ot&&"TextEvent"in window&&!Vn,lu=ot&&(!vo||Vn&&8<Vn&&11>=Vn),ma=" ",ha=!1;function iu(e,t){switch(e){case"keyup":return Zd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ou(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jt=!1;function qd(e,t){switch(e){case"compositionend":return ou(t);case"keypress":return t.which!==32?null:(ha=!0,ma);case"textInput":return e=t.data,e===ma&&ha?null:e;default:return null}}function ep(e,t){if(Jt)return e==="compositionend"||!vo&&iu(e,t)?(e=ru(),Ar=mo=vt=null,Jt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return lu&&t.locale!=="ko"?null:t.data;default:return null}}var tp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ga(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!tp[e.type]:t==="textarea"}function au(e,t,n,r){As(r),t=el(t,"onChange"),0<t.length&&(n=new ho("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var $n=null,qn=null;function np(e){xu(e,0)}function wl(e){var t=tn(e);if(Ls(t))return e}function rp(e,t){if(e==="change")return t}var su=!1;if(ot){var Ul;if(ot){var Hl="oninput"in document;if(!Hl){var va=document.createElement("div");va.setAttribute("oninput","return;"),Hl=typeof va.oninput=="function"}Ul=Hl}else Ul=!1;su=Ul&&(!document.documentMode||9<document.documentMode)}function xa(){$n&&($n.detachEvent("onpropertychange",uu),qn=$n=null)}function uu(e){if(e.propertyName==="value"&&wl(qn)){var t=[];au(t,qn,e,so(e)),Us(np,t)}}function lp(e,t,n){e==="focusin"?(xa(),$n=t,qn=n,$n.attachEvent("onpropertychange",uu)):e==="focusout"&&xa()}function ip(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wl(qn)}function op(e,t){if(e==="click")return wl(t)}function ap(e,t){if(e==="input"||e==="change")return wl(t)}function sp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Be=typeof Object.is=="function"?Object.is:sp;function er(e,t){if(Be(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!ii.call(t,l)||!Be(e[l],t[l]))return!1}return!0}function ya(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wa(e,t){var n=ya(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ya(n)}}function cu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?cu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function du(){for(var e=window,t=Yr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Yr(e.document)}return t}function xo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function up(e){var t=du(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&cu(n.ownerDocument.documentElement,n)){if(r!==null&&xo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=wa(n,i);var a=wa(n,r);l&&a&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var cp=ot&&"documentMode"in document&&11>=document.documentMode,qt=null,Ni=null,Un=null,bi=!1;function ka(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;bi||qt==null||qt!==Yr(r)||(r=qt,"selectionStart"in r&&xo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Un&&er(Un,r)||(Un=r,r=el(Ni,"onSelect"),0<r.length&&(t=new ho("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=qt)))}function jr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var en={animationend:jr("Animation","AnimationEnd"),animationiteration:jr("Animation","AnimationIteration"),animationstart:jr("Animation","AnimationStart"),transitionend:jr("Transition","TransitionEnd")},Bl={},pu={};ot&&(pu=document.createElement("div").style,"AnimationEvent"in window||(delete en.animationend.animation,delete en.animationiteration.animation,delete en.animationstart.animation),"TransitionEvent"in window||delete en.transitionend.transition);function kl(e){if(Bl[e])return Bl[e];if(!en[e])return e;var t=en[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in pu)return Bl[e]=t[n];return e}var fu=kl("animationend"),mu=kl("animationiteration"),hu=kl("animationstart"),gu=kl("transitionend"),vu=new Map,Sa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pt(e,t){vu.set(e,t),Yt(t,[e])}for(var Wl=0;Wl<Sa.length;Wl++){var Ql=Sa[Wl],dp=Ql.toLowerCase(),pp=Ql[0].toUpperCase()+Ql.slice(1);Pt(dp,"on"+pp)}Pt(fu,"onAnimationEnd");Pt(mu,"onAnimationIteration");Pt(hu,"onAnimationStart");Pt("dblclick","onDoubleClick");Pt("focusin","onFocus");Pt("focusout","onBlur");Pt(gu,"onTransitionEnd");hn("onMouseEnter",["mouseout","mouseover"]);hn("onMouseLeave",["mouseout","mouseover"]);hn("onPointerEnter",["pointerout","pointerover"]);hn("onPointerLeave",["pointerout","pointerover"]);Yt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Yt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Yt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Yt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Yt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Yt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var On="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fp=new Set("cancel close invalid load scroll toggle".split(" ").concat(On));function ja(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,dd(r,t,void 0,e),e.currentTarget=null}function xu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==i&&l.isPropagationStopped())break e;ja(l,s,c),i=u}else for(a=0;a<r.length;a++){if(s=r[a],u=s.instance,c=s.currentTarget,s=s.listener,u!==i&&l.isPropagationStopped())break e;ja(l,s,c),i=u}}}if(Xr)throw e=wi,Xr=!1,wi=null,e}function W(e,t){var n=t[_i];n===void 0&&(n=t[_i]=new Set);var r=e+"__bubble";n.has(r)||(yu(t,e,2,!1),n.add(r))}function Yl(e,t,n){var r=0;t&&(r|=4),yu(n,e,r,t)}var Nr="_reactListening"+Math.random().toString(36).slice(2);function tr(e){if(!e[Nr]){e[Nr]=!0,Cs.forEach(function(n){n!=="selectionchange"&&(fp.has(n)||Yl(n,!1,e),Yl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Nr]||(t[Nr]=!0,Yl("selectionchange",!1,t))}}function yu(e,t,n,r){switch(nu(t)){case 1:var l=Ed;break;case 4:l=zd;break;default:l=fo}n=l.bind(null,t,n,e),l=void 0,!yi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Kl(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;a=a.return}for(;s!==null;){if(a=Ot(s),a===null)return;if(u=a.tag,u===5||u===6){r=i=a;continue e}s=s.parentNode}}r=r.return}Us(function(){var c=i,h=so(n),g=[];e:{var m=vu.get(e);if(m!==void 0){var w=ho,k=e;switch(e){case"keypress":if(Fr(n)===0)break e;case"keydown":case"keyup":w=Hd;break;case"focusin":k="focus",w=$l;break;case"focusout":k="blur",w=$l;break;case"beforeblur":case"afterblur":w=$l;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=da;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Ld;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Qd;break;case fu:case mu:case hu:w=Rd;break;case gu:w=Kd;break;case"scroll":w=Pd;break;case"wheel":w=Gd;break;case"copy":case"cut":case"paste":w=Id;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=fa}var j=(t&4)!==0,M=!j&&e==="scroll",f=j?m!==null?m+"Capture":null:m;j=[];for(var d=c,p;d!==null;){p=d;var x=p.stateNode;if(p.tag===5&&x!==null&&(p=x,f!==null&&(x=Xn(d,f),x!=null&&j.push(nr(d,x,p)))),M)break;d=d.return}0<j.length&&(m=new w(m,k,null,n,h),g.push({event:m,listeners:j}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",m&&n!==vi&&(k=n.relatedTarget||n.fromElement)&&(Ot(k)||k[at]))break e;if((w||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,w?(k=n.relatedTarget||n.toElement,w=c,k=k?Ot(k):null,k!==null&&(M=Kt(k),k!==M||k.tag!==5&&k.tag!==6)&&(k=null)):(w=null,k=c),w!==k)){if(j=da,x="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(j=fa,x="onPointerLeave",f="onPointerEnter",d="pointer"),M=w==null?m:tn(w),p=k==null?m:tn(k),m=new j(x,d+"leave",w,n,h),m.target=M,m.relatedTarget=p,x=null,Ot(h)===c&&(j=new j(f,d+"enter",k,n,h),j.target=p,j.relatedTarget=M,x=j),M=x,w&&k)t:{for(j=w,f=k,d=0,p=j;p;p=Xt(p))d++;for(p=0,x=f;x;x=Xt(x))p++;for(;0<d-p;)j=Xt(j),d--;for(;0<p-d;)f=Xt(f),p--;for(;d--;){if(j===f||f!==null&&j===f.alternate)break t;j=Xt(j),f=Xt(f)}j=null}else j=null;w!==null&&Na(g,m,w,j,!1),k!==null&&M!==null&&Na(g,M,k,j,!0)}}e:{if(m=c?tn(c):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var N=rp;else if(ga(m))if(su)N=ap;else{N=ip;var b=lp}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(N=op);if(N&&(N=N(e,c))){au(g,N,n,h);break e}b&&b(e,m,c),e==="focusout"&&(b=m._wrapperState)&&b.controlled&&m.type==="number"&&pi(m,"number",m.value)}switch(b=c?tn(c):window,e){case"focusin":(ga(b)||b.contentEditable==="true")&&(qt=b,Ni=c,Un=null);break;case"focusout":Un=Ni=qt=null;break;case"mousedown":bi=!0;break;case"contextmenu":case"mouseup":case"dragend":bi=!1,ka(g,n,h);break;case"selectionchange":if(cp)break;case"keydown":case"keyup":ka(g,n,h)}var y;if(vo)e:{switch(e){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Jt?iu(e,n)&&(v="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(lu&&n.locale!=="ko"&&(Jt||v!=="onCompositionStart"?v==="onCompositionEnd"&&Jt&&(y=ru()):(vt=h,mo="value"in vt?vt.value:vt.textContent,Jt=!0)),b=el(c,v),0<b.length&&(v=new pa(v,e,null,n,h),g.push({event:v,listeners:b}),y?v.data=y:(y=ou(n),y!==null&&(v.data=y)))),(y=Jd?qd(e,n):ep(e,n))&&(c=el(c,"onBeforeInput"),0<c.length&&(h=new pa("onBeforeInput","beforeinput",null,n,h),g.push({event:h,listeners:c}),h.data=y))}xu(g,t)})}function nr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function el(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Xn(e,n),i!=null&&r.unshift(nr(e,i,l)),i=Xn(e,t),i!=null&&r.push(nr(e,i,l))),e=e.return}return r}function Xt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Na(e,t,n,r,l){for(var i=t._reactName,a=[];n!==null&&n!==r;){var s=n,u=s.alternate,c=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&c!==null&&(s=c,l?(u=Xn(n,i),u!=null&&a.unshift(nr(n,u,s))):l||(u=Xn(n,i),u!=null&&a.push(nr(n,u,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var mp=/\r\n?/g,hp=/\u0000|\uFFFD/g;function ba(e){return(typeof e=="string"?e:""+e).replace(mp,`
`).replace(hp,"")}function br(e,t,n){if(t=ba(t),ba(e)!==t&&n)throw Error(S(425))}function tl(){}var Ci=null,Ei=null;function zi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Pi=typeof setTimeout=="function"?setTimeout:void 0,gp=typeof clearTimeout=="function"?clearTimeout:void 0,Ca=typeof Promise=="function"?Promise:void 0,vp=typeof queueMicrotask=="function"?queueMicrotask:typeof Ca<"u"?function(e){return Ca.resolve(null).then(e).catch(xp)}:Pi;function xp(e){setTimeout(function(){throw e})}function Xl(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Jn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Jn(t)}function St(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ea(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Nn=Math.random().toString(36).slice(2),Ge="__reactFiber$"+Nn,rr="__reactProps$"+Nn,at="__reactContainer$"+Nn,_i="__reactEvents$"+Nn,yp="__reactListeners$"+Nn,wp="__reactHandles$"+Nn;function Ot(e){var t=e[Ge];if(t)return t;for(var n=e.parentNode;n;){if(t=n[at]||n[Ge]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ea(e);e!==null;){if(n=e[Ge])return n;e=Ea(e)}return t}e=n,n=e.parentNode}return null}function fr(e){return e=e[Ge]||e[at],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function tn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function Sl(e){return e[rr]||null}var Li=[],nn=-1;function _t(e){return{current:e}}function Q(e){0>nn||(e.current=Li[nn],Li[nn]=null,nn--)}function H(e,t){nn++,Li[nn]=e.current,e.current=t}var zt={},fe=_t(zt),we=_t(!1),Ut=zt;function gn(e,t){var n=e.type.contextTypes;if(!n)return zt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function ke(e){return e=e.childContextTypes,e!=null}function nl(){Q(we),Q(fe)}function za(e,t,n){if(fe.current!==zt)throw Error(S(168));H(fe,t),H(we,n)}function wu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(S(108,ld(e)||"Unknown",l));return Z({},n,r)}function rl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||zt,Ut=fe.current,H(fe,e),H(we,we.current),!0}function Pa(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=wu(e,t,Ut),r.__reactInternalMemoizedMergedChildContext=e,Q(we),Q(fe),H(fe,e)):Q(we),H(we,n)}var nt=null,jl=!1,Gl=!1;function ku(e){nt===null?nt=[e]:nt.push(e)}function kp(e){jl=!0,ku(e)}function Lt(){if(!Gl&&nt!==null){Gl=!0;var e=0,t=$;try{var n=nt;for($=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}nt=null,jl=!1}catch(l){throw nt!==null&&(nt=nt.slice(e+1)),Qs(uo,Lt),l}finally{$=t,Gl=!1}}return null}var rn=[],ln=0,ll=null,il=0,Le=[],Me=0,Ht=null,rt=1,lt="";function Dt(e,t){rn[ln++]=il,rn[ln++]=ll,ll=e,il=t}function Su(e,t,n){Le[Me++]=rt,Le[Me++]=lt,Le[Me++]=Ht,Ht=e;var r=rt;e=lt;var l=32-Ue(r)-1;r&=~(1<<l),n+=1;var i=32-Ue(t)+l;if(30<i){var a=l-l%5;i=(r&(1<<a)-1).toString(32),r>>=a,l-=a,rt=1<<32-Ue(t)+l|n<<l|r,lt=i+e}else rt=1<<i|n<<l|r,lt=e}function yo(e){e.return!==null&&(Dt(e,1),Su(e,1,0))}function wo(e){for(;e===ll;)ll=rn[--ln],rn[ln]=null,il=rn[--ln],rn[ln]=null;for(;e===Ht;)Ht=Le[--Me],Le[Me]=null,lt=Le[--Me],Le[Me]=null,rt=Le[--Me],Le[Me]=null}var be=null,Ne=null,K=!1,$e=null;function ju(e,t){var n=Te(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function _a(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,be=e,Ne=St(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,be=e,Ne=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ht!==null?{id:rt,overflow:lt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Te(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,be=e,Ne=null,!0):!1;default:return!1}}function Mi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ti(e){if(K){var t=Ne;if(t){var n=t;if(!_a(e,t)){if(Mi(e))throw Error(S(418));t=St(n.nextSibling);var r=be;t&&_a(e,t)?ju(r,n):(e.flags=e.flags&-4097|2,K=!1,be=e)}}else{if(Mi(e))throw Error(S(418));e.flags=e.flags&-4097|2,K=!1,be=e}}}function La(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;be=e}function Cr(e){if(e!==be)return!1;if(!K)return La(e),K=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!zi(e.type,e.memoizedProps)),t&&(t=Ne)){if(Mi(e))throw Nu(),Error(S(418));for(;t;)ju(e,t),t=St(t.nextSibling)}if(La(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ne=St(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ne=null}}else Ne=be?St(e.stateNode.nextSibling):null;return!0}function Nu(){for(var e=Ne;e;)e=St(e.nextSibling)}function vn(){Ne=be=null,K=!1}function ko(e){$e===null?$e=[e]:$e.push(e)}var Sp=ct.ReactCurrentBatchConfig;function Ln(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var s=l.refs;a===null?delete s[i]:s[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function Er(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ma(e){var t=e._init;return t(e._payload)}function bu(e){function t(f,d){if(e){var p=f.deletions;p===null?(f.deletions=[d],f.flags|=16):p.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function l(f,d){return f=Ct(f,d),f.index=0,f.sibling=null,f}function i(f,d,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<d?(f.flags|=2,d):p):(f.flags|=2,d)):(f.flags|=1048576,d)}function a(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,d,p,x){return d===null||d.tag!==6?(d=ri(p,f.mode,x),d.return=f,d):(d=l(d,p),d.return=f,d)}function u(f,d,p,x){var N=p.type;return N===Zt?h(f,d,p.props.children,x,p.key):d!==null&&(d.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===pt&&Ma(N)===d.type)?(x=l(d,p.props),x.ref=Ln(f,d,p),x.return=f,x):(x=Qr(p.type,p.key,p.props,null,f.mode,x),x.ref=Ln(f,d,p),x.return=f,x)}function c(f,d,p,x){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=li(p,f.mode,x),d.return=f,d):(d=l(d,p.children||[]),d.return=f,d)}function h(f,d,p,x,N){return d===null||d.tag!==7?(d=$t(p,f.mode,x,N),d.return=f,d):(d=l(d,p),d.return=f,d)}function g(f,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=ri(""+d,f.mode,p),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case gr:return p=Qr(d.type,d.key,d.props,null,f.mode,p),p.ref=Ln(f,null,d),p.return=f,p;case Gt:return d=li(d,f.mode,p),d.return=f,d;case pt:var x=d._init;return g(f,x(d._payload),p)}if(Dn(d)||Cn(d))return d=$t(d,f.mode,p,null),d.return=f,d;Er(f,d)}return null}function m(f,d,p,x){var N=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return N!==null?null:s(f,d,""+p,x);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case gr:return p.key===N?u(f,d,p,x):null;case Gt:return p.key===N?c(f,d,p,x):null;case pt:return N=p._init,m(f,d,N(p._payload),x)}if(Dn(p)||Cn(p))return N!==null?null:h(f,d,p,x,null);Er(f,p)}return null}function w(f,d,p,x,N){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(p)||null,s(d,f,""+x,N);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case gr:return f=f.get(x.key===null?p:x.key)||null,u(d,f,x,N);case Gt:return f=f.get(x.key===null?p:x.key)||null,c(d,f,x,N);case pt:var b=x._init;return w(f,d,p,b(x._payload),N)}if(Dn(x)||Cn(x))return f=f.get(p)||null,h(d,f,x,N,null);Er(d,x)}return null}function k(f,d,p,x){for(var N=null,b=null,y=d,v=d=0,P=null;y!==null&&v<p.length;v++){y.index>v?(P=y,y=null):P=y.sibling;var _=m(f,y,p[v],x);if(_===null){y===null&&(y=P);break}e&&y&&_.alternate===null&&t(f,y),d=i(_,d,v),b===null?N=_:b.sibling=_,b=_,y=P}if(v===p.length)return n(f,y),K&&Dt(f,v),N;if(y===null){for(;v<p.length;v++)y=g(f,p[v],x),y!==null&&(d=i(y,d,v),b===null?N=y:b.sibling=y,b=y);return K&&Dt(f,v),N}for(y=r(f,y);v<p.length;v++)P=w(y,f,v,p[v],x),P!==null&&(e&&P.alternate!==null&&y.delete(P.key===null?v:P.key),d=i(P,d,v),b===null?N=P:b.sibling=P,b=P);return e&&y.forEach(function(D){return t(f,D)}),K&&Dt(f,v),N}function j(f,d,p,x){var N=Cn(p);if(typeof N!="function")throw Error(S(150));if(p=N.call(p),p==null)throw Error(S(151));for(var b=N=null,y=d,v=d=0,P=null,_=p.next();y!==null&&!_.done;v++,_=p.next()){y.index>v?(P=y,y=null):P=y.sibling;var D=m(f,y,_.value,x);if(D===null){y===null&&(y=P);break}e&&y&&D.alternate===null&&t(f,y),d=i(D,d,v),b===null?N=D:b.sibling=D,b=D,y=P}if(_.done)return n(f,y),K&&Dt(f,v),N;if(y===null){for(;!_.done;v++,_=p.next())_=g(f,_.value,x),_!==null&&(d=i(_,d,v),b===null?N=_:b.sibling=_,b=_);return K&&Dt(f,v),N}for(y=r(f,y);!_.done;v++,_=p.next())_=w(y,f,v,_.value,x),_!==null&&(e&&_.alternate!==null&&y.delete(_.key===null?v:_.key),d=i(_,d,v),b===null?N=_:b.sibling=_,b=_);return e&&y.forEach(function(V){return t(f,V)}),K&&Dt(f,v),N}function M(f,d,p,x){if(typeof p=="object"&&p!==null&&p.type===Zt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case gr:e:{for(var N=p.key,b=d;b!==null;){if(b.key===N){if(N=p.type,N===Zt){if(b.tag===7){n(f,b.sibling),d=l(b,p.props.children),d.return=f,f=d;break e}}else if(b.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===pt&&Ma(N)===b.type){n(f,b.sibling),d=l(b,p.props),d.ref=Ln(f,b,p),d.return=f,f=d;break e}n(f,b);break}else t(f,b);b=b.sibling}p.type===Zt?(d=$t(p.props.children,f.mode,x,p.key),d.return=f,f=d):(x=Qr(p.type,p.key,p.props,null,f.mode,x),x.ref=Ln(f,d,p),x.return=f,f=x)}return a(f);case Gt:e:{for(b=p.key;d!==null;){if(d.key===b)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(f,d.sibling),d=l(d,p.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=li(p,f.mode,x),d.return=f,f=d}return a(f);case pt:return b=p._init,M(f,d,b(p._payload),x)}if(Dn(p))return k(f,d,p,x);if(Cn(p))return j(f,d,p,x);Er(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(f,d.sibling),d=l(d,p),d.return=f,f=d):(n(f,d),d=ri(p,f.mode,x),d.return=f,f=d),a(f)):n(f,d)}return M}var xn=bu(!0),Cu=bu(!1),ol=_t(null),al=null,on=null,So=null;function jo(){So=on=al=null}function No(e){var t=ol.current;Q(ol),e._currentValue=t}function Ri(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function fn(e,t){al=e,So=on=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ye=!0),e.firstContext=null)}function De(e){var t=e._currentValue;if(So!==e)if(e={context:e,memoizedValue:t,next:null},on===null){if(al===null)throw Error(S(308));on=e,al.dependencies={lanes:0,firstContext:e}}else on=on.next=e;return t}var At=null;function bo(e){At===null?At=[e]:At.push(e)}function Eu(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,bo(t)):(n.next=l.next,l.next=n),t.interleaved=n,st(e,r)}function st(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ft=!1;function Co(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function it(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function jt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,F&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,st(e,n)}return l=r.interleaved,l===null?(t.next=t,bo(r)):(t.next=l.next,l.next=t),r.interleaved=t,st(e,n)}function Vr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,co(e,n)}}function Ta(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function sl(e,t,n,r){var l=e.updateQueue;ft=!1;var i=l.firstBaseUpdate,a=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var u=s,c=u.next;u.next=null,a===null?i=c:a.next=c,a=u;var h=e.alternate;h!==null&&(h=h.updateQueue,s=h.lastBaseUpdate,s!==a&&(s===null?h.firstBaseUpdate=c:s.next=c,h.lastBaseUpdate=u))}if(i!==null){var g=l.baseState;a=0,h=c=u=null,s=i;do{var m=s.lane,w=s.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:w,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var k=e,j=s;switch(m=t,w=n,j.tag){case 1:if(k=j.payload,typeof k=="function"){g=k.call(w,g,m);break e}g=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=j.payload,m=typeof k=="function"?k.call(w,g,m):k,m==null)break e;g=Z({},g,m);break e;case 2:ft=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[s]:m.push(s))}else w={eventTime:w,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},h===null?(c=h=w,u=g):h=h.next=w,a|=m;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;m=s,s=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(!0);if(h===null&&(u=g),l.baseState=u,l.firstBaseUpdate=c,l.lastBaseUpdate=h,t=l.shared.interleaved,t!==null){l=t;do a|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Wt|=a,e.lanes=a,e.memoizedState=g}}function Ra(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(S(191,l));l.call(r)}}}var mr={},Je=_t(mr),lr=_t(mr),ir=_t(mr);function Ft(e){if(e===mr)throw Error(S(174));return e}function Eo(e,t){switch(H(ir,t),H(lr,e),H(Je,mr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:mi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=mi(t,e)}Q(Je),H(Je,t)}function yn(){Q(Je),Q(lr),Q(ir)}function Pu(e){Ft(ir.current);var t=Ft(Je.current),n=mi(t,e.type);t!==n&&(H(lr,e),H(Je,n))}function zo(e){lr.current===e&&(Q(Je),Q(lr))}var X=_t(0);function ul(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Zl=[];function Po(){for(var e=0;e<Zl.length;e++)Zl[e]._workInProgressVersionPrimary=null;Zl.length=0}var $r=ct.ReactCurrentDispatcher,Jl=ct.ReactCurrentBatchConfig,Bt=0,G=null,re=null,ie=null,cl=!1,Hn=!1,or=0,jp=0;function ce(){throw Error(S(321))}function _o(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Be(e[n],t[n]))return!1;return!0}function Lo(e,t,n,r,l,i){if(Bt=i,G=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,$r.current=e===null||e.memoizedState===null?Ep:zp,e=n(r,l),Hn){i=0;do{if(Hn=!1,or=0,25<=i)throw Error(S(301));i+=1,ie=re=null,t.updateQueue=null,$r.current=Pp,e=n(r,l)}while(Hn)}if($r.current=dl,t=re!==null&&re.next!==null,Bt=0,ie=re=G=null,cl=!1,t)throw Error(S(300));return e}function Mo(){var e=or!==0;return or=0,e}function Xe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ie===null?G.memoizedState=ie=e:ie=ie.next=e,ie}function Ie(){if(re===null){var e=G.alternate;e=e!==null?e.memoizedState:null}else e=re.next;var t=ie===null?G.memoizedState:ie.next;if(t!==null)ie=t,re=e;else{if(e===null)throw Error(S(310));re=e,e={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},ie===null?G.memoizedState=ie=e:ie=ie.next=e}return ie}function ar(e,t){return typeof t=="function"?t(e):t}function ql(e){var t=Ie(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=re,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var a=l.next;l.next=i.next,i.next=a}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var s=a=null,u=null,c=i;do{var h=c.lane;if((Bt&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var g={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=g,a=r):u=u.next=g,G.lanes|=h,Wt|=h}c=c.next}while(c!==null&&c!==i);u===null?a=r:u.next=s,Be(r,t.memoizedState)||(ye=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,G.lanes|=i,Wt|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ei(e){var t=Ie(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var a=l=l.next;do i=e(i,a.action),a=a.next;while(a!==l);Be(i,t.memoizedState)||(ye=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function _u(){}function Lu(e,t){var n=G,r=Ie(),l=t(),i=!Be(r.memoizedState,l);if(i&&(r.memoizedState=l,ye=!0),r=r.queue,To(Ru.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ie!==null&&ie.memoizedState.tag&1){if(n.flags|=2048,sr(9,Tu.bind(null,n,r,l,t),void 0,null),oe===null)throw Error(S(349));Bt&30||Mu(n,t,l)}return l}function Mu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Tu(e,t,n,r){t.value=n,t.getSnapshot=r,Du(t)&&Iu(e)}function Ru(e,t,n){return n(function(){Du(t)&&Iu(e)})}function Du(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Be(e,n)}catch{return!0}}function Iu(e){var t=st(e,1);t!==null&&He(t,e,1,-1)}function Da(e){var t=Xe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ar,lastRenderedState:e},t.queue=e,e=e.dispatch=Cp.bind(null,G,e),[t.memoizedState,e]}function sr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ou(){return Ie().memoizedState}function Ur(e,t,n,r){var l=Xe();G.flags|=e,l.memoizedState=sr(1|t,n,void 0,r===void 0?null:r)}function Nl(e,t,n,r){var l=Ie();r=r===void 0?null:r;var i=void 0;if(re!==null){var a=re.memoizedState;if(i=a.destroy,r!==null&&_o(r,a.deps)){l.memoizedState=sr(t,n,i,r);return}}G.flags|=e,l.memoizedState=sr(1|t,n,i,r)}function Ia(e,t){return Ur(8390656,8,e,t)}function To(e,t){return Nl(2048,8,e,t)}function Au(e,t){return Nl(4,2,e,t)}function Fu(e,t){return Nl(4,4,e,t)}function Vu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function $u(e,t,n){return n=n!=null?n.concat([e]):null,Nl(4,4,Vu.bind(null,t,e),n)}function Ro(){}function Uu(e,t){var n=Ie();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&_o(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Hu(e,t){var n=Ie();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&_o(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Bu(e,t,n){return Bt&21?(Be(n,t)||(n=Xs(),G.lanes|=n,Wt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ye=!0),e.memoizedState=n)}function Np(e,t){var n=$;$=n!==0&&4>n?n:4,e(!0);var r=Jl.transition;Jl.transition={};try{e(!1),t()}finally{$=n,Jl.transition=r}}function Wu(){return Ie().memoizedState}function bp(e,t,n){var r=bt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Qu(e))Yu(t,n);else if(n=Eu(e,t,n,r),n!==null){var l=he();He(n,e,r,l),Ku(n,t,r)}}function Cp(e,t,n){var r=bt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Qu(e))Yu(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,s=i(a,n);if(l.hasEagerState=!0,l.eagerState=s,Be(s,a)){var u=t.interleaved;u===null?(l.next=l,bo(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=Eu(e,t,l,r),n!==null&&(l=he(),He(n,e,r,l),Ku(n,t,r))}}function Qu(e){var t=e.alternate;return e===G||t!==null&&t===G}function Yu(e,t){Hn=cl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ku(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,co(e,n)}}var dl={readContext:De,useCallback:ce,useContext:ce,useEffect:ce,useImperativeHandle:ce,useInsertionEffect:ce,useLayoutEffect:ce,useMemo:ce,useReducer:ce,useRef:ce,useState:ce,useDebugValue:ce,useDeferredValue:ce,useTransition:ce,useMutableSource:ce,useSyncExternalStore:ce,useId:ce,unstable_isNewReconciler:!1},Ep={readContext:De,useCallback:function(e,t){return Xe().memoizedState=[e,t===void 0?null:t],e},useContext:De,useEffect:Ia,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ur(4194308,4,Vu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ur(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ur(4,2,e,t)},useMemo:function(e,t){var n=Xe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Xe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=bp.bind(null,G,e),[r.memoizedState,e]},useRef:function(e){var t=Xe();return e={current:e},t.memoizedState=e},useState:Da,useDebugValue:Ro,useDeferredValue:function(e){return Xe().memoizedState=e},useTransition:function(){var e=Da(!1),t=e[0];return e=Np.bind(null,e[1]),Xe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=G,l=Xe();if(K){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),oe===null)throw Error(S(349));Bt&30||Mu(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Ia(Ru.bind(null,r,i,e),[e]),r.flags|=2048,sr(9,Tu.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Xe(),t=oe.identifierPrefix;if(K){var n=lt,r=rt;n=(r&~(1<<32-Ue(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=or++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=jp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},zp={readContext:De,useCallback:Uu,useContext:De,useEffect:To,useImperativeHandle:$u,useInsertionEffect:Au,useLayoutEffect:Fu,useMemo:Hu,useReducer:ql,useRef:Ou,useState:function(){return ql(ar)},useDebugValue:Ro,useDeferredValue:function(e){var t=Ie();return Bu(t,re.memoizedState,e)},useTransition:function(){var e=ql(ar)[0],t=Ie().memoizedState;return[e,t]},useMutableSource:_u,useSyncExternalStore:Lu,useId:Wu,unstable_isNewReconciler:!1},Pp={readContext:De,useCallback:Uu,useContext:De,useEffect:To,useImperativeHandle:$u,useInsertionEffect:Au,useLayoutEffect:Fu,useMemo:Hu,useReducer:ei,useRef:Ou,useState:function(){return ei(ar)},useDebugValue:Ro,useDeferredValue:function(e){var t=Ie();return re===null?t.memoizedState=e:Bu(t,re.memoizedState,e)},useTransition:function(){var e=ei(ar)[0],t=Ie().memoizedState;return[e,t]},useMutableSource:_u,useSyncExternalStore:Lu,useId:Wu,unstable_isNewReconciler:!1};function Fe(e,t){if(e&&e.defaultProps){t=Z({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Di(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Z({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var bl={isMounted:function(e){return(e=e._reactInternals)?Kt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=he(),l=bt(e),i=it(r,l);i.payload=t,n!=null&&(i.callback=n),t=jt(e,i,l),t!==null&&(He(t,e,l,r),Vr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=he(),l=bt(e),i=it(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=jt(e,i,l),t!==null&&(He(t,e,l,r),Vr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=he(),r=bt(e),l=it(n,r);l.tag=2,t!=null&&(l.callback=t),t=jt(e,l,r),t!==null&&(He(t,e,r,n),Vr(t,e,r))}};function Oa(e,t,n,r,l,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!er(n,r)||!er(l,i):!0}function Xu(e,t,n){var r=!1,l=zt,i=t.contextType;return typeof i=="object"&&i!==null?i=De(i):(l=ke(t)?Ut:fe.current,r=t.contextTypes,i=(r=r!=null)?gn(e,l):zt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=bl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Aa(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&bl.enqueueReplaceState(t,t.state,null)}function Ii(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Co(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=De(i):(i=ke(t)?Ut:fe.current,l.context=gn(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Di(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&bl.enqueueReplaceState(l,l.state,null),sl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function wn(e,t){try{var n="",r=t;do n+=rd(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function ti(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Oi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var _p=typeof WeakMap=="function"?WeakMap:Map;function Gu(e,t,n){n=it(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){fl||(fl=!0,Yi=r),Oi(e,t)},n}function Zu(e,t,n){n=it(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Oi(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Oi(e,t),typeof r!="function"&&(Nt===null?Nt=new Set([this]):Nt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Fa(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new _p;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Bp.bind(null,e,t,n),t.then(e,e))}function Va(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function $a(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=it(-1,1),t.tag=2,jt(n,t,1))),n.lanes|=1),e)}var Lp=ct.ReactCurrentOwner,ye=!1;function me(e,t,n,r){t.child=e===null?Cu(t,null,n,r):xn(t,e.child,n,r)}function Ua(e,t,n,r,l){n=n.render;var i=t.ref;return fn(t,l),r=Lo(e,t,n,r,i,l),n=Mo(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,ut(e,t,l)):(K&&n&&yo(t),t.flags|=1,me(e,t,r,l),t.child)}function Ha(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!Uo(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Ju(e,t,i,r,l)):(e=Qr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:er,n(a,r)&&e.ref===t.ref)return ut(e,t,l)}return t.flags|=1,e=Ct(i,r),e.ref=t.ref,e.return=t,t.child=e}function Ju(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(er(i,r)&&e.ref===t.ref)if(ye=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(ye=!0);else return t.lanes=e.lanes,ut(e,t,l)}return Ai(e,t,n,r,l)}function qu(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},H(sn,je),je|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,H(sn,je),je|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,H(sn,je),je|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,H(sn,je),je|=r;return me(e,t,l,n),t.child}function ec(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ai(e,t,n,r,l){var i=ke(n)?Ut:fe.current;return i=gn(t,i),fn(t,l),n=Lo(e,t,n,r,i,l),r=Mo(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,ut(e,t,l)):(K&&r&&yo(t),t.flags|=1,me(e,t,n,l),t.child)}function Ba(e,t,n,r,l){if(ke(n)){var i=!0;rl(t)}else i=!1;if(fn(t,l),t.stateNode===null)Hr(e,t),Xu(t,n,r),Ii(t,n,r,l),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var u=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=De(c):(c=ke(n)?Ut:fe.current,c=gn(t,c));var h=n.getDerivedStateFromProps,g=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";g||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||u!==c)&&Aa(t,a,r,c),ft=!1;var m=t.memoizedState;a.state=m,sl(t,r,a,l),u=t.memoizedState,s!==r||m!==u||we.current||ft?(typeof h=="function"&&(Di(t,n,h,r),u=t.memoizedState),(s=ft||Oa(t,n,s,r,m,u,c))?(g||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),a.props=r,a.state=u,a.context=c,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,zu(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:Fe(t.type,s),a.props=c,g=t.pendingProps,m=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=De(u):(u=ke(n)?Ut:fe.current,u=gn(t,u));var w=n.getDerivedStateFromProps;(h=typeof w=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==g||m!==u)&&Aa(t,a,r,u),ft=!1,m=t.memoizedState,a.state=m,sl(t,r,a,l);var k=t.memoizedState;s!==g||m!==k||we.current||ft?(typeof w=="function"&&(Di(t,n,w,r),k=t.memoizedState),(c=ft||Oa(t,n,c,r,m,k,u)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,k,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,k,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),a.props=r,a.state=k,a.context=u,r=c):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Fi(e,t,n,r,i,l)}function Fi(e,t,n,r,l,i){ec(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return l&&Pa(t,n,!1),ut(e,t,i);r=t.stateNode,Lp.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=xn(t,e.child,null,i),t.child=xn(t,null,s,i)):me(e,t,s,i),t.memoizedState=r.state,l&&Pa(t,n,!0),t.child}function tc(e){var t=e.stateNode;t.pendingContext?za(e,t.pendingContext,t.pendingContext!==t.context):t.context&&za(e,t.context,!1),Eo(e,t.containerInfo)}function Wa(e,t,n,r,l){return vn(),ko(l),t.flags|=256,me(e,t,n,r),t.child}var Vi={dehydrated:null,treeContext:null,retryLane:0};function $i(e){return{baseLanes:e,cachePool:null,transitions:null}}function nc(e,t,n){var r=t.pendingProps,l=X.current,i=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),H(X,l&1),e===null)return Ti(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=zl(a,r,0,null),e=$t(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=$i(n),t.memoizedState=Vi,e):Do(t,a));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return Mp(e,t,a,r,s,l,n);if(i){i=r.fallback,a=t.mode,l=e.child,s=l.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Ct(l,u),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?i=Ct(s,i):(i=$t(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?$i(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=Vi,r}return i=e.child,e=i.sibling,r=Ct(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Do(e,t){return t=zl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function zr(e,t,n,r){return r!==null&&ko(r),xn(t,e.child,null,n),e=Do(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Mp(e,t,n,r,l,i,a){if(n)return t.flags&256?(t.flags&=-257,r=ti(Error(S(422))),zr(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=zl({mode:"visible",children:r.children},l,0,null),i=$t(i,l,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&xn(t,e.child,null,a),t.child.memoizedState=$i(a),t.memoizedState=Vi,i);if(!(t.mode&1))return zr(e,t,a,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(S(419)),r=ti(i,r,void 0),zr(e,t,a,r)}if(s=(a&e.childLanes)!==0,ye||s){if(r=oe,r!==null){switch(a&-a){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|a)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,st(e,l),He(r,e,l,-1))}return $o(),r=ti(Error(S(421))),zr(e,t,a,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Wp.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,Ne=St(l.nextSibling),be=t,K=!0,$e=null,e!==null&&(Le[Me++]=rt,Le[Me++]=lt,Le[Me++]=Ht,rt=e.id,lt=e.overflow,Ht=t),t=Do(t,r.children),t.flags|=4096,t)}function Qa(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ri(e.return,t,n)}function ni(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function rc(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(me(e,t,r.children,n),r=X.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Qa(e,n,t);else if(e.tag===19)Qa(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(H(X,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&ul(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),ni(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&ul(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}ni(t,!0,n,null,i);break;case"together":ni(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Hr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ut(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Wt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=Ct(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ct(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Tp(e,t,n){switch(t.tag){case 3:tc(t),vn();break;case 5:Pu(t);break;case 1:ke(t.type)&&rl(t);break;case 4:Eo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;H(ol,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(H(X,X.current&1),t.flags|=128,null):n&t.child.childLanes?nc(e,t,n):(H(X,X.current&1),e=ut(e,t,n),e!==null?e.sibling:null);H(X,X.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return rc(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),H(X,X.current),r)break;return null;case 22:case 23:return t.lanes=0,qu(e,t,n)}return ut(e,t,n)}var lc,Ui,ic,oc;lc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ui=function(){};ic=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Ft(Je.current);var i=null;switch(n){case"input":l=ci(e,l),r=ci(e,r),i=[];break;case"select":l=Z({},l,{value:void 0}),r=Z({},r,{value:void 0}),i=[];break;case"textarea":l=fi(e,l),r=fi(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=tl)}hi(n,r);var a;n=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var s=l[c];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Yn.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(s=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(a in s)!s.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&s[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Yn.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&W("scroll",e),i||s===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};oc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Mn(e,t){if(!K)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function de(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Rp(e,t,n){var r=t.pendingProps;switch(wo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(t),null;case 1:return ke(t.type)&&nl(),de(t),null;case 3:return r=t.stateNode,yn(),Q(we),Q(fe),Po(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Cr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,$e!==null&&(Gi($e),$e=null))),Ui(e,t),de(t),null;case 5:zo(t);var l=Ft(ir.current);if(n=t.type,e!==null&&t.stateNode!=null)ic(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return de(t),null}if(e=Ft(Je.current),Cr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Ge]=t,r[rr]=i,e=(t.mode&1)!==0,n){case"dialog":W("cancel",r),W("close",r);break;case"iframe":case"object":case"embed":W("load",r);break;case"video":case"audio":for(l=0;l<On.length;l++)W(On[l],r);break;case"source":W("error",r);break;case"img":case"image":case"link":W("error",r),W("load",r);break;case"details":W("toggle",r);break;case"input":ta(r,i),W("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},W("invalid",r);break;case"textarea":ra(r,i),W("invalid",r)}hi(n,i),l=null;for(var a in i)if(i.hasOwnProperty(a)){var s=i[a];a==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&br(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&br(r.textContent,s,e),l=["children",""+s]):Yn.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&W("scroll",r)}switch(n){case"input":vr(r),na(r,i,!0);break;case"textarea":vr(r),la(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=tl)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Rs(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Ge]=t,e[rr]=r,lc(e,t,!1,!1),t.stateNode=e;e:{switch(a=gi(n,r),n){case"dialog":W("cancel",e),W("close",e),l=r;break;case"iframe":case"object":case"embed":W("load",e),l=r;break;case"video":case"audio":for(l=0;l<On.length;l++)W(On[l],e);l=r;break;case"source":W("error",e),l=r;break;case"img":case"image":case"link":W("error",e),W("load",e),l=r;break;case"details":W("toggle",e),l=r;break;case"input":ta(e,r),l=ci(e,r),W("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=Z({},r,{value:void 0}),W("invalid",e);break;case"textarea":ra(e,r),l=fi(e,r),W("invalid",e);break;default:l=r}hi(n,l),s=l;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?Os(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Ds(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Kn(e,u):typeof u=="number"&&Kn(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Yn.hasOwnProperty(i)?u!=null&&i==="onScroll"&&W("scroll",e):u!=null&&lo(e,i,u,a))}switch(n){case"input":vr(e),na(e,r,!1);break;case"textarea":vr(e),la(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Et(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?un(e,!!r.multiple,i,!1):r.defaultValue!=null&&un(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=tl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return de(t),null;case 6:if(e&&t.stateNode!=null)oc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=Ft(ir.current),Ft(Je.current),Cr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ge]=t,(i=r.nodeValue!==n)&&(e=be,e!==null))switch(e.tag){case 3:br(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&br(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ge]=t,t.stateNode=r}return de(t),null;case 13:if(Q(X),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&Ne!==null&&t.mode&1&&!(t.flags&128))Nu(),vn(),t.flags|=98560,i=!1;else if(i=Cr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(S(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(S(317));i[Ge]=t}else vn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;de(t),i=!1}else $e!==null&&(Gi($e),$e=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||X.current&1?le===0&&(le=3):$o())),t.updateQueue!==null&&(t.flags|=4),de(t),null);case 4:return yn(),Ui(e,t),e===null&&tr(t.stateNode.containerInfo),de(t),null;case 10:return No(t.type._context),de(t),null;case 17:return ke(t.type)&&nl(),de(t),null;case 19:if(Q(X),i=t.memoizedState,i===null)return de(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)Mn(i,!1);else{if(le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=ul(e),a!==null){for(t.flags|=128,Mn(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return H(X,X.current&1|2),t.child}e=e.sibling}i.tail!==null&&ee()>kn&&(t.flags|=128,r=!0,Mn(i,!1),t.lanes=4194304)}else{if(!r)if(e=ul(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Mn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!K)return de(t),null}else 2*ee()-i.renderingStartTime>kn&&n!==1073741824&&(t.flags|=128,r=!0,Mn(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ee(),t.sibling=null,n=X.current,H(X,r?n&1|2:n&1),t):(de(t),null);case 22:case 23:return Vo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?je&1073741824&&(de(t),t.subtreeFlags&6&&(t.flags|=8192)):de(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function Dp(e,t){switch(wo(t),t.tag){case 1:return ke(t.type)&&nl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return yn(),Q(we),Q(fe),Po(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return zo(t),null;case 13:if(Q(X),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));vn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(X),null;case 4:return yn(),null;case 10:return No(t.type._context),null;case 22:case 23:return Vo(),null;case 24:return null;default:return null}}var Pr=!1,pe=!1,Ip=typeof WeakSet=="function"?WeakSet:Set,z=null;function an(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){q(e,t,r)}else n.current=null}function Hi(e,t,n){try{n()}catch(r){q(e,t,r)}}var Ya=!1;function Op(e,t){if(Ci=Jr,e=du(),xo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,s=-1,u=-1,c=0,h=0,g=e,m=null;t:for(;;){for(var w;g!==n||l!==0&&g.nodeType!==3||(s=a+l),g!==i||r!==0&&g.nodeType!==3||(u=a+r),g.nodeType===3&&(a+=g.nodeValue.length),(w=g.firstChild)!==null;)m=g,g=w;for(;;){if(g===e)break t;if(m===n&&++c===l&&(s=a),m===i&&++h===r&&(u=a),(w=g.nextSibling)!==null)break;g=m,m=g.parentNode}g=w}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ei={focusedElem:e,selectionRange:n},Jr=!1,z=t;z!==null;)if(t=z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,z=e;else for(;z!==null;){t=z;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var j=k.memoizedProps,M=k.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?j:Fe(t.type,j),M);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(x){q(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,z=e;break}z=t.return}return k=Ya,Ya=!1,k}function Bn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Hi(t,n,i)}l=l.next}while(l!==r)}}function Cl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Bi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ac(e){var t=e.alternate;t!==null&&(e.alternate=null,ac(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ge],delete t[rr],delete t[_i],delete t[yp],delete t[wp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function sc(e){return e.tag===5||e.tag===3||e.tag===4}function Ka(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||sc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Wi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=tl));else if(r!==4&&(e=e.child,e!==null))for(Wi(e,t,n),e=e.sibling;e!==null;)Wi(e,t,n),e=e.sibling}function Qi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Qi(e,t,n),e=e.sibling;e!==null;)Qi(e,t,n),e=e.sibling}var ae=null,Ve=!1;function dt(e,t,n){for(n=n.child;n!==null;)uc(e,t,n),n=n.sibling}function uc(e,t,n){if(Ze&&typeof Ze.onCommitFiberUnmount=="function")try{Ze.onCommitFiberUnmount(xl,n)}catch{}switch(n.tag){case 5:pe||an(n,t);case 6:var r=ae,l=Ve;ae=null,dt(e,t,n),ae=r,Ve=l,ae!==null&&(Ve?(e=ae,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ae.removeChild(n.stateNode));break;case 18:ae!==null&&(Ve?(e=ae,n=n.stateNode,e.nodeType===8?Xl(e.parentNode,n):e.nodeType===1&&Xl(e,n),Jn(e)):Xl(ae,n.stateNode));break;case 4:r=ae,l=Ve,ae=n.stateNode.containerInfo,Ve=!0,dt(e,t,n),ae=r,Ve=l;break;case 0:case 11:case 14:case 15:if(!pe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&Hi(n,t,a),l=l.next}while(l!==r)}dt(e,t,n);break;case 1:if(!pe&&(an(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){q(n,t,s)}dt(e,t,n);break;case 21:dt(e,t,n);break;case 22:n.mode&1?(pe=(r=pe)||n.memoizedState!==null,dt(e,t,n),pe=r):dt(e,t,n);break;default:dt(e,t,n)}}function Xa(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Ip),t.forEach(function(r){var l=Qp.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Oe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:ae=s.stateNode,Ve=!1;break e;case 3:ae=s.stateNode.containerInfo,Ve=!0;break e;case 4:ae=s.stateNode.containerInfo,Ve=!0;break e}s=s.return}if(ae===null)throw Error(S(160));uc(i,a,l),ae=null,Ve=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(c){q(l,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)cc(t,e),t=t.sibling}function cc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Oe(t,e),Ye(e),r&4){try{Bn(3,e,e.return),Cl(3,e)}catch(j){q(e,e.return,j)}try{Bn(5,e,e.return)}catch(j){q(e,e.return,j)}}break;case 1:Oe(t,e),Ye(e),r&512&&n!==null&&an(n,n.return);break;case 5:if(Oe(t,e),Ye(e),r&512&&n!==null&&an(n,n.return),e.flags&32){var l=e.stateNode;try{Kn(l,"")}catch(j){q(e,e.return,j)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Ms(l,i),gi(s,a);var c=gi(s,i);for(a=0;a<u.length;a+=2){var h=u[a],g=u[a+1];h==="style"?Os(l,g):h==="dangerouslySetInnerHTML"?Ds(l,g):h==="children"?Kn(l,g):lo(l,h,g,c)}switch(s){case"input":di(l,i);break;case"textarea":Ts(l,i);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?un(l,!!i.multiple,w,!1):m!==!!i.multiple&&(i.defaultValue!=null?un(l,!!i.multiple,i.defaultValue,!0):un(l,!!i.multiple,i.multiple?[]:"",!1))}l[rr]=i}catch(j){q(e,e.return,j)}}break;case 6:if(Oe(t,e),Ye(e),r&4){if(e.stateNode===null)throw Error(S(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(j){q(e,e.return,j)}}break;case 3:if(Oe(t,e),Ye(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Jn(t.containerInfo)}catch(j){q(e,e.return,j)}break;case 4:Oe(t,e),Ye(e);break;case 13:Oe(t,e),Ye(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Ao=ee())),r&4&&Xa(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(pe=(c=pe)||h,Oe(t,e),pe=c):Oe(t,e),Ye(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(z=e,h=e.child;h!==null;){for(g=z=h;z!==null;){switch(m=z,w=m.child,m.tag){case 0:case 11:case 14:case 15:Bn(4,m,m.return);break;case 1:an(m,m.return);var k=m.stateNode;if(typeof k.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(j){q(r,n,j)}}break;case 5:an(m,m.return);break;case 22:if(m.memoizedState!==null){Za(g);continue}}w!==null?(w.return=m,z=w):Za(g)}h=h.sibling}e:for(h=null,g=e;;){if(g.tag===5){if(h===null){h=g;try{l=g.stateNode,c?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=g.stateNode,u=g.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Is("display",a))}catch(j){q(e,e.return,j)}}}else if(g.tag===6){if(h===null)try{g.stateNode.nodeValue=c?"":g.memoizedProps}catch(j){q(e,e.return,j)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;h===g&&(h=null),g=g.return}h===g&&(h=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Oe(t,e),Ye(e),r&4&&Xa(e);break;case 21:break;default:Oe(t,e),Ye(e)}}function Ye(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(sc(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Kn(l,""),r.flags&=-33);var i=Ka(e);Qi(e,i,l);break;case 3:case 4:var a=r.stateNode.containerInfo,s=Ka(e);Wi(e,s,a);break;default:throw Error(S(161))}}catch(u){q(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ap(e,t,n){z=e,dc(e)}function dc(e,t,n){for(var r=(e.mode&1)!==0;z!==null;){var l=z,i=l.child;if(l.tag===22&&r){var a=l.memoizedState!==null||Pr;if(!a){var s=l.alternate,u=s!==null&&s.memoizedState!==null||pe;s=Pr;var c=pe;if(Pr=a,(pe=u)&&!c)for(z=l;z!==null;)a=z,u=a.child,a.tag===22&&a.memoizedState!==null?Ja(l):u!==null?(u.return=a,z=u):Ja(l);for(;i!==null;)z=i,dc(i),i=i.sibling;z=l,Pr=s,pe=c}Ga(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,z=i):Ga(e)}}function Ga(e){for(;z!==null;){var t=z;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:pe||Cl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!pe)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Fe(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Ra(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ra(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var g=h.dehydrated;g!==null&&Jn(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}pe||t.flags&512&&Bi(t)}catch(m){q(t,t.return,m)}}if(t===e){z=null;break}if(n=t.sibling,n!==null){n.return=t.return,z=n;break}z=t.return}}function Za(e){for(;z!==null;){var t=z;if(t===e){z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,z=n;break}z=t.return}}function Ja(e){for(;z!==null;){var t=z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Cl(4,t)}catch(u){q(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){q(t,l,u)}}var i=t.return;try{Bi(t)}catch(u){q(t,i,u)}break;case 5:var a=t.return;try{Bi(t)}catch(u){q(t,a,u)}}}catch(u){q(t,t.return,u)}if(t===e){z=null;break}var s=t.sibling;if(s!==null){s.return=t.return,z=s;break}z=t.return}}var Fp=Math.ceil,pl=ct.ReactCurrentDispatcher,Io=ct.ReactCurrentOwner,Re=ct.ReactCurrentBatchConfig,F=0,oe=null,te=null,se=0,je=0,sn=_t(0),le=0,ur=null,Wt=0,El=0,Oo=0,Wn=null,xe=null,Ao=0,kn=1/0,tt=null,fl=!1,Yi=null,Nt=null,_r=!1,xt=null,ml=0,Qn=0,Ki=null,Br=-1,Wr=0;function he(){return F&6?ee():Br!==-1?Br:Br=ee()}function bt(e){return e.mode&1?F&2&&se!==0?se&-se:Sp.transition!==null?(Wr===0&&(Wr=Xs()),Wr):(e=$,e!==0||(e=window.event,e=e===void 0?16:nu(e.type)),e):1}function He(e,t,n,r){if(50<Qn)throw Qn=0,Ki=null,Error(S(185));dr(e,n,r),(!(F&2)||e!==oe)&&(e===oe&&(!(F&2)&&(El|=n),le===4&&gt(e,se)),Se(e,r),n===1&&F===0&&!(t.mode&1)&&(kn=ee()+500,jl&&Lt()))}function Se(e,t){var n=e.callbackNode;Sd(e,t);var r=Zr(e,e===oe?se:0);if(r===0)n!==null&&aa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&aa(n),t===1)e.tag===0?kp(qa.bind(null,e)):ku(qa.bind(null,e)),vp(function(){!(F&6)&&Lt()}),n=null;else{switch(Gs(r)){case 1:n=uo;break;case 4:n=Ys;break;case 16:n=Gr;break;case 536870912:n=Ks;break;default:n=Gr}n=yc(n,pc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function pc(e,t){if(Br=-1,Wr=0,F&6)throw Error(S(327));var n=e.callbackNode;if(mn()&&e.callbackNode!==n)return null;var r=Zr(e,e===oe?se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=hl(e,r);else{t=r;var l=F;F|=2;var i=mc();(oe!==e||se!==t)&&(tt=null,kn=ee()+500,Vt(e,t));do try{Up();break}catch(s){fc(e,s)}while(!0);jo(),pl.current=i,F=l,te!==null?t=0:(oe=null,se=0,t=le)}if(t!==0){if(t===2&&(l=ki(e),l!==0&&(r=l,t=Xi(e,l))),t===1)throw n=ur,Vt(e,0),gt(e,r),Se(e,ee()),n;if(t===6)gt(e,r);else{if(l=e.current.alternate,!(r&30)&&!Vp(l)&&(t=hl(e,r),t===2&&(i=ki(e),i!==0&&(r=i,t=Xi(e,i))),t===1))throw n=ur,Vt(e,0),gt(e,r),Se(e,ee()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:It(e,xe,tt);break;case 3:if(gt(e,r),(r&130023424)===r&&(t=Ao+500-ee(),10<t)){if(Zr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){he(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Pi(It.bind(null,e,xe,tt),t);break}It(e,xe,tt);break;case 4:if(gt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var a=31-Ue(r);i=1<<a,a=t[a],a>l&&(l=a),r&=~i}if(r=l,r=ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Fp(r/1960))-r,10<r){e.timeoutHandle=Pi(It.bind(null,e,xe,tt),r);break}It(e,xe,tt);break;case 5:It(e,xe,tt);break;default:throw Error(S(329))}}}return Se(e,ee()),e.callbackNode===n?pc.bind(null,e):null}function Xi(e,t){var n=Wn;return e.current.memoizedState.isDehydrated&&(Vt(e,t).flags|=256),e=hl(e,t),e!==2&&(t=xe,xe=n,t!==null&&Gi(t)),e}function Gi(e){xe===null?xe=e:xe.push.apply(xe,e)}function Vp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!Be(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function gt(e,t){for(t&=~Oo,t&=~El,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ue(t),r=1<<n;e[n]=-1,t&=~r}}function qa(e){if(F&6)throw Error(S(327));mn();var t=Zr(e,0);if(!(t&1))return Se(e,ee()),null;var n=hl(e,t);if(e.tag!==0&&n===2){var r=ki(e);r!==0&&(t=r,n=Xi(e,r))}if(n===1)throw n=ur,Vt(e,0),gt(e,t),Se(e,ee()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,It(e,xe,tt),Se(e,ee()),null}function Fo(e,t){var n=F;F|=1;try{return e(t)}finally{F=n,F===0&&(kn=ee()+500,jl&&Lt())}}function Qt(e){xt!==null&&xt.tag===0&&!(F&6)&&mn();var t=F;F|=1;var n=Re.transition,r=$;try{if(Re.transition=null,$=1,e)return e()}finally{$=r,Re.transition=n,F=t,!(F&6)&&Lt()}}function Vo(){je=sn.current,Q(sn)}function Vt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,gp(n)),te!==null)for(n=te.return;n!==null;){var r=n;switch(wo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&nl();break;case 3:yn(),Q(we),Q(fe),Po();break;case 5:zo(r);break;case 4:yn();break;case 13:Q(X);break;case 19:Q(X);break;case 10:No(r.type._context);break;case 22:case 23:Vo()}n=n.return}if(oe=e,te=e=Ct(e.current,null),se=je=t,le=0,ur=null,Oo=El=Wt=0,xe=Wn=null,At!==null){for(t=0;t<At.length;t++)if(n=At[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=l,r.next=a}n.pending=r}At=null}return e}function fc(e,t){do{var n=te;try{if(jo(),$r.current=dl,cl){for(var r=G.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}cl=!1}if(Bt=0,ie=re=G=null,Hn=!1,or=0,Io.current=null,n===null||n.return===null){le=1,ur=t,te=null;break}e:{var i=e,a=n.return,s=n,u=t;if(t=se,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=s,g=h.tag;if(!(h.mode&1)&&(g===0||g===11||g===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var w=Va(a);if(w!==null){w.flags&=-257,$a(w,a,s,i,t),w.mode&1&&Fa(i,c,t),t=w,u=c;var k=t.updateQueue;if(k===null){var j=new Set;j.add(u),t.updateQueue=j}else k.add(u);break e}else{if(!(t&1)){Fa(i,c,t),$o();break e}u=Error(S(426))}}else if(K&&s.mode&1){var M=Va(a);if(M!==null){!(M.flags&65536)&&(M.flags|=256),$a(M,a,s,i,t),ko(wn(u,s));break e}}i=u=wn(u,s),le!==4&&(le=2),Wn===null?Wn=[i]:Wn.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=Gu(i,u,t);Ta(i,f);break e;case 1:s=u;var d=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Nt===null||!Nt.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var x=Zu(i,s,t);Ta(i,x);break e}}i=i.return}while(i!==null)}gc(n)}catch(N){t=N,te===n&&n!==null&&(te=n=n.return);continue}break}while(!0)}function mc(){var e=pl.current;return pl.current=dl,e===null?dl:e}function $o(){(le===0||le===3||le===2)&&(le=4),oe===null||!(Wt&268435455)&&!(El&268435455)||gt(oe,se)}function hl(e,t){var n=F;F|=2;var r=mc();(oe!==e||se!==t)&&(tt=null,Vt(e,t));do try{$p();break}catch(l){fc(e,l)}while(!0);if(jo(),F=n,pl.current=r,te!==null)throw Error(S(261));return oe=null,se=0,le}function $p(){for(;te!==null;)hc(te)}function Up(){for(;te!==null&&!fd();)hc(te)}function hc(e){var t=xc(e.alternate,e,je);e.memoizedProps=e.pendingProps,t===null?gc(e):te=t,Io.current=null}function gc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Dp(n,t),n!==null){n.flags&=32767,te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{le=6,te=null;return}}else if(n=Rp(n,t,je),n!==null){te=n;return}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);le===0&&(le=5)}function It(e,t,n){var r=$,l=Re.transition;try{Re.transition=null,$=1,Hp(e,t,n,r)}finally{Re.transition=l,$=r}return null}function Hp(e,t,n,r){do mn();while(xt!==null);if(F&6)throw Error(S(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(jd(e,i),e===oe&&(te=oe=null,se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||_r||(_r=!0,yc(Gr,function(){return mn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Re.transition,Re.transition=null;var a=$;$=1;var s=F;F|=4,Io.current=null,Op(e,n),cc(n,e),up(Ei),Jr=!!Ci,Ei=Ci=null,e.current=n,Ap(n),md(),F=s,$=a,Re.transition=i}else e.current=n;if(_r&&(_r=!1,xt=e,ml=l),i=e.pendingLanes,i===0&&(Nt=null),vd(n.stateNode),Se(e,ee()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(fl)throw fl=!1,e=Yi,Yi=null,e;return ml&1&&e.tag!==0&&mn(),i=e.pendingLanes,i&1?e===Ki?Qn++:(Qn=0,Ki=e):Qn=0,Lt(),null}function mn(){if(xt!==null){var e=Gs(ml),t=Re.transition,n=$;try{if(Re.transition=null,$=16>e?16:e,xt===null)var r=!1;else{if(e=xt,xt=null,ml=0,F&6)throw Error(S(331));var l=F;for(F|=4,z=e.current;z!==null;){var i=z,a=i.child;if(z.flags&16){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(z=c;z!==null;){var h=z;switch(h.tag){case 0:case 11:case 15:Bn(8,h,i)}var g=h.child;if(g!==null)g.return=h,z=g;else for(;z!==null;){h=z;var m=h.sibling,w=h.return;if(ac(h),h===c){z=null;break}if(m!==null){m.return=w,z=m;break}z=w}}}var k=i.alternate;if(k!==null){var j=k.child;if(j!==null){k.child=null;do{var M=j.sibling;j.sibling=null,j=M}while(j!==null)}}z=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,z=a;else e:for(;z!==null;){if(i=z,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Bn(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,z=f;break e}z=i.return}}var d=e.current;for(z=d;z!==null;){a=z;var p=a.child;if(a.subtreeFlags&2064&&p!==null)p.return=a,z=p;else e:for(a=d;z!==null;){if(s=z,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Cl(9,s)}}catch(N){q(s,s.return,N)}if(s===a){z=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,z=x;break e}z=s.return}}if(F=l,Lt(),Ze&&typeof Ze.onPostCommitFiberRoot=="function")try{Ze.onPostCommitFiberRoot(xl,e)}catch{}r=!0}return r}finally{$=n,Re.transition=t}}return!1}function es(e,t,n){t=wn(n,t),t=Gu(e,t,1),e=jt(e,t,1),t=he(),e!==null&&(dr(e,1,t),Se(e,t))}function q(e,t,n){if(e.tag===3)es(e,e,n);else for(;t!==null;){if(t.tag===3){es(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Nt===null||!Nt.has(r))){e=wn(n,e),e=Zu(t,e,1),t=jt(t,e,1),e=he(),t!==null&&(dr(t,1,e),Se(t,e));break}}t=t.return}}function Bp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=he(),e.pingedLanes|=e.suspendedLanes&n,oe===e&&(se&n)===n&&(le===4||le===3&&(se&130023424)===se&&500>ee()-Ao?Vt(e,0):Oo|=n),Se(e,t)}function vc(e,t){t===0&&(e.mode&1?(t=wr,wr<<=1,!(wr&130023424)&&(wr=4194304)):t=1);var n=he();e=st(e,t),e!==null&&(dr(e,t,n),Se(e,n))}function Wp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),vc(e,n)}function Qp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),vc(e,n)}var xc;xc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||we.current)ye=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ye=!1,Tp(e,t,n);ye=!!(e.flags&131072)}else ye=!1,K&&t.flags&1048576&&Su(t,il,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Hr(e,t),e=t.pendingProps;var l=gn(t,fe.current);fn(t,n),l=Lo(null,t,r,e,l,n);var i=Mo();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ke(r)?(i=!0,rl(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Co(t),l.updater=bl,t.stateNode=l,l._reactInternals=t,Ii(t,r,e,n),t=Fi(null,t,r,!0,i,n)):(t.tag=0,K&&i&&yo(t),me(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Hr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Kp(r),e=Fe(r,e),l){case 0:t=Ai(null,t,r,e,n);break e;case 1:t=Ba(null,t,r,e,n);break e;case 11:t=Ua(null,t,r,e,n);break e;case 14:t=Ha(null,t,r,Fe(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Fe(r,l),Ai(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Fe(r,l),Ba(e,t,r,l,n);case 3:e:{if(tc(t),e===null)throw Error(S(387));r=t.pendingProps,i=t.memoizedState,l=i.element,zu(e,t),sl(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=wn(Error(S(423)),t),t=Wa(e,t,r,n,l);break e}else if(r!==l){l=wn(Error(S(424)),t),t=Wa(e,t,r,n,l);break e}else for(Ne=St(t.stateNode.containerInfo.firstChild),be=t,K=!0,$e=null,n=Cu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vn(),r===l){t=ut(e,t,n);break e}me(e,t,r,n)}t=t.child}return t;case 5:return Pu(t),e===null&&Ti(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,a=l.children,zi(r,l)?a=null:i!==null&&zi(r,i)&&(t.flags|=32),ec(e,t),me(e,t,a,n),t.child;case 6:return e===null&&Ti(t),null;case 13:return nc(e,t,n);case 4:return Eo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=xn(t,null,r,n):me(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Fe(r,l),Ua(e,t,r,l,n);case 7:return me(e,t,t.pendingProps,n),t.child;case 8:return me(e,t,t.pendingProps.children,n),t.child;case 12:return me(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,a=l.value,H(ol,r._currentValue),r._currentValue=a,i!==null)if(Be(i.value,a)){if(i.children===l.children&&!we.current){t=ut(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){a=i.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=it(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Ri(i.return,n,t),s.lanes|=n;break}u=u.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(S(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Ri(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}me(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,fn(t,n),l=De(l),r=r(l),t.flags|=1,me(e,t,r,n),t.child;case 14:return r=t.type,l=Fe(r,t.pendingProps),l=Fe(r.type,l),Ha(e,t,r,l,n);case 15:return Ju(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Fe(r,l),Hr(e,t),t.tag=1,ke(r)?(e=!0,rl(t)):e=!1,fn(t,n),Xu(t,r,l),Ii(t,r,l,n),Fi(null,t,r,!0,e,n);case 19:return rc(e,t,n);case 22:return qu(e,t,n)}throw Error(S(156,t.tag))};function yc(e,t){return Qs(e,t)}function Yp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Te(e,t,n,r){return new Yp(e,t,n,r)}function Uo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Kp(e){if(typeof e=="function")return Uo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===oo)return 11;if(e===ao)return 14}return 2}function Ct(e,t){var n=e.alternate;return n===null?(n=Te(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Qr(e,t,n,r,l,i){var a=2;if(r=e,typeof e=="function")Uo(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Zt:return $t(n.children,l,i,t);case io:a=8,l|=8;break;case oi:return e=Te(12,n,t,l|2),e.elementType=oi,e.lanes=i,e;case ai:return e=Te(13,n,t,l),e.elementType=ai,e.lanes=i,e;case si:return e=Te(19,n,t,l),e.elementType=si,e.lanes=i,e;case Ps:return zl(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Es:a=10;break e;case zs:a=9;break e;case oo:a=11;break e;case ao:a=14;break e;case pt:a=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=Te(a,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function $t(e,t,n,r){return e=Te(7,e,r,t),e.lanes=n,e}function zl(e,t,n,r){return e=Te(22,e,r,t),e.elementType=Ps,e.lanes=n,e.stateNode={isHidden:!1},e}function ri(e,t,n){return e=Te(6,e,null,t),e.lanes=n,e}function li(e,t,n){return t=Te(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Xp(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Al(0),this.expirationTimes=Al(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Al(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Ho(e,t,n,r,l,i,a,s,u){return e=new Xp(e,t,n,s,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Te(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Co(i),e}function Gp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Gt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function wc(e){if(!e)return zt;e=e._reactInternals;e:{if(Kt(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ke(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(ke(n))return wu(e,n,t)}return t}function kc(e,t,n,r,l,i,a,s,u){return e=Ho(n,r,!0,e,l,i,a,s,u),e.context=wc(null),n=e.current,r=he(),l=bt(n),i=it(r,l),i.callback=t??null,jt(n,i,l),e.current.lanes=l,dr(e,l,r),Se(e,r),e}function Pl(e,t,n,r){var l=t.current,i=he(),a=bt(l);return n=wc(n),t.context===null?t.context=n:t.pendingContext=n,t=it(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=jt(l,t,a),e!==null&&(He(e,l,a,i),Vr(e,l,a)),a}function gl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ts(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Bo(e,t){ts(e,t),(e=e.alternate)&&ts(e,t)}function Zp(){return null}var Sc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Wo(e){this._internalRoot=e}_l.prototype.render=Wo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));Pl(e,t,null,null)};_l.prototype.unmount=Wo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Qt(function(){Pl(null,e,null,null)}),t[at]=null}};function _l(e){this._internalRoot=e}_l.prototype.unstable_scheduleHydration=function(e){if(e){var t=qs();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ht.length&&t!==0&&t<ht[n].priority;n++);ht.splice(n,0,e),n===0&&tu(e)}};function Qo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ll(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ns(){}function Jp(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var c=gl(a);i.call(c)}}var a=kc(t,r,e,0,null,!1,!1,"",ns);return e._reactRootContainer=a,e[at]=a.current,tr(e.nodeType===8?e.parentNode:e),Qt(),a}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var c=gl(u);s.call(c)}}var u=Ho(e,0,!1,null,null,!1,!1,"",ns);return e._reactRootContainer=u,e[at]=u.current,tr(e.nodeType===8?e.parentNode:e),Qt(function(){Pl(t,u,n,r)}),u}function Ml(e,t,n,r,l){var i=n._reactRootContainer;if(i){var a=i;if(typeof l=="function"){var s=l;l=function(){var u=gl(a);s.call(u)}}Pl(t,a,e,l)}else a=Jp(n,t,e,l,r);return gl(a)}Zs=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=In(t.pendingLanes);n!==0&&(co(t,n|1),Se(t,ee()),!(F&6)&&(kn=ee()+500,Lt()))}break;case 13:Qt(function(){var r=st(e,1);if(r!==null){var l=he();He(r,e,1,l)}}),Bo(e,1)}};po=function(e){if(e.tag===13){var t=st(e,134217728);if(t!==null){var n=he();He(t,e,134217728,n)}Bo(e,134217728)}};Js=function(e){if(e.tag===13){var t=bt(e),n=st(e,t);if(n!==null){var r=he();He(n,e,t,r)}Bo(e,t)}};qs=function(){return $};eu=function(e,t){var n=$;try{return $=e,t()}finally{$=n}};xi=function(e,t,n){switch(t){case"input":if(di(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Sl(r);if(!l)throw Error(S(90));Ls(r),di(r,l)}}}break;case"textarea":Ts(e,n);break;case"select":t=n.value,t!=null&&un(e,!!n.multiple,t,!1)}};Vs=Fo;$s=Qt;var qp={usingClientEntryPoint:!1,Events:[fr,tn,Sl,As,Fs,Fo]},Tn={findFiberByHostInstance:Ot,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ef={bundleType:Tn.bundleType,version:Tn.version,rendererPackageName:Tn.rendererPackageName,rendererConfig:Tn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ct.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Bs(e),e===null?null:e.stateNode},findFiberByHostInstance:Tn.findFiberByHostInstance||Zp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lr.isDisabled&&Lr.supportsFiber)try{xl=Lr.inject(ef),Ze=Lr}catch{}}Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qp;Ee.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qo(t))throw Error(S(200));return Gp(e,t,null,n)};Ee.createRoot=function(e,t){if(!Qo(e))throw Error(S(299));var n=!1,r="",l=Sc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Ho(e,1,!1,null,null,n,!1,r,l),e[at]=t.current,tr(e.nodeType===8?e.parentNode:e),new Wo(t)};Ee.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=Bs(t),e=e===null?null:e.stateNode,e};Ee.flushSync=function(e){return Qt(e)};Ee.hydrate=function(e,t,n){if(!Ll(t))throw Error(S(200));return Ml(null,e,t,!0,n)};Ee.hydrateRoot=function(e,t,n){if(!Qo(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",a=Sc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=kc(t,null,e,1,n??null,l,!1,i,a),e[at]=t.current,tr(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new _l(t)};Ee.render=function(e,t,n){if(!Ll(t))throw Error(S(200));return Ml(null,e,t,!1,n)};Ee.unmountComponentAtNode=function(e){if(!Ll(e))throw Error(S(40));return e._reactRootContainer?(Qt(function(){Ml(null,null,e,!1,function(){e._reactRootContainer=null,e[at]=null})}),!0):!1};Ee.unstable_batchedUpdates=Fo;Ee.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ll(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Ml(e,t,n,!1,r)};Ee.version="18.3.1-next-f1338f8080-20240426";function jc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jc)}catch(e){console.error(e)}}jc(),js.exports=Ee;var tf=js.exports,Nc,rs=tf;Nc=rs.createRoot,rs.hydrateRoot;function nf({children:e}){return o.jsx("span",{className:"sidebar-icon","aria-hidden":"true",children:e})}function rf({status:e,staticCount:t,runtimeCount:n,plotCount:r,activeView:l,onNavigate:i,onRunAnalysis:a,onAutoFix:s}){const u=[{label:"Analyzer",icon:"◫",view:"analyzer"},{label:"Visualization",icon:"▣",view:"visualization"},{label:"Comparison",icon:"⇌",view:"comparison"},{label:"AST Visualizer",icon:"🌲",view:"ast_visualizer"},{label:"Playground",icon:"🎛️",view:"playground"},{label:"Stability Heatmap",icon:"🗺️",view:"heatmap"},{label:"Report",icon:"▤",view:"report"}];return o.jsxs("aside",{className:"sidebar-panel matte-panel reveal",children:[o.jsxs("div",{className:"sidebar-brand",children:[o.jsx("div",{className:"brand-mark sidebar-mark",children:o.jsx("span",{children:"NS"})}),o.jsx("div",{children:o.jsx("div",{className:"sidebar-title",children:"Numerical Stability"})})]}),o.jsxs("div",{className:"sidebar-status",children:[o.jsx("span",{className:"status-dot"}),o.jsx("span",{children:e})]}),o.jsx("div",{className:"sidebar-section-label",children:"Navigation"}),o.jsx("div",{className:"sidebar-nav",children:u.map(c=>o.jsxs("button",{className:`sidebar-nav-item ${l===c.view?"active":""}`,type:"button",onClick:()=>i(c.view),children:[o.jsx("div",{className:"nav-icon",children:o.jsx(nf,{children:c.icon})}),o.jsx("span",{children:c.label})]},c.label))}),o.jsx("div",{className:"sidebar-section-label",children:"Quick Metrics"}),o.jsxs("div",{className:"sidebar-metrics",children:[o.jsxs("div",{className:"sidebar-metric",children:[o.jsx("span",{children:"Static"}),o.jsx("strong",{children:t})]}),o.jsxs("div",{className:"sidebar-metric",children:[o.jsx("span",{children:"Runtime"}),o.jsx("strong",{children:n})]}),o.jsxs("div",{className:"sidebar-metric",children:[o.jsx("span",{children:"Plots"}),o.jsx("strong",{children:r})]})]})]})}function Ke({name:e}){const t={shield:o.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"}),alert:o.jsx("path",{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4M12 17h.01"}),check:o.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4L12 14.01l-3-3"}),cross:o.jsx("path",{d:"M18 6L6 18M6 6l12 12"}),spark:o.jsx("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"}),arrowRight:o.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"}),print:o.jsx("path",{d:"M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2M6 14h12v8H6z"})};return o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"comp-icon",style:{width:"20px",height:"20px"},children:t[e]})}function lf(e,t){const n=e?e.split(`
`):[],r=t?t.split(`
`):[],l=Array(n.length+1).fill(null).map(()=>Array(r.length+1).fill(0));for(let u=1;u<=n.length;u++)for(let c=1;c<=r.length;c++)n[u-1]===r[c-1]?l[u][c]=l[u-1][c-1]+1:l[u][c]=Math.max(l[u-1][c],l[u][c-1]);let i=n.length,a=r.length;const s=[];for(;i>0||a>0;)i>0&&a>0&&n[i-1]===r[a-1]?(s.unshift({type:"unchanged",value:n[i-1],oldLine:i,newLine:a}),i--,a--):a>0&&(i===0||l[i][a-1]>=l[i-1][a])?(s.unshift({type:"added",value:r[a-1],oldLine:null,newLine:a}),a--):(s.unshift({type:"removed",value:n[i-1],oldLine:i,newLine:null}),i--);return s}function of(e,t){const n=lf(e,t),r=[],l=[],i=[];return n.forEach(a=>{a.type==="unchanged"?(ls(l,i,r),r.push({left:{type:"unchanged",value:a.value,lineNum:a.oldLine},right:{type:"unchanged",value:a.value,lineNum:a.newLine}})):a.type==="removed"?l.push({type:"removed",value:a.value,lineNum:a.oldLine}):a.type==="added"&&i.push({type:"added",value:a.value,lineNum:a.newLine})}),ls(l,i,r),r}function ls(e,t,n){const r=Math.max(e.length,t.length);for(let l=0;l<r;l++)n.push({left:e[l]||{type:"empty",value:"",lineNum:""},right:t[l]||{type:"empty",value:"",lineNum:""}});e.length=0,t.length=0}const is=e=>{var l;if(!e)return 0;let t=100;const n=((l=e.staticIssues)==null?void 0:l.length)||0;return t-=n*15,(e.runtimeSummary||[]).forEach(i=>{const a=i.status||"";a.includes("Unstable")||a.includes("❌")?t-=25:a.includes("Risky")||a.includes("⚠️")?t-=10:a.includes("Potentially")&&(t-=5)}),Math.max(0,Math.min(100,t))},os=e=>{if(!e)return 0;let t=0;const n=e.plots||{};return Object.values(n).forEach(r=>{(r.points||[]).forEach(i=>{const a=parseFloat(i.relativeError);!isNaN(a)&&a>t&&(t=a)})}),t},as=e=>e?(e.runtimeSummary||[]).filter(n=>!n.status.includes("✅")).length:0,ss=e=>e===0?"0":e<1e-4||e>1e4?e.toExponential(4):e.toFixed(6);function af({code:e,onApplyFixedCode:t}){var f,d,p,x;const[n,r]=L.useState(null),[l,i]=L.useState(!1),[a,s]=L.useState(""),u=async()=>{i(!0),s("");try{const N=await fetch("/api/compare",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:e})}),b=await N.json();if(!N.ok)throw new Error(b.error||"Failed to compile comparison.");r(b)}catch(N){s(N.message)}finally{i(!1)}};L.useEffect(()=>{u()},[e]);const c=n?is(n.originalAnalysis):0,h=n?is(n.fixedAnalysis):0,g=n?os(n.originalAnalysis):0,m=n?os(n.fixedAnalysis):0,w=n?as(n.originalAnalysis):0,k=n?as(n.fixedAnalysis):0,j=n?Math.max(0,(((d=(f=n.originalAnalysis)==null?void 0:f.staticIssues)==null?void 0:d.length)||0)-(((x=(p=n.fixedAnalysis)==null?void 0:p.staticIssues)==null?void 0:x.length)||0)):0,M=n?of(n.originalCode,n.fixedCode):[];return o.jsxs("section",{className:"comparison-page matte-panel reveal",style:{gridColumn:"2 / -1"},children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"header-comp",children:[o.jsxs("div",{children:[o.jsx("h2",{children:"Baseline vs Improved Comparison"}),o.jsx("p",{children:"Analyzing side-by-side numerical verification and structural changes"})]}),o.jsxs("div",{className:"apply-fixed-container",style:{display:"flex",gap:"12px"},children:[o.jsx("button",{className:"action-button secondary",onClick:u,disabled:l,style:{padding:"10px 18px"},children:"Re-run Comparison"}),o.jsxs("button",{className:"action-button",onClick:()=>window.print(),disabled:l,style:{padding:"10px 18px",background:"var(--blue-deep)",borderColor:"var(--blue-deep)",display:"flex",alignItems:"center",gap:"8px"},children:[o.jsx(Ke,{name:"print"}),o.jsx("span",{children:"Export PDF Report"})]})]})]}),l?o.jsxs("div",{className:"spinner-container-comp",children:[o.jsx("div",{className:"spinner-comp"}),o.jsx("p",{children:"Running pipeline compilation and compiling high-precision verification matrices..."})]}):a?o.jsxs("div",{className:"error-banner",style:{marginTop:"20px",padding:"16px"},children:[o.jsx("p",{style:{fontWeight:600,margin:"0 0 8px"},children:"Pipeline execution error"}),o.jsx("p",{style:{margin:0,opacity:.9},children:a})]}):n?o.jsxs("div",{className:"comparison-layout",children:[o.jsxs("div",{className:"metrics-grid-comp",children:[o.jsxs("div",{className:"metric-card-comp",children:[o.jsxs("div",{className:"metric-header",children:[o.jsx("span",{children:"Stability Score"}),o.jsx(Ke,{name:"shield"})]}),o.jsxs("div",{className:"metric-comparison",children:[o.jsx("span",{className:"val-original",children:c}),o.jsx("span",{className:"val-arrow",children:o.jsx(Ke,{name:"arrowRight"})}),o.jsx("span",{className:"val-fixed",children:h})]}),o.jsx("div",{className:"metric-label-comp",children:"Numerical Stability Rating"}),h>c?o.jsxs("div",{className:"delta-badge positive",children:["+",h-c,"% Improvement"]}):o.jsx("div",{className:"delta-badge neutral",children:"No Rating Change"})]}),o.jsxs("div",{className:"metric-card-comp",children:[o.jsxs("div",{className:"metric-header",children:[o.jsx("span",{children:"Max Relative Error"}),o.jsx(Ke,{name:"spark"})]}),o.jsxs("div",{className:"metric-comparison",children:[o.jsx("span",{className:"val-original",style:{fontSize:"1.2rem"},children:ss(g)}),o.jsx("span",{className:"val-arrow",children:o.jsx(Ke,{name:"arrowRight"})}),o.jsx("span",{className:"val-fixed",style:{fontSize:"1.3rem"},children:ss(m)})]}),o.jsx("div",{className:"metric-label-comp",children:"Mathematical Deviation"}),g>m?o.jsx("div",{className:"delta-badge positive",children:"Precision Stabilized"}):g===0&&m===0?o.jsx("div",{className:"delta-badge positive",children:"Zero Error Convergence"}):o.jsx("div",{className:"delta-badge neutral",children:"No Precision Change"})]}),o.jsxs("div",{className:"metric-card-comp",children:[o.jsxs("div",{className:"metric-header",children:[o.jsx("span",{children:"Runtime Warnings"}),o.jsx(Ke,{name:"alert"})]}),o.jsxs("div",{className:"metric-comparison",children:[o.jsx("span",{className:"val-original",children:w}),o.jsx("span",{className:"val-arrow",children:o.jsx(Ke,{name:"arrowRight"})}),o.jsx("span",{className:"val-fixed",style:{color:k>0?"var(--amber)":"var(--green)"},children:k})]}),o.jsx("div",{className:"metric-label-comp",children:"Numerical Pipeline Alert States"}),w>k?o.jsxs("div",{className:"delta-badge positive",children:["-",w-k," Alerts Resolved"]}):o.jsx("div",{className:"delta-badge neutral",children:"0 Warnings Triggered"})]}),o.jsxs("div",{className:"metric-card-comp",children:[o.jsxs("div",{className:"metric-header",children:[o.jsx("span",{children:"Patterns Reduced"}),o.jsx(Ke,{name:"check"})]}),o.jsx("div",{className:"metric-comparison",style:{padding:"6px 0"},children:o.jsx("span",{className:"val-fixed",style:{fontSize:"2rem"},children:j})}),o.jsx("div",{className:"metric-label-comp",children:"Removed AST Vulnerabilities"}),j>0?o.jsxs("div",{className:"delta-badge positive",children:[j," Potential Failures Avoided"]}):o.jsx("div",{className:"delta-badge neutral",children:"No Patterns Flagged"})]})]}),o.jsxs("div",{className:"diff-viewer-panel",children:[o.jsxs("div",{className:"diff-header-row",children:[o.jsxs("div",{className:"diff-header-col original",children:[o.jsx(Ke,{name:"cross"}),o.jsx("span",{children:"Original Code (Baseline)"})]}),o.jsxs("div",{className:"diff-header-col fixed",children:[o.jsx(Ke,{name:"check"}),o.jsx("span",{children:"Auto-Fixed Code (Optimized)"})]})]}),o.jsx("div",{className:"diff-content",children:M.map((N,b)=>{const y=N.left.type==="removed"?"removed":N.left.type==="empty"?"empty":"",v=N.right.type==="added"?"added":N.right.type==="empty"?"empty":"";return o.jsxs("div",{className:"diff-line-row",children:[o.jsxs("div",{className:`diff-half-pane ${y}`,children:[o.jsx("div",{className:"diff-pane-ln",children:N.left.lineNum}),o.jsx("div",{className:"diff-pane-content",children:N.left.value})]}),o.jsxs("div",{className:`diff-half-pane ${v}`,children:[o.jsx("div",{className:"diff-pane-ln",children:N.right.lineNum}),o.jsx("div",{className:"diff-pane-content",children:N.right.value})]})]},b)})})]}),o.jsxs("div",{className:"apply-fixed-container",style:{borderTop:"1px solid var(--border)",paddingTop:"20px"},children:[o.jsx("p",{style:{alignSelf:"center",margin:0,color:"var(--muted)",fontSize:"0.9rem"},children:"Would you like to import this auto-fixed safety patched code into your active workspace?"}),o.jsx("button",{className:"action-button",onClick:()=>t(n.fixedCode),style:{padding:"12px 24px"},children:"Apply Patches to Workspace"})]})]}):o.jsx("div",{className:"empty-state large",children:'No comparison analysis cached. Click "Re-run Comparison" to load data.'})]})}const us=[{key:"unstable_expr",label:"Loss of Significance",subtitle:"Evaluating sqrt(x*x + 1) - x vs 1 / (sqrt(x*x + 1) + x)",description:"As x grows, x*x dominates the floating-point register. Subtracting x from sqrt(x*x + 1) causes catastrophic cancellation of the most significant bits, dropping relative precision to absolute zero. The conjugate formulation converts subtraction to addition, preserving full float precision.",inputs:[10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9],xAxisLabel:"Input Magnitude (x)",yAxisLabel:"Relative Error",eval:e=>{const t=1/(Math.sqrt(e*e+1)+e),n=Math.sqrt(e*e+1)-e,r=1/(Math.sqrt(e*e+1)+e);return{trueVal:t,original:n,fixed:r}}},{key:"cancellation",label:"Catastrophic Cancellation",subtitle:"Evaluating base - (base - delta) vs delta",description:"When subtracting two nearly equal values, the leading significant bits cancel out, leaving only low-precision numerical noise. The auto-fix truncates computational noise below machine epsilon safely down to absolute zero.",inputs:[.01,1e-4,1e-6,1e-8,1e-10,1e-12,1e-14,1e-16],xAxisLabel:"Delta Offset Size (smaller = closer values)",yAxisLabel:"Relative Error",eval:e=>{const t=1000000000001e-6,n=e,r=t-(t-e),l=Math.abs(e)<222e-18?0:e;return{trueVal:n,original:r,fixed:l}}},{key:"division",label:"Division by Small Number",subtitle:"Evaluating 1.0 / (x - 1.0) with protection barriers",description:"As x approaches 1.0, the denominator becomes extremely small. Hardware limits map this close to zero, causing output spikes towards Infinity. The fixed form applies assertion and protection barriers to lock the result safely to Infinity.",inputs:[.01,1e-4,1e-6,1e-8,1e-10,1e-12,1e-14,1e-15,1e-16],xAxisLabel:"Distance from 1.0 (delta)",yAxisLabel:"Relative Error",eval:e=>{const t=1/e,n=1/(1+e-1),r=Math.abs(e)<222e-18?1/0:1/e;return{trueVal:t,original:n,fixed:r}}},{key:"trig",label:"Trigonometric Cancellation",subtitle:"Evaluating sin(x) - sin(x + delta) vs product identity",description:"For large angles, sin(x) and sin(x+delta) are close, leading to severe precision loss during subtraction. Using trigonometric identities to convert subtraction to multiplication removes the cancellation step entirely.",inputs:[10,100,1e3,1e4,1e5,1e6,1e7,1e8],xAxisLabel:"Angle Magnitude (x)",yAxisLabel:"Relative Error",eval:e=>{const n=-2*Math.sin(5e-9)*Math.cos(e+5e-9),r=Math.sin(e)-Math.sin(e+1e-8),l=-2*Math.sin(1e-8/2)*Math.cos(e+1e-8/2);return{trueVal:n,original:r,fixed:l}}},{key:"log",label:"Logarithmic Instability",subtitle:"Evaluating log(x + 1) - log(x) vs log1p(1 / x)",description:"Subtracting two large logarithms causes catastrophic loss of fractional significance as log(x+1) collapses to log(x). Using log1p(1/x) preserves full relative precision.",inputs:[10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9],xAxisLabel:"Input Magnitude (x)",yAxisLabel:"Relative Error",eval:e=>{const t=Math.log1p(1/e),n=Math.log(e+1)-Math.log(e),r=Math.log1p(1/e);return{trueVal:t,original:n,fixed:r}}},{key:"overflow",label:"Floating-Point Overflow",subtitle:"Evaluating exp(x) under hardware register bounds",description:"When inputs exceed standard 64-bit double bounds, hardware registers saturate to positive Infinity. Bounding checks lock output safely to DBL_MAX before calculation.",inputs:[100,200,300,400,500,600,700,710,720,730,740,750],xAxisLabel:"Exponent Input (x)",yAxisLabel:"Relative Error",eval:e=>{const t=Math.exp(e),n=Math.exp(e),r=Math.exp(Math.min(e,709.782712893384));return{trueVal:t,original:n,fixed:r}}}],cs=(e,t)=>{if(e===1/0&&t===1/0||e===0&&t===0)return 0;if(t===0)return e===0?0:1;if(isNaN(e)||isNaN(t))return 1;const n=Math.abs(e-t)/Math.abs(t);return Math.min(n,1)},Rt=e=>e===0?"0":e<1e-4||e>1e4?e.toExponential(4):e.toFixed(6);function sf({code:e}){const[t,n]=L.useState("unstable_expr"),[r,l]=L.useState(null),[i,a]=L.useState(!1),[s,u]=L.useState(!1),c=async()=>{u(!0);try{if(!(await fetch("/api/autofix",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:e})})).ok)throw new Error("Auto-fix failed");a(!0)}catch(v){console.error(v)}finally{u(!1)}},h=us.find(v=>v.key===t),g=800,m=400,w=70,k=h.inputs.map(v=>{const{trueVal:P,original:_,fixed:D}=h.eval(v),V=cs(_,P),Y=cs(D,P);return{input:v,origErr:V,fixedErr:Y,origVal:_,fixedVal:D,trueVal:P}}),j=k.filter(v=>v.origErr<=1e-10).length,M=Math.round(j/k.length*100),f=i?100:M,d=f-M,p=v=>{const P=Math.min(...h.inputs),_=Math.max(...h.inputs),D=Math.log10(P),V=Math.log10(_),B=(Math.log10(v)-D)/(V-D||1);return w+B*(g-w*2)},x=v=>{const V=((v<=1e-16?-16:Math.log10(v))- -16)/16;return m-w-V*(m-w*2)},N=k.map((v,P)=>`${P===0?"M":"L"} ${p(v.input)} ${x(v.origErr)}`).join(" "),b=k.map((v,P)=>`${P===0?"M":"L"} ${p(v.input)} ${x(v.fixedErr)}`).join(" "),y=[0,-2,-4,-6,-8,-10,-12,-14,-16];return o.jsxs("section",{className:"visualization-page matte-panel reveal",style:{gridColumn:"2 / -1"},children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"viz-header",children:[o.jsx("h2",{children:"Interactive Error Growth Visualization"}),o.jsx("p",{children:"Plotting relative error convergence curves across dynamic input sizes (Logarithmic Scale)"})]}),o.jsxs("div",{className:"viz-layout",children:[o.jsxs("div",{className:"control-row",style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"16px"},children:[o.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center",flexWrap:"wrap"},children:[o.jsxs("div",{children:[o.jsx("span",{className:"select-label",children:"Analysis Target Function:"}),o.jsx("select",{value:t,onChange:v=>{n(v.target.value),l(null)},className:"dropdown-viz",style:{minWidth:"200px"},children:us.map(v=>o.jsx("option",{value:v.key,children:v.label},v.key))})]}),!i&&o.jsx("button",{onClick:c,disabled:s,className:"dropdown-viz",style:{background:"var(--blue-deep)",borderColor:"var(--blue-deep)",color:"#fff",fontWeight:"600",cursor:"pointer",padding:"8px 16px",borderRadius:"8px",minWidth:"auto"},children:s?"Calculating...":"Run AI Auto-Fix"}),i&&o.jsx("span",{style:{color:"var(--green)",fontWeight:"600",fontSize:"0.9rem"},children:"✓ Patches Applied & Verified"})]}),o.jsx("div",{style:{color:"var(--muted)",fontSize:"0.85rem",fontStyle:"italic"},children:"* Hover over data points to inspect computed errors"})]}),o.jsxs("div",{className:"metrics-row-viz",children:[o.jsxs("div",{className:"metric-card-viz",children:[o.jsxs("div",{className:"metric-header-viz",children:[o.jsx("span",{children:"Stability Rating (Baseline)"}),o.jsxs("span",{className:"metric-score-viz red",children:[M,"%"]})]}),o.jsx("div",{className:"metric-bar-viz",children:o.jsx("div",{className:"metric-progress-viz red",style:{width:`${M}%`}})})]}),o.jsxs("div",{className:"metric-card-viz",children:[o.jsxs("div",{className:"metric-header-viz",children:[o.jsx("span",{children:"Stability Rating (Patched)"}),o.jsxs("span",{className:`metric-score-viz ${i?"green":"muted"}`,children:[f,"%"]})]}),o.jsx("div",{className:"metric-bar-viz",children:o.jsx("div",{className:`metric-progress-viz ${i?"green":"muted"}`,style:{width:`${f}%`}})})]}),o.jsxs("div",{className:"metric-card-viz",children:[o.jsxs("div",{className:"metric-header-viz",style:{marginBottom:"2px"},children:[o.jsx("span",{children:"Numerical Precision Gain"}),i&&d>0?o.jsxs("span",{className:"metric-score-viz green",children:["+",d,"%"]}):o.jsx("span",{className:"metric-score-viz muted",children:"0%"})]}),o.jsx("div",{className:"delta-label-viz",children:i&&d>0?"✓ Stability verified under stress parameters":"💡 Run AI Auto-Fix to compute improvement"})]})]}),o.jsxs("div",{className:"viz-card",children:[o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"16px"},children:[o.jsxs("div",{children:[o.jsx("h3",{style:{margin:0,fontSize:"1.2rem",fontWeight:"700"},children:h.label}),o.jsx("p",{style:{margin:"2px 0 0",color:"var(--muted)",fontSize:"0.85rem"},children:h.subtitle})]}),o.jsxs("div",{className:"chart-legend",children:[o.jsxs("div",{className:"legend-item",children:[o.jsx("span",{className:"legend-color original"}),o.jsx("span",{children:"Original Code (Unstable)"})]}),i&&o.jsxs("div",{className:"legend-item",children:[o.jsx("span",{className:"legend-color fixed"}),o.jsx("span",{children:"Auto-fixed Code (Stable)"})]})]})]}),o.jsxs("div",{className:"svg-container",children:[o.jsxs("svg",{viewBox:`0 0 ${g} ${m}`,className:"chart-svg",children:[y.map(v=>{const P=x(Math.pow(10,v));return o.jsxs("g",{children:[o.jsx("line",{x1:w,x2:g-w,y1:P,y2:P,className:"grid-line-viz"}),o.jsxs("text",{x:w-10,y:P+4,textAnchor:"end",className:"axis-text",children:["10^",v]})]},v)}),h.inputs.map((v,P)=>{const _=p(v);return o.jsxs("g",{children:[o.jsx("line",{x1:_,x2:_,y1:w,y2:m-w,className:"grid-line-viz"}),o.jsx("text",{x:_,y:m-w+16,textAnchor:"middle",className:"axis-text",children:Rt(v)})]},P)}),o.jsx("line",{x1:w,x2:g-w,y1:m-w,y2:m-w,className:"axis-line"}),o.jsx("line",{x1:w,x2:w,y1:w,y2:m-w,className:"axis-line"}),o.jsx("text",{x:g/2,y:m-w+36,textAnchor:"middle",className:"axis-text",style:{fontWeight:600,fill:"var(--text)"},children:h.xAxisLabel}),o.jsx("text",{transform:`rotate(-90 18 ${m/2})`,x:18,y:m/2,textAnchor:"middle",className:"axis-text",style:{fontWeight:600,fill:"var(--text)"},children:h.yAxisLabel}),o.jsx("path",{d:N,className:"path-original"}),i&&o.jsx("path",{d:b,className:"path-fixed"}),k.map((v,P)=>{const _=p(v.input),D=x(v.origErr),V=x(v.fixedErr);return o.jsxs("g",{children:[o.jsx("circle",{cx:_,cy:D,r:"5.5",className:"dot-original",onMouseEnter:Y=>{const B=Y.target.getBoundingClientRect(),I=Y.target.ownerSVGElement.parentNode.getBoundingClientRect();l({x:B.left-I.left+10,y:B.top-I.top-120,data:v,isFixed:!1})},onMouseLeave:()=>l(null)}),i&&o.jsx("circle",{cx:_,cy:V,r:"5.5",className:"dot-fixed",onMouseEnter:Y=>{const B=Y.target.getBoundingClientRect(),I=Y.target.ownerSVGElement.parentNode.getBoundingClientRect();l({x:B.left-I.left+10,y:B.top-I.top-120,data:v,isFixed:!0})},onMouseLeave:()=>l(null)})]},P)})]}),r&&o.jsxs("div",{className:"tooltip-card-viz",style:{left:`${r.x}px`,top:`${r.y}px`},children:[o.jsxs("div",{className:"tooltip-title",children:[h.label," Input Details"]}),o.jsxs("p",{children:[o.jsx("strong",{children:"Input:"})," ",Rt(r.data.input)]}),o.jsxs("p",{children:[o.jsx("strong",{children:"True Value:"})," ",Rt(r.data.trueVal)]}),o.jsxs("p",{children:[o.jsx("strong",{children:"Original Value:"})," ",Rt(r.data.origVal)]}),o.jsxs("p",{children:[o.jsx("strong",{children:"Original Relative Error:"})," ",Rt(r.data.origErr)]}),i&&o.jsxs(o.Fragment,{children:[o.jsxs("p",{children:[o.jsx("strong",{children:"Fixed Value:"})," ",Rt(r.data.fixedVal)]}),o.jsxs("p",{children:[o.jsx("strong",{children:"Fixed Relative Error:"})," ",Rt(r.data.fixedErr)]})]}),o.jsx("p",{style:{marginTop:"8px",fontWeight:"700",color:r.isFixed?"var(--green)":"var(--red)"},children:r.isFixed?"✓ Safe precision preserved":r.data.origErr>1e-6?"⚠ Catastrophic precision loss":"• Low error margin"})]})]})]}),o.jsxs("div",{className:"info-panel-viz",children:[o.jsx("div",{className:"info-title",children:o.jsx("span",{children:"Mathematical Precision Diagnosis"})}),o.jsx("p",{className:"info-desc",children:h.description})]})]})]})}const Mr={unstable_expr:{label:"Loss of Significance (Conjugate Rewrite)",description:"Evaluates sqrt(x*x + 1.0) - x. At high magnitudes, floating-point subtraction cancels out precision.",before:{type:"operator",value:"-",isVulnerable:!0,vulnType:"Loss of Significance",vulnDesc:"Critical subtraction of nearly equal terms. Since sqrt(x^2 + 1) ≈ x for large x, the difference collapses to 0.0, wiping out all trailing bits.",left:{type:"function",value:"sqrt",desc:"Calls standard square root function. Suffers from high-precision rounding on square inputs.",left:{type:"operator",value:"+",desc:"Floating-point addition node. Adds huge squared input to constant literal.",left:{type:"operator",value:"*",desc:"Multiplication node. Squares the variable 'x' which rapidly scales register exponent bits.",left:{type:"variable",value:"x",desc:"Double-precision input variable scaling to high magnitudes."},right:{type:"variable",value:"x",desc:"Double-precision input variable scaling to high magnitudes."}},right:{type:"literal",value:"1.0",desc:"Constant literal. Becomes insignificant when added to x^2."}}},right:{type:"variable",value:"x",desc:"Original double-precision variable input term."}},after:{type:"operator",value:"/",isOptimized:!0,optDesc:"Conjugate division node. Transforms subtractive cancellation into addition, preserving subnormal precision.",left:{type:"literal",value:"1.0",desc:"Constant numerator. Avoids subtractive precision loss."},right:{type:"operator",value:"+",desc:"Addition operator. Adding positive terms prevents cancellation.",left:{type:"function",value:"sqrt",desc:"Square root evaluating positive sums safely.",left:{type:"operator",value:"+",desc:"Inner addition node.",left:{type:"operator",value:"*",desc:"Squaring input x safely.",left:{type:"variable",value:"x",desc:"Double-precision variable input."},right:{type:"variable",value:"x",desc:"Double-precision variable input."}},right:{type:"literal",value:"1.0",desc:"Constant literal addend."}}},right:{type:"variable",value:"x",desc:"Positive addend term."}}}},cancellation:{label:"Catastrophic Cancellation (Epsilon Guard)",description:"Evaluates (12345678.0 + 1.23e-9) - 12345678.0. Large constant addends shift precision window beyond small delta limits.",before:{type:"operator",value:"-",isVulnerable:!0,vulnType:"Catastrophic Cancellation",vulnDesc:"Catastrophic subtraction node. Discards small trailing bits (1.23e-9) completely because they fall outside the 53-bit mantissa window of the large float.",left:{type:"operator",value:"+",desc:"Addition of extreme scale differences. Causes immediate truncation of the smaller term.",left:{type:"literal",value:"12345678.0",desc:"Large constant offset occupying significant bits in registers."},right:{type:"literal",value:"1.23e-9",desc:"Highly precise subnormal delta value. Will be truncated."}},right:{type:"literal",value:"12345678.0",desc:"Large constant offset subtracted from the offset summation."}},after:{type:"function",value:"epsilon_guard",isOptimized:!0,optDesc:"Numerical truncation guard. Intercepts subtraction. If difference is within machine epsilon noise, resolves result safely to 0.0.",left:{type:"operator",value:"-",desc:"Safe subtraction. Guarded by the parent threshold check.",left:{type:"operator",value:"+",desc:"Unstable sum of terms.",left:{type:"literal",value:"12345678.0",desc:"Large constant numeric literal."},right:{type:"literal",value:"1.23e-9",desc:"Small numeric literal delta."}},right:{type:"literal",value:"12345678.0",desc:"Large constant offset subtracted."}}}},division:{label:"Division by Zero (DBL_MIN assert)",description:"Evaluates 1.0 / (denominator). Near-zero denominator triggers explosive floating-point spike to infinity.",before:{type:"operator",value:"/",desc:"Floating-point division operator.",left:{type:"literal",value:"1.0",desc:"Numerator value."},right:{type:"operator",value:"-",isVulnerable:!0,vulnType:"Division by Zero / Near-Zero",vulnDesc:"Unbounded subtraction. If denominator approaches zero (underflow), this division spikes to infinity and triggers CPU exception registers.",left:{type:"variable",value:"denominator",desc:"Input double variable subject to underflow limits."},right:{type:"literal",value:"1.0",desc:"Subtraction offset parameter."}}},after:{type:"operator",value:"/",desc:"Guarded division operator.",left:{type:"literal",value:"1.0",desc:"Numerator constant."},right:{type:"function",value:"assert_min_guard",isOptimized:!0,optDesc:"Checks if denominator is below machine DBL_MIN threshold. Replaces near-zero values with safe bounds.",left:{type:"operator",value:"-",desc:"Guarded subtraction operation.",left:{type:"variable",value:"denominator",desc:"Input variable."},right:{type:"literal",value:"1.0",desc:"Constant offset."}}}}},trig:{label:"Trigonometric Cancellation (Product Rewrite)",description:"Evaluates sin(x) - sin(x + delta). High scale waves trigger phase erasure under subtractive differences.",before:{type:"operator",value:"-",isVulnerable:!0,vulnType:"Trigonometric Phase Erasure",vulnDesc:"Subtraction of sine waves. High values of x compress wave frequencies, making sin(x) and sin(x+delta) identical, erasing phase difference information.",left:{type:"function",value:"sin",desc:"Sine evaluation of first coordinate.",left:{type:"variable",value:"x",desc:"Variable representing wave phase argument."}},right:{type:"function",value:"sin",desc:"Sine evaluation of shifted coordinate.",left:{type:"operator",value:"+",desc:"Shifted phase summation.",left:{type:"variable",value:"x",desc:"Variable phase argument."},right:{type:"variable",value:"delta",desc:"Tiny wave shift delta."}}}},after:{type:"operator",value:"*",isOptimized:!0,optDesc:"Trigonometric sum-to-product rewrite. Replaces cancellation-prone subtraction with stable multiplication.",left:{type:"operator",value:"*",desc:"Constant product scaling factor.",left:{type:"literal",value:"-2.0",desc:"Multiplication scalar from trig identity."},right:{type:"function",value:"sin",desc:"Sine of half the shift delta. Highly stable for tiny values.",left:{type:"operator",value:"/",desc:"Half-delta scale computation.",left:{type:"variable",value:"delta",desc:"Tiny shift input."},right:{type:"literal",value:"2.0",desc:"Division constant."}}}},right:{type:"function",value:"cos",desc:"Cosine of mid-phase coordinate. Safe from subtractive cancellation.",left:{type:"operator",value:"+",desc:"Mid-phase calculation.",left:{type:"variable",value:"x",desc:"Phase parameter."},right:{type:"operator",value:"/",desc:"Half-shift addend.",left:{type:"variable",value:"delta",desc:"Tiny shift input."},right:{type:"literal",value:"2.0",desc:"Division constant."}}}}}},log:{label:"Logarithmic Instability (log1p Rewrite)",description:"Evaluates log(x + 1) - log(x). Subtraction at extreme scale loses precision.",before:{type:"operator",value:"-",isVulnerable:!0,vulnType:"Logarithmic Precision Loss",vulnDesc:"Subtraction of natural log coordinates. Discards fractional mantissa parts for large values of x as log(x+1) converges to log(x) in registers.",left:{type:"function",value:"log",desc:"Logarithmic call for offset value.",left:{type:"operator",value:"+",desc:"Offset addition node.",left:{type:"variable",value:"x",desc:"Double-precision variable subject to scale issues."},right:{type:"literal",value:"1.0",desc:"Constant literal unit."}}},right:{type:"function",value:"log",desc:"Logarithmic call for baseline value.",left:{type:"variable",value:"x",desc:"Double-precision variable."}}},after:{type:"function",value:"log1p",isOptimized:!0,optDesc:"Invokes specialized hardware implementation log1p(x) which evaluates ln(1 + x) without losing subnormal bits.",left:{type:"operator",value:"/",desc:"Reciprocal division. Safe from logarithmic underflow.",left:{type:"literal",value:"1.0",desc:"Constant numerator."},right:{type:"variable",value:"x",desc:"Large variable input."}}}}};function uf({code:e}){const[t,n]=L.useState("unstable_expr"),[r,l]=L.useState(null);L.useEffect(()=>{if(!e)return;const s=e.toLowerCase();s.includes("log1p")||s.includes("log(")&&s.includes("- log")?n("log"):s.includes("sin")&&s.includes("cos")&&s.includes("-")?n("trig"):s.includes("dbl_min")||s.includes("denominator")?n("division"):s.includes("dbl_epsilon")||s.includes("12345678")?n("cancellation"):s.includes("sqrt")&&s.includes("- x")&&n("unstable_expr")},[e]);const i=Mr[t]||Mr.unstable_expr,a=(s,u=!0)=>{if(!s)return null;const c=()=>s.isVulnerable?"node-box vulnerable":s.isOptimized?"node-box optimized":`node-box ${s.type}`,h=s.left||s.right;return o.jsxs("div",{className:"ast-tree-branch",children:[o.jsxs("div",{className:c(),onMouseEnter:g=>{const m=g.currentTarget.getBoundingClientRect(),w=m.left+m.width/2>window.innerWidth/2;let k,j,M;const f=150,d=16;w?(k=m.left-12,j=m.top+m.height/2,M="translate(-100%, -50%)"):(k=m.right+12,j=m.top+m.height/2,M="translate(0, -50%)"),j-f/2<d?j=f/2+d:j+f/2>window.innerHeight-d&&(j=window.innerHeight-f/2-d),l({node:s,isBefore:u,x:k,y:j,transform:M})},onMouseLeave:()=>l(null),children:[o.jsx("span",{className:"node-type-label",children:s.type}),o.jsx("span",{className:"node-value",children:s.value})]}),h&&o.jsxs("div",{className:"ast-tree-children",children:[s.left&&a(s.left,u),s.right&&a(s.right,u)]})]})};return o.jsxs("section",{className:"ast-visualizer-page matte-panel reveal",style:{gridColumn:"2 / -1"},children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"ast-header",children:[o.jsx("h2",{children:"AST Expression Vulnerability Visualizer"}),o.jsx("p",{children:"Analyzing compiler Abstract Syntax Trees to identify and rewrite floating-point vulnerabilities"})]}),o.jsxs("div",{className:"ast-controls",children:[o.jsxs("div",{children:[o.jsx("span",{className:"select-label",children:"Select AST Pattern:"}),o.jsx("select",{value:t,onChange:s=>n(s.target.value),className:"dropdown-ast",children:Object.keys(Mr).map(s=>o.jsx("option",{value:s,children:Mr[s].label},s))})]}),o.jsxs("div",{className:"ast-desc-box",children:[o.jsx("strong",{children:"Pattern Context:"})," ",i.description]})]}),o.jsxs("div",{className:"ast-comparison-grid",children:[o.jsxs("div",{className:"ast-pane",children:[o.jsx("div",{className:"ast-pane-title red",children:"❌ Original C AST (Baseline Unstable)"}),o.jsx("div",{className:"ast-tree-canvas",children:a(i.before,!0)})]}),o.jsxs("div",{className:"ast-pane",children:[o.jsx("div",{className:"ast-pane-title green",children:"✅ Rewritten C AST (Optimized Stable)"}),o.jsx("div",{className:"ast-tree-canvas",children:a(i.after,!1)})]})]}),o.jsxs("div",{className:"ast-legend-panel",children:[o.jsx("span",{style:{color:"var(--muted)",fontWeight:"600",marginRight:"8px"},children:"AST Legend:"}),o.jsxs("div",{className:"ast-legend-item",children:[o.jsx("div",{className:"legend-indicator vulnerable"}),o.jsx("span",{style:{color:"var(--red)"},children:"Vulnerable Node"})]}),o.jsxs("div",{className:"ast-legend-item",children:[o.jsx("div",{className:"legend-indicator optimized"}),o.jsx("span",{style:{color:"var(--green)"},children:"Optimized Node"})]}),o.jsxs("div",{className:"ast-legend-item",children:[o.jsx("div",{className:"legend-indicator function"}),o.jsx("span",{style:{color:"#fb7185"},children:"Function Call"})]}),o.jsxs("div",{className:"ast-legend-item",children:[o.jsx("div",{className:"legend-indicator variable"}),o.jsx("span",{style:{color:"#c084fc"},children:"Variable Term"})]}),o.jsxs("div",{className:"ast-legend-item",children:[o.jsx("div",{className:"legend-indicator literal"}),o.jsx("span",{style:{color:"#60a5fa"},children:"Literal Value"})]})]}),r&&o.jsxs("div",{className:"ast-tooltip",style:{left:`${r.x}px`,top:`${r.y}px`,transform:r.transform},children:[o.jsx("div",{className:"ast-tooltip-title",style:{color:r.node.isVulnerable?"var(--red)":r.node.isOptimized?"var(--green)":"var(--text)"},children:r.node.isVulnerable?`⚠ ${r.node.vulnType}`:r.node.isOptimized?"✓ Precision Rewrite":`AST Node: ${r.node.type.toUpperCase()}`}),o.jsx("p",{className:"ast-tooltip-desc",children:r.node.isVulnerable?r.node.vulnDesc:r.node.isOptimized?r.node.optDesc:r.node.desc||`Value: "${r.node.value}". Represents a standard C compiler structural element.`})]})]})}function cf(e){e=e.replace(/\s+/g,"");let t=0;function n(){return e[t]||null}function r(u){return e[t]===u?(t++,!0):!1}function l(){const u=n();if(!u)return null;if(u==="("){r("(");const c=s();return r(")"),c}if(/[0-9.]/.test(u)){let c="";for(;n()&&/[0-9.eE-]/.test(n())&&!((n()==="-"||n()==="+")&&!/[eE]/.test(c[c.length-1]));)c+=e[t++];return{type:"literal",value:c,expr:c,desc:`Constant literal numeric value: ${c}`}}if(/[a-zA-Z]/.test(u)){let c="";for(;n()&&/[a-zA-Z0-9_]/.test(n());)c+=e[t++];if(n()==="("){r("(");const h=s();return r(")"),{type:"function",value:c,left:h,expr:`${c}(${h?h.expr:""})`,desc:`Standard math library function call: ${c}()`}}return{type:"variable",value:c,expr:c,desc:`Double-precision input variable parameter: "${c}"`}}return null}function i(){let u=l();for(;n()==="^";){r("^");const c=l();u={type:"operator",value:"^",left:u,right:c,expr:`${u?u.expr:""}^${c?c.expr:""}`,desc:"Exponentiation operator. Handled via CPU library power registers."}}return u}function a(){let u=i();for(;n()==="*"||n()==="/";){const c=e[t++],h=i();u={type:"operator",value:c,left:u,right:h,expr:`${u?u.expr:""}${c}${h?h.expr:""}`,desc:c==="*"?"Multiplication node. Multiplies register operands.":"Division node. Performs floating-point register division."}}return u}function s(){let u=a();for(;n()==="+"||n()==="-";){const c=e[t++],h=a();u={type:"operator",value:c,left:u,right:h,expr:`${u?u.expr:""}${c}${h?h.expr:""}`,desc:c==="+"?"Addition node. Adds register inputs.":"Subtraction node. Prone to catastrophic cancellation."}}return u}return s()}function Zi(e){if(e){if(e.type==="operator"){if(e.value==="-")e.isVulnerable=!0,e.vulnType="Catastrophic Cancellation Risk",e.vulnDesc=`Subtractive cancellation node in expression "${e.expr}". Subtracting near-identical float values destroys floating-point mantissa resolution.`;else if(e.value==="/"){const t=e.right;t&&(t.value==="-"||t.type==="variable")&&(t.isVulnerable=!0,t.vulnType="Division Near-Zero Risk",t.vulnDesc=`Unbounded division node denominator: "${t.expr}". If subtraction cancels, values explode towards infinity.`)}}Zi(e.left),Zi(e.right)}}function df(){const[e,t]=L.useState("sqrt(x * x + 1.0) - x"),[n,r]=L.useState(null),[l,i]=L.useState([]),[a,s]=L.useState(""),[u,c]=L.useState(""),[h,g]=L.useState(!1),[m,w]=L.useState(null),k=[{label:"Loss of Significance",expr:"sqrt(x * x + 1.0) - x"},{label:"Logarithmic Instability",expr:"log(x + 1.0) - log(x)"},{label:"Wave Phase Erasure",expr:"sin(x) - sin(x + 1e-8)"},{label:"Division Near-Zero",expr:"1.0 / (x - 1.0)"},{label:"Taylor Series Cancellation",expr:"(x - sin(x)) / (x * x * x)"}],j=async(y=e)=>{g(!0),c(""),i([]);try{const v=cf(y);if(v)Zi(v),r(v);else throw new Error("Unable to parse expression structure.")}catch(v){c(`Syntax Parsing Error: ${v.message}`),g(!1);return}try{const v=await fetch("/api/sandbox",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({expression:y})}),P=await v.json();if(!v.ok)throw new Error(P.error||"Execution failed.");i(P.plots||[]),s(P.cCode||"")}catch(v){c(v.message)}finally{g(!1)}};L.useEffect(()=>{j()},[]);const M=y=>{if(!y)return null;const v=()=>y.isVulnerable?"node-box vulnerable":`node-box ${y.type}`,P=y.left||y.right;return o.jsxs("div",{className:"ast-tree-branch",children:[o.jsxs("div",{className:v(),onMouseEnter:_=>{const D=_.currentTarget.getBoundingClientRect(),V=D.left+D.width/2>window.innerWidth/2;let Y=D.left+D.width/2,B=D.top+D.height/2;const I=160,J=16;V?(Y=D.left-12,We="translate(-100%, -50%)"):(Y=D.right+12,We="translate(0, -50%)"),B-I/2<J?B=I/2+J:B+I/2>window.innerHeight-J&&(B=window.innerHeight-I/2-J);var We=V?"translate(-100%, -50%)":"translate(0, -50%)";w({node:y,x:Y,y:B,transform:We})},onMouseLeave:()=>w(null),children:[o.jsx("span",{className:"node-type-label",children:y.type}),o.jsx("span",{className:"node-value",children:y.value})]}),P&&o.jsxs("div",{className:"ast-tree-children",children:[y.left&&M(y.left),y.right&&M(y.right)]})]})},f=1e3,d=400,p=65,x=y=>{const D=(Math.log10(y)- -8)/16;return p+D*(f-p*2)},N=y=>{const D=((y<=1e-16?-16:Math.log10(y))- -16)/16;return d-p-D*(d-p*2)},b=l.length>0?l.map((y,v)=>`${v===0?"M":"L"} ${x(y.input)} ${N(y.relativeError)}`).join(" "):"";return o.jsxs("section",{className:"playground-page matte-panel reveal",style:{gridColumn:"2 / -1"},children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"pg-header",children:[o.jsx("h2",{children:"Numerical Optimization & Expression Sandbox"}),o.jsx("p",{children:"Compile custom mathematical expressions and evaluate float precision boundaries in real-time"})]}),o.jsxs("div",{className:"pg-control-box",children:[o.jsxs("div",{className:"pg-presets",children:[o.jsx("span",{style:{fontSize:"0.85rem",color:"var(--muted)",fontWeight:"600",marginRight:"8px"},children:"Presets:"}),k.map(y=>o.jsx("button",{onClick:()=>{t(y.expr),j(y.expr)},className:"preset-badge",children:y.label},y.label))]}),o.jsxs("div",{className:"pg-input-row",children:[o.jsx("input",{type:"text",value:e,onChange:y=>t(y.target.value),placeholder:"Type any math expression in terms of x... e.g., (x - sin(x)) / (x * x * x)",className:"pg-input",onKeyDown:y=>{y.key==="Enter"&&j()}}),o.jsx("button",{onClick:()=>j(),disabled:h,className:"btn-run",children:h?"Compiling...":"Compile & Run"})]})]}),u&&o.jsxs("div",{className:"error-console",children:[o.jsx("strong",{children:"💻 Terminal Compilation/Execution Log:"}),o.jsx("div",{style:{marginTop:"8px",color:"#fca5a5"},children:u})]}),o.jsxs("div",{className:"pg-visualizer-grid",children:[o.jsxs("div",{className:"pg-panel",children:[o.jsxs("div",{className:"pg-panel-title",children:[o.jsx("span",{children:"🌲 Abstract Syntax Tree (Dynamic AST)"}),o.jsx("span",{style:{fontSize:"0.8rem",color:"var(--muted)"},children:"* Hover nodes to inspect syntax"})]}),o.jsx("div",{className:"pg-ast-canvas",children:n?M(n):o.jsx("div",{style:{margin:"auto",color:"var(--muted)"},children:"Enter an expression to parse AST"})})]}),o.jsxs("div",{className:"pg-panel",children:[o.jsxs("div",{className:"pg-panel-title",children:[o.jsx("span",{children:"📈 Precision Deviation Chart"}),o.jsx("span",{style:{fontSize:"0.85rem",color:"var(--red)"},children:"C Double vs 60-digit mpmath"})]}),l.length>0?o.jsxs("svg",{viewBox:`0 0 ${f} ${d}`,className:"chart-svg",children:[[-16,-12,-8,-4,0].map(y=>{const v=N(Math.pow(10,y));return o.jsxs("g",{children:[o.jsx("line",{x1:p,x2:f-p,y1:v,y2:v,className:"grid-line"}),o.jsxs("text",{x:p-10,y:v+4,textAnchor:"end",className:"axis-text",children:["10^",y]})]},y)}),[1e-6,1e-4,.01,1,100,1e4,1e6].map((y,v)=>{const P=x(y);return o.jsxs("g",{children:[o.jsx("line",{x1:P,x2:P,y1:p,y2:d-p,className:"grid-line"}),o.jsxs("text",{x:P,y:d-p+16,textAnchor:"middle",className:"axis-text",children:["10^",Math.round(Math.log10(y))]})]},v)}),o.jsx("line",{x1:p,x2:f-p,y1:d-p,y2:d-p,className:"axis-line"}),o.jsx("line",{x1:p,x2:p,y1:p,y2:d-p,className:"axis-line"}),b&&o.jsx("path",{d:b,className:"path-error"}),l.map((y,v)=>o.jsx("circle",{cx:x(y.input),cy:N(y.relativeError),r:"5",className:"chart-dot"},v)),o.jsx("text",{x:f/2,y:d-10,textAnchor:"middle",className:"axis-text",style:{fill:"var(--text)",fontWeight:"600"},children:"Input Magnitude (x)"})]}):o.jsx("div",{style:{margin:"auto",color:"var(--muted)"},children:"Run compilation to plot accuracy"})]})]}),a&&o.jsxs("div",{className:"c-source-panel",children:[o.jsx("div",{className:"c-source-title",children:o.jsx("span",{children:"💻 GCC Sandbox Compiler Generated C Source"})}),o.jsx("pre",{className:"c-code-block",children:a})]}),m&&o.jsxs("div",{className:"ast-tooltip",style:{left:`${m.x}px`,top:`${m.y}px`,transform:m.transform},children:[o.jsx("div",{className:"ast-tooltip-title",style:{color:m.node.isVulnerable?"var(--red)":"var(--text)"},children:m.node.isVulnerable?`⚠ ${m.node.vulnType}`:`AST Node: ${m.node.type.toUpperCase()}`}),o.jsxs("div",{style:{fontSize:"0.78rem",color:"var(--blue)",fontFamily:"monospace",margin:"2px 0 6px",fontWeight:"600"},children:["Expression: ",m.node.expr]}),o.jsx("p",{className:"ast-tooltip-desc",children:m.node.isVulnerable?m.node.vulnDesc:m.node.desc})]})]})}const Ae=[{name:"Catastrophic Cancellation",description:"Subtraction of nearly equal variables: (x + y) - x",original:"(x + y) - x",remediated:"y",xMin:1e5,xMax:1e12,xScale:"log",yMin:1e-15,yMax:.1,yScale:"log",xLabel:"Base Offset (x)",yLabel:"Delta Addend (y)"},{name:"Loss of Significance",description:"Square root subtraction: sqrt(x * x + y) - x",original:"sqrt(x * x + y) - x",remediated:"y / (sqrt(x * x + y) + x)",xMin:100,xMax:1e8,xScale:"log",yMin:.001,yMax:1e3,yScale:"log",xLabel:"Variable (x)",yLabel:"Constant Addend (y)"},{name:"Trigonometric Phase Erasure",description:"Sine wave difference: sin(x) - sin(x + y)",original:"sin(x) - sin(x + y)",remediated:"-2.0 * sin(y / 2.0) * cos(x + y / 2.0)",xMin:10,xMax:1e8,xScale:"log",yMin:1e-12,yMax:.01,yScale:"log",xLabel:"Angle (x)",yLabel:"Phase Delta (y)"},{name:"Logarithmic Instability",description:"Log subtraction: log(x + y) - log(x)",original:"log(x + y) - log(x)",remediated:"log1p(y / x)",xMin:10,xMax:1e9,xScale:"log",yMin:1e-15,yMax:.1,yScale:"log",xLabel:"Scale (x)",yLabel:"Offset (y)"}];function ds({name:e}){const t={spark:o.jsx("path",{d:"M12 2l1.2 4.2L17 7.4l-3.8 1.2L12 13l-1.2-4.4L7 7.4l3.8-1.2L12 2z"}),gear:o.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})};return o.jsx("svg",{viewBox:"0 0 24 24",className:"icon","aria-hidden":"true",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{width:"20px",height:"20px"},children:t[e]})}function pf(){const[e,t]=L.useState(0),[n,r]=L.useState(Ae[0].original),[l,i]=L.useState(!1),[a,s]=L.useState(Ae[0].xMin),[u,c]=L.useState(Ae[0].xMax),[h,g]=L.useState(Ae[0].xScale),[m,w]=L.useState(15),[k,j]=L.useState(Ae[0].yMin),[M,f]=L.useState(Ae[0].yMax),[d,p]=L.useState(Ae[0].yScale),[x,N]=L.useState(15),[b,y]=L.useState(!1),[v,P]=L.useState([]),[_,D]=L.useState(""),[V,Y]=L.useState(null),B=L.useRef(null),I=E=>{t(E);const A=Ae[E];r(l?A.remediated:A.original),s(A.xMin),c(A.xMax),g(A.xScale),j(A.yMin),f(A.yMax),p(A.yScale)},J=E=>{i(E);const A=Ae[e];A&&r(E?A.remediated:A.original)},We=async()=>{y(!0),D("");try{const E=await fetch("/api/heatmap",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({expression:n,xMin:a,xMax:u,xScale:h,xSteps:m,yMin:k,yMax:M,yScale:d,ySteps:x})}),A=await E.json();if(!E.ok)throw new Error(A.error||"Failed to generate heatmap.");P(A.points||[])}catch(E){D(E.message)}finally{y(!1)}};L.useEffect(()=>{We()},[n,a,u,h,m,k,M,d,x]),L.useEffect(()=>{if(!B.current||!v.length)return;const E=B.current,A=E.getContext("2d"),ne=window.devicePixelRatio||1,Qe=E.getBoundingClientRect();E.width=Qe.width*ne,E.height=Qe.height*ne,A.scale(ne,ne);const Pe=Qe.width,_e=Qe.height;A.clearRect(0,0,Pe,_e);const Mt=Pe/m,qe=_e/x,Tt=et=>et===null||isNaN(et)?"#7c3aed":et<1e-12?"#10b981":et<1e-5?"#f59e0b":et<.1?"#f97316":"#ef4444";v.forEach((et,bn)=>{const bc=Math.floor(bn/x),Cc=bn%x,Ec=Tt(et.relativeError),Yo=bc*Mt,Ko=_e-(Cc+1)*qe;A.fillStyle=Ec,A.fillRect(Yo,Ko,Mt-1,qe-1),A.strokeStyle="rgba(255, 255, 255, 0.04)",A.strokeRect(Yo,Ko,Mt-1,qe-1)})},[v,m,x]);const C=E=>{if(!B.current||!v.length)return;const ne=B.current.getBoundingClientRect(),Qe=E.clientX-ne.left,Pe=E.clientY-ne.top,_e=ne.width/m,Mt=ne.height/x,qe=Math.floor(Qe/_e),Tt=Math.floor((ne.height-Pe)/Mt);if(qe>=0&&qe<m&&Tt>=0&&Tt<x){const et=qe*x+Tt,bn=v[et];bn&&Y({...bn,cellX:qe*_e+_e/2,cellY:ne.height-(Tt*Mt+Mt/2),i:qe,j:Tt})}else Y(null)},T=()=>{Y(null)},R=E=>E===null||isNaN(E)?{label:"NaN / Exception",color:"purple"}:E<1e-12?{label:"Stable (Full Precision)",color:"green"}:E<1e-5?{label:"Risky (Loss of Precision)",color:"amber"}:E<.1?{label:"High Precision Loss",color:"orange"}:{label:"Catastrophic Cancellation",color:"red"},U=Ae[e];return o.jsxs("div",{className:"heatmap-layout",style:{gridColumn:"2 / -1",display:"flex",flexDirection:"column",gap:"24px",padding:"20px"},children:[o.jsx("style",{children:`
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
      `}),o.jsx("section",{className:"hero-panel matte-panel",children:o.jsxs("div",{className:"hero-copy",children:[o.jsx("div",{className:"eyebrow",children:"Visual sensitivity mapping"}),o.jsx("h1",{children:"Stability Heatmap"}),o.jsx("p",{children:"Analyse the sensitivity of mathematical code by rendering a 2D error propagation canvas. Compare original expressions with remediated safe alternatives to see stability limits."})]})}),o.jsxs("section",{className:"matte-panel",style:{padding:"20px"},children:[o.jsx("h3",{style:{margin:"0 0 12px 0",fontSize:"1.05rem",fontWeight:"600"},children:"Stability Category Presets"}),o.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"12px"},children:Ae.map((E,A)=>o.jsxs("button",{className:`preset-pill ${e===A?"active":""}`,onClick:()=>I(A),children:[o.jsx("div",{style:{fontSize:"0.85rem",fontWeight:"600",color:e===A?"var(--blue)":"var(--text)"},children:E.name}),o.jsx("div",{style:{fontSize:"0.75rem",color:"var(--muted)",marginTop:"4px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:E.description})]},A))})]}),o.jsxs("div",{className:"heatmap-container",children:[o.jsx("div",{className:"heatmap-main",children:o.jsxs("div",{className:"matte-panel",style:{padding:"20px",display:"flex",flexDirection:"column",gap:"16px"},children:[o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[o.jsx("h3",{style:{margin:0,fontSize:"1.1rem"},children:"Interactive Canvas"}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[o.jsx("span",{style:{fontSize:"0.85rem",fontWeight:"500",color:l?"var(--blue)":"var(--text)"},children:l?"Remediated Formula Active":"Original Unstable Code"}),o.jsxs("label",{className:"toggle-switch",children:[o.jsx("input",{type:"checkbox",checked:l,onChange:E=>J(E.target.checked)}),o.jsx("span",{className:"slider"})]})]})]}),o.jsxs("div",{className:"canvas-wrapper",children:[o.jsx("div",{className:"axis-label-x",children:U?U.xLabel:"X Axis"}),o.jsx("div",{className:"axis-label-y",children:U?U.yLabel:"Y Axis"}),o.jsx("div",{className:"scale-tick-x-min",children:a.toExponential(1)}),o.jsx("div",{className:"scale-tick-x-max",children:u.toExponential(1)}),o.jsx("div",{className:"scale-tick-y-min",children:k.toExponential(1)}),o.jsx("div",{className:"scale-tick-y-max",children:M.toExponential(1)}),o.jsx("canvas",{ref:B,className:"canvas-element",onMouseMove:C,onMouseLeave:T})]}),o.jsxs("div",{className:"legend-row",children:[o.jsxs("div",{className:"legend-item",children:[o.jsx("span",{className:"legend-color",style:{background:"#10b981"}}),o.jsx("span",{children:"Stable (< 10⁻¹²)"})]}),o.jsxs("div",{className:"legend-item",children:[o.jsx("span",{className:"legend-color",style:{background:"#f59e0b"}}),o.jsx("span",{children:"Risky (< 10⁻⁵)"})]}),o.jsxs("div",{className:"legend-item",children:[o.jsx("span",{className:"legend-color",style:{background:"#f97316"}}),o.jsx("span",{children:"High Loss (< 0.1)"})]}),o.jsxs("div",{className:"legend-item",children:[o.jsx("span",{className:"legend-color",style:{background:"#ef4444"}}),o.jsx("span",{children:"Cancellation (≥ 0.1)"})]}),o.jsxs("div",{className:"legend-item",children:[o.jsx("span",{className:"legend-color",style:{background:"#7c3aed"}}),o.jsx("span",{children:"NaN / Infinity"})]})]})]})}),o.jsxs("div",{className:"heatmap-sidebar",children:[o.jsxs("div",{className:"matte-panel",style:{padding:"20px",display:"flex",flexDirection:"column",gap:"14px"},children:[o.jsxs("h3",{style:{margin:0,fontSize:"1rem",display:"flex",alignItems:"center",gap:"8px"},children:[o.jsx(ds,{name:"gear"})," Configuration"]}),o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px"},children:[o.jsx("label",{style:{fontSize:"0.8rem",color:"var(--muted)"},children:"Equation Formula"}),o.jsx("input",{type:"text",className:"code-editor",style:{width:"100%",padding:"8px",borderRadius:"6px",fontFamily:"Courier, monospace",fontSize:"0.85rem",background:"rgba(0,0,0,0.2)",border:"1px solid var(--border)"},value:n,onChange:E=>r(E.target.value)})]}),o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px"},children:[o.jsxs("div",{children:[o.jsx("label",{style:{fontSize:"0.8rem",color:"var(--muted)"},children:"X Min"}),o.jsx("input",{type:"number",style:{width:"100%",padding:"6px",borderRadius:"6px",background:"rgba(0,0,0,0.2)",border:"1px solid var(--border)",color:"var(--text)"},value:a,onChange:E=>s(parseFloat(E.target.value))})]}),o.jsxs("div",{children:[o.jsx("label",{style:{fontSize:"0.8rem",color:"var(--muted)"},children:"X Max"}),o.jsx("input",{type:"number",style:{width:"100%",padding:"6px",borderRadius:"6px",background:"rgba(0,0,0,0.2)",border:"1px solid var(--border)",color:"var(--text)"},value:u,onChange:E=>c(parseFloat(E.target.value))})]})]}),o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px"},children:[o.jsxs("div",{children:[o.jsx("label",{style:{fontSize:"0.8rem",color:"var(--muted)"},children:"Y Min"}),o.jsx("input",{type:"number",style:{width:"100%",padding:"6px",borderRadius:"6px",background:"rgba(0,0,0,0.2)",border:"1px solid var(--border)",color:"var(--text)"},value:k,onChange:E=>j(parseFloat(E.target.value))})]}),o.jsxs("div",{children:[o.jsx("label",{style:{fontSize:"0.8rem",color:"var(--muted)"},children:"Y Max"}),o.jsx("input",{type:"number",style:{width:"100%",padding:"6px",borderRadius:"6px",background:"rgba(0,0,0,0.2)",border:"1px solid var(--border)",color:"var(--text)"},value:M,onChange:E=>f(parseFloat(E.target.value))})]})]}),o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px"},children:[o.jsxs("div",{children:[o.jsx("label",{style:{fontSize:"0.8rem",color:"var(--muted)"},children:"X Scale"}),o.jsxs("select",{style:{width:"100%",padding:"6px",borderRadius:"6px",background:"rgba(0,0,0,0.2)",border:"1px solid var(--border)",color:"var(--text)"},value:h,onChange:E=>g(E.target.value),children:[o.jsx("option",{value:"linear",children:"Linear"}),o.jsx("option",{value:"log",children:"Logarithmic"})]})]}),o.jsxs("div",{children:[o.jsx("label",{style:{fontSize:"0.8rem",color:"var(--muted)"},children:"Y Scale"}),o.jsxs("select",{style:{width:"100%",padding:"6px",borderRadius:"6px",background:"rgba(0,0,0,0.2)",border:"1px solid var(--border)",color:"var(--text)"},value:d,onChange:E=>p(E.target.value),children:[o.jsx("option",{value:"linear",children:"Linear"}),o.jsx("option",{value:"log",children:"Logarithmic"})]})]})]}),o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px"},children:[o.jsxs("div",{children:[o.jsx("label",{style:{fontSize:"0.8rem",color:"var(--muted)"},children:"Grid Columns"}),o.jsx("input",{type:"number",min:"5",max:"40",style:{width:"100%",padding:"6px",borderRadius:"6px",background:"rgba(0,0,0,0.2)",border:"1px solid var(--border)",color:"var(--text)"},value:m,onChange:E=>w(parseInt(E.target.value)||15)})]}),o.jsxs("div",{children:[o.jsx("label",{style:{fontSize:"0.8rem",color:"var(--muted)"},children:"Grid Rows"}),o.jsx("input",{type:"number",min:"5",max:"40",style:{width:"100%",padding:"6px",borderRadius:"6px",background:"rgba(0,0,0,0.2)",border:"1px solid var(--border)",color:"var(--text)"},value:x,onChange:E=>N(parseInt(E.target.value)||15)})]})]}),o.jsx("button",{onClick:We,disabled:b,style:{padding:"10px",marginTop:"8px",borderRadius:"6px",background:"var(--blue-deep)",border:"none",color:"#fff",fontWeight:"600",cursor:"pointer",transition:"0.2s"},children:b?"Re-evaluating Grid...":"Refresh Heatmap"})]}),o.jsxs("div",{className:"matte-panel",style:{padding:"20px",flex:1,minHeight:"260px",display:"flex",flexDirection:"column"},children:[o.jsxs("h3",{style:{margin:"0 0 12px 0",fontSize:"1rem",display:"flex",alignItems:"center",gap:"8px"},children:[o.jsx(ds,{name:"spark"})," Pixel Inspector"]}),V?o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[o.jsx("div",{children:o.jsx("span",{className:`badge-rating ${R(V.relativeError).color}`,children:R(V.relativeError).label})}),o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"80px 1fr",gap:"6px 12px",fontSize:"0.8rem"},children:[o.jsx("span",{style:{color:"var(--muted)"},children:"Cell Index:"}),o.jsxs("span",{children:["(",V.i,", ",V.j,")"]}),o.jsx("span",{style:{color:"var(--muted)"},children:"Value (x):"}),o.jsx("span",{style:{fontFamily:"monospace"},children:V.x.toExponential(6)}),o.jsx("span",{style:{color:"var(--muted)"},children:"Value (y):"}),o.jsx("span",{style:{fontFamily:"monospace"},children:V.y.toExponential(6)}),o.jsx("span",{style:{color:"var(--muted)"},children:"C double:"}),o.jsx("span",{style:{fontFamily:"monospace"},children:V.cVal.toExponential(6)}),o.jsx("span",{style:{color:"var(--muted)"},children:"mpmath ref:"}),o.jsx("span",{style:{fontFamily:"monospace"},children:V.mpVal.toExponential(6)}),o.jsx("span",{style:{color:"var(--muted)"},children:"Rel. Error:"}),o.jsx("span",{style:{fontFamily:"monospace",color:V.relativeError>1e-5?"var(--red)":"inherit"},children:V.relativeError.toExponential(6)})]})]}):o.jsx("div",{style:{display:"flex",flex:1,alignItems:"center",justifyContent:"center",color:"var(--muted)",fontSize:"0.85rem",textAlign:"center"},children:"Hover over the heatmap canvas to inspect detailed floating point precision values at specific input coordinates."})]})]})]})]})}const ff=`#include <stdio.h>
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
}`;function mt({name:e}){const t={analyzer:o.jsx("path",{d:"M6 18l4-4 3 3 6-8"}),code:o.jsx("path",{d:"M10 16l-4-4 4-4M14 8l4 4-4 4M12 6l-2 12"}),spark:o.jsx("path",{d:"M12 2l1.2 4.2L17 7.4l-3.8 1.2L12 13l-1.2-4.4L7 7.4l3.8-1.2L12 2z"}),shield:o.jsx("path",{d:"M12 3l7 3v5c0 4.8-3 8.6-7 10-4-1.4-7-5.2-7-10V6l7-3z"}),trend:o.jsx("path",{d:"M4 18h16M6 14l4-4 3 3 5-6"}),wrench:o.jsx("path",{d:"M14 7a4 4 0 0 0-5.8 4.4L3 17l2 2 5.6-5.2A4 4 0 0 0 18 8l-2.1 2.1L14 7z"}),report:o.jsx("path",{d:"M8 3h8l4 4v14H8zM9 3v5h5"}),circle:o.jsx("path",{d:"M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10z"}),pulse:o.jsx("path",{d:"M3 12h4l2-5 3 10 2-5h7"})};return o.jsx("svg",{viewBox:"0 0 24 24",className:"icon","aria-hidden":"true",children:t[e]||t.circle})}function Tr({title:e,value:t,hint:n,icon:r}){return o.jsxs("div",{className:"stat-card",children:[o.jsxs("div",{className:"stat-head",children:[o.jsx(mt,{name:r}),o.jsx("span",{children:e})]}),o.jsx("div",{className:"stat-value",children:t}),o.jsx("div",{className:"stat-hint",children:n})]})}function Rr({children:e,onClick:t,secondary:n=!1,busy:r=!1}){return o.jsxs("button",{className:`action-button ${n?"secondary":""}`,onClick:t,disabled:r,children:[o.jsx("span",{children:e}),o.jsx("span",{className:`button-glow ${r?"busy":""}`})]})}function mf({icon:e,title:t,subtitle:n}){return o.jsxs("div",{className:"section-title",children:[o.jsxs("div",{className:"section-title-row",children:[o.jsx(mt,{name:e}),o.jsx("h2",{children:t})]}),n?o.jsx("p",{children:n}):null]})}function hf({status:e}){const t=e.includes("Unstable")?"danger":e.includes("Risky")?"warn":"stable";return o.jsx("span",{className:`badge ${t}`,children:e})}function gf(){var B;const[e,t]=L.useState("analyzer"),[n,r]=L.useState(ff),[l,i]=L.useState("Idle"),[a,s]=L.useState(""),[u,c]=L.useState(!1),[h,g]=L.useState(null),[m,w]=L.useState(""),[k,j]=L.useState("relative"),[M,f]=L.useState(null),[d,p]=L.useState(""),[x,N]=L.useState(!1),b=L.useMemo(()=>Object.keys((h==null?void 0:h.plots)||{}),[h]),y=async()=>{s(""),i("Analyzing"),c(!0);try{const I=await fetch("/api/analyze",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:n})}),J=await I.json();if(!I.ok)throw new Error(J.error||"Analysis failed");g(J),w(Object.keys(J.plots||{})[0]||""),i(J.overallStatus||"Done")}catch(I){s(I.message),i("Error")}finally{c(!1)}},v=async()=>{s(""),i("Auto-fixing"),c(!0);try{p(n);const I=await fetch("/api/autofix",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:n})}),J=await I.json();if(!I.ok)throw new Error(J.error||"Auto-fix failed");f(J),i("Auto-fix ready")}catch(I){s(I.message),i("Error")}finally{c(!1)}};(B=h==null?void 0:h.plots)==null||B[m];const P=(h==null?void 0:h.runtimeSummary)||[],_=(h==null?void 0:h.staticIssues)||[],D=(h==null?void 0:h.traces)||[],V=I=>{t(I)},Y=()=>o.jsxs(o.Fragment,{children:[o.jsxs("section",{className:"hero-panel matte-panel reveal",style:{gridColumn:"2 / -1"},children:[o.jsxs("div",{className:"hero-copy",children:[o.jsx("div",{className:"eyebrow",children:"Analysis workspace"}),o.jsx("h1",{children:"Numerical diagnostics"}),o.jsx("p",{children:"Paste code, run analysis, inspect results, and apply fixes."})]}),o.jsxs("div",{className:"hero-actions",children:[o.jsx(Rr,{onClick:y,busy:u,children:"Run analysis"}),o.jsx(Rr,{onClick:v,secondary:!0,busy:u,children:"Auto-fix"})]})]}),o.jsxs("section",{className:"stats-grid reveal",style:{gridColumn:"2 / -1"},children:[o.jsx(Tr,{title:"Static findings",value:_.length,hint:"Detected patterns",icon:"analyzer"}),o.jsx(Tr,{title:"Runtime rows",value:P.length,hint:"Parsed result groups",icon:"trend"}),o.jsx(Tr,{title:"Traces",value:D.length,hint:"Execution variables",icon:"pulse"}),o.jsx(Tr,{title:"Plots",value:b.length,hint:"Error growth views",icon:"report"})]}),o.jsxs("section",{className:"editor-panel matte-panel reveal",style:{gridColumn:"2 / -1"},children:[o.jsx(mf,{icon:"code",title:"Source code"}),o.jsx("div",{className:"editor-frame",style:{width:"100%"},children:o.jsx("textarea",{className:"code-editor",value:n,onChange:I=>{r(I.target.value),p(""),f(null)},spellCheck:"false",style:{width:"100%",minHeight:"300px"}})}),o.jsxs("div",{className:"mini-actions",style:{display:"flex",gap:"12px",marginTop:"16px"},children:[o.jsx(Rr,{onClick:y,busy:u,children:"Analyze code"}),o.jsx(Rr,{onClick:v,secondary:!0,busy:u,children:"Apply auto-fix"})]}),a?o.jsx("div",{className:"error-banner",style:{marginTop:"12px"},children:a}):null]}),M?o.jsx("section",{className:"compare-panel reveal",style:{gridColumn:"2 / -1",marginTop:"8px"},children:o.jsxs("div",{className:"compare-grid",children:[o.jsxs("div",{className:"matte-panel compare-card",children:[o.jsxs("div",{className:"report-card-head",children:[o.jsx(mt,{name:"code"}),o.jsx("span",{children:"Source code"})]}),o.jsx("textarea",{className:"code-editor compare-textarea",value:d||n,readOnly:!0,spellCheck:"false"})]}),o.jsxs("div",{className:"matte-panel compare-card",children:[o.jsxs("div",{className:"report-card-head",children:[o.jsx(mt,{name:"spark"}),o.jsx("span",{children:"Auto-fixed code"})]}),o.jsx("textarea",{className:"code-editor compare-textarea",value:M.fixedCode||n,readOnly:!0,spellCheck:"false"})]})]})}):null,M!=null&&M.explanation?o.jsxs("section",{className:"reveal",style:{gridColumn:"2 / -1",marginTop:"16px"},children:[o.jsx("div",{style:{marginBottom:"12px"},children:o.jsx("h3",{style:{fontSize:"1.2rem",fontWeight:"600",display:"flex",alignItems:"center",gap:"8px",margin:0},children:"Pointwise Vulnerability & Patch Report"})}),o.jsxs("div",{className:"matte-panel report-card",style:{margin:0,padding:"20px",borderLeft:"4px solid #3b82f6",animation:"slideUp 0.4s ease-out forwards"},children:[o.jsxs("div",{className:"report-card-head",style:{marginBottom:"8px"},children:[o.jsx(mt,{name:"spark"}),o.jsx("span",{style:{color:"#3b82f6",fontWeight:"600"},children:"AI Fix Insights"})]}),o.jsx("div",{className:"summary-reason",style:{opacity:.95,lineHeight:"1.6",whiteSpace:"pre-wrap",fontSize:"0.95rem"},children:M.explanation})]})]}):null,o.jsx("section",{className:"reveal",style:{gridColumn:"2 / -1",marginTop:"8px"},children:o.jsxs("div",{className:"findings-grid",style:{display:"grid",gridTemplateColumns:"repeat(3, minmax(0, 1fr))",gap:"20px"},children:[_.map((I,J)=>o.jsxs("div",{className:"matte-panel report-card",style:{height:"100%",margin:0},children:[o.jsxs("div",{className:"report-card-head",children:[o.jsx(mt,{name:"analyzer"}),o.jsx("span",{children:"Static fault"})]}),o.jsx("div",{className:"summary-title",children:"Pattern detected"}),o.jsx("div",{className:"summary-reason",children:I})]},`static-${J}`)),P.map((I,J)=>o.jsxs("div",{className:"matte-panel report-card",style:{height:"100%",margin:0},children:[o.jsxs("div",{className:"report-card-head",children:[o.jsx(mt,{name:"trend"}),o.jsx("span",{children:"Runtime fault"})]}),o.jsx("div",{className:"summary-title",children:I.function}),o.jsx("div",{className:"summary-reason",children:I.reason}),o.jsxs("div",{className:"summary-meta",style:{alignItems:"flex-start",marginTop:"12px"},children:[o.jsx(hf,{status:I.status}),o.jsx("span",{className:"summary-error",children:I.error})]})]},`runtime-${J}`)),!_.length&&!P.length?o.jsx("div",{className:"matte-panel report-card",style:{height:"100%",margin:0,gridColumn:"1 / -1"},children:o.jsx("div",{className:"empty-state",children:"No findings yet. Run analysis to populate faults below."})}):null]})})]});return o.jsxs("div",{className:"app-shell",children:[o.jsx("div",{className:"ambient ambient-left"}),o.jsx("div",{className:"ambient ambient-right"}),o.jsxs("header",{className:"topbar matte-panel reveal",children:[o.jsxs("div",{className:"brand-block",children:[o.jsx("div",{className:"brand-mark",children:o.jsx(mt,{name:"spark"})}),o.jsx("div",{children:o.jsx("div",{className:"brand-title",children:"Numerical Stability Analyzer"})})]}),o.jsxs("div",{className:"topbar-status",children:[o.jsx("span",{className:"status-dot"}),o.jsx("span",{children:l})]})]}),o.jsxs("main",{className:"layout-grid",children:[o.jsx(rf,{status:l,staticCount:_.length,runtimeCount:P.length,plotCount:b.length,activeView:e,onNavigate:V,onRunAnalysis:y,onAutoFix:v}),x&&o.jsx("div",{className:"notification success",children:"Code auto-fixed successfully!"}),e==="comparison"&&o.jsx(af,{code:d||n,onApplyFixedCode:I=>{p(n),r(I),f({fixedCode:I,explanation:"Applied safety patches from Comparison view."}),t("analyzer")}}),e==="visualization"&&o.jsx(sf,{code:n}),e==="ast_visualizer"&&o.jsx(uf,{code:n}),e==="playground"&&o.jsx(df,{}),e==="heatmap"&&o.jsx(pf,{}),e!=="comparison"&&e!=="visualization"&&e!=="ast_visualizer"&&e!=="playground"&&e!=="heatmap"&&Y()]}),o.jsx("style",{children:`
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
      `})]})}function vf(){return o.jsx(gf,{})}Nc(document.getElementById("root")).render(o.jsx(Bc.StrictMode,{children:o.jsx(vf,{})}));
