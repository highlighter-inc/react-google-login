!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.GoogleLogin=t(require("react")):e.GoogleLogin=t(e.react)}("undefined"!=typeof self?self:this,(function(e){return o={},t.m=n=[function(t){t.exports=e},function(e,t,n){e.exports=n(2)()},function(e,t,n){"use strict";function o(){}function r(){}var i=n(3);r.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,r,c){if(c!==i){var a=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}var n={array:e.isRequired=e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:r,resetWarningCache:o};return n.PropTypes=n}},function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],o=!0,r=!1,i=void 0;try{for(var c,a=e[Symbol.iterator]();!(o=(c=a.next()).done)&&(n.push(c.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==a.return||a.return()}finally{if(r)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){null!=t&&t<=e.length||(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],o=!0,r=!1,i=void 0;try{for(var c,a=e[Symbol.iterator]();!(o=(c=a.next()).done)&&(n.push(c.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==a.return||a.return()}finally{if(r)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){null!=t&&t<=e.length||(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],o=!0,r=!1,i=void 0;try{for(var c,a=e[Symbol.iterator]();!(o=(c=a.next()).done)&&(n.push(c.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==a.return||a.return()}finally{if(r)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){null!=t&&t<=e.length||(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],o=!0,r=!1,i=void 0;try{for(var c,a=e[Symbol.iterator]();!(o=(c=a.next()).done)&&(n.push(c.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==a.return||a.return()}finally{if(r)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){null!=t&&t<=e.length||(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function p(e,t,n,o,r,i){var c=e.getElementsByTagName(t)[0],a=c,u=c;(u=e.createElement(t)).id=n,u.src=o,a&&a.parentNode?a.parentNode.insertBefore(u,a):e.head.appendChild(u),u.onerror=i,u.onload=r}function g(e,t){var n=e.getElementById(t);n&&n.parentNode.removeChild(n)}function y(e){return v.a.createElement("span",{style:{paddingRight:10,fontWeight:500,paddingLeft:e.icon?0:10,paddingTop:10,paddingBottom:10}},e.children)}function b(e){return v.a.createElement("div",{style:{marginRight:10,background:e.active?"#eee":"#fff",padding:10,borderRadius:2}},v.a.createElement("svg",{width:"18",height:"18",xmlns:"http://www.w3.org/2000/svg"},v.a.createElement("g",{fill:"#000",fillRule:"evenodd"},v.a.createElement("path",{d:"M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z",fill:"#EA4335"}),v.a.createElement("path",{d:"M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z",fill:"#4285F4"}),v.a.createElement("path",{d:"M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z",fill:"#FBBC05"}),v.a.createElement("path",{d:"M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z",fill:"#34A853"}),v.a.createElement("path",{fill:"none",d:"M0 0h18v18H0z"}))))}function m(e){var t=a(Object(h.useState)(!1),2),n=t[0],o=t[1],r=a(Object(h.useState)(!1),2),i=r[0],c=r[1],u=e.tag,l=e.type,s=e.className,f=e.disabledStyle,d=e.buttonText,p=e.children,g=e.render,m=e.theme,j=e.icon,O=e.disabled,w=S({onSuccess:e.onSuccess,onAutoLoadFinished:e.onAutoLoadFinished,onRequest:e.onRequest,onFailure:e.onFailure,onScriptLoadFailure:e.onScriptLoadFailure,clientId:e.clientId,cookiePolicy:e.cookiePolicy,loginHint:e.loginHint,hostedDomain:e.hostedDomain,autoLoad:e.autoLoad,isSignedIn:e.isSignedIn,fetchBasicProfile:e.fetchBasicProfile,redirectUri:e.redirectUri,discoveryDocs:e.discoveryDocs,uxMode:e.uxMode,scope:e.scope,accessType:e.accessType,responseType:e.responseType,jsSrc:e.jsSrc,prompt:e.prompt}),x=w.signIn,I=O||!w.loaded;if(g)return g({onClick:x,disabled:I});var k={backgroundColor:"dark"===m?"rgb(66, 133, 244)":"#fff",display:"inline-flex",alignItems:"center",color:"dark"===m?"#fff":"rgba(0, 0, 0, .54)",boxShadow:"0 2px 2px 0 rgba(0, 0, 0, .24), 0 0 1px 0 rgba(0, 0, 0, .24)",padding:0,borderRadius:2,border:"1px solid transparent",fontSize:14,fontWeight:"500",fontFamily:"Roboto, sans-serif"},_={cursor:"pointer",backgroundColor:"dark"===m?"#3367D6":"#eee",color:"dark"===m?"#fff":"rgba(0, 0, 0, .54)",opacity:1},A=I?Object.assign({},k,f):i?Object.assign({},k,_):n?Object.assign({},k,{cursor:"pointer",opacity:.9}):k;return v.a.createElement(u,{onMouseEnter:function(){return o(!0)},onMouseLeave:function(){o(!1),c(!1)},onMouseDown:function(){return c(!0)},onMouseUp:function(){return c(!1)},onClick:x,style:A,type:l,disabled:I,className:s},[j&&v.a.createElement(b,{key:1,active:i}),v.a.createElement(y,{icon:j,key:2},p||d)])}n.r(t),n.d(t,"default",(function(){return O})),n.d(t,"GoogleLogin",(function(){return O})),n.d(t,"GoogleLogout",(function(){return x})),n.d(t,"useGoogleLogin",(function(){return S})),n.d(t,"useGoogleLogout",(function(){return w}));var h=n(0),v=n.n(h),S=(n(1),function(e){function t(e){var t=e.getBasicProfile(),n=e.getAuthResponse(!0);e.googleId=t.getId(),e.tokenObj=n,e.tokenId=n.id_token,e.accessToken=n.access_token,e.profileObj={googleId:t.getId(),imageUrl:t.getImageUrl(),email:t.getEmail(),name:t.getName(),givenName:t.getGivenName(),familyName:t.getFamilyName()},a(e)}function n(e){if(e&&e.preventDefault(),C){var n=window.gapi.auth2.getAuthInstance();if(y(),"code"===E){var i=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({prompt:M},"redirect"===_?{redirect_uri:I||window.location.href}:{});n.grantOfflineAccess(i).then((function(e){return a(e)}),(function(e){return f(e)}))}else n.signIn({prompt:M}).then((function(e){return t(e)}),(function(e){return f(e)}))}}var c=e.onSuccess,a=void 0===c?function(){}:c,u=e.onAutoLoadFinished,l=void 0===u?function(){}:u,s=e.onFailure,f=void 0===s?function(){}:s,d=e.onRequest,y=void 0===d?function(){}:d,b=e.onScriptLoadFailure,m=e.clientId,v=e.cookiePolicy,S=e.loginHint,j=e.hostedDomain,O=e.autoLoad,w=e.isSignedIn,x=e.fetchBasicProfile,I=e.redirectUri,k=e.discoveryDocs,_=e.uxMode,A=e.scope,P=e.accessType,E=e.responseType,T=e.jsSrc,L=void 0===T?"https://apis.google.com/js/api.js":T,M=e.prompt,D=i(Object(h.useState)(!1),2),C=D[0],F=D[1];return Object(h.useEffect)((function(){var e=!1,n=b||f;return p(document,"script","google-login",L,(function(){var o={client_id:m,cookie_policy:v,login_hint:S,hosted_domain:j,fetch_basic_profile:x,discoveryDocs:k,ux_mode:_,redirect_uri:I,scope:A,access_type:P};"code"===E&&(o.access_type="offline"),window.gapi.load("auth2",(function(){var r=window.gapi.auth2.getAuthInstance();r?r.then((function(){e||(w&&r.isSignedIn.get()?(F(!0),l(!0),t(r.currentUser.get())):(F(!0),l(!1)))}),(function(e){f(e)})):window.gapi.auth2.init(o).then((function(n){if(!e){F(!0);var o=w&&n.isSignedIn.get();l(o),o&&t(n.currentUser.get())}}),(function(e){F(!0),l(!1),n(e)}))}))}),(function(e){n(e)})),function(){e=!0,g(document,"google-login")}}),[]),Object(h.useEffect)((function(){O&&n()}),[C]),{signIn:n,loaded:C}});function j(e){var t=f(Object(h.useState)(!1),2),n=t[0],o=t[1],r=f(Object(h.useState)(!1),2),i=r[0],c=r[1],a=e.tag,u=e.type,l=e.className,s=e.disabledStyle,d=e.buttonText,p=e.children,g=e.render,m=e.theme,S=e.icon,j=e.disabled,O=w({jsSrc:e.jsSrc,onFailure:e.onFailure,onScriptLoadFailure:e.onScriptLoadFailure,clientId:e.clientId,cookiePolicy:e.cookiePolicy,loginHint:e.loginHint,hostedDomain:e.hostedDomain,fetchBasicProfile:e.fetchBasicProfile,discoveryDocs:e.discoveryDocs,uxMode:e.uxMode,redirectUri:e.redirectUri,scope:e.scope,accessType:e.accessType,onLogoutSuccess:e.onLogoutSuccess}),x=O.signOut,I=j||!O.loaded;if(g)return g({onClick:x,disabled:I});var k={backgroundColor:"dark"===m?"rgb(66, 133, 244)":"#fff",display:"inline-flex",alignItems:"center",color:"dark"===m?"#fff":"rgba(0, 0, 0, .54)",boxShadow:"0 2px 2px 0 rgba(0, 0, 0, .24), 0 0 1px 0 rgba(0, 0, 0, .24)",padding:0,borderRadius:2,border:"1px solid transparent",fontSize:14,fontWeight:"500",fontFamily:"Roboto, sans-serif"},_={cursor:"pointer",backgroundColor:"dark"===m?"#3367D6":"#eee",color:"dark"===m?"#fff":"rgba(0, 0, 0, .54)",opacity:1},A=I?Object.assign({},k,s):i?Object.assign({},k,_):n?Object.assign({},k,{cursor:"pointer",opacity:.9}):k;return v.a.createElement(a,{onMouseEnter:function(){return o(!0)},onMouseLeave:function(){o(!1),c(!1)},onMouseDown:function(){return c(!0)},onMouseUp:function(){return c(!1)},onClick:x,style:A,type:u,disabled:I,className:l},[S&&v.a.createElement(b,{key:1,active:i}),v.a.createElement(y,{icon:S,key:2},p||d)])}m.defaultProps={type:"button",tag:"button",buttonText:"Sign in with Google",scope:"profile email",accessType:"online",prompt:"",cookiePolicy:"single_host_origin",fetchBasicProfile:!0,isSignedIn:!1,uxMode:"popup",disabledStyle:{opacity:.6},icon:!0,theme:"light",onRequest:function(){}};var O=m,w=function(e){var t=e.jsSrc,n=void 0===t?"https://apis.google.com/js/api.js":t,o=e.onFailure,r=e.onScriptLoadFailure,i=e.clientId,c=e.cookiePolicy,a=e.loginHint,u=e.hostedDomain,s=e.fetchBasicProfile,f=e.discoveryDocs,d=e.uxMode,y=e.redirectUri,b=e.scope,m=e.accessType,v=e.onLogoutSuccess,S=l(Object(h.useState)(!1),2),j=S[0],O=S[1],w=Object(h.useCallback)((function(){if(window.gapi){var e=window.gapi.auth2.getAuthInstance();null!=e&&e.then((function(){e.signOut().then((function(){e.disconnect(),v()}))}),(function(e){return o(e)}))}}),[v]);return Object(h.useEffect)((function(){var e=r||o;return p(document,"script","google-login",n,(function(){var t={client_id:i,cookie_policy:c,login_hint:a,hosted_domain:u,fetch_basic_profile:s,discoveryDocs:f,ux_mode:d,redirect_uri:y,scope:b,access_type:m};window.gapi.load("auth2",(function(){window.gapi.auth2.getAuthInstance()?O(!0):window.gapi.auth2.init(t).then((function(){return O(!0)}),(function(t){return e(t)}))}))}),(function(t){e(t)})),function(){g(document,"google-login")}}),[]),{signOut:w,loaded:j}};j.defaultProps={type:"button",tag:"button",buttonText:"Logout of Google",disabledStyle:{opacity:.6},icon:!0,theme:"light",jsSrc:"https://apis.google.com/js/api.js"};var x=j}],t.c=o,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(t){return e[t]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=4);function t(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return n[e].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n,o}));