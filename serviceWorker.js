!function(){function t(t){return t&&t.__esModule?t.default:t}var e=[],r="";function n(t,e,r,n,a,o,i){try{var c=t[o](i),f=c.value}catch(t){return void r(t)}c.done?e(f):Promise.resolve(f).then(n,a)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(a,o){var i=t.apply(e,r);function c(t){n(i,a,o,c,f,"next",t)}function f(t){n(i,a,o,c,f,"throw",t)}c(void 0)}))}}e=["app.html","favicon.24616066.ico","favicon.24616066.ico","icon180.619c2ff5.png","manifest.webmanifest","icon144.9e512351.png","icon196.115a798c.png","icon270.b65a7aef.png","icon512.0bc941a9.png","logo.56a72457.webp","app.b4a62fa8.css","cyrillic-neucha.335d2d47.woff2","latin-neucha.478937a5.woff2","app.486753fc.css","fa-brands-400.8cbcf94f.eot","fa-brands-400.ccd4367d.woff2","fa-brands-400.42a366ea.woff","fa-brands-400.07f7396f.ttf","fa-brands-400.9058b386.svg","fa-regular-400.205b19bc.eot","fa-regular-400.d2526071.woff2","fa-regular-400.8ac56b9e.woff","fa-regular-400.787d5e9c.ttf","fa-regular-400.21aab298.svg","fa-solid-900.56a336d1.eot","fa-solid-900.2dd19dd0.woff2","fa-solid-900.c7a67308.woff","fa-solid-900.d4e0ff2f.ttf","fa-solid-900.5e1bef1f.svg","app.b9025eb6.js","app.eb90018d.js","app.d782dad9.js","app.ddec1867.js","app.18dce31d.js","create-task-list.225c7430.webp","create-task-list-mobile.0a4d466b.webp","viewable-task-list.032259a1.webp","viewable-task-list-mobile.06c4ab7a.webp","stats-modal.e450f145.webp","stats-modal-mobile.384bdd71.webp","settings-modal.0d8d240d.webp","tomGreen.8be1b5c9.svg","tomRed.808e0df1.svg","app.2d3f987d.js","create-task-list.225c7430.webp","create-task-list-mobile.0a4d466b.webp","viewable-task-list.032259a1.webp","viewable-task-list-mobile.06c4ab7a.webp","stats-modal.e450f145.webp","stats-modal-mobile.384bdd71.webp","settings-modal.0d8d240d.webp","tomGreen.8be1b5c9.svg","tomRed.808e0df1.svg","app.713813ec.js","app.a837dbff.js","app.e1e50cea.js","app.61981371.js","app.7fe7749e.js","tomWhite.d22b537f.svg","bombWhite.01203ee8.svg","bombPomo.bc275272.svg","bombBreak.81b3263a.svg","app.8f42e211.js","tomWhite.d22b537f.svg","bombWhite.01203ee8.svg","bombPomo.bc275272.svg","bombBreak.81b3263a.svg","app.491a1703.js","green-tomato.9ac9f5f8.webp","red-tomato.eb90cfda.webp","notification-ping.09726ea8.mp3","app.8a8a07e1.js","app.26419628.js","green-tomato.9ac9f5f8.webp","red-tomato.eb90cfda.webp","favicon.24616066.ico","notification-ping.09726ea8.mp3","index.html","plug.c9074f30.svg","bolt.ea2148f5.webp","index.fcfe7c41.js","index.f60096a4.js","index.70ebab45.js","index.fa27d91b.js","index.a4bfc11e.js","index.ecfb695c.js","index.1b9d68dc.js","index.80b2641e.js"],r="2fc3500b";var o={},i=function(t){var e,r=Object.prototype,n=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var a=e&&e.prototype instanceof h?e:h,o=Object.create(a.prototype),i=new x(n||[]);return o._invoke=function(t,e,r){var n=l;return function(a,o){if(n===_)throw new Error("Generator is already running");if(n===p){if("throw"===a)throw o;return L()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=R(i,r);if(c){if(c===H)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=_;var f=u(t,e,r);if("normal"===f.type){if(n=r.done?p:d,f.arg===H)continue;return{value:f.arg,done:r.done}}"throw"===f.type&&(n=p,r.method="throw",r.arg=f.arg)}}}(t,r,i),o}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var l="suspendedStart",d="suspendedYield",_="executing",p="completed",H={};function h(){}function b(){}function v(){}var E={};f(E,o,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(j([])));m&&m!==r&&n.call(m,o)&&(E=m);var y=v.prototype=h.prototype=Object.create(E);function F(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function r(a,o,i,c){var f=u(t[a],t,o);if("throw"!==f.type){var s=f.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(l).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(f.arg)}var a;this._invoke=function(t,n){function o(){return new e((function(e,a){r(t,n,e,a)}))}return a=a?a.then(o,o):o()}}function R(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,R(t,r),"throw"===r.method))return H;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return H}var a=u(n,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,H;var o=a.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,H):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,H)}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function w(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function j(t){if(t){var r=t[o];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function r(){for(;++a<t.length;)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:L}}function L(){return{value:e,done:!0}}return b.prototype=v,f(y,"constructor",v),f(v,"constructor",b),b.displayName=f(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,f(t,c,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},F(S.prototype),f(S.prototype,i,(function(){return this})),t.AsyncIterator=S,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new S(s(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},F(y),f(y,c,"Generator"),f(y,o,(function(){return this})),f(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=j,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(w),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return c.type="throw",c.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var f=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(f&&s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(f){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,H):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),H},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),w(r),H}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;w(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:j(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),H}},t}(o);try{regeneratorRuntime=i}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=i:Function("r","regeneratorRuntime = r")(i)}function c(){return(c=a(t(o).mark((function n(){var a,i;return t(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,caches.open(r);case 2:return a=t.sent,i=e.filter((function(t,r){return e.indexOf(t)===r})),t.next=6,a.addAll(i);case 6:case"end":return t.stop()}}),n)})))).apply(this,arguments)}function f(){return(f=a(t(o).mark((function e(){var n;return t(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,caches.keys();case 2:return n=t.sent,t.next=5,Promise.all(n.map((function(t){return t!==r&&caches.delete(t)})));case 5:case"end":return t.stop()}}),e)})))).apply(this,arguments)}self.addEventListener("install",(function(t){return t.waitUntil(function(){return c.apply(this,arguments)}())})),self.addEventListener("activate",(function(t){return t.waitUntil(function(){return f.apply(this,arguments)}())})),self.addEventListener("fetch",(function(t){t.respondWith(caches.match(t.request).then((function(e){return e||fetch(t.request)})))})),self.addEventListener("notificationclick",(function(t){console.log("On notification click"),t.notification.close(),t.waitUntil(clients.matchAll({type:"window"}).then((function(t){for(var e=0;e<t.length;e+=1)return t[e].focus()})))}))}();