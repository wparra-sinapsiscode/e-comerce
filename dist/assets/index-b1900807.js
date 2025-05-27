function k1(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const i in n)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(n,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>n[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();function S1(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var bm={exports:{}},il={},Pm={exports:{}},le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xs=Symbol.for("react.element"),C1=Symbol.for("react.portal"),E1=Symbol.for("react.fragment"),j1=Symbol.for("react.strict_mode"),b1=Symbol.for("react.profiler"),P1=Symbol.for("react.provider"),T1=Symbol.for("react.context"),R1=Symbol.for("react.forward_ref"),A1=Symbol.for("react.suspense"),N1=Symbol.for("react.memo"),O1=Symbol.for("react.lazy"),Ep=Symbol.iterator;function z1(e){return e===null||typeof e!="object"?null:(e=Ep&&e[Ep]||e["@@iterator"],typeof e=="function"?e:null)}var Tm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Rm=Object.assign,Am={};function Oi(e,t,r){this.props=e,this.context=t,this.refs=Am,this.updater=r||Tm}Oi.prototype.isReactComponent={};Oi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Oi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Nm(){}Nm.prototype=Oi.prototype;function ad(e,t,r){this.props=e,this.context=t,this.refs=Am,this.updater=r||Tm}var ld=ad.prototype=new Nm;ld.constructor=ad;Rm(ld,Oi.prototype);ld.isPureReactComponent=!0;var jp=Array.isArray,Om=Object.prototype.hasOwnProperty,cd={current:null},zm={key:!0,ref:!0,__self:!0,__source:!0};function Im(e,t,r){var n,i={},s=null,o=null;if(t!=null)for(n in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)Om.call(t,n)&&!zm.hasOwnProperty(n)&&(i[n]=t[n]);var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(n in l=e.defaultProps,l)i[n]===void 0&&(i[n]=l[n]);return{$$typeof:Xs,type:e,key:s,ref:o,props:i,_owner:cd.current}}function I1(e,t){return{$$typeof:Xs,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ud(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xs}function M1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var bp=/\/+/g;function ql(e,t){return typeof e=="object"&&e!==null&&e.key!=null?M1(""+e.key):t.toString(36)}function Zo(e,t,r,n,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Xs:case C1:o=!0}}if(o)return o=e,i=i(o),e=n===""?"."+ql(o,0):n,jp(i)?(r="",e!=null&&(r=e.replace(bp,"$&/")+"/"),Zo(i,t,r,"",function(u){return u})):i!=null&&(ud(i)&&(i=I1(i,r+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(bp,"$&/")+"/")+e)),t.push(i)),1;if(o=0,n=n===""?".":n+":",jp(e))for(var l=0;l<e.length;l++){s=e[l];var c=n+ql(s,l);o+=Zo(s,t,r,c,i)}else if(c=z1(e),typeof c=="function")for(e=c.call(e),l=0;!(s=e.next()).done;)s=s.value,c=n+ql(s,l++),o+=Zo(s,t,r,c,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function ko(e,t,r){if(e==null)return e;var n=[],i=0;return Zo(e,n,"","",function(s){return t.call(r,s,i++)}),n}function L1(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ft={current:null},Go={transition:null},$1={ReactCurrentDispatcher:ft,ReactCurrentBatchConfig:Go,ReactCurrentOwner:cd};function Mm(){throw Error("act(...) is not supported in production builds of React.")}le.Children={map:ko,forEach:function(e,t,r){ko(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return ko(e,function(){t++}),t},toArray:function(e){return ko(e,function(t){return t})||[]},only:function(e){if(!ud(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};le.Component=Oi;le.Fragment=E1;le.Profiler=b1;le.PureComponent=ad;le.StrictMode=j1;le.Suspense=A1;le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$1;le.act=Mm;le.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=Rm({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=cd.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)Om.call(t,c)&&!zm.hasOwnProperty(c)&&(n[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)n.children=r;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];n.children=l}return{$$typeof:Xs,type:e.type,key:i,ref:s,props:n,_owner:o}};le.createContext=function(e){return e={$$typeof:T1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:P1,_context:e},e.Consumer=e};le.createElement=Im;le.createFactory=function(e){var t=Im.bind(null,e);return t.type=e,t};le.createRef=function(){return{current:null}};le.forwardRef=function(e){return{$$typeof:R1,render:e}};le.isValidElement=ud;le.lazy=function(e){return{$$typeof:O1,_payload:{_status:-1,_result:e},_init:L1}};le.memo=function(e,t){return{$$typeof:N1,type:e,compare:t===void 0?null:t}};le.startTransition=function(e){var t=Go.transition;Go.transition={};try{e()}finally{Go.transition=t}};le.unstable_act=Mm;le.useCallback=function(e,t){return ft.current.useCallback(e,t)};le.useContext=function(e){return ft.current.useContext(e)};le.useDebugValue=function(){};le.useDeferredValue=function(e){return ft.current.useDeferredValue(e)};le.useEffect=function(e,t){return ft.current.useEffect(e,t)};le.useId=function(){return ft.current.useId()};le.useImperativeHandle=function(e,t,r){return ft.current.useImperativeHandle(e,t,r)};le.useInsertionEffect=function(e,t){return ft.current.useInsertionEffect(e,t)};le.useLayoutEffect=function(e,t){return ft.current.useLayoutEffect(e,t)};le.useMemo=function(e,t){return ft.current.useMemo(e,t)};le.useReducer=function(e,t,r){return ft.current.useReducer(e,t,r)};le.useRef=function(e){return ft.current.useRef(e)};le.useState=function(e){return ft.current.useState(e)};le.useSyncExternalStore=function(e,t,r){return ft.current.useSyncExternalStore(e,t,r)};le.useTransition=function(){return ft.current.useTransition()};le.version="18.3.1";Pm.exports=le;var P=Pm.exports;const Pn=S1(P),D1=k1({__proto__:null,default:Pn},[P]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U1=P,F1=Symbol.for("react.element"),B1=Symbol.for("react.fragment"),V1=Object.prototype.hasOwnProperty,H1=U1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,W1={key:!0,ref:!0,__self:!0,__source:!0};function Lm(e,t,r){var n,i={},s=null,o=null;r!==void 0&&(s=""+r),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(n in t)V1.call(t,n)&&!W1.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)i[n]===void 0&&(i[n]=t[n]);return{$$typeof:F1,type:e,key:s,ref:o,props:i,_owner:H1.current}}il.Fragment=B1;il.jsx=Lm;il.jsxs=Lm;bm.exports=il;var a=bm.exports,Ic={},$m={exports:{}},Tt={},Dm={exports:{}},Um={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,W){var q=L.length;L.push(W);e:for(;0<q;){var ae=q-1>>>1,z=L[ae];if(0<i(z,W))L[ae]=W,L[q]=z,q=ae;else break e}}function r(L){return L.length===0?null:L[0]}function n(L){if(L.length===0)return null;var W=L[0],q=L.pop();if(q!==W){L[0]=q;e:for(var ae=0,z=L.length,ye=z>>>1;ae<ye;){var et=2*(ae+1)-1,ot=L[et],fe=et+1,Ue=L[fe];if(0>i(ot,q))fe<z&&0>i(Ue,ot)?(L[ae]=Ue,L[fe]=q,ae=fe):(L[ae]=ot,L[et]=q,ae=et);else if(fe<z&&0>i(Ue,q))L[ae]=Ue,L[fe]=q,ae=fe;else break e}}return W}function i(L,W){var q=L.sortIndex-W.sortIndex;return q!==0?q:L.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var c=[],u=[],d=1,p=null,v=3,k=!1,x=!1,w=!1,_=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(L){for(var W=r(u);W!==null;){if(W.callback===null)n(u);else if(W.startTime<=L)n(u),W.sortIndex=W.expirationTime,t(c,W);else break;W=r(u)}}function S(L){if(w=!1,g(L),!x)if(r(c)!==null)x=!0,ce(T);else{var W=r(u);W!==null&&qe(S,W.startTime-L)}}function T(L,W){x=!1,w&&(w=!1,m(O),O=-1),k=!0;var q=v;try{for(g(W),p=r(c);p!==null&&(!(p.expirationTime>W)||L&&!Re());){var ae=p.callback;if(typeof ae=="function"){p.callback=null,v=p.priorityLevel;var z=ae(p.expirationTime<=W);W=e.unstable_now(),typeof z=="function"?p.callback=z:p===r(c)&&n(c),g(W)}else n(c);p=r(c)}if(p!==null)var ye=!0;else{var et=r(u);et!==null&&qe(S,et.startTime-W),ye=!1}return ye}finally{p=null,v=q,k=!1}}var A=!1,b=null,O=-1,X=5,Y=-1;function Re(){return!(e.unstable_now()-Y<X)}function Me(){if(b!==null){var L=e.unstable_now();Y=L;var W=!0;try{W=b(!0,L)}finally{W?mt():(A=!1,b=null)}}else A=!1}var mt;if(typeof f=="function")mt=function(){f(Me)};else if(typeof MessageChannel<"u"){var St=new MessageChannel,kr=St.port2;St.port1.onmessage=Me,mt=function(){kr.postMessage(null)}}else mt=function(){_(Me,0)};function ce(L){b=L,A||(A=!0,mt())}function qe(L,W){O=_(function(){L(e.unstable_now())},W)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){x||k||(x=!0,ce(T))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return r(c)},e.unstable_next=function(L){switch(v){case 1:case 2:case 3:var W=3;break;default:W=v}var q=v;v=W;try{return L()}finally{v=q}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,W){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var q=v;v=L;try{return W()}finally{v=q}},e.unstable_scheduleCallback=function(L,W,q){var ae=e.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?ae+q:ae):q=ae,L){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=q+z,L={id:d++,callback:W,priorityLevel:L,startTime:q,expirationTime:z,sortIndex:-1},q>ae?(L.sortIndex=q,t(u,L),r(c)===null&&L===r(u)&&(w?(m(O),O=-1):w=!0,qe(S,q-ae))):(L.sortIndex=z,t(c,L),x||k||(x=!0,ce(T))),L},e.unstable_shouldYield=Re,e.unstable_wrapCallback=function(L){var W=v;return function(){var q=v;v=W;try{return L.apply(this,arguments)}finally{v=q}}}})(Um);Dm.exports=Um;var q1=Dm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z1=P,bt=q1;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Fm=new Set,Ps={};function Mn(e,t){gi(e,t),gi(e+"Capture",t)}function gi(e,t){for(Ps[e]=t,e=0;e<t.length;e++)Fm.add(t[e])}var gr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mc=Object.prototype.hasOwnProperty,G1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Pp={},Tp={};function Q1(e){return Mc.call(Tp,e)?!0:Mc.call(Pp,e)?!1:G1.test(e)?Tp[e]=!0:(Pp[e]=!0,!1)}function Y1(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function K1(e,t,r,n){if(t===null||typeof t>"u"||Y1(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ht(e,t,r,n,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var Je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Je[e]=new ht(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Je[t]=new ht(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Je[e]=new ht(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Je[e]=new ht(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Je[e]=new ht(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Je[e]=new ht(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Je[e]=new ht(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Je[e]=new ht(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Je[e]=new ht(e,5,!1,e.toLowerCase(),null,!1,!1)});var dd=/[\-:]([a-z])/g;function pd(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(dd,pd);Je[t]=new ht(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(dd,pd);Je[t]=new ht(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(dd,pd);Je[t]=new ht(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Je[e]=new ht(e,1,!1,e.toLowerCase(),null,!1,!1)});Je.xlinkHref=new ht("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Je[e]=new ht(e,1,!1,e.toLowerCase(),null,!0,!0)});function fd(e,t,r,n){var i=Je.hasOwnProperty(t)?Je[t]:null;(i!==null?i.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(K1(t,r,i,n)&&(r=null),n||i===null?Q1(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,n=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var _r=Z1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,So=Symbol.for("react.element"),Yn=Symbol.for("react.portal"),Kn=Symbol.for("react.fragment"),hd=Symbol.for("react.strict_mode"),Lc=Symbol.for("react.profiler"),Bm=Symbol.for("react.provider"),Vm=Symbol.for("react.context"),md=Symbol.for("react.forward_ref"),$c=Symbol.for("react.suspense"),Dc=Symbol.for("react.suspense_list"),gd=Symbol.for("react.memo"),Ar=Symbol.for("react.lazy"),Hm=Symbol.for("react.offscreen"),Rp=Symbol.iterator;function Zi(e){return e===null||typeof e!="object"?null:(e=Rp&&e[Rp]||e["@@iterator"],typeof e=="function"?e:null)}var be=Object.assign,Zl;function as(e){if(Zl===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Zl=t&&t[1]||""}return`
`+Zl+e}var Gl=!1;function Ql(e,t){if(!e||Gl)return"";Gl=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var n=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){n=u}e.call(t.prototype)}else{try{throw Error()}catch(u){n=u}e()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=n.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var c=`
`+i[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=l);break}}}finally{Gl=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?as(e):""}function J1(e){switch(e.tag){case 5:return as(e.type);case 16:return as("Lazy");case 13:return as("Suspense");case 19:return as("SuspenseList");case 0:case 2:case 15:return e=Ql(e.type,!1),e;case 11:return e=Ql(e.type.render,!1),e;case 1:return e=Ql(e.type,!0),e;default:return""}}function Uc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Kn:return"Fragment";case Yn:return"Portal";case Lc:return"Profiler";case hd:return"StrictMode";case $c:return"Suspense";case Dc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Vm:return(e.displayName||"Context")+".Consumer";case Bm:return(e._context.displayName||"Context")+".Provider";case md:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case gd:return t=e.displayName||null,t!==null?t:Uc(e.type)||"Memo";case Ar:t=e._payload,e=e._init;try{return Uc(e(t))}catch{}}return null}function X1(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Uc(t);case 8:return t===hd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Yr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Wm(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ev(e){var t=Wm(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,s=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){n=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Co(e){e._valueTracker||(e._valueTracker=ev(e))}function qm(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=Wm(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function wa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Fc(e,t){var r=t.checked;return be({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Ap(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=Yr(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Zm(e,t){t=t.checked,t!=null&&fd(e,"checked",t,!1)}function Bc(e,t){Zm(e,t);var r=Yr(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Vc(e,t.type,r):t.hasOwnProperty("defaultValue")&&Vc(e,t.type,Yr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Np(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Vc(e,t,r){(t!=="number"||wa(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var ls=Array.isArray;function ui(e,t,r,n){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&n&&(e[r].defaultSelected=!0)}else{for(r=""+Yr(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Hc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return be({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Op(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(N(92));if(ls(r)){if(1<r.length)throw Error(N(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Yr(r)}}function Gm(e,t){var r=Yr(t.value),n=Yr(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function zp(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Qm(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Qm(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Eo,Ym=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Eo=Eo||document.createElement("div"),Eo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Eo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ts(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var gs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},tv=["Webkit","ms","Moz","O"];Object.keys(gs).forEach(function(e){tv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),gs[t]=gs[e]})});function Km(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||gs.hasOwnProperty(e)&&gs[e]?(""+t).trim():t+"px"}function Jm(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=Km(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,i):e[r]=i}}var rv=be({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qc(e,t){if(t){if(rv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function Zc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gc=null;function yd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Qc=null,di=null,pi=null;function Ip(e){if(e=ro(e)){if(typeof Qc!="function")throw Error(N(280));var t=e.stateNode;t&&(t=cl(t),Qc(e.stateNode,e.type,t))}}function Xm(e){di?pi?pi.push(e):pi=[e]:di=e}function eg(){if(di){var e=di,t=pi;if(pi=di=null,Ip(e),t)for(e=0;e<t.length;e++)Ip(t[e])}}function tg(e,t){return e(t)}function rg(){}var Yl=!1;function ng(e,t,r){if(Yl)return e(t,r);Yl=!0;try{return tg(e,t,r)}finally{Yl=!1,(di!==null||pi!==null)&&(rg(),eg())}}function Rs(e,t){var r=e.stateNode;if(r===null)return null;var n=cl(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(N(231,t,typeof r));return r}var Yc=!1;if(gr)try{var Gi={};Object.defineProperty(Gi,"passive",{get:function(){Yc=!0}}),window.addEventListener("test",Gi,Gi),window.removeEventListener("test",Gi,Gi)}catch{Yc=!1}function nv(e,t,r,n,i,s,o,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(d){this.onError(d)}}var ys=!1,_a=null,ka=!1,Kc=null,iv={onError:function(e){ys=!0,_a=e}};function sv(e,t,r,n,i,s,o,l,c){ys=!1,_a=null,nv.apply(iv,arguments)}function ov(e,t,r,n,i,s,o,l,c){if(sv.apply(this,arguments),ys){if(ys){var u=_a;ys=!1,_a=null}else throw Error(N(198));ka||(ka=!0,Kc=u)}}function Ln(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function ig(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Mp(e){if(Ln(e)!==e)throw Error(N(188))}function av(e){var t=e.alternate;if(!t){if(t=Ln(e),t===null)throw Error(N(188));return t!==e?null:e}for(var r=e,n=t;;){var i=r.return;if(i===null)break;var s=i.alternate;if(s===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===r)return Mp(i),e;if(s===n)return Mp(i),t;s=s.sibling}throw Error(N(188))}if(r.return!==n.return)r=i,n=s;else{for(var o=!1,l=i.child;l;){if(l===r){o=!0,r=i,n=s;break}if(l===n){o=!0,n=i,r=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===r){o=!0,r=s,n=i;break}if(l===n){o=!0,n=s,r=i;break}l=l.sibling}if(!o)throw Error(N(189))}}if(r.alternate!==n)throw Error(N(190))}if(r.tag!==3)throw Error(N(188));return r.stateNode.current===r?e:t}function sg(e){return e=av(e),e!==null?og(e):null}function og(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=og(e);if(t!==null)return t;e=e.sibling}return null}var ag=bt.unstable_scheduleCallback,Lp=bt.unstable_cancelCallback,lv=bt.unstable_shouldYield,cv=bt.unstable_requestPaint,Ae=bt.unstable_now,uv=bt.unstable_getCurrentPriorityLevel,vd=bt.unstable_ImmediatePriority,lg=bt.unstable_UserBlockingPriority,Sa=bt.unstable_NormalPriority,dv=bt.unstable_LowPriority,cg=bt.unstable_IdlePriority,sl=null,tr=null;function pv(e){if(tr&&typeof tr.onCommitFiberRoot=="function")try{tr.onCommitFiberRoot(sl,e,void 0,(e.current.flags&128)===128)}catch{}}var Ht=Math.clz32?Math.clz32:mv,fv=Math.log,hv=Math.LN2;function mv(e){return e>>>=0,e===0?32:31-(fv(e)/hv|0)|0}var jo=64,bo=4194304;function cs(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ca(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,i=e.suspendedLanes,s=e.pingedLanes,o=r&268435455;if(o!==0){var l=o&~i;l!==0?n=cs(l):(s&=o,s!==0&&(n=cs(s)))}else o=r&~i,o!==0?n=cs(o):s!==0&&(n=cs(s));if(n===0)return 0;if(t!==0&&t!==n&&!(t&i)&&(i=n&-n,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-Ht(t),i=1<<r,n|=e[r],t&=~i;return n}function gv(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yv(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-Ht(s),l=1<<o,c=i[o];c===-1?(!(l&r)||l&n)&&(i[o]=gv(l,t)):c<=t&&(e.expiredLanes|=l),s&=~l}}function Jc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ug(){var e=jo;return jo<<=1,!(jo&4194240)&&(jo=64),e}function Kl(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function eo(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ht(t),e[t]=r}function vv(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-Ht(r),s=1<<i;t[i]=0,n[i]=-1,e[i]=-1,r&=~s}}function xd(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-Ht(r),i=1<<n;i&t|e[n]&t&&(e[n]|=t),r&=~i}}var ge=0;function dg(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var pg,wd,fg,hg,mg,Xc=!1,Po=[],Fr=null,Br=null,Vr=null,As=new Map,Ns=new Map,Ir=[],xv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $p(e,t){switch(e){case"focusin":case"focusout":Fr=null;break;case"dragenter":case"dragleave":Br=null;break;case"mouseover":case"mouseout":Vr=null;break;case"pointerover":case"pointerout":As.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ns.delete(t.pointerId)}}function Qi(e,t,r,n,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:s,targetContainers:[i]},t!==null&&(t=ro(t),t!==null&&wd(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function wv(e,t,r,n,i){switch(t){case"focusin":return Fr=Qi(Fr,e,t,r,n,i),!0;case"dragenter":return Br=Qi(Br,e,t,r,n,i),!0;case"mouseover":return Vr=Qi(Vr,e,t,r,n,i),!0;case"pointerover":var s=i.pointerId;return As.set(s,Qi(As.get(s)||null,e,t,r,n,i)),!0;case"gotpointercapture":return s=i.pointerId,Ns.set(s,Qi(Ns.get(s)||null,e,t,r,n,i)),!0}return!1}function gg(e){var t=mn(e.target);if(t!==null){var r=Ln(t);if(r!==null){if(t=r.tag,t===13){if(t=ig(r),t!==null){e.blockedOn=t,mg(e.priority,function(){fg(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Qo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=eu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Gc=n,r.target.dispatchEvent(n),Gc=null}else return t=ro(r),t!==null&&wd(t),e.blockedOn=r,!1;t.shift()}return!0}function Dp(e,t,r){Qo(e)&&r.delete(t)}function _v(){Xc=!1,Fr!==null&&Qo(Fr)&&(Fr=null),Br!==null&&Qo(Br)&&(Br=null),Vr!==null&&Qo(Vr)&&(Vr=null),As.forEach(Dp),Ns.forEach(Dp)}function Yi(e,t){e.blockedOn===t&&(e.blockedOn=null,Xc||(Xc=!0,bt.unstable_scheduleCallback(bt.unstable_NormalPriority,_v)))}function Os(e){function t(i){return Yi(i,e)}if(0<Po.length){Yi(Po[0],e);for(var r=1;r<Po.length;r++){var n=Po[r];n.blockedOn===e&&(n.blockedOn=null)}}for(Fr!==null&&Yi(Fr,e),Br!==null&&Yi(Br,e),Vr!==null&&Yi(Vr,e),As.forEach(t),Ns.forEach(t),r=0;r<Ir.length;r++)n=Ir[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<Ir.length&&(r=Ir[0],r.blockedOn===null);)gg(r),r.blockedOn===null&&Ir.shift()}var fi=_r.ReactCurrentBatchConfig,Ea=!0;function kv(e,t,r,n){var i=ge,s=fi.transition;fi.transition=null;try{ge=1,_d(e,t,r,n)}finally{ge=i,fi.transition=s}}function Sv(e,t,r,n){var i=ge,s=fi.transition;fi.transition=null;try{ge=4,_d(e,t,r,n)}finally{ge=i,fi.transition=s}}function _d(e,t,r,n){if(Ea){var i=eu(e,t,r,n);if(i===null)ac(e,t,n,ja,r),$p(e,n);else if(wv(i,e,t,r,n))n.stopPropagation();else if($p(e,n),t&4&&-1<xv.indexOf(e)){for(;i!==null;){var s=ro(i);if(s!==null&&pg(s),s=eu(e,t,r,n),s===null&&ac(e,t,n,ja,r),s===i)break;i=s}i!==null&&n.stopPropagation()}else ac(e,t,n,null,r)}}var ja=null;function eu(e,t,r,n){if(ja=null,e=yd(n),e=mn(e),e!==null)if(t=Ln(e),t===null)e=null;else if(r=t.tag,r===13){if(e=ig(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ja=e,null}function yg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(uv()){case vd:return 1;case lg:return 4;case Sa:case dv:return 16;case cg:return 536870912;default:return 16}default:return 16}}var Lr=null,kd=null,Yo=null;function vg(){if(Yo)return Yo;var e,t=kd,r=t.length,n,i="value"in Lr?Lr.value:Lr.textContent,s=i.length;for(e=0;e<r&&t[e]===i[e];e++);var o=r-e;for(n=1;n<=o&&t[r-n]===i[s-n];n++);return Yo=i.slice(e,1<n?1-n:void 0)}function Ko(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function To(){return!0}function Up(){return!1}function Rt(e){function t(r,n,i,s,o){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?To:Up,this.isPropagationStopped=Up,this}return be(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=To)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=To)},persist:function(){},isPersistent:To}),t}var zi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sd=Rt(zi),to=be({},zi,{view:0,detail:0}),Cv=Rt(to),Jl,Xl,Ki,ol=be({},to,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ki&&(Ki&&e.type==="mousemove"?(Jl=e.screenX-Ki.screenX,Xl=e.screenY-Ki.screenY):Xl=Jl=0,Ki=e),Jl)},movementY:function(e){return"movementY"in e?e.movementY:Xl}}),Fp=Rt(ol),Ev=be({},ol,{dataTransfer:0}),jv=Rt(Ev),bv=be({},to,{relatedTarget:0}),ec=Rt(bv),Pv=be({},zi,{animationName:0,elapsedTime:0,pseudoElement:0}),Tv=Rt(Pv),Rv=be({},zi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Av=Rt(Rv),Nv=be({},zi,{data:0}),Bp=Rt(Nv),Ov={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Iv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Iv[e])?!!t[e]:!1}function Cd(){return Mv}var Lv=be({},to,{key:function(e){if(e.key){var t=Ov[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ko(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?zv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cd,charCode:function(e){return e.type==="keypress"?Ko(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ko(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),$v=Rt(Lv),Dv=be({},ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vp=Rt(Dv),Uv=be({},to,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cd}),Fv=Rt(Uv),Bv=be({},zi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vv=Rt(Bv),Hv=be({},ol,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Wv=Rt(Hv),qv=[9,13,27,32],Ed=gr&&"CompositionEvent"in window,vs=null;gr&&"documentMode"in document&&(vs=document.documentMode);var Zv=gr&&"TextEvent"in window&&!vs,xg=gr&&(!Ed||vs&&8<vs&&11>=vs),Hp=String.fromCharCode(32),Wp=!1;function wg(e,t){switch(e){case"keyup":return qv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _g(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jn=!1;function Gv(e,t){switch(e){case"compositionend":return _g(t);case"keypress":return t.which!==32?null:(Wp=!0,Hp);case"textInput":return e=t.data,e===Hp&&Wp?null:e;default:return null}}function Qv(e,t){if(Jn)return e==="compositionend"||!Ed&&wg(e,t)?(e=vg(),Yo=kd=Lr=null,Jn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return xg&&t.locale!=="ko"?null:t.data;default:return null}}var Yv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Yv[e.type]:t==="textarea"}function kg(e,t,r,n){Xm(n),t=ba(t,"onChange"),0<t.length&&(r=new Sd("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var xs=null,zs=null;function Kv(e){Og(e,0)}function al(e){var t=ti(e);if(qm(t))return e}function Jv(e,t){if(e==="change")return t}var Sg=!1;if(gr){var tc;if(gr){var rc="oninput"in document;if(!rc){var Zp=document.createElement("div");Zp.setAttribute("oninput","return;"),rc=typeof Zp.oninput=="function"}tc=rc}else tc=!1;Sg=tc&&(!document.documentMode||9<document.documentMode)}function Gp(){xs&&(xs.detachEvent("onpropertychange",Cg),zs=xs=null)}function Cg(e){if(e.propertyName==="value"&&al(zs)){var t=[];kg(t,zs,e,yd(e)),ng(Kv,t)}}function Xv(e,t,r){e==="focusin"?(Gp(),xs=t,zs=r,xs.attachEvent("onpropertychange",Cg)):e==="focusout"&&Gp()}function ex(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return al(zs)}function tx(e,t){if(e==="click")return al(t)}function rx(e,t){if(e==="input"||e==="change")return al(t)}function nx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Gt=typeof Object.is=="function"?Object.is:nx;function Is(e,t){if(Gt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!Mc.call(t,i)||!Gt(e[i],t[i]))return!1}return!0}function Qp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Yp(e,t){var r=Qp(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Qp(r)}}function Eg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Eg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function jg(){for(var e=window,t=wa();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=wa(e.document)}return t}function jd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ix(e){var t=jg(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Eg(r.ownerDocument.documentElement,r)){if(n!==null&&jd(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,s=Math.min(n.start,i);n=n.end===void 0?s:Math.min(n.end,i),!e.extend&&s>n&&(i=n,n=s,s=i),i=Yp(r,s);var o=Yp(r,n);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>n?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var sx=gr&&"documentMode"in document&&11>=document.documentMode,Xn=null,tu=null,ws=null,ru=!1;function Kp(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;ru||Xn==null||Xn!==wa(n)||(n=Xn,"selectionStart"in n&&jd(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),ws&&Is(ws,n)||(ws=n,n=ba(tu,"onSelect"),0<n.length&&(t=new Sd("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=Xn)))}function Ro(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var ei={animationend:Ro("Animation","AnimationEnd"),animationiteration:Ro("Animation","AnimationIteration"),animationstart:Ro("Animation","AnimationStart"),transitionend:Ro("Transition","TransitionEnd")},nc={},bg={};gr&&(bg=document.createElement("div").style,"AnimationEvent"in window||(delete ei.animationend.animation,delete ei.animationiteration.animation,delete ei.animationstart.animation),"TransitionEvent"in window||delete ei.transitionend.transition);function ll(e){if(nc[e])return nc[e];if(!ei[e])return e;var t=ei[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in bg)return nc[e]=t[r];return e}var Pg=ll("animationend"),Tg=ll("animationiteration"),Rg=ll("animationstart"),Ag=ll("transitionend"),Ng=new Map,Jp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tn(e,t){Ng.set(e,t),Mn(t,[e])}for(var ic=0;ic<Jp.length;ic++){var sc=Jp[ic],ox=sc.toLowerCase(),ax=sc[0].toUpperCase()+sc.slice(1);tn(ox,"on"+ax)}tn(Pg,"onAnimationEnd");tn(Tg,"onAnimationIteration");tn(Rg,"onAnimationStart");tn("dblclick","onDoubleClick");tn("focusin","onFocus");tn("focusout","onBlur");tn(Ag,"onTransitionEnd");gi("onMouseEnter",["mouseout","mouseover"]);gi("onMouseLeave",["mouseout","mouseover"]);gi("onPointerEnter",["pointerout","pointerover"]);gi("onPointerLeave",["pointerout","pointerover"]);Mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var us="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lx=new Set("cancel close invalid load scroll toggle".split(" ").concat(us));function Xp(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,ov(n,t,void 0,e),e.currentTarget=null}function Og(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],i=n.event;n=n.listeners;e:{var s=void 0;if(t)for(var o=n.length-1;0<=o;o--){var l=n[o],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==s&&i.isPropagationStopped())break e;Xp(i,l,u),s=c}else for(o=0;o<n.length;o++){if(l=n[o],c=l.instance,u=l.currentTarget,l=l.listener,c!==s&&i.isPropagationStopped())break e;Xp(i,l,u),s=c}}}if(ka)throw e=Kc,ka=!1,Kc=null,e}function _e(e,t){var r=t[au];r===void 0&&(r=t[au]=new Set);var n=e+"__bubble";r.has(n)||(zg(t,e,2,!1),r.add(n))}function oc(e,t,r){var n=0;t&&(n|=4),zg(r,e,n,t)}var Ao="_reactListening"+Math.random().toString(36).slice(2);function Ms(e){if(!e[Ao]){e[Ao]=!0,Fm.forEach(function(r){r!=="selectionchange"&&(lx.has(r)||oc(r,!1,e),oc(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ao]||(t[Ao]=!0,oc("selectionchange",!1,t))}}function zg(e,t,r,n){switch(yg(t)){case 1:var i=kv;break;case 4:i=Sv;break;default:i=_d}r=i.bind(null,t,r,e),i=void 0,!Yc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function ac(e,t,r,n,i){var s=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var o=n.tag;if(o===3||o===4){var l=n.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=n.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;l!==null;){if(o=mn(l),o===null)return;if(c=o.tag,c===5||c===6){n=s=o;continue e}l=l.parentNode}}n=n.return}ng(function(){var u=s,d=yd(r),p=[];e:{var v=Ng.get(e);if(v!==void 0){var k=Sd,x=e;switch(e){case"keypress":if(Ko(r)===0)break e;case"keydown":case"keyup":k=$v;break;case"focusin":x="focus",k=ec;break;case"focusout":x="blur",k=ec;break;case"beforeblur":case"afterblur":k=ec;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=Fp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=jv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=Fv;break;case Pg:case Tg:case Rg:k=Tv;break;case Ag:k=Vv;break;case"scroll":k=Cv;break;case"wheel":k=Wv;break;case"copy":case"cut":case"paste":k=Av;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=Vp}var w=(t&4)!==0,_=!w&&e==="scroll",m=w?v!==null?v+"Capture":null:v;w=[];for(var f=u,g;f!==null;){g=f;var S=g.stateNode;if(g.tag===5&&S!==null&&(g=S,m!==null&&(S=Rs(f,m),S!=null&&w.push(Ls(f,S,g)))),_)break;f=f.return}0<w.length&&(v=new k(v,x,null,r,d),p.push({event:v,listeners:w}))}}if(!(t&7)){e:{if(v=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",v&&r!==Gc&&(x=r.relatedTarget||r.fromElement)&&(mn(x)||x[yr]))break e;if((k||v)&&(v=d.window===d?d:(v=d.ownerDocument)?v.defaultView||v.parentWindow:window,k?(x=r.relatedTarget||r.toElement,k=u,x=x?mn(x):null,x!==null&&(_=Ln(x),x!==_||x.tag!==5&&x.tag!==6)&&(x=null)):(k=null,x=u),k!==x)){if(w=Fp,S="onMouseLeave",m="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(w=Vp,S="onPointerLeave",m="onPointerEnter",f="pointer"),_=k==null?v:ti(k),g=x==null?v:ti(x),v=new w(S,f+"leave",k,r,d),v.target=_,v.relatedTarget=g,S=null,mn(d)===u&&(w=new w(m,f+"enter",x,r,d),w.target=g,w.relatedTarget=_,S=w),_=S,k&&x)t:{for(w=k,m=x,f=0,g=w;g;g=Vn(g))f++;for(g=0,S=m;S;S=Vn(S))g++;for(;0<f-g;)w=Vn(w),f--;for(;0<g-f;)m=Vn(m),g--;for(;f--;){if(w===m||m!==null&&w===m.alternate)break t;w=Vn(w),m=Vn(m)}w=null}else w=null;k!==null&&ef(p,v,k,w,!1),x!==null&&_!==null&&ef(p,_,x,w,!0)}}e:{if(v=u?ti(u):window,k=v.nodeName&&v.nodeName.toLowerCase(),k==="select"||k==="input"&&v.type==="file")var T=Jv;else if(qp(v))if(Sg)T=rx;else{T=ex;var A=Xv}else(k=v.nodeName)&&k.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(T=tx);if(T&&(T=T(e,u))){kg(p,T,r,d);break e}A&&A(e,v,u),e==="focusout"&&(A=v._wrapperState)&&A.controlled&&v.type==="number"&&Vc(v,"number",v.value)}switch(A=u?ti(u):window,e){case"focusin":(qp(A)||A.contentEditable==="true")&&(Xn=A,tu=u,ws=null);break;case"focusout":ws=tu=Xn=null;break;case"mousedown":ru=!0;break;case"contextmenu":case"mouseup":case"dragend":ru=!1,Kp(p,r,d);break;case"selectionchange":if(sx)break;case"keydown":case"keyup":Kp(p,r,d)}var b;if(Ed)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else Jn?wg(e,r)&&(O="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(O="onCompositionStart");O&&(xg&&r.locale!=="ko"&&(Jn||O!=="onCompositionStart"?O==="onCompositionEnd"&&Jn&&(b=vg()):(Lr=d,kd="value"in Lr?Lr.value:Lr.textContent,Jn=!0)),A=ba(u,O),0<A.length&&(O=new Bp(O,e,null,r,d),p.push({event:O,listeners:A}),b?O.data=b:(b=_g(r),b!==null&&(O.data=b)))),(b=Zv?Gv(e,r):Qv(e,r))&&(u=ba(u,"onBeforeInput"),0<u.length&&(d=new Bp("onBeforeInput","beforeinput",null,r,d),p.push({event:d,listeners:u}),d.data=b))}Og(p,t)})}function Ls(e,t,r){return{instance:e,listener:t,currentTarget:r}}function ba(e,t){for(var r=t+"Capture",n=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Rs(e,r),s!=null&&n.unshift(Ls(e,s,i)),s=Rs(e,t),s!=null&&n.push(Ls(e,s,i))),e=e.return}return n}function Vn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ef(e,t,r,n,i){for(var s=t._reactName,o=[];r!==null&&r!==n;){var l=r,c=l.alternate,u=l.stateNode;if(c!==null&&c===n)break;l.tag===5&&u!==null&&(l=u,i?(c=Rs(r,s),c!=null&&o.unshift(Ls(r,c,l))):i||(c=Rs(r,s),c!=null&&o.push(Ls(r,c,l)))),r=r.return}o.length!==0&&e.push({event:t,listeners:o})}var cx=/\r\n?/g,ux=/\u0000|\uFFFD/g;function tf(e){return(typeof e=="string"?e:""+e).replace(cx,`
`).replace(ux,"")}function No(e,t,r){if(t=tf(t),tf(e)!==t&&r)throw Error(N(425))}function Pa(){}var nu=null,iu=null;function su(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ou=typeof setTimeout=="function"?setTimeout:void 0,dx=typeof clearTimeout=="function"?clearTimeout:void 0,rf=typeof Promise=="function"?Promise:void 0,px=typeof queueMicrotask=="function"?queueMicrotask:typeof rf<"u"?function(e){return rf.resolve(null).then(e).catch(fx)}:ou;function fx(e){setTimeout(function(){throw e})}function lc(e,t){var r=t,n=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){e.removeChild(i),Os(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);Os(t)}function Hr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function nf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Ii=Math.random().toString(36).slice(2),er="__reactFiber$"+Ii,$s="__reactProps$"+Ii,yr="__reactContainer$"+Ii,au="__reactEvents$"+Ii,hx="__reactListeners$"+Ii,mx="__reactHandles$"+Ii;function mn(e){var t=e[er];if(t)return t;for(var r=e.parentNode;r;){if(t=r[yr]||r[er]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=nf(e);e!==null;){if(r=e[er])return r;e=nf(e)}return t}e=r,r=e.parentNode}return null}function ro(e){return e=e[er]||e[yr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ti(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function cl(e){return e[$s]||null}var lu=[],ri=-1;function rn(e){return{current:e}}function Se(e){0>ri||(e.current=lu[ri],lu[ri]=null,ri--)}function we(e,t){ri++,lu[ri]=e.current,e.current=t}var Kr={},st=rn(Kr),xt=rn(!1),Tn=Kr;function yi(e,t){var r=e.type.contextTypes;if(!r)return Kr;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in r)i[s]=t[s];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function wt(e){return e=e.childContextTypes,e!=null}function Ta(){Se(xt),Se(st)}function sf(e,t,r){if(st.current!==Kr)throw Error(N(168));we(st,t),we(xt,r)}function Ig(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in t))throw Error(N(108,X1(e)||"Unknown",i));return be({},r,n)}function Ra(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Kr,Tn=st.current,we(st,e),we(xt,xt.current),!0}function of(e,t,r){var n=e.stateNode;if(!n)throw Error(N(169));r?(e=Ig(e,t,Tn),n.__reactInternalMemoizedMergedChildContext=e,Se(xt),Se(st),we(st,e)):Se(xt),we(xt,r)}var dr=null,ul=!1,cc=!1;function Mg(e){dr===null?dr=[e]:dr.push(e)}function gx(e){ul=!0,Mg(e)}function nn(){if(!cc&&dr!==null){cc=!0;var e=0,t=ge;try{var r=dr;for(ge=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}dr=null,ul=!1}catch(i){throw dr!==null&&(dr=dr.slice(e+1)),ag(vd,nn),i}finally{ge=t,cc=!1}}return null}var ni=[],ii=0,Aa=null,Na=0,At=[],Nt=0,Rn=null,fr=1,hr="";function fn(e,t){ni[ii++]=Na,ni[ii++]=Aa,Aa=e,Na=t}function Lg(e,t,r){At[Nt++]=fr,At[Nt++]=hr,At[Nt++]=Rn,Rn=e;var n=fr;e=hr;var i=32-Ht(n)-1;n&=~(1<<i),r+=1;var s=32-Ht(t)+i;if(30<s){var o=i-i%5;s=(n&(1<<o)-1).toString(32),n>>=o,i-=o,fr=1<<32-Ht(t)+i|r<<i|n,hr=s+e}else fr=1<<s|r<<i|n,hr=e}function bd(e){e.return!==null&&(fn(e,1),Lg(e,1,0))}function Pd(e){for(;e===Aa;)Aa=ni[--ii],ni[ii]=null,Na=ni[--ii],ni[ii]=null;for(;e===Rn;)Rn=At[--Nt],At[Nt]=null,hr=At[--Nt],At[Nt]=null,fr=At[--Nt],At[Nt]=null}var jt=null,Et=null,Ce=!1,Vt=null;function $g(e,t){var r=Ot(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function af(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,jt=e,Et=Hr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,jt=e,Et=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Rn!==null?{id:fr,overflow:hr}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Ot(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,jt=e,Et=null,!0):!1;default:return!1}}function cu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function uu(e){if(Ce){var t=Et;if(t){var r=t;if(!af(e,t)){if(cu(e))throw Error(N(418));t=Hr(r.nextSibling);var n=jt;t&&af(e,t)?$g(n,r):(e.flags=e.flags&-4097|2,Ce=!1,jt=e)}}else{if(cu(e))throw Error(N(418));e.flags=e.flags&-4097|2,Ce=!1,jt=e}}}function lf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;jt=e}function Oo(e){if(e!==jt)return!1;if(!Ce)return lf(e),Ce=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!su(e.type,e.memoizedProps)),t&&(t=Et)){if(cu(e))throw Dg(),Error(N(418));for(;t;)$g(e,t),t=Hr(t.nextSibling)}if(lf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Et=Hr(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Et=null}}else Et=jt?Hr(e.stateNode.nextSibling):null;return!0}function Dg(){for(var e=Et;e;)e=Hr(e.nextSibling)}function vi(){Et=jt=null,Ce=!1}function Td(e){Vt===null?Vt=[e]:Vt.push(e)}var yx=_r.ReactCurrentBatchConfig;function Ji(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(N(309));var n=r.stateNode}if(!n)throw Error(N(147,e));var i=n,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(N(284));if(!r._owner)throw Error(N(290,e))}return e}function zo(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function cf(e){var t=e._init;return t(e._payload)}function Ug(e){function t(m,f){if(e){var g=m.deletions;g===null?(m.deletions=[f],m.flags|=16):g.push(f)}}function r(m,f){if(!e)return null;for(;f!==null;)t(m,f),f=f.sibling;return null}function n(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=Gr(m,f),m.index=0,m.sibling=null,m}function s(m,f,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<f?(m.flags|=2,f):g):(m.flags|=2,f)):(m.flags|=1048576,f)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,f,g,S){return f===null||f.tag!==6?(f=gc(g,m.mode,S),f.return=m,f):(f=i(f,g),f.return=m,f)}function c(m,f,g,S){var T=g.type;return T===Kn?d(m,f,g.props.children,S,g.key):f!==null&&(f.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ar&&cf(T)===f.type)?(S=i(f,g.props),S.ref=Ji(m,f,g),S.return=m,S):(S=ia(g.type,g.key,g.props,null,m.mode,S),S.ref=Ji(m,f,g),S.return=m,S)}function u(m,f,g,S){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=yc(g,m.mode,S),f.return=m,f):(f=i(f,g.children||[]),f.return=m,f)}function d(m,f,g,S,T){return f===null||f.tag!==7?(f=Cn(g,m.mode,S,T),f.return=m,f):(f=i(f,g),f.return=m,f)}function p(m,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=gc(""+f,m.mode,g),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case So:return g=ia(f.type,f.key,f.props,null,m.mode,g),g.ref=Ji(m,null,f),g.return=m,g;case Yn:return f=yc(f,m.mode,g),f.return=m,f;case Ar:var S=f._init;return p(m,S(f._payload),g)}if(ls(f)||Zi(f))return f=Cn(f,m.mode,g,null),f.return=m,f;zo(m,f)}return null}function v(m,f,g,S){var T=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return T!==null?null:l(m,f,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case So:return g.key===T?c(m,f,g,S):null;case Yn:return g.key===T?u(m,f,g,S):null;case Ar:return T=g._init,v(m,f,T(g._payload),S)}if(ls(g)||Zi(g))return T!==null?null:d(m,f,g,S,null);zo(m,g)}return null}function k(m,f,g,S,T){if(typeof S=="string"&&S!==""||typeof S=="number")return m=m.get(g)||null,l(f,m,""+S,T);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case So:return m=m.get(S.key===null?g:S.key)||null,c(f,m,S,T);case Yn:return m=m.get(S.key===null?g:S.key)||null,u(f,m,S,T);case Ar:var A=S._init;return k(m,f,g,A(S._payload),T)}if(ls(S)||Zi(S))return m=m.get(g)||null,d(f,m,S,T,null);zo(f,S)}return null}function x(m,f,g,S){for(var T=null,A=null,b=f,O=f=0,X=null;b!==null&&O<g.length;O++){b.index>O?(X=b,b=null):X=b.sibling;var Y=v(m,b,g[O],S);if(Y===null){b===null&&(b=X);break}e&&b&&Y.alternate===null&&t(m,b),f=s(Y,f,O),A===null?T=Y:A.sibling=Y,A=Y,b=X}if(O===g.length)return r(m,b),Ce&&fn(m,O),T;if(b===null){for(;O<g.length;O++)b=p(m,g[O],S),b!==null&&(f=s(b,f,O),A===null?T=b:A.sibling=b,A=b);return Ce&&fn(m,O),T}for(b=n(m,b);O<g.length;O++)X=k(b,m,O,g[O],S),X!==null&&(e&&X.alternate!==null&&b.delete(X.key===null?O:X.key),f=s(X,f,O),A===null?T=X:A.sibling=X,A=X);return e&&b.forEach(function(Re){return t(m,Re)}),Ce&&fn(m,O),T}function w(m,f,g,S){var T=Zi(g);if(typeof T!="function")throw Error(N(150));if(g=T.call(g),g==null)throw Error(N(151));for(var A=T=null,b=f,O=f=0,X=null,Y=g.next();b!==null&&!Y.done;O++,Y=g.next()){b.index>O?(X=b,b=null):X=b.sibling;var Re=v(m,b,Y.value,S);if(Re===null){b===null&&(b=X);break}e&&b&&Re.alternate===null&&t(m,b),f=s(Re,f,O),A===null?T=Re:A.sibling=Re,A=Re,b=X}if(Y.done)return r(m,b),Ce&&fn(m,O),T;if(b===null){for(;!Y.done;O++,Y=g.next())Y=p(m,Y.value,S),Y!==null&&(f=s(Y,f,O),A===null?T=Y:A.sibling=Y,A=Y);return Ce&&fn(m,O),T}for(b=n(m,b);!Y.done;O++,Y=g.next())Y=k(b,m,O,Y.value,S),Y!==null&&(e&&Y.alternate!==null&&b.delete(Y.key===null?O:Y.key),f=s(Y,f,O),A===null?T=Y:A.sibling=Y,A=Y);return e&&b.forEach(function(Me){return t(m,Me)}),Ce&&fn(m,O),T}function _(m,f,g,S){if(typeof g=="object"&&g!==null&&g.type===Kn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case So:e:{for(var T=g.key,A=f;A!==null;){if(A.key===T){if(T=g.type,T===Kn){if(A.tag===7){r(m,A.sibling),f=i(A,g.props.children),f.return=m,m=f;break e}}else if(A.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ar&&cf(T)===A.type){r(m,A.sibling),f=i(A,g.props),f.ref=Ji(m,A,g),f.return=m,m=f;break e}r(m,A);break}else t(m,A);A=A.sibling}g.type===Kn?(f=Cn(g.props.children,m.mode,S,g.key),f.return=m,m=f):(S=ia(g.type,g.key,g.props,null,m.mode,S),S.ref=Ji(m,f,g),S.return=m,m=S)}return o(m);case Yn:e:{for(A=g.key;f!==null;){if(f.key===A)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){r(m,f.sibling),f=i(f,g.children||[]),f.return=m,m=f;break e}else{r(m,f);break}else t(m,f);f=f.sibling}f=yc(g,m.mode,S),f.return=m,m=f}return o(m);case Ar:return A=g._init,_(m,f,A(g._payload),S)}if(ls(g))return x(m,f,g,S);if(Zi(g))return w(m,f,g,S);zo(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(r(m,f.sibling),f=i(f,g),f.return=m,m=f):(r(m,f),f=gc(g,m.mode,S),f.return=m,m=f),o(m)):r(m,f)}return _}var xi=Ug(!0),Fg=Ug(!1),Oa=rn(null),za=null,si=null,Rd=null;function Ad(){Rd=si=za=null}function Nd(e){var t=Oa.current;Se(Oa),e._currentValue=t}function du(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function hi(e,t){za=e,Rd=si=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(yt=!0),e.firstContext=null)}function It(e){var t=e._currentValue;if(Rd!==e)if(e={context:e,memoizedValue:t,next:null},si===null){if(za===null)throw Error(N(308));si=e,za.dependencies={lanes:0,firstContext:e}}else si=si.next=e;return t}var gn=null;function Od(e){gn===null?gn=[e]:gn.push(e)}function Bg(e,t,r,n){var i=t.interleaved;return i===null?(r.next=r,Od(t)):(r.next=i.next,i.next=r),t.interleaved=r,vr(e,n)}function vr(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Nr=!1;function zd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function mr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Wr(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,ue&2){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,vr(e,r)}return i=n.interleaved,i===null?(t.next=t,Od(n)):(t.next=i.next,i.next=t),n.interleaved=t,vr(e,r)}function Jo(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,xd(e,r)}}function uf(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,s=null;if(r=r.firstBaseUpdate,r!==null){do{var o={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};s===null?i=s=o:s=s.next=o,r=r.next}while(r!==null);s===null?i=s=t:s=s.next=t}else i=s=t;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Ia(e,t,r,n){var i=e.updateQueue;Nr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,o===null?s=u:o.next=u,o=c;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(s!==null){var p=i.baseState;o=0,d=u=c=null,l=s;do{var v=l.lane,k=l.eventTime;if((n&v)===v){d!==null&&(d=d.next={eventTime:k,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=e,w=l;switch(v=t,k=r,w.tag){case 1:if(x=w.payload,typeof x=="function"){p=x.call(k,p,v);break e}p=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=w.payload,v=typeof x=="function"?x.call(k,p,v):x,v==null)break e;p=be({},p,v);break e;case 2:Nr=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,v=i.effects,v===null?i.effects=[l]:v.push(l))}else k={eventTime:k,lane:v,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=k,c=p):d=d.next=k,o|=v;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;v=l,l=v.next,v.next=null,i.lastBaseUpdate=v,i.shared.pending=null}}while(1);if(d===null&&(c=p),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Nn|=o,e.lanes=o,e.memoizedState=p}}function df(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(N(191,i));i.call(n)}}}var no={},rr=rn(no),Ds=rn(no),Us=rn(no);function yn(e){if(e===no)throw Error(N(174));return e}function Id(e,t){switch(we(Us,t),we(Ds,e),we(rr,no),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Wc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Wc(t,e)}Se(rr),we(rr,t)}function wi(){Se(rr),Se(Ds),Se(Us)}function Hg(e){yn(Us.current);var t=yn(rr.current),r=Wc(t,e.type);t!==r&&(we(Ds,e),we(rr,r))}function Md(e){Ds.current===e&&(Se(rr),Se(Ds))}var Ee=rn(0);function Ma(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var uc=[];function Ld(){for(var e=0;e<uc.length;e++)uc[e]._workInProgressVersionPrimary=null;uc.length=0}var Xo=_r.ReactCurrentDispatcher,dc=_r.ReactCurrentBatchConfig,An=0,je=null,$e=null,Ve=null,La=!1,_s=!1,Fs=0,vx=0;function tt(){throw Error(N(321))}function $d(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Gt(e[r],t[r]))return!1;return!0}function Dd(e,t,r,n,i,s){if(An=s,je=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Xo.current=e===null||e.memoizedState===null?kx:Sx,e=r(n,i),_s){s=0;do{if(_s=!1,Fs=0,25<=s)throw Error(N(301));s+=1,Ve=$e=null,t.updateQueue=null,Xo.current=Cx,e=r(n,i)}while(_s)}if(Xo.current=$a,t=$e!==null&&$e.next!==null,An=0,Ve=$e=je=null,La=!1,t)throw Error(N(300));return e}function Ud(){var e=Fs!==0;return Fs=0,e}function Jt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?je.memoizedState=Ve=e:Ve=Ve.next=e,Ve}function Mt(){if($e===null){var e=je.alternate;e=e!==null?e.memoizedState:null}else e=$e.next;var t=Ve===null?je.memoizedState:Ve.next;if(t!==null)Ve=t,$e=e;else{if(e===null)throw Error(N(310));$e=e,e={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},Ve===null?je.memoizedState=Ve=e:Ve=Ve.next=e}return Ve}function Bs(e,t){return typeof t=="function"?t(e):t}function pc(e){var t=Mt(),r=t.queue;if(r===null)throw Error(N(311));r.lastRenderedReducer=e;var n=$e,i=n.baseQueue,s=r.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}n.baseQueue=i=s,r.pending=null}if(i!==null){s=i.next,n=n.baseState;var l=o=null,c=null,u=s;do{var d=u.lane;if((An&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:e(n,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=p,o=n):c=c.next=p,je.lanes|=d,Nn|=d}u=u.next}while(u!==null&&u!==s);c===null?o=n:c.next=l,Gt(n,t.memoizedState)||(yt=!0),t.memoizedState=n,t.baseState=o,t.baseQueue=c,r.lastRenderedState=n}if(e=r.interleaved,e!==null){i=e;do s=i.lane,je.lanes|=s,Nn|=s,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function fc(e){var t=Mt(),r=t.queue;if(r===null)throw Error(N(311));r.lastRenderedReducer=e;var n=r.dispatch,i=r.pending,s=t.memoizedState;if(i!==null){r.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);Gt(s,t.memoizedState)||(yt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),r.lastRenderedState=s}return[s,n]}function Wg(){}function qg(e,t){var r=je,n=Mt(),i=t(),s=!Gt(n.memoizedState,i);if(s&&(n.memoizedState=i,yt=!0),n=n.queue,Fd(Qg.bind(null,r,n,e),[e]),n.getSnapshot!==t||s||Ve!==null&&Ve.memoizedState.tag&1){if(r.flags|=2048,Vs(9,Gg.bind(null,r,n,i,t),void 0,null),We===null)throw Error(N(349));An&30||Zg(r,t,i)}return i}function Zg(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=je.updateQueue,t===null?(t={lastEffect:null,stores:null},je.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Gg(e,t,r,n){t.value=r,t.getSnapshot=n,Yg(t)&&Kg(e)}function Qg(e,t,r){return r(function(){Yg(t)&&Kg(e)})}function Yg(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Gt(e,r)}catch{return!0}}function Kg(e){var t=vr(e,1);t!==null&&Wt(t,e,1,-1)}function pf(e){var t=Jt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Bs,lastRenderedState:e},t.queue=e,e=e.dispatch=_x.bind(null,je,e),[t.memoizedState,e]}function Vs(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=je.updateQueue,t===null?(t={lastEffect:null,stores:null},je.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function Jg(){return Mt().memoizedState}function ea(e,t,r,n){var i=Jt();je.flags|=e,i.memoizedState=Vs(1|t,r,void 0,n===void 0?null:n)}function dl(e,t,r,n){var i=Mt();n=n===void 0?null:n;var s=void 0;if($e!==null){var o=$e.memoizedState;if(s=o.destroy,n!==null&&$d(n,o.deps)){i.memoizedState=Vs(t,r,s,n);return}}je.flags|=e,i.memoizedState=Vs(1|t,r,s,n)}function ff(e,t){return ea(8390656,8,e,t)}function Fd(e,t){return dl(2048,8,e,t)}function Xg(e,t){return dl(4,2,e,t)}function ey(e,t){return dl(4,4,e,t)}function ty(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ry(e,t,r){return r=r!=null?r.concat([e]):null,dl(4,4,ty.bind(null,t,e),r)}function Bd(){}function ny(e,t){var r=Mt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&$d(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function iy(e,t){var r=Mt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&$d(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function sy(e,t,r){return An&21?(Gt(r,t)||(r=ug(),je.lanes|=r,Nn|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,yt=!0),e.memoizedState=r)}function xx(e,t){var r=ge;ge=r!==0&&4>r?r:4,e(!0);var n=dc.transition;dc.transition={};try{e(!1),t()}finally{ge=r,dc.transition=n}}function oy(){return Mt().memoizedState}function wx(e,t,r){var n=Zr(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},ay(e))ly(t,r);else if(r=Bg(e,t,r,n),r!==null){var i=pt();Wt(r,e,n,i),cy(r,t,n)}}function _x(e,t,r){var n=Zr(e),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(ay(e))ly(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,l=s(o,r);if(i.hasEagerState=!0,i.eagerState=l,Gt(l,o)){var c=t.interleaved;c===null?(i.next=i,Od(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}r=Bg(e,t,i,n),r!==null&&(i=pt(),Wt(r,e,n,i),cy(r,t,n))}}function ay(e){var t=e.alternate;return e===je||t!==null&&t===je}function ly(e,t){_s=La=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function cy(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,xd(e,r)}}var $a={readContext:It,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useInsertionEffect:tt,useLayoutEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useMutableSource:tt,useSyncExternalStore:tt,useId:tt,unstable_isNewReconciler:!1},kx={readContext:It,useCallback:function(e,t){return Jt().memoizedState=[e,t===void 0?null:t],e},useContext:It,useEffect:ff,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,ea(4194308,4,ty.bind(null,t,e),r)},useLayoutEffect:function(e,t){return ea(4194308,4,e,t)},useInsertionEffect:function(e,t){return ea(4,2,e,t)},useMemo:function(e,t){var r=Jt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=Jt();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=wx.bind(null,je,e),[n.memoizedState,e]},useRef:function(e){var t=Jt();return e={current:e},t.memoizedState=e},useState:pf,useDebugValue:Bd,useDeferredValue:function(e){return Jt().memoizedState=e},useTransition:function(){var e=pf(!1),t=e[0];return e=xx.bind(null,e[1]),Jt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=je,i=Jt();if(Ce){if(r===void 0)throw Error(N(407));r=r()}else{if(r=t(),We===null)throw Error(N(349));An&30||Zg(n,t,r)}i.memoizedState=r;var s={value:r,getSnapshot:t};return i.queue=s,ff(Qg.bind(null,n,s,e),[e]),n.flags|=2048,Vs(9,Gg.bind(null,n,s,r,t),void 0,null),r},useId:function(){var e=Jt(),t=We.identifierPrefix;if(Ce){var r=hr,n=fr;r=(n&~(1<<32-Ht(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=Fs++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=vx++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Sx={readContext:It,useCallback:ny,useContext:It,useEffect:Fd,useImperativeHandle:ry,useInsertionEffect:Xg,useLayoutEffect:ey,useMemo:iy,useReducer:pc,useRef:Jg,useState:function(){return pc(Bs)},useDebugValue:Bd,useDeferredValue:function(e){var t=Mt();return sy(t,$e.memoizedState,e)},useTransition:function(){var e=pc(Bs)[0],t=Mt().memoizedState;return[e,t]},useMutableSource:Wg,useSyncExternalStore:qg,useId:oy,unstable_isNewReconciler:!1},Cx={readContext:It,useCallback:ny,useContext:It,useEffect:Fd,useImperativeHandle:ry,useInsertionEffect:Xg,useLayoutEffect:ey,useMemo:iy,useReducer:fc,useRef:Jg,useState:function(){return fc(Bs)},useDebugValue:Bd,useDeferredValue:function(e){var t=Mt();return $e===null?t.memoizedState=e:sy(t,$e.memoizedState,e)},useTransition:function(){var e=fc(Bs)[0],t=Mt().memoizedState;return[e,t]},useMutableSource:Wg,useSyncExternalStore:qg,useId:oy,unstable_isNewReconciler:!1};function Ft(e,t){if(e&&e.defaultProps){t=be({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function pu(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:be({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var pl={isMounted:function(e){return(e=e._reactInternals)?Ln(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=pt(),i=Zr(e),s=mr(n,i);s.payload=t,r!=null&&(s.callback=r),t=Wr(e,s,i),t!==null&&(Wt(t,e,i,n),Jo(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=pt(),i=Zr(e),s=mr(n,i);s.tag=1,s.payload=t,r!=null&&(s.callback=r),t=Wr(e,s,i),t!==null&&(Wt(t,e,i,n),Jo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=pt(),n=Zr(e),i=mr(r,n);i.tag=2,t!=null&&(i.callback=t),t=Wr(e,i,n),t!==null&&(Wt(t,e,n,r),Jo(t,e,n))}};function hf(e,t,r,n,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,s,o):t.prototype&&t.prototype.isPureReactComponent?!Is(r,n)||!Is(i,s):!0}function uy(e,t,r){var n=!1,i=Kr,s=t.contextType;return typeof s=="object"&&s!==null?s=It(s):(i=wt(t)?Tn:st.current,n=t.contextTypes,s=(n=n!=null)?yi(e,i):Kr),t=new t(r,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=pl,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function mf(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&pl.enqueueReplaceState(t,t.state,null)}function fu(e,t,r,n){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},zd(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=It(s):(s=wt(t)?Tn:st.current,i.context=yi(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(pu(e,t,s,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&pl.enqueueReplaceState(i,i.state,null),Ia(e,r,i,n),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function _i(e,t){try{var r="",n=t;do r+=J1(n),n=n.return;while(n);var i=r}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function hc(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function hu(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Ex=typeof WeakMap=="function"?WeakMap:Map;function dy(e,t,r){r=mr(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Ua||(Ua=!0,Cu=n),hu(e,t)},r}function py(e,t,r){r=mr(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=t.value;r.payload=function(){return n(i)},r.callback=function(){hu(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(r.callback=function(){hu(e,t),typeof n!="function"&&(qr===null?qr=new Set([this]):qr.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),r}function gf(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new Ex;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(r)||(i.add(r),e=Dx.bind(null,e,t,r),t.then(e,e))}function yf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function vf(e,t,r,n,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=mr(-1,1),t.tag=2,Wr(r,t,1))),r.lanes|=1),e)}var jx=_r.ReactCurrentOwner,yt=!1;function ut(e,t,r,n){t.child=e===null?Fg(t,null,r,n):xi(t,e.child,r,n)}function xf(e,t,r,n,i){r=r.render;var s=t.ref;return hi(t,i),n=Dd(e,t,r,n,s,i),r=Ud(),e!==null&&!yt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,xr(e,t,i)):(Ce&&r&&bd(t),t.flags|=1,ut(e,t,n,i),t.child)}function wf(e,t,r,n,i){if(e===null){var s=r.type;return typeof s=="function"&&!Yd(s)&&s.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=s,fy(e,t,s,n,i)):(e=ia(r.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(r=r.compare,r=r!==null?r:Is,r(o,n)&&e.ref===t.ref)return xr(e,t,i)}return t.flags|=1,e=Gr(s,n),e.ref=t.ref,e.return=t,t.child=e}function fy(e,t,r,n,i){if(e!==null){var s=e.memoizedProps;if(Is(s,n)&&e.ref===t.ref)if(yt=!1,t.pendingProps=n=s,(e.lanes&i)!==0)e.flags&131072&&(yt=!0);else return t.lanes=e.lanes,xr(e,t,i)}return mu(e,t,r,n,i)}function hy(e,t,r){var n=t.pendingProps,i=n.children,s=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},we(ai,Ct),Ct|=r;else{if(!(r&1073741824))return e=s!==null?s.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,we(ai,Ct),Ct|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=s!==null?s.baseLanes:r,we(ai,Ct),Ct|=n}else s!==null?(n=s.baseLanes|r,t.memoizedState=null):n=r,we(ai,Ct),Ct|=n;return ut(e,t,i,r),t.child}function my(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function mu(e,t,r,n,i){var s=wt(r)?Tn:st.current;return s=yi(t,s),hi(t,i),r=Dd(e,t,r,n,s,i),n=Ud(),e!==null&&!yt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,xr(e,t,i)):(Ce&&n&&bd(t),t.flags|=1,ut(e,t,r,i),t.child)}function _f(e,t,r,n,i){if(wt(r)){var s=!0;Ra(t)}else s=!1;if(hi(t,i),t.stateNode===null)ta(e,t),uy(t,r,n),fu(t,r,n,i),n=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var c=o.context,u=r.contextType;typeof u=="object"&&u!==null?u=It(u):(u=wt(r)?Tn:st.current,u=yi(t,u));var d=r.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==n||c!==u)&&mf(t,o,n,u),Nr=!1;var v=t.memoizedState;o.state=v,Ia(t,n,o,i),c=t.memoizedState,l!==n||v!==c||xt.current||Nr?(typeof d=="function"&&(pu(t,r,d,n),c=t.memoizedState),(l=Nr||hf(t,r,l,n,v,c,u))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=c),o.props=n,o.state=c,o.context=u,n=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{o=t.stateNode,Vg(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Ft(t.type,l),o.props=u,p=t.pendingProps,v=o.context,c=r.contextType,typeof c=="object"&&c!==null?c=It(c):(c=wt(r)?Tn:st.current,c=yi(t,c));var k=r.getDerivedStateFromProps;(d=typeof k=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||v!==c)&&mf(t,o,n,c),Nr=!1,v=t.memoizedState,o.state=v,Ia(t,n,o,i);var x=t.memoizedState;l!==p||v!==x||xt.current||Nr?(typeof k=="function"&&(pu(t,r,k,n),x=t.memoizedState),(u=Nr||hf(t,r,u,n,v,x,c)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(n,x,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(n,x,c)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=x),o.props=n,o.state=x,o.context=c,n=u):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),n=!1)}return gu(e,t,r,n,s,i)}function gu(e,t,r,n,i,s){my(e,t);var o=(t.flags&128)!==0;if(!n&&!o)return i&&of(t,r,!1),xr(e,t,s);n=t.stateNode,jx.current=t;var l=o&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&o?(t.child=xi(t,e.child,null,s),t.child=xi(t,null,l,s)):ut(e,t,l,s),t.memoizedState=n.state,i&&of(t,r,!0),t.child}function gy(e){var t=e.stateNode;t.pendingContext?sf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&sf(e,t.context,!1),Id(e,t.containerInfo)}function kf(e,t,r,n,i){return vi(),Td(i),t.flags|=256,ut(e,t,r,n),t.child}var yu={dehydrated:null,treeContext:null,retryLane:0};function vu(e){return{baseLanes:e,cachePool:null,transitions:null}}function yy(e,t,r){var n=t.pendingProps,i=Ee.current,s=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),we(Ee,i&1),e===null)return uu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=n.children,e=n.fallback,s?(n=t.mode,s=t.child,o={mode:"hidden",children:o},!(n&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ml(o,n,0,null),e=Cn(e,n,r,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=vu(r),t.memoizedState=yu,e):Vd(t,o));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return bx(e,t,o,n,l,i,r);if(s){s=n.fallback,o=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:n.children};return!(o&1)&&t.child!==i?(n=t.child,n.childLanes=0,n.pendingProps=c,t.deletions=null):(n=Gr(i,c),n.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Gr(l,s):(s=Cn(s,o,r,null),s.flags|=2),s.return=t,n.return=t,n.sibling=s,t.child=n,n=s,s=t.child,o=e.child.memoizedState,o=o===null?vu(r):{baseLanes:o.baseLanes|r,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~r,t.memoizedState=yu,n}return s=e.child,e=s.sibling,n=Gr(s,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function Vd(e,t){return t=ml({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Io(e,t,r,n){return n!==null&&Td(n),xi(t,e.child,null,r),e=Vd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function bx(e,t,r,n,i,s,o){if(r)return t.flags&256?(t.flags&=-257,n=hc(Error(N(422))),Io(e,t,o,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=n.fallback,i=t.mode,n=ml({mode:"visible",children:n.children},i,0,null),s=Cn(s,i,o,null),s.flags|=2,n.return=t,s.return=t,n.sibling=s,t.child=n,t.mode&1&&xi(t,e.child,null,o),t.child.memoizedState=vu(o),t.memoizedState=yu,s);if(!(t.mode&1))return Io(e,t,o,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var l=n.dgst;return n=l,s=Error(N(419)),n=hc(s,n,void 0),Io(e,t,o,n)}if(l=(o&e.childLanes)!==0,yt||l){if(n=We,n!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(n.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,vr(e,i),Wt(n,e,i,-1))}return Qd(),n=hc(Error(N(421))),Io(e,t,o,n)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Ux.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Et=Hr(i.nextSibling),jt=t,Ce=!0,Vt=null,e!==null&&(At[Nt++]=fr,At[Nt++]=hr,At[Nt++]=Rn,fr=e.id,hr=e.overflow,Rn=t),t=Vd(t,n.children),t.flags|=4096,t)}function Sf(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),du(e.return,t,r)}function mc(e,t,r,n,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=n,s.tail=r,s.tailMode=i)}function vy(e,t,r){var n=t.pendingProps,i=n.revealOrder,s=n.tail;if(ut(e,t,n.children,r),n=Ee.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Sf(e,r,t);else if(e.tag===19)Sf(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(we(Ee,n),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&Ma(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),mc(t,!1,i,r,s);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ma(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}mc(t,!0,r,null,s);break;case"together":mc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ta(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function xr(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Nn|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,r=Gr(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Gr(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Px(e,t,r){switch(t.tag){case 3:gy(t),vi();break;case 5:Hg(t);break;case 1:wt(t.type)&&Ra(t);break;case 4:Id(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,i=t.memoizedProps.value;we(Oa,n._currentValue),n._currentValue=i;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(we(Ee,Ee.current&1),t.flags|=128,null):r&t.child.childLanes?yy(e,t,r):(we(Ee,Ee.current&1),e=xr(e,t,r),e!==null?e.sibling:null);we(Ee,Ee.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return vy(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),we(Ee,Ee.current),n)break;return null;case 22:case 23:return t.lanes=0,hy(e,t,r)}return xr(e,t,r)}var xy,xu,wy,_y;xy=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};xu=function(){};wy=function(e,t,r,n){var i=e.memoizedProps;if(i!==n){e=t.stateNode,yn(rr.current);var s=null;switch(r){case"input":i=Fc(e,i),n=Fc(e,n),s=[];break;case"select":i=be({},i,{value:void 0}),n=be({},n,{value:void 0}),s=[];break;case"textarea":i=Hc(e,i),n=Hc(e,n),s=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Pa)}qc(r,n);var o;r=null;for(u in i)if(!n.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(r||(r={}),r[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ps.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in n){var c=n[u];if(l=i!=null?i[u]:void 0,n.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(r||(r={}),r[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(r||(r={}),r[o]=c[o])}else r||(s||(s=[]),s.push(u,r)),r=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ps.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&_e("scroll",e),s||l===c||(s=[])):(s=s||[]).push(u,c))}r&&(s=s||[]).push("style",r);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};_y=function(e,t,r,n){r!==n&&(t.flags|=4)};function Xi(e,t){if(!Ce)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function rt(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function Tx(e,t,r){var n=t.pendingProps;switch(Pd(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rt(t),null;case 1:return wt(t.type)&&Ta(),rt(t),null;case 3:return n=t.stateNode,wi(),Se(xt),Se(st),Ld(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Oo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Vt!==null&&(bu(Vt),Vt=null))),xu(e,t),rt(t),null;case 5:Md(t);var i=yn(Us.current);if(r=t.type,e!==null&&t.stateNode!=null)wy(e,t,r,n,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(N(166));return rt(t),null}if(e=yn(rr.current),Oo(t)){n=t.stateNode,r=t.type;var s=t.memoizedProps;switch(n[er]=t,n[$s]=s,e=(t.mode&1)!==0,r){case"dialog":_e("cancel",n),_e("close",n);break;case"iframe":case"object":case"embed":_e("load",n);break;case"video":case"audio":for(i=0;i<us.length;i++)_e(us[i],n);break;case"source":_e("error",n);break;case"img":case"image":case"link":_e("error",n),_e("load",n);break;case"details":_e("toggle",n);break;case"input":Ap(n,s),_e("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!s.multiple},_e("invalid",n);break;case"textarea":Op(n,s),_e("invalid",n)}qc(r,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?n.textContent!==l&&(s.suppressHydrationWarning!==!0&&No(n.textContent,l,e),i=["children",l]):typeof l=="number"&&n.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&No(n.textContent,l,e),i=["children",""+l]):Ps.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&_e("scroll",n)}switch(r){case"input":Co(n),Np(n,s,!0);break;case"textarea":Co(n),zp(n);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(n.onclick=Pa)}n=i,t.updateQueue=n,n!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Qm(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=o.createElement(r,{is:n.is}):(e=o.createElement(r),r==="select"&&(o=e,n.multiple?o.multiple=!0:n.size&&(o.size=n.size))):e=o.createElementNS(e,r),e[er]=t,e[$s]=n,xy(e,t,!1,!1),t.stateNode=e;e:{switch(o=Zc(r,n),r){case"dialog":_e("cancel",e),_e("close",e),i=n;break;case"iframe":case"object":case"embed":_e("load",e),i=n;break;case"video":case"audio":for(i=0;i<us.length;i++)_e(us[i],e);i=n;break;case"source":_e("error",e),i=n;break;case"img":case"image":case"link":_e("error",e),_e("load",e),i=n;break;case"details":_e("toggle",e),i=n;break;case"input":Ap(e,n),i=Fc(e,n),_e("invalid",e);break;case"option":i=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=be({},n,{value:void 0}),_e("invalid",e);break;case"textarea":Op(e,n),i=Hc(e,n),_e("invalid",e);break;default:i=n}qc(r,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?Jm(e,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Ym(e,c)):s==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&Ts(e,c):typeof c=="number"&&Ts(e,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ps.hasOwnProperty(s)?c!=null&&s==="onScroll"&&_e("scroll",e):c!=null&&fd(e,s,c,o))}switch(r){case"input":Co(e),Np(e,n,!1);break;case"textarea":Co(e),zp(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Yr(n.value));break;case"select":e.multiple=!!n.multiple,s=n.value,s!=null?ui(e,!!n.multiple,s,!1):n.defaultValue!=null&&ui(e,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Pa)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return rt(t),null;case 6:if(e&&t.stateNode!=null)_y(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(N(166));if(r=yn(Us.current),yn(rr.current),Oo(t)){if(n=t.stateNode,r=t.memoizedProps,n[er]=t,(s=n.nodeValue!==r)&&(e=jt,e!==null))switch(e.tag){case 3:No(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&No(n.nodeValue,r,(e.mode&1)!==0)}s&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[er]=t,t.stateNode=n}return rt(t),null;case 13:if(Se(Ee),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ce&&Et!==null&&t.mode&1&&!(t.flags&128))Dg(),vi(),t.flags|=98560,s=!1;else if(s=Oo(t),n!==null&&n.dehydrated!==null){if(e===null){if(!s)throw Error(N(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(N(317));s[er]=t}else vi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;rt(t),s=!1}else Vt!==null&&(bu(Vt),Vt=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||Ee.current&1?De===0&&(De=3):Qd())),t.updateQueue!==null&&(t.flags|=4),rt(t),null);case 4:return wi(),xu(e,t),e===null&&Ms(t.stateNode.containerInfo),rt(t),null;case 10:return Nd(t.type._context),rt(t),null;case 17:return wt(t.type)&&Ta(),rt(t),null;case 19:if(Se(Ee),s=t.memoizedState,s===null)return rt(t),null;if(n=(t.flags&128)!==0,o=s.rendering,o===null)if(n)Xi(s,!1);else{if(De!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Ma(e),o!==null){for(t.flags|=128,Xi(s,!1),n=o.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)s=r,e=n,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return we(Ee,Ee.current&1|2),t.child}e=e.sibling}s.tail!==null&&Ae()>ki&&(t.flags|=128,n=!0,Xi(s,!1),t.lanes=4194304)}else{if(!n)if(e=Ma(o),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Xi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ce)return rt(t),null}else 2*Ae()-s.renderingStartTime>ki&&r!==1073741824&&(t.flags|=128,n=!0,Xi(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(r=s.last,r!==null?r.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Ae(),t.sibling=null,r=Ee.current,we(Ee,n?r&1|2:r&1),t):(rt(t),null);case 22:case 23:return Gd(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?Ct&1073741824&&(rt(t),t.subtreeFlags&6&&(t.flags|=8192)):rt(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function Rx(e,t){switch(Pd(t),t.tag){case 1:return wt(t.type)&&Ta(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return wi(),Se(xt),Se(st),Ld(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Md(t),null;case 13:if(Se(Ee),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));vi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Se(Ee),null;case 4:return wi(),null;case 10:return Nd(t.type._context),null;case 22:case 23:return Gd(),null;case 24:return null;default:return null}}var Mo=!1,nt=!1,Ax=typeof WeakSet=="function"?WeakSet:Set,U=null;function oi(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){Te(e,t,n)}else r.current=null}function wu(e,t,r){try{r()}catch(n){Te(e,t,n)}}var Cf=!1;function Nx(e,t){if(nu=Ea,e=jg(),jd(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{r.nodeType,s.nodeType}catch{r=null;break e}var o=0,l=-1,c=-1,u=0,d=0,p=e,v=null;t:for(;;){for(var k;p!==r||i!==0&&p.nodeType!==3||(l=o+i),p!==s||n!==0&&p.nodeType!==3||(c=o+n),p.nodeType===3&&(o+=p.nodeValue.length),(k=p.firstChild)!==null;)v=p,p=k;for(;;){if(p===e)break t;if(v===r&&++u===i&&(l=o),v===s&&++d===n&&(c=o),(k=p.nextSibling)!==null)break;p=v,v=p.parentNode}p=k}r=l===-1||c===-1?null:{start:l,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(iu={focusedElem:e,selectionRange:r},Ea=!1,U=t;U!==null;)if(t=U,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,U=e;else for(;U!==null;){t=U;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var w=x.memoizedProps,_=x.memoizedState,m=t.stateNode,f=m.getSnapshotBeforeUpdate(t.elementType===t.type?w:Ft(t.type,w),_);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(S){Te(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,U=e;break}U=t.return}return x=Cf,Cf=!1,x}function ks(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&wu(t,r,s)}i=i.next}while(i!==n)}}function fl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function _u(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function ky(e){var t=e.alternate;t!==null&&(e.alternate=null,ky(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[er],delete t[$s],delete t[au],delete t[hx],delete t[mx])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Sy(e){return e.tag===5||e.tag===3||e.tag===4}function Ef(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Sy(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ku(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Pa));else if(n!==4&&(e=e.child,e!==null))for(ku(e,t,r),e=e.sibling;e!==null;)ku(e,t,r),e=e.sibling}function Su(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Su(e,t,r),e=e.sibling;e!==null;)Su(e,t,r),e=e.sibling}var Ye=null,Bt=!1;function Er(e,t,r){for(r=r.child;r!==null;)Cy(e,t,r),r=r.sibling}function Cy(e,t,r){if(tr&&typeof tr.onCommitFiberUnmount=="function")try{tr.onCommitFiberUnmount(sl,r)}catch{}switch(r.tag){case 5:nt||oi(r,t);case 6:var n=Ye,i=Bt;Ye=null,Er(e,t,r),Ye=n,Bt=i,Ye!==null&&(Bt?(e=Ye,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Ye.removeChild(r.stateNode));break;case 18:Ye!==null&&(Bt?(e=Ye,r=r.stateNode,e.nodeType===8?lc(e.parentNode,r):e.nodeType===1&&lc(e,r),Os(e)):lc(Ye,r.stateNode));break;case 4:n=Ye,i=Bt,Ye=r.stateNode.containerInfo,Bt=!0,Er(e,t,r),Ye=n,Bt=i;break;case 0:case 11:case 14:case 15:if(!nt&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&wu(r,t,o),i=i.next}while(i!==n)}Er(e,t,r);break;case 1:if(!nt&&(oi(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(l){Te(r,t,l)}Er(e,t,r);break;case 21:Er(e,t,r);break;case 22:r.mode&1?(nt=(n=nt)||r.memoizedState!==null,Er(e,t,r),nt=n):Er(e,t,r);break;default:Er(e,t,r)}}function jf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Ax),t.forEach(function(n){var i=Fx.bind(null,e,n);r.has(n)||(r.add(n),n.then(i,i))})}}function Ut(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var s=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ye=l.stateNode,Bt=!1;break e;case 3:Ye=l.stateNode.containerInfo,Bt=!0;break e;case 4:Ye=l.stateNode.containerInfo,Bt=!0;break e}l=l.return}if(Ye===null)throw Error(N(160));Cy(s,o,i),Ye=null,Bt=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){Te(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ey(t,e),t=t.sibling}function Ey(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ut(t,e),Yt(e),n&4){try{ks(3,e,e.return),fl(3,e)}catch(w){Te(e,e.return,w)}try{ks(5,e,e.return)}catch(w){Te(e,e.return,w)}}break;case 1:Ut(t,e),Yt(e),n&512&&r!==null&&oi(r,r.return);break;case 5:if(Ut(t,e),Yt(e),n&512&&r!==null&&oi(r,r.return),e.flags&32){var i=e.stateNode;try{Ts(i,"")}catch(w){Te(e,e.return,w)}}if(n&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=r!==null?r.memoizedProps:s,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Zm(i,s),Zc(l,o);var u=Zc(l,s);for(o=0;o<c.length;o+=2){var d=c[o],p=c[o+1];d==="style"?Jm(i,p):d==="dangerouslySetInnerHTML"?Ym(i,p):d==="children"?Ts(i,p):fd(i,d,p,u)}switch(l){case"input":Bc(i,s);break;case"textarea":Gm(i,s);break;case"select":var v=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var k=s.value;k!=null?ui(i,!!s.multiple,k,!1):v!==!!s.multiple&&(s.defaultValue!=null?ui(i,!!s.multiple,s.defaultValue,!0):ui(i,!!s.multiple,s.multiple?[]:"",!1))}i[$s]=s}catch(w){Te(e,e.return,w)}}break;case 6:if(Ut(t,e),Yt(e),n&4){if(e.stateNode===null)throw Error(N(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(w){Te(e,e.return,w)}}break;case 3:if(Ut(t,e),Yt(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Os(t.containerInfo)}catch(w){Te(e,e.return,w)}break;case 4:Ut(t,e),Yt(e);break;case 13:Ut(t,e),Yt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(qd=Ae())),n&4&&jf(e);break;case 22:if(d=r!==null&&r.memoizedState!==null,e.mode&1?(nt=(u=nt)||d,Ut(t,e),nt=u):Ut(t,e),Yt(e),n&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(U=e,d=e.child;d!==null;){for(p=U=d;U!==null;){switch(v=U,k=v.child,v.tag){case 0:case 11:case 14:case 15:ks(4,v,v.return);break;case 1:oi(v,v.return);var x=v.stateNode;if(typeof x.componentWillUnmount=="function"){n=v,r=v.return;try{t=n,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(w){Te(n,r,w)}}break;case 5:oi(v,v.return);break;case 22:if(v.memoizedState!==null){Pf(p);continue}}k!==null?(k.return=v,U=k):Pf(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,c=p.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Km("display",o))}catch(w){Te(e,e.return,w)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(w){Te(e,e.return,w)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ut(t,e),Yt(e),n&4&&jf(e);break;case 21:break;default:Ut(t,e),Yt(e)}}function Yt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Sy(r)){var n=r;break e}r=r.return}throw Error(N(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(Ts(i,""),n.flags&=-33);var s=Ef(e);Su(e,s,i);break;case 3:case 4:var o=n.stateNode.containerInfo,l=Ef(e);ku(e,l,o);break;default:throw Error(N(161))}}catch(c){Te(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ox(e,t,r){U=e,jy(e)}function jy(e,t,r){for(var n=(e.mode&1)!==0;U!==null;){var i=U,s=i.child;if(i.tag===22&&n){var o=i.memoizedState!==null||Mo;if(!o){var l=i.alternate,c=l!==null&&l.memoizedState!==null||nt;l=Mo;var u=nt;if(Mo=o,(nt=c)&&!u)for(U=i;U!==null;)o=U,c=o.child,o.tag===22&&o.memoizedState!==null?Tf(i):c!==null?(c.return=o,U=c):Tf(i);for(;s!==null;)U=s,jy(s),s=s.sibling;U=i,Mo=l,nt=u}bf(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,U=s):bf(e)}}function bf(e){for(;U!==null;){var t=U;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:nt||fl(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!nt)if(r===null)n.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:Ft(t.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&df(t,s,n);break;case 3:var o=t.updateQueue;if(o!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}df(t,o,r)}break;case 5:var l=t.stateNode;if(r===null&&t.flags&4){r=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Os(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}nt||t.flags&512&&_u(t)}catch(v){Te(t,t.return,v)}}if(t===e){U=null;break}if(r=t.sibling,r!==null){r.return=t.return,U=r;break}U=t.return}}function Pf(e){for(;U!==null;){var t=U;if(t===e){U=null;break}var r=t.sibling;if(r!==null){r.return=t.return,U=r;break}U=t.return}}function Tf(e){for(;U!==null;){var t=U;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{fl(4,t)}catch(c){Te(t,r,c)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var i=t.return;try{n.componentDidMount()}catch(c){Te(t,i,c)}}var s=t.return;try{_u(t)}catch(c){Te(t,s,c)}break;case 5:var o=t.return;try{_u(t)}catch(c){Te(t,o,c)}}}catch(c){Te(t,t.return,c)}if(t===e){U=null;break}var l=t.sibling;if(l!==null){l.return=t.return,U=l;break}U=t.return}}var zx=Math.ceil,Da=_r.ReactCurrentDispatcher,Hd=_r.ReactCurrentOwner,zt=_r.ReactCurrentBatchConfig,ue=0,We=null,Oe=null,Ke=0,Ct=0,ai=rn(0),De=0,Hs=null,Nn=0,hl=0,Wd=0,Ss=null,gt=null,qd=0,ki=1/0,cr=null,Ua=!1,Cu=null,qr=null,Lo=!1,$r=null,Fa=0,Cs=0,Eu=null,ra=-1,na=0;function pt(){return ue&6?Ae():ra!==-1?ra:ra=Ae()}function Zr(e){return e.mode&1?ue&2&&Ke!==0?Ke&-Ke:yx.transition!==null?(na===0&&(na=ug()),na):(e=ge,e!==0||(e=window.event,e=e===void 0?16:yg(e.type)),e):1}function Wt(e,t,r,n){if(50<Cs)throw Cs=0,Eu=null,Error(N(185));eo(e,r,n),(!(ue&2)||e!==We)&&(e===We&&(!(ue&2)&&(hl|=r),De===4&&Mr(e,Ke)),_t(e,n),r===1&&ue===0&&!(t.mode&1)&&(ki=Ae()+500,ul&&nn()))}function _t(e,t){var r=e.callbackNode;yv(e,t);var n=Ca(e,e===We?Ke:0);if(n===0)r!==null&&Lp(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&Lp(r),t===1)e.tag===0?gx(Rf.bind(null,e)):Mg(Rf.bind(null,e)),px(function(){!(ue&6)&&nn()}),r=null;else{switch(dg(n)){case 1:r=vd;break;case 4:r=lg;break;case 16:r=Sa;break;case 536870912:r=cg;break;default:r=Sa}r=zy(r,by.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function by(e,t){if(ra=-1,na=0,ue&6)throw Error(N(327));var r=e.callbackNode;if(mi()&&e.callbackNode!==r)return null;var n=Ca(e,e===We?Ke:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=Ba(e,n);else{t=n;var i=ue;ue|=2;var s=Ty();(We!==e||Ke!==t)&&(cr=null,ki=Ae()+500,Sn(e,t));do try{Lx();break}catch(l){Py(e,l)}while(1);Ad(),Da.current=s,ue=i,Oe!==null?t=0:(We=null,Ke=0,t=De)}if(t!==0){if(t===2&&(i=Jc(e),i!==0&&(n=i,t=ju(e,i))),t===1)throw r=Hs,Sn(e,0),Mr(e,n),_t(e,Ae()),r;if(t===6)Mr(e,n);else{if(i=e.current.alternate,!(n&30)&&!Ix(i)&&(t=Ba(e,n),t===2&&(s=Jc(e),s!==0&&(n=s,t=ju(e,s))),t===1))throw r=Hs,Sn(e,0),Mr(e,n),_t(e,Ae()),r;switch(e.finishedWork=i,e.finishedLanes=n,t){case 0:case 1:throw Error(N(345));case 2:hn(e,gt,cr);break;case 3:if(Mr(e,n),(n&130023424)===n&&(t=qd+500-Ae(),10<t)){if(Ca(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){pt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ou(hn.bind(null,e,gt,cr),t);break}hn(e,gt,cr);break;case 4:if(Mr(e,n),(n&4194240)===n)break;for(t=e.eventTimes,i=-1;0<n;){var o=31-Ht(n);s=1<<o,o=t[o],o>i&&(i=o),n&=~s}if(n=i,n=Ae()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*zx(n/1960))-n,10<n){e.timeoutHandle=ou(hn.bind(null,e,gt,cr),n);break}hn(e,gt,cr);break;case 5:hn(e,gt,cr);break;default:throw Error(N(329))}}}return _t(e,Ae()),e.callbackNode===r?by.bind(null,e):null}function ju(e,t){var r=Ss;return e.current.memoizedState.isDehydrated&&(Sn(e,t).flags|=256),e=Ba(e,t),e!==2&&(t=gt,gt=r,t!==null&&bu(t)),e}function bu(e){gt===null?gt=e:gt.push.apply(gt,e)}function Ix(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],s=i.getSnapshot;i=i.value;try{if(!Gt(s(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Mr(e,t){for(t&=~Wd,t&=~hl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Ht(t),n=1<<r;e[r]=-1,t&=~n}}function Rf(e){if(ue&6)throw Error(N(327));mi();var t=Ca(e,0);if(!(t&1))return _t(e,Ae()),null;var r=Ba(e,t);if(e.tag!==0&&r===2){var n=Jc(e);n!==0&&(t=n,r=ju(e,n))}if(r===1)throw r=Hs,Sn(e,0),Mr(e,t),_t(e,Ae()),r;if(r===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,hn(e,gt,cr),_t(e,Ae()),null}function Zd(e,t){var r=ue;ue|=1;try{return e(t)}finally{ue=r,ue===0&&(ki=Ae()+500,ul&&nn())}}function On(e){$r!==null&&$r.tag===0&&!(ue&6)&&mi();var t=ue;ue|=1;var r=zt.transition,n=ge;try{if(zt.transition=null,ge=1,e)return e()}finally{ge=n,zt.transition=r,ue=t,!(ue&6)&&nn()}}function Gd(){Ct=ai.current,Se(ai)}function Sn(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,dx(r)),Oe!==null)for(r=Oe.return;r!==null;){var n=r;switch(Pd(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Ta();break;case 3:wi(),Se(xt),Se(st),Ld();break;case 5:Md(n);break;case 4:wi();break;case 13:Se(Ee);break;case 19:Se(Ee);break;case 10:Nd(n.type._context);break;case 22:case 23:Gd()}r=r.return}if(We=e,Oe=e=Gr(e.current,null),Ke=Ct=t,De=0,Hs=null,Wd=hl=Nn=0,gt=Ss=null,gn!==null){for(t=0;t<gn.length;t++)if(r=gn[t],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,s=r.pending;if(s!==null){var o=s.next;s.next=i,n.next=o}r.pending=n}gn=null}return e}function Py(e,t){do{var r=Oe;try{if(Ad(),Xo.current=$a,La){for(var n=je.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}La=!1}if(An=0,Ve=$e=je=null,_s=!1,Fs=0,Hd.current=null,r===null||r.return===null){De=1,Hs=t,Oe=null;break}e:{var s=e,o=r.return,l=r,c=t;if(t=Ke,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var v=d.alternate;v?(d.updateQueue=v.updateQueue,d.memoizedState=v.memoizedState,d.lanes=v.lanes):(d.updateQueue=null,d.memoizedState=null)}var k=yf(o);if(k!==null){k.flags&=-257,vf(k,o,l,s,t),k.mode&1&&gf(s,u,t),t=k,c=u;var x=t.updateQueue;if(x===null){var w=new Set;w.add(c),t.updateQueue=w}else x.add(c);break e}else{if(!(t&1)){gf(s,u,t),Qd();break e}c=Error(N(426))}}else if(Ce&&l.mode&1){var _=yf(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),vf(_,o,l,s,t),Td(_i(c,l));break e}}s=c=_i(c,l),De!==4&&(De=2),Ss===null?Ss=[s]:Ss.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var m=dy(s,c,t);uf(s,m);break e;case 1:l=c;var f=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(qr===null||!qr.has(g)))){s.flags|=65536,t&=-t,s.lanes|=t;var S=py(s,l,t);uf(s,S);break e}}s=s.return}while(s!==null)}Ay(r)}catch(T){t=T,Oe===r&&r!==null&&(Oe=r=r.return);continue}break}while(1)}function Ty(){var e=Da.current;return Da.current=$a,e===null?$a:e}function Qd(){(De===0||De===3||De===2)&&(De=4),We===null||!(Nn&268435455)&&!(hl&268435455)||Mr(We,Ke)}function Ba(e,t){var r=ue;ue|=2;var n=Ty();(We!==e||Ke!==t)&&(cr=null,Sn(e,t));do try{Mx();break}catch(i){Py(e,i)}while(1);if(Ad(),ue=r,Da.current=n,Oe!==null)throw Error(N(261));return We=null,Ke=0,De}function Mx(){for(;Oe!==null;)Ry(Oe)}function Lx(){for(;Oe!==null&&!lv();)Ry(Oe)}function Ry(e){var t=Oy(e.alternate,e,Ct);e.memoizedProps=e.pendingProps,t===null?Ay(e):Oe=t,Hd.current=null}function Ay(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=Rx(r,t),r!==null){r.flags&=32767,Oe=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{De=6,Oe=null;return}}else if(r=Tx(r,t,Ct),r!==null){Oe=r;return}if(t=t.sibling,t!==null){Oe=t;return}Oe=t=e}while(t!==null);De===0&&(De=5)}function hn(e,t,r){var n=ge,i=zt.transition;try{zt.transition=null,ge=1,$x(e,t,r,n)}finally{zt.transition=i,ge=n}return null}function $x(e,t,r,n){do mi();while($r!==null);if(ue&6)throw Error(N(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var s=r.lanes|r.childLanes;if(vv(e,s),e===We&&(Oe=We=null,Ke=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Lo||(Lo=!0,zy(Sa,function(){return mi(),null})),s=(r.flags&15990)!==0,r.subtreeFlags&15990||s){s=zt.transition,zt.transition=null;var o=ge;ge=1;var l=ue;ue|=4,Hd.current=null,Nx(e,r),Ey(r,e),ix(iu),Ea=!!nu,iu=nu=null,e.current=r,Ox(r),cv(),ue=l,ge=o,zt.transition=s}else e.current=r;if(Lo&&(Lo=!1,$r=e,Fa=i),s=e.pendingLanes,s===0&&(qr=null),pv(r.stateNode),_t(e,Ae()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(Ua)throw Ua=!1,e=Cu,Cu=null,e;return Fa&1&&e.tag!==0&&mi(),s=e.pendingLanes,s&1?e===Eu?Cs++:(Cs=0,Eu=e):Cs=0,nn(),null}function mi(){if($r!==null){var e=dg(Fa),t=zt.transition,r=ge;try{if(zt.transition=null,ge=16>e?16:e,$r===null)var n=!1;else{if(e=$r,$r=null,Fa=0,ue&6)throw Error(N(331));var i=ue;for(ue|=4,U=e.current;U!==null;){var s=U,o=s.child;if(U.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(U=u;U!==null;){var d=U;switch(d.tag){case 0:case 11:case 15:ks(8,d,s)}var p=d.child;if(p!==null)p.return=d,U=p;else for(;U!==null;){d=U;var v=d.sibling,k=d.return;if(ky(d),d===u){U=null;break}if(v!==null){v.return=k,U=v;break}U=k}}}var x=s.alternate;if(x!==null){var w=x.child;if(w!==null){x.child=null;do{var _=w.sibling;w.sibling=null,w=_}while(w!==null)}}U=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,U=o;else e:for(;U!==null;){if(s=U,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ks(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,U=m;break e}U=s.return}}var f=e.current;for(U=f;U!==null;){o=U;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,U=g;else e:for(o=f;U!==null;){if(l=U,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:fl(9,l)}}catch(T){Te(l,l.return,T)}if(l===o){U=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,U=S;break e}U=l.return}}if(ue=i,nn(),tr&&typeof tr.onPostCommitFiberRoot=="function")try{tr.onPostCommitFiberRoot(sl,e)}catch{}n=!0}return n}finally{ge=r,zt.transition=t}}return!1}function Af(e,t,r){t=_i(r,t),t=dy(e,t,1),e=Wr(e,t,1),t=pt(),e!==null&&(eo(e,1,t),_t(e,t))}function Te(e,t,r){if(e.tag===3)Af(e,e,r);else for(;t!==null;){if(t.tag===3){Af(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(qr===null||!qr.has(n))){e=_i(r,e),e=py(t,e,1),t=Wr(t,e,1),e=pt(),t!==null&&(eo(t,1,e),_t(t,e));break}}t=t.return}}function Dx(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=pt(),e.pingedLanes|=e.suspendedLanes&r,We===e&&(Ke&r)===r&&(De===4||De===3&&(Ke&130023424)===Ke&&500>Ae()-qd?Sn(e,0):Wd|=r),_t(e,t)}function Ny(e,t){t===0&&(e.mode&1?(t=bo,bo<<=1,!(bo&130023424)&&(bo=4194304)):t=1);var r=pt();e=vr(e,t),e!==null&&(eo(e,t,r),_t(e,r))}function Ux(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Ny(e,r)}function Fx(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(N(314))}n!==null&&n.delete(t),Ny(e,r)}var Oy;Oy=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||xt.current)yt=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return yt=!1,Px(e,t,r);yt=!!(e.flags&131072)}else yt=!1,Ce&&t.flags&1048576&&Lg(t,Na,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;ta(e,t),e=t.pendingProps;var i=yi(t,st.current);hi(t,r),i=Dd(null,t,n,e,i,r);var s=Ud();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,wt(n)?(s=!0,Ra(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,zd(t),i.updater=pl,t.stateNode=i,i._reactInternals=t,fu(t,n,e,r),t=gu(null,t,n,!0,s,r)):(t.tag=0,Ce&&s&&bd(t),ut(null,t,i,r),t=t.child),t;case 16:n=t.elementType;e:{switch(ta(e,t),e=t.pendingProps,i=n._init,n=i(n._payload),t.type=n,i=t.tag=Vx(n),e=Ft(n,e),i){case 0:t=mu(null,t,n,e,r);break e;case 1:t=_f(null,t,n,e,r);break e;case 11:t=xf(null,t,n,e,r);break e;case 14:t=wf(null,t,n,Ft(n.type,e),r);break e}throw Error(N(306,n,""))}return t;case 0:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Ft(n,i),mu(e,t,n,i,r);case 1:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Ft(n,i),_f(e,t,n,i,r);case 3:e:{if(gy(t),e===null)throw Error(N(387));n=t.pendingProps,s=t.memoizedState,i=s.element,Vg(e,t),Ia(t,n,null,r);var o=t.memoizedState;if(n=o.element,s.isDehydrated)if(s={element:n,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=_i(Error(N(423)),t),t=kf(e,t,n,r,i);break e}else if(n!==i){i=_i(Error(N(424)),t),t=kf(e,t,n,r,i);break e}else for(Et=Hr(t.stateNode.containerInfo.firstChild),jt=t,Ce=!0,Vt=null,r=Fg(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(vi(),n===i){t=xr(e,t,r);break e}ut(e,t,n,r)}t=t.child}return t;case 5:return Hg(t),e===null&&uu(t),n=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,su(n,i)?o=null:s!==null&&su(n,s)&&(t.flags|=32),my(e,t),ut(e,t,o,r),t.child;case 6:return e===null&&uu(t),null;case 13:return yy(e,t,r);case 4:return Id(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=xi(t,null,n,r):ut(e,t,n,r),t.child;case 11:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Ft(n,i),xf(e,t,n,i,r);case 7:return ut(e,t,t.pendingProps,r),t.child;case 8:return ut(e,t,t.pendingProps.children,r),t.child;case 12:return ut(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,we(Oa,n._currentValue),n._currentValue=o,s!==null)if(Gt(s.value,o)){if(s.children===i.children&&!xt.current){t=xr(e,t,r);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var c=l.firstContext;c!==null;){if(c.context===n){if(s.tag===1){c=mr(-1,r&-r),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}s.lanes|=r,c=s.alternate,c!==null&&(c.lanes|=r),du(s.return,r,t),l.lanes|=r;break}c=c.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(N(341));o.lanes|=r,l=o.alternate,l!==null&&(l.lanes|=r),du(o,r,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ut(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,n=t.pendingProps.children,hi(t,r),i=It(i),n=n(i),t.flags|=1,ut(e,t,n,r),t.child;case 14:return n=t.type,i=Ft(n,t.pendingProps),i=Ft(n.type,i),wf(e,t,n,i,r);case 15:return fy(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Ft(n,i),ta(e,t),t.tag=1,wt(n)?(e=!0,Ra(t)):e=!1,hi(t,r),uy(t,n,i),fu(t,n,i,r),gu(null,t,n,!0,e,r);case 19:return vy(e,t,r);case 22:return hy(e,t,r)}throw Error(N(156,t.tag))};function zy(e,t){return ag(e,t)}function Bx(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ot(e,t,r,n){return new Bx(e,t,r,n)}function Yd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Vx(e){if(typeof e=="function")return Yd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===md)return 11;if(e===gd)return 14}return 2}function Gr(e,t){var r=e.alternate;return r===null?(r=Ot(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function ia(e,t,r,n,i,s){var o=2;if(n=e,typeof e=="function")Yd(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Kn:return Cn(r.children,i,s,t);case hd:o=8,i|=8;break;case Lc:return e=Ot(12,r,t,i|2),e.elementType=Lc,e.lanes=s,e;case $c:return e=Ot(13,r,t,i),e.elementType=$c,e.lanes=s,e;case Dc:return e=Ot(19,r,t,i),e.elementType=Dc,e.lanes=s,e;case Hm:return ml(r,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Bm:o=10;break e;case Vm:o=9;break e;case md:o=11;break e;case gd:o=14;break e;case Ar:o=16,n=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=Ot(o,r,t,i),t.elementType=e,t.type=n,t.lanes=s,t}function Cn(e,t,r,n){return e=Ot(7,e,n,t),e.lanes=r,e}function ml(e,t,r,n){return e=Ot(22,e,n,t),e.elementType=Hm,e.lanes=r,e.stateNode={isHidden:!1},e}function gc(e,t,r){return e=Ot(6,e,null,t),e.lanes=r,e}function yc(e,t,r){return t=Ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Hx(e,t,r,n,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Kl(0),this.expirationTimes=Kl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kl(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Kd(e,t,r,n,i,s,o,l,c){return e=new Hx(e,t,r,l,c),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Ot(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},zd(s),e}function Wx(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yn,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function Iy(e){if(!e)return Kr;e=e._reactInternals;e:{if(Ln(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(wt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var r=e.type;if(wt(r))return Ig(e,r,t)}return t}function My(e,t,r,n,i,s,o,l,c){return e=Kd(r,n,!0,e,i,s,o,l,c),e.context=Iy(null),r=e.current,n=pt(),i=Zr(r),s=mr(n,i),s.callback=t??null,Wr(r,s,i),e.current.lanes=i,eo(e,i,n),_t(e,n),e}function gl(e,t,r,n){var i=t.current,s=pt(),o=Zr(i);return r=Iy(r),t.context===null?t.context=r:t.pendingContext=r,t=mr(s,o),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=Wr(i,t,o),e!==null&&(Wt(e,i,o,s),Jo(e,i,o)),o}function Va(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Nf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Jd(e,t){Nf(e,t),(e=e.alternate)&&Nf(e,t)}function qx(){return null}var Ly=typeof reportError=="function"?reportError:function(e){console.error(e)};function Xd(e){this._internalRoot=e}yl.prototype.render=Xd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));gl(e,t,null,null)};yl.prototype.unmount=Xd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;On(function(){gl(null,e,null,null)}),t[yr]=null}};function yl(e){this._internalRoot=e}yl.prototype.unstable_scheduleHydration=function(e){if(e){var t=hg();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Ir.length&&t!==0&&t<Ir[r].priority;r++);Ir.splice(r,0,e),r===0&&gg(e)}};function ep(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function vl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Of(){}function Zx(e,t,r,n,i){if(i){if(typeof n=="function"){var s=n;n=function(){var u=Va(o);s.call(u)}}var o=My(t,n,e,0,null,!1,!1,"",Of);return e._reactRootContainer=o,e[yr]=o.current,Ms(e.nodeType===8?e.parentNode:e),On(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof n=="function"){var l=n;n=function(){var u=Va(c);l.call(u)}}var c=Kd(e,0,!1,null,null,!1,!1,"",Of);return e._reactRootContainer=c,e[yr]=c.current,Ms(e.nodeType===8?e.parentNode:e),On(function(){gl(t,c,r,n)}),c}function xl(e,t,r,n,i){var s=r._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var c=Va(o);l.call(c)}}gl(t,o,e,i)}else o=Zx(r,t,e,i,n);return Va(o)}pg=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=cs(t.pendingLanes);r!==0&&(xd(t,r|1),_t(t,Ae()),!(ue&6)&&(ki=Ae()+500,nn()))}break;case 13:On(function(){var n=vr(e,1);if(n!==null){var i=pt();Wt(n,e,1,i)}}),Jd(e,1)}};wd=function(e){if(e.tag===13){var t=vr(e,134217728);if(t!==null){var r=pt();Wt(t,e,134217728,r)}Jd(e,134217728)}};fg=function(e){if(e.tag===13){var t=Zr(e),r=vr(e,t);if(r!==null){var n=pt();Wt(r,e,t,n)}Jd(e,t)}};hg=function(){return ge};mg=function(e,t){var r=ge;try{return ge=e,t()}finally{ge=r}};Qc=function(e,t,r){switch(t){case"input":if(Bc(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var i=cl(n);if(!i)throw Error(N(90));qm(n),Bc(n,i)}}}break;case"textarea":Gm(e,r);break;case"select":t=r.value,t!=null&&ui(e,!!r.multiple,t,!1)}};tg=Zd;rg=On;var Gx={usingClientEntryPoint:!1,Events:[ro,ti,cl,Xm,eg,Zd]},es={findFiberByHostInstance:mn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Qx={bundleType:es.bundleType,version:es.version,rendererPackageName:es.rendererPackageName,rendererConfig:es.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_r.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=sg(e),e===null?null:e.stateNode},findFiberByHostInstance:es.findFiberByHostInstance||qx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $o=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$o.isDisabled&&$o.supportsFiber)try{sl=$o.inject(Qx),tr=$o}catch{}}Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gx;Tt.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ep(t))throw Error(N(200));return Wx(e,t,null,r)};Tt.createRoot=function(e,t){if(!ep(e))throw Error(N(299));var r=!1,n="",i=Ly;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Kd(e,1,!1,null,null,r,!1,n,i),e[yr]=t.current,Ms(e.nodeType===8?e.parentNode:e),new Xd(t)};Tt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=sg(t),e=e===null?null:e.stateNode,e};Tt.flushSync=function(e){return On(e)};Tt.hydrate=function(e,t,r){if(!vl(t))throw Error(N(200));return xl(null,e,t,!0,r)};Tt.hydrateRoot=function(e,t,r){if(!ep(e))throw Error(N(405));var n=r!=null&&r.hydratedSources||null,i=!1,s="",o=Ly;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(s=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),t=My(t,null,e,1,r??null,i,!1,s,o),e[yr]=t.current,Ms(e),n)for(e=0;e<n.length;e++)r=n[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new yl(t)};Tt.render=function(e,t,r){if(!vl(t))throw Error(N(200));return xl(null,e,t,!1,r)};Tt.unmountComponentAtNode=function(e){if(!vl(e))throw Error(N(40));return e._reactRootContainer?(On(function(){xl(null,null,e,!1,function(){e._reactRootContainer=null,e[yr]=null})}),!0):!1};Tt.unstable_batchedUpdates=Zd;Tt.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!vl(r))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return xl(e,t,r,!1,n)};Tt.version="18.3.1-next-f1338f8080-20240426";function $y(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($y)}catch(e){console.error(e)}}$y(),$m.exports=Tt;var Yx=$m.exports,zf=Yx;Ic.createRoot=zf.createRoot,Ic.hydrateRoot=zf.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ws(){return Ws=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ws.apply(this,arguments)}var Dr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Dr||(Dr={}));const If="popstate";function Kx(e){e===void 0&&(e={});function t(n,i){let{pathname:s,search:o,hash:l}=n.location;return Pu("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function r(n,i){return typeof i=="string"?i:Uy(i)}return Xx(t,r,null,e)}function ze(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Dy(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Jx(){return Math.random().toString(36).substr(2,8)}function Mf(e,t){return{usr:e.state,key:e.key,idx:t}}function Pu(e,t,r,n){return r===void 0&&(r=null),Ws({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Mi(t):t,{state:r,key:t&&t.key||n||Jx()})}function Uy(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function Mi(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function Xx(e,t,r,n){n===void 0&&(n={});let{window:i=document.defaultView,v5Compat:s=!1}=n,o=i.history,l=Dr.Pop,c=null,u=d();u==null&&(u=0,o.replaceState(Ws({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function p(){l=Dr.Pop;let _=d(),m=_==null?null:_-u;u=_,c&&c({action:l,location:w.location,delta:m})}function v(_,m){l=Dr.Push;let f=Pu(w.location,_,m);r&&r(f,_),u=d()+1;let g=Mf(f,u),S=w.createHref(f);try{o.pushState(g,"",S)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(S)}s&&c&&c({action:l,location:w.location,delta:1})}function k(_,m){l=Dr.Replace;let f=Pu(w.location,_,m);r&&r(f,_),u=d();let g=Mf(f,u),S=w.createHref(f);o.replaceState(g,"",S),s&&c&&c({action:l,location:w.location,delta:0})}function x(_){let m=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof _=="string"?_:Uy(_);return f=f.replace(/ $/,"%20"),ze(m,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,m)}let w={get action(){return l},get location(){return e(i,o)},listen(_){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(If,p),c=_,()=>{i.removeEventListener(If,p),c=null}},createHref(_){return t(i,_)},createURL:x,encodeLocation(_){let m=x(_);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:v,replace:k,go(_){return o.go(_)}};return w}var Lf;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Lf||(Lf={}));function e2(e,t,r){return r===void 0&&(r="/"),t2(e,t,r,!1)}function t2(e,t,r,n){let i=typeof t=="string"?Mi(t):t,s=Vy(i.pathname||"/",r);if(s==null)return null;let o=Fy(e);r2(o);let l=null;for(let c=0;l==null&&c<o.length;++c){let u=f2(s);l=d2(o[c],u,n)}return l}function Fy(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let i=(s,o,l)=>{let c={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};c.relativePath.startsWith("/")&&(ze(c.relativePath.startsWith(n),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(n.length));let u=En([n,c.relativePath]),d=r.concat(c);s.children&&s.children.length>0&&(ze(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Fy(s.children,t,d,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:c2(u,s.index),routesMeta:d})};return e.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let c of By(s.path))i(s,o,c)}),t}function By(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,i=r.endsWith("?"),s=r.replace(/\?$/,"");if(n.length===0)return i?[s,""]:[s];let o=By(n.join("/")),l=[];return l.push(...o.map(c=>c===""?s:[s,c].join("/"))),i&&l.push(...o),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function r2(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:u2(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const n2=/^:[\w-]+$/,i2=3,s2=2,o2=1,a2=10,l2=-2,$f=e=>e==="*";function c2(e,t){let r=e.split("/"),n=r.length;return r.some($f)&&(n+=l2),t&&(n+=s2),r.filter(i=>!$f(i)).reduce((i,s)=>i+(n2.test(s)?i2:s===""?o2:a2),n)}function u2(e,t){return e.length===t.length&&e.slice(0,-1).every((n,i)=>n===t[i])?e[e.length-1]-t[t.length-1]:0}function d2(e,t,r){r===void 0&&(r=!1);let{routesMeta:n}=e,i={},s="/",o=[];for(let l=0;l<n.length;++l){let c=n[l],u=l===n.length-1,d=s==="/"?t:t.slice(s.length)||"/",p=Df({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),v=c.route;if(!p&&u&&r&&!n[n.length-1].route.index&&(p=Df({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},d)),!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:En([s,p.pathname]),pathnameBase:y2(En([s,p.pathnameBase])),route:v}),p.pathnameBase!=="/"&&(s=En([s,p.pathnameBase]))}return o}function Df(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=p2(e.path,e.caseSensitive,e.end),i=t.match(r);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:n.reduce((u,d,p)=>{let{paramName:v,isOptional:k}=d;if(v==="*"){let w=l[p]||"";o=s.slice(0,s.length-w.length).replace(/(.)\/+$/,"$1")}const x=l[p];return k&&!x?u[v]=void 0:u[v]=(x||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:e}}function p2(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),Dy(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,c)=>(n.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(n.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),n]}function f2(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Dy(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Vy(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function h2(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:i=""}=typeof e=="string"?Mi(e):e;return{pathname:r?r.startsWith("/")?r:m2(r,t):t,search:v2(n),hash:x2(i)}}function m2(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?r.length>1&&r.pop():i!=="."&&r.push(i)}),r.length>1?r.join("/"):"/"}function vc(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function g2(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function Hy(e,t){let r=g2(e);return t?r.map((n,i)=>i===r.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function Wy(e,t,r,n){n===void 0&&(n=!1);let i;typeof e=="string"?i=Mi(e):(i=Ws({},e),ze(!i.pathname||!i.pathname.includes("?"),vc("?","pathname","search",i)),ze(!i.pathname||!i.pathname.includes("#"),vc("#","pathname","hash",i)),ze(!i.search||!i.search.includes("#"),vc("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=r;else{let p=t.length-1;if(!n&&o.startsWith("..")){let v=o.split("/");for(;v[0]==="..";)v.shift(),p-=1;i.pathname=v.join("/")}l=p>=0?t[p]:"/"}let c=h2(i,l),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const En=e=>e.join("/").replace(/\/\/+/g,"/"),y2=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),v2=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,x2=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function w2(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const qy=["post","put","patch","delete"];new Set(qy);const _2=["get",...qy];new Set(_2);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qs(){return qs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},qs.apply(this,arguments)}const tp=P.createContext(null),k2=P.createContext(null),io=P.createContext(null),wl=P.createContext(null),$n=P.createContext({outlet:null,matches:[],isDataRoute:!1}),Zy=P.createContext(null);function so(){return P.useContext(wl)!=null}function rp(){return so()||ze(!1),P.useContext(wl).location}function Gy(e){P.useContext(io).static||P.useLayoutEffect(e)}function S2(){let{isDataRoute:e}=P.useContext($n);return e?M2():C2()}function C2(){so()||ze(!1);let e=P.useContext(tp),{basename:t,future:r,navigator:n}=P.useContext(io),{matches:i}=P.useContext($n),{pathname:s}=rp(),o=JSON.stringify(Hy(i,r.v7_relativeSplatPath)),l=P.useRef(!1);return Gy(()=>{l.current=!0}),P.useCallback(function(u,d){if(d===void 0&&(d={}),!l.current)return;if(typeof u=="number"){n.go(u);return}let p=Wy(u,JSON.parse(o),s,d.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:En([t,p.pathname])),(d.replace?n.replace:n.push)(p,d.state,d)},[t,n,o,s,e])}function E2(e,t){return j2(e,t)}function j2(e,t,r,n){so()||ze(!1);let{navigator:i}=P.useContext(io),{matches:s}=P.useContext($n),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let u=rp(),d;if(t){var p;let _=typeof t=="string"?Mi(t):t;c==="/"||(p=_.pathname)!=null&&p.startsWith(c)||ze(!1),d=_}else d=u;let v=d.pathname||"/",k=v;if(c!=="/"){let _=c.replace(/^\//,"").split("/");k="/"+v.replace(/^\//,"").split("/").slice(_.length).join("/")}let x=e2(e,{pathname:k}),w=A2(x&&x.map(_=>Object.assign({},_,{params:Object.assign({},l,_.params),pathname:En([c,i.encodeLocation?i.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?c:En([c,i.encodeLocation?i.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),s,r,n);return t&&w?P.createElement(wl.Provider,{value:{location:qs({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Dr.Pop}},w):w}function b2(){let e=I2(),t=w2(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},t),r?P.createElement("pre",{style:i},r):null,s)}const P2=P.createElement(b2,null);class T2 extends P.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?P.createElement($n.Provider,{value:this.props.routeContext},P.createElement(Zy.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function R2(e){let{routeContext:t,match:r,children:n}=e,i=P.useContext(tp);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),P.createElement($n.Provider,{value:t},n)}function A2(e,t,r,n){var i;if(t===void 0&&(t=[]),r===void 0&&(r=null),n===void 0&&(n=null),e==null){var s;if(!r)return null;if(r.errors)e=r.matches;else if((s=n)!=null&&s.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let o=e,l=(i=r)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||ze(!1),o=o.slice(0,Math.min(o.length,d+1))}let c=!1,u=-1;if(r&&n&&n.v7_partialHydration)for(let d=0;d<o.length;d++){let p=o[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=d),p.route.id){let{loaderData:v,errors:k}=r,x=p.route.loader&&v[p.route.id]===void 0&&(!k||k[p.route.id]===void 0);if(p.route.lazy||x){c=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((d,p,v)=>{let k,x=!1,w=null,_=null;r&&(k=l&&p.route.id?l[p.route.id]:void 0,w=p.route.errorElement||P2,c&&(u<0&&v===0?(L2("route-fallback",!1),x=!0,_=null):u===v&&(x=!0,_=p.route.hydrateFallbackElement||null)));let m=t.concat(o.slice(0,v+1)),f=()=>{let g;return k?g=w:x?g=_:p.route.Component?g=P.createElement(p.route.Component,null):p.route.element?g=p.route.element:g=d,P.createElement(R2,{match:p,routeContext:{outlet:d,matches:m,isDataRoute:r!=null},children:g})};return r&&(p.route.ErrorBoundary||p.route.errorElement||v===0)?P.createElement(T2,{location:r.location,revalidation:r.revalidation,component:w,error:k,children:f(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):f()},null)}var Qy=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Qy||{}),Ha=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ha||{});function N2(e){let t=P.useContext(tp);return t||ze(!1),t}function O2(e){let t=P.useContext(k2);return t||ze(!1),t}function z2(e){let t=P.useContext($n);return t||ze(!1),t}function Yy(e){let t=z2(),r=t.matches[t.matches.length-1];return r.route.id||ze(!1),r.route.id}function I2(){var e;let t=P.useContext(Zy),r=O2(Ha.UseRouteError),n=Yy(Ha.UseRouteError);return t!==void 0?t:(e=r.errors)==null?void 0:e[n]}function M2(){let{router:e}=N2(Qy.UseNavigateStable),t=Yy(Ha.UseNavigateStable),r=P.useRef(!1);return Gy(()=>{r.current=!0}),P.useCallback(function(i,s){s===void 0&&(s={}),r.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,qs({fromRouteId:t},s)))},[e,t])}const Uf={};function L2(e,t,r){!t&&!Uf[e]&&(Uf[e]=!0)}function $2(e,t){e==null||e.v7_startTransition,(e==null?void 0:e.v7_relativeSplatPath)===void 0&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}function Do(e){let{to:t,replace:r,state:n,relative:i}=e;so()||ze(!1);let{future:s,static:o}=P.useContext(io),{matches:l}=P.useContext($n),{pathname:c}=rp(),u=S2(),d=Wy(t,Hy(l,s.v7_relativeSplatPath),c,i==="path"),p=JSON.stringify(d);return P.useEffect(()=>u(JSON.parse(p),{replace:r,state:n,relative:i}),[u,p,i,r,n]),null}function ds(e){ze(!1)}function D2(e){let{basename:t="/",children:r=null,location:n,navigationType:i=Dr.Pop,navigator:s,static:o=!1,future:l}=e;so()&&ze(!1);let c=t.replace(/^\/*/,"/"),u=P.useMemo(()=>({basename:c,navigator:s,static:o,future:qs({v7_relativeSplatPath:!1},l)}),[c,l,s,o]);typeof n=="string"&&(n=Mi(n));let{pathname:d="/",search:p="",hash:v="",state:k=null,key:x="default"}=n,w=P.useMemo(()=>{let _=Vy(d,c);return _==null?null:{location:{pathname:_,search:p,hash:v,state:k,key:x},navigationType:i}},[c,d,p,v,k,x,i]);return w==null?null:P.createElement(io.Provider,{value:u},P.createElement(wl.Provider,{children:r,value:w}))}function U2(e){let{children:t,location:r}=e;return E2(Tu(t),r)}new Promise(()=>{});function Tu(e,t){t===void 0&&(t=[]);let r=[];return P.Children.forEach(e,(n,i)=>{if(!P.isValidElement(n))return;let s=[...t,i];if(n.type===P.Fragment){r.push.apply(r,Tu(n.props.children,s));return}n.type!==ds&&ze(!1),!n.props.index||!n.props.children||ze(!1);let o={id:n.props.id||s.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(o.children=Tu(n.props.children,s)),r.push(o)}),r}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const F2="6";try{window.__reactRouterVersion=F2}catch{}const B2="startTransition",Ff=D1[B2];function V2(e){let{basename:t,children:r,future:n,window:i}=e,s=P.useRef();s.current==null&&(s.current=Kx({window:i,v5Compat:!0}));let o=s.current,[l,c]=P.useState({action:o.action,location:o.location}),{v7_startTransition:u}=n||{},d=P.useCallback(p=>{u&&Ff?Ff(()=>c(p)):c(p)},[c,u]);return P.useLayoutEffect(()=>o.listen(d),[o,d]),P.useEffect(()=>$2(n),[n]),P.createElement(D2,{basename:t,children:r,location:l.location,navigationType:l.action,navigator:o,future:n})}var Bf;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Bf||(Bf={}));var Vf;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Vf||(Vf={}));var vt=function(){return vt=Object.assign||function(t){for(var r,n=1,i=arguments.length;n<i;n++){r=arguments[n];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s])}return t},vt.apply(this,arguments)};function Zs(e,t,r){if(r||arguments.length===2)for(var n=0,i=t.length,s;n<i;n++)(s||!(n in t))&&(s||(s=Array.prototype.slice.call(t,0,n)),s[n]=t[n]);return e.concat(s||Array.prototype.slice.call(t))}var ke="-ms-",Es="-moz-",me="-webkit-",Ky="comm",_l="rule",np="decl",H2="@import",Jy="@keyframes",W2="@layer",Xy=Math.abs,ip=String.fromCharCode,Ru=Object.assign;function q2(e,t){return He(e,0)^45?(((t<<2^He(e,0))<<2^He(e,1))<<2^He(e,2))<<2^He(e,3):0}function e0(e){return e.trim()}function ur(e,t){return(e=t.exec(e))?e[0]:e}function ne(e,t,r){return e.replace(t,r)}function sa(e,t,r){return e.indexOf(t,r)}function He(e,t){return e.charCodeAt(t)|0}function Si(e,t,r){return e.slice(t,r)}function Xt(e){return e.length}function t0(e){return e.length}function ps(e,t){return t.push(e),e}function Z2(e,t){return e.map(t).join("")}function Hf(e,t){return e.filter(function(r){return!ur(r,t)})}var kl=1,Ci=1,r0=0,Lt=0,Ne=0,Li="";function Sl(e,t,r,n,i,s,o,l){return{value:e,root:t,parent:r,type:n,props:i,children:s,line:kl,column:Ci,length:o,return:"",siblings:l}}function Tr(e,t){return Ru(Sl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Hn(e){for(;e.root;)e=Tr(e.root,{children:[e]});ps(e,e.siblings)}function G2(){return Ne}function Q2(){return Ne=Lt>0?He(Li,--Lt):0,Ci--,Ne===10&&(Ci=1,kl--),Ne}function qt(){return Ne=Lt<r0?He(Li,Lt++):0,Ci++,Ne===10&&(Ci=1,kl++),Ne}function jn(){return He(Li,Lt)}function oa(){return Lt}function Cl(e,t){return Si(Li,e,t)}function Au(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Y2(e){return kl=Ci=1,r0=Xt(Li=e),Lt=0,[]}function K2(e){return Li="",e}function xc(e){return e0(Cl(Lt-1,Nu(e===91?e+2:e===40?e+1:e)))}function J2(e){for(;(Ne=jn())&&Ne<33;)qt();return Au(e)>2||Au(Ne)>3?"":" "}function X2(e,t){for(;--t&&qt()&&!(Ne<48||Ne>102||Ne>57&&Ne<65||Ne>70&&Ne<97););return Cl(e,oa()+(t<6&&jn()==32&&qt()==32))}function Nu(e){for(;qt();)switch(Ne){case e:return Lt;case 34:case 39:e!==34&&e!==39&&Nu(Ne);break;case 40:e===41&&Nu(e);break;case 92:qt();break}return Lt}function ew(e,t){for(;qt()&&e+Ne!==47+10;)if(e+Ne===42+42&&jn()===47)break;return"/*"+Cl(t,Lt-1)+"*"+ip(e===47?e:qt())}function tw(e){for(;!Au(jn());)qt();return Cl(e,Lt)}function rw(e){return K2(aa("",null,null,null,[""],e=Y2(e),0,[0],e))}function aa(e,t,r,n,i,s,o,l,c){for(var u=0,d=0,p=o,v=0,k=0,x=0,w=1,_=1,m=1,f=0,g="",S=i,T=s,A=n,b=g;_;)switch(x=f,f=qt()){case 40:if(x!=108&&He(b,p-1)==58){sa(b+=ne(xc(f),"&","&\f"),"&\f",Xy(u?l[u-1]:0))!=-1&&(m=-1);break}case 34:case 39:case 91:b+=xc(f);break;case 9:case 10:case 13:case 32:b+=J2(x);break;case 92:b+=X2(oa()-1,7);continue;case 47:switch(jn()){case 42:case 47:ps(nw(ew(qt(),oa()),t,r,c),c);break;default:b+="/"}break;case 123*w:l[u++]=Xt(b)*m;case 125*w:case 59:case 0:switch(f){case 0:case 125:_=0;case 59+d:m==-1&&(b=ne(b,/\f/g,"")),k>0&&Xt(b)-p&&ps(k>32?qf(b+";",n,r,p-1,c):qf(ne(b," ","")+";",n,r,p-2,c),c);break;case 59:b+=";";default:if(ps(A=Wf(b,t,r,u,d,i,l,g,S=[],T=[],p,s),s),f===123)if(d===0)aa(b,t,A,A,S,s,p,l,T);else switch(v===99&&He(b,3)===110?100:v){case 100:case 108:case 109:case 115:aa(e,A,A,n&&ps(Wf(e,A,A,0,0,i,l,g,i,S=[],p,T),T),i,T,p,l,n?S:T);break;default:aa(b,A,A,A,[""],T,0,l,T)}}u=d=k=0,w=m=1,g=b="",p=o;break;case 58:p=1+Xt(b),k=x;default:if(w<1){if(f==123)--w;else if(f==125&&w++==0&&Q2()==125)continue}switch(b+=ip(f),f*w){case 38:m=d>0?1:(b+="\f",-1);break;case 44:l[u++]=(Xt(b)-1)*m,m=1;break;case 64:jn()===45&&(b+=xc(qt())),v=jn(),d=p=Xt(g=b+=tw(oa())),f++;break;case 45:x===45&&Xt(b)==2&&(w=0)}}return s}function Wf(e,t,r,n,i,s,o,l,c,u,d,p){for(var v=i-1,k=i===0?s:[""],x=t0(k),w=0,_=0,m=0;w<n;++w)for(var f=0,g=Si(e,v+1,v=Xy(_=o[w])),S=e;f<x;++f)(S=e0(_>0?k[f]+" "+g:ne(g,/&\f/g,k[f])))&&(c[m++]=S);return Sl(e,t,r,i===0?_l:l,c,u,d,p)}function nw(e,t,r,n){return Sl(e,t,r,Ky,ip(G2()),Si(e,2,-2),0,n)}function qf(e,t,r,n,i){return Sl(e,t,r,np,Si(e,0,n),Si(e,n+1,-1),n,i)}function n0(e,t,r){switch(q2(e,t)){case 5103:return me+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return me+e+e;case 4789:return Es+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return me+e+Es+e+ke+e+e;case 5936:switch(He(e,t+11)){case 114:return me+e+ke+ne(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return me+e+ke+ne(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return me+e+ke+ne(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return me+e+ke+e+e;case 6165:return me+e+ke+"flex-"+e+e;case 5187:return me+e+ne(e,/(\w+).+(:[^]+)/,me+"box-$1$2"+ke+"flex-$1$2")+e;case 5443:return me+e+ke+"flex-item-"+ne(e,/flex-|-self/g,"")+(ur(e,/flex-|baseline/)?"":ke+"grid-row-"+ne(e,/flex-|-self/g,""))+e;case 4675:return me+e+ke+"flex-line-pack"+ne(e,/align-content|flex-|-self/g,"")+e;case 5548:return me+e+ke+ne(e,"shrink","negative")+e;case 5292:return me+e+ke+ne(e,"basis","preferred-size")+e;case 6060:return me+"box-"+ne(e,"-grow","")+me+e+ke+ne(e,"grow","positive")+e;case 4554:return me+ne(e,/([^-])(transform)/g,"$1"+me+"$2")+e;case 6187:return ne(ne(ne(e,/(zoom-|grab)/,me+"$1"),/(image-set)/,me+"$1"),e,"")+e;case 5495:case 3959:return ne(e,/(image-set\([^]*)/,me+"$1$`$1");case 4968:return ne(ne(e,/(.+:)(flex-)?(.*)/,me+"box-pack:$3"+ke+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+me+e+e;case 4200:if(!ur(e,/flex-|baseline/))return ke+"grid-column-align"+Si(e,t)+e;break;case 2592:case 3360:return ke+ne(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(n,i){return t=i,ur(n.props,/grid-\w+-end/)})?~sa(e+(r=r[t].value),"span",0)?e:ke+ne(e,"-start","")+e+ke+"grid-row-span:"+(~sa(r,"span",0)?ur(r,/\d+/):+ur(r,/\d+/)-+ur(e,/\d+/))+";":ke+ne(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(n){return ur(n.props,/grid-\w+-start/)})?e:ke+ne(ne(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ne(e,/(.+)-inline(.+)/,me+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Xt(e)-1-t>6)switch(He(e,t+1)){case 109:if(He(e,t+4)!==45)break;case 102:return ne(e,/(.+:)(.+)-([^]+)/,"$1"+me+"$2-$3$1"+Es+(He(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~sa(e,"stretch",0)?n0(ne(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return ne(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,i,s,o,l,c,u){return ke+i+":"+s+u+(o?ke+i+"-span:"+(l?c:+c-+s)+u:"")+e});case 4949:if(He(e,t+6)===121)return ne(e,":",":"+me)+e;break;case 6444:switch(He(e,He(e,14)===45?18:11)){case 120:return ne(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+me+(He(e,14)===45?"inline-":"")+"box$3$1"+me+"$2$3$1"+ke+"$2box$3")+e;case 100:return ne(e,":",":"+ke)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ne(e,"scroll-","scroll-snap-")+e}return e}function Wa(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function iw(e,t,r,n){switch(e.type){case W2:if(e.children.length)break;case H2:case np:return e.return=e.return||e.value;case Ky:return"";case Jy:return e.return=e.value+"{"+Wa(e.children,n)+"}";case _l:if(!Xt(e.value=e.props.join(",")))return""}return Xt(r=Wa(e.children,n))?e.return=e.value+"{"+r+"}":""}function sw(e){var t=t0(e);return function(r,n,i,s){for(var o="",l=0;l<t;l++)o+=e[l](r,n,i,s)||"";return o}}function ow(e){return function(t){t.root||(t=t.return)&&e(t)}}function aw(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case np:e.return=n0(e.value,e.length,r);return;case Jy:return Wa([Tr(e,{value:ne(e.value,"@","@"+me)})],n);case _l:if(e.length)return Z2(r=e.props,function(i){switch(ur(i,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Hn(Tr(e,{props:[ne(i,/:(read-\w+)/,":"+Es+"$1")]})),Hn(Tr(e,{props:[i]})),Ru(e,{props:Hf(r,n)});break;case"::placeholder":Hn(Tr(e,{props:[ne(i,/:(plac\w+)/,":"+me+"input-$1")]})),Hn(Tr(e,{props:[ne(i,/:(plac\w+)/,":"+Es+"$1")]})),Hn(Tr(e,{props:[ne(i,/:(plac\w+)/,ke+"input-$1")]})),Hn(Tr(e,{props:[i]})),Ru(e,{props:Hf(r,n)});break}return""})}}var lw={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ei=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",i0="active",s0="data-styled-version",El="6.1.18",sp=`/*!sc*/
`,qa=typeof window<"u"&&typeof document<"u",cw=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),jl=Object.freeze([]),ji=Object.freeze({});function uw(e,t,r){return r===void 0&&(r=ji),e.theme!==r.theme&&e.theme||t||r.theme}var o0=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),dw=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,pw=/(^-|-$)/g;function Zf(e){return e.replace(dw,"-").replace(pw,"")}var fw=/(a)(d)/gi,Uo=52,Gf=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ou(e){var t,r="";for(t=Math.abs(e);t>Uo;t=t/Uo|0)r=Gf(t%Uo)+r;return(Gf(t%Uo)+r).replace(fw,"$1-$2")}var wc,a0=5381,li=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},l0=function(e){return li(a0,e)};function c0(e){return Ou(l0(e)>>>0)}function hw(e){return e.displayName||e.name||"Component"}function _c(e){return typeof e=="string"&&!0}var u0=typeof Symbol=="function"&&Symbol.for,d0=u0?Symbol.for("react.memo"):60115,mw=u0?Symbol.for("react.forward_ref"):60112,gw={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},yw={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},p0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},vw=((wc={})[mw]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},wc[d0]=p0,wc);function Qf(e){return("type"in(t=e)&&t.type.$$typeof)===d0?p0:"$$typeof"in e?vw[e.$$typeof]:gw;var t}var xw=Object.defineProperty,ww=Object.getOwnPropertyNames,Yf=Object.getOwnPropertySymbols,_w=Object.getOwnPropertyDescriptor,kw=Object.getPrototypeOf,Kf=Object.prototype;function f0(e,t,r){if(typeof t!="string"){if(Kf){var n=kw(t);n&&n!==Kf&&f0(e,n,r)}var i=ww(t);Yf&&(i=i.concat(Yf(t)));for(var s=Qf(e),o=Qf(t),l=0;l<i.length;++l){var c=i[l];if(!(c in yw||r&&r[c]||o&&c in o||s&&c in s)){var u=_w(t,c);try{xw(e,c,u)}catch{}}}}return e}function bi(e){return typeof e=="function"}function op(e){return typeof e=="object"&&"styledComponentId"in e}function vn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function zu(e,t){if(e.length===0)return"";for(var r=e[0],n=1;n<e.length;n++)r+=t?t+e[n]:e[n];return r}function Gs(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Iu(e,t,r){if(r===void 0&&(r=!1),!r&&!Gs(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=Iu(e[n],t[n]);else if(Gs(t))for(var n in t)e[n]=Iu(e[n],t[n]);return e}function ap(e,t){Object.defineProperty(e,"toString",{value:t})}function oo(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Sw=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,n=0;n<t;n++)r+=this.groupSizes[n];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var n=this.groupSizes,i=n.length,s=i;t>=s;)if((s<<=1)<0)throw oo(16,"".concat(t));this.groupSizes=new Uint32Array(s),this.groupSizes.set(n),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var l=this.indexOfGroup(t+1),c=(o=0,r.length);o<c;o++)this.tag.insertRule(l,r[o])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],n=this.indexOfGroup(t),i=n+r;this.groupSizes[t]=0;for(var s=n;s<i;s++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var n=this.groupSizes[t],i=this.indexOfGroup(t),s=i+n,o=i;o<s;o++)r+="".concat(this.tag.getRule(o)).concat(sp);return r},e}(),la=new Map,Za=new Map,ca=1,Fo=function(e){if(la.has(e))return la.get(e);for(;Za.has(ca);)ca++;var t=ca++;return la.set(e,t),Za.set(t,e),t},Cw=function(e,t){ca=t+1,la.set(e,t),Za.set(t,e)},Ew="style[".concat(Ei,"][").concat(s0,'="').concat(El,'"]'),jw=new RegExp("^".concat(Ei,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),bw=function(e,t,r){for(var n,i=r.split(","),s=0,o=i.length;s<o;s++)(n=i[s])&&e.registerName(t,n)},Pw=function(e,t){for(var r,n=((r=t.textContent)!==null&&r!==void 0?r:"").split(sp),i=[],s=0,o=n.length;s<o;s++){var l=n[s].trim();if(l){var c=l.match(jw);if(c){var u=0|parseInt(c[1],10),d=c[2];u!==0&&(Cw(d,u),bw(e,d,c[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(l)}}},Jf=function(e){for(var t=document.querySelectorAll(Ew),r=0,n=t.length;r<n;r++){var i=t[r];i&&i.getAttribute(Ei)!==i0&&(Pw(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function Tw(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var h0=function(e){var t=document.head,r=e||t,n=document.createElement("style"),i=function(l){var c=Array.from(l.querySelectorAll("style[".concat(Ei,"]")));return c[c.length-1]}(r),s=i!==void 0?i.nextSibling:null;n.setAttribute(Ei,i0),n.setAttribute(s0,El);var o=Tw();return o&&n.setAttribute("nonce",o),r.insertBefore(n,s),n},Rw=function(){function e(t){this.element=h0(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,i=0,s=n.length;i<s;i++){var o=n[i];if(o.ownerNode===r)return o}throw oo(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),Aw=function(){function e(t){this.element=h0(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Nw=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Xf=qa,Ow={isServer:!qa,useCSSOMInjection:!cw},m0=function(){function e(t,r,n){t===void 0&&(t=ji),r===void 0&&(r={});var i=this;this.options=vt(vt({},Ow),t),this.gs=r,this.names=new Map(n),this.server=!!t.isServer,!this.server&&qa&&Xf&&(Xf=!1,Jf(this)),ap(this,function(){return function(s){for(var o=s.getTag(),l=o.length,c="",u=function(p){var v=function(m){return Za.get(m)}(p);if(v===void 0)return"continue";var k=s.names.get(v),x=o.getGroup(p);if(k===void 0||!k.size||x.length===0)return"continue";var w="".concat(Ei,".g").concat(p,'[id="').concat(v,'"]'),_="";k!==void 0&&k.forEach(function(m){m.length>0&&(_+="".concat(m,","))}),c+="".concat(x).concat(w,'{content:"').concat(_,'"}').concat(sp)},d=0;d<l;d++)u(d);return c}(i)})}return e.registerId=function(t){return Fo(t)},e.prototype.rehydrate=function(){!this.server&&qa&&Jf(this)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(vt(vt({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var n=r.useCSSOMInjection,i=r.target;return r.isServer?new Nw(i):n?new Rw(i):new Aw(i)}(this.options),new Sw(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(Fo(t),this.names.has(t))this.names.get(t).add(r);else{var n=new Set;n.add(r),this.names.set(t,n)}},e.prototype.insertRules=function(t,r,n){this.registerName(t,r),this.getTag().insertRules(Fo(t),n)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Fo(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),zw=/&/g,Iw=/^\s*\/\/.*$/gm;function g0(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(n){return"".concat(t," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=g0(r.children,t)),r})}function Mw(e){var t,r,n,i=e===void 0?ji:e,s=i.options,o=s===void 0?ji:s,l=i.plugins,c=l===void 0?jl:l,u=function(v,k,x){return x.startsWith(r)&&x.endsWith(r)&&x.replaceAll(r,"").length>0?".".concat(t):v},d=c.slice();d.push(function(v){v.type===_l&&v.value.includes("&")&&(v.props[0]=v.props[0].replace(zw,r).replace(n,u))}),o.prefix&&d.push(aw),d.push(iw);var p=function(v,k,x,w){k===void 0&&(k=""),x===void 0&&(x=""),w===void 0&&(w="&"),t=w,r=k,n=new RegExp("\\".concat(r,"\\b"),"g");var _=v.replace(Iw,""),m=rw(x||k?"".concat(x," ").concat(k," { ").concat(_," }"):_);o.namespace&&(m=g0(m,o.namespace));var f=[];return Wa(m,sw(d.concat(ow(function(g){return f.push(g)})))),f};return p.hash=c.length?c.reduce(function(v,k){return k.name||oo(15),li(v,k.name)},a0).toString():"",p}var Lw=new m0,Mu=Mw(),y0=Pn.createContext({shouldForwardProp:void 0,styleSheet:Lw,stylis:Mu});y0.Consumer;Pn.createContext(void 0);function eh(){return P.useContext(y0)}var v0=function(){function e(t,r){var n=this;this.inject=function(i,s){s===void 0&&(s=Mu);var o=n.name+s.hash;i.hasNameForId(n.id,o)||i.insertRules(n.id,o,s(n.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,ap(this,function(){throw oo(12,String(n.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Mu),this.name+t.hash},e}(),$w=function(e){return e>="A"&&e<="Z"};function th(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(r===1&&n==="-"&&e[0]==="-")return e;$w(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var x0=function(e){return e==null||e===!1||e===""},w0=function(e){var t,r,n=[];for(var i in e){var s=e[i];e.hasOwnProperty(i)&&!x0(s)&&(Array.isArray(s)&&s.isCss||bi(s)?n.push("".concat(th(i),":"),s,";"):Gs(s)?n.push.apply(n,Zs(Zs(["".concat(i," {")],w0(s),!1),["}"],!1)):n.push("".concat(th(i),": ").concat((t=i,(r=s)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in lw||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function bn(e,t,r,n){if(x0(e))return[];if(op(e))return[".".concat(e.styledComponentId)];if(bi(e)){if(!bi(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return[e];var i=e(t);return bn(i,t,r,n)}var s;return e instanceof v0?r?(e.inject(r,n),[e.getName(n)]):[e]:Gs(e)?w0(e):Array.isArray(e)?Array.prototype.concat.apply(jl,e.map(function(o){return bn(o,t,r,n)})):[e.toString()]}function Dw(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(bi(r)&&!op(r))return!1}return!0}var Uw=l0(El),Fw=function(){function e(t,r,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&Dw(t),this.componentId=r,this.baseHash=li(Uw,r),this.baseStyle=n,m0.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,n){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))i=vn(i,this.staticRulesId);else{var s=zu(bn(this.rules,t,r,n)),o=Ou(li(this.baseHash,s)>>>0);if(!r.hasNameForId(this.componentId,o)){var l=n(s,".".concat(o),void 0,this.componentId);r.insertRules(this.componentId,o,l)}i=vn(i,o),this.staticRulesId=o}else{for(var c=li(this.baseHash,n.hash),u="",d=0;d<this.rules.length;d++){var p=this.rules[d];if(typeof p=="string")u+=p;else if(p){var v=zu(bn(p,t,r,n));c=li(c,v+d),u+=v}}if(u){var k=Ou(c>>>0);r.hasNameForId(this.componentId,k)||r.insertRules(this.componentId,k,n(u,".".concat(k),void 0,this.componentId)),i=vn(i,k)}}return i},e}(),_0=Pn.createContext(void 0);_0.Consumer;var kc={};function Bw(e,t,r){var n=op(e),i=e,s=!_c(e),o=t.attrs,l=o===void 0?jl:o,c=t.componentId,u=c===void 0?function(S,T){var A=typeof S!="string"?"sc":Zf(S);kc[A]=(kc[A]||0)+1;var b="".concat(A,"-").concat(c0(El+A+kc[A]));return T?"".concat(T,"-").concat(b):b}(t.displayName,t.parentComponentId):c,d=t.displayName,p=d===void 0?function(S){return _c(S)?"styled.".concat(S):"Styled(".concat(hw(S),")")}(e):d,v=t.displayName&&t.componentId?"".concat(Zf(t.displayName),"-").concat(t.componentId):t.componentId||u,k=n&&i.attrs?i.attrs.concat(l).filter(Boolean):l,x=t.shouldForwardProp;if(n&&i.shouldForwardProp){var w=i.shouldForwardProp;if(t.shouldForwardProp){var _=t.shouldForwardProp;x=function(S,T){return w(S,T)&&_(S,T)}}else x=w}var m=new Fw(r,v,n?i.componentStyle:void 0);function f(S,T){return function(A,b,O){var X=A.attrs,Y=A.componentStyle,Re=A.defaultProps,Me=A.foldedComponentIds,mt=A.styledComponentId,St=A.target,kr=Pn.useContext(_0),ce=eh(),qe=A.shouldForwardProp||ce.shouldForwardProp,L=uw(b,kr,Re)||ji,W=function(ot,fe,Ue){for(var at,Ze=vt(vt({},fe),{className:void 0,theme:Ue}),Fe=0;Fe<ot.length;Fe+=1){var Be=bi(at=ot[Fe])?at(Ze):at;for(var Ge in Be)Ze[Ge]=Ge==="className"?vn(Ze[Ge],Be[Ge]):Ge==="style"?vt(vt({},Ze[Ge]),Be[Ge]):Be[Ge]}return fe.className&&(Ze.className=vn(Ze.className,fe.className)),Ze}(X,b,L),q=W.as||St,ae={};for(var z in W)W[z]===void 0||z[0]==="$"||z==="as"||z==="theme"&&W.theme===L||(z==="forwardedAs"?ae.as=W.forwardedAs:qe&&!qe(z,q)||(ae[z]=W[z]));var ye=function(ot,fe){var Ue=eh(),at=ot.generateAndInjectStyles(fe,Ue.styleSheet,Ue.stylis);return at}(Y,W),et=vn(Me,mt);return ye&&(et+=" "+ye),W.className&&(et+=" "+W.className),ae[_c(q)&&!o0.has(q)?"class":"className"]=et,O&&(ae.ref=O),P.createElement(q,ae)}(g,S,T)}f.displayName=p;var g=Pn.forwardRef(f);return g.attrs=k,g.componentStyle=m,g.displayName=p,g.shouldForwardProp=x,g.foldedComponentIds=n?vn(i.foldedComponentIds,i.styledComponentId):"",g.styledComponentId=v,g.target=n?i.target:e,Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=n?function(T){for(var A=[],b=1;b<arguments.length;b++)A[b-1]=arguments[b];for(var O=0,X=A;O<X.length;O++)Iu(T,X[O],!0);return T}({},i.defaultProps,S):S}}),ap(g,function(){return".".concat(g.styledComponentId)}),s&&f0(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),g}function rh(e,t){for(var r=[e[0]],n=0,i=t.length;n<i;n+=1)r.push(t[n],e[n+1]);return r}var nh=function(e){return Object.assign(e,{isCss:!0})};function k0(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(bi(e)||Gs(e))return nh(bn(rh(jl,Zs([e],t,!0))));var n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?bn(n):nh(bn(rh(n,t)))}function Lu(e,t,r){if(r===void 0&&(r=ji),!t)throw oo(1,t);var n=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return e(t,r,k0.apply(void 0,Zs([i],s,!1)))};return n.attrs=function(i){return Lu(e,t,vt(vt({},r),{attrs:Array.prototype.concat(r.attrs,i).filter(Boolean)}))},n.withConfig=function(i){return Lu(e,t,vt(vt({},r),i))},n}var S0=function(e){return Lu(Bw,e)},C=S0;o0.forEach(function(e){C[e]=S0(e)});function Vw(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=zu(k0.apply(void 0,Zs([e],t,!1))),i=c0(n);return new v0(i,n)}var Hw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Ww=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Z=(e,t)=>{const r=P.forwardRef(({color:n="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,children:l,...c},u)=>P.createElement("svg",{ref:u,...Hw,width:i,height:i,stroke:n,strokeWidth:o?Number(s)*24/Number(i):s,className:`lucide lucide-${Ww(e)}`,...c},[...t.map(([d,p])=>P.createElement(d,p)),...(Array.isArray(l)?l:[l])||[]]));return r.displayName=`${e}`,r},ua=Z("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]),ih=Z("Apple",[["path",{d:"M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z",key:"3s7exb"}],["path",{d:"M10 2c1 .5 2 2 2 5",key:"fcco2y"}]]),Sc=Z("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]),sh=Z("Beef",[["circle",{cx:"12.5",cy:"8.5",r:"2.5",key:"9738u8"}],["path",{d:"M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z",key:"o0f6za"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5",key:"k7p6i0"}]]),qw=Z("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]),oh=Z("Carrot",[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46",key:"rfqxbe"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z",key:"6b25w4"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z",key:"fn65lo"}]]),$u=Z("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["polyline",{points:"22 4 12 14.01 9 11.01",key:"6xbx8j"}]]),Wn=Z("Check",[["polyline",{points:"20 6 9 17 4 12",key:"10jjfj"}]]),da=Z("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]),ah=Z("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]),lh=Z("Coffee",[["path",{d:"M17 8h1a4 4 0 1 1 0 8h-1",key:"jx4kbh"}],["path",{d:"M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z",key:"1bxrl0"}],["line",{x1:"6",x2:"6",y1:"2",y2:"4",key:"1cr9l3"}],["line",{x1:"10",x2:"10",y1:"2",y2:"4",key:"170wym"}],["line",{x1:"14",x2:"14",y1:"2",y2:"4",key:"1c5f70"}]]),js=Z("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]),ch=Z("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]),uh=Z("Droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]),dh=Z("Egg",[["path",{d:"M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z",key:"1c39pg"}]]),bs=Z("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),Zw=Z("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]),ph=Z("Fish",[["path",{d:"M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z",key:"15baut"}],["path",{d:"M18 12v.5",key:"18hhni"}],["path",{d:"M16 17.93a9.77 9.77 0 0 1 0-11.86",key:"16dt7o"}],["path",{d:"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33",key:"l9di03"}],["path",{d:"M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4",key:"1kjonw"}],["path",{d:"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98",key:"1zlm23"}]]),fh=Z("Flower2",[["path",{d:"M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1",key:"3pnvol"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M12 10v12",key:"6ubwww"}],["path",{d:"M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z",key:"9hd38g"}],["path",{d:"M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z",key:"ufn41s"}]]),Cc=Z("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]),Du=Z("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]),Gw=Z("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]),hh=Z("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]),Qw=Z("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]),Ec=Z("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]),C0=Z("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]),mh=Z("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]),Yw=Z("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]),Kw=Z("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]),gh=Z("Milk",[["path",{d:"M8 2h8",key:"1ssgc1"}],["path",{d:"M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2",key:"qtp12x"}],["path",{d:"M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0",key:"ygeh44"}]]),Bo=Z("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]),yh=Z("Package2",[["path",{d:"M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z",key:"1ront0"}],["path",{d:"m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9",key:"19h2x1"}],["path",{d:"M12 3v6",key:"1holv5"}]]),sr=Z("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]),vh=Z("PenSquare",[["path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1qinfi"}],["path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z",key:"w2jsv5"}]]),E0=Z("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]),xn=Z("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]),xh=Z("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]),Uu=Z("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]),wh=Z("ShoppingBasket",[["path",{d:"m5 11 4-7",key:"116ra9"}],["path",{d:"m19 11-4-7",key:"cnml18"}],["path",{d:"M2 11h20",key:"3eubbj"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4",key:"1x2lvw"}],["path",{d:"m9 11 1 9",key:"1ojof7"}],["path",{d:"M4.5 15.5h15",key:"13mye1"}],["path",{d:"m15 11-1 9",key:"5wnq3a"}]]),ts=Z("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]),Vo=Z("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]),_h=Z("Soup",[["path",{d:"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z",key:"4rw317"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M19.5 12 22 6",key:"shfsr5"}],["path",{d:"M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62",key:"rpc6vp"}],["path",{d:"M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62",key:"1lf63m"}],["path",{d:"M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62",key:"97tijn"}]]),j0=Z("Store",[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",key:"ztvudi"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",key:"2ebpfo"}],["path",{d:"M2 7h20",key:"1fcdvo"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7",key:"jon5kx"}]]),wn=Z("Tags",[["path",{d:"M9 5H2v7l6.29 6.29c.94.94 2.48.94 3.42 0l3.58-3.58c.94-.94.94-2.48 0-3.42L9 5Z",key:"gt587u"}],["path",{d:"M6 9.01V9",key:"1flxpt"}],["path",{d:"m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19",key:"1cbfv1"}]]),jc=Z("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]),pa=Z("Truck",[["path",{d:"M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11",key:"hs4xqm"}],["path",{d:"M14 9h4l4 4v4c0 .6-.4 1-1 1h-2",key:"11fp61"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}]]),fa=Z("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]),ha=Z("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),kh=Z("Utensils",[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"1ogz0v"}]]),Sh=Z("Wheat",[["path",{d:"M2 22 16 8",key:"60hf96"}],["path",{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"1rdhi6"}],["path",{d:"M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"1sdzmb"}],["path",{d:"M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"eoatbi"}],["path",{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z",key:"19rau1"}],["path",{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"tc8ph9"}],["path",{d:"M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"2m8kc5"}],["path",{d:"M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"vex3ng"}]]),Ch=Z("Wine",[["path",{d:"M8 22h8",key:"rmew8v"}],["path",{d:"M7 10h10",key:"1101jm"}],["path",{d:"M12 15v7",key:"t2xh3l"}],["path",{d:"M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z",key:"10ffi3"}]]),Fu=Z("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]),ci=Z("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Bu=Z("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),Jw=C.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%);
  padding: 20px;
`,Xw=C.div`
  width: 100%;
  max-width: 420px;
  background-color: white;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  overflow: hidden;
`,e_=C.div`
  padding: 30px;
`,t_=C.div`
  margin-bottom: 30px;
`,r_=C.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  
  svg {
    font-size: 28px;
    color: var(--primary-color);
    margin-right: 10px;
  }
  
  h1 {
    font-size: 24px;
    font-weight: 600;
    color: var(--gray-dark);
  }
`,n_=C.div`
  display: flex;
  border-bottom: 1px solid #ddd;
`,Eh=C.div`
  flex: 1;
  text-align: center;
  padding: 12px;
  cursor: pointer;
  color: var(--gray);
  font-weight: 500;
  position: relative;
  
  &.active {
    color: var(--primary-color);
    
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -1px;
      width: 100%;
      height: 2px;
      background-color: var(--primary-color);
    }
  }
`,jh=C.form`
  display: ${e=>e.$active?"block":"none"};
`,ln=C.div`
  position: relative;
  margin-bottom: 20px;
  
  svg {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--gray-light);
  }
  
  input {
    padding-left: 40px;
  }
`,i_=C.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  margin-bottom: 20px;
  
  label {
    display: flex;
    align-items: center;
    color: var(--gray);
    
    input[type="checkbox"] {
      width: auto;
      margin-right: 5px;
    }
  }
  
  a {
    color: var(--primary-color);
  }
`,bh=C.button`
  width: 100%;
  background-color: var(--primary-color);
  color: white;
  padding: 12px;
  border-radius: var(--radius);
  font-weight: 500;
  margin-bottom: 20px;
  transition: var(--transition);
  border: none;
  cursor: pointer;
  
  &:hover {
    opacity: 0.9;
  }
`,s_=C.div`
  text-align: center;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #eee;
  
  p {
    font-size: 14px;
    color: var(--gray);
    margin-bottom: 10px;
  }
`,Ph=C.button`
  color: white;
  padding: 8px 15px;
  border-radius: var(--radius);
  margin: 0 5px;
  font-size: 13px;
  transition: var(--transition);
  border: none;
  cursor: pointer;
  
  &.admin {
    background-color: var(--secondary-color);
  }
  
  &.client {
    background-color: var(--success-color);
  }
  
  &:hover {
    opacity: 0.9;
  }
`;function o_({login:e,register:t}){const[r,n]=P.useState("login"),[i,s]=P.useState({email:"",password:""}),[o,l]=P.useState({name:"",email:"",phone:"",password:"",confirmPassword:""}),c=async p=>{p.preventDefault(),i.email&&i.password&&await e(i.email,i.password)},u=async p=>{if(p.preventDefault(),o.name&&o.email&&o.phone&&o.password){if(o.password!==o.confirmPassword)return;await t(o)}},d=(p,v)=>{s({email:p,password:v}),e(p,v)};return a.jsx(Jw,{children:a.jsx(Xw,{children:a.jsxs(e_,{children:[a.jsxs(t_,{children:[a.jsxs(r_,{children:[a.jsx(j0,{size:28}),a.jsx("h1",{children:"Mercado Express"})]}),a.jsxs(n_,{children:[a.jsx(Eh,{className:r==="login"?"active":"",onClick:()=>n("login"),children:"Iniciar sesión"}),a.jsx(Eh,{className:r==="register"?"active":"",onClick:()=>n("register"),children:"Registrarse"})]})]}),a.jsxs(jh,{$active:r==="login",onSubmit:c,children:[a.jsxs(ln,{children:[a.jsx(mh,{size:16}),a.jsx("input",{type:"email",placeholder:"Correo electrónico",autoComplete:"email",value:i.email,onChange:p=>s({...i,email:p.target.value}),required:!0})]}),a.jsxs(ln,{children:[a.jsx(Ec,{size:16}),a.jsx("input",{type:"password",placeholder:"Contraseña",autoComplete:"current-password",value:i.password,onChange:p=>s({...i,password:p.target.value}),required:!0})]}),a.jsxs(i_,{children:[a.jsxs("label",{children:[a.jsx("input",{type:"checkbox"})," Recordarme"]}),a.jsx("a",{href:"#",children:"¿Olvidaste tu contraseña?"})]}),a.jsx(bh,{type:"submit",children:"Iniciar sesión"}),a.jsxs(s_,{children:[a.jsx("p",{children:"Cuentas demo:"}),a.jsx(Ph,{type:"button",className:"admin",onClick:()=>d("admin@demo.com","123456"),children:"Administrador"}),a.jsx(Ph,{type:"button",className:"client",onClick:()=>d("cliente@demo.com","123456"),children:"Cliente"})]})]}),a.jsxs(jh,{$active:r==="register",onSubmit:u,children:[a.jsxs(ln,{children:[a.jsx(ha,{size:16}),a.jsx("input",{type:"text",placeholder:"Nombre completo",autoComplete:"name",value:o.name,onChange:p=>l({...o,name:p.target.value}),required:!0})]}),a.jsxs(ln,{children:[a.jsx(mh,{size:16}),a.jsx("input",{type:"email",placeholder:"Correo electrónico",autoComplete:"email",value:o.email,onChange:p=>l({...o,email:p.target.value}),required:!0})]}),a.jsxs(ln,{children:[a.jsx(E0,{size:16}),a.jsx("input",{type:"tel",placeholder:"Teléfono (WhatsApp)",autoComplete:"tel",value:o.phone,onChange:p=>l({...o,phone:p.target.value}),required:!0})]}),a.jsxs(ln,{children:[a.jsx(Ec,{size:16}),a.jsx("input",{type:"password",placeholder:"Contraseña",autoComplete:"new-password",value:o.password,onChange:p=>l({...o,password:p.target.value}),required:!0})]}),a.jsxs(ln,{children:[a.jsx(Ec,{size:16}),a.jsx("input",{type:"password",placeholder:"Confirmar contraseña",autoComplete:"new-password",value:o.confirmPassword,onChange:p=>l({...o,confirmPassword:p.target.value}),required:!0})]}),a.jsx(bh,{type:"submit",children:"Registrarse"})]})]})})})}const jr=[{id:1,name:"Frutas",icon:"Apple",color:"#e74c3c"},{id:2,name:"Verduras",icon:"Carrot",color:"#2ecc71"},{id:3,name:"Lácteos",icon:"Milk",color:"#f1c40f"},{id:4,name:"Carnes",icon:"Drumstick",color:"#e67e22"},{id:5,name:"Pescados",icon:"Fish",color:"#3498db"},{id:6,name:"Panadería",icon:"Bread",color:"#d35400"},{id:7,name:"Bebidas",icon:"Wine",color:"#9b59b6"},{id:8,name:"Abarrotes",icon:"ShoppingBasket",color:"#34495e"}],qn=[{id:1,name:"Manzana Deliciosa",category_id:1,price:5.9,unit:"kg",description:"Manzanas rojas y jugosas, ideales para comer directamente o para postres.",image:"https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6"},{id:2,name:"Plátano Orgánico",category_id:1,price:4.5,unit:"kg",description:"Plátanos orgánicos cultivados sin pesticidas, perfectos para batidos y postres.",image:"https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e"},{id:3,name:"Naranja Valenciana",category_id:1,price:3.8,unit:"kg",description:"Naranjas dulces y jugosas, excelentes para jugo fresco.",image:"https://images.unsplash.com/photo-1611080626919-7cf5a9dbab12"},{id:4,name:"Fresa Premium",category_id:1,price:12.9,unit:"kg",description:"Fresas frescas y dulces, perfectas para postres o consumir directamente.",image:"https://images.unsplash.com/photo-1464965911861-746a04b4bca6"},{id:5,name:"Lechuga Hidropónica",category_id:2,price:3.5,unit:"u",description:"Lechuga fresca cultivada sin tierra, con hojas crujientes y frescas.",image:"https://images.unsplash.com/photo-1556801712-76c8eb07bbc9"},{id:6,name:"Tomate Italiano",category_id:2,price:4.9,unit:"kg",description:"Tomates jugosos y carnosos, perfectos para salsas y ensaladas.",image:"https://images.unsplash.com/photo-1592924357229-87ba6f72ba82"},{id:7,name:"Cebolla Roja",category_id:2,price:2.8,unit:"kg",description:"Cebollas rojas de sabor suave, ideales para ensaladas y guisos.",image:"https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1"},{id:8,name:"Zanahoria Orgánica",category_id:2,price:3.2,unit:"kg",description:"Zanahorias orgánicas, dulces y crujientes, excelentes para jugos y ensaladas.",image:"https://images.unsplash.com/photo-1598170845058-32b9d6a5da37"},{id:9,name:"Queso Fresco",category_id:3,price:15.9,unit:"kg",description:"Queso fresco artesanal, suave y cremoso, ideal para ensaladas y sándwiches.",image:"https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d"},{id:10,name:"Yogurt Natural",category_id:3,price:6.5,unit:"l",description:"Yogurt natural sin azúcar, perfecto para desayunos y postres saludables.",image:"https://images.unsplash.com/photo-1488477181946-6428a0291777"},{id:11,name:"Leche Fresca",category_id:3,price:4.2,unit:"presentation",description:"Leche fresca pasteurizada de vacas alimentadas con pasto.",image:"https://images.unsplash.com/photo-1563636619-e9143da7973b",presentations:[{id:1,name:"1 Litro",price:4.2,unit:"L"},{id:2,name:"500ml",price:2.3,unit:"ml"},{id:3,name:"250ml",price:1.5,unit:"ml"}]},{id:12,name:"Mantequilla sin Sal",category_id:3,price:8.9,unit:"kg",description:"Mantequilla cremosa sin sal, perfecta para hornear y cocinar.",image:"https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d"},{id:13,name:"Lomo Fino",category_id:4,price:35.9,unit:"kg",description:"Corte premium de res, tierno y jugoso, ideal para preparaciones a la parrilla.",image:"https://images.unsplash.com/photo-1594041680534-e8c8cdebd659"},{id:14,name:"Pechuga de Pollo",category_id:4,price:16.9,unit:"kg",description:"Pechuga de pollo fresca sin piel, versátil para múltiples preparaciones.",image:"https://images.unsplash.com/photo-1604503468506-a8da13d82791"},{id:15,name:"Chuleta de Cerdo",category_id:4,price:19.5,unit:"kg",description:"Chuletas de cerdo jugosas, ideales para asar o freír.",image:"https://images.unsplash.com/photo-1432139509613-5c4255815697"},{id:16,name:"Carne Molida",category_id:4,price:18.9,unit:"kg",description:"Carne molida de res fresca, perfecta para hamburguesas y salsas.",image:"https://images.unsplash.com/photo-1606728035253-49e8f7e3d96c"},{id:17,name:"Salmón Fresco",category_id:5,price:45.9,unit:"kg",description:"Salmón fresco del Atlántico, rico en omega-3 y perfecto para preparaciones gourmet.",image:"https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2"},{id:18,name:"Corvina",category_id:5,price:28.5,unit:"kg",description:"Corvina fresca del mar peruano, carne blanca y suave ideal para ceviches.",image:"https://images.unsplash.com/photo-1544943910-4c1dc44aab44"},{id:19,name:"Lenguado",category_id:5,price:35.9,unit:"kg",description:"Lenguado fresco, pescado plano de carne delicada y sabor suave.",image:"https://images.unsplash.com/photo-1563336797-f5e174fc3bd8"},{id:20,name:"Atún",category_id:5,price:32.9,unit:"kg",description:"Atún fresco de carne roja, perfecto para preparaciones al grill o sashimi.",image:"https://images.unsplash.com/photo-1544943910-4c1dc44aab44"},{id:21,name:"Camarones",category_id:5,price:42.9,unit:"kg",description:"Camarones frescos de tamaño mediano, ideales para arroces y pastas.",image:"https://images.unsplash.com/photo-1565680018434-b513d5e5fd47"},{id:22,name:"Pulpo",category_id:5,price:38.5,unit:"kg",description:"Pulpo fresco tierno, perfecto para ensaladas y preparaciones mediterráneas.",image:"https://images.unsplash.com/photo-1565680018434-b513d5e5fd47"},{id:23,name:"Pan Francés",category_id:6,price:.3,unit:"u",description:"Pan francés tradicional, crujiente por fuera y suave por dentro.",image:"https://images.unsplash.com/photo-1549931319-a545dcf3bc73"},{id:24,name:"Pan Integral",category_id:6,price:4.5,unit:"u",description:"Pan integral artesanal con semillas, rico en fibra y nutrientes.",image:"https://images.unsplash.com/photo-1509440159596-0249088772ff"},{id:25,name:"Croissant",category_id:6,price:2.5,unit:"u",description:"Croissant de mantequilla recién horneado, perfecto para el desayuno.",image:"https://images.unsplash.com/photo-1555507036-ab794f4afe8c"},{id:26,name:"Pan de Molde",category_id:6,price:5.9,unit:"u",description:"Pan de molde suave y esponjoso, ideal para sándwiches y tostadas.",image:"https://images.unsplash.com/photo-1586444248902-2f64eddc13df"},{id:27,name:"Empanadas",category_id:6,price:3.5,unit:"u",description:"Empanadas horneadas con relleno de pollo, carne o queso.",image:"https://images.unsplash.com/photo-1621743478914-cc8a86d7e7b5"},{id:28,name:"Torta de Chocolate",category_id:6,price:25.9,unit:"u",description:"Torta de chocolate casera con cobertura de chocolate, perfecta para ocasiones especiales.",image:"https://images.unsplash.com/photo-1578985545062-69928b1d9587"},{id:29,name:"Agua Mineral",category_id:7,price:2.5,unit:"l",description:"Agua mineral natural sin gas, pureza y frescura en cada sorbo.",image:"https://images.unsplash.com/photo-1523362628745-0c100150b504"},{id:30,name:"Jugo de Naranja",category_id:7,price:6.9,unit:"l",description:"Jugo de naranja natural recién exprimido, sin azúcar añadida.",image:"https://images.unsplash.com/photo-1544145945-f90425340c7e"},{id:31,name:"Gaseosa Cola",category_id:7,price:3.5,unit:"l",description:"Bebida gaseosa de cola refrescante, perfecta para acompañar comidas.",image:"https://images.unsplash.com/photo-1624517452488-04869289c4ca"},{id:32,name:"Cerveza",category_id:7,price:4.9,unit:"presentation",description:"Cerveza rubia artesanal, refrescante y con sabor único.",image:"https://images.unsplash.com/photo-1608270586620-248524c67de9",presentations:[{id:1,name:"Lata 355ml",price:4.9,unit:"lata"},{id:2,name:"Botella 330ml",price:5.2,unit:"botella"},{id:3,name:"Six Pack (6x355ml)",price:27.5,unit:"pack"}]},{id:33,name:"Agua con Gas",category_id:7,price:3.2,unit:"l",description:"Agua mineral con gas natural, refrescante y digestiva.",image:"https://images.unsplash.com/photo-1523362628745-0c100150b504"},{id:34,name:"Té Helado",category_id:7,price:4.5,unit:"l",description:"Té helado de durazno, bebida refrescante y natural con sabor a frutas.",image:"https://images.unsplash.com/photo-1544145945-f90425340c7e"},{id:35,name:"Arroz Extra",category_id:8,price:4.2,unit:"kg",description:"Arroz extra de grano largo, ideal para todo tipo de preparaciones.",image:"https://images.unsplash.com/photo-1586201375761-83865001e31c"},{id:36,name:"Fideos Espagueti",category_id:8,price:2.9,unit:"presentation",description:"Fideos espagueti de trigo, perfectos para pastas y sopas.",image:"https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5",presentations:[{id:1,name:"Paquete 500g",price:2.9,unit:"pqt"},{id:2,name:"Paquete 1kg",price:5.5,unit:"pqt"},{id:3,name:"Bolsa 250g",price:1.8,unit:"bolsa"}]},{id:37,name:"Aceite Vegetal",category_id:8,price:8.9,unit:"l",description:"Aceite vegetal puro para cocinar, freír y aderezar ensaladas.",image:"https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5"},{id:38,name:"Azúcar Blanca",category_id:8,price:3.5,unit:"kg",description:"Azúcar blanca refinada, endulzante natural para bebidas y postres.",image:"https://images.unsplash.com/photo-1572888195207-49e220c28460"},{id:39,name:"Sal de Mesa",category_id:8,price:1.5,unit:"kg",description:"Sal de mesa yodada, condimento esencial para todas las comidas.",image:"https://images.unsplash.com/photo-1622569064658-52ba6fe7b9b6"},{id:40,name:"Conserva de Atún",category_id:8,price:4.5,unit:"u",description:"Conserva de atún en aceite vegetal, práctica y nutritiva.",image:"https://images.unsplash.com/photo-1558961363-fa8fdf82db35"},{id:41,name:"Lentejas",category_id:8,price:6.9,unit:"kg",description:"Lentejas secas de alta calidad, ricas en proteínas y fibra.",image:"https://images.unsplash.com/photo-1596797038530-2c107229654b"},{id:42,name:"Quinua",category_id:8,price:12.9,unit:"kg",description:"Quinua peruana orgánica, superalimento rico en proteínas completas.",image:"https://images.unsplash.com/photo-1594221708779-94832f4320d1"}],Le=[{id:"ORD-001",customer:"Juan Pérez",customer_phone:"987654321",address:"Av. Principal 123, Lima",date:"2023-10-15",status:"delivered",payment_method:"transfer",payment_status:"verified",items:[{product_id:1,name:"Manzana Deliciosa",quantity:2,price:5.9,total:11.8},{product_id:5,name:"Lechuga Hidropónica",quantity:1,price:3.5,total:3.5},{product_id:9,name:"Queso Fresco",quantity:.5,price:15.9,total:7.95}],subtotal:23.25,tax:4.19,total:27.44,notes:"Entregar en la tarde."},{id:"ORD-002",customer:"María López",customer_phone:"987654322",address:"Jr. Los Pinos 456, Lima",date:"2023-10-16",status:"preparing",payment_method:"yape",payment_status:"verified",items:[{product_id:2,name:"Plátano Orgánico",quantity:3,price:4.5,total:13.5},{product_id:10,name:"Yogurt Natural",quantity:2,price:6.5,total:13},{product_id:14,name:"Pechuga de Pollo",quantity:1.5,price:16.9,total:25.35}],subtotal:51.85,tax:9.33,total:61.18,notes:""},{id:"ORD-003",customer:"Pedro Sánchez",customer_phone:"987654323",address:"Calle Las Flores 789, Lima",date:"2023-10-17",status:"awaiting_payment",payment_method:"transfer",payment_status:"pending",items:[{product_id:3,name:"Naranja Valenciana",quantity:2,price:3.8,total:7.6},{product_id:7,name:"Cebolla Roja",quantity:1,price:2.8,total:2.8},{product_id:16,name:"Carne Molida",quantity:1,price:18.9,total:18.9}],subtotal:29.3,tax:5.27,total:34.57,notes:"Llamar antes de entregar."}],ct=[{id:"PAY-001",order_id:"ORD-001",customer:"Juan Pérez",date:"2023-10-15",amount:27.44,method:"transfer",status:"verified",voucher:"https://images.unsplash.com/photo-1622186477895-f2af6a0f5522"},{id:"PAY-002",order_id:"ORD-002",customer:"María López",date:"2023-10-16",amount:61.18,method:"yape",status:"verified",voucher:"https://images.unsplash.com/photo-1622186477895-f2af6a0f5522"},{id:"PAY-003",order_id:"ORD-003",customer:"Pedro Sánchez",date:"2023-10-17",amount:34.57,method:"transfer",status:"pending",voucher:"https://images.unsplash.com/photo-1622186477895-f2af6a0f5522"}],bc={awaiting_payment:{label:"Esperando Pago",color:"#f59e0b",description:"Pedido creado, esperando verificación de pago",nextSteps:["Verificar pago para continuar"]},preparing:{label:"Preparando",color:"#3b82f6",description:"Pago verificado, preparando pedido",nextSteps:["Alistar productos","Empacar pedido"]},ready_for_shipping:{label:"Listo para Envío",color:"#8b5cf6",description:"Pedido alistado, listo para enviar",nextSteps:["Asignar delivery","Enviar pedido"]},shipped:{label:"Enviado",color:"#06b6d4",description:"Pedido en camino al cliente",nextSteps:["Confirmar entrega"]},delivered:{label:"Entregado",color:"#10b981",description:"Pedido entregado exitosamente",nextSteps:[]},cancelled:{label:"Cancelado",color:"#ef4444",description:"Pedido cancelado",nextSteps:[]}},Th={kg:{allowDecimals:!0,step:.1,minQuantity:.1,label:"kg",displayDecimals:1},u:{allowDecimals:!1,step:1,minQuantity:1,label:"unidad(es)",displayDecimals:0},l:{allowDecimals:!0,step:.25,minQuantity:.25,label:"litros",displayDecimals:2},pqt:{allowDecimals:!1,step:1,minQuantity:1,label:"paquete(s)",displayDecimals:0},presentation:{allowDecimals:!1,step:1,minQuantity:1,label:"presentación",displayDecimals:0}},Or=e=>Th[e]||Th.u,Ho=(e,t)=>{const r=Or(t);return r.allowDecimals?parseFloat(e).toFixed(r.displayDecimals):Math.floor(e)},a_=(e,t)=>{const r=Or(t),n=parseFloat(e);return isNaN(n)||n<r.minQuantity?r.minQuantity:r.allowDecimals?n:Math.floor(n)},b0={transfer:{bankName:"Banco de Crédito del Perú (BCP)",accountNumber:"194-123456789-0-12",accountType:"Cuenta Corriente",accountHolder:"Mercado Express SAC",cci:"002-194-123456789012-34"},yape:{phoneNumber:"987-654-321",qrCode:"https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=300&fit=crop&crop=center"},plin:{phoneNumber:"987-654-321",qrCode:"https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=300&fit=crop&crop=center"},instructions:{transfer:"Realiza la transferencia por el monto total y envía el comprobante por WhatsApp.",yape:"Envía el pago por Yape al número indicado y captura la pantalla de confirmación.",plin:"Envía el pago por Plin al número indicado y captura la pantalla de confirmación.",cash:"Tendrás que pagar en efectivo al momento de la entrega."}},l_=C.section`
  display: flex;
  height: 100vh;
`,c_=C.nav`
  width: 250px;
  height: 100%;
  background-color: var(--gray-dark);
  color: white;
  padding: 20px 0;
  position: fixed;
  left: 0;
  top: 0;
  overflow-y: auto;
  z-index: 100;
`,u_=C.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 30px;
  
  svg {
    margin-right: 10px;
    color: var(--primary-color);
  }
  
  h2 {
    font-size: 20px;
    font-weight: 600;
  }
`,d_=C.ul`
  list-style: none;
`,Rh=C.li`
  padding: 12px 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: var(--transition);
  
  svg {
    margin-right: 10px;
    font-size: 18px;
  }
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  &.active {
    background-color: var(--primary-color);
  }
`,p_=C.main`
  flex: 1;
  margin-left: 250px;
  height: 100vh;
  overflow-y: auto;
`,f_=C.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 90;
`,h_=C.div`
  display: flex;
  align-items: center;
  background-color: var(--gray-lighter);
  border-radius: 30px;
  padding: 8px 15px;
  max-width: 400px;
  width: 100%;
  
  svg {
    color: var(--gray);
    margin-right: 10px;
  }
  
  input {
    background: transparent;
    border: none;
    flex: 1;
    font-size: 14px;
  }
`,m_=C.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  
  span {
    margin-right: 10px;
    font-weight: 500;
  }
`,g_=C.div`
  width: 36px;
  height: 36px;
  background-color: var(--primary-color);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`,rs=C.div`
  padding: 30px;
  display: ${e=>e.$active?"block":"none"};
  
  h2 {
    margin-bottom: 20px;
    color: var(--gray-dark);
  }
`,Ah=C.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`,y_=C.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 30px;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`,cn=C.div`
  background-color: white;
  border-radius: var(--radius);
  padding: 20px;
  box-shadow: var(--shadow);
  display: flex;
  align-items: center;
`,un=C.div`
  width: 60px;
  height: 60px;
  background-color: var(--primary-light);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  
  svg {
    font-size: 24px;
    color: var(--primary-color);
  }
`,dn=C.div`
  h3 {
    font-size: 14px;
    color: var(--gray);
    margin-bottom: 5px;
  }
  
  p {
    font-size: 24px;
    font-weight: 600;
    color: var(--gray-dark);
  }
`,v_=C.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`,x_=C.div`
  background-color: white;
  border-radius: var(--radius);
  padding: 20px;
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`,w_=C.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  background-color: ${e=>e.color};
  
  svg {
    font-size: 30px;
    color: white;
  }
`,__=C.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  gap: 5px;
`,Nh=C.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: white;
  transition: var(--transition);
  border: none;
  cursor: pointer;
  
  &.edit {
    background-color: var(--warning-color);
  }
  
  &.delete {
    background-color: var(--danger-color);
  }
  
  &.view {
    background-color: var(--secondary-color);
  }
`,k_=C.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`,S_=C.div`
  background-color: white;
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`,C_=C.div`
  height: 180px;
  background-color: #f1f5f9;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.3s ease;
    
    &.loaded {
      opacity: 1;
    }
  }
  
  &:hover img.loaded {
    transform: scale(1.05);
  }
  
  .loading-placeholder {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    color: #94a3b8;
    position: absolute;
    
    .spinner {
      width: 20px;
      height: 20px;
      border: 2px solid #e2e8f0;
      border-top: 2px solid #3b82f6;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`,E_=C.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: ${e=>e.color};
  color: white;
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 20px;
`,j_=C.div`
  padding: 15px;
  position: relative;
`,b_=C.h3`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
  color: var(--gray-dark);
`,P_=C.div`
  font-size: 18px;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 10px;
  
  span {
    font-size: 13px;
    color: var(--gray);
    margin-left: 5px;
    font-weight: normal;
  }
`,T_=C.div`
  display: flex;
  justify-content: space-between;
  
  button {
    flex: 1;
    padding: 8px;
    font-size: 13px;
    
    &:first-child {
      margin-right: 5px;
    }
  }
`,Pc=C.table`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  
  th, td {
    padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid #eee;
  }
  
  th {
    font-weight: 500;
    color: var(--gray);
    background-color: var(--gray-lighter);
  }
  
  tbody tr:hover {
    background-color: var(--gray-lighter);
  }
`,or=C.span`
  display: inline-block;
  padding: 4px 8px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  
  &.pending {
    background-color: #fff3cd;
    color: #856404;
  }
  
  &.processing {
    background-color: #cce5ff;
    color: #004085;
  }
  
  &.completed {
    background-color: #d4edda;
    color: #155724;
  }
`,Tc=C.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,Oh=C.div`
  background: white;
  border-radius: var(--radius);
  padding: 30px;
  max-width: 500px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  
  h2 {
    margin-bottom: 25px;
    color: var(--text-color);
    display: flex;
    align-items: center;
    gap: 10px;
  }
`,ar=C.div`
  margin-bottom: 20px;
  
  label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    color: var(--text-color);
    font-size: 14px;
  }
  
  input, select, textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: var(--radius);
    font-size: 14px;
    transition: var(--transition);
    
    &:focus {
      outline: none;
      border-color: var(--primary-color);
      box-shadow: 0 0 0 3px rgba(233, 69, 96, 0.1);
    }
  }
  
  textarea {
    resize: vertical;
    min-height: 80px;
  }
`,R_=C.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 8px;
  margin-top: 10px;
`,A_=C.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  border: 3px solid ${e=>e.$selected?"var(--text-color)":"transparent"};
  transition: var(--transition);
  
  &:hover {
    transform: scale(1.1);
  }
`,N_=C.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  margin-top: 10px;
`,O_=C.div`
  width: 70px;
  height: 80px;
  border: 2px solid ${e=>e.$selected?"var(--primary-color)":"#ddd"};
  border-radius: var(--radius);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--transition);
  background: ${e=>e.$selected?"rgba(233, 69, 96, 0.1)":"white"};
  position: relative;
  padding: 8px 4px;
  
  &:hover {
    border-color: var(--primary-color);
    background: rgba(233, 69, 96, 0.1);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .icon-label {
    font-size: 9px;
    color: var(--gray);
    margin-top: 6px;
    text-align: center;
    line-height: 1.1;
    font-weight: 500;
    word-wrap: break-word;
    hyphens: auto;
    max-width: 100%;
  }
`,zh=C.div`
  display: flex;
  gap: 15px;
  justify-content: flex-end;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #eee;
`,z_=C.div`
  margin-top: 20px;
  padding: 20px;
  background: #f8fafc;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  
  h4 {
    color: var(--gray-dark);
    margin-bottom: 15px;
    font-size: 16px;
    font-weight: 600;
  }
`,I_=C.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr auto;
  gap: 10px;
  align-items: end;
  margin-bottom: 20px;
  
  input, select {
    padding: 10px;
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    font-size: 14px;
    
    &:focus {
      outline: none;
      border-color: var(--primary-color);
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }
  }
  
  button {
    padding: 10px 15px;
    background: var(--primary-color);
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.2s ease;
    
    &:hover {
      background: var(--primary-dark);
    }
    
    &:disabled {
      background: #94a3b8;
      cursor: not-allowed;
    }
  }
`,M_=C.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,L_=C.div`
  display: flex;
  justify-content: between;
  align-items: center;
  padding: 12px 15px;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  
  .info {
    flex: 1;
    display: flex;
    gap: 15px;
    align-items: center;
    
    .name {
      font-weight: 500;
      color: var(--gray-dark);
    }
    
    .price {
      color: var(--primary-color);
      font-weight: 600;
    }
    
    .unit {
      color: var(--gray);
      font-size: 13px;
    }
  }
  
  .actions {
    display: flex;
    gap: 8px;
    
    button {
      padding: 6px 8px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.2s ease;
      
      &.delete {
        background: #fee2e2;
        color: #dc2626;
        
        &:hover {
          background: #fecaca;
        }
      }
    }
  }
`,$_=C.div`
  background: white;
  border-radius: var(--radius);
  padding: 30px;
  max-width: 600px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  
  h2 {
    margin-bottom: 25px;
    color: var(--text-color);
    display: flex;
    align-items: center;
    gap: 10px;
  }
`,D_=C.div`
  background: #f8f9fa;
  border-radius: var(--radius);
  padding: 20px;
  margin-bottom: 25px;
  
  .detail-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0;
    border-bottom: 1px solid #eee;
    
    &:last-child {
      border-bottom: none;
      margin-top: 10px;
      padding-top: 15px;
      border-top: 2px solid #ddd;
      font-weight: 600;
    }
    
    .label {
      color: var(--gray);
      font-weight: 500;
    }
    
    .value {
      color: var(--text-color);
      font-weight: 500;
    }
  }
`,U_=C.div`
  margin: 25px 0;
  text-align: center;
  
  .voucher-title {
    margin-bottom: 15px;
    color: var(--text-color);
    font-weight: 600;
  }
  
  .voucher-image {
    max-width: 100%;
    max-height: 300px;
    border-radius: var(--radius);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: var(--transition);
    
    &:hover {
      transform: scale(1.02);
    }
  }
  
  .no-voucher {
    padding: 40px;
    background: #f8f9fa;
    border-radius: var(--radius);
    color: var(--gray);
    border: 2px dashed #ddd;
  }
`,F_=C.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-top: 25px;
  
  .action-btn {
    padding: 12px 20px;
    border: none;
    border-radius: var(--radius);
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
    display: flex;
    align-items: center;
    gap: 8px;
    
    &.approve {
      background: #22c55e;
      color: white;
      
      &:hover {
        background: #16a34a;
        transform: translateY(-1px);
      }
    }
    
    &.reject {
      background: #ef4444;
      color: white;
      
      &:hover {
        background: #dc2626;
        transform: translateY(-1px);
      }
    }
    
    &.close {
      background: var(--gray);
      color: white;
      
      &:hover {
        background: var(--gray-dark);
      }
    }
    
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      transform: none;
    }
  }
`,B_=C.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 10px 0;
  padding: 15px;
  background: #f8fafc;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
`,V_=C.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 80px;
  position: relative;
  
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 15px;
    right: -20px;
    width: 32px;
    height: 2px;
    background: ${e=>e.$isCompleted?"#10b981":"#e2e8f0"};
    z-index: 1;
  }
`,H_=C.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${e=>e.$isActive?e.$color:e.$isCompleted?"#10b981":"#e2e8f0"};
  color: white;
  font-size: 14px;
  margin-bottom: 8px;
  transition: all 0.3s ease;
  cursor: ${e=>e.$canAdvance?"pointer":"default"};
  border: 2px solid ${e=>e.$isActive?e.$color:e.$isCompleted?"#10b981":"#e2e8f0"};
  
  &:hover {
    ${e=>e.$canAdvance&&`
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0,0,0,0.15);
    `}
  }
`,W_=C.div`
  font-size: 11px;
  text-align: center;
  color: ${e=>e.$isActive?e.$color:e.$isCompleted?"#10b981":"#6b7280"};
  font-weight: ${e=>e.$isActive||e.$isCompleted?"600":"400"};
  max-width: 80px;
  line-height: 1.2;
`,q_=C.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-left: auto;
`,Z_=C.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;
`,G_=C.div`
  display: flex;
  gap: 8px;
  margin-bottom: 15px;
`,Ih=C.button`
  padding: 8px 16px;
  border: 1px solid #e2e8f0;
  background: ${e=>e.$active?"var(--primary-color)":"white"};
  color: ${e=>e.$active?"white":"#64748b"};
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s ease;

  &:hover {
    background: ${e=>e.$active?"var(--primary-color)":"#f1f5f9"};
  }
`,Q_=C.div`
  border: 2px dashed #cbd5e1;
  border-radius: 8px;
  padding: 30px;
  text-align: center;
  background: #f8fafc;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--primary-color);
    background: #f0f9ff;
  }

  &.dragover {
    border-color: var(--primary-color);
    background: #f0f9ff;
  }

  input[type="file"] {
    display: none;
  }
`,Y_=C.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  background: #f8fafc;
  border-radius: 8px;
  border: 1px solid #e2e8f0;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 6px;
    border: 1px solid #e2e8f0;
  }
`,K_=C.div`
  flex: 1;
  
  .filename {
    font-weight: 500;
    color: #374151;
    margin-bottom: 4px;
  }
  
  .filesize {
    font-size: 12px;
    color: #6b7280;
  }
`,J_=C.button`
  padding: 6px;
  background: #ef4444;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  
  &:hover {
    background: #dc2626;
  }
`,X_=C.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 30px;
  padding: 20px;
`,Mh=C.button`
  padding: 8px 12px;
  border: 1px solid #e2e8f0;
  background: ${e=>e.$active?"var(--primary-color)":"white"};
  color: ${e=>e.$active?"white":"#374151"};
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background: ${e=>e.$active?"var(--primary-color)":"#f1f5f9"};
    border-color: var(--primary-color);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,ek=C.div`
  font-size: 14px;
  color: #6b7280;
  margin: 0 15px;
`,tk=P.memo(({src:e,alt:t,onLoad:r,onError:n})=>{const[i,s]=P.useState(!0),[o,l]=P.useState(!1),[c,u]=P.useState("");return P.useEffect(()=>{if(!e)return;s(!0),l(!1);const d=new Image;d.onload=()=>{u(e),s(!1),r&&r()},d.onerror=()=>{l(!0),s(!1),n&&n()},d.src=e},[e,r,n]),a.jsxs(a.Fragment,{children:[i&&a.jsxs("div",{className:"loading-placeholder",children:[a.jsx("div",{className:"spinner"}),a.jsx("span",{children:"Cargando..."})]}),o&&a.jsxs("div",{className:"loading-placeholder",children:[a.jsx(Gw,{size:32}),a.jsx("span",{children:"Error al cargar"})]}),c&&!o&&a.jsx("img",{src:c,alt:t,className:i?"":"loaded",loading:"lazy"})]})});function rk({user:e,logout:t,categories:r,products:n,orders:i,payments:s,setCategories:o,setProducts:l,setOrders:c,setPayments:u,showToast:d,categoryService:p,productService:v,orderService:k,paymentService:x,servicesInitialized:w}){const[_,m]=P.useState("dashboard"),[f,g]=P.useState("active"),[S,T]=P.useState(!1),[A,b]=P.useState(!1),[O,X]=P.useState(!1),[Y,Re]=P.useState(null),[Me,mt]=P.useState(null),[St,kr]=P.useState(!1),[ce,qe]=P.useState(null),[L,W]=P.useState("verify"),[q,ae]=P.useState({name:"",icon:"Apple",color:"#e74c3c"}),[z,ye]=P.useState({name:"",category_id:"",price:"",unit:"",description:"",image:"",presentations:[]}),[et,ot]=P.useState("url"),[fe,Ue]=P.useState(null),[at,Ze]=P.useState(!1),[Fe,Be]=P.useState({name:"",price:"",unit:""}),[Ge,Ui]=P.useState(1),Dn=12,uo=[{id:"dashboard",label:"Dashboard",icon:Du},{id:"categories",label:"Categorías",icon:wn},{id:"products",label:"Productos",icon:sr},{id:"orders",label:"Pedidos",icon:da},{id:"payments",label:"Historial",icon:js}],Fi=h=>{var M;return((M=bc[h])==null?void 0:M.label)||h},ir=h=>{var M;return((M=bc[h])==null?void 0:M.color)||"#6b7280"},po=h=>{const M=h.status,D=s.find(G=>G.order_id===h.id);switch(M){case"awaiting_payment":return(D==null?void 0:D.status)==="pending"&&(D!=null&&D.voucher)?[{action:"verify_payment",label:"Verificar Pago",icon:bs,color:"#3b82f6"}]:[];case"preparing":return[{action:"mark_ready",label:"Marcar Listo",icon:yh,color:"#8b5cf6"}];case"ready_for_shipping":return[{action:"mark_shipped",label:"Marcar Enviado",icon:pa,color:"#06b6d4"}];case"shipped":return[{action:"mark_delivered",label:"Marcar Entregado",icon:Wn,color:"#10b981"}];default:return[]}},sn=(h,M)=>{c(i.map(G=>G.id===h?{...G,status:M}:G)),d(`Pedido ${{preparing:"alistado para preparación",ready_for_shipping:"marcado como listo para envío",shipped:"marcado como enviado",delivered:"marcado como entregado"}[M]}`,"success")},Bi=()=>[{key:"awaiting_payment",label:"Esperando Pago",icon:ah,color:"#f59e0b"},{key:"preparing",label:"Preparando",icon:sr,color:"#3b82f6"},{key:"ready_for_shipping",label:"Listo para Envío",icon:yh,color:"#8b5cf6"},{key:"shipped",label:"Enviado",icon:pa,color:"#06b6d4"},{key:"delivered",label:"Entregado",icon:Wn,color:"#10b981"}],Sr=h=>Bi().findIndex(D=>D.key===h),fo=(h,M)=>{const D=Sr(h.status),G=s.find(xe=>xe.order_id===h.id);return!(M!==D+1||h.status==="awaiting_payment"&&(!G||G.status!=="verified"))},Vi=h=>{const M=Bi(),D=Sr(h.status),G=s.find(xe=>xe.order_id===h.id);return a.jsxs(B_,{children:[M.map((xe,wo)=>{const _o=wo<D,kp=wo===D,Sp=wo===D+1&&fo(h,wo),Cp=h.status==="awaiting_payment"&&xe.key==="awaiting_payment"&&G&&G.status==="pending"&&G.voucher,_1=xe.icon;return a.jsxs(V_,{$isCompleted:_o,children:[a.jsx(H_,{$isActive:kp,$isCompleted:_o,$canAdvance:Sp||Cp,$color:xe.color,onClick:()=>{Cp?qi(G,"verify"):Sp&&sn(h.id,xe.key)},children:_o?a.jsx(Wn,{size:16}):a.jsx(_1,{size:16})}),a.jsx(W_,{$isActive:kp,$isCompleted:_o,$color:xe.color,children:xe.label})]},xe.key)}),a.jsxs(q_,{children:[h.status==="awaiting_payment"&&G&&G.status==="pending"&&G.voucher&&a.jsxs("div",{style:{background:"#fee2e2",color:"#dc2626",padding:"6px 12px",borderRadius:"6px",fontSize:"12px",fontWeight:"500",display:"flex",alignItems:"center",gap:"6px"},children:[a.jsx(ua,{size:14}),"Click para verificar pago"]}),h.status==="cancelled"&&a.jsx(or,{style:{background:"#ef4444",color:"white",fontSize:"12px"},children:"Cancelado"})]})]})},lt=h=>{switch(h){case"transfer":return"Transferencia bancaria";case"yape":return"Yape";case"plin":return"Plin";case"cod":return"Pago contra entrega";default:return h}},on=h=>{const M={year:"numeric",month:"long",day:"numeric"};return new Date(h).toLocaleDateString("es-ES",M)},ho=async h=>{if(window.confirm("¿Estás seguro de eliminar esta categoría?"))try{T(!0);const M=await p.delete(h);M.success?(o(r.filter(D=>D.id!==h)),d("Categoría eliminada correctamente","success")):d(M.message||"Error al eliminar la categoría","error")}catch(M){console.error("Delete category error:",M),d("Error al eliminar la categoría","error")}finally{T(!1)}},Hi=async h=>{if(window.confirm("¿Estás seguro de eliminar este producto?"))try{T(!0);const M=await v.delete(h);M.success?(l(n.filter(D=>D.id!==h)),d("Producto eliminado correctamente","success")):d(M.message||"Error al eliminar el producto","error")}catch(M){console.error("Delete product error:",M),d("Error al eliminar el producto","error")}finally{T(!1)}},mo=()=>{ae({name:"",icon:"Apple",color:"#e74c3c"}),b(!0)},Un=()=>{b(!1),Re(null),ae({name:"",icon:"Apple",color:"#e74c3c"})},Wi=()=>{ye({name:"",category_id:r.length>0?r[0].id.toString():"",price:"",unit:"",description:"",image:"",presentations:[]}),Ze(!1),Be({name:"",price:"",unit:""}),X(!0)},an=()=>{X(!1),mt(null),ye({name:"",category_id:"",price:"",unit:"",description:"",image:"",presentations:[]}),Ze(!1),Be({name:"",price:"",unit:""}),ot("url"),Ue(null)},Fn=h=>{if(h&&h.type.startsWith("image/")){const M=new FileReader;M.onload=D=>{const G=D.target.result;Ue({file:h,dataUrl:G,name:h.name,size:h.size}),ye({...z,image:G})},M.readAsDataURL(h)}else d("Por favor selecciona un archivo de imagen válido","error")},Cr=h=>{ot(h),h==="url"?(Ue(null),ye({...z,image:""})):ye({...z,image:""})},Ll=()=>{Ue(null),ye({...z,image:""})},$l=h=>{if(h===0)return"0 Bytes";const M=1024,D=["Bytes","KB","MB","GB"],G=Math.floor(Math.log(h)/Math.log(M));return parseFloat((h/Math.pow(M,G)).toFixed(2))+" "+D[G]},Dt=()=>{if(Fe.name&&Fe.price&&Fe.unit){const h={id:Date.now(),...Fe,price:parseFloat(Fe.price)};ye(M=>({...M,presentations:[...M.presentations,h]})),Be({name:"",price:"",unit:""})}},Dl=h=>{ye(M=>({...M,presentations:M.presentations.filter(D=>D.id!==h)}))},Ul=h=>{ye(M=>({...M,unit:h})),Ze(h==="presentation"),h!=="presentation"&&ye(M=>({...M,presentations:[]}))},Fl=h=>{Re(h),ae({name:h.name,icon:h.icon,color:h.color}),b(!0)},Bl=h=>{mt(h),ye({name:h.name,category_id:h.category_id.toString(),price:h.price.toString(),unit:h.unit,description:h.description||"",image:h.image||"",presentations:h.presentations||[]}),Ze(h.unit==="presentation"),Be({name:"",price:"",unit:""}),ot("url"),Ue(null),X(!0)},Vl=async h=>{if(h.preventDefault(),!q.name.trim()){d("El nombre de la categoría es obligatorio","error");return}try{T(!0);const M={name:q.name.trim(),icon:q.icon,color:q.color};if(Y){const D=await p.update(Y.id,M);if(D.success){const G=r.map(xe=>xe.id===Y.id?D.category:xe);o(G),d("Categoría actualizada correctamente","success"),Un()}else d(D.message||"Error al actualizar la categoría","error")}else{const D=await p.create(M);D.success?(o([...r,D.category]),d("Categoría creada correctamente","success"),Un()):d(D.message||"Error al crear la categoría","error")}}catch(M){console.error("Category submit error:",M),d("Error al procesar la categoría","error")}finally{T(!1)}},go=h=>{if(h.preventDefault(),!z.name.trim()||!z.category_id||!z.price||!z.unit){d("Todos los campos obligatorios deben ser completados","error");return}if(z.unit==="presentation"&&z.presentations.length===0){d("Debes agregar al menos una presentación para productos envasados","error");return}const M=parseFloat(z.price);if(isNaN(M)||M<=0){d("El precio debe ser un número válido mayor a 0","error");return}if(Me){const D=n.map(G=>G.id===Me.id?{...G,name:z.name.trim(),category_id:parseInt(z.category_id),price:M,unit:z.unit,description:z.description.trim(),image:z.image.trim()||G.image,presentations:z.unit==="presentation"?z.presentations:void 0}:G);l(D),d("Producto actualizado correctamente","success")}else{const D={id:Math.max(...n.map(xe=>xe.id),0)+1,name:z.name.trim(),category_id:parseInt(z.category_id),price:M,unit:z.unit,description:z.description.trim(),image:z.image.trim()||"https://images.unsplash.com/photo-1546069901-ba9599a7e63c"};z.unit==="presentation"&&(D.presentations=z.presentations),l([...n,D]);const G=Math.ceil((n.length+1)/Dn);Ui(G),d("Producto creado correctamente","success")}an()},qi=(h,M="verify")=>{qe(h),W(M),kr(!0)},Bn=()=>{qe(null),kr(!1)},Hl=h=>{const M=s.map(G=>G.id===h?{...G,status:"verified"}:G);u(M);const D=s.find(G=>G.id===h);if(D){const G=i.map(xe=>xe.id===D.order_id&&xe.status==="awaiting_payment"?{...xe,status:"preparing",payment_status:"verified"}:xe);c(G)}d("Pago aprobado - Pedido listo para preparar","success"),Bn()},yo=h=>{const M=s.map(G=>G.id===h?{...G,status:"rejected"}:G);u(M);const D=s.find(G=>G.id===h);if(D){const G=i.map(xe=>xe.id===D.order_id?{...xe,status:"cancelled",payment_status:"rejected"}:xe);c(G)}d("Pago rechazado - Pedido cancelado","error"),Bn()},vo=h=>({Apple:ih,Carrot:oh,Beef:sh,Fish:ph,Milk:gh,Wheat:Sh,Wine:Ch,ShoppingBasket:wh,Coffee:lh,Egg:dh,Droplets:uh,Zap:Bu,Flower2:fh,Soup:_h,Utensils:kh,Package:sr,Tags:wn})[h]||sr,xo=[{name:"Apple",component:ih,label:"Frutas Frescas"},{name:"Carrot",component:oh,label:"Verduras y Hortalizas"},{name:"Beef",component:sh,label:"Carnes y Aves"},{name:"Fish",component:ph,label:"Pescados y Mariscos"},{name:"Milk",component:gh,label:"Productos Lácteos"},{name:"Egg",component:dh,label:"Huevos y Derivados"},{name:"Wheat",component:Sh,label:"Cereales y Granos"},{name:"Coffee",component:lh,label:"Café e Infusiones"},{name:"Wine",component:Ch,label:"Bebidas Alcohólicas"},{name:"Droplets",component:uh,label:"Bebidas y Jugos"},{name:"ShoppingBasket",component:wh,label:"Abarrotes y Conservas"},{name:"Zap",component:Bu,label:"Bebidas Energéticas"},{name:"Flower2",component:fh,label:"Hierbas y Condimentos"},{name:"Soup",component:_h,label:"Comidas Preparadas"},{name:"Utensils",component:kh,label:"Platos Elaborados"},{name:"Package",component:sr,label:"Productos Generales"}],y=["#e74c3c","#2ecc71","#f1c40f","#e67e22","#3498db","#d35400","#9b59b6","#34495e","#1abc9c","#e91e63","#ff9800","#8bc34a","#795548","#ff5722","#607d8b","#4caf50"],R=(h,M)=>{const D=s.find(G=>G.order_id===h);switch(M){case"verify_payment":D&&qi(D);break;case"mark_ready":sn(h,"ready_for_shipping");break;case"mark_shipped":sn(h,"shipped");break;case"mark_delivered":sn(h,"delivered");break}},V=h=>{const M=po(h);if(M.length===0){const D=bc[h.status];return a.jsx("div",{style:{display:"flex",alignItems:"center",gap:"8px",fontSize:"14px",color:"#6b7280"},children:(D==null?void 0:D.nextSteps.length)>0?a.jsx("span",{children:D.nextSteps[0]}):a.jsx(or,{style:{background:(D==null?void 0:D.color)||"#6b7280",color:"white",fontSize:"12px"},children:(D==null?void 0:D.label)||h.status})})}return a.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:M.map((D,G)=>{const xe=D.icon;return a.jsxs("button",{className:"btn",style:{backgroundColor:D.color,color:"white",padding:"6px 12px",fontSize:"13px",display:"flex",alignItems:"center",gap:"6px"},onClick:()=>R(h.id,D.action),children:[a.jsx(xe,{size:14}),D.label]},G)})})},he=(()=>{switch(f){case"active":return i.filter(h=>!["delivered","cancelled"].includes(h.status));case"delivered":return i.filter(h=>h.status==="delivered");case"all":return i;default:return i}})(),Qe=()=>{const h=(Ge-1)*Dn,M=h+Dn;return n.slice(h,M)},Wl=Math.ceil(n.length/Dn),f1=Qe(),h1=i.filter(h=>h.status==="awaiting_payment").length,m1=i.filter(h=>h.status==="preparing").length;i.filter(h=>h.status==="ready_for_shipping").length;const g1=i.filter(h=>h.status==="shipped").length,_p=i.filter(h=>h.status==="delivered").length,y1=i.filter(h=>!["delivered","cancelled"].includes(h.status)).length,v1=s.filter(h=>h.status==="pending"&&h.voucher).length,x1=n.length,w1=i.filter(h=>h.status==="delivered").reduce((h,M)=>h+M.total,0);return a.jsxs(l_,{children:[a.jsxs(c_,{children:[a.jsxs(u_,{children:[a.jsx(sr,{size:24}),a.jsx("h2",{children:"Mercado Express"})]}),a.jsxs(d_,{children:[uo.map(h=>a.jsxs(Rh,{className:_===h.id?"active":"",onClick:()=>m(h.id),children:[a.jsx(h.icon,{size:18}),h.label]},h.id)),a.jsxs(Rh,{onClick:t,children:[a.jsx(C0,{size:18}),"Cerrar sesión"]})]})]}),a.jsxs(p_,{children:[a.jsxs(f_,{children:[a.jsxs(h_,{children:[a.jsx(Uu,{size:16}),a.jsx("input",{type:"text",placeholder:"Buscar..."})]}),a.jsxs(m_,{children:[a.jsx("span",{children:"Admin"}),a.jsx(g_,{children:"A"})]})]}),a.jsxs("div",{children:[a.jsxs(rs,{$active:_==="dashboard",children:[a.jsx("h2",{children:"Dashboard"}),a.jsxs(y_,{children:[a.jsxs(cn,{children:[a.jsx(un,{style:{backgroundColor:"#f59e0b"},children:a.jsx(ah,{size:24})}),a.jsxs(dn,{children:[a.jsx("h3",{children:"Esperando Pago"}),a.jsx("p",{children:h1})]})]}),a.jsxs(cn,{children:[a.jsx(un,{style:{backgroundColor:"#ef4444"},children:a.jsx(ua,{size:24})}),a.jsxs(dn,{children:[a.jsx("h3",{children:"Pagos por Verificar"}),a.jsx("p",{children:v1})]})]}),a.jsxs(cn,{children:[a.jsx(un,{style:{backgroundColor:"#3b82f6"},children:a.jsx(sr,{size:24})}),a.jsxs(dn,{children:[a.jsx("h3",{children:"Preparando"}),a.jsx("p",{children:m1})]})]}),a.jsxs(cn,{children:[a.jsx(un,{style:{backgroundColor:"#06b6d4"},children:a.jsx(pa,{size:24})}),a.jsxs(dn,{children:[a.jsx("h3",{children:"Enviados"}),a.jsx("p",{children:g1})]})]}),a.jsxs(cn,{children:[a.jsx(un,{style:{backgroundColor:"#10b981"},children:a.jsx(Wn,{size:24})}),a.jsxs(dn,{children:[a.jsx("h3",{children:"Entregados"}),a.jsx("p",{children:_p})]})]}),a.jsxs(cn,{children:[a.jsx(un,{children:a.jsx(sr,{size:24})}),a.jsxs(dn,{children:[a.jsx("h3",{children:"Total productos"}),a.jsx("p",{children:x1})]})]}),a.jsxs(cn,{children:[a.jsx(un,{children:a.jsx(js,{size:24})}),a.jsxs(dn,{children:[a.jsx("h3",{children:"Ingresos"}),a.jsxs("p",{children:["S/ ",w1.toFixed(2)]})]})]})]}),a.jsxs("div",{style:{backgroundColor:"white",borderRadius:"var(--radius)",padding:"20px",boxShadow:"var(--shadow)"},children:[a.jsx("h3",{style:{marginBottom:"15px",color:"var(--gray-dark)"},children:"Pedidos recientes"}),a.jsxs(Pc,{children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"ID"}),a.jsx("th",{children:"Cliente"}),a.jsx("th",{children:"Fecha"}),a.jsx("th",{children:"Monto"}),a.jsx("th",{children:"Estado"}),a.jsx("th",{children:"Acciones"})]})}),a.jsx("tbody",{children:i.slice(0,5).map(h=>a.jsxs("tr",{children:[a.jsx("td",{children:h.id}),a.jsx("td",{children:h.customer}),a.jsx("td",{children:on(h.date)}),a.jsxs("td",{children:["S/ ",h.total.toFixed(2)]}),a.jsx("td",{children:a.jsx(or,{className:h.status,children:Fi(h.status)})}),a.jsx("td",{children:V(h)})]},h.id))})]})]})]}),a.jsxs(rs,{$active:_==="categories",children:[a.jsxs(Ah,{children:[a.jsx("h2",{children:"Gestión de Categorías"}),a.jsxs("button",{className:"btn btn-primary",onClick:mo,children:[a.jsx(xn,{size:16}),"Nueva Categoría"]})]}),a.jsx(v_,{children:r.map(h=>{const M=n.filter(G=>G.category_id===h.id).length,D=vo(h.icon);return a.jsxs(x_,{children:[a.jsx(w_,{color:h.color,children:a.jsx(D,{size:30})}),a.jsx("h3",{children:h.name}),a.jsxs("div",{style:{fontSize:"14px",color:"var(--gray)"},children:[M," productos"]}),a.jsxs(__,{children:[a.jsx(Nh,{className:"edit",onClick:()=>Fl(h),children:a.jsx(vh,{size:14})}),a.jsx(Nh,{className:"delete",onClick:()=>ho(h.id),children:a.jsx(jc,{size:14})})]})]},h.id)})})]}),a.jsxs(rs,{$active:_==="products",children:[a.jsxs(Ah,{children:[a.jsx("h2",{children:"Gestión de Productos"}),a.jsxs("button",{className:"btn btn-primary",onClick:Wi,children:[a.jsx(xn,{size:16}),"Nuevo Producto"]})]}),a.jsx(k_,{children:f1.map(h=>{const M=r.find(D=>D.id===h.category_id);return a.jsxs(S_,{children:[a.jsx(C_,{children:a.jsx(tk,{src:h.image,alt:h.name})}),a.jsxs(j_,{children:[a.jsx(E_,{color:M?M.color:"#666",children:M?M.name:"Sin categoría"}),a.jsx(b_,{children:h.name}),a.jsxs(P_,{children:["S/ ",h.price.toFixed(2)," ",a.jsxs("span",{children:["/ ",h.unit]})]}),a.jsxs(T_,{children:[a.jsxs("button",{className:"btn btn-secondary",onClick:()=>Bl(h),children:[a.jsx(vh,{size:16}),"Editar"]}),a.jsxs("button",{className:"btn btn-danger",onClick:()=>Hi(h.id),children:[a.jsx(jc,{size:16}),"Eliminar"]})]})]})]},h.id)})}),Wl>1&&a.jsxs(X_,{children:[a.jsx(Mh,{onClick:()=>Ui(Ge-1),disabled:Ge===1,children:"Anterior"}),a.jsxs(ek,{children:["Página ",Ge," de ",Wl," (",n.length," productos)"]}),a.jsx(Mh,{onClick:()=>Ui(Ge+1),disabled:Ge===Wl,children:"Siguiente"})]})]}),a.jsxs(rs,{$active:_==="orders",children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px"},children:[a.jsx("h2",{children:"Gestión de Pedidos"}),a.jsxs("div",{style:{display:"flex",gap:"10px"},children:[a.jsxs("button",{className:`btn ${f==="active"?"btn-primary":"btn-secondary"}`,onClick:()=>g("active"),style:{fontSize:"14px"},children:["Activos (",y1,")"]}),a.jsxs("button",{className:`btn ${f==="delivered"?"btn-primary":"btn-secondary"}`,onClick:()=>g("delivered"),style:{fontSize:"14px"},children:["Entregados (",_p,")"]}),a.jsxs("button",{className:`btn ${f==="all"?"btn-primary":"btn-secondary"}`,onClick:()=>g("all"),style:{fontSize:"14px"},children:["Todos (",i.length,")"]})]})]}),a.jsx("div",{style:{backgroundColor:"white",borderRadius:"var(--radius)",padding:"20px",boxShadow:"var(--shadow)"},children:a.jsxs(Pc,{children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"ID"}),a.jsx("th",{children:"Cliente"}),a.jsx("th",{children:"Teléfono"}),a.jsx("th",{children:"Fecha"}),a.jsx("th",{children:"Total"}),a.jsx("th",{children:"Estado"}),a.jsx("th",{children:"Pago"}),a.jsx("th",{children:"Proceso de Entrega"})]})}),a.jsx("tbody",{children:he.map(h=>a.jsxs("tr",{children:[a.jsx("td",{children:h.id}),a.jsx("td",{children:h.customer}),a.jsx("td",{children:h.customer_phone}),a.jsx("td",{children:on(h.date)}),a.jsxs("td",{children:["S/ ",h.total.toFixed(2)]}),a.jsx("td",{children:a.jsx(or,{style:{background:ir(h.status),color:"white",fontWeight:"500"},children:Fi(h.status)})}),a.jsx("td",{children:a.jsx(or,{className:h.payment_status==="verified"?"completed":"pending",children:h.payment_status==="verified"?"Verificado":"Pendiente"})}),a.jsx("td",{children:Vi(h)})]},h.id))})]})})]}),a.jsxs(rs,{$active:_==="payments",children:[a.jsx("h2",{children:"Historial de Pagos"}),a.jsx("p",{style:{color:"#6b7280",marginBottom:"20px",fontSize:"14px"},children:"📋 Historial de pagos procesados (aprobados y rechazados). Los pagos pendientes de verificación se manejan desde la sección de Pedidos."}),a.jsx("div",{style:{backgroundColor:"white",borderRadius:"var(--radius)",padding:"20px",boxShadow:"var(--shadow)"},children:a.jsxs(Pc,{children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"ID Pedido"}),a.jsx("th",{children:"Cliente"}),a.jsx("th",{children:"Fecha"}),a.jsx("th",{children:"Monto"}),a.jsx("th",{children:"Método"}),a.jsx("th",{children:"Estado"}),a.jsx("th",{children:"Acciones"})]})}),a.jsx("tbody",{children:s.filter(h=>h.status!=="pending").map(h=>a.jsxs("tr",{children:[a.jsx("td",{children:h.order_id}),a.jsx("td",{children:h.customer}),a.jsx("td",{children:on(h.date)}),a.jsxs("td",{children:["S/ ",h.amount.toFixed(2)]}),a.jsx("td",{children:lt(h.method)}),a.jsx("td",{children:a.jsx(or,{className:h.status==="verified"?"completed":(h.status==="rejected","pending"),style:h.status==="rejected"?{background:"#fee2e2",color:"#dc2626"}:{},children:h.status==="verified"?"Verificado":h.status==="rejected"?"Rechazado":"Pendiente"})}),a.jsx("td",{children:h.voucher?a.jsxs("button",{className:"btn btn-secondary",onClick:()=>qi(h,"view"),style:{fontSize:"12px",padding:"4px 8px"},children:[a.jsx(bs,{size:14}),"Ver Comprobante"]}):a.jsx("span",{style:{color:"#6b7280",fontSize:"13px"},children:"Sin comprobante"})})]},h.id))})]})})]})]})]}),A&&a.jsx(Tc,{onClick:Un,children:a.jsxs(Oh,{onClick:h=>h.stopPropagation(),children:[a.jsxs("h2",{children:[a.jsx(wn,{size:24}),Y?"Editar Categoría":"Nueva Categoría"]}),a.jsxs("form",{onSubmit:Vl,children:[a.jsxs(ar,{children:[a.jsx("label",{children:"Nombre de la categoría *"}),a.jsx("input",{type:"text",value:q.name,onChange:h=>ae({...q,name:h.target.value}),placeholder:"Ej. Frutas y verduras",required:!0})]}),a.jsxs(ar,{children:[a.jsx("label",{children:"Ícono"}),a.jsx(N_,{children:xo.map(h=>{const M=h.component;return a.jsxs(O_,{$selected:q.icon===h.name,onClick:()=>ae({...q,icon:h.name}),title:h.label,children:[a.jsx(M,{size:24}),a.jsx("div",{className:"icon-label",children:h.label})]},h.name)})})]}),a.jsxs(ar,{children:[a.jsx("label",{children:"Color"}),a.jsx(R_,{children:y.map(h=>a.jsx(A_,{style:{backgroundColor:h},$selected:q.color===h,onClick:()=>ae({...q,color:h})},h))})]}),a.jsxs(zh,{children:[a.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:Un,children:[a.jsx(ci,{size:16}),"Cancelar"]}),a.jsxs("button",{type:"submit",className:"btn btn-primary",children:[a.jsx(xh,{size:16}),Y?"Actualizar Categoría":"Crear Categoría"]})]})]})]})}),O&&a.jsx(Tc,{onClick:an,children:a.jsxs(Oh,{onClick:h=>h.stopPropagation(),children:[a.jsxs("h2",{children:[a.jsx(sr,{size:24}),Me?"Editar Producto":"Nuevo Producto"]}),a.jsxs("form",{onSubmit:go,children:[a.jsxs(ar,{children:[a.jsx("label",{children:"Nombre del producto *"}),a.jsx("input",{type:"text",value:z.name,onChange:h=>ye({...z,name:h.target.value}),placeholder:"Ej. Manzana roja",required:!0})]}),a.jsxs(ar,{children:[a.jsx("label",{children:"Categoría *"}),a.jsxs("select",{value:z.category_id,onChange:h=>ye({...z,category_id:h.target.value}),required:!0,children:[a.jsx("option",{value:"",children:"Seleccionar categoría"}),r.map(h=>a.jsx("option",{value:h.id,children:h.name},h.id))]})]}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"15px"},children:[a.jsxs(ar,{children:[a.jsx("label",{children:"Precio *"}),a.jsx("input",{type:"number",step:"0.01",value:z.price,onChange:h=>ye({...z,price:h.target.value}),placeholder:"0.00",required:!0})]}),a.jsxs(ar,{children:[a.jsx("label",{children:"Unidad *"}),a.jsxs("select",{value:z.unit,onChange:h=>Ul(h.target.value),required:!0,children:[a.jsx("option",{value:"",children:"Seleccionar"}),a.jsx("option",{value:"kg",children:"Kilogramo (kg)"}),a.jsx("option",{value:"u",children:"Unidad (u)"}),a.jsx("option",{value:"l",children:"Litro (l)"}),a.jsx("option",{value:"g",children:"Gramo (g)"}),a.jsx("option",{value:"paq",children:"Paquete (paq)"}),a.jsx("option",{value:"presentation",children:"Presentaciones (productos envasados)"})]})]})]}),at&&a.jsxs(z_,{children:[a.jsx("h4",{children:"📦 Presentaciones del Producto"}),a.jsx("p",{style:{marginBottom:"15px",color:"var(--gray)",fontSize:"14px"},children:"Agrega las diferentes presentaciones disponibles (ej: 500ml, 1L, 2.5L)"}),a.jsxs(I_,{children:[a.jsxs("div",{children:[a.jsx("label",{style:{display:"block",marginBottom:"5px",fontSize:"13px",fontWeight:"500"},children:"Nombre de presentación"}),a.jsx("input",{type:"text",placeholder:"Ej: Botella 500ml",value:Fe.name,onChange:h=>Be(M=>({...M,name:h.target.value}))})]}),a.jsxs("div",{children:[a.jsx("label",{style:{display:"block",marginBottom:"5px",fontSize:"13px",fontWeight:"500"},children:"Precio"}),a.jsx("input",{type:"number",step:"0.01",placeholder:"0.00",value:Fe.price,onChange:h=>Be(M=>({...M,price:h.target.value}))})]}),a.jsxs("div",{children:[a.jsx("label",{style:{display:"block",marginBottom:"5px",fontSize:"13px",fontWeight:"500"},children:"Unidad"}),a.jsxs("select",{value:Fe.unit,onChange:h=>Be(M=>({...M,unit:h.target.value})),children:[a.jsx("option",{value:"",children:"Seleccionar"}),a.jsx("option",{value:"ml",children:"Mililitro (ml)"}),a.jsx("option",{value:"L",children:"Litro (L)"}),a.jsx("option",{value:"g",children:"Gramo (g)"}),a.jsx("option",{value:"kg",children:"Kilogramo (kg)"}),a.jsx("option",{value:"lata",children:"Lata"}),a.jsx("option",{value:"botella",children:"Botella"}),a.jsx("option",{value:"pack",children:"Pack"}),a.jsx("option",{value:"pqt",children:"Paquete"}),a.jsx("option",{value:"bolsa",children:"Bolsa"})]})]}),a.jsx("button",{type:"button",onClick:Dt,disabled:!Fe.name||!Fe.price||!Fe.unit,children:a.jsx(xn,{size:16})})]}),z.presentations.length>0&&a.jsx(M_,{children:z.presentations.map(h=>a.jsxs(L_,{children:[a.jsxs("div",{className:"info",children:[a.jsx("span",{className:"name",children:h.name}),a.jsxs("span",{className:"price",children:["S/ ",h.price.toFixed(2)]}),a.jsxs("span",{className:"unit",children:["/ ",h.unit]})]}),a.jsx("div",{className:"actions",children:a.jsx("button",{type:"button",className:"delete",onClick:()=>Dl(h.id),children:a.jsx(jc,{size:14})})})]},h.id))}),z.presentations.length===0&&a.jsx("div",{style:{textAlign:"center",padding:"20px",color:"var(--gray)",fontSize:"14px",fontStyle:"italic"},children:"No hay presentaciones agregadas. Agrega al menos una presentación."})]}),a.jsxs(ar,{children:[a.jsx("label",{children:"Imagen del producto"}),a.jsxs(Z_,{children:[a.jsxs(G_,{children:[a.jsxs(Ih,{type:"button",$active:et==="url",onClick:()=>Cr("url"),children:[a.jsx(Qw,{size:14}),"URL de imagen"]}),a.jsxs(Ih,{type:"button",$active:et==="file",onClick:()=>Cr("file"),children:[a.jsx(qw,{size:14}),"Subir archivo"]})]}),et==="url"?a.jsx("input",{type:"url",value:z.image,onChange:h=>ye({...z,image:h.target.value}),placeholder:"https://images.unsplash.com/photo-...",style:{width:"100%",padding:"12px",borderRadius:"6px",border:"1px solid #e2e8f0"}}):a.jsx(a.Fragment,{children:fe?a.jsxs(Y_,{children:[a.jsx("img",{src:fe.dataUrl,alt:"Preview"}),a.jsxs(K_,{children:[a.jsx("div",{className:"filename",children:fe.name}),a.jsx("div",{className:"filesize",children:$l(fe.size)})]}),a.jsx(J_,{onClick:Ll,children:a.jsx(ci,{size:14})})]}):a.jsxs(Q_,{onClick:()=>document.getElementById("fileInput").click(),onDrop:h=>{h.preventDefault();const M=h.dataTransfer.files[0];Fn(M)},onDragOver:h=>{h.preventDefault(),h.currentTarget.classList.add("dragover")},onDragLeave:h=>{h.currentTarget.classList.remove("dragover")},children:[a.jsx(fa,{size:32,style:{color:"#94a3b8",marginBottom:"10px"}}),a.jsx("p",{style:{margin:"0 0 5px 0",fontWeight:"500",color:"#374151"},children:"Haz click o arrastra una imagen aquí"}),a.jsx("p",{style:{margin:"0",fontSize:"12px",color:"#6b7280"},children:"PNG, JPG, GIF hasta 10MB"}),a.jsx("input",{id:"fileInput",type:"file",accept:"image/*",onChange:h=>Fn(h.target.files[0])})]})})]})]}),a.jsxs(ar,{children:[a.jsx("label",{children:"Descripción"}),a.jsx("textarea",{value:z.description,onChange:h=>ye({...z,description:h.target.value}),placeholder:"Describe las características del producto..."})]}),a.jsxs(zh,{children:[a.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:an,children:[a.jsx(ci,{size:16}),"Cancelar"]}),a.jsxs("button",{type:"submit",className:"btn btn-primary",children:[a.jsx(xh,{size:16}),Me?"Actualizar Producto":"Crear Producto"]})]})]})]})}),St&&ce&&a.jsx(Tc,{onClick:Bn,children:a.jsxs($_,{onClick:h=>h.stopPropagation(),children:[a.jsxs("h2",{children:[a.jsx(js,{size:24}),"Verificación de Pago"]}),a.jsxs(D_,{children:[a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{className:"label",children:"ID de Pago:"}),a.jsx("span",{className:"value",children:ce.id})]}),a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{className:"label",children:"ID de Pedido:"}),a.jsx("span",{className:"value",children:ce.order_id})]}),a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{className:"label",children:"Cliente:"}),a.jsx("span",{className:"value",children:ce.customer})]}),a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{className:"label",children:"Fecha:"}),a.jsx("span",{className:"value",children:on(ce.date)})]}),a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{className:"label",children:"Método de Pago:"}),a.jsx("span",{className:"value",children:lt(ce.method)})]}),a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{className:"label",children:"Estado Actual:"}),a.jsx("span",{className:"value",children:a.jsx(or,{className:ce.status==="verified"?"completed":(ce.status==="rejected","pending"),style:ce.status==="rejected"?{background:"#fee2e2",color:"#dc2626"}:{},children:ce.status==="verified"?"Verificado":ce.status==="rejected"?"Rechazado":"Pendiente"})})]}),a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{className:"label",children:"Monto:"}),a.jsxs("span",{className:"value",children:["S/ ",ce.amount.toFixed(2)]})]})]}),a.jsxs(U_,{children:[a.jsx("h3",{className:"voucher-title",children:"Comprobante de Pago"}),ce.voucher?a.jsx("img",{src:ce.voucher,alt:"Comprobante de pago",className:"voucher-image",onClick:()=>window.open(ce.voucher,"_blank")}):a.jsxs("div",{className:"no-voucher",children:[a.jsx(ua,{size:40,style:{marginBottom:"10px",opacity:.5}}),a.jsx("p",{children:"No se ha adjuntado comprobante de pago"}),a.jsx("small",{children:"El cliente pagará contra entrega"})]})]}),a.jsxs(F_,{children:[L==="verify"&&ce.status==="pending"&&ce.voucher&&a.jsxs(a.Fragment,{children:[a.jsxs("button",{className:"action-btn approve",onClick:()=>Hl(ce.id),children:[a.jsx(Wn,{size:18}),"Aprobar Pago"]}),a.jsxs("button",{className:"action-btn reject",onClick:()=>yo(ce.id),children:[a.jsx(Fu,{size:18}),"Rechazar Pago"]})]}),L==="view"&&a.jsx("div",{style:{textAlign:"center",padding:"10px",color:"#6b7280",fontSize:"14px"},children:"📋 Vista de solo lectura - Las verificaciones se manejan desde Pedidos"}),ce.status==="verified"&&a.jsx("div",{style:{textAlign:"center",padding:"20px"},children:a.jsxs(or,{className:"completed",style:{fontSize:"16px",padding:"10px 20px"},children:[a.jsx(Wn,{size:20}),"Pago Verificado y Aprobado"]})}),ce.status==="rejected"&&a.jsx("div",{style:{textAlign:"center",padding:"20px"},children:a.jsxs(or,{className:"pending",style:{fontSize:"16px",padding:"10px 20px",background:"#fee2e2",color:"#dc2626"},children:[a.jsx(Fu,{size:20}),"Pago Rechazado"]})}),a.jsxs("button",{className:"action-btn close",onClick:Bn,children:[a.jsx(ci,{size:18}),"Cerrar"]})]})]})})]})}const nk=Vw`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,ik=C.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`,sk=C.div`
  width: 48px;
  height: 48px;
  border: 5px solid var(--primary-light);
  border-bottom-color: var(--primary-color);
  border-radius: 50%;
  animation: ${nk} 1s linear infinite;
`;function Vu(){return a.jsx(ik,{children:a.jsx(sk,{})})}const ok=C.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`,ak=C.header`
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 90;
`,lk=C.div`
  display: flex;
  align-items: center;
`,ck=C.div`
  display: none;
  margin-right: 15px;
  cursor: pointer;
  font-size: 20px;
  
  @media (max-width: 768px) {
    display: block;
  }
`,uk=C.div`
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 10px;
    color: var(--primary-color);
  }
  
  h1 {
    font-size: 20px;
    font-weight: 600;
    color: var(--gray-dark);
  }
`,dk=C.div`
  display: flex;
  align-items: center;
  gap: 20px;
`,Lh=C.div`
  display: flex;
  align-items: center;
  background-color: var(--gray-lighter);
  border-radius: 30px;
  padding: 12px 18px;
  max-width: 400px;
  width: 100%;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  
  &:focus-within {
    background-color: white;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
  
  svg {
    color: var(--gray);
    margin-right: 12px;
    transition: color 0.3s ease;
  }
  
  &:focus-within svg {
    color: var(--primary-color);
  }
  
  input {
    background: transparent;
    border: none;
    flex: 1;
    font-size: 14px;
    color: var(--gray-dark);
    
    &::placeholder {
      color: var(--gray);
    }
    
    &:focus {
      outline: none;
    }
  }
  
  @media (max-width: 576px) {
    display: flex;
    max-width: none;
    margin: 0 20px;
  }
`,pk=C.div`
  display: flex;
  gap: 10px;
  margin: 20px 0;
  flex-wrap: wrap;
  
  @media (max-width: 576px) {
    margin: 15px 0;
    gap: 8px;
  }
`,ns=C.button`
  padding: 8px 16px;
  background: ${e=>e.$active?"var(--primary-color)":"white"};
  color: ${e=>e.$active?"white":"var(--gray-dark)"};
  border: 1px solid ${e=>e.$active?"var(--primary-color)":"#e2e8f0"};
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 6px;

  &:hover {
    background: ${e=>e.$active?"var(--primary-color)":"#f8fafc"};
    transform: translateY(-1px);
  }

  svg {
    width: 14px;
    height: 14px;
  }
  
  @media (max-width: 576px) {
    padding: 6px 12px;
    font-size: 12px;
  }
`,fk=C.div`
  position: relative;
  cursor: pointer;
  font-size: 20px;
`,hk=C.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: var(--primary-color);
  color: white;
  font-size: 12px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`,P0=C.div`
  position: relative;
  cursor: pointer;
`,mk=C.div`
  width: 36px;
  height: 36px;
  background-color: var(--primary-color);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`,gk=C.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  box-shadow: var(--shadow);
  border-radius: var(--radius);
  width: 180px;
  display: none;
  z-index: 100;
  
  ${P0}:hover & {
    display: block;
  }
  
  ul {
    list-style: none;
  }
  
  li {
    padding: 12px 15px;
    display: flex;
    align-items: center;
    transition: var(--transition);
    cursor: pointer;
    
    &:hover {
      background-color: var(--gray-lighter);
    }
    
    svg {
      margin-right: 10px;
      color: var(--gray);
    }
  }
`,yk=C.div`
  width: 250px;
  height: calc(100vh - 65px);
  background-color: white;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.05);
  padding: 20px;
  position: fixed;
  left: 0;
  top: 65px;
  overflow-y: auto;
  z-index: 80;
  
  h3 {
    margin-bottom: 15px;
    color: var(--gray-dark);
    font-size: 18px;
  }
  
  @media (max-width: 768px) {
    width: 0;
    transform: translateX(-100%);
    transition: var(--transition);
    
    &.active {
      width: 250px;
      transform: translateX(0);
    }
  }
`,vk=C.ul`
  list-style: none;
  
  li {
    padding: 10px 15px;
    border-radius: var(--radius);
    margin-bottom: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: var(--transition);
    
    &:hover {
      background-color: var(--gray-lighter);
    }
    
    &.active {
      background-color: var(--primary-light);
      color: var(--primary-dark);
    }
    
    svg {
      margin-right: 10px;
      font-size: 16px;
    }
  }
`,xk=C.main`
  flex: 1;
  margin-left: 250px;
  padding: 20px;
  overflow-y: auto;
  
  @media (max-width: 768px) {
    margin-left: 0;
    padding-bottom: 70px;
  }
`,br=C.div`
  display: ${e=>e.$active?"block":"none"};
`,wk=C.div`
  height: 300px;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1590779033100-9f60a05a013d?q=80&w=1000');
  background-size: cover;
  background-position: center;
  border-radius: var(--radius);
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  padding: 0 30px;
  color: white;
  
  @media (max-width: 576px) {
    height: 200px;
  }
`,_k=C.div`
  max-width: 600px;
  
  h2 {
    font-size: 28px;
    margin-bottom: 10px;
    
    @media (max-width: 576px) {
      font-size: 20px;
    }
  }
  
  p {
    margin-bottom: 20px;
    font-size: 16px;
  }
`,$h=C.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  }
  
  @media (max-width: 576px) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 15px;
  }
`,Dh=C.div`
  background-color: white;
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
  
  &.cart-animation {
    animation: addToCartPulse 0.6s ease;
  }
  
  @keyframes addToCartPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
`,Uh=C.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: ${e=>e.$isFavorite?"#ef4444":"rgba(255, 255, 255, 0.9)"};
  color: ${e=>e.$isFavorite?"white":"#6b7280"};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 2;
  
  &:hover {
    background: ${e=>e.$isFavorite?"#dc2626":"white"};
    transform: scale(1.1);
  }
`;C.button`
  flex: 1;
  background: var(--primary-color);
  color: white;
  border: none;
  padding: 10px;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: 13px;
  
  &:hover {
    background: var(--primary-dark);
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;const Fh=C.div`
  height: 180px;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
`,Bh=C.div`
  padding: 16px;
`,Vh=C.h3`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 6px;
  color: var(--gray-dark);
  line-height: 1.3;
`,Hh=C.div`
  font-size: 18px;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 12px;
  
  .unit {
    font-size: 12px;
    color: var(--gray);
    font-weight: normal;
    margin-left: 4px;
  }
`,Wh=C.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,qh=C.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  
  .quantity-btn {
    width: 32px;
    height: 32px;
    border: 1px solid #e2e8f0;
    background: white;
    color: var(--gray-dark);
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease;
    font-weight: 500;
    
    &:hover:not(:disabled) {
      background: var(--gray-lighter);
      border-color: var(--primary-color);
    }
    
    &:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }
  }
  
  .quantity-display {
    min-width: 40px;
    text-align: center;
    font-weight: 600;
    font-size: 16px;
    color: var(--gray-dark);
    transition: all 0.3s ease;
    
    &.quantity-pulse {
      animation: quantityPulse 0.3s ease;
    }
  }
  
  @keyframes quantityPulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); color: var(--primary-color); }
    100% { transform: scale(1); }
  }
`,Zh=C.div`
  display: flex;
  gap: 8px;
  
  .add-to-cart-btn {
    flex: 1;
    background: var(--primary-color);
    color: white;
    border: none;
    padding: 10px;
    border-radius: 6px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    font-size: 13px;
    
    &:hover {
      background: var(--primary-dark);
      transform: translateY(-1px);
    }
    
    &:active {
      transform: translateY(0);
    }
  }
  
  .view-details {
    background: var(--gray-lighter);
    color: var(--gray-dark);
    border: none;
    padding: 10px;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &:hover {
      background: var(--gray-light);
    }
  }
`,Gh=C.span`
  background: ${e=>e.$color||"#6b7280"};
  color: white;
  font-size: 11px;
  padding: 4px 8px;
  border-radius: 12px;
  font-weight: 500;
  margin-bottom: 8px;
  display: inline-block;
`,Qh=C.div`
  margin-bottom: 12px;
  
  .label {
    font-size: 12px;
    color: var(--gray);
    margin-bottom: 6px;
    display: block;
  }
  
  .presentations {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  
  .presentation-option {
    font-size: 11px;
    padding: 4px 8px;
    border: 1px solid #e2e8f0;
    background: white;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s ease;
    
    &.selected {
      background: var(--primary-color);
      color: white;
      border-color: var(--primary-color);
    }
    
    &:hover:not(.selected) {
      border-color: var(--primary-color);
      background: var(--gray-lighter);
    }
  }
`,kk=C.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Sk=C.div`
  background-color: white;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 20px;
`,Ck=C.div`
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid #eee;
  
  &:last-child {
    border-bottom: none;
  }
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`,Ek=C.div`
  width: 80px;
  height: 80px;
  border-radius: var(--radius);
  overflow: hidden;
  margin-right: 15px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: 576px) {
    margin-bottom: 10px;
  }
`,jk=C.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`,bk=C.div`
  font-weight: 500;
  margin-bottom: 5px;
`,Pk=C.div`
  color: var(--gray);
  font-size: 14px;
  margin-bottom: 5px;
`,Tk=C.div`
  display: flex;
  align-items: center;
  margin-top: auto;
`,Rk=C.div`
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: var(--radius);
  overflow: hidden;
  margin-right: 15px;
  
  button {
    width: 30px;
    height: 30px;
    background-color: var(--gray-lighter);
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  
  input {
    width: 40px;
    height: 30px;
    border: none;
    text-align: center;
    font-size: 14px;
  }
`,Ak=C.div`
  background-color: white;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 20px;
  height: fit-content;
`,Rc=C.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  
  &.total {
    border-top: 1px solid #eee;
    padding-top: 15px;
    margin-top: 15px;
    font-size: 18px;
    font-weight: 500;
    color: var(--primary-color);
  }
`,Nk=C.div`
  display: none;
  background-color: white;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px 0;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  z-index: 100;
  justify-content: space-around;
  
  @media (max-width: 768px) {
    display: flex;
  }
`,is=C.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 10px;
  color: var(--gray);
  cursor: pointer;
  
  svg {
    font-size: 20px;
    margin-bottom: 3px;
  }
  
  &.active {
    color: var(--primary-color);
  }
`,Ok=C.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  background-color: white;
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`,zk=C.div`
  height: 400px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,Ik=C.div`
  padding: 30px;
  
  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }
`,Mk=C.div`
  display: inline-block;
  background-color: ${e=>e.color};
  color: white;
  font-size: 13px;
  padding: 4px 8px;
  border-radius: 4px;
  margin-bottom: 15px;
`,Lk=C.div`
  font-size: 24px;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 20px;
  
  span {
    font-size: 14px;
    color: var(--gray);
    margin-left: 5px;
    font-weight: normal;
  }
`,$k=C.div`
  color: var(--gray);
  line-height: 1.6;
  margin-bottom: 30px;
`,Dk=C.div`
  margin-bottom: 20px;
  
  label {
    display: block;
    margin-bottom: 10px;
    color: var(--gray);
    font-size: 14px;
  }
`,Uk=C.div`
  display: flex;
  align-items: center;
  max-width: 200px;
  
  button {
    width: 40px;
    height: 40px;
    background-color: var(--gray-lighter);
    border: 1px solid #ddd;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    
    &:first-child {
      border-radius: var(--radius) 0 0 var(--radius);
    }
    
    &:last-child {
      border-radius: 0 var(--radius) var(--radius) 0;
    }
  }
  
  input {
    width: 70px;
    height: 40px;
    border-radius: 0;
    text-align: center;
    border-left: none;
    border-right: none;
  }
`,Fk=C.div`
  margin-bottom: 30px;
  font-size: 18px;
  font-weight: 500;
  
  span:first-child {
    color: var(--gray);
    margin-right: 10px;
  }
  
  span:last-child {
    color: var(--primary-color);
    font-weight: 600;
  }
`,Bk=C.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 30px;
  background: white;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
`,Zn=C.div`
  margin-bottom: 25px;
  
  label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    color: var(--text-color);
    font-size: 14px;
  }
  
  input, textarea, select {
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: var(--radius);
    font-size: 14px;
    transition: var(--transition);
    
    &:focus {
      outline: none;
      border-color: var(--primary-color);
      box-shadow: 0 0 0 3px rgba(233, 69, 96, 0.1);
    }
  }
  
  textarea {
    resize: vertical;
    min-height: 80px;
  }
`,Vk=C.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 10px;
  margin-top: 10px;
`,Wo=C.div`
  padding: 15px;
  border: 2px solid ${e=>e.$active?"var(--primary-color)":"#ddd"};
  border-radius: var(--radius);
  text-align: center;
  cursor: pointer;
  transition: var(--transition);
  background: ${e=>e.$active?"var(--primary-color)":"white"};
  color: ${e=>e.$active?"white":"var(--text-color)"};
  
  &:hover {
    border-color: var(--primary-color);
    transform: translateY(-1px);
  }
  
  svg {
    margin-bottom: 8px;
  }
  
  span {
    display: block;
    font-size: 12px;
    font-weight: 500;
  }
`,Hk=C.div`
  background: #f8f9fa;
  border-radius: var(--radius);
  padding: 20px;
  margin-bottom: 25px;
  
  h3 {
    margin-bottom: 15px;
    color: var(--text-color);
  }
`,qo=C.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  
  &:last-child {
    border-bottom: none;
    font-weight: 600;
    margin-top: 10px;
    padding-top: 15px;
    border-top: 2px solid #ddd;
  }
  
  .item-details {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .quantity {
    background: var(--primary-color);
    color: white;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 600;
  }
`,Yh=C.div`
  background: #f8f9fa;
  border: 2px solid var(--primary-color);
  border-radius: var(--radius);
  padding: 20px;
  margin-top: 15px;
  
  h4 {
    color: var(--primary-color);
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .payment-info {
    margin-bottom: 15px;
    
    p {
      margin: 5px 0;
      line-height: 1.5;
      
      strong {
        color: var(--text-color);
      }
    }
  }
  
  .instruction {
    background: #fff3cd;
    border: 1px solid #ffeaa7;
    border-radius: 6px;
    padding: 10px;
    margin-top: 10px;
    color: #856404;
    font-size: 14px;
    line-height: 1.4;
  }
  
  .qr-code {
    text-align: center;
    margin: 15px 0;
    
    img {
      max-width: 150px;
      border-radius: var(--radius);
      box-shadow: var(--shadow);
    }
  }
`,Wk=C.div`
  margin-top: 20px;
  
  .voucher-label {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 10px;
    font-weight: 500;
    color: var(--text-color);
    font-size: 14px;
  }
  
  .upload-area {
    border: 2px dashed #ddd;
    border-radius: var(--radius);
    padding: 20px;
    text-align: center;
    cursor: pointer;
    transition: var(--transition);
    background: #fafafa;
    
    &:hover {
      border-color: var(--primary-color);
      background: #f0f0f0;
    }
    
    &.dragover {
      border-color: var(--primary-color);
      background: rgba(233, 69, 96, 0.1);
    }
  }
  
  .upload-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    
    svg {
      color: var(--gray);
    }
    
    p {
      margin: 0;
      color: var(--gray);
      font-size: 14px;
    }
    
    .file-types {
      font-size: 12px;
      color: var(--gray);
    }
  }
  
  .voucher-preview {
    margin-top: 15px;
    padding: 15px;
    background: white;
    border-radius: var(--radius);
    border: 1px solid #ddd;
    
    .preview-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
      
      span {
        font-weight: 500;
        color: var(--text-color);
      }
      
      button {
        background: none;
        border: none;
        color: var(--primary-color);
        cursor: pointer;
        padding: 5px;
        border-radius: 4px;
        
        &:hover {
          background: rgba(233, 69, 96, 0.1);
        }
      }
    }
    
    .preview-content {
      display: flex;
      align-items: center;
      gap: 15px;
      
      .file-icon {
        width: 60px;
        height: 60px;
        background: #f8f9fa;
        border-radius: var(--radius);
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--primary-color);
      }
      
      .file-info {
        flex: 1;
        
        .file-name {
          font-weight: 500;
          color: var(--text-color);
          margin-bottom: 5px;
          word-break: break-word;
        }
        
        .file-size {
          font-size: 12px;
          color: var(--gray);
        }
      }
      
      img {
        max-width: 100px;
        max-height: 60px;
        border-radius: 4px;
        object-fit: cover;
      }
    }
  }
  
  input[type="file"] {
    display: none;
  }
`,qk=C.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 40px 30px;
  background: white;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  text-align: center;
  
  .success-icon {
    color: #22c55e;
    margin-bottom: 20px;
  }
  
  h2 {
    color: var(--text-color);
    margin-bottom: 15px;
  }
  
  p {
    color: var(--gray);
    margin-bottom: 25px;
    line-height: 1.6;
  }
  
  .order-id {
    background: #f8f9fa;
    padding: 15px;
    border-radius: var(--radius);
    margin: 20px 0;
    font-family: monospace;
    font-weight: 600;
    color: var(--primary-color);
  }
`;function Zk({user:e,logout:t,categories:r,products:n,cart:i,setCart:s,orders:o,paymentInfo:l,showToast:c,categoryService:u,productService:d,orderService:p,paymentService:v,servicesInitialized:k}){var yo,vo,xo;const[x,w]=P.useState("home"),[_,m]=P.useState(!1),[f,g]=P.useState("all"),[S,T]=P.useState(null),[A,b]=P.useState(1),[O,X]=P.useState(""),[Y,Re]=P.useState("name"),[Me,mt]=P.useState("all"),[St,kr]=P.useState(new Set),[ce,qe]=P.useState(null),[L,W]=P.useState({}),[q,ae]=P.useState(!1),[z,ye]=P.useState({name:"",phone:"",address:"",reference:"",paymentMethod:"transfer",notes:""}),[et,ot]=P.useState(!1),[fe,Ue]=P.useState(null),[at,Ze]=P.useState(null),[Fe,Be]=P.useState(null),[Ge,Ui]=P.useState({}),Dn=P.useMemo(()=>{let y=[...n];switch(f!=="all"&&(y=y.filter(R=>R.category_id===parseInt(f))),O&&(y=y.filter(R=>R.name.toLowerCase().includes(O.toLowerCase())||R.description.toLowerCase().includes(O.toLowerCase()))),Me==="favorites"?y=y.filter(R=>St.has(R.id)):Me==="offers"&&(y=y.filter(R=>{const V=R.price%1;return V>=.9||V>=.95})),Y){case"price-low":y.sort((R,V)=>R.price-V.price);break;case"price-high":y.sort((R,V)=>V.price-R.price);break;case"name":default:y.sort((R,V)=>R.name.localeCompare(V.name));break}return y},[n,f,O,Me,Y,St]),uo=y=>{const R=new Set(St);R.has(y)?(R.delete(y),c("Eliminado de favoritos","info")):(R.add(y),c("Agregado a favoritos","success")),kr(R)},Fi=y=>{const R=lt(y),V=L[y.id]||Or(R).minQuantity,ie={...y,price:Vi(y),unit:R,selectedPresentation:y.unit==="presentation"?Sr(y.id):null};ho(ie,V),qe(y.id),setTimeout(()=>qe(null),600);const he=Or(R);W(Qe=>({...Qe,[y.id]:he.minQuantity}))},ir=y=>{const R=n.find(he=>he.id===y),V=lt(R),ie=Or(V);return L[y]||ie.minQuantity},po=(y,R)=>{const V=n.find(Qe=>Qe.id===y),ie=lt(V),he=a_(R,ie);W(Qe=>({...Qe,[y]:he}))},sn=y=>{const R=n.find(Qe=>Qe.id===y),V=lt(R),ie=Or(V),he=ir(y);po(y,he+ie.step),qe(`${y}-inc`),setTimeout(()=>qe(null),300)},Bi=y=>{const R=n.find(Qe=>Qe.id===y),V=lt(R),ie=Or(V),he=ir(y);he>ie.minQuantity&&(po(y,he-ie.step),qe(`${y}-dec`),setTimeout(()=>qe(null),300))},Sr=y=>{const R=n.find(V=>V.id===y);return R!=null&&R.presentations?Ge[y]||R.presentations[0]:null},fo=(y,R)=>{Ui(V=>({...V,[y]:R}))},Vi=y=>{if(y.unit==="presentation"){const R=Sr(y.id);return(R==null?void 0:R.price)||y.price}return y.price},lt=y=>{if(y.unit==="presentation"){const R=Sr(y.id);return(R==null?void 0:R.unit)||"u"}return y.unit},on=y=>{const R=n.find(V=>V.id===y);R&&(T(R),b(1),w("product-details"))},ho=(y=S,R=A)=>{if(!y||R<=0)return;const V=i.findIndex(ie=>ie.product_id===y.id);if(V!==-1){const ie=[...i];ie[V].quantity+=R,ie[V].total=ie[V].price*ie[V].quantity,s(ie)}else{const ie={product_id:y.id,name:y.name,price:y.price,unit:y.unit,quantity:R,total:y.price*R,image:y.image};s([...i,ie])}c("Producto agregado al carrito","success")},Hi=(y,R)=>{if(R<=0){mo(y);return}const V=[...i];V[y].quantity=R,V[y].total=V[y].price*R,s(V)},mo=y=>{const R=i.filter((V,ie)=>ie!==y);s(R),c("Producto eliminado del carrito","success")},Un=()=>{const y=i.reduce((ie,he)=>ie+he.total,0),R=y*.18,V=y+R;return{subtotal:y,tax:R,total:V}},Wi=y=>{g(y),w("products"),m(!1)},{subtotal:an,tax:Fn,total:Cr}=Un(),Ll=()=>{if(!l)return null;const y=z.paymentMethod;if(y==="cash")return a.jsxs(Yh,{children:[a.jsxs("h4",{children:[a.jsx(ch,{size:20}),"Pago contraentrega"]}),a.jsxs("div",{className:"instruction",children:[a.jsx(hh,{size:16,style:{marginRight:"8px",verticalAlign:"text-top"}}),a.jsx("strong",{children:"Instrucciones:"})," ",l.instructions.cash]})]});const R=l[y],V=l.instructions[y];return a.jsxs(Yh,{children:[a.jsxs("h4",{children:[y==="transfer"&&a.jsx(js,{size:20}),y==="yape"&&a.jsx(Vo,{size:20}),y==="plin"&&a.jsx(Vo,{size:20}),"Datos para el pago - Total: S/ ",Cr.toFixed(2)]}),a.jsxs("div",{className:"payment-info",children:[y==="transfer"&&a.jsxs(a.Fragment,{children:[a.jsxs("p",{children:[a.jsx("strong",{children:"Banco:"})," ",R.bankName]}),a.jsxs("p",{children:[a.jsx("strong",{children:"Número de cuenta:"})," ",R.accountNumber]}),a.jsxs("p",{children:[a.jsx("strong",{children:"Tipo de cuenta:"})," ",R.accountType]}),a.jsxs("p",{children:[a.jsx("strong",{children:"Titular:"})," ",R.accountHolder]}),a.jsxs("p",{children:[a.jsx("strong",{children:"CCI:"})," ",R.cci]})]}),(y==="yape"||y==="plin")&&a.jsxs(a.Fragment,{children:[a.jsxs("p",{children:[a.jsx("strong",{children:"Número de teléfono:"})," ",R.phoneNumber]}),a.jsxs("div",{className:"qr-code",children:[a.jsx("img",{src:R.qrCode,alt:`QR ${y}`}),a.jsx("p",{children:"Escanea el código QR"})]})]})]}),a.jsxs("div",{className:"instruction",children:[a.jsx(hh,{size:16,style:{marginRight:"8px",verticalAlign:"text-top"}}),a.jsx("strong",{children:"Instrucciones:"})," ",V]})]})},$l=async y=>{if(y.preventDefault(),!z.name||!z.phone||!z.address){c("Por favor complete todos los campos obligatorios","error");return}try{ae(!0);const R={customer_name:z.name,customer_phone:z.phone,customer_address:z.address,customer_reference:z.reference,payment_method:z.paymentMethod,notes:z.notes,items:i.map(ie=>({product_id:ie.product_id,quantity:ie.quantity,unit_price:ie.price,total_price:ie.total})),subtotal:an,tax_amount:Fn,total_amount:Cr,voucher_file:at},V=await p.create(R);V.success?(s([]),Ue(V.order),ot(!0),Ze(null),Be(null),w("confirmation"),c("¡Pedido realizado con éxito!","success")):c(V.message||"Error al procesar el pedido","error")}catch(R){console.error("Checkout error:",R),c("Error al procesar el pedido. Inténtalo de nuevo.","error")}finally{ae(!1)}},Dt=(y,R)=>{ye(V=>({...V,[y]:R}))},Dl=()=>{if(i.length===0){c("Tu carrito está vacío","error");return}ye({name:e.name||"",phone:e.phone||"",address:e.address||"",reference:"",paymentMethod:"transfer",notes:""}),w("checkout")},Ul=()=>{ye({name:"",phone:"",address:"",reference:"",paymentMethod:"transfer",notes:""}),ot(!1),Ue(null),Ze(null),Be(null),w("home")},Fl=y=>{const R=y.target.files[0];R&&Bl(R)},Bl=y=>{if(!["image/jpeg","image/jpg","image/png","image/gif","application/pdf"].includes(y.type)){c("Solo se permiten archivos de imagen (JPG, PNG, GIF) o PDF","error");return}if(y.size>5*1024*1024){c("El archivo no puede superar los 5MB","error");return}if(Ze(y),y.type.startsWith("image/")){const V=new FileReader;V.onload=ie=>{Be(ie.target.result)},V.readAsDataURL(y)}else Be(null);c("Voucher adjuntado correctamente","success")},Vl=()=>{Ze(null),Be(null),c("Voucher eliminado","info")},go=y=>{if(y===0)return"0 Bytes";const R=1024,V=["Bytes","KB","MB","GB"],ie=Math.floor(Math.log(y)/Math.log(R));return parseFloat((y/Math.pow(R,ie)).toFixed(2))+" "+V[ie]},qi=()=>z.paymentMethod==="cash"?null:a.jsxs(Wk,{children:[a.jsxs("div",{className:"voucher-label",children:[a.jsx(fa,{size:16}),"Comprobante de pago (opcional)"]}),at?a.jsxs("div",{className:"voucher-preview",children:[a.jsxs("div",{className:"preview-header",children:[a.jsx("span",{children:"Comprobante adjuntado"}),a.jsx("button",{type:"button",onClick:Vl,children:a.jsx(ci,{size:16})})]}),a.jsx("div",{className:"preview-content",children:at.type.startsWith("image/")?a.jsxs(a.Fragment,{children:[Fe&&a.jsx("img",{src:Fe,alt:"Preview"}),a.jsxs("div",{className:"file-info",children:[a.jsx("div",{className:"file-name",children:at.name}),a.jsx("div",{className:"file-size",children:go(at.size)})]})]}):a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"file-icon",children:a.jsx(Zw,{size:24})}),a.jsxs("div",{className:"file-info",children:[a.jsx("div",{className:"file-name",children:at.name}),a.jsx("div",{className:"file-size",children:go(at.size)})]})]})})]}):a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"upload-area",onClick:()=>document.getElementById("voucher-input").click(),children:a.jsxs("div",{className:"upload-content",children:[a.jsx(fa,{size:40}),a.jsx("p",{children:"Haz clic para subir tu comprobante de pago"}),a.jsx("p",{className:"file-types",children:"Formatos: JPG, PNG, GIF, PDF (máx. 5MB)"})]})}),a.jsx("input",{id:"voucher-input",type:"file",accept:".jpg,.jpeg,.png,.gif,.pdf",onChange:Fl})]})]}),Bn=r.slice(0,4),Hl=n.slice(0,6);return a.jsxs(ok,{children:[q&&a.jsx(Vu,{}),a.jsxs(ak,{children:[a.jsxs(lk,{children:[a.jsx(ck,{onClick:()=>m(!_),children:a.jsx(Kw,{size:20})}),a.jsxs(uk,{children:[a.jsx(j0,{size:24}),a.jsx("h1",{children:"Mercado Express"})]})]}),a.jsxs(dk,{children:[a.jsxs(Lh,{children:[a.jsx(Uu,{size:16}),a.jsx("input",{type:"text",placeholder:"Buscar productos...",value:O,onChange:y=>{X(y.target.value),y.target.value&&w("products")}})]}),a.jsxs(fk,{onClick:()=>w("cart"),children:[a.jsx(ts,{size:20}),a.jsx(hk,{children:i.length})]}),a.jsxs(P0,{children:[a.jsx(mk,{children:"C"}),a.jsx(gk,{children:a.jsxs("ul",{children:[a.jsxs("li",{onClick:()=>w("orders"),children:[a.jsx(da,{size:16}),"Mis pedidos"]}),a.jsxs("li",{onClick:()=>w("account"),children:[a.jsx(ha,{size:16}),"Mi cuenta"]}),a.jsxs("li",{onClick:t,children:[a.jsx(C0,{size:16}),"Cerrar sesión"]})]})})]})]})]}),a.jsxs(yk,{className:_?"active":"",children:[a.jsx("h3",{children:"Categorías"}),a.jsxs(vk,{children:[a.jsxs("li",{className:f==="all"?"active":"",onClick:()=>Wi("all"),children:[a.jsx(wn,{size:16}),"Todos los productos"]}),r.map(y=>a.jsx("li",{className:f===y.id.toString()?"active":"",onClick:()=>Wi(y.id.toString()),children:y.name},y.id))]})]}),a.jsxs(xk,{children:[a.jsxs(br,{$active:x==="home",children:[a.jsx(wk,{children:a.jsxs(_k,{children:[a.jsx("h2",{children:"Los mejores productos frescos del mercado"}),a.jsx("p",{children:"Selecciona tus productos favoritos y recíbelos en la puerta de tu casa."}),a.jsx("button",{className:"btn btn-primary",onClick:()=>w("products"),children:"Explorar productos"})]})}),a.jsxs("div",{style:{marginBottom:"30px"},children:[a.jsx("h3",{style:{marginBottom:"15px",color:"var(--gray-dark)",fontSize:"20px"},children:"Categorías populares"}),a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(150px, 1fr))",gap:"15px"},children:Bn.map(y=>a.jsxs("div",{style:{backgroundColor:"white",borderRadius:"var(--radius)",overflow:"hidden",boxShadow:"var(--shadow)",textAlign:"center",cursor:"pointer",transition:"var(--transition)"},onClick:()=>Wi(y.id.toString()),children:[a.jsx("div",{style:{height:"100px",backgroundColor:y.color,display:"flex",alignItems:"center",justifyContent:"center"},children:a.jsx(wn,{size:36,color:"white"})}),a.jsx("h4",{style:{padding:"10px",fontSize:"16px"},children:y.name})]},y.id))})]}),a.jsxs("div",{children:[a.jsx("h3",{style:{marginBottom:"15px",color:"var(--gray-dark)",fontSize:"20px"},children:"Productos destacados"}),a.jsx($h,{children:Hl.map(y=>{const R=r.find(he=>he.id===y.category_id),V=St.has(y.id),ie=ce===y.id;return a.jsxs(Dh,{className:ie?"cart-animation":"",children:[a.jsxs(Fh,{children:[a.jsx("img",{src:y.image,alt:y.name}),a.jsx(Uh,{$isFavorite:V,onClick:()=>uo(y.id),children:a.jsx(Cc,{size:16,fill:V?"currentColor":"none"})})]}),a.jsxs(Bh,{children:[a.jsx(Gh,{$color:R==null?void 0:R.color,children:(R==null?void 0:R.name)||"Sin categoría"}),a.jsx(Vh,{children:y.name}),a.jsxs(Hh,{children:["S/ ",Vi(y).toFixed(2),a.jsxs("span",{className:"unit",children:["/ ",lt(y)]})]}),y.unit==="presentation"&&a.jsxs(Qh,{children:[a.jsx("span",{className:"label",children:"Presentación:"}),a.jsx("div",{className:"presentations",children:y.presentations.map(he=>{var Qe;return a.jsxs("div",{className:`presentation-option ${((Qe=Sr(y.id))==null?void 0:Qe.id)===he.id?"selected":""}`,onClick:()=>fo(y.id,he),children:[he.name," - S/ ",he.price.toFixed(2)]},he.id)})})]}),a.jsxs(Wh,{children:[a.jsxs(qh,{children:[a.jsx("button",{className:"quantity-btn",onClick:()=>Bi(y.id),children:a.jsx(Bo,{size:16})}),a.jsx("div",{className:`quantity-display ${ce===`${y.id}-inc`||ce===`${y.id}-dec`?"quantity-pulse":""}`,children:Ho(ir(y.id),lt(y))}),a.jsx("button",{className:"quantity-btn",onClick:()=>sn(y.id),children:a.jsx(xn,{size:16})})]}),a.jsxs(Zh,{children:[a.jsxs("button",{className:"add-to-cart-btn",onClick:()=>Fi(y),children:[a.jsx(ts,{size:16}),"Agregar (",Ho(ir(y.id),lt(y)),")"]}),a.jsxs("button",{className:"view-details",onClick:()=>on(y.id),children:[a.jsx(bs,{size:16}),"Ver detalles"]})]})]})]})]},y.id)})})]})]}),a.jsxs(br,{$active:x==="products",children:[a.jsxs("div",{style:{height:"150px",background:'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000")',backgroundSize:"cover",backgroundPosition:"center",borderRadius:"var(--radius)",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginBottom:"20px",padding:"20px",textAlign:"center",color:"white"},children:[a.jsx("h2",{style:{fontSize:"24px",marginBottom:"5px"},children:f==="all"?"Todos los productos":((yo=r.find(y=>y.id===parseInt(f)))==null?void 0:yo.name)||"Productos"}),a.jsx("p",{children:"Encuentra todo lo que necesitas en un solo lugar"})]}),a.jsxs("div",{style:{marginBottom:"20px"},children:[a.jsxs(Lh,{children:[a.jsx(Uu,{size:18}),a.jsx("input",{type:"text",placeholder:"Buscar productos...",value:O,onChange:y=>X(y.target.value)})]}),a.jsxs(pk,{children:[a.jsxs(ns,{$active:Me==="all",onClick:()=>mt("all"),children:[a.jsx(wn,{size:14}),"Todos"]}),a.jsxs(ns,{$active:Me==="favorites",onClick:()=>mt("favorites"),children:[a.jsx(Cc,{size:14}),"Favoritos (",St.size,")"]}),a.jsxs(ns,{$active:Me==="offers",onClick:()=>mt("offers"),children:[a.jsx(Bu,{size:14}),"Ofertas"]}),a.jsx(ns,{$active:Y==="price-low",onClick:()=>Re(Y==="price-low"?"name":"price-low"),children:"Precio: Menor"}),a.jsx(ns,{$active:Y==="price-high",onClick:()=>Re(Y==="price-high"?"name":"price-high"),children:"Precio: Mayor"})]})]}),a.jsx($h,{children:Dn.map(y=>{const R=r.find(he=>he.id===y.category_id),V=St.has(y.id),ie=ce===y.id;return a.jsxs(Dh,{className:ie?"cart-animation":"",children:[a.jsxs(Fh,{children:[a.jsx("img",{src:y.image,alt:y.name}),a.jsx(Uh,{$isFavorite:V,onClick:()=>uo(y.id),children:a.jsx(Cc,{size:16,fill:V?"currentColor":"none"})})]}),a.jsxs(Bh,{children:[a.jsx(Gh,{$color:R==null?void 0:R.color,children:(R==null?void 0:R.name)||"Sin categoría"}),a.jsx(Vh,{children:y.name}),a.jsxs(Hh,{children:["S/ ",Vi(y).toFixed(2),a.jsxs("span",{className:"unit",children:["/ ",lt(y)]})]}),y.unit==="presentation"&&a.jsxs(Qh,{children:[a.jsx("span",{className:"label",children:"Presentación:"}),a.jsx("div",{className:"presentations",children:y.presentations.map(he=>{var Qe;return a.jsxs("div",{className:`presentation-option ${((Qe=Sr(y.id))==null?void 0:Qe.id)===he.id?"selected":""}`,onClick:()=>fo(y.id,he),children:[he.name," - S/ ",he.price.toFixed(2)]},he.id)})})]}),a.jsxs(Wh,{children:[a.jsxs(qh,{children:[a.jsx("button",{className:"quantity-btn",onClick:()=>Bi(y.id),disabled:ir(y.id)<=Or(lt(y)).minQuantity,children:a.jsx(Bo,{size:16})}),a.jsx("div",{className:`quantity-display ${ce===`${y.id}-inc`||ce===`${y.id}-dec`?"quantity-pulse":""}`,children:Ho(ir(y.id),lt(y))}),a.jsx("button",{className:"quantity-btn",onClick:()=>sn(y.id),children:a.jsx(xn,{size:16})})]}),a.jsxs(Zh,{children:[a.jsxs("button",{className:"add-to-cart-btn",onClick:()=>Fi(y),children:[a.jsx(ts,{size:16}),"Agregar (",Ho(ir(y.id),lt(y)),")"]}),a.jsx("button",{className:"view-details",onClick:()=>on(y.id),children:a.jsx(bs,{size:16})})]})]})]})]},y.id)})})]}),a.jsxs(br,{$active:x==="product-details",children:[a.jsx("div",{style:{marginBottom:"20px"},children:a.jsxs("button",{className:"btn btn-secondary",onClick:()=>w("products"),style:{display:"flex",alignItems:"center",gap:"5px"},children:[a.jsx(Sc,{size:16}),"Volver"]})}),S&&a.jsxs(Ok,{children:[a.jsx(zk,{children:a.jsx("img",{src:S.image,alt:S.name})}),a.jsxs(Ik,{children:[a.jsx("h2",{children:S.name}),a.jsx(Mk,{color:((vo=r.find(y=>y.id===S.category_id))==null?void 0:vo.color)||"#666",children:((xo=r.find(y=>y.id===S.category_id))==null?void 0:xo.name)||"Sin categoría"}),a.jsxs(Lk,{children:["S/ ",S.price.toFixed(2)," ",a.jsxs("span",{children:["/ ",S.unit]})]}),a.jsx($k,{children:S.description}),a.jsxs(Dk,{children:[a.jsx("label",{children:"Cantidad:"}),a.jsxs(Uk,{children:[a.jsx("button",{onClick:()=>b(Math.max(.1,A-.1)),children:a.jsx(Bo,{size:16})}),a.jsx("input",{type:"number",min:"0.1",step:"0.1",value:A,onChange:y=>b(parseFloat(y.target.value)||.1)}),a.jsx("button",{onClick:()=>b(A+.1),children:a.jsx(xn,{size:16})})]})]}),a.jsxs(Fk,{children:[a.jsx("span",{children:"Total:"}),a.jsxs("span",{children:["S/ ",(S.price*A).toFixed(2)]})]}),a.jsxs("button",{className:"btn btn-primary",onClick:()=>ho(),style:{width:"100%"},children:[a.jsx(ts,{size:16}),"Agregar al carrito"]})]})]})]}),a.jsxs(br,{$active:x==="cart",children:[a.jsx("h2",{children:"Carrito de compras"}),a.jsxs(kk,{children:[a.jsx(Sk,{children:i.length===0?a.jsx("div",{style:{textAlign:"center",padding:"40px",color:"var(--gray)"},children:"Tu carrito está vacío"}):i.map((y,R)=>a.jsxs(Ck,{children:[a.jsx(Ek,{children:a.jsx("img",{src:y.image,alt:y.name})}),a.jsxs(jk,{children:[a.jsx(bk,{children:y.name}),a.jsxs(Pk,{children:["S/ ",y.price.toFixed(2)," / ",y.unit]}),a.jsxs(Tk,{children:[a.jsxs(Rk,{children:[a.jsx("button",{onClick:()=>Hi(R,y.quantity-.1),children:a.jsx(Bo,{size:14})}),a.jsx("input",{type:"number",value:y.quantity,onChange:V=>Hi(R,parseFloat(V.target.value)||.1),min:"0.1",step:"0.1"}),a.jsx("button",{onClick:()=>Hi(R,y.quantity+.1),children:a.jsx(xn,{size:14})})]}),a.jsxs("div",{style:{fontWeight:"500",fontSize:"16px",marginLeft:"auto"},children:["S/ ",y.total.toFixed(2)]}),a.jsx("button",{style:{background:"none",border:"none",color:"var(--danger-color)",cursor:"pointer",marginLeft:"20px",fontSize:"18px"},onClick:()=>mo(R),children:"×"})]})]})]},`${y.product_id}-${R}`))}),a.jsxs(Ak,{children:[a.jsx("h3",{style:{marginBottom:"20px",color:"var(--gray-dark)"},children:"Resumen del pedido"}),a.jsxs(Rc,{children:[a.jsx("span",{children:"Subtotal:"}),a.jsxs("span",{children:["S/ ",an.toFixed(2)]})]}),a.jsxs(Rc,{children:[a.jsx("span",{children:"IGV (18%):"}),a.jsxs("span",{children:["S/ ",Fn.toFixed(2)]})]}),a.jsxs(Rc,{className:"total",children:[a.jsx("span",{children:"Total:"}),a.jsxs("span",{children:["S/ ",Cr.toFixed(2)]})]}),a.jsxs("button",{className:"btn btn-primary",style:{width:"100%",marginTop:"5px"},disabled:i.length===0,onClick:Dl,children:[a.jsx(bs,{size:16}),"Realizar pedido"]}),a.jsxs("button",{className:"btn btn-secondary",style:{width:"100%",marginTop:"5px"},onClick:()=>w("products"),children:[a.jsx(Sc,{size:16}),"Seguir comprando"]})]})]})]}),a.jsxs(br,{$active:x==="orders",children:[a.jsx("h2",{children:"Mis pedidos"}),a.jsx("div",{style:{backgroundColor:"white",borderRadius:"var(--radius)",padding:"20px",boxShadow:"var(--shadow)"},children:o.length===0?a.jsx("div",{style:{textAlign:"center",padding:"40px",color:"var(--gray)"},children:"No tienes pedidos realizados"}):a.jsx("div",{children:o.filter(y=>y.customer_phone===e.phone||y.customer===e.name).map(y=>a.jsxs("div",{style:{border:"1px solid #eee",borderRadius:"var(--radius)",padding:"15px",marginBottom:"15px"},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"10px"},children:[a.jsx("strong",{children:y.id}),a.jsx("span",{style:{color:"var(--gray)"},children:y.date})]}),a.jsx("div",{style:{marginBottom:"10px"},children:a.jsx("span",{className:`status ${y.status}`,style:{display:"inline-block",padding:"4px 8px",borderRadius:"20px",fontSize:"12px",fontWeight:"500"},children:y.status==="pending"?"Pendiente":y.status==="processing"?"En proceso":"Entregado"})}),a.jsxs("div",{style:{fontSize:"18px",fontWeight:"600",color:"var(--primary-color)"},children:["S/ ",y.total.toFixed(2)]})]},y.id))})})]}),a.jsxs(br,{$active:x==="account",children:[a.jsx("h2",{children:"Mi cuenta"}),a.jsxs("div",{style:{backgroundColor:"white",borderRadius:"var(--radius)",padding:"20px",boxShadow:"var(--shadow)"},children:[a.jsx("h3",{style:{marginBottom:"15px",color:"var(--gray-dark)",paddingBottom:"10px",borderBottom:"1px solid #eee"},children:"Información personal"}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Nombre completo:"}),a.jsx("input",{type:"text",value:e.name,readOnly:!0})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Correo electrónico:"}),a.jsx("input",{type:"email",value:e.email,readOnly:!0})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Teléfono:"}),a.jsx("input",{type:"tel",value:e.phone||"",readOnly:!0})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Dirección:"}),a.jsx("input",{type:"text",value:e.address||"",readOnly:!0})]})]})]}),a.jsxs(br,{$active:x==="checkout",children:[a.jsx("div",{style:{marginBottom:"20px"},children:a.jsxs("button",{className:"btn btn-secondary",onClick:()=>w("cart"),style:{marginBottom:"20px"},children:[a.jsx(Sc,{size:16}),"Volver al carrito"]})}),a.jsxs(Bk,{children:[a.jsx("h2",{style:{marginBottom:"30px",textAlign:"center",color:"var(--text-color)"},children:"Finalizar pedido"}),a.jsxs(Hk,{children:[a.jsx("h3",{children:"Resumen del pedido"}),i.map((y,R)=>a.jsxs(qo,{children:[a.jsxs("div",{className:"item-details",children:[a.jsx("span",{className:"quantity",children:y.quantity}),a.jsx("span",{children:y.name})]}),a.jsxs("span",{children:["S/ ",y.total.toFixed(2)]})]},R)),a.jsxs(qo,{children:[a.jsx("span",{children:"Subtotal"}),a.jsxs("span",{children:["S/ ",an.toFixed(2)]})]}),a.jsxs(qo,{children:[a.jsx("span",{children:"IGV (18%)"}),a.jsxs("span",{children:["S/ ",Fn.toFixed(2)]})]}),a.jsxs(qo,{children:[a.jsx("span",{children:"Total"}),a.jsxs("span",{children:["S/ ",Cr.toFixed(2)]})]})]}),a.jsxs("form",{onSubmit:$l,children:[a.jsxs(Zn,{children:[a.jsxs("label",{children:[a.jsx(ha,{size:16,style:{marginRight:"8px"}}),"Nombre completo *"]}),a.jsx("input",{type:"text",value:z.name,onChange:y=>Dt("name",y.target.value),placeholder:"Tu nombre completo",required:!0})]}),a.jsxs(Zn,{children:[a.jsxs("label",{children:[a.jsx(E0,{size:16,style:{marginRight:"8px"}}),"Teléfono *"]}),a.jsx("input",{type:"tel",value:z.phone,onChange:y=>Dt("phone",y.target.value),placeholder:"999 999 999",required:!0})]}),a.jsxs(Zn,{children:[a.jsxs("label",{children:[a.jsx(Yw,{size:16,style:{marginRight:"8px"}}),"Dirección de entrega *"]}),a.jsx("input",{type:"text",value:z.address,onChange:y=>Dt("address",y.target.value),placeholder:"Calle, número, distrito",required:!0})]}),a.jsxs(Zn,{children:[a.jsx("label",{children:"Referencia (opcional)"}),a.jsx("input",{type:"text",value:z.reference,onChange:y=>Dt("reference",y.target.value),placeholder:"Casa azul, al frente del parque, etc."})]}),a.jsxs(Zn,{children:[a.jsx("label",{children:"Método de pago"}),a.jsxs(Vk,{children:[a.jsxs(Wo,{$active:z.paymentMethod==="transfer",onClick:()=>Dt("paymentMethod","transfer"),children:[a.jsx(js,{size:20}),a.jsx("span",{children:"Transferencia"})]}),a.jsxs(Wo,{$active:z.paymentMethod==="yape",onClick:()=>Dt("paymentMethod","yape"),children:[a.jsx(Vo,{size:20}),a.jsx("span",{children:"Yape"})]}),a.jsxs(Wo,{$active:z.paymentMethod==="plin",onClick:()=>Dt("paymentMethod","plin"),children:[a.jsx(Vo,{size:20}),a.jsx("span",{children:"Plin"})]}),a.jsxs(Wo,{$active:z.paymentMethod==="cash",onClick:()=>Dt("paymentMethod","cash"),children:[a.jsx(ch,{size:20}),a.jsx("span",{children:"Contraentrega"})]})]}),Ll()]}),a.jsxs(Zn,{children:[a.jsx("label",{children:"Notas adicionales (opcional)"}),a.jsx("textarea",{value:z.notes,onChange:y=>Dt("notes",y.target.value),placeholder:"Instrucciones especiales para la entrega..."})]}),qi(),a.jsxs("button",{type:"submit",className:"btn btn-primary",style:{width:"100%",marginTop:"20px",padding:"15px"},children:[a.jsx(pa,{size:16}),"Confirmar pedido - S/ ",Cr.toFixed(2)]})]})]})]}),a.jsx(br,{$active:x==="confirmation",children:a.jsxs(qk,{children:[a.jsx($u,{size:60,className:"success-icon"}),a.jsx("h2",{children:"¡Pedido confirmado!"}),a.jsx("p",{children:"Tu pedido ha sido recibido y está siendo procesado. Te contactaremos pronto para confirmar la entrega."}),fe&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"order-id",children:["Pedido #",fe.id]}),a.jsxs("div",{style:{textAlign:"left",marginBottom:"25px"},children:[a.jsx("h3",{style:{marginBottom:"15px",color:"var(--text-color)"},children:"Detalles del pedido:"}),a.jsxs("p",{children:[a.jsx("strong",{children:"Cliente:"})," ",fe.customer_name]}),a.jsxs("p",{children:[a.jsx("strong",{children:"Teléfono:"})," ",fe.phone]}),a.jsxs("p",{children:[a.jsx("strong",{children:"Dirección:"})," ",fe.address]}),a.jsxs("p",{children:[a.jsx("strong",{children:"Método de pago:"})," ",fe.payment_method==="transfer"?"Transferencia":fe.payment_method==="yape"?"Yape":fe.payment_method==="plin"?"Plin":"Contraentrega"]}),a.jsxs("p",{children:[a.jsx("strong",{children:"Total:"})," S/ ",fe.total.toFixed(2)]}),fe.voucher&&a.jsxs("p",{children:[a.jsx("strong",{children:"Comprobante:"})," ",a.jsxs("span",{style:{color:"var(--primary-color)",fontSize:"14px",background:"#f8f9fa",padding:"2px 8px",borderRadius:"4px",display:"inline-flex",alignItems:"center",gap:"4px"},children:[a.jsx(fa,{size:12}),fe.voucher.name]})]})]})]}),a.jsxs("button",{className:"btn btn-primary",onClick:Ul,style:{marginRight:"10px"},children:[a.jsx(Du,{size:16}),"Ir al inicio"]}),a.jsxs("button",{className:"btn btn-secondary",onClick:()=>w("orders"),children:[a.jsx(da,{size:16}),"Ver mis pedidos"]})]})})]}),a.jsxs(Nk,{children:[a.jsxs(is,{className:x==="home"?"active":"",onClick:()=>w("home"),children:[a.jsx(Du,{size:20}),a.jsx("span",{children:"Inicio"})]}),a.jsxs(is,{onClick:()=>m(!_),children:[a.jsx(wn,{size:20}),a.jsx("span",{children:"Categorías"})]}),a.jsxs(is,{className:x==="cart"?"active":"",onClick:()=>w("cart"),children:[a.jsx(ts,{size:20}),a.jsx("span",{children:"Carrito"})]}),a.jsxs(is,{className:x==="orders"?"active":"",onClick:()=>w("orders"),children:[a.jsx(da,{size:20}),a.jsx("span",{children:"Pedidos"})]}),a.jsxs(is,{className:x==="account"?"active":"",onClick:()=>w("account"),children:[a.jsx(ha,{size:20}),a.jsx("span",{children:"Cuenta"})]})]})]})}const Gk=C.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: white;
  box-shadow: var(--shadow);
  border-radius: var(--radius);
  padding: 15px;
  display: flex;
  align-items: center;
  min-width: 300px;
  max-width: 400px;
  z-index: 9999;
  animation: slideIn 0.3s ease;

  @keyframes slideIn {
    from {
      transform: translateY(100px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @media (max-width: 576px) {
    bottom: 20px;
    right: 20px;
    left: 20px;
    min-width: auto;
  }
`,Qk=C.div`
  margin-right: 15px;
  font-size: 20px;
  color: ${e=>e.type==="success"?"var(--success-color)":e.type==="warning"?"var(--warning-color)":e.type==="error"?"var(--danger-color)":"var(--success-color)"};
`,Yk=C.div`
  flex: 1;
  font-size: 14px;
`,Kk=C.div`
  cursor: pointer;
  color: var(--gray);
  font-size: 16px;
  margin-left: 10px;
`;function Jk({message:e,type:t="success",onClose:r}){const n=()=>{switch(t){case"success":return a.jsx($u,{size:20});case"warning":return a.jsx(ua,{size:20});case"error":return a.jsx(Fu,{size:20});default:return a.jsx($u,{size:20})}};return a.jsxs(Gk,{children:[a.jsx(Qk,{type:t,children:n()}),a.jsx(Yk,{children:e}),a.jsx(Kk,{onClick:r,children:a.jsx(ci,{size:16})})]})}function T0(e,t){return function(){return e.apply(t,arguments)}}const{toString:Xk}=Object.prototype,{getPrototypeOf:lp}=Object,{iterator:bl,toStringTag:R0}=Symbol,Pl=(e=>t=>{const r=Xk.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),Qt=e=>(e=e.toLowerCase(),t=>Pl(t)===e),Tl=e=>t=>typeof t===e,{isArray:$i}=Array,Qs=Tl("undefined");function eS(e){return e!==null&&!Qs(e)&&e.constructor!==null&&!Qs(e.constructor)&&kt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const A0=Qt("ArrayBuffer");function tS(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&A0(e.buffer),t}const rS=Tl("string"),kt=Tl("function"),N0=Tl("number"),Rl=e=>e!==null&&typeof e=="object",nS=e=>e===!0||e===!1,ma=e=>{if(Pl(e)!=="object")return!1;const t=lp(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(R0 in e)&&!(bl in e)},iS=Qt("Date"),sS=Qt("File"),oS=Qt("Blob"),aS=Qt("FileList"),lS=e=>Rl(e)&&kt(e.pipe),cS=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||kt(e.append)&&((t=Pl(e))==="formdata"||t==="object"&&kt(e.toString)&&e.toString()==="[object FormData]"))},uS=Qt("URLSearchParams"),[dS,pS,fS,hS]=["ReadableStream","Request","Response","Headers"].map(Qt),mS=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ao(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let n,i;if(typeof e!="object"&&(e=[e]),$i(e))for(n=0,i=e.length;n<i;n++)t.call(null,e[n],n,e);else{const s=r?Object.getOwnPropertyNames(e):Object.keys(e),o=s.length;let l;for(n=0;n<o;n++)l=s[n],t.call(null,e[l],l,e)}}function O0(e,t){t=t.toLowerCase();const r=Object.keys(e);let n=r.length,i;for(;n-- >0;)if(i=r[n],t===i.toLowerCase())return i;return null}const _n=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),z0=e=>!Qs(e)&&e!==_n;function Hu(){const{caseless:e}=z0(this)&&this||{},t={},r=(n,i)=>{const s=e&&O0(t,i)||i;ma(t[s])&&ma(n)?t[s]=Hu(t[s],n):ma(n)?t[s]=Hu({},n):$i(n)?t[s]=n.slice():t[s]=n};for(let n=0,i=arguments.length;n<i;n++)arguments[n]&&ao(arguments[n],r);return t}const gS=(e,t,r,{allOwnKeys:n}={})=>(ao(t,(i,s)=>{r&&kt(i)?e[s]=T0(i,r):e[s]=i},{allOwnKeys:n}),e),yS=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),vS=(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},xS=(e,t,r,n)=>{let i,s,o;const l={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),s=i.length;s-- >0;)o=i[s],(!n||n(o,e,t))&&!l[o]&&(t[o]=e[o],l[o]=!0);e=r!==!1&&lp(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},wS=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return n!==-1&&n===r},_S=e=>{if(!e)return null;if($i(e))return e;let t=e.length;if(!N0(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},kS=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&lp(Uint8Array)),SS=(e,t)=>{const n=(e&&e[bl]).call(e);let i;for(;(i=n.next())&&!i.done;){const s=i.value;t.call(e,s[0],s[1])}},CS=(e,t)=>{let r;const n=[];for(;(r=e.exec(t))!==null;)n.push(r);return n},ES=Qt("HTMLFormElement"),jS=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,n,i){return n.toUpperCase()+i}),Kh=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),bS=Qt("RegExp"),I0=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};ao(r,(i,s)=>{let o;(o=t(i,s,e))!==!1&&(n[s]=o||i)}),Object.defineProperties(e,n)},PS=e=>{I0(e,(t,r)=>{if(kt(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const n=e[r];if(kt(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},TS=(e,t)=>{const r={},n=i=>{i.forEach(s=>{r[s]=!0})};return $i(e)?n(e):n(String(e).split(t)),r},RS=()=>{},AS=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function NS(e){return!!(e&&kt(e.append)&&e[R0]==="FormData"&&e[bl])}const OS=e=>{const t=new Array(10),r=(n,i)=>{if(Rl(n)){if(t.indexOf(n)>=0)return;if(!("toJSON"in n)){t[i]=n;const s=$i(n)?[]:{};return ao(n,(o,l)=>{const c=r(o,i+1);!Qs(c)&&(s[l]=c)}),t[i]=void 0,s}}return n};return r(e,0)},zS=Qt("AsyncFunction"),IS=e=>e&&(Rl(e)||kt(e))&&kt(e.then)&&kt(e.catch),M0=((e,t)=>e?setImmediate:t?((r,n)=>(_n.addEventListener("message",({source:i,data:s})=>{i===_n&&s===r&&n.length&&n.shift()()},!1),i=>{n.push(i),_n.postMessage(r,"*")}))(`axios@${Math.random()}`,[]):r=>setTimeout(r))(typeof setImmediate=="function",kt(_n.postMessage)),MS=typeof queueMicrotask<"u"?queueMicrotask.bind(_n):typeof process<"u"&&process.nextTick||M0,LS=e=>e!=null&&kt(e[bl]),j={isArray:$i,isArrayBuffer:A0,isBuffer:eS,isFormData:cS,isArrayBufferView:tS,isString:rS,isNumber:N0,isBoolean:nS,isObject:Rl,isPlainObject:ma,isReadableStream:dS,isRequest:pS,isResponse:fS,isHeaders:hS,isUndefined:Qs,isDate:iS,isFile:sS,isBlob:oS,isRegExp:bS,isFunction:kt,isStream:lS,isURLSearchParams:uS,isTypedArray:kS,isFileList:aS,forEach:ao,merge:Hu,extend:gS,trim:mS,stripBOM:yS,inherits:vS,toFlatObject:xS,kindOf:Pl,kindOfTest:Qt,endsWith:wS,toArray:_S,forEachEntry:SS,matchAll:CS,isHTMLForm:ES,hasOwnProperty:Kh,hasOwnProp:Kh,reduceDescriptors:I0,freezeMethods:PS,toObjectSet:TS,toCamelCase:jS,noop:RS,toFiniteNumber:AS,findKey:O0,global:_n,isContextDefined:z0,isSpecCompliantForm:NS,toJSONObject:OS,isAsyncFn:zS,isThenable:IS,setImmediate:M0,asap:MS,isIterable:LS};function te(e,t,r,n,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),i&&(this.response=i,this.status=i.status?i.status:null)}j.inherits(te,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:j.toJSONObject(this.config),code:this.code,status:this.status}}});const L0=te.prototype,$0={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{$0[e]={value:e}});Object.defineProperties(te,$0);Object.defineProperty(L0,"isAxiosError",{value:!0});te.from=(e,t,r,n,i,s)=>{const o=Object.create(L0);return j.toFlatObject(e,o,function(c){return c!==Error.prototype},l=>l!=="isAxiosError"),te.call(o,e.message,t,r,n,i),o.cause=e,o.name=e.name,s&&Object.assign(o,s),o};const $S=null;function Wu(e){return j.isPlainObject(e)||j.isArray(e)}function D0(e){return j.endsWith(e,"[]")?e.slice(0,-2):e}function Jh(e,t,r){return e?e.concat(t).map(function(i,s){return i=D0(i),!r&&s?"["+i+"]":i}).join(r?".":""):t}function DS(e){return j.isArray(e)&&!e.some(Wu)}const US=j.toFlatObject(j,{},null,function(t){return/^is[A-Z]/.test(t)});function Al(e,t,r){if(!j.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,r=j.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,_){return!j.isUndefined(_[w])});const n=r.metaTokens,i=r.visitor||d,s=r.dots,o=r.indexes,c=(r.Blob||typeof Blob<"u"&&Blob)&&j.isSpecCompliantForm(t);if(!j.isFunction(i))throw new TypeError("visitor must be a function");function u(x){if(x===null)return"";if(j.isDate(x))return x.toISOString();if(!c&&j.isBlob(x))throw new te("Blob is not supported. Use a Buffer instead.");return j.isArrayBuffer(x)||j.isTypedArray(x)?c&&typeof Blob=="function"?new Blob([x]):Buffer.from(x):x}function d(x,w,_){let m=x;if(x&&!_&&typeof x=="object"){if(j.endsWith(w,"{}"))w=n?w:w.slice(0,-2),x=JSON.stringify(x);else if(j.isArray(x)&&DS(x)||(j.isFileList(x)||j.endsWith(w,"[]"))&&(m=j.toArray(x)))return w=D0(w),m.forEach(function(g,S){!(j.isUndefined(g)||g===null)&&t.append(o===!0?Jh([w],S,s):o===null?w:w+"[]",u(g))}),!1}return Wu(x)?!0:(t.append(Jh(_,w,s),u(x)),!1)}const p=[],v=Object.assign(US,{defaultVisitor:d,convertValue:u,isVisitable:Wu});function k(x,w){if(!j.isUndefined(x)){if(p.indexOf(x)!==-1)throw Error("Circular reference detected in "+w.join("."));p.push(x),j.forEach(x,function(m,f){(!(j.isUndefined(m)||m===null)&&i.call(t,m,j.isString(f)?f.trim():f,w,v))===!0&&k(m,w?w.concat(f):[f])}),p.pop()}}if(!j.isObject(e))throw new TypeError("data must be an object");return k(e),t}function Xh(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(n){return t[n]})}function cp(e,t){this._pairs=[],e&&Al(e,this,t)}const U0=cp.prototype;U0.append=function(t,r){this._pairs.push([t,r])};U0.toString=function(t){const r=t?function(n){return t.call(this,n,Xh)}:Xh;return this._pairs.map(function(i){return r(i[0])+"="+r(i[1])},"").join("&")};function FS(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function F0(e,t,r){if(!t)return e;const n=r&&r.encode||FS;j.isFunction(r)&&(r={serialize:r});const i=r&&r.serialize;let s;if(i?s=i(t,r):s=j.isURLSearchParams(t)?t.toString():new cp(t,r).toString(n),s){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class BS{constructor(){this.handlers=[]}use(t,r,n){return this.handlers.push({fulfilled:t,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){j.forEach(this.handlers,function(n){n!==null&&t(n)})}}const em=BS,B0={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},VS=typeof URLSearchParams<"u"?URLSearchParams:cp,HS=typeof FormData<"u"?FormData:null,WS=typeof Blob<"u"?Blob:null,qS={isBrowser:!0,classes:{URLSearchParams:VS,FormData:HS,Blob:WS},protocols:["http","https","file","blob","url","data"]},up=typeof window<"u"&&typeof document<"u",qu=typeof navigator=="object"&&navigator||void 0,ZS=up&&(!qu||["ReactNative","NativeScript","NS"].indexOf(qu.product)<0),GS=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),QS=up&&window.location.href||"http://localhost",YS=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:up,hasStandardBrowserEnv:ZS,hasStandardBrowserWebWorkerEnv:GS,navigator:qu,origin:QS},Symbol.toStringTag,{value:"Module"})),it={...YS,...qS};function KS(e,t){return Al(e,new it.classes.URLSearchParams,Object.assign({visitor:function(r,n,i,s){return it.isNode&&j.isBuffer(r)?(this.append(n,r.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},t))}function JS(e){return j.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function XS(e){const t={},r=Object.keys(e);let n;const i=r.length;let s;for(n=0;n<i;n++)s=r[n],t[s]=e[s];return t}function V0(e){function t(r,n,i,s){let o=r[s++];if(o==="__proto__")return!0;const l=Number.isFinite(+o),c=s>=r.length;return o=!o&&j.isArray(i)?i.length:o,c?(j.hasOwnProp(i,o)?i[o]=[i[o],n]:i[o]=n,!l):((!i[o]||!j.isObject(i[o]))&&(i[o]=[]),t(r,n,i[o],s)&&j.isArray(i[o])&&(i[o]=XS(i[o])),!l)}if(j.isFormData(e)&&j.isFunction(e.entries)){const r={};return j.forEachEntry(e,(n,i)=>{t(JS(n),i,r,0)}),r}return null}function eC(e,t,r){if(j.isString(e))try{return(t||JSON.parse)(e),j.trim(e)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(e)}const dp={transitional:B0,adapter:["xhr","http","fetch"],transformRequest:[function(t,r){const n=r.getContentType()||"",i=n.indexOf("application/json")>-1,s=j.isObject(t);if(s&&j.isHTMLForm(t)&&(t=new FormData(t)),j.isFormData(t))return i?JSON.stringify(V0(t)):t;if(j.isArrayBuffer(t)||j.isBuffer(t)||j.isStream(t)||j.isFile(t)||j.isBlob(t)||j.isReadableStream(t))return t;if(j.isArrayBufferView(t))return t.buffer;if(j.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(s){if(n.indexOf("application/x-www-form-urlencoded")>-1)return KS(t,this.formSerializer).toString();if((l=j.isFileList(t))||n.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return Al(l?{"files[]":t}:t,c&&new c,this.formSerializer)}}return s||i?(r.setContentType("application/json",!1),eC(t)):t}],transformResponse:[function(t){const r=this.transitional||dp.transitional,n=r&&r.forcedJSONParsing,i=this.responseType==="json";if(j.isResponse(t)||j.isReadableStream(t))return t;if(t&&j.isString(t)&&(n&&!this.responseType||i)){const o=!(r&&r.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(l){if(o)throw l.name==="SyntaxError"?te.from(l,te.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:it.classes.FormData,Blob:it.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};j.forEach(["delete","get","head","post","put","patch"],e=>{dp.headers[e]={}});const pp=dp,tC=j.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),rC=e=>{const t={};let r,n,i;return e&&e.split(`
`).forEach(function(o){i=o.indexOf(":"),r=o.substring(0,i).trim().toLowerCase(),n=o.substring(i+1).trim(),!(!r||t[r]&&tC[r])&&(r==="set-cookie"?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)}),t},tm=Symbol("internals");function ss(e){return e&&String(e).trim().toLowerCase()}function ga(e){return e===!1||e==null?e:j.isArray(e)?e.map(ga):String(e)}function nC(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}const iC=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Ac(e,t,r,n,i){if(j.isFunction(n))return n.call(this,t,r);if(i&&(t=r),!!j.isString(t)){if(j.isString(n))return t.indexOf(n)!==-1;if(j.isRegExp(n))return n.test(t)}}function sC(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,n)=>r.toUpperCase()+n)}function oC(e,t){const r=j.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(i,s,o){return this[n].call(this,t,i,s,o)},configurable:!0})})}class Nl{constructor(t){t&&this.set(t)}set(t,r,n){const i=this;function s(l,c,u){const d=ss(c);if(!d)throw new Error("header name must be a non-empty string");const p=j.findKey(i,d);(!p||i[p]===void 0||u===!0||u===void 0&&i[p]!==!1)&&(i[p||c]=ga(l))}const o=(l,c)=>j.forEach(l,(u,d)=>s(u,d,c));if(j.isPlainObject(t)||t instanceof this.constructor)o(t,r);else if(j.isString(t)&&(t=t.trim())&&!iC(t))o(rC(t),r);else if(j.isObject(t)&&j.isIterable(t)){let l={},c,u;for(const d of t){if(!j.isArray(d))throw TypeError("Object iterator must return a key-value pair");l[u=d[0]]=(c=l[u])?j.isArray(c)?[...c,d[1]]:[c,d[1]]:d[1]}o(l,r)}else t!=null&&s(r,t,n);return this}get(t,r){if(t=ss(t),t){const n=j.findKey(this,t);if(n){const i=this[n];if(!r)return i;if(r===!0)return nC(i);if(j.isFunction(r))return r.call(this,i,n);if(j.isRegExp(r))return r.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=ss(t),t){const n=j.findKey(this,t);return!!(n&&this[n]!==void 0&&(!r||Ac(this,this[n],n,r)))}return!1}delete(t,r){const n=this;let i=!1;function s(o){if(o=ss(o),o){const l=j.findKey(n,o);l&&(!r||Ac(n,n[l],l,r))&&(delete n[l],i=!0)}}return j.isArray(t)?t.forEach(s):s(t),i}clear(t){const r=Object.keys(this);let n=r.length,i=!1;for(;n--;){const s=r[n];(!t||Ac(this,this[s],s,t,!0))&&(delete this[s],i=!0)}return i}normalize(t){const r=this,n={};return j.forEach(this,(i,s)=>{const o=j.findKey(n,s);if(o){r[o]=ga(i),delete r[s];return}const l=t?sC(s):String(s).trim();l!==s&&delete r[s],r[l]=ga(i),n[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const r=Object.create(null);return j.forEach(this,(n,i)=>{n!=null&&n!==!1&&(r[i]=t&&j.isArray(n)?n.join(", "):n)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){const n=new this(t);return r.forEach(i=>n.set(i)),n}static accessor(t){const n=(this[tm]=this[tm]={accessors:{}}).accessors,i=this.prototype;function s(o){const l=ss(o);n[l]||(oC(i,o),n[l]=!0)}return j.isArray(t)?t.forEach(s):s(t),this}}Nl.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);j.reduceDescriptors(Nl.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(n){this[r]=n}}});j.freezeMethods(Nl);const Zt=Nl;function Nc(e,t){const r=this||pp,n=t||r,i=Zt.from(n.headers);let s=n.data;return j.forEach(e,function(l){s=l.call(r,s,i.normalize(),t?t.status:void 0)}),i.normalize(),s}function H0(e){return!!(e&&e.__CANCEL__)}function Di(e,t,r){te.call(this,e??"canceled",te.ERR_CANCELED,t,r),this.name="CanceledError"}j.inherits(Di,te,{__CANCEL__:!0});function W0(e,t,r){const n=r.config.validateStatus;!r.status||!n||n(r.status)?e(r):t(new te("Request failed with status code "+r.status,[te.ERR_BAD_REQUEST,te.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}function aC(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function lC(e,t){e=e||10;const r=new Array(e),n=new Array(e);let i=0,s=0,o;return t=t!==void 0?t:1e3,function(c){const u=Date.now(),d=n[s];o||(o=u),r[i]=c,n[i]=u;let p=s,v=0;for(;p!==i;)v+=r[p++],p=p%e;if(i=(i+1)%e,i===s&&(s=(s+1)%e),u-o<t)return;const k=d&&u-d;return k?Math.round(v*1e3/k):void 0}}function cC(e,t){let r=0,n=1e3/t,i,s;const o=(u,d=Date.now())=>{r=d,i=null,s&&(clearTimeout(s),s=null),e.apply(null,u)};return[(...u)=>{const d=Date.now(),p=d-r;p>=n?o(u,d):(i=u,s||(s=setTimeout(()=>{s=null,o(i)},n-p)))},()=>i&&o(i)]}const Ga=(e,t,r=3)=>{let n=0;const i=lC(50,250);return cC(s=>{const o=s.loaded,l=s.lengthComputable?s.total:void 0,c=o-n,u=i(c),d=o<=l;n=o;const p={loaded:o,total:l,progress:l?o/l:void 0,bytes:c,rate:u||void 0,estimated:u&&l&&d?(l-o)/u:void 0,event:s,lengthComputable:l!=null,[t?"download":"upload"]:!0};e(p)},r)},rm=(e,t)=>{const r=e!=null;return[n=>t[0]({lengthComputable:r,total:e,loaded:n}),t[1]]},nm=e=>(...t)=>j.asap(()=>e(...t)),uC=it.hasStandardBrowserEnv?((e,t)=>r=>(r=new URL(r,it.origin),e.protocol===r.protocol&&e.host===r.host&&(t||e.port===r.port)))(new URL(it.origin),it.navigator&&/(msie|trident)/i.test(it.navigator.userAgent)):()=>!0,dC=it.hasStandardBrowserEnv?{write(e,t,r,n,i,s){const o=[e+"="+encodeURIComponent(t)];j.isNumber(r)&&o.push("expires="+new Date(r).toGMTString()),j.isString(n)&&o.push("path="+n),j.isString(i)&&o.push("domain="+i),s===!0&&o.push("secure"),document.cookie=o.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function pC(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function fC(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function q0(e,t,r){let n=!pC(t);return e&&(n||r==!1)?fC(e,t):t}const im=e=>e instanceof Zt?{...e}:e;function zn(e,t){t=t||{};const r={};function n(u,d,p,v){return j.isPlainObject(u)&&j.isPlainObject(d)?j.merge.call({caseless:v},u,d):j.isPlainObject(d)?j.merge({},d):j.isArray(d)?d.slice():d}function i(u,d,p,v){if(j.isUndefined(d)){if(!j.isUndefined(u))return n(void 0,u,p,v)}else return n(u,d,p,v)}function s(u,d){if(!j.isUndefined(d))return n(void 0,d)}function o(u,d){if(j.isUndefined(d)){if(!j.isUndefined(u))return n(void 0,u)}else return n(void 0,d)}function l(u,d,p){if(p in t)return n(u,d);if(p in e)return n(void 0,u)}const c={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:l,headers:(u,d,p)=>i(im(u),im(d),p,!0)};return j.forEach(Object.keys(Object.assign({},e,t)),function(d){const p=c[d]||i,v=p(e[d],t[d],d);j.isUndefined(v)&&p!==l||(r[d]=v)}),r}const Z0=e=>{const t=zn({},e);let{data:r,withXSRFToken:n,xsrfHeaderName:i,xsrfCookieName:s,headers:o,auth:l}=t;t.headers=o=Zt.from(o),t.url=F0(q0(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),l&&o.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):"")));let c;if(j.isFormData(r)){if(it.hasStandardBrowserEnv||it.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((c=o.getContentType())!==!1){const[u,...d]=c?c.split(";").map(p=>p.trim()).filter(Boolean):[];o.setContentType([u||"multipart/form-data",...d].join("; "))}}if(it.hasStandardBrowserEnv&&(n&&j.isFunction(n)&&(n=n(t)),n||n!==!1&&uC(t.url))){const u=i&&s&&dC.read(s);u&&o.set(i,u)}return t},hC=typeof XMLHttpRequest<"u",mC=hC&&function(e){return new Promise(function(r,n){const i=Z0(e);let s=i.data;const o=Zt.from(i.headers).normalize();let{responseType:l,onUploadProgress:c,onDownloadProgress:u}=i,d,p,v,k,x;function w(){k&&k(),x&&x(),i.cancelToken&&i.cancelToken.unsubscribe(d),i.signal&&i.signal.removeEventListener("abort",d)}let _=new XMLHttpRequest;_.open(i.method.toUpperCase(),i.url,!0),_.timeout=i.timeout;function m(){if(!_)return;const g=Zt.from("getAllResponseHeaders"in _&&_.getAllResponseHeaders()),T={data:!l||l==="text"||l==="json"?_.responseText:_.response,status:_.status,statusText:_.statusText,headers:g,config:e,request:_};W0(function(b){r(b),w()},function(b){n(b),w()},T),_=null}"onloadend"in _?_.onloadend=m:_.onreadystatechange=function(){!_||_.readyState!==4||_.status===0&&!(_.responseURL&&_.responseURL.indexOf("file:")===0)||setTimeout(m)},_.onabort=function(){_&&(n(new te("Request aborted",te.ECONNABORTED,e,_)),_=null)},_.onerror=function(){n(new te("Network Error",te.ERR_NETWORK,e,_)),_=null},_.ontimeout=function(){let S=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const T=i.transitional||B0;i.timeoutErrorMessage&&(S=i.timeoutErrorMessage),n(new te(S,T.clarifyTimeoutError?te.ETIMEDOUT:te.ECONNABORTED,e,_)),_=null},s===void 0&&o.setContentType(null),"setRequestHeader"in _&&j.forEach(o.toJSON(),function(S,T){_.setRequestHeader(T,S)}),j.isUndefined(i.withCredentials)||(_.withCredentials=!!i.withCredentials),l&&l!=="json"&&(_.responseType=i.responseType),u&&([v,x]=Ga(u,!0),_.addEventListener("progress",v)),c&&_.upload&&([p,k]=Ga(c),_.upload.addEventListener("progress",p),_.upload.addEventListener("loadend",k)),(i.cancelToken||i.signal)&&(d=g=>{_&&(n(!g||g.type?new Di(null,e,_):g),_.abort(),_=null)},i.cancelToken&&i.cancelToken.subscribe(d),i.signal&&(i.signal.aborted?d():i.signal.addEventListener("abort",d)));const f=aC(i.url);if(f&&it.protocols.indexOf(f)===-1){n(new te("Unsupported protocol "+f+":",te.ERR_BAD_REQUEST,e));return}_.send(s||null)})},gC=(e,t)=>{const{length:r}=e=e?e.filter(Boolean):[];if(t||r){let n=new AbortController,i;const s=function(u){if(!i){i=!0,l();const d=u instanceof Error?u:this.reason;n.abort(d instanceof te?d:new Di(d instanceof Error?d.message:d))}};let o=t&&setTimeout(()=>{o=null,s(new te(`timeout ${t} of ms exceeded`,te.ETIMEDOUT))},t);const l=()=>{e&&(o&&clearTimeout(o),o=null,e.forEach(u=>{u.unsubscribe?u.unsubscribe(s):u.removeEventListener("abort",s)}),e=null)};e.forEach(u=>u.addEventListener("abort",s));const{signal:c}=n;return c.unsubscribe=()=>j.asap(l),c}},yC=gC,vC=function*(e,t){let r=e.byteLength;if(!t||r<t){yield e;return}let n=0,i;for(;n<r;)i=n+t,yield e.slice(n,i),n=i},xC=async function*(e,t){for await(const r of wC(e))yield*vC(r,t)},wC=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:r,value:n}=await t.read();if(r)break;yield n}}finally{await t.cancel()}},sm=(e,t,r,n)=>{const i=xC(e,t);let s=0,o,l=c=>{o||(o=!0,n&&n(c))};return new ReadableStream({async pull(c){try{const{done:u,value:d}=await i.next();if(u){l(),c.close();return}let p=d.byteLength;if(r){let v=s+=p;r(v)}c.enqueue(new Uint8Array(d))}catch(u){throw l(u),u}},cancel(c){return l(c),i.return()}},{highWaterMark:2})},Ol=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",G0=Ol&&typeof ReadableStream=="function",_C=Ol&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),Q0=(e,...t)=>{try{return!!e(...t)}catch{return!1}},kC=G0&&Q0(()=>{let e=!1;const t=new Request(it.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),om=64*1024,Zu=G0&&Q0(()=>j.isReadableStream(new Response("").body)),Qa={stream:Zu&&(e=>e.body)};Ol&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!Qa[t]&&(Qa[t]=j.isFunction(e[t])?r=>r[t]():(r,n)=>{throw new te(`Response type '${t}' is not supported`,te.ERR_NOT_SUPPORT,n)})})})(new Response);const SC=async e=>{if(e==null)return 0;if(j.isBlob(e))return e.size;if(j.isSpecCompliantForm(e))return(await new Request(it.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(j.isArrayBufferView(e)||j.isArrayBuffer(e))return e.byteLength;if(j.isURLSearchParams(e)&&(e=e+""),j.isString(e))return(await _C(e)).byteLength},CC=async(e,t)=>{const r=j.toFiniteNumber(e.getContentLength());return r??SC(t)},EC=Ol&&(async e=>{let{url:t,method:r,data:n,signal:i,cancelToken:s,timeout:o,onDownloadProgress:l,onUploadProgress:c,responseType:u,headers:d,withCredentials:p="same-origin",fetchOptions:v}=Z0(e);u=u?(u+"").toLowerCase():"text";let k=yC([i,s&&s.toAbortSignal()],o),x;const w=k&&k.unsubscribe&&(()=>{k.unsubscribe()});let _;try{if(c&&kC&&r!=="get"&&r!=="head"&&(_=await CC(d,n))!==0){let T=new Request(t,{method:"POST",body:n,duplex:"half"}),A;if(j.isFormData(n)&&(A=T.headers.get("content-type"))&&d.setContentType(A),T.body){const[b,O]=rm(_,Ga(nm(c)));n=sm(T.body,om,b,O)}}j.isString(p)||(p=p?"include":"omit");const m="credentials"in Request.prototype;x=new Request(t,{...v,signal:k,method:r.toUpperCase(),headers:d.normalize().toJSON(),body:n,duplex:"half",credentials:m?p:void 0});let f=await fetch(x);const g=Zu&&(u==="stream"||u==="response");if(Zu&&(l||g&&w)){const T={};["status","statusText","headers"].forEach(X=>{T[X]=f[X]});const A=j.toFiniteNumber(f.headers.get("content-length")),[b,O]=l&&rm(A,Ga(nm(l),!0))||[];f=new Response(sm(f.body,om,b,()=>{O&&O(),w&&w()}),T)}u=u||"text";let S=await Qa[j.findKey(Qa,u)||"text"](f,e);return!g&&w&&w(),await new Promise((T,A)=>{W0(T,A,{data:S,headers:Zt.from(f.headers),status:f.status,statusText:f.statusText,config:e,request:x})})}catch(m){throw w&&w(),m&&m.name==="TypeError"&&/Load failed|fetch/i.test(m.message)?Object.assign(new te("Network Error",te.ERR_NETWORK,e,x),{cause:m.cause||m}):te.from(m,m&&m.code,e,x)}}),Gu={http:$S,xhr:mC,fetch:EC};j.forEach(Gu,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const am=e=>`- ${e}`,jC=e=>j.isFunction(e)||e===null||e===!1,Y0={getAdapter:e=>{e=j.isArray(e)?e:[e];const{length:t}=e;let r,n;const i={};for(let s=0;s<t;s++){r=e[s];let o;if(n=r,!jC(r)&&(n=Gu[(o=String(r)).toLowerCase()],n===void 0))throw new te(`Unknown adapter '${o}'`);if(n)break;i[o||"#"+s]=n}if(!n){const s=Object.entries(i).map(([l,c])=>`adapter ${l} `+(c===!1?"is not supported by the environment":"is not available in the build"));let o=t?s.length>1?`since :
`+s.map(am).join(`
`):" "+am(s[0]):"as no adapter specified";throw new te("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return n},adapters:Gu};function Oc(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Di(null,e)}function lm(e){return Oc(e),e.headers=Zt.from(e.headers),e.data=Nc.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Y0.getAdapter(e.adapter||pp.adapter)(e).then(function(n){return Oc(e),n.data=Nc.call(e,e.transformResponse,n),n.headers=Zt.from(n.headers),n},function(n){return H0(n)||(Oc(e),n&&n.response&&(n.response.data=Nc.call(e,e.transformResponse,n.response),n.response.headers=Zt.from(n.response.headers))),Promise.reject(n)})}const K0="1.9.0",zl={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{zl[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});const cm={};zl.transitional=function(t,r,n){function i(s,o){return"[Axios v"+K0+"] Transitional option '"+s+"'"+o+(n?". "+n:"")}return(s,o,l)=>{if(t===!1)throw new te(i(o," has been removed"+(r?" in "+r:"")),te.ERR_DEPRECATED);return r&&!cm[o]&&(cm[o]=!0,console.warn(i(o," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(s,o,l):!0}};zl.spelling=function(t){return(r,n)=>(console.warn(`${n} is likely a misspelling of ${t}`),!0)};function bC(e,t,r){if(typeof e!="object")throw new te("options must be an object",te.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let i=n.length;for(;i-- >0;){const s=n[i],o=t[s];if(o){const l=e[s],c=l===void 0||o(l,s,e);if(c!==!0)throw new te("option "+s+" must be "+c,te.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new te("Unknown option "+s,te.ERR_BAD_OPTION)}}const ya={assertOptions:bC,validators:zl},Kt=ya.validators;class Ya{constructor(t){this.defaults=t||{},this.interceptors={request:new em,response:new em}}async request(t,r){try{return await this._request(t,r)}catch(n){if(n instanceof Error){let i={};Error.captureStackTrace?Error.captureStackTrace(i):i=new Error;const s=i.stack?i.stack.replace(/^.+\n/,""):"";try{n.stack?s&&!String(n.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(n.stack+=`
`+s):n.stack=s}catch{}}throw n}}_request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=zn(this.defaults,r);const{transitional:n,paramsSerializer:i,headers:s}=r;n!==void 0&&ya.assertOptions(n,{silentJSONParsing:Kt.transitional(Kt.boolean),forcedJSONParsing:Kt.transitional(Kt.boolean),clarifyTimeoutError:Kt.transitional(Kt.boolean)},!1),i!=null&&(j.isFunction(i)?r.paramsSerializer={serialize:i}:ya.assertOptions(i,{encode:Kt.function,serialize:Kt.function},!0)),r.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?r.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:r.allowAbsoluteUrls=!0),ya.assertOptions(r,{baseUrl:Kt.spelling("baseURL"),withXsrfToken:Kt.spelling("withXSRFToken")},!0),r.method=(r.method||this.defaults.method||"get").toLowerCase();let o=s&&j.merge(s.common,s[r.method]);s&&j.forEach(["delete","get","head","post","put","patch","common"],x=>{delete s[x]}),r.headers=Zt.concat(o,s);const l=[];let c=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(r)===!1||(c=c&&w.synchronous,l.unshift(w.fulfilled,w.rejected))});const u=[];this.interceptors.response.forEach(function(w){u.push(w.fulfilled,w.rejected)});let d,p=0,v;if(!c){const x=[lm.bind(this),void 0];for(x.unshift.apply(x,l),x.push.apply(x,u),v=x.length,d=Promise.resolve(r);p<v;)d=d.then(x[p++],x[p++]);return d}v=l.length;let k=r;for(p=0;p<v;){const x=l[p++],w=l[p++];try{k=x(k)}catch(_){w.call(this,_);break}}try{d=lm.call(this,k)}catch(x){return Promise.reject(x)}for(p=0,v=u.length;p<v;)d=d.then(u[p++],u[p++]);return d}getUri(t){t=zn(this.defaults,t);const r=q0(t.baseURL,t.url,t.allowAbsoluteUrls);return F0(r,t.params,t.paramsSerializer)}}j.forEach(["delete","get","head","options"],function(t){Ya.prototype[t]=function(r,n){return this.request(zn(n||{},{method:t,url:r,data:(n||{}).data}))}});j.forEach(["post","put","patch"],function(t){function r(n){return function(s,o,l){return this.request(zn(l||{},{method:t,headers:n?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}Ya.prototype[t]=r(),Ya.prototype[t+"Form"]=r(!0)});const va=Ya;class fp{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(s){r=s});const n=this;this.promise.then(i=>{if(!n._listeners)return;let s=n._listeners.length;for(;s-- >0;)n._listeners[s](i);n._listeners=null}),this.promise.then=i=>{let s;const o=new Promise(l=>{n.subscribe(l),s=l}).then(i);return o.cancel=function(){n.unsubscribe(s)},o},t(function(s,o,l){n.reason||(n.reason=new Di(s,o,l),r(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}toAbortSignal(){const t=new AbortController,r=n=>{t.abort(n)};return this.subscribe(r),t.signal.unsubscribe=()=>this.unsubscribe(r),t.signal}static source(){let t;return{token:new fp(function(i){t=i}),cancel:t}}}const PC=fp;function TC(e){return function(r){return e.apply(null,r)}}function RC(e){return j.isObject(e)&&e.isAxiosError===!0}const Qu={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Qu).forEach(([e,t])=>{Qu[t]=e});const AC=Qu;function J0(e){const t=new va(e),r=T0(va.prototype.request,t);return j.extend(r,va.prototype,t,{allOwnKeys:!0}),j.extend(r,t,null,{allOwnKeys:!0}),r.create=function(i){return J0(zn(e,i))},r}const Ie=J0(pp);Ie.Axios=va;Ie.CanceledError=Di;Ie.CancelToken=PC;Ie.isCancel=H0;Ie.VERSION=K0;Ie.toFormData=Al;Ie.AxiosError=te;Ie.Cancel=Ie.CanceledError;Ie.all=function(t){return Promise.all(t)};Ie.spread=TC;Ie.isAxiosError=RC;Ie.mergeConfig=zn;Ie.AxiosHeaders=Zt;Ie.formToJSON=e=>V0(j.isHTMLForm(e)?new FormData(e):e);Ie.getAdapter=Y0.getAdapter;Ie.HttpStatusCode=AC;Ie.default=Ie;const X0=Ie,NC={development:{BASE_URL:"http://localhost:3001",API_VERSION:"v1",TIMEOUT:1e4},production:{BASE_URL:"https://api.ecommerce-app.com",API_VERSION:"v1",TIMEOUT:15e3},staging:{BASE_URL:"https://staging-api.ecommerce-app.com",API_VERSION:"v1",TIMEOUT:12e3}},OC="production",os=NC[OC],Q={BASE_URL:os.BASE_URL,API_VERSION:os.API_VERSION,TIMEOUT:os.TIMEOUT,API_BASE:`${os.BASE_URL}/api/${os.API_VERSION}`,AUTH:{LOGIN:"/auth/login",LOGOUT:"/auth/logout",REGISTER:"/auth/register",REFRESH:"/auth/refresh",PROFILE:"/auth/profile"},PRODUCTS:{BASE:"/products",BY_ID:e=>`/products/${e}`,BY_CATEGORY:e=>`/products/category/${e}`,SEARCH:"/products/search",FEATURED:"/products/featured",PRESENTATIONS:e=>`/products/${e}/presentations`},CATEGORIES:{BASE:"/categories",BY_ID:e=>`/categories/${e}`,WITH_PRODUCTS:"/categories/with-products"},ORDERS:{BASE:"/orders",BY_ID:e=>`/orders/${e}`,BY_CUSTOMER:e=>`/orders/customer/${e}`,BY_STATUS:e=>`/orders/status/${e}`,UPDATE_STATUS:e=>`/orders/${e}/status`,ITEMS:e=>`/orders/${e}/items`},PAYMENTS:{BASE:"/payments",BY_ID:e=>`/payments/${e}`,BY_ORDER:e=>`/payments/order/${e}`,VERIFY:e=>`/payments/${e}/verify`,UPLOAD_VOUCHER:e=>`/payments/${e}/voucher`},ADMIN:{DASHBOARD:"/admin/dashboard",STATS:"/admin/stats",REPORTS:"/admin/reports"},UPLOADS:{IMAGES:"/uploads/images",VOUCHERS:"/uploads/vouchers",DOCUMENTS:"/uploads/documents"}},Rr={OK:200,CREATED:201,NO_CONTENT:204,BAD_REQUEST:400,UNAUTHORIZED:401,FORBIDDEN:403,NOT_FOUND:404,CONFLICT:409,VALIDATION_ERROR:422,INTERNAL_SERVER_ERROR:500,SERVICE_UNAVAILABLE:503},zC={"Content-Type":"application/json",Accept:"application/json"},kn="ecommerce_auth_token",Ka="ecommerce_refresh_token",pn="ecommerce_user_data",ve={USE_MOCK_DATA:{}.REACT_APP_USE_MOCK_DATA==="true",ENABLE_REAL_PAYMENTS:{}.REACT_APP_ENABLE_REAL_PAYMENTS==="true",ENABLE_PUSH_NOTIFICATIONS:{}.REACT_APP_ENABLE_PUSH_NOTIFICATIONS==="true",DEBUG_API_CALLS:{}.REACT_APP_DEBUG_API==="true"},Il={PRODUCTS_CACHE_TIME:5*60*1e3,CATEGORIES_CACHE_TIME:30*60*1e3,ORDERS_CACHE_TIME:2*60*1e3,USER_CACHE_TIME:10*60*1e3},lr={NETWORK_ERROR:"Error de conexión. Verifica tu internet.",UNAUTHORIZED:"Tu sesión ha expirado. Inicia sesión nuevamente.",FORBIDDEN:"No tienes permisos para realizar esta acción.",NOT_FOUND:"El recurso solicitado no fue encontrado.",VALIDATION_ERROR:"Los datos enviados no son válidos.",SERVER_ERROR:"Error interno del servidor. Intenta más tarde.",TIMEOUT_ERROR:"La petición tardó demasiado tiempo.",GENERIC_ERROR:"Ocurrió un error inesperado."},pr=X0.create({baseURL:Q.API_BASE,timeout:Q.TIMEOUT,headers:zC});pr.interceptors.request.use(e=>{var r;const t=localStorage.getItem(kn);return t&&(e.headers.Authorization=`Bearer ${t}`),ve.DEBUG_API_CALLS&&console.log(`🌐 API Request: ${(r=e.method)==null?void 0:r.toUpperCase()} ${e.url}`,{data:e.data,params:e.params,headers:e.headers}),e},e=>(console.error("❌ Request Error:",e),Promise.reject(e)));pr.interceptors.response.use(e=>{var t;return ve.DEBUG_API_CALLS&&console.log(`✅ API Response: ${(t=e.config.method)==null?void 0:t.toUpperCase()} ${e.config.url}`,{status:e.status,data:e.data}),e},async e=>{var n,i,s,o;const t=e.config;if(ve.DEBUG_API_CALLS&&console.error(`❌ API Error: ${(n=t==null?void 0:t.method)==null?void 0:n.toUpperCase()} ${t==null?void 0:t.url}`,{status:(i=e.response)==null?void 0:i.status,data:(s=e.response)==null?void 0:s.data,message:e.message}),((o=e.response)==null?void 0:o.status)===Rr.UNAUTHORIZED&&!t._retry){t._retry=!0;try{const l=localStorage.getItem(Ka);if(l){const c=await X0.post(`${Q.API_BASE}${Q.AUTH.REFRESH}`,{refresh_token:l}),{access_token:u}=c.data;return localStorage.setItem(kn,u),t.headers.Authorization=`Bearer ${u}`,pr(t)}}catch(l){return localStorage.removeItem(kn),localStorage.removeItem(Ka),window.location.href="/login",Promise.reject(l)}}const r=IC(e);return Promise.reject(r)});const IC=e=>{const t=e.response;if(!t)return{type:"network",message:lr.NETWORK_ERROR,originalError:e};const{status:r,data:n}=t;switch(r){case Rr.BAD_REQUEST:return{type:"validation",message:(n==null?void 0:n.message)||lr.VALIDATION_ERROR,errors:(n==null?void 0:n.errors)||[],originalError:e};case Rr.UNAUTHORIZED:return{type:"auth",message:(n==null?void 0:n.message)||lr.UNAUTHORIZED,originalError:e};case Rr.FORBIDDEN:return{type:"permission",message:(n==null?void 0:n.message)||lr.FORBIDDEN,originalError:e};case Rr.NOT_FOUND:return{type:"not_found",message:(n==null?void 0:n.message)||lr.NOT_FOUND,originalError:e};case Rr.VALIDATION_ERROR:return{type:"validation",message:(n==null?void 0:n.message)||lr.VALIDATION_ERROR,errors:(n==null?void 0:n.errors)||[],originalError:e};case Rr.INTERNAL_SERVER_ERROR:return{type:"server",message:(n==null?void 0:n.message)||lr.SERVER_ERROR,originalError:e};case Rr.SERVICE_UNAVAILABLE:return{type:"service",message:(n==null?void 0:n.message)||lr.TIMEOUT_ERROR,originalError:e};default:return{type:"unknown",message:(n==null?void 0:n.message)||lr.GENERIC_ERROR,originalError:e}}},K={get:async(e,t={},r={})=>{try{const n=await pr.get(e,{params:t,...r});return{success:!0,data:n.data,meta:n.headers}}catch(n){return{success:!1,error:n,data:null}}},post:async(e,t={},r={})=>{try{const n=await pr.post(e,t,r);return{success:!0,data:n.data,meta:n.headers}}catch(n){return{success:!1,error:n,data:null}}},put:async(e,t={},r={})=>{try{const n=await pr.put(e,t,r);return{success:!0,data:n.data,meta:n.headers}}catch(n){return{success:!1,error:n,data:null}}},patch:async(e,t={},r={})=>{try{const n=await pr.patch(e,t,r);return{success:!0,data:n.data,meta:n.headers}}catch(n){return{success:!1,error:n,data:null}}},delete:async(e,t={})=>{try{const r=await pr.delete(e,t);return{success:!0,data:r.data,meta:r.headers}}catch(r){return{success:!1,error:r,data:null}}},upload:async(e,t,r={},n=null)=>{try{const i=new FormData;i.append("file",t),Object.keys(r).forEach(l=>{i.append(l,r[l])});const s={headers:{"Content-Type":"multipart/form-data"}};n&&(s.onUploadProgress=l=>{const c=Math.round(l.loaded*100/l.total);n(c)});const o=await pr.post(e,i,s);return{success:!0,data:o.data,meta:o.headers}}catch(i){return{success:!1,error:i,data:null}}}},Pr={setToken:(e,t=null)=>{localStorage.setItem(kn,e),t&&localStorage.setItem(Ka,t)},getToken:()=>localStorage.getItem(kn),clearToken:()=>{localStorage.removeItem(kn),localStorage.removeItem(Ka)},isAuthenticated:()=>{const e=localStorage.getItem(kn);return!!e&&!MC(e)}},MC=e=>{try{const t=JSON.parse(atob(e.split(".")[1]));return Date.now()>=t.exp*1e3}catch{return!0}},Gn=new Map,se={set:(e,t,r=5*60*1e3)=>{const n=Date.now()+r;Gn.set(e,{data:t,expiresAt:n})},get:e=>{const t=Gn.get(e);return t?Date.now()>t.expiresAt?(Gn.delete(e),null):t.data:null},clear:(e=null)=>{if(e)for(const t of Gn.keys())t.includes(e)&&Gn.delete(t);else Gn.clear()}};var pe;(function(e){e.assertEqual=i=>{};function t(i){}e.assertIs=t;function r(i){throw new Error}e.assertNever=r,e.arrayToEnum=i=>{const s={};for(const o of i)s[o]=o;return s},e.getValidEnumValues=i=>{const s=e.objectKeys(i).filter(l=>typeof i[i[l]]!="number"),o={};for(const l of s)o[l]=i[l];return e.objectValues(o)},e.objectValues=i=>e.objectKeys(i).map(function(s){return i[s]}),e.objectKeys=typeof Object.keys=="function"?i=>Object.keys(i):i=>{const s=[];for(const o in i)Object.prototype.hasOwnProperty.call(i,o)&&s.push(o);return s},e.find=(i,s)=>{for(const o of i)if(s(o))return o},e.isInteger=typeof Number.isInteger=="function"?i=>Number.isInteger(i):i=>typeof i=="number"&&Number.isFinite(i)&&Math.floor(i)===i;function n(i,s=" | "){return i.map(o=>typeof o=="string"?`'${o}'`:o).join(s)}e.joinValues=n,e.jsonStringifyReplacer=(i,s)=>typeof s=="bigint"?s.toString():s})(pe||(pe={}));var um;(function(e){e.mergeShapes=(t,r)=>({...t,...r})})(um||(um={}));const F=pe.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),zr=e=>{switch(typeof e){case"undefined":return F.undefined;case"string":return F.string;case"number":return Number.isNaN(e)?F.nan:F.number;case"boolean":return F.boolean;case"function":return F.function;case"bigint":return F.bigint;case"symbol":return F.symbol;case"object":return Array.isArray(e)?F.array:e===null?F.null:e.then&&typeof e.then=="function"&&e.catch&&typeof e.catch=="function"?F.promise:typeof Map<"u"&&e instanceof Map?F.map:typeof Set<"u"&&e instanceof Set?F.set:typeof Date<"u"&&e instanceof Date?F.date:F.object;default:return F.unknown}},I=pe.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]);class wr extends Error{get errors(){return this.issues}constructor(t){super(),this.issues=[],this.addIssue=n=>{this.issues=[...this.issues,n]},this.addIssues=(n=[])=>{this.issues=[...this.issues,...n]};const r=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,r):this.__proto__=r,this.name="ZodError",this.issues=t}format(t){const r=t||function(s){return s.message},n={_errors:[]},i=s=>{for(const o of s.issues)if(o.code==="invalid_union")o.unionErrors.map(i);else if(o.code==="invalid_return_type")i(o.returnTypeError);else if(o.code==="invalid_arguments")i(o.argumentsError);else if(o.path.length===0)n._errors.push(r(o));else{let l=n,c=0;for(;c<o.path.length;){const u=o.path[c];c===o.path.length-1?(l[u]=l[u]||{_errors:[]},l[u]._errors.push(r(o))):l[u]=l[u]||{_errors:[]},l=l[u],c++}}};return i(this),n}static assert(t){if(!(t instanceof wr))throw new Error(`Not a ZodError: ${t}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,pe.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(t=r=>r.message){const r={},n=[];for(const i of this.issues)i.path.length>0?(r[i.path[0]]=r[i.path[0]]||[],r[i.path[0]].push(t(i))):n.push(t(i));return{formErrors:n,fieldErrors:r}}get formErrors(){return this.flatten()}}wr.create=e=>new wr(e);const Yu=(e,t)=>{let r;switch(e.code){case I.invalid_type:e.received===F.undefined?r="Required":r=`Expected ${e.expected}, received ${e.received}`;break;case I.invalid_literal:r=`Invalid literal value, expected ${JSON.stringify(e.expected,pe.jsonStringifyReplacer)}`;break;case I.unrecognized_keys:r=`Unrecognized key(s) in object: ${pe.joinValues(e.keys,", ")}`;break;case I.invalid_union:r="Invalid input";break;case I.invalid_union_discriminator:r=`Invalid discriminator value. Expected ${pe.joinValues(e.options)}`;break;case I.invalid_enum_value:r=`Invalid enum value. Expected ${pe.joinValues(e.options)}, received '${e.received}'`;break;case I.invalid_arguments:r="Invalid function arguments";break;case I.invalid_return_type:r="Invalid function return type";break;case I.invalid_date:r="Invalid date";break;case I.invalid_string:typeof e.validation=="object"?"includes"in e.validation?(r=`Invalid input: must include "${e.validation.includes}"`,typeof e.validation.position=="number"&&(r=`${r} at one or more positions greater than or equal to ${e.validation.position}`)):"startsWith"in e.validation?r=`Invalid input: must start with "${e.validation.startsWith}"`:"endsWith"in e.validation?r=`Invalid input: must end with "${e.validation.endsWith}"`:pe.assertNever(e.validation):e.validation!=="regex"?r=`Invalid ${e.validation}`:r="Invalid";break;case I.too_small:e.type==="array"?r=`Array must contain ${e.exact?"exactly":e.inclusive?"at least":"more than"} ${e.minimum} element(s)`:e.type==="string"?r=`String must contain ${e.exact?"exactly":e.inclusive?"at least":"over"} ${e.minimum} character(s)`:e.type==="number"?r=`Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}`:e.type==="date"?r=`Date must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(e.minimum))}`:r="Invalid input";break;case I.too_big:e.type==="array"?r=`Array must contain ${e.exact?"exactly":e.inclusive?"at most":"less than"} ${e.maximum} element(s)`:e.type==="string"?r=`String must contain ${e.exact?"exactly":e.inclusive?"at most":"under"} ${e.maximum} character(s)`:e.type==="number"?r=`Number must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="bigint"?r=`BigInt must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="date"?r=`Date must be ${e.exact?"exactly":e.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(e.maximum))}`:r="Invalid input";break;case I.custom:r="Invalid input";break;case I.invalid_intersection_types:r="Intersection results could not be merged";break;case I.not_multiple_of:r=`Number must be a multiple of ${e.multipleOf}`;break;case I.not_finite:r="Number must be finite";break;default:r=t.defaultError,pe.assertNever(e)}return{message:r}};let LC=Yu;function $C(){return LC}const DC=e=>{const{data:t,path:r,errorMaps:n,issueData:i}=e,s=[...r,...i.path||[]],o={...i,path:s};if(i.message!==void 0)return{...i,path:s,message:i.message};let l="";const c=n.filter(u=>!!u).slice().reverse();for(const u of c)l=u(o,{data:t,defaultError:l}).message;return{...i,path:s,message:l}};function $(e,t){const r=$C(),n=DC({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,r,r===Yu?void 0:Yu].filter(i=>!!i)});e.common.issues.push(n)}class Pt{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(t,r){const n=[];for(const i of r){if(i.status==="aborted")return re;i.status==="dirty"&&t.dirty(),n.push(i.value)}return{status:t.value,value:n}}static async mergeObjectAsync(t,r){const n=[];for(const i of r){const s=await i.key,o=await i.value;n.push({key:s,value:o})}return Pt.mergeObjectSync(t,n)}static mergeObjectSync(t,r){const n={};for(const i of r){const{key:s,value:o}=i;if(s.status==="aborted"||o.status==="aborted")return re;s.status==="dirty"&&t.dirty(),o.status==="dirty"&&t.dirty(),s.value!=="__proto__"&&(typeof o.value<"u"||i.alwaysSet)&&(n[s.value]=o.value)}return{status:t.value,value:n}}}const re=Object.freeze({status:"aborted"}),fs=e=>({status:"dirty",value:e}),$t=e=>({status:"valid",value:e}),dm=e=>e.status==="aborted",pm=e=>e.status==="dirty",Pi=e=>e.status==="valid",Ja=e=>typeof Promise<"u"&&e instanceof Promise;var H;(function(e){e.errToObj=t=>typeof t=="string"?{message:t}:t||{},e.toString=t=>typeof t=="string"?t:t==null?void 0:t.message})(H||(H={}));var Xa=globalThis&&globalThis.__classPrivateFieldGet||function(e,t,r,n){if(r==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?n:r==="a"?n.call(e):n?n.value:t.get(e)},e1=globalThis&&globalThis.__classPrivateFieldSet||function(e,t,r,n,i){if(n==="m")throw new TypeError("Private method is not writable");if(n==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?e!==t||!i:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n==="a"?i.call(e,r):i?i.value=r:t.set(e,r),r},hs,ms;class Jr{constructor(t,r,n,i){this._cachedPath=[],this.parent=t,this.data=r,this._path=n,this._key=i}get path(){return this._cachedPath.length||(Array.isArray(this._key)?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const fm=(e,t)=>{if(Pi(t))return{success:!0,data:t.value};if(!e.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const r=new wr(e.common.issues);return this._error=r,this._error}}};function oe(e){if(!e)return{};const{errorMap:t,invalid_type_error:r,required_error:n,description:i}=e;if(t&&(r||n))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return t?{errorMap:t,description:i}:{errorMap:(o,l)=>{const{message:c}=e;return o.code==="invalid_enum_value"?{message:c??l.defaultError}:typeof l.data>"u"?{message:c??n??l.defaultError}:o.code!=="invalid_type"?{message:l.defaultError}:{message:c??r??l.defaultError}},description:i}}class de{get description(){return this._def.description}_getType(t){return zr(t.data)}_getOrReturnCtx(t,r){return r||{common:t.parent.common,data:t.data,parsedType:zr(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}_processInputParams(t){return{status:new Pt,ctx:{common:t.parent.common,data:t.data,parsedType:zr(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}}_parseSync(t){const r=this._parse(t);if(Ja(r))throw new Error("Synchronous parse encountered promise.");return r}_parseAsync(t){const r=this._parse(t);return Promise.resolve(r)}parse(t,r){const n=this.safeParse(t,r);if(n.success)return n.data;throw n.error}safeParse(t,r){const n={common:{issues:[],async:(r==null?void 0:r.async)??!1,contextualErrorMap:r==null?void 0:r.errorMap},path:(r==null?void 0:r.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:zr(t)},i=this._parseSync({data:t,path:n.path,parent:n});return fm(n,i)}"~validate"(t){var n,i;const r={common:{issues:[],async:!!this["~standard"].async},path:[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:zr(t)};if(!this["~standard"].async)try{const s=this._parseSync({data:t,path:[],parent:r});return Pi(s)?{value:s.value}:{issues:r.common.issues}}catch(s){(i=(n=s==null?void 0:s.message)==null?void 0:n.toLowerCase())!=null&&i.includes("encountered")&&(this["~standard"].async=!0),r.common={issues:[],async:!0}}return this._parseAsync({data:t,path:[],parent:r}).then(s=>Pi(s)?{value:s.value}:{issues:r.common.issues})}async parseAsync(t,r){const n=await this.safeParseAsync(t,r);if(n.success)return n.data;throw n.error}async safeParseAsync(t,r){const n={common:{issues:[],contextualErrorMap:r==null?void 0:r.errorMap,async:!0},path:(r==null?void 0:r.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:zr(t)},i=this._parse({data:t,path:n.path,parent:n}),s=await(Ja(i)?i:Promise.resolve(i));return fm(n,s)}refine(t,r){const n=i=>typeof r=="string"||typeof r>"u"?{message:r}:typeof r=="function"?r(i):r;return this._refinement((i,s)=>{const o=t(i),l=()=>s.addIssue({code:I.custom,...n(i)});return typeof Promise<"u"&&o instanceof Promise?o.then(c=>c?!0:(l(),!1)):o?!0:(l(),!1)})}refinement(t,r){return this._refinement((n,i)=>t(n)?!0:(i.addIssue(typeof r=="function"?r(n,i):r),!1))}_refinement(t){return new Ai({schema:this,typeName:ee.ZodEffects,effect:{type:"refinement",refinement:t}})}superRefine(t){return this._refinement(t)}constructor(t){this.spa=this.safeParseAsync,this._def=t,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this),this["~standard"]={version:1,vendor:"zod",validate:r=>this["~validate"](r)}}optional(){return Qr.create(this,this._def)}nullable(){return Ni.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return nr.create(this)}promise(){return nl.create(this,this._def)}or(t){return tl.create([this,t],this._def)}and(t){return rl.create(this,t,this._def)}transform(t){return new Ai({...oe(this._def),schema:this,typeName:ee.ZodEffects,effect:{type:"transform",transform:t}})}default(t){const r=typeof t=="function"?t:()=>t;return new ed({...oe(this._def),innerType:this,defaultValue:r,typeName:ee.ZodDefault})}brand(){return new lE({typeName:ee.ZodBranded,type:this,...oe(this._def)})}catch(t){const r=typeof t=="function"?t:()=>t;return new td({...oe(this._def),innerType:this,catchValue:r,typeName:ee.ZodCatch})}describe(t){const r=this.constructor;return new r({...this._def,description:t})}pipe(t){return hp.create(this,t)}readonly(){return rd.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const UC=/^c[^\s-]{8,}$/i,FC=/^[0-9a-z]+$/,BC=/^[0-9A-HJKMNP-TV-Z]{26}$/i,VC=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,HC=/^[a-z0-9_-]{21}$/i,WC=/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,qC=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,ZC=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,GC="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let zc;const QC=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,YC=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,KC=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,JC=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,XC=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,eE=/^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,t1="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",tE=new RegExp(`^${t1}$`);function r1(e){let t="[0-5]\\d";e.precision?t=`${t}\\.\\d{${e.precision}}`:e.precision==null&&(t=`${t}(\\.\\d+)?`);const r=e.precision?"+":"?";return`([01]\\d|2[0-3]):[0-5]\\d(:${t})${r}`}function rE(e){return new RegExp(`^${r1(e)}$`)}function nE(e){let t=`${t1}T${r1(e)}`;const r=[];return r.push(e.local?"Z?":"Z"),e.offset&&r.push("([+-]\\d{2}:?\\d{2})"),t=`${t}(${r.join("|")})`,new RegExp(`^${t}$`)}function iE(e,t){return!!((t==="v4"||!t)&&QC.test(e)||(t==="v6"||!t)&&KC.test(e))}function sE(e,t){if(!WC.test(e))return!1;try{const[r]=e.split("."),n=r.replace(/-/g,"+").replace(/_/g,"/").padEnd(r.length+(4-r.length%4)%4,"="),i=JSON.parse(atob(n));return!(typeof i!="object"||i===null||"typ"in i&&(i==null?void 0:i.typ)!=="JWT"||!i.alg||t&&i.alg!==t)}catch{return!1}}function oE(e,t){return!!((t==="v4"||!t)&&YC.test(e)||(t==="v6"||!t)&&JC.test(e))}class Ur extends de{_parse(t){if(this._def.coerce&&(t.data=String(t.data)),this._getType(t)!==F.string){const s=this._getOrReturnCtx(t);return $(s,{code:I.invalid_type,expected:F.string,received:s.parsedType}),re}const n=new Pt;let i;for(const s of this._def.checks)if(s.kind==="min")t.data.length<s.value&&(i=this._getOrReturnCtx(t,i),$(i,{code:I.too_small,minimum:s.value,type:"string",inclusive:!0,exact:!1,message:s.message}),n.dirty());else if(s.kind==="max")t.data.length>s.value&&(i=this._getOrReturnCtx(t,i),$(i,{code:I.too_big,maximum:s.value,type:"string",inclusive:!0,exact:!1,message:s.message}),n.dirty());else if(s.kind==="length"){const o=t.data.length>s.value,l=t.data.length<s.value;(o||l)&&(i=this._getOrReturnCtx(t,i),o?$(i,{code:I.too_big,maximum:s.value,type:"string",inclusive:!0,exact:!0,message:s.message}):l&&$(i,{code:I.too_small,minimum:s.value,type:"string",inclusive:!0,exact:!0,message:s.message}),n.dirty())}else if(s.kind==="email")ZC.test(t.data)||(i=this._getOrReturnCtx(t,i),$(i,{validation:"email",code:I.invalid_string,message:s.message}),n.dirty());else if(s.kind==="emoji")zc||(zc=new RegExp(GC,"u")),zc.test(t.data)||(i=this._getOrReturnCtx(t,i),$(i,{validation:"emoji",code:I.invalid_string,message:s.message}),n.dirty());else if(s.kind==="uuid")VC.test(t.data)||(i=this._getOrReturnCtx(t,i),$(i,{validation:"uuid",code:I.invalid_string,message:s.message}),n.dirty());else if(s.kind==="nanoid")HC.test(t.data)||(i=this._getOrReturnCtx(t,i),$(i,{validation:"nanoid",code:I.invalid_string,message:s.message}),n.dirty());else if(s.kind==="cuid")UC.test(t.data)||(i=this._getOrReturnCtx(t,i),$(i,{validation:"cuid",code:I.invalid_string,message:s.message}),n.dirty());else if(s.kind==="cuid2")FC.test(t.data)||(i=this._getOrReturnCtx(t,i),$(i,{validation:"cuid2",code:I.invalid_string,message:s.message}),n.dirty());else if(s.kind==="ulid")BC.test(t.data)||(i=this._getOrReturnCtx(t,i),$(i,{validation:"ulid",code:I.invalid_string,message:s.message}),n.dirty());else if(s.kind==="url")try{new URL(t.data)}catch{i=this._getOrReturnCtx(t,i),$(i,{validation:"url",code:I.invalid_string,message:s.message}),n.dirty()}else s.kind==="regex"?(s.regex.lastIndex=0,s.regex.test(t.data)||(i=this._getOrReturnCtx(t,i),$(i,{validation:"regex",code:I.invalid_string,message:s.message}),n.dirty())):s.kind==="trim"?t.data=t.data.trim():s.kind==="includes"?t.data.includes(s.value,s.position)||(i=this._getOrReturnCtx(t,i),$(i,{code:I.invalid_string,validation:{includes:s.value,position:s.position},message:s.message}),n.dirty()):s.kind==="toLowerCase"?t.data=t.data.toLowerCase():s.kind==="toUpperCase"?t.data=t.data.toUpperCase():s.kind==="startsWith"?t.data.startsWith(s.value)||(i=this._getOrReturnCtx(t,i),$(i,{code:I.invalid_string,validation:{startsWith:s.value},message:s.message}),n.dirty()):s.kind==="endsWith"?t.data.endsWith(s.value)||(i=this._getOrReturnCtx(t,i),$(i,{code:I.invalid_string,validation:{endsWith:s.value},message:s.message}),n.dirty()):s.kind==="datetime"?nE(s).test(t.data)||(i=this._getOrReturnCtx(t,i),$(i,{code:I.invalid_string,validation:"datetime",message:s.message}),n.dirty()):s.kind==="date"?tE.test(t.data)||(i=this._getOrReturnCtx(t,i),$(i,{code:I.invalid_string,validation:"date",message:s.message}),n.dirty()):s.kind==="time"?rE(s).test(t.data)||(i=this._getOrReturnCtx(t,i),$(i,{code:I.invalid_string,validation:"time",message:s.message}),n.dirty()):s.kind==="duration"?qC.test(t.data)||(i=this._getOrReturnCtx(t,i),$(i,{validation:"duration",code:I.invalid_string,message:s.message}),n.dirty()):s.kind==="ip"?iE(t.data,s.version)||(i=this._getOrReturnCtx(t,i),$(i,{validation:"ip",code:I.invalid_string,message:s.message}),n.dirty()):s.kind==="jwt"?sE(t.data,s.alg)||(i=this._getOrReturnCtx(t,i),$(i,{validation:"jwt",code:I.invalid_string,message:s.message}),n.dirty()):s.kind==="cidr"?oE(t.data,s.version)||(i=this._getOrReturnCtx(t,i),$(i,{validation:"cidr",code:I.invalid_string,message:s.message}),n.dirty()):s.kind==="base64"?XC.test(t.data)||(i=this._getOrReturnCtx(t,i),$(i,{validation:"base64",code:I.invalid_string,message:s.message}),n.dirty()):s.kind==="base64url"?eE.test(t.data)||(i=this._getOrReturnCtx(t,i),$(i,{validation:"base64url",code:I.invalid_string,message:s.message}),n.dirty()):pe.assertNever(s);return{status:n.value,value:t.data}}_regex(t,r,n){return this.refinement(i=>t.test(i),{validation:r,code:I.invalid_string,...H.errToObj(n)})}_addCheck(t){return new Ur({...this._def,checks:[...this._def.checks,t]})}email(t){return this._addCheck({kind:"email",...H.errToObj(t)})}url(t){return this._addCheck({kind:"url",...H.errToObj(t)})}emoji(t){return this._addCheck({kind:"emoji",...H.errToObj(t)})}uuid(t){return this._addCheck({kind:"uuid",...H.errToObj(t)})}nanoid(t){return this._addCheck({kind:"nanoid",...H.errToObj(t)})}cuid(t){return this._addCheck({kind:"cuid",...H.errToObj(t)})}cuid2(t){return this._addCheck({kind:"cuid2",...H.errToObj(t)})}ulid(t){return this._addCheck({kind:"ulid",...H.errToObj(t)})}base64(t){return this._addCheck({kind:"base64",...H.errToObj(t)})}base64url(t){return this._addCheck({kind:"base64url",...H.errToObj(t)})}jwt(t){return this._addCheck({kind:"jwt",...H.errToObj(t)})}ip(t){return this._addCheck({kind:"ip",...H.errToObj(t)})}cidr(t){return this._addCheck({kind:"cidr",...H.errToObj(t)})}datetime(t){return typeof t=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,local:!1,message:t}):this._addCheck({kind:"datetime",precision:typeof(t==null?void 0:t.precision)>"u"?null:t==null?void 0:t.precision,offset:(t==null?void 0:t.offset)??!1,local:(t==null?void 0:t.local)??!1,...H.errToObj(t==null?void 0:t.message)})}date(t){return this._addCheck({kind:"date",message:t})}time(t){return typeof t=="string"?this._addCheck({kind:"time",precision:null,message:t}):this._addCheck({kind:"time",precision:typeof(t==null?void 0:t.precision)>"u"?null:t==null?void 0:t.precision,...H.errToObj(t==null?void 0:t.message)})}duration(t){return this._addCheck({kind:"duration",...H.errToObj(t)})}regex(t,r){return this._addCheck({kind:"regex",regex:t,...H.errToObj(r)})}includes(t,r){return this._addCheck({kind:"includes",value:t,position:r==null?void 0:r.position,...H.errToObj(r==null?void 0:r.message)})}startsWith(t,r){return this._addCheck({kind:"startsWith",value:t,...H.errToObj(r)})}endsWith(t,r){return this._addCheck({kind:"endsWith",value:t,...H.errToObj(r)})}min(t,r){return this._addCheck({kind:"min",value:t,...H.errToObj(r)})}max(t,r){return this._addCheck({kind:"max",value:t,...H.errToObj(r)})}length(t,r){return this._addCheck({kind:"length",value:t,...H.errToObj(r)})}nonempty(t){return this.min(1,H.errToObj(t))}trim(){return new Ur({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new Ur({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new Ur({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(t=>t.kind==="datetime")}get isDate(){return!!this._def.checks.find(t=>t.kind==="date")}get isTime(){return!!this._def.checks.find(t=>t.kind==="time")}get isDuration(){return!!this._def.checks.find(t=>t.kind==="duration")}get isEmail(){return!!this._def.checks.find(t=>t.kind==="email")}get isURL(){return!!this._def.checks.find(t=>t.kind==="url")}get isEmoji(){return!!this._def.checks.find(t=>t.kind==="emoji")}get isUUID(){return!!this._def.checks.find(t=>t.kind==="uuid")}get isNANOID(){return!!this._def.checks.find(t=>t.kind==="nanoid")}get isCUID(){return!!this._def.checks.find(t=>t.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(t=>t.kind==="cuid2")}get isULID(){return!!this._def.checks.find(t=>t.kind==="ulid")}get isIP(){return!!this._def.checks.find(t=>t.kind==="ip")}get isCIDR(){return!!this._def.checks.find(t=>t.kind==="cidr")}get isBase64(){return!!this._def.checks.find(t=>t.kind==="base64")}get isBase64url(){return!!this._def.checks.find(t=>t.kind==="base64url")}get minLength(){let t=null;for(const r of this._def.checks)r.kind==="min"&&(t===null||r.value>t)&&(t=r.value);return t}get maxLength(){let t=null;for(const r of this._def.checks)r.kind==="max"&&(t===null||r.value<t)&&(t=r.value);return t}}Ur.create=e=>new Ur({checks:[],typeName:ee.ZodString,coerce:(e==null?void 0:e.coerce)??!1,...oe(e)});function aE(e,t){const r=(e.toString().split(".")[1]||"").length,n=(t.toString().split(".")[1]||"").length,i=r>n?r:n,s=Number.parseInt(e.toFixed(i).replace(".","")),o=Number.parseInt(t.toFixed(i).replace(".",""));return s%o/10**i}class Ti extends de{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(t){if(this._def.coerce&&(t.data=Number(t.data)),this._getType(t)!==F.number){const s=this._getOrReturnCtx(t);return $(s,{code:I.invalid_type,expected:F.number,received:s.parsedType}),re}let n;const i=new Pt;for(const s of this._def.checks)s.kind==="int"?pe.isInteger(t.data)||(n=this._getOrReturnCtx(t,n),$(n,{code:I.invalid_type,expected:"integer",received:"float",message:s.message}),i.dirty()):s.kind==="min"?(s.inclusive?t.data<s.value:t.data<=s.value)&&(n=this._getOrReturnCtx(t,n),$(n,{code:I.too_small,minimum:s.value,type:"number",inclusive:s.inclusive,exact:!1,message:s.message}),i.dirty()):s.kind==="max"?(s.inclusive?t.data>s.value:t.data>=s.value)&&(n=this._getOrReturnCtx(t,n),$(n,{code:I.too_big,maximum:s.value,type:"number",inclusive:s.inclusive,exact:!1,message:s.message}),i.dirty()):s.kind==="multipleOf"?aE(t.data,s.value)!==0&&(n=this._getOrReturnCtx(t,n),$(n,{code:I.not_multiple_of,multipleOf:s.value,message:s.message}),i.dirty()):s.kind==="finite"?Number.isFinite(t.data)||(n=this._getOrReturnCtx(t,n),$(n,{code:I.not_finite,message:s.message}),i.dirty()):pe.assertNever(s);return{status:i.value,value:t.data}}gte(t,r){return this.setLimit("min",t,!0,H.toString(r))}gt(t,r){return this.setLimit("min",t,!1,H.toString(r))}lte(t,r){return this.setLimit("max",t,!0,H.toString(r))}lt(t,r){return this.setLimit("max",t,!1,H.toString(r))}setLimit(t,r,n,i){return new Ti({...this._def,checks:[...this._def.checks,{kind:t,value:r,inclusive:n,message:H.toString(i)}]})}_addCheck(t){return new Ti({...this._def,checks:[...this._def.checks,t]})}int(t){return this._addCheck({kind:"int",message:H.toString(t)})}positive(t){return this._addCheck({kind:"min",value:0,inclusive:!1,message:H.toString(t)})}negative(t){return this._addCheck({kind:"max",value:0,inclusive:!1,message:H.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:0,inclusive:!0,message:H.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:0,inclusive:!0,message:H.toString(t)})}multipleOf(t,r){return this._addCheck({kind:"multipleOf",value:t,message:H.toString(r)})}finite(t){return this._addCheck({kind:"finite",message:H.toString(t)})}safe(t){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:H.toString(t)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:H.toString(t)})}get minValue(){let t=null;for(const r of this._def.checks)r.kind==="min"&&(t===null||r.value>t)&&(t=r.value);return t}get maxValue(){let t=null;for(const r of this._def.checks)r.kind==="max"&&(t===null||r.value<t)&&(t=r.value);return t}get isInt(){return!!this._def.checks.find(t=>t.kind==="int"||t.kind==="multipleOf"&&pe.isInteger(t.value))}get isFinite(){let t=null,r=null;for(const n of this._def.checks){if(n.kind==="finite"||n.kind==="int"||n.kind==="multipleOf")return!0;n.kind==="min"?(r===null||n.value>r)&&(r=n.value):n.kind==="max"&&(t===null||n.value<t)&&(t=n.value)}return Number.isFinite(r)&&Number.isFinite(t)}}Ti.create=e=>new Ti({checks:[],typeName:ee.ZodNumber,coerce:(e==null?void 0:e.coerce)||!1,...oe(e)});class Ys extends de{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(t){if(this._def.coerce)try{t.data=BigInt(t.data)}catch{return this._getInvalidInput(t)}if(this._getType(t)!==F.bigint)return this._getInvalidInput(t);let n;const i=new Pt;for(const s of this._def.checks)s.kind==="min"?(s.inclusive?t.data<s.value:t.data<=s.value)&&(n=this._getOrReturnCtx(t,n),$(n,{code:I.too_small,type:"bigint",minimum:s.value,inclusive:s.inclusive,message:s.message}),i.dirty()):s.kind==="max"?(s.inclusive?t.data>s.value:t.data>=s.value)&&(n=this._getOrReturnCtx(t,n),$(n,{code:I.too_big,type:"bigint",maximum:s.value,inclusive:s.inclusive,message:s.message}),i.dirty()):s.kind==="multipleOf"?t.data%s.value!==BigInt(0)&&(n=this._getOrReturnCtx(t,n),$(n,{code:I.not_multiple_of,multipleOf:s.value,message:s.message}),i.dirty()):pe.assertNever(s);return{status:i.value,value:t.data}}_getInvalidInput(t){const r=this._getOrReturnCtx(t);return $(r,{code:I.invalid_type,expected:F.bigint,received:r.parsedType}),re}gte(t,r){return this.setLimit("min",t,!0,H.toString(r))}gt(t,r){return this.setLimit("min",t,!1,H.toString(r))}lte(t,r){return this.setLimit("max",t,!0,H.toString(r))}lt(t,r){return this.setLimit("max",t,!1,H.toString(r))}setLimit(t,r,n,i){return new Ys({...this._def,checks:[...this._def.checks,{kind:t,value:r,inclusive:n,message:H.toString(i)}]})}_addCheck(t){return new Ys({...this._def,checks:[...this._def.checks,t]})}positive(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:H.toString(t)})}negative(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:H.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:H.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:H.toString(t)})}multipleOf(t,r){return this._addCheck({kind:"multipleOf",value:t,message:H.toString(r)})}get minValue(){let t=null;for(const r of this._def.checks)r.kind==="min"&&(t===null||r.value>t)&&(t=r.value);return t}get maxValue(){let t=null;for(const r of this._def.checks)r.kind==="max"&&(t===null||r.value<t)&&(t=r.value);return t}}Ys.create=e=>new Ys({checks:[],typeName:ee.ZodBigInt,coerce:(e==null?void 0:e.coerce)??!1,...oe(e)});class Ku extends de{_parse(t){if(this._def.coerce&&(t.data=!!t.data),this._getType(t)!==F.boolean){const n=this._getOrReturnCtx(t);return $(n,{code:I.invalid_type,expected:F.boolean,received:n.parsedType}),re}return $t(t.data)}}Ku.create=e=>new Ku({typeName:ee.ZodBoolean,coerce:(e==null?void 0:e.coerce)||!1,...oe(e)});class el extends de{_parse(t){if(this._def.coerce&&(t.data=new Date(t.data)),this._getType(t)!==F.date){const s=this._getOrReturnCtx(t);return $(s,{code:I.invalid_type,expected:F.date,received:s.parsedType}),re}if(Number.isNaN(t.data.getTime())){const s=this._getOrReturnCtx(t);return $(s,{code:I.invalid_date}),re}const n=new Pt;let i;for(const s of this._def.checks)s.kind==="min"?t.data.getTime()<s.value&&(i=this._getOrReturnCtx(t,i),$(i,{code:I.too_small,message:s.message,inclusive:!0,exact:!1,minimum:s.value,type:"date"}),n.dirty()):s.kind==="max"?t.data.getTime()>s.value&&(i=this._getOrReturnCtx(t,i),$(i,{code:I.too_big,message:s.message,inclusive:!0,exact:!1,maximum:s.value,type:"date"}),n.dirty()):pe.assertNever(s);return{status:n.value,value:new Date(t.data.getTime())}}_addCheck(t){return new el({...this._def,checks:[...this._def.checks,t]})}min(t,r){return this._addCheck({kind:"min",value:t.getTime(),message:H.toString(r)})}max(t,r){return this._addCheck({kind:"max",value:t.getTime(),message:H.toString(r)})}get minDate(){let t=null;for(const r of this._def.checks)r.kind==="min"&&(t===null||r.value>t)&&(t=r.value);return t!=null?new Date(t):null}get maxDate(){let t=null;for(const r of this._def.checks)r.kind==="max"&&(t===null||r.value<t)&&(t=r.value);return t!=null?new Date(t):null}}el.create=e=>new el({checks:[],coerce:(e==null?void 0:e.coerce)||!1,typeName:ee.ZodDate,...oe(e)});class hm extends de{_parse(t){if(this._getType(t)!==F.symbol){const n=this._getOrReturnCtx(t);return $(n,{code:I.invalid_type,expected:F.symbol,received:n.parsedType}),re}return $t(t.data)}}hm.create=e=>new hm({typeName:ee.ZodSymbol,...oe(e)});class mm extends de{_parse(t){if(this._getType(t)!==F.undefined){const n=this._getOrReturnCtx(t);return $(n,{code:I.invalid_type,expected:F.undefined,received:n.parsedType}),re}return $t(t.data)}}mm.create=e=>new mm({typeName:ee.ZodUndefined,...oe(e)});class gm extends de{_parse(t){if(this._getType(t)!==F.null){const n=this._getOrReturnCtx(t);return $(n,{code:I.invalid_type,expected:F.null,received:n.parsedType}),re}return $t(t.data)}}gm.create=e=>new gm({typeName:ee.ZodNull,...oe(e)});class Ju extends de{constructor(){super(...arguments),this._any=!0}_parse(t){return $t(t.data)}}Ju.create=e=>new Ju({typeName:ee.ZodAny,...oe(e)});class ym extends de{constructor(){super(...arguments),this._unknown=!0}_parse(t){return $t(t.data)}}ym.create=e=>new ym({typeName:ee.ZodUnknown,...oe(e)});class Xr extends de{_parse(t){const r=this._getOrReturnCtx(t);return $(r,{code:I.invalid_type,expected:F.never,received:r.parsedType}),re}}Xr.create=e=>new Xr({typeName:ee.ZodNever,...oe(e)});class vm extends de{_parse(t){if(this._getType(t)!==F.undefined){const n=this._getOrReturnCtx(t);return $(n,{code:I.invalid_type,expected:F.void,received:n.parsedType}),re}return $t(t.data)}}vm.create=e=>new vm({typeName:ee.ZodVoid,...oe(e)});class nr extends de{_parse(t){const{ctx:r,status:n}=this._processInputParams(t),i=this._def;if(r.parsedType!==F.array)return $(r,{code:I.invalid_type,expected:F.array,received:r.parsedType}),re;if(i.exactLength!==null){const o=r.data.length>i.exactLength.value,l=r.data.length<i.exactLength.value;(o||l)&&($(r,{code:o?I.too_big:I.too_small,minimum:l?i.exactLength.value:void 0,maximum:o?i.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:i.exactLength.message}),n.dirty())}if(i.minLength!==null&&r.data.length<i.minLength.value&&($(r,{code:I.too_small,minimum:i.minLength.value,type:"array",inclusive:!0,exact:!1,message:i.minLength.message}),n.dirty()),i.maxLength!==null&&r.data.length>i.maxLength.value&&($(r,{code:I.too_big,maximum:i.maxLength.value,type:"array",inclusive:!0,exact:!1,message:i.maxLength.message}),n.dirty()),r.common.async)return Promise.all([...r.data].map((o,l)=>i.type._parseAsync(new Jr(r,o,r.path,l)))).then(o=>Pt.mergeArray(n,o));const s=[...r.data].map((o,l)=>i.type._parseSync(new Jr(r,o,r.path,l)));return Pt.mergeArray(n,s)}get element(){return this._def.type}min(t,r){return new nr({...this._def,minLength:{value:t,message:H.toString(r)}})}max(t,r){return new nr({...this._def,maxLength:{value:t,message:H.toString(r)}})}length(t,r){return new nr({...this._def,exactLength:{value:t,message:H.toString(r)}})}nonempty(t){return this.min(1,t)}}nr.create=(e,t)=>new nr({type:e,minLength:null,maxLength:null,exactLength:null,typeName:ee.ZodArray,...oe(t)});function Qn(e){if(e instanceof Pe){const t={};for(const r in e.shape){const n=e.shape[r];t[r]=Qr.create(Qn(n))}return new Pe({...e._def,shape:()=>t})}else return e instanceof nr?new nr({...e._def,type:Qn(e.element)}):e instanceof Qr?Qr.create(Qn(e.unwrap())):e instanceof Ni?Ni.create(Qn(e.unwrap())):e instanceof In?In.create(e.items.map(t=>Qn(t))):e}class Pe extends de{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const t=this._def.shape(),r=pe.objectKeys(t);return this._cached={shape:t,keys:r},this._cached}_parse(t){if(this._getType(t)!==F.object){const u=this._getOrReturnCtx(t);return $(u,{code:I.invalid_type,expected:F.object,received:u.parsedType}),re}const{status:n,ctx:i}=this._processInputParams(t),{shape:s,keys:o}=this._getCached(),l=[];if(!(this._def.catchall instanceof Xr&&this._def.unknownKeys==="strip"))for(const u in i.data)o.includes(u)||l.push(u);const c=[];for(const u of o){const d=s[u],p=i.data[u];c.push({key:{status:"valid",value:u},value:d._parse(new Jr(i,p,i.path,u)),alwaysSet:u in i.data})}if(this._def.catchall instanceof Xr){const u=this._def.unknownKeys;if(u==="passthrough")for(const d of l)c.push({key:{status:"valid",value:d},value:{status:"valid",value:i.data[d]}});else if(u==="strict")l.length>0&&($(i,{code:I.unrecognized_keys,keys:l}),n.dirty());else if(u!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const u=this._def.catchall;for(const d of l){const p=i.data[d];c.push({key:{status:"valid",value:d},value:u._parse(new Jr(i,p,i.path,d)),alwaysSet:d in i.data})}}return i.common.async?Promise.resolve().then(async()=>{const u=[];for(const d of c){const p=await d.key,v=await d.value;u.push({key:p,value:v,alwaysSet:d.alwaysSet})}return u}).then(u=>Pt.mergeObjectSync(n,u)):Pt.mergeObjectSync(n,c)}get shape(){return this._def.shape()}strict(t){return H.errToObj,new Pe({...this._def,unknownKeys:"strict",...t!==void 0?{errorMap:(r,n)=>{var s,o;const i=((o=(s=this._def).errorMap)==null?void 0:o.call(s,r,n).message)??n.defaultError;return r.code==="unrecognized_keys"?{message:H.errToObj(t).message??i}:{message:i}}}:{}})}strip(){return new Pe({...this._def,unknownKeys:"strip"})}passthrough(){return new Pe({...this._def,unknownKeys:"passthrough"})}extend(t){return new Pe({...this._def,shape:()=>({...this._def.shape(),...t})})}merge(t){return new Pe({unknownKeys:t._def.unknownKeys,catchall:t._def.catchall,shape:()=>({...this._def.shape(),...t._def.shape()}),typeName:ee.ZodObject})}setKey(t,r){return this.augment({[t]:r})}catchall(t){return new Pe({...this._def,catchall:t})}pick(t){const r={};for(const n of pe.objectKeys(t))t[n]&&this.shape[n]&&(r[n]=this.shape[n]);return new Pe({...this._def,shape:()=>r})}omit(t){const r={};for(const n of pe.objectKeys(this.shape))t[n]||(r[n]=this.shape[n]);return new Pe({...this._def,shape:()=>r})}deepPartial(){return Qn(this)}partial(t){const r={};for(const n of pe.objectKeys(this.shape)){const i=this.shape[n];t&&!t[n]?r[n]=i:r[n]=i.optional()}return new Pe({...this._def,shape:()=>r})}required(t){const r={};for(const n of pe.objectKeys(this.shape))if(t&&!t[n])r[n]=this.shape[n];else{let s=this.shape[n];for(;s instanceof Qr;)s=s._def.innerType;r[n]=s}return new Pe({...this._def,shape:()=>r})}keyof(){return n1(pe.objectKeys(this.shape))}}Pe.create=(e,t)=>new Pe({shape:()=>e,unknownKeys:"strip",catchall:Xr.create(),typeName:ee.ZodObject,...oe(t)});Pe.strictCreate=(e,t)=>new Pe({shape:()=>e,unknownKeys:"strict",catchall:Xr.create(),typeName:ee.ZodObject,...oe(t)});Pe.lazycreate=(e,t)=>new Pe({shape:e,unknownKeys:"strip",catchall:Xr.create(),typeName:ee.ZodObject,...oe(t)});class tl extends de{_parse(t){const{ctx:r}=this._processInputParams(t),n=this._def.options;function i(s){for(const l of s)if(l.result.status==="valid")return l.result;for(const l of s)if(l.result.status==="dirty")return r.common.issues.push(...l.ctx.common.issues),l.result;const o=s.map(l=>new wr(l.ctx.common.issues));return $(r,{code:I.invalid_union,unionErrors:o}),re}if(r.common.async)return Promise.all(n.map(async s=>{const o={...r,common:{...r.common,issues:[]},parent:null};return{result:await s._parseAsync({data:r.data,path:r.path,parent:o}),ctx:o}})).then(i);{let s;const o=[];for(const c of n){const u={...r,common:{...r.common,issues:[]},parent:null},d=c._parseSync({data:r.data,path:r.path,parent:u});if(d.status==="valid")return d;d.status==="dirty"&&!s&&(s={result:d,ctx:u}),u.common.issues.length&&o.push(u.common.issues)}if(s)return r.common.issues.push(...s.ctx.common.issues),s.result;const l=o.map(c=>new wr(c));return $(r,{code:I.invalid_union,unionErrors:l}),re}}get options(){return this._def.options}}tl.create=(e,t)=>new tl({options:e,typeName:ee.ZodUnion,...oe(t)});function Xu(e,t){const r=zr(e),n=zr(t);if(e===t)return{valid:!0,data:e};if(r===F.object&&n===F.object){const i=pe.objectKeys(t),s=pe.objectKeys(e).filter(l=>i.indexOf(l)!==-1),o={...e,...t};for(const l of s){const c=Xu(e[l],t[l]);if(!c.valid)return{valid:!1};o[l]=c.data}return{valid:!0,data:o}}else if(r===F.array&&n===F.array){if(e.length!==t.length)return{valid:!1};const i=[];for(let s=0;s<e.length;s++){const o=e[s],l=t[s],c=Xu(o,l);if(!c.valid)return{valid:!1};i.push(c.data)}return{valid:!0,data:i}}else return r===F.date&&n===F.date&&+e==+t?{valid:!0,data:e}:{valid:!1}}class rl extends de{_parse(t){const{status:r,ctx:n}=this._processInputParams(t),i=(s,o)=>{if(dm(s)||dm(o))return re;const l=Xu(s.value,o.value);return l.valid?((pm(s)||pm(o))&&r.dirty(),{status:r.value,value:l.data}):($(n,{code:I.invalid_intersection_types}),re)};return n.common.async?Promise.all([this._def.left._parseAsync({data:n.data,path:n.path,parent:n}),this._def.right._parseAsync({data:n.data,path:n.path,parent:n})]).then(([s,o])=>i(s,o)):i(this._def.left._parseSync({data:n.data,path:n.path,parent:n}),this._def.right._parseSync({data:n.data,path:n.path,parent:n}))}}rl.create=(e,t,r)=>new rl({left:e,right:t,typeName:ee.ZodIntersection,...oe(r)});class In extends de{_parse(t){const{status:r,ctx:n}=this._processInputParams(t);if(n.parsedType!==F.array)return $(n,{code:I.invalid_type,expected:F.array,received:n.parsedType}),re;if(n.data.length<this._def.items.length)return $(n,{code:I.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),re;!this._def.rest&&n.data.length>this._def.items.length&&($(n,{code:I.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),r.dirty());const s=[...n.data].map((o,l)=>{const c=this._def.items[l]||this._def.rest;return c?c._parse(new Jr(n,o,n.path,l)):null}).filter(o=>!!o);return n.common.async?Promise.all(s).then(o=>Pt.mergeArray(r,o)):Pt.mergeArray(r,s)}get items(){return this._def.items}rest(t){return new In({...this._def,rest:t})}}In.create=(e,t)=>{if(!Array.isArray(e))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new In({items:e,typeName:ee.ZodTuple,rest:null,...oe(t)})};class xm extends de{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(t){const{status:r,ctx:n}=this._processInputParams(t);if(n.parsedType!==F.map)return $(n,{code:I.invalid_type,expected:F.map,received:n.parsedType}),re;const i=this._def.keyType,s=this._def.valueType,o=[...n.data.entries()].map(([l,c],u)=>({key:i._parse(new Jr(n,l,n.path,[u,"key"])),value:s._parse(new Jr(n,c,n.path,[u,"value"]))}));if(n.common.async){const l=new Map;return Promise.resolve().then(async()=>{for(const c of o){const u=await c.key,d=await c.value;if(u.status==="aborted"||d.status==="aborted")return re;(u.status==="dirty"||d.status==="dirty")&&r.dirty(),l.set(u.value,d.value)}return{status:r.value,value:l}})}else{const l=new Map;for(const c of o){const u=c.key,d=c.value;if(u.status==="aborted"||d.status==="aborted")return re;(u.status==="dirty"||d.status==="dirty")&&r.dirty(),l.set(u.value,d.value)}return{status:r.value,value:l}}}}xm.create=(e,t,r)=>new xm({valueType:t,keyType:e,typeName:ee.ZodMap,...oe(r)});class Ks extends de{_parse(t){const{status:r,ctx:n}=this._processInputParams(t);if(n.parsedType!==F.set)return $(n,{code:I.invalid_type,expected:F.set,received:n.parsedType}),re;const i=this._def;i.minSize!==null&&n.data.size<i.minSize.value&&($(n,{code:I.too_small,minimum:i.minSize.value,type:"set",inclusive:!0,exact:!1,message:i.minSize.message}),r.dirty()),i.maxSize!==null&&n.data.size>i.maxSize.value&&($(n,{code:I.too_big,maximum:i.maxSize.value,type:"set",inclusive:!0,exact:!1,message:i.maxSize.message}),r.dirty());const s=this._def.valueType;function o(c){const u=new Set;for(const d of c){if(d.status==="aborted")return re;d.status==="dirty"&&r.dirty(),u.add(d.value)}return{status:r.value,value:u}}const l=[...n.data.values()].map((c,u)=>s._parse(new Jr(n,c,n.path,u)));return n.common.async?Promise.all(l).then(c=>o(c)):o(l)}min(t,r){return new Ks({...this._def,minSize:{value:t,message:H.toString(r)}})}max(t,r){return new Ks({...this._def,maxSize:{value:t,message:H.toString(r)}})}size(t,r){return this.min(t,r).max(t,r)}nonempty(t){return this.min(1,t)}}Ks.create=(e,t)=>new Ks({valueType:e,minSize:null,maxSize:null,typeName:ee.ZodSet,...oe(t)});class wm extends de{get schema(){return this._def.getter()}_parse(t){const{ctx:r}=this._processInputParams(t);return this._def.getter()._parse({data:r.data,path:r.path,parent:r})}}wm.create=(e,t)=>new wm({getter:e,typeName:ee.ZodLazy,...oe(t)});class _m extends de{_parse(t){if(t.data!==this._def.value){const r=this._getOrReturnCtx(t);return $(r,{received:r.data,code:I.invalid_literal,expected:this._def.value}),re}return{status:"valid",value:t.data}}get value(){return this._def.value}}_m.create=(e,t)=>new _m({value:e,typeName:ee.ZodLiteral,...oe(t)});function n1(e,t){return new Ri({values:e,typeName:ee.ZodEnum,...oe(t)})}class Ri extends de{constructor(){super(...arguments),hs.set(this,void 0)}_parse(t){if(typeof t.data!="string"){const r=this._getOrReturnCtx(t),n=this._def.values;return $(r,{expected:pe.joinValues(n),received:r.parsedType,code:I.invalid_type}),re}if(Xa(this,hs,"f")||e1(this,hs,new Set(this._def.values),"f"),!Xa(this,hs,"f").has(t.data)){const r=this._getOrReturnCtx(t),n=this._def.values;return $(r,{received:r.data,code:I.invalid_enum_value,options:n}),re}return $t(t.data)}get options(){return this._def.values}get enum(){const t={};for(const r of this._def.values)t[r]=r;return t}get Values(){const t={};for(const r of this._def.values)t[r]=r;return t}get Enum(){const t={};for(const r of this._def.values)t[r]=r;return t}extract(t,r=this._def){return Ri.create(t,{...this._def,...r})}exclude(t,r=this._def){return Ri.create(this.options.filter(n=>!t.includes(n)),{...this._def,...r})}}hs=new WeakMap;Ri.create=n1;class km extends de{constructor(){super(...arguments),ms.set(this,void 0)}_parse(t){const r=pe.getValidEnumValues(this._def.values),n=this._getOrReturnCtx(t);if(n.parsedType!==F.string&&n.parsedType!==F.number){const i=pe.objectValues(r);return $(n,{expected:pe.joinValues(i),received:n.parsedType,code:I.invalid_type}),re}if(Xa(this,ms,"f")||e1(this,ms,new Set(pe.getValidEnumValues(this._def.values)),"f"),!Xa(this,ms,"f").has(t.data)){const i=pe.objectValues(r);return $(n,{received:n.data,code:I.invalid_enum_value,options:i}),re}return $t(t.data)}get enum(){return this._def.values}}ms=new WeakMap;km.create=(e,t)=>new km({values:e,typeName:ee.ZodNativeEnum,...oe(t)});class nl extends de{unwrap(){return this._def.type}_parse(t){const{ctx:r}=this._processInputParams(t);if(r.parsedType!==F.promise&&r.common.async===!1)return $(r,{code:I.invalid_type,expected:F.promise,received:r.parsedType}),re;const n=r.parsedType===F.promise?r.data:Promise.resolve(r.data);return $t(n.then(i=>this._def.type.parseAsync(i,{path:r.path,errorMap:r.common.contextualErrorMap})))}}nl.create=(e,t)=>new nl({type:e,typeName:ee.ZodPromise,...oe(t)});class Ai extends de{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===ee.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(t){const{status:r,ctx:n}=this._processInputParams(t),i=this._def.effect||null,s={addIssue:o=>{$(n,o),o.fatal?r.abort():r.dirty()},get path(){return n.path}};if(s.addIssue=s.addIssue.bind(s),i.type==="preprocess"){const o=i.transform(n.data,s);if(n.common.async)return Promise.resolve(o).then(async l=>{if(r.value==="aborted")return re;const c=await this._def.schema._parseAsync({data:l,path:n.path,parent:n});return c.status==="aborted"?re:c.status==="dirty"||r.value==="dirty"?fs(c.value):c});{if(r.value==="aborted")return re;const l=this._def.schema._parseSync({data:o,path:n.path,parent:n});return l.status==="aborted"?re:l.status==="dirty"||r.value==="dirty"?fs(l.value):l}}if(i.type==="refinement"){const o=l=>{const c=i.refinement(l,s);if(n.common.async)return Promise.resolve(c);if(c instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return l};if(n.common.async===!1){const l=this._def.schema._parseSync({data:n.data,path:n.path,parent:n});return l.status==="aborted"?re:(l.status==="dirty"&&r.dirty(),o(l.value),{status:r.value,value:l.value})}else return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then(l=>l.status==="aborted"?re:(l.status==="dirty"&&r.dirty(),o(l.value).then(()=>({status:r.value,value:l.value}))))}if(i.type==="transform")if(n.common.async===!1){const o=this._def.schema._parseSync({data:n.data,path:n.path,parent:n});if(!Pi(o))return o;const l=i.transform(o.value,s);if(l instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:r.value,value:l}}else return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then(o=>Pi(o)?Promise.resolve(i.transform(o.value,s)).then(l=>({status:r.value,value:l})):o);pe.assertNever(i)}}Ai.create=(e,t,r)=>new Ai({schema:e,typeName:ee.ZodEffects,effect:t,...oe(r)});Ai.createWithPreprocess=(e,t,r)=>new Ai({schema:t,effect:{type:"preprocess",transform:e},typeName:ee.ZodEffects,...oe(r)});class Qr extends de{_parse(t){return this._getType(t)===F.undefined?$t(void 0):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}Qr.create=(e,t)=>new Qr({innerType:e,typeName:ee.ZodOptional,...oe(t)});class Ni extends de{_parse(t){return this._getType(t)===F.null?$t(null):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}Ni.create=(e,t)=>new Ni({innerType:e,typeName:ee.ZodNullable,...oe(t)});class ed extends de{_parse(t){const{ctx:r}=this._processInputParams(t);let n=r.data;return r.parsedType===F.undefined&&(n=this._def.defaultValue()),this._def.innerType._parse({data:n,path:r.path,parent:r})}removeDefault(){return this._def.innerType}}ed.create=(e,t)=>new ed({innerType:e,typeName:ee.ZodDefault,defaultValue:typeof t.default=="function"?t.default:()=>t.default,...oe(t)});class td extends de{_parse(t){const{ctx:r}=this._processInputParams(t),n={...r,common:{...r.common,issues:[]}},i=this._def.innerType._parse({data:n.data,path:n.path,parent:{...n}});return Ja(i)?i.then(s=>({status:"valid",value:s.status==="valid"?s.value:this._def.catchValue({get error(){return new wr(n.common.issues)},input:n.data})})):{status:"valid",value:i.status==="valid"?i.value:this._def.catchValue({get error(){return new wr(n.common.issues)},input:n.data})}}removeCatch(){return this._def.innerType}}td.create=(e,t)=>new td({innerType:e,typeName:ee.ZodCatch,catchValue:typeof t.catch=="function"?t.catch:()=>t.catch,...oe(t)});class Sm extends de{_parse(t){if(this._getType(t)!==F.nan){const n=this._getOrReturnCtx(t);return $(n,{code:I.invalid_type,expected:F.nan,received:n.parsedType}),re}return{status:"valid",value:t.data}}}Sm.create=e=>new Sm({typeName:ee.ZodNaN,...oe(e)});class lE extends de{_parse(t){const{ctx:r}=this._processInputParams(t),n=r.data;return this._def.type._parse({data:n,path:r.path,parent:r})}unwrap(){return this._def.type}}class hp extends de{_parse(t){const{status:r,ctx:n}=this._processInputParams(t);if(n.common.async)return(async()=>{const s=await this._def.in._parseAsync({data:n.data,path:n.path,parent:n});return s.status==="aborted"?re:s.status==="dirty"?(r.dirty(),fs(s.value)):this._def.out._parseAsync({data:s.value,path:n.path,parent:n})})();{const i=this._def.in._parseSync({data:n.data,path:n.path,parent:n});return i.status==="aborted"?re:i.status==="dirty"?(r.dirty(),{status:"dirty",value:i.value}):this._def.out._parseSync({data:i.value,path:n.path,parent:n})}}static create(t,r){return new hp({in:t,out:r,typeName:ee.ZodPipeline})}}class rd extends de{_parse(t){const r=this._def.innerType._parse(t),n=i=>(Pi(i)&&(i.value=Object.freeze(i.value)),i);return Ja(r)?r.then(i=>n(i)):n(r)}unwrap(){return this._def.innerType}}rd.create=(e,t)=>new rd({innerType:e,typeName:ee.ZodReadonly,...oe(t)});Pe.lazycreate;var ee;(function(e){e.ZodString="ZodString",e.ZodNumber="ZodNumber",e.ZodNaN="ZodNaN",e.ZodBigInt="ZodBigInt",e.ZodBoolean="ZodBoolean",e.ZodDate="ZodDate",e.ZodSymbol="ZodSymbol",e.ZodUndefined="ZodUndefined",e.ZodNull="ZodNull",e.ZodAny="ZodAny",e.ZodUnknown="ZodUnknown",e.ZodNever="ZodNever",e.ZodVoid="ZodVoid",e.ZodArray="ZodArray",e.ZodObject="ZodObject",e.ZodUnion="ZodUnion",e.ZodDiscriminatedUnion="ZodDiscriminatedUnion",e.ZodIntersection="ZodIntersection",e.ZodTuple="ZodTuple",e.ZodRecord="ZodRecord",e.ZodMap="ZodMap",e.ZodSet="ZodSet",e.ZodFunction="ZodFunction",e.ZodLazy="ZodLazy",e.ZodLiteral="ZodLiteral",e.ZodEnum="ZodEnum",e.ZodEffects="ZodEffects",e.ZodNativeEnum="ZodNativeEnum",e.ZodOptional="ZodOptional",e.ZodNullable="ZodNullable",e.ZodDefault="ZodDefault",e.ZodCatch="ZodCatch",e.ZodPromise="ZodPromise",e.ZodBranded="ZodBranded",e.ZodPipeline="ZodPipeline",e.ZodReadonly="ZodReadonly"})(ee||(ee={}));const E=Ur.create,B=Ti.create,dt=Ku.create,cE=Ju.create;Xr.create;const en=nr.create,J=Pe.create;Pe.strictCreate;tl.create;rl.create;In.create;const Xe=Ri.create;nl.create;Qr.create;Ni.create;const uE=Xe(["admin","customer","delivery"]),mp=J({id:B().int().positive(),email:E().email("Email inválido"),phone:E().min(9,"Teléfono debe tener al menos 9 dígitos").max(15),name:E().min(1,"Nombre requerido").max(100),role:uE,active:dt().default(!0),email_verified:dt().default(!1),phone_verified:dt().default(!1),created_at:E().datetime().optional(),updated_at:E().datetime().optional(),last_login:E().datetime().optional().nullable(),avatar:E().url().optional().nullable(),address:E().max(200).optional().nullable(),preferences:J({notifications:dt().default(!0),marketing_emails:dt().default(!1),language:Xe(["es","en"]).default("es")}).optional()}),i1=J({email:E().email("Email inválido").optional(),phone:E().min(9,"Teléfono inválido").optional(),password:E().min(6,"Contraseña debe tener al menos 6 caracteres")}).refine(e=>e.email||e.phone,{message:"Email o teléfono requerido",path:["email"]});J({email:E().email("Email inválido"),password:E().min(6,"Contraseña debe tener al menos 6 caracteres")});const s1=J({name:E().min(1,"Nombre requerido").max(100),email:E().email("Email inválido"),phone:E().min(9,"Teléfono inválido").max(15),password:E().min(6,"Contraseña debe tener al menos 6 caracteres"),confirm_password:E(),address:E().min(10,"Dirección debe tener al menos 10 caracteres").max(200).optional(),accept_terms:dt().refine(e=>e===!0,{message:"Debes aceptar los términos y condiciones"})}).refine(e=>e.password===e.confirm_password,{message:"Las contraseñas no coinciden",path:["confirm_password"]}),dE=J({name:E().min(1,"Nombre requerido").max(100),phone:E().min(9,"Teléfono inválido").max(15),email:E().email("Email inválido").optional(),address:E().min(10,"Dirección requerida").max(200)});J({current_password:E().min(1,"Contraseña actual requerida"),new_password:E().min(6,"Nueva contraseña debe tener al menos 6 caracteres"),confirm_password:E()}).refine(e=>e.new_password===e.confirm_password,{message:"Las contraseñas no coinciden",path:["confirm_password"]});J({email:E().email("Email inválido")});J({token:E().min(1,"Token requerido"),password:E().min(6,"Contraseña debe tener al menos 6 caracteres"),confirm_password:E()}).refine(e=>e.password===e.confirm_password,{message:"Las contraseñas no coinciden",path:["confirm_password"]});J({name:E().min(1,"Nombre requerido").max(100).optional(),email:E().email("Email inválido").optional(),phone:E().min(9,"Teléfono inválido").max(15).optional(),address:E().max(200).optional(),avatar:E().url().optional().nullable(),preferences:J({notifications:dt().optional(),marketing_emails:dt().optional(),language:Xe(["es","en"]).optional()}).optional()});const pE=J({access_token:E(),refresh_token:E().optional(),token_type:E().default("Bearer"),expires_in:B().int().positive(),user:mp});J({refresh_token:E().min(1,"Refresh token requerido")});J({email:E().email("Email inválido"),token:E().min(1,"Token requerido")});J({email:E().email("Email inválido")});J({phone:E().min(9,"Teléfono inválido"),code:E().length(6,"Código debe tener 6 dígitos")});J({phone:E().min(9,"Teléfono inválido")});const fE=J({user:mp,expires_at:E().datetime(),permissions:en(E()),last_activity:E().datetime()}),hE={admin:["products:read","products:write","products:delete","categories:read","categories:write","categories:delete","orders:read","orders:write","orders:update_status","payments:read","payments:verify","dashboard:access","users:read","users:write"],customer:["products:read","categories:read","orders:read_own","orders:create","profile:read","profile:write"],delivery:["orders:read_assigned","orders:update_delivery_status","profile:read","profile:write"]};mp._type;i1._type;s1._type;pE._type;fE._type;const mE=e=>{try{return{success:!0,data:i1.parse(e),error:null}}catch(t){return{success:!1,data:null,error:t.errors}}},gE=e=>{try{return{success:!0,data:s1.parse(e),error:null}}catch(t){return{success:!1,data:null,error:t.errors}}},yE=e=>{try{return{success:!0,data:dE.parse(e),error:null}}catch(t){return{success:!1,data:null,error:t.errors}}},vE=(e,t)=>(hE[e]||[]).includes(t),xE=e=>{try{const t=JSON.parse(atob(e.split(".")[1]));return Date.now()>=t.exp*1e3}catch{return!0}},Cm=e=>{const t=e.replace(/\D/g,"");return t.startsWith("51")?"+"+t:t.startsWith("9")&&t.length===9?"+51"+t:e};class wE{constructor(){this.currentUser=null,this.isInitialized=!1}async initialize(){if(this.isInitialized)return this.currentUser;const t=Pr.getToken();if(t&&!xE(t))try{const r=await K.get(Q.AUTH.PROFILE);r.success?(this.currentUser=r.data.user,localStorage.setItem(pn,JSON.stringify(this.currentUser))):this.logout()}catch{this.logout()}else this.logout();return this.isInitialized=!0,this.currentUser}async login(t){const r=mE(t);if(!r.success)return{success:!1,error:{type:"validation",errors:r.error}};try{const n=await K.post(Q.AUTH.LOGIN,r.data);if(n.success){const{access_token:i,refresh_token:s,user:o}=n.data;return Pr.setToken(i,s),this.currentUser=o,localStorage.setItem(pn,JSON.stringify(o)),{success:!0,data:{user:o,token:i}}}return n}catch(n){return console.error("Error during login:",n),{success:!1,error:{type:"network",message:"Error al iniciar sesión"}}}}async adminLogin(t){try{if(!t.email||!t.password)return{success:!1,error:{type:"validation",message:"Email y contraseña requeridos"}};const r=await K.post(Q.AUTH.LOGIN,{...t,admin:!0});if(r.success){const{access_token:n,refresh_token:i,user:s}=r.data;return s.role!=="admin"?{success:!1,error:{type:"permission",message:"Acceso no autorizado"}}:(Pr.setToken(n,i),this.currentUser=s,localStorage.setItem(pn,JSON.stringify(s)),{success:!0,data:{user:s,token:n}})}return r}catch(r){return console.error("Error during admin login:",r),{success:!1,error:{type:"network",message:"Error al iniciar sesión como administrador"}}}}async register(t){const r=gE(t);if(!r.success)return{success:!1,error:{type:"validation",errors:r.error}};const n={...r.data,phone:Cm(r.data.phone)};try{const i=await K.post(Q.AUTH.REGISTER,n);return i.success?await this.login({email:n.email,password:n.password}):i}catch(i){return console.error("Error during registration:",i),{success:!1,error:{type:"network",message:"Error al registrar usuario"}}}}async guestCheckout(t){const r=yE(t);if(!r.success)return{success:!1,error:{type:"validation",errors:r.error}};const n={...r.data,phone:Cm(r.data.phone)};try{const i=await K.post(`${Q.AUTH.LOGIN}/guest`,n);if(i.success){const{session_token:s,guest_data:o}=i.data;return localStorage.setItem("guest_session",s),localStorage.setItem("guest_data",JSON.stringify(o)),{success:!0,data:{guest:!0,user:o,session:s}}}return i}catch(i){return console.error("Error during guest checkout:",i),{success:!1,error:{type:"network",message:"Error en checkout de invitado"}}}}async logout(){try{Pr.getToken()&&await K.post(Q.AUTH.LOGOUT)}catch(t){console.warn("Error during logout:",t)}finally{Pr.clearToken(),localStorage.removeItem(pn),localStorage.removeItem("guest_session"),localStorage.removeItem("guest_data"),this.currentUser=null}}getCurrentUser(){if(this.currentUser)return this.currentUser;const t=localStorage.getItem(pn);if(t)try{return this.currentUser=JSON.parse(t),this.currentUser}catch(r){console.error("Error parsing user data:",r),this.logout()}return null}isAuthenticated(){return Pr.isAuthenticated()&&!!this.getCurrentUser()}isAdmin(){const t=this.getCurrentUser();return(t==null?void 0:t.role)==="admin"}hasPermission(t){const r=this.getCurrentUser();return r?vE(r.role,t):!1}async updateProfile(t){if(!this.isAuthenticated())return{success:!1,error:{type:"auth",message:"Usuario no autenticado"}};try{const r=await K.put(Q.AUTH.PROFILE,t);return r.success&&(this.currentUser={...this.currentUser,...r.data.user},localStorage.setItem(pn,JSON.stringify(this.currentUser))),r}catch(r){return console.error("Error updating profile:",r),{success:!1,error:{type:"network",message:"Error al actualizar perfil"}}}}async changePassword(t){if(!this.isAuthenticated())return{success:!1,error:{type:"auth",message:"Usuario no autenticado"}};try{return await K.post(`${Q.AUTH.PROFILE}/change-password`,t)}catch(r){return console.error("Error changing password:",r),{success:!1,error:{type:"network",message:"Error al cambiar contraseña"}}}}async requestPasswordReset(t){try{return await K.post(`${Q.AUTH.LOGIN}/reset-password`,{email:t})}catch(r){return console.error("Error requesting password reset:",r),{success:!1,error:{type:"network",message:"Error al solicitar restablecimiento"}}}}async confirmPasswordReset(t){try{return await K.post(`${Q.AUTH.LOGIN}/confirm-reset`,t)}catch(r){return console.error("Error confirming password reset:",r),{success:!1,error:{type:"network",message:"Error al confirmar restablecimiento"}}}}async refreshToken(){const t=localStorage.getItem("refresh_token");if(!t)return this.logout(),{success:!1,error:{type:"auth",message:"No refresh token available"}};try{const r=await K.post(Q.AUTH.REFRESH,{refresh_token:t});if(r.success){const{access_token:n,refresh_token:i}=r.data;return Pr.setToken(n,i),{success:!0,data:{token:n}}}return this.logout(),r}catch(r){return console.error("Error refreshing token:",r),this.logout(),{success:!1,error:{type:"auth",message:"Token refresh failed"}}}}getUserPermissions(){const t=this.getCurrentUser();return t?USER_PERMISSIONS[t.role]||[]:[]}mockLogin(t="customer"){if(!ve.USE_MOCK_DATA)return console.warn("Mock login only available in development mode"),{success:!1};const r={id:1,email:t==="admin"?"admin@test.com":"customer@test.com",name:t==="admin"?"Administrador":"Cliente Test",phone:"+51987654321",role:t,active:!0,email_verified:!0,phone_verified:!0},n="mock_jwt_token_"+Date.now();return Pr.setToken(n),this.currentUser=r,localStorage.setItem(pn,JSON.stringify(r)),{success:!0,data:{user:r,token:n}}}}const xa=new wE,gp=Xe(["kg","u","l","g","paq","presentation"]),Ml=J({id:B().int().positive(),product_id:B().int().positive().optional(),name:E().min(1,"Nombre de presentación requerido").max(50),price:B().positive("El precio debe ser mayor a 0"),unit:E().min(1,"Unidad requerida").max(20),sort_order:B().int().default(0),created_at:E().datetime().optional(),updated_at:E().datetime().optional()}),yp=J({id:B().int().positive(),name:E().min(1,"Nombre del producto requerido").max(100),category_id:B().int().positive("Categoría requerida"),price:B().positive("El precio debe ser mayor a 0"),unit:gp,description:E().max(500).optional().nullable(),image:E().url().optional().nullable(),presentations:en(Ml).optional(),active:dt().default(!0),created_at:E().datetime().optional(),updated_at:E().datetime().optional(),category_name:E().optional(),category_color:E().optional(),category_icon:E().optional()}),vp=yp.omit({id:!0,created_at:!0,updated_at:!0,category_name:!0,category_color:!0,category_icon:!0}),o1=vp.partial().extend({id:B().int().positive()}),a1=J({page:B().int().positive().default(1),limit:B().int().positive().max(100).default(12),category_id:B().int().positive().optional(),search:E().optional(),sort_by:Xe(["name","price","created_at"]).default("name"),sort_order:Xe(["asc","desc"]).default("asc"),min_price:B().positive().optional(),max_price:B().positive().optional(),unit:gp.optional(),active:dt().optional()});yp.extend({presentations:en(Ml).default([])});const _E=Ml.omit({id:!0,created_at:!0,updated_at:!0});J({unit:gp,allowDecimals:dt(),step:B().positive(),minQuantity:B().positive(),label:E(),displayDecimals:B().int().min(0).max(3)});yp._type;vp._type;o1._type;Ml._type;_E._type;a1._type;const kE=e=>{try{return{success:!0,data:vp.parse(e),error:null}}catch(t){return{success:!1,data:null,error:t.errors}}},SE=e=>{try{return{success:!0,data:a1.parse(e),error:null}}catch(t){return{success:!1,data:null,error:t.errors}}};class CE{constructor(){this.cachePrefix="products",this.cacheTTL=Il.PRODUCTS_CACHE_TIME}async getProducts(t={}){if(ve.USE_MOCK_DATA)return this._getMockProducts(t);const r=`${this.cachePrefix}_list_${JSON.stringify(t)}`,n=se.get(r);if(n)return{success:!0,data:n,fromCache:!0};const i=SE(t);if(!i.success)return{success:!1,error:{type:"validation",errors:i.error}};try{const s=await K.get(Q.PRODUCTS.BASE,i.data);return s.success&&se.set(r,s.data,this.cacheTTL),s}catch(s){return console.error("Error fetching products:",s),{success:!1,error:{type:"network",message:"Error al cargar productos"}}}}async getProductById(t){if(ve.USE_MOCK_DATA){const i=qn.find(s=>s.id===parseInt(t));return{success:!!i,data:i||null,error:i?null:{type:"not_found",message:"Producto no encontrado"}}}const r=`${this.cachePrefix}_${t}`,n=se.get(r);if(n)return{success:!0,data:n,fromCache:!0};try{const i=await K.get(Q.PRODUCTS.BY_ID(t));return i.success&&se.set(r,i.data,this.cacheTTL),i}catch(i){return console.error("Error fetching product:",i),{success:!1,error:{type:"network",message:"Error al cargar producto"}}}}async getProductsByCategory(t,r={}){if(ve.USE_MOCK_DATA){const s=qn.filter(o=>o.category_id===parseInt(t));return{success:!0,data:{products:s,total:s.length}}}const n=`${this.cachePrefix}_category_${t}_${JSON.stringify(r)}`,i=se.get(n);if(i)return{success:!0,data:i,fromCache:!0};try{const s=await K.get(Q.PRODUCTS.BY_CATEGORY(t),r);return s.success&&se.set(n,s.data,this.cacheTTL),s}catch(s){return console.error("Error fetching products by category:",s),{success:!1,error:{type:"network",message:"Error al cargar productos de la categoría"}}}}async searchProducts(t,r={}){if(ve.USE_MOCK_DATA){const i=qn.filter(s=>{var o;return s.name.toLowerCase().includes(t.toLowerCase())||((o=s.description)==null?void 0:o.toLowerCase().includes(t.toLowerCase()))});return{success:!0,data:{products:i,total:i.length}}}const n={q:t,...r};try{return await K.get(Q.PRODUCTS.SEARCH,n)}catch(i){return console.error("Error searching products:",i),{success:!1,error:{type:"network",message:"Error en la búsqueda"}}}}async getFeaturedProducts(t=8){if(ve.USE_MOCK_DATA){const i=qn.slice(0,t);return{success:!0,data:{products:i,total:i.length}}}const r=`${this.cachePrefix}_featured_${t}`,n=se.get(r);if(n)return{success:!0,data:n,fromCache:!0};try{const i=await K.get(Q.PRODUCTS.FEATURED,{limit:t});return i.success&&se.set(r,i.data,this.cacheTTL),i}catch(i){return console.error("Error fetching featured products:",i),{success:!1,error:{type:"network",message:"Error al cargar productos destacados"}}}}async createProduct(t){const r=kE(t);if(!r.success)return{success:!1,error:{type:"validation",errors:r.error}};try{const n=await K.post(Q.PRODUCTS.BASE,r.data);return n.success&&this._clearProductCache(),n}catch(n){return console.error("Error creating product:",n),{success:!1,error:{type:"network",message:"Error al crear producto"}}}}async updateProduct(t,r){const n={id:parseInt(t),...r};try{o1.parse(n)}catch(i){return{success:!1,error:{type:"validation",errors:i.errors}}}try{const i=await K.put(Q.PRODUCTS.BY_ID(t),n);return i.success&&(this._clearProductCache(),se.clear(`${this.cachePrefix}_${t}`)),i}catch(i){return console.error("Error updating product:",i),{success:!1,error:{type:"network",message:"Error al actualizar producto"}}}}async deleteProduct(t){try{const r=await K.delete(Q.PRODUCTS.BY_ID(t));return r.success&&(this._clearProductCache(),se.clear(`${this.cachePrefix}_${t}`)),r}catch(r){return console.error("Error deleting product:",r),{success:!1,error:{type:"network",message:"Error al eliminar producto"}}}}async getProductPresentations(t){if(ve.USE_MOCK_DATA){const r=qn.find(n=>n.id===parseInt(t));return{success:!0,data:{presentations:(r==null?void 0:r.presentations)||[]}}}try{return await K.get(Q.PRODUCTS.PRESENTATIONS(t))}catch(r){return console.error("Error fetching product presentations:",r),{success:!1,error:{type:"network",message:"Error al cargar presentaciones"}}}}async uploadProductImage(t,r=null){if(!t||!t.type.startsWith("image/"))return{success:!1,error:{type:"validation",message:"Archivo debe ser una imagen válida"}};const n=5*1024*1024;if(t.size>n)return{success:!1,error:{type:"validation",message:"La imagen no debe superar 5MB"}};try{return await K.upload(Q.UPLOADS.IMAGES,t,{type:"product"},r)}catch(i){return console.error("Error uploading image:",i),{success:!1,error:{type:"network",message:"Error al subir imagen"}}}}_getMockProducts(t={}){let r=[...qn];if(t.category_id&&(r=r.filter(c=>c.category_id===parseInt(t.category_id))),t.search){const c=t.search.toLowerCase();r=r.filter(u=>{var d;return u.name.toLowerCase().includes(c)||((d=u.description)==null?void 0:d.toLowerCase().includes(c))})}t.min_price&&(r=r.filter(c=>c.price>=parseFloat(t.min_price))),t.max_price&&(r=r.filter(c=>c.price<=parseFloat(t.max_price))),t.sort_by&&r.sort((c,u)=>{let d=c[t.sort_by],p=u[t.sort_by];return typeof d=="string"&&(d=d.toLowerCase(),p=p.toLowerCase()),t.sort_order==="desc"?p>d?1:-1:d>p?1:-1});const n=t.page||1,i=t.limit||12,s=(n-1)*i,o=s+i;return{success:!0,data:{products:r.slice(s,o),total:r.length,page:n,limit:i,total_pages:Math.ceil(r.length/i)}}}_clearProductCache(){se.clear(this.cachePrefix)}}const nd=new CE,EE=Xe(["Apple","Carrot","Milk","Drumstick","Fish","Bread","Wine","ShoppingBasket","Coffee","Egg"]),xp=J({id:B().int().positive(),name:E().min(1,"Nombre de categoría requerido").max(50),icon:EE,color:E().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,"Color debe ser formato hexadecimal válido"),sort_order:B().int().default(0),active:dt().default(!0),created_at:E().datetime().optional(),updated_at:E().datetime().optional(),products_count:B().int().min(0).optional()}),wp=xp.omit({id:!0,created_at:!0,updated_at:!0,products_count:!0}),l1=wp.partial().extend({id:B().int().positive()});xp.extend({products:en(J({id:B().int().positive(),name:E(),price:B().positive(),image:E().url().optional().nullable()})).optional()});const jE=J({include_products:dt().default(!1),include_count:dt().default(!0),active_only:dt().default(!0),sort_by:Xe(["name","sort_order","created_at"]).default("sort_order"),sort_order:Xe(["asc","desc"]).default("asc")});xp._type;wp._type;l1._type;jE._type;const bE=e=>{try{return{success:!0,data:wp.parse(e),error:null}}catch(t){return{success:!1,data:null,error:t.errors}}},PE=e=>{try{return{success:!0,data:l1.parse(e),error:null}}catch(t){return{success:!1,data:null,error:t.errors}}};class TE{constructor(){this.cachePrefix="categories",this.cacheTTL=Il.CATEGORIES_CACHE_TIME}async getCategories(t={}){if(ve.USE_MOCK_DATA)return this._getMockCategories(t);const r=`${this.cachePrefix}_list_${JSON.stringify(t)}`,n=se.get(r);if(n)return{success:!0,data:n,fromCache:!0};try{const i=await K.get(Q.CATEGORIES.BASE,t);return i.success&&se.set(r,i.data,this.cacheTTL),i}catch(i){return console.error("Error fetching categories:",i),{success:!1,error:{type:"network",message:"Error al cargar categorías"}}}}async getCategoryById(t){if(ve.USE_MOCK_DATA){const i=jr.find(s=>s.id===parseInt(t));return{success:!!i,data:i||null,error:i?null:{type:"not_found",message:"Categoría no encontrada"}}}const r=`${this.cachePrefix}_${t}`,n=se.get(r);if(n)return{success:!0,data:n,fromCache:!0};try{const i=await K.get(Q.CATEGORIES.BY_ID(t));return i.success&&se.set(r,i.data,this.cacheTTL),i}catch(i){return console.error("Error fetching category:",i),{success:!1,error:{type:"network",message:"Error al cargar categoría"}}}}async getCategoriesWithProducts(){if(ve.USE_MOCK_DATA)return{success:!0,data:{categories:jr.map(i=>({...i,products_count:Math.floor(Math.random()*20)+1}))}};const t=`${this.cachePrefix}_with_products`,r=se.get(t);if(r)return{success:!0,data:r,fromCache:!0};try{const n=await K.get(Q.CATEGORIES.WITH_PRODUCTS);return n.success&&se.set(t,n.data,this.cacheTTL),n}catch(n){return console.error("Error fetching categories with products:",n),{success:!1,error:{type:"network",message:"Error al cargar categorías con productos"}}}}async createCategory(t){const r=bE(t);if(!r.success)return{success:!1,error:{type:"validation",errors:r.error}};try{const n=await K.post(Q.CATEGORIES.BASE,r.data);return n.success&&this._clearCategoryCache(),n}catch(n){return console.error("Error creating category:",n),{success:!1,error:{type:"network",message:"Error al crear categoría"}}}}async updateCategory(t,r){const n={id:parseInt(t),...r},i=PE(n);if(!i.success)return{success:!1,error:{type:"validation",errors:i.error}};try{const s=await K.put(Q.CATEGORIES.BY_ID(t),i.data);return s.success&&(this._clearCategoryCache(),se.clear(`${this.cachePrefix}_${t}`)),s}catch(s){return console.error("Error updating category:",s),{success:!1,error:{type:"network",message:"Error al actualizar categoría"}}}}async deleteCategory(t){try{const r=await K.delete(Q.CATEGORIES.BY_ID(t));return r.success&&(this._clearCategoryCache(),se.clear(`${this.cachePrefix}_${t}`)),r}catch(r){return console.error("Error deleting category:",r),r.type==="validation"&&r.message.includes("products")?{success:!1,error:{type:"business_rule",message:"No se puede eliminar una categoría que tiene productos asociados"}}:{success:!1,error:{type:"network",message:"Error al eliminar categoría"}}}}async checkCategoryNameAvailability(t,r=null){if(ve.USE_MOCK_DATA)return{success:!0,data:{available:!jr.some(i=>i.name.toLowerCase()===t.toLowerCase()&&i.id!==r)}};try{const n={name:t};return r&&(n.exclude_id=r),await K.get(`${Q.CATEGORIES.BASE}/check-name`,n)}catch(n){return console.error("Error checking category name:",n),{success:!1,error:{type:"network",message:"Error al verificar nombre"}}}}async getCategoryStats(){if(ve.USE_MOCK_DATA)return{success:!0,data:{total_categories:jr.length,active_categories:jr.filter(r=>r.active!==!1).length,categories_with_products:Math.floor(jr.length*.8),top_categories:jr.slice(0,3).map(r=>({...r,products_count:Math.floor(Math.random()*50)+1}))}};try{return await K.get(`${Q.CATEGORIES.BASE}/stats`)}catch(t){return console.error("Error fetching category stats:",t),{success:!1,error:{type:"network",message:"Error al cargar estadísticas"}}}}async reorderCategories(t){if(!t.every(n=>typeof n.id=="number"&&typeof n.sort_order=="number"))return{success:!1,error:{type:"validation",message:"Datos de orden inválidos"}};try{const n=await K.patch(`${Q.CATEGORIES.BASE}/reorder`,{orders:t});return n.success&&this._clearCategoryCache(),n}catch(n){return console.error("Error reordering categories:",n),{success:!1,error:{type:"network",message:"Error al reordenar categorías"}}}}_getMockCategories(t={}){let r=[...jr];return t.active_only!==!1&&(r=r.filter(n=>n.active!==!1)),t.sort_by?r.sort((n,i)=>{let s=n[t.sort_by],o=i[t.sort_by];return typeof s=="string"&&(s=s.toLowerCase(),o=o.toLowerCase()),t.sort_order==="desc"?o>s?1:-1:s>o?1:-1}):r.sort((n,i)=>(n.sort_order||0)-(i.sort_order||0)),{success:!0,data:{categories:r,total:r.length}}}_clearCategoryCache(){se.clear(this.cachePrefix)}}const id=new TE,Js=Xe(["awaiting_payment","preparing","ready_for_shipping","shipped","delivered","cancelled"]),lo=Xe(["transfer","yape","plin","cash"]),co=Xe(["pending","verified","rejected"]),c1=J({id:B().int().positive().optional(),order_id:E().optional(),product_id:B().int().positive(),product_name:E().min(1,"Nombre del producto requerido"),quantity:B().positive("La cantidad debe ser mayor a 0"),price:B().positive("El precio debe ser mayor a 0"),total:B().positive("El total debe ser mayor a 0"),presentation_info:J({id:B().int().positive(),name:E(),unit:E()}).optional().nullable()}),RE=J({name:E().min(1,"Nombre del cliente requerido").max(100),phone:E().min(9,"Teléfono debe tener al menos 9 dígitos").max(15),email:E().email("Email inválido").optional().nullable(),address:E().min(10,"Dirección debe tener al menos 10 caracteres").max(200)}),AE=J({id:E().min(1,"ID de pedido requerido"),customer_name:E().min(1,"Nombre del cliente requerido").max(100),customer_phone:E().min(9,"Teléfono inválido").max(15),customer_email:E().email().optional().nullable(),customer_address:E().min(10,"Dirección muy corta").max(200),date:E().datetime(),status:Js,payment_method:lo,payment_status:co.default("pending"),items:en(c1).min(1,"El pedido debe tener al menos un producto"),subtotal:B().min(0,"Subtotal debe ser mayor o igual a 0"),tax:B().min(0,"Impuesto debe ser mayor o igual a 0"),total:B().positive("Total debe ser mayor a 0"),notes:E().max(300).optional().nullable(),created_at:E().datetime().optional(),updated_at:E().datetime().optional(),status_history:en(J({status:Js,timestamp:E().datetime(),notes:E().optional(),updated_by:E().optional()})).optional(),delivery_date:E().datetime().optional().nullable(),delivery_notes:E().max(200).optional().nullable()}),u1=J({customer_name:E().min(1,"Nombre requerido").max(100),customer_phone:E().min(9,"Teléfono inválido").max(15),customer_email:E().email().optional().nullable(),customer_address:E().min(10,"Dirección muy corta").max(200),payment_method:lo,items:en(J({product_id:B().int().positive(),quantity:B().positive(),presentation_id:B().int().positive().optional()})).min(1,"Agregar al menos un producto"),notes:E().max(300).optional().nullable()}),NE=J({id:E().min(1),status:Js.optional(),payment_status:co.optional(),delivery_date:E().datetime().optional().nullable(),delivery_notes:E().max(200).optional().nullable(),notes:E().max(300).optional().nullable()}),OE=J({id:E().min(1),status:Js,notes:E().max(200).optional()});J({page:B().int().positive().default(1),limit:B().int().positive().max(100).default(20),status:Js.optional(),payment_status:co.optional(),customer_phone:E().optional(),date_from:E().datetime().optional(),date_to:E().datetime().optional(),sort_by:Xe(["date","total","status","customer_name"]).default("date"),sort_order:Xe(["asc","desc"]).default("desc")});J({customer_phone:E().min(9),page:B().int().positive().default(1),limit:B().int().positive().max(50).default(10)});J({items:en(J({product_id:B().int().positive(),quantity:B().positive(),price:B().positive(),presentation_id:B().int().positive().optional()})),tax_rate:B().min(0).max(1).default(.18)});const zE={awaiting_payment:["preparing","cancelled"],preparing:["ready_for_shipping","cancelled"],ready_for_shipping:["shipped","cancelled"],shipped:["delivered","cancelled"],delivered:[],cancelled:[]};AE._type;u1._type;NE._type;c1._type;RE._type;const IE=e=>{try{return{success:!0,data:u1.parse(e),error:null}}catch(t){return{success:!1,data:null,error:t.errors}}},ME=(e,t)=>(zE[e]||[]).includes(t),LE=(e,t=.18)=>{const r=e.reduce((s,o)=>s+o.price*o.quantity,0),n=r*t,i=r+n;return{subtotal:Number(r.toFixed(2)),tax:Number(n.toFixed(2)),total:Number(i.toFixed(2))}},$E=()=>{const e=Date.now().toString().slice(-6),t=Math.floor(Math.random()*1e3).toString().padStart(3,"0");return`ORD-${e}${t}`};class DE{constructor(){this.cachePrefix="orders",this.cacheTTL=Il.ORDERS_CACHE_TIME}async getOrders(t={}){if(ve.USE_MOCK_DATA)return this._getMockOrders(t);const r=`${this.cachePrefix}_list_${JSON.stringify(t)}`,n=se.get(r);if(n)return{success:!0,data:n,fromCache:!0};try{const i=await K.get(Q.ORDERS.BASE,t);return i.success&&se.set(r,i.data,this.cacheTTL),i}catch(i){return console.error("Error fetching orders:",i),{success:!1,error:{type:"network",message:"Error al cargar pedidos"}}}}async getOrderById(t){if(ve.USE_MOCK_DATA){const i=Le.find(s=>s.id===t);return{success:!!i,data:i||null,error:i?null:{type:"not_found",message:"Pedido no encontrado"}}}const r=`${this.cachePrefix}_${t}`,n=se.get(r);if(n)return{success:!0,data:n,fromCache:!0};try{const i=await K.get(Q.ORDERS.BY_ID(t));return i.success&&se.set(r,i.data,this.cacheTTL),i}catch(i){return console.error("Error fetching order:",i),{success:!1,error:{type:"network",message:"Error al cargar pedido"}}}}async getOrdersByCustomer(t,r={}){if(ve.USE_MOCK_DATA){const n=Le.filter(i=>i.customer_phone===t);return{success:!0,data:{orders:n,total:n.length}}}try{return await K.get(Q.ORDERS.BY_CUSTOMER(t),r)}catch(n){return console.error("Error fetching customer orders:",n),{success:!1,error:{type:"network",message:"Error al cargar pedidos del cliente"}}}}async getOrdersByStatus(t,r={}){if(ve.USE_MOCK_DATA){const n=Le.filter(i=>i.status===t);return{success:!0,data:{orders:n,total:n.length}}}try{return await K.get(Q.ORDERS.BY_STATUS(t),r)}catch(n){return console.error("Error fetching orders by status:",n),{success:!1,error:{type:"network",message:"Error al cargar pedidos por estado"}}}}async createOrder(t){const r=IE(t);if(!r.success)return{success:!1,error:{type:"validation",errors:r.error}};try{const n=await K.post(Q.ORDERS.BASE,r.data);return n.success&&this._clearOrderCache(),n}catch(n){return console.error("Error creating order:",n),{success:!1,error:{type:"network",message:"Error al crear pedido"}}}}async updateOrderStatus(t,r,n=""){const i=await this.getOrderById(t);if(!i.success)return i;const o=i.data.status;if(!ME(o,r))return{success:!1,error:{type:"business_rule",message:`No se puede cambiar de "${o}" a "${r}"`}};const l={id:t,status:r,notes:n};try{OE.parse(l)}catch(c){return{success:!1,error:{type:"validation",errors:c.errors}}}try{const c=await K.patch(Q.ORDERS.UPDATE_STATUS(t),l);return c.success&&(this._clearOrderCache(),se.clear(`${this.cachePrefix}_${t}`)),c}catch(c){return console.error("Error updating order status:",c),{success:!1,error:{type:"network",message:"Error al actualizar estado del pedido"}}}}calculateTotals(t,r=.18){return LE(t,r)}generateId(){return $E()}async getOrderStats(t={}){if(ve.USE_MOCK_DATA)return{success:!0,data:{total_orders:Le.length,pending_orders:Le.filter(n=>n.status==="awaiting_payment").length,completed_orders:Le.filter(n=>n.status==="delivered").length,total_revenue:Le.filter(n=>n.status==="delivered").reduce((n,i)=>n+i.total,0),avg_order_value:Le.length>0?Le.reduce((n,i)=>n+i.total,0)/Le.length:0,by_status:{awaiting_payment:Le.filter(n=>n.status==="awaiting_payment").length,preparing:Le.filter(n=>n.status==="preparing").length,ready_for_shipping:Le.filter(n=>n.status==="ready_for_shipping").length,shipped:Le.filter(n=>n.status==="shipped").length,delivered:Le.filter(n=>n.status==="delivered").length,cancelled:Le.filter(n=>n.status==="cancelled").length}}};try{return await K.get(`${Q.ORDERS.BASE}/stats`,t)}catch(r){return console.error("Error fetching order stats:",r),{success:!1,error:{type:"network",message:"Error al cargar estadísticas de pedidos"}}}}async cancelOrder(t,r=""){try{const n=await K.patch(`${Q.ORDERS.BY_ID(t)}/cancel`,{reason:r});return n.success&&(this._clearOrderCache(),se.clear(`${this.cachePrefix}_${t}`)),n}catch(n){return console.error("Error cancelling order:",n),{success:!1,error:{type:"network",message:"Error al cancelar pedido"}}}}async getOrderItems(t){if(ve.USE_MOCK_DATA){const r=Le.find(n=>n.id===t);return{success:!!r,data:{items:(r==null?void 0:r.items)||[]}}}try{return await K.get(Q.ORDERS.ITEMS(t))}catch(r){return console.error("Error fetching order items:",r),{success:!1,error:{type:"network",message:"Error al cargar items del pedido"}}}}async searchOrders(t,r={}){if(ve.USE_MOCK_DATA){const n=Le.filter(i=>i.id.toLowerCase().includes(t.toLowerCase())||i.customer.toLowerCase().includes(t.toLowerCase())||i.customer_phone.includes(t));return{success:!0,data:{orders:n,total:n.length}}}try{const n={q:t,...r};return await K.get(`${Q.ORDERS.BASE}/search`,n)}catch(n){return console.error("Error searching orders:",n),{success:!1,error:{type:"network",message:"Error en la búsqueda de pedidos"}}}}_getMockOrders(t={}){let r=[...Le];t.status&&(r=r.filter(c=>c.status===t.status)),t.payment_status&&(r=r.filter(c=>c.payment_status===t.payment_status)),t.customer_phone&&(r=r.filter(c=>c.customer_phone===t.customer_phone)),t.date_from&&(r=r.filter(c=>new Date(c.date)>=new Date(t.date_from))),t.date_to&&(r=r.filter(c=>new Date(c.date)<=new Date(t.date_to))),t.sort_by?r.sort((c,u)=>{let d=c[t.sort_by],p=u[t.sort_by];return t.sort_by==="date"&&(d=new Date(d),p=new Date(p)),typeof d=="string"&&(d=d.toLowerCase(),p=p.toLowerCase()),t.sort_order==="desc"?p>d?1:-1:d>p?1:-1}):r.sort((c,u)=>new Date(u.date)-new Date(c.date));const n=t.page||1,i=t.limit||20,s=(n-1)*i,o=s+i;return{success:!0,data:{orders:r.slice(s,o),total:r.length,page:n,limit:i,total_pages:Math.ceil(r.length/i)}}}_clearOrderCache(){se.clear(this.cachePrefix)}}const sd=new DE,UE=J({id:E().min(1,"ID de pago requerido"),order_id:E().min(1,"ID de pedido requerido"),customer_name:E().min(1,"Nombre del cliente requerido").max(100),customer_phone:E().min(9).max(15),date:E().datetime(),amount:B().positive("El monto debe ser mayor a 0"),method:lo,status:co,voucher:E().url().optional().nullable(),voucher_file_name:E().optional().nullable(),reference_number:E().max(50).optional().nullable(),verification_notes:E().max(300).optional().nullable(),verified_by:E().max(100).optional().nullable(),verified_at:E().datetime().optional().nullable(),rejected_reason:E().max(200).optional().nullable(),created_at:E().datetime().optional(),updated_at:E().datetime().optional()}),d1=J({order_id:E().min(1,"ID de pedido requerido"),customer_name:E().min(1,"Nombre requerido").max(100),customer_phone:E().min(9,"Teléfono inválido").max(15),amount:B().positive("Monto debe ser mayor a 0"),method:lo,reference_number:E().max(50).optional().nullable()}),p1=J({id:E().min(1),status:Xe(["verified","rejected"]),verification_notes:E().max(300).optional(),rejected_reason:E().max(200).optional()});J({payment_id:E().min(1),voucher_file:cE(),voucher_url:E().url().optional()});const FE=J({page:B().int().positive().default(1),limit:B().int().positive().max(100).default(20),status:co.optional(),method:lo.optional(),order_id:E().optional(),customer_phone:E().optional(),date_from:E().datetime().optional(),date_to:E().datetime().optional(),amount_min:B().positive().optional(),amount_max:B().positive().optional(),sort_by:Xe(["date","amount","status","method"]).default("date"),sort_order:Xe(["asc","desc"]).default("desc")}),BE=J({bank_name:E(),account_number:E(),account_type:E(),account_holder:E(),cci:E().optional()}),Em=J({phone_number:E(),qr_code:E().url().optional(),instructions:E()});J({transfer:BE,yape:Em,plin:Em,cash:J({instructions:E(),notes:E().optional()})});const VE=J({total_payments:B().int().min(0),pending_payments:B().int().min(0),verified_payments:B().int().min(0),rejected_payments:B().int().min(0),total_amount:B().min(0),verified_amount:B().min(0),pending_amount:B().min(0),by_method:J({transfer:B().min(0),yape:B().min(0),plin:B().min(0),cash:B().min(0)})}),HE={transfer:{label:"Transferencia Bancaria",icon:"CreditCard",color:"#2563eb",description:"Transferencia directa a cuenta bancaria",requires_voucher:!0,processing_time:"2-4 horas"},yape:{label:"Yape",icon:"Smartphone",color:"#722f9e",description:"Pago móvil con Yape",requires_voucher:!0,processing_time:"1-2 horas"},plin:{label:"Plin",icon:"Smartphone",color:"#00a651",description:"Pago móvil con Plin",requires_voucher:!0,processing_time:"1-2 horas"},cash:{label:"Efectivo",icon:"DollarSign",color:"#16a34a",description:"Pago en efectivo al delivery",requires_voucher:!1,processing_time:"Al entregar"}},WE={"image/jpeg":".jpg","image/png":".png","image/webp":".webp","application/pdf":".pdf"},qE=5*1024*1024;UE._type;d1._type;p1._type;FE._type;VE._type;const ZE=e=>{try{return{success:!0,data:d1.parse(e),error:null}}catch(t){return{success:!1,data:null,error:t.errors}}},GE=e=>{try{return{success:!0,data:p1.parse(e),error:null}}catch(t){return{success:!1,data:null,error:t.errors}}},QE=e=>{var t;return((t=HE[e])==null?void 0:t.requires_voucher)||!1},jm=e=>{if(!e)return!1;const t=Object.keys(WE).includes(e.type),r=e.size<=qE;return t&&r},YE=()=>{const e=Date.now().toString().slice(-6),t=Math.floor(Math.random()*1e3).toString().padStart(3,"0");return`PAY-${e}${t}`},KE=(e,t="S/")=>`${t} ${Number(e).toFixed(2)}`;class JE{constructor(){this.cachePrefix="payments",this.cacheTTL=Il.ORDERS_CACHE_TIME}async getPayments(t={}){if(ve.USE_MOCK_DATA)return this._getMockPayments(t);const r=`${this.cachePrefix}_list_${JSON.stringify(t)}`,n=se.get(r);if(n)return{success:!0,data:n,fromCache:!0};try{const i=await K.get(Q.PAYMENTS.BASE,t);return i.success&&se.set(r,i.data,this.cacheTTL),i}catch(i){return console.error("Error fetching payments:",i),{success:!1,error:{type:"network",message:"Error al cargar pagos"}}}}async getPaymentById(t){if(ve.USE_MOCK_DATA){const i=ct.find(s=>s.id===t);return{success:!!i,data:i||null,error:i?null:{type:"not_found",message:"Pago no encontrado"}}}const r=`${this.cachePrefix}_${t}`,n=se.get(r);if(n)return{success:!0,data:n,fromCache:!0};try{const i=await K.get(Q.PAYMENTS.BY_ID(t));return i.success&&se.set(r,i.data,this.cacheTTL),i}catch(i){return console.error("Error fetching payment:",i),{success:!1,error:{type:"network",message:"Error al cargar pago"}}}}async getPaymentByOrder(t){if(ve.USE_MOCK_DATA){const r=ct.find(n=>n.order_id===t);return{success:!!r,data:r||null,error:r?null:{type:"not_found",message:"Pago no encontrado para este pedido"}}}try{return await K.get(Q.PAYMENTS.BY_ORDER(t))}catch(r){return console.error("Error fetching payment by order:",r),{success:!1,error:{type:"network",message:"Error al cargar pago del pedido"}}}}async createPayment(t){const r=ZE(t);if(!r.success)return{success:!1,error:{type:"validation",errors:r.error}};try{const n=await K.post(Q.PAYMENTS.BASE,r.data);return n.success&&this._clearPaymentCache(),n}catch(n){return console.error("Error creating payment:",n),{success:!1,error:{type:"network",message:"Error al crear pago"}}}}async verifyPayment(t,r,n="",i=""){const o=GE({id:t,status:r,verification_notes:n,rejected_reason:r==="rejected"?i:void 0});if(!o.success)return{success:!1,error:{type:"validation",errors:o.error}};try{const l=await K.patch(Q.PAYMENTS.VERIFY(t),o.data);return l.success&&(this._clearPaymentCache(),se.clear(`${this.cachePrefix}_${t}`)),l}catch(l){return console.error("Error verifying payment:",l),{success:!1,error:{type:"network",message:"Error al verificar pago"}}}}async uploadVoucher(t,r,n=null){if(!jm(r))return{success:!1,error:{type:"validation",message:"Archivo inválido. Debe ser JPG, PNG, WebP o PDF y menor a 5MB"}};try{const i=await K.upload(Q.PAYMENTS.UPLOAD_VOUCHER(t),r,{payment_id:t},n);return i.success&&(this._clearPaymentCache(),se.clear(`${this.cachePrefix}_${t}`)),i}catch(i){return console.error("Error uploading voucher:",i),{success:!1,error:{type:"network",message:"Error al subir comprobante"}}}}async getPendingPayments(t={}){const r={...t,status:"pending"};return this.getPayments(r)}async getPaymentStats(t={}){if(ve.USE_MOCK_DATA)return{success:!0,data:{total_payments:ct.length,pending_payments:ct.filter(n=>n.status==="pending").length,verified_payments:ct.filter(n=>n.status==="verified").length,rejected_payments:ct.filter(n=>n.status==="rejected").length,total_amount:ct.reduce((n,i)=>n+i.amount,0),verified_amount:ct.filter(n=>n.status==="verified").reduce((n,i)=>n+i.amount,0),pending_amount:ct.filter(n=>n.status==="pending").reduce((n,i)=>n+i.amount,0),by_method:{transfer:ct.filter(n=>n.method==="transfer").length,yape:ct.filter(n=>n.method==="yape").length,plin:ct.filter(n=>n.method==="plin").length,cash:ct.filter(n=>n.method==="cash").length}}};try{return await K.get(`${Q.PAYMENTS.BASE}/stats`,t)}catch(r){return console.error("Error fetching payment stats:",r),{success:!1,error:{type:"network",message:"Error al cargar estadísticas de pagos"}}}}async getPaymentInfo(){if(ve.USE_MOCK_DATA)return{success:!0,data:b0};const t=`${this.cachePrefix}_info`,r=se.get(t);if(r)return{success:!0,data:r,fromCache:!0};try{const n=await K.get(`${Q.PAYMENTS.BASE}/info`);return n.success&&se.set(t,n.data,30*60*1e3),n}catch(n){return console.error("Error fetching payment info:",n),{success:!1,error:{type:"network",message:"Error al cargar información de pagos"}}}}generateId(){return YE()}formatAmount(t,r="S/"){return KE(t,r)}isVoucherRequired(t){return QE(t)}isValidVoucherFile(t){return jm(t)}async searchPayments(t,r={}){if(ve.USE_MOCK_DATA){const n=ct.filter(i=>i.id.toLowerCase().includes(t.toLowerCase())||i.order_id.toLowerCase().includes(t.toLowerCase())||i.customer_name.toLowerCase().includes(t.toLowerCase())||i.customer_phone.includes(t));return{success:!0,data:{payments:n,total:n.length}}}try{const n={q:t,...r};return await K.get(`${Q.PAYMENTS.BASE}/search`,n)}catch(n){return console.error("Error searching payments:",n),{success:!1,error:{type:"network",message:"Error en la búsqueda de pagos"}}}}_getMockPayments(t={}){let r=[...ct];t.status&&(r=r.filter(c=>c.status===t.status)),t.method&&(r=r.filter(c=>c.method===t.method)),t.order_id&&(r=r.filter(c=>c.order_id===t.order_id)),t.customer_phone&&(r=r.filter(c=>c.customer_phone===t.customer_phone)),t.date_from&&(r=r.filter(c=>new Date(c.date)>=new Date(t.date_from))),t.date_to&&(r=r.filter(c=>new Date(c.date)<=new Date(t.date_to))),t.amount_min&&(r=r.filter(c=>c.amount>=parseFloat(t.amount_min))),t.amount_max&&(r=r.filter(c=>c.amount<=parseFloat(t.amount_max))),t.sort_by?r.sort((c,u)=>{let d=c[t.sort_by],p=u[t.sort_by];return t.sort_by==="date"&&(d=new Date(d),p=new Date(p)),typeof d=="string"&&(d=d.toLowerCase(),p=p.toLowerCase()),t.sort_order==="desc"?p>d?1:-1:d>p?1:-1}):r.sort((c,u)=>new Date(u.date)-new Date(c.date));const n=t.page||1,i=t.limit||20,s=(n-1)*i,o=s+i;return{success:!0,data:{payments:r.slice(s,o),total:r.length,page:n,limit:i,total_pages:Math.ceil(r.length/i)}}}_clearPaymentCache(){se.clear(this.cachePrefix)}}const od=new JE;class XE{constructor(){this.services={auth:xa,products:nd,categories:id,orders:sd,payments:od},this.initialized=!1}async initialize(){if(!this.initialized)try{await this.services.auth.initialize(),console.log("✅ Services initialized successfully"),this.initialized=!0}catch(t){throw console.error("❌ Error initializing services:",t),t}}clearAllCaches(){se.clear(),console.log("🧹 All service caches cleared")}async getHealthStatus(){const t={auth:!1,api:!1,cache:!1,timestamp:new Date().toISOString()};try{t.auth=!!this.services.auth.getCurrentUser();const r=await K.get("/health");t.api=r.success;const n="health_check_"+Date.now();se.set(n,"test",1e3),t.cache=se.get(n)==="test"}catch(r){console.warn("Health check partial failure:",r)}return t}enableDebugMode(){localStorage.setItem("API_DEBUG","true"),console.log("🐛 Debug mode enabled for all services")}disableDebugMode(){localStorage.removeItem("API_DEBUG"),console.log("✅ Debug mode disabled")}}const ej=new XE;function tj(){const[e,t]=P.useState(null),[r,n]=P.useState(!1),[i,s]=P.useState({show:!1,message:"",type:"success"}),[o,l]=P.useState([]),[c,u]=P.useState([]),[d,p]=P.useState([]),[v,k]=P.useState([]),[x,w]=P.useState([]),[_,m]=P.useState(!1),f=(b,O="success")=>{s({show:!0,message:b,type:O}),setTimeout(()=>{s({show:!1,message:"",type:"success"})},3e3)};P.useEffect(()=>{(async()=>{try{n(!0),await ej.initialize();const[O,X,Y,Re]=await Promise.all([id.getAll(),nd.getAll(),sd.getAll(),od.getAll()]);l(O),u(X),p(Y),k(Re),m(!0)}catch(O){console.error("Failed to initialize app:",O),f("Error al cargar la aplicación","error")}finally{n(!1)}})()},[]);const g=async(b,O)=>{try{n(!0);const X=await xa.login({email:b,password:O});return X.success?(t(X.user),f("¡Bienvenido!","success"),X.user):(f(X.message||"Credenciales incorrectas","error"),null)}catch(X){return console.error("Login error:",X),f("Error al iniciar sesión","error"),null}finally{n(!1)}},S=async b=>{try{n(!0);const O=await xa.register(b);return O.success?(t(O.user),f("Registro exitoso. ¡Bienvenido!","success"),O.user):(f(O.message||"Error en el registro","error"),null)}catch(O){return console.error("Register error:",O),f("Error al registrarse","error"),null}finally{n(!1)}},T=async()=>{try{await xa.logout(),t(null),w([]),f("Sesión cerrada correctamente","success")}catch(b){console.error("Logout error:",b),t(null),w([]),f("Sesión cerrada correctamente","success")}},A={categories:o,products:c,orders:d,payments:v,cart:x,setCategories:l,setProducts:u,setOrders:p,setPayments:k,setCart:w,paymentInfo:b0,showToast:f,categoryService:id,productService:nd,orderService:sd,paymentService:od,servicesInitialized:_};return!_&&r?a.jsx("div",{className:"App",children:a.jsx(Vu,{})}):a.jsx(V2,{future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:a.jsxs("div",{className:"App",children:[r&&a.jsx(Vu,{}),i.show&&a.jsx(Jk,{message:i.message,type:i.type}),a.jsxs(U2,{children:[a.jsx(ds,{path:"/auth",element:e?a.jsx(Do,{to:e.type==="admin"?"/admin":"/store",replace:!0}):a.jsx(o_,{login:g,register:S})}),a.jsx(ds,{path:"/admin/*",element:e&&e.type==="admin"?a.jsx(rk,{user:e,logout:T,...A}):a.jsx(Do,{to:"/auth",replace:!0})}),a.jsx(ds,{path:"/store/*",element:e&&e.type==="client"?a.jsx(Zk,{user:e,logout:T,...A}):a.jsx(Do,{to:"/auth",replace:!0})}),a.jsx(ds,{path:"/",element:a.jsx(Do,{to:e?e.type==="admin"?"/admin":"/store":"/auth",replace:!0})})]})]})})}Ic.createRoot(document.getElementById("root")).render(a.jsx(Pn.StrictMode,{children:a.jsx(tj,{})}));
//# sourceMappingURL=index-b1900807.js.map
