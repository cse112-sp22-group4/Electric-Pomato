!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},a=t.parcelRequireeb0a;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},t.parcelRequireeb0a=a),a("gTwGg").register(JSON.parse('{"fUNVZ":"index.e7587049.js","bZNSi":"tomWhite.4536ba27.svg","5iLB4":"app.ec43743a.css","eIbTt":"tomGreen.65adb671.svg","aqrz1":"tomRed.4ca9ab57.svg","dfqia":"bombWhite.984eb9cc.svg","gvkby":"bombPomo.581c1a14.svg","bpG4J":"bombBreak.fed4648b.svg"}'));var o,r=a("fNRGU"),s=a("lt755");o=a("ai42B").getBundleURL("fUNVZ")+a("gTwGg").resolve("bZNSi");var l;l=a("ai42B").getBundleURL("fUNVZ")+a("gTwGg").resolve("eIbTt");var c;c=a("ai42B").getBundleURL("fUNVZ")+a("gTwGg").resolve("aqrz1");var d;d=a("ai42B").getBundleURL("fUNVZ")+a("gTwGg").resolve("dfqia");var g;g=a("ai42B").getBundleURL("fUNVZ")+a("gTwGg").resolve("gvkby");var f;f=a("ai42B").getBundleURL("fUNVZ")+a("gTwGg").resolve("bpG4J");var b={default:{urls:[e(o),e(l),e(c)],classes:["white-tomato","green-tomato","red-tomato"]},bomb:{urls:[e(d),e(g),e(f)],classes:["bomb-white","bomb-pomo"]}},u=function(e){"use strict";r.inherits(n,e);var t=r.createSuper(n);function n(){var e;r.classCallCheck(this,n),e=t.call(this);var i=b[s.get("Icon")].urls;return e.innerHTML='\n        <div class="intro-icons-wrapper">\n            <div class="intro-icons-item me-4">\n                <object id="icon1" class="legend-icon" type="image/svg+xml" data='.concat(i[1],'></object>\n                <h3 class="text-white mb-0">25 Minutes of Productivity</h3>\n            </div>\n            <div class="intro-icons-item">\n              <object id="icon1" class="legend-icon" type="image/svg+xml" data=').concat(i[2],'></object>\n              <h3 class="text-white mb-0">5 Minutes of Relaxing</h3>\n            </div>\n        </div>\n    '),e}return n}(r.wrapNativeSuper(HTMLElement));customElements.define("intro-icons",u)}();