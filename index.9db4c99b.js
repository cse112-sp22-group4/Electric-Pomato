function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequireeb0a;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){o[e]=t},t.parcelRequireeb0a=i),i.register("6bnRN",(function(t,n){function o(e){return localStorage.getItem(e)}function i(e,t){localStorage.setItem(e,t)}function s(){localStorage.removeItem("TaskList"),localStorage.removeItem("Started"),localStorage.removeItem("TotalPomos"),localStorage.removeItem("Timer")}e(t.exports,"get",(function(){return o})),e(t.exports,"set",(function(){return i})),e(t.exports,"removeAll",(function(){return s}))}));var s=i("6bnRN");var a=class{reset(){this.todo=[],this.completed=[],this.save()}save(){s.set("TaskList",JSON.stringify({todo:this.todo,completed:this.completed}))}createTask(e,t){const n={name:e,expected:t,actual:0};this.todo.push(n),this.save()}deleteTask(e){this.todo.splice(e,1),this.save()}updateTask(e,t,n){e>=Object.keys(this.todo).length||(this.todo[e].name=t,this.todo[e].expected=n,this.save())}addPomo(){this.todo[0].actual+=1,this.save()}finishTask(){const e=this.todo[0];this.completed.push(e),this.deleteTask(0)}constructor(){const e=JSON.parse(s.get("TaskList"));null==e?this.reset():(this.todo=e.todo,this.completed=e.completed)}};class c{static show(){document.querySelector("#notification").style.display="flex"}static hide(){document.querySelector("#notification").style.display="none"}static prompt(e,t){let{title:n,subtitle:o,leftButton:i,rightButton:s}=e;return document.querySelector("#notification-title").textContent=n||"",document.querySelector("#notification-subtitle").textContent=o||"",document.querySelector("#notif-left").textContent=i||"",document.querySelector("#notif-right").textContent=s||"",c.show(),new Promise((e=>{document.querySelector("#notification").onclick=n=>{n.target.querySelector("#notif-content")&&t&&(c.hide(),e("neither"))},document.querySelector("#notif-left").onclick=()=>{e("left")},document.querySelector("#notif-right").onclick=()=>{e("right")}}))}}var r=c;s=i("6bnRN");class l extends HTMLElement{static createButtonContainer(){const e=document.createElement("div");return e.classList.add("col-12","col-xxl-6"),e}static createButton(){const e=document.createElement("button"),t=document.createTextNode("Create New Session");return e.classList.add("btn","btn-success","btn-lg","btn-block"),e.appendChild(t),e.addEventListener("click",(()=>{if((new a).todo.length>0){const e={title:"You already have an existing session, creating a new one will overwrite it!",subtitle:"Continue anyway?",leftButton:"Yes",rightButton:"No"};r.prompt(e,!0).then((e=>{"left"===e?(s.removeAll(),window.location.href="./app.html"):"right"===e&&r.hide()}))}else window.location.href="./app.html"})),e}static createAnchor(){const e=document.createElement("a"),t=document.createTextNode("Resume My Session");return e.href="app.html",e.classList.add("btn","btn-secondary","btn-lg","btn-block"),e.appendChild(t),e}constructor(){super(),this.classList.add("row");const e=l.createButtonContainer();e.classList.add("mb-3","mb-xxl-0");const t=l.createButtonContainer();this.appendChild(e),this.appendChild(t),e.appendChild(l.createButton());const n=new a;(n.todo.length>0||n.completed.length>0)&&t.appendChild(l.createAnchor())}}customElements.define("start-buttons",l);var d=l;s=i("6bnRN");class u extends HTMLElement{constructor(){super(),this.appendChild(document.querySelector("#username-input-template").content.cloneNode(!0));const e=this.querySelector(".start-input"),t=this.querySelector(".start-input-button");e.addEventListener("keyup",(e=>{"Enter"===e.code&&t.click()})),t.addEventListener("click",(()=>{e.value.length<1||(s.set("Username",e.value),window.location.href="./app.html")}))}}customElements.define("username-input",u);var h=u;s=i("6bnRN");class m extends HTMLElement{createEditNameButton(){const e=document.createElement("i");return e.classList.add("fas","fa-pencil-alt","text-warning","edit-icon"),e.addEventListener("click",(()=>{this.enterEditMode()})),e}createFinishEditButton(){const e=document.createElement("button");e.classList.add("save-btn");const t=document.createElement("i");return t.classList.add("fas","fa-check","text-success","save-icon"),e.appendChild(t),e.addEventListener("click",(()=>{let e=this.container.firstChild.value;e.length>0?s.set("Username",e):e=s.get("Username"),this.enterDefaultMode(e)})),e}createCancelEditButton(){const e=document.createElement("i");return e.classList.add("fas","fa-times","text-danger","cancel-icon"),e.addEventListener("click",(()=>{const e=s.get("Username");this.enterDefaultMode(e)})),e}enterEditMode(){const e=document.createElement("input");for(e.value=s.get("Username"),e.classList.add("edit-name");this.container.lastElementChild;)this.container.removeChild(this.container.lastElementChild);this.container.appendChild(e),this.container.appendChild(this.createFinishEditButton()),this.container.appendChild(this.createCancelEditButton()),e.addEventListener("keyup",(e=>{"Enter"===e.code&&this.querySelector(".save-btn").click()})),e.addEventListener("input",(()=>{e.value.length>0?this.querySelector(".save-btn").disabled=!1:this.querySelector(".save-btn").disabled=!0})),e.focus()}enterDefaultMode(e){const t=document.createElement("h2"),n=document.createTextNode("Welcome Back, ".concat(e,"!"));for(t.appendChild(n),t.classList.add("subtitle","mb-0");this.container.lastElementChild;)this.container.removeChild(this.container.lastElementChild);this.container.appendChild(t),this.container.appendChild(this.createEditNameButton())}constructor(e){super(),this.container=document.createElement("div"),this.container.classList.add("d-flex","align-items-center","justify-content-between","mb-3","flex-wrap"),this.appendChild(this.container),this.enterDefaultMode(e)}}customElements.define("welcome-message",m);var p=m;s=i("6bnRN");class f extends HTMLElement{constructor(){super();const e=s.get("Username");e?(this.appendChild(new p(e)),this.appendChild(new d)):this.appendChild(new h)}}customElements.define("start-container",f);