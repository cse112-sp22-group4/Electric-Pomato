var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},i=e.parcelRequireeb0a;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in o){var i=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,i.call(n.exports,n,n.exports),n.exports}var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}).register=function(e,r){o[e]=r},e.parcelRequireeb0a=i),i("gC69E").register(JSON.parse('{"ideNE":"index.80b2641e.js","3CYC2":"serviceWorker.js"}'));var n;n=new URL(i("gC69E").resolve("3CYC2"),import.meta.url).toString(),(window.Cypress||"serviceWorker"in navigator)&&navigator.serviceWorker.register(n).then((e=>{console.log("Service Worker Registration succeeded",e)}),(e=>{console.log("Service Worker Registration failed",e)}));