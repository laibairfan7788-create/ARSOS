(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))u(m);new MutationObserver(m=>{for(const g of m)if(g.type==="childList")for(const j of g.addedNodes)j.tagName==="LINK"&&j.rel==="modulepreload"&&u(j)}).observe(document,{childList:!0,subtree:!0});function d(m){const g={};return m.integrity&&(g.integrity=m.integrity),m.referrerPolicy&&(g.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?g.credentials="include":m.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function u(m){if(m.ep)return;m.ep=!0;const g=d(m);fetch(m.href,g)}})();function Em(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var _c={exports:{}},Yn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sm;function xv(){if(sm)return Yn;sm=1;var r=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function d(u,m,g){var j=null;if(g!==void 0&&(j=""+g),m.key!==void 0&&(j=""+m.key),"key"in m){g={};for(var T in m)T!=="key"&&(g[T]=m[T])}else g=m;return m=g.ref,{$$typeof:r,type:u,key:j,ref:m!==void 0?m:null,props:g}}return Yn.Fragment=o,Yn.jsx=d,Yn.jsxs=d,Yn}var rm;function yv(){return rm||(rm=1,_c.exports=xv()),_c.exports}var s=yv(),Uc={exports:{}},F={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cm;function bv(){if(cm)return F;cm=1;var r=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),g=Symbol.for("react.consumer"),j=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),M=Symbol.iterator;function G(x){return x===null||typeof x!="object"?null:(x=M&&x[M]||x["@@iterator"],typeof x=="function"?x:null)}var Z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,Q={};function q(x,U,B){this.props=x,this.context=U,this.refs=Q,this.updater=B||Z}q.prototype.isReactComponent={},q.prototype.setState=function(x,U){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,U,"setState")},q.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function I(){}I.prototype=q.prototype;function J(x,U,B){this.props=x,this.context=U,this.refs=Q,this.updater=B||Z}var ve=J.prototype=new I;ve.constructor=J,Y(ve,q.prototype),ve.isPureReactComponent=!0;var me=Array.isArray;function Ee(){}var W={H:null,A:null,T:null,S:null},Ce=Object.prototype.hasOwnProperty;function $e(x,U,B){var X=B.ref;return{$$typeof:r,type:x,key:U,ref:X!==void 0?X:null,props:B}}function Bt(x,U){return $e(x.type,U,x.props)}function yt(x){return typeof x=="object"&&x!==null&&x.$$typeof===r}function We(x){var U={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(B){return U[B]})}var Yt=/\/+/g;function bt(x,U){return typeof x=="object"&&x!==null&&x.key!=null?We(""+x.key):U.toString(36)}function Ue(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(Ee,Ee):(x.status="pending",x.then(function(U){x.status==="pending"&&(x.status="fulfilled",x.value=U)},function(U){x.status==="pending"&&(x.status="rejected",x.reason=U)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function C(x,U,B,X,P){var ae=typeof x;(ae==="undefined"||ae==="boolean")&&(x=null);var de=!1;if(x===null)de=!0;else switch(ae){case"bigint":case"string":case"number":de=!0;break;case"object":switch(x.$$typeof){case r:case o:de=!0;break;case w:return de=x._init,C(de(x._payload),U,B,X,P)}}if(de)return P=P(x),de=X===""?"."+bt(x,0):X,me(P)?(B="",de!=null&&(B=de.replace(Yt,"$&/")+"/"),C(P,U,B,"",function(Zl){return Zl})):P!=null&&(yt(P)&&(P=Bt(P,B+(P.key==null||x&&x.key===P.key?"":(""+P.key).replace(Yt,"$&/")+"/")+de)),U.push(P)),1;de=0;var Ie=X===""?".":X+":";if(me(x))for(var Me=0;Me<x.length;Me++)X=x[Me],ae=Ie+bt(X,Me),de+=C(X,U,B,ae,P);else if(Me=G(x),typeof Me=="function")for(x=Me.call(x),Me=0;!(X=x.next()).done;)X=X.value,ae=Ie+bt(X,Me++),de+=C(X,U,B,ae,P);else if(ae==="object"){if(typeof x.then=="function")return C(Ue(x),U,B,X,P);throw U=String(x),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.")}return de}function H(x,U,B){if(x==null)return x;var X=[],P=0;return C(x,X,"","",function(ae){return U.call(B,ae,P++)}),X}function $(x){if(x._status===-1){var U=x._result;U=U(),U.then(function(B){(x._status===0||x._status===-1)&&(x._status=1,x._result=B)},function(B){(x._status===0||x._status===-1)&&(x._status=2,x._result=B)}),x._status===-1&&(x._status=0,x._result=U)}if(x._status===1)return x._result.default;throw x._result}var pe=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var U=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(U))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)},je={map:H,forEach:function(x,U,B){H(x,function(){U.apply(this,arguments)},B)},count:function(x){var U=0;return H(x,function(){U++}),U},toArray:function(x){return H(x,function(U){return U})||[]},only:function(x){if(!yt(x))throw Error("React.Children.only expected to receive a single React element child.");return x}};return F.Activity=R,F.Children=je,F.Component=q,F.Fragment=d,F.Profiler=m,F.PureComponent=J,F.StrictMode=u,F.Suspense=y,F.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,F.__COMPILER_RUNTIME={__proto__:null,c:function(x){return W.H.useMemoCache(x)}},F.cache=function(x){return function(){return x.apply(null,arguments)}},F.cacheSignal=function(){return null},F.cloneElement=function(x,U,B){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var X=Y({},x.props),P=x.key;if(U!=null)for(ae in U.key!==void 0&&(P=""+U.key),U)!Ce.call(U,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&U.ref===void 0||(X[ae]=U[ae]);var ae=arguments.length-2;if(ae===1)X.children=B;else if(1<ae){for(var de=Array(ae),Ie=0;Ie<ae;Ie++)de[Ie]=arguments[Ie+2];X.children=de}return $e(x.type,P,X)},F.createContext=function(x){return x={$$typeof:j,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:g,_context:x},x},F.createElement=function(x,U,B){var X,P={},ae=null;if(U!=null)for(X in U.key!==void 0&&(ae=""+U.key),U)Ce.call(U,X)&&X!=="key"&&X!=="__self"&&X!=="__source"&&(P[X]=U[X]);var de=arguments.length-2;if(de===1)P.children=B;else if(1<de){for(var Ie=Array(de),Me=0;Me<de;Me++)Ie[Me]=arguments[Me+2];P.children=Ie}if(x&&x.defaultProps)for(X in de=x.defaultProps,de)P[X]===void 0&&(P[X]=de[X]);return $e(x,ae,P)},F.createRef=function(){return{current:null}},F.forwardRef=function(x){return{$$typeof:T,render:x}},F.isValidElement=yt,F.lazy=function(x){return{$$typeof:w,_payload:{_status:-1,_result:x},_init:$}},F.memo=function(x,U){return{$$typeof:v,type:x,compare:U===void 0?null:U}},F.startTransition=function(x){var U=W.T,B={};W.T=B;try{var X=x(),P=W.S;P!==null&&P(B,X),typeof X=="object"&&X!==null&&typeof X.then=="function"&&X.then(Ee,pe)}catch(ae){pe(ae)}finally{U!==null&&B.types!==null&&(U.types=B.types),W.T=U}},F.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()},F.use=function(x){return W.H.use(x)},F.useActionState=function(x,U,B){return W.H.useActionState(x,U,B)},F.useCallback=function(x,U){return W.H.useCallback(x,U)},F.useContext=function(x){return W.H.useContext(x)},F.useDebugValue=function(){},F.useDeferredValue=function(x,U){return W.H.useDeferredValue(x,U)},F.useEffect=function(x,U){return W.H.useEffect(x,U)},F.useEffectEvent=function(x){return W.H.useEffectEvent(x)},F.useId=function(){return W.H.useId()},F.useImperativeHandle=function(x,U,B){return W.H.useImperativeHandle(x,U,B)},F.useInsertionEffect=function(x,U){return W.H.useInsertionEffect(x,U)},F.useLayoutEffect=function(x,U){return W.H.useLayoutEffect(x,U)},F.useMemo=function(x,U){return W.H.useMemo(x,U)},F.useOptimistic=function(x,U){return W.H.useOptimistic(x,U)},F.useReducer=function(x,U,B){return W.H.useReducer(x,U,B)},F.useRef=function(x){return W.H.useRef(x)},F.useState=function(x){return W.H.useState(x)},F.useSyncExternalStore=function(x,U,B){return W.H.useSyncExternalStore(x,U,B)},F.useTransition=function(){return W.H.useTransition()},F.version="19.2.0",F}var um;function kc(){return um||(um=1,Uc.exports=bv()),Uc.exports}var z=kc();const jv=Em(z);var Hc={exports:{}},Ln={},qc={exports:{}},Bc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var om;function Sv(){return om||(om=1,(function(r){function o(C,H){var $=C.length;C.push(H);e:for(;0<$;){var pe=$-1>>>1,je=C[pe];if(0<m(je,H))C[pe]=H,C[$]=je,$=pe;else break e}}function d(C){return C.length===0?null:C[0]}function u(C){if(C.length===0)return null;var H=C[0],$=C.pop();if($!==H){C[0]=$;e:for(var pe=0,je=C.length,x=je>>>1;pe<x;){var U=2*(pe+1)-1,B=C[U],X=U+1,P=C[X];if(0>m(B,$))X<je&&0>m(P,B)?(C[pe]=P,C[X]=$,pe=X):(C[pe]=B,C[U]=$,pe=U);else if(X<je&&0>m(P,$))C[pe]=P,C[X]=$,pe=X;else break e}}return H}function m(C,H){var $=C.sortIndex-H.sortIndex;return $!==0?$:C.id-H.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var g=performance;r.unstable_now=function(){return g.now()}}else{var j=Date,T=j.now();r.unstable_now=function(){return j.now()-T}}var y=[],v=[],w=1,R=null,M=3,G=!1,Z=!1,Y=!1,Q=!1,q=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,J=typeof setImmediate<"u"?setImmediate:null;function ve(C){for(var H=d(v);H!==null;){if(H.callback===null)u(v);else if(H.startTime<=C)u(v),H.sortIndex=H.expirationTime,o(y,H);else break;H=d(v)}}function me(C){if(Y=!1,ve(C),!Z)if(d(y)!==null)Z=!0,Ee||(Ee=!0,We());else{var H=d(v);H!==null&&Ue(me,H.startTime-C)}}var Ee=!1,W=-1,Ce=5,$e=-1;function Bt(){return Q?!0:!(r.unstable_now()-$e<Ce)}function yt(){if(Q=!1,Ee){var C=r.unstable_now();$e=C;var H=!0;try{e:{Z=!1,Y&&(Y=!1,I(W),W=-1),G=!0;var $=M;try{t:{for(ve(C),R=d(y);R!==null&&!(R.expirationTime>C&&Bt());){var pe=R.callback;if(typeof pe=="function"){R.callback=null,M=R.priorityLevel;var je=pe(R.expirationTime<=C);if(C=r.unstable_now(),typeof je=="function"){R.callback=je,ve(C),H=!0;break t}R===d(y)&&u(y),ve(C)}else u(y);R=d(y)}if(R!==null)H=!0;else{var x=d(v);x!==null&&Ue(me,x.startTime-C),H=!1}}break e}finally{R=null,M=$,G=!1}H=void 0}}finally{H?We():Ee=!1}}}var We;if(typeof J=="function")We=function(){J(yt)};else if(typeof MessageChannel<"u"){var Yt=new MessageChannel,bt=Yt.port2;Yt.port1.onmessage=yt,We=function(){bt.postMessage(null)}}else We=function(){q(yt,0)};function Ue(C,H){W=q(function(){C(r.unstable_now())},H)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(C){C.callback=null},r.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ce=0<C?Math.floor(1e3/C):5},r.unstable_getCurrentPriorityLevel=function(){return M},r.unstable_next=function(C){switch(M){case 1:case 2:case 3:var H=3;break;default:H=M}var $=M;M=H;try{return C()}finally{M=$}},r.unstable_requestPaint=function(){Q=!0},r.unstable_runWithPriority=function(C,H){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var $=M;M=C;try{return H()}finally{M=$}},r.unstable_scheduleCallback=function(C,H,$){var pe=r.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?pe+$:pe):$=pe,C){case 1:var je=-1;break;case 2:je=250;break;case 5:je=1073741823;break;case 4:je=1e4;break;default:je=5e3}return je=$+je,C={id:w++,callback:H,priorityLevel:C,startTime:$,expirationTime:je,sortIndex:-1},$>pe?(C.sortIndex=$,o(v,C),d(y)===null&&C===d(v)&&(Y?(I(W),W=-1):Y=!0,Ue(me,$-pe))):(C.sortIndex=je,o(y,C),Z||G||(Z=!0,Ee||(Ee=!0,We()))),C},r.unstable_shouldYield=Bt,r.unstable_wrapCallback=function(C){var H=M;return function(){var $=M;M=H;try{return C.apply(this,arguments)}finally{M=$}}}})(Bc)),Bc}var fm;function Nv(){return fm||(fm=1,qc.exports=Sv()),qc.exports}var Yc={exports:{}},Fe={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dm;function Ev(){if(dm)return Fe;dm=1;var r=kc();function o(y){var v="https://react.dev/errors/"+y;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var w=2;w<arguments.length;w++)v+="&args[]="+encodeURIComponent(arguments[w])}return"Minified React error #"+y+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var u={d:{f:d,r:function(){throw Error(o(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},m=Symbol.for("react.portal");function g(y,v,w){var R=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m,key:R==null?null:""+R,children:y,containerInfo:v,implementation:w}}var j=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function T(y,v){if(y==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return Fe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,Fe.createPortal=function(y,v){var w=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(o(299));return g(y,v,null,w)},Fe.flushSync=function(y){var v=j.T,w=u.p;try{if(j.T=null,u.p=2,y)return y()}finally{j.T=v,u.p=w,u.d.f()}},Fe.preconnect=function(y,v){typeof y=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,u.d.C(y,v))},Fe.prefetchDNS=function(y){typeof y=="string"&&u.d.D(y)},Fe.preinit=function(y,v){if(typeof y=="string"&&v&&typeof v.as=="string"){var w=v.as,R=T(w,v.crossOrigin),M=typeof v.integrity=="string"?v.integrity:void 0,G=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;w==="style"?u.d.S(y,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:R,integrity:M,fetchPriority:G}):w==="script"&&u.d.X(y,{crossOrigin:R,integrity:M,fetchPriority:G,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},Fe.preinitModule=function(y,v){if(typeof y=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var w=T(v.as,v.crossOrigin);u.d.M(y,{crossOrigin:w,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0})}}else v==null&&u.d.M(y)},Fe.preload=function(y,v){if(typeof y=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var w=v.as,R=T(w,v.crossOrigin);u.d.L(y,w,{crossOrigin:R,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},Fe.preloadModule=function(y,v){if(typeof y=="string")if(v){var w=T(v.as,v.crossOrigin);u.d.m(y,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:w,integrity:typeof v.integrity=="string"?v.integrity:void 0})}else u.d.m(y)},Fe.requestFormReset=function(y){u.d.r(y)},Fe.unstable_batchedUpdates=function(y,v){return y(v)},Fe.useFormState=function(y,v,w){return j.H.useFormState(y,v,w)},Fe.useFormStatus=function(){return j.H.useHostTransitionStatus()},Fe.version="19.2.0",Fe}var mm;function zv(){if(mm)return Yc.exports;mm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(o){console.error(o)}}return r(),Yc.exports=Ev(),Yc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hm;function Tv(){if(hm)return Ln;hm=1;var r=Nv(),o=kc(),d=zv();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function g(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function j(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function T(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(g(e)!==e)throw Error(u(188))}function v(e){var t=e.alternate;if(!t){if(t=g(e),t===null)throw Error(u(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return y(n),e;if(i===l)return y(n),t;i=i.sibling}throw Error(u(188))}if(a.return!==l.return)a=n,l=i;else{for(var c=!1,f=n.child;f;){if(f===a){c=!0,a=n,l=i;break}if(f===l){c=!0,l=n,a=i;break}f=f.sibling}if(!c){for(f=i.child;f;){if(f===a){c=!0,a=i,l=n;break}if(f===l){c=!0,l=i,a=n;break}f=f.sibling}if(!c)throw Error(u(189))}}if(a.alternate!==l)throw Error(u(190))}if(a.tag!==3)throw Error(u(188));return a.stateNode.current===a?e:t}function w(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=w(e),t!==null)return t;e=e.sibling}return null}var R=Object.assign,M=Symbol.for("react.element"),G=Symbol.for("react.transitional.element"),Z=Symbol.for("react.portal"),Y=Symbol.for("react.fragment"),Q=Symbol.for("react.strict_mode"),q=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),J=Symbol.for("react.context"),ve=Symbol.for("react.forward_ref"),me=Symbol.for("react.suspense"),Ee=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),Ce=Symbol.for("react.lazy"),$e=Symbol.for("react.activity"),Bt=Symbol.for("react.memo_cache_sentinel"),yt=Symbol.iterator;function We(e){return e===null||typeof e!="object"?null:(e=yt&&e[yt]||e["@@iterator"],typeof e=="function"?e:null)}var Yt=Symbol.for("react.client.reference");function bt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Yt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Y:return"Fragment";case q:return"Profiler";case Q:return"StrictMode";case me:return"Suspense";case Ee:return"SuspenseList";case $e:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Z:return"Portal";case J:return e.displayName||"Context";case I:return(e._context.displayName||"Context")+".Consumer";case ve:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case W:return t=e.displayName||null,t!==null?t:bt(e.type)||"Memo";case Ce:t=e._payload,e=e._init;try{return bt(e(t))}catch{}}return null}var Ue=Array.isArray,C=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},pe=[],je=-1;function x(e){return{current:e}}function U(e){0>je||(e.current=pe[je],pe[je]=null,je--)}function B(e,t){je++,pe[je]=e.current,e.current=t}var X=x(null),P=x(null),ae=x(null),de=x(null);function Ie(e,t){switch(B(ae,t),B(P,e),B(X,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?wd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=wd(t),e=Od(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}U(X),B(X,e)}function Me(){U(X),U(P),U(ae)}function Zl(e){e.memoizedState!==null&&B(de,e);var t=X.current,a=Od(t,e.type);t!==a&&(B(P,e),B(X,a))}function Vn(e){P.current===e&&(U(X),U(P)),de.current===e&&(U(de),Un._currentValue=$)}var vs,lu;function Ua(e){if(vs===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);vs=t&&t[1]||"",lu=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+vs+e+lu}var ps=!1;function xs(e,t){if(!e||ps)return"";ps=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var _=function(){throw Error()};if(Object.defineProperty(_.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_,[])}catch(A){var E=A}Reflect.construct(e,[],_)}else{try{_.call()}catch(A){E=A}e.call(_.prototype)}}else{try{throw Error()}catch(A){E=A}(_=e())&&typeof _.catch=="function"&&_.catch(function(){})}}catch(A){if(A&&E&&typeof A.stack=="string")return[A.stack,E.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),c=i[0],f=i[1];if(c&&f){var h=c.split(`
`),N=f.split(`
`);for(n=l=0;l<h.length&&!h[l].includes("DetermineComponentFrameRoot");)l++;for(;n<N.length&&!N[n].includes("DetermineComponentFrameRoot");)n++;if(l===h.length||n===N.length)for(l=h.length-1,n=N.length-1;1<=l&&0<=n&&h[l]!==N[n];)n--;for(;1<=l&&0<=n;l--,n--)if(h[l]!==N[n]){if(l!==1||n!==1)do if(l--,n--,0>n||h[l]!==N[n]){var O=`
`+h[l].replace(" at new "," at ");return e.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",e.displayName)),O}while(1<=l&&0<=n);break}}}finally{ps=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ua(a):""}function $m(e,t){switch(e.tag){case 26:case 27:case 5:return Ua(e.type);case 16:return Ua("Lazy");case 13:return e.child!==t&&t!==null?Ua("Suspense Fallback"):Ua("Suspense");case 19:return Ua("SuspenseList");case 0:case 15:return xs(e.type,!1);case 11:return xs(e.type.render,!1);case 1:return xs(e.type,!0);case 31:return Ua("Activity");default:return""}}function nu(e){try{var t="",a=null;do t+=$m(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var ys=Object.prototype.hasOwnProperty,bs=r.unstable_scheduleCallback,js=r.unstable_cancelCallback,Wm=r.unstable_shouldYield,Fm=r.unstable_requestPaint,rt=r.unstable_now,Im=r.unstable_getCurrentPriorityLevel,iu=r.unstable_ImmediatePriority,su=r.unstable_UserBlockingPriority,Zn=r.unstable_NormalPriority,Pm=r.unstable_LowPriority,ru=r.unstable_IdlePriority,eh=r.log,th=r.unstable_setDisableYieldValue,kl=null,ct=null;function oa(e){if(typeof eh=="function"&&th(e),ct&&typeof ct.setStrictMode=="function")try{ct.setStrictMode(kl,e)}catch{}}var ut=Math.clz32?Math.clz32:nh,ah=Math.log,lh=Math.LN2;function nh(e){return e>>>=0,e===0?32:31-(ah(e)/lh|0)|0}var kn=256,Kn=262144,Jn=4194304;function Ha(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function $n(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,c=e.pingedLanes;e=e.warmLanes;var f=l&134217727;return f!==0?(l=f&~i,l!==0?n=Ha(l):(c&=f,c!==0?n=Ha(c):a||(a=f&~e,a!==0&&(n=Ha(a))))):(f=l&~i,f!==0?n=Ha(f):c!==0?n=Ha(c):a||(a=l&~e,a!==0&&(n=Ha(a)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function Kl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function ih(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cu(){var e=Jn;return Jn<<=1,(Jn&62914560)===0&&(Jn=4194304),e}function Ss(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Jl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function sh(e,t,a,l,n,i){var c=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var f=e.entanglements,h=e.expirationTimes,N=e.hiddenUpdates;for(a=c&~a;0<a;){var O=31-ut(a),_=1<<O;f[O]=0,h[O]=-1;var E=N[O];if(E!==null)for(N[O]=null,O=0;O<E.length;O++){var A=E[O];A!==null&&(A.lane&=-536870913)}a&=~_}l!==0&&uu(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(c&~t))}function uu(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-ut(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function ou(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-ut(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function fu(e,t){var a=t&-t;return a=(a&42)!==0?1:Ns(a),(a&(e.suspendedLanes|t))!==0?0:a}function Ns(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Es(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function du(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:Pd(e.type))}function mu(e,t){var a=H.p;try{return H.p=e,t()}finally{H.p=a}}var fa=Math.random().toString(36).slice(2),Ve="__reactFiber$"+fa,et="__reactProps$"+fa,al="__reactContainer$"+fa,zs="__reactEvents$"+fa,rh="__reactListeners$"+fa,ch="__reactHandles$"+fa,hu="__reactResources$"+fa,$l="__reactMarker$"+fa;function Ts(e){delete e[Ve],delete e[et],delete e[zs],delete e[rh],delete e[ch]}function ll(e){var t=e[Ve];if(t)return t;for(var a=e.parentNode;a;){if(t=a[al]||a[Ve]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=qd(e);e!==null;){if(a=e[Ve])return a;e=qd(e)}return t}e=a,a=e.parentNode}return null}function nl(e){if(e=e[Ve]||e[al]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Wl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function il(e){var t=e[hu];return t||(t=e[hu]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ge(e){e[$l]=!0}var gu=new Set,vu={};function qa(e,t){sl(e,t),sl(e+"Capture",t)}function sl(e,t){for(vu[e]=t,e=0;e<t.length;e++)gu.add(t[e])}var uh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),pu={},xu={};function oh(e){return ys.call(xu,e)?!0:ys.call(pu,e)?!1:uh.test(e)?xu[e]=!0:(pu[e]=!0,!1)}function Wn(e,t,a){if(oh(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Fn(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Zt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function jt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function yu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function fh(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(c){a=""+c,i.call(this,c)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(c){a=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function As(e){if(!e._valueTracker){var t=yu(e)?"checked":"value";e._valueTracker=fh(e,t,""+e[t])}}function bu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=yu(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function In(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var dh=/[\n"\\]/g;function St(e){return e.replace(dh,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Rs(e,t,a,l,n,i,c,f){e.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.type=c:e.removeAttribute("type"),t!=null?c==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+jt(t)):e.value!==""+jt(t)&&(e.value=""+jt(t)):c!=="submit"&&c!=="reset"||e.removeAttribute("value"),t!=null?ws(e,c,jt(t)):a!=null?ws(e,c,jt(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.name=""+jt(f):e.removeAttribute("name")}function ju(e,t,a,l,n,i,c,f){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){As(e);return}a=a!=null?""+jt(a):"",t=t!=null?""+jt(t):a,f||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=f?e.checked:!!l,e.defaultChecked=!!l,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.name=c),As(e)}function ws(e,t,a){t==="number"&&In(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function rl(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+jt(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Su(e,t,a){if(t!=null&&(t=""+jt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+jt(a):""}function Nu(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(u(92));if(Ue(l)){if(1<l.length)throw Error(u(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=jt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),As(e)}function cl(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var mh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Eu(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||mh.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function zu(e,t,a){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&Eu(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&Eu(e,i,t[i])}function Os(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),gh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Pn(e){return gh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function kt(){}var Cs=null;function Ms(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ul=null,ol=null;function Tu(e){var t=nl(e);if(t&&(e=t.stateNode)){var a=e[et]||null;e:switch(e=t.stateNode,t.type){case"input":if(Rs(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+St(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[et]||null;if(!n)throw Error(u(90));Rs(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&bu(l)}break e;case"textarea":Su(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&rl(e,!!a.multiple,t,!1)}}}var Ds=!1;function Au(e,t,a){if(Ds)return e(t,a);Ds=!0;try{var l=e(t);return l}finally{if(Ds=!1,(ul!==null||ol!==null)&&(Li(),ul&&(t=ul,e=ol,ol=ul=null,Tu(t),e)))for(t=0;t<e.length;t++)Tu(e[t])}}function Fl(e,t){var a=e.stateNode;if(a===null)return null;var l=a[et]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(u(231,t,typeof a));return a}var Kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_s=!1;if(Kt)try{var Il={};Object.defineProperty(Il,"passive",{get:function(){_s=!0}}),window.addEventListener("test",Il,Il),window.removeEventListener("test",Il,Il)}catch{_s=!1}var da=null,Us=null,ei=null;function Ru(){if(ei)return ei;var e,t=Us,a=t.length,l,n="value"in da?da.value:da.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var c=a-e;for(l=1;l<=c&&t[a-l]===n[i-l];l++);return ei=n.slice(e,1<l?1-l:void 0)}function ti(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ai(){return!0}function wu(){return!1}function tt(e){function t(a,l,n,i,c){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=c,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(a=e[f],this[f]=a?a(i):i[f]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ai:wu,this.isPropagationStopped=wu,this}return R(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ai)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ai)},persist:function(){},isPersistent:ai}),t}var Ba={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},li=tt(Ba),Pl=R({},Ba,{view:0,detail:0}),vh=tt(Pl),Hs,qs,en,ni=R({},Pl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ys,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==en&&(en&&e.type==="mousemove"?(Hs=e.screenX-en.screenX,qs=e.screenY-en.screenY):qs=Hs=0,en=e),Hs)},movementY:function(e){return"movementY"in e?e.movementY:qs}}),Ou=tt(ni),ph=R({},ni,{dataTransfer:0}),xh=tt(ph),yh=R({},Pl,{relatedTarget:0}),Bs=tt(yh),bh=R({},Ba,{animationName:0,elapsedTime:0,pseudoElement:0}),jh=tt(bh),Sh=R({},Ba,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Nh=tt(Sh),Eh=R({},Ba,{data:0}),Cu=tt(Eh),zh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Th={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ah={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ah[e])?!!t[e]:!1}function Ys(){return Rh}var wh=R({},Pl,{key:function(e){if(e.key){var t=zh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ti(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Th[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ys,charCode:function(e){return e.type==="keypress"?ti(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ti(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Oh=tt(wh),Ch=R({},ni,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mu=tt(Ch),Mh=R({},Pl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ys}),Dh=tt(Mh),_h=R({},Ba,{propertyName:0,elapsedTime:0,pseudoElement:0}),Uh=tt(_h),Hh=R({},ni,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),qh=tt(Hh),Bh=R({},Ba,{newState:0,oldState:0}),Yh=tt(Bh),Lh=[9,13,27,32],Ls=Kt&&"CompositionEvent"in window,tn=null;Kt&&"documentMode"in document&&(tn=document.documentMode);var Gh=Kt&&"TextEvent"in window&&!tn,Du=Kt&&(!Ls||tn&&8<tn&&11>=tn),_u=" ",Uu=!1;function Hu(e,t){switch(e){case"keyup":return Lh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fl=!1;function Qh(e,t){switch(e){case"compositionend":return qu(t);case"keypress":return t.which!==32?null:(Uu=!0,_u);case"textInput":return e=t.data,e===_u&&Uu?null:e;default:return null}}function Xh(e,t){if(fl)return e==="compositionend"||!Ls&&Hu(e,t)?(e=Ru(),ei=Us=da=null,fl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Du&&t.locale!=="ko"?null:t.data;default:return null}}var Vh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Vh[e.type]:t==="textarea"}function Yu(e,t,a,l){ul?ol?ol.push(l):ol=[l]:ul=l,t=Ki(t,"onChange"),0<t.length&&(a=new li("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var an=null,ln=null;function Zh(e){Nd(e,0)}function ii(e){var t=Wl(e);if(bu(t))return e}function Lu(e,t){if(e==="change")return t}var Gu=!1;if(Kt){var Gs;if(Kt){var Qs="oninput"in document;if(!Qs){var Qu=document.createElement("div");Qu.setAttribute("oninput","return;"),Qs=typeof Qu.oninput=="function"}Gs=Qs}else Gs=!1;Gu=Gs&&(!document.documentMode||9<document.documentMode)}function Xu(){an&&(an.detachEvent("onpropertychange",Vu),ln=an=null)}function Vu(e){if(e.propertyName==="value"&&ii(ln)){var t=[];Yu(t,ln,e,Ms(e)),Au(Zh,t)}}function kh(e,t,a){e==="focusin"?(Xu(),an=t,ln=a,an.attachEvent("onpropertychange",Vu)):e==="focusout"&&Xu()}function Kh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ii(ln)}function Jh(e,t){if(e==="click")return ii(t)}function $h(e,t){if(e==="input"||e==="change")return ii(t)}function Wh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ot=typeof Object.is=="function"?Object.is:Wh;function nn(e,t){if(ot(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!ys.call(t,n)||!ot(e[n],t[n]))return!1}return!0}function Zu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ku(e,t){var a=Zu(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Zu(a)}}function Ku(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ku(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ju(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=In(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=In(e.document)}return t}function Xs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Fh=Kt&&"documentMode"in document&&11>=document.documentMode,dl=null,Vs=null,sn=null,Zs=!1;function $u(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Zs||dl==null||dl!==In(l)||(l=dl,"selectionStart"in l&&Xs(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),sn&&nn(sn,l)||(sn=l,l=Ki(Vs,"onSelect"),0<l.length&&(t=new li("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=dl)))}function Ya(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var ml={animationend:Ya("Animation","AnimationEnd"),animationiteration:Ya("Animation","AnimationIteration"),animationstart:Ya("Animation","AnimationStart"),transitionrun:Ya("Transition","TransitionRun"),transitionstart:Ya("Transition","TransitionStart"),transitioncancel:Ya("Transition","TransitionCancel"),transitionend:Ya("Transition","TransitionEnd")},ks={},Wu={};Kt&&(Wu=document.createElement("div").style,"AnimationEvent"in window||(delete ml.animationend.animation,delete ml.animationiteration.animation,delete ml.animationstart.animation),"TransitionEvent"in window||delete ml.transitionend.transition);function La(e){if(ks[e])return ks[e];if(!ml[e])return e;var t=ml[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Wu)return ks[e]=t[a];return e}var Fu=La("animationend"),Iu=La("animationiteration"),Pu=La("animationstart"),Ih=La("transitionrun"),Ph=La("transitionstart"),eg=La("transitioncancel"),eo=La("transitionend"),to=new Map,Ks="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ks.push("scrollEnd");function Mt(e,t){to.set(e,t),qa(t,[e])}var si=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Nt=[],hl=0,Js=0;function ri(){for(var e=hl,t=Js=hl=0;t<e;){var a=Nt[t];Nt[t++]=null;var l=Nt[t];Nt[t++]=null;var n=Nt[t];Nt[t++]=null;var i=Nt[t];if(Nt[t++]=null,l!==null&&n!==null){var c=l.pending;c===null?n.next=n:(n.next=c.next,c.next=n),l.pending=n}i!==0&&ao(a,n,i)}}function ci(e,t,a,l){Nt[hl++]=e,Nt[hl++]=t,Nt[hl++]=a,Nt[hl++]=l,Js|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function $s(e,t,a,l){return ci(e,t,a,l),ui(e)}function Ga(e,t){return ci(e,null,null,t),ui(e)}function ao(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-ut(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function ui(e){if(50<Rn)throw Rn=0,nc=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var gl={};function tg(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ft(e,t,a,l){return new tg(e,t,a,l)}function Ws(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Jt(e,t){var a=e.alternate;return a===null?(a=ft(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function lo(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function oi(e,t,a,l,n,i){var c=0;if(l=e,typeof e=="function")Ws(e)&&(c=1);else if(typeof e=="string")c=sv(e,a,X.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case $e:return e=ft(31,a,t,n),e.elementType=$e,e.lanes=i,e;case Y:return Qa(a.children,n,i,t);case Q:c=8,n|=24;break;case q:return e=ft(12,a,t,n|2),e.elementType=q,e.lanes=i,e;case me:return e=ft(13,a,t,n),e.elementType=me,e.lanes=i,e;case Ee:return e=ft(19,a,t,n),e.elementType=Ee,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case J:c=10;break e;case I:c=9;break e;case ve:c=11;break e;case W:c=14;break e;case Ce:c=16,l=null;break e}c=29,a=Error(u(130,e===null?"null":typeof e,"")),l=null}return t=ft(c,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function Qa(e,t,a,l){return e=ft(7,e,l,t),e.lanes=a,e}function Fs(e,t,a){return e=ft(6,e,null,t),e.lanes=a,e}function no(e){var t=ft(18,null,null,0);return t.stateNode=e,t}function Is(e,t,a){return t=ft(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var io=new WeakMap;function Et(e,t){if(typeof e=="object"&&e!==null){var a=io.get(e);return a!==void 0?a:(t={value:e,source:t,stack:nu(t)},io.set(e,t),t)}return{value:e,source:t,stack:nu(t)}}var vl=[],pl=0,fi=null,rn=0,zt=[],Tt=0,ma=null,Lt=1,Gt="";function $t(e,t){vl[pl++]=rn,vl[pl++]=fi,fi=e,rn=t}function so(e,t,a){zt[Tt++]=Lt,zt[Tt++]=Gt,zt[Tt++]=ma,ma=e;var l=Lt;e=Gt;var n=32-ut(l)-1;l&=~(1<<n),a+=1;var i=32-ut(t)+n;if(30<i){var c=n-n%5;i=(l&(1<<c)-1).toString(32),l>>=c,n-=c,Lt=1<<32-ut(t)+n|a<<n|l,Gt=i+e}else Lt=1<<i|a<<n|l,Gt=e}function Ps(e){e.return!==null&&($t(e,1),so(e,1,0))}function er(e){for(;e===fi;)fi=vl[--pl],vl[pl]=null,rn=vl[--pl],vl[pl]=null;for(;e===ma;)ma=zt[--Tt],zt[Tt]=null,Gt=zt[--Tt],zt[Tt]=null,Lt=zt[--Tt],zt[Tt]=null}function ro(e,t){zt[Tt++]=Lt,zt[Tt++]=Gt,zt[Tt++]=ma,Lt=t.id,Gt=t.overflow,ma=e}var Ze=null,ze=null,re=!1,ha=null,At=!1,tr=Error(u(519));function ga(e){var t=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw cn(Et(t,e)),tr}function co(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[Ve]=e,t[et]=l,a){case"dialog":ne("cancel",t),ne("close",t);break;case"iframe":case"object":case"embed":ne("load",t);break;case"video":case"audio":for(a=0;a<On.length;a++)ne(On[a],t);break;case"source":ne("error",t);break;case"img":case"image":case"link":ne("error",t),ne("load",t);break;case"details":ne("toggle",t);break;case"input":ne("invalid",t),ju(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":ne("invalid",t);break;case"textarea":ne("invalid",t),Nu(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||Ad(t.textContent,a)?(l.popover!=null&&(ne("beforetoggle",t),ne("toggle",t)),l.onScroll!=null&&ne("scroll",t),l.onScrollEnd!=null&&ne("scrollend",t),l.onClick!=null&&(t.onclick=kt),t=!0):t=!1,t||ga(e,!0)}function uo(e){for(Ze=e.return;Ze;)switch(Ze.tag){case 5:case 31:case 13:At=!1;return;case 27:case 3:At=!0;return;default:Ze=Ze.return}}function xl(e){if(e!==Ze)return!1;if(!re)return uo(e),re=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||yc(e.type,e.memoizedProps)),a=!a),a&&ze&&ga(e),uo(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));ze=Hd(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));ze=Hd(e)}else t===27?(t=ze,wa(e.type)?(e=Ec,Ec=null,ze=e):ze=t):ze=Ze?wt(e.stateNode.nextSibling):null;return!0}function Xa(){ze=Ze=null,re=!1}function ar(){var e=ha;return e!==null&&(it===null?it=e:it.push.apply(it,e),ha=null),e}function cn(e){ha===null?ha=[e]:ha.push(e)}var lr=x(null),Va=null,Wt=null;function va(e,t,a){B(lr,t._currentValue),t._currentValue=a}function Ft(e){e._currentValue=lr.current,U(lr)}function nr(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function ir(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var c=n.child;i=i.firstContext;e:for(;i!==null;){var f=i;i=n;for(var h=0;h<t.length;h++)if(f.context===t[h]){i.lanes|=a,f=i.alternate,f!==null&&(f.lanes|=a),nr(i.return,a,e),l||(c=null);break e}i=f.next}}else if(n.tag===18){if(c=n.return,c===null)throw Error(u(341));c.lanes|=a,i=c.alternate,i!==null&&(i.lanes|=a),nr(c,a,e),c=null}else c=n.child;if(c!==null)c.return=n;else for(c=n;c!==null;){if(c===e){c=null;break}if(n=c.sibling,n!==null){n.return=c.return,c=n;break}c=c.return}n=c}}function yl(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var c=n.alternate;if(c===null)throw Error(u(387));if(c=c.memoizedProps,c!==null){var f=n.type;ot(n.pendingProps.value,c.value)||(e!==null?e.push(f):e=[f])}}else if(n===de.current){if(c=n.alternate,c===null)throw Error(u(387));c.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(Un):e=[Un])}n=n.return}e!==null&&ir(t,e,a,l),t.flags|=262144}function di(e){for(e=e.firstContext;e!==null;){if(!ot(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Za(e){Va=e,Wt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ke(e){return oo(Va,e)}function mi(e,t){return Va===null&&Za(e),oo(e,t)}function oo(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Wt===null){if(e===null)throw Error(u(308));Wt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Wt=Wt.next=t;return a}var ag=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},lg=r.unstable_scheduleCallback,ng=r.unstable_NormalPriority,He={$$typeof:J,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function sr(){return{controller:new ag,data:new Map,refCount:0}}function un(e){e.refCount--,e.refCount===0&&lg(ng,function(){e.controller.abort()})}var on=null,rr=0,bl=0,jl=null;function ig(e,t){if(on===null){var a=on=[];rr=0,bl=oc(),jl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return rr++,t.then(fo,fo),t}function fo(){if(--rr===0&&on!==null){jl!==null&&(jl.status="fulfilled");var e=on;on=null,bl=0,jl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function sg(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var mo=C.S;C.S=function(e,t){Ff=rt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&ig(e,t),mo!==null&&mo(e,t)};var ka=x(null);function cr(){var e=ka.current;return e!==null?e:Se.pooledCache}function hi(e,t){t===null?B(ka,ka.current):B(ka,t.pool)}function ho(){var e=cr();return e===null?null:{parent:He._currentValue,pool:e}}var Sl=Error(u(460)),ur=Error(u(474)),gi=Error(u(542)),vi={then:function(){}};function go(e){return e=e.status,e==="fulfilled"||e==="rejected"}function vo(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(kt,kt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,xo(e),e;default:if(typeof t.status=="string")t.then(kt,kt);else{if(e=Se,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,xo(e),e}throw Ja=t,Sl}}function Ka(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ja=a,Sl):a}}var Ja=null;function po(){if(Ja===null)throw Error(u(459));var e=Ja;return Ja=null,e}function xo(e){if(e===Sl||e===gi)throw Error(u(483))}var Nl=null,fn=0;function pi(e){var t=fn;return fn+=1,Nl===null&&(Nl=[]),vo(Nl,e,t)}function dn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function xi(e,t){throw t.$$typeof===M?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function yo(e){function t(b,p){if(e){var S=b.deletions;S===null?(b.deletions=[p],b.flags|=16):S.push(p)}}function a(b,p){if(!e)return null;for(;p!==null;)t(b,p),p=p.sibling;return null}function l(b){for(var p=new Map;b!==null;)b.key!==null?p.set(b.key,b):p.set(b.index,b),b=b.sibling;return p}function n(b,p){return b=Jt(b,p),b.index=0,b.sibling=null,b}function i(b,p,S){return b.index=S,e?(S=b.alternate,S!==null?(S=S.index,S<p?(b.flags|=67108866,p):S):(b.flags|=67108866,p)):(b.flags|=1048576,p)}function c(b){return e&&b.alternate===null&&(b.flags|=67108866),b}function f(b,p,S,D){return p===null||p.tag!==6?(p=Fs(S,b.mode,D),p.return=b,p):(p=n(p,S),p.return=b,p)}function h(b,p,S,D){var k=S.type;return k===Y?O(b,p,S.props.children,D,S.key):p!==null&&(p.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Ce&&Ka(k)===p.type)?(p=n(p,S.props),dn(p,S),p.return=b,p):(p=oi(S.type,S.key,S.props,null,b.mode,D),dn(p,S),p.return=b,p)}function N(b,p,S,D){return p===null||p.tag!==4||p.stateNode.containerInfo!==S.containerInfo||p.stateNode.implementation!==S.implementation?(p=Is(S,b.mode,D),p.return=b,p):(p=n(p,S.children||[]),p.return=b,p)}function O(b,p,S,D,k){return p===null||p.tag!==7?(p=Qa(S,b.mode,D,k),p.return=b,p):(p=n(p,S),p.return=b,p)}function _(b,p,S){if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return p=Fs(""+p,b.mode,S),p.return=b,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case G:return S=oi(p.type,p.key,p.props,null,b.mode,S),dn(S,p),S.return=b,S;case Z:return p=Is(p,b.mode,S),p.return=b,p;case Ce:return p=Ka(p),_(b,p,S)}if(Ue(p)||We(p))return p=Qa(p,b.mode,S,null),p.return=b,p;if(typeof p.then=="function")return _(b,pi(p),S);if(p.$$typeof===J)return _(b,mi(b,p),S);xi(b,p)}return null}function E(b,p,S,D){var k=p!==null?p.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return k!==null?null:f(b,p,""+S,D);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case G:return S.key===k?h(b,p,S,D):null;case Z:return S.key===k?N(b,p,S,D):null;case Ce:return S=Ka(S),E(b,p,S,D)}if(Ue(S)||We(S))return k!==null?null:O(b,p,S,D,null);if(typeof S.then=="function")return E(b,p,pi(S),D);if(S.$$typeof===J)return E(b,p,mi(b,S),D);xi(b,S)}return null}function A(b,p,S,D,k){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return b=b.get(S)||null,f(p,b,""+D,k);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case G:return b=b.get(D.key===null?S:D.key)||null,h(p,b,D,k);case Z:return b=b.get(D.key===null?S:D.key)||null,N(p,b,D,k);case Ce:return D=Ka(D),A(b,p,S,D,k)}if(Ue(D)||We(D))return b=b.get(S)||null,O(p,b,D,k,null);if(typeof D.then=="function")return A(b,p,S,pi(D),k);if(D.$$typeof===J)return A(b,p,S,mi(p,D),k);xi(p,D)}return null}function L(b,p,S,D){for(var k=null,ue=null,V=p,te=p=0,se=null;V!==null&&te<S.length;te++){V.index>te?(se=V,V=null):se=V.sibling;var oe=E(b,V,S[te],D);if(oe===null){V===null&&(V=se);break}e&&V&&oe.alternate===null&&t(b,V),p=i(oe,p,te),ue===null?k=oe:ue.sibling=oe,ue=oe,V=se}if(te===S.length)return a(b,V),re&&$t(b,te),k;if(V===null){for(;te<S.length;te++)V=_(b,S[te],D),V!==null&&(p=i(V,p,te),ue===null?k=V:ue.sibling=V,ue=V);return re&&$t(b,te),k}for(V=l(V);te<S.length;te++)se=A(V,b,te,S[te],D),se!==null&&(e&&se.alternate!==null&&V.delete(se.key===null?te:se.key),p=i(se,p,te),ue===null?k=se:ue.sibling=se,ue=se);return e&&V.forEach(function(_a){return t(b,_a)}),re&&$t(b,te),k}function K(b,p,S,D){if(S==null)throw Error(u(151));for(var k=null,ue=null,V=p,te=p=0,se=null,oe=S.next();V!==null&&!oe.done;te++,oe=S.next()){V.index>te?(se=V,V=null):se=V.sibling;var _a=E(b,V,oe.value,D);if(_a===null){V===null&&(V=se);break}e&&V&&_a.alternate===null&&t(b,V),p=i(_a,p,te),ue===null?k=_a:ue.sibling=_a,ue=_a,V=se}if(oe.done)return a(b,V),re&&$t(b,te),k;if(V===null){for(;!oe.done;te++,oe=S.next())oe=_(b,oe.value,D),oe!==null&&(p=i(oe,p,te),ue===null?k=oe:ue.sibling=oe,ue=oe);return re&&$t(b,te),k}for(V=l(V);!oe.done;te++,oe=S.next())oe=A(V,b,te,oe.value,D),oe!==null&&(e&&oe.alternate!==null&&V.delete(oe.key===null?te:oe.key),p=i(oe,p,te),ue===null?k=oe:ue.sibling=oe,ue=oe);return e&&V.forEach(function(pv){return t(b,pv)}),re&&$t(b,te),k}function be(b,p,S,D){if(typeof S=="object"&&S!==null&&S.type===Y&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case G:e:{for(var k=S.key;p!==null;){if(p.key===k){if(k=S.type,k===Y){if(p.tag===7){a(b,p.sibling),D=n(p,S.props.children),D.return=b,b=D;break e}}else if(p.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Ce&&Ka(k)===p.type){a(b,p.sibling),D=n(p,S.props),dn(D,S),D.return=b,b=D;break e}a(b,p);break}else t(b,p);p=p.sibling}S.type===Y?(D=Qa(S.props.children,b.mode,D,S.key),D.return=b,b=D):(D=oi(S.type,S.key,S.props,null,b.mode,D),dn(D,S),D.return=b,b=D)}return c(b);case Z:e:{for(k=S.key;p!==null;){if(p.key===k)if(p.tag===4&&p.stateNode.containerInfo===S.containerInfo&&p.stateNode.implementation===S.implementation){a(b,p.sibling),D=n(p,S.children||[]),D.return=b,b=D;break e}else{a(b,p);break}else t(b,p);p=p.sibling}D=Is(S,b.mode,D),D.return=b,b=D}return c(b);case Ce:return S=Ka(S),be(b,p,S,D)}if(Ue(S))return L(b,p,S,D);if(We(S)){if(k=We(S),typeof k!="function")throw Error(u(150));return S=k.call(S),K(b,p,S,D)}if(typeof S.then=="function")return be(b,p,pi(S),D);if(S.$$typeof===J)return be(b,p,mi(b,S),D);xi(b,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,p!==null&&p.tag===6?(a(b,p.sibling),D=n(p,S),D.return=b,b=D):(a(b,p),D=Fs(S,b.mode,D),D.return=b,b=D),c(b)):a(b,p)}return function(b,p,S,D){try{fn=0;var k=be(b,p,S,D);return Nl=null,k}catch(V){if(V===Sl||V===gi)throw V;var ue=ft(29,V,null,b.mode);return ue.lanes=D,ue.return=b,ue}finally{}}}var $a=yo(!0),bo=yo(!1),pa=!1;function or(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function fr(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function xa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ya(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(fe&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=ui(e),ao(e,null,a),t}return ci(e,l,t,a),ui(e)}function mn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,ou(e,a)}}function dr(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var c={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=c:i=i.next=c,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var mr=!1;function hn(){if(mr){var e=jl;if(e!==null)throw e}}function gn(e,t,a,l){mr=!1;var n=e.updateQueue;pa=!1;var i=n.firstBaseUpdate,c=n.lastBaseUpdate,f=n.shared.pending;if(f!==null){n.shared.pending=null;var h=f,N=h.next;h.next=null,c===null?i=N:c.next=N,c=h;var O=e.alternate;O!==null&&(O=O.updateQueue,f=O.lastBaseUpdate,f!==c&&(f===null?O.firstBaseUpdate=N:f.next=N,O.lastBaseUpdate=h))}if(i!==null){var _=n.baseState;c=0,O=N=h=null,f=i;do{var E=f.lane&-536870913,A=E!==f.lane;if(A?(ie&E)===E:(l&E)===E){E!==0&&E===bl&&(mr=!0),O!==null&&(O=O.next={lane:0,tag:f.tag,payload:f.payload,callback:null,next:null});e:{var L=e,K=f;E=t;var be=a;switch(K.tag){case 1:if(L=K.payload,typeof L=="function"){_=L.call(be,_,E);break e}_=L;break e;case 3:L.flags=L.flags&-65537|128;case 0:if(L=K.payload,E=typeof L=="function"?L.call(be,_,E):L,E==null)break e;_=R({},_,E);break e;case 2:pa=!0}}E=f.callback,E!==null&&(e.flags|=64,A&&(e.flags|=8192),A=n.callbacks,A===null?n.callbacks=[E]:A.push(E))}else A={lane:E,tag:f.tag,payload:f.payload,callback:f.callback,next:null},O===null?(N=O=A,h=_):O=O.next=A,c|=E;if(f=f.next,f===null){if(f=n.shared.pending,f===null)break;A=f,f=A.next,A.next=null,n.lastBaseUpdate=A,n.shared.pending=null}}while(!0);O===null&&(h=_),n.baseState=h,n.firstBaseUpdate=N,n.lastBaseUpdate=O,i===null&&(n.shared.lanes=0),Ea|=c,e.lanes=c,e.memoizedState=_}}function jo(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function So(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)jo(a[e],t)}var El=x(null),yi=x(0);function No(e,t){e=sa,B(yi,e),B(El,t),sa=e|t.baseLanes}function hr(){B(yi,sa),B(El,El.current)}function gr(){sa=yi.current,U(El),U(yi)}var dt=x(null),Rt=null;function ba(e){var t=e.alternate;B(De,De.current&1),B(dt,e),Rt===null&&(t===null||El.current!==null||t.memoizedState!==null)&&(Rt=e)}function vr(e){B(De,De.current),B(dt,e),Rt===null&&(Rt=e)}function Eo(e){e.tag===22?(B(De,De.current),B(dt,e),Rt===null&&(Rt=e)):ja()}function ja(){B(De,De.current),B(dt,dt.current)}function mt(e){U(dt),Rt===e&&(Rt=null),U(De)}var De=x(0);function bi(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Sc(a)||Nc(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var It=0,ee=null,xe=null,qe=null,ji=!1,zl=!1,Wa=!1,Si=0,vn=0,Tl=null,rg=0;function we(){throw Error(u(321))}function pr(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!ot(e[a],t[a]))return!1;return!0}function xr(e,t,a,l,n,i){return It=i,ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,C.H=e===null||e.memoizedState===null?cf:Dr,Wa=!1,i=a(l,n),Wa=!1,zl&&(i=To(t,a,l,n)),zo(e),i}function zo(e){C.H=yn;var t=xe!==null&&xe.next!==null;if(It=0,qe=xe=ee=null,ji=!1,vn=0,Tl=null,t)throw Error(u(300));e===null||Be||(e=e.dependencies,e!==null&&di(e)&&(Be=!0))}function To(e,t,a,l){ee=e;var n=0;do{if(zl&&(Tl=null),vn=0,zl=!1,25<=n)throw Error(u(301));if(n+=1,qe=xe=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}C.H=uf,i=t(a,l)}while(zl);return i}function cg(){var e=C.H,t=e.useState()[0];return t=typeof t.then=="function"?pn(t):t,e=e.useState()[0],(xe!==null?xe.memoizedState:null)!==e&&(ee.flags|=1024),t}function yr(){var e=Si!==0;return Si=0,e}function br(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function jr(e){if(ji){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ji=!1}It=0,qe=xe=ee=null,zl=!1,vn=Si=0,Tl=null}function Pe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?ee.memoizedState=qe=e:qe=qe.next=e,qe}function _e(){if(xe===null){var e=ee.alternate;e=e!==null?e.memoizedState:null}else e=xe.next;var t=qe===null?ee.memoizedState:qe.next;if(t!==null)qe=t,xe=e;else{if(e===null)throw ee.alternate===null?Error(u(467)):Error(u(310));xe=e,e={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},qe===null?ee.memoizedState=qe=e:qe=qe.next=e}return qe}function Ni(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function pn(e){var t=vn;return vn+=1,Tl===null&&(Tl=[]),e=vo(Tl,e,t),t=ee,(qe===null?t.memoizedState:qe.next)===null&&(t=t.alternate,C.H=t===null||t.memoizedState===null?cf:Dr),e}function Ei(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return pn(e);if(e.$$typeof===J)return ke(e)}throw Error(u(438,String(e)))}function Sr(e){var t=null,a=ee.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=ee.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Ni(),ee.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=Bt;return t.index++,a}function Pt(e,t){return typeof t=="function"?t(e):t}function zi(e){var t=_e();return Nr(t,xe,e)}function Nr(e,t,a){var l=e.queue;if(l===null)throw Error(u(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var c=n.next;n.next=i.next,i.next=c}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var f=c=null,h=null,N=t,O=!1;do{var _=N.lane&-536870913;if(_!==N.lane?(ie&_)===_:(It&_)===_){var E=N.revertLane;if(E===0)h!==null&&(h=h.next={lane:0,revertLane:0,gesture:null,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),_===bl&&(O=!0);else if((It&E)===E){N=N.next,E===bl&&(O=!0);continue}else _={lane:0,revertLane:N.revertLane,gesture:null,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},h===null?(f=h=_,c=i):h=h.next=_,ee.lanes|=E,Ea|=E;_=N.action,Wa&&a(i,_),i=N.hasEagerState?N.eagerState:a(i,_)}else E={lane:_,revertLane:N.revertLane,gesture:N.gesture,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},h===null?(f=h=E,c=i):h=h.next=E,ee.lanes|=_,Ea|=_;N=N.next}while(N!==null&&N!==t);if(h===null?c=i:h.next=f,!ot(i,e.memoizedState)&&(Be=!0,O&&(a=jl,a!==null)))throw a;e.memoizedState=i,e.baseState=c,e.baseQueue=h,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Er(e){var t=_e(),a=t.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var c=n=n.next;do i=e(i,c.action),c=c.next;while(c!==n);ot(i,t.memoizedState)||(Be=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function Ao(e,t,a){var l=ee,n=_e(),i=re;if(i){if(a===void 0)throw Error(u(407));a=a()}else a=t();var c=!ot((xe||n).memoizedState,a);if(c&&(n.memoizedState=a,Be=!0),n=n.queue,Ar(Oo.bind(null,l,n,e),[e]),n.getSnapshot!==t||c||qe!==null&&qe.memoizedState.tag&1){if(l.flags|=2048,Al(9,{destroy:void 0},wo.bind(null,l,n,a,t),null),Se===null)throw Error(u(349));i||(It&127)!==0||Ro(l,t,a)}return a}function Ro(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ee.updateQueue,t===null?(t=Ni(),ee.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function wo(e,t,a,l){t.value=a,t.getSnapshot=l,Co(t)&&Mo(e)}function Oo(e,t,a){return a(function(){Co(t)&&Mo(e)})}function Co(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!ot(e,a)}catch{return!0}}function Mo(e){var t=Ga(e,2);t!==null&&st(t,e,2)}function zr(e){var t=Pe();if(typeof e=="function"){var a=e;if(e=a(),Wa){oa(!0);try{a()}finally{oa(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pt,lastRenderedState:e},t}function Do(e,t,a,l){return e.baseState=a,Nr(e,xe,typeof l=="function"?l:Pt)}function ug(e,t,a,l,n){if(Ri(e))throw Error(u(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){i.listeners.push(c)}};C.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,_o(t,i)):(i.next=a.next,t.pending=a.next=i)}}function _o(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=C.T,c={};C.T=c;try{var f=a(n,l),h=C.S;h!==null&&h(c,f),Uo(e,t,f)}catch(N){Tr(e,t,N)}finally{i!==null&&c.types!==null&&(i.types=c.types),C.T=i}}else try{i=a(n,l),Uo(e,t,i)}catch(N){Tr(e,t,N)}}function Uo(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Ho(e,t,l)},function(l){return Tr(e,t,l)}):Ho(e,t,a)}function Ho(e,t,a){t.status="fulfilled",t.value=a,qo(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,_o(e,a)))}function Tr(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,qo(t),t=t.next;while(t!==l)}e.action=null}function qo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Bo(e,t){return t}function Yo(e,t){if(re){var a=Se.formState;if(a!==null){e:{var l=ee;if(re){if(ze){t:{for(var n=ze,i=At;n.nodeType!==8;){if(!i){n=null;break t}if(n=wt(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){ze=wt(n.nextSibling),l=n.data==="F!";break e}}ga(l)}l=!1}l&&(t=a[0])}}return a=Pe(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:t},a.queue=l,a=nf.bind(null,ee,l),l.dispatch=a,l=zr(!1),i=Mr.bind(null,ee,!1,l.queue),l=Pe(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=ug.bind(null,ee,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function Lo(e){var t=_e();return Go(t,xe,e)}function Go(e,t,a){if(t=Nr(e,t,Bo)[0],e=zi(Pt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=pn(t)}catch(c){throw c===Sl?gi:c}else l=t;t=_e();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(ee.flags|=2048,Al(9,{destroy:void 0},og.bind(null,n,a),null)),[l,i,e]}function og(e,t){e.action=t}function Qo(e){var t=_e(),a=xe;if(a!==null)return Go(t,a,e);_e(),t=t.memoizedState,a=_e();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function Al(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=ee.updateQueue,t===null&&(t=Ni(),ee.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function Xo(){return _e().memoizedState}function Ti(e,t,a,l){var n=Pe();ee.flags|=e,n.memoizedState=Al(1|t,{destroy:void 0},a,l===void 0?null:l)}function Ai(e,t,a,l){var n=_e();l=l===void 0?null:l;var i=n.memoizedState.inst;xe!==null&&l!==null&&pr(l,xe.memoizedState.deps)?n.memoizedState=Al(t,i,a,l):(ee.flags|=e,n.memoizedState=Al(1|t,i,a,l))}function Vo(e,t){Ti(8390656,8,e,t)}function Ar(e,t){Ai(2048,8,e,t)}function fg(e){ee.flags|=4;var t=ee.updateQueue;if(t===null)t=Ni(),ee.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Zo(e){var t=_e().memoizedState;return fg({ref:t,nextImpl:e}),function(){if((fe&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}function ko(e,t){return Ai(4,2,e,t)}function Ko(e,t){return Ai(4,4,e,t)}function Jo(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function $o(e,t,a){a=a!=null?a.concat([e]):null,Ai(4,4,Jo.bind(null,t,e),a)}function Rr(){}function Wo(e,t){var a=_e();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&pr(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function Fo(e,t){var a=_e();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&pr(t,l[1]))return l[0];if(l=e(),Wa){oa(!0);try{e()}finally{oa(!1)}}return a.memoizedState=[l,t],l}function wr(e,t,a){return a===void 0||(It&1073741824)!==0&&(ie&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Pf(),ee.lanes|=e,Ea|=e,a)}function Io(e,t,a,l){return ot(a,t)?a:El.current!==null?(e=wr(e,a,l),ot(e,t)||(Be=!0),e):(It&42)===0||(It&1073741824)!==0&&(ie&261930)===0?(Be=!0,e.memoizedState=a):(e=Pf(),ee.lanes|=e,Ea|=e,t)}function Po(e,t,a,l,n){var i=H.p;H.p=i!==0&&8>i?i:8;var c=C.T,f={};C.T=f,Mr(e,!1,t,a);try{var h=n(),N=C.S;if(N!==null&&N(f,h),h!==null&&typeof h=="object"&&typeof h.then=="function"){var O=sg(h,l);xn(e,t,O,vt(e))}else xn(e,t,l,vt(e))}catch(_){xn(e,t,{then:function(){},status:"rejected",reason:_},vt())}finally{H.p=i,c!==null&&f.types!==null&&(c.types=f.types),C.T=c}}function dg(){}function Or(e,t,a,l){if(e.tag!==5)throw Error(u(476));var n=ef(e).queue;Po(e,n,t,$,a===null?dg:function(){return tf(e),a(l)})}function ef(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pt,lastRenderedState:$},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function tf(e){var t=ef(e);t.next===null&&(t=e.alternate.memoizedState),xn(e,t.next.queue,{},vt())}function Cr(){return ke(Un)}function af(){return _e().memoizedState}function lf(){return _e().memoizedState}function mg(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=vt();e=xa(a);var l=ya(t,e,a);l!==null&&(st(l,t,a),mn(l,t,a)),t={cache:sr()},e.payload=t;return}t=t.return}}function hg(e,t,a){var l=vt();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ri(e)?sf(t,a):(a=$s(e,t,a,l),a!==null&&(st(a,e,l),rf(a,t,l)))}function nf(e,t,a){var l=vt();xn(e,t,a,l)}function xn(e,t,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ri(e))sf(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var c=t.lastRenderedState,f=i(c,a);if(n.hasEagerState=!0,n.eagerState=f,ot(f,c))return ci(e,t,n,0),Se===null&&ri(),!1}catch{}finally{}if(a=$s(e,t,n,l),a!==null)return st(a,e,l),rf(a,t,l),!0}return!1}function Mr(e,t,a,l){if(l={lane:2,revertLane:oc(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Ri(e)){if(t)throw Error(u(479))}else t=$s(e,a,l,2),t!==null&&st(t,e,2)}function Ri(e){var t=e.alternate;return e===ee||t!==null&&t===ee}function sf(e,t){zl=ji=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function rf(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,ou(e,a)}}var yn={readContext:ke,use:Ei,useCallback:we,useContext:we,useEffect:we,useImperativeHandle:we,useLayoutEffect:we,useInsertionEffect:we,useMemo:we,useReducer:we,useRef:we,useState:we,useDebugValue:we,useDeferredValue:we,useTransition:we,useSyncExternalStore:we,useId:we,useHostTransitionStatus:we,useFormState:we,useActionState:we,useOptimistic:we,useMemoCache:we,useCacheRefresh:we};yn.useEffectEvent=we;var cf={readContext:ke,use:Ei,useCallback:function(e,t){return Pe().memoizedState=[e,t===void 0?null:t],e},useContext:ke,useEffect:Vo,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Ti(4194308,4,Jo.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Ti(4194308,4,e,t)},useInsertionEffect:function(e,t){Ti(4,2,e,t)},useMemo:function(e,t){var a=Pe();t=t===void 0?null:t;var l=e();if(Wa){oa(!0);try{e()}finally{oa(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=Pe();if(a!==void 0){var n=a(t);if(Wa){oa(!0);try{a(t)}finally{oa(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=hg.bind(null,ee,e),[l.memoizedState,e]},useRef:function(e){var t=Pe();return e={current:e},t.memoizedState=e},useState:function(e){e=zr(e);var t=e.queue,a=nf.bind(null,ee,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Rr,useDeferredValue:function(e,t){var a=Pe();return wr(a,e,t)},useTransition:function(){var e=zr(!1);return e=Po.bind(null,ee,e.queue,!0,!1),Pe().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=ee,n=Pe();if(re){if(a===void 0)throw Error(u(407));a=a()}else{if(a=t(),Se===null)throw Error(u(349));(ie&127)!==0||Ro(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,Vo(Oo.bind(null,l,i,e),[e]),l.flags|=2048,Al(9,{destroy:void 0},wo.bind(null,l,i,a,t),null),a},useId:function(){var e=Pe(),t=Se.identifierPrefix;if(re){var a=Gt,l=Lt;a=(l&~(1<<32-ut(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Si++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=rg++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Cr,useFormState:Yo,useActionState:Yo,useOptimistic:function(e){var t=Pe();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Mr.bind(null,ee,!0,a),a.dispatch=t,[e,t]},useMemoCache:Sr,useCacheRefresh:function(){return Pe().memoizedState=mg.bind(null,ee)},useEffectEvent:function(e){var t=Pe(),a={impl:e};return t.memoizedState=a,function(){if((fe&2)!==0)throw Error(u(440));return a.impl.apply(void 0,arguments)}}},Dr={readContext:ke,use:Ei,useCallback:Wo,useContext:ke,useEffect:Ar,useImperativeHandle:$o,useInsertionEffect:ko,useLayoutEffect:Ko,useMemo:Fo,useReducer:zi,useRef:Xo,useState:function(){return zi(Pt)},useDebugValue:Rr,useDeferredValue:function(e,t){var a=_e();return Io(a,xe.memoizedState,e,t)},useTransition:function(){var e=zi(Pt)[0],t=_e().memoizedState;return[typeof e=="boolean"?e:pn(e),t]},useSyncExternalStore:Ao,useId:af,useHostTransitionStatus:Cr,useFormState:Lo,useActionState:Lo,useOptimistic:function(e,t){var a=_e();return Do(a,xe,e,t)},useMemoCache:Sr,useCacheRefresh:lf};Dr.useEffectEvent=Zo;var uf={readContext:ke,use:Ei,useCallback:Wo,useContext:ke,useEffect:Ar,useImperativeHandle:$o,useInsertionEffect:ko,useLayoutEffect:Ko,useMemo:Fo,useReducer:Er,useRef:Xo,useState:function(){return Er(Pt)},useDebugValue:Rr,useDeferredValue:function(e,t){var a=_e();return xe===null?wr(a,e,t):Io(a,xe.memoizedState,e,t)},useTransition:function(){var e=Er(Pt)[0],t=_e().memoizedState;return[typeof e=="boolean"?e:pn(e),t]},useSyncExternalStore:Ao,useId:af,useHostTransitionStatus:Cr,useFormState:Qo,useActionState:Qo,useOptimistic:function(e,t){var a=_e();return xe!==null?Do(a,xe,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Sr,useCacheRefresh:lf};uf.useEffectEvent=Zo;function _r(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:R({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ur={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=vt(),n=xa(l);n.payload=t,a!=null&&(n.callback=a),t=ya(e,n,l),t!==null&&(st(t,e,l),mn(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=vt(),n=xa(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=ya(e,n,l),t!==null&&(st(t,e,l),mn(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=vt(),l=xa(a);l.tag=2,t!=null&&(l.callback=t),t=ya(e,l,a),t!==null&&(st(t,e,a),mn(t,e,a))}};function of(e,t,a,l,n,i,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,c):t.prototype&&t.prototype.isPureReactComponent?!nn(a,l)||!nn(n,i):!0}function ff(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&Ur.enqueueReplaceState(t,t.state,null)}function Fa(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=R({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function df(e){si(e)}function mf(e){console.error(e)}function hf(e){si(e)}function wi(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function gf(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Hr(e,t,a){return a=xa(a),a.tag=3,a.payload={element:null},a.callback=function(){wi(e,t)},a}function vf(e){return e=xa(e),e.tag=3,e}function pf(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){gf(t,a,l)}}var c=a.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(e.callback=function(){gf(t,a,l),typeof n!="function"&&(za===null?za=new Set([this]):za.add(this));var f=l.stack;this.componentDidCatch(l.value,{componentStack:f!==null?f:""})})}function gg(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&yl(t,a,n,!0),a=dt.current,a!==null){switch(a.tag){case 31:case 13:return Rt===null?Gi():a.alternate===null&&Oe===0&&(Oe=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===vi?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),rc(e,l,n)),!1;case 22:return a.flags|=65536,l===vi?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),rc(e,l,n)),!1}throw Error(u(435,a.tag))}return rc(e,l,n),Gi(),!1}if(re)return t=dt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==tr&&(e=Error(u(422),{cause:l}),cn(Et(e,a)))):(l!==tr&&(t=Error(u(423),{cause:l}),cn(Et(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=Et(l,a),n=Hr(e.stateNode,l,n),dr(e,n),Oe!==4&&(Oe=2)),!1;var i=Error(u(520),{cause:l});if(i=Et(i,a),An===null?An=[i]:An.push(i),Oe!==4&&(Oe=2),t===null)return!0;l=Et(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=Hr(a.stateNode,l,e),dr(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(za===null||!za.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=vf(n),pf(n,e,a,l),dr(a,n),!1}a=a.return}while(a!==null);return!1}var qr=Error(u(461)),Be=!1;function Ke(e,t,a,l){t.child=e===null?bo(t,null,a,l):$a(t,e.child,a,l)}function xf(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var c={};for(var f in l)f!=="ref"&&(c[f]=l[f])}else c=l;return Za(t),l=xr(e,t,a,c,i,n),f=yr(),e!==null&&!Be?(br(e,t,n),ea(e,t,n)):(re&&f&&Ps(t),t.flags|=1,Ke(e,t,l,n),t.child)}function yf(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!Ws(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,bf(e,t,i,l,n)):(e=oi(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Zr(e,n)){var c=i.memoizedProps;if(a=a.compare,a=a!==null?a:nn,a(c,l)&&e.ref===t.ref)return ea(e,t,n)}return t.flags|=1,e=Jt(i,l),e.ref=t.ref,e.return=t,t.child=e}function bf(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(nn(i,l)&&e.ref===t.ref)if(Be=!1,t.pendingProps=l=i,Zr(e,n))(e.flags&131072)!==0&&(Be=!0);else return t.lanes=e.lanes,ea(e,t,n)}return Br(e,t,a,l,n)}function jf(e,t,a,l){var n=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,t.child=null;return Sf(e,t,i,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&hi(t,i!==null?i.cachePool:null),i!==null?No(t,i):hr(),Eo(t);else return l=t.lanes=536870912,Sf(e,t,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(hi(t,i.cachePool),No(t,i),ja(),t.memoizedState=null):(e!==null&&hi(t,null),hr(),ja());return Ke(e,t,n,a),t.child}function bn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Sf(e,t,a,l,n){var i=cr();return i=i===null?null:{parent:He._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&hi(t,null),hr(),Eo(t),e!==null&&yl(e,t,l,!0),t.childLanes=n,null}function Oi(e,t){return t=Mi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Nf(e,t,a){return $a(t,e.child,null,a),e=Oi(t,t.pendingProps),e.flags|=2,mt(t),t.memoizedState=null,e}function vg(e,t,a){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(re){if(l.mode==="hidden")return e=Oi(t,l),t.lanes=536870912,bn(null,e);if(vr(t),(e=ze)?(e=Ud(e,At),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ma!==null?{id:Lt,overflow:Gt}:null,retryLane:536870912,hydrationErrors:null},a=no(e),a.return=t,t.child=a,Ze=t,ze=null)):e=null,e===null)throw ga(t);return t.lanes=536870912,null}return Oi(t,l)}var i=e.memoizedState;if(i!==null){var c=i.dehydrated;if(vr(t),n)if(t.flags&256)t.flags&=-257,t=Nf(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(u(558));else if(Be||yl(e,t,a,!1),n=(a&e.childLanes)!==0,Be||n){if(l=Se,l!==null&&(c=fu(l,a),c!==0&&c!==i.retryLane))throw i.retryLane=c,Ga(e,c),st(l,e,c),qr;Gi(),t=Nf(e,t,a)}else e=i.treeContext,ze=wt(c.nextSibling),Ze=t,re=!0,ha=null,At=!1,e!==null&&ro(t,e),t=Oi(t,l),t.flags|=4096;return t}return e=Jt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ci(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(u(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Br(e,t,a,l,n){return Za(t),a=xr(e,t,a,l,void 0,n),l=yr(),e!==null&&!Be?(br(e,t,n),ea(e,t,n)):(re&&l&&Ps(t),t.flags|=1,Ke(e,t,a,n),t.child)}function Ef(e,t,a,l,n,i){return Za(t),t.updateQueue=null,a=To(t,l,a,n),zo(e),l=yr(),e!==null&&!Be?(br(e,t,i),ea(e,t,i)):(re&&l&&Ps(t),t.flags|=1,Ke(e,t,a,i),t.child)}function zf(e,t,a,l,n){if(Za(t),t.stateNode===null){var i=gl,c=a.contextType;typeof c=="object"&&c!==null&&(i=ke(c)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ur,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},or(t),c=a.contextType,i.context=typeof c=="object"&&c!==null?ke(c):gl,i.state=t.memoizedState,c=a.getDerivedStateFromProps,typeof c=="function"&&(_r(t,a,c,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(c=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),c!==i.state&&Ur.enqueueReplaceState(i,i.state,null),gn(t,l,i,n),hn(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var f=t.memoizedProps,h=Fa(a,f);i.props=h;var N=i.context,O=a.contextType;c=gl,typeof O=="object"&&O!==null&&(c=ke(O));var _=a.getDerivedStateFromProps;O=typeof _=="function"||typeof i.getSnapshotBeforeUpdate=="function",f=t.pendingProps!==f,O||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(f||N!==c)&&ff(t,i,l,c),pa=!1;var E=t.memoizedState;i.state=E,gn(t,l,i,n),hn(),N=t.memoizedState,f||E!==N||pa?(typeof _=="function"&&(_r(t,a,_,l),N=t.memoizedState),(h=pa||of(t,a,h,l,E,N,c))?(O||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=N),i.props=l,i.state=N,i.context=c,l=h):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,fr(e,t),c=t.memoizedProps,O=Fa(a,c),i.props=O,_=t.pendingProps,E=i.context,N=a.contextType,h=gl,typeof N=="object"&&N!==null&&(h=ke(N)),f=a.getDerivedStateFromProps,(N=typeof f=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c!==_||E!==h)&&ff(t,i,l,h),pa=!1,E=t.memoizedState,i.state=E,gn(t,l,i,n),hn();var A=t.memoizedState;c!==_||E!==A||pa||e!==null&&e.dependencies!==null&&di(e.dependencies)?(typeof f=="function"&&(_r(t,a,f,l),A=t.memoizedState),(O=pa||of(t,a,O,l,E,A,h)||e!==null&&e.dependencies!==null&&di(e.dependencies))?(N||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,A,h),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,A,h)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&E===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&E===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=A),i.props=l,i.state=A,i.context=h,l=O):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&E===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&E===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,Ci(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=$a(t,e.child,null,n),t.child=$a(t,null,a,n)):Ke(e,t,a,n),t.memoizedState=i.state,e=t.child):e=ea(e,t,n),e}function Tf(e,t,a,l){return Xa(),t.flags|=256,Ke(e,t,a,l),t.child}var Yr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Lr(e){return{baseLanes:e,cachePool:ho()}}function Gr(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=gt),e}function Af(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,c;if((c=i)||(c=e!==null&&e.memoizedState===null?!1:(De.current&2)!==0),c&&(n=!0,t.flags&=-129),c=(t.flags&32)!==0,t.flags&=-33,e===null){if(re){if(n?ba(t):ja(),(e=ze)?(e=Ud(e,At),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ma!==null?{id:Lt,overflow:Gt}:null,retryLane:536870912,hydrationErrors:null},a=no(e),a.return=t,t.child=a,Ze=t,ze=null)):e=null,e===null)throw ga(t);return Nc(e)?t.lanes=32:t.lanes=536870912,null}var f=l.children;return l=l.fallback,n?(ja(),n=t.mode,f=Mi({mode:"hidden",children:f},n),l=Qa(l,n,a,null),f.return=t,l.return=t,f.sibling=l,t.child=f,l=t.child,l.memoizedState=Lr(a),l.childLanes=Gr(e,c,a),t.memoizedState=Yr,bn(null,l)):(ba(t),Qr(t,f))}var h=e.memoizedState;if(h!==null&&(f=h.dehydrated,f!==null)){if(i)t.flags&256?(ba(t),t.flags&=-257,t=Xr(e,t,a)):t.memoizedState!==null?(ja(),t.child=e.child,t.flags|=128,t=null):(ja(),f=l.fallback,n=t.mode,l=Mi({mode:"visible",children:l.children},n),f=Qa(f,n,a,null),f.flags|=2,l.return=t,f.return=t,l.sibling=f,t.child=l,$a(t,e.child,null,a),l=t.child,l.memoizedState=Lr(a),l.childLanes=Gr(e,c,a),t.memoizedState=Yr,t=bn(null,l));else if(ba(t),Nc(f)){if(c=f.nextSibling&&f.nextSibling.dataset,c)var N=c.dgst;c=N,l=Error(u(419)),l.stack="",l.digest=c,cn({value:l,source:null,stack:null}),t=Xr(e,t,a)}else if(Be||yl(e,t,a,!1),c=(a&e.childLanes)!==0,Be||c){if(c=Se,c!==null&&(l=fu(c,a),l!==0&&l!==h.retryLane))throw h.retryLane=l,Ga(e,l),st(c,e,l),qr;Sc(f)||Gi(),t=Xr(e,t,a)}else Sc(f)?(t.flags|=192,t.child=e.child,t=null):(e=h.treeContext,ze=wt(f.nextSibling),Ze=t,re=!0,ha=null,At=!1,e!==null&&ro(t,e),t=Qr(t,l.children),t.flags|=4096);return t}return n?(ja(),f=l.fallback,n=t.mode,h=e.child,N=h.sibling,l=Jt(h,{mode:"hidden",children:l.children}),l.subtreeFlags=h.subtreeFlags&65011712,N!==null?f=Jt(N,f):(f=Qa(f,n,a,null),f.flags|=2),f.return=t,l.return=t,l.sibling=f,t.child=l,bn(null,l),l=t.child,f=e.child.memoizedState,f===null?f=Lr(a):(n=f.cachePool,n!==null?(h=He._currentValue,n=n.parent!==h?{parent:h,pool:h}:n):n=ho(),f={baseLanes:f.baseLanes|a,cachePool:n}),l.memoizedState=f,l.childLanes=Gr(e,c,a),t.memoizedState=Yr,bn(e.child,l)):(ba(t),a=e.child,e=a.sibling,a=Jt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(c=t.deletions,c===null?(t.deletions=[e],t.flags|=16):c.push(e)),t.child=a,t.memoizedState=null,a)}function Qr(e,t){return t=Mi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Mi(e,t){return e=ft(22,e,null,t),e.lanes=0,e}function Xr(e,t,a){return $a(t,e.child,null,a),e=Qr(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Rf(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),nr(e.return,t,a)}function Vr(e,t,a,l,n,i){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=l,c.tail=a,c.tailMode=n,c.treeForkCount=i)}function wf(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var c=De.current,f=(c&2)!==0;if(f?(c=c&1|2,t.flags|=128):c&=1,B(De,c),Ke(e,t,l,a),l=re?rn:0,!f&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Rf(e,a,t);else if(e.tag===19)Rf(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&bi(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),Vr(t,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&bi(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}Vr(t,!0,a,null,i,l);break;case"together":Vr(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function ea(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Ea|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(yl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,a=Jt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Jt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Zr(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&di(e)))}function pg(e,t,a){switch(t.tag){case 3:Ie(t,t.stateNode.containerInfo),va(t,He,e.memoizedState.cache),Xa();break;case 27:case 5:Zl(t);break;case 4:Ie(t,t.stateNode.containerInfo);break;case 10:va(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,vr(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(ba(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Af(e,t,a):(ba(t),e=ea(e,t,a),e!==null?e.sibling:null);ba(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(yl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return wf(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),B(De,De.current),l)break;return null;case 22:return t.lanes=0,jf(e,t,a,t.pendingProps);case 24:va(t,He,e.memoizedState.cache)}return ea(e,t,a)}function Of(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Be=!0;else{if(!Zr(e,a)&&(t.flags&128)===0)return Be=!1,pg(e,t,a);Be=(e.flags&131072)!==0}else Be=!1,re&&(t.flags&1048576)!==0&&so(t,rn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Ka(t.elementType),t.type=e,typeof e=="function")Ws(e)?(l=Fa(e,l),t.tag=1,t=zf(null,t,e,l,a)):(t.tag=0,t=Br(null,t,e,l,a));else{if(e!=null){var n=e.$$typeof;if(n===ve){t.tag=11,t=xf(null,t,e,l,a);break e}else if(n===W){t.tag=14,t=yf(null,t,e,l,a);break e}}throw t=bt(e)||e,Error(u(306,t,""))}}return t;case 0:return Br(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=Fa(l,t.pendingProps),zf(e,t,l,n,a);case 3:e:{if(Ie(t,t.stateNode.containerInfo),e===null)throw Error(u(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,fr(e,t),gn(t,l,null,a);var c=t.memoizedState;if(l=c.cache,va(t,He,l),l!==i.cache&&ir(t,[He],a,!0),hn(),l=c.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:c.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Tf(e,t,l,a);break e}else if(l!==n){n=Et(Error(u(424)),t),cn(n),t=Tf(e,t,l,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ze=wt(e.firstChild),Ze=t,re=!0,ha=null,At=!0,a=bo(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Xa(),l===n){t=ea(e,t,a);break e}Ke(e,t,l,a)}t=t.child}return t;case 26:return Ci(e,t),e===null?(a=Gd(t.type,null,t.pendingProps,null))?t.memoizedState=a:re||(a=t.type,e=t.pendingProps,l=Ji(ae.current).createElement(a),l[Ve]=t,l[et]=e,Je(l,a,e),Ge(l),t.stateNode=l):t.memoizedState=Gd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Zl(t),e===null&&re&&(l=t.stateNode=Bd(t.type,t.pendingProps,ae.current),Ze=t,At=!0,n=ze,wa(t.type)?(Ec=n,ze=wt(l.firstChild)):ze=n),Ke(e,t,t.pendingProps.children,a),Ci(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&re&&((n=l=ze)&&(l=Kg(l,t.type,t.pendingProps,At),l!==null?(t.stateNode=l,Ze=t,ze=wt(l.firstChild),At=!1,n=!0):n=!1),n||ga(t)),Zl(t),n=t.type,i=t.pendingProps,c=e!==null?e.memoizedProps:null,l=i.children,yc(n,i)?l=null:c!==null&&yc(n,c)&&(t.flags|=32),t.memoizedState!==null&&(n=xr(e,t,cg,null,null,a),Un._currentValue=n),Ci(e,t),Ke(e,t,l,a),t.child;case 6:return e===null&&re&&((e=a=ze)&&(a=Jg(a,t.pendingProps,At),a!==null?(t.stateNode=a,Ze=t,ze=null,e=!0):e=!1),e||ga(t)),null;case 13:return Af(e,t,a);case 4:return Ie(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=$a(t,null,l,a):Ke(e,t,l,a),t.child;case 11:return xf(e,t,t.type,t.pendingProps,a);case 7:return Ke(e,t,t.pendingProps,a),t.child;case 8:return Ke(e,t,t.pendingProps.children,a),t.child;case 12:return Ke(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,va(t,t.type,l.value),Ke(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,Za(t),n=ke(n),l=l(n),t.flags|=1,Ke(e,t,l,a),t.child;case 14:return yf(e,t,t.type,t.pendingProps,a);case 15:return bf(e,t,t.type,t.pendingProps,a);case 19:return wf(e,t,a);case 31:return vg(e,t,a);case 22:return jf(e,t,a,t.pendingProps);case 24:return Za(t),l=ke(He),e===null?(n=cr(),n===null&&(n=Se,i=sr(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},or(t),va(t,He,n)):((e.lanes&a)!==0&&(fr(e,t),gn(t,null,null,a),hn()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),va(t,He,l)):(l=i.cache,va(t,He,l),l!==n.cache&&ir(t,[He],a,!0))),Ke(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function ta(e){e.flags|=4}function kr(e,t,a,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(ld())e.flags|=8192;else throw Ja=vi,ur}else e.flags&=-16777217}function Cf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!kd(t))if(ld())e.flags|=8192;else throw Ja=vi,ur}function Di(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?cu():536870912,e.lanes|=t,Cl|=t)}function jn(e,t){if(!re)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Te(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function xg(e,t,a){var l=t.pendingProps;switch(er(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(t),null;case 1:return Te(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Ft(He),Me(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(xl(t)?ta(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ar())),Te(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(ta(t),i!==null?(Te(t),Cf(t,i)):(Te(t),kr(t,n,null,l,a))):i?i!==e.memoizedState?(ta(t),Te(t),Cf(t,i)):(Te(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&ta(t),Te(t),kr(t,n,e,l,a)),null;case 27:if(Vn(t),a=ae.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&ta(t);else{if(!l){if(t.stateNode===null)throw Error(u(166));return Te(t),null}e=X.current,xl(t)?co(t):(e=Bd(n,l,a),t.stateNode=e,ta(t))}return Te(t),null;case 5:if(Vn(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&ta(t);else{if(!l){if(t.stateNode===null)throw Error(u(166));return Te(t),null}if(i=X.current,xl(t))co(t);else{var c=Ji(ae.current);switch(i){case 1:i=c.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=c.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=c.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?c.createElement("select",{is:l.is}):c.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?c.createElement(n,{is:l.is}):c.createElement(n)}}i[Ve]=t,i[et]=l;e:for(c=t.child;c!==null;){if(c.tag===5||c.tag===6)i.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}t.stateNode=i;e:switch(Je(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&ta(t)}}return Te(t),kr(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&ta(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(u(166));if(e=ae.current,xl(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=Ze,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[Ve]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Ad(e.nodeValue,a)),e||ga(t,!0)}else e=Ji(e).createTextNode(l),e[Ve]=t,t.stateNode=e}return Te(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=xl(t),a!==null){if(e===null){if(!l)throw Error(u(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[Ve]=t}else Xa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Te(t),e=!1}else a=ar(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(mt(t),t):(mt(t),null);if((t.flags&128)!==0)throw Error(u(558))}return Te(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=xl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(u(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(u(317));n[Ve]=t}else Xa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Te(t),n=!1}else n=ar(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(mt(t),t):(mt(t),null)}return mt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Di(t,t.updateQueue),Te(t),null);case 4:return Me(),e===null&&hc(t.stateNode.containerInfo),Te(t),null;case 10:return Ft(t.type),Te(t),null;case 19:if(U(De),l=t.memoizedState,l===null)return Te(t),null;if(n=(t.flags&128)!==0,i=l.rendering,i===null)if(n)jn(l,!1);else{if(Oe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=bi(e),i!==null){for(t.flags|=128,jn(l,!1),e=i.updateQueue,t.updateQueue=e,Di(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)lo(a,e),a=a.sibling;return B(De,De.current&1|2),re&&$t(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&rt()>Bi&&(t.flags|=128,n=!0,jn(l,!1),t.lanes=4194304)}else{if(!n)if(e=bi(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Di(t,e),jn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!re)return Te(t),null}else 2*rt()-l.renderingStartTime>Bi&&a!==536870912&&(t.flags|=128,n=!0,jn(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=rt(),e.sibling=null,a=De.current,B(De,n?a&1|2:a&1),re&&$t(t,l.treeForkCount),e):(Te(t),null);case 22:case 23:return mt(t),gr(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(Te(t),t.subtreeFlags&6&&(t.flags|=8192)):Te(t),a=t.updateQueue,a!==null&&Di(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&U(ka),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Ft(He),Te(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function yg(e,t){switch(er(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ft(He),Me(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Vn(t),null;case 31:if(t.memoizedState!==null){if(mt(t),t.alternate===null)throw Error(u(340));Xa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(mt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));Xa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(De),null;case 4:return Me(),null;case 10:return Ft(t.type),null;case 22:case 23:return mt(t),gr(),e!==null&&U(ka),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ft(He),null;case 25:return null;default:return null}}function Mf(e,t){switch(er(t),t.tag){case 3:Ft(He),Me();break;case 26:case 27:case 5:Vn(t);break;case 4:Me();break;case 31:t.memoizedState!==null&&mt(t);break;case 13:mt(t);break;case 19:U(De);break;case 10:Ft(t.type);break;case 22:case 23:mt(t),gr(),e!==null&&U(ka);break;case 24:Ft(He)}}function Sn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,c=a.inst;l=i(),c.destroy=l}a=a.next}while(a!==n)}}catch(f){ge(t,t.return,f)}}function Sa(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var c=l.inst,f=c.destroy;if(f!==void 0){c.destroy=void 0,n=t;var h=a,N=f;try{N()}catch(O){ge(n,h,O)}}}l=l.next}while(l!==i)}}catch(O){ge(t,t.return,O)}}function Df(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{So(t,a)}catch(l){ge(e,e.return,l)}}}function _f(e,t,a){a.props=Fa(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){ge(e,t,l)}}function Nn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){ge(e,t,n)}}function Qt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){ge(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){ge(e,t,n)}else a.current=null}function Uf(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){ge(e,e.return,n)}}function Kr(e,t,a){try{var l=e.stateNode;Gg(l,e.type,a,t),l[et]=t}catch(n){ge(e,e.return,n)}}function Hf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&wa(e.type)||e.tag===4}function Jr(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Hf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&wa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $r(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=kt));else if(l!==4&&(l===27&&wa(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for($r(e,t,a),e=e.sibling;e!==null;)$r(e,t,a),e=e.sibling}function _i(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&wa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(_i(e,t,a),e=e.sibling;e!==null;)_i(e,t,a),e=e.sibling}function qf(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Je(t,l,a),t[Ve]=e,t[et]=a}catch(i){ge(e,e.return,i)}}var aa=!1,Ye=!1,Wr=!1,Bf=typeof WeakSet=="function"?WeakSet:Set,Qe=null;function bg(e,t){if(e=e.containerInfo,pc=ts,e=Ju(e),Xs(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var c=0,f=-1,h=-1,N=0,O=0,_=e,E=null;t:for(;;){for(var A;_!==a||n!==0&&_.nodeType!==3||(f=c+n),_!==i||l!==0&&_.nodeType!==3||(h=c+l),_.nodeType===3&&(c+=_.nodeValue.length),(A=_.firstChild)!==null;)E=_,_=A;for(;;){if(_===e)break t;if(E===a&&++N===n&&(f=c),E===i&&++O===l&&(h=c),(A=_.nextSibling)!==null)break;_=E,E=_.parentNode}_=A}a=f===-1||h===-1?null:{start:f,end:h}}else a=null}a=a||{start:0,end:0}}else a=null;for(xc={focusedElem:e,selectionRange:a},ts=!1,Qe=t;Qe!==null;)if(t=Qe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Qe=e;else for(;Qe!==null;){switch(t=Qe,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var L=Fa(a.type,n);e=l.getSnapshotBeforeUpdate(L,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(K){ge(a,a.return,K)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)jc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":jc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,Qe=e;break}Qe=t.return}}function Yf(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:na(e,a),l&4&&Sn(5,a);break;case 1:if(na(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(c){ge(a,a.return,c)}else{var n=Fa(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(c){ge(a,a.return,c)}}l&64&&Df(a),l&512&&Nn(a,a.return);break;case 3:if(na(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{So(e,t)}catch(c){ge(a,a.return,c)}}break;case 27:t===null&&l&4&&qf(a);case 26:case 5:na(e,a),t===null&&l&4&&Uf(a),l&512&&Nn(a,a.return);break;case 12:na(e,a);break;case 31:na(e,a),l&4&&Qf(e,a);break;case 13:na(e,a),l&4&&Xf(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=wg.bind(null,a),$g(e,a))));break;case 22:if(l=a.memoizedState!==null||aa,!l){t=t!==null&&t.memoizedState!==null||Ye,n=aa;var i=Ye;aa=l,(Ye=t)&&!i?ia(e,a,(a.subtreeFlags&8772)!==0):na(e,a),aa=n,Ye=i}break;case 30:break;default:na(e,a)}}function Lf(e){var t=e.alternate;t!==null&&(e.alternate=null,Lf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ts(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ae=null,at=!1;function la(e,t,a){for(a=a.child;a!==null;)Gf(e,t,a),a=a.sibling}function Gf(e,t,a){if(ct&&typeof ct.onCommitFiberUnmount=="function")try{ct.onCommitFiberUnmount(kl,a)}catch{}switch(a.tag){case 26:Ye||Qt(a,t),la(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ye||Qt(a,t);var l=Ae,n=at;wa(a.type)&&(Ae=a.stateNode,at=!1),la(e,t,a),Mn(a.stateNode),Ae=l,at=n;break;case 5:Ye||Qt(a,t);case 6:if(l=Ae,n=at,Ae=null,la(e,t,a),Ae=l,at=n,Ae!==null)if(at)try{(Ae.nodeType===9?Ae.body:Ae.nodeName==="HTML"?Ae.ownerDocument.body:Ae).removeChild(a.stateNode)}catch(i){ge(a,t,i)}else try{Ae.removeChild(a.stateNode)}catch(i){ge(a,t,i)}break;case 18:Ae!==null&&(at?(e=Ae,Dd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Yl(e)):Dd(Ae,a.stateNode));break;case 4:l=Ae,n=at,Ae=a.stateNode.containerInfo,at=!0,la(e,t,a),Ae=l,at=n;break;case 0:case 11:case 14:case 15:Sa(2,a,t),Ye||Sa(4,a,t),la(e,t,a);break;case 1:Ye||(Qt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&_f(a,t,l)),la(e,t,a);break;case 21:la(e,t,a);break;case 22:Ye=(l=Ye)||a.memoizedState!==null,la(e,t,a),Ye=l;break;default:la(e,t,a)}}function Qf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Yl(e)}catch(a){ge(t,t.return,a)}}}function Xf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Yl(e)}catch(a){ge(t,t.return,a)}}function jg(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Bf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Bf),t;default:throw Error(u(435,e.tag))}}function Ui(e,t){var a=jg(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var n=Og.bind(null,e,l);l.then(n,n)}})}function lt(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,c=t,f=c;e:for(;f!==null;){switch(f.tag){case 27:if(wa(f.type)){Ae=f.stateNode,at=!1;break e}break;case 5:Ae=f.stateNode,at=!1;break e;case 3:case 4:Ae=f.stateNode.containerInfo,at=!0;break e}f=f.return}if(Ae===null)throw Error(u(160));Gf(i,c,n),Ae=null,at=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Vf(t,e),t=t.sibling}var Dt=null;function Vf(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:lt(t,e),nt(e),l&4&&(Sa(3,e,e.return),Sn(3,e),Sa(5,e,e.return));break;case 1:lt(t,e),nt(e),l&512&&(Ye||a===null||Qt(a,a.return)),l&64&&aa&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=Dt;if(lt(t,e),nt(e),l&512&&(Ye||a===null||Qt(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[$l]||i[Ve]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),Je(i,l,a),i[Ve]=e,Ge(i),l=i;break e;case"link":var c=Vd("link","href",n).get(l+(a.href||""));if(c){for(var f=0;f<c.length;f++)if(i=c[f],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(f,1);break t}}i=n.createElement(l),Je(i,l,a),n.head.appendChild(i);break;case"meta":if(c=Vd("meta","content",n).get(l+(a.content||""))){for(f=0;f<c.length;f++)if(i=c[f],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(f,1);break t}}i=n.createElement(l),Je(i,l,a),n.head.appendChild(i);break;default:throw Error(u(468,l))}i[Ve]=e,Ge(i),l=i}e.stateNode=l}else Zd(n,e.type,e.stateNode);else e.stateNode=Xd(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?Zd(n,e.type,e.stateNode):Xd(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Kr(e,e.memoizedProps,a.memoizedProps)}break;case 27:lt(t,e),nt(e),l&512&&(Ye||a===null||Qt(a,a.return)),a!==null&&l&4&&Kr(e,e.memoizedProps,a.memoizedProps);break;case 5:if(lt(t,e),nt(e),l&512&&(Ye||a===null||Qt(a,a.return)),e.flags&32){n=e.stateNode;try{cl(n,"")}catch(L){ge(e,e.return,L)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,Kr(e,n,a!==null?a.memoizedProps:n)),l&1024&&(Wr=!0);break;case 6:if(lt(t,e),nt(e),l&4){if(e.stateNode===null)throw Error(u(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(L){ge(e,e.return,L)}}break;case 3:if(Fi=null,n=Dt,Dt=$i(t.containerInfo),lt(t,e),Dt=n,nt(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Yl(t.containerInfo)}catch(L){ge(e,e.return,L)}Wr&&(Wr=!1,Zf(e));break;case 4:l=Dt,Dt=$i(e.stateNode.containerInfo),lt(t,e),nt(e),Dt=l;break;case 12:lt(t,e),nt(e);break;case 31:lt(t,e),nt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ui(e,l)));break;case 13:lt(t,e),nt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(qi=rt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ui(e,l)));break;case 22:n=e.memoizedState!==null;var h=a!==null&&a.memoizedState!==null,N=aa,O=Ye;if(aa=N||n,Ye=O||h,lt(t,e),Ye=O,aa=N,nt(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||h||aa||Ye||Ia(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){h=a=t;try{if(i=h.stateNode,n)c=i.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{f=h.stateNode;var _=h.memoizedProps.style,E=_!=null&&_.hasOwnProperty("display")?_.display:null;f.style.display=E==null||typeof E=="boolean"?"":(""+E).trim()}}catch(L){ge(h,h.return,L)}}}else if(t.tag===6){if(a===null){h=t;try{h.stateNode.nodeValue=n?"":h.memoizedProps}catch(L){ge(h,h.return,L)}}}else if(t.tag===18){if(a===null){h=t;try{var A=h.stateNode;n?_d(A,!0):_d(h.stateNode,!1)}catch(L){ge(h,h.return,L)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Ui(e,a))));break;case 19:lt(t,e),nt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ui(e,l)));break;case 30:break;case 21:break;default:lt(t,e),nt(e)}}function nt(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(Hf(l)){a=l;break}l=l.return}if(a==null)throw Error(u(160));switch(a.tag){case 27:var n=a.stateNode,i=Jr(e);_i(e,i,n);break;case 5:var c=a.stateNode;a.flags&32&&(cl(c,""),a.flags&=-33);var f=Jr(e);_i(e,f,c);break;case 3:case 4:var h=a.stateNode.containerInfo,N=Jr(e);$r(e,N,h);break;default:throw Error(u(161))}}catch(O){ge(e,e.return,O)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Zf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Zf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function na(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Yf(e,t.alternate,t),t=t.sibling}function Ia(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Sa(4,t,t.return),Ia(t);break;case 1:Qt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&_f(t,t.return,a),Ia(t);break;case 27:Mn(t.stateNode);case 26:case 5:Qt(t,t.return),Ia(t);break;case 22:t.memoizedState===null&&Ia(t);break;case 30:Ia(t);break;default:Ia(t)}e=e.sibling}}function ia(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,c=i.flags;switch(i.tag){case 0:case 11:case 15:ia(n,i,a),Sn(4,i);break;case 1:if(ia(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(N){ge(l,l.return,N)}if(l=i,n=l.updateQueue,n!==null){var f=l.stateNode;try{var h=n.shared.hiddenCallbacks;if(h!==null)for(n.shared.hiddenCallbacks=null,n=0;n<h.length;n++)jo(h[n],f)}catch(N){ge(l,l.return,N)}}a&&c&64&&Df(i),Nn(i,i.return);break;case 27:qf(i);case 26:case 5:ia(n,i,a),a&&l===null&&c&4&&Uf(i),Nn(i,i.return);break;case 12:ia(n,i,a);break;case 31:ia(n,i,a),a&&c&4&&Qf(n,i);break;case 13:ia(n,i,a),a&&c&4&&Xf(n,i);break;case 22:i.memoizedState===null&&ia(n,i,a),Nn(i,i.return);break;case 30:break;default:ia(n,i,a)}t=t.sibling}}function Fr(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&un(a))}function Ir(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&un(e))}function _t(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)kf(e,t,a,l),t=t.sibling}function kf(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:_t(e,t,a,l),n&2048&&Sn(9,t);break;case 1:_t(e,t,a,l);break;case 3:_t(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&un(e)));break;case 12:if(n&2048){_t(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,c=i.id,f=i.onPostCommit;typeof f=="function"&&f(c,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(h){ge(t,t.return,h)}}else _t(e,t,a,l);break;case 31:_t(e,t,a,l);break;case 13:_t(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,c=t.alternate,t.memoizedState!==null?i._visibility&2?_t(e,t,a,l):En(e,t):i._visibility&2?_t(e,t,a,l):(i._visibility|=2,Rl(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Fr(c,t);break;case 24:_t(e,t,a,l),n&2048&&Ir(t.alternate,t);break;default:_t(e,t,a,l)}}function Rl(e,t,a,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,c=t,f=a,h=l,N=c.flags;switch(c.tag){case 0:case 11:case 15:Rl(i,c,f,h,n),Sn(8,c);break;case 23:break;case 22:var O=c.stateNode;c.memoizedState!==null?O._visibility&2?Rl(i,c,f,h,n):En(i,c):(O._visibility|=2,Rl(i,c,f,h,n)),n&&N&2048&&Fr(c.alternate,c);break;case 24:Rl(i,c,f,h,n),n&&N&2048&&Ir(c.alternate,c);break;default:Rl(i,c,f,h,n)}t=t.sibling}}function En(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:En(a,l),n&2048&&Fr(l.alternate,l);break;case 24:En(a,l),n&2048&&Ir(l.alternate,l);break;default:En(a,l)}t=t.sibling}}var zn=8192;function wl(e,t,a){if(e.subtreeFlags&zn)for(e=e.child;e!==null;)Kf(e,t,a),e=e.sibling}function Kf(e,t,a){switch(e.tag){case 26:wl(e,t,a),e.flags&zn&&e.memoizedState!==null&&rv(a,Dt,e.memoizedState,e.memoizedProps);break;case 5:wl(e,t,a);break;case 3:case 4:var l=Dt;Dt=$i(e.stateNode.containerInfo),wl(e,t,a),Dt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=zn,zn=16777216,wl(e,t,a),zn=l):wl(e,t,a));break;default:wl(e,t,a)}}function Jf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Tn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Qe=l,Wf(l,e)}Jf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)$f(e),e=e.sibling}function $f(e){switch(e.tag){case 0:case 11:case 15:Tn(e),e.flags&2048&&Sa(9,e,e.return);break;case 3:Tn(e);break;case 12:Tn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Hi(e)):Tn(e);break;default:Tn(e)}}function Hi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Qe=l,Wf(l,e)}Jf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Sa(8,t,t.return),Hi(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Hi(t));break;default:Hi(t)}e=e.sibling}}function Wf(e,t){for(;Qe!==null;){var a=Qe;switch(a.tag){case 0:case 11:case 15:Sa(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:un(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Qe=l;else e:for(a=e;Qe!==null;){l=Qe;var n=l.sibling,i=l.return;if(Lf(l),l===a){Qe=null;break e}if(n!==null){n.return=i,Qe=n;break e}Qe=i}}}var Sg={getCacheForType:function(e){var t=ke(He),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return ke(He).controller.signal}},Ng=typeof WeakMap=="function"?WeakMap:Map,fe=0,Se=null,le=null,ie=0,he=0,ht=null,Na=!1,Ol=!1,Pr=!1,sa=0,Oe=0,Ea=0,Pa=0,ec=0,gt=0,Cl=0,An=null,it=null,tc=!1,qi=0,Ff=0,Bi=1/0,Yi=null,za=null,Le=0,Ta=null,Ml=null,ra=0,ac=0,lc=null,If=null,Rn=0,nc=null;function vt(){return(fe&2)!==0&&ie!==0?ie&-ie:C.T!==null?oc():du()}function Pf(){if(gt===0)if((ie&536870912)===0||re){var e=Kn;Kn<<=1,(Kn&3932160)===0&&(Kn=262144),gt=e}else gt=536870912;return e=dt.current,e!==null&&(e.flags|=32),gt}function st(e,t,a){(e===Se&&(he===2||he===9)||e.cancelPendingCommit!==null)&&(Dl(e,0),Aa(e,ie,gt,!1)),Jl(e,a),((fe&2)===0||e!==Se)&&(e===Se&&((fe&2)===0&&(Pa|=a),Oe===4&&Aa(e,ie,gt,!1)),Xt(e))}function ed(e,t,a){if((fe&6)!==0)throw Error(u(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Kl(e,t),n=l?Tg(e,t):sc(e,t,!0),i=l;do{if(n===0){Ol&&!l&&Aa(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!Eg(a)){n=sc(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var c=0;else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){t=c;e:{var f=e;n=An;var h=f.current.memoizedState.isDehydrated;if(h&&(Dl(f,c).flags|=256),c=sc(f,c,!1),c!==2){if(Pr&&!h){f.errorRecoveryDisabledLanes|=i,Pa|=i,n=4;break e}i=it,it=n,i!==null&&(it===null?it=i:it.push.apply(it,i))}n=c}if(i=!1,n!==2)continue}}if(n===1){Dl(e,0),Aa(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:Aa(l,t,gt,!Na);break e;case 2:it=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(n=qi+300-rt(),10<n)){if(Aa(l,t,gt,!Na),$n(l,0,!0)!==0)break e;ra=t,l.timeoutHandle=Cd(td.bind(null,l,a,it,Yi,tc,t,gt,Pa,Cl,Na,i,"Throttled",-0,0),n);break e}td(l,a,it,Yi,tc,t,gt,Pa,Cl,Na,i,null,-0,0)}}break}while(!0);Xt(e)}function td(e,t,a,l,n,i,c,f,h,N,O,_,E,A){if(e.timeoutHandle=-1,_=t.subtreeFlags,_&8192||(_&16785408)===16785408){_={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:kt},Kf(t,i,_);var L=(i&62914560)===i?qi-rt():(i&4194048)===i?Ff-rt():0;if(L=cv(_,L),L!==null){ra=i,e.cancelPendingCommit=L(ud.bind(null,e,t,i,a,l,n,c,f,h,O,_,null,E,A)),Aa(e,i,c,!N);return}}ud(e,t,i,a,l,n,c,f,h)}function Eg(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!ot(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Aa(e,t,a,l){t&=~ec,t&=~Pa,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-ut(n),c=1<<i;l[i]=-1,n&=~c}a!==0&&uu(e,a,t)}function Li(){return(fe&6)===0?(wn(0),!1):!0}function ic(){if(le!==null){if(he===0)var e=le.return;else e=le,Wt=Va=null,jr(e),Nl=null,fn=0,e=le;for(;e!==null;)Mf(e.alternate,e),e=e.return;le=null}}function Dl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Vg(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ra=0,ic(),Se=e,le=a=Jt(e.current,null),ie=t,he=0,ht=null,Na=!1,Ol=Kl(e,t),Pr=!1,Cl=gt=ec=Pa=Ea=Oe=0,it=An=null,tc=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-ut(l),i=1<<n;t|=e[n],l&=~i}return sa=t,ri(),a}function ad(e,t){ee=null,C.H=yn,t===Sl||t===gi?(t=po(),he=3):t===ur?(t=po(),he=4):he=t===qr?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ht=t,le===null&&(Oe=1,wi(e,Et(t,e.current)))}function ld(){var e=dt.current;return e===null?!0:(ie&4194048)===ie?Rt===null:(ie&62914560)===ie||(ie&536870912)!==0?e===Rt:!1}function nd(){var e=C.H;return C.H=yn,e===null?yn:e}function id(){var e=C.A;return C.A=Sg,e}function Gi(){Oe=4,Na||(ie&4194048)!==ie&&dt.current!==null||(Ol=!0),(Ea&134217727)===0&&(Pa&134217727)===0||Se===null||Aa(Se,ie,gt,!1)}function sc(e,t,a){var l=fe;fe|=2;var n=nd(),i=id();(Se!==e||ie!==t)&&(Yi=null,Dl(e,t)),t=!1;var c=Oe;e:do try{if(he!==0&&le!==null){var f=le,h=ht;switch(he){case 8:ic(),c=6;break e;case 3:case 2:case 9:case 6:dt.current===null&&(t=!0);var N=he;if(he=0,ht=null,_l(e,f,h,N),a&&Ol){c=0;break e}break;default:N=he,he=0,ht=null,_l(e,f,h,N)}}zg(),c=Oe;break}catch(O){ad(e,O)}while(!0);return t&&e.shellSuspendCounter++,Wt=Va=null,fe=l,C.H=n,C.A=i,le===null&&(Se=null,ie=0,ri()),c}function zg(){for(;le!==null;)sd(le)}function Tg(e,t){var a=fe;fe|=2;var l=nd(),n=id();Se!==e||ie!==t?(Yi=null,Bi=rt()+500,Dl(e,t)):Ol=Kl(e,t);e:do try{if(he!==0&&le!==null){t=le;var i=ht;t:switch(he){case 1:he=0,ht=null,_l(e,t,i,1);break;case 2:case 9:if(go(i)){he=0,ht=null,rd(t);break}t=function(){he!==2&&he!==9||Se!==e||(he=7),Xt(e)},i.then(t,t);break e;case 3:he=7;break e;case 4:he=5;break e;case 7:go(i)?(he=0,ht=null,rd(t)):(he=0,ht=null,_l(e,t,i,7));break;case 5:var c=null;switch(le.tag){case 26:c=le.memoizedState;case 5:case 27:var f=le;if(c?kd(c):f.stateNode.complete){he=0,ht=null;var h=f.sibling;if(h!==null)le=h;else{var N=f.return;N!==null?(le=N,Qi(N)):le=null}break t}}he=0,ht=null,_l(e,t,i,5);break;case 6:he=0,ht=null,_l(e,t,i,6);break;case 8:ic(),Oe=6;break e;default:throw Error(u(462))}}Ag();break}catch(O){ad(e,O)}while(!0);return Wt=Va=null,C.H=l,C.A=n,fe=a,le!==null?0:(Se=null,ie=0,ri(),Oe)}function Ag(){for(;le!==null&&!Wm();)sd(le)}function sd(e){var t=Of(e.alternate,e,sa);e.memoizedProps=e.pendingProps,t===null?Qi(e):le=t}function rd(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Ef(a,t,t.pendingProps,t.type,void 0,ie);break;case 11:t=Ef(a,t,t.pendingProps,t.type.render,t.ref,ie);break;case 5:jr(t);default:Mf(a,t),t=le=lo(t,sa),t=Of(a,t,sa)}e.memoizedProps=e.pendingProps,t===null?Qi(e):le=t}function _l(e,t,a,l){Wt=Va=null,jr(t),Nl=null,fn=0;var n=t.return;try{if(gg(e,n,t,a,ie)){Oe=1,wi(e,Et(a,e.current)),le=null;return}}catch(i){if(n!==null)throw le=n,i;Oe=1,wi(e,Et(a,e.current)),le=null;return}t.flags&32768?(re||l===1?e=!0:Ol||(ie&536870912)!==0?e=!1:(Na=e=!0,(l===2||l===9||l===3||l===6)&&(l=dt.current,l!==null&&l.tag===13&&(l.flags|=16384))),cd(t,e)):Qi(t)}function Qi(e){var t=e;do{if((t.flags&32768)!==0){cd(t,Na);return}e=t.return;var a=xg(t.alternate,t,sa);if(a!==null){le=a;return}if(t=t.sibling,t!==null){le=t;return}le=t=e}while(t!==null);Oe===0&&(Oe=5)}function cd(e,t){do{var a=yg(e.alternate,e);if(a!==null){a.flags&=32767,le=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){le=e;return}le=e=a}while(e!==null);Oe=6,le=null}function ud(e,t,a,l,n,i,c,f,h){e.cancelPendingCommit=null;do Xi();while(Le!==0);if((fe&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(i=t.lanes|t.childLanes,i|=Js,sh(e,a,i,c,f,h),e===Se&&(le=Se=null,ie=0),Ml=t,Ta=e,ra=a,ac=i,lc=n,If=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Cg(Zn,function(){return hd(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=C.T,C.T=null,n=H.p,H.p=2,c=fe,fe|=4;try{bg(e,t,a)}finally{fe=c,H.p=n,C.T=l}}Le=1,od(),fd(),dd()}}function od(){if(Le===1){Le=0;var e=Ta,t=Ml,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=C.T,C.T=null;var l=H.p;H.p=2;var n=fe;fe|=4;try{Vf(t,e);var i=xc,c=Ju(e.containerInfo),f=i.focusedElem,h=i.selectionRange;if(c!==f&&f&&f.ownerDocument&&Ku(f.ownerDocument.documentElement,f)){if(h!==null&&Xs(f)){var N=h.start,O=h.end;if(O===void 0&&(O=N),"selectionStart"in f)f.selectionStart=N,f.selectionEnd=Math.min(O,f.value.length);else{var _=f.ownerDocument||document,E=_&&_.defaultView||window;if(E.getSelection){var A=E.getSelection(),L=f.textContent.length,K=Math.min(h.start,L),be=h.end===void 0?K:Math.min(h.end,L);!A.extend&&K>be&&(c=be,be=K,K=c);var b=ku(f,K),p=ku(f,be);if(b&&p&&(A.rangeCount!==1||A.anchorNode!==b.node||A.anchorOffset!==b.offset||A.focusNode!==p.node||A.focusOffset!==p.offset)){var S=_.createRange();S.setStart(b.node,b.offset),A.removeAllRanges(),K>be?(A.addRange(S),A.extend(p.node,p.offset)):(S.setEnd(p.node,p.offset),A.addRange(S))}}}}for(_=[],A=f;A=A.parentNode;)A.nodeType===1&&_.push({element:A,left:A.scrollLeft,top:A.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<_.length;f++){var D=_[f];D.element.scrollLeft=D.left,D.element.scrollTop=D.top}}ts=!!pc,xc=pc=null}finally{fe=n,H.p=l,C.T=a}}e.current=t,Le=2}}function fd(){if(Le===2){Le=0;var e=Ta,t=Ml,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=C.T,C.T=null;var l=H.p;H.p=2;var n=fe;fe|=4;try{Yf(e,t.alternate,t)}finally{fe=n,H.p=l,C.T=a}}Le=3}}function dd(){if(Le===4||Le===3){Le=0,Fm();var e=Ta,t=Ml,a=ra,l=If;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Le=5:(Le=0,Ml=Ta=null,md(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(za=null),Es(a),t=t.stateNode,ct&&typeof ct.onCommitFiberRoot=="function")try{ct.onCommitFiberRoot(kl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=C.T,n=H.p,H.p=2,C.T=null;try{for(var i=e.onRecoverableError,c=0;c<l.length;c++){var f=l[c];i(f.value,{componentStack:f.stack})}}finally{C.T=t,H.p=n}}(ra&3)!==0&&Xi(),Xt(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===nc?Rn++:(Rn=0,nc=e):Rn=0,wn(0)}}function md(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,un(t)))}function Xi(){return od(),fd(),dd(),hd()}function hd(){if(Le!==5)return!1;var e=Ta,t=ac;ac=0;var a=Es(ra),l=C.T,n=H.p;try{H.p=32>a?32:a,C.T=null,a=lc,lc=null;var i=Ta,c=ra;if(Le=0,Ml=Ta=null,ra=0,(fe&6)!==0)throw Error(u(331));var f=fe;if(fe|=4,$f(i.current),kf(i,i.current,c,a),fe=f,wn(0,!1),ct&&typeof ct.onPostCommitFiberRoot=="function")try{ct.onPostCommitFiberRoot(kl,i)}catch{}return!0}finally{H.p=n,C.T=l,md(e,t)}}function gd(e,t,a){t=Et(a,t),t=Hr(e.stateNode,t,2),e=ya(e,t,2),e!==null&&(Jl(e,2),Xt(e))}function ge(e,t,a){if(e.tag===3)gd(e,e,a);else for(;t!==null;){if(t.tag===3){gd(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(za===null||!za.has(l))){e=Et(a,e),a=vf(2),l=ya(t,a,2),l!==null&&(pf(a,l,t,e),Jl(l,2),Xt(l));break}}t=t.return}}function rc(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new Ng;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(Pr=!0,n.add(a),e=Rg.bind(null,e,t,a),t.then(e,e))}function Rg(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Se===e&&(ie&a)===a&&(Oe===4||Oe===3&&(ie&62914560)===ie&&300>rt()-qi?(fe&2)===0&&Dl(e,0):ec|=a,Cl===ie&&(Cl=0)),Xt(e)}function vd(e,t){t===0&&(t=cu()),e=Ga(e,t),e!==null&&(Jl(e,t),Xt(e))}function wg(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),vd(e,a)}function Og(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(u(314))}l!==null&&l.delete(t),vd(e,a)}function Cg(e,t){return bs(e,t)}var Vi=null,Ul=null,cc=!1,Zi=!1,uc=!1,Ra=0;function Xt(e){e!==Ul&&e.next===null&&(Ul===null?Vi=Ul=e:Ul=Ul.next=e),Zi=!0,cc||(cc=!0,Dg())}function wn(e,t){if(!uc&&Zi){uc=!0;do for(var a=!1,l=Vi;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var c=l.suspendedLanes,f=l.pingedLanes;i=(1<<31-ut(42|e)+1)-1,i&=n&~(c&~f),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,bd(l,i))}else i=ie,i=$n(l,l===Se?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Kl(l,i)||(a=!0,bd(l,i));l=l.next}while(a);uc=!1}}function Mg(){pd()}function pd(){Zi=cc=!1;var e=0;Ra!==0&&Xg()&&(e=Ra);for(var t=rt(),a=null,l=Vi;l!==null;){var n=l.next,i=xd(l,t);i===0?(l.next=null,a===null?Vi=n:a.next=n,n===null&&(Ul=a)):(a=l,(e!==0||(i&3)!==0)&&(Zi=!0)),l=n}Le!==0&&Le!==5||wn(e),Ra!==0&&(Ra=0)}function xd(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var c=31-ut(i),f=1<<c,h=n[c];h===-1?((f&a)===0||(f&l)!==0)&&(n[c]=ih(f,t)):h<=t&&(e.expiredLanes|=f),i&=~f}if(t=Se,a=ie,a=$n(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(he===2||he===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&js(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Kl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&js(l),Es(a)){case 2:case 8:a=su;break;case 32:a=Zn;break;case 268435456:a=ru;break;default:a=Zn}return l=yd.bind(null,e),a=bs(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&js(l),e.callbackPriority=2,e.callbackNode=null,2}function yd(e,t){if(Le!==0&&Le!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Xi()&&e.callbackNode!==a)return null;var l=ie;return l=$n(e,e===Se?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(ed(e,l,t),xd(e,rt()),e.callbackNode!=null&&e.callbackNode===a?yd.bind(null,e):null)}function bd(e,t){if(Xi())return null;ed(e,t,!0)}function Dg(){Zg(function(){(fe&6)!==0?bs(iu,Mg):pd()})}function oc(){if(Ra===0){var e=bl;e===0&&(e=kn,kn<<=1,(kn&261888)===0&&(kn=256)),Ra=e}return Ra}function jd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Pn(""+e)}function Sd(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function _g(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=jd((n[et]||null).action),c=l.submitter;c&&(t=(t=c[et]||null)?jd(t.formAction):c.getAttribute("formAction"),t!==null&&(i=t,c=null));var f=new li("action","action",null,l,n);e.push({event:f,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ra!==0){var h=c?Sd(n,c):new FormData(n);Or(a,{pending:!0,data:h,method:n.method,action:i},null,h)}}else typeof i=="function"&&(f.preventDefault(),h=c?Sd(n,c):new FormData(n),Or(a,{pending:!0,data:h,method:n.method,action:i},i,h))},currentTarget:n}]})}}for(var fc=0;fc<Ks.length;fc++){var dc=Ks[fc],Ug=dc.toLowerCase(),Hg=dc[0].toUpperCase()+dc.slice(1);Mt(Ug,"on"+Hg)}Mt(Fu,"onAnimationEnd"),Mt(Iu,"onAnimationIteration"),Mt(Pu,"onAnimationStart"),Mt("dblclick","onDoubleClick"),Mt("focusin","onFocus"),Mt("focusout","onBlur"),Mt(Ih,"onTransitionRun"),Mt(Ph,"onTransitionStart"),Mt(eg,"onTransitionCancel"),Mt(eo,"onTransitionEnd"),sl("onMouseEnter",["mouseout","mouseover"]),sl("onMouseLeave",["mouseout","mouseover"]),sl("onPointerEnter",["pointerout","pointerover"]),sl("onPointerLeave",["pointerout","pointerover"]),qa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),qa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),qa("onBeforeInput",["compositionend","keypress","textInput","paste"]),qa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),qa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),qa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var On="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(On));function Nd(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var c=l.length-1;0<=c;c--){var f=l[c],h=f.instance,N=f.currentTarget;if(f=f.listener,h!==i&&n.isPropagationStopped())break e;i=f,n.currentTarget=N;try{i(n)}catch(O){si(O)}n.currentTarget=null,i=h}else for(c=0;c<l.length;c++){if(f=l[c],h=f.instance,N=f.currentTarget,f=f.listener,h!==i&&n.isPropagationStopped())break e;i=f,n.currentTarget=N;try{i(n)}catch(O){si(O)}n.currentTarget=null,i=h}}}}function ne(e,t){var a=t[zs];a===void 0&&(a=t[zs]=new Set);var l=e+"__bubble";a.has(l)||(Ed(t,e,2,!1),a.add(l))}function mc(e,t,a){var l=0;t&&(l|=4),Ed(a,e,l,t)}var ki="_reactListening"+Math.random().toString(36).slice(2);function hc(e){if(!e[ki]){e[ki]=!0,gu.forEach(function(a){a!=="selectionchange"&&(qg.has(a)||mc(a,!1,e),mc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ki]||(t[ki]=!0,mc("selectionchange",!1,t))}}function Ed(e,t,a,l){switch(Pd(t)){case 2:var n=fv;break;case 8:n=dv;break;default:n=wc}a=n.bind(null,t,a,e),n=void 0,!_s||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function gc(e,t,a,l,n){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var c=l.tag;if(c===3||c===4){var f=l.stateNode.containerInfo;if(f===n)break;if(c===4)for(c=l.return;c!==null;){var h=c.tag;if((h===3||h===4)&&c.stateNode.containerInfo===n)return;c=c.return}for(;f!==null;){if(c=ll(f),c===null)return;if(h=c.tag,h===5||h===6||h===26||h===27){l=i=c;continue e}f=f.parentNode}}l=l.return}Au(function(){var N=i,O=Ms(a),_=[];e:{var E=to.get(e);if(E!==void 0){var A=li,L=e;switch(e){case"keypress":if(ti(a)===0)break e;case"keydown":case"keyup":A=Oh;break;case"focusin":L="focus",A=Bs;break;case"focusout":L="blur",A=Bs;break;case"beforeblur":case"afterblur":A=Bs;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=Ou;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=xh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=Dh;break;case Fu:case Iu:case Pu:A=jh;break;case eo:A=Uh;break;case"scroll":case"scrollend":A=vh;break;case"wheel":A=qh;break;case"copy":case"cut":case"paste":A=Nh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=Mu;break;case"toggle":case"beforetoggle":A=Yh}var K=(t&4)!==0,be=!K&&(e==="scroll"||e==="scrollend"),b=K?E!==null?E+"Capture":null:E;K=[];for(var p=N,S;p!==null;){var D=p;if(S=D.stateNode,D=D.tag,D!==5&&D!==26&&D!==27||S===null||b===null||(D=Fl(p,b),D!=null&&K.push(Cn(p,D,S))),be)break;p=p.return}0<K.length&&(E=new A(E,L,null,a,O),_.push({event:E,listeners:K}))}}if((t&7)===0){e:{if(E=e==="mouseover"||e==="pointerover",A=e==="mouseout"||e==="pointerout",E&&a!==Cs&&(L=a.relatedTarget||a.fromElement)&&(ll(L)||L[al]))break e;if((A||E)&&(E=O.window===O?O:(E=O.ownerDocument)?E.defaultView||E.parentWindow:window,A?(L=a.relatedTarget||a.toElement,A=N,L=L?ll(L):null,L!==null&&(be=g(L),K=L.tag,L!==be||K!==5&&K!==27&&K!==6)&&(L=null)):(A=null,L=N),A!==L)){if(K=Ou,D="onMouseLeave",b="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(K=Mu,D="onPointerLeave",b="onPointerEnter",p="pointer"),be=A==null?E:Wl(A),S=L==null?E:Wl(L),E=new K(D,p+"leave",A,a,O),E.target=be,E.relatedTarget=S,D=null,ll(O)===N&&(K=new K(b,p+"enter",L,a,O),K.target=S,K.relatedTarget=be,D=K),be=D,A&&L)t:{for(K=Bg,b=A,p=L,S=0,D=b;D;D=K(D))S++;D=0;for(var k=p;k;k=K(k))D++;for(;0<S-D;)b=K(b),S--;for(;0<D-S;)p=K(p),D--;for(;S--;){if(b===p||p!==null&&b===p.alternate){K=b;break t}b=K(b),p=K(p)}K=null}else K=null;A!==null&&zd(_,E,A,K,!1),L!==null&&be!==null&&zd(_,be,L,K,!0)}}e:{if(E=N?Wl(N):window,A=E.nodeName&&E.nodeName.toLowerCase(),A==="select"||A==="input"&&E.type==="file")var ue=Lu;else if(Bu(E))if(Gu)ue=$h;else{ue=Kh;var V=kh}else A=E.nodeName,!A||A.toLowerCase()!=="input"||E.type!=="checkbox"&&E.type!=="radio"?N&&Os(N.elementType)&&(ue=Lu):ue=Jh;if(ue&&(ue=ue(e,N))){Yu(_,ue,a,O);break e}V&&V(e,E,N),e==="focusout"&&N&&E.type==="number"&&N.memoizedProps.value!=null&&ws(E,"number",E.value)}switch(V=N?Wl(N):window,e){case"focusin":(Bu(V)||V.contentEditable==="true")&&(dl=V,Vs=N,sn=null);break;case"focusout":sn=Vs=dl=null;break;case"mousedown":Zs=!0;break;case"contextmenu":case"mouseup":case"dragend":Zs=!1,$u(_,a,O);break;case"selectionchange":if(Fh)break;case"keydown":case"keyup":$u(_,a,O)}var te;if(Ls)e:{switch(e){case"compositionstart":var se="onCompositionStart";break e;case"compositionend":se="onCompositionEnd";break e;case"compositionupdate":se="onCompositionUpdate";break e}se=void 0}else fl?Hu(e,a)&&(se="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(se="onCompositionStart");se&&(Du&&a.locale!=="ko"&&(fl||se!=="onCompositionStart"?se==="onCompositionEnd"&&fl&&(te=Ru()):(da=O,Us="value"in da?da.value:da.textContent,fl=!0)),V=Ki(N,se),0<V.length&&(se=new Cu(se,e,null,a,O),_.push({event:se,listeners:V}),te?se.data=te:(te=qu(a),te!==null&&(se.data=te)))),(te=Gh?Qh(e,a):Xh(e,a))&&(se=Ki(N,"onBeforeInput"),0<se.length&&(V=new Cu("onBeforeInput","beforeinput",null,a,O),_.push({event:V,listeners:se}),V.data=te)),_g(_,e,N,a,O)}Nd(_,t)})}function Cn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Ki(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Fl(e,a),n!=null&&l.unshift(Cn(e,n,i)),n=Fl(e,t),n!=null&&l.push(Cn(e,n,i))),e.tag===3)return l;e=e.return}return[]}function Bg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function zd(e,t,a,l,n){for(var i=t._reactName,c=[];a!==null&&a!==l;){var f=a,h=f.alternate,N=f.stateNode;if(f=f.tag,h!==null&&h===l)break;f!==5&&f!==26&&f!==27||N===null||(h=N,n?(N=Fl(a,i),N!=null&&c.unshift(Cn(a,N,h))):n||(N=Fl(a,i),N!=null&&c.push(Cn(a,N,h)))),a=a.return}c.length!==0&&e.push({event:t,listeners:c})}var Yg=/\r\n?/g,Lg=/\u0000|\uFFFD/g;function Td(e){return(typeof e=="string"?e:""+e).replace(Yg,`
`).replace(Lg,"")}function Ad(e,t){return t=Td(t),Td(e)===t}function ye(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||cl(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&cl(e,""+l);break;case"className":Fn(e,"class",l);break;case"tabIndex":Fn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Fn(e,a,l);break;case"style":zu(e,l,i);break;case"data":if(t!=="object"){Fn(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Pn(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&ye(e,t,"name",n.name,n,null),ye(e,t,"formEncType",n.formEncType,n,null),ye(e,t,"formMethod",n.formMethod,n,null),ye(e,t,"formTarget",n.formTarget,n,null)):(ye(e,t,"encType",n.encType,n,null),ye(e,t,"method",n.method,n,null),ye(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Pn(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=kt);break;case"onScroll":l!=null&&ne("scroll",e);break;case"onScrollEnd":l!=null&&ne("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Pn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":ne("beforetoggle",e),ne("toggle",e),Wn(e,"popover",l);break;case"xlinkActuate":Zt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Zt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Zt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Zt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Zt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Zt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Zt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Zt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Zt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Wn(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=hh.get(a)||a,Wn(e,a,l))}}function vc(e,t,a,l,n,i){switch(a){case"style":zu(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"children":typeof l=="string"?cl(e,l):(typeof l=="number"||typeof l=="bigint")&&cl(e,""+l);break;case"onScroll":l!=null&&ne("scroll",e);break;case"onScrollEnd":l!=null&&ne("scrollend",e);break;case"onClick":l!=null&&(e.onclick=kt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!vu.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[et]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Wn(e,a,l)}}}function Je(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ne("error",e),ne("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var c=a[i];if(c!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:ye(e,t,i,c,a,null)}}n&&ye(e,t,"srcSet",a.srcSet,a,null),l&&ye(e,t,"src",a.src,a,null);return;case"input":ne("invalid",e);var f=i=c=n=null,h=null,N=null;for(l in a)if(a.hasOwnProperty(l)){var O=a[l];if(O!=null)switch(l){case"name":n=O;break;case"type":c=O;break;case"checked":h=O;break;case"defaultChecked":N=O;break;case"value":i=O;break;case"defaultValue":f=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(u(137,t));break;default:ye(e,t,l,O,a,null)}}ju(e,i,f,h,N,c,n,!1);return;case"select":ne("invalid",e),l=c=i=null;for(n in a)if(a.hasOwnProperty(n)&&(f=a[n],f!=null))switch(n){case"value":i=f;break;case"defaultValue":c=f;break;case"multiple":l=f;default:ye(e,t,n,f,a,null)}t=i,a=c,e.multiple=!!l,t!=null?rl(e,!!l,t,!1):a!=null&&rl(e,!!l,a,!0);return;case"textarea":ne("invalid",e),i=n=l=null;for(c in a)if(a.hasOwnProperty(c)&&(f=a[c],f!=null))switch(c){case"value":l=f;break;case"defaultValue":n=f;break;case"children":i=f;break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(u(91));break;default:ye(e,t,c,f,a,null)}Nu(e,l,n,i);return;case"option":for(h in a)if(a.hasOwnProperty(h)&&(l=a[h],l!=null))switch(h){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:ye(e,t,h,l,a,null)}return;case"dialog":ne("beforetoggle",e),ne("toggle",e),ne("cancel",e),ne("close",e);break;case"iframe":case"object":ne("load",e);break;case"video":case"audio":for(l=0;l<On.length;l++)ne(On[l],e);break;case"image":ne("error",e),ne("load",e);break;case"details":ne("toggle",e);break;case"embed":case"source":case"link":ne("error",e),ne("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(N in a)if(a.hasOwnProperty(N)&&(l=a[N],l!=null))switch(N){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:ye(e,t,N,l,a,null)}return;default:if(Os(t)){for(O in a)a.hasOwnProperty(O)&&(l=a[O],l!==void 0&&vc(e,t,O,l,a,void 0));return}}for(f in a)a.hasOwnProperty(f)&&(l=a[f],l!=null&&ye(e,t,f,l,a,null))}function Gg(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,c=null,f=null,h=null,N=null,O=null;for(A in a){var _=a[A];if(a.hasOwnProperty(A)&&_!=null)switch(A){case"checked":break;case"value":break;case"defaultValue":h=_;default:l.hasOwnProperty(A)||ye(e,t,A,null,l,_)}}for(var E in l){var A=l[E];if(_=a[E],l.hasOwnProperty(E)&&(A!=null||_!=null))switch(E){case"type":i=A;break;case"name":n=A;break;case"checked":N=A;break;case"defaultChecked":O=A;break;case"value":c=A;break;case"defaultValue":f=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(u(137,t));break;default:A!==_&&ye(e,t,E,A,l,_)}}Rs(e,c,f,h,N,O,i,n);return;case"select":A=c=f=E=null;for(i in a)if(h=a[i],a.hasOwnProperty(i)&&h!=null)switch(i){case"value":break;case"multiple":A=h;default:l.hasOwnProperty(i)||ye(e,t,i,null,l,h)}for(n in l)if(i=l[n],h=a[n],l.hasOwnProperty(n)&&(i!=null||h!=null))switch(n){case"value":E=i;break;case"defaultValue":f=i;break;case"multiple":c=i;default:i!==h&&ye(e,t,n,i,l,h)}t=f,a=c,l=A,E!=null?rl(e,!!a,E,!1):!!l!=!!a&&(t!=null?rl(e,!!a,t,!0):rl(e,!!a,a?[]:"",!1));return;case"textarea":A=E=null;for(f in a)if(n=a[f],a.hasOwnProperty(f)&&n!=null&&!l.hasOwnProperty(f))switch(f){case"value":break;case"children":break;default:ye(e,t,f,null,l,n)}for(c in l)if(n=l[c],i=a[c],l.hasOwnProperty(c)&&(n!=null||i!=null))switch(c){case"value":E=n;break;case"defaultValue":A=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(u(91));break;default:n!==i&&ye(e,t,c,n,l,i)}Su(e,E,A);return;case"option":for(var L in a)if(E=a[L],a.hasOwnProperty(L)&&E!=null&&!l.hasOwnProperty(L))switch(L){case"selected":e.selected=!1;break;default:ye(e,t,L,null,l,E)}for(h in l)if(E=l[h],A=a[h],l.hasOwnProperty(h)&&E!==A&&(E!=null||A!=null))switch(h){case"selected":e.selected=E&&typeof E!="function"&&typeof E!="symbol";break;default:ye(e,t,h,E,l,A)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var K in a)E=a[K],a.hasOwnProperty(K)&&E!=null&&!l.hasOwnProperty(K)&&ye(e,t,K,null,l,E);for(N in l)if(E=l[N],A=a[N],l.hasOwnProperty(N)&&E!==A&&(E!=null||A!=null))switch(N){case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(u(137,t));break;default:ye(e,t,N,E,l,A)}return;default:if(Os(t)){for(var be in a)E=a[be],a.hasOwnProperty(be)&&E!==void 0&&!l.hasOwnProperty(be)&&vc(e,t,be,void 0,l,E);for(O in l)E=l[O],A=a[O],!l.hasOwnProperty(O)||E===A||E===void 0&&A===void 0||vc(e,t,O,E,l,A);return}}for(var b in a)E=a[b],a.hasOwnProperty(b)&&E!=null&&!l.hasOwnProperty(b)&&ye(e,t,b,null,l,E);for(_ in l)E=l[_],A=a[_],!l.hasOwnProperty(_)||E===A||E==null&&A==null||ye(e,t,_,E,l,A)}function Rd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Qg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,c=n.initiatorType,f=n.duration;if(i&&f&&Rd(c)){for(c=0,f=n.responseEnd,l+=1;l<a.length;l++){var h=a[l],N=h.startTime;if(N>f)break;var O=h.transferSize,_=h.initiatorType;O&&Rd(_)&&(h=h.responseEnd,c+=O*(h<f?1:(f-N)/(h-N)))}if(--l,t+=8*(i+c)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var pc=null,xc=null;function Ji(e){return e.nodeType===9?e:e.ownerDocument}function wd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Od(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function yc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var bc=null;function Xg(){var e=window.event;return e&&e.type==="popstate"?e===bc?!1:(bc=e,!0):(bc=null,!1)}var Cd=typeof setTimeout=="function"?setTimeout:void 0,Vg=typeof clearTimeout=="function"?clearTimeout:void 0,Md=typeof Promise=="function"?Promise:void 0,Zg=typeof queueMicrotask=="function"?queueMicrotask:typeof Md<"u"?function(e){return Md.resolve(null).then(e).catch(kg)}:Cd;function kg(e){setTimeout(function(){throw e})}function wa(e){return e==="head"}function Dd(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(n),Yl(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")Mn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Mn(a);for(var i=a.firstChild;i;){var c=i.nextSibling,f=i.nodeName;i[$l]||f==="SCRIPT"||f==="STYLE"||f==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=c}}else a==="body"&&Mn(e.ownerDocument.body);a=n}while(a);Yl(t)}function _d(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function jc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":jc(a),Ts(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Kg(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[$l])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=wt(e.nextSibling),e===null)break}return null}function Jg(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=wt(e.nextSibling),e===null))return null;return e}function Ud(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=wt(e.nextSibling),e===null))return null;return e}function Sc(e){return e.data==="$?"||e.data==="$~"}function Nc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function $g(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function wt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Ec=null;function Hd(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return wt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function qd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Bd(e,t,a){switch(t=Ji(a),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function Mn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ts(e)}var Ot=new Map,Yd=new Set;function $i(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ca=H.d;H.d={f:Wg,r:Fg,D:Ig,C:Pg,L:ev,m:tv,X:lv,S:av,M:nv};function Wg(){var e=ca.f(),t=Li();return e||t}function Fg(e){var t=nl(e);t!==null&&t.tag===5&&t.type==="form"?tf(t):ca.r(e)}var Hl=typeof document>"u"?null:document;function Ld(e,t,a){var l=Hl;if(l&&typeof t=="string"&&t){var n=St(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Yd.has(n)||(Yd.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),Je(t,"link",e),Ge(t),l.head.appendChild(t)))}}function Ig(e){ca.D(e),Ld("dns-prefetch",e,null)}function Pg(e,t){ca.C(e,t),Ld("preconnect",e,t)}function ev(e,t,a){ca.L(e,t,a);var l=Hl;if(l&&e&&t){var n='link[rel="preload"][as="'+St(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+St(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+St(a.imageSizes)+'"]')):n+='[href="'+St(e)+'"]';var i=n;switch(t){case"style":i=ql(e);break;case"script":i=Bl(e)}Ot.has(i)||(e=R({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Ot.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(Dn(i))||t==="script"&&l.querySelector(_n(i))||(t=l.createElement("link"),Je(t,"link",e),Ge(t),l.head.appendChild(t)))}}function tv(e,t){ca.m(e,t);var a=Hl;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+St(l)+'"][href="'+St(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Bl(e)}if(!Ot.has(i)&&(e=R({rel:"modulepreload",href:e},t),Ot.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(_n(i)))return}l=a.createElement("link"),Je(l,"link",e),Ge(l),a.head.appendChild(l)}}}function av(e,t,a){ca.S(e,t,a);var l=Hl;if(l&&e){var n=il(l).hoistableStyles,i=ql(e);t=t||"default";var c=n.get(i);if(!c){var f={loading:0,preload:null};if(c=l.querySelector(Dn(i)))f.loading=5;else{e=R({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Ot.get(i))&&zc(e,a);var h=c=l.createElement("link");Ge(h),Je(h,"link",e),h._p=new Promise(function(N,O){h.onload=N,h.onerror=O}),h.addEventListener("load",function(){f.loading|=1}),h.addEventListener("error",function(){f.loading|=2}),f.loading|=4,Wi(c,t,l)}c={type:"stylesheet",instance:c,count:1,state:f},n.set(i,c)}}}function lv(e,t){ca.X(e,t);var a=Hl;if(a&&e){var l=il(a).hoistableScripts,n=Bl(e),i=l.get(n);i||(i=a.querySelector(_n(n)),i||(e=R({src:e,async:!0},t),(t=Ot.get(n))&&Tc(e,t),i=a.createElement("script"),Ge(i),Je(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function nv(e,t){ca.M(e,t);var a=Hl;if(a&&e){var l=il(a).hoistableScripts,n=Bl(e),i=l.get(n);i||(i=a.querySelector(_n(n)),i||(e=R({src:e,async:!0,type:"module"},t),(t=Ot.get(n))&&Tc(e,t),i=a.createElement("script"),Ge(i),Je(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Gd(e,t,a,l){var n=(n=ae.current)?$i(n):null;if(!n)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=ql(a.href),a=il(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ql(a.href);var i=il(n).hoistableStyles,c=i.get(e);if(c||(n=n.ownerDocument||n,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,c),(i=n.querySelector(Dn(e)))&&!i._p&&(c.instance=i,c.state.loading=5),Ot.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ot.set(e,a),i||iv(n,e,a,c.state))),t&&l===null)throw Error(u(528,""));return c}if(t&&l!==null)throw Error(u(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Bl(a),a=il(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function ql(e){return'href="'+St(e)+'"'}function Dn(e){return'link[rel="stylesheet"]['+e+"]"}function Qd(e){return R({},e,{"data-precedence":e.precedence,precedence:null})}function iv(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Je(t,"link",a),Ge(t),e.head.appendChild(t))}function Bl(e){return'[src="'+St(e)+'"]'}function _n(e){return"script[async]"+e}function Xd(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+St(a.href)+'"]');if(l)return t.instance=l,Ge(l),l;var n=R({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ge(l),Je(l,"style",n),Wi(l,a.precedence,e),t.instance=l;case"stylesheet":n=ql(a.href);var i=e.querySelector(Dn(n));if(i)return t.state.loading|=4,t.instance=i,Ge(i),i;l=Qd(a),(n=Ot.get(n))&&zc(l,n),i=(e.ownerDocument||e).createElement("link"),Ge(i);var c=i;return c._p=new Promise(function(f,h){c.onload=f,c.onerror=h}),Je(i,"link",l),t.state.loading|=4,Wi(i,a.precedence,e),t.instance=i;case"script":return i=Bl(a.src),(n=e.querySelector(_n(i)))?(t.instance=n,Ge(n),n):(l=a,(n=Ot.get(i))&&(l=R({},a),Tc(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),Ge(n),Je(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Wi(l,a.precedence,e));return t.instance}function Wi(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,c=0;c<l.length;c++){var f=l[c];if(f.dataset.precedence===t)i=f;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function zc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Tc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Fi=null;function Vd(e,t,a){if(Fi===null){var l=new Map,n=Fi=new Map;n.set(a,l)}else n=Fi,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[$l]||i[Ve]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var c=i.getAttribute(t)||"";c=e+c;var f=l.get(c);f?f.push(i):l.set(c,[i])}}return l}function Zd(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function sv(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function kd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function rv(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=ql(l.href),i=t.querySelector(Dn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ii.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,Ge(i);return}i=t.ownerDocument||t,l=Qd(l),(n=Ot.get(n))&&zc(l,n),i=i.createElement("link"),Ge(i);var c=i;c._p=new Promise(function(f,h){c.onload=f,c.onerror=h}),Je(i,"link",l),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Ii.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Ac=0;function cv(e,t){return e.stylesheets&&e.count===0&&es(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&es(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Ac===0&&(Ac=62500*Qg());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&es(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Ac?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function Ii(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)es(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Pi=null;function es(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Pi=new Map,t.forEach(uv,e),Pi=null,Ii.call(e))}function uv(e,t){if(!(t.state.loading&4)){var a=Pi.get(e);if(a)var l=a.get(null);else{a=new Map,Pi.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var c=n[i];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(a.set(c.dataset.precedence,c),l=c)}l&&a.set(null,l)}n=t.instance,c=n.getAttribute("data-precedence"),i=a.get(c)||l,i===l&&a.set(null,n),a.set(c,n),this.count++,l=Ii.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var Un={$$typeof:J,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function ov(e,t,a,l,n,i,c,f,h){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ss(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ss(0),this.hiddenUpdates=Ss(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.incompleteTransitions=new Map}function Kd(e,t,a,l,n,i,c,f,h,N,O,_){return e=new ov(e,t,a,c,h,N,O,_,f),t=1,i===!0&&(t|=24),i=ft(3,null,null,t),e.current=i,i.stateNode=e,t=sr(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},or(i),e}function Jd(e){return e?(e=gl,e):gl}function $d(e,t,a,l,n,i){n=Jd(n),l.context===null?l.context=n:l.pendingContext=n,l=xa(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=ya(e,l,t),a!==null&&(st(a,e,t),mn(a,e,t))}function Wd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Rc(e,t){Wd(e,t),(e=e.alternate)&&Wd(e,t)}function Fd(e){if(e.tag===13||e.tag===31){var t=Ga(e,67108864);t!==null&&st(t,e,67108864),Rc(e,67108864)}}function Id(e){if(e.tag===13||e.tag===31){var t=vt();t=Ns(t);var a=Ga(e,t);a!==null&&st(a,e,t),Rc(e,t)}}var ts=!0;function fv(e,t,a,l){var n=C.T;C.T=null;var i=H.p;try{H.p=2,wc(e,t,a,l)}finally{H.p=i,C.T=n}}function dv(e,t,a,l){var n=C.T;C.T=null;var i=H.p;try{H.p=8,wc(e,t,a,l)}finally{H.p=i,C.T=n}}function wc(e,t,a,l){if(ts){var n=Oc(l);if(n===null)gc(e,t,l,as,a),em(e,l);else if(hv(n,e,t,a,l))l.stopPropagation();else if(em(e,l),t&4&&-1<mv.indexOf(e)){for(;n!==null;){var i=nl(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var c=Ha(i.pendingLanes);if(c!==0){var f=i;for(f.pendingLanes|=2,f.entangledLanes|=2;c;){var h=1<<31-ut(c);f.entanglements[1]|=h,c&=~h}Xt(i),(fe&6)===0&&(Bi=rt()+500,wn(0))}}break;case 31:case 13:f=Ga(i,2),f!==null&&st(f,i,2),Li(),Rc(i,2)}if(i=Oc(l),i===null&&gc(e,t,l,as,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else gc(e,t,l,null,a)}}function Oc(e){return e=Ms(e),Cc(e)}var as=null;function Cc(e){if(as=null,e=ll(e),e!==null){var t=g(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=j(t),e!==null)return e;e=null}else if(a===31){if(e=T(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return as=e,null}function Pd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Im()){case iu:return 2;case su:return 8;case Zn:case Pm:return 32;case ru:return 268435456;default:return 32}default:return 32}}var Mc=!1,Oa=null,Ca=null,Ma=null,Hn=new Map,qn=new Map,Da=[],mv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function em(e,t){switch(e){case"focusin":case"focusout":Oa=null;break;case"dragenter":case"dragleave":Ca=null;break;case"mouseover":case"mouseout":Ma=null;break;case"pointerover":case"pointerout":Hn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":qn.delete(t.pointerId)}}function Bn(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=nl(t),t!==null&&Fd(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function hv(e,t,a,l,n){switch(t){case"focusin":return Oa=Bn(Oa,e,t,a,l,n),!0;case"dragenter":return Ca=Bn(Ca,e,t,a,l,n),!0;case"mouseover":return Ma=Bn(Ma,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return Hn.set(i,Bn(Hn.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,qn.set(i,Bn(qn.get(i)||null,e,t,a,l,n)),!0}return!1}function tm(e){var t=ll(e.target);if(t!==null){var a=g(t);if(a!==null){if(t=a.tag,t===13){if(t=j(a),t!==null){e.blockedOn=t,mu(e.priority,function(){Id(a)});return}}else if(t===31){if(t=T(a),t!==null){e.blockedOn=t,mu(e.priority,function(){Id(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ls(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Oc(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Cs=l,a.target.dispatchEvent(l),Cs=null}else return t=nl(a),t!==null&&Fd(t),e.blockedOn=a,!1;t.shift()}return!0}function am(e,t,a){ls(e)&&a.delete(t)}function gv(){Mc=!1,Oa!==null&&ls(Oa)&&(Oa=null),Ca!==null&&ls(Ca)&&(Ca=null),Ma!==null&&ls(Ma)&&(Ma=null),Hn.forEach(am),qn.forEach(am)}function ns(e,t){e.blockedOn===t&&(e.blockedOn=null,Mc||(Mc=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,gv)))}var is=null;function lm(e){is!==e&&(is=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){is===e&&(is=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(Cc(l||a)===null)continue;break}var i=nl(a);i!==null&&(e.splice(t,3),t-=3,Or(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function Yl(e){function t(h){return ns(h,e)}Oa!==null&&ns(Oa,e),Ca!==null&&ns(Ca,e),Ma!==null&&ns(Ma,e),Hn.forEach(t),qn.forEach(t);for(var a=0;a<Da.length;a++){var l=Da[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Da.length&&(a=Da[0],a.blockedOn===null);)tm(a),a.blockedOn===null&&Da.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],c=n[et]||null;if(typeof i=="function")c||lm(a);else if(c){var f=null;if(i&&i.hasAttribute("formAction")){if(n=i,c=i[et]||null)f=c.formAction;else if(Cc(n)!==null)continue}else f=c.action;typeof f=="function"?a[l+1]=f:(a.splice(l,3),l-=3),lm(a)}}}function nm(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(c){return n=c})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function Dc(e){this._internalRoot=e}ss.prototype.render=Dc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var a=t.current,l=vt();$d(a,l,e,t,null,null)},ss.prototype.unmount=Dc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;$d(e.current,2,null,e,null,null),Li(),t[al]=null}};function ss(e){this._internalRoot=e}ss.prototype.unstable_scheduleHydration=function(e){if(e){var t=du();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Da.length&&t!==0&&t<Da[a].priority;a++);Da.splice(a,0,e),a===0&&tm(e)}};var im=o.version;if(im!=="19.2.0")throw Error(u(527,im,"19.2.0"));H.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=v(t),e=e!==null?w(e):null,e=e===null?null:e.stateNode,e};var vv={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:C,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rs.isDisabled&&rs.supportsFiber)try{kl=rs.inject(vv),ct=rs}catch{}}return Ln.createRoot=function(e,t){if(!m(e))throw Error(u(299));var a=!1,l="",n=df,i=mf,c=hf;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=Kd(e,1,!1,null,null,a,l,null,n,i,c,nm),e[al]=t.current,hc(e),new Dc(t)},Ln.hydrateRoot=function(e,t,a){if(!m(e))throw Error(u(299));var l=!1,n="",i=df,c=mf,f=hf,h=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(c=a.onCaughtError),a.onRecoverableError!==void 0&&(f=a.onRecoverableError),a.formState!==void 0&&(h=a.formState)),t=Kd(e,1,!0,t,a??null,l,n,h,i,c,f,nm),t.context=Jd(null),a=t.current,l=vt(),l=Ns(l),n=xa(l),n.callback=null,ya(a,n,l),a=l,t.current.lanes=a,Jl(t,a),Xt(t),e[al]=t.current,hc(e),new ss(t)},Ln.version="19.2.0",Ln}var gm;function Av(){if(gm)return Hc.exports;gm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(o){console.error(o)}}return r(),Hc.exports=Tv(),Hc.exports}var Rv=Av();const wv=Em(Rv);/**
 * react-router v7.18.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Kc=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,zm=/^[\\/]{2}/;function Ov(r,o){return o+r.replace(/\\/g,"/")}var vm="popstate";function pm(r){return typeof r=="object"&&r!=null&&"pathname"in r&&"search"in r&&"hash"in r&&"state"in r&&"key"in r}function Cv(r={}){function o(u,m){var v;let g=(v=m.state)==null?void 0:v.masked,{pathname:j,search:T,hash:y}=g||u.location;return Vc("",{pathname:j,search:T,hash:y},m.state&&m.state.usr||null,m.state&&m.state.key||"default",g?{pathname:u.location.pathname,search:u.location.search,hash:u.location.hash}:void 0)}function d(u,m){return typeof m=="string"?m:tl(m)}return Dv(o,d,null,r)}function Re(r,o){if(r===!1||r===null||typeof r>"u")throw new Error(o)}function qt(r,o){if(!r){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function Mv(){return Math.random().toString(36).substring(2,10)}function xm(r,o){return{usr:r.state,key:r.key,idx:o,masked:r.mask?{pathname:r.pathname,search:r.search,hash:r.hash}:void 0}}function Vc(r,o,d=null,u,m){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof o=="string"?Gl(o):o,state:d,key:o&&o.key||u||Mv(),mask:m}}function tl({pathname:r="/",search:o="",hash:d=""}){return o&&o!=="?"&&(r+=o.charAt(0)==="?"?o:"?"+o),d&&d!=="#"&&(r+=d.charAt(0)==="#"?d:"#"+d),r}function Gl(r){let o={};if(r){let d=r.indexOf("#");d>=0&&(o.hash=r.substring(d),r=r.substring(0,d));let u=r.indexOf("?");u>=0&&(o.search=r.substring(u),r=r.substring(0,u)),r&&(o.pathname=r)}return o}function Dv(r,o,d,u={}){let{window:m=document.defaultView,v5Compat:g=!1}=u,j=m.history,T="POP",y=null,v=w();v==null&&(v=0,j.replaceState({...j.state,idx:v},""));function w(){return(j.state||{idx:null}).idx}function R(){T="POP";let Q=w(),q=Q==null?null:Q-v;v=Q,y&&y({action:T,location:Y.location,delta:q})}function M(Q,q){T="PUSH";let I=pm(Q)?Q:Vc(Y.location,Q,q);v=w()+1;let J=xm(I,v),ve=Y.createHref(I.mask||I);try{j.pushState(J,"",ve)}catch(me){if(me instanceof DOMException&&me.name==="DataCloneError")throw me;m.location.assign(ve)}g&&y&&y({action:T,location:Y.location,delta:1})}function G(Q,q){T="REPLACE";let I=pm(Q)?Q:Vc(Y.location,Q,q);v=w();let J=xm(I,v),ve=Y.createHref(I.mask||I);j.replaceState(J,"",ve),g&&y&&y({action:T,location:Y.location,delta:0})}function Z(Q){return _v(m,Q)}let Y={get action(){return T},get location(){return r(m,j)},listen(Q){if(y)throw new Error("A history only accepts one active listener");return m.addEventListener(vm,R),y=Q,()=>{m.removeEventListener(vm,R),y=null}},createHref(Q){return o(m,Q)},createURL:Z,encodeLocation(Q){let q=Z(Q);return{pathname:q.pathname,search:q.search,hash:q.hash}},push:M,replace:G,go(Q){return j.go(Q)}};return Y}function _v(r,o,d=!1){let u="http://localhost";r&&(u=r.location.origin!=="null"?r.location.origin:r.location.href),Re(u,"No window.location.(origin|href) available to create URL");let m=typeof o=="string"?o:tl(o);return m=m.replace(/ $/,"%20"),!d&&zm.test(m)&&(m=u+m),new URL(m,u)}function Tm(r,o,d="/"){return Uv(r,o,d,!1)}function Uv(r,o,d,u,m){let g=typeof o=="string"?Gl(o):o,j=ua(g.pathname||"/",d);if(j==null)return null;let T=Hv(r),y=null,v=Kv(j);for(let w=0;y==null&&w<T.length;++w)y=kv(T[w],v,u);return y}function Hv(r){let o=Am(r);return qv(o),o}function Am(r,o=[],d=[],u="",m=!1){let g=(j,T,y=m,v)=>{let w={relativePath:v===void 0?j.path||"":v,caseSensitive:j.caseSensitive===!0,childrenIndex:T,route:j};if(w.relativePath.startsWith("/")){if(!w.relativePath.startsWith(u)&&y)return;Re(w.relativePath.startsWith(u),`Absolute route path "${w.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),w.relativePath=w.relativePath.slice(u.length)}let R=Ht([u,w.relativePath]),M=d.concat(w);j.children&&j.children.length>0&&(Re(j.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${R}".`),Am(j.children,o,M,R,y)),!(j.path==null&&!j.index)&&o.push({path:R,score:Vv(R,j.index),routesMeta:M.map((G,Z)=>{let[Y,Q]=Om(G.relativePath,G.caseSensitive,Z===M.length-1);return{...G,matcher:Y,compiledParams:Q}})})};return r.forEach((j,T)=>{var y;if(j.path===""||!((y=j.path)!=null&&y.includes("?")))g(j,T);else for(let v of Rm(j.path))g(j,T,!0,v)}),o}function Rm(r){let o=r.split("/");if(o.length===0)return[];let[d,...u]=o,m=d.endsWith("?"),g=d.replace(/\?$/,"");if(u.length===0)return m?[g,""]:[g];let j=Rm(u.join("/")),T=[];return T.push(...j.map(y=>y===""?g:[g,y].join("/"))),m&&T.push(...j),T.map(y=>r.startsWith("/")&&y===""?"/":y)}function qv(r){r.sort((o,d)=>o.score!==d.score?d.score-o.score:Zv(o.routesMeta.map(u=>u.childrenIndex),d.routesMeta.map(u=>u.childrenIndex)))}var Bv=/^:[\w-]+$/,Yv=3,Lv=2,Gv=1,Qv=10,Xv=-2,ym=r=>r==="*";function Vv(r,o){let d=r.split("/"),u=d.length;return d.some(ym)&&(u+=Xv),o&&(u+=Lv),d.filter(m=>!ym(m)).reduce((m,g)=>m+(Bv.test(g)?Yv:g===""?Gv:Qv),u)}function Zv(r,o){return r.length===o.length&&r.slice(0,-1).every((u,m)=>u===o[m])?r[r.length-1]-o[o.length-1]:0}function kv(r,o,d=!1){let{routesMeta:u}=r,m={},g="/",j=[];for(let T=0;T<u.length;++T){let y=u[T],v=T===u.length-1,w=g==="/"?o:o.slice(g.length)||"/",R={path:y.relativePath,caseSensitive:y.caseSensitive,end:v},M=y.matcher&&y.compiledParams?wm(R,w,y.matcher,y.compiledParams):fs(R,w),G=y.route;if(!M&&v&&d&&!u[u.length-1].route.index&&(M=fs({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},w)),!M)return null;Object.assign(m,M.params),j.push({params:m,pathname:Ht([g,M.pathname]),pathnameBase:Wv(Ht([g,M.pathnameBase])),route:G}),M.pathnameBase!=="/"&&(g=Ht([g,M.pathnameBase]))}return j}function fs(r,o){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[d,u]=Om(r.path,r.caseSensitive,r.end);return wm(r,o,d,u)}function wm(r,o,d,u){let m=o.match(d);if(!m)return null;let g=m[0],j=Ll(g,1),T=m.slice(1);return{params:u.reduce((v,{paramName:w,isOptional:R},M)=>{if(w==="*"){let Z=T[M]||"";j=Ll(g.slice(0,g.length-Z.length),1)}const G=T[M];return R&&!G?v[w]=void 0:v[w]=(G||"").replace(/%2F/g,"/"),v},{}),pathname:g,pathnameBase:j,pattern:r}}function Om(r,o=!1,d=!0){qt(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let u=[],m="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(j,T,y,v,w)=>{if(u.push({paramName:T,isOptional:y!=null}),y){let R=w.charAt(v+j.length);return R&&R!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(u.push({paramName:"*"}),m+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):d?m+="\\/*$":r!==""&&r!=="/"&&(m+="(?:(?=\\/|$))"),[new RegExp(m,o?void 0:"i"),u]}function Kv(r){try{return r.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return qt(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`),r}}function ua(r,o){if(o==="/")return r;if(!r.toLowerCase().startsWith(o.toLowerCase()))return null;let d=o.endsWith("/")?o.length-1:o.length,u=r.charAt(d);return u&&u!=="/"?null:r.slice(d)||"/"}function Jv(r,o="/"){let{pathname:d,search:u="",hash:m=""}=typeof r=="string"?Gl(r):r,g;return d?(d=Cm(d),d.startsWith("/")||d.startsWith("\\")?g=bm(d.substring(1),"/"):g=bm(d,o)):g=o,{pathname:g,search:Fv(u),hash:Iv(m)}}function bm(r,o){let d=Ll(o).split("/");return r.split("/").forEach(m=>{m===".."?d.length>1&&d.pop():m!=="."&&d.push(m)}),d.length>1?d.join("/"):"/"}function Lc(r,o,d,u){return`Cannot include a '${r}' character in a manually specified \`to.${o}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${d}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function $v(r){return r.filter((o,d)=>d===0||o.route.path&&o.route.path.length>0)}function Jc(r){let o=$v(r);return o.map((d,u)=>u===o.length-1?d.pathname:d.pathnameBase)}function ds(r,o,d,u=!1){let m;typeof r=="string"?m=Gl(r):(m={...r},Re(!m.pathname||!m.pathname.includes("?"),Lc("?","pathname","search",m)),Re(!m.pathname||!m.pathname.includes("#"),Lc("#","pathname","hash",m)),Re(!m.search||!m.search.includes("#"),Lc("#","search","hash",m)));let g=r===""||m.pathname==="",j=g?"/":m.pathname,T;if(j==null)T=d;else{let R=o.length-1;if(!u&&j.startsWith("..")){let M=j.split("/");for(;M[0]==="..";)M.shift(),R-=1;m.pathname=M.join("/")}T=R>=0?o[R]:"/"}let y=Jv(m,T),v=j&&j!=="/"&&j.endsWith("/"),w=(g||j===".")&&d.endsWith("/");return!y.pathname.endsWith("/")&&(v||w)&&(y.pathname+="/"),y}var Cm=r=>r.replace(/[\\/]{2,}/g,"/"),Ht=r=>Cm(r.join("/"));function Ll(r,o=0){let d=r.length;for(;d>o&&r.charCodeAt(d-1)===47;)d--;return d===r.length?r:r.slice(0,d)}var Wv=r=>Ll(r).replace(/^\/*/,"/"),Fv=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Iv=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,Pv=class{constructor(r,o,d,u=!1){this.status=r,this.statusText=o||"",this.internal=u,d instanceof Error?(this.data=d.toString(),this.error=d):this.data=d}};function ep(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function tp(r){let o=r.map(d=>d.route.path).filter(Boolean);return Ht(o)||"/"}var Mm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Dm(r,o){let d=r;if(typeof d!="string"||!Kc.test(d))return{absoluteURL:void 0,isExternal:!1,to:d};let u=d,m=!1;if(Mm)try{let g=new URL(window.location.href),j=zm.test(d)?new URL(Ov(d,g.protocol)):new URL(d),T=ua(j.pathname,o);j.origin===g.origin&&T!=null?d=T+j.search+j.hash:m=!0}catch{qt(!1,`<Link to="${d}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:u,isExternal:m,to:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var jm=new URL("http://localhost");function $c(r){if(r.createURL)return r.createURL("/");try{return new URL(r.createHref("/"),jm)}catch{return jm}}function Gc(r,o){return r.origin===o.origin&&(r.origin!=="null"||r.protocol===o.protocol&&r.host===o.host)}function ap(r,o){if(r.startsWith("//"))return!0;let d=o.protocol.toLowerCase();return r.toLowerCase().startsWith(d)?o.host===""||r.slice(d.length).startsWith("//"):!1}function Wc(r,o,d,u){let m=null;try{m=r==null?null:new URL(r,d)}catch{}let g=new URL(o,d),j=m!=null&&!Gc(m,d),T=!Gc(g,d);if(u==="reject"){if(j||T)throw new Error("External navigation is not allowed")}else if(T&&(m==null||!ap(r,m)||!Gc(m,g)))throw new Error("External navigation is not allowed")}var _m=["POST","PUT","PATCH","DELETE"];new Set(_m);var lp=["GET",..._m];new Set(lp);var np=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function ip(r){try{return np.includes(new URL(r).protocol)}catch{return!1}}var Ql=z.createContext(null);Ql.displayName="DataRouter";var ms=z.createContext(null);ms.displayName="DataRouterState";var Um=z.createContext(!1);function sp(){return z.useContext(Um)}var Hm=z.createContext({isTransitioning:!1});Hm.displayName="ViewTransition";var rp=z.createContext(new Map);rp.displayName="Fetchers";var cp=z.createContext(null);cp.displayName="Await";var pt=z.createContext(null);pt.displayName="Navigation";var Qn=z.createContext(null);Qn.displayName="Location";var Ct=z.createContext({outlet:null,matches:[],isDataRoute:!1});Ct.displayName="Route";var Fc=z.createContext(null);Fc.displayName="RouteError";var qm="REACT_ROUTER_ERROR",up="REDIRECT",op="ROUTE_ERROR_RESPONSE";function fp(r){if(r.startsWith(`${qm}:${up}:{`))try{let o=JSON.parse(r.slice(28));if(typeof o=="object"&&o&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.location=="string"&&typeof o.reloadDocument=="boolean"&&typeof o.replace=="boolean")return o}catch{}}function dp(r){if(r.startsWith(`${qm}:${op}:{`))try{let o=JSON.parse(r.slice(40));if(typeof o=="object"&&o&&typeof o.status=="number"&&typeof o.statusText=="string")return new Pv(o.status,o.statusText,o.data)}catch{}}function mp(r,{relative:o}={}){Re(Xl(),"useHref() may be used only in the context of a <Router> component.");let{basename:d,navigator:u}=z.useContext(pt),{hash:m,pathname:g,search:j}=Xn(r,{relative:o}),T=g;return d!=="/"&&(T=g==="/"?d:Ht([d,g])),u.createHref({pathname:T,search:j,hash:m})}function Xl(){return z.useContext(Qn)!=null}function xt(){return Re(Xl(),"useLocation() may be used only in the context of a <Router> component."),z.useContext(Qn).location}var Bm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Ym(r){z.useContext(pt).static||z.useLayoutEffect(r)}function Lm(){let{isDataRoute:r}=z.useContext(Ct);return r?wp():hp()}function hp(){Re(Xl(),"useNavigate() may be used only in the context of a <Router> component.");let r=z.useContext(Ql),{basename:o,navigator:d}=z.useContext(pt),{matches:u}=z.useContext(Ct),{pathname:m}=xt(),g=JSON.stringify(Jc(u)),j=z.useRef(!1);return Ym(()=>{j.current=!0}),z.useCallback((y,v={})=>{if(qt(j.current,Bm),!j.current)return;if(typeof y=="number"){d.go(y);return}let w=ds(y,JSON.parse(g),m,v.relative==="path");r==null&&o!=="/"&&(w.pathname=w.pathname==="/"?o:Ht([o,w.pathname])),Wc(typeof y=="string"?y:tl(y),d.createHref(w),$c(d),"reject"),(v.replace?d.replace:d.push)(w,v.state,v)},[o,d,g,m,r])}var gp=z.createContext(null);function vp(r){let o=z.useContext(Ct).outlet;return z.useMemo(()=>o&&z.createElement(gp.Provider,{value:r},o),[o,r])}function pp(){let{matches:r}=z.useContext(Ct),o=r[r.length-1];return(o==null?void 0:o.params)??{}}function Xn(r,{relative:o}={}){let{matches:d}=z.useContext(Ct),{pathname:u}=xt(),m=JSON.stringify(Jc(d));return z.useMemo(()=>ds(r,JSON.parse(m),u,o==="path"),[r,m,u,o])}function xp(r,o){return Gm(r,o)}function Gm(r,o,d){var Q;Re(Xl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=z.useContext(pt),{matches:m}=z.useContext(Ct),g=m[m.length-1],j=g?g.params:{},T=g?g.pathname:"/",y=g?g.pathnameBase:"/",v=g&&g.route;{let q=v&&v.path||"";Xm(T,!v||q.endsWith("*")||q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${T}" (under <Route path="${q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${q}"> to <Route path="${q==="/"?"*":`${q}/*`}">.`)}let w=xt(),R;if(o){let q=typeof o=="string"?Gl(o):o;Re(y==="/"||((Q=q.pathname)==null?void 0:Q.startsWith(y)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${q.pathname}" was given in the \`location\` prop.`),R=q}else R=w;let M=R.pathname||"/",G=M;if(y!=="/"){let q=y.replace(/^\//,"").split("/");G="/"+M.replace(/^\//,"").split("/").slice(q.length).join("/")}let Z=d&&d.state.matches.length?d.state.matches.map(q=>Object.assign(q,{route:d.manifest[q.route.id]||q.route})):Tm(r,{pathname:G});qt(v||Z!=null,`No routes matched location "${R.pathname}${R.search}${R.hash}" `),qt(Z==null||Z[Z.length-1].route.element!==void 0||Z[Z.length-1].route.Component!==void 0||Z[Z.length-1].route.lazy!==void 0,`Matched leaf route at location "${R.pathname}${R.search}${R.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let Y=Np(Z&&Z.map(q=>Object.assign({},q,{params:Object.assign({},j,q.params),pathname:Ht([y,u.encodeLocation?u.encodeLocation(q.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:q.pathname]),pathnameBase:q.pathnameBase==="/"?y:Ht([y,u.encodeLocation?u.encodeLocation(q.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:q.pathnameBase])})),m,d);return o&&Y?z.createElement(Qn.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...R},navigationType:"POP"}},Y):Y}function yp(){let r=Rp(),o=ep(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),d=r instanceof Error?r.stack:null,u="rgba(200,200,200, 0.5)",m={padding:"0.5rem",backgroundColor:u},g={padding:"2px 4px",backgroundColor:u},j=null;return console.error("Error handled by React Router default ErrorBoundary:",r),j=z.createElement(z.Fragment,null,z.createElement("p",null,"💿 Hey developer 👋"),z.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",z.createElement("code",{style:g},"ErrorBoundary")," or"," ",z.createElement("code",{style:g},"errorElement")," prop on your route.")),z.createElement(z.Fragment,null,z.createElement("h2",null,"Unexpected Application Error!"),z.createElement("h3",{style:{fontStyle:"italic"}},o),d?z.createElement("pre",{style:m},d):null,j)}var bp=z.createElement(yp,null),Qm=class extends z.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,o){return o.location!==r.location||o.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:o.error,location:o.location,revalidation:r.revalidation||o.revalidation}}componentDidCatch(r,o){this.props.onError?this.props.onError(r,o):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const d=dp(r.digest);d&&(r=d)}let o=r!==void 0?z.createElement(Ct.Provider,{value:this.props.routeContext},z.createElement(Fc.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?z.createElement(jp,{error:r},o):o}};Qm.contextType=Um;var Qc=new WeakMap;function jp({children:r,error:o}){let{basename:d,navigator:u}=z.useContext(pt);if(typeof o=="object"&&o&&"digest"in o&&typeof o.digest=="string"){let m=fp(o.digest);if(m){let g=Qc.get(o);if(g)throw g;let j=Dm(m.location,d),T=j.absoluteURL||j.to;if(Wc(m.location,T,$c(u),"allow-explicit"),ip(T))throw new Error("Invalid redirect location");if(Mm&&!Qc.get(o))if(j.isExternal||m.reloadDocument)window.location.href=T;else{const y=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(j.to,{replace:m.replace}));throw Qc.set(o,y),y}return z.createElement("meta",{httpEquiv:"refresh",content:`0;url=${T}`})}}return r}function Sp({routeContext:r,match:o,children:d}){let u=z.useContext(Ql);return u&&u.static&&u.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=o.route.id),z.createElement(Ct.Provider,{value:r},d)}function Np(r,o=[],d){let u=d==null?void 0:d.state;if(r==null){if(!u)return null;if(u.errors)r=u.matches;else if(o.length===0&&!u.initialized&&u.matches.length>0)r=u.matches;else return null}let m=r,g=u==null?void 0:u.errors;if(g!=null){let w=m.findIndex(R=>R.route.id&&(g==null?void 0:g[R.route.id])!==void 0);Re(w>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(g).join(",")}`),m=m.slice(0,Math.min(m.length,w+1))}let j=!1,T=-1;if(d&&u){j=u.renderFallback;for(let w=0;w<m.length;w++){let R=m[w];if((R.route.HydrateFallback||R.route.hydrateFallbackElement)&&(T=w),R.route.id){let{loaderData:M,errors:G}=u,Z=R.route.loader&&!M.hasOwnProperty(R.route.id)&&(!G||G[R.route.id]===void 0);if(R.route.lazy||Z){d.isStatic&&(j=!0),T>=0?m=m.slice(0,T+1):m=[m[0]];break}}}}let y=d==null?void 0:d.onError,v=u&&y?(w,R)=>{var M,G;y(w,{location:u.location,params:((G=(M=u.matches)==null?void 0:M[0])==null?void 0:G.params)??{},pattern:tp(u.matches),errorInfo:R})}:void 0;return m.reduceRight((w,R,M)=>{let G,Z=!1,Y=null,Q=null;u&&(G=g&&R.route.id?g[R.route.id]:void 0,Y=R.route.errorElement||bp,j&&(T<0&&M===0?(Xm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),Z=!0,Q=null):T===M&&(Z=!0,Q=R.route.hydrateFallbackElement||null)));let q=o.concat(m.slice(0,M+1)),I=()=>{let J;return G?J=Y:Z?J=Q:R.route.Component?J=z.createElement(R.route.Component,null):R.route.element?J=R.route.element:J=w,z.createElement(Sp,{match:R,routeContext:{outlet:w,matches:q,isDataRoute:u!=null},children:J})};return u&&(R.route.ErrorBoundary||R.route.errorElement||M===0)?z.createElement(Qm,{location:u.location,revalidation:u.revalidation,component:Y,error:G,children:I(),routeContext:{outlet:null,matches:q,isDataRoute:!0},onError:v}):I()},null)}function Ic(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ep(r){let o=z.useContext(Ql);return Re(o,Ic(r)),o}function zp(r){let o=z.useContext(ms);return Re(o,Ic(r)),o}function Tp(r){let o=z.useContext(Ct);return Re(o,Ic(r)),o}function Pc(r){let o=Tp(r),d=o.matches[o.matches.length-1];return Re(d.route.id,`${r} can only be used on routes that contain a unique "id"`),d.route.id}function Ap(){return Pc("useRouteId")}function Rp(){var u;let r=z.useContext(Fc),o=zp("useRouteError"),d=Pc("useRouteError");return r!==void 0?r:(u=o.errors)==null?void 0:u[d]}function wp(){let{router:r}=Ep("useNavigate"),o=Pc("useNavigate"),d=z.useRef(!1);return Ym(()=>{d.current=!0}),z.useCallback(async(m,g={})=>{qt(d.current,Bm),d.current&&(typeof m=="number"?await r.navigate(m):await r.navigate(m,{fromRouteId:o,...g}))},[r,o])}var Sm={};function Xm(r,o,d){!o&&!Sm[r]&&(Sm[r]=!0,qt(!1,d))}z.memo(Op);function Op({routes:r,manifest:o,future:d,state:u,isStatic:m,onError:g}){return Gm(r,void 0,{manifest:o,state:u,isStatic:m,onError:g})}function Cp({to:r,replace:o,state:d,relative:u}){Re(Xl(),"<Navigate> may be used only in the context of a <Router> component.");let{static:m,navigator:g}=z.useContext(pt);qt(!m,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:j}=z.useContext(Ct),{pathname:T}=xt(),y=Lm(),v=ds(r,Jc(j),T,u==="path");Wc(typeof r=="string"?r:tl(r),g.createHref(v),$c(g),"reject");let w=JSON.stringify(v);return z.useEffect(()=>{y(JSON.parse(w),{replace:o,state:d,relative:u})},[y,w,u,o,d]),null}function Mp(r){return vp(r.context)}function Vt(r){Re(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Dp({basename:r="/",children:o=null,location:d,navigationType:u="POP",navigator:m,static:g=!1,useTransitions:j}){Re(!Xl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let T=r.replace(/^\/*/,"/"),y=z.useMemo(()=>({basename:T,navigator:m,static:g,useTransitions:j,future:{}}),[T,m,g,j]);typeof d=="string"&&(d=Gl(d));let{pathname:v="/",search:w="",hash:R="",state:M=null,key:G="default",mask:Z}=d,Y=z.useMemo(()=>{let Q=ua(v,T);return Q==null?null:{location:{pathname:Q,search:w,hash:R,state:M,key:G,mask:Z},navigationType:u}},[T,v,w,R,M,G,u,Z]);return qt(Y!=null,`<Router basename="${T}"> is not able to match the URL "${v}${w}${R}" because it does not start with the basename, so the <Router> won't render anything.`),Y==null?null:z.createElement(pt.Provider,{value:y},z.createElement(Qn.Provider,{children:o,value:Y}))}function _p({children:r,location:o}){return xp(Zc(r),o)}function Zc(r,o=[]){let d=[];return z.Children.forEach(r,(u,m)=>{if(!z.isValidElement(u))return;let g=[...o,m];if(u.type===z.Fragment){d.push.apply(d,Zc(u.props.children,g));return}Re(u.type===Vt,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Re(!u.props.index||!u.props.children,"An index route cannot have child routes.");let j={id:u.props.id||g.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,middleware:u.props.middleware,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(j.children=Zc(u.props.children,g)),d.push(j)}),d}var us="get",os="application/x-www-form-urlencoded";function hs(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function Up(r){return hs(r)&&r.tagName.toLowerCase()==="button"}function Hp(r){return hs(r)&&r.tagName.toLowerCase()==="form"}function qp(r){return hs(r)&&r.tagName.toLowerCase()==="input"}function Bp(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function Yp(r,o){return r.button===0&&(!o||o==="_self")&&!Bp(r)}var cs=null;function Lp(){if(cs===null)try{new FormData(document.createElement("form"),0),cs=!1}catch{cs=!0}return cs}var Gp=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Xc(r){return r!=null&&!Gp.has(r)?(qt(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${os}"`),null):r}function Qp(r,o){let d,u,m,g,j;if(Hp(r)){let T=r.getAttribute("action");u=T?ua(T,o):null,d=r.getAttribute("method")||us,m=Xc(r.getAttribute("enctype"))||os,g=new FormData(r)}else if(Up(r)||qp(r)&&(r.type==="submit"||r.type==="image")){let T=r.form;if(T==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=r.getAttribute("formaction")||T.getAttribute("action");if(u=y?ua(y,o):null,d=r.getAttribute("formmethod")||T.getAttribute("method")||us,m=Xc(r.getAttribute("formenctype"))||Xc(T.getAttribute("enctype"))||os,g=new FormData(T,r),!Lp()){let{name:v,type:w,value:R}=r;if(w==="image"){let M=v?`${v}.`:"";g.append(`${M}x`,"0"),g.append(`${M}y`,"0")}else v&&g.append(v,R)}}else{if(hs(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');d=us,u=null,m=os,j=r}return g&&m==="text/plain"&&(j=g,g=void 0),{action:u,method:d.toLowerCase(),encType:m,formData:g,body:j}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function eu(r,o){if(r===!1||r===null||typeof r>"u")throw new Error(o)}function Vm(r,o,d,u){let m=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return d?m.pathname.endsWith("/")?m.pathname=`${m.pathname}_.${u}`:m.pathname=`${m.pathname}.${u}`:m.pathname==="/"?m.pathname=`_root.${u}`:o&&ua(m.pathname,o)==="/"?m.pathname=`${Ll(o)}/_root.${u}`:m.pathname=`${Ll(m.pathname)}.${u}`,m}async function Xp(r,o){if(r.id in o)return o[r.id];try{let d=await import(r.module);return o[r.id]=d,d}catch(d){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(d),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Vp(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function Zp(r,o,d){let u=await Promise.all(r.map(async m=>{let g=o.routes[m.route.id];if(g){let j=await Xp(g,d);return j.links?j.links():[]}return[]}));return $p(u.flat(1).filter(Vp).filter(m=>m.rel==="stylesheet"||m.rel==="preload").map(m=>m.rel==="stylesheet"?{...m,rel:"prefetch",as:"style"}:{...m,rel:"prefetch"}))}function Nm(r,o,d,u,m,g){let j=(y,v)=>d[v]?y.route.id!==d[v].route.id:!0,T=(y,v)=>{var w;return d[v].pathname!==y.pathname||((w=d[v].route.path)==null?void 0:w.endsWith("*"))&&d[v].params["*"]!==y.params["*"]};return g==="assets"?o.filter((y,v)=>j(y,v)||T(y,v)):g==="data"?o.filter((y,v)=>{var R;let w=u.routes[y.route.id];if(!w||!w.hasLoader)return!1;if(j(y,v)||T(y,v))return!0;if(y.route.shouldRevalidate){let M=y.route.shouldRevalidate({currentUrl:new URL(m.pathname+m.search+m.hash,window.origin),currentParams:((R=d[0])==null?void 0:R.params)||{},nextUrl:new URL(r,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof M=="boolean")return M}return!0}):[]}function kp(r,o,{includeHydrateFallback:d}={}){return Kp(r.map(u=>{let m=o.routes[u.route.id];if(!m)return[];let g=[m.module];return m.clientActionModule&&(g=g.concat(m.clientActionModule)),m.clientLoaderModule&&(g=g.concat(m.clientLoaderModule)),d&&m.hydrateFallbackModule&&(g=g.concat(m.hydrateFallbackModule)),m.imports&&(g=g.concat(m.imports)),g}).flat(1))}function Kp(r){return[...new Set(r)]}function Jp(r){let o={},d=Object.keys(r).sort();for(let u of d)o[u]=r[u];return o}function $p(r,o){let d=new Set;return new Set(o),r.reduce((u,m)=>{let g=JSON.stringify(Jp(m));return d.has(g)||(d.add(g),u.push({key:g,link:m})),u},[])}function tu(){let r=z.useContext(Ql);return eu(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function Wp(){let r=z.useContext(ms);return eu(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var au=z.createContext(void 0);au.displayName="FrameworkContext";function gs(){let r=z.useContext(au);return eu(r,"You must render this element inside a <HydratedRouter> element"),r}function Fp(r,o){let d=z.useContext(au),[u,m]=z.useState(!1),[g,j]=z.useState(!1),{onFocus:T,onBlur:y,onMouseEnter:v,onMouseLeave:w,onTouchStart:R}=o,M=z.useRef(null);z.useEffect(()=>{if(r==="render"&&j(!0),r==="viewport"){let Y=q=>{q.forEach(I=>{j(I.isIntersecting)})},Q=new IntersectionObserver(Y,{threshold:.5});return M.current&&Q.observe(M.current),()=>{Q.disconnect()}}},[r]),z.useEffect(()=>{if(u){let Y=setTimeout(()=>{j(!0)},100);return()=>{clearTimeout(Y)}}},[u]);let G=()=>{m(!0)},Z=()=>{m(!1),j(!1)};return d?r!=="intent"?[g,M,{}]:[g,M,{onFocus:Gn(T,G),onBlur:Gn(y,Z),onMouseEnter:Gn(v,G),onMouseLeave:Gn(w,Z),onTouchStart:Gn(R,G)}]:[!1,M,{}]}function Gn(r,o){return d=>{r&&r(d),d.defaultPrevented||o(d)}}function Ip({page:r,...o}){let d=sp(),{nonce:u}=gs(),{router:m}=tu(),g=z.useMemo(()=>Tm(m.routes,r,m.basename),[m.routes,r,m.basename]);return g?(o.nonce==null&&u&&(o={...o,nonce:u}),d?z.createElement(ex,{page:r,matches:g,...o}):z.createElement(tx,{page:r,matches:g,...o})):null}function Pp(r){let{manifest:o,routeModules:d}=gs(),[u,m]=z.useState([]);return z.useEffect(()=>{let g=!1;return Zp(r,o,d).then(j=>{g||m(j)}),()=>{g=!0}},[r,o,d]),u}function ex({page:r,matches:o,...d}){let u=xt(),{future:m}=gs(),{basename:g}=tu(),j=z.useMemo(()=>{if(r===u.pathname+u.search+u.hash)return[];let T=Vm(r,g,m.v8_trailingSlashAwareDataRequests,"rsc"),y=!1,v=[];for(let w of o)typeof w.route.shouldRevalidate=="function"?y=!0:v.push(w.route.id);return y&&v.length>0&&T.searchParams.set("_routes",v.join(",")),[T.pathname+T.search]},[g,m.v8_trailingSlashAwareDataRequests,r,u,o]);return z.createElement(z.Fragment,null,j.map(T=>z.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...d})))}function tx({page:r,matches:o,...d}){let u=xt(),{future:m,manifest:g,routeModules:j}=gs(),{basename:T}=tu(),{loaderData:y,matches:v}=Wp(),w=z.useMemo(()=>Nm(r,o,v,g,u,"data"),[r,o,v,g,u]),R=z.useMemo(()=>Nm(r,o,v,g,u,"assets"),[r,o,v,g,u]),M=z.useMemo(()=>{if(r===u.pathname+u.search+u.hash)return[];let Y=new Set,Q=!1;if(o.forEach(I=>{var ve;let J=g.routes[I.route.id];!J||!J.hasLoader||(!w.some(me=>me.route.id===I.route.id)&&I.route.id in y&&((ve=j[I.route.id])!=null&&ve.shouldRevalidate)||J.hasClientLoader?Q=!0:Y.add(I.route.id))}),Y.size===0)return[];let q=Vm(r,T,m.v8_trailingSlashAwareDataRequests,"data");return Q&&Y.size>0&&q.searchParams.set("_routes",o.filter(I=>Y.has(I.route.id)).map(I=>I.route.id).join(",")),[q.pathname+q.search]},[T,m.v8_trailingSlashAwareDataRequests,y,u,g,w,o,r,j]),G=z.useMemo(()=>kp(R,g),[R,g]),Z=Pp(R);return z.createElement(z.Fragment,null,M.map(Y=>z.createElement("link",{key:Y,rel:"prefetch",as:"fetch",href:Y,...d})),G.map(Y=>z.createElement("link",{key:Y,rel:"modulepreload",href:Y,...d})),Z.map(({key:Y,link:Q})=>z.createElement("link",{key:Y,nonce:d.nonce,...Q,crossOrigin:Q.crossOrigin??d.crossOrigin})))}function ax(...r){return o=>{r.forEach(d=>{typeof d=="function"?d(o):d!=null&&(d.current=o)})}}var lx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{lx&&(window.__reactRouterVersion="7.18.3")}catch{}function nx({basename:r,children:o,useTransitions:d,window:u}){let m=z.useRef();m.current==null&&(m.current=Cv({window:u,v5Compat:!0}));let g=m.current,[j,T]=z.useState({action:g.action,location:g.location}),y=z.useCallback(v=>{d===!1?T(v):z.startTransition(()=>T(v))},[d]);return z.useLayoutEffect(()=>g.listen(y),[g,y]),z.createElement(Dp,{basename:r,children:o,location:j.location,navigationType:j.action,navigator:g,useTransitions:d})}var ce=z.forwardRef(function({onClick:o,discover:d="render",prefetch:u="none",relative:m,reloadDocument:g,replace:j,mask:T,state:y,target:v,to:w,preventScrollReset:R,viewTransition:M,defaultShouldRevalidate:G,...Z},Y){let{basename:Q,navigator:q,useTransitions:I}=z.useContext(pt),J=typeof w=="string"&&Kc.test(w),ve=Dm(w,Q);w=ve.to;let me=mp(w,{relative:m}),Ee=xt(),W=null;if(T){let Ue=ds(T,[],Ee.mask?Ee.mask.pathname:"/",!0);Q!=="/"&&(Ue.pathname=Ue.pathname==="/"?Q:Ht([Q,Ue.pathname])),W=q.createHref(Ue)}let[Ce,$e,Bt]=Fp(u,Z),yt=rx(w,{replace:j,mask:T,state:y,target:v,preventScrollReset:R,relative:m,viewTransition:M,defaultShouldRevalidate:G,useTransitions:I});function We(Ue){o&&o(Ue),Ue.defaultPrevented||yt(Ue)}let Yt=!(ve.isExternal||g),bt=z.createElement("a",{...Z,...Bt,href:(Yt?W:void 0)||ve.absoluteURL||me,onClick:Yt?We:o,ref:ax(Y,$e),target:v,"data-discover":!J&&d==="render"?"true":void 0});return Ce&&!J?z.createElement(z.Fragment,null,bt,z.createElement(Ip,{page:me})):bt});ce.displayName="Link";var el=z.forwardRef(function({"aria-current":o="page",caseSensitive:d=!1,className:u="",end:m=!1,style:g,to:j,viewTransition:T,children:y,...v},w){let R=Xn(j,{relative:v.relative}),M=xt(),G=z.useContext(ms),{navigator:Z,basename:Y}=z.useContext(pt),Q=G!=null&&dx(R)&&T===!0,q=Z.encodeLocation?Z.encodeLocation(R).pathname:R.pathname,I=M.pathname,J=G&&G.navigation&&G.navigation.location?G.navigation.location.pathname:null;d||(I=I.toLowerCase(),J=J?J.toLowerCase():null,q=q.toLowerCase()),J&&Y&&(J=ua(J,Y)||J);const ve=q!=="/"&&q.endsWith("/")?q.length-1:q.length;let me=I===q||!m&&I.startsWith(q)&&I.charAt(ve)==="/",Ee=J!=null&&(J===q||!m&&J.startsWith(q)&&J.charAt(q.length)==="/"),W={isActive:me,isPending:Ee,isTransitioning:Q},Ce=me?o:void 0,$e;typeof u=="function"?$e=u(W):$e=[u,me?"active":null,Ee?"pending":null,Q?"transitioning":null].filter(Boolean).join(" ");let Bt=typeof g=="function"?g(W):g;return z.createElement(ce,{...v,"aria-current":Ce,className:$e,ref:w,style:Bt,to:j,viewTransition:T},typeof y=="function"?y(W):y)});el.displayName="NavLink";var ix=z.forwardRef(({discover:r="render",fetcherKey:o,navigate:d,reloadDocument:u,replace:m,state:g,method:j=us,action:T,onSubmit:y,relative:v,preventScrollReset:w,viewTransition:R,defaultShouldRevalidate:M,...G},Z)=>{let{useTransitions:Y}=z.useContext(pt),Q=ox(),q=fx(T,{relative:v}),I=j.toLowerCase()==="get"?"get":"post",J=typeof T=="string"&&Kc.test(T),ve=me=>{if(y&&y(me),me.defaultPrevented)return;me.preventDefault();let Ee=me.nativeEvent.submitter,W=(Ee==null?void 0:Ee.getAttribute("formmethod"))||j,Ce=()=>Q(Ee||me.currentTarget,{fetcherKey:o,method:W,navigate:d,replace:m,state:g,relative:v,preventScrollReset:w,viewTransition:R,defaultShouldRevalidate:M});Y&&d!==!1?z.startTransition(()=>Ce()):Ce()};return z.createElement("form",{ref:Z,method:I,action:q,onSubmit:u?y:ve,...G,"data-discover":!J&&r==="render"?"true":void 0})});ix.displayName="Form";function sx(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Zm(r){let o=z.useContext(Ql);return Re(o,sx(r)),o}function rx(r,{target:o,replace:d,mask:u,state:m,preventScrollReset:g,relative:j,viewTransition:T,defaultShouldRevalidate:y,useTransitions:v}={}){let w=Lm(),R=xt(),M=Xn(r,{relative:j});return z.useCallback(G=>{if(Yp(G,o)){G.preventDefault();let Z=d!==void 0?d:tl(R)===tl(M),Y=()=>w(r,{replace:Z,mask:u,state:m,preventScrollReset:g,relative:j,viewTransition:T,defaultShouldRevalidate:y});v?z.startTransition(()=>Y()):Y()}},[R,w,M,d,u,m,o,r,g,j,T,y,v])}var cx=0,ux=()=>`__${String(++cx)}__`;function ox(){let{router:r}=Zm("useSubmit"),{basename:o}=z.useContext(pt),d=Ap(),u=r.fetch,m=r.navigate;return z.useCallback(async(g,j={})=>{let{action:T,method:y,encType:v,formData:w,body:R}=Qp(g,o);if(j.navigate===!1){let M=j.fetcherKey||ux();await u(M,d,j.action||T,{defaultShouldRevalidate:j.defaultShouldRevalidate,preventScrollReset:j.preventScrollReset,formData:w,body:R,formMethod:j.method||y,formEncType:j.encType||v,flushSync:j.flushSync})}else await m(j.action||T,{defaultShouldRevalidate:j.defaultShouldRevalidate,preventScrollReset:j.preventScrollReset,formData:w,body:R,formMethod:j.method||y,formEncType:j.encType||v,replace:j.replace,state:j.state,fromRouteId:d,flushSync:j.flushSync,viewTransition:j.viewTransition})},[u,m,o,d])}function fx(r,{relative:o}={}){let{basename:d}=z.useContext(pt),u=z.useContext(Ct);Re(u,"useFormAction must be used inside a RouteContext");let[m]=u.matches.slice(-1),g={...Xn(r||".",{relative:o})},j=xt();if(r==null){g.search=j.search;let T=new URLSearchParams(g.search),y=T.getAll("index");if(y.some(w=>w==="")){T.delete("index"),y.filter(R=>R).forEach(R=>T.append("index",R));let w=T.toString();g.search=w?`?${w}`:""}}return(!r||r===".")&&m.route.index&&(g.search=g.search?g.search.replace(/^\?/,"?index&"):"?index"),d!=="/"&&(g.pathname=g.pathname==="/"?d:Ht([d,g.pathname])),tl(g)}function dx(r,{relative:o}={}){let d=z.useContext(Hm);Re(d!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=Zm("useViewTransitionState"),m=Xn(r,{relative:o});if(!d.isTransitioning)return!1;let g=ua(d.currentLocation.pathname,u)||d.currentLocation.pathname,j=ua(d.nextLocation.pathname,u)||d.nextLocation.pathname;return fs(m.pathname,j)!=null||fs(m.pathname,g)!=null}const Ut=[{id:"cleaning-items",slug:"cleaning-items",title:"Cleaning Items",shortDesc:"Reliable cleaning products for commercial, institutional, hospitality, and everyday environments.",icon:"bi-droplet-half",image:"/images/sectors/cleaning.jpg",intro:"We provide a wide range of cleaning items designed to support hygiene, cleanliness, and effective maintenance across commercial, institutional, hospitality, and everyday environments.",focus:"Our focus is on providing reliable and practical cleaning products that meet the needs of businesses while maintaining quality and value.",listTitle:"We serve",list:["Offices","Hotels","Restaurants","Hospitals & institutions","Commercial facilities","Residential and general-use requirements"]},{id:"chemical-business",slug:"chemical-business",title:"Chemical Business",shortDesc:"Dependable chemical products for commercial, industrial, and maintenance requirements.",icon:"bi-beaker",image:"/images/sectors/chemical.jpg",intro:"Our chemical business focuses on supplying a range of chemical products for commercial and industrial requirements. We work to provide dependable products sourced with attention to quality, consistency, and suitability for their intended applications.",focus:"Whether for cleaning, maintenance, operational, or other business requirements, our goal is to provide customers with reliable chemical solutions and professional service.",listTitle:"Our focus includes",list:["Commercial chemicals","Cleaning chemicals","Maintenance-related chemical products","Industrial requirements","Business-specific chemical solutions"]},{id:"it-services",slug:"it-services",title:"IT Services",shortDesc:"Practical technology solutions focused on reliability, efficiency, and smooth operations.",icon:"bi-cpu-fill",image:"/images/sectors/it-services.jpg",intro:"Technology plays a vital role in modern business, and ARSOS provides IT services designed to help organizations operate more effectively in a digital environment.",focus:"We support businesses with practical technology solutions focused on reliability, efficiency, and smooth day-to-day operations. Our approach is to understand each client's requirements and provide solutions that are practical, scalable, and aligned with their business objectives.",listTitle:"Our IT services",list:["IT support and solutions","Technology consulting"]},{id:"hotel-supplies",slug:"hotel-supplies",title:"Hotel Supplies",shortDesc:"Hospitality supplies that support the daily operational needs of hotels and restaurants.",icon:"bi-building-fill-check",image:"/images/sectors/hotel-supplies.jpg",intro:"We provide hotel supplies that support the daily operational needs of hotels, guest houses, restaurants, and hospitality businesses.",focus:"Our hospitality supply solutions focus on quality, functionality, consistency, and timely service, helping hospitality businesses maintain professional standards and deliver better experiences to their guests.",listTitle:"Our hotel supply range can include",list:["Guest-room supplies","Housekeeping supplies","Cleaning and hygiene products","Hospitality essentials","Operational supplies","Customized hotel requirements"]}],Ne={tagline:"Building Business Solutions. Delivering Quality.",email:"info@arsos.com",phone:"+966 53 063 6274",address:"Kingdom of Saudi Arabia",about:"ARSOS is a diversified business company providing reliable products and professional services across Cleaning Items, Chemical Business, IT Services, and Hotel Supplies. We are committed to delivering quality, value, and dependable solutions that help businesses operate efficiently and grow with confidence.",aboutExtended:"At ARSOS, we bring together quality products and practical business solutions under one trusted name. Our diverse portfolio enables us to serve businesses across multiple sectors with dependable products, professional service, and customer-focused solutions. From essential cleaning products and chemical solutions to IT services and hotel supplies, we aim to make procurement and business support simpler, more reliable, and more efficient.",mission:"Our mission is to become a trusted business partner by delivering quality products, reliable services, competitive value, and customer-focused solutions. We strive to understand our clients' needs, maintain high standards across our operations, and build long-term relationships based on trust and mutual growth.",vision:"To establish ARSOS as a trusted and recognized business partner known for quality, reliability, professionalism, and excellence across our diverse areas of operation. We aim to continuously expand our capabilities, embrace innovation, and create long-term value for our customers and business partners locally and internationally.",commitment:"To provide dependable products, professional services, and lasting value to every customer we serve."},km=[{icon:"bi-grid-3x3-gap-fill",title:"Diverse Portfolio",description:"Serving multiple industries under one trusted brand."},{icon:"bi-patch-check-fill",title:"Quality Assurance",description:"Products and services sourced from reliable suppliers."},{icon:"bi-people-fill",title:"Customer Focused",description:"Solutions tailored to meet client needs."},{icon:"bi-tags-fill",title:"Competitive Pricing",description:"Affordable rates without compromising on quality."},{icon:"bi-globe2",title:"Global Standards",description:"Commitment to professionalism and international best practices."}],mx=()=>{const[r,o]=z.useState(!1),[d,u]=z.useState(!1),[m,g]=z.useState(!1),j=xt();return z.useEffect(()=>{const T=()=>o(window.scrollY>50);return window.addEventListener("scroll",T),()=>window.removeEventListener("scroll",T)},[]),z.useEffect(()=>{u(!1),g(!1)},[j.pathname]),z.useEffect(()=>(document.body.style.overflow=d?"hidden":"",()=>{document.body.style.overflow=""}),[d]),s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"arsos-topbar d-none d-lg-block",children:s.jsx("div",{className:"container",children:s.jsxs("div",{className:"d-flex justify-content-between align-items-center py-2",children:[s.jsxs("div",{className:"d-flex gap-4 small",children:[s.jsxs("span",{children:[s.jsx("i",{className:"bi bi-envelope-fill me-2 text-gold"}),Ne.email]}),s.jsxs("span",{children:[s.jsx("i",{className:"bi bi-telephone-fill me-2 text-gold"}),Ne.phone]})]}),s.jsx("div",{className:"small text-white-50",children:s.jsx("i",{className:"bi bi-clock-fill me-2 text-gold"})})]})})}),s.jsx("nav",{className:`arsos-navbar ${r?"scrolled":""}`,children:s.jsx("div",{className:"container",children:s.jsxs("div",{className:"d-flex justify-content-between align-items-center py-2",children:[s.jsxs(ce,{to:"/",className:"arsos-logo",children:[s.jsx("span",{className:"logo-mark",children:"A"}),s.jsxs("span",{className:"logo-text",children:[s.jsx("strong",{children:"ARSOS"}),s.jsx("small",{children:"Trading"})]})]}),s.jsxs("ul",{className:"arsos-nav d-none d-lg-flex align-items-center mb-0",children:[s.jsx("li",{children:s.jsx(el,{to:"/",end:!0,children:"Home"})}),s.jsx("li",{children:s.jsx(el,{to:"/about",children:"About"})}),s.jsxs("li",{className:"nav-dropdown",onMouseEnter:()=>g(!0),onMouseLeave:()=>g(!1),children:[s.jsxs(el,{to:"/sectors",className:"d-inline-flex align-items-center",children:["Sectors ",s.jsx("i",{className:"bi bi-chevron-down ms-1 small"})]}),s.jsx("ul",{className:`dropdown-menu-arsos ${m?"show":""}`,children:Ut.map(T=>s.jsx("li",{children:s.jsxs(ce,{to:`/sectors/${T.slug}`,children:[s.jsx("i",{className:`bi ${T.icon} text-gold me-2`}),T.title]})},T.slug))})]}),s.jsx("li",{children:s.jsx(el,{to:"/why-choose-us",children:"Why Us"})}),s.jsx("li",{children:s.jsx(el,{to:"/mission-vision",children:"Mission"})}),s.jsx("li",{children:s.jsx(el,{to:"/contact",children:"Contact"})})]}),s.jsxs("div",{className:"d-flex align-items-center gap-3",children:[s.jsxs(ce,{to:"/contact",className:"btn-arsos btn-arsos-primary d-none d-lg-inline-flex",children:["Get a Quote ",s.jsx("i",{className:"bi bi-arrow-right"})]}),s.jsx("button",{className:"mobile-toggle d-lg-none",onClick:()=>u(!d),"aria-label":"Toggle menu",children:s.jsx("i",{className:`bi ${d?"bi-x-lg":"bi-list"}`})})]})]})})}),s.jsxs("div",{className:`mobile-menu ${d?"open":""}`,children:[s.jsxs("ul",{children:[s.jsx("li",{children:s.jsx(ce,{to:"/",children:"Home"})}),s.jsx("li",{children:s.jsx(ce,{to:"/about",children:"About"})}),s.jsxs("li",{className:"mobile-parent",children:[s.jsx("span",{children:"Sectors"}),s.jsx("ul",{children:Ut.map(T=>s.jsx("li",{children:s.jsxs(ce,{to:`/sectors/${T.slug}`,children:[s.jsx("i",{className:`bi ${T.icon} me-2 text-gold`}),T.title]})},T.slug))})]}),s.jsx("li",{children:s.jsx(ce,{to:"/why-choose-us",children:"Why Choose Us"})}),s.jsx("li",{children:s.jsx(ce,{to:"/mission-vision",children:"Mission & Vision"})}),s.jsx("li",{children:s.jsx(ce,{to:"/contact",children:"Contact"})})]}),s.jsxs(ce,{to:"/contact",className:"btn-arsos btn-arsos-primary mt-4",children:["Get a Quote ",s.jsx("i",{className:"bi bi-arrow-right"})]})]}),s.jsx("style",{children:`
        .arsos-topbar {
          background: var(--arsos-navy-dark);
          color: rgba(255,255,255,0.85);
          font-family: 'Montserrat', sans-serif;
        }
        .arsos-topbar a { color: rgba(255,255,255,0.85); }
        .arsos-topbar a:hover { color: var(--arsos-gold); }

        .arsos-navbar {
          background: rgba(255,255,255,0.98);
          backdrop-filter: blur(10px);
          box-shadow: var(--arsos-shadow-sm);
          transition: var(--arsos-transition);
          position: sticky;
          top: 0;
          z-index: 1000;
        }
        .arsos-navbar.scrolled { box-shadow: var(--arsos-shadow); }

        .arsos-logo { display: flex; align-items: center; gap: 12px; }
        .logo-mark {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--arsos-navy), var(--arsos-navy-light));
          color: var(--arsos-gold);
          font-family: 'Montserrat', sans-serif;
          font-weight: 900;
          font-size: 1.5rem;
          border-radius: 8px;
          box-shadow: 0 4px 15px rgba(11,37,69,0.25);
        }
        .logo-text { display: flex; flex-direction: column; line-height: 1; }
        .logo-text strong {
          font-family: 'Montserrat', sans-serif;
          font-weight: 800;
          font-size: 1.35rem;
          color: var(--arsos-navy);
          letter-spacing: 3px;
        }
        .logo-text small {
          font-size: 0.7rem;
          letter-spacing: 4px;
          color: var(--arsos-gold);
          font-weight: 600;
          text-transform: uppercase;
          margin-top: 4px;
        }

        .arsos-nav { list-style: none; gap: 6px; }
        .arsos-nav > li > a {
          display: inline-block;
          padding: 10px 16px;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: 0.92rem;
          color: var(--arsos-navy);
          position: relative;
          transition: var(--arsos-transition);
        }
        .arsos-nav > li > a::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background: var(--arsos-gold);
          transition: width 0.3s ease;
        }
        .arsos-nav > li > a:hover,
        .arsos-nav > li > a.active { color: var(--arsos-gold); }
        .arsos-nav > li > a:hover::after,
        .arsos-nav > li > a.active::after { width: 60%; }

        .nav-dropdown { position: relative; }
        .dropdown-menu-arsos {
          position: absolute;
          top: 100%;
          left: 0;
          min-width: 250px;
          background: #fff;
          border-radius: 8px;
          box-shadow: var(--arsos-shadow-lg);
          list-style: none;
          padding: 10px 0;
          margin: 0;
          opacity: 0;
          visibility: hidden;
          transform: translateY(10px);
          transition: var(--arsos-transition);
          border-top: 3px solid var(--arsos-gold);
        }
        .dropdown-menu-arsos.show {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
        .dropdown-menu-arsos li a {
          display: flex;
          align-items: center;
          padding: 11px 20px;
          color: var(--arsos-navy);
          font-size: 0.9rem;
          font-weight: 500;
          transition: var(--arsos-transition);
        }
        .dropdown-menu-arsos li a:hover {
          background: var(--arsos-gray);
          color: var(--arsos-gold);
          padding-left: 26px;
        }

        .mobile-toggle {
          background: transparent;
          border: none;
          color: var(--arsos-navy);
          font-size: 1.6rem;
          cursor: pointer;
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          right: -100%;
          width: 320px;
          max-width: 85%;
          height: 100vh;
          background: #fff;
          box-shadow: -10px 0 30px rgba(0,0,0,0.15);
          padding: 90px 25px 30px;
          overflow-y: auto;
          transition: right 0.4s ease;
          z-index: 999;
        }
        .mobile-menu.open { right: 0; }
        .mobile-menu ul { list-style: none; padding: 0; }
        .mobile-menu > ul > li > a,
        .mobile-menu > ul > li > span {
          display: block;
          padding: 14px 0;
          border-bottom: 1px solid var(--arsos-gray-dark);
          color: var(--arsos-navy);
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: 1rem;
        }
        .mobile-menu .mobile-parent > ul {
          padding-left: 15px;
          margin-top: 5px;
        }
        .mobile-menu .mobile-parent > ul > li > a {
          display: block;
          padding: 10px 0;
          color: var(--arsos-text-light);
          font-size: 0.9rem;
        }
        @media (max-width: 991px) {
          .mobile-menu { padding-top: 80px; }
        }
      `})]})},hx=()=>{const r=new Date().getFullYear();return s.jsxs("footer",{className:"arsos-footer",children:[s.jsx("div",{className:"footer-top",children:s.jsx("div",{className:"container",children:s.jsxs("div",{className:"row g-4",children:[s.jsxs("div",{className:"col-lg-4 col-md-6",children:[s.jsxs("div",{className:"footer-logo",children:[s.jsx("span",{className:"logo-mark",children:"A"}),s.jsxs("div",{className:"logo-text",children:[s.jsx("strong",{children:"ARSOS"}),s.jsx("small",{children:"Trading"})]})]}),s.jsx("p",{className:"footer-text",children:"A diversified business company providing reliable products and professional services across Cleaning Items, Chemical Business, IT Services, and Hotel Supplies."})]}),s.jsxs("div",{className:"col-lg-2 col-md-6 col-6",children:[s.jsx("h5",{className:"footer-heading",children:"Quick Links"}),s.jsxs("ul",{className:"footer-list",children:[s.jsx("li",{children:s.jsx(ce,{to:"/",children:"Home"})}),s.jsx("li",{children:s.jsx(ce,{to:"/about",children:"About Us"})}),s.jsx("li",{children:s.jsx(ce,{to:"/why-choose-us",children:"Why Choose Us"})}),s.jsx("li",{children:s.jsx(ce,{to:"/mission-vision",children:"Mission & Vision"})}),s.jsx("li",{children:s.jsx(ce,{to:"/contact",children:"Contact"})})]})]}),s.jsxs("div",{className:"col-lg-3 col-md-6 col-6",children:[s.jsx("h5",{className:"footer-heading",children:"Our Sectors"}),s.jsx("ul",{className:"footer-list",children:Ut.map(o=>s.jsx("li",{children:s.jsx(ce,{to:`/sectors/${o.slug}`,children:o.title})},o.slug))})]}),s.jsxs("div",{className:"col-lg-3 col-md-6",children:[s.jsx("h5",{className:"footer-heading",children:"Get in Touch"}),s.jsxs("ul",{className:"footer-contact",children:[s.jsxs("li",{children:[s.jsx("i",{className:"bi bi-geo-alt-fill"}),s.jsx("span",{children:Ne.address})]}),s.jsxs("li",{children:[s.jsx("i",{className:"bi bi-telephone-fill"}),s.jsx("span",{children:Ne.phone})]}),s.jsxs("li",{children:[s.jsx("i",{className:"bi bi-envelope-fill"}),s.jsx("span",{children:Ne.email})]})]}),s.jsxs(ce,{to:"/contact",className:"btn-arsos btn-arsos-primary mt-3",children:["Contact Us ",s.jsx("i",{className:"bi bi-arrow-right"})]})]})]})})}),s.jsx("div",{className:"footer-bottom",children:s.jsx("div",{className:"container",children:s.jsxs("div",{className:"d-flex flex-column flex-md-row justify-content-between align-items-center gap-2",children:[s.jsxs("p",{className:"mb-0",children:["© ",r," ",s.jsx("strong",{className:"text-gold",children:"ARSOS Trading"}),". All rights reserved."]}),s.jsx("p",{className:"mb-0 small",children:Ne.tagline})]})})}),s.jsx("style",{children:`
        .arsos-footer {
          background: var(--arsos-navy-dark);
          color: rgba(255,255,255,0.75);
        }
        .footer-top { padding: 80px 0 50px; }
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }
        .footer-logo .logo-mark {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--arsos-gold), var(--arsos-gold-dark));
          color: var(--arsos-navy);
          font-family: 'Montserrat', sans-serif;
          font-weight: 900;
          font-size: 1.5rem;
          border-radius: 8px;
        }
        .footer-logo .logo-text strong {
          display: block;
          font-family: 'Montserrat', sans-serif;
          font-weight: 800;
          font-size: 1.35rem;
          color: #fff;
          letter-spacing: 3px;
          line-height: 1;
        }
        .footer-logo .logo-text small {
          font-size: 0.7rem;
          letter-spacing: 4px;
          color: var(--arsos-gold);
          font-weight: 600;
          text-transform: uppercase;
        }
        .footer-text { font-size: 0.92rem; line-height: 1.8; }
        .footer-social { display: flex; gap: 10px; margin-top: 20px; }
        .footer-social a {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.08);
          border-radius: 50%;
          color: #fff;
          transition: var(--arsos-transition);
        }
        .footer-social a:hover {
          background: var(--arsos-gold);
          color: var(--arsos-navy);
          transform: translateY(-4px);
        }
        .footer-heading {
          color: #fff;
          font-size: 1.05rem;
          margin-bottom: 25px;
          position: relative;
          padding-bottom: 12px;
        }
        .footer-heading::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 40px;
          height: 3px;
          background: var(--arsos-gold);
          border-radius: 3px;
        }
        .footer-list, .footer-contact { list-style: none; padding: 0; }
        .footer-list li, .footer-contact li {
          margin-bottom: 12px;
          font-size: 0.92rem;
        }
        .footer-list a {
          color: rgba(255,255,255,0.75);
          transition: var(--arsos-transition);
        }
        .footer-list a:hover {
          color: var(--arsos-gold);
          padding-left: 8px;
        }
        .footer-contact li {
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }
        .footer-contact i {
          color: var(--arsos-gold);
          margin-top: 4px;
          font-size: 1rem;
        }
        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.08);
          padding: 22px 0;
          font-size: 0.9rem;
        }
      `})]})},gx=()=>{const{pathname:r}=xt(),[o,d]=z.useState(!1);z.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[r]),z.useEffect(()=>{const m=()=>d(window.scrollY>400);return window.addEventListener("scroll",m),()=>window.removeEventListener("scroll",m)},[]);const u=()=>{window.scrollTo({top:0,behavior:"smooth"})};return s.jsxs("button",{className:`scroll-top-btn ${o?"show":""}`,onClick:u,"aria-label":"Scroll to top",children:[s.jsx("i",{className:"bi bi-arrow-up"}),s.jsx("style",{children:`
        .scroll-top-btn {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: none;
          background: var(--arsos-gold);
          color: var(--arsos-navy);
          font-size: 1.3rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 30px rgba(201,169,97,0.4);
          opacity: 0;
          visibility: hidden;
          transform: translateY(20px);
          transition: all 0.4s ease;
          z-index: 998;
        }
        .scroll-top-btn.show {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
        .scroll-top-btn:hover {
          background: var(--arsos-navy);
          color: var(--arsos-gold);
          transform: translateY(-5px);
        }
      `})]})},vx=()=>s.jsxs(s.Fragment,{children:[s.jsx(mx,{}),s.jsx("main",{children:s.jsx(Mp,{})}),s.jsx(hx,{}),s.jsx(gx,{})]}),px=()=>{const[r,o]=z.useState(!1);z.useEffect(()=>{o(!0)},[]);const d=[{icon:"bi-droplet-half",label:"Cleaning Items",count:"100+ Products"},{icon:"bi-beaker",label:"Chemical Business",count:"ISO Standard"},{icon:"bi-cpu-fill",label:"IT Services",count:"Managed Tech"},{icon:"bi-building-fill-check",label:"Hotel Supplies",count:"B2B Hospitality"}];return s.jsxs("section",{className:"hero-section",children:[s.jsx("div",{className:"hero-bg"}),s.jsx("div",{className:"hero-shape shape-1"}),s.jsx("div",{className:"hero-shape shape-2"}),s.jsx("div",{className:"container position-relative py-5",children:s.jsxs("div",{className:"row align-items-center g-5 min-vh-80",children:[s.jsx("div",{className:"col-lg-7",children:s.jsxs("div",{className:`hero-content ${r?"loaded":""}`,children:[s.jsxs("span",{className:"hero-badge",children:[s.jsx("i",{className:"bi bi-shield-check text-gold me-1"}),"Your Premier Multi-Sector Business Partner"]}),s.jsxs("h1",{className:"hero-title",children:["Building ",s.jsx("span",{className:"text-gold",children:"Business Solutions."}),s.jsx("br",{}),"Delivering Uncompromised Quality."]}),s.jsx("p",{className:"hero-description",children:"ARSOS Trading delivers high-grade commercial supplies, industrial chemicals, scalable IT services, and premium hospitality items tailored to keep your business running seamlessly."}),s.jsxs("div",{className:"hero-buttons",children:[s.jsxs(ce,{to:"/about",className:"btn-arsos btn-arsos-primary",children:["Discover ARSOS ",s.jsx("i",{className:"bi bi-arrow-right"})]}),s.jsx(ce,{to:"/sectors",className:"btn-arsos btn-arsos-outline",children:"Explore Sectors"}),s.jsxs(ce,{to:"/contact",className:"btn-arsos btn-arsos-gold-outline",children:["Get Fast Quote ",s.jsx("i",{className:"bi bi-lightning-charge-fill"})]})]}),s.jsx("div",{className:"hero-highlights",children:d.map(u=>s.jsxs("div",{className:"hero-highlight",children:[s.jsx("i",{className:`bi ${u.icon}`}),s.jsxs("div",{children:[s.jsx("strong",{children:u.label}),s.jsx("small",{children:u.count})]})]},u.label))})]})}),s.jsx("div",{className:"col-lg-5",children:s.jsxs("div",{className:"hero-visual-card",children:[s.jsxs("div",{className:"visual-header",children:[s.jsxs("div",{className:"visual-logo",children:[s.jsx("span",{children:"A"})," ARSOS TRADING"]}),s.jsxs("span",{className:"status-pill",children:[s.jsx("span",{className:"dot"})," Trusted B2B Supplier"]})]}),s.jsxs("div",{className:"sector-grid-preview",children:[s.jsxs(ce,{to:"/sectors/cleaning-items",className:"sector-preview-item",children:[s.jsx("div",{className:"preview-icon",children:s.jsx("i",{className:"bi bi-droplet-half"})}),s.jsxs("div",{children:[s.jsx("h4",{children:"Cleaning Items"}),s.jsx("p",{children:"Commercial & hygiene supplies"})]}),s.jsx("i",{className:"bi bi-chevron-right arrow"})]}),s.jsxs(ce,{to:"/sectors/chemical-business",className:"sector-preview-item",children:[s.jsx("div",{className:"preview-icon",children:s.jsx("i",{className:"bi bi-beaker"})}),s.jsxs("div",{children:[s.jsx("h4",{children:"Chemical Business"}),s.jsx("p",{children:"Industrial & specialized solutions"})]}),s.jsx("i",{className:"bi bi-chevron-right arrow"})]}),s.jsxs(ce,{to:"/sectors/it-services",className:"sector-preview-item",children:[s.jsx("div",{className:"preview-icon",children:s.jsx("i",{className:"bi bi-cpu-fill"})}),s.jsxs("div",{children:[s.jsx("h4",{children:"IT Services"}),s.jsx("p",{children:"Enterprise support & tech solutions"})]}),s.jsx("i",{className:"bi bi-chevron-right arrow"})]}),s.jsxs(ce,{to:"/sectors/hotel-supplies",className:"sector-preview-item",children:[s.jsx("div",{className:"preview-icon",children:s.jsx("i",{className:"bi bi-building-fill-check"})}),s.jsxs("div",{children:[s.jsx("h4",{children:"Hotel Supplies"}),s.jsx("p",{children:"Hospitality & housekeeping essentials"})]}),s.jsx("i",{className:"bi bi-chevron-right arrow"})]})]}),s.jsxs("div",{className:"visual-footer d-flex justify-content-between align-items-center",children:[s.jsxs("div",{className:"d-flex align-items-center gap-2",children:[s.jsx("i",{className:"bi bi-headset text-gold fs-4"}),s.jsxs("div",{children:[s.jsx("small",{className:"d-block text-white-50",children:"Fast Procurement Support"}),s.jsx("strong",{className:"text-white",children:"Direct B2B Fulfillment"})]})]}),s.jsxs(ce,{to:"/contact",className:"btn-quote-sm",children:["Quote ",s.jsx("i",{className:"bi bi-arrow-up-right"})]})]})]})})]})}),s.jsx("style",{children:`
        .hero-section {
          position: relative;
          background: linear-gradient(135deg, var(--arsos-navy-dark) 0%, var(--arsos-navy) 45%, var(--arsos-navy-light) 100%);
          overflow: hidden;
          padding: 60px 0 80px;
        }
        .min-vh-80 { min-height: 80vh; }
        .hero-bg {
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(circle at 15% 25%, rgba(201,169,97,0.18) 0%, transparent 45%),
            radial-gradient(circle at 85% 75%, rgba(201,169,97,0.12) 0%, transparent 45%);
        }
        .hero-shape {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.35;
        }
        .shape-1 {
          width: 400px;
          height: 400px;
          background: var(--arsos-gold);
          top: -100px;
          right: -100px;
          animation: float 8s ease-in-out infinite;
        }
        .shape-2 {
          width: 300px;
          height: 300px;
          background: var(--arsos-navy-light);
          bottom: -80px;
          left: -80px;
          animation: float 10s ease-in-out infinite reverse;
        }
        .hero-content {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 8px 20px;
          background: rgba(201,169,97,0.15);
          border: 1px solid rgba(201,169,97,0.35);
          color: var(--arsos-gold);
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: 0.85rem;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          border-radius: 30px;
          margin-bottom: 25px;
        }
        .hero-title {
          color: #fff;
          font-size: clamp(2.2rem, 4.5vw, 3.6rem);
          font-weight: 900;
          line-height: 1.15;
          margin-bottom: 25px;
        }
        .hero-title .text-gold { color: var(--arsos-gold); }
        .hero-description {
          color: rgba(255,255,255,0.85);
          font-size: 1.08rem;
          line-height: 1.85;
          max-width: 620px;
          margin-bottom: 35px;
        }
        .hero-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-bottom: 40px;
        }
        .btn-arsos-gold-outline {
          background: rgba(201,169,97,0.1);
          color: var(--arsos-gold);
          border-color: var(--arsos-gold);
        }
        .btn-arsos-gold-outline:hover {
          background: var(--arsos-gold);
          color: var(--arsos-navy);
          transform: translateY(-3px);
        }

        .hero-highlights {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }
        @media (min-width: 768px) {
          .hero-highlights { grid-template-columns: repeat(4, 1fr); }
        }
        .hero-highlight {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 14px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 10px;
          color: #fff;
          transition: var(--arsos-transition);
        }
        .hero-highlight:hover {
          background: rgba(201,169,97,0.18);
          border-color: var(--arsos-gold);
          transform: translateY(-3px);
        }
        .hero-highlight i { color: var(--arsos-gold); font-size: 1.3rem; }
        .hero-highlight strong { display: block; font-size: 0.82rem; font-weight: 700; line-height: 1.2; }
        .hero-highlight small { color: rgba(255,255,255,0.7); font-size: 0.72rem; }

        /* Visual Card */
        .hero-visual-card {
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 20px;
          padding: 24px;
          box-shadow: 0 30px 60px rgba(0,0,0,0.35);
          position: relative;
        }
        .visual-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 18px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          margin-bottom: 20px;
        }
        .visual-logo {
          font-family: 'Montserrat', sans-serif;
          font-weight: 800;
          font-size: 0.95rem;
          letter-spacing: 2px;
          color: #fff;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .visual-logo span {
          width: 28px;
          height: 28px;
          background: var(--arsos-gold);
          color: var(--arsos-navy);
          border-radius: 6px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
        }
        .status-pill {
          background: rgba(46, 213, 115, 0.15);
          border: 1px solid rgba(46, 213, 115, 0.3);
          color: #2ed573;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 4px 12px;
          border-radius: 20px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .status-pill .dot {
          width: 6px;
          height: 6px;
          background: #2ed573;
          border-radius: 50%;
          animation: pulseGreen 2s infinite;
        }
        @keyframes pulseGreen {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        .sector-grid-preview {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 20px;
        }
        .sector-preview-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          color: #fff;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .sector-preview-item:hover {
          background: rgba(201,169,97,0.15);
          border-color: var(--arsos-gold);
          transform: translateX(5px);
          color: #fff;
        }
        .preview-icon {
          width: 42px;
          height: 42px;
          background: rgba(201,169,97,0.15);
          border: 1px solid rgba(201,169,97,0.3);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--arsos-gold);
          font-size: 1.2rem;
          flex-shrink: 0;
        }
        .sector-preview-item h4 {
          font-size: 0.95rem;
          font-weight: 700;
          color: #fff;
          margin: 0 0 2px 0;
        }
        .sector-preview-item p {
          font-size: 0.78rem;
          color: rgba(255,255,255,0.7);
          margin: 0;
        }
        .sector-preview-item .arrow {
          margin-left: auto;
          color: var(--arsos-gold);
          font-size: 0.9rem;
          transition: transform 0.3s ease;
        }
        .sector-preview-item:hover .arrow {
          transform: translateX(4px);
        }

        .visual-footer {
          padding-top: 16px;
          border-top: 1px solid rgba(255,255,255,0.1);
        }
        .btn-quote-sm {
          background: var(--arsos-gold);
          color: var(--arsos-navy);
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 0.8rem;
          padding: 8px 16px;
          border-radius: 6px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: all 0.3s ease;
        }
        .btn-quote-sm:hover {
          background: #fff;
          color: var(--arsos-navy);
        }
      `})]})},Xe=({subtitle:r,title:o,description:d,light:u=!1,center:m=!0})=>s.jsxs("div",{className:`section-title-wrap ${m?"":"text-start"}`,children:[r&&s.jsx("span",{className:"section-subtitle",style:u?{color:"var(--arsos-gold)"}:{},children:r}),s.jsx("h2",{className:"section-title",style:u?{color:"#fff"}:{},children:o}),d&&s.jsx("p",{className:"section-description",style:u?{color:"rgba(255,255,255,0.75)"}:{},children:d})]}),xx=({sector:r,index:o=0})=>s.jsxs("div",{className:"sector-card hover-lift",style:{animationDelay:`${o*.1}s`},children:[s.jsxs("div",{className:"sector-card-image",children:[s.jsx("div",{className:"sector-card-overlay"}),s.jsx("i",{className:`bi ${r.icon} sector-card-icon`})]}),s.jsxs("div",{className:"sector-card-body",children:[s.jsx("h3",{children:r.title}),s.jsx("p",{children:r.shortDesc}),s.jsxs(ce,{to:`/sectors/${r.slug}`,className:"sector-card-link",children:["Learn More ",s.jsx("i",{className:"bi bi-arrow-right"})]})]}),s.jsx("style",{children:`
        .sector-card {
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: var(--arsos-shadow-sm);
          height: 100%;
          display: flex;
          flex-direction: column;
          border-bottom: 4px solid transparent;
          transition: var(--arsos-transition);
        }
        .sector-card:hover { border-bottom-color: var(--arsos-gold); }
        .sector-card-image {
          position: relative;
          height: 180px;
          background: linear-gradient(135deg, var(--arsos-navy), var(--arsos-navy-light));
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .sector-card-image::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle at 30% 40%, rgba(201,169,97,0.25) 0%, transparent 60%);
        }
        .sector-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, transparent, rgba(201,169,97,0.15));
          opacity: 0;
          transition: var(--arsos-transition);
        }
        .sector-card:hover .sector-card-overlay { opacity: 1; }
        .sector-card-icon {
          font-size: 4rem;
          color: var(--arsos-gold);
          position: relative;
          z-index: 2;
          transition: var(--arsos-transition);
        }
        .sector-card:hover .sector-card-icon { transform: scale(1.15) rotate(-5deg); }
        .sector-card-body {
          padding: 30px 25px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .sector-card-body h3 {
          font-size: 1.25rem;
          margin-bottom: 12px;
          transition: var(--arsos-transition);
        }
        .sector-card:hover .sector-card-body h3 { color: var(--arsos-gold); }
        .sector-card-body p {
          color: var(--arsos-text-light);
          font-size: 0.92rem;
          line-height: 1.7;
          flex: 1;
          margin-bottom: 20px;
        }
        .sector-card-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--arsos-navy);
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: 0.88rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .sector-card-link i { transition: var(--arsos-transition); }
        .sector-card-link:hover { color: var(--arsos-gold); }
        .sector-card-link:hover i { transform: translateX(5px); }
      `})]}),yx=()=>s.jsxs("section",{className:"why-choose section-padding bg-gray",children:[s.jsxs("div",{className:"container",children:[s.jsx(Xe,{subtitle:"Why Choose Us",title:"The ARSOS Advantage",description:"We combine quality, reliability, and customer focus to deliver solutions that businesses trust."}),s.jsx("div",{className:"row g-4",children:km.map((r,o)=>s.jsx("div",{className:"col-lg-4 col-md-6",children:s.jsxs("div",{className:"why-card reveal hover-lift",style:{transitionDelay:`${o*.1}s`},children:[s.jsx("div",{className:"why-icon",children:s.jsx("i",{className:`bi ${r.icon}`})}),s.jsx("h4",{children:r.title}),s.jsx("p",{children:r.description})]})},r.title))})]}),s.jsx("style",{children:`
        .why-card {
          background: #fff;
          padding: 40px 30px;
          border-radius: 12px;
          height: 100%;
          box-shadow: var(--arsos-shadow-sm);
          position: relative;
          overflow: hidden;
          transition: var(--arsos-transition);
        }
        .why-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, var(--arsos-gold), var(--arsos-navy));
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.5s ease;
        }
        .why-card:hover::before { transform: scaleX(1); }
        .why-icon {
          width: 70px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--arsos-navy), var(--arsos-navy-light));
          border-radius: 15px;
          margin-bottom: 25px;
          transition: var(--arsos-transition);
        }
        .why-icon i {
          font-size: 1.9rem;
          color: var(--arsos-gold);
          transition: var(--arsos-transition);
        }
        .why-card:hover .why-icon {
          background: var(--arsos-gold);
          transform: rotate(-8deg) scale(1.08);
        }
        .why-card:hover .why-icon i { color: var(--arsos-navy); }
        .why-card h4 { font-size: 1.2rem; margin-bottom: 12px; }
        .why-card p {
          color: var(--arsos-text-light);
          font-size: 0.95rem;
          line-height: 1.75;
          margin: 0;
        }
      `})]}),bx=()=>s.jsxs("section",{className:"mission-vision section-padding",children:[s.jsxs("div",{className:"container",children:[s.jsx(Xe,{subtitle:"Our Foundation",title:"Mission & Vision",description:"The principles that guide everything we do at ARSOS Trading."}),s.jsxs("div",{className:"row g-4",children:[s.jsx("div",{className:"col-md-6",children:s.jsxs("div",{className:"mv-card reveal-left",children:[s.jsx("div",{className:"mv-icon",children:s.jsx("i",{className:"bi bi-bullseye"})}),s.jsx("h3",{children:"Our Mission"}),s.jsx("p",{children:Ne.mission})]})}),s.jsx("div",{className:"col-md-6",children:s.jsxs("div",{className:"mv-card reveal-right",children:[s.jsx("div",{className:"mv-icon",children:s.jsx("i",{className:"bi bi-eye-fill"})}),s.jsx("h3",{children:"Our Vision"}),s.jsx("p",{children:Ne.vision})]})})]}),s.jsxs("div",{className:"commitment-box reveal mt-4",children:[s.jsx("i",{className:"bi bi-quote"}),s.jsxs("div",{children:[s.jsx("h5",{children:"Our Commitment"}),s.jsx("p",{children:Ne.commitment})]})]})]}),s.jsx("style",{children:`
        .mv-card {
          background: #fff;
          padding: 40px 35px;
          border-radius: 12px;
          height: 100%;
          box-shadow: var(--arsos-shadow);
          border-left: 5px solid var(--arsos-gold);
          transition: var(--arsos-transition);
        }
        .mv-card:hover { transform: translateY(-8px); box-shadow: var(--arsos-shadow-lg); }
        .mv-icon {
          width: 65px;
          height: 65px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--arsos-navy), var(--arsos-navy-light));
          border-radius: 15px;
          margin-bottom: 22px;
        }
        .mv-icon i { color: var(--arsos-gold); font-size: 1.8rem; }
        .mv-card h3 { font-size: 1.35rem; margin-bottom: 15px; }
        .mv-card p {
          color: var(--arsos-text-light);
          line-height: 1.85;
          margin: 0;
          font-size: 0.97rem;
        }
        .commitment-box {
          display: flex;
          gap: 20px;
          align-items: flex-start;
          padding: 30px 35px;
          background: linear-gradient(135deg, var(--arsos-navy), var(--arsos-navy-light));
          border-radius: 12px;
          color: #fff;
          position: relative;
          overflow: hidden;
        }
        .commitment-box::before {
          content: '';
          position: absolute;
          top: -50px;
          right: -50px;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(201,169,97,0.25), transparent 70%);
          border-radius: 50%;
        }
        .commitment-box i {
          font-size: 2.5rem;
          color: var(--arsos-gold);
          line-height: 1;
        }
        .commitment-box h5 {
          color: var(--arsos-gold);
          font-size: 1rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 10px;
        }
        .commitment-box p {
          color: rgba(255,255,255,0.9);
          margin: 0;
          font-size: 1.05rem;
          line-height: 1.7;
        }
      `})]}),Vl=({title:r="Ready to Work With a Trusted Partner?",description:o="Get in touch with ARSOS Trading today and discover how our diversified solutions can support your business.",primaryText:d="Get in Touch",primaryLink:u="/contact"})=>s.jsxs("section",{className:"cta-section",children:[s.jsx("div",{className:"cta-overlay"}),s.jsx("div",{className:"container position-relative",children:s.jsxs("div",{className:"cta-content reveal",children:[s.jsx("h2",{children:r}),s.jsx("p",{children:o}),s.jsxs(ce,{to:u,className:"btn-arsos btn-arsos-primary",children:[d," ",s.jsx("i",{className:"bi bi-arrow-right"})]})]})}),s.jsx("style",{children:`
        .cta-section {
          position: relative;
          padding: 100px 0;
          background: linear-gradient(135deg, var(--arsos-navy) 0%, var(--arsos-navy-light) 100%);
          overflow: hidden;
        }
        .cta-overlay {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle at 15% 50%, rgba(201,169,97,0.2) 0%, transparent 55%),
                            radial-gradient(circle at 85% 50%, rgba(201,169,97,0.15) 0%, transparent 55%);
        }
        .cta-content {
          text-align: center;
          max-width: 720px;
          margin: 0 auto;
          color: #fff;
          position: relative;
        }
        .cta-content h2 {
          color: #fff;
          font-size: clamp(1.6rem, 3vw, 2.4rem);
          font-weight: 800;
          margin-bottom: 18px;
        }
        .cta-content p {
          color: rgba(255,255,255,0.85);
          font-size: 1.05rem;
          margin-bottom: 35px;
          line-height: 1.8;
        }
      `})]}),Km=[{icon:"bi-award-fill",title:"Quality",description:"We believe quality is fundamental to building customer trust and long-term relationships."},{icon:"bi-shield-check",title:"Integrity",description:"We conduct our business with honesty, transparency, and professional ethics."},{icon:"bi-check2-circle",title:"Reliability",description:"Our customers depend on us, and we strive to deliver consistent products and services."},{icon:"bi-person-heart",title:"Customer Focus",description:"We put our customers' requirements at the center of our approach."},{icon:"bi-briefcase-fill",title:"Professionalism",description:"We maintain professional standards throughout our operations and relationships."},{icon:"bi-graph-up-arrow",title:"Continuous Improvement",description:"We continuously look for better products, services, processes, and solutions."}],jx=[{number:4,suffix:"",label:"Trading Sectors"},{number:100,suffix:"+",label:"Products & Services"},{number:50,suffix:"+",label:"Trusted Clients"},{number:100,suffix:"%",label:"Commitment"}],Sx=()=>(z.useEffect(()=>{document.title="ARSOS Trading | Building Business Solutions. Delivering Quality."},[]),s.jsxs(s.Fragment,{children:[s.jsx(px,{}),s.jsxs("section",{className:"about-preview section-padding",children:[s.jsx("div",{className:"container",children:s.jsxs("div",{className:"row align-items-center g-5",children:[s.jsx("div",{className:"col-lg-6",children:s.jsxs("div",{className:"about-visual reveal-left",children:[s.jsxs("div",{className:"about-image-grid",children:[s.jsx("div",{className:"about-img about-img-1"}),s.jsx("div",{className:"about-img about-img-2"}),s.jsx("div",{className:"about-img about-img-3"})]}),s.jsxs("div",{className:"about-badge",children:[s.jsx("i",{className:"bi bi-award-fill"}),s.jsxs("div",{children:[s.jsx("strong",{children:"Trusted"}),s.jsx("small",{children:"Business Partner"})]})]})]})}),s.jsx("div",{className:"col-lg-6",children:s.jsxs("div",{className:"reveal-right",children:[s.jsx("span",{className:"section-subtitle",children:"About ARSOS"}),s.jsx("h2",{className:"section-title",style:{textAlign:"left"},children:"A Diversified Trading Company You Can Trust"}),s.jsx("p",{className:"section-description",style:{textAlign:"left",marginBottom:20},children:Ne.about}),s.jsx("p",{className:"section-description",style:{textAlign:"left",marginBottom:30},children:Ne.aboutExtended}),s.jsxs("div",{className:"about-features",children:[s.jsxs("div",{className:"about-feature",children:[s.jsx("i",{className:"bi bi-check-circle-fill"}),s.jsx("span",{children:"Multi-Sector Expertise"})]}),s.jsxs("div",{className:"about-feature",children:[s.jsx("i",{className:"bi bi-check-circle-fill"}),s.jsx("span",{children:"Reliable Supply Chain"})]}),s.jsxs("div",{className:"about-feature",children:[s.jsx("i",{className:"bi bi-check-circle-fill"}),s.jsx("span",{children:"Professional Service"})]}),s.jsxs("div",{className:"about-feature",children:[s.jsx("i",{className:"bi bi-check-circle-fill"}),s.jsx("span",{children:"Competitive Value"})]})]}),s.jsxs(ce,{to:"/about",className:"btn-arsos btn-arsos-navy mt-4",children:["More About Us ",s.jsx("i",{className:"bi bi-arrow-right"})]})]})})]})}),s.jsx("style",{children:`
          .about-visual { position: relative; padding: 20px; }
          .about-image-grid {
            display: grid;
            grid-template-columns: 1.3fr 1fr;
            grid-template-rows: 1fr 1fr;
            gap: 15px;
            height: 480px;
          }
          .about-img {
            background: linear-gradient(135deg, var(--arsos-navy), var(--arsos-navy-light));
            border-radius: 10px;
            position: relative;
            overflow: hidden;
          }
          .about-img::before {
            content: '';
            position: absolute;
            inset: 0;
            background-image: radial-gradient(circle at 30% 30%, rgba(201,169,97,0.3), transparent 70%);
          }
          .about-img::after {
            content: '';
            position: absolute;
            inset: 0;
            background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text x="50" y="55" font-size="42" text-anchor="middle" fill="%23C9A961" opacity="0.35">⚙</text></svg>') center/40% no-repeat;
          }
          .about-img-1 { grid-row: 1 / 3; }
          .about-img-2 { background: linear-gradient(135deg, var(--arsos-gold), var(--arsos-gold-dark)); }
          .about-img-2::before {
            background-image: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3), transparent 70%);
          }
          .about-img-3 { background: linear-gradient(135deg, var(--arsos-navy-light), var(--arsos-navy)); }
          .about-badge {
            position: absolute;
            bottom: 0;
            right: 0;
            background: #fff;
            padding: 18px 24px;
            border-radius: 12px;
            box-shadow: var(--arsos-shadow-lg);
            display: flex;
            align-items: center;
            gap: 12px;
          }
          .about-badge i {
            font-size: 1.9rem;
            color: var(--arsos-gold);
          }
          .about-badge strong {
            display: block;
            font-family: 'Montserrat', sans-serif;
            color: var(--arsos-navy);
            font-size: 1rem;
          }
          .about-badge small {
            color: var(--arsos-text-light);
            font-size: 0.78rem;
          }

          .about-features {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 14px;
          }
          .about-feature {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 0.92rem;
            color: var(--arsos-text);
            font-weight: 500;
          }
          .about-feature i {
            color: var(--arsos-gold);
            font-size: 1.1rem;
          }
        `})]}),s.jsx("section",{className:"trading-sectors section-padding bg-gray",children:s.jsxs("div",{className:"container",children:[s.jsx(Xe,{subtitle:"Our Trading Sectors",title:"Four Companies. One Trusted Brand.",description:"ARSOS operates across four distinct trading sectors, delivering quality products and services to businesses and institutions."}),s.jsx("div",{className:"row g-4",children:Ut.map((r,o)=>s.jsx("div",{className:"col-lg-3 col-md-6",children:s.jsx(xx,{sector:r,index:o})},r.slug))})]})}),s.jsxs("section",{className:"stats-section",children:[s.jsx("div",{className:"container",children:s.jsx("div",{className:"row g-4",children:jx.map((r,o)=>s.jsx("div",{className:"col-lg-3 col-6",children:s.jsxs("div",{className:"stat-box reveal",style:{transitionDelay:`${o*.1}s`},children:[s.jsxs("div",{className:"stat-number",children:[r.number,s.jsx("span",{children:r.suffix})]}),s.jsx("div",{className:"stat-label",children:r.label})]})},r.label))})}),s.jsx("style",{children:`
          .stats-section {
            padding: 70px 0;
            background: linear-gradient(135deg, var(--arsos-navy) 0%, var(--arsos-navy-light) 100%);
            position: relative;
            overflow: hidden;
          }
          .stats-section::before {
            content: '';
            position: absolute;
            inset: 0;
            background-image: radial-gradient(circle at 20% 50%, rgba(201,169,97,0.15), transparent 40%),
                              radial-gradient(circle at 80% 50%, rgba(201,169,97,0.1), transparent 40%);
          }
          .stat-box {
            text-align: center;
            color: #fff;
            position: relative;
            z-index: 2;
          }
          .stat-number {
            font-family: 'Montserrat', sans-serif;
            font-size: clamp(2rem, 4vw, 3rem);
            font-weight: 900;
            color: var(--arsos-gold);
            line-height: 1;
            margin-bottom: 12px;
          }
          .stat-number span { color: var(--arsos-gold); }
          .stat-label {
            font-family: 'Montserrat', sans-serif;
            font-weight: 500;
            font-size: 0.9rem;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            color: rgba(255,255,255,0.85);
          }
        `})]}),s.jsx(yx,{}),s.jsxs("section",{className:"process-section section-padding bg-gray",children:[s.jsxs("div",{className:"container",children:[s.jsx(Xe,{subtitle:"Streamlined Procurement",title:"How We Partner With Your Business",description:"Our simple 4-step B2B fulfillment workflow ensures quality assurance, rapid response times, and dependable logistics."}),s.jsxs("div",{className:"row g-4 position-relative",children:[s.jsx("div",{className:"col-lg-3 col-md-6",children:s.jsxs("div",{className:"process-card reveal",children:[s.jsx("div",{className:"process-number",children:"01"}),s.jsx("div",{className:"process-icon",children:s.jsx("i",{className:"bi bi-file-earmark-text"})}),s.jsx("h3",{children:"1. Inquiry & Need Assessment"}),s.jsx("p",{children:"Submit your product specifications, chemical grades, IT scope, or hotel inventory requirements."})]})}),s.jsx("div",{className:"col-lg-3 col-md-6",children:s.jsxs("div",{className:"process-card reveal",style:{transitionDelay:"0.1s"},children:[s.jsx("div",{className:"process-number",children:"02"}),s.jsx("div",{className:"process-icon",children:s.jsx("i",{className:"bi bi-calculator"})}),s.jsx("h3",{children:"2. Tailored B2B Proposal"}),s.jsx("p",{children:"We prepare itemized, transparent quotations with competitive pricing and clear lead times."})]})}),s.jsx("div",{className:"col-lg-3 col-md-6",children:s.jsxs("div",{className:"process-card reveal",style:{transitionDelay:"0.2s"},children:[s.jsx("div",{className:"process-number",children:"03"}),s.jsx("div",{className:"process-icon",children:s.jsx("i",{className:"bi bi-shield-check"})}),s.jsx("h3",{children:"3. Quality Sourcing & Inspection"}),s.jsx("p",{children:"Products are batch-inspected against international standards before dispatch from our warehouse."})]})}),s.jsx("div",{className:"col-lg-3 col-md-6",children:s.jsxs("div",{className:"process-card reveal",style:{transitionDelay:"0.3s"},children:[s.jsx("div",{className:"process-number",children:"04"}),s.jsx("div",{className:"process-icon",children:s.jsx("i",{className:"bi bi-truck"})}),s.jsx("h3",{children:"4. Timely Delivery & Support"}),s.jsx("p",{children:"On-time logistics delivery backed by continuous post-supply customer support and restock assistance."})]})})]})]}),s.jsx("style",{children:`
          .process-card {
            background: #fff;
            padding: 35px 25px;
            border-radius: 12px;
            box-shadow: var(--arsos-shadow-sm);
            position: relative;
            height: 100%;
            border-top: 4px solid var(--arsos-gold);
            transition: var(--arsos-transition);
          }
          .process-card:hover {
            transform: translateY(-8px);
            box-shadow: var(--arsos-shadow-lg);
          }
          .process-number {
            font-family: 'Montserrat', sans-serif;
            font-size: 2.2rem;
            font-weight: 900;
            color: rgba(201,169,97,0.3);
            position: absolute;
            top: 20px;
            right: 20px;
          }
          .process-icon {
            width: 55px;
            height: 55px;
            background: rgba(11, 37, 69, 0.06);
            color: var(--arsos-navy);
            font-size: 1.5rem;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 20px;
          }
          .process-card h3 {
            font-size: 1.1rem;
            margin-bottom: 12px;
            color: var(--arsos-navy);
          }
          .process-card p {
            font-size: 0.88rem;
            color: var(--arsos-text-light);
            margin: 0;
            line-height: 1.6;
          }
        `})]}),s.jsx(bx,{}),s.jsxs("section",{className:"home-faq section-padding bg-gray",children:[s.jsxs("div",{className:"container",children:[s.jsx(Xe,{subtitle:"Got Questions?",title:"Frequently Asked Questions",description:"Find answers to common questions about partnering with ARSOS Trading across our four core business sectors."}),s.jsx("div",{className:"row justify-content-center",children:s.jsx("div",{className:"col-lg-10",children:s.jsxs("div",{className:"faq-grid",children:[s.jsxs("div",{className:"faq-item reveal",children:[s.jsxs("div",{className:"faq-question",children:[s.jsx("i",{className:"bi bi-patch-question-fill text-gold me-2"}),"What industries does ARSOS Trading cater to?"]}),s.jsx("div",{className:"faq-answer",children:"We serve commercial facilities, hotels & resorts, industrial factories, healthcare institutions, offices, and residential management companies across Cleaning Items, Chemical Business, IT Services, and Hotel Supplies."})]}),s.jsxs("div",{className:"faq-item reveal",style:{transitionDelay:"0.1s"},children:[s.jsxs("div",{className:"faq-question",children:[s.jsx("i",{className:"bi bi-patch-question-fill text-gold me-2"}),"Can I request bulk or custom orders for my business?"]}),s.jsx("div",{className:"faq-answer",children:"Yes! We specialize in wholesale, bulk procurement, and customized B2B contracts tailored to your exact operational schedule and budget requirements."})]}),s.jsxs("div",{className:"faq-item reveal",style:{transitionDelay:"0.2s"},children:[s.jsxs("div",{className:"faq-question",children:[s.jsx("i",{className:"bi bi-patch-question-fill text-gold me-2"}),"How do you ensure product quality and consistency?"]}),s.jsx("div",{className:"faq-answer",children:"All our chemical and hygiene products undergo stringent quality verification, sourcing only from certified international and accredited regional manufacturers."})]}),s.jsxs("div",{className:"faq-item reveal",style:{transitionDelay:"0.3s"},children:[s.jsxs("div",{className:"faq-question",children:[s.jsx("i",{className:"bi bi-patch-question-fill text-gold me-2"}),"How quickly can ARSOS fulfill supply orders?"]}),s.jsx("div",{className:"faq-answer",children:"We maintain regular inventory stocks for essential items to guarantee fast dispatch, with dedicated account managers handling logistics and delivery schedules."})]})]})})})]}),s.jsx("style",{children:`
          .faq-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 20px;
          }
          @media (min-width: 768px) {
            .faq-grid { grid-template-columns: 1fr 1fr; }
          }
          .faq-item {
            background: #fff;
            padding: 24px 28px;
            border-radius: 12px;
            box-shadow: var(--arsos-shadow-sm);
            border-left: 4px solid var(--arsos-navy);
          }
          .faq-question {
            font-family: 'Montserrat', sans-serif;
            font-weight: 700;
            font-size: 1rem;
            color: var(--arsos-navy);
            margin-bottom: 10px;
          }
          .faq-answer {
            font-size: 0.9rem;
            color: var(--arsos-text-light);
            line-height: 1.6;
          }
        `})]}),s.jsx(Vl,{})]})),Jm=({value:r,index:o})=>s.jsxs("div",{className:"value-card reveal hover-lift",style:{transitionDelay:`${o*.08}s`},children:[s.jsx("div",{className:"value-icon",children:s.jsx("i",{className:`bi ${r.icon}`})}),s.jsx("h4",{children:r.title}),s.jsx("p",{children:r.description}),s.jsx("style",{children:`
        .value-card {
          background: #fff;
          padding: 35px 25px;
          border-radius: 12px;
          text-align: center;
          height: 100%;
          box-shadow: var(--arsos-shadow-sm);
          transition: var(--arsos-transition);
          border-bottom: 3px solid transparent;
        }
        .value-card:hover { border-bottom-color: var(--arsos-gold); }
        .value-icon {
          width: 70px;
          height: 70px;
          margin: 0 auto 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--arsos-gray);
          border-radius: 50%;
          transition: var(--arsos-transition);
        }
        .value-icon i {
          font-size: 1.8rem;
          color: var(--arsos-navy);
          transition: var(--arsos-transition);
        }
        .value-card:hover .value-icon {
          background: var(--arsos-gold);
          transform: rotate(360deg);
        }
        .value-card:hover .value-icon i { color: var(--arsos-navy); }
        .value-card h4 { font-size: 1.1rem; margin-bottom: 12px; }
        .value-card p {
          color: var(--arsos-text-light);
          font-size: 0.9rem;
          line-height: 1.7;
          margin: 0;
        }
      `})]}),Nx=()=>(z.useEffect(()=>{document.title="About Us | ARSOS Trading",window.scrollTo(0,0)},[]),s.jsxs(s.Fragment,{children:[s.jsx("section",{className:"page-banner",children:s.jsx("div",{className:"container",children:s.jsxs("div",{className:"page-banner-content",children:[s.jsx("span",{className:"breadcrumb-text",children:"Home / About Us"}),s.jsx("h1",{children:"About ARSOS Trading"}),s.jsx("p",{style:{color:"rgba(255,255,255,0.85)",maxWidth:700,margin:"15px auto 0"},children:"A diversified business company focused on providing quality products and reliable services to businesses across multiple sectors."})]})})}),s.jsxs("section",{className:"about-intro section-padding",children:[s.jsx("div",{className:"container",children:s.jsxs("div",{className:"row align-items-center g-5",children:[s.jsx("div",{className:"col-lg-6",children:s.jsxs("div",{className:"about-visual-2 reveal-left",children:[s.jsx("div",{className:"about-image-main"}),s.jsx("div",{className:"about-image-sub"}),s.jsxs("div",{className:"about-experience",children:[s.jsx("span",{className:"exp-number",children:"4"}),s.jsxs("span",{className:"exp-text",children:["Trading",s.jsx("br",{}),"Sectors"]})]})]})}),s.jsx("div",{className:"col-lg-6",children:s.jsxs("div",{className:"reveal-right",children:[s.jsx("span",{className:"section-subtitle",children:"Who We Are"}),s.jsx("h2",{className:"section-title",style:{textAlign:"left"},children:"A Diversified Trading Company"}),s.jsx("p",{className:"section-description",style:{textAlign:"left",marginBottom:18},children:Ne.about}),s.jsx("p",{className:"section-description",style:{textAlign:"left",marginBottom:18},children:Ne.aboutExtended}),s.jsx("p",{className:"section-description",style:{textAlign:"left",marginBottom:30},children:"We believe that successful business relationships are built on trust, quality, reliability, and consistent service. That is why we work closely with our customers to understand their requirements and provide solutions that deliver genuine value. At ARSOS, we continue to develop our capabilities, strengthen our supplier relationships, and expand our product and service portfolio to meet the changing needs of the market."}),s.jsxs(ce,{to:"/contact",className:"btn-arsos btn-arsos-navy",children:["Partner With Us ",s.jsx("i",{className:"bi bi-arrow-right"})]})]})})]})}),s.jsx("style",{children:`
          .about-visual-2 {
            position: relative;
            padding-bottom: 60px;
            padding-right: 60px;
          }
          .about-image-main {
            height: 480px;
            border-radius: 12px;
            background: linear-gradient(135deg, var(--arsos-navy), var(--arsos-navy-light));
            position: relative;
            overflow: hidden;
            box-shadow: var(--arsos-shadow-lg);
          }
          .about-image-main::before {
            content: '';
            position: absolute;
            inset: 0;
            background-image: radial-gradient(circle at 30% 30%, rgba(201,169,97,0.4), transparent 60%),
                              radial-gradient(circle at 70% 70%, rgba(201,169,97,0.25), transparent 55%);
          }
          .about-image-main::after {
            content: 'ARSOS';
            position: absolute;
            bottom: 30px;
            left: 30px;
            font-family: 'Montserrat', sans-serif;
            font-weight: 900;
            font-size: 3rem;
            letter-spacing: 6px;
            color: rgba(201,169,97,0.35);
          }
          .about-image-sub {
            position: absolute;
            bottom: 0;
            right: 0;
            width: 60%;
            height: 240px;
            border-radius: 12px;
            background: linear-gradient(135deg, var(--arsos-gold), var(--arsos-gold-dark));
            box-shadow: var(--arsos-shadow-lg);
            border: 6px solid #fff;
          }
          .about-image-sub::before {
            content: '';
            position: absolute;
            inset: 0;
            background-image: radial-gradient(circle at 50% 50%, rgba(255,255,255,0.25), transparent 70%);
          }
          .about-experience {
            position: absolute;
            top: 30px;
            right: 0;
            background: #fff;
            padding: 20px 25px;
            border-radius: 12px;
            box-shadow: var(--arsos-shadow-lg);
            text-align: center;
            border-top: 4px solid var(--arsos-gold);
          }
          .exp-number {
            display: block;
            font-family: 'Montserrat', sans-serif;
            font-size: 2.4rem;
            font-weight: 900;
            color: var(--arsos-gold);
            line-height: 1;
          }
          .exp-text {
            display: block;
            font-size: 0.78rem;
            color: var(--arsos-navy);
            font-weight: 600;
            margin-top: 6px;
            line-height: 1.3;
          }
        `})]}),s.jsxs("section",{className:"mv-section section-padding bg-gray",children:[s.jsxs("div",{className:"container",children:[s.jsx(Xe,{subtitle:"Our Foundation",title:"Mission & Vision",description:"Guided by purpose and driven by excellence."}),s.jsxs("div",{className:"row g-4",children:[s.jsx("div",{className:"col-md-6",children:s.jsxs("div",{className:"mv-box reveal-left",children:[s.jsx("div",{className:"mv-box-icon",children:s.jsx("i",{className:"bi bi-bullseye"})}),s.jsx("h3",{children:"Our Mission"}),s.jsx("p",{children:Ne.mission})]})}),s.jsx("div",{className:"col-md-6",children:s.jsxs("div",{className:"mv-box reveal-right",children:[s.jsx("div",{className:"mv-box-icon",children:s.jsx("i",{className:"bi bi-eye-fill"})}),s.jsx("h3",{children:"Our Vision"}),s.jsx("p",{children:Ne.vision})]})})]})]}),s.jsx("style",{children:`
          .mv-box {
            background: #fff;
            padding: 45px 35px;
            border-radius: 12px;
            height: 100%;
            box-shadow: var(--arsos-shadow);
            position: relative;
            overflow: hidden;
            transition: var(--arsos-transition);
          }
          .mv-box::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 5px;
            background: linear-gradient(90deg, var(--arsos-gold), var(--arsos-navy));
          }
          .mv-box:hover {
            transform: translateY(-8px);
            box-shadow: var(--arsos-shadow-lg);
          }
          .mv-box-icon {
            width: 70px;
            height: 70px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, var(--arsos-navy), var(--arsos-navy-light));
            border-radius: 15px;
            margin-bottom: 22px;
          }
          .mv-box-icon i {
            font-size: 2rem;
            color: var(--arsos-gold);
          }
          .mv-box h3 {
            font-size: 1.4rem;
            margin-bottom: 15px;
          }
          .mv-box p {
            color: var(--arsos-text-light);
            line-height: 1.85;
            margin: 0;
            font-size: 0.97rem;
          }
        `})]}),s.jsx("section",{className:"values-section section-padding",children:s.jsxs("div",{className:"container",children:[s.jsx(Xe,{subtitle:"What We Stand For",title:"Our Core Values",description:"The principles that shape our decisions, our culture, and our commitments."}),s.jsx("div",{className:"row g-4",children:Km.map((r,o)=>s.jsx("div",{className:"col-lg-4 col-md-6",children:s.jsx(Jm,{value:r,index:o})},r.title))})]})}),s.jsxs("section",{className:"commitment-section",children:[s.jsx("div",{className:"container",children:s.jsxs("div",{className:"commitment-inner reveal",children:[s.jsx("i",{className:"bi bi-quote commitment-quote"}),s.jsx("h3",{children:"Our Commitment"}),s.jsx("p",{children:Ne.commitment})]})}),s.jsx("style",{children:`
          .commitment-section {
            padding: 90px 0;
            background: linear-gradient(135deg, var(--arsos-navy-dark), var(--arsos-navy));
            position: relative;
            overflow: hidden;
          }
          .commitment-section::before {
            content: '';
            position: absolute;
            inset: 0;
            background-image: radial-gradient(circle at 20% 40%, rgba(201,169,97,0.2), transparent 45%),
                              radial-gradient(circle at 80% 60%, rgba(201,169,97,0.15), transparent 45%);
          }
          .commitment-inner {
            position: relative;
            text-align: center;
            max-width: 800px;
            margin: 0 auto;
            color: #fff;
          }
          .commitment-quote {
            font-size: 4rem;
            color: var(--arsos-gold);
            display: block;
            margin-bottom: 20px;
            line-height: 1;
          }
          .commitment-inner h3 {
            color: var(--arsos-gold);
            font-size: 1rem;
            letter-spacing: 4px;
            text-transform: uppercase;
            margin-bottom: 25px;
          }
          .commitment-inner p {
            font-family: 'Montserrat', sans-serif;
            font-size: clamp(1.15rem, 2.2vw, 1.6rem);
            font-weight: 500;
            line-height: 1.6;
            color: #fff;
            margin: 0;
          }
        `})]}),s.jsxs("section",{className:"standards-section section-padding bg-gray",children:[s.jsxs("div",{className:"container",children:[s.jsx(Xe,{subtitle:"Excellence Guaranteed",title:"Operational Standards & Compliance",description:"How ARSOS maintains superior standards across procurement, warehousing, and client dispatch."}),s.jsxs("div",{className:"row g-4",children:[s.jsx("div",{className:"col-lg-4 col-md-6",children:s.jsxs("div",{className:"standard-box reveal",children:[s.jsx("div",{className:"standard-icon",children:s.jsx("i",{className:"bi bi-patch-check-fill text-gold"})}),s.jsx("h4",{children:"Certified Supply Chain"}),s.jsx("p",{children:"We partner exclusively with verified chemical laboratories and ISO-certified manufacturing facilities."})]})}),s.jsx("div",{className:"col-lg-4 col-md-6",children:s.jsxs("div",{className:"standard-box reveal",style:{transitionDelay:"0.1s"},children:[s.jsx("div",{className:"standard-icon",children:s.jsx("i",{className:"bi bi-box-seam-fill text-gold"})}),s.jsx("h4",{children:"Warehousing Safety"}),s.jsx("p",{children:"Climate-controlled and segregated storage for chemicals, cleaning inventory, and sensitive electronic hardware."})]})}),s.jsx("div",{className:"col-lg-4 col-md-6",children:s.jsxs("div",{className:"standard-box reveal",style:{transitionDelay:"0.2s"},children:[s.jsx("div",{className:"standard-icon",children:s.jsx("i",{className:"bi bi-person-check-fill text-gold"})}),s.jsx("h4",{children:"Dedicated Account Managers"}),s.jsx("p",{children:"Personalized point of contact for every enterprise client, managing restocks, orders, and SLA delivery."})]})})]})]}),s.jsx("style",{children:`
          .standard-box {
            background: #fff;
            padding: 30px;
            border-radius: 12px;
            box-shadow: var(--arsos-shadow-sm);
            height: 100%;
            transition: var(--arsos-transition);
          }
          .standard-box:hover {
            transform: translateY(-6px);
            box-shadow: var(--arsos-shadow-lg);
          }
          .standard-icon {
            font-size: 2.2rem;
            margin-bottom: 15px;
          }
          .standard-box h4 {
            font-size: 1.15rem;
            color: var(--arsos-navy);
            margin-bottom: 12px;
          }
          .standard-box p {
            color: var(--arsos-text-light);
            font-size: 0.9rem;
            margin: 0;
            line-height: 1.6;
          }
        `})]}),s.jsx(Vl,{})]})),Ex=()=>(z.useEffect(()=>{document.title="Our Trading Sectors | ARSOS Trading",window.scrollTo(0,0)},[]),s.jsxs(s.Fragment,{children:[s.jsx("section",{className:"page-banner",children:s.jsx("div",{className:"container",children:s.jsxs("div",{className:"page-banner-content",children:[s.jsx("span",{className:"breadcrumb-text",children:"Home / Sectors"}),s.jsx("h1",{children:"Our Trading Sectors"}),s.jsx("p",{style:{color:"rgba(255,255,255,0.85)",maxWidth:700,margin:"15px auto 0"},children:"Four companies. One trusted brand. Discover the diversified sectors that make ARSOS a complete business partner."})]})})}),s.jsxs("section",{className:"sectors-list section-padding",children:[s.jsxs("div",{className:"container",children:[s.jsx(Xe,{subtitle:"What We Do",title:"Diversified Business Under One Roof",description:"Each of our four sectors operates with the same commitment to quality, reliability, and customer focus."}),s.jsx("div",{className:"row g-4",children:Ut.map((r,o)=>s.jsx("div",{className:"col-lg-6",children:s.jsxs("div",{className:"sector-detail-card reveal",children:[s.jsxs("div",{className:"sdc-image",style:{position:"relative"},children:[s.jsx("div",{className:"sdc-overlay"}),s.jsx("i",{className:`bi ${r.icon}`})]}),s.jsxs("div",{className:"sdc-body",children:[s.jsx("h3",{children:r.title}),s.jsx("p",{children:r.intro}),s.jsx("ul",{className:"sdc-list",children:r.list.slice(0,3).map(d=>s.jsxs("li",{children:[s.jsx("i",{className:"bi bi-check2-circle"}),d]},d))}),s.jsxs(ce,{to:`/sectors/${r.slug}`,className:"btn-arsos btn-arsos-navy",children:["Explore Sector ",s.jsx("i",{className:"bi bi-arrow-right"})]})]})]})},r.slug))})]}),s.jsx("style",{children:`
          .sector-detail-card {
            background: #fff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: var(--arsos-shadow-sm);
            display: flex;
            flex-direction: row;
            height: 100%;
            transition: var(--arsos-transition);
            border-left: 5px solid var(--arsos-gold);
          }
          .sector-detail-card:hover {
            transform: translateY(-8px);
            box-shadow: var(--arsos-shadow-lg);
          }
          .sdc-image {
            flex: 0 0 40%;
            background: linear-gradient(135deg, var(--arsos-navy), var(--arsos-navy-light));
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 320px;
            position: relative;
            overflow: hidden;
          }
          .sdc-overlay {
            position: absolute;
            inset: 0;
            background-image: radial-gradient(circle at 30% 30%, rgba(201,169,97,0.35), transparent 60%);
          }
          .sdc-image i {
            font-size: 4.5rem;
            color: var(--arsos-gold);
            position: relative;
            z-index: 2;
            transition: var(--arsos-transition);
          }
          .sector-detail-card:hover .sdc-image i {
            transform: scale(1.15) rotate(-6deg);
          }
          .sdc-body {
            padding: 35px 30px;
            flex: 1;
            display: flex;
            flex-direction: column;
          }
          .sdc-body h3 {
            font-size: 1.35rem;
            margin-bottom: 15px;
          }
          .sdc-body p {
            color: var(--arsos-text-light);
            font-size: 0.93rem;
            line-height: 1.75;
            margin-bottom: 18px;
          }
          .sdc-list {
            list-style: none;
            padding: 0;
            margin-bottom: 22px;
          }
          .sdc-list li {
            display: flex;
            gap: 10px;
            align-items: flex-start;
            color: var(--arsos-text);
            font-size: 0.9rem;
            margin-bottom: 8px;
          }
          .sdc-list li i {
            color: var(--arsos-gold);
            margin-top: 3px;
          }
          .sdc-body .btn-arsos {
            padding: 10px 24px;
            font-size: 0.82rem;
            align-self: flex-start;
            margin-top: auto;
          }
          @media (max-width: 767px) {
            .sector-detail-card { flex-direction: column; }
            .sdc-image { min-height: 200px; flex: none; }
          }
        `})]}),s.jsx("section",{className:"capabilities-section section-padding bg-gray",children:s.jsxs("div",{className:"container",children:[s.jsx(Xe,{subtitle:"Commercial Scale",title:"Multi-Sector Procurement Matrix",description:"A quick glance at how ARSOS supports enterprise clients across our active divisions."}),s.jsx("div",{className:"table-responsive bg-white p-4 rounded-3 shadow-sm border",children:s.jsxs("table",{className:"table table-hover align-middle mb-0",children:[s.jsx("thead",{className:"table-dark",style:{backgroundColor:"var(--arsos-navy)"},children:s.jsxs("tr",{children:[s.jsx("th",{scope:"col",style:{width:"22%"},children:"Sector Division"}),s.jsx("th",{scope:"col",style:{width:"30%"},children:"Primary Product Range"}),s.jsx("th",{scope:"col",style:{width:"28%"},children:"Target Client Base"}),s.jsx("th",{scope:"col",style:{width:"20%"},children:"Fulfillment Standard"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsxs("strong",{className:"d-flex align-items-center gap-2 text-navy",children:[s.jsx("i",{className:"bi bi-droplet-half text-gold"})," Cleaning Items"]})}),s.jsx("td",{children:"Commercial detergents, sanitizers, microfiber equipment, janitorial tools"}),s.jsx("td",{children:"Hotels, Offices, Hospitals, Facilities"}),s.jsx("td",{children:s.jsx("span",{className:"badge bg-success",children:"Express B2B Stock"})})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsxs("strong",{className:"d-flex align-items-center gap-2 text-navy",children:[s.jsx("i",{className:"bi bi-beaker text-gold"})," Chemical Business"]})}),s.jsx("td",{children:"Industrial solvents, water treatment, maintenance chemicals, raw compounds"}),s.jsx("td",{children:"Factories, Water Plants, Commercial Units"}),s.jsx("td",{children:s.jsx("span",{className:"badge bg-primary",children:"ISO Compliant Batch"})})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsxs("strong",{className:"d-flex align-items-center gap-2 text-navy",children:[s.jsx("i",{className:"bi bi-cpu-fill text-gold"})," IT Services"]})}),s.jsx("td",{children:"Network infrastructure, hardware supply, enterprise software & IT consulting"}),s.jsx("td",{children:"Corporate Companies, SMEs, Retail Tech"}),s.jsx("td",{children:s.jsx("span",{className:"badge bg-warning text-dark",children:"SLA Guaranteed Support"})})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsxs("strong",{className:"d-flex align-items-center gap-2 text-navy",children:[s.jsx("i",{className:"bi bi-building-fill-check text-gold"})," Hotel Supplies"]})}),s.jsx("td",{children:"Guest amenities, linens, housekeeping products, front-of-house supplies"}),s.jsx("td",{children:"Hotels, Resorts, Serviced Apartments"}),s.jsx("td",{children:s.jsx("span",{className:"badge bg-info text-dark",children:"Scheduled Delivery"})})]})]})]})})]})}),s.jsx(Vl,{})]})),zx=()=>{const{slug:r}=pp(),o=Ut.find(u=>u.slug===r);if(z.useEffect(()=>{o&&(document.title=`${o.title} | ARSOS Trading`,window.scrollTo(0,0))},[o]),!o)return s.jsx(Cp,{to:"/sectors",replace:!0});const d=Ut.filter(u=>u.slug!==r);return s.jsxs(s.Fragment,{children:[s.jsx("section",{className:"page-banner",children:s.jsx("div",{className:"container",children:s.jsxs("div",{className:"page-banner-content",children:[s.jsxs("span",{className:"breadcrumb-text",children:["Home / Sectors / ",o.title]}),s.jsx("h1",{children:o.title}),s.jsx("p",{style:{color:"rgba(255,255,255,0.85)",maxWidth:720,margin:"15px auto 0"},children:o.shortDesc})]})})}),s.jsxs("section",{className:"sector-overview section-padding",children:[s.jsx("div",{className:"container",children:s.jsxs("div",{className:"row align-items-center g-5",children:[s.jsx("div",{className:"col-lg-6",children:s.jsxs("div",{className:"sector-detail-visual reveal-left",children:[s.jsx("div",{className:"sdv-main",children:s.jsx("i",{className:`bi ${o.icon}`})}),s.jsxs("div",{className:"sdv-badge",children:[s.jsx("i",{className:"bi bi-patch-check-fill"}),s.jsxs("div",{children:[s.jsx("strong",{children:"Quality"}),s.jsx("small",{children:"Assured"})]})]})]})}),s.jsx("div",{className:"col-lg-6",children:s.jsxs("div",{className:"reveal-right",children:[s.jsx("span",{className:"section-subtitle",children:"Overview"}),s.jsxs("h2",{className:"section-title",style:{textAlign:"left"},children:["About Our ",o.title]}),s.jsx("p",{className:"section-description",style:{textAlign:"left",marginBottom:18},children:o.intro}),s.jsx("p",{className:"section-description",style:{textAlign:"left"},children:o.focus})]})})]})}),s.jsx("style",{children:`
          .sector-detail-visual {
            position: relative;
            padding: 20px 20px 60px 0;
          }
          .sdv-main {
            height: 420px;
            border-radius: 15px;
            background: linear-gradient(135deg, var(--arsos-navy), var(--arsos-navy-light));
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
            box-shadow: var(--arsos-shadow-lg);
          }
          .sdv-main::before {
            content: '';
            position: absolute;
            inset: 0;
            background-image:
              radial-gradient(circle at 20% 30%, rgba(201,169,97,0.35), transparent 55%),
              radial-gradient(circle at 80% 70%, rgba(201,169,97,0.25), transparent 55%);
          }
          .sdv-main i {
            font-size: 8rem;
            color: var(--arsos-gold);
            position: relative;
            z-index: 2;
            animation: float 4s ease-in-out infinite;
          }
          .sdv-badge {
            position: absolute;
            bottom: 0;
            right: 0;
            background: #fff;
            padding: 20px 25px;
            border-radius: 12px;
            box-shadow: var(--arsos-shadow-lg);
            display: flex;
            align-items: center;
            gap: 12px;
            border-top: 4px solid var(--arsos-gold);
          }
          .sdv-badge i {
            font-size: 2rem;
            color: var(--arsos-gold);
          }
          .sdv-badge strong {
            display: block;
            font-family: 'Montserrat', sans-serif;
            color: var(--arsos-navy);
            font-size: 1rem;
          }
          .sdv-badge small {
            color: var(--arsos-text-light);
            font-size: 0.78rem;
          }
        `})]}),s.jsx("section",{className:"sector-list-section section-padding bg-gray",children:s.jsxs("div",{className:"container",children:[s.jsx(Xe,{subtitle:"What We Offer",title:o.listTitle,description:"A complete range of solutions tailored for your business requirements."}),s.jsx("div",{className:"row g-4 justify-content-center",children:o.list.map((u,m)=>s.jsx("div",{className:"col-lg-4 col-md-6",children:s.jsxs("div",{className:"sector-list-item reveal",style:{transitionDelay:`${m*.08}s`},children:[s.jsx("div",{className:"sli-icon",children:s.jsx("i",{className:"bi bi-check2-circle"})}),s.jsx("h5",{children:u}),s.jsx("style",{children:`
                    .sector-list-item {
                      background: #fff;
                      padding: 28px 25px;
                      border-radius: 10px;
                      display: flex;
                      align-items: center;
                      gap: 18px;
                      box-shadow: var(--arsos-shadow-sm);
                      transition: var(--arsos-transition);
                      border-left: 4px solid transparent;
                    }
                    .sector-list-item:hover {
                      border-left-color: var(--arsos-gold);
                      transform: translateX(8px);
                      box-shadow: var(--arsos-shadow);
                    }
                    .sli-icon {
                      width: 50px;
                      height: 50px;
                      flex: 0 0 50px;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      background: linear-gradient(135deg, var(--arsos-navy), var(--arsos-navy-light));
                      border-radius: 10px;
                    }
                    .sli-icon i {
                      color: var(--arsos-gold);
                      font-size: 1.4rem;
                    }
                    .sector-list-item h5 {
                      font-size: 1rem;
                      margin: 0;
                      font-weight: 600;
                      color: var(--arsos-navy);
                    }
                  `})]})},u))})]})}),s.jsxs("section",{className:"other-sectors section-padding",children:[s.jsxs("div",{className:"container",children:[s.jsx(Xe,{subtitle:"Explore More",title:"Other Trading Sectors",description:"Discover the full range of ARSOS business divisions."}),s.jsx("div",{className:"row g-4",children:d.map(u=>s.jsx("div",{className:"col-lg-4 col-md-6",children:s.jsxs(ce,{to:`/sectors/${u.slug}`,className:"other-sector-card",children:[s.jsx("i",{className:`bi ${u.icon}`}),s.jsx("h5",{children:u.title}),s.jsxs("span",{children:["View Sector ",s.jsx("i",{className:"bi bi-arrow-right"})]})]})},u.slug))})]}),s.jsx("style",{children:`
          .other-sector-card {
            display: block;
            background: #fff;
            padding: 35px 25px;
            border-radius: 12px;
            text-align: center;
            box-shadow: var(--arsos-shadow-sm);
            transition: var(--arsos-transition);
            border-bottom: 4px solid transparent;
            height: 100%;
          }
          .other-sector-card:hover {
            transform: translateY(-8px);
            box-shadow: var(--arsos-shadow-lg);
            border-bottom-color: var(--arsos-gold);
          }
          .other-sector-card i {
            font-size: 2.6rem;
            color: var(--arsos-gold);
            display: block;
            margin-bottom: 18px;
            transition: var(--arsos-transition);
          }
          .other-sector-card:hover i {
            transform: scale(1.15) rotate(-6deg);
          }
          .other-sector-card h5 {
            font-size: 1.1rem;
            color: var(--arsos-navy);
            margin-bottom: 12px;
          }
          .other-sector-card span {
            color: var(--arsos-gold);
            font-family: 'Montserrat', sans-serif;
            font-weight: 600;
            font-size: 0.82rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            display: inline-flex;
            align-items: center;
            gap: 6px;
          }
          .other-sector-card:hover span i {
            transform: translateX(5px);
            color: var(--arsos-gold);
          }
        `})]}),s.jsx(Vl,{})]})},Tx=()=>(z.useEffect(()=>{document.title="Why Choose Us | ARSOS Trading",window.scrollTo(0,0)},[]),s.jsxs(s.Fragment,{children:[s.jsx("section",{className:"page-banner",children:s.jsx("div",{className:"container",children:s.jsxs("div",{className:"page-banner-content",children:[s.jsx("span",{className:"breadcrumb-text",children:"Home / Why Choose Us"}),s.jsx("h1",{children:"Why Choose ARSOS"}),s.jsx("p",{style:{color:"rgba(255,255,255,0.85)",maxWidth:700,margin:"15px auto 0"},children:"Five reasons businesses trust ARSOS as their diversified trading partner."})]})})}),s.jsxs("section",{className:"why-page section-padding",children:[s.jsxs("div",{className:"container",children:[s.jsx(Xe,{subtitle:"Our Strengths",title:"What Sets Us Apart",description:"ARSOS combines a diversified portfolio with a service-driven approach to become a complete partner for our clients."}),s.jsx("div",{className:"row g-4",children:km.map((r,o)=>s.jsx("div",{className:"col-lg-6",children:s.jsxs("div",{className:"why-page-card reveal",children:[s.jsx("div",{className:"wpc-number",children:String(o+1).padStart(2,"0")}),s.jsxs("div",{className:"wpc-content",children:[s.jsx("div",{className:"wpc-icon",children:s.jsx("i",{className:`bi ${r.icon}`})}),s.jsx("h4",{children:r.title}),s.jsx("p",{children:r.description})]})]})},r.title))})]}),s.jsx("style",{children:`
          .why-page-card {
            display: flex;
            gap: 25px;
            background: #fff;
            padding: 35px 30px;
            border-radius: 12px;
            box-shadow: var(--arsos-shadow-sm);
            height: 100%;
            transition: var(--arsos-transition);
            position: relative;
            overflow: hidden;
            border-left: 5px solid var(--arsos-navy);
          }
          .why-page-card:hover {
            transform: translateX(10px);
            box-shadow: var(--arsos-shadow-lg);
            border-left-color: var(--arsos-gold);
          }
          .wpc-number {
            font-family: 'Montserrat', sans-serif;
            font-size: 3rem;
            font-weight: 900;
            color: var(--arsos-gray-dark);
            line-height: 1;
            transition: var(--arsos-transition);
          }
          .why-page-card:hover .wpc-number {
            color: var(--arsos-gold);
          }
          .wpc-content { flex: 1; }
          .wpc-icon {
            width: 55px;
            height: 55px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, var(--arsos-navy), var(--arsos-navy-light));
            border-radius: 12px;
            margin-bottom: 15px;
          }
          .wpc-icon i {
            font-size: 1.5rem;
            color: var(--arsos-gold);
          }
          .wpc-content h4 {
            font-size: 1.2rem;
            margin-bottom: 10px;
          }
          .wpc-content p {
            color: var(--arsos-text-light);
            font-size: 0.95rem;
            line-height: 1.75;
            margin: 0;
          }
        `})]}),s.jsx("section",{className:"comparison-section section-padding bg-gray",children:s.jsxs("div",{className:"container",children:[s.jsx(Xe,{subtitle:"The ARSOS Advantage",title:"ARSOS vs. Traditional Multi-Vendor Supply",description:"See why consolidating your commercial procurement with ARSOS saves time, overhead costs, and operational hassle."}),s.jsx("div",{className:"table-responsive bg-white p-4 rounded-3 shadow-sm border",children:s.jsxs("table",{className:"table table-bordered table-striped align-middle mb-0 text-center",children:[s.jsx("thead",{className:"table-dark",style:{backgroundColor:"var(--arsos-navy)"},children:s.jsxs("tr",{children:[s.jsx("th",{scope:"col",className:"text-start",children:"Key Feature / Operational Factor"}),s.jsx("th",{scope:"col",style:{color:"var(--arsos-gold)",width:"35%"},children:"ARSOS Trading Partnership"}),s.jsx("th",{scope:"col",style:{width:"35%"},children:"Multiple Single-Sector Suppliers"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{className:"text-start",children:s.jsx("strong",{children:"Vendor Consolidation"})}),s.jsxs("td",{className:"table-success",children:[s.jsx("i",{className:"bi bi-check-circle-fill text-success me-2"})," Single contact for 4 major B2B sectors"]}),s.jsxs("td",{className:"table-danger",children:[s.jsx("i",{className:"bi bi-x-circle-fill text-danger me-2"})," 4+ different vendor contracts & accounts"]})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"text-start",children:s.jsx("strong",{children:"Quality Verification"})}),s.jsxs("td",{className:"table-success",children:[s.jsx("i",{className:"bi bi-check-circle-fill text-success me-2"})," Standardized batch testing & ISO alignment"]}),s.jsxs("td",{className:"table-secondary",children:[s.jsx("i",{className:"bi bi-dash-circle text-muted me-2"})," Inconsistent quality across vendors"]})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"text-start",children:s.jsx("strong",{children:"B2B Pricing & Volume Discounts"})}),s.jsxs("td",{className:"table-success",children:[s.jsx("i",{className:"bi bi-check-circle-fill text-success me-2"})," Combined multi-sector volume savings"]}),s.jsxs("td",{className:"table-danger",children:[s.jsx("i",{className:"bi bi-x-circle-fill text-danger me-2"})," Separate tier pricing per small order"]})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"text-start",children:s.jsx("strong",{children:"Account Support & SLA"})}),s.jsxs("td",{className:"table-success",children:[s.jsx("i",{className:"bi bi-check-circle-fill text-success me-2"})," Dedicated account manager & fast dispatch"]}),s.jsxs("td",{className:"table-secondary",children:[s.jsx("i",{className:"bi bi-dash-circle text-muted me-2"})," Fragmented support and unpredictable delays"]})]})]})]})})]})}),s.jsx(Vl,{})]})),Ax=()=>(z.useEffect(()=>{document.title="Mission & Vision | ARSOS Trading",window.scrollTo(0,0)},[]),s.jsxs(s.Fragment,{children:[s.jsx("section",{className:"page-banner",children:s.jsx("div",{className:"container",children:s.jsxs("div",{className:"page-banner-content",children:[s.jsx("span",{className:"breadcrumb-text",children:"Home / Mission & Vision"}),s.jsx("h1",{children:"Mission, Vision & Values"})]})})}),s.jsxs("section",{className:"mv-detail section-padding",children:[s.jsx("div",{className:"container",children:s.jsxs("div",{className:"row g-5 align-items-stretch",children:[s.jsx("div",{className:"col-lg-6",children:s.jsxs("div",{className:"mv-detail-card reveal-left",children:[s.jsxs("div",{className:"mv-detail-header",children:[s.jsx("div",{className:"mv-detail-icon",children:s.jsx("i",{className:"bi bi-bullseye"})}),s.jsx("h3",{children:"Our Mission"})]}),s.jsx("p",{children:Ne.mission})]})}),s.jsx("div",{className:"col-lg-6",children:s.jsxs("div",{className:"mv-detail-card alt reveal-right",children:[s.jsxs("div",{className:"mv-detail-header",children:[s.jsx("div",{className:"mv-detail-icon",children:s.jsx("i",{className:"bi bi-eye-fill"})}),s.jsx("h3",{children:"Our Vision"})]}),s.jsx("p",{children:Ne.vision})]})})]})}),s.jsx("style",{children:`
          .mv-detail-card {
            background: #fff;
            padding: 45px 40px;
            border-radius: 15px;
            height: 100%;
            box-shadow: var(--arsos-shadow);
            border-top: 5px solid var(--arsos-gold);
            transition: var(--arsos-transition);
          }
          .mv-detail-card.alt { border-top-color: var(--arsos-navy); }
          .mv-detail-card:hover { transform: translateY(-8px); box-shadow: var(--arsos-shadow-lg); }
          .mv-detail-header {
            display: flex;
            align-items: center;
            gap: 18px;
            margin-bottom: 25px;
          }
          .mv-detail-icon {
            width: 70px;
            height: 70px;
            flex: 0 0 70px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, var(--arsos-navy), var(--arsos-navy-light));
            border-radius: 15px;
          }
          .mv-detail-card.alt .mv-detail-icon {
            background: linear-gradient(135deg, var(--arsos-gold), var(--arsos-gold-dark));
          }
          .mv-detail-icon i { font-size: 1.9rem; color: var(--arsos-gold); }
          .mv-detail-card.alt .mv-detail-icon i { color: var(--arsos-navy); }
          .mv-detail-card h3 { font-size: 1.5rem; margin: 0; }
          .mv-detail-card p {
            color: var(--arsos-text-light);
            line-height: 1.9;
            font-size: 1rem;
            margin: 0;
          }
        `})]}),s.jsx("section",{className:"values-section section-padding bg-gray",children:s.jsxs("div",{className:"container",children:[s.jsx(Xe,{subtitle:"What We Stand For",title:"Our Core Values",description:"Six principles that define how we work, deliver, and grow."}),s.jsx("div",{className:"row g-4",children:Km.map((r,o)=>s.jsx("div",{className:"col-lg-4 col-md-6",children:s.jsx(Jm,{value:r,index:o})},r.title))})]})}),s.jsx("section",{className:"goals-section section-padding",children:s.jsxs("div",{className:"container",children:[s.jsx(Xe,{subtitle:"Forward Looking",title:"Strategic Horizons & Responsibility",description:"How ARSOS aligns long-term growth with sustainability, compliance, and client trust."}),s.jsxs("div",{className:"row g-4",children:[s.jsx("div",{className:"col-md-4",children:s.jsxs("div",{className:"goal-card reveal text-center p-4 bg-white rounded-3 shadow-sm border border-gold",children:[s.jsx("i",{className:"bi bi-globe-americas text-gold display-4 mb-3 d-block"}),s.jsx("h4",{className:"fw-bold mb-3 text-navy",children:"International Sourcing Expansion"}),s.jsx("p",{className:"text-muted small",children:"Expanding global supply partnerships to deliver competitive bulk pricing and rare chemical imports."})]})}),s.jsx("div",{className:"col-md-4",children:s.jsxs("div",{className:"goal-card reveal text-center p-4 bg-white rounded-3 shadow-sm border border-gold",style:{transitionDelay:"0.1s"},children:[s.jsx("i",{className:"bi bi-recycle text-gold display-4 mb-3 d-block"}),s.jsx("h4",{className:"fw-bold mb-3 text-navy",children:"Eco-Friendly Product Line"}),s.jsx("p",{className:"text-muted small",children:"Introducing eco-labeled cleaning items and biodegradable hospitality amenities for green hotels."})]})}),s.jsx("div",{className:"col-md-4",children:s.jsxs("div",{className:"goal-card reveal text-center p-4 bg-white rounded-3 shadow-sm border border-gold",style:{transitionDelay:"0.2s"},children:[s.jsx("i",{className:"bi bi-cpu text-gold display-4 mb-3 d-block"}),s.jsx("h4",{className:"fw-bold mb-3 text-navy",children:"Digital Client Procurement"}),s.jsx("p",{className:"text-muted small",children:"Integrating cloud-based B2B reordering tools to make client inventory replenishment automated."})]})})]})]})}),s.jsx(Vl,{})]})),Rx=()=>{const[r,o]=z.useState(Ut[0].slug),[d,u]=z.useState(""),[m,g]=z.useState("Bulk Order Inquiry"),[j,T]=z.useState("");z.useEffect(()=>{document.title="Contact Us | ARSOS Trading",window.scrollTo(0,0)},[]);const y=(M,G)=>{navigator.clipboard.writeText(M),u(G),setTimeout(()=>u(""),3e3)},v=Ut.find(M=>M.slug===r)||Ut[0],w=M=>{M.preventDefault();const G=encodeURIComponent(`[${m}] ${j?"for "+j:"B2B Inquiry"}`),Z=encodeURIComponent(`Hello ARSOS Trading Team,

I am interested in learning more about your ${v.title} division services.

Company Name: ${j||"N/A"}
Inquiry Type: ${m}

Please get in touch with me regarding product catalog and pricing.

Best regards,`);window.location.href=`mailto:${Ne.email}?subject=${G}&body=${Z}`},R=[{icon:"bi-telephone-fill",title:"Direct Call & Hotline",value:Ne.phone,actionText:"Click to Call",actionLink:`tel:${Ne.phone.replace(/\s+/g,"")}`,type:"phone"},{icon:"bi-envelope-fill",title:"Email Procurement",value:Ne.email,actionText:"Send Email",actionLink:`mailto:${Ne.email}`,type:"email"},{icon:"bi-clock-fill",title:"Response SLA",value:"< 2 Hours SLA",subtext:"Rapid Response Guaranteed",type:"sla"}];return s.jsxs(s.Fragment,{children:[s.jsx("section",{className:"page-banner",children:s.jsx("div",{className:"container",children:s.jsxs("div",{className:"page-banner-content",children:[s.jsx("span",{className:"breadcrumb-text",children:"Home / Contact"}),s.jsx("h1",{children:"Connect With ARSOS Trading"}),s.jsx("p",{style:{color:"rgba(255,255,255,0.85)",maxWidth:700,margin:"15px auto 0"},children:"Direct B2B procurement support for commercial supplies, industrial chemical orders, IT services, and hospitality inventory."})]})})}),s.jsxs("section",{className:"contact-cards section-padding",children:[s.jsx("div",{className:"container",children:s.jsx("div",{className:"row g-4 justify-content-center",children:R.map((M,G)=>s.jsx("div",{className:"col-lg-4 col-md-6",children:s.jsxs("div",{className:"contact-card reveal hover-lift",children:[s.jsx("div",{className:"cc-icon",children:s.jsx("i",{className:`bi ${M.icon}`})}),s.jsx("h5",{children:M.title}),s.jsx("strong",{className:"cc-value",children:M.value}),M.subtext&&s.jsx("p",{className:"cc-subtext",children:M.subtext}),M.actionLink?s.jsxs("div",{className:"d-flex gap-2 justify-content-center mt-3",children:[s.jsxs("a",{href:M.actionLink,className:"btn-cc-action",children:[M.actionText," ",s.jsx("i",{className:"bi bi-arrow-up-right"})]}),s.jsx("button",{onClick:()=>y(M.value,M.type),className:"btn-cc-copy",title:"Copy to clipboard",children:d===M.type?s.jsx("i",{className:"bi bi-check2 text-success fs-5"}):s.jsx("i",{className:"bi bi-clipboard fs-6"})})]}):s.jsx("span",{className:"badge bg-success mt-3 py-2 px-3",children:"Verified Active Line"})]})},M.title))})}),s.jsx("style",{children:`
          .contact-card {
            background: #fff;
            padding: 38px 28px;
            border-radius: 16px;
            text-align: center;
            height: 100%;
            box-shadow: var(--arsos-shadow-sm);
            transition: var(--arsos-transition);
            border-top: 4px solid var(--arsos-gold);
          }
          .contact-card:hover {
            transform: translateY(-8px);
            box-shadow: var(--arsos-shadow-lg);
          }
          .cc-icon {
            width: 65px;
            height: 65px;
            margin: 0 auto 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, var(--arsos-navy), var(--arsos-navy-light));
            border-radius: 14px;
            box-shadow: 0 8px 20px rgba(11,37,69,0.15);
          }
          .cc-icon i { font-size: 1.6rem; color: var(--arsos-gold); }
          .contact-card h5 { font-size: 1.1rem; color: var(--arsos-navy); margin-bottom: 8px; }
          .cc-value { display: block; font-family: 'Montserrat', sans-serif; font-size: 1.15rem; color: var(--arsos-navy); font-weight: 800; margin-bottom: 4px; }
          .cc-subtext { color: var(--arsos-text-light); font-size: 0.85rem; margin: 0; }
          .btn-cc-action {
            background: var(--arsos-navy);
            color: #fff;
            font-size: 0.84rem;
            font-weight: 700;
            padding: 8px 18px;
            border-radius: 8px;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            transition: all 0.3s ease;
          }
          .btn-cc-action:hover { background: var(--arsos-gold); color: var(--arsos-navy); }
          .btn-cc-copy {
            background: var(--arsos-gray);
            border: 1px solid var(--arsos-gray-dark);
            border-radius: 8px;
            padding: 6px 12px;
            cursor: pointer;
            transition: all 0.2s ease;
          }
          .btn-cc-copy:hover { background: #fff; border-color: var(--arsos-gold); }
        `})]}),s.jsxs("section",{className:"sector-hub section-padding bg-gray",children:[s.jsxs("div",{className:"container",children:[s.jsx(Xe,{subtitle:"Department Directory",title:"Interactive Sector Inquiry Hub",description:"Select a trading division to view direct product lines, fulfillment SLAs, and one-click quote triggers."}),s.jsxs("div",{className:"row g-4 align-items-center",children:[s.jsx("div",{className:"col-lg-4",children:s.jsx("div",{className:"sector-nav-list reveal-left",children:Ut.map(M=>s.jsxs("button",{onClick:()=>o(M.slug),className:`sector-nav-btn ${r===M.slug?"active":""}`,children:[s.jsx("i",{className:`bi ${M.icon}`}),s.jsxs("div",{className:"text-start",children:[s.jsx("strong",{children:M.title}),s.jsxs("small",{children:[M.shortDesc.slice(0,45),"..."]})]}),s.jsx("i",{className:"bi bi-chevron-right ms-auto arrow-icon"})]},M.slug))})}),s.jsx("div",{className:"col-lg-8",children:s.jsxs("div",{className:"sector-detail-display reveal-right",children:[s.jsx("div",{className:"sdd-header",children:s.jsxs("div",{className:"d-flex align-items-center gap-3",children:[s.jsx("div",{className:"sdd-icon",children:s.jsx("i",{className:`bi ${v.icon}`})}),s.jsxs("div",{children:[s.jsx("span",{className:"badge bg-warning text-dark mb-1",children:"Active Division"}),s.jsx("h3",{className:"mb-0 text-navy",children:v.title})]})]})}),s.jsxs("div",{className:"sdd-body mt-4",children:[s.jsx("p",{className:"lead fs-6 text-muted mb-4",children:v.intro}),s.jsx("h5",{className:"fw-bold text-navy mb-3",children:"Key Solutions & Product Catalog:"}),s.jsx("div",{className:"row g-2 mb-4",children:v.list.map(M=>s.jsx("div",{className:"col-md-6",children:s.jsxs("div",{className:"catalog-item",children:[s.jsx("i",{className:"bi bi-check-circle-fill text-gold"}),s.jsx("span",{children:M})]})},M))}),s.jsx("div",{className:"sdd-action-box",children:s.jsxs("div",{className:"d-flex flex-wrap align-items-center justify-content-between gap-3",children:[s.jsxs("div",{children:[s.jsx("small",{className:"d-block text-muted",children:"Direct Department Email"}),s.jsx("strong",{className:"text-navy fs-6",children:Ne.email})]}),s.jsxs("a",{href:`mailto:${Ne.email}?subject=Inquiry regarding ${v.title}`,className:"btn-arsos btn-arsos-primary",children:["Inquire For ",v.title," ",s.jsx("i",{className:"bi bi-envelope-paper-fill"})]})]})})]})]})})]})]}),s.jsx("style",{children:`
          .sector-nav-list { display: flex; flex-direction: column; gap: 12px; }
          .sector-nav-btn {
            display: flex;
            align-items: center;
            gap: 15px;
            padding: 18px;
            background: #fff;
            border: 2px solid transparent;
            border-radius: 12px;
            text-align: left;
            cursor: pointer;
            box-shadow: var(--arsos-shadow-sm);
            transition: all 0.3s ease;
          }
          .sector-nav-btn:hover { border-color: var(--arsos-gold); transform: translateX(5px); }
          .sector-nav-btn.active {
            background: var(--arsos-navy);
            color: #fff;
            border-color: var(--arsos-navy);
          }
          .sector-nav-btn i { font-size: 1.5rem; color: var(--arsos-gold); }
          .sector-nav-btn.active small { color: rgba(255,255,255,0.7); }
          .sector-nav-btn small { display: block; color: var(--arsos-text-light); font-size: 0.78rem; }
          .sector-nav-btn strong { display: block; font-family: 'Montserrat', sans-serif; font-size: 0.95rem; }
          .sector-nav-btn .arrow-icon { font-size: 0.9rem; }

          .sector-detail-display {
            background: #fff;
            padding: 40px;
            border-radius: 20px;
            box-shadow: var(--arsos-shadow);
            border-left: 6px solid var(--arsos-gold);
          }
          .sdd-icon {
            width: 55px;
            height: 55px;
            background: linear-gradient(135deg, var(--arsos-navy), var(--arsos-navy-light));
            color: var(--arsos-gold);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
          }
          .catalog-item {
            display: flex;
            align-items: center;
            gap: 10px;
            background: var(--arsos-gray);
            padding: 10px 14px;
            border-radius: 8px;
            font-size: 0.88rem;
            font-weight: 500;
          }
          .sdd-action-box {
            background: linear-gradient(135deg, rgba(201,169,97,0.1), rgba(11,37,69,0.05));
            border: 1px dashed var(--arsos-gold);
            padding: 20px 24px;
            border-radius: 12px;
          }
        `})]}),s.jsxs("section",{className:"quote-generator section-padding",children:[s.jsx("div",{className:"container",children:s.jsx("div",{className:"row justify-content-center",children:s.jsx("div",{className:"col-lg-10",children:s.jsx("div",{className:"generator-card reveal",children:s.jsxs("div",{className:"row g-4 align-items-center",children:[s.jsxs("div",{className:"col-lg-6",children:[s.jsx("span",{className:"section-subtitle",children:"Instant Email Link"}),s.jsx("h2",{className:"section-title text-start mb-3",children:"Generate Pre-Formatted Quote Request"}),s.jsx("p",{className:"text-muted mb-4",children:"Select your inquiry topic and company details below. Clicking launch will automatically open your computer's mail application with all parameters filled."}),s.jsxs("div",{className:"mb-3",children:[s.jsx("label",{className:"fw-bold mb-1 small text-navy",children:"Select Requirement Topic:"}),s.jsxs("select",{value:m,onChange:M=>g(M.target.value),className:"form-select py-2",children:[s.jsx("option",{value:"Bulk Wholesale Order",children:"Bulk Wholesale Order"}),s.jsx("option",{value:"Product Pricing & Quotation",children:"Product Pricing & Quotation"}),s.jsx("option",{value:"Product Samples Request",children:"Product Samples Request"}),s.jsx("option",{value:"B2B Contract & Partnership",children:"B2B Contract & Partnership"})]})]}),s.jsxs("div",{className:"mb-4",children:[s.jsx("label",{className:"fw-bold mb-1 small text-navy",children:"Company Name (Optional):"}),s.jsx("input",{type:"text",value:j,onChange:M=>T(M.target.value),placeholder:"e.g. Acme Commercial Ltd",className:"form-control py-2"})]}),s.jsxs("button",{onClick:w,className:"btn-arsos btn-arsos-navy w-100 py-3",children:["Open Email App With Draft ",s.jsx("i",{className:"bi bi-box-arrow-up-right ms-2"})]})]}),s.jsx("div",{className:"col-lg-6",children:s.jsxs("div",{className:"mail-preview-box",children:[s.jsxs("div",{className:"mp-header",children:[s.jsx("span",{className:"dot bg-danger"}),s.jsx("span",{className:"dot bg-warning"}),s.jsx("span",{className:"dot bg-success"}),s.jsx("small",{className:"ms-2 text-white-50",children:"Draft Email Preview"})]}),s.jsxs("div",{className:"mp-body",children:[s.jsxs("p",{children:[s.jsx("strong",{children:"To:"})," ",Ne.email]}),s.jsxs("p",{children:[s.jsx("strong",{children:"Subject:"})," [",m,"] ",j?"for "+j:"B2B Inquiry"]}),s.jsx("hr",{className:"border-secondary"}),s.jsxs("p",{className:"text-white-50 small mb-0",children:['"Hello ARSOS Trading Team,',s.jsx("br",{}),s.jsx("br",{}),"I am interested in learning more about your ",v.title," division.",s.jsx("br",{}),"Company: ",j||"[Your Company]",s.jsx("br",{}),"Inquiry Type: ",m,s.jsx("br",{}),s.jsx("br",{}),'Please provide catalog and pricing details."']})]})]})})]})})})})}),s.jsx("style",{children:`
          .generator-card {
            background: #fff;
            padding: 45px;
            border-radius: 20px;
            box-shadow: var(--arsos-shadow-lg);
            border-top: 5px solid var(--arsos-navy);
          }
          .mail-preview-box {
            background: var(--arsos-navy-dark);
            border-radius: 12px;
            overflow: hidden;
            color: #fff;
            box-shadow: 0 15px 35px rgba(0,0,0,0.25);
          }
          .mp-header {
            background: rgba(255,255,255,0.08);
            padding: 10px 16px;
            display: flex;
            align-items: center;
            gap: 6px;
          }
          .mp-header .dot { width: 10px; height: 10px; border-radius: 50%; display: inline-block; }
          .mp-body { padding: 20px; font-family: monospace; font-size: 0.88rem; }
        `})]}),s.jsxs("section",{className:"contact-faq section-padding bg-gray",children:[s.jsxs("div",{className:"container",children:[s.jsx(Xe,{subtitle:"Support Standards",title:"Procurement & Contact FAQs",description:"Common questions about placing B2B orders and direct communication channels."}),s.jsx("div",{className:"row justify-content-center",children:s.jsx("div",{className:"col-lg-8",children:s.jsxs("div",{className:"faq-list",children:[s.jsxs("div",{className:"faq-card reveal",children:[s.jsxs("h5",{children:[s.jsx("i",{className:"bi bi-clock-history text-gold me-2"})," How fast is your response time for B2B requests?"]}),s.jsx("p",{children:"Our dedicated procurement account managers respond to direct call and email inquiries within 2 hours during active business days."})]}),s.jsxs("div",{className:"faq-card reveal",style:{transitionDelay:"0.1s"},children:[s.jsxs("h5",{children:[s.jsx("i",{className:"bi bi-phone-vibrate text-gold me-2"})," Can I reach out directly via phone or WhatsApp?"]}),s.jsxs("p",{children:["Yes! You can contact our phone hotline at ",s.jsx("strong",{children:Ne.phone})," for urgent restock orders or commercial supply availability."]})]}),s.jsxs("div",{className:"faq-card reveal",style:{transitionDelay:"0.2s"},children:[s.jsxs("h5",{children:[s.jsx("i",{className:"bi bi-shield-check text-gold me-2"})," What information should I include for wholesale pricing?"]}),s.jsx("p",{children:"Mention your required product quantities, delivery frequency, and target sector division so our team can prepare an accurate wholesale quote."})]})]})})})]}),s.jsx("style",{children:`
          .faq-list { display: flex; flex-direction: column; gap: 16px; }
          .faq-card {
            background: #fff;
            padding: 24px 28px;
            border-radius: 12px;
            box-shadow: var(--arsos-shadow-sm);
            border-left: 4px solid var(--arsos-navy);
          }
          .faq-card h5 { font-size: 1rem; color: var(--arsos-navy); font-weight: 700; margin-bottom: 8px; }
          .faq-card p { color: var(--arsos-text-light); font-size: 0.9rem; margin: 0; line-height: 1.6; }
        `})]})]})},wx=()=>s.jsxs("section",{className:"notfound-section",children:[s.jsxs("div",{className:"container text-center",children:[s.jsx("div",{className:"nf-code",children:"404"}),s.jsx("h1",{children:"Page Not Found"}),s.jsx("p",{children:"The page you are looking for doesn't exist or has been moved."}),s.jsxs(ce,{to:"/",className:"btn-arsos btn-arsos-primary",children:["Back to Home ",s.jsx("i",{className:"bi bi-arrow-right"})]})]}),s.jsx("style",{children:`
        .notfound-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, var(--arsos-navy-dark), var(--arsos-navy));
          color: #fff;
          padding: 100px 0;
        }
        .nf-code {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(5rem, 15vw, 10rem);
          font-weight: 900;
          color: var(--arsos-gold);
          line-height: 1;
          margin-bottom: 20px;
          text-shadow: 0 20px 60px rgba(201,169,97,0.4);
        }
        .notfound-section h1 {
          color: #fff;
          font-size: clamp(1.5rem, 3vw, 2.2rem);
          margin-bottom: 15px;
        }
        .notfound-section p {
          color: rgba(255,255,255,0.8);
          max-width: 500px;
          margin: 0 auto 30px;
        }
      `})]}),Ox=()=>s.jsx(_p,{children:s.jsxs(Vt,{element:s.jsx(vx,{}),children:[s.jsx(Vt,{path:"/",element:s.jsx(Sx,{})}),s.jsx(Vt,{path:"/about",element:s.jsx(Nx,{})}),s.jsx(Vt,{path:"/sectors",element:s.jsx(Ex,{})}),s.jsx(Vt,{path:"/sectors/:slug",element:s.jsx(zx,{})}),s.jsx(Vt,{path:"/why-choose-us",element:s.jsx(Tx,{})}),s.jsx(Vt,{path:"/mission-vision",element:s.jsx(Ax,{})}),s.jsx(Vt,{path:"/contact",element:s.jsx(Rx,{})}),s.jsx(Vt,{path:"*",element:s.jsx(wx,{})})]})}),Cx=()=>{const r=xt();z.useEffect(()=>{const o=".reveal, .reveal-left, .reveal-right, .reveal-zoom",d=()=>{const j=document.querySelectorAll(o),T=new IntersectionObserver(y=>{y.forEach(v=>{v.isIntersecting&&(v.target.classList.add("active"),T.unobserve(v.target))})},{threshold:.05,rootMargin:"50px"});return j.forEach(y=>{const v=y.getBoundingClientRect();v.top<window.innerHeight+100&&v.bottom>-100?y.classList.add("active"):T.observe(y)}),T},u=d(),m=setTimeout(d,100),g=setTimeout(d,400);return()=>{clearTimeout(m),clearTimeout(g),u&&u.disconnect&&u.disconnect()}},[r.pathname])};function Mx(){return Cx(),s.jsx(Ox,{})}wv.createRoot(document.getElementById("root")).render(s.jsx(jv.StrictMode,{children:s.jsx(nx,{children:s.jsx(Mx,{})})}));
