!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=e.parcelRequireeb0a;null==o&&((o=function(t){if(t in r)return r[t].exports;if(t in n){var e=n[t];delete n[t];var o={id:t,exports:{}};return r[t]=o,e.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){n[t]=e},e.parcelRequireeb0a=o),o.register("fvJbE",(function(t,e){var r=function(t){var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,a=Object.create(o.prototype),i=new x(n||[]);return a._invoke=function(t,e,r){var n=l;return function(o,a){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw a;return j()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=S(i,r);if(c){if(c===_)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var f=s(t,e,r);if("normal"===f.type){if(n=r.done?p:d,f.arg===_)continue;return{value:f.arg,done:r.done}}"throw"===f.type&&(n=p,r.method="throw",r.arg=f.arg)}}}(t,r,i),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var l="suspendedStart",d="suspendedYield",h="executing",p="completed",_={};function v(){}function H(){}function y(){}var g={};f(g,a,(function(){return this}));var b=Object.getPrototypeOf,E=b&&b(b(L([])));E&&E!==r&&n.call(E,a)&&(g=E);var w=y.prototype=v.prototype=Object.create(g);function m(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function F(t,e){function r(o,a,i,c){var f=s(t[o],t,a);if("throw"!==f.type){var u=f.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(l).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,c)}))}c(f.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function S(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,S(t,r),"throw"===r.method))return _;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return _}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,_;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,_):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,_)}function R(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(R,this),this.reset(!0)}function L(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:j}}function j(){return{value:e,done:!0}}return H.prototype=y,f(w,"constructor",y),f(y,"constructor",H),H.displayName=f(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===H||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,f(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},m(F.prototype),f(F.prototype,i,(function(){return this})),t.AsyncIterator=F,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new F(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},m(w),f(w,c,"Generator"),f(w,a,(function(){return this})),f(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(A),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var f=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(f&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(f){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,_):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),_},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),A(r),_}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;A(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:L(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),_}},t}(t.exports);try{regeneratorRuntime=r}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}}));var a=[],i="";a=["app.html","favicon.4735240a.ico","manifest.webmanifest","icon144.ec504a2a.png","icon180.104b64df.png","icon196.6ce4a525.png","icon270.a203181d.png","icon512.5c15fe02.png","app.b87ebc73.css","app.3310e4d1.css","fa-brands-400.8cbcf94f.eot","fa-brands-400.ccd4367d.woff2","fa-brands-400.42a366ea.woff","fa-brands-400.07f7396f.ttf","fa-brands-400.9058b386.svg","fa-regular-400.205b19bc.eot","fa-regular-400.d2526071.woff2","fa-regular-400.8ac56b9e.woff","fa-regular-400.787d5e9c.ttf","fa-regular-400.21aab298.svg","fa-solid-900.56a336d1.eot","fa-solid-900.2dd19dd0.woff2","fa-solid-900.c7a67308.woff","fa-solid-900.d4e0ff2f.ttf","fa-solid-900.5e1bef1f.svg","app.b9025eb6.js","app.497d04bf.js","app.73e2eed4.js","app.abc4de9d.js","app.1193388f.js","app.c7395fb9.js","app.fc38380a.js","app.a356dbf1.js","app.bca4eaf1.js","app.917bd067.js","app.5ee7bade.js","app.a770fa45.js","app.354cd434.js","green-tomato.11c22c57.png","red-tomato.0725a987.png","app.e9ebf45b.js","green-tomato.11c22c57.png","red-tomato.0725a987.png","index.html","plug.c9074f30.svg","bolt.af8da129.png","index.f1f45b03.js","index.b23973f2.js","index.274fab36.js","index.d4751c7d.js","index.67f8b32d.js","index.fa27d91b.js"],i="7f803cf1";var c={};function f(t,e,r,n,o,a,i){try{var c=t[a](i),f=c.value}catch(t){return void r(t)}c.done?e(f):Promise.resolve(f).then(n,o)}c=function(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){f(a,n,o,i,c,"next",t)}function c(t){f(a,n,o,i,c,"throw",t)}i(void 0)}))}},c.__esModule=!0,c.default=c;var u;function s(){return(s=t(c)(t(u).mark((function e(){var r,n;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,caches.open(i);case 2:return r=t.sent,n=a.filter((function(t,e){return a.indexOf(t)===e})),t.next=6,r.addAll(n);case 6:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function l(){return(l=t(c)(t(u).mark((function e(){var r;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,caches.keys();case 2:return r=t.sent,t.next=5,Promise.all(r.map((function(t){return t!==i&&caches.delete(t)})));case 5:case"end":return t.stop()}}),e)})))).apply(this,arguments)}u=o("fvJbE"),self.addEventListener("install",(function(t){return t.waitUntil(function(){return s.apply(this,arguments)}())})),self.addEventListener("activate",(function(t){return t.waitUntil(function(){return l.apply(this,arguments)}())})),self.addEventListener("fetch",(function(t){t.respondWith(caches.match(t.request).then((function(e){return e||fetch(t.request)})))})),self.addEventListener("notificationclick",(function(t){console.log("On notification click"),t.notification.close(),t.waitUntil(clients.matchAll({type:"window"}).then((function(t){for(var e=0;e<t.length;e+=1)return t[e].focus()})))}))}();