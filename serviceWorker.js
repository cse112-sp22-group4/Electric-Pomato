!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},a=e.parcelRequireeb0a;null==a&&((a=function(t){if(t in r)return r[t].exports;if(t in n){var e=n[t];delete n[t];var a={id:t,exports:{}};return r[t]=a,e.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){n[t]=e},e.parcelRequireeb0a=a),a.register("fvJbE",(function(t,e){var r=function(t){var e,r=Object.prototype,n=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var a=e&&e.prototype instanceof H?e:H,o=Object.create(a.prototype),i=new x(n||[]);return o._invoke=function(t,e,r){var n=u;return function(a,o){if(n===_)throw new Error("Generator is already running");if(n===p){if("throw"===a)throw o;return L()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=S(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===u)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=_;var f=d(t,e,r);if("normal"===f.type){if(n=r.done?p:l,f.arg===h)continue;return{value:f.arg,done:r.done}}"throw"===f.type&&(n=p,r.method="throw",r.arg=f.arg)}}}(t,r,i),o}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var u="suspendedStart",l="suspendedYield",_="executing",p="completed",h={};function H(){}function b(){}function g(){}var v={};f(v,o,(function(){return this}));var E=Object.getPrototypeOf,m=E&&E(E(j([])));m&&m!==r&&n.call(m,o)&&(v=m);var y=g.prototype=H.prototype=Object.create(v);function F(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function R(t,e){function r(a,o,i,c){var f=d(t[a],t,o);if("throw"!==f.type){var s=f.arg,u=s.value;return u&&"object"==typeof u&&n.call(u,"__await")?e.resolve(u.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(u).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(f.arg)}var a;this._invoke=function(t,n){function o(){return new e((function(e,a){r(t,n,e,a)}))}return a=a?a.then(o,o):o()}}function S(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,S(t,r),"throw"===r.method))return h;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var a=d(n,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,h;var o=a.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,h):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function w(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function j(t){if(t){var r=t[o];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function r(){for(;++a<t.length;)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:L}}function L(){return{value:e,done:!0}}return b.prototype=g,f(y,"constructor",g),f(g,"constructor",b),b.displayName=f(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,f(t,c,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},F(R.prototype),f(R.prototype,i,(function(){return this})),t.AsyncIterator=R,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new R(s(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},F(y),f(y,c,"Generator"),f(y,o,(function(){return this})),f(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=j,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(w),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return c.type="throw",c.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var f=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(f&&s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(f){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),w(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;w(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:j(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),h}},t}(t.exports);try{regeneratorRuntime=r}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}}));var o=[],i="";o=["app.html","favicon.24616066.ico","favicon.24616066.ico","manifest.webmanifest","icon144.9e512351.png","icon180.619c2ff5.png","icon196.115a798c.png","icon270.b65a7aef.png","icon512.0bc941a9.png","logo.062efb47.png","app.03fbd711.css","app.3310e4d1.css","fa-brands-400.8cbcf94f.eot","fa-brands-400.ccd4367d.woff2","fa-brands-400.42a366ea.woff","fa-brands-400.07f7396f.ttf","fa-brands-400.9058b386.svg","fa-regular-400.205b19bc.eot","fa-regular-400.d2526071.woff2","fa-regular-400.8ac56b9e.woff","fa-regular-400.787d5e9c.ttf","fa-regular-400.21aab298.svg","fa-solid-900.56a336d1.eot","fa-solid-900.2dd19dd0.woff2","fa-solid-900.c7a67308.woff","fa-solid-900.d4e0ff2f.ttf","fa-solid-900.5e1bef1f.svg","app.b9025eb6.js","app.497d04bf.js","app.0fcc8e41.js","app.b86fddca.js","app.e21ed2d2.js","create-task-list.b1df0954.png","create-task-list-mobile.182adab8.png","viewable-task-list.42886a1b.png","viewable-task-list-mobile.0c6e6bd8.png","stats-modal.38254d23.png","stats-modal-mobile.632e5be2.png","settings-modal.32c6b028.png","tomGreen.55867c5a.svg","tomRed.5e117819.svg","app.8e177f0e.js","create-task-list.b1df0954.png","create-task-list-mobile.182adab8.png","viewable-task-list.42886a1b.png","viewable-task-list-mobile.0c6e6bd8.png","stats-modal.38254d23.png","stats-modal-mobile.632e5be2.png","settings-modal.32c6b028.png","tomGreen.55867c5a.svg","tomRed.5e117819.svg","app.794e8953.js","app.fbca376c.js","app.f2cedd7c.js","app.91014dba.js","app.cba1b413.js","tomWhite.be97e1ed.svg","bombWhite.5ad8da52.svg","bombPomo.3ba6611e.svg","bombBreak.a1af8f27.svg","app.fc749879.js","tomWhite.be97e1ed.svg","bombWhite.5ad8da52.svg","bombPomo.3ba6611e.svg","bombBreak.a1af8f27.svg","app.b3fc57a9.js","green-tomato.11c22c57.png","red-tomato.0725a987.png","notification-ping.09726ea8.mp3","app.2a0d325a.js","green-tomato.11c22c57.png","red-tomato.0725a987.png","favicon.24616066.ico","notification-ping.09726ea8.mp3","index.html","plug.c9074f30.svg","bolt.af8da129.png","index.1b9d68dc.js","index.80b2641e.js","index.d45eef83.js","index.96ab0f1d.js","index.67f8b32d.js","index.fa27d91b.js","index.7406efd8.js","index.bcc11db2.js"],i="68a82a80";var c={};function f(t,e,r,n,a,o,i){try{var c=t[o](i),f=c.value}catch(t){return void r(t)}c.done?e(f):Promise.resolve(f).then(n,a)}c=function(t){return function(){var e=this,r=arguments;return new Promise((function(n,a){var o=t.apply(e,r);function i(t){f(o,n,a,i,c,"next",t)}function c(t){f(o,n,a,i,c,"throw",t)}i(void 0)}))}},c.__esModule=!0,c.default=c;var s;function d(){return(d=t(c)(t(s).mark((function e(){var r,n;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,caches.open(i);case 2:return r=t.sent,n=o.filter((function(t,e){return o.indexOf(t)===e})),t.next=6,r.addAll(n);case 6:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function u(){return(u=t(c)(t(s).mark((function e(){var r;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,caches.keys();case 2:return r=t.sent,t.next=5,Promise.all(r.map((function(t){return t!==i&&caches.delete(t)})));case 5:case"end":return t.stop()}}),e)})))).apply(this,arguments)}s=a("fvJbE"),self.addEventListener("install",(function(t){return t.waitUntil(function(){return d.apply(this,arguments)}())})),self.addEventListener("activate",(function(t){return t.waitUntil(function(){return u.apply(this,arguments)}())})),self.addEventListener("fetch",(function(t){t.respondWith(caches.match(t.request).then((function(e){return e||fetch(t.request)})))})),self.addEventListener("notificationclick",(function(t){console.log("On notification click"),t.notification.close(),t.waitUntil(clients.matchAll({type:"window"}).then((function(t){for(var e=0;e<t.length;e+=1)return t[e].focus()})))}))}();