function t(t,e,n,o){Object.defineProperty(t,e,{get:n,set:o,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=e.parcelRequireeb0a;null==i&&((i=function(t){if(t in n)return n[t].exports;if(t in o){var e=o[t];delete o[t];var i={id:t,exports:{}};return n[t]=i,e.call(i.exports,i,i.exports),i.exports}var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){o[t]=e},e.parcelRequireeb0a=i),i.register("6bnRN",(function(e,n){function o(t){return localStorage.getItem(t)}function i(t,e){localStorage.setItem(t,e)}function s(){localStorage.removeItem("TaskList"),localStorage.removeItem("Started"),localStorage.removeItem("TotalPomos"),localStorage.removeItem("Timer")}t(e.exports,"get",(function(){return o})),t(e.exports,"set",(function(){return i})),t(e.exports,"removeAll",(function(){return s}))})),i.register("kor14",(function(e,n){t(e.exports,"default",(function(){return i}));class o{static show(){document.querySelector("#notification").style.display="flex"}static hide(){document.querySelector("#notification").style.display="none"}static prompt(t,e){let{title:n,subtitle:i,leftButton:s,rightButton:r}=t;return document.querySelector("#notification-title").textContent=n||"",document.querySelector("#notification-subtitle").textContent=i||"",document.querySelector("#notif-left").textContent=s||"",document.querySelector("#notif-right").textContent=r||"",o.show(),new Promise((t=>{document.querySelector("#notification").onclick=n=>{n.target.querySelector("#notif-content")&&e&&(o.hide(),t("neither"))},document.querySelector("#notif-left").onclick=()=>{t("left")},document.querySelector("#notif-right").onclick=()=>{t("right")}}))}}var i=o}));var s=i("6bnRN"),r=i("kor14");class a extends HTMLElement{createIcons(){this.createInfoButton(),this.createSettingsButton(),this.createStatsButton(),this.createHomeButton()}defaultMode(){this.infoButton.classList.remove("invisible"),this.settingsButton.classList.remove("invisible"),this.statsButton.classList.remove("invisible")}focusMode(){this.infoButton.classList.add("invisible"),this.settingsButton.classList.add("invisible"),this.statsButton.classList.add("invisible")}createInfoButton(){const t=document.createElement("i");t.classList.add("fas","fa-info-circle","text-white","m-4"),t.addEventListener("click",(()=>{this.infoModal.open()})),this.infoButton=t,this.appendChild(t)}createSettingsButton(){const t=document.createElement("i");t.classList.add("fas","fa-wrench","text-white","m-4"),t.addEventListener("click",(()=>{this.settingsModal.open()})),this.settingsButton=t,this.appendChild(t)}createStatsButton(){const t=document.createElement("i");t.classList.add("fas","fa-chart-bar","text-white","m-4"),t.addEventListener("click",(()=>{this.statsModal.open()})),this.statsButton=t,this.appendChild(t)}createHomeButton(){const t=document.createElement("i"),e={title:"Leave this session and return to home page?",leftButton:"Yes",rightButton:"No"};t.classList.add("fas","fa-home","text-white","m-4"),t.addEventListener("click",(()=>{document.URL.includes("app.html")&&r.default.prompt(e,!1).then((t=>{"left"===t?window.location.href="./index.html":r.default.hide()}))})),this.homeButton=t,this.appendChild(t)}constructor(){super(),this.infoModal=document.querySelector("info-modal"),this.settingsModal=document.querySelector("settings-modal"),this.statsModal=document.querySelector("stats-modal");s.get("Username")&&this.createIcons()}}customElements.define("menu-icons",a);