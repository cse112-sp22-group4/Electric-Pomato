function e(e,t,s,i){Object.defineProperty(e,t,{get:s,set:i,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},o={},n=s.parcelRequireeb0a;null==n&&((n=function(e){if(e in i)return i[e].exports;if(e in o){var t=o[e];delete o[e];var s={id:e,exports:{}};return i[e]=s,t.call(s.exports,s,s.exports),s.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){o[e]=t},s.parcelRequireeb0a=n),n.register("gC69E",(function(t,s){var i,o;e(t.exports,"register",(function(){return i}),(function(e){return i=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var n={};i=function(e){for(var t=Object.keys(e),s=0;s<t.length;s++)n[t[s]]=e[t[s]]},o=function(e){var t=n[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),n.register("7BPx9",(function(s,i){e(s.exports,"default",(function(){return u}));var o=n("4IvSx"),r=n("cTnYg"),a=n("dQPYy"),l=n("djQyB"),d=n("isThg"),c=n("9Ljtl");var u={default:{urls:[t(o),t(r),t(a)],classes:["white-tomato","green-tomato","red-tomato"]},bomb:{urls:[t(l),t(d),t(c)],classes:["bomb-white","bomb-pomo"]}}})),n.register("4IvSx",(function(e,t){e.exports=new URL(n("gC69E").resolve("icf6U"),import.meta.url).toString()})),n.register("cTnYg",(function(e,t){e.exports=new URL(n("gC69E").resolve("67yzi"),import.meta.url).toString()})),n.register("dQPYy",(function(e,t){e.exports=new URL(n("gC69E").resolve("4fv9F"),import.meta.url).toString()})),n.register("djQyB",(function(e,t){e.exports=new URL(n("gC69E").resolve("6nBsH"),import.meta.url).toString()})),n.register("isThg",(function(e,t){e.exports=new URL(n("gC69E").resolve("m2uhn"),import.meta.url).toString()})),n.register("9Ljtl",(function(e,t){e.exports=new URL(n("gC69E").resolve("65JhW"),import.meta.url).toString()})),n("gC69E").register(JSON.parse('{"434uz":"app.65284fe6.js","icf6U":"tomWhite.b0af03b4.svg","5iLB4":"app.adcf40ee.css","67yzi":"tomGreen.a71fdabd.svg","4fv9F":"tomRed.fed48f5e.svg","6nBsH":"bombWhite.9f23c785.svg","m2uhn":"bombPomo.d1382fca.svg","65JhW":"bombBreak.ec033447.svg"}'));var r=n("7BPx9"),a=n("6bnRN");class l extends HTMLElement{connectedCallback(){this.updateState()}updateState(){this.input.disabled?this.defaultMode():this.editMode()}colorTomatos(e,t){this.tomatos.forEach(((s,i)=>{s.classList.value=0!==i&&i<e?t:this.svgClasses[0]}))}render(){this.input.disabled?this.querySelectorAll(".slider-tomato").forEach(((e,t)=>{t<this.input.value?e.setAttribute("data",this.svgUrls[1]):e.setAttribute("data",this.svgUrls[0])})):(this.tomatos=[],this.querySelectorAll(".slider-tomato").forEach((e=>{"0"===e.getAttribute("id")?e.setAttribute("data",this.svgUrls[1]):e.setAttribute("data",this.svgUrls[0]),e.addEventListener("load",(()=>{const t=e.contentDocument;this.tomatos[e.getAttribute("id")]=t.querySelector(".slider-tomato > g")}))})))}handleClick(e){const{left:t,right:s}=this.querySelector(".slider-tomato-container").getBoundingClientRect();this.input.value=Math.min(Math.ceil((e.clientX-t+1)/((s-t)/5)),5)}handleMouseLeave(){this.colorTomatos(Number(this.input.value),this.svgClasses[1])}handleMouseMove(e){const{left:t,right:s}=this.querySelector(".slider-tomato-container").getBoundingClientRect(),i=Math.min(Math.max(Math.ceil((e.clientX-t)/((s-t)/5)),1),5);this.colorTomatos(i,this.svgClasses[1])}editMode(){this.render(),this.container.style.cursor="pointer",this.container.addEventListener("click",this.handleClick),this.container.addEventListener("mouseleave",this.handleMouseLeave),this.container.addEventListener("mousemove",this.handleMouseMove)}defaultMode(){this.render(),this.container.style.cursor="default",this.container.removeEventListener("click",this.handleClick),this.container.removeEventListener("mouseleave",this.handleMouseLeave),this.container.removeEventListener("mousemove",this.handleMouseMove)}constructor(){super(),this.svgUrls=r.default[a.get("Icon")].urls,this.svgClasses=r.default[a.get("Icon")].classes;const e=document.createElement("template");e.innerHTML='\n      <div class="d-flex justify-content-between align-items-center slider-tomato-container">\n        <object id=0 class="slider-tomato" type="image/svg+xml" data=""></object>\n        <object id=1 class="slider-tomato" type="image/svg+xml" data=""></object>\n        <object id=2 class="slider-tomato" type="image/svg+xml" data=""></object>\n        <object id=3 class="slider-tomato" type="image/svg+xml" data=""></object>\n        <object id=4 class="slider-tomato" type="image/svg+xml" data=""></object>\n      </div>\n    ',this.appendChild(e.content.cloneNode(!0)),this.input=this.firstElementChild,this.container=this.lastElementChild,this.input.style.display="none",this.handleClick=this.handleClick.bind(this),this.handleMouseMove=this.handleMouseMove.bind(this),this.handleMouseLeave=this.handleMouseLeave.bind(this);new MutationObserver((e=>{e.forEach((e=>{"disabled"===e.attributeName&&this.updateState()}))})).observe(this.input,{attributes:!0})}}customElements.define("tomato-slider",l);