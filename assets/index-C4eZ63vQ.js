(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))c(f);new MutationObserver(f=>{for(const h of f)if(h.type==="childList")for(const b of h.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&c(b)}).observe(document,{childList:!0,subtree:!0});function o(f){const h={};return f.integrity&&(h.integrity=f.integrity),f.referrerPolicy&&(h.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?h.credentials="include":f.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function c(f){if(f.ep)return;f.ep=!0;const h=o(f);fetch(f.href,h)}})();function wg(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var jo={exports:{}},ai={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fh;function Eg(){if(fh)return ai;fh=1;var i=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function o(c,f,h){var b=null;if(h!==void 0&&(b=""+h),f.key!==void 0&&(b=""+f.key),"key"in f){h={};for(var T in f)T!=="key"&&(h[T]=f[T])}else h=f;return f=h.ref,{$$typeof:i,type:c,key:b,ref:f!==void 0?f:null,props:h}}return ai.Fragment=r,ai.jsx=o,ai.jsxs=o,ai}var dh;function Mg(){return dh||(dh=1,jo.exports=Eg()),jo.exports}var m=Mg(),Do={exports:{}},it={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hh;function Ag(){if(hh)return it;hh=1;var i=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),b=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),U=Symbol.iterator;function k(y){return y===null||typeof y!="object"?null:(y=U&&y[U]||y["@@iterator"],typeof y=="function"?y:null)}var H={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,L={};function G(y,Y,X){this.props=y,this.context=Y,this.refs=L,this.updater=X||H}G.prototype.isReactComponent={},G.prototype.setState=function(y,Y){if(typeof y!="object"&&typeof y!="function"&&y!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,y,Y,"setState")},G.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function B(){}B.prototype=G.prototype;function V(y,Y,X){this.props=y,this.context=Y,this.refs=L,this.updater=X||H}var q=V.prototype=new B;q.constructor=V,R(q,G.prototype),q.isPureReactComponent=!0;var F=Array.isArray,Z={H:null,A:null,T:null,S:null,V:null},nt=Object.prototype.hasOwnProperty;function J(y,Y,X,K,P,st){return X=st.ref,{$$typeof:i,type:y,key:Y,ref:X!==void 0?X:null,props:st}}function St(y,Y){return J(y.type,Y,void 0,void 0,void 0,y.props)}function yt(y){return typeof y=="object"&&y!==null&&y.$$typeof===i}function $t(y){var Y={"=":"=0",":":"=2"};return"$"+y.replace(/[=:]/g,function(X){return Y[X]})}var le=/\/+/g;function qt(y,Y){return typeof y=="object"&&y!==null&&y.key!=null?$t(""+y.key):Y.toString(36)}function Ve(){}function Ze(y){switch(y.status){case"fulfilled":return y.value;case"rejected":throw y.reason;default:switch(typeof y.status=="string"?y.then(Ve,Ve):(y.status="pending",y.then(function(Y){y.status==="pending"&&(y.status="fulfilled",y.value=Y)},function(Y){y.status==="pending"&&(y.status="rejected",y.reason=Y)})),y.status){case"fulfilled":return y.value;case"rejected":throw y.reason}}throw y}function Gt(y,Y,X,K,P){var st=typeof y;(st==="undefined"||st==="boolean")&&(y=null);var et=!1;if(y===null)et=!0;else switch(st){case"bigint":case"string":case"number":et=!0;break;case"object":switch(y.$$typeof){case i:case r:et=!0;break;case w:return et=y._init,Gt(et(y._payload),Y,X,K,P)}}if(et)return P=P(y),et=K===""?"."+qt(y,0):K,F(P)?(X="",et!=null&&(X=et.replace(le,"$&/")+"/"),Gt(P,Y,X,"",function(Pt){return Pt})):P!=null&&(yt(P)&&(P=St(P,X+(P.key==null||y&&y.key===P.key?"":(""+P.key).replace(le,"$&/")+"/")+et)),Y.push(P)),1;et=0;var Lt=K===""?".":K+":";if(F(y))for(var gt=0;gt<y.length;gt++)K=y[gt],st=Lt+qt(K,gt),et+=Gt(K,Y,X,st,P);else if(gt=k(y),typeof gt=="function")for(y=gt.call(y),gt=0;!(K=y.next()).done;)K=K.value,st=Lt+qt(K,gt++),et+=Gt(K,Y,X,st,P);else if(st==="object"){if(typeof y.then=="function")return Gt(Ze(y),Y,X,K,P);throw Y=String(y),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return et}function j(y,Y,X){if(y==null)return y;var K=[],P=0;return Gt(y,K,"","",function(st){return Y.call(X,st,P++)}),K}function Q(y){if(y._status===-1){var Y=y._result;Y=Y(),Y.then(function(X){(y._status===0||y._status===-1)&&(y._status=1,y._result=X)},function(X){(y._status===0||y._status===-1)&&(y._status=2,y._result=X)}),y._status===-1&&(y._status=0,y._result=Y)}if(y._status===1)return y._result.default;throw y._result}var I=typeof reportError=="function"?reportError:function(y){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof y=="object"&&y!==null&&typeof y.message=="string"?String(y.message):String(y),error:y});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",y);return}console.error(y)};function ot(){}return it.Children={map:j,forEach:function(y,Y,X){j(y,function(){Y.apply(this,arguments)},X)},count:function(y){var Y=0;return j(y,function(){Y++}),Y},toArray:function(y){return j(y,function(Y){return Y})||[]},only:function(y){if(!yt(y))throw Error("React.Children.only expected to receive a single React element child.");return y}},it.Component=G,it.Fragment=o,it.Profiler=f,it.PureComponent=V,it.StrictMode=c,it.Suspense=x,it.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Z,it.__COMPILER_RUNTIME={__proto__:null,c:function(y){return Z.H.useMemoCache(y)}},it.cache=function(y){return function(){return y.apply(null,arguments)}},it.cloneElement=function(y,Y,X){if(y==null)throw Error("The argument must be a React element, but you passed "+y+".");var K=R({},y.props),P=y.key,st=void 0;if(Y!=null)for(et in Y.ref!==void 0&&(st=void 0),Y.key!==void 0&&(P=""+Y.key),Y)!nt.call(Y,et)||et==="key"||et==="__self"||et==="__source"||et==="ref"&&Y.ref===void 0||(K[et]=Y[et]);var et=arguments.length-2;if(et===1)K.children=X;else if(1<et){for(var Lt=Array(et),gt=0;gt<et;gt++)Lt[gt]=arguments[gt+2];K.children=Lt}return J(y.type,P,void 0,void 0,st,K)},it.createContext=function(y){return y={$$typeof:b,_currentValue:y,_currentValue2:y,_threadCount:0,Provider:null,Consumer:null},y.Provider=y,y.Consumer={$$typeof:h,_context:y},y},it.createElement=function(y,Y,X){var K,P={},st=null;if(Y!=null)for(K in Y.key!==void 0&&(st=""+Y.key),Y)nt.call(Y,K)&&K!=="key"&&K!=="__self"&&K!=="__source"&&(P[K]=Y[K]);var et=arguments.length-2;if(et===1)P.children=X;else if(1<et){for(var Lt=Array(et),gt=0;gt<et;gt++)Lt[gt]=arguments[gt+2];P.children=Lt}if(y&&y.defaultProps)for(K in et=y.defaultProps,et)P[K]===void 0&&(P[K]=et[K]);return J(y,st,void 0,void 0,null,P)},it.createRef=function(){return{current:null}},it.forwardRef=function(y){return{$$typeof:T,render:y}},it.isValidElement=yt,it.lazy=function(y){return{$$typeof:w,_payload:{_status:-1,_result:y},_init:Q}},it.memo=function(y,Y){return{$$typeof:p,type:y,compare:Y===void 0?null:Y}},it.startTransition=function(y){var Y=Z.T,X={};Z.T=X;try{var K=y(),P=Z.S;P!==null&&P(X,K),typeof K=="object"&&K!==null&&typeof K.then=="function"&&K.then(ot,I)}catch(st){I(st)}finally{Z.T=Y}},it.unstable_useCacheRefresh=function(){return Z.H.useCacheRefresh()},it.use=function(y){return Z.H.use(y)},it.useActionState=function(y,Y,X){return Z.H.useActionState(y,Y,X)},it.useCallback=function(y,Y){return Z.H.useCallback(y,Y)},it.useContext=function(y){return Z.H.useContext(y)},it.useDebugValue=function(){},it.useDeferredValue=function(y,Y){return Z.H.useDeferredValue(y,Y)},it.useEffect=function(y,Y,X){var K=Z.H;if(typeof X=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return K.useEffect(y,Y)},it.useId=function(){return Z.H.useId()},it.useImperativeHandle=function(y,Y,X){return Z.H.useImperativeHandle(y,Y,X)},it.useInsertionEffect=function(y,Y){return Z.H.useInsertionEffect(y,Y)},it.useLayoutEffect=function(y,Y){return Z.H.useLayoutEffect(y,Y)},it.useMemo=function(y,Y){return Z.H.useMemo(y,Y)},it.useOptimistic=function(y,Y){return Z.H.useOptimistic(y,Y)},it.useReducer=function(y,Y,X){return Z.H.useReducer(y,Y,X)},it.useRef=function(y){return Z.H.useRef(y)},it.useState=function(y){return Z.H.useState(y)},it.useSyncExternalStore=function(y,Y,X){return Z.H.useSyncExternalStore(y,Y,X)},it.useTransition=function(){return Z.H.useTransition()},it.version="19.1.0",it}var mh;function rs(){return mh||(mh=1,Do.exports=Ag()),Do.exports}var _=rs();const oi=wg(_);var _o={exports:{}},ni={},Co={exports:{}},Uo={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ph;function kg(){return ph||(ph=1,function(i){function r(j,Q){var I=j.length;j.push(Q);t:for(;0<I;){var ot=I-1>>>1,y=j[ot];if(0<f(y,Q))j[ot]=Q,j[I]=y,I=ot;else break t}}function o(j){return j.length===0?null:j[0]}function c(j){if(j.length===0)return null;var Q=j[0],I=j.pop();if(I!==Q){j[0]=I;t:for(var ot=0,y=j.length,Y=y>>>1;ot<Y;){var X=2*(ot+1)-1,K=j[X],P=X+1,st=j[P];if(0>f(K,I))P<y&&0>f(st,K)?(j[ot]=st,j[P]=I,ot=P):(j[ot]=K,j[X]=I,ot=X);else if(P<y&&0>f(st,I))j[ot]=st,j[P]=I,ot=P;else break t}}return Q}function f(j,Q){var I=j.sortIndex-Q.sortIndex;return I!==0?I:j.id-Q.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;i.unstable_now=function(){return h.now()}}else{var b=Date,T=b.now();i.unstable_now=function(){return b.now()-T}}var x=[],p=[],w=1,U=null,k=3,H=!1,R=!1,L=!1,G=!1,B=typeof setTimeout=="function"?setTimeout:null,V=typeof clearTimeout=="function"?clearTimeout:null,q=typeof setImmediate<"u"?setImmediate:null;function F(j){for(var Q=o(p);Q!==null;){if(Q.callback===null)c(p);else if(Q.startTime<=j)c(p),Q.sortIndex=Q.expirationTime,r(x,Q);else break;Q=o(p)}}function Z(j){if(L=!1,F(j),!R)if(o(x)!==null)R=!0,nt||(nt=!0,qt());else{var Q=o(p);Q!==null&&Gt(Z,Q.startTime-j)}}var nt=!1,J=-1,St=5,yt=-1;function $t(){return G?!0:!(i.unstable_now()-yt<St)}function le(){if(G=!1,nt){var j=i.unstable_now();yt=j;var Q=!0;try{t:{R=!1,L&&(L=!1,V(J),J=-1),H=!0;var I=k;try{e:{for(F(j),U=o(x);U!==null&&!(U.expirationTime>j&&$t());){var ot=U.callback;if(typeof ot=="function"){U.callback=null,k=U.priorityLevel;var y=ot(U.expirationTime<=j);if(j=i.unstable_now(),typeof y=="function"){U.callback=y,F(j),Q=!0;break e}U===o(x)&&c(x),F(j)}else c(x);U=o(x)}if(U!==null)Q=!0;else{var Y=o(p);Y!==null&&Gt(Z,Y.startTime-j),Q=!1}}break t}finally{U=null,k=I,H=!1}Q=void 0}}finally{Q?qt():nt=!1}}}var qt;if(typeof q=="function")qt=function(){q(le)};else if(typeof MessageChannel<"u"){var Ve=new MessageChannel,Ze=Ve.port2;Ve.port1.onmessage=le,qt=function(){Ze.postMessage(null)}}else qt=function(){B(le,0)};function Gt(j,Q){J=B(function(){j(i.unstable_now())},Q)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(j){j.callback=null},i.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):St=0<j?Math.floor(1e3/j):5},i.unstable_getCurrentPriorityLevel=function(){return k},i.unstable_next=function(j){switch(k){case 1:case 2:case 3:var Q=3;break;default:Q=k}var I=k;k=Q;try{return j()}finally{k=I}},i.unstable_requestPaint=function(){G=!0},i.unstable_runWithPriority=function(j,Q){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var I=k;k=j;try{return Q()}finally{k=I}},i.unstable_scheduleCallback=function(j,Q,I){var ot=i.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?ot+I:ot):I=ot,j){case 1:var y=-1;break;case 2:y=250;break;case 5:y=1073741823;break;case 4:y=1e4;break;default:y=5e3}return y=I+y,j={id:w++,callback:Q,priorityLevel:j,startTime:I,expirationTime:y,sortIndex:-1},I>ot?(j.sortIndex=I,r(p,j),o(x)===null&&j===o(p)&&(L?(V(J),J=-1):L=!0,Gt(Z,I-ot))):(j.sortIndex=y,r(x,j),R||H||(R=!0,nt||(nt=!0,qt()))),j},i.unstable_shouldYield=$t,i.unstable_wrapCallback=function(j){var Q=k;return function(){var I=k;k=Q;try{return j.apply(this,arguments)}finally{k=I}}}}(Uo)),Uo}var gh;function Og(){return gh||(gh=1,Co.exports=kg()),Co.exports}var No={exports:{}},ee={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xh;function Rg(){if(xh)return ee;xh=1;var i=rs();function r(x){var p="https://react.dev/errors/"+x;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var w=2;w<arguments.length;w++)p+="&args[]="+encodeURIComponent(arguments[w])}return"Minified React error #"+x+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var c={d:{f:o,r:function(){throw Error(r(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},f=Symbol.for("react.portal");function h(x,p,w){var U=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:U==null?null:""+U,children:x,containerInfo:p,implementation:w}}var b=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function T(x,p){if(x==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return ee.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,ee.createPortal=function(x,p){var w=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(r(299));return h(x,p,null,w)},ee.flushSync=function(x){var p=b.T,w=c.p;try{if(b.T=null,c.p=2,x)return x()}finally{b.T=p,c.p=w,c.d.f()}},ee.preconnect=function(x,p){typeof x=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,c.d.C(x,p))},ee.prefetchDNS=function(x){typeof x=="string"&&c.d.D(x)},ee.preinit=function(x,p){if(typeof x=="string"&&p&&typeof p.as=="string"){var w=p.as,U=T(w,p.crossOrigin),k=typeof p.integrity=="string"?p.integrity:void 0,H=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;w==="style"?c.d.S(x,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:U,integrity:k,fetchPriority:H}):w==="script"&&c.d.X(x,{crossOrigin:U,integrity:k,fetchPriority:H,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},ee.preinitModule=function(x,p){if(typeof x=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var w=T(p.as,p.crossOrigin);c.d.M(x,{crossOrigin:w,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&c.d.M(x)},ee.preload=function(x,p){if(typeof x=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var w=p.as,U=T(w,p.crossOrigin);c.d.L(x,w,{crossOrigin:U,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},ee.preloadModule=function(x,p){if(typeof x=="string")if(p){var w=T(p.as,p.crossOrigin);c.d.m(x,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:w,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else c.d.m(x)},ee.requestFormReset=function(x){c.d.r(x)},ee.unstable_batchedUpdates=function(x,p){return x(p)},ee.useFormState=function(x,p,w){return b.H.useFormState(x,p,w)},ee.useFormStatus=function(){return b.H.useHostTransitionStatus()},ee.version="19.1.0",ee}var yh;function jg(){if(yh)return No.exports;yh=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(r){console.error(r)}}return i(),No.exports=Rg(),No.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bh;function Dg(){if(bh)return ni;bh=1;var i=Og(),r=rs(),o=jg();function c(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function h(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(a=e.return),t=e.return;while(t)}return e.tag===3?a:null}function b(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function T(t){if(h(t)!==t)throw Error(c(188))}function x(t){var e=t.alternate;if(!e){if(e=h(t),e===null)throw Error(c(188));return e!==t?null:t}for(var a=t,n=e;;){var l=a.return;if(l===null)break;var u=l.alternate;if(u===null){if(n=l.return,n!==null){a=n;continue}break}if(l.child===u.child){for(u=l.child;u;){if(u===a)return T(l),t;if(u===n)return T(l),e;u=u.sibling}throw Error(c(188))}if(a.return!==n.return)a=l,n=u;else{for(var s=!1,d=l.child;d;){if(d===a){s=!0,a=l,n=u;break}if(d===n){s=!0,n=l,a=u;break}d=d.sibling}if(!s){for(d=u.child;d;){if(d===a){s=!0,a=u,n=l;break}if(d===n){s=!0,n=u,a=l;break}d=d.sibling}if(!s)throw Error(c(189))}}if(a.alternate!==n)throw Error(c(190))}if(a.tag!==3)throw Error(c(188));return a.stateNode.current===a?t:e}function p(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=p(t),e!==null)return e;t=t.sibling}return null}var w=Object.assign,U=Symbol.for("react.element"),k=Symbol.for("react.transitional.element"),H=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),L=Symbol.for("react.strict_mode"),G=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),V=Symbol.for("react.consumer"),q=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),nt=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),St=Symbol.for("react.lazy"),yt=Symbol.for("react.activity"),$t=Symbol.for("react.memo_cache_sentinel"),le=Symbol.iterator;function qt(t){return t===null||typeof t!="object"?null:(t=le&&t[le]||t["@@iterator"],typeof t=="function"?t:null)}var Ve=Symbol.for("react.client.reference");function Ze(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Ve?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case R:return"Fragment";case G:return"Profiler";case L:return"StrictMode";case Z:return"Suspense";case nt:return"SuspenseList";case yt:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case H:return"Portal";case q:return(t.displayName||"Context")+".Provider";case V:return(t._context.displayName||"Context")+".Consumer";case F:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case J:return e=t.displayName||null,e!==null?e:Ze(t.type)||"Memo";case St:e=t._payload,t=t._init;try{return Ze(t(e))}catch{}}return null}var Gt=Array.isArray,j=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I={pending:!1,data:null,method:null,action:null},ot=[],y=-1;function Y(t){return{current:t}}function X(t){0>y||(t.current=ot[y],ot[y]=null,y--)}function K(t,e){y++,ot[y]=t.current,t.current=e}var P=Y(null),st=Y(null),et=Y(null),Lt=Y(null);function gt(t,e){switch(K(et,e),K(st,t),K(P,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?B0(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=B0(e),t=q0(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}X(P),K(P,t)}function Pt(){X(P),X(st),X(et)}function qa(t){t.memoizedState!==null&&K(Lt,t);var e=P.current,a=q0(e,t.type);e!==a&&(K(st,t),K(P,a))}function $e(t){st.current===t&&(X(P),X(st)),Lt.current===t&&(X(Lt),Fl._currentValue=I)}var Se=Object.prototype.hasOwnProperty,xr=i.unstable_scheduleCallback,yr=i.unstable_cancelCallback,ap=i.unstable_shouldYield,np=i.unstable_requestPaint,Ne=i.unstable_now,lp=i.unstable_getCurrentPriorityLevel,ys=i.unstable_ImmediatePriority,bs=i.unstable_UserBlockingPriority,gi=i.unstable_NormalPriority,ip=i.unstable_LowPriority,vs=i.unstable_IdlePriority,up=i.log,rp=i.unstable_setDisableYieldValue,il=null,fe=null;function ma(t){if(typeof up=="function"&&rp(t),fe&&typeof fe.setStrictMode=="function")try{fe.setStrictMode(il,t)}catch{}}var de=Math.clz32?Math.clz32:sp,cp=Math.log,op=Math.LN2;function sp(t){return t>>>=0,t===0?32:31-(cp(t)/op|0)|0}var xi=256,yi=4194304;function Ga(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function bi(t,e,a){var n=t.pendingLanes;if(n===0)return 0;var l=0,u=t.suspendedLanes,s=t.pingedLanes;t=t.warmLanes;var d=n&134217727;return d!==0?(n=d&~u,n!==0?l=Ga(n):(s&=d,s!==0?l=Ga(s):a||(a=d&~t,a!==0&&(l=Ga(a))))):(d=n&~u,d!==0?l=Ga(d):s!==0?l=Ga(s):a||(a=n&~t,a!==0&&(l=Ga(a)))),l===0?0:e!==0&&e!==l&&(e&u)===0&&(u=l&-l,a=e&-e,u>=a||u===32&&(a&4194048)!==0)?e:l}function ul(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function fp(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ss(){var t=xi;return xi<<=1,(xi&4194048)===0&&(xi=256),t}function Ts(){var t=yi;return yi<<=1,(yi&62914560)===0&&(yi=4194304),t}function br(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function rl(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function dp(t,e,a,n,l,u){var s=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var d=t.entanglements,g=t.expirationTimes,E=t.hiddenUpdates;for(a=s&~a;0<a;){var D=31-de(a),N=1<<D;d[D]=0,g[D]=-1;var M=E[D];if(M!==null)for(E[D]=null,D=0;D<M.length;D++){var A=M[D];A!==null&&(A.lane&=-536870913)}a&=~N}n!==0&&zs(t,n,0),u!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=u&~(s&~e))}function zs(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var n=31-de(e);t.entangledLanes|=e,t.entanglements[n]=t.entanglements[n]|1073741824|a&4194090}function ws(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var n=31-de(a),l=1<<n;l&e|t[n]&e&&(t[n]|=e),a&=~l}}function vr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Sr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Es(){var t=Q.p;return t!==0?t:(t=window.event,t===void 0?32:ih(t.type))}function hp(t,e){var a=Q.p;try{return Q.p=t,e()}finally{Q.p=a}}var pa=Math.random().toString(36).slice(2),It="__reactFiber$"+pa,ie="__reactProps$"+pa,on="__reactContainer$"+pa,Tr="__reactEvents$"+pa,mp="__reactListeners$"+pa,pp="__reactHandles$"+pa,Ms="__reactResources$"+pa,cl="__reactMarker$"+pa;function zr(t){delete t[It],delete t[ie],delete t[Tr],delete t[mp],delete t[pp]}function sn(t){var e=t[It];if(e)return e;for(var a=t.parentNode;a;){if(e=a[on]||a[It]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=Q0(t);t!==null;){if(a=t[It])return a;t=Q0(t)}return e}t=a,a=t.parentNode}return null}function fn(t){if(t=t[It]||t[on]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function ol(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(c(33))}function dn(t){var e=t[Ms];return e||(e=t[Ms]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Xt(t){t[cl]=!0}var As=new Set,ks={};function La(t,e){hn(t,e),hn(t+"Capture",e)}function hn(t,e){for(ks[t]=e,t=0;t<e.length;t++)As.add(e[t])}var gp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Os={},Rs={};function xp(t){return Se.call(Rs,t)?!0:Se.call(Os,t)?!1:gp.test(t)?Rs[t]=!0:(Os[t]=!0,!1)}function vi(t,e,a){if(xp(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var n=e.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+a)}}function Si(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+a)}}function Je(t,e,a,n){if(n===null)t.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,""+n)}}var wr,js;function mn(t){if(wr===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);wr=e&&e[1]||"",js=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+wr+t+js}var Er=!1;function Mr(t,e){if(!t||Er)return"";Er=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(e){var N=function(){throw Error()};if(Object.defineProperty(N.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(N,[])}catch(A){var M=A}Reflect.construct(t,[],N)}else{try{N.call()}catch(A){M=A}t.call(N.prototype)}}else{try{throw Error()}catch(A){M=A}(N=t())&&typeof N.catch=="function"&&N.catch(function(){})}}catch(A){if(A&&M&&typeof A.stack=="string")return[A.stack,M.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=n.DetermineComponentFrameRoot(),s=u[0],d=u[1];if(s&&d){var g=s.split(`
`),E=d.split(`
`);for(l=n=0;n<g.length&&!g[n].includes("DetermineComponentFrameRoot");)n++;for(;l<E.length&&!E[l].includes("DetermineComponentFrameRoot");)l++;if(n===g.length||l===E.length)for(n=g.length-1,l=E.length-1;1<=n&&0<=l&&g[n]!==E[l];)l--;for(;1<=n&&0<=l;n--,l--)if(g[n]!==E[l]){if(n!==1||l!==1)do if(n--,l--,0>l||g[n]!==E[l]){var D=`
`+g[n].replace(" at new "," at ");return t.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",t.displayName)),D}while(1<=n&&0<=l);break}}}finally{Er=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?mn(a):""}function yp(t){switch(t.tag){case 26:case 27:case 5:return mn(t.type);case 16:return mn("Lazy");case 13:return mn("Suspense");case 19:return mn("SuspenseList");case 0:case 15:return Mr(t.type,!1);case 11:return Mr(t.type.render,!1);case 1:return Mr(t.type,!0);case 31:return mn("Activity");default:return""}}function Ds(t){try{var e="";do e+=yp(t),t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Te(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function _s(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function bp(t){var e=_s(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),n=""+t[e];if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,u=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return l.call(this)},set:function(s){n=""+s,u.call(this,s)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ti(t){t._valueTracker||(t._valueTracker=bp(t))}function Cs(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),n="";return t&&(n=_s(t)?t.checked?"true":"false":t.value),t=n,t!==a?(e.setValue(t),!0):!1}function zi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var vp=/[\n"\\]/g;function ze(t){return t.replace(vp,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Ar(t,e,a,n,l,u,s,d){t.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.type=s:t.removeAttribute("type"),e!=null?s==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Te(e)):t.value!==""+Te(e)&&(t.value=""+Te(e)):s!=="submit"&&s!=="reset"||t.removeAttribute("value"),e!=null?kr(t,s,Te(e)):a!=null?kr(t,s,Te(a)):n!=null&&t.removeAttribute("value"),l==null&&u!=null&&(t.defaultChecked=!!u),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?t.name=""+Te(d):t.removeAttribute("name")}function Us(t,e,a,n,l,u,s,d){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),e!=null||a!=null){if(!(u!=="submit"&&u!=="reset"||e!=null))return;a=a!=null?""+Te(a):"",e=e!=null?""+Te(e):a,d||e===t.value||(t.value=e),t.defaultValue=e}n=n??l,n=typeof n!="function"&&typeof n!="symbol"&&!!n,t.checked=d?t.checked:!!n,t.defaultChecked=!!n,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.name=s)}function kr(t,e,a){e==="number"&&zi(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function pn(t,e,a,n){if(t=t.options,e){e={};for(var l=0;l<a.length;l++)e["$"+a[l]]=!0;for(a=0;a<t.length;a++)l=e.hasOwnProperty("$"+t[a].value),t[a].selected!==l&&(t[a].selected=l),l&&n&&(t[a].defaultSelected=!0)}else{for(a=""+Te(a),e=null,l=0;l<t.length;l++){if(t[l].value===a){t[l].selected=!0,n&&(t[l].defaultSelected=!0);return}e!==null||t[l].disabled||(e=t[l])}e!==null&&(e.selected=!0)}}function Ns(t,e,a){if(e!=null&&(e=""+Te(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+Te(a):""}function Ys(t,e,a,n){if(e==null){if(n!=null){if(a!=null)throw Error(c(92));if(Gt(n)){if(1<n.length)throw Error(c(93));n=n[0]}a=n}a==null&&(a=""),e=a}a=Te(e),t.defaultValue=a,n=t.textContent,n===a&&n!==""&&n!==null&&(t.value=n)}function gn(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var Sp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Hs(t,e,a){var n=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":n?t.setProperty(e,a):typeof a!="number"||a===0||Sp.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function Bs(t,e,a){if(e!=null&&typeof e!="object")throw Error(c(62));if(t=t.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||e!=null&&e.hasOwnProperty(n)||(n.indexOf("--")===0?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="");for(var l in e)n=e[l],e.hasOwnProperty(l)&&a[l]!==n&&Hs(t,l,n)}else for(var u in e)e.hasOwnProperty(u)&&Hs(t,u,e[u])}function Or(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),zp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function wi(t){return zp.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Rr=null;function jr(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var xn=null,yn=null;function qs(t){var e=fn(t);if(e&&(t=e.stateNode)){var a=t[ie]||null;t:switch(t=e.stateNode,e.type){case"input":if(Ar(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ze(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var n=a[e];if(n!==t&&n.form===t.form){var l=n[ie]||null;if(!l)throw Error(c(90));Ar(n,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(e=0;e<a.length;e++)n=a[e],n.form===t.form&&Cs(n)}break t;case"textarea":Ns(t,a.value,a.defaultValue);break t;case"select":e=a.value,e!=null&&pn(t,!!a.multiple,e,!1)}}}var Dr=!1;function Gs(t,e,a){if(Dr)return t(e,a);Dr=!0;try{var n=t(e);return n}finally{if(Dr=!1,(xn!==null||yn!==null)&&(ou(),xn&&(e=xn,t=yn,yn=xn=null,qs(e),t)))for(e=0;e<t.length;e++)qs(t[e])}}function sl(t,e){var a=t.stateNode;if(a===null)return null;var n=a[ie]||null;if(n===null)return null;a=n[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(c(231,e,typeof a));return a}var We=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_r=!1;if(We)try{var fl={};Object.defineProperty(fl,"passive",{get:function(){_r=!0}}),window.addEventListener("test",fl,fl),window.removeEventListener("test",fl,fl)}catch{_r=!1}var ga=null,Cr=null,Ei=null;function Ls(){if(Ei)return Ei;var t,e=Cr,a=e.length,n,l="value"in ga?ga.value:ga.textContent,u=l.length;for(t=0;t<a&&e[t]===l[t];t++);var s=a-t;for(n=1;n<=s&&e[a-n]===l[u-n];n++);return Ei=l.slice(t,1<n?1-n:void 0)}function Mi(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ai(){return!0}function Xs(){return!1}function ue(t){function e(a,n,l,u,s){this._reactName=a,this._targetInst=l,this.type=n,this.nativeEvent=u,this.target=s,this.currentTarget=null;for(var d in t)t.hasOwnProperty(d)&&(a=t[d],this[d]=a?a(u):u[d]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Ai:Xs,this.isPropagationStopped=Xs,this}return w(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ai)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ai)},persist:function(){},isPersistent:Ai}),e}var Xa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ki=ue(Xa),dl=w({},Xa,{view:0,detail:0}),wp=ue(dl),Ur,Nr,hl,Oi=w({},dl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hr,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==hl&&(hl&&t.type==="mousemove"?(Ur=t.screenX-hl.screenX,Nr=t.screenY-hl.screenY):Nr=Ur=0,hl=t),Ur)},movementY:function(t){return"movementY"in t?t.movementY:Nr}}),Qs=ue(Oi),Ep=w({},Oi,{dataTransfer:0}),Mp=ue(Ep),Ap=w({},dl,{relatedTarget:0}),Yr=ue(Ap),kp=w({},Xa,{animationName:0,elapsedTime:0,pseudoElement:0}),Op=ue(kp),Rp=w({},Xa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),jp=ue(Rp),Dp=w({},Xa,{data:0}),Ks=ue(Dp),_p={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Up={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Np(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Up[t])?!!e[t]:!1}function Hr(){return Np}var Yp=w({},dl,{key:function(t){if(t.key){var e=_p[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Mi(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Cp[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hr,charCode:function(t){return t.type==="keypress"?Mi(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Mi(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Hp=ue(Yp),Bp=w({},Oi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vs=ue(Bp),qp=w({},dl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hr}),Gp=ue(qp),Lp=w({},Xa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xp=ue(Lp),Qp=w({},Oi,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Kp=ue(Qp),Vp=w({},Xa,{newState:0,oldState:0}),Zp=ue(Vp),$p=[9,13,27,32],Br=We&&"CompositionEvent"in window,ml=null;We&&"documentMode"in document&&(ml=document.documentMode);var Jp=We&&"TextEvent"in window&&!ml,Zs=We&&(!Br||ml&&8<ml&&11>=ml),$s=" ",Js=!1;function Ws(t,e){switch(t){case"keyup":return $p.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fs(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var bn=!1;function Wp(t,e){switch(t){case"compositionend":return Fs(e);case"keypress":return e.which!==32?null:(Js=!0,$s);case"textInput":return t=e.data,t===$s&&Js?null:t;default:return null}}function Fp(t,e){if(bn)return t==="compositionend"||!Br&&Ws(t,e)?(t=Ls(),Ei=Cr=ga=null,bn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Zs&&e.locale!=="ko"?null:e.data;default:return null}}var Pp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ps(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Pp[t.type]:e==="textarea"}function Is(t,e,a,n){xn?yn?yn.push(n):yn=[n]:xn=n,e=pu(e,"onChange"),0<e.length&&(a=new ki("onChange","change",null,a,n),t.push({event:a,listeners:e}))}var pl=null,gl=null;function Ip(t){C0(t,0)}function Ri(t){var e=ol(t);if(Cs(e))return t}function tf(t,e){if(t==="change")return e}var ef=!1;if(We){var qr;if(We){var Gr="oninput"in document;if(!Gr){var af=document.createElement("div");af.setAttribute("oninput","return;"),Gr=typeof af.oninput=="function"}qr=Gr}else qr=!1;ef=qr&&(!document.documentMode||9<document.documentMode)}function nf(){pl&&(pl.detachEvent("onpropertychange",lf),gl=pl=null)}function lf(t){if(t.propertyName==="value"&&Ri(gl)){var e=[];Is(e,gl,t,jr(t)),Gs(Ip,e)}}function t1(t,e,a){t==="focusin"?(nf(),pl=e,gl=a,pl.attachEvent("onpropertychange",lf)):t==="focusout"&&nf()}function e1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ri(gl)}function a1(t,e){if(t==="click")return Ri(e)}function n1(t,e){if(t==="input"||t==="change")return Ri(e)}function l1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var he=typeof Object.is=="function"?Object.is:l1;function xl(t,e){if(he(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),n=Object.keys(e);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var l=a[n];if(!Se.call(e,l)||!he(t[l],e[l]))return!1}return!0}function uf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function rf(t,e){var a=uf(t);t=0;for(var n;a;){if(a.nodeType===3){if(n=t+a.textContent.length,t<=e&&n>=e)return{node:a,offset:e-t};t=n}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=uf(a)}}function cf(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?cf(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function of(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=zi(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=zi(t.document)}return e}function Lr(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var i1=We&&"documentMode"in document&&11>=document.documentMode,vn=null,Xr=null,yl=null,Qr=!1;function sf(t,e,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Qr||vn==null||vn!==zi(n)||(n=vn,"selectionStart"in n&&Lr(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),yl&&xl(yl,n)||(yl=n,n=pu(Xr,"onSelect"),0<n.length&&(e=new ki("onSelect","select",null,e,a),t.push({event:e,listeners:n}),e.target=vn)))}function Qa(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var Sn={animationend:Qa("Animation","AnimationEnd"),animationiteration:Qa("Animation","AnimationIteration"),animationstart:Qa("Animation","AnimationStart"),transitionrun:Qa("Transition","TransitionRun"),transitionstart:Qa("Transition","TransitionStart"),transitioncancel:Qa("Transition","TransitionCancel"),transitionend:Qa("Transition","TransitionEnd")},Kr={},ff={};We&&(ff=document.createElement("div").style,"AnimationEvent"in window||(delete Sn.animationend.animation,delete Sn.animationiteration.animation,delete Sn.animationstart.animation),"TransitionEvent"in window||delete Sn.transitionend.transition);function Ka(t){if(Kr[t])return Kr[t];if(!Sn[t])return t;var e=Sn[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in ff)return Kr[t]=e[a];return t}var df=Ka("animationend"),hf=Ka("animationiteration"),mf=Ka("animationstart"),u1=Ka("transitionrun"),r1=Ka("transitionstart"),c1=Ka("transitioncancel"),pf=Ka("transitionend"),gf=new Map,Vr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Vr.push("scrollEnd");function De(t,e){gf.set(t,e),La(e,[t])}var xf=new WeakMap;function we(t,e){if(typeof t=="object"&&t!==null){var a=xf.get(t);return a!==void 0?a:(e={value:t,source:e,stack:Ds(e)},xf.set(t,e),e)}return{value:t,source:e,stack:Ds(e)}}var Ee=[],Tn=0,Zr=0;function ji(){for(var t=Tn,e=Zr=Tn=0;e<t;){var a=Ee[e];Ee[e++]=null;var n=Ee[e];Ee[e++]=null;var l=Ee[e];Ee[e++]=null;var u=Ee[e];if(Ee[e++]=null,n!==null&&l!==null){var s=n.pending;s===null?l.next=l:(l.next=s.next,s.next=l),n.pending=l}u!==0&&yf(a,l,u)}}function Di(t,e,a,n){Ee[Tn++]=t,Ee[Tn++]=e,Ee[Tn++]=a,Ee[Tn++]=n,Zr|=n,t.lanes|=n,t=t.alternate,t!==null&&(t.lanes|=n)}function $r(t,e,a,n){return Di(t,e,a,n),_i(t)}function zn(t,e){return Di(t,null,null,e),_i(t)}function yf(t,e,a){t.lanes|=a;var n=t.alternate;n!==null&&(n.lanes|=a);for(var l=!1,u=t.return;u!==null;)u.childLanes|=a,n=u.alternate,n!==null&&(n.childLanes|=a),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(l=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,l&&e!==null&&(l=31-de(a),t=u.hiddenUpdates,n=t[l],n===null?t[l]=[e]:n.push(e),e.lane=a|536870912),u):null}function _i(t){if(50<Xl)throw Xl=0,to=null,Error(c(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var wn={};function o1(t,e,a,n){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function me(t,e,a,n){return new o1(t,e,a,n)}function Jr(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Fe(t,e){var a=t.alternate;return a===null?(a=me(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function bf(t,e){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Ci(t,e,a,n,l,u){var s=0;if(n=t,typeof t=="function")Jr(t)&&(s=1);else if(typeof t=="string")s=fg(t,a,P.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case yt:return t=me(31,a,e,l),t.elementType=yt,t.lanes=u,t;case R:return Va(a.children,l,u,e);case L:s=8,l|=24;break;case G:return t=me(12,a,e,l|2),t.elementType=G,t.lanes=u,t;case Z:return t=me(13,a,e,l),t.elementType=Z,t.lanes=u,t;case nt:return t=me(19,a,e,l),t.elementType=nt,t.lanes=u,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case B:case q:s=10;break t;case V:s=9;break t;case F:s=11;break t;case J:s=14;break t;case St:s=16,n=null;break t}s=29,a=Error(c(130,t===null?"null":typeof t,"")),n=null}return e=me(s,a,e,l),e.elementType=t,e.type=n,e.lanes=u,e}function Va(t,e,a,n){return t=me(7,t,n,e),t.lanes=a,t}function Wr(t,e,a){return t=me(6,t,null,e),t.lanes=a,t}function Fr(t,e,a){return e=me(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var En=[],Mn=0,Ui=null,Ni=0,Me=[],Ae=0,Za=null,Pe=1,Ie="";function $a(t,e){En[Mn++]=Ni,En[Mn++]=Ui,Ui=t,Ni=e}function vf(t,e,a){Me[Ae++]=Pe,Me[Ae++]=Ie,Me[Ae++]=Za,Za=t;var n=Pe;t=Ie;var l=32-de(n)-1;n&=~(1<<l),a+=1;var u=32-de(e)+l;if(30<u){var s=l-l%5;u=(n&(1<<s)-1).toString(32),n>>=s,l-=s,Pe=1<<32-de(e)+l|a<<l|n,Ie=u+t}else Pe=1<<u|a<<l|n,Ie=t}function Pr(t){t.return!==null&&($a(t,1),vf(t,1,0))}function Ir(t){for(;t===Ui;)Ui=En[--Mn],En[Mn]=null,Ni=En[--Mn],En[Mn]=null;for(;t===Za;)Za=Me[--Ae],Me[Ae]=null,Ie=Me[--Ae],Me[Ae]=null,Pe=Me[--Ae],Me[Ae]=null}var ae=null,jt=null,pt=!1,Ja=null,Ye=!1,tc=Error(c(519));function Wa(t){var e=Error(c(418,""));throw Sl(we(e,t)),tc}function Sf(t){var e=t.stateNode,a=t.type,n=t.memoizedProps;switch(e[It]=t,e[ie]=n,a){case"dialog":dt("cancel",e),dt("close",e);break;case"iframe":case"object":case"embed":dt("load",e);break;case"video":case"audio":for(a=0;a<Kl.length;a++)dt(Kl[a],e);break;case"source":dt("error",e);break;case"img":case"image":case"link":dt("error",e),dt("load",e);break;case"details":dt("toggle",e);break;case"input":dt("invalid",e),Us(e,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0),Ti(e);break;case"select":dt("invalid",e);break;case"textarea":dt("invalid",e),Ys(e,n.value,n.defaultValue,n.children),Ti(e)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||n.suppressHydrationWarning===!0||H0(e.textContent,a)?(n.popover!=null&&(dt("beforetoggle",e),dt("toggle",e)),n.onScroll!=null&&dt("scroll",e),n.onScrollEnd!=null&&dt("scrollend",e),n.onClick!=null&&(e.onclick=gu),e=!0):e=!1,e||Wa(t)}function Tf(t){for(ae=t.return;ae;)switch(ae.tag){case 5:case 13:Ye=!1;return;case 27:case 3:Ye=!0;return;default:ae=ae.return}}function bl(t){if(t!==ae)return!1;if(!pt)return Tf(t),pt=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||xo(t.type,t.memoizedProps)),a=!a),a&&jt&&Wa(t),Tf(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(c(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(e===0){jt=Ce(t.nextSibling);break t}e--}else a!=="$"&&a!=="$!"&&a!=="$?"||e++;t=t.nextSibling}jt=null}}else e===27?(e=jt,Da(t.type)?(t=So,So=null,jt=t):jt=e):jt=ae?Ce(t.stateNode.nextSibling):null;return!0}function vl(){jt=ae=null,pt=!1}function zf(){var t=Ja;return t!==null&&(oe===null?oe=t:oe.push.apply(oe,t),Ja=null),t}function Sl(t){Ja===null?Ja=[t]:Ja.push(t)}var ec=Y(null),Fa=null,ta=null;function xa(t,e,a){K(ec,e._currentValue),e._currentValue=a}function ea(t){t._currentValue=ec.current,X(ec)}function ac(t,e,a){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),t===a)break;t=t.return}}function nc(t,e,a,n){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var u=l.dependencies;if(u!==null){var s=l.child;u=u.firstContext;t:for(;u!==null;){var d=u;u=l;for(var g=0;g<e.length;g++)if(d.context===e[g]){u.lanes|=a,d=u.alternate,d!==null&&(d.lanes|=a),ac(u.return,a,t),n||(s=null);break t}u=d.next}}else if(l.tag===18){if(s=l.return,s===null)throw Error(c(341));s.lanes|=a,u=s.alternate,u!==null&&(u.lanes|=a),ac(s,a,t),s=null}else s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===t){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}}function Tl(t,e,a,n){t=null;for(var l=e,u=!1;l!==null;){if(!u){if((l.flags&524288)!==0)u=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var s=l.alternate;if(s===null)throw Error(c(387));if(s=s.memoizedProps,s!==null){var d=l.type;he(l.pendingProps.value,s.value)||(t!==null?t.push(d):t=[d])}}else if(l===Lt.current){if(s=l.alternate,s===null)throw Error(c(387));s.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(Fl):t=[Fl])}l=l.return}t!==null&&nc(e,t,a,n),e.flags|=262144}function Yi(t){for(t=t.firstContext;t!==null;){if(!he(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Pa(t){Fa=t,ta=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function te(t){return wf(Fa,t)}function Hi(t,e){return Fa===null&&Pa(t),wf(t,e)}function wf(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},ta===null){if(t===null)throw Error(c(308));ta=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else ta=ta.next=e;return a}var s1=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,n){t.push(n)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},f1=i.unstable_scheduleCallback,d1=i.unstable_NormalPriority,Ht={$$typeof:q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function lc(){return{controller:new s1,data:new Map,refCount:0}}function zl(t){t.refCount--,t.refCount===0&&f1(d1,function(){t.controller.abort()})}var wl=null,ic=0,An=0,kn=null;function h1(t,e){if(wl===null){var a=wl=[];ic=0,An=ro(),kn={status:"pending",value:void 0,then:function(n){a.push(n)}}}return ic++,e.then(Ef,Ef),e}function Ef(){if(--ic===0&&wl!==null){kn!==null&&(kn.status="fulfilled");var t=wl;wl=null,An=0,kn=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function m1(t,e){var a=[],n={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return t.then(function(){n.status="fulfilled",n.value=e;for(var l=0;l<a.length;l++)(0,a[l])(e)},function(l){for(n.status="rejected",n.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),n}var Mf=j.S;j.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&h1(t,e),Mf!==null&&Mf(t,e)};var Ia=Y(null);function uc(){var t=Ia.current;return t!==null?t:Mt.pooledCache}function Bi(t,e){e===null?K(Ia,Ia.current):K(Ia,e.pool)}function Af(){var t=uc();return t===null?null:{parent:Ht._currentValue,pool:t}}var El=Error(c(460)),kf=Error(c(474)),qi=Error(c(542)),rc={then:function(){}};function Of(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Gi(){}function Rf(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(Gi,Gi),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Df(t),t;default:if(typeof e.status=="string")e.then(Gi,Gi);else{if(t=Mt,t!==null&&100<t.shellSuspendCounter)throw Error(c(482));t=e,t.status="pending",t.then(function(n){if(e.status==="pending"){var l=e;l.status="fulfilled",l.value=n}},function(n){if(e.status==="pending"){var l=e;l.status="rejected",l.reason=n}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Df(t),t}throw Ml=e,El}}var Ml=null;function jf(){if(Ml===null)throw Error(c(459));var t=Ml;return Ml=null,t}function Df(t){if(t===El||t===qi)throw Error(c(483))}var ya=!1;function cc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function oc(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ba(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function va(t,e,a){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,(bt&2)!==0){var l=n.pending;return l===null?e.next=e:(e.next=l.next,l.next=e),n.pending=e,e=_i(t),yf(t,null,a),e}return Di(t,n,e,a),_i(t)}function Al(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var n=e.lanes;n&=t.pendingLanes,a|=n,e.lanes=a,ws(t,a)}}function sc(t,e){var a=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var l=null,u=null;if(a=a.firstBaseUpdate,a!==null){do{var s={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};u===null?l=u=s:u=u.next=s,a=a.next}while(a!==null);u===null?l=u=e:u=u.next=e}else l=u=e;a={baseState:n.baseState,firstBaseUpdate:l,lastBaseUpdate:u,shared:n.shared,callbacks:n.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var fc=!1;function kl(){if(fc){var t=kn;if(t!==null)throw t}}function Ol(t,e,a,n){fc=!1;var l=t.updateQueue;ya=!1;var u=l.firstBaseUpdate,s=l.lastBaseUpdate,d=l.shared.pending;if(d!==null){l.shared.pending=null;var g=d,E=g.next;g.next=null,s===null?u=E:s.next=E,s=g;var D=t.alternate;D!==null&&(D=D.updateQueue,d=D.lastBaseUpdate,d!==s&&(d===null?D.firstBaseUpdate=E:d.next=E,D.lastBaseUpdate=g))}if(u!==null){var N=l.baseState;s=0,D=E=g=null,d=u;do{var M=d.lane&-536870913,A=M!==d.lane;if(A?(ht&M)===M:(n&M)===M){M!==0&&M===An&&(fc=!0),D!==null&&(D=D.next={lane:0,tag:d.tag,payload:d.payload,callback:null,next:null});t:{var lt=t,tt=d;M=e;var wt=a;switch(tt.tag){case 1:if(lt=tt.payload,typeof lt=="function"){N=lt.call(wt,N,M);break t}N=lt;break t;case 3:lt.flags=lt.flags&-65537|128;case 0:if(lt=tt.payload,M=typeof lt=="function"?lt.call(wt,N,M):lt,M==null)break t;N=w({},N,M);break t;case 2:ya=!0}}M=d.callback,M!==null&&(t.flags|=64,A&&(t.flags|=8192),A=l.callbacks,A===null?l.callbacks=[M]:A.push(M))}else A={lane:M,tag:d.tag,payload:d.payload,callback:d.callback,next:null},D===null?(E=D=A,g=N):D=D.next=A,s|=M;if(d=d.next,d===null){if(d=l.shared.pending,d===null)break;A=d,d=A.next,A.next=null,l.lastBaseUpdate=A,l.shared.pending=null}}while(!0);D===null&&(g=N),l.baseState=g,l.firstBaseUpdate=E,l.lastBaseUpdate=D,u===null&&(l.shared.lanes=0),ka|=s,t.lanes=s,t.memoizedState=N}}function _f(t,e){if(typeof t!="function")throw Error(c(191,t));t.call(e)}function Cf(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)_f(a[t],e)}var On=Y(null),Li=Y(0);function Uf(t,e){t=ca,K(Li,t),K(On,e),ca=t|e.baseLanes}function dc(){K(Li,ca),K(On,On.current)}function hc(){ca=Li.current,X(On),X(Li)}var Sa=0,rt=null,Tt=null,Ut=null,Xi=!1,Rn=!1,tn=!1,Qi=0,Rl=0,jn=null,p1=0;function _t(){throw Error(c(321))}function mc(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!he(t[a],e[a]))return!1;return!0}function pc(t,e,a,n,l,u){return Sa=u,rt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,j.H=t===null||t.memoizedState===null?yd:bd,tn=!1,u=a(n,l),tn=!1,Rn&&(u=Yf(e,a,n,l)),Nf(t),u}function Nf(t){j.H=Wi;var e=Tt!==null&&Tt.next!==null;if(Sa=0,Ut=Tt=rt=null,Xi=!1,Rl=0,jn=null,e)throw Error(c(300));t===null||Qt||(t=t.dependencies,t!==null&&Yi(t)&&(Qt=!0))}function Yf(t,e,a,n){rt=t;var l=0;do{if(Rn&&(jn=null),Rl=0,Rn=!1,25<=l)throw Error(c(301));if(l+=1,Ut=Tt=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}j.H=T1,u=e(a,n)}while(Rn);return u}function g1(){var t=j.H,e=t.useState()[0];return e=typeof e.then=="function"?jl(e):e,t=t.useState()[0],(Tt!==null?Tt.memoizedState:null)!==t&&(rt.flags|=1024),e}function gc(){var t=Qi!==0;return Qi=0,t}function xc(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function yc(t){if(Xi){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Xi=!1}Sa=0,Ut=Tt=rt=null,Rn=!1,Rl=Qi=0,jn=null}function re(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ut===null?rt.memoizedState=Ut=t:Ut=Ut.next=t,Ut}function Nt(){if(Tt===null){var t=rt.alternate;t=t!==null?t.memoizedState:null}else t=Tt.next;var e=Ut===null?rt.memoizedState:Ut.next;if(e!==null)Ut=e,Tt=t;else{if(t===null)throw rt.alternate===null?Error(c(467)):Error(c(310));Tt=t,t={memoizedState:Tt.memoizedState,baseState:Tt.baseState,baseQueue:Tt.baseQueue,queue:Tt.queue,next:null},Ut===null?rt.memoizedState=Ut=t:Ut=Ut.next=t}return Ut}function bc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function jl(t){var e=Rl;return Rl+=1,jn===null&&(jn=[]),t=Rf(jn,t,e),e=rt,(Ut===null?e.memoizedState:Ut.next)===null&&(e=e.alternate,j.H=e===null||e.memoizedState===null?yd:bd),t}function Ki(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return jl(t);if(t.$$typeof===q)return te(t)}throw Error(c(438,String(t)))}function vc(t){var e=null,a=rt.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var n=rt.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(e={data:n.data.map(function(l){return l.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=bc(),rt.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),n=0;n<t;n++)a[n]=$t;return e.index++,a}function aa(t,e){return typeof e=="function"?e(t):e}function Vi(t){var e=Nt();return Sc(e,Tt,t)}function Sc(t,e,a){var n=t.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=a;var l=t.baseQueue,u=n.pending;if(u!==null){if(l!==null){var s=l.next;l.next=u.next,u.next=s}e.baseQueue=l=u,n.pending=null}if(u=t.baseState,l===null)t.memoizedState=u;else{e=l.next;var d=s=null,g=null,E=e,D=!1;do{var N=E.lane&-536870913;if(N!==E.lane?(ht&N)===N:(Sa&N)===N){var M=E.revertLane;if(M===0)g!==null&&(g=g.next={lane:0,revertLane:0,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),N===An&&(D=!0);else if((Sa&M)===M){E=E.next,M===An&&(D=!0);continue}else N={lane:0,revertLane:E.revertLane,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},g===null?(d=g=N,s=u):g=g.next=N,rt.lanes|=M,ka|=M;N=E.action,tn&&a(u,N),u=E.hasEagerState?E.eagerState:a(u,N)}else M={lane:N,revertLane:E.revertLane,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},g===null?(d=g=M,s=u):g=g.next=M,rt.lanes|=N,ka|=N;E=E.next}while(E!==null&&E!==e);if(g===null?s=u:g.next=d,!he(u,t.memoizedState)&&(Qt=!0,D&&(a=kn,a!==null)))throw a;t.memoizedState=u,t.baseState=s,t.baseQueue=g,n.lastRenderedState=u}return l===null&&(n.lanes=0),[t.memoizedState,n.dispatch]}function Tc(t){var e=Nt(),a=e.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=t;var n=a.dispatch,l=a.pending,u=e.memoizedState;if(l!==null){a.pending=null;var s=l=l.next;do u=t(u,s.action),s=s.next;while(s!==l);he(u,e.memoizedState)||(Qt=!0),e.memoizedState=u,e.baseQueue===null&&(e.baseState=u),a.lastRenderedState=u}return[u,n]}function Hf(t,e,a){var n=rt,l=Nt(),u=pt;if(u){if(a===void 0)throw Error(c(407));a=a()}else a=e();var s=!he((Tt||l).memoizedState,a);s&&(l.memoizedState=a,Qt=!0),l=l.queue;var d=Gf.bind(null,n,l,t);if(Dl(2048,8,d,[t]),l.getSnapshot!==e||s||Ut!==null&&Ut.memoizedState.tag&1){if(n.flags|=2048,Dn(9,Zi(),qf.bind(null,n,l,a,e),null),Mt===null)throw Error(c(349));u||(Sa&124)!==0||Bf(n,e,a)}return a}function Bf(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=rt.updateQueue,e===null?(e=bc(),rt.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function qf(t,e,a,n){e.value=a,e.getSnapshot=n,Lf(e)&&Xf(t)}function Gf(t,e,a){return a(function(){Lf(e)&&Xf(t)})}function Lf(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!he(t,a)}catch{return!0}}function Xf(t){var e=zn(t,2);e!==null&&be(e,t,2)}function zc(t){var e=re();if(typeof t=="function"){var a=t;if(t=a(),tn){ma(!0);try{a()}finally{ma(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:t},e}function Qf(t,e,a,n){return t.baseState=a,Sc(t,Tt,typeof n=="function"?n:aa)}function x1(t,e,a,n,l){if(Ji(t))throw Error(c(485));if(t=e.action,t!==null){var u={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){u.listeners.push(s)}};j.T!==null?a(!0):u.isTransition=!1,n(u),a=e.pending,a===null?(u.next=e.pending=u,Kf(e,u)):(u.next=a.next,e.pending=a.next=u)}}function Kf(t,e){var a=e.action,n=e.payload,l=t.state;if(e.isTransition){var u=j.T,s={};j.T=s;try{var d=a(l,n),g=j.S;g!==null&&g(s,d),Vf(t,e,d)}catch(E){wc(t,e,E)}finally{j.T=u}}else try{u=a(l,n),Vf(t,e,u)}catch(E){wc(t,e,E)}}function Vf(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){Zf(t,e,n)},function(n){return wc(t,e,n)}):Zf(t,e,a)}function Zf(t,e,a){e.status="fulfilled",e.value=a,$f(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,Kf(t,a)))}function wc(t,e,a){var n=t.pending;if(t.pending=null,n!==null){n=n.next;do e.status="rejected",e.reason=a,$f(e),e=e.next;while(e!==n)}t.action=null}function $f(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Jf(t,e){return e}function Wf(t,e){if(pt){var a=Mt.formState;if(a!==null){t:{var n=rt;if(pt){if(jt){e:{for(var l=jt,u=Ye;l.nodeType!==8;){if(!u){l=null;break e}if(l=Ce(l.nextSibling),l===null){l=null;break e}}u=l.data,l=u==="F!"||u==="F"?l:null}if(l){jt=Ce(l.nextSibling),n=l.data==="F!";break t}}Wa(n)}n=!1}n&&(e=a[0])}}return a=re(),a.memoizedState=a.baseState=e,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jf,lastRenderedState:e},a.queue=n,a=pd.bind(null,rt,n),n.dispatch=a,n=zc(!1),u=Oc.bind(null,rt,!1,n.queue),n=re(),l={state:e,dispatch:null,action:t,pending:null},n.queue=l,a=x1.bind(null,rt,l,u,a),l.dispatch=a,n.memoizedState=t,[e,a,!1]}function Ff(t){var e=Nt();return Pf(e,Tt,t)}function Pf(t,e,a){if(e=Sc(t,e,Jf)[0],t=Vi(aa)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var n=jl(e)}catch(s){throw s===El?qi:s}else n=e;e=Nt();var l=e.queue,u=l.dispatch;return a!==e.memoizedState&&(rt.flags|=2048,Dn(9,Zi(),y1.bind(null,l,a),null)),[n,u,t]}function y1(t,e){t.action=e}function If(t){var e=Nt(),a=Tt;if(a!==null)return Pf(e,a,t);Nt(),e=e.memoizedState,a=Nt();var n=a.queue.dispatch;return a.memoizedState=t,[e,n,!1]}function Dn(t,e,a,n){return t={tag:t,create:a,deps:n,inst:e,next:null},e=rt.updateQueue,e===null&&(e=bc(),rt.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(n=a.next,a.next=t,t.next=n,e.lastEffect=t),t}function Zi(){return{destroy:void 0,resource:void 0}}function td(){return Nt().memoizedState}function $i(t,e,a,n){var l=re();n=n===void 0?null:n,rt.flags|=t,l.memoizedState=Dn(1|e,Zi(),a,n)}function Dl(t,e,a,n){var l=Nt();n=n===void 0?null:n;var u=l.memoizedState.inst;Tt!==null&&n!==null&&mc(n,Tt.memoizedState.deps)?l.memoizedState=Dn(e,u,a,n):(rt.flags|=t,l.memoizedState=Dn(1|e,u,a,n))}function ed(t,e){$i(8390656,8,t,e)}function ad(t,e){Dl(2048,8,t,e)}function nd(t,e){return Dl(4,2,t,e)}function ld(t,e){return Dl(4,4,t,e)}function id(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ud(t,e,a){a=a!=null?a.concat([t]):null,Dl(4,4,id.bind(null,e,t),a)}function Ec(){}function rd(t,e){var a=Nt();e=e===void 0?null:e;var n=a.memoizedState;return e!==null&&mc(e,n[1])?n[0]:(a.memoizedState=[t,e],t)}function cd(t,e){var a=Nt();e=e===void 0?null:e;var n=a.memoizedState;if(e!==null&&mc(e,n[1]))return n[0];if(n=t(),tn){ma(!0);try{t()}finally{ma(!1)}}return a.memoizedState=[n,e],n}function Mc(t,e,a){return a===void 0||(Sa&1073741824)!==0?t.memoizedState=e:(t.memoizedState=a,t=f0(),rt.lanes|=t,ka|=t,a)}function od(t,e,a,n){return he(a,e)?a:On.current!==null?(t=Mc(t,a,n),he(t,e)||(Qt=!0),t):(Sa&42)===0?(Qt=!0,t.memoizedState=a):(t=f0(),rt.lanes|=t,ka|=t,e)}function sd(t,e,a,n,l){var u=Q.p;Q.p=u!==0&&8>u?u:8;var s=j.T,d={};j.T=d,Oc(t,!1,e,a);try{var g=l(),E=j.S;if(E!==null&&E(d,g),g!==null&&typeof g=="object"&&typeof g.then=="function"){var D=m1(g,n);_l(t,e,D,ye(t))}else _l(t,e,n,ye(t))}catch(N){_l(t,e,{then:function(){},status:"rejected",reason:N},ye())}finally{Q.p=u,j.T=s}}function b1(){}function Ac(t,e,a,n){if(t.tag!==5)throw Error(c(476));var l=fd(t).queue;sd(t,l,e,I,a===null?b1:function(){return dd(t),a(n)})}function fd(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:I,baseState:I,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:I},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function dd(t){var e=fd(t).next.queue;_l(t,e,{},ye())}function kc(){return te(Fl)}function hd(){return Nt().memoizedState}function md(){return Nt().memoizedState}function v1(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=ye();t=ba(a);var n=va(e,t,a);n!==null&&(be(n,e,a),Al(n,e,a)),e={cache:lc()},t.payload=e;return}e=e.return}}function S1(t,e,a){var n=ye();a={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Ji(t)?gd(e,a):(a=$r(t,e,a,n),a!==null&&(be(a,t,n),xd(a,e,n)))}function pd(t,e,a){var n=ye();_l(t,e,a,n)}function _l(t,e,a,n){var l={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ji(t))gd(e,l);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=e.lastRenderedReducer,u!==null))try{var s=e.lastRenderedState,d=u(s,a);if(l.hasEagerState=!0,l.eagerState=d,he(d,s))return Di(t,e,l,0),Mt===null&&ji(),!1}catch{}finally{}if(a=$r(t,e,l,n),a!==null)return be(a,t,n),xd(a,e,n),!0}return!1}function Oc(t,e,a,n){if(n={lane:2,revertLane:ro(),action:n,hasEagerState:!1,eagerState:null,next:null},Ji(t)){if(e)throw Error(c(479))}else e=$r(t,a,n,2),e!==null&&be(e,t,2)}function Ji(t){var e=t.alternate;return t===rt||e!==null&&e===rt}function gd(t,e){Rn=Xi=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function xd(t,e,a){if((a&4194048)!==0){var n=e.lanes;n&=t.pendingLanes,a|=n,e.lanes=a,ws(t,a)}}var Wi={readContext:te,use:Ki,useCallback:_t,useContext:_t,useEffect:_t,useImperativeHandle:_t,useLayoutEffect:_t,useInsertionEffect:_t,useMemo:_t,useReducer:_t,useRef:_t,useState:_t,useDebugValue:_t,useDeferredValue:_t,useTransition:_t,useSyncExternalStore:_t,useId:_t,useHostTransitionStatus:_t,useFormState:_t,useActionState:_t,useOptimistic:_t,useMemoCache:_t,useCacheRefresh:_t},yd={readContext:te,use:Ki,useCallback:function(t,e){return re().memoizedState=[t,e===void 0?null:e],t},useContext:te,useEffect:ed,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,$i(4194308,4,id.bind(null,e,t),a)},useLayoutEffect:function(t,e){return $i(4194308,4,t,e)},useInsertionEffect:function(t,e){$i(4,2,t,e)},useMemo:function(t,e){var a=re();e=e===void 0?null:e;var n=t();if(tn){ma(!0);try{t()}finally{ma(!1)}}return a.memoizedState=[n,e],n},useReducer:function(t,e,a){var n=re();if(a!==void 0){var l=a(e);if(tn){ma(!0);try{a(e)}finally{ma(!1)}}}else l=e;return n.memoizedState=n.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},n.queue=t,t=t.dispatch=S1.bind(null,rt,t),[n.memoizedState,t]},useRef:function(t){var e=re();return t={current:t},e.memoizedState=t},useState:function(t){t=zc(t);var e=t.queue,a=pd.bind(null,rt,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:Ec,useDeferredValue:function(t,e){var a=re();return Mc(a,t,e)},useTransition:function(){var t=zc(!1);return t=sd.bind(null,rt,t.queue,!0,!1),re().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var n=rt,l=re();if(pt){if(a===void 0)throw Error(c(407));a=a()}else{if(a=e(),Mt===null)throw Error(c(349));(ht&124)!==0||Bf(n,e,a)}l.memoizedState=a;var u={value:a,getSnapshot:e};return l.queue=u,ed(Gf.bind(null,n,u,t),[t]),n.flags|=2048,Dn(9,Zi(),qf.bind(null,n,u,a,e),null),a},useId:function(){var t=re(),e=Mt.identifierPrefix;if(pt){var a=Ie,n=Pe;a=(n&~(1<<32-de(n)-1)).toString(32)+a,e="«"+e+"R"+a,a=Qi++,0<a&&(e+="H"+a.toString(32)),e+="»"}else a=p1++,e="«"+e+"r"+a.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:kc,useFormState:Wf,useActionState:Wf,useOptimistic:function(t){var e=re();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=Oc.bind(null,rt,!0,a),a.dispatch=e,[t,e]},useMemoCache:vc,useCacheRefresh:function(){return re().memoizedState=v1.bind(null,rt)}},bd={readContext:te,use:Ki,useCallback:rd,useContext:te,useEffect:ad,useImperativeHandle:ud,useInsertionEffect:nd,useLayoutEffect:ld,useMemo:cd,useReducer:Vi,useRef:td,useState:function(){return Vi(aa)},useDebugValue:Ec,useDeferredValue:function(t,e){var a=Nt();return od(a,Tt.memoizedState,t,e)},useTransition:function(){var t=Vi(aa)[0],e=Nt().memoizedState;return[typeof t=="boolean"?t:jl(t),e]},useSyncExternalStore:Hf,useId:hd,useHostTransitionStatus:kc,useFormState:Ff,useActionState:Ff,useOptimistic:function(t,e){var a=Nt();return Qf(a,Tt,t,e)},useMemoCache:vc,useCacheRefresh:md},T1={readContext:te,use:Ki,useCallback:rd,useContext:te,useEffect:ad,useImperativeHandle:ud,useInsertionEffect:nd,useLayoutEffect:ld,useMemo:cd,useReducer:Tc,useRef:td,useState:function(){return Tc(aa)},useDebugValue:Ec,useDeferredValue:function(t,e){var a=Nt();return Tt===null?Mc(a,t,e):od(a,Tt.memoizedState,t,e)},useTransition:function(){var t=Tc(aa)[0],e=Nt().memoizedState;return[typeof t=="boolean"?t:jl(t),e]},useSyncExternalStore:Hf,useId:hd,useHostTransitionStatus:kc,useFormState:If,useActionState:If,useOptimistic:function(t,e){var a=Nt();return Tt!==null?Qf(a,Tt,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:vc,useCacheRefresh:md},_n=null,Cl=0;function Fi(t){var e=Cl;return Cl+=1,_n===null&&(_n=[]),Rf(_n,t,e)}function Ul(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Pi(t,e){throw e.$$typeof===U?Error(c(525)):(t=Object.prototype.toString.call(e),Error(c(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function vd(t){var e=t._init;return e(t._payload)}function Sd(t){function e(S,v){if(t){var z=S.deletions;z===null?(S.deletions=[v],S.flags|=16):z.push(v)}}function a(S,v){if(!t)return null;for(;v!==null;)e(S,v),v=v.sibling;return null}function n(S){for(var v=new Map;S!==null;)S.key!==null?v.set(S.key,S):v.set(S.index,S),S=S.sibling;return v}function l(S,v){return S=Fe(S,v),S.index=0,S.sibling=null,S}function u(S,v,z){return S.index=z,t?(z=S.alternate,z!==null?(z=z.index,z<v?(S.flags|=67108866,v):z):(S.flags|=67108866,v)):(S.flags|=1048576,v)}function s(S){return t&&S.alternate===null&&(S.flags|=67108866),S}function d(S,v,z,C){return v===null||v.tag!==6?(v=Wr(z,S.mode,C),v.return=S,v):(v=l(v,z),v.return=S,v)}function g(S,v,z,C){var $=z.type;return $===R?D(S,v,z.props.children,C,z.key):v!==null&&(v.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===St&&vd($)===v.type)?(v=l(v,z.props),Ul(v,z),v.return=S,v):(v=Ci(z.type,z.key,z.props,null,S.mode,C),Ul(v,z),v.return=S,v)}function E(S,v,z,C){return v===null||v.tag!==4||v.stateNode.containerInfo!==z.containerInfo||v.stateNode.implementation!==z.implementation?(v=Fr(z,S.mode,C),v.return=S,v):(v=l(v,z.children||[]),v.return=S,v)}function D(S,v,z,C,$){return v===null||v.tag!==7?(v=Va(z,S.mode,C,$),v.return=S,v):(v=l(v,z),v.return=S,v)}function N(S,v,z){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=Wr(""+v,S.mode,z),v.return=S,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case k:return z=Ci(v.type,v.key,v.props,null,S.mode,z),Ul(z,v),z.return=S,z;case H:return v=Fr(v,S.mode,z),v.return=S,v;case St:var C=v._init;return v=C(v._payload),N(S,v,z)}if(Gt(v)||qt(v))return v=Va(v,S.mode,z,null),v.return=S,v;if(typeof v.then=="function")return N(S,Fi(v),z);if(v.$$typeof===q)return N(S,Hi(S,v),z);Pi(S,v)}return null}function M(S,v,z,C){var $=v!==null?v.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return $!==null?null:d(S,v,""+z,C);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case k:return z.key===$?g(S,v,z,C):null;case H:return z.key===$?E(S,v,z,C):null;case St:return $=z._init,z=$(z._payload),M(S,v,z,C)}if(Gt(z)||qt(z))return $!==null?null:D(S,v,z,C,null);if(typeof z.then=="function")return M(S,v,Fi(z),C);if(z.$$typeof===q)return M(S,v,Hi(S,z),C);Pi(S,z)}return null}function A(S,v,z,C,$){if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return S=S.get(z)||null,d(v,S,""+C,$);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case k:return S=S.get(C.key===null?z:C.key)||null,g(v,S,C,$);case H:return S=S.get(C.key===null?z:C.key)||null,E(v,S,C,$);case St:var ct=C._init;return C=ct(C._payload),A(S,v,z,C,$)}if(Gt(C)||qt(C))return S=S.get(z)||null,D(v,S,C,$,null);if(typeof C.then=="function")return A(S,v,z,Fi(C),$);if(C.$$typeof===q)return A(S,v,z,Hi(v,C),$);Pi(v,C)}return null}function lt(S,v,z,C){for(var $=null,ct=null,W=v,at=v=0,Vt=null;W!==null&&at<z.length;at++){W.index>at?(Vt=W,W=null):Vt=W.sibling;var mt=M(S,W,z[at],C);if(mt===null){W===null&&(W=Vt);break}t&&W&&mt.alternate===null&&e(S,W),v=u(mt,v,at),ct===null?$=mt:ct.sibling=mt,ct=mt,W=Vt}if(at===z.length)return a(S,W),pt&&$a(S,at),$;if(W===null){for(;at<z.length;at++)W=N(S,z[at],C),W!==null&&(v=u(W,v,at),ct===null?$=W:ct.sibling=W,ct=W);return pt&&$a(S,at),$}for(W=n(W);at<z.length;at++)Vt=A(W,S,at,z[at],C),Vt!==null&&(t&&Vt.alternate!==null&&W.delete(Vt.key===null?at:Vt.key),v=u(Vt,v,at),ct===null?$=Vt:ct.sibling=Vt,ct=Vt);return t&&W.forEach(function(Ya){return e(S,Ya)}),pt&&$a(S,at),$}function tt(S,v,z,C){if(z==null)throw Error(c(151));for(var $=null,ct=null,W=v,at=v=0,Vt=null,mt=z.next();W!==null&&!mt.done;at++,mt=z.next()){W.index>at?(Vt=W,W=null):Vt=W.sibling;var Ya=M(S,W,mt.value,C);if(Ya===null){W===null&&(W=Vt);break}t&&W&&Ya.alternate===null&&e(S,W),v=u(Ya,v,at),ct===null?$=Ya:ct.sibling=Ya,ct=Ya,W=Vt}if(mt.done)return a(S,W),pt&&$a(S,at),$;if(W===null){for(;!mt.done;at++,mt=z.next())mt=N(S,mt.value,C),mt!==null&&(v=u(mt,v,at),ct===null?$=mt:ct.sibling=mt,ct=mt);return pt&&$a(S,at),$}for(W=n(W);!mt.done;at++,mt=z.next())mt=A(W,S,at,mt.value,C),mt!==null&&(t&&mt.alternate!==null&&W.delete(mt.key===null?at:mt.key),v=u(mt,v,at),ct===null?$=mt:ct.sibling=mt,ct=mt);return t&&W.forEach(function(zg){return e(S,zg)}),pt&&$a(S,at),$}function wt(S,v,z,C){if(typeof z=="object"&&z!==null&&z.type===R&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case k:t:{for(var $=z.key;v!==null;){if(v.key===$){if($=z.type,$===R){if(v.tag===7){a(S,v.sibling),C=l(v,z.props.children),C.return=S,S=C;break t}}else if(v.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===St&&vd($)===v.type){a(S,v.sibling),C=l(v,z.props),Ul(C,z),C.return=S,S=C;break t}a(S,v);break}else e(S,v);v=v.sibling}z.type===R?(C=Va(z.props.children,S.mode,C,z.key),C.return=S,S=C):(C=Ci(z.type,z.key,z.props,null,S.mode,C),Ul(C,z),C.return=S,S=C)}return s(S);case H:t:{for($=z.key;v!==null;){if(v.key===$)if(v.tag===4&&v.stateNode.containerInfo===z.containerInfo&&v.stateNode.implementation===z.implementation){a(S,v.sibling),C=l(v,z.children||[]),C.return=S,S=C;break t}else{a(S,v);break}else e(S,v);v=v.sibling}C=Fr(z,S.mode,C),C.return=S,S=C}return s(S);case St:return $=z._init,z=$(z._payload),wt(S,v,z,C)}if(Gt(z))return lt(S,v,z,C);if(qt(z)){if($=qt(z),typeof $!="function")throw Error(c(150));return z=$.call(z),tt(S,v,z,C)}if(typeof z.then=="function")return wt(S,v,Fi(z),C);if(z.$$typeof===q)return wt(S,v,Hi(S,z),C);Pi(S,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,v!==null&&v.tag===6?(a(S,v.sibling),C=l(v,z),C.return=S,S=C):(a(S,v),C=Wr(z,S.mode,C),C.return=S,S=C),s(S)):a(S,v)}return function(S,v,z,C){try{Cl=0;var $=wt(S,v,z,C);return _n=null,$}catch(W){if(W===El||W===qi)throw W;var ct=me(29,W,null,S.mode);return ct.lanes=C,ct.return=S,ct}finally{}}}var Cn=Sd(!0),Td=Sd(!1),ke=Y(null),He=null;function Ta(t){var e=t.alternate;K(Bt,Bt.current&1),K(ke,t),He===null&&(e===null||On.current!==null||e.memoizedState!==null)&&(He=t)}function zd(t){if(t.tag===22){if(K(Bt,Bt.current),K(ke,t),He===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(He=t)}}else za()}function za(){K(Bt,Bt.current),K(ke,ke.current)}function na(t){X(ke),He===t&&(He=null),X(Bt)}var Bt=Y(0);function Ii(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||vo(a)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function Rc(t,e,a,n){e=t.memoizedState,a=a(n,e),a=a==null?e:w({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var jc={enqueueSetState:function(t,e,a){t=t._reactInternals;var n=ye(),l=ba(n);l.payload=e,a!=null&&(l.callback=a),e=va(t,l,n),e!==null&&(be(e,t,n),Al(e,t,n))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var n=ye(),l=ba(n);l.tag=1,l.payload=e,a!=null&&(l.callback=a),e=va(t,l,n),e!==null&&(be(e,t,n),Al(e,t,n))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=ye(),n=ba(a);n.tag=2,e!=null&&(n.callback=e),e=va(t,n,a),e!==null&&(be(e,t,a),Al(e,t,a))}};function wd(t,e,a,n,l,u,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,u,s):e.prototype&&e.prototype.isPureReactComponent?!xl(a,n)||!xl(l,u):!0}function Ed(t,e,a,n){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,n),e.state!==t&&jc.enqueueReplaceState(e,e.state,null)}function en(t,e){var a=e;if("ref"in e){a={};for(var n in e)n!=="ref"&&(a[n]=e[n])}if(t=t.defaultProps){a===e&&(a=w({},a));for(var l in t)a[l]===void 0&&(a[l]=t[l])}return a}var tu=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Md(t){tu(t)}function Ad(t){console.error(t)}function kd(t){tu(t)}function eu(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(n){setTimeout(function(){throw n})}}function Od(t,e,a){try{var n=t.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Dc(t,e,a){return a=ba(a),a.tag=3,a.payload={element:null},a.callback=function(){eu(t,e)},a}function Rd(t){return t=ba(t),t.tag=3,t}function jd(t,e,a,n){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var u=n.value;t.payload=function(){return l(u)},t.callback=function(){Od(e,a,n)}}var s=a.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Od(e,a,n),typeof l!="function"&&(Oa===null?Oa=new Set([this]):Oa.add(this));var d=n.stack;this.componentDidCatch(n.value,{componentStack:d!==null?d:""})})}function z1(t,e,a,n,l){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(e=a.alternate,e!==null&&Tl(e,a,l,!0),a=ke.current,a!==null){switch(a.tag){case 13:return He===null?ao():a.alternate===null&&Dt===0&&(Dt=3),a.flags&=-257,a.flags|=65536,a.lanes=l,n===rc?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([n]):e.add(n),lo(t,n,l)),!1;case 22:return a.flags|=65536,n===rc?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([n]):a.add(n)),lo(t,n,l)),!1}throw Error(c(435,a.tag))}return lo(t,n,l),ao(),!1}if(pt)return e=ke.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=l,n!==tc&&(t=Error(c(422),{cause:n}),Sl(we(t,a)))):(n!==tc&&(e=Error(c(423),{cause:n}),Sl(we(e,a))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,n=we(n,a),l=Dc(t.stateNode,n,l),sc(t,l),Dt!==4&&(Dt=2)),!1;var u=Error(c(520),{cause:n});if(u=we(u,a),Ll===null?Ll=[u]:Ll.push(u),Dt!==4&&(Dt=2),e===null)return!0;n=we(n,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=l&-l,a.lanes|=t,t=Dc(a.stateNode,n,t),sc(a,t),!1;case 1:if(e=a.type,u=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Oa===null||!Oa.has(u))))return a.flags|=65536,l&=-l,a.lanes|=l,l=Rd(l),jd(l,t,a,n),sc(a,l),!1}a=a.return}while(a!==null);return!1}var Dd=Error(c(461)),Qt=!1;function Jt(t,e,a,n){e.child=t===null?Td(e,null,a,n):Cn(e,t.child,a,n)}function _d(t,e,a,n,l){a=a.render;var u=e.ref;if("ref"in n){var s={};for(var d in n)d!=="ref"&&(s[d]=n[d])}else s=n;return Pa(e),n=pc(t,e,a,s,u,l),d=gc(),t!==null&&!Qt?(xc(t,e,l),la(t,e,l)):(pt&&d&&Pr(e),e.flags|=1,Jt(t,e,n,l),e.child)}function Cd(t,e,a,n,l){if(t===null){var u=a.type;return typeof u=="function"&&!Jr(u)&&u.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=u,Ud(t,e,u,n,l)):(t=Ci(a.type,null,n,e,e.mode,l),t.ref=e.ref,t.return=e,e.child=t)}if(u=t.child,!qc(t,l)){var s=u.memoizedProps;if(a=a.compare,a=a!==null?a:xl,a(s,n)&&t.ref===e.ref)return la(t,e,l)}return e.flags|=1,t=Fe(u,n),t.ref=e.ref,t.return=e,e.child=t}function Ud(t,e,a,n,l){if(t!==null){var u=t.memoizedProps;if(xl(u,n)&&t.ref===e.ref)if(Qt=!1,e.pendingProps=n=u,qc(t,l))(t.flags&131072)!==0&&(Qt=!0);else return e.lanes=t.lanes,la(t,e,l)}return _c(t,e,a,n,l)}function Nd(t,e,a){var n=e.pendingProps,l=n.children,u=t!==null?t.memoizedState:null;if(n.mode==="hidden"){if((e.flags&128)!==0){if(n=u!==null?u.baseLanes|a:a,t!==null){for(l=e.child=t.child,u=0;l!==null;)u=u|l.lanes|l.childLanes,l=l.sibling;e.childLanes=u&~n}else e.childLanes=0,e.child=null;return Yd(t,e,n,a)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Bi(e,u!==null?u.cachePool:null),u!==null?Uf(e,u):dc(),zd(e);else return e.lanes=e.childLanes=536870912,Yd(t,e,u!==null?u.baseLanes|a:a,a)}else u!==null?(Bi(e,u.cachePool),Uf(e,u),za(),e.memoizedState=null):(t!==null&&Bi(e,null),dc(),za());return Jt(t,e,l,a),e.child}function Yd(t,e,a,n){var l=uc();return l=l===null?null:{parent:Ht._currentValue,pool:l},e.memoizedState={baseLanes:a,cachePool:l},t!==null&&Bi(e,null),dc(),zd(e),t!==null&&Tl(t,e,n,!0),null}function au(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(c(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function _c(t,e,a,n,l){return Pa(e),a=pc(t,e,a,n,void 0,l),n=gc(),t!==null&&!Qt?(xc(t,e,l),la(t,e,l)):(pt&&n&&Pr(e),e.flags|=1,Jt(t,e,a,l),e.child)}function Hd(t,e,a,n,l,u){return Pa(e),e.updateQueue=null,a=Yf(e,n,a,l),Nf(t),n=gc(),t!==null&&!Qt?(xc(t,e,u),la(t,e,u)):(pt&&n&&Pr(e),e.flags|=1,Jt(t,e,a,u),e.child)}function Bd(t,e,a,n,l){if(Pa(e),e.stateNode===null){var u=wn,s=a.contextType;typeof s=="object"&&s!==null&&(u=te(s)),u=new a(n,u),e.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=jc,e.stateNode=u,u._reactInternals=e,u=e.stateNode,u.props=n,u.state=e.memoizedState,u.refs={},cc(e),s=a.contextType,u.context=typeof s=="object"&&s!==null?te(s):wn,u.state=e.memoizedState,s=a.getDerivedStateFromProps,typeof s=="function"&&(Rc(e,a,s,n),u.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(s=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),s!==u.state&&jc.enqueueReplaceState(u,u.state,null),Ol(e,n,u,l),kl(),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308),n=!0}else if(t===null){u=e.stateNode;var d=e.memoizedProps,g=en(a,d);u.props=g;var E=u.context,D=a.contextType;s=wn,typeof D=="object"&&D!==null&&(s=te(D));var N=a.getDerivedStateFromProps;D=typeof N=="function"||typeof u.getSnapshotBeforeUpdate=="function",d=e.pendingProps!==d,D||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(d||E!==s)&&Ed(e,u,n,s),ya=!1;var M=e.memoizedState;u.state=M,Ol(e,n,u,l),kl(),E=e.memoizedState,d||M!==E||ya?(typeof N=="function"&&(Rc(e,a,N,n),E=e.memoizedState),(g=ya||wd(e,a,g,n,M,E,s))?(D||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(e.flags|=4194308)):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=E),u.props=n,u.state=E,u.context=s,n=g):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{u=e.stateNode,oc(t,e),s=e.memoizedProps,D=en(a,s),u.props=D,N=e.pendingProps,M=u.context,E=a.contextType,g=wn,typeof E=="object"&&E!==null&&(g=te(E)),d=a.getDerivedStateFromProps,(E=typeof d=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(s!==N||M!==g)&&Ed(e,u,n,g),ya=!1,M=e.memoizedState,u.state=M,Ol(e,n,u,l),kl();var A=e.memoizedState;s!==N||M!==A||ya||t!==null&&t.dependencies!==null&&Yi(t.dependencies)?(typeof d=="function"&&(Rc(e,a,d,n),A=e.memoizedState),(D=ya||wd(e,a,D,n,M,A,g)||t!==null&&t.dependencies!==null&&Yi(t.dependencies))?(E||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(n,A,g),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(n,A,g)),typeof u.componentDidUpdate=="function"&&(e.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof u.componentDidUpdate!="function"||s===t.memoizedProps&&M===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&M===t.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=A),u.props=n,u.state=A,u.context=g,n=D):(typeof u.componentDidUpdate!="function"||s===t.memoizedProps&&M===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&M===t.memoizedState||(e.flags|=1024),n=!1)}return u=n,au(t,e),n=(e.flags&128)!==0,u||n?(u=e.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:u.render(),e.flags|=1,t!==null&&n?(e.child=Cn(e,t.child,null,l),e.child=Cn(e,null,a,l)):Jt(t,e,a,l),e.memoizedState=u.state,t=e.child):t=la(t,e,l),t}function qd(t,e,a,n){return vl(),e.flags|=256,Jt(t,e,a,n),e.child}var Cc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Uc(t){return{baseLanes:t,cachePool:Af()}}function Nc(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=Oe),t}function Gd(t,e,a){var n=e.pendingProps,l=!1,u=(e.flags&128)!==0,s;if((s=u)||(s=t!==null&&t.memoizedState===null?!1:(Bt.current&2)!==0),s&&(l=!0,e.flags&=-129),s=(e.flags&32)!==0,e.flags&=-33,t===null){if(pt){if(l?Ta(e):za(),pt){var d=jt,g;if(g=d){t:{for(g=d,d=Ye;g.nodeType!==8;){if(!d){d=null;break t}if(g=Ce(g.nextSibling),g===null){d=null;break t}}d=g}d!==null?(e.memoizedState={dehydrated:d,treeContext:Za!==null?{id:Pe,overflow:Ie}:null,retryLane:536870912,hydrationErrors:null},g=me(18,null,null,0),g.stateNode=d,g.return=e,e.child=g,ae=e,jt=null,g=!0):g=!1}g||Wa(e)}if(d=e.memoizedState,d!==null&&(d=d.dehydrated,d!==null))return vo(d)?e.lanes=32:e.lanes=536870912,null;na(e)}return d=n.children,n=n.fallback,l?(za(),l=e.mode,d=nu({mode:"hidden",children:d},l),n=Va(n,l,a,null),d.return=e,n.return=e,d.sibling=n,e.child=d,l=e.child,l.memoizedState=Uc(a),l.childLanes=Nc(t,s,a),e.memoizedState=Cc,n):(Ta(e),Yc(e,d))}if(g=t.memoizedState,g!==null&&(d=g.dehydrated,d!==null)){if(u)e.flags&256?(Ta(e),e.flags&=-257,e=Hc(t,e,a)):e.memoizedState!==null?(za(),e.child=t.child,e.flags|=128,e=null):(za(),l=n.fallback,d=e.mode,n=nu({mode:"visible",children:n.children},d),l=Va(l,d,a,null),l.flags|=2,n.return=e,l.return=e,n.sibling=l,e.child=n,Cn(e,t.child,null,a),n=e.child,n.memoizedState=Uc(a),n.childLanes=Nc(t,s,a),e.memoizedState=Cc,e=l);else if(Ta(e),vo(d)){if(s=d.nextSibling&&d.nextSibling.dataset,s)var E=s.dgst;s=E,n=Error(c(419)),n.stack="",n.digest=s,Sl({value:n,source:null,stack:null}),e=Hc(t,e,a)}else if(Qt||Tl(t,e,a,!1),s=(a&t.childLanes)!==0,Qt||s){if(s=Mt,s!==null&&(n=a&-a,n=(n&42)!==0?1:vr(n),n=(n&(s.suspendedLanes|a))!==0?0:n,n!==0&&n!==g.retryLane))throw g.retryLane=n,zn(t,n),be(s,t,n),Dd;d.data==="$?"||ao(),e=Hc(t,e,a)}else d.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=g.treeContext,jt=Ce(d.nextSibling),ae=e,pt=!0,Ja=null,Ye=!1,t!==null&&(Me[Ae++]=Pe,Me[Ae++]=Ie,Me[Ae++]=Za,Pe=t.id,Ie=t.overflow,Za=e),e=Yc(e,n.children),e.flags|=4096);return e}return l?(za(),l=n.fallback,d=e.mode,g=t.child,E=g.sibling,n=Fe(g,{mode:"hidden",children:n.children}),n.subtreeFlags=g.subtreeFlags&65011712,E!==null?l=Fe(E,l):(l=Va(l,d,a,null),l.flags|=2),l.return=e,n.return=e,n.sibling=l,e.child=n,n=l,l=e.child,d=t.child.memoizedState,d===null?d=Uc(a):(g=d.cachePool,g!==null?(E=Ht._currentValue,g=g.parent!==E?{parent:E,pool:E}:g):g=Af(),d={baseLanes:d.baseLanes|a,cachePool:g}),l.memoizedState=d,l.childLanes=Nc(t,s,a),e.memoizedState=Cc,n):(Ta(e),a=t.child,t=a.sibling,a=Fe(a,{mode:"visible",children:n.children}),a.return=e,a.sibling=null,t!==null&&(s=e.deletions,s===null?(e.deletions=[t],e.flags|=16):s.push(t)),e.child=a,e.memoizedState=null,a)}function Yc(t,e){return e=nu({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function nu(t,e){return t=me(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Hc(t,e,a){return Cn(e,t.child,null,a),t=Yc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ld(t,e,a){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),ac(t.return,e,a)}function Bc(t,e,a,n,l){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:l}:(u.isBackwards=e,u.rendering=null,u.renderingStartTime=0,u.last=n,u.tail=a,u.tailMode=l)}function Xd(t,e,a){var n=e.pendingProps,l=n.revealOrder,u=n.tail;if(Jt(t,e,n.children,a),n=Bt.current,(n&2)!==0)n=n&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ld(t,a,e);else if(t.tag===19)Ld(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}n&=1}switch(K(Bt,n),l){case"forwards":for(a=e.child,l=null;a!==null;)t=a.alternate,t!==null&&Ii(t)===null&&(l=a),a=a.sibling;a=l,a===null?(l=e.child,e.child=null):(l=a.sibling,a.sibling=null),Bc(e,!1,l,a,u);break;case"backwards":for(a=null,l=e.child,e.child=null;l!==null;){if(t=l.alternate,t!==null&&Ii(t)===null){e.child=l;break}t=l.sibling,l.sibling=a,a=l,l=t}Bc(e,!0,a,null,u);break;case"together":Bc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function la(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),ka|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(Tl(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(c(153));if(e.child!==null){for(t=e.child,a=Fe(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=Fe(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function qc(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Yi(t)))}function w1(t,e,a){switch(e.tag){case 3:gt(e,e.stateNode.containerInfo),xa(e,Ht,t.memoizedState.cache),vl();break;case 27:case 5:qa(e);break;case 4:gt(e,e.stateNode.containerInfo);break;case 10:xa(e,e.type,e.memoizedProps.value);break;case 13:var n=e.memoizedState;if(n!==null)return n.dehydrated!==null?(Ta(e),e.flags|=128,null):(a&e.child.childLanes)!==0?Gd(t,e,a):(Ta(e),t=la(t,e,a),t!==null?t.sibling:null);Ta(e);break;case 19:var l=(t.flags&128)!==0;if(n=(a&e.childLanes)!==0,n||(Tl(t,e,a,!1),n=(a&e.childLanes)!==0),l){if(n)return Xd(t,e,a);e.flags|=128}if(l=e.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),K(Bt,Bt.current),n)break;return null;case 22:case 23:return e.lanes=0,Nd(t,e,a);case 24:xa(e,Ht,t.memoizedState.cache)}return la(t,e,a)}function Qd(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)Qt=!0;else{if(!qc(t,a)&&(e.flags&128)===0)return Qt=!1,w1(t,e,a);Qt=(t.flags&131072)!==0}else Qt=!1,pt&&(e.flags&1048576)!==0&&vf(e,Ni,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var n=e.elementType,l=n._init;if(n=l(n._payload),e.type=n,typeof n=="function")Jr(n)?(t=en(n,t),e.tag=1,e=Bd(null,e,n,t,a)):(e.tag=0,e=_c(null,e,n,t,a));else{if(n!=null){if(l=n.$$typeof,l===F){e.tag=11,e=_d(null,e,n,t,a);break t}else if(l===J){e.tag=14,e=Cd(null,e,n,t,a);break t}}throw e=Ze(n)||n,Error(c(306,e,""))}}return e;case 0:return _c(t,e,e.type,e.pendingProps,a);case 1:return n=e.type,l=en(n,e.pendingProps),Bd(t,e,n,l,a);case 3:t:{if(gt(e,e.stateNode.containerInfo),t===null)throw Error(c(387));n=e.pendingProps;var u=e.memoizedState;l=u.element,oc(t,e),Ol(e,n,null,a);var s=e.memoizedState;if(n=s.cache,xa(e,Ht,n),n!==u.cache&&nc(e,[Ht],a,!0),kl(),n=s.element,u.isDehydrated)if(u={element:n,isDehydrated:!1,cache:s.cache},e.updateQueue.baseState=u,e.memoizedState=u,e.flags&256){e=qd(t,e,n,a);break t}else if(n!==l){l=we(Error(c(424)),e),Sl(l),e=qd(t,e,n,a);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(jt=Ce(t.firstChild),ae=e,pt=!0,Ja=null,Ye=!0,a=Td(e,null,n,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(vl(),n===l){e=la(t,e,a);break t}Jt(t,e,n,a)}e=e.child}return e;case 26:return au(t,e),t===null?(a=$0(e.type,null,e.pendingProps,null))?e.memoizedState=a:pt||(a=e.type,t=e.pendingProps,n=xu(et.current).createElement(a),n[It]=e,n[ie]=t,Ft(n,a,t),Xt(n),e.stateNode=n):e.memoizedState=$0(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return qa(e),t===null&&pt&&(n=e.stateNode=K0(e.type,e.pendingProps,et.current),ae=e,Ye=!0,l=jt,Da(e.type)?(So=l,jt=Ce(n.firstChild)):jt=l),Jt(t,e,e.pendingProps.children,a),au(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&pt&&((l=n=jt)&&(n=P1(n,e.type,e.pendingProps,Ye),n!==null?(e.stateNode=n,ae=e,jt=Ce(n.firstChild),Ye=!1,l=!0):l=!1),l||Wa(e)),qa(e),l=e.type,u=e.pendingProps,s=t!==null?t.memoizedProps:null,n=u.children,xo(l,u)?n=null:s!==null&&xo(l,s)&&(e.flags|=32),e.memoizedState!==null&&(l=pc(t,e,g1,null,null,a),Fl._currentValue=l),au(t,e),Jt(t,e,n,a),e.child;case 6:return t===null&&pt&&((t=a=jt)&&(a=I1(a,e.pendingProps,Ye),a!==null?(e.stateNode=a,ae=e,jt=null,t=!0):t=!1),t||Wa(e)),null;case 13:return Gd(t,e,a);case 4:return gt(e,e.stateNode.containerInfo),n=e.pendingProps,t===null?e.child=Cn(e,null,n,a):Jt(t,e,n,a),e.child;case 11:return _d(t,e,e.type,e.pendingProps,a);case 7:return Jt(t,e,e.pendingProps,a),e.child;case 8:return Jt(t,e,e.pendingProps.children,a),e.child;case 12:return Jt(t,e,e.pendingProps.children,a),e.child;case 10:return n=e.pendingProps,xa(e,e.type,n.value),Jt(t,e,n.children,a),e.child;case 9:return l=e.type._context,n=e.pendingProps.children,Pa(e),l=te(l),n=n(l),e.flags|=1,Jt(t,e,n,a),e.child;case 14:return Cd(t,e,e.type,e.pendingProps,a);case 15:return Ud(t,e,e.type,e.pendingProps,a);case 19:return Xd(t,e,a);case 31:return n=e.pendingProps,a=e.mode,n={mode:n.mode,children:n.children},t===null?(a=nu(n,a),a.ref=e.ref,e.child=a,a.return=e,e=a):(a=Fe(t.child,n),a.ref=e.ref,e.child=a,a.return=e,e=a),e;case 22:return Nd(t,e,a);case 24:return Pa(e),n=te(Ht),t===null?(l=uc(),l===null&&(l=Mt,u=lc(),l.pooledCache=u,u.refCount++,u!==null&&(l.pooledCacheLanes|=a),l=u),e.memoizedState={parent:n,cache:l},cc(e),xa(e,Ht,l)):((t.lanes&a)!==0&&(oc(t,e),Ol(e,null,null,a),kl()),l=t.memoizedState,u=e.memoizedState,l.parent!==n?(l={parent:n,cache:n},e.memoizedState=l,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=l),xa(e,Ht,n)):(n=u.cache,xa(e,Ht,n),n!==l.cache&&nc(e,[Ht],a,!0))),Jt(t,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(c(156,e.tag))}function ia(t){t.flags|=4}function Kd(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!I0(e)){if(e=ke.current,e!==null&&((ht&4194048)===ht?He!==null:(ht&62914560)!==ht&&(ht&536870912)===0||e!==He))throw Ml=rc,kf;t.flags|=8192}}function lu(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Ts():536870912,t.lanes|=e,Hn|=e)}function Nl(t,e){if(!pt)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function Ot(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,n=0;if(e)for(var l=t.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags&65011712,n|=l.flags&65011712,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags,n|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=n,t.childLanes=a,e}function E1(t,e,a){var n=e.pendingProps;switch(Ir(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(e),null;case 1:return Ot(e),null;case 3:return a=e.stateNode,n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),ea(Ht),Pt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(bl(e)?ia(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,zf())),Ot(e),null;case 26:return a=e.memoizedState,t===null?(ia(e),a!==null?(Ot(e),Kd(e,a)):(Ot(e),e.flags&=-16777217)):a?a!==t.memoizedState?(ia(e),Ot(e),Kd(e,a)):(Ot(e),e.flags&=-16777217):(t.memoizedProps!==n&&ia(e),Ot(e),e.flags&=-16777217),null;case 27:$e(e),a=et.current;var l=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==n&&ia(e);else{if(!n){if(e.stateNode===null)throw Error(c(166));return Ot(e),null}t=P.current,bl(e)?Sf(e):(t=K0(l,n,a),e.stateNode=t,ia(e))}return Ot(e),null;case 5:if($e(e),a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==n&&ia(e);else{if(!n){if(e.stateNode===null)throw Error(c(166));return Ot(e),null}if(t=P.current,bl(e))Sf(e);else{switch(l=xu(et.current),t){case 1:t=l.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=l.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=l.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=l.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof n.is=="string"?l.createElement("select",{is:n.is}):l.createElement("select"),n.multiple?t.multiple=!0:n.size&&(t.size=n.size);break;default:t=typeof n.is=="string"?l.createElement(a,{is:n.is}):l.createElement(a)}}t[It]=e,t[ie]=n;t:for(l=e.child;l!==null;){if(l.tag===5||l.tag===6)t.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===e)break t;for(;l.sibling===null;){if(l.return===null||l.return===e)break t;l=l.return}l.sibling.return=l.return,l=l.sibling}e.stateNode=t;t:switch(Ft(t,a,n),a){case"button":case"input":case"select":case"textarea":t=!!n.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&ia(e)}}return Ot(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==n&&ia(e);else{if(typeof n!="string"&&e.stateNode===null)throw Error(c(166));if(t=et.current,bl(e)){if(t=e.stateNode,a=e.memoizedProps,n=null,l=ae,l!==null)switch(l.tag){case 27:case 5:n=l.memoizedProps}t[It]=e,t=!!(t.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||H0(t.nodeValue,a)),t||Wa(e)}else t=xu(t).createTextNode(n),t[It]=e,e.stateNode=t}return Ot(e),null;case 13:if(n=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=bl(e),n!==null&&n.dehydrated!==null){if(t===null){if(!l)throw Error(c(318));if(l=e.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(c(317));l[It]=e}else vl(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Ot(e),l=!1}else l=zf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),l=!0;if(!l)return e.flags&256?(na(e),e):(na(e),null)}if(na(e),(e.flags&128)!==0)return e.lanes=a,e;if(a=n!==null,t=t!==null&&t.memoizedState!==null,a){n=e.child,l=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(l=n.alternate.memoizedState.cachePool.pool);var u=null;n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(u=n.memoizedState.cachePool.pool),u!==l&&(n.flags|=2048)}return a!==t&&a&&(e.child.flags|=8192),lu(e,e.updateQueue),Ot(e),null;case 4:return Pt(),t===null&&fo(e.stateNode.containerInfo),Ot(e),null;case 10:return ea(e.type),Ot(e),null;case 19:if(X(Bt),l=e.memoizedState,l===null)return Ot(e),null;if(n=(e.flags&128)!==0,u=l.rendering,u===null)if(n)Nl(l,!1);else{if(Dt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(u=Ii(t),u!==null){for(e.flags|=128,Nl(l,!1),t=u.updateQueue,e.updateQueue=t,lu(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)bf(a,t),a=a.sibling;return K(Bt,Bt.current&1|2),e.child}t=t.sibling}l.tail!==null&&Ne()>ru&&(e.flags|=128,n=!0,Nl(l,!1),e.lanes=4194304)}else{if(!n)if(t=Ii(u),t!==null){if(e.flags|=128,n=!0,t=t.updateQueue,e.updateQueue=t,lu(e,t),Nl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!u.alternate&&!pt)return Ot(e),null}else 2*Ne()-l.renderingStartTime>ru&&a!==536870912&&(e.flags|=128,n=!0,Nl(l,!1),e.lanes=4194304);l.isBackwards?(u.sibling=e.child,e.child=u):(t=l.last,t!==null?t.sibling=u:e.child=u,l.last=u)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Ne(),e.sibling=null,t=Bt.current,K(Bt,n?t&1|2:t&1),e):(Ot(e),null);case 22:case 23:return na(e),hc(),n=e.memoizedState!==null,t!==null?t.memoizedState!==null!==n&&(e.flags|=8192):n&&(e.flags|=8192),n?(a&536870912)!==0&&(e.flags&128)===0&&(Ot(e),e.subtreeFlags&6&&(e.flags|=8192)):Ot(e),a=e.updateQueue,a!==null&&lu(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==a&&(e.flags|=2048),t!==null&&X(Ia),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),ea(Ht),Ot(e),null;case 25:return null;case 30:return null}throw Error(c(156,e.tag))}function M1(t,e){switch(Ir(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ea(Ht),Pt(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return $e(e),null;case 13:if(na(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(c(340));vl()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return X(Bt),null;case 4:return Pt(),null;case 10:return ea(e.type),null;case 22:case 23:return na(e),hc(),t!==null&&X(Ia),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return ea(Ht),null;case 25:return null;default:return null}}function Vd(t,e){switch(Ir(e),e.tag){case 3:ea(Ht),Pt();break;case 26:case 27:case 5:$e(e);break;case 4:Pt();break;case 13:na(e);break;case 19:X(Bt);break;case 10:ea(e.type);break;case 22:case 23:na(e),hc(),t!==null&&X(Ia);break;case 24:ea(Ht)}}function Yl(t,e){try{var a=e.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var l=n.next;a=l;do{if((a.tag&t)===t){n=void 0;var u=a.create,s=a.inst;n=u(),s.destroy=n}a=a.next}while(a!==l)}}catch(d){Et(e,e.return,d)}}function wa(t,e,a){try{var n=e.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var u=l.next;n=u;do{if((n.tag&t)===t){var s=n.inst,d=s.destroy;if(d!==void 0){s.destroy=void 0,l=e;var g=a,E=d;try{E()}catch(D){Et(l,g,D)}}}n=n.next}while(n!==u)}}catch(D){Et(e,e.return,D)}}function Zd(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{Cf(e,a)}catch(n){Et(t,t.return,n)}}}function $d(t,e,a){a.props=en(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(n){Et(t,e,n)}}function Hl(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var n=t.stateNode;break;case 30:n=t.stateNode;break;default:n=t.stateNode}typeof a=="function"?t.refCleanup=a(n):a.current=n}}catch(l){Et(t,e,l)}}function Be(t,e){var a=t.ref,n=t.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(l){Et(t,e,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){Et(t,e,l)}else a.current=null}function Jd(t){var e=t.type,a=t.memoizedProps,n=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break t;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(l){Et(t,t.return,l)}}function Gc(t,e,a){try{var n=t.stateNode;Z1(n,t.type,a,e),n[ie]=e}catch(l){Et(t,t.return,l)}}function Wd(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Da(t.type)||t.tag===4}function Lc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Wd(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Da(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Xc(t,e,a){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(t),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=gu));else if(n!==4&&(n===27&&Da(t.type)&&(a=t.stateNode,e=null),t=t.child,t!==null))for(Xc(t,e,a),t=t.sibling;t!==null;)Xc(t,e,a),t=t.sibling}function iu(t,e,a){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(n!==4&&(n===27&&Da(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(iu(t,e,a),t=t.sibling;t!==null;)iu(t,e,a),t=t.sibling}function Fd(t){var e=t.stateNode,a=t.memoizedProps;try{for(var n=t.type,l=e.attributes;l.length;)e.removeAttributeNode(l[0]);Ft(e,n,a),e[It]=t,e[ie]=a}catch(u){Et(t,t.return,u)}}var ua=!1,Ct=!1,Qc=!1,Pd=typeof WeakSet=="function"?WeakSet:Set,Kt=null;function A1(t,e){if(t=t.containerInfo,po=zu,t=of(t),Lr(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var l=n.anchorOffset,u=n.focusNode;n=n.focusOffset;try{a.nodeType,u.nodeType}catch{a=null;break t}var s=0,d=-1,g=-1,E=0,D=0,N=t,M=null;e:for(;;){for(var A;N!==a||l!==0&&N.nodeType!==3||(d=s+l),N!==u||n!==0&&N.nodeType!==3||(g=s+n),N.nodeType===3&&(s+=N.nodeValue.length),(A=N.firstChild)!==null;)M=N,N=A;for(;;){if(N===t)break e;if(M===a&&++E===l&&(d=s),M===u&&++D===n&&(g=s),(A=N.nextSibling)!==null)break;N=M,M=N.parentNode}N=A}a=d===-1||g===-1?null:{start:d,end:g}}else a=null}a=a||{start:0,end:0}}else a=null;for(go={focusedElem:t,selectionRange:a},zu=!1,Kt=e;Kt!==null;)if(e=Kt,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,Kt=t;else for(;Kt!==null;){switch(e=Kt,u=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&u!==null){t=void 0,a=e,l=u.memoizedProps,u=u.memoizedState,n=a.stateNode;try{var lt=en(a.type,l,a.elementType===a.type);t=n.getSnapshotBeforeUpdate(lt,u),n.__reactInternalSnapshotBeforeUpdate=t}catch(tt){Et(a,a.return,tt)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,a=t.nodeType,a===9)bo(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":bo(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(c(163))}if(t=e.sibling,t!==null){t.return=e.return,Kt=t;break}Kt=e.return}}function Id(t,e,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:Ea(t,a),n&4&&Yl(5,a);break;case 1:if(Ea(t,a),n&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(s){Et(a,a.return,s)}else{var l=en(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(l,e,t.__reactInternalSnapshotBeforeUpdate)}catch(s){Et(a,a.return,s)}}n&64&&Zd(a),n&512&&Hl(a,a.return);break;case 3:if(Ea(t,a),n&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{Cf(t,e)}catch(s){Et(a,a.return,s)}}break;case 27:e===null&&n&4&&Fd(a);case 26:case 5:Ea(t,a),e===null&&n&4&&Jd(a),n&512&&Hl(a,a.return);break;case 12:Ea(t,a);break;case 13:Ea(t,a),n&4&&a0(t,a),n&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=N1.bind(null,a),tg(t,a))));break;case 22:if(n=a.memoizedState!==null||ua,!n){e=e!==null&&e.memoizedState!==null||Ct,l=ua;var u=Ct;ua=n,(Ct=e)&&!u?Ma(t,a,(a.subtreeFlags&8772)!==0):Ea(t,a),ua=l,Ct=u}break;case 30:break;default:Ea(t,a)}}function t0(t){var e=t.alternate;e!==null&&(t.alternate=null,t0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&zr(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var kt=null,ce=!1;function ra(t,e,a){for(a=a.child;a!==null;)e0(t,e,a),a=a.sibling}function e0(t,e,a){if(fe&&typeof fe.onCommitFiberUnmount=="function")try{fe.onCommitFiberUnmount(il,a)}catch{}switch(a.tag){case 26:Ct||Be(a,e),ra(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ct||Be(a,e);var n=kt,l=ce;Da(a.type)&&(kt=a.stateNode,ce=!1),ra(t,e,a),Zl(a.stateNode),kt=n,ce=l;break;case 5:Ct||Be(a,e);case 6:if(n=kt,l=ce,kt=null,ra(t,e,a),kt=n,ce=l,kt!==null)if(ce)try{(kt.nodeType===9?kt.body:kt.nodeName==="HTML"?kt.ownerDocument.body:kt).removeChild(a.stateNode)}catch(u){Et(a,e,u)}else try{kt.removeChild(a.stateNode)}catch(u){Et(a,e,u)}break;case 18:kt!==null&&(ce?(t=kt,X0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),ei(t)):X0(kt,a.stateNode));break;case 4:n=kt,l=ce,kt=a.stateNode.containerInfo,ce=!0,ra(t,e,a),kt=n,ce=l;break;case 0:case 11:case 14:case 15:Ct||wa(2,a,e),Ct||wa(4,a,e),ra(t,e,a);break;case 1:Ct||(Be(a,e),n=a.stateNode,typeof n.componentWillUnmount=="function"&&$d(a,e,n)),ra(t,e,a);break;case 21:ra(t,e,a);break;case 22:Ct=(n=Ct)||a.memoizedState!==null,ra(t,e,a),Ct=n;break;default:ra(t,e,a)}}function a0(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ei(t)}catch(a){Et(e,e.return,a)}}function k1(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Pd),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Pd),e;default:throw Error(c(435,t.tag))}}function Kc(t,e){var a=k1(t);e.forEach(function(n){var l=Y1.bind(null,t,n);a.has(n)||(a.add(n),n.then(l,l))})}function pe(t,e){var a=e.deletions;if(a!==null)for(var n=0;n<a.length;n++){var l=a[n],u=t,s=e,d=s;t:for(;d!==null;){switch(d.tag){case 27:if(Da(d.type)){kt=d.stateNode,ce=!1;break t}break;case 5:kt=d.stateNode,ce=!1;break t;case 3:case 4:kt=d.stateNode.containerInfo,ce=!0;break t}d=d.return}if(kt===null)throw Error(c(160));e0(u,s,l),kt=null,ce=!1,u=l.alternate,u!==null&&(u.return=null),l.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)n0(e,t),e=e.sibling}var _e=null;function n0(t,e){var a=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:pe(e,t),ge(t),n&4&&(wa(3,t,t.return),Yl(3,t),wa(5,t,t.return));break;case 1:pe(e,t),ge(t),n&512&&(Ct||a===null||Be(a,a.return)),n&64&&ua&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var l=_e;if(pe(e,t),ge(t),n&512&&(Ct||a===null||Be(a,a.return)),n&4){var u=a!==null?a.memoizedState:null;if(n=t.memoizedState,a===null)if(n===null)if(t.stateNode===null){t:{n=t.type,a=t.memoizedProps,l=l.ownerDocument||l;e:switch(n){case"title":u=l.getElementsByTagName("title")[0],(!u||u[cl]||u[It]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=l.createElement(n),l.head.insertBefore(u,l.querySelector("head > title"))),Ft(u,n,a),u[It]=t,Xt(u),n=u;break t;case"link":var s=F0("link","href",l).get(n+(a.href||""));if(s){for(var d=0;d<s.length;d++)if(u=s[d],u.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&u.getAttribute("rel")===(a.rel==null?null:a.rel)&&u.getAttribute("title")===(a.title==null?null:a.title)&&u.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){s.splice(d,1);break e}}u=l.createElement(n),Ft(u,n,a),l.head.appendChild(u);break;case"meta":if(s=F0("meta","content",l).get(n+(a.content||""))){for(d=0;d<s.length;d++)if(u=s[d],u.getAttribute("content")===(a.content==null?null:""+a.content)&&u.getAttribute("name")===(a.name==null?null:a.name)&&u.getAttribute("property")===(a.property==null?null:a.property)&&u.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&u.getAttribute("charset")===(a.charSet==null?null:a.charSet)){s.splice(d,1);break e}}u=l.createElement(n),Ft(u,n,a),l.head.appendChild(u);break;default:throw Error(c(468,n))}u[It]=t,Xt(u),n=u}t.stateNode=n}else P0(l,t.type,t.stateNode);else t.stateNode=W0(l,n,t.memoizedProps);else u!==n?(u===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):u.count--,n===null?P0(l,t.type,t.stateNode):W0(l,n,t.memoizedProps)):n===null&&t.stateNode!==null&&Gc(t,t.memoizedProps,a.memoizedProps)}break;case 27:pe(e,t),ge(t),n&512&&(Ct||a===null||Be(a,a.return)),a!==null&&n&4&&Gc(t,t.memoizedProps,a.memoizedProps);break;case 5:if(pe(e,t),ge(t),n&512&&(Ct||a===null||Be(a,a.return)),t.flags&32){l=t.stateNode;try{gn(l,"")}catch(A){Et(t,t.return,A)}}n&4&&t.stateNode!=null&&(l=t.memoizedProps,Gc(t,l,a!==null?a.memoizedProps:l)),n&1024&&(Qc=!0);break;case 6:if(pe(e,t),ge(t),n&4){if(t.stateNode===null)throw Error(c(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n}catch(A){Et(t,t.return,A)}}break;case 3:if(vu=null,l=_e,_e=yu(e.containerInfo),pe(e,t),_e=l,ge(t),n&4&&a!==null&&a.memoizedState.isDehydrated)try{ei(e.containerInfo)}catch(A){Et(t,t.return,A)}Qc&&(Qc=!1,l0(t));break;case 4:n=_e,_e=yu(t.stateNode.containerInfo),pe(e,t),ge(t),_e=n;break;case 12:pe(e,t),ge(t);break;case 13:pe(e,t),ge(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Fc=Ne()),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Kc(t,n)));break;case 22:l=t.memoizedState!==null;var g=a!==null&&a.memoizedState!==null,E=ua,D=Ct;if(ua=E||l,Ct=D||g,pe(e,t),Ct=D,ua=E,ge(t),n&8192)t:for(e=t.stateNode,e._visibility=l?e._visibility&-2:e._visibility|1,l&&(a===null||g||ua||Ct||an(t)),a=null,e=t;;){if(e.tag===5||e.tag===26){if(a===null){g=a=e;try{if(u=g.stateNode,l)s=u.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{d=g.stateNode;var N=g.memoizedProps.style,M=N!=null&&N.hasOwnProperty("display")?N.display:null;d.style.display=M==null||typeof M=="boolean"?"":(""+M).trim()}}catch(A){Et(g,g.return,A)}}}else if(e.tag===6){if(a===null){g=e;try{g.stateNode.nodeValue=l?"":g.memoizedProps}catch(A){Et(g,g.return,A)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}n&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Kc(t,a))));break;case 19:pe(e,t),ge(t),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Kc(t,n)));break;case 30:break;case 21:break;default:pe(e,t),ge(t)}}function ge(t){var e=t.flags;if(e&2){try{for(var a,n=t.return;n!==null;){if(Wd(n)){a=n;break}n=n.return}if(a==null)throw Error(c(160));switch(a.tag){case 27:var l=a.stateNode,u=Lc(t);iu(t,u,l);break;case 5:var s=a.stateNode;a.flags&32&&(gn(s,""),a.flags&=-33);var d=Lc(t);iu(t,d,s);break;case 3:case 4:var g=a.stateNode.containerInfo,E=Lc(t);Xc(t,E,g);break;default:throw Error(c(161))}}catch(D){Et(t,t.return,D)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function l0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;l0(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Ea(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Id(t,e.alternate,e),e=e.sibling}function an(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:wa(4,e,e.return),an(e);break;case 1:Be(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&$d(e,e.return,a),an(e);break;case 27:Zl(e.stateNode);case 26:case 5:Be(e,e.return),an(e);break;case 22:e.memoizedState===null&&an(e);break;case 30:an(e);break;default:an(e)}t=t.sibling}}function Ma(t,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var n=e.alternate,l=t,u=e,s=u.flags;switch(u.tag){case 0:case 11:case 15:Ma(l,u,a),Yl(4,u);break;case 1:if(Ma(l,u,a),n=u,l=n.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(E){Et(n,n.return,E)}if(n=u,l=n.updateQueue,l!==null){var d=n.stateNode;try{var g=l.shared.hiddenCallbacks;if(g!==null)for(l.shared.hiddenCallbacks=null,l=0;l<g.length;l++)_f(g[l],d)}catch(E){Et(n,n.return,E)}}a&&s&64&&Zd(u),Hl(u,u.return);break;case 27:Fd(u);case 26:case 5:Ma(l,u,a),a&&n===null&&s&4&&Jd(u),Hl(u,u.return);break;case 12:Ma(l,u,a);break;case 13:Ma(l,u,a),a&&s&4&&a0(l,u);break;case 22:u.memoizedState===null&&Ma(l,u,a),Hl(u,u.return);break;case 30:break;default:Ma(l,u,a)}e=e.sibling}}function Vc(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&zl(a))}function Zc(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&zl(t))}function qe(t,e,a,n){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)i0(t,e,a,n),e=e.sibling}function i0(t,e,a,n){var l=e.flags;switch(e.tag){case 0:case 11:case 15:qe(t,e,a,n),l&2048&&Yl(9,e);break;case 1:qe(t,e,a,n);break;case 3:qe(t,e,a,n),l&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&zl(t)));break;case 12:if(l&2048){qe(t,e,a,n),t=e.stateNode;try{var u=e.memoizedProps,s=u.id,d=u.onPostCommit;typeof d=="function"&&d(s,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(g){Et(e,e.return,g)}}else qe(t,e,a,n);break;case 13:qe(t,e,a,n);break;case 23:break;case 22:u=e.stateNode,s=e.alternate,e.memoizedState!==null?u._visibility&2?qe(t,e,a,n):Bl(t,e):u._visibility&2?qe(t,e,a,n):(u._visibility|=2,Un(t,e,a,n,(e.subtreeFlags&10256)!==0)),l&2048&&Vc(s,e);break;case 24:qe(t,e,a,n),l&2048&&Zc(e.alternate,e);break;default:qe(t,e,a,n)}}function Un(t,e,a,n,l){for(l=l&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var u=t,s=e,d=a,g=n,E=s.flags;switch(s.tag){case 0:case 11:case 15:Un(u,s,d,g,l),Yl(8,s);break;case 23:break;case 22:var D=s.stateNode;s.memoizedState!==null?D._visibility&2?Un(u,s,d,g,l):Bl(u,s):(D._visibility|=2,Un(u,s,d,g,l)),l&&E&2048&&Vc(s.alternate,s);break;case 24:Un(u,s,d,g,l),l&&E&2048&&Zc(s.alternate,s);break;default:Un(u,s,d,g,l)}e=e.sibling}}function Bl(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,n=e,l=n.flags;switch(n.tag){case 22:Bl(a,n),l&2048&&Vc(n.alternate,n);break;case 24:Bl(a,n),l&2048&&Zc(n.alternate,n);break;default:Bl(a,n)}e=e.sibling}}var ql=8192;function Nn(t){if(t.subtreeFlags&ql)for(t=t.child;t!==null;)u0(t),t=t.sibling}function u0(t){switch(t.tag){case 26:Nn(t),t.flags&ql&&t.memoizedState!==null&&hg(_e,t.memoizedState,t.memoizedProps);break;case 5:Nn(t);break;case 3:case 4:var e=_e;_e=yu(t.stateNode.containerInfo),Nn(t),_e=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=ql,ql=16777216,Nn(t),ql=e):Nn(t));break;default:Nn(t)}}function r0(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Gl(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var n=e[a];Kt=n,o0(n,t)}r0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)c0(t),t=t.sibling}function c0(t){switch(t.tag){case 0:case 11:case 15:Gl(t),t.flags&2048&&wa(9,t,t.return);break;case 3:Gl(t);break;case 12:Gl(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,uu(t)):Gl(t);break;default:Gl(t)}}function uu(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var n=e[a];Kt=n,o0(n,t)}r0(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:wa(8,e,e.return),uu(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,uu(e));break;default:uu(e)}t=t.sibling}}function o0(t,e){for(;Kt!==null;){var a=Kt;switch(a.tag){case 0:case 11:case 15:wa(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:zl(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,Kt=n;else t:for(a=t;Kt!==null;){n=Kt;var l=n.sibling,u=n.return;if(t0(n),n===a){Kt=null;break t}if(l!==null){l.return=u,Kt=l;break t}Kt=u}}}var O1={getCacheForType:function(t){var e=te(Ht),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a}},R1=typeof WeakMap=="function"?WeakMap:Map,bt=0,Mt=null,ft=null,ht=0,vt=0,xe=null,Aa=!1,Yn=!1,$c=!1,ca=0,Dt=0,ka=0,nn=0,Jc=0,Oe=0,Hn=0,Ll=null,oe=null,Wc=!1,Fc=0,ru=1/0,cu=null,Oa=null,Wt=0,Ra=null,Bn=null,qn=0,Pc=0,Ic=null,s0=null,Xl=0,to=null;function ye(){if((bt&2)!==0&&ht!==0)return ht&-ht;if(j.T!==null){var t=An;return t!==0?t:ro()}return Es()}function f0(){Oe===0&&(Oe=(ht&536870912)===0||pt?Ss():536870912);var t=ke.current;return t!==null&&(t.flags|=32),Oe}function be(t,e,a){(t===Mt&&(vt===2||vt===9)||t.cancelPendingCommit!==null)&&(Gn(t,0),ja(t,ht,Oe,!1)),rl(t,a),((bt&2)===0||t!==Mt)&&(t===Mt&&((bt&2)===0&&(nn|=a),Dt===4&&ja(t,ht,Oe,!1)),Ge(t))}function d0(t,e,a){if((bt&6)!==0)throw Error(c(327));var n=!a&&(e&124)===0&&(e&t.expiredLanes)===0||ul(t,e),l=n?_1(t,e):no(t,e,!0),u=n;do{if(l===0){Yn&&!n&&ja(t,e,0,!1);break}else{if(a=t.current.alternate,u&&!j1(a)){l=no(t,e,!1),u=!1;continue}if(l===2){if(u=e,t.errorRecoveryDisabledLanes&u)var s=0;else s=t.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){e=s;t:{var d=t;l=Ll;var g=d.current.memoizedState.isDehydrated;if(g&&(Gn(d,s).flags|=256),s=no(d,s,!1),s!==2){if($c&&!g){d.errorRecoveryDisabledLanes|=u,nn|=u,l=4;break t}u=oe,oe=l,u!==null&&(oe===null?oe=u:oe.push.apply(oe,u))}l=s}if(u=!1,l!==2)continue}}if(l===1){Gn(t,0),ja(t,e,0,!0);break}t:{switch(n=t,u=l,u){case 0:case 1:throw Error(c(345));case 4:if((e&4194048)!==e)break;case 6:ja(n,e,Oe,!Aa);break t;case 2:oe=null;break;case 3:case 5:break;default:throw Error(c(329))}if((e&62914560)===e&&(l=Fc+300-Ne(),10<l)){if(ja(n,e,Oe,!Aa),bi(n,0,!0)!==0)break t;n.timeoutHandle=G0(h0.bind(null,n,a,oe,cu,Wc,e,Oe,nn,Hn,Aa,u,2,-0,0),l);break t}h0(n,a,oe,cu,Wc,e,Oe,nn,Hn,Aa,u,0,-0,0)}}break}while(!0);Ge(t)}function h0(t,e,a,n,l,u,s,d,g,E,D,N,M,A){if(t.timeoutHandle=-1,N=e.subtreeFlags,(N&8192||(N&16785408)===16785408)&&(Wl={stylesheets:null,count:0,unsuspend:dg},u0(e),N=mg(),N!==null)){t.cancelPendingCommit=N(v0.bind(null,t,e,u,a,n,l,s,d,g,D,1,M,A)),ja(t,u,s,!E);return}v0(t,e,u,a,n,l,s,d,g)}function j1(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var l=a[n],u=l.getSnapshot;l=l.value;try{if(!he(u(),l))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ja(t,e,a,n){e&=~Jc,e&=~nn,t.suspendedLanes|=e,t.pingedLanes&=~e,n&&(t.warmLanes|=e),n=t.expirationTimes;for(var l=e;0<l;){var u=31-de(l),s=1<<u;n[u]=-1,l&=~s}a!==0&&zs(t,a,e)}function ou(){return(bt&6)===0?(Ql(0),!1):!0}function eo(){if(ft!==null){if(vt===0)var t=ft.return;else t=ft,ta=Fa=null,yc(t),_n=null,Cl=0,t=ft;for(;t!==null;)Vd(t.alternate,t),t=t.return;ft=null}}function Gn(t,e){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,J1(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),eo(),Mt=t,ft=a=Fe(t.current,null),ht=e,vt=0,xe=null,Aa=!1,Yn=ul(t,e),$c=!1,Hn=Oe=Jc=nn=ka=Dt=0,oe=Ll=null,Wc=!1,(e&8)!==0&&(e|=e&32);var n=t.entangledLanes;if(n!==0)for(t=t.entanglements,n&=e;0<n;){var l=31-de(n),u=1<<l;e|=t[l],n&=~u}return ca=e,ji(),a}function m0(t,e){rt=null,j.H=Wi,e===El||e===qi?(e=jf(),vt=3):e===kf?(e=jf(),vt=4):vt=e===Dd?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,xe=e,ft===null&&(Dt=1,eu(t,we(e,t.current)))}function p0(){var t=j.H;return j.H=Wi,t===null?Wi:t}function g0(){var t=j.A;return j.A=O1,t}function ao(){Dt=4,Aa||(ht&4194048)!==ht&&ke.current!==null||(Yn=!0),(ka&134217727)===0&&(nn&134217727)===0||Mt===null||ja(Mt,ht,Oe,!1)}function no(t,e,a){var n=bt;bt|=2;var l=p0(),u=g0();(Mt!==t||ht!==e)&&(cu=null,Gn(t,e)),e=!1;var s=Dt;t:do try{if(vt!==0&&ft!==null){var d=ft,g=xe;switch(vt){case 8:eo(),s=6;break t;case 3:case 2:case 9:case 6:ke.current===null&&(e=!0);var E=vt;if(vt=0,xe=null,Ln(t,d,g,E),a&&Yn){s=0;break t}break;default:E=vt,vt=0,xe=null,Ln(t,d,g,E)}}D1(),s=Dt;break}catch(D){m0(t,D)}while(!0);return e&&t.shellSuspendCounter++,ta=Fa=null,bt=n,j.H=l,j.A=u,ft===null&&(Mt=null,ht=0,ji()),s}function D1(){for(;ft!==null;)x0(ft)}function _1(t,e){var a=bt;bt|=2;var n=p0(),l=g0();Mt!==t||ht!==e?(cu=null,ru=Ne()+500,Gn(t,e)):Yn=ul(t,e);t:do try{if(vt!==0&&ft!==null){e=ft;var u=xe;e:switch(vt){case 1:vt=0,xe=null,Ln(t,e,u,1);break;case 2:case 9:if(Of(u)){vt=0,xe=null,y0(e);break}e=function(){vt!==2&&vt!==9||Mt!==t||(vt=7),Ge(t)},u.then(e,e);break t;case 3:vt=7;break t;case 4:vt=5;break t;case 7:Of(u)?(vt=0,xe=null,y0(e)):(vt=0,xe=null,Ln(t,e,u,7));break;case 5:var s=null;switch(ft.tag){case 26:s=ft.memoizedState;case 5:case 27:var d=ft;if(!s||I0(s)){vt=0,xe=null;var g=d.sibling;if(g!==null)ft=g;else{var E=d.return;E!==null?(ft=E,su(E)):ft=null}break e}}vt=0,xe=null,Ln(t,e,u,5);break;case 6:vt=0,xe=null,Ln(t,e,u,6);break;case 8:eo(),Dt=6;break t;default:throw Error(c(462))}}C1();break}catch(D){m0(t,D)}while(!0);return ta=Fa=null,j.H=n,j.A=l,bt=a,ft!==null?0:(Mt=null,ht=0,ji(),Dt)}function C1(){for(;ft!==null&&!ap();)x0(ft)}function x0(t){var e=Qd(t.alternate,t,ca);t.memoizedProps=t.pendingProps,e===null?su(t):ft=e}function y0(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=Hd(a,e,e.pendingProps,e.type,void 0,ht);break;case 11:e=Hd(a,e,e.pendingProps,e.type.render,e.ref,ht);break;case 5:yc(e);default:Vd(a,e),e=ft=bf(e,ca),e=Qd(a,e,ca)}t.memoizedProps=t.pendingProps,e===null?su(t):ft=e}function Ln(t,e,a,n){ta=Fa=null,yc(e),_n=null,Cl=0;var l=e.return;try{if(z1(t,l,e,a,ht)){Dt=1,eu(t,we(a,t.current)),ft=null;return}}catch(u){if(l!==null)throw ft=l,u;Dt=1,eu(t,we(a,t.current)),ft=null;return}e.flags&32768?(pt||n===1?t=!0:Yn||(ht&536870912)!==0?t=!1:(Aa=t=!0,(n===2||n===9||n===3||n===6)&&(n=ke.current,n!==null&&n.tag===13&&(n.flags|=16384))),b0(e,t)):su(e)}function su(t){var e=t;do{if((e.flags&32768)!==0){b0(e,Aa);return}t=e.return;var a=E1(e.alternate,e,ca);if(a!==null){ft=a;return}if(e=e.sibling,e!==null){ft=e;return}ft=e=t}while(e!==null);Dt===0&&(Dt=5)}function b0(t,e){do{var a=M1(t.alternate,t);if(a!==null){a.flags&=32767,ft=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){ft=t;return}ft=t=a}while(t!==null);Dt=6,ft=null}function v0(t,e,a,n,l,u,s,d,g){t.cancelPendingCommit=null;do fu();while(Wt!==0);if((bt&6)!==0)throw Error(c(327));if(e!==null){if(e===t.current)throw Error(c(177));if(u=e.lanes|e.childLanes,u|=Zr,dp(t,a,u,s,d,g),t===Mt&&(ft=Mt=null,ht=0),Bn=e,Ra=t,qn=a,Pc=u,Ic=l,s0=n,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,H1(gi,function(){return E0(),null})):(t.callbackNode=null,t.callbackPriority=0),n=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||n){n=j.T,j.T=null,l=Q.p,Q.p=2,s=bt,bt|=4;try{A1(t,e,a)}finally{bt=s,Q.p=l,j.T=n}}Wt=1,S0(),T0(),z0()}}function S0(){if(Wt===1){Wt=0;var t=Ra,e=Bn,a=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||a){a=j.T,j.T=null;var n=Q.p;Q.p=2;var l=bt;bt|=4;try{n0(e,t);var u=go,s=of(t.containerInfo),d=u.focusedElem,g=u.selectionRange;if(s!==d&&d&&d.ownerDocument&&cf(d.ownerDocument.documentElement,d)){if(g!==null&&Lr(d)){var E=g.start,D=g.end;if(D===void 0&&(D=E),"selectionStart"in d)d.selectionStart=E,d.selectionEnd=Math.min(D,d.value.length);else{var N=d.ownerDocument||document,M=N&&N.defaultView||window;if(M.getSelection){var A=M.getSelection(),lt=d.textContent.length,tt=Math.min(g.start,lt),wt=g.end===void 0?tt:Math.min(g.end,lt);!A.extend&&tt>wt&&(s=wt,wt=tt,tt=s);var S=rf(d,tt),v=rf(d,wt);if(S&&v&&(A.rangeCount!==1||A.anchorNode!==S.node||A.anchorOffset!==S.offset||A.focusNode!==v.node||A.focusOffset!==v.offset)){var z=N.createRange();z.setStart(S.node,S.offset),A.removeAllRanges(),tt>wt?(A.addRange(z),A.extend(v.node,v.offset)):(z.setEnd(v.node,v.offset),A.addRange(z))}}}}for(N=[],A=d;A=A.parentNode;)A.nodeType===1&&N.push({element:A,left:A.scrollLeft,top:A.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<N.length;d++){var C=N[d];C.element.scrollLeft=C.left,C.element.scrollTop=C.top}}zu=!!po,go=po=null}finally{bt=l,Q.p=n,j.T=a}}t.current=e,Wt=2}}function T0(){if(Wt===2){Wt=0;var t=Ra,e=Bn,a=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||a){a=j.T,j.T=null;var n=Q.p;Q.p=2;var l=bt;bt|=4;try{Id(t,e.alternate,e)}finally{bt=l,Q.p=n,j.T=a}}Wt=3}}function z0(){if(Wt===4||Wt===3){Wt=0,np();var t=Ra,e=Bn,a=qn,n=s0;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Wt=5:(Wt=0,Bn=Ra=null,w0(t,t.pendingLanes));var l=t.pendingLanes;if(l===0&&(Oa=null),Sr(a),e=e.stateNode,fe&&typeof fe.onCommitFiberRoot=="function")try{fe.onCommitFiberRoot(il,e,void 0,(e.current.flags&128)===128)}catch{}if(n!==null){e=j.T,l=Q.p,Q.p=2,j.T=null;try{for(var u=t.onRecoverableError,s=0;s<n.length;s++){var d=n[s];u(d.value,{componentStack:d.stack})}}finally{j.T=e,Q.p=l}}(qn&3)!==0&&fu(),Ge(t),l=t.pendingLanes,(a&4194090)!==0&&(l&42)!==0?t===to?Xl++:(Xl=0,to=t):Xl=0,Ql(0)}}function w0(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,zl(e)))}function fu(t){return S0(),T0(),z0(),E0()}function E0(){if(Wt!==5)return!1;var t=Ra,e=Pc;Pc=0;var a=Sr(qn),n=j.T,l=Q.p;try{Q.p=32>a?32:a,j.T=null,a=Ic,Ic=null;var u=Ra,s=qn;if(Wt=0,Bn=Ra=null,qn=0,(bt&6)!==0)throw Error(c(331));var d=bt;if(bt|=4,c0(u.current),i0(u,u.current,s,a),bt=d,Ql(0,!1),fe&&typeof fe.onPostCommitFiberRoot=="function")try{fe.onPostCommitFiberRoot(il,u)}catch{}return!0}finally{Q.p=l,j.T=n,w0(t,e)}}function M0(t,e,a){e=we(a,e),e=Dc(t.stateNode,e,2),t=va(t,e,2),t!==null&&(rl(t,2),Ge(t))}function Et(t,e,a){if(t.tag===3)M0(t,t,a);else for(;e!==null;){if(e.tag===3){M0(e,t,a);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Oa===null||!Oa.has(n))){t=we(a,t),a=Rd(2),n=va(e,a,2),n!==null&&(jd(a,n,e,t),rl(n,2),Ge(n));break}}e=e.return}}function lo(t,e,a){var n=t.pingCache;if(n===null){n=t.pingCache=new R1;var l=new Set;n.set(e,l)}else l=n.get(e),l===void 0&&(l=new Set,n.set(e,l));l.has(a)||($c=!0,l.add(a),t=U1.bind(null,t,e,a),e.then(t,t))}function U1(t,e,a){var n=t.pingCache;n!==null&&n.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Mt===t&&(ht&a)===a&&(Dt===4||Dt===3&&(ht&62914560)===ht&&300>Ne()-Fc?(bt&2)===0&&Gn(t,0):Jc|=a,Hn===ht&&(Hn=0)),Ge(t)}function A0(t,e){e===0&&(e=Ts()),t=zn(t,e),t!==null&&(rl(t,e),Ge(t))}function N1(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),A0(t,a)}function Y1(t,e){var a=0;switch(t.tag){case 13:var n=t.stateNode,l=t.memoizedState;l!==null&&(a=l.retryLane);break;case 19:n=t.stateNode;break;case 22:n=t.stateNode._retryCache;break;default:throw Error(c(314))}n!==null&&n.delete(e),A0(t,a)}function H1(t,e){return xr(t,e)}var du=null,Xn=null,io=!1,hu=!1,uo=!1,ln=0;function Ge(t){t!==Xn&&t.next===null&&(Xn===null?du=Xn=t:Xn=Xn.next=t),hu=!0,io||(io=!0,q1())}function Ql(t,e){if(!uo&&hu){uo=!0;do for(var a=!1,n=du;n!==null;){if(t!==0){var l=n.pendingLanes;if(l===0)var u=0;else{var s=n.suspendedLanes,d=n.pingedLanes;u=(1<<31-de(42|t)+1)-1,u&=l&~(s&~d),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(a=!0,j0(n,u))}else u=ht,u=bi(n,n===Mt?u:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(u&3)===0||ul(n,u)||(a=!0,j0(n,u));n=n.next}while(a);uo=!1}}function B1(){k0()}function k0(){hu=io=!1;var t=0;ln!==0&&($1()&&(t=ln),ln=0);for(var e=Ne(),a=null,n=du;n!==null;){var l=n.next,u=O0(n,e);u===0?(n.next=null,a===null?du=l:a.next=l,l===null&&(Xn=a)):(a=n,(t!==0||(u&3)!==0)&&(hu=!0)),n=l}Ql(t)}function O0(t,e){for(var a=t.suspendedLanes,n=t.pingedLanes,l=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var s=31-de(u),d=1<<s,g=l[s];g===-1?((d&a)===0||(d&n)!==0)&&(l[s]=fp(d,e)):g<=e&&(t.expiredLanes|=d),u&=~d}if(e=Mt,a=ht,a=bi(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),n=t.callbackNode,a===0||t===e&&(vt===2||vt===9)||t.cancelPendingCommit!==null)return n!==null&&n!==null&&yr(n),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||ul(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(n!==null&&yr(n),Sr(a)){case 2:case 8:a=bs;break;case 32:a=gi;break;case 268435456:a=vs;break;default:a=gi}return n=R0.bind(null,t),a=xr(a,n),t.callbackPriority=e,t.callbackNode=a,e}return n!==null&&n!==null&&yr(n),t.callbackPriority=2,t.callbackNode=null,2}function R0(t,e){if(Wt!==0&&Wt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(fu()&&t.callbackNode!==a)return null;var n=ht;return n=bi(t,t===Mt?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),n===0?null:(d0(t,n,e),O0(t,Ne()),t.callbackNode!=null&&t.callbackNode===a?R0.bind(null,t):null)}function j0(t,e){if(fu())return null;d0(t,e,!0)}function q1(){W1(function(){(bt&6)!==0?xr(ys,B1):k0()})}function ro(){return ln===0&&(ln=Ss()),ln}function D0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:wi(""+t)}function _0(t,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,t.id&&a.setAttribute("form",t.id),e.parentNode.insertBefore(a,e),t=new FormData(t),a.parentNode.removeChild(a),t}function G1(t,e,a,n,l){if(e==="submit"&&a&&a.stateNode===l){var u=D0((l[ie]||null).action),s=n.submitter;s&&(e=(e=s[ie]||null)?D0(e.formAction):s.getAttribute("formAction"),e!==null&&(u=e,s=null));var d=new ki("action","action",null,n,l);t.push({event:d,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(ln!==0){var g=s?_0(l,s):new FormData(l);Ac(a,{pending:!0,data:g,method:l.method,action:u},null,g)}}else typeof u=="function"&&(d.preventDefault(),g=s?_0(l,s):new FormData(l),Ac(a,{pending:!0,data:g,method:l.method,action:u},u,g))},currentTarget:l}]})}}for(var co=0;co<Vr.length;co++){var oo=Vr[co],L1=oo.toLowerCase(),X1=oo[0].toUpperCase()+oo.slice(1);De(L1,"on"+X1)}De(df,"onAnimationEnd"),De(hf,"onAnimationIteration"),De(mf,"onAnimationStart"),De("dblclick","onDoubleClick"),De("focusin","onFocus"),De("focusout","onBlur"),De(u1,"onTransitionRun"),De(r1,"onTransitionStart"),De(c1,"onTransitionCancel"),De(pf,"onTransitionEnd"),hn("onMouseEnter",["mouseout","mouseover"]),hn("onMouseLeave",["mouseout","mouseover"]),hn("onPointerEnter",["pointerout","pointerover"]),hn("onPointerLeave",["pointerout","pointerover"]),La("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),La("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),La("onBeforeInput",["compositionend","keypress","textInput","paste"]),La("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),La("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),La("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Kl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Q1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Kl));function C0(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var n=t[a],l=n.event;n=n.listeners;t:{var u=void 0;if(e)for(var s=n.length-1;0<=s;s--){var d=n[s],g=d.instance,E=d.currentTarget;if(d=d.listener,g!==u&&l.isPropagationStopped())break t;u=d,l.currentTarget=E;try{u(l)}catch(D){tu(D)}l.currentTarget=null,u=g}else for(s=0;s<n.length;s++){if(d=n[s],g=d.instance,E=d.currentTarget,d=d.listener,g!==u&&l.isPropagationStopped())break t;u=d,l.currentTarget=E;try{u(l)}catch(D){tu(D)}l.currentTarget=null,u=g}}}}function dt(t,e){var a=e[Tr];a===void 0&&(a=e[Tr]=new Set);var n=t+"__bubble";a.has(n)||(U0(e,t,2,!1),a.add(n))}function so(t,e,a){var n=0;e&&(n|=4),U0(a,t,n,e)}var mu="_reactListening"+Math.random().toString(36).slice(2);function fo(t){if(!t[mu]){t[mu]=!0,As.forEach(function(a){a!=="selectionchange"&&(Q1.has(a)||so(a,!1,t),so(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[mu]||(e[mu]=!0,so("selectionchange",!1,e))}}function U0(t,e,a,n){switch(ih(e)){case 2:var l=xg;break;case 8:l=yg;break;default:l=Mo}a=l.bind(null,e,a,t),l=void 0,!_r||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(l=!0),n?l!==void 0?t.addEventListener(e,a,{capture:!0,passive:l}):t.addEventListener(e,a,!0):l!==void 0?t.addEventListener(e,a,{passive:l}):t.addEventListener(e,a,!1)}function ho(t,e,a,n,l){var u=n;if((e&1)===0&&(e&2)===0&&n!==null)t:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var d=n.stateNode.containerInfo;if(d===l)break;if(s===4)for(s=n.return;s!==null;){var g=s.tag;if((g===3||g===4)&&s.stateNode.containerInfo===l)return;s=s.return}for(;d!==null;){if(s=sn(d),s===null)return;if(g=s.tag,g===5||g===6||g===26||g===27){n=u=s;continue t}d=d.parentNode}}n=n.return}Gs(function(){var E=u,D=jr(a),N=[];t:{var M=gf.get(t);if(M!==void 0){var A=ki,lt=t;switch(t){case"keypress":if(Mi(a)===0)break t;case"keydown":case"keyup":A=Hp;break;case"focusin":lt="focus",A=Yr;break;case"focusout":lt="blur",A=Yr;break;case"beforeblur":case"afterblur":A=Yr;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=Qs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=Mp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=Gp;break;case df:case hf:case mf:A=Op;break;case pf:A=Xp;break;case"scroll":case"scrollend":A=wp;break;case"wheel":A=Kp;break;case"copy":case"cut":case"paste":A=jp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=Vs;break;case"toggle":case"beforetoggle":A=Zp}var tt=(e&4)!==0,wt=!tt&&(t==="scroll"||t==="scrollend"),S=tt?M!==null?M+"Capture":null:M;tt=[];for(var v=E,z;v!==null;){var C=v;if(z=C.stateNode,C=C.tag,C!==5&&C!==26&&C!==27||z===null||S===null||(C=sl(v,S),C!=null&&tt.push(Vl(v,C,z))),wt)break;v=v.return}0<tt.length&&(M=new A(M,lt,null,a,D),N.push({event:M,listeners:tt}))}}if((e&7)===0){t:{if(M=t==="mouseover"||t==="pointerover",A=t==="mouseout"||t==="pointerout",M&&a!==Rr&&(lt=a.relatedTarget||a.fromElement)&&(sn(lt)||lt[on]))break t;if((A||M)&&(M=D.window===D?D:(M=D.ownerDocument)?M.defaultView||M.parentWindow:window,A?(lt=a.relatedTarget||a.toElement,A=E,lt=lt?sn(lt):null,lt!==null&&(wt=h(lt),tt=lt.tag,lt!==wt||tt!==5&&tt!==27&&tt!==6)&&(lt=null)):(A=null,lt=E),A!==lt)){if(tt=Qs,C="onMouseLeave",S="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(tt=Vs,C="onPointerLeave",S="onPointerEnter",v="pointer"),wt=A==null?M:ol(A),z=lt==null?M:ol(lt),M=new tt(C,v+"leave",A,a,D),M.target=wt,M.relatedTarget=z,C=null,sn(D)===E&&(tt=new tt(S,v+"enter",lt,a,D),tt.target=z,tt.relatedTarget=wt,C=tt),wt=C,A&&lt)e:{for(tt=A,S=lt,v=0,z=tt;z;z=Qn(z))v++;for(z=0,C=S;C;C=Qn(C))z++;for(;0<v-z;)tt=Qn(tt),v--;for(;0<z-v;)S=Qn(S),z--;for(;v--;){if(tt===S||S!==null&&tt===S.alternate)break e;tt=Qn(tt),S=Qn(S)}tt=null}else tt=null;A!==null&&N0(N,M,A,tt,!1),lt!==null&&wt!==null&&N0(N,wt,lt,tt,!0)}}t:{if(M=E?ol(E):window,A=M.nodeName&&M.nodeName.toLowerCase(),A==="select"||A==="input"&&M.type==="file")var $=tf;else if(Ps(M))if(ef)$=n1;else{$=e1;var ct=t1}else A=M.nodeName,!A||A.toLowerCase()!=="input"||M.type!=="checkbox"&&M.type!=="radio"?E&&Or(E.elementType)&&($=tf):$=a1;if($&&($=$(t,E))){Is(N,$,a,D);break t}ct&&ct(t,M,E),t==="focusout"&&E&&M.type==="number"&&E.memoizedProps.value!=null&&kr(M,"number",M.value)}switch(ct=E?ol(E):window,t){case"focusin":(Ps(ct)||ct.contentEditable==="true")&&(vn=ct,Xr=E,yl=null);break;case"focusout":yl=Xr=vn=null;break;case"mousedown":Qr=!0;break;case"contextmenu":case"mouseup":case"dragend":Qr=!1,sf(N,a,D);break;case"selectionchange":if(i1)break;case"keydown":case"keyup":sf(N,a,D)}var W;if(Br)t:{switch(t){case"compositionstart":var at="onCompositionStart";break t;case"compositionend":at="onCompositionEnd";break t;case"compositionupdate":at="onCompositionUpdate";break t}at=void 0}else bn?Ws(t,a)&&(at="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(at="onCompositionStart");at&&(Zs&&a.locale!=="ko"&&(bn||at!=="onCompositionStart"?at==="onCompositionEnd"&&bn&&(W=Ls()):(ga=D,Cr="value"in ga?ga.value:ga.textContent,bn=!0)),ct=pu(E,at),0<ct.length&&(at=new Ks(at,t,null,a,D),N.push({event:at,listeners:ct}),W?at.data=W:(W=Fs(a),W!==null&&(at.data=W)))),(W=Jp?Wp(t,a):Fp(t,a))&&(at=pu(E,"onBeforeInput"),0<at.length&&(ct=new Ks("onBeforeInput","beforeinput",null,a,D),N.push({event:ct,listeners:at}),ct.data=W)),G1(N,t,E,a,D)}C0(N,e)})}function Vl(t,e,a){return{instance:t,listener:e,currentTarget:a}}function pu(t,e){for(var a=e+"Capture",n=[];t!==null;){var l=t,u=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||u===null||(l=sl(t,a),l!=null&&n.unshift(Vl(t,l,u)),l=sl(t,e),l!=null&&n.push(Vl(t,l,u))),t.tag===3)return n;t=t.return}return[]}function Qn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function N0(t,e,a,n,l){for(var u=e._reactName,s=[];a!==null&&a!==n;){var d=a,g=d.alternate,E=d.stateNode;if(d=d.tag,g!==null&&g===n)break;d!==5&&d!==26&&d!==27||E===null||(g=E,l?(E=sl(a,u),E!=null&&s.unshift(Vl(a,E,g))):l||(E=sl(a,u),E!=null&&s.push(Vl(a,E,g)))),a=a.return}s.length!==0&&t.push({event:e,listeners:s})}var K1=/\r\n?/g,V1=/\u0000|\uFFFD/g;function Y0(t){return(typeof t=="string"?t:""+t).replace(K1,`
`).replace(V1,"")}function H0(t,e){return e=Y0(e),Y0(t)===e}function gu(){}function zt(t,e,a,n,l,u){switch(a){case"children":typeof n=="string"?e==="body"||e==="textarea"&&n===""||gn(t,n):(typeof n=="number"||typeof n=="bigint")&&e!=="body"&&gn(t,""+n);break;case"className":Si(t,"class",n);break;case"tabIndex":Si(t,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Si(t,a,n);break;case"style":Bs(t,n,u);break;case"data":if(e!=="object"){Si(t,"data",n);break}case"src":case"href":if(n===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(a);break}n=wi(""+n),t.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(a==="formAction"?(e!=="input"&&zt(t,e,"name",l.name,l,null),zt(t,e,"formEncType",l.formEncType,l,null),zt(t,e,"formMethod",l.formMethod,l,null),zt(t,e,"formTarget",l.formTarget,l,null)):(zt(t,e,"encType",l.encType,l,null),zt(t,e,"method",l.method,l,null),zt(t,e,"target",l.target,l,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(a);break}n=wi(""+n),t.setAttribute(a,n);break;case"onClick":n!=null&&(t.onclick=gu);break;case"onScroll":n!=null&&dt("scroll",t);break;case"onScrollEnd":n!=null&&dt("scrollend",t);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(c(60));t.innerHTML=a}}break;case"multiple":t.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":t.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){t.removeAttribute("xlink:href");break}a=wi(""+n),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,""+n):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":n===!0?t.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,n):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?t.setAttribute(a,n):t.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?t.removeAttribute(a):t.setAttribute(a,n);break;case"popover":dt("beforetoggle",t),dt("toggle",t),vi(t,"popover",n);break;case"xlinkActuate":Je(t,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Je(t,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Je(t,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Je(t,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Je(t,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Je(t,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Je(t,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Je(t,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Je(t,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":vi(t,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Tp.get(a)||a,vi(t,a,n))}}function mo(t,e,a,n,l,u){switch(a){case"style":Bs(t,n,u);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(c(60));t.innerHTML=a}}break;case"children":typeof n=="string"?gn(t,n):(typeof n=="number"||typeof n=="bigint")&&gn(t,""+n);break;case"onScroll":n!=null&&dt("scroll",t);break;case"onScrollEnd":n!=null&&dt("scrollend",t);break;case"onClick":n!=null&&(t.onclick=gu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ks.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),e=a.slice(2,l?a.length-7:void 0),u=t[ie]||null,u=u!=null?u[a]:null,typeof u=="function"&&t.removeEventListener(e,u,l),typeof n=="function")){typeof u!="function"&&u!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(e,n,l);break t}a in t?t[a]=n:n===!0?t.setAttribute(a,""):vi(t,a,n)}}}function Ft(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":dt("error",t),dt("load",t);var n=!1,l=!1,u;for(u in a)if(a.hasOwnProperty(u)){var s=a[u];if(s!=null)switch(u){case"src":n=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,e));default:zt(t,e,u,s,a,null)}}l&&zt(t,e,"srcSet",a.srcSet,a,null),n&&zt(t,e,"src",a.src,a,null);return;case"input":dt("invalid",t);var d=u=s=l=null,g=null,E=null;for(n in a)if(a.hasOwnProperty(n)){var D=a[n];if(D!=null)switch(n){case"name":l=D;break;case"type":s=D;break;case"checked":g=D;break;case"defaultChecked":E=D;break;case"value":u=D;break;case"defaultValue":d=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(c(137,e));break;default:zt(t,e,n,D,a,null)}}Us(t,u,d,g,E,s,l,!1),Ti(t);return;case"select":dt("invalid",t),n=s=u=null;for(l in a)if(a.hasOwnProperty(l)&&(d=a[l],d!=null))switch(l){case"value":u=d;break;case"defaultValue":s=d;break;case"multiple":n=d;default:zt(t,e,l,d,a,null)}e=u,a=s,t.multiple=!!n,e!=null?pn(t,!!n,e,!1):a!=null&&pn(t,!!n,a,!0);return;case"textarea":dt("invalid",t),u=l=n=null;for(s in a)if(a.hasOwnProperty(s)&&(d=a[s],d!=null))switch(s){case"value":n=d;break;case"defaultValue":l=d;break;case"children":u=d;break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(c(91));break;default:zt(t,e,s,d,a,null)}Ys(t,n,l,u),Ti(t);return;case"option":for(g in a)if(a.hasOwnProperty(g)&&(n=a[g],n!=null))switch(g){case"selected":t.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:zt(t,e,g,n,a,null)}return;case"dialog":dt("beforetoggle",t),dt("toggle",t),dt("cancel",t),dt("close",t);break;case"iframe":case"object":dt("load",t);break;case"video":case"audio":for(n=0;n<Kl.length;n++)dt(Kl[n],t);break;case"image":dt("error",t),dt("load",t);break;case"details":dt("toggle",t);break;case"embed":case"source":case"link":dt("error",t),dt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(E in a)if(a.hasOwnProperty(E)&&(n=a[E],n!=null))switch(E){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,e));default:zt(t,e,E,n,a,null)}return;default:if(Or(e)){for(D in a)a.hasOwnProperty(D)&&(n=a[D],n!==void 0&&mo(t,e,D,n,a,void 0));return}}for(d in a)a.hasOwnProperty(d)&&(n=a[d],n!=null&&zt(t,e,d,n,a,null))}function Z1(t,e,a,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,u=null,s=null,d=null,g=null,E=null,D=null;for(A in a){var N=a[A];if(a.hasOwnProperty(A)&&N!=null)switch(A){case"checked":break;case"value":break;case"defaultValue":g=N;default:n.hasOwnProperty(A)||zt(t,e,A,null,n,N)}}for(var M in n){var A=n[M];if(N=a[M],n.hasOwnProperty(M)&&(A!=null||N!=null))switch(M){case"type":u=A;break;case"name":l=A;break;case"checked":E=A;break;case"defaultChecked":D=A;break;case"value":s=A;break;case"defaultValue":d=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(c(137,e));break;default:A!==N&&zt(t,e,M,A,n,N)}}Ar(t,s,d,g,E,D,u,l);return;case"select":A=s=d=M=null;for(u in a)if(g=a[u],a.hasOwnProperty(u)&&g!=null)switch(u){case"value":break;case"multiple":A=g;default:n.hasOwnProperty(u)||zt(t,e,u,null,n,g)}for(l in n)if(u=n[l],g=a[l],n.hasOwnProperty(l)&&(u!=null||g!=null))switch(l){case"value":M=u;break;case"defaultValue":d=u;break;case"multiple":s=u;default:u!==g&&zt(t,e,l,u,n,g)}e=d,a=s,n=A,M!=null?pn(t,!!a,M,!1):!!n!=!!a&&(e!=null?pn(t,!!a,e,!0):pn(t,!!a,a?[]:"",!1));return;case"textarea":A=M=null;for(d in a)if(l=a[d],a.hasOwnProperty(d)&&l!=null&&!n.hasOwnProperty(d))switch(d){case"value":break;case"children":break;default:zt(t,e,d,null,n,l)}for(s in n)if(l=n[s],u=a[s],n.hasOwnProperty(s)&&(l!=null||u!=null))switch(s){case"value":M=l;break;case"defaultValue":A=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(c(91));break;default:l!==u&&zt(t,e,s,l,n,u)}Ns(t,M,A);return;case"option":for(var lt in a)if(M=a[lt],a.hasOwnProperty(lt)&&M!=null&&!n.hasOwnProperty(lt))switch(lt){case"selected":t.selected=!1;break;default:zt(t,e,lt,null,n,M)}for(g in n)if(M=n[g],A=a[g],n.hasOwnProperty(g)&&M!==A&&(M!=null||A!=null))switch(g){case"selected":t.selected=M&&typeof M!="function"&&typeof M!="symbol";break;default:zt(t,e,g,M,n,A)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tt in a)M=a[tt],a.hasOwnProperty(tt)&&M!=null&&!n.hasOwnProperty(tt)&&zt(t,e,tt,null,n,M);for(E in n)if(M=n[E],A=a[E],n.hasOwnProperty(E)&&M!==A&&(M!=null||A!=null))switch(E){case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(c(137,e));break;default:zt(t,e,E,M,n,A)}return;default:if(Or(e)){for(var wt in a)M=a[wt],a.hasOwnProperty(wt)&&M!==void 0&&!n.hasOwnProperty(wt)&&mo(t,e,wt,void 0,n,M);for(D in n)M=n[D],A=a[D],!n.hasOwnProperty(D)||M===A||M===void 0&&A===void 0||mo(t,e,D,M,n,A);return}}for(var S in a)M=a[S],a.hasOwnProperty(S)&&M!=null&&!n.hasOwnProperty(S)&&zt(t,e,S,null,n,M);for(N in n)M=n[N],A=a[N],!n.hasOwnProperty(N)||M===A||M==null&&A==null||zt(t,e,N,M,n,A)}var po=null,go=null;function xu(t){return t.nodeType===9?t:t.ownerDocument}function B0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function q0(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function xo(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var yo=null;function $1(){var t=window.event;return t&&t.type==="popstate"?t===yo?!1:(yo=t,!0):(yo=null,!1)}var G0=typeof setTimeout=="function"?setTimeout:void 0,J1=typeof clearTimeout=="function"?clearTimeout:void 0,L0=typeof Promise=="function"?Promise:void 0,W1=typeof queueMicrotask=="function"?queueMicrotask:typeof L0<"u"?function(t){return L0.resolve(null).then(t).catch(F1)}:G0;function F1(t){setTimeout(function(){throw t})}function Da(t){return t==="head"}function X0(t,e){var a=e,n=0,l=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"){if(0<n&&8>n){a=n;var s=t.ownerDocument;if(a&1&&Zl(s.documentElement),a&2&&Zl(s.body),a&4)for(a=s.head,Zl(a),s=a.firstChild;s;){var d=s.nextSibling,g=s.nodeName;s[cl]||g==="SCRIPT"||g==="STYLE"||g==="LINK"&&s.rel.toLowerCase()==="stylesheet"||a.removeChild(s),s=d}}if(l===0){t.removeChild(u),ei(e);return}l--}else a==="$"||a==="$?"||a==="$!"?l++:n=a.charCodeAt(0)-48;else n=0;a=u}while(a);ei(e)}function bo(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":bo(a),zr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function P1(t,e,a,n){for(;t.nodeType===1;){var l=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!n&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(n){if(!t[cl])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==l.rel||t.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var u=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=Ce(t.nextSibling),t===null)break}return null}function I1(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ce(t.nextSibling),t===null))return null;return t}function vo(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function tg(t,e){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")e();else{var n=function(){e(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),t._reactRetry=n}}function Ce(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var So=null;function Q0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(e===0)return t;e--}else a==="/$"&&e++}t=t.previousSibling}return null}function K0(t,e,a){switch(e=xu(a),t){case"html":if(t=e.documentElement,!t)throw Error(c(452));return t;case"head":if(t=e.head,!t)throw Error(c(453));return t;case"body":if(t=e.body,!t)throw Error(c(454));return t;default:throw Error(c(451))}}function Zl(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);zr(t)}var Re=new Map,V0=new Set;function yu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var oa=Q.d;Q.d={f:eg,r:ag,D:ng,C:lg,L:ig,m:ug,X:cg,S:rg,M:og};function eg(){var t=oa.f(),e=ou();return t||e}function ag(t){var e=fn(t);e!==null&&e.tag===5&&e.type==="form"?dd(e):oa.r(t)}var Kn=typeof document>"u"?null:document;function Z0(t,e,a){var n=Kn;if(n&&typeof e=="string"&&e){var l=ze(e);l='link[rel="'+t+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),V0.has(l)||(V0.add(l),t={rel:t,crossOrigin:a,href:e},n.querySelector(l)===null&&(e=n.createElement("link"),Ft(e,"link",t),Xt(e),n.head.appendChild(e)))}}function ng(t){oa.D(t),Z0("dns-prefetch",t,null)}function lg(t,e){oa.C(t,e),Z0("preconnect",t,e)}function ig(t,e,a){oa.L(t,e,a);var n=Kn;if(n&&t&&e){var l='link[rel="preload"][as="'+ze(e)+'"]';e==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+ze(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+ze(a.imageSizes)+'"]')):l+='[href="'+ze(t)+'"]';var u=l;switch(e){case"style":u=Vn(t);break;case"script":u=Zn(t)}Re.has(u)||(t=w({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),Re.set(u,t),n.querySelector(l)!==null||e==="style"&&n.querySelector($l(u))||e==="script"&&n.querySelector(Jl(u))||(e=n.createElement("link"),Ft(e,"link",t),Xt(e),n.head.appendChild(e)))}}function ug(t,e){oa.m(t,e);var a=Kn;if(a&&t){var n=e&&typeof e.as=="string"?e.as:"script",l='link[rel="modulepreload"][as="'+ze(n)+'"][href="'+ze(t)+'"]',u=l;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Zn(t)}if(!Re.has(u)&&(t=w({rel:"modulepreload",href:t},e),Re.set(u,t),a.querySelector(l)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Jl(u)))return}n=a.createElement("link"),Ft(n,"link",t),Xt(n),a.head.appendChild(n)}}}function rg(t,e,a){oa.S(t,e,a);var n=Kn;if(n&&t){var l=dn(n).hoistableStyles,u=Vn(t);e=e||"default";var s=l.get(u);if(!s){var d={loading:0,preload:null};if(s=n.querySelector($l(u)))d.loading=5;else{t=w({rel:"stylesheet",href:t,"data-precedence":e},a),(a=Re.get(u))&&To(t,a);var g=s=n.createElement("link");Xt(g),Ft(g,"link",t),g._p=new Promise(function(E,D){g.onload=E,g.onerror=D}),g.addEventListener("load",function(){d.loading|=1}),g.addEventListener("error",function(){d.loading|=2}),d.loading|=4,bu(s,e,n)}s={type:"stylesheet",instance:s,count:1,state:d},l.set(u,s)}}}function cg(t,e){oa.X(t,e);var a=Kn;if(a&&t){var n=dn(a).hoistableScripts,l=Zn(t),u=n.get(l);u||(u=a.querySelector(Jl(l)),u||(t=w({src:t,async:!0},e),(e=Re.get(l))&&zo(t,e),u=a.createElement("script"),Xt(u),Ft(u,"link",t),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},n.set(l,u))}}function og(t,e){oa.M(t,e);var a=Kn;if(a&&t){var n=dn(a).hoistableScripts,l=Zn(t),u=n.get(l);u||(u=a.querySelector(Jl(l)),u||(t=w({src:t,async:!0,type:"module"},e),(e=Re.get(l))&&zo(t,e),u=a.createElement("script"),Xt(u),Ft(u,"link",t),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},n.set(l,u))}}function $0(t,e,a,n){var l=(l=et.current)?yu(l):null;if(!l)throw Error(c(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=Vn(a.href),a=dn(l).hoistableStyles,n=a.get(e),n||(n={type:"style",instance:null,count:0,state:null},a.set(e,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Vn(a.href);var u=dn(l).hoistableStyles,s=u.get(t);if(s||(l=l.ownerDocument||l,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,s),(u=l.querySelector($l(t)))&&!u._p&&(s.instance=u,s.state.loading=5),Re.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Re.set(t,a),u||sg(l,t,a,s.state))),e&&n===null)throw Error(c(528,""));return s}if(e&&n!==null)throw Error(c(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Zn(a),a=dn(l).hoistableScripts,n=a.get(e),n||(n={type:"script",instance:null,count:0,state:null},a.set(e,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,t))}}function Vn(t){return'href="'+ze(t)+'"'}function $l(t){return'link[rel="stylesheet"]['+t+"]"}function J0(t){return w({},t,{"data-precedence":t.precedence,precedence:null})}function sg(t,e,a,n){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?n.loading=1:(e=t.createElement("link"),n.preload=e,e.addEventListener("load",function(){return n.loading|=1}),e.addEventListener("error",function(){return n.loading|=2}),Ft(e,"link",a),Xt(e),t.head.appendChild(e))}function Zn(t){return'[src="'+ze(t)+'"]'}function Jl(t){return"script[async]"+t}function W0(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var n=t.querySelector('style[data-href~="'+ze(a.href)+'"]');if(n)return e.instance=n,Xt(n),n;var l=w({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(t.ownerDocument||t).createElement("style"),Xt(n),Ft(n,"style",l),bu(n,a.precedence,t),e.instance=n;case"stylesheet":l=Vn(a.href);var u=t.querySelector($l(l));if(u)return e.state.loading|=4,e.instance=u,Xt(u),u;n=J0(a),(l=Re.get(l))&&To(n,l),u=(t.ownerDocument||t).createElement("link"),Xt(u);var s=u;return s._p=new Promise(function(d,g){s.onload=d,s.onerror=g}),Ft(u,"link",n),e.state.loading|=4,bu(u,a.precedence,t),e.instance=u;case"script":return u=Zn(a.src),(l=t.querySelector(Jl(u)))?(e.instance=l,Xt(l),l):(n=a,(l=Re.get(u))&&(n=w({},a),zo(n,l)),t=t.ownerDocument||t,l=t.createElement("script"),Xt(l),Ft(l,"link",n),t.head.appendChild(l),e.instance=l);case"void":return null;default:throw Error(c(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(n=e.instance,e.state.loading|=4,bu(n,a.precedence,t));return e.instance}function bu(t,e,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=n.length?n[n.length-1]:null,u=l,s=0;s<n.length;s++){var d=n[s];if(d.dataset.precedence===e)u=d;else if(u!==l)break}u?u.parentNode.insertBefore(t,u.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function To(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function zo(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var vu=null;function F0(t,e,a){if(vu===null){var n=new Map,l=vu=new Map;l.set(a,n)}else l=vu,n=l.get(a),n||(n=new Map,l.set(a,n));if(n.has(t))return n;for(n.set(t,null),a=a.getElementsByTagName(t),l=0;l<a.length;l++){var u=a[l];if(!(u[cl]||u[It]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var s=u.getAttribute(e)||"";s=t+s;var d=n.get(s);d?d.push(u):n.set(s,[u])}}return n}function P0(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function fg(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function I0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Wl=null;function dg(){}function hg(t,e,a){if(Wl===null)throw Error(c(475));var n=Wl;if(e.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var l=Vn(a.href),u=t.querySelector($l(l));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(n.count++,n=Su.bind(n),t.then(n,n)),e.state.loading|=4,e.instance=u,Xt(u);return}u=t.ownerDocument||t,a=J0(a),(l=Re.get(l))&&To(a,l),u=u.createElement("link"),Xt(u);var s=u;s._p=new Promise(function(d,g){s.onload=d,s.onerror=g}),Ft(u,"link",a),e.instance=u}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(n.count++,e=Su.bind(n),t.addEventListener("load",e),t.addEventListener("error",e))}}function mg(){if(Wl===null)throw Error(c(475));var t=Wl;return t.stylesheets&&t.count===0&&wo(t,t.stylesheets),0<t.count?function(e){var a=setTimeout(function(){if(t.stylesheets&&wo(t,t.stylesheets),t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Su(){if(this.count--,this.count===0){if(this.stylesheets)wo(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Tu=null;function wo(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Tu=new Map,e.forEach(pg,t),Tu=null,Su.call(t))}function pg(t,e){if(!(e.state.loading&4)){var a=Tu.get(t);if(a)var n=a.get(null);else{a=new Map,Tu.set(t,a);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<l.length;u++){var s=l[u];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(a.set(s.dataset.precedence,s),n=s)}n&&a.set(null,n)}l=e.instance,s=l.getAttribute("data-precedence"),u=a.get(s)||n,u===n&&a.set(null,l),a.set(s,l),this.count++,n=Su.bind(this),l.addEventListener("load",n),l.addEventListener("error",n),u?u.parentNode.insertBefore(l,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),e.state.loading|=4}}var Fl={$$typeof:q,Provider:null,Consumer:null,_currentValue:I,_currentValue2:I,_threadCount:0};function gg(t,e,a,n,l,u,s,d){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=br(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=br(0),this.hiddenUpdates=br(null),this.identifierPrefix=n,this.onUncaughtError=l,this.onCaughtError=u,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=d,this.incompleteTransitions=new Map}function th(t,e,a,n,l,u,s,d,g,E,D,N){return t=new gg(t,e,a,s,d,g,E,N),e=1,u===!0&&(e|=24),u=me(3,null,null,e),t.current=u,u.stateNode=t,e=lc(),e.refCount++,t.pooledCache=e,e.refCount++,u.memoizedState={element:n,isDehydrated:a,cache:e},cc(u),t}function eh(t){return t?(t=wn,t):wn}function ah(t,e,a,n,l,u){l=eh(l),n.context===null?n.context=l:n.pendingContext=l,n=ba(e),n.payload={element:a},u=u===void 0?null:u,u!==null&&(n.callback=u),a=va(t,n,e),a!==null&&(be(a,t,e),Al(a,t,e))}function nh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function Eo(t,e){nh(t,e),(t=t.alternate)&&nh(t,e)}function lh(t){if(t.tag===13){var e=zn(t,67108864);e!==null&&be(e,t,67108864),Eo(t,67108864)}}var zu=!0;function xg(t,e,a,n){var l=j.T;j.T=null;var u=Q.p;try{Q.p=2,Mo(t,e,a,n)}finally{Q.p=u,j.T=l}}function yg(t,e,a,n){var l=j.T;j.T=null;var u=Q.p;try{Q.p=8,Mo(t,e,a,n)}finally{Q.p=u,j.T=l}}function Mo(t,e,a,n){if(zu){var l=Ao(n);if(l===null)ho(t,e,n,wu,a),uh(t,n);else if(vg(l,t,e,a,n))n.stopPropagation();else if(uh(t,n),e&4&&-1<bg.indexOf(t)){for(;l!==null;){var u=fn(l);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var s=Ga(u.pendingLanes);if(s!==0){var d=u;for(d.pendingLanes|=2,d.entangledLanes|=2;s;){var g=1<<31-de(s);d.entanglements[1]|=g,s&=~g}Ge(u),(bt&6)===0&&(ru=Ne()+500,Ql(0))}}break;case 13:d=zn(u,2),d!==null&&be(d,u,2),ou(),Eo(u,2)}if(u=Ao(n),u===null&&ho(t,e,n,wu,a),u===l)break;l=u}l!==null&&n.stopPropagation()}else ho(t,e,n,null,a)}}function Ao(t){return t=jr(t),ko(t)}var wu=null;function ko(t){if(wu=null,t=sn(t),t!==null){var e=h(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=b(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return wu=t,null}function ih(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(lp()){case ys:return 2;case bs:return 8;case gi:case ip:return 32;case vs:return 268435456;default:return 32}default:return 32}}var Oo=!1,_a=null,Ca=null,Ua=null,Pl=new Map,Il=new Map,Na=[],bg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function uh(t,e){switch(t){case"focusin":case"focusout":_a=null;break;case"dragenter":case"dragleave":Ca=null;break;case"mouseover":case"mouseout":Ua=null;break;case"pointerover":case"pointerout":Pl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Il.delete(e.pointerId)}}function ti(t,e,a,n,l,u){return t===null||t.nativeEvent!==u?(t={blockedOn:e,domEventName:a,eventSystemFlags:n,nativeEvent:u,targetContainers:[l]},e!==null&&(e=fn(e),e!==null&&lh(e)),t):(t.eventSystemFlags|=n,e=t.targetContainers,l!==null&&e.indexOf(l)===-1&&e.push(l),t)}function vg(t,e,a,n,l){switch(e){case"focusin":return _a=ti(_a,t,e,a,n,l),!0;case"dragenter":return Ca=ti(Ca,t,e,a,n,l),!0;case"mouseover":return Ua=ti(Ua,t,e,a,n,l),!0;case"pointerover":var u=l.pointerId;return Pl.set(u,ti(Pl.get(u)||null,t,e,a,n,l)),!0;case"gotpointercapture":return u=l.pointerId,Il.set(u,ti(Il.get(u)||null,t,e,a,n,l)),!0}return!1}function rh(t){var e=sn(t.target);if(e!==null){var a=h(e);if(a!==null){if(e=a.tag,e===13){if(e=b(a),e!==null){t.blockedOn=e,hp(t.priority,function(){if(a.tag===13){var n=ye();n=vr(n);var l=zn(a,n);l!==null&&be(l,a,n),Eo(a,n)}});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Eu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=Ao(t.nativeEvent);if(a===null){a=t.nativeEvent;var n=new a.constructor(a.type,a);Rr=n,a.target.dispatchEvent(n),Rr=null}else return e=fn(a),e!==null&&lh(e),t.blockedOn=a,!1;e.shift()}return!0}function ch(t,e,a){Eu(t)&&a.delete(e)}function Sg(){Oo=!1,_a!==null&&Eu(_a)&&(_a=null),Ca!==null&&Eu(Ca)&&(Ca=null),Ua!==null&&Eu(Ua)&&(Ua=null),Pl.forEach(ch),Il.forEach(ch)}function Mu(t,e){t.blockedOn===e&&(t.blockedOn=null,Oo||(Oo=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Sg)))}var Au=null;function oh(t){Au!==t&&(Au=t,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){Au===t&&(Au=null);for(var e=0;e<t.length;e+=3){var a=t[e],n=t[e+1],l=t[e+2];if(typeof n!="function"){if(ko(n||a)===null)continue;break}var u=fn(a);u!==null&&(t.splice(e,3),e-=3,Ac(u,{pending:!0,data:l,method:a.method,action:n},n,l))}}))}function ei(t){function e(g){return Mu(g,t)}_a!==null&&Mu(_a,t),Ca!==null&&Mu(Ca,t),Ua!==null&&Mu(Ua,t),Pl.forEach(e),Il.forEach(e);for(var a=0;a<Na.length;a++){var n=Na[a];n.blockedOn===t&&(n.blockedOn=null)}for(;0<Na.length&&(a=Na[0],a.blockedOn===null);)rh(a),a.blockedOn===null&&Na.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var l=a[n],u=a[n+1],s=l[ie]||null;if(typeof u=="function")s||oh(a);else if(s){var d=null;if(u&&u.hasAttribute("formAction")){if(l=u,s=u[ie]||null)d=s.formAction;else if(ko(l)!==null)continue}else d=s.action;typeof d=="function"?a[n+1]=d:(a.splice(n,3),n-=3),oh(a)}}}function Ro(t){this._internalRoot=t}ku.prototype.render=Ro.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(c(409));var a=e.current,n=ye();ah(a,n,t,e,null,null)},ku.prototype.unmount=Ro.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ah(t.current,2,null,t,null,null),ou(),e[on]=null}};function ku(t){this._internalRoot=t}ku.prototype.unstable_scheduleHydration=function(t){if(t){var e=Es();t={blockedOn:null,target:t,priority:e};for(var a=0;a<Na.length&&e!==0&&e<Na[a].priority;a++);Na.splice(a,0,t),a===0&&rh(t)}};var sh=r.version;if(sh!=="19.1.0")throw Error(c(527,sh,"19.1.0"));Q.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(c(188)):(t=Object.keys(t).join(","),Error(c(268,t)));return t=x(e),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var Tg={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:j,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ou=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ou.isDisabled&&Ou.supportsFiber)try{il=Ou.inject(Tg),fe=Ou}catch{}}return ni.createRoot=function(t,e){if(!f(t))throw Error(c(299));var a=!1,n="",l=Md,u=Ad,s=kd,d=null;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onUncaughtError!==void 0&&(l=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(s=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(d=e.unstable_transitionCallbacks)),e=th(t,1,!1,null,null,a,n,l,u,s,d,null),t[on]=e.current,fo(t),new Ro(e)},ni.hydrateRoot=function(t,e,a){if(!f(t))throw Error(c(299));var n=!1,l="",u=Md,s=Ad,d=kd,g=null,E=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(s=a.onCaughtError),a.onRecoverableError!==void 0&&(d=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(g=a.unstable_transitionCallbacks),a.formState!==void 0&&(E=a.formState)),e=th(t,1,!0,e,a??null,n,l,u,s,d,g,E),e.context=eh(null),a=e.current,n=ye(),n=vr(n),l=ba(n),l.callback=null,va(a,l,n),a=n,e.current.lanes=a,rl(e,a),Ge(e),t[on]=e.current,fo(t),new ku(e)},ni.version="19.1.0",ni}var vh;function _g(){if(vh)return _o.exports;vh=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(r){console.error(r)}}return i(),_o.exports=Dg(),_o.exports}var Cg=_g(),se=function(){return se=Object.assign||function(r){for(var o,c=1,f=arguments.length;c<f;c++){o=arguments[c];for(var h in o)Object.prototype.hasOwnProperty.call(o,h)&&(r[h]=o[h])}return r},se.apply(this,arguments)};function er(i,r,o){if(o||arguments.length===2)for(var c=0,f=r.length,h;c<f;c++)(h||!(c in r))&&(h||(h=Array.prototype.slice.call(r,0,c)),h[c]=r[c]);return i.concat(h||Array.prototype.slice.call(r))}var At="-ms-",ci="-moz-",xt="-webkit-",cm="comm",rr="rule",cs="decl",Ug="@import",om="@keyframes",Ng="@layer",sm=Math.abs,os=String.fromCharCode,Po=Object.assign;function Yg(i,r){return Zt(i,0)^45?(((r<<2^Zt(i,0))<<2^Zt(i,1))<<2^Zt(i,2))<<2^Zt(i,3):0}function fm(i){return i.trim()}function sa(i,r){return(i=r.exec(i))?i[0]:i}function ut(i,r,o){return i.replace(r,o)}function $u(i,r,o){return i.indexOf(r,o)}function Zt(i,r){return i.charCodeAt(r)|0}function Fn(i,r,o){return i.slice(r,o)}function Xe(i){return i.length}function dm(i){return i.length}function ri(i,r){return r.push(i),i}function Hg(i,r){return i.map(r).join("")}function Sh(i,r){return i.filter(function(o){return!sa(o,r)})}var cr=1,Pn=1,hm=0,je=0,Yt=0,al="";function or(i,r,o,c,f,h,b,T){return{value:i,root:r,parent:o,type:c,props:f,children:h,line:cr,column:Pn,length:b,return:"",siblings:T}}function Ha(i,r){return Po(or("",null,null,"",null,null,0,i.siblings),i,{length:-i.length},r)}function $n(i){for(;i.root;)i=Ha(i.root,{children:[i]});ri(i,i.siblings)}function Bg(){return Yt}function qg(){return Yt=je>0?Zt(al,--je):0,Pn--,Yt===10&&(Pn=1,cr--),Yt}function Ue(){return Yt=je<hm?Zt(al,je++):0,Pn++,Yt===10&&(Pn=1,cr++),Yt}function rn(){return Zt(al,je)}function Ju(){return je}function sr(i,r){return Fn(al,i,r)}function Io(i){switch(i){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Gg(i){return cr=Pn=1,hm=Xe(al=i),je=0,[]}function Lg(i){return al="",i}function Yo(i){return fm(sr(je-1,ts(i===91?i+2:i===40?i+1:i)))}function Xg(i){for(;(Yt=rn())&&Yt<33;)Ue();return Io(i)>2||Io(Yt)>3?"":" "}function Qg(i,r){for(;--r&&Ue()&&!(Yt<48||Yt>102||Yt>57&&Yt<65||Yt>70&&Yt<97););return sr(i,Ju()+(r<6&&rn()==32&&Ue()==32))}function ts(i){for(;Ue();)switch(Yt){case i:return je;case 34:case 39:i!==34&&i!==39&&ts(Yt);break;case 40:i===41&&ts(i);break;case 92:Ue();break}return je}function Kg(i,r){for(;Ue()&&i+Yt!==57;)if(i+Yt===84&&rn()===47)break;return"/*"+sr(r,je-1)+"*"+os(i===47?i:Ue())}function Vg(i){for(;!Io(rn());)Ue();return sr(i,je)}function Zg(i){return Lg(Wu("",null,null,null,[""],i=Gg(i),0,[0],i))}function Wu(i,r,o,c,f,h,b,T,x){for(var p=0,w=0,U=b,k=0,H=0,R=0,L=1,G=1,B=1,V=0,q="",F=f,Z=h,nt=c,J=q;G;)switch(R=V,V=Ue()){case 40:if(R!=108&&Zt(J,U-1)==58){$u(J+=ut(Yo(V),"&","&\f"),"&\f",sm(p?T[p-1]:0))!=-1&&(B=-1);break}case 34:case 39:case 91:J+=Yo(V);break;case 9:case 10:case 13:case 32:J+=Xg(R);break;case 92:J+=Qg(Ju()-1,7);continue;case 47:switch(rn()){case 42:case 47:ri($g(Kg(Ue(),Ju()),r,o,x),x);break;default:J+="/"}break;case 123*L:T[p++]=Xe(J)*B;case 125*L:case 59:case 0:switch(V){case 0:case 125:G=0;case 59+w:B==-1&&(J=ut(J,/\f/g,"")),H>0&&Xe(J)-U&&ri(H>32?zh(J+";",c,o,U-1,x):zh(ut(J," ","")+";",c,o,U-2,x),x);break;case 59:J+=";";default:if(ri(nt=Th(J,r,o,p,w,f,T,q,F=[],Z=[],U,h),h),V===123)if(w===0)Wu(J,r,nt,nt,F,h,U,T,Z);else switch(k===99&&Zt(J,3)===110?100:k){case 100:case 108:case 109:case 115:Wu(i,nt,nt,c&&ri(Th(i,nt,nt,0,0,f,T,q,f,F=[],U,Z),Z),f,Z,U,T,c?F:Z);break;default:Wu(J,nt,nt,nt,[""],Z,0,T,Z)}}p=w=H=0,L=B=1,q=J="",U=b;break;case 58:U=1+Xe(J),H=R;default:if(L<1){if(V==123)--L;else if(V==125&&L++==0&&qg()==125)continue}switch(J+=os(V),V*L){case 38:B=w>0?1:(J+="\f",-1);break;case 44:T[p++]=(Xe(J)-1)*B,B=1;break;case 64:rn()===45&&(J+=Yo(Ue())),k=rn(),w=U=Xe(q=J+=Vg(Ju())),V++;break;case 45:R===45&&Xe(J)==2&&(L=0)}}return h}function Th(i,r,o,c,f,h,b,T,x,p,w,U){for(var k=f-1,H=f===0?h:[""],R=dm(H),L=0,G=0,B=0;L<c;++L)for(var V=0,q=Fn(i,k+1,k=sm(G=b[L])),F=i;V<R;++V)(F=fm(G>0?H[V]+" "+q:ut(q,/&\f/g,H[V])))&&(x[B++]=F);return or(i,r,o,f===0?rr:T,x,p,w,U)}function $g(i,r,o,c){return or(i,r,o,cm,os(Bg()),Fn(i,2,-2),0,c)}function zh(i,r,o,c,f){return or(i,r,o,cs,Fn(i,0,c),Fn(i,c+1,-1),c,f)}function mm(i,r,o){switch(Yg(i,r)){case 5103:return xt+"print-"+i+i;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return xt+i+i;case 4789:return ci+i+i;case 5349:case 4246:case 4810:case 6968:case 2756:return xt+i+ci+i+At+i+i;case 5936:switch(Zt(i,r+11)){case 114:return xt+i+At+ut(i,/[svh]\w+-[tblr]{2}/,"tb")+i;case 108:return xt+i+At+ut(i,/[svh]\w+-[tblr]{2}/,"tb-rl")+i;case 45:return xt+i+At+ut(i,/[svh]\w+-[tblr]{2}/,"lr")+i}case 6828:case 4268:case 2903:return xt+i+At+i+i;case 6165:return xt+i+At+"flex-"+i+i;case 5187:return xt+i+ut(i,/(\w+).+(:[^]+)/,xt+"box-$1$2"+At+"flex-$1$2")+i;case 5443:return xt+i+At+"flex-item-"+ut(i,/flex-|-self/g,"")+(sa(i,/flex-|baseline/)?"":At+"grid-row-"+ut(i,/flex-|-self/g,""))+i;case 4675:return xt+i+At+"flex-line-pack"+ut(i,/align-content|flex-|-self/g,"")+i;case 5548:return xt+i+At+ut(i,"shrink","negative")+i;case 5292:return xt+i+At+ut(i,"basis","preferred-size")+i;case 6060:return xt+"box-"+ut(i,"-grow","")+xt+i+At+ut(i,"grow","positive")+i;case 4554:return xt+ut(i,/([^-])(transform)/g,"$1"+xt+"$2")+i;case 6187:return ut(ut(ut(i,/(zoom-|grab)/,xt+"$1"),/(image-set)/,xt+"$1"),i,"")+i;case 5495:case 3959:return ut(i,/(image-set\([^]*)/,xt+"$1$`$1");case 4968:return ut(ut(i,/(.+:)(flex-)?(.*)/,xt+"box-pack:$3"+At+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+xt+i+i;case 4200:if(!sa(i,/flex-|baseline/))return At+"grid-column-align"+Fn(i,r)+i;break;case 2592:case 3360:return At+ut(i,"template-","")+i;case 4384:case 3616:return o&&o.some(function(c,f){return r=f,sa(c.props,/grid-\w+-end/)})?~$u(i+(o=o[r].value),"span",0)?i:At+ut(i,"-start","")+i+At+"grid-row-span:"+(~$u(o,"span",0)?sa(o,/\d+/):+sa(o,/\d+/)-+sa(i,/\d+/))+";":At+ut(i,"-start","")+i;case 4896:case 4128:return o&&o.some(function(c){return sa(c.props,/grid-\w+-start/)})?i:At+ut(ut(i,"-end","-span"),"span ","")+i;case 4095:case 3583:case 4068:case 2532:return ut(i,/(.+)-inline(.+)/,xt+"$1$2")+i;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Xe(i)-1-r>6)switch(Zt(i,r+1)){case 109:if(Zt(i,r+4)!==45)break;case 102:return ut(i,/(.+:)(.+)-([^]+)/,"$1"+xt+"$2-$3$1"+ci+(Zt(i,r+3)==108?"$3":"$2-$3"))+i;case 115:return~$u(i,"stretch",0)?mm(ut(i,"stretch","fill-available"),r,o)+i:i}break;case 5152:case 5920:return ut(i,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(c,f,h,b,T,x,p){return At+f+":"+h+p+(b?At+f+"-span:"+(T?x:+x-+h)+p:"")+i});case 4949:if(Zt(i,r+6)===121)return ut(i,":",":"+xt)+i;break;case 6444:switch(Zt(i,Zt(i,14)===45?18:11)){case 120:return ut(i,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+xt+(Zt(i,14)===45?"inline-":"")+"box$3$1"+xt+"$2$3$1"+At+"$2box$3")+i;case 100:return ut(i,":",":"+At)+i}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ut(i,"scroll-","scroll-snap-")+i}return i}function ar(i,r){for(var o="",c=0;c<i.length;c++)o+=r(i[c],c,i,r)||"";return o}function Jg(i,r,o,c){switch(i.type){case Ng:if(i.children.length)break;case Ug:case cs:return i.return=i.return||i.value;case cm:return"";case om:return i.return=i.value+"{"+ar(i.children,c)+"}";case rr:if(!Xe(i.value=i.props.join(",")))return""}return Xe(o=ar(i.children,c))?i.return=i.value+"{"+o+"}":""}function Wg(i){var r=dm(i);return function(o,c,f,h){for(var b="",T=0;T<r;T++)b+=i[T](o,c,f,h)||"";return b}}function Fg(i){return function(r){r.root||(r=r.return)&&i(r)}}function Pg(i,r,o,c){if(i.length>-1&&!i.return)switch(i.type){case cs:i.return=mm(i.value,i.length,o);return;case om:return ar([Ha(i,{value:ut(i.value,"@","@"+xt)})],c);case rr:if(i.length)return Hg(o=i.props,function(f){switch(sa(f,c=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":$n(Ha(i,{props:[ut(f,/:(read-\w+)/,":"+ci+"$1")]})),$n(Ha(i,{props:[f]})),Po(i,{props:Sh(o,c)});break;case"::placeholder":$n(Ha(i,{props:[ut(f,/:(plac\w+)/,":"+xt+"input-$1")]})),$n(Ha(i,{props:[ut(f,/:(plac\w+)/,":"+ci+"$1")]})),$n(Ha(i,{props:[ut(f,/:(plac\w+)/,At+"input-$1")]})),$n(Ha(i,{props:[f]})),Po(i,{props:Sh(o,c)});break}return""})}}var Ig={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ve={},In=typeof process<"u"&&ve!==void 0&&(ve.REACT_APP_SC_ATTR||ve.SC_ATTR)||"data-styled",pm="active",gm="data-styled-version",fr="6.1.17",ss=`/*!sc*/
`,nr=typeof window<"u"&&"HTMLElement"in window,tx=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&ve!==void 0&&ve.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ve.REACT_APP_SC_DISABLE_SPEEDY!==""?ve.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ve.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&ve!==void 0&&ve.SC_DISABLE_SPEEDY!==void 0&&ve.SC_DISABLE_SPEEDY!==""&&ve.SC_DISABLE_SPEEDY!=="false"&&ve.SC_DISABLE_SPEEDY),dr=Object.freeze([]),tl=Object.freeze({});function ex(i,r,o){return o===void 0&&(o=tl),i.theme!==o.theme&&i.theme||r||o.theme}var xm=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),ax=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,nx=/(^-|-$)/g;function wh(i){return i.replace(ax,"-").replace(nx,"")}var lx=/(a)(d)/gi,Ru=52,Eh=function(i){return String.fromCharCode(i+(i>25?39:97))};function es(i){var r,o="";for(r=Math.abs(i);r>Ru;r=r/Ru|0)o=Eh(r%Ru)+o;return(Eh(r%Ru)+o).replace(lx,"$1-$2")}var Ho,ym=5381,Jn=function(i,r){for(var o=r.length;o;)i=33*i^r.charCodeAt(--o);return i},bm=function(i){return Jn(ym,i)};function ix(i){return es(bm(i)>>>0)}function ux(i){return i.displayName||i.name||"Component"}function Bo(i){return typeof i=="string"&&!0}var vm=typeof Symbol=="function"&&Symbol.for,Sm=vm?Symbol.for("react.memo"):60115,rx=vm?Symbol.for("react.forward_ref"):60112,cx={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ox={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Tm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},sx=((Ho={})[rx]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ho[Sm]=Tm,Ho);function Mh(i){return("type"in(r=i)&&r.type.$$typeof)===Sm?Tm:"$$typeof"in i?sx[i.$$typeof]:cx;var r}var fx=Object.defineProperty,dx=Object.getOwnPropertyNames,Ah=Object.getOwnPropertySymbols,hx=Object.getOwnPropertyDescriptor,mx=Object.getPrototypeOf,kh=Object.prototype;function zm(i,r,o){if(typeof r!="string"){if(kh){var c=mx(r);c&&c!==kh&&zm(i,c,o)}var f=dx(r);Ah&&(f=f.concat(Ah(r)));for(var h=Mh(i),b=Mh(r),T=0;T<f.length;++T){var x=f[T];if(!(x in ox||o&&o[x]||b&&x in b||h&&x in h)){var p=hx(r,x);try{fx(i,x,p)}catch{}}}}return i}function el(i){return typeof i=="function"}function fs(i){return typeof i=="object"&&"styledComponentId"in i}function un(i,r){return i&&r?"".concat(i," ").concat(r):i||r||""}function Oh(i,r){if(i.length===0)return"";for(var o=i[0],c=1;c<i.length;c++)o+=i[c];return o}function si(i){return i!==null&&typeof i=="object"&&i.constructor.name===Object.name&&!("props"in i&&i.$$typeof)}function as(i,r,o){if(o===void 0&&(o=!1),!o&&!si(i)&&!Array.isArray(i))return r;if(Array.isArray(r))for(var c=0;c<r.length;c++)i[c]=as(i[c],r[c]);else if(si(r))for(var c in r)i[c]=as(i[c],r[c]);return i}function ds(i,r){Object.defineProperty(i,"toString",{value:r})}function di(i){for(var r=[],o=1;o<arguments.length;o++)r[o-1]=arguments[o];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i," for more information.").concat(r.length>0?" Args: ".concat(r.join(", ")):""))}var px=function(){function i(r){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=r}return i.prototype.indexOfGroup=function(r){for(var o=0,c=0;c<r;c++)o+=this.groupSizes[c];return o},i.prototype.insertRules=function(r,o){if(r>=this.groupSizes.length){for(var c=this.groupSizes,f=c.length,h=f;r>=h;)if((h<<=1)<0)throw di(16,"".concat(r));this.groupSizes=new Uint32Array(h),this.groupSizes.set(c),this.length=h;for(var b=f;b<h;b++)this.groupSizes[b]=0}for(var T=this.indexOfGroup(r+1),x=(b=0,o.length);b<x;b++)this.tag.insertRule(T,o[b])&&(this.groupSizes[r]++,T++)},i.prototype.clearGroup=function(r){if(r<this.length){var o=this.groupSizes[r],c=this.indexOfGroup(r),f=c+o;this.groupSizes[r]=0;for(var h=c;h<f;h++)this.tag.deleteRule(c)}},i.prototype.getGroup=function(r){var o="";if(r>=this.length||this.groupSizes[r]===0)return o;for(var c=this.groupSizes[r],f=this.indexOfGroup(r),h=f+c,b=f;b<h;b++)o+="".concat(this.tag.getRule(b)).concat(ss);return o},i}(),Fu=new Map,lr=new Map,Pu=1,ju=function(i){if(Fu.has(i))return Fu.get(i);for(;lr.has(Pu);)Pu++;var r=Pu++;return Fu.set(i,r),lr.set(r,i),r},gx=function(i,r){Pu=r+1,Fu.set(i,r),lr.set(r,i)},xx="style[".concat(In,"][").concat(gm,'="').concat(fr,'"]'),yx=new RegExp("^".concat(In,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),bx=function(i,r,o){for(var c,f=o.split(","),h=0,b=f.length;h<b;h++)(c=f[h])&&i.registerName(r,c)},vx=function(i,r){for(var o,c=((o=r.textContent)!==null&&o!==void 0?o:"").split(ss),f=[],h=0,b=c.length;h<b;h++){var T=c[h].trim();if(T){var x=T.match(yx);if(x){var p=0|parseInt(x[1],10),w=x[2];p!==0&&(gx(w,p),bx(i,w,x[3]),i.getTag().insertRules(p,f)),f.length=0}else f.push(T)}}},Rh=function(i){for(var r=document.querySelectorAll(xx),o=0,c=r.length;o<c;o++){var f=r[o];f&&f.getAttribute(In)!==pm&&(vx(i,f),f.parentNode&&f.parentNode.removeChild(f))}};function Sx(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var wm=function(i){var r=document.head,o=i||r,c=document.createElement("style"),f=function(T){var x=Array.from(T.querySelectorAll("style[".concat(In,"]")));return x[x.length-1]}(o),h=f!==void 0?f.nextSibling:null;c.setAttribute(In,pm),c.setAttribute(gm,fr);var b=Sx();return b&&c.setAttribute("nonce",b),o.insertBefore(c,h),c},Tx=function(){function i(r){this.element=wm(r),this.element.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var c=document.styleSheets,f=0,h=c.length;f<h;f++){var b=c[f];if(b.ownerNode===o)return b}throw di(17)}(this.element),this.length=0}return i.prototype.insertRule=function(r,o){try{return this.sheet.insertRule(o,r),this.length++,!0}catch{return!1}},i.prototype.deleteRule=function(r){this.sheet.deleteRule(r),this.length--},i.prototype.getRule=function(r){var o=this.sheet.cssRules[r];return o&&o.cssText?o.cssText:""},i}(),zx=function(){function i(r){this.element=wm(r),this.nodes=this.element.childNodes,this.length=0}return i.prototype.insertRule=function(r,o){if(r<=this.length&&r>=0){var c=document.createTextNode(o);return this.element.insertBefore(c,this.nodes[r]||null),this.length++,!0}return!1},i.prototype.deleteRule=function(r){this.element.removeChild(this.nodes[r]),this.length--},i.prototype.getRule=function(r){return r<this.length?this.nodes[r].textContent:""},i}(),wx=function(){function i(r){this.rules=[],this.length=0}return i.prototype.insertRule=function(r,o){return r<=this.length&&(this.rules.splice(r,0,o),this.length++,!0)},i.prototype.deleteRule=function(r){this.rules.splice(r,1),this.length--},i.prototype.getRule=function(r){return r<this.length?this.rules[r]:""},i}(),jh=nr,Ex={isServer:!nr,useCSSOMInjection:!tx},Em=function(){function i(r,o,c){r===void 0&&(r=tl),o===void 0&&(o={});var f=this;this.options=se(se({},Ex),r),this.gs=o,this.names=new Map(c),this.server=!!r.isServer,!this.server&&nr&&jh&&(jh=!1,Rh(this)),ds(this,function(){return function(h){for(var b=h.getTag(),T=b.length,x="",p=function(U){var k=function(B){return lr.get(B)}(U);if(k===void 0)return"continue";var H=h.names.get(k),R=b.getGroup(U);if(H===void 0||!H.size||R.length===0)return"continue";var L="".concat(In,".g").concat(U,'[id="').concat(k,'"]'),G="";H!==void 0&&H.forEach(function(B){B.length>0&&(G+="".concat(B,","))}),x+="".concat(R).concat(L,'{content:"').concat(G,'"}').concat(ss)},w=0;w<T;w++)p(w);return x}(f)})}return i.registerId=function(r){return ju(r)},i.prototype.rehydrate=function(){!this.server&&nr&&Rh(this)},i.prototype.reconstructWithOptions=function(r,o){return o===void 0&&(o=!0),new i(se(se({},this.options),r),this.gs,o&&this.names||void 0)},i.prototype.allocateGSInstance=function(r){return this.gs[r]=(this.gs[r]||0)+1},i.prototype.getTag=function(){return this.tag||(this.tag=(r=function(o){var c=o.useCSSOMInjection,f=o.target;return o.isServer?new wx(f):c?new Tx(f):new zx(f)}(this.options),new px(r)));var r},i.prototype.hasNameForId=function(r,o){return this.names.has(r)&&this.names.get(r).has(o)},i.prototype.registerName=function(r,o){if(ju(r),this.names.has(r))this.names.get(r).add(o);else{var c=new Set;c.add(o),this.names.set(r,c)}},i.prototype.insertRules=function(r,o,c){this.registerName(r,o),this.getTag().insertRules(ju(r),c)},i.prototype.clearNames=function(r){this.names.has(r)&&this.names.get(r).clear()},i.prototype.clearRules=function(r){this.getTag().clearGroup(ju(r)),this.clearNames(r)},i.prototype.clearTag=function(){this.tag=void 0},i}(),Mx=/&/g,Ax=/^\s*\/\/.*$/gm;function Mm(i,r){return i.map(function(o){return o.type==="rule"&&(o.value="".concat(r," ").concat(o.value),o.value=o.value.replaceAll(",",",".concat(r," ")),o.props=o.props.map(function(c){return"".concat(r," ").concat(c)})),Array.isArray(o.children)&&o.type!=="@keyframes"&&(o.children=Mm(o.children,r)),o})}function kx(i){var r,o,c,f=tl,h=f.options,b=h===void 0?tl:h,T=f.plugins,x=T===void 0?dr:T,p=function(k,H,R){return R.startsWith(o)&&R.endsWith(o)&&R.replaceAll(o,"").length>0?".".concat(r):k},w=x.slice();w.push(function(k){k.type===rr&&k.value.includes("&")&&(k.props[0]=k.props[0].replace(Mx,o).replace(c,p))}),b.prefix&&w.push(Pg),w.push(Jg);var U=function(k,H,R,L){H===void 0&&(H=""),R===void 0&&(R=""),L===void 0&&(L="&"),r=L,o=H,c=new RegExp("\\".concat(o,"\\b"),"g");var G=k.replace(Ax,""),B=Zg(R||H?"".concat(R," ").concat(H," { ").concat(G," }"):G);b.namespace&&(B=Mm(B,b.namespace));var V=[];return ar(B,Wg(w.concat(Fg(function(q){return V.push(q)})))),V};return U.hash=x.length?x.reduce(function(k,H){return H.name||di(15),Jn(k,H.name)},ym).toString():"",U}var Ox=new Em,ns=kx(),Am=oi.createContext({shouldForwardProp:void 0,styleSheet:Ox,stylis:ns});Am.Consumer;oi.createContext(void 0);function Dh(){return _.useContext(Am)}var Rx=function(){function i(r,o){var c=this;this.inject=function(f,h){h===void 0&&(h=ns);var b=c.name+h.hash;f.hasNameForId(c.id,b)||f.insertRules(c.id,b,h(c.rules,b,"@keyframes"))},this.name=r,this.id="sc-keyframes-".concat(r),this.rules=o,ds(this,function(){throw di(12,String(c.name))})}return i.prototype.getName=function(r){return r===void 0&&(r=ns),this.name+r.hash},i}(),jx=function(i){return i>="A"&&i<="Z"};function _h(i){for(var r="",o=0;o<i.length;o++){var c=i[o];if(o===1&&c==="-"&&i[0]==="-")return i;jx(c)?r+="-"+c.toLowerCase():r+=c}return r.startsWith("ms-")?"-"+r:r}var km=function(i){return i==null||i===!1||i===""},Om=function(i){var r,o,c=[];for(var f in i){var h=i[f];i.hasOwnProperty(f)&&!km(h)&&(Array.isArray(h)&&h.isCss||el(h)?c.push("".concat(_h(f),":"),h,";"):si(h)?c.push.apply(c,er(er(["".concat(f," {")],Om(h),!1),["}"],!1)):c.push("".concat(_h(f),": ").concat((r=f,(o=h)==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||r in Ig||r.startsWith("--")?String(o).trim():"".concat(o,"px")),";")))}return c};function cn(i,r,o,c){if(km(i))return[];if(fs(i))return[".".concat(i.styledComponentId)];if(el(i)){if(!el(h=i)||h.prototype&&h.prototype.isReactComponent||!r)return[i];var f=i(r);return cn(f,r,o,c)}var h;return i instanceof Rx?o?(i.inject(o,c),[i.getName(c)]):[i]:si(i)?Om(i):Array.isArray(i)?Array.prototype.concat.apply(dr,i.map(function(b){return cn(b,r,o,c)})):[i.toString()]}function Dx(i){for(var r=0;r<i.length;r+=1){var o=i[r];if(el(o)&&!fs(o))return!1}return!0}var _x=bm(fr),Cx=function(){function i(r,o,c){this.rules=r,this.staticRulesId="",this.isStatic=(c===void 0||c.isStatic)&&Dx(r),this.componentId=o,this.baseHash=Jn(_x,o),this.baseStyle=c,Em.registerId(o)}return i.prototype.generateAndInjectStyles=function(r,o,c){var f=this.baseStyle?this.baseStyle.generateAndInjectStyles(r,o,c):"";if(this.isStatic&&!c.hash)if(this.staticRulesId&&o.hasNameForId(this.componentId,this.staticRulesId))f=un(f,this.staticRulesId);else{var h=Oh(cn(this.rules,r,o,c)),b=es(Jn(this.baseHash,h)>>>0);if(!o.hasNameForId(this.componentId,b)){var T=c(h,".".concat(b),void 0,this.componentId);o.insertRules(this.componentId,b,T)}f=un(f,b),this.staticRulesId=b}else{for(var x=Jn(this.baseHash,c.hash),p="",w=0;w<this.rules.length;w++){var U=this.rules[w];if(typeof U=="string")p+=U;else if(U){var k=Oh(cn(U,r,o,c));x=Jn(x,k+w),p+=k}}if(p){var H=es(x>>>0);o.hasNameForId(this.componentId,H)||o.insertRules(this.componentId,H,c(p,".".concat(H),void 0,this.componentId)),f=un(f,H)}}return f},i}(),Rm=oi.createContext(void 0);Rm.Consumer;var qo={};function Ux(i,r,o){var c=fs(i),f=i,h=!Bo(i),b=r.attrs,T=b===void 0?dr:b,x=r.componentId,p=x===void 0?function(F,Z){var nt=typeof F!="string"?"sc":wh(F);qo[nt]=(qo[nt]||0)+1;var J="".concat(nt,"-").concat(ix(fr+nt+qo[nt]));return Z?"".concat(Z,"-").concat(J):J}(r.displayName,r.parentComponentId):x,w=r.displayName,U=w===void 0?function(F){return Bo(F)?"styled.".concat(F):"Styled(".concat(ux(F),")")}(i):w,k=r.displayName&&r.componentId?"".concat(wh(r.displayName),"-").concat(r.componentId):r.componentId||p,H=c&&f.attrs?f.attrs.concat(T).filter(Boolean):T,R=r.shouldForwardProp;if(c&&f.shouldForwardProp){var L=f.shouldForwardProp;if(r.shouldForwardProp){var G=r.shouldForwardProp;R=function(F,Z){return L(F,Z)&&G(F,Z)}}else R=L}var B=new Cx(o,k,c?f.componentStyle:void 0);function V(F,Z){return function(nt,J,St){var yt=nt.attrs,$t=nt.componentStyle,le=nt.defaultProps,qt=nt.foldedComponentIds,Ve=nt.styledComponentId,Ze=nt.target,Gt=oi.useContext(Rm),j=Dh(),Q=nt.shouldForwardProp||j.shouldForwardProp,I=ex(J,Gt,le)||tl,ot=function(st,et,Lt){for(var gt,Pt=se(se({},et),{className:void 0,theme:Lt}),qa=0;qa<st.length;qa+=1){var $e=el(gt=st[qa])?gt(Pt):gt;for(var Se in $e)Pt[Se]=Se==="className"?un(Pt[Se],$e[Se]):Se==="style"?se(se({},Pt[Se]),$e[Se]):$e[Se]}return et.className&&(Pt.className=un(Pt.className,et.className)),Pt}(yt,J,I),y=ot.as||Ze,Y={};for(var X in ot)ot[X]===void 0||X[0]==="$"||X==="as"||X==="theme"&&ot.theme===I||(X==="forwardedAs"?Y.as=ot.forwardedAs:Q&&!Q(X,y)||(Y[X]=ot[X]));var K=function(st,et){var Lt=Dh(),gt=st.generateAndInjectStyles(et,Lt.styleSheet,Lt.stylis);return gt}($t,ot),P=un(qt,Ve);return K&&(P+=" "+K),ot.className&&(P+=" "+ot.className),Y[Bo(y)&&!xm.has(y)?"class":"className"]=P,St&&(Y.ref=St),_.createElement(y,Y)}(q,F,Z)}V.displayName=U;var q=oi.forwardRef(V);return q.attrs=H,q.componentStyle=B,q.displayName=U,q.shouldForwardProp=R,q.foldedComponentIds=c?un(f.foldedComponentIds,f.styledComponentId):"",q.styledComponentId=k,q.target=c?f.target:i,Object.defineProperty(q,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(F){this._foldedDefaultProps=c?function(Z){for(var nt=[],J=1;J<arguments.length;J++)nt[J-1]=arguments[J];for(var St=0,yt=nt;St<yt.length;St++)as(Z,yt[St],!0);return Z}({},f.defaultProps,F):F}}),ds(q,function(){return".".concat(q.styledComponentId)}),h&&zm(q,i,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),q}function Ch(i,r){for(var o=[i[0]],c=0,f=r.length;c<f;c+=1)o.push(r[c],i[c+1]);return o}var Uh=function(i){return Object.assign(i,{isCss:!0})};function Nx(i){for(var r=[],o=1;o<arguments.length;o++)r[o-1]=arguments[o];if(el(i)||si(i))return Uh(cn(Ch(dr,er([i],r,!0))));var c=i;return r.length===0&&c.length===1&&typeof c[0]=="string"?cn(c):Uh(cn(Ch(c,r)))}function ls(i,r,o){if(o===void 0&&(o=tl),!r)throw di(1,r);var c=function(f){for(var h=[],b=1;b<arguments.length;b++)h[b-1]=arguments[b];return i(r,o,Nx.apply(void 0,er([f],h,!1)))};return c.attrs=function(f){return ls(i,r,se(se({},o),{attrs:Array.prototype.concat(o.attrs,f).filter(Boolean)}))},c.withConfig=function(f){return ls(i,r,se(se({},o),f))},c}var jm=function(i){return ls(Ux,i)},O=jm;xm.forEach(function(i){O[i]=jm(i)});/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Hx=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,o,c)=>c?c.toUpperCase():o.toLowerCase()),Nh=i=>{const r=Hx(i);return r.charAt(0).toUpperCase()+r.slice(1)},Dm=(...i)=>i.filter((r,o,c)=>!!r&&r.trim()!==""&&c.indexOf(r)===o).join(" ").trim(),Bx=i=>{for(const r in i)if(r.startsWith("aria-")||r==="role"||r==="title")return!0};/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var qx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=_.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:o=2,absoluteStrokeWidth:c,className:f="",children:h,iconNode:b,...T},x)=>_.createElement("svg",{ref:x,...qx,width:r,height:r,stroke:i,strokeWidth:c?Number(o)*24/Number(r):o,className:Dm("lucide",f),...!h&&!Bx(T)&&{"aria-hidden":"true"},...T},[...b.map(([p,w])=>_.createElement(p,w)),...Array.isArray(h)?h:[h]]));/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=(i,r)=>{const o=_.forwardRef(({className:c,...f},h)=>_.createElement(Gx,{ref:h,iconNode:r,className:Dm(`lucide-${Yx(Nh(i))}`,`lucide-${i}`,c),...f}));return o.displayName=Nh(i),o};/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lx=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],_m=ne("book-open",Lx);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],Wn=ne("book",Xx);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],Kx=ne("calculator",Qx);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],hr=ne("calendar",Vx);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Cm=ne("circle-check-big",Zx);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],ir=ne("clock",$x);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Wx=ne("file-text",Jx);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fx=[["path",{d:"M10.5 3 8 9l4 13 4-13-2.5-6",key:"b3dvk1"}],["path",{d:"M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z",key:"7w4byz"}],["path",{d:"M2 9h20",key:"16fsjt"}]],Px=ne("gem",Fx);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ix=[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]],ty=ne("list-checks",Ix);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=[["path",{d:"M3 12h3.28a1 1 0 0 1 .948.684l2.298 7.934a.5.5 0 0 0 .96-.044L13.82 4.771A1 1 0 0 1 14.792 4H21",key:"1mqj8i"}]],ay=ne("radical",ey);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],ly=ne("target",ny);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=[["path",{d:"M21 6H3",key:"1jwq7v"}],["path",{d:"M10 12H3",key:"1ulcyk"}],["path",{d:"M10 18H3",key:"13769t"}],["circle",{cx:"17",cy:"15",r:"3",key:"1upz2a"}],["path",{d:"m21 19-1.9-1.9",key:"dwi7p8"}]],uy=ne("text-search",iy);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],cy=ne("user",ry);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Um=ne("users",oy);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],Nm=ne("video",sy);var li={},Yh;function fy(){if(Yh)return li;Yh=1,Object.defineProperty(li,"__esModule",{value:!0}),li.parse=b,li.serialize=p;const i=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,r=/^[\u0021-\u003A\u003C-\u007E]*$/,o=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,c=/^[\u0020-\u003A\u003D-\u007E]*$/,f=Object.prototype.toString,h=(()=>{const k=function(){};return k.prototype=Object.create(null),k})();function b(k,H){const R=new h,L=k.length;if(L<2)return R;const G=(H==null?void 0:H.decode)||w;let B=0;do{const V=k.indexOf("=",B);if(V===-1)break;const q=k.indexOf(";",B),F=q===-1?L:q;if(V>F){B=k.lastIndexOf(";",V-1)+1;continue}const Z=T(k,B,V),nt=x(k,V,Z),J=k.slice(Z,nt);if(R[J]===void 0){let St=T(k,V+1,F),yt=x(k,F,St);const $t=G(k.slice(St,yt));R[J]=$t}B=F+1}while(B<L);return R}function T(k,H,R){do{const L=k.charCodeAt(H);if(L!==32&&L!==9)return H}while(++H<R);return R}function x(k,H,R){for(;H>R;){const L=k.charCodeAt(--H);if(L!==32&&L!==9)return H+1}return R}function p(k,H,R){const L=(R==null?void 0:R.encode)||encodeURIComponent;if(!i.test(k))throw new TypeError(`argument name is invalid: ${k}`);const G=L(H);if(!r.test(G))throw new TypeError(`argument val is invalid: ${H}`);let B=k+"="+G;if(!R)return B;if(R.maxAge!==void 0){if(!Number.isInteger(R.maxAge))throw new TypeError(`option maxAge is invalid: ${R.maxAge}`);B+="; Max-Age="+R.maxAge}if(R.domain){if(!o.test(R.domain))throw new TypeError(`option domain is invalid: ${R.domain}`);B+="; Domain="+R.domain}if(R.path){if(!c.test(R.path))throw new TypeError(`option path is invalid: ${R.path}`);B+="; Path="+R.path}if(R.expires){if(!U(R.expires)||!Number.isFinite(R.expires.valueOf()))throw new TypeError(`option expires is invalid: ${R.expires}`);B+="; Expires="+R.expires.toUTCString()}if(R.httpOnly&&(B+="; HttpOnly"),R.secure&&(B+="; Secure"),R.partitioned&&(B+="; Partitioned"),R.priority)switch(typeof R.priority=="string"?R.priority.toLowerCase():void 0){case"low":B+="; Priority=Low";break;case"medium":B+="; Priority=Medium";break;case"high":B+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${R.priority}`)}if(R.sameSite)switch(typeof R.sameSite=="string"?R.sameSite.toLowerCase():R.sameSite){case!0:case"strict":B+="; SameSite=Strict";break;case"lax":B+="; SameSite=Lax";break;case"none":B+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${R.sameSite}`)}return B}function w(k){if(k.indexOf("%")===-1)return k;try{return decodeURIComponent(k)}catch{return k}}function U(k){return f.call(k)==="[object Date]"}return li}fy();/**
 * react-router v7.5.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Hh="popstate";function dy(i={}){function r(c,f){let{pathname:h,search:b,hash:T}=c.location;return is("",{pathname:h,search:b,hash:T},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function o(c,f){return typeof f=="string"?f:fi(f)}return my(r,o,null,i)}function Rt(i,r){if(i===!1||i===null||typeof i>"u")throw new Error(r)}function Qe(i,r){if(!i){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function hy(){return Math.random().toString(36).substring(2,10)}function Bh(i,r){return{usr:i.state,key:i.key,idx:r}}function is(i,r,o=null,c){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof r=="string"?nl(r):r,state:o,key:r&&r.key||c||hy()}}function fi({pathname:i="/",search:r="",hash:o=""}){return r&&r!=="?"&&(i+=r.charAt(0)==="?"?r:"?"+r),o&&o!=="#"&&(i+=o.charAt(0)==="#"?o:"#"+o),i}function nl(i){let r={};if(i){let o=i.indexOf("#");o>=0&&(r.hash=i.substring(o),i=i.substring(0,o));let c=i.indexOf("?");c>=0&&(r.search=i.substring(c),i=i.substring(0,c)),i&&(r.pathname=i)}return r}function my(i,r,o,c={}){let{window:f=document.defaultView,v5Compat:h=!1}=c,b=f.history,T="POP",x=null,p=w();p==null&&(p=0,b.replaceState({...b.state,idx:p},""));function w(){return(b.state||{idx:null}).idx}function U(){T="POP";let G=w(),B=G==null?null:G-p;p=G,x&&x({action:T,location:L.location,delta:B})}function k(G,B){T="PUSH";let V=is(L.location,G,B);p=w()+1;let q=Bh(V,p),F=L.createHref(V);try{b.pushState(q,"",F)}catch(Z){if(Z instanceof DOMException&&Z.name==="DataCloneError")throw Z;f.location.assign(F)}h&&x&&x({action:T,location:L.location,delta:1})}function H(G,B){T="REPLACE";let V=is(L.location,G,B);p=w();let q=Bh(V,p),F=L.createHref(V);b.replaceState(q,"",F),h&&x&&x({action:T,location:L.location,delta:0})}function R(G){let B=f.location.origin!=="null"?f.location.origin:f.location.href,V=typeof G=="string"?G:fi(G);return V=V.replace(/ $/,"%20"),Rt(B,`No window.location.(origin|href) available to create URL for href: ${V}`),new URL(V,B)}let L={get action(){return T},get location(){return i(f,b)},listen(G){if(x)throw new Error("A history only accepts one active listener");return f.addEventListener(Hh,U),x=G,()=>{f.removeEventListener(Hh,U),x=null}},createHref(G){return r(f,G)},createURL:R,encodeLocation(G){let B=R(G);return{pathname:B.pathname,search:B.search,hash:B.hash}},push:k,replace:H,go(G){return b.go(G)}};return L}function Ym(i,r,o="/"){return py(i,r,o,!1)}function py(i,r,o,c){let f=typeof r=="string"?nl(r):r,h=da(f.pathname||"/",o);if(h==null)return null;let b=Hm(i);gy(b);let T=null;for(let x=0;T==null&&x<b.length;++x){let p=Ay(h);T=Ey(b[x],p,c)}return T}function Hm(i,r=[],o=[],c=""){let f=(h,b,T)=>{let x={relativePath:T===void 0?h.path||"":T,caseSensitive:h.caseSensitive===!0,childrenIndex:b,route:h};x.relativePath.startsWith("/")&&(Rt(x.relativePath.startsWith(c),`Absolute route path "${x.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),x.relativePath=x.relativePath.slice(c.length));let p=fa([c,x.relativePath]),w=o.concat(x);h.children&&h.children.length>0&&(Rt(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),Hm(h.children,r,w,p)),!(h.path==null&&!h.index)&&r.push({path:p,score:zy(p,h.index),routesMeta:w})};return i.forEach((h,b)=>{var T;if(h.path===""||!((T=h.path)!=null&&T.includes("?")))f(h,b);else for(let x of Bm(h.path))f(h,b,x)}),r}function Bm(i){let r=i.split("/");if(r.length===0)return[];let[o,...c]=r,f=o.endsWith("?"),h=o.replace(/\?$/,"");if(c.length===0)return f?[h,""]:[h];let b=Bm(c.join("/")),T=[];return T.push(...b.map(x=>x===""?h:[h,x].join("/"))),f&&T.push(...b),T.map(x=>i.startsWith("/")&&x===""?"/":x)}function gy(i){i.sort((r,o)=>r.score!==o.score?o.score-r.score:wy(r.routesMeta.map(c=>c.childrenIndex),o.routesMeta.map(c=>c.childrenIndex)))}var xy=/^:[\w-]+$/,yy=3,by=2,vy=1,Sy=10,Ty=-2,qh=i=>i==="*";function zy(i,r){let o=i.split("/"),c=o.length;return o.some(qh)&&(c+=Ty),r&&(c+=by),o.filter(f=>!qh(f)).reduce((f,h)=>f+(xy.test(h)?yy:h===""?vy:Sy),c)}function wy(i,r){return i.length===r.length&&i.slice(0,-1).every((c,f)=>c===r[f])?i[i.length-1]-r[r.length-1]:0}function Ey(i,r,o=!1){let{routesMeta:c}=i,f={},h="/",b=[];for(let T=0;T<c.length;++T){let x=c[T],p=T===c.length-1,w=h==="/"?r:r.slice(h.length)||"/",U=ur({path:x.relativePath,caseSensitive:x.caseSensitive,end:p},w),k=x.route;if(!U&&p&&o&&!c[c.length-1].route.index&&(U=ur({path:x.relativePath,caseSensitive:x.caseSensitive,end:!1},w)),!U)return null;Object.assign(f,U.params),b.push({params:f,pathname:fa([h,U.pathname]),pathnameBase:jy(fa([h,U.pathnameBase])),route:k}),U.pathnameBase!=="/"&&(h=fa([h,U.pathnameBase]))}return b}function ur(i,r){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[o,c]=My(i.path,i.caseSensitive,i.end),f=r.match(o);if(!f)return null;let h=f[0],b=h.replace(/(.)\/+$/,"$1"),T=f.slice(1);return{params:c.reduce((p,{paramName:w,isOptional:U},k)=>{if(w==="*"){let R=T[k]||"";b=h.slice(0,h.length-R.length).replace(/(.)\/+$/,"$1")}const H=T[k];return U&&!H?p[w]=void 0:p[w]=(H||"").replace(/%2F/g,"/"),p},{}),pathname:h,pathnameBase:b,pattern:i}}function My(i,r=!1,o=!0){Qe(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let c=[],f="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(b,T,x)=>(c.push({paramName:T,isOptional:x!=null}),x?"/?([^\\/]+)?":"/([^\\/]+)"));return i.endsWith("*")?(c.push({paramName:"*"}),f+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?f+="\\/*$":i!==""&&i!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,r?void 0:"i"),c]}function Ay(i){try{return i.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return Qe(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),i}}function da(i,r){if(r==="/")return i;if(!i.toLowerCase().startsWith(r.toLowerCase()))return null;let o=r.endsWith("/")?r.length-1:r.length,c=i.charAt(o);return c&&c!=="/"?null:i.slice(o)||"/"}function ky(i,r="/"){let{pathname:o,search:c="",hash:f=""}=typeof i=="string"?nl(i):i;return{pathname:o?o.startsWith("/")?o:Oy(o,r):r,search:Dy(c),hash:_y(f)}}function Oy(i,r){let o=r.replace(/\/+$/,"").split("/");return i.split("/").forEach(f=>{f===".."?o.length>1&&o.pop():f!=="."&&o.push(f)}),o.length>1?o.join("/"):"/"}function Go(i,r,o,c){return`Cannot include a '${i}' character in a manually specified \`to.${r}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ry(i){return i.filter((r,o)=>o===0||r.route.path&&r.route.path.length>0)}function qm(i){let r=Ry(i);return r.map((o,c)=>c===r.length-1?o.pathname:o.pathnameBase)}function Gm(i,r,o,c=!1){let f;typeof i=="string"?f=nl(i):(f={...i},Rt(!f.pathname||!f.pathname.includes("?"),Go("?","pathname","search",f)),Rt(!f.pathname||!f.pathname.includes("#"),Go("#","pathname","hash",f)),Rt(!f.search||!f.search.includes("#"),Go("#","search","hash",f)));let h=i===""||f.pathname==="",b=h?"/":f.pathname,T;if(b==null)T=o;else{let U=r.length-1;if(!c&&b.startsWith("..")){let k=b.split("/");for(;k[0]==="..";)k.shift(),U-=1;f.pathname=k.join("/")}T=U>=0?r[U]:"/"}let x=ky(f,T),p=b&&b!=="/"&&b.endsWith("/"),w=(h||b===".")&&o.endsWith("/");return!x.pathname.endsWith("/")&&(p||w)&&(x.pathname+="/"),x}var fa=i=>i.join("/").replace(/\/\/+/g,"/"),jy=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),Dy=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,_y=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function Cy(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}var Lm=["POST","PUT","PATCH","DELETE"];new Set(Lm);var Uy=["GET",...Lm];new Set(Uy);var ll=_.createContext(null);ll.displayName="DataRouter";var mr=_.createContext(null);mr.displayName="DataRouterState";var Xm=_.createContext({isTransitioning:!1});Xm.displayName="ViewTransition";var Ny=_.createContext(new Map);Ny.displayName="Fetchers";var Yy=_.createContext(null);Yy.displayName="Await";var Ke=_.createContext(null);Ke.displayName="Navigation";var hi=_.createContext(null);hi.displayName="Location";var ha=_.createContext({outlet:null,matches:[],isDataRoute:!1});ha.displayName="Route";var hs=_.createContext(null);hs.displayName="RouteError";function Hy(i,{relative:r}={}){Rt(mi(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:c}=_.useContext(Ke),{hash:f,pathname:h,search:b}=pi(i,{relative:r}),T=h;return o!=="/"&&(T=h==="/"?o:fa([o,h])),c.createHref({pathname:T,search:b,hash:f})}function mi(){return _.useContext(hi)!=null}function Ba(){return Rt(mi(),"useLocation() may be used only in the context of a <Router> component."),_.useContext(hi).location}var Qm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Km(i){_.useContext(Ke).static||_.useLayoutEffect(i)}function pr(){let{isDataRoute:i}=_.useContext(ha);return i?Fy():By()}function By(){Rt(mi(),"useNavigate() may be used only in the context of a <Router> component.");let i=_.useContext(ll),{basename:r,navigator:o}=_.useContext(Ke),{matches:c}=_.useContext(ha),{pathname:f}=Ba(),h=JSON.stringify(qm(c)),b=_.useRef(!1);return Km(()=>{b.current=!0}),_.useCallback((x,p={})=>{if(Qe(b.current,Qm),!b.current)return;if(typeof x=="number"){o.go(x);return}let w=Gm(x,JSON.parse(h),f,p.relative==="path");i==null&&r!=="/"&&(w.pathname=w.pathname==="/"?r:fa([r,w.pathname])),(p.replace?o.replace:o.push)(w,p.state,p)},[r,o,h,f,i])}_.createContext(null);function pi(i,{relative:r}={}){let{matches:o}=_.useContext(ha),{pathname:c}=Ba(),f=JSON.stringify(qm(o));return _.useMemo(()=>Gm(i,JSON.parse(f),c,r==="path"),[i,f,c,r])}function qy(i,r){return Vm(i,r)}function Vm(i,r,o,c){var V;Rt(mi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:f,static:h}=_.useContext(Ke),{matches:b}=_.useContext(ha),T=b[b.length-1],x=T?T.params:{},p=T?T.pathname:"/",w=T?T.pathnameBase:"/",U=T&&T.route;{let q=U&&U.path||"";Zm(p,!U||q.endsWith("*")||q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${q}"> to <Route path="${q==="/"?"*":`${q}/*`}">.`)}let k=Ba(),H;if(r){let q=typeof r=="string"?nl(r):r;Rt(w==="/"||((V=q.pathname)==null?void 0:V.startsWith(w)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${w}" but pathname "${q.pathname}" was given in the \`location\` prop.`),H=q}else H=k;let R=H.pathname||"/",L=R;if(w!=="/"){let q=w.replace(/^\//,"").split("/");L="/"+R.replace(/^\//,"").split("/").slice(q.length).join("/")}let G=!h&&o&&o.matches&&o.matches.length>0?o.matches:Ym(i,{pathname:L});Qe(U||G!=null,`No routes matched location "${H.pathname}${H.search}${H.hash}" `),Qe(G==null||G[G.length-1].route.element!==void 0||G[G.length-1].route.Component!==void 0||G[G.length-1].route.lazy!==void 0,`Matched leaf route at location "${H.pathname}${H.search}${H.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let B=Ky(G&&G.map(q=>Object.assign({},q,{params:Object.assign({},x,q.params),pathname:fa([w,f.encodeLocation?f.encodeLocation(q.pathname).pathname:q.pathname]),pathnameBase:q.pathnameBase==="/"?w:fa([w,f.encodeLocation?f.encodeLocation(q.pathnameBase).pathname:q.pathnameBase])})),b,o,c);return r&&B?_.createElement(hi.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...H},navigationType:"POP"}},B):B}function Gy(){let i=Wy(),r=Cy(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),o=i instanceof Error?i.stack:null,c="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:c},h={padding:"2px 4px",backgroundColor:c},b=null;return console.error("Error handled by React Router default ErrorBoundary:",i),b=_.createElement(_.Fragment,null,_.createElement("p",null,"💿 Hey developer 👋"),_.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",_.createElement("code",{style:h},"ErrorBoundary")," or"," ",_.createElement("code",{style:h},"errorElement")," prop on your route.")),_.createElement(_.Fragment,null,_.createElement("h2",null,"Unexpected Application Error!"),_.createElement("h3",{style:{fontStyle:"italic"}},r),o?_.createElement("pre",{style:f},o):null,b)}var Ly=_.createElement(Gy,null),Xy=class extends _.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,r){return r.location!==i.location||r.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:r.error,location:r.location,revalidation:i.revalidation||r.revalidation}}componentDidCatch(i,r){console.error("React Router caught the following error during render",i,r)}render(){return this.state.error!==void 0?_.createElement(ha.Provider,{value:this.props.routeContext},_.createElement(hs.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Qy({routeContext:i,match:r,children:o}){let c=_.useContext(ll);return c&&c.static&&c.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=r.route.id),_.createElement(ha.Provider,{value:i},o)}function Ky(i,r=[],o=null,c=null){if(i==null){if(!o)return null;if(o.errors)i=o.matches;else if(r.length===0&&!o.initialized&&o.matches.length>0)i=o.matches;else return null}let f=i,h=o==null?void 0:o.errors;if(h!=null){let x=f.findIndex(p=>p.route.id&&(h==null?void 0:h[p.route.id])!==void 0);Rt(x>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),f=f.slice(0,Math.min(f.length,x+1))}let b=!1,T=-1;if(o)for(let x=0;x<f.length;x++){let p=f[x];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(T=x),p.route.id){let{loaderData:w,errors:U}=o,k=p.route.loader&&!w.hasOwnProperty(p.route.id)&&(!U||U[p.route.id]===void 0);if(p.route.lazy||k){b=!0,T>=0?f=f.slice(0,T+1):f=[f[0]];break}}}return f.reduceRight((x,p,w)=>{let U,k=!1,H=null,R=null;o&&(U=h&&p.route.id?h[p.route.id]:void 0,H=p.route.errorElement||Ly,b&&(T<0&&w===0?(Zm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),k=!0,R=null):T===w&&(k=!0,R=p.route.hydrateFallbackElement||null)));let L=r.concat(f.slice(0,w+1)),G=()=>{let B;return U?B=H:k?B=R:p.route.Component?B=_.createElement(p.route.Component,null):p.route.element?B=p.route.element:B=x,_.createElement(Qy,{match:p,routeContext:{outlet:x,matches:L,isDataRoute:o!=null},children:B})};return o&&(p.route.ErrorBoundary||p.route.errorElement||w===0)?_.createElement(Xy,{location:o.location,revalidation:o.revalidation,component:H,error:U,children:G(),routeContext:{outlet:null,matches:L,isDataRoute:!0}}):G()},null)}function ms(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Vy(i){let r=_.useContext(ll);return Rt(r,ms(i)),r}function Zy(i){let r=_.useContext(mr);return Rt(r,ms(i)),r}function $y(i){let r=_.useContext(ha);return Rt(r,ms(i)),r}function ps(i){let r=$y(i),o=r.matches[r.matches.length-1];return Rt(o.route.id,`${i} can only be used on routes that contain a unique "id"`),o.route.id}function Jy(){return ps("useRouteId")}function Wy(){var c;let i=_.useContext(hs),r=Zy("useRouteError"),o=ps("useRouteError");return i!==void 0?i:(c=r.errors)==null?void 0:c[o]}function Fy(){let{router:i}=Vy("useNavigate"),r=ps("useNavigate"),o=_.useRef(!1);return Km(()=>{o.current=!0}),_.useCallback(async(f,h={})=>{Qe(o.current,Qm),o.current&&(typeof f=="number"?i.navigate(f):await i.navigate(f,{fromRouteId:r,...h}))},[i,r])}var Gh={};function Zm(i,r,o){!r&&!Gh[i]&&(Gh[i]=!0,Qe(!1,o))}_.memo(Py);function Py({routes:i,future:r,state:o}){return Vm(i,void 0,o,r)}function Le(i){Rt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Iy({basename:i="/",children:r=null,location:o,navigationType:c="POP",navigator:f,static:h=!1}){Rt(!mi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let b=i.replace(/^\/*/,"/"),T=_.useMemo(()=>({basename:b,navigator:f,static:h,future:{}}),[b,f,h]);typeof o=="string"&&(o=nl(o));let{pathname:x="/",search:p="",hash:w="",state:U=null,key:k="default"}=o,H=_.useMemo(()=>{let R=da(x,b);return R==null?null:{location:{pathname:R,search:p,hash:w,state:U,key:k},navigationType:c}},[b,x,p,w,U,k,c]);return Qe(H!=null,`<Router basename="${b}"> is not able to match the URL "${x}${p}${w}" because it does not start with the basename, so the <Router> won't render anything.`),H==null?null:_.createElement(Ke.Provider,{value:T},_.createElement(hi.Provider,{children:r,value:H}))}function t5({children:i,location:r}){return qy(us(i),r)}function us(i,r=[]){let o=[];return _.Children.forEach(i,(c,f)=>{if(!_.isValidElement(c))return;let h=[...r,f];if(c.type===_.Fragment){o.push.apply(o,us(c.props.children,h));return}Rt(c.type===Le,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Rt(!c.props.index||!c.props.children,"An index route cannot have child routes.");let b={id:c.props.id||h.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(b.children=us(c.props.children,h)),o.push(b)}),o}var Iu="get",tr="application/x-www-form-urlencoded";function gr(i){return i!=null&&typeof i.tagName=="string"}function e5(i){return gr(i)&&i.tagName.toLowerCase()==="button"}function a5(i){return gr(i)&&i.tagName.toLowerCase()==="form"}function n5(i){return gr(i)&&i.tagName.toLowerCase()==="input"}function l5(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function i5(i,r){return i.button===0&&(!r||r==="_self")&&!l5(i)}var Du=null;function u5(){if(Du===null)try{new FormData(document.createElement("form"),0),Du=!1}catch{Du=!0}return Du}var r5=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Lo(i){return i!=null&&!r5.has(i)?(Qe(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${tr}"`),null):i}function c5(i,r){let o,c,f,h,b;if(a5(i)){let T=i.getAttribute("action");c=T?da(T,r):null,o=i.getAttribute("method")||Iu,f=Lo(i.getAttribute("enctype"))||tr,h=new FormData(i)}else if(e5(i)||n5(i)&&(i.type==="submit"||i.type==="image")){let T=i.form;if(T==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let x=i.getAttribute("formaction")||T.getAttribute("action");if(c=x?da(x,r):null,o=i.getAttribute("formmethod")||T.getAttribute("method")||Iu,f=Lo(i.getAttribute("formenctype"))||Lo(T.getAttribute("enctype"))||tr,h=new FormData(T,i),!u5()){let{name:p,type:w,value:U}=i;if(w==="image"){let k=p?`${p}.`:"";h.append(`${k}x`,"0"),h.append(`${k}y`,"0")}else p&&h.append(p,U)}}else{if(gr(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=Iu,c=null,f=tr,b=i}return h&&f==="text/plain"&&(b=h,h=void 0),{action:c,method:o.toLowerCase(),encType:f,formData:h,body:b}}function gs(i,r){if(i===!1||i===null||typeof i>"u")throw new Error(r)}async function o5(i,r){if(i.id in r)return r[i.id];try{let o=await import(i.module);return r[i.id]=o,o}catch(o){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function s5(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function f5(i,r,o){let c=await Promise.all(i.map(async f=>{let h=r.routes[f.route.id];if(h){let b=await o5(h,o);return b.links?b.links():[]}return[]}));return p5(c.flat(1).filter(s5).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function Lh(i,r,o,c,f,h){let b=(x,p)=>o[p]?x.route.id!==o[p].route.id:!0,T=(x,p)=>{var w;return o[p].pathname!==x.pathname||((w=o[p].route.path)==null?void 0:w.endsWith("*"))&&o[p].params["*"]!==x.params["*"]};return h==="assets"?r.filter((x,p)=>b(x,p)||T(x,p)):h==="data"?r.filter((x,p)=>{var U;let w=c.routes[x.route.id];if(!w||!w.hasLoader)return!1;if(b(x,p)||T(x,p))return!0;if(x.route.shouldRevalidate){let k=x.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:((U=o[0])==null?void 0:U.params)||{},nextUrl:new URL(i,window.origin),nextParams:x.params,defaultShouldRevalidate:!0});if(typeof k=="boolean")return k}return!0}):[]}function d5(i,r,{includeHydrateFallback:o}={}){return h5(i.map(c=>{let f=r.routes[c.route.id];if(!f)return[];let h=[f.module];return f.clientActionModule&&(h=h.concat(f.clientActionModule)),f.clientLoaderModule&&(h=h.concat(f.clientLoaderModule)),o&&f.hydrateFallbackModule&&(h=h.concat(f.hydrateFallbackModule)),f.imports&&(h=h.concat(f.imports)),h}).flat(1))}function h5(i){return[...new Set(i)]}function m5(i){let r={},o=Object.keys(i).sort();for(let c of o)r[c]=i[c];return r}function p5(i,r){let o=new Set;return new Set(r),i.reduce((c,f)=>{let h=JSON.stringify(m5(f));return o.has(h)||(o.add(h),c.push({key:h,link:f})),c},[])}var g5=new Set([100,101,204,205]);function x5(i,r){let o=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return o.pathname==="/"?o.pathname="_root.data":r&&da(o.pathname,r)==="/"?o.pathname=`${r.replace(/\/$/,"")}/_root.data`:o.pathname=`${o.pathname.replace(/\/$/,"")}.data`,o}function $m(){let i=_.useContext(ll);return gs(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function y5(){let i=_.useContext(mr);return gs(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var xs=_.createContext(void 0);xs.displayName="FrameworkContext";function Jm(){let i=_.useContext(xs);return gs(i,"You must render this element inside a <HydratedRouter> element"),i}function b5(i,r){let o=_.useContext(xs),[c,f]=_.useState(!1),[h,b]=_.useState(!1),{onFocus:T,onBlur:x,onMouseEnter:p,onMouseLeave:w,onTouchStart:U}=r,k=_.useRef(null);_.useEffect(()=>{if(i==="render"&&b(!0),i==="viewport"){let L=B=>{B.forEach(V=>{b(V.isIntersecting)})},G=new IntersectionObserver(L,{threshold:.5});return k.current&&G.observe(k.current),()=>{G.disconnect()}}},[i]),_.useEffect(()=>{if(c){let L=setTimeout(()=>{b(!0)},100);return()=>{clearTimeout(L)}}},[c]);let H=()=>{f(!0)},R=()=>{f(!1),b(!1)};return o?i!=="intent"?[h,k,{}]:[h,k,{onFocus:ii(T,H),onBlur:ii(x,R),onMouseEnter:ii(p,H),onMouseLeave:ii(w,R),onTouchStart:ii(U,H)}]:[!1,k,{}]}function ii(i,r){return o=>{i&&i(o),o.defaultPrevented||r(o)}}function v5({page:i,...r}){let{router:o}=$m(),c=_.useMemo(()=>Ym(o.routes,i,o.basename),[o.routes,i,o.basename]);return c?_.createElement(T5,{page:i,matches:c,...r}):null}function S5(i){let{manifest:r,routeModules:o}=Jm(),[c,f]=_.useState([]);return _.useEffect(()=>{let h=!1;return f5(i,r,o).then(b=>{h||f(b)}),()=>{h=!0}},[i,r,o]),c}function T5({page:i,matches:r,...o}){let c=Ba(),{manifest:f,routeModules:h}=Jm(),{basename:b}=$m(),{loaderData:T,matches:x}=y5(),p=_.useMemo(()=>Lh(i,r,x,f,c,"data"),[i,r,x,f,c]),w=_.useMemo(()=>Lh(i,r,x,f,c,"assets"),[i,r,x,f,c]),U=_.useMemo(()=>{if(i===c.pathname+c.search+c.hash)return[];let R=new Set,L=!1;if(r.forEach(B=>{var q;let V=f.routes[B.route.id];!V||!V.hasLoader||(!p.some(F=>F.route.id===B.route.id)&&B.route.id in T&&((q=h[B.route.id])!=null&&q.shouldRevalidate)||V.hasClientLoader?L=!0:R.add(B.route.id))}),R.size===0)return[];let G=x5(i,b);return L&&R.size>0&&G.searchParams.set("_routes",r.filter(B=>R.has(B.route.id)).map(B=>B.route.id).join(",")),[G.pathname+G.search]},[b,T,c,f,p,r,i,h]),k=_.useMemo(()=>d5(w,f),[w,f]),H=S5(w);return _.createElement(_.Fragment,null,U.map(R=>_.createElement("link",{key:R,rel:"prefetch",as:"fetch",href:R,...o})),k.map(R=>_.createElement("link",{key:R,rel:"modulepreload",href:R,...o})),H.map(({key:R,link:L})=>_.createElement("link",{key:R,...L})))}function z5(...i){return r=>{i.forEach(o=>{typeof o=="function"?o(r):o!=null&&(o.current=r)})}}var Wm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Wm&&(window.__reactRouterVersion="7.5.1")}catch{}function w5({basename:i,children:r,window:o}){let c=_.useRef();c.current==null&&(c.current=dy({window:o,v5Compat:!0}));let f=c.current,[h,b]=_.useState({action:f.action,location:f.location}),T=_.useCallback(x=>{_.startTransition(()=>b(x))},[b]);return _.useLayoutEffect(()=>f.listen(T),[f,T]),_.createElement(Iy,{basename:i,children:r,location:h.location,navigationType:h.action,navigator:f})}var Fm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Pm=_.forwardRef(function({onClick:r,discover:o="render",prefetch:c="none",relative:f,reloadDocument:h,replace:b,state:T,target:x,to:p,preventScrollReset:w,viewTransition:U,...k},H){let{basename:R}=_.useContext(Ke),L=typeof p=="string"&&Fm.test(p),G,B=!1;if(typeof p=="string"&&L&&(G=p,Wm))try{let yt=new URL(window.location.href),$t=p.startsWith("//")?new URL(yt.protocol+p):new URL(p),le=da($t.pathname,R);$t.origin===yt.origin&&le!=null?p=le+$t.search+$t.hash:B=!0}catch{Qe(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let V=Hy(p,{relative:f}),[q,F,Z]=b5(c,k),nt=k5(p,{replace:b,state:T,target:x,preventScrollReset:w,relative:f,viewTransition:U});function J(yt){r&&r(yt),yt.defaultPrevented||nt(yt)}let St=_.createElement("a",{...k,...Z,href:G||V,onClick:B||h?r:J,ref:z5(H,F),target:x,"data-discover":!L&&o==="render"?"true":void 0});return q&&!L?_.createElement(_.Fragment,null,St,_.createElement(v5,{page:V})):St});Pm.displayName="Link";var E5=_.forwardRef(function({"aria-current":r="page",caseSensitive:o=!1,className:c="",end:f=!1,style:h,to:b,viewTransition:T,children:x,...p},w){let U=pi(b,{relative:p.relative}),k=Ba(),H=_.useContext(mr),{navigator:R,basename:L}=_.useContext(Ke),G=H!=null&&_5(U)&&T===!0,B=R.encodeLocation?R.encodeLocation(U).pathname:U.pathname,V=k.pathname,q=H&&H.navigation&&H.navigation.location?H.navigation.location.pathname:null;o||(V=V.toLowerCase(),q=q?q.toLowerCase():null,B=B.toLowerCase()),q&&L&&(q=da(q,L)||q);const F=B!=="/"&&B.endsWith("/")?B.length-1:B.length;let Z=V===B||!f&&V.startsWith(B)&&V.charAt(F)==="/",nt=q!=null&&(q===B||!f&&q.startsWith(B)&&q.charAt(B.length)==="/"),J={isActive:Z,isPending:nt,isTransitioning:G},St=Z?r:void 0,yt;typeof c=="function"?yt=c(J):yt=[c,Z?"active":null,nt?"pending":null,G?"transitioning":null].filter(Boolean).join(" ");let $t=typeof h=="function"?h(J):h;return _.createElement(Pm,{...p,"aria-current":St,className:yt,ref:w,style:$t,to:b,viewTransition:T},typeof x=="function"?x(J):x)});E5.displayName="NavLink";var M5=_.forwardRef(({discover:i="render",fetcherKey:r,navigate:o,reloadDocument:c,replace:f,state:h,method:b=Iu,action:T,onSubmit:x,relative:p,preventScrollReset:w,viewTransition:U,...k},H)=>{let R=j5(),L=D5(T,{relative:p}),G=b.toLowerCase()==="get"?"get":"post",B=typeof T=="string"&&Fm.test(T),V=q=>{if(x&&x(q),q.defaultPrevented)return;q.preventDefault();let F=q.nativeEvent.submitter,Z=(F==null?void 0:F.getAttribute("formmethod"))||b;R(F||q.currentTarget,{fetcherKey:r,method:Z,navigate:o,replace:f,state:h,relative:p,preventScrollReset:w,viewTransition:U})};return _.createElement("form",{ref:H,method:G,action:L,onSubmit:c?x:V,...k,"data-discover":!B&&i==="render"?"true":void 0})});M5.displayName="Form";function A5(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Im(i){let r=_.useContext(ll);return Rt(r,A5(i)),r}function k5(i,{target:r,replace:o,state:c,preventScrollReset:f,relative:h,viewTransition:b}={}){let T=pr(),x=Ba(),p=pi(i,{relative:h});return _.useCallback(w=>{if(i5(w,r)){w.preventDefault();let U=o!==void 0?o:fi(x)===fi(p);T(i,{replace:U,state:c,preventScrollReset:f,relative:h,viewTransition:b})}},[x,T,p,o,c,r,i,f,h,b])}var O5=0,R5=()=>`__${String(++O5)}__`;function j5(){let{router:i}=Im("useSubmit"),{basename:r}=_.useContext(Ke),o=Jy();return _.useCallback(async(c,f={})=>{let{action:h,method:b,encType:T,formData:x,body:p}=c5(c,r);if(f.navigate===!1){let w=f.fetcherKey||R5();await i.fetch(w,o,f.action||h,{preventScrollReset:f.preventScrollReset,formData:x,body:p,formMethod:f.method||b,formEncType:f.encType||T,flushSync:f.flushSync})}else await i.navigate(f.action||h,{preventScrollReset:f.preventScrollReset,formData:x,body:p,formMethod:f.method||b,formEncType:f.encType||T,replace:f.replace,state:f.state,fromRouteId:o,flushSync:f.flushSync,viewTransition:f.viewTransition})},[i,r,o])}function D5(i,{relative:r}={}){let{basename:o}=_.useContext(Ke),c=_.useContext(ha);Rt(c,"useFormAction must be used inside a RouteContext");let[f]=c.matches.slice(-1),h={...pi(i||".",{relative:r})},b=Ba();if(i==null){h.search=b.search;let T=new URLSearchParams(h.search),x=T.getAll("index");if(x.some(w=>w==="")){T.delete("index"),x.filter(U=>U).forEach(U=>T.append("index",U));let w=T.toString();h.search=w?`?${w}`:""}}return(!i||i===".")&&f.route.index&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(h.pathname=h.pathname==="/"?o:fa([o,h.pathname])),fi(h)}function _5(i,r={}){let o=_.useContext(Xm);Rt(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=Im("useViewTransitionState"),f=pi(i,{relative:r.relative});if(!o.isTransitioning)return!1;let h=da(o.currentLocation.pathname,c)||o.currentLocation.pathname,b=da(o.nextLocation.pathname,c)||o.nextLocation.pathname;return ur(f.pathname,b)!=null||ur(f.pathname,h)!=null}new TextEncoder;[...g5];const C5=O.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 25%, #0f0f0f 50%, #1a1a1a 75%, #0a0a0a 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  font-family: 'Mont', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  gap: 60px;
`,U5=O.h1`
  font-size: 4rem;
  font-weight: 700;
  background: linear-gradient(135deg, #c0c0c0 0%, #e8e8e8 25%, #f5f5f5 50%, #e8e8e8 75%, #c0c0c0 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  margin: 0;
  text-shadow: 0 0 30px rgba(192, 192, 192, 0.3);
  animation: fadeInDown 0.8s ease-out both;
  animation-delay: 0.2s;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,N5=O.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
`,tp=O.div`
  width: 100%;
  max-width: 800px;
  height: 300px;
  background: linear-gradient(135deg, 
    #bf360c 0%, 
    #d84315 20%, 
    #e64a19 40%, 
    #f57c00 70%, 
    #e64a19 80%, 
    #d84315 100%);
  border-radius: 20px;
  padding: 30px;
  position: relative;
  overflow: hidden;
  box-shadow: 
    0 10px 30px rgba(216, 67, 21, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2),
    inset 0 -1px 0 rgba(0, 0, 0, 0.1);
  animation: fadeInUp 0.8s ease-out both;
  animation-delay: 0.6s;
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* 👈 smooth change */
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.1) 0%, 
      rgba(255, 255, 255, 0.05) 50%, 
      rgba(0, 0, 0, 0.1) 100%);
    border-radius: 20px;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(0) scale(1.15);
    cursor: pointer;
    box-shadow: 
      0 15px 40px rgba(21, 101, 192, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.3),
      inset 0 -1px 0 rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    height: 275px;
    padding: 25px;
  }

  @media (max-width: 480px) {
    height: 250px;
    padding: 20px;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,Y5=O(tp)`
  background: linear-gradient(135deg, 
    #1565c0 0%, 
    #1976d2 20%, 
    #1976d2 40%, 
    #42a5f5 70%, 
    #2196f3 80%, 
    #1976d2 100%);
  box-shadow: 
    0 10px 30px rgba(21, 101, 192, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2),
    inset 0 -1px 0 rgba(0, 0, 0, 0.1);
  animation-delay: 1s;
`,Xh=O.div`
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,Qh=O.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex: 1;
`,Kh=O.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`,Vh=O.div`
  display: flex;
  flex-direction: column;
`,Zh=O.h2`
  font-size: 2rem;
  font-weight: 700;
  color: white;
  margin: 0 0 8px 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1.7rem;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`,$h=O.div`
  font-size: 1rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.8);
  margin: 0 0 15px 0;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`,Jh=O.p`
  font-size: 1.1rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.9);
  margin: 0 0 20px 0;
  line-height: 1.5;
  max-width: 75%;

  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 70%;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    max-width: 65%;
  }
`,Wh=O.div`
  font-size: 1rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.8);
  margin-top: auto;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`,Fh=O.div`
  width: 80px;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.8);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  svg {
    width: 180px;
    height: 180px;
    stroke-width: 1.5;
  }

  @media (max-width: 768px) {
    width: 60px;
    
    svg {
      width: 150px;
      height: 150px;
    }
  }

  @media (max-width: 480px) {
    width: 50px;
    
    svg {
      width: 120px;
      height: 120px;
    }
  }
`,H5=()=>{const i=pr(),r=()=>{i("/math")},o=()=>{i("/problem")};return m.jsxs(C5,{children:[m.jsx(U5,{children:"Hangi kampla ilgileniyorsun?"}),m.jsxs(N5,{children:[m.jsx(Y5,{onClick:r,children:m.jsx(Xh,{children:m.jsxs(Qh,{children:[m.jsxs(Kh,{children:[m.jsxs(Vh,{children:[m.jsx(Zh,{children:"İlk 12 Konu | +10 Net Kampı"}),m.jsx($h,{children:"Toplam 2 kişi satın aldı"}),m.jsx(Jh,{children:"Derece öğrencisinden ilk 12 konu özet anlatım + çıkmış soru çözümü."})]}),m.jsx(Wh,{children:"📅 29 Kasım, 18.00 - 21.30"})]}),m.jsx(Fh,{children:m.jsx(ay,{})})]})})}),m.jsx(tp,{style:{animationDelay:"1.4s"},onClick:o,children:m.jsx(Xh,{children:m.jsxs(Qh,{children:[m.jsxs(Kh,{children:[m.jsxs(Vh,{children:[m.jsx(Zh,{children:"Problemler Kampı"}),m.jsx($h,{children:"Toplam 1 kişi satın aldı"}),m.jsx(Jh,{children:"Derece öğrencisi ile problemlerin çözüm yollarını öğren ve çıkmış sorularla pratik yap."})]}),m.jsx(Wh,{children:"📅 30 Kasım, 18.00 - 21.30"})]}),m.jsx(Fh,{children:m.jsx(uy,{})})]})})})]})]})},B5=O.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 25%, #0f0f0f 50%, #1a1a1a 75%, #0a0a0a 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  font-family: 'Mont', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
`,q5=O.h1`
  font-size: 4rem;
  font-weight: 700;
  background: linear-gradient(135deg, #c0c0c0 0%, #e8e8e8 25%, #f5f5f5 50%, #e8e8e8 75%, #c0c0c0 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  margin: 0 0 60px 0;
  text-shadow: 0 0 30px rgba(192, 192, 192, 0.3);
  animation: fadeInDown 0.8s ease-out both;
  animation-delay: 0.2s;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 40px;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 30px;
  }

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,G5=O.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  max-width: 800px;
`,Xo=O.div`
  width: 100%;
  background: linear-gradient(135deg, 
    #bf360c 0%, 
    #d84315 20%, 
    #e64a19 40%, 
    #f57c00 70%, 
    #e64a19 80%, 
    #d84315 100%);
  border-radius: 20px;
  padding: 30px;
  position: relative;
  overflow: hidden;
  box-shadow: 
    0 10px 30px rgba(216, 67, 21, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2),
    inset 0 -1px 0 rgba(0, 0, 0, 0.1);
  animation: fadeInUp 0.8s ease-out both;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.1) 0%, 
      rgba(255, 255, 255, 0.05) 50%, 
      rgba(0, 0, 0, 0.1) 100%);
    border-radius: 20px;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 25px;
  }

  @media (max-width: 480px) {
    padding: 20px;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,Qo=O.div`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 25px;
`,Ko=O.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.9);
  flex-shrink: 0;

  svg {
    width: 50px;
    height: 50px;
    stroke-width: 1.5;
  }

  @media (max-width: 768px) {
    svg {
      width: 40px;
      height: 40px;
    }
  }

  @media (max-width: 480px) {
    svg {
      width: 35px;
      height: 35px;
    }
  }
`,Vo=O.p`
  font-size: 1.1rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  line-height: 1.6;
  flex: 1;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`,L5=O.button`
  padding: 18px 32px;
  background: linear-gradient(135deg, #bf360c 0%, #d84315 50%, #e64a19 100%);
  border: none;
  border-radius: 30px;
  color: white;
  font-weight: 400;
  font-size: 1.2rem;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
  box-shadow: 0 8px 25px rgba(216, 67, 21, 0.3);
  margin-top: 40px;
  font-family: 'Mont', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  animation: fadeInUp 0.8s ease-out both;
  animation-delay: 1.4s;

  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 12px 35px rgba(216, 67, 21, 0.4);
    background: linear-gradient(135deg, #d84315 0%, #e64a19 50%, #f57c00 100%);
  }

  &:active {
    transform: translateY(-1px) scale(1.02);
  }

  @media (max-width: 768px) {
    padding: 16px 28px;
    font-size: 1.1rem;
    margin-top: 30px;
  }

  @media (max-width: 480px) {
    padding: 14px 24px;
    font-size: 1rem;
    margin-top: 25px;
  }
`,X5=()=>{const i=()=>{window.open("https://www.shopier.com/38947153","_blank")};return m.jsxs(B5,{children:[m.jsx(q5,{children:"Paragraf Kampı"}),m.jsxs(G5,{children:[m.jsx(Xo,{style:{animationDelay:"0.6s"},children:m.jsxs(Qo,{children:[m.jsx(Ko,{children:m.jsx(_m,{})}),m.jsx(Vo,{children:"Çıkmış paragraf sorularını beraber analiz edecek ve paragraf netlerini artıracağız."})]})}),m.jsx(Xo,{style:{animationDelay:"0.8s"},children:m.jsxs(Qo,{children:[m.jsx(Ko,{children:m.jsx(hr,{})}),m.jsx(Vo,{children:"Kamp 20 Eylül Cumartesi günü saat 20.00'de başlayacak ve yaklaşık 1.5 saat sürecektir."})]})}),m.jsx(Xo,{style:{animationDelay:"1s"},children:m.jsxs(Qo,{children:[m.jsx(Ko,{children:m.jsx(Um,{})}),m.jsx(Vo,{children:"Toplam 30 kontenjandan 1 tanesi doldu. Hemen yerini ayırt."})]})})]}),m.jsx(L5,{onClick:i,children:"Kampa Katıl"})]})},Q5=O.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 25%, #0f0f0f 50%, #1a1a1a 75%, #0a0a0a 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  font-family: 'Mont', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
`,K5=O.h1`
  font-size: 4rem;
  font-weight: 700;
  background: linear-gradient(135deg, #c0c0c0 0%, #e8e8e8 25%, #f5f5f5 50%, #e8e8e8 75%, #c0c0c0 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  margin: 0 0 60px 0;
  text-shadow: 0 0 30px rgba(192, 192, 192, 0.3);
  animation: fadeInDown 0.8s ease-out both;
  animation-delay: 0.2s;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 40px;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 30px;
  }

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,V5=O.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  max-width: 800px;
`,_u=O.div`
  width: 100%;
  background: linear-gradient(135deg, 
    #1565c0 0%, 
    #1976d2 20%, 
    #2196f3 40%, 
    #42a5f5 70%, 
    #2196f3 80%, 
    #1976d2 100%);
  border-radius: 20px;
  padding: 30px;
  position: relative;
  overflow: hidden;
  box-shadow: 
    0 10px 30px rgba(21, 101, 192, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2),
    inset 0 -1px 0 rgba(0, 0, 0, 0.1);
  animation: fadeInUp 0.8s ease-out both;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.1) 0%, 
      rgba(255, 255, 255, 0.05) 50%, 
      rgba(0, 0, 0, 0.1) 100%);
    border-radius: 20px;
    pointer-events: none;
  }

  &:hover {
    transform: scale(1.05); /* slight zoom */
    box-shadow: 
      0 15px 40px rgba(21, 101, 192, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.3),
      inset 0 -1px 0 rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 25px;
  }

  @media (max-width: 480px) {
    padding: 20px;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,Cu=O.div`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 25px;
`,Uu=O.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.9);
  flex-shrink: 0;

  svg {
    width: 50px;
    height: 50px;
    stroke-width: 1.5;
  }

  @media (max-width: 768px) {
    svg {
      width: 40px;
      height: 40px;
    }
  }

  @media (max-width: 480px) {
    svg {
      width: 35px;
      height: 35px;
    }
  }
`,Nu=O.p`
  font-size: 1.1rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  line-height: 1.6;
  flex: 1;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`,Z5=O.button`
  padding: 18px 32px;
  background: linear-gradient(135deg, #1565c0 0%, #1976d2 50%, #2196f3 100%);
  border: none;
  border-radius: 30px;
  color: white;
  font-weight: 400;
  font-size: 1.2rem;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
  box-shadow: 0 8px 25px rgba(21, 101, 192, 0.3);
  margin-top: 40px;
  font-family: 'Mont', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  animation: fadeInUp 0.8s ease-out both;
  animation-delay: 1.6s;

  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 12px 35px rgba(21, 101, 192, 0.4);
    background: linear-gradient(135deg, #1976d2 0%, #2196f3 50%, #42a5f5 100%);
  }

  &:active {
    transform: translateY(-1px) scale(1.02);
  }

  @media (max-width: 768px) {
    padding: 16px 28px;
    font-size: 1.1rem;
    margin-top: 30px;
  }

  @media (max-width: 480px) {
    padding: 14px 24px;
    font-size: 1rem;
    margin-top: 25px;
  }
`,$5=()=>{const i=()=>{window.open("https://www.shopier.com/xakademi_xyz/38947185","_blank")};return m.jsxs(Q5,{children:[m.jsx(K5,{children:"İlk 12 Konu Kampı"}),m.jsxs(V5,{children:[m.jsx(_u,{style:{animationDelay:"0.4s"},children:m.jsxs(Cu,{children:[m.jsx(Uu,{children:m.jsx(Kx,{})}),m.jsx(Nu,{children:"TYT Matematiğin ilk 12 konusunu derece öğrencisinin anlatımıyla öğreneceksin."})]})}),m.jsx(_u,{style:{animationDelay:"0.6s"},children:m.jsxs(Cu,{children:[m.jsx(Uu,{children:m.jsx(ty,{})}),m.jsx(Nu,{children:"Bu konulardan her sene 10 soru çıkmaktadır. Bu konularda ustalık kazanarak TYT Matematik'te 10 neti garantileyebilirsin."})]})}),m.jsx(_u,{style:{animationDelay:"0.8s"},children:m.jsxs(Cu,{children:[m.jsx(Uu,{children:m.jsx(ly,{})}),m.jsx(Nu,{children:"Çıkmış soruları katılımcılarla birlikte canlı yayında Feynman Tekniği ile çözeceğiz."})]})}),m.jsx(_u,{style:{animationDelay:"1s"},children:m.jsxs(Cu,{children:[m.jsx(Uu,{children:m.jsx(hr,{})}),m.jsx(Nu,{children:"Kamp 16 Kasım tarihinde ve 18.00 - 21.30 saatleri arasında online olarak gerçekleşecektir."})]})})]}),m.jsx(Z5,{onClick:i,children:"Kampa Katıl"})]})},J5=O.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 25%, #0f0f0f 50%, #1a1a1a 75%, #0a0a0a 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  font-family: 'Mont', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
`,W5=O.h1`
  font-size: 4rem;
  font-weight: 700;
  background: linear-gradient(135deg, #c0c0c0 0%, #e8e8e8 25%, #f5f5f5 50%, #e8e8e8 75%, #c0c0c0 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  margin: 0 0 60px 0;
  text-shadow: 0 0 30px rgba(192, 192, 192, 0.3);
  animation: fadeInDown 0.8s ease-out both;
  animation-delay: 0.2s;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 40px;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 30px;
  }

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,F5=O.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 100%;
  max-width: 900px;
`,P5=O.div`
  width: 100%;
  background: linear-gradient(135deg, 
    #bf360c 0%, 
    #d84315 20%, 
    #e64a19 40%, 
    #f57c00 70%, 
    #e64a19 80%, 
    #d84315 100%);
  border-radius: 15px;
  padding: 25px;
  position: relative;
  overflow: hidden;
  box-shadow: 
    0 8px 25px rgba(216, 67, 21, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2),
    inset 0 -1px 0 rgba(0, 0, 0, 0.1);
  animation: fadeInUp 0.8s ease-out both;
  animation-delay: 0.2s;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.1) 0%, 
      rgba(255, 255, 255, 0.05) 50%, 
      rgba(0, 0, 0, 0.1) 100%);
    border-radius: 15px;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 
      0 12px 35px rgba(216, 67, 21, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.3),
      inset 0 -1px 0 rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 18px;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,I5=O.div`
  position: relative;
  z-index: 2;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`,t2=O.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: white;
  margin: 0 0 10px 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`,e2=O.p`
  font-size: 1rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`,a2=O.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Yu=O.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  &:last-child {
    border-bottom: none;
  }
`,Hu=O.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  flex-shrink: 0;

  svg {
    width: 12px;
    height: 12px;
    color: rgba(255, 255, 255, 0.9);
  }
`,Bu=O.div`
  font-size: 1rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.95);
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`,n2=O.div`
  width: 100%;
  background: linear-gradient(135deg, 
    #1565c0 0%, 
    #1976d2 20%, 
    #2196f3 40%, 
    #42a5f5 70%, 
    #2196f3 80%, 
    #1976d2 100%);
  border-radius: 15px;
  padding: 25px;
  position: relative;
  overflow: hidden;
  box-shadow: 
    0 8px 25px rgba(21, 101, 192, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2),
    inset 0 -1px 0 rgba(0, 0, 0, 0.1);
  animation: fadeInUp 0.8s ease-out both;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.1) 0%, 
      rgba(255, 255, 255, 0.05) 50%, 
      rgba(0, 0, 0, 0.1) 100%);
    border-radius: 15px;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 
      0 12px 35px rgba(21, 101, 192, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.3),
      inset 0 -1px 0 rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 18px;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,l2=O.div`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`,i2=O.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: white;
  margin: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`,u2=O.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.9rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  background: rgba(255, 255, 255, 0.1);
  padding: 6px 12px;
  border-radius: 20px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);

  svg {
    width: 14px;
    height: 14px;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 4px 8px;
  }
`,r2=O.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,c2=O.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  &:last-child {
    border-bottom: none;
  }
`,o2=O.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  flex-shrink: 0;
  margin-top: 2px;

  svg {
    width: 12px;
    height: 12px;
    color: rgba(255, 255, 255, 0.8);
  }
`,s2=O.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
`,f2=O.div`
  font-size: 1rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.95);
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`,Ph=O.a`
  color: rgba(255, 255, 255, 0.95);
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  border-bottom: 1px solid transparent;
  
  &:hover {
    color: #42a5f5;
    border-bottom: 1px solid #42a5f5;
    text-shadow: 0 0 8px rgba(66, 165, 245, 0.5);
  }
`,d2=O.div`
  font-size: 0.85rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.3;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`,h2=O.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.8rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  background: rgba(255, 255, 255, 0.1);
  padding: 4px 8px;
  border-radius: 12px;
  flex-shrink: 0;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);

  svg {
    width: 12px;
    height: 12px;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
    padding: 3px 6px;
  }
`,m2=O.button`
  padding: 18px 32px;
  background: linear-gradient(135deg, #1565c0 0%, #1976d2 50%, #2196f3 100%);
  border: none;
  border-radius: 30px;
  color: white;
  font-weight: 400;
  font-size: 1.2rem;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
  box-shadow: 0 8px 25px rgba(21, 101, 192, 0.3);
  margin-top: 40px;
  font-family: 'Mont', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  animation: fadeInUp 0.8s ease-out both;
  animation-delay: 1.6s;

  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 12px 35px rgba(21, 101, 192, 0.4);
    background: linear-gradient(135deg, #1976d2 0%, #2196f3 50%, #42a5f5 100%);
  }

  &:active {
    transform: translateY(-1px) scale(1.02);
  }

  @media (max-width: 768px) {
    padding: 16px 28px;
    font-size: 1.1rem;
    margin-top: 30px;
  }

  @media (max-width: 480px) {
    padding: 14px 24px;
    font-size: 1rem;
    margin-top: 25px;
  }
`,p2=()=>{const i=()=>{window.open("https://drive.google.com/file/d/1CiElpXcUavqm7tZo4YpbVH2Z9h2O0V9d/view?usp=sharing","_blank")},r=(c,f,h)=>{const b=`${c} ${f?`| ${f}`:""} | ${h}`;return f==="+1 Net Serisi"?m.jsx(Ph,{href:"https://youtube.com/playlist?list=PL3Nk-gsPBfNMphWcxSXuJnGj2r4xITzA6&si=o-tuT1IdhoTQIkqm",target:"_blank",rel:"noopener noreferrer",children:b}):b},o=[{day:1,title:"Temel Kavramlar",duration:"3 saat",todos:[{instructor:"Mustafa Ocak",series:"+1 Net Serisi",content:"İşlem Kabiliyeti izle",duration:"10 dak"},{instructor:"Mustafa Ocak",series:"+1 Net Serisi",content:"Pozitif & Negatif Sayılar izle",duration:"10 dak"},{instructor:"Acil Matematiğin İlacı",series:"",content:"ilgili soruları çöz",duration:"1 saat"},{instructor:"345 TYT Matematik",series:"",content:"ilgili soruları çöz",duration:"1 saat"},{instructor:"Twins TYT Matematik",series:"",content:"ilgili soruları çöz",duration:"40 dak"}]},{day:2,title:"Temel Kavramlar",duration:"3 saat",todos:[{instructor:"Mustafa Ocak",series:"+1 Net Serisi",content:"Denklem Kurma izle",duration:"10 dak"},{instructor:"Mustafa Ocak",series:"+1 Net Serisi",content:"Faktöriyel izle",duration:"10 dak"},{instructor:"Mustafa Ocak",series:"+1 Net Serisi",content:"Tek & Çift Sayılar izle",duration:"10 dak"},{instructor:"Acil Matematiğin İlacı",series:"",content:"ilgili soruları çöz",duration:"1 saat"},{instructor:"345 TYT Matematik",series:"",content:"ilgili soruları çöz",duration:"1 saat"},{instructor:"Twins TYT Matematik",series:"",content:"ilgili soruları çöz",duration:"30 dak"}]},{day:3,title:"Temel Kavramlar",duration:"4 saat",todos:[{instructor:"Mustafa Ocak",series:"+1 Net Serisi",content:"Sayı Kümeleri izle",duration:"20 dak"},{instructor:"Mustafa Ocak",series:"+1 Net Serisi",content:"Ardışık Sayılar izle",duration:"20 dak"},{instructor:"Mustafa Ocak",series:"+1 Net Serisi",content:"Asal Sayılar izle",duration:"20 dak"},{instructor:"Acil Matematiğin İlacı",series:"",content:"ilgili soruları çöz",duration:"1 saat"},{instructor:"345 TYT Matematik",series:"",content:"ilgili soruları çöz",duration:"1 saat"},{instructor:"Twins TYT Matematik",series:"",content:"ilgili soruları çöz",duration:"1 saat"}]},{day:4,title:"Temel Kavramlar Genel Tekrar",duration:"2 saat",todos:[{instructor:"Mustafa Ocak",series:"+1 Net Serisi",content:"Temel Kavramlar izle",duration:"2 saat"},{instructor:"Acil Matematiğin İlacı",series:"",content:"gelinen yere kadar temizle",duration:"? saat"},{instructor:"345 TYT Matematik",series:"",content:"gelinen yere kadar temizle",duration:"? saat"},{instructor:"Twins TYT Matematik",series:"",content:"gelinen yere kadar temizle",duration:"? saat"}]},{day:5,title:"Basamak Kavramı & Bölme Bölünebilme",duration:"4 saat",todos:[{instructor:"Mustafa Ocak",series:"+1 Net Serisi",content:"Basamak Kavramı izle",duration:"30 dak"},{instructor:"Mustafa Ocak",series:"+1 Net Serisi",content:"Bölme & Bölünebilme izle",duration:"30 dak"},{instructor:"Acil Matematiğin İlacı",series:"",content:"ilgili soruları çöz",duration:"1.5 saat"},{instructor:"345 TYT Matematik",series:"",content:"ilgili soruları çöz",duration:"1.5 saat"}]},{day:6,title:"Basamak Kavramı & Bölme Bölünebilme",duration:"4 saat",todos:[{instructor:"Acil Matematiğin İlacı",series:"",content:"gelinen yere kadar temizle",duration:"1 saat"},{instructor:"345 TYT Matematik",series:"",content:"gelinen yere kadar temizle",duration:"1 saat"},{instructor:"Twins TYT Matematik",series:"",content:"gelinen yere kadar temizle",duration:"2 saat"}]},{day:7,title:"Rasyonel Sayılar",duration:"3 saat",todos:[{instructor:"Mustafa Ocak",series:"+1 Net Serisi",content:"Rasyonel Sayılar izle",duration:"30 dak"},{instructor:"Acil Matematiğin İlacı",series:"",content:"ilgili soruları çöz",duration:"1 saat"},{instructor:"345 TYT Matematik",series:"",content:"ilgili soruları çöz",duration:"1.5 saat"},{instructor:"Twins TYT Matematik",series:"",content:"ilgili soruları çöz",duration:"30 dak"}]},{day:8,title:"EBOB & EKOK ve I. Dereceden Denklemler",duration:"4 saat",todos:[{instructor:"Mustafa Ocak",series:"+1 Net Serisi",content:"EBOB & EKOK izle",duration:"20 dak"},{instructor:"Acil Matematiğin İlacı",series:"",content:"ilgili soruları çöz",duration:"20 dak"},{instructor:"345 TYT Matematik",series:"",content:"ilgili soruları çöz",duration:"20 dak"},{instructor:"Mustafa Ocak",series:"+1 Net Serisi",content:"I. Dereceden Denklemler izle",duration:"30 dak"},{instructor:"Acil Matematiğin İlacı",series:"",content:"ilgili soruları çöz",duration:"1.5 saat"},{instructor:"345 TYT Matematik",series:"",content:"ilgili soruları çöz",duration:"1 saat"}]},{day:9,title:"I. Dereceden Denklemler",duration:"3 saat",todos:[{instructor:"345 TYT Matematik",series:"",content:"ilgili soruları çöz",duration:"1 saat"},{instructor:"Twins TYT Matematik",series:"",content:"ilgili soruları çöz",duration:"2 saat"}]},{day:10,title:"Eşitsizlikler",duration:"4 saat",todos:[{instructor:"Mustafa Ocak",series:"+1 Net Serisi",content:"Eşitsizlikler izle",duration:"20 dak"},{instructor:"Acil Matematiğin İlacı",series:"",content:"ilgili soruları çöz",duration:"2 saat"},{instructor:"345 TYT Matematik",series:"",content:"ilgili soruları çöz",duration:"1 saat 40 dak"}]},{day:11,title:"Eşitsizlikler ve Mutlak Değer",duration:"4 saat",todos:[{instructor:"Twins TYT Matematik",series:"",content:"Eşitsizlikler - ilgili soruları çöz",duration:"40 dak"},{instructor:"Mustafa Ocak",series:"+1 Net Serisi",content:"Mutlak Değer izle",duration:"20 dak"},{instructor:"Acil Matematiğin İlacı",series:"",content:"ilgili soruları çöz",duration:"1 saat"},{instructor:"345 TYT Matematik",series:"",content:"ilgili soruları çöz",duration:"1 saat"},{instructor:"Twins TYT Matematik",series:"",content:"ilgili soruları çöz",duration:"1 saat"}]},{day:12,title:"Üslü Sayılar",duration:"3.5 saat",todos:[{instructor:"Mustafa Ocak",series:"+1 Net Serisi",content:"Üslü Sayılar izle",duration:"20 dak"},{instructor:"Acil Matematiğin İlacı",series:"",content:"ilgili soruları çöz",duration:"1 saat"},{instructor:"345 TYT Matematik",series:"",content:"ilgili soruları çöz",duration:"1 saat"},{instructor:"Twins TYT Matematik",series:"",content:"ilgili soruları çöz",duration:"1 saat"}]},{day:13,title:"Köklü Sayılar",duration:"3.5 saat",todos:[{instructor:"Mustafa Ocak",series:"+1 Net Serisi",content:"Köklü Sayılar izle",duration:"20 dak"},{instructor:"Acil Matematiğin İlacı",series:"",content:"ilgili soruları çöz",duration:"1 saat"},{instructor:"345 TYT Matematik",series:"",content:"ilgili soruları çöz",duration:"1 saat"},{instructor:"Twins TYT Matematik",series:"",content:"ilgili soruları çöz",duration:"1 saat"}]},{day:14,title:"Çarpanlara Ayırma ve Genel Tekrar",duration:"3.5 saat",todos:[{instructor:"Mustafa Ocak",series:"+1 Net Serisi",content:"Çarpanlara Ayırma izle",duration:"20 dak"},{instructor:"Mustafa Ocak",series:"+1 Net Serisi",content:"İlk 12 Konu TEK VİDEO izle",duration:"3 saat"},{instructor:"Kaynaklarda Kalan Soru Varsa",series:"",content:"temizle",duration:"?? saat"}]}];return m.jsxs(J5,{children:[m.jsx(W5,{children:"14 Günde TYT Matematik Temel Atma Programı"}),m.jsxs(F5,{children:[m.jsxs(P5,{children:[m.jsxs(I5,{children:[m.jsx(t2,{children:"Kullanılacak Kaynaklar"}),m.jsx(e2,{children:"Bu programda kullanılacak kaynaklar aşağıdadır:"})]}),m.jsxs(a2,{children:[m.jsxs(Yu,{children:[m.jsx(Hu,{children:m.jsx(Nm,{})}),m.jsx(Bu,{children:m.jsx(Ph,{href:"https://youtube.com/playlist?list=PL3Nk-gsPBfNMphWcxSXuJnGj2r4xITzA6&si=o-tuT1IdhoTQIkqm",target:"_blank",rel:"noopener noreferrer",children:"TYT Matematik +1 Net Serisi"})})]}),m.jsxs(Yu,{children:[m.jsx(Hu,{children:m.jsx(Wn,{})}),m.jsx(Bu,{children:"Acil TYT Matematiğin İlacı"})]}),m.jsxs(Yu,{children:[m.jsx(Hu,{children:m.jsx(Wn,{})}),m.jsx(Bu,{children:"345 TYT Matematik Soru Bankası"})]}),m.jsxs(Yu,{children:[m.jsx(Hu,{children:m.jsx(Wn,{})}),m.jsx(Bu,{children:"Twins TYT Matematik Soru Bankası"})]})]})]}),o.map((c,f)=>m.jsxs(n2,{style:{animationDelay:`${.4+f*.2}s`},children:[m.jsxs(l2,{children:[m.jsxs(i2,{children:["Gün #",c.day," | ",c.title]}),m.jsxs(u2,{children:[m.jsx(ir,{}),c.duration]})]}),m.jsx(r2,{children:c.todos.map((h,b)=>m.jsxs(c2,{children:[m.jsx(o2,{children:m.jsx(Cm,{})}),m.jsxs(s2,{children:[m.jsx(f2,{children:r(h.instructor,h.series,h.content)}),h.series&&m.jsxs(d2,{children:[h.instructor," | ",h.series]})]}),m.jsxs(h2,{children:[m.jsx(ir,{}),h.duration]})]},b))})]},c.day))]}),m.jsx(m2,{onClick:i,children:"PDF İndir"})]})},g2=O.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 25%, #0f0f0f 50%, #1a1a1a 75%, #0a0a0a 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  font-family: 'Mont', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
`,x2=O.h1`
  font-size: 4rem;
  font-weight: 700;
  background: linear-gradient(135deg, #c0c0c0 0%, #e8e8e8 25%, #f5f5f5 50%, #e8e8e8 75%, #c0c0c0 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  margin: 0 0 60px 0;
  text-shadow: 0 0 30px rgba(192, 192, 192, 0.3);
  animation: fadeInDown 0.8s ease-out both;
  animation-delay: 0.2s;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 40px;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 30px;
  }

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,y2=O.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 100%;
  max-width: 900px;
`,b2=O.div`
  width: 100%;
  background: linear-gradient(135deg, 
    #bf360c 0%, 
    #d84315 20%, 
    #e64a19 40%, 
    #f57c00 70%, 
    #e64a19 80%, 
    #d84315 100%);
  border-radius: 15px;
  padding: 25px;
  position: relative;
  overflow: hidden;
  box-shadow: 
    0 8px 25px rgba(216, 67, 21, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2),
    inset 0 -1px 0 rgba(0, 0, 0, 0.1);
  animation: fadeInUp 0.8s ease-out both;
  animation-delay: 0.2s;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.1) 0%, 
      rgba(255, 255, 255, 0.05) 50%, 
      rgba(0, 0, 0, 0.1) 100%);
    border-radius: 15px;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 
      0 12px 35px rgba(216, 67, 21, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.3),
      inset 0 -1px 0 rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 18px;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,v2=O.div`
  position: relative;
  z-index: 2;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`,S2=O.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: white;
  margin: 0 0 10px 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`,T2=O.p`
  font-size: 1rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`,z2=O.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,qu=O.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  &:last-child {
    border-bottom: none;
  }
`,Gu=O.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  flex-shrink: 0;

  svg {
    width: 12px;
    height: 12px;
    color: rgba(255, 255, 255, 0.9);
  }
`,Lu=O.div`
  font-size: 1rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.95);
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`,w2=O.div`
  width: 100%;
  background: linear-gradient(135deg, 
    #1565c0 0%, 
    #1976d2 20%, 
    #2196f3 40%, 
    #42a5f5 70%, 
    #2196f3 80%, 
    #1976d2 100%);
  border-radius: 15px;
  padding: 25px;
  position: relative;
  overflow: hidden;
  box-shadow: 
    0 8px 25px rgba(21, 101, 192, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2),
    inset 0 -1px 0 rgba(0, 0, 0, 0.1);
  animation: fadeInUp 0.8s ease-out both;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.1) 0%, 
      rgba(255, 255, 255, 0.05) 50%, 
      rgba(0, 0, 0, 0.1) 100%);
    border-radius: 15px;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 
      0 12px 35px rgba(21, 101, 192, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.3),
      inset 0 -1px 0 rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 18px;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,E2=O.div`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`,M2=O.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: white;
  margin: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`,A2=O.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.9rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  background: rgba(255, 255, 255, 0.1);
  padding: 6px 12px;
  border-radius: 20px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);

  svg {
    width: 14px;
    height: 14px;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 4px 8px;
  }
`,k2=O.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,O2=O.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  &:last-child {
    border-bottom: none;
  }
`,R2=O.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  flex-shrink: 0;
  margin-top: 2px;

  svg {
    width: 12px;
    height: 12px;
    color: rgba(255, 255, 255, 0.8);
  }
`,j2=O.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
`,D2=O.div`
  font-size: 1rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.95);
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`,Ih=O.a`
  color: rgba(255, 255, 255, 0.95);
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  border-bottom: 1px solid transparent;
  
  &:hover {
    color: #42a5f5;
    border-bottom: 1px solid #42a5f5;
    text-shadow: 0 0 8px rgba(66, 165, 245, 0.5);
  }
`,_2=O.div`
  font-size: 0.85rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.3;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`,C2=O.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.8rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  background: rgba(255, 255, 255, 0.1);
  padding: 4px 8px;
  border-radius: 12px;
  flex-shrink: 0;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);

  svg {
    width: 12px;
    height: 12px;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
    padding: 3px 6px;
  }
`,U2=O.button`
  padding: 18px 32px;
  background: linear-gradient(135deg, #1565c0 0%, #1976d2 50%, #2196f3 100%);
  border: none;
  border-radius: 30px;
  color: white;
  font-weight: 400;
  font-size: 1.2rem;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
  box-shadow: 0 8px 25px rgba(21, 101, 192, 0.3);
  margin-top: 40px;
  font-family: 'Mont', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  animation: fadeInUp 0.8s ease-out both;
  animation-delay: 1.6s;

  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 12px 35px rgba(21, 101, 192, 0.4);
    background: linear-gradient(135deg, #1976d2 0%, #2196f3 50%, #42a5f5 100%);
  }

  &:active {
    transform: translateY(-1px) scale(1.02);
  }

  @media (max-width: 768px) {
    padding: 16px 28px;
    font-size: 1.1rem;
    margin-top: 30px;
  }

  @media (max-width: 480px) {
    padding: 14px 24px;
    font-size: 1rem;
    margin-top: 25px;
  }
`,N2=()=>{const i=()=>{window.open("https://drive.google.com/file/d/1GUTT5AChAmLl-cpmsTtWjKUEZvZKwr6O/view?usp=sharing","_blank")},r=(c,f,h)=>{const b=`${c} ${f?`| ${f}`:""} | ${h}`;return f==="+1 Net Serisi"?m.jsx(Ih,{href:"https://youtube.com/playlist?list=PL3Nk-gsPBfNMphWcxSXuJnGj2r4xITzA6&si=o-tuT1IdhoTQIkqm",target:"_blank",rel:"noopener noreferrer",children:b}):b},o=[{day:1,title:"Giriş & Oran - Orantı",duration:"3 saat",todos:[{instructor:"Problemlere Giriş 1",series:"Sıfırdan Problemler Kampı 1. Video",content:"İzle",duration:"40 dak"},{instructor:"Problemlere Giriş 2",series:"Sıfırdan Problemler Kampı 2. Video",content:"İzle",duration:"20 dak"},{instructor:"Orantı Problemleri 1",series:"Sıfırdan Problemler Kampı 3. Video",content:"İzle",duration:"25 dak"},{instructor:"Orantı Problemleri 2",series:"Sıfırdan Problemler Kampı 4. Video",content:"İzle",duration:"20 dak"},{instructor:"Ortalama Problemleri",series:"Sıfırdan Problemler Kampı 5. Video",content:"İzle",duration:"35 dak"},{instructor:"Acil Matematiğin İlacı",series:"Oran - Orantı",content:"1 - 3. Testler | Çöz",duration:"40 dak"}]},{day:2,title:"Oran - Orantı",duration:"3 saat",todos:[{instructor:"Acil Matematiğin İlacı",series:"Oran - Orantı",content:"4 - 6. Testler | Çöz",duration:"1 saat"},{instructor:"345 TYT Matematik",series:"Oran - Orantı",content:"1 - 4. Testler | Çöz",duration:"1 saat"},{instructor:"345 TYT Matematik",series:"Oran - Orantı",content:"ÖSYM Testleri | Çöz",duration:"1 saat"}]},{day:3,title:"Sayı Problemleri",duration:"3 saat",todos:[{instructor:"Denklem Kurma Problemleri",series:"6. Video",content:"İzle",duration:"35 dak"},{instructor:"Parçalama Dağıtma Problemleri",series:"7. Video",content:"İzle",duration:"15 dak"},{instructor:"İki Bilinmeyenli Problemler",series:"8. Video",content:"İzle",duration:"40 dak"},{instructor:"Numaralandırma ve Sayı Paylaşım Problemleri",series:"9. Video",content:"İzle",duration:"20 dak"},{instructor:"Acil Matematiğin İlacı",series:"Sayı Problemleri",content:"1 - 3. Testler | Çöz",duration:"1 saat"}]},{day:4,title:"Sayı Problemleri",duration:"3 saat",todos:[{instructor:"Acil Matematiğin İlacı",series:"Sayı Problemleri",content:"4 - 6. Testler | Çöz",duration:"1 saat"},{instructor:"345 TYT Matematik",series:"Sayı Problemleri",content:"1 - 3. Testler | Çöz",duration:"1 saat"},{instructor:"Twins TYT Matematik",series:"Oran - Orantı",content:"Çöz",duration:"1 saat"}]},{day:5,title:"Sayı Problemleri",duration:"3 saat",todos:[{instructor:"345 TYT Matematik",series:"Sayı Problemleri",content:"ÖSYM Testleri | Çöz",duration:"2.5 saat"},{instructor:"Twins TYT Matematik",series:"Sayı Problemleri",content:"Çöz",duration:"30 dak"}]},{day:6,title:"Kesir Problemleri",duration:"3 saat",todos:[{instructor:"Kesir Problemleri",series:"10. Video",content:"İzle",duration:"20 dak"},{instructor:"Acil Matematiğin İlacı",series:"Kesir Problemleri",content:"1 - 3. Testler | Çöz",duration:"1 saat"},{instructor:"345 TYT Matematik",series:"Kesir Problemleri",content:"1 - 4. Testler | Çöz",duration:"1 saat"},{instructor:"345 TYT Matematik",series:"Sayı Problemleri",content:"Orijinal Testler | Çöz",duration:"40 dak"}]},{day:7,title:"Yaş Problemleri",duration:"3 saat",todos:[{instructor:"Yaş Problemleri",series:"11. Video",content:"İzle",duration:"30 dak"},{instructor:"Acil Matematiğin İlacı",series:"Yaş Problemleri",content:"1 - 5. Testler | Çöz",duration:"2 saat"},{instructor:"Twins TYT Matematik",series:"Sayı Problemleri",content:"Çöz",duration:"30 dak"}]},{day:8,title:"İşçi Problemleri",duration:"3 saat",todos:[{instructor:"İşçi Problemleri",series:"12. Video",content:"İzle",duration:"20 dak"},{instructor:"Acil Matematiğin İlacı",series:"İşçi Problemleri",content:"1 - 4. Testler | Çöz",duration:"1.5 saat"},{instructor:"345 TYT Matematik",series:"Kesir Problemleri",content:"ÖSYM Testleri | Çöz",duration:"40 dak"},{instructor:"Twins TYT Matematik",series:"Kesir Problemleri",content:"Çöz",duration:"30 dak"}]},{day:9,title:"Kaynak Temizleme Günü",duration:"3 saat",todos:[{instructor:"345 TYT Matematik",series:"Yaş Problemleri",content:"1 - 5. Testler | Çöz",duration:"2 saat"},{instructor:"345 TYT Matematik",series:"Emek Problemleri",content:"1 - 3. Testler | Çöz",duration:"1 saat"}]},{day:10,title:"Kaynak Temizleme Günü",duration:"2.5 saat",todos:[{instructor:"345 TYT Matematik",series:"Yaş Problemleri",content:"ÖSYM Testleri | Çöz",duration:"1 saat"},{instructor:"345 TYT Matematik",series:"Emek Problemleri",content:"ÖSYM Testleri | Çöz",duration:"20 dak"},{instructor:"Twins TYT Matematik",series:"Yaş Problemleri",content:"Çöz",duration:"30 dak"},{instructor:"Twins TYT Matematik",series:"İşçi Problemleri",content:"Çöz",duration:"30 dak"}]},{day:11,title:"Hareket & Hız Problemleri",duration:"3.5 saat",todos:[{instructor:"Hareket Problemleri",series:"13. Video",content:"İzle",duration:"30 dak"},{instructor:"Hareket Problemleri",series:"14. Video",content:"İzle",duration:"30 dak"},{instructor:"Acil Matematiğin İlacı",series:"Hız Problemleri",content:"1 - 4. Testler | Çöz",duration:"1.5 saat"},{instructor:"345 TYT Matematik",series:"Hız Problemleri",content:"1 - 3. Testler | Çöz",duration:"1 saat"}]},{day:12,title:"Yüzde Problemleri",duration:"3 saat",todos:[{instructor:"Yüzde Problemleri",series:"15. Video",content:"İzle",duration:"30 dak"},{instructor:"Acil Matematiğin İlacı",series:"Yüzde Problemleri",content:"1 - 3. Testler | Çöz",duration:"1 saat"},{instructor:"345 TYT Matematik",series:"Yüzde Problemleri",content:"1 - 5. Testler | Çöz",duration:"1.5 saat"}]},{day:13,title:"Kaynak Temizleme Günü",duration:"4 saat",todos:[{instructor:"345 TYT Matematik",series:"Hız Problemleri",content:"ÖSYM Testleri | Çöz",duration:"1 saat"},{instructor:"345 TYT Matematik",series:"Hız Problemleri",content:"Orijinal Testler | Çöz",duration:"1 saat"},{instructor:"Twins TYT Matematik",series:"Hız Problemleri",content:"Çöz",duration:"30 dak"},{instructor:"345 TYT Matematik",series:"Yüzde Problemleri",content:"ÖSYM Testleri | Çöz",duration:"30 dak"},{instructor:"345 TYT Matematik",series:"Yüzde Problemleri",content:"Orijinal Testler | Çöz",duration:"1 saat"}]}];return m.jsxs(g2,{children:[m.jsx(x2,{children:"TYT Matematik - Problemler Programı"}),m.jsxs(y2,{children:[m.jsxs(b2,{children:[m.jsxs(v2,{children:[m.jsx(S2,{children:"Kullanılacak Kaynaklar"}),m.jsx(T2,{children:"Bu programda kullanılacak kaynaklar aşağıdadır:"})]}),m.jsxs(z2,{children:[m.jsxs(qu,{children:[m.jsx(Gu,{children:m.jsx(Nm,{})}),m.jsx(Lu,{children:m.jsx(Ih,{href:"https://youtube.com/playlist?list=PLKnwXmWGonPlUNoH-tjJgSc9P5QMORmvp&si=wbSN0aUGB0gHCyYE",target:"_blank",rel:"noopener noreferrer",children:"Sıfırdan Sonsuza Problemler"})})]}),m.jsxs(qu,{children:[m.jsx(Gu,{children:m.jsx(Wn,{})}),m.jsx(Lu,{children:"Acil TYT Matematiğin İlacı"})]}),m.jsxs(qu,{children:[m.jsx(Gu,{children:m.jsx(Wn,{})}),m.jsx(Lu,{children:"345 TYT Matematik Soru Bankası"})]}),m.jsxs(qu,{children:[m.jsx(Gu,{children:m.jsx(Wn,{})}),m.jsx(Lu,{children:"TYT Matematik Twins Soru Bankası"})]})]})]}),o.map((c,f)=>m.jsxs(w2,{style:{animationDelay:`${.4+f*.2}s`},children:[m.jsxs(E2,{children:[m.jsxs(M2,{children:["Gün #",c.day," | ",c.title]}),m.jsxs(A2,{children:[m.jsx(ir,{}),c.duration]})]}),m.jsx(k2,{children:c.todos.map((h,b)=>m.jsxs(O2,{children:[m.jsx(R2,{children:m.jsx(Cm,{})}),m.jsxs(j2,{children:[m.jsx(D2,{children:r(h.instructor,h.series,h.content)}),h.series&&m.jsxs(_2,{children:[h.instructor," | ",h.series]})]}),m.jsxs(C2,{children:[m.jsx(ir,{}),h.duration]})]},b))})]},c.day))]}),m.jsx(U2,{onClick:i,children:"PDF İndir"})]})},Y2=O.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 25%, #0f0f0f 50%, #1a1a1a 75%, #0a0a0a 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  font-family: 'Mont', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
`,H2=O.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 0 60px 0;
  animation: fadeInDown 0.8s ease-out both;
  animation-delay: 0.2s;

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }

  @media (max-width: 480px) {
    margin-bottom: 30px;
  }

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,B2=O.h1`
  font-size: 4rem;
  font-weight: 700;
  background: linear-gradient(135deg, #c0c0c0 0%, #e8e8e8 25%, #f5f5f5 50%, #e8e8e8 75%, #c0c0c0 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 30px rgba(192, 192, 192, 0.3);
  margin: 0;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`,q2=O.span`
  background: linear-gradient(135deg, #ffa726 0%, #fb8c00 25%, #ff9800 50%, #ff6f00 75%, #ff9800 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 30px rgba(255, 167, 38, 0.5);
`,G2=O.h2`
  font-size: 4rem;
  font-weight: 700;
  background: linear-gradient(135deg, #c0c0c0 0%, #e8e8e8 25%, #f5f5f5 50%, #e8e8e8 75%, #c0c0c0 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 30px rgba(192, 192, 192, 0.3);
  margin: 0;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`,L2=O.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  max-width: 800px;
`,Xu=O.div`
  width: 100%;
  background: linear-gradient(135deg, 
    #1565c0 0%, 
    #1976d2 20%, 
    #2196f3 40%, 
    #42a5f5 70%, 
    #2196f3 80%, 
    #1976d2 100%);
  border-radius: 20px;
  padding: 30px;
  position: relative;
  overflow: hidden;
  box-shadow: 
    0 10px 30px rgba(21, 101, 192, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2),
    inset 0 -1px 0 rgba(0, 0, 0, 0.1);
  animation: fadeInUp 0.8s ease-out both;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.1) 0%, 
      rgba(255, 255, 255, 0.05) 50%, 
      rgba(0, 0, 0, 0.1) 100%);
    border-radius: 20px;
    pointer-events: none;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 
      0 15px 40px rgba(21, 101, 192, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.3),
      inset 0 -1px 0 rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 25px;
  }

  @media (max-width: 480px) {
    padding: 20px;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,Qu=O.div`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 25px;
`,Ku=O.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.9);
  flex-shrink: 0;

  svg {
    width: 50px;
    height: 50px;
    stroke-width: 1.5;
  }

  @media (max-width: 768px) {
    svg {
      width: 40px;
      height: 40px;
    }
  }

  @media (max-width: 480px) {
    svg {
      width: 35px;
      height: 35px;
    }
  }
`,Vu=O.p`
  font-size: 1.1rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  line-height: 1.6;
  flex: 1;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`,X2=O.div`
  display: flex;
  gap: 20px;
  margin-top: 40px;
  animation: fadeInUp 0.8s ease-out both;
  animation-delay: 1.8s;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    max-width: 400px;
    gap: 15px;
    margin-top: 30px;
  }

  @media (max-width: 480px) {
    gap: 12px;
    margin-top: 25px;
  }
`,ep=O.button`
  padding: 15px 30px;
  background: linear-gradient(135deg, #bf360c 0%, #d84315 50%, #e64a19 100%);
  border: none;
  border-radius: 30px;
  color: white;
  font-weight: 400;
  font-size: 1.4rem;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
  box-shadow: 0 8px 25px rgba(216, 67, 21, 0.3);
  font-family: 'Mont', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  white-space: nowrap;

  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 12px 35px rgba(216, 67, 21, 0.4);
    background: linear-gradient(135deg, #d84315 0%, #e64a19 50%, #f57c00 100%);
  }

  &:active {
    transform: translateY(-1px) scale(1.02);
  }

  @media (max-width: 768px) {
    padding: 12px 24px;
    font-size: 0.95rem;
    width: 100%;
  }

  @media (max-width: 480px) {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
`,Q2=O(ep)`
  background: linear-gradient(135deg, #1565c0 0%, #1976d2 50%, #2196f3 100%);
  box-shadow: 0 8px 25px rgba(21, 101, 192, 0.3);

  &:hover {
    box-shadow: 0 12px 35px rgba(21, 101, 192, 0.4);
    background: linear-gradient(135deg, #1976d2 0%, #2196f3 50%, #42a5f5 100%);
  }
`,K2=()=>{const i=pr(),r=()=>{i("/application")},o=()=>{i("/social-proof")};return m.jsxs(Y2,{children:[m.jsxs(H2,{children:[m.jsxs(B2,{children:["7 Ayda ",m.jsx(q2,{children:"İlk 30.000"})]}),m.jsx(G2,{children:"Sıfırdan YKS Programı"})]}),m.jsxs(L2,{children:[m.jsx(Xu,{style:{animationDelay:"0.6s"},children:m.jsxs(Qu,{children:[m.jsx(Ku,{children:m.jsx(cy,{})}),m.jsx(Vu,{children:"7 Ay Boyunca Mustafa Ocak ile 1 - 1 Görüşme"})]})}),m.jsx(Xu,{style:{animationDelay:"0.8s"},children:m.jsxs(Qu,{children:[m.jsx(Ku,{children:m.jsx(Wx,{})}),m.jsx(Vu,{children:"Her günün programı en ince detayına kadar hazırlanır"})]})}),m.jsx(Xu,{style:{animationDelay:"1s"},children:m.jsxs(Qu,{children:[m.jsx(Ku,{children:m.jsx(Px,{})}),m.jsx(Vu,{children:"Mustafa Ocak'ın da bulunduğu VIP Telegram grubu"})]})}),m.jsx(Xu,{style:{animationDelay:"1.2s"},children:m.jsxs(Qu,{children:[m.jsx(Ku,{children:m.jsx(hr,{})}),m.jsx(Vu,{children:"Kişiye özel düzenli denemeler ve ders bitirme kampları"})]})})]}),m.jsxs(X2,{children:[m.jsx(Q2,{onClick:o,children:"Başaranları Gör"}),m.jsx(ep,{onClick:r,children:"Programa Başvur"})]})]})},V2=O.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 25%, #0f0f0f 50%, #1a1a1a 75%, #0a0a0a 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  font-family: 'Mont', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
`,Z2=O.div`
  width: 100%;
  max-width: 700px;
  background: #000000;
  border-radius: 20px;
  padding: 40px;
  position: relative;
  overflow: hidden;
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    inset 0 -1px 0 rgba(255, 255, 255, 0.05),
    0 0 0 1px rgba(255, 255, 255, 0.15),
    0 0 15px rgba(255, 255, 255, 0.05),
    0 0 25px rgba(66, 165, 245, 0.1);
  border: none;
  animation: fadeInUp 0.8s ease-out both;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.1) 0%, 
      rgba(255, 255, 255, 0.05) 50%, 
      rgba(0, 0, 0, 0.1) 100%);
    border-radius: 20px;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 30px;
  }

  @media (max-width: 480px) {
    padding: 25px;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,$2=O.h1`
  font-size: 3rem;
  font-weight: 700;
  background: linear-gradient(135deg, #c0c0c0 0%, #e8e8e8 25%, #f5f5f5 50%, #e8e8e8 75%, #c0c0c0 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  margin: 0 0 20px 0;
  text-shadow: 0 0 30px rgba(192, 192, 192, 0.3);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`,J2=O.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  margin: 0 0 40px 0;
  line-height: 1.6;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin-bottom: 25px;
  }
`,W2=O.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
  position: relative;
  z-index: 2;

  @media (max-width: 480px) {
    gap: 20px;
  }
`,ui=O.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Zo=O.label`
  font-size: 1.1rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`,tm=O.input`
  padding: 14px 18px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1rem;
  font-family: 'Mont', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.6);
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 480px) {
    padding: 12px 16px;
    font-size: 0.95rem;
  }
`,em=O.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 18px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);

  @media (max-width: 480px) {
    padding: 15px;
    gap: 12px;
  }
`,am=O.label`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  cursor: pointer;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.5;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);

  input[type="checkbox"] {
    width: 20px;
    height: 20px;
    margin-top: 2px;
    cursor: pointer;
    flex-shrink: 0;
    accent-color: #42a5f5;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    gap: 10px;

    input[type="checkbox"] {
      width: 18px;
      height: 18px;
    }
  }
`,F2=O.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 12px;
  }
`,nm=O.label`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 20px;
  border: 2px solid ${i=>i.$isSelected?"#42a5f5":"rgba(255, 255, 255, 0.3)"};
  border-radius: 10px;
  background: ${i=>i.$isSelected?"rgba(66, 165, 245, 0.2)":"rgba(255, 255, 255, 0.1)"};
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  box-shadow: ${i=>i.$isSelected?"0 0 0 3px rgba(66, 165, 245, 0.1)":"none"};

  &:hover {
    border-color: ${i=>i.$isSelected?"#42a5f5":"rgba(255, 255, 255, 0.5)"};
    background: ${i=>i.$isSelected?"rgba(66, 165, 245, 0.25)":"rgba(255, 255, 255, 0.15)"};
  }

  @media (max-width: 480px) {
    padding: 12px 16px;
    font-size: 0.95rem;
  }
`,lm=O.div`
  flex: 1;
  
  input[type="radio"]:checked + label,
  &:has(input[type="radio"]:checked) label {
    border-color: #42a5f5;
    background: rgba(66, 165, 245, 0.2);
    box-shadow: 0 0 0 3px rgba(66, 165, 245, 0.1);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`,P2=O.div`
  padding: 15px 20px;
  border-radius: 10px;
  font-size: 1rem;
  text-align: center;
  margin-top: 15px;
  position: relative;
  z-index: 2;
  background: ${i=>i.$status==="success"?"rgba(76, 175, 80, 0.2)":i.$status==="error"?"rgba(244, 67, 54, 0.2)":"transparent"};
  color: ${i=>i.$status==="success"?"#4caf50":i.$status==="error"?"#f44336":"transparent"};
  border: 1px solid ${i=>i.$status==="success"?"rgba(76, 175, 80, 0.4)":i.$status==="error"?"rgba(244, 67, 54, 0.4)":"transparent"};
  animation: ${i=>i.$status?"fadeInUp 0.5s ease-out":"none"};

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 12px 16px;
  }
`,I2=O.button`
  padding: 16px 32px;
  background: linear-gradient(135deg, #1565c0 0%, #1976d2 50%, #2196f3 100%);
  border: none;
  border-radius: 30px;
  color: white;
  font-weight: 500;
  font-size: 1.2rem;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
  box-shadow: 0 8px 25px rgba(21, 101, 192, 0.3);
  font-family: 'Mont', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  margin-top: 10px;

  &:hover:not(:disabled) {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 12px 35px rgba(21, 101, 192, 0.4);
    background: linear-gradient(135deg, #1976d2 0%, #2196f3 50%, #42a5f5 100%);
  }

  &:active:not(:disabled) {
    transform: translateY(-1px) scale(1);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    position: relative;
  }

  @media (max-width: 768px) {
    padding: 14px 28px;
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    padding: 12px 24px;
    font-size: 1rem;
  }
`,tb=()=>{const[i,r]=_.useState({name:"",phone:"",disciplineConfirmed:!1,budgetConfirmed:!1,contactMethod:""}),[o,c]=_.useState(!1),[f,h]=_.useState(null),[b,T]=_.useState(""),x="https://script.google.com/macros/s/AKfycbxewLGtO_EiXqVB32Xa607bwa2l6QbIAKU2PMNgn5nF8mWSNxWIqmayl3U3xV358BII/exec",p=k=>{const{name:H,value:R,type:L,checked:G}=k.target;r(B=>({...B,[H]:L==="checkbox"?G:R})),f&&(h(null),T(""))},w=async k=>{if(k.preventDefault(),!!U){c(!0),h(null),T("");try{const H=await fetch(x,{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({timestamp:new Date().toLocaleString("tr-TR"),name:i.name,phone:i.phone,disciplineConfirmed:i.disciplineConfirmed?"Evet":"Hayır",budgetConfirmed:i.budgetConfirmed?"Evet":"Hayır",contactMethod:i.contactMethod==="whatsapp"?"WhatsApp":"Arama"})});h("success"),T("Başvurunuz başarıyla gönderildi! En kısa sürede size dönüş yapacağız."),r({name:"",phone:"",disciplineConfirmed:!1,budgetConfirmed:!1,contactMethod:""}),setTimeout(()=>{h(null),T("")},5e3)}catch(H){console.error("Submission error:",H),h("error"),T("Bir hata oluştu. Lütfen tekrar deneyin veya bize doğrudan ulaşın.")}finally{c(!1)}}},U=i.name&&i.phone&&i.disciplineConfirmed&&i.budgetConfirmed&&i.contactMethod;return m.jsx(V2,{children:m.jsxs(Z2,{children:[m.jsx($2,{children:"Başvuru Formu"}),m.jsx(J2,{children:"Eğer öğrenciyseniz lütfen başvuru formunu velinizle birlikte doldurunuz ve telefon numarası alanına veli telefon numarasını giriniz."}),m.jsxs(W2,{onSubmit:w,children:[m.jsxs(ui,{children:[m.jsx(Zo,{htmlFor:"name",children:"Öğrenci İsim Soyisim:"}),m.jsx(tm,{type:"text",id:"name",name:"name",value:i.name,onChange:p,placeholder:"Adınız ve soyadınız",required:!0})]}),m.jsxs(ui,{children:[m.jsx(Zo,{htmlFor:"phone",children:"Veli Telefon Numarası:"}),m.jsx(tm,{type:"tel",id:"phone",name:"phone",value:i.phone,onChange:p,placeholder:"05XX XXX XX XX",required:!0})]}),m.jsx(ui,{children:m.jsx(em,{children:m.jsxs(am,{children:[m.jsx("input",{type:"checkbox",name:"disciplineConfirmed",checked:i.disciplineConfirmed,onChange:p,required:!0}),m.jsx("span",{children:"Bu programın disiplin gerektiren uzun bir süreç olduğunu onaylıyor musunuz?"})]})})}),m.jsx(ui,{children:m.jsx(em,{children:m.jsxs(am,{children:[m.jsx("input",{type:"checkbox",name:"budgetConfirmed",checked:i.budgetConfirmed,onChange:p,required:!0}),m.jsx("span",{children:"Bu program 60.000₺'nin üzerinde değere sahip içeriklerin (görüşmeler, aylık koçluk, denemeler, ders bitirme kampları vb.) bir arada sunulduğu kapsamlı bir programdır. Bu program için uygun bir bütçe (Aylık 9.000₺ civarında) ayırdığınızı onaylıyor musunuz?"})]})})}),m.jsxs(ui,{children:[m.jsx(Zo,{children:"Size hangi yoldan ulaşalım?"}),m.jsxs(F2,{children:[m.jsxs(lm,{children:[m.jsx("input",{type:"radio",id:"whatsapp",name:"contactMethod",value:"whatsapp",checked:i.contactMethod==="whatsapp",onChange:p,required:!0,style:{display:"none"}}),m.jsx(nm,{htmlFor:"whatsapp",$isSelected:i.contactMethod==="whatsapp",children:"WhatsApp"})]}),m.jsxs(lm,{children:[m.jsx("input",{type:"radio",id:"arama",name:"contactMethod",value:"arama",checked:i.contactMethod==="arama",onChange:p,required:!0,style:{display:"none"}}),m.jsx(nm,{htmlFor:"arama",$isSelected:i.contactMethod==="arama",children:"Arama"})]})]})]}),m.jsx(I2,{type:"submit",disabled:!U||o,children:o?"Gönderiliyor...":"Başvuruyu Gönder"}),f&&b&&m.jsx(P2,{$status:f,children:b})]})]})})},eb="/assets/ibrahimd_initial-OiLaPW8f.png",ab="/assets/ibrahimd_current-CoNjNHSq.png",nb="/assets/burcuy_initial-C7UWZW0W.png",lb="/assets/burcuy_current-CsAHa6_U.png",ib=O.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 25%, #0f0f0f 50%, #1a1a1a 75%, #0a0a0a 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  font-family: 'Mont', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
`,ub=O.h1`
  font-size: 3.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #c0c0c0 0%, #e8e8e8 25%, #f5f5f5 50%, #e8e8e8 75%, #c0c0c0 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  margin: 0 0 50px 0;
  text-shadow: 0 0 30px rgba(192, 192, 192, 0.3);
  animation: fadeInDown 0.8s ease-out both;

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 40px;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 30px;
  }
`,rb=O.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  max-width: 900px;

  @media (max-width: 768px) {
    gap: 25px;
  }

  @media (max-width: 480px) {
    gap: 20px;
  }
`,cb=O.div`
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  animation: fadeInUp 0.8s ease-out both;
  animation-delay: ${i=>i.$delay||"0.2"}s;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,ob=O.div`
  background: linear-gradient(135deg, 
    #0d47a1 0%, 
    #1565c0 20%, 
    #1976d2 40%, 
    #1565c0 70%, 
    #0d47a1 100%);
  padding: 25px 30px;
  color: rgba(255, 255, 255, 0.95);
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
  line-height: 1.6;
  border-radius: 20px 20px 0 0;

  @media (max-width: 768px) {
    padding: 20px 25px;
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    padding: 18px 20px;
    font-size: 1rem;
  }
`,sb=O.span`
  background: linear-gradient(135deg, #fff59d 0%, #ffeb3b 35%, #ffd54f 65%, #ffc107 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
  text-shadow: 0 0 16px rgba(255, 235, 59, 0.55), 0 0 8px rgba(255, 235, 59, 0.35);
`,fb=O.span`
  background: linear-gradient(135deg, #ffa726 0%, #fb8c00 40%, #ff9800 60%, #ff6f00 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
`,db=O.div`
  background: linear-gradient(135deg, 
    #1565c0 0%, 
    #1976d2 20%, 
    #2196f3 40%, 
    #42a5f5 70%, 
    #2196f3 80%, 
    #1976d2 100%);
  padding: 30px;
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 25px;
    gap: 25px;
  }

  @media (max-width: 480px) {
    padding: 20px;
    gap: 20px;
  }
`,im=O.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
`,um=O.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.95);
  margin: 0;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`,rm=O.div`
  width: 100%;
  aspect-ratio: 4 / 3;
  background: rgba(255, 255, 255, 0.1);
  border: 2px dashed rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.4);
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`,Zu=O.img`
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: contain;
  background: rgba(255, 255, 255, 0.06);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  padding: 6px;
`,hb=()=>{const i=[{name:"İbrahim D.",daysInProgram:"33",netIncrease:"+16 Net"},{name:"Burcu Y.",daysInProgram:"71",netIncrease:"+25.5 Net"}];return m.jsxs(ib,{children:[m.jsx(ub,{children:"Program Öğrencileri"}),m.jsx(rb,{children:i.map((r,o)=>m.jsxs(cb,{$delay:`${.3+o*.2}s`,children:[m.jsxs(ob,{children:[r.name," | ",m.jsxs(fb,{children:[r.daysInProgram," Gündür"]})," Programda | ",m.jsx(sb,{children:r.netIncrease})]}),m.jsxs(db,{children:[m.jsxs(im,{children:[m.jsx(um,{children:"Başlangıç:"}),o===0?m.jsx(Zu,{src:eb,alt:"İbrahim D. başlangıç"}):o===1?m.jsx(Zu,{src:nb,alt:"Burcu Y. başlangıç"}):m.jsx(rm,{children:"Görsel Placeholder"})]}),m.jsxs(im,{children:[m.jsx(um,{children:"Şu anda:"}),o===0?m.jsx(Zu,{src:ab,alt:"İbrahim D. güncel"}):o===1?m.jsx(Zu,{src:lb,alt:"Burcu Y. güncel"}):m.jsx(rm,{children:"Görsel Placeholder"})]})]})]},o))})]})},mb=O.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 25%, #0f0f0f 50%, #1a1a1a 75%, #0a0a0a 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  font-family: 'Mont', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
`,pb=O.h1`
  font-size: 4rem;
  font-weight: 700;
  background: linear-gradient(135deg, #c0c0c0 0%, #e8e8e8 25%, #f5f5f5 50%, #e8e8e8 75%, #c0c0c0 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  margin: 0 0 60px 0;
  text-shadow: 0 0 30px rgba(192, 192, 192, 0.3);
  animation: fadeInDown 0.8s ease-out both;
  animation-delay: 0.2s;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 40px;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 30px;
  }

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,gb=O.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  max-width: 800px;
`,$o=O.div`
  width: 100%;
  background: linear-gradient(135deg, 
    #bf360c 0%, 
    #d84315 20%, 
    #e64a19 40%, 
    #f57c00 70%, 
    #e64a19 80%, 
    #d84315 100%);
  border-radius: 20px;
  padding: 30px;
  position: relative;
  overflow: hidden;
  box-shadow: 
    0 10px 30px rgba(216, 67, 21, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2),
    inset 0 -1px 0 rgba(0, 0, 0, 0.1);
  animation: fadeInUp 0.8s ease-out both;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.1) 0%, 
      rgba(255, 255, 255, 0.05) 50%, 
      rgba(0, 0, 0, 0.1) 100%);
    border-radius: 20px;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 25px;
  }

  @media (max-width: 480px) {
    padding: 20px;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,Jo=O.div`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 25px;
`,Wo=O.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.9);
  flex-shrink: 0;

  svg {
    width: 50px;
    height: 50px;
    stroke-width: 1.5;
  }

  @media (max-width: 768px) {
    svg {
      width: 40px;
      height: 40px;
    }
  }

  @media (max-width: 480px) {
    svg {
      width: 35px;
      height: 35px;
    }
  }
`,Fo=O.p`
  font-size: 1.1rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  line-height: 1.6;
  flex: 1;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`,xb=O.button`
  padding: 18px 32px;
  background: linear-gradient(135deg, #bf360c 0%, #d84315 50%, #e64a19 100%);
  border: none;
  border-radius: 30px;
  color: white;
  font-weight: 400;
  font-size: 1.2rem;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
  box-shadow: 0 8px 25px rgba(216, 67, 21, 0.3);
  margin-top: 40px;
  font-family: 'Mont', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  animation: fadeInUp 0.8s ease-out both;
  animation-delay: 1.4s;

  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 12px 35px rgba(216, 67, 21, 0.4);
    background: linear-gradient(135deg, #d84315 0%, #e64a19 50%, #f57c00 100%);
  }

  &:active {
    transform: translateY(-1px) scale(1.02);
  }

  @media (max-width: 768px) {
    padding: 16px 28px;
    font-size: 1.1rem;
    margin-top: 30px;
  }

  @media (max-width: 480px) {
    padding: 14px 24px;
    font-size: 1rem;
    margin-top: 25px;
  }
`,yb=()=>{const i=()=>{window.open("https://www.shopier.com/xakademi_xyz/41469518","_blank")};return m.jsxs(mb,{children:[m.jsx(pb,{children:"Problemler Kampı"}),m.jsxs(gb,{children:[m.jsx($o,{style:{animationDelay:"0.6s"},children:m.jsxs(Jo,{children:[m.jsx(Wo,{children:m.jsx(_m,{})}),m.jsx(Fo,{children:"Problem sorularının çözüm yollarını öğrenecek ve TYT Matematik netlerini artıracağız."})]})}),m.jsx($o,{style:{animationDelay:"0.8s"},children:m.jsxs(Jo,{children:[m.jsx(Wo,{children:m.jsx(hr,{})}),m.jsx(Fo,{children:"Çıkmış problem sorularını katılımcılarla birlikte canlı yayında Feynman Tekniği ile çözeceğiz."})]})}),m.jsx($o,{style:{animationDelay:"1s"},children:m.jsxs(Jo,{children:[m.jsx(Wo,{children:m.jsx(Um,{})}),m.jsx(Fo,{children:"Kamp 30 Kasım tarihinde ve 18.00 - 21.30 saatleri arasında online olarak gerçekleşecektir."})]})})]}),m.jsx(xb,{onClick:i,children:"Kampa Katıl"})]})};function bb(){const i=pr(),r=Ba();return _.useEffect(()=>{const o=sessionStorage.redirect;if(delete sessionStorage.redirect,o&&o!==r.href){const c=new URL(o).pathname;i(c,{replace:!0})}},[i,r]),m.jsxs(t5,{children:[m.jsx(Le,{path:"/",element:m.jsx(H5,{})}),m.jsx(Le,{path:"/paragraph",element:m.jsx(X5,{})}),m.jsx(Le,{path:"/math",element:m.jsx($5,{})}),m.jsx(Le,{path:"/math-foundation-program",element:m.jsx(p2,{})}),m.jsx(Le,{path:"/math-problem-program",element:m.jsx(N2,{})}),m.jsx(Le,{path:"/yks-program",element:m.jsx(K2,{})}),m.jsx(Le,{path:"/application",element:m.jsx(tb,{})}),m.jsx(Le,{path:"/social-proof",element:m.jsx(hb,{})}),m.jsx(Le,{path:"/problem",element:m.jsx(yb,{})})]})}function vb(){return m.jsx(w5,{children:m.jsx(bb,{})})}Cg.createRoot(document.getElementById("root")).render(m.jsx(_.StrictMode,{children:m.jsx(vb,{})}));
