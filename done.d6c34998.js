var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},t=e.parcelRequireeb0a;null==t&&((t=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var a={id:e,exports:{}};return r[e]=a,t.call(a.exports,a,a.exports),a.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,r){o[e]=r},e.parcelRequireeb0a=t);var a=t("lRuCA"),l=t("aHCh2"),i=t("kK746");window.addEventListener("load",(function(){const{tasklists:e}=JSON.parse((r="History",localStorage.getItem(r)));var r;["expected","actual"].forEach((r=>{const o=[];e.forEach((e=>{let t=0;e.forEach((e=>{t+=e[r]})),o.push(t)})),l.default.series.push(function(e,r,o){return{text:e.charAt(0).toUpperCase()+e.slice(1),values:r,lineColor:o,lineWidth:"2px",marker:{type:"square",backgroundColor:o,borderColor:o,shadow:!1,size:3},highlightMarker:{backgroundColor:o,borderColor:o,size:5},palette:0,shadow:!1,visible:!0}}(r,o,i.hex.pop()))})),a.default.render({id:"lineChart",data:l.default,height:500,width:"100%"})}));