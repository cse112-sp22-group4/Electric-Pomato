!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequireeb0a;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},t.parcelRequireeb0a=i),i("gTwGg").register(JSON.parse('{"fUNVZ":"index.95c53ad4.js","ar9ou":"tomWhite.4bd5369b.svg","5iLB4":"app.77f0d545.css","jCc4N":"tomGreen.3eb09500.svg","3xozp":"tomRed.88a63ce8.svg","2HHZV":"bombWhite.7ca33c0e.svg","7uK28":"bombPomo.b7b61f84.svg","2kIgK":"bombBreak.14abf4f1.svg"}'));var a,r=i("fNRGU"),s=i("lt755");a=i("ai42B").getBundleURL("fUNVZ")+i("gTwGg").resolve("ar9ou");var l;l=i("ai42B").getBundleURL("fUNVZ")+i("gTwGg").resolve("jCc4N");var c;c=i("ai42B").getBundleURL("fUNVZ")+i("gTwGg").resolve("3xozp");var d;d=i("ai42B").getBundleURL("fUNVZ")+i("gTwGg").resolve("2HHZV");var f;f=i("ai42B").getBundleURL("fUNVZ")+i("gTwGg").resolve("7uK28");var g;g=i("ai42B").getBundleURL("fUNVZ")+i("gTwGg").resolve("2kIgK");var u={default:{urls:[e(a),e(l),e(c)],classes:["white-tomato","green-tomato","red-tomato"]},bomb:{urls:[e(d),e(f),e(g)],classes:["bomb-white","bomb-pomo"]}},v=function(e){"use strict";r.inherits(n,e);var t=r.createSuper(n);function n(){var e;r.classCallCheck(this,n),e=t.call(this);var o=u[s.get("Icon")].urls;return e.innerHTML='\n        <div class="intro-icons-wrapper">\n            <div class="intro-icons-item me-4">\n                <object id="icon1" class="legend-icon" type="image/svg+xml" data='.concat(o[1],'></object>\n                <h3 class="text-white mb-0">25 Minutes of Productivity</h3>\n            </div>\n            <div class="intro-icons-item">\n              <object id="icon1" class="legend-icon" type="image/svg+xml" data=').concat(o[2],'></object>\n              <h3 class="text-white mb-0">5 Minutes of Relaxing</h3>\n            </div>\n        </div>\n    '),e}return n}(r.wrapNativeSuper(HTMLElement));customElements.define("intro-icons",v)}();