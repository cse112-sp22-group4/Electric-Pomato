function t(t,e,i,s){Object.defineProperty(t,e,{get:i,set:s,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},n={},o=i.parcelRequireeb0a;null==o&&((o=function(t){if(t in s)return s[t].exports;if(t in n){var e=n[t];delete n[t];var i={id:t,exports:{}};return s[t]=i,e.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){n[t]=e},i.parcelRequireeb0a=o),o.register("gC69E",(function(e,i){var s,n;t(e.exports,"register",(function(){return s}),(function(t){return s=t})),t(e.exports,"resolve",(function(){return n}),(function(t){return n=t}));var o={};s=function(t){for(var e=Object.keys(t),i=0;i<e.length;i++)o[e[i]]=t[e[i]]},n=function(t){var e=o[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),o("gC69E").register(JSON.parse('{"4r2Uz":"app.e9ebf45b.js","1aC9H":"green-tomato.11c22c57.png","dtDON":"red-tomato.0725a987.png"}'));var a=o("6bnRN");var r=class{reset(){this.todo=[],this.completed=[],this.save()}save(){a.set("TaskList",JSON.stringify({todo:this.todo,completed:this.completed}))}createTask(t,e){const i={name:t,expected:e,actual:0};this.todo.push(i),this.save()}deleteTask(t){this.todo.splice(t,1),this.save()}updateTask(t,e,i){t>=Object.keys(this.todo).length||(this.todo[t].name=e,this.todo[t].expected=i,this.save())}addPomo(){this.todo[0].actual+=1,this.save()}finishTask(){const t=this.todo[0];this.completed.push(t),this.deleteTask(0)}constructor(){const t=JSON.parse(a.get("TaskList"));null==t?this.reset():(this.todo=t.todo,this.completed=t.completed)}};class d extends HTMLElement{connectedCallback(){this.connected=!0}addRow(t,e){this.data.createTask(t,Number(e)),this.insertRow(this.data.todo.length,t,e),this.editableTaskList.updateButtonState()}resetEditingState(){this.editingRow=null,this.editingInputs=null,this.originalValues=null}editRow(t,e){this.editingRow&&this.cancelEdit(),this.editingRow=t,this.editingInputs=e,this.originalValues=e.map((t=>t.value)),t.classList.add("edit-mode"),e.forEach((t=>{t.disabled=!1})),e[0].focus(),e[0].setSelectionRange(e[0].value.length,e[0].value.length)}removeRow(t){this.editingRow&&this.cancelEdit(),this.data.deleteTask(Number(t.dataset.id)),t.remove(),Array.from(this.children).forEach(((t,e)=>{t.querySelector("input").value=e+1,t.dataset.id=e})),this.editableTaskList.updateButtonState()}saveEdit(){const[t,e]=this.editingInputs.map((t=>t.value));this.data.updateTask(Number(this.editingRow.dataset.id),t,Number(e)),this.originalValues=[t,e],this.cancelEdit()}cancelEdit(){this.editingRow.classList.remove("edit-mode"),this.editingInputs.forEach(((t,e)=>{t.disabled=!0,t.value=this.originalValues[e]})),this.resetEditingState()}insertRow(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];const s=this.template.cloneNode(!0);this.appendChild(s);const n=this.lastElementChild,o=n.querySelectorAll("input"),a=Array.from(o).slice(-2),[r,d,l,c]=n.querySelectorAll("button"),[h]=e;n.dataset.id=h-1,o.forEach(((t,i)=>{t.value=e[i]})),this.connected&&n.querySelector("tomato-slider").render(),a.forEach((t=>{t.addEventListener("keyup",(t=>{"Enter"!==t.code||l.disabled||this.saveEdit()})),t.addEventListener("input",(()=>{const[t,e]=a;0===t.value.length||Number(e.value)<1?l.disabled=!0:l.disabled=!1}))})),r.addEventListener("click",(()=>{l.disabled=!1,this.editRow(n,a)})),d.addEventListener("click",(()=>{this.removeRow(n)})),l.addEventListener("click",(()=>{this.saveEdit()})),c.addEventListener("click",(()=>{this.cancelEdit()}))}constructor(t){super(),this.editableTaskList=t,this.template=document.querySelector("#task-row-template").content,this.data=new r,this.resetEditingState(),this.data.todo.forEach(((t,e)=>{let{name:i,expected:s}=t;this.insertRow(e+1,i,s)})),this.connected=!1}}customElements.define("editable-task-list-body",d);var l=d;class c extends HTMLElement{connectedCallback(){this.reset()}updateButtonState(){0===this.nameInput.value.length?this.button.disabled=!0:this.button.disabled=!1}addRow(){this.previousElementSibling.addRow(this.nameInput.value,this.expectedInput.value),this.reset()}reset(){this.nameInput.value="",this.expectedInput.value="1",this.nameInput.focus(),this.updateButtonState(),this.resetCount>0&&this.querySelector("tomato-slider").render(),this.resetCount+=1}constructor(){super();const t=document.querySelector("#add-row-template").content.cloneNode(!0);this.appendChild(t),[this.nameInput,this.expectedInput]=this.querySelectorAll("input"),this.button=this.querySelector("button"),[this.nameInput,this.expectedInput].forEach((t=>{t.addEventListener("input",(()=>{this.updateButtonState()}))})),[this.nameInput,this.expectedInput].forEach((t=>{t.addEventListener("keyup",(t=>{"Enter"!==t.code||this.button.disabled||this.addRow()}))})),this.button.addEventListener("click",(()=>{this.addRow()})),this.resetCount=0}}customElements.define("editable-task-list-input",c);var h=c;class u extends HTMLElement{connectedCallback(){this.updateButtonState()}updateButtonState(){this.querySelectorAll(".start-day-button").forEach((t=>{t.disabled=!(this.body.data.todo.length>0)}))}constructor(){super(),this.appendChild(document.querySelector("#edit-title-template").content.cloneNode(!0));const t=document.createElement("div");t.classList.add("task-list-container"),this.appendChild(t),t.appendChild(document.querySelector("#edit-header-row-template").content.cloneNode(!0)),this.body=new l(this),t.appendChild(this.body),t.appendChild(new h)}}customElements.define("editable-task-list",u);var m=u;class p extends HTMLElement{insertTitle(t){const e=document.createElement("h3");e.classList.add("fw-bold","mb-0","ms-2"),e.textContent=t,this.appendChild(e)}insertHeaderRow(){this.appendChild(this.headerRowTemplate.cloneNode(!0))}insertRow(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];const s=this.rowTemplate.cloneNode(!0);this.appendChild(s);this.lastElementChild.querySelectorAll("span").forEach(((t,i)=>{t.textContent=e[i]}))}constructor(t,e){super(),this.headerRowTemplate=document.querySelector("#view-header-row-template").content,this.rowTemplate=document.querySelector("#view-row-template").content,this.insertTitle(t),this.insertHeaderRow(),e.forEach(((t,e)=>{let{name:i,expected:s,actual:n}=t;this.insertRow(e+1,i,s,n)}))}}customElements.define("view-only-task-list-section",p);var f=p;class g extends HTMLElement{connectedCallback(){this.position()}render(){for(;this.taskListContainer.firstChild;)this.taskListContainer.removeChild(this.taskListContainer.firstChild);this.taskListContainer.appendChild(new f("To Do",this.data.todo)),this.data.completed.length>0&&this.taskListContainer.appendChild(new f("Completed",this.data.completed))}position(){this.visible?(this.taskListTitle.innerHTML='<i class="fas fa-chevron-down"></i>',this.style.top="".concat(this.appHeader.offsetHeight,"px")):(this.taskListTitle.innerHTML='<i class="fas fa-chevron-up"></i>',this.style.top="".concat(this.appContainer.offsetHeight-(this.querySelector(".task-list-container").getBoundingClientRect().top-this.getBoundingClientRect().top),"px"))}addPomo(){this.data.addPomo(),this.render()}finishTask(){this.data.finishTask(),this.render()}constructor(){super(),this.data=new r,this.appContainer=document.querySelector(".app-container"),this.appHeader=document.querySelector(".app-header"),this.visible=!1,this.taskListTitle=document.createElement("h2"),this.taskListTitle.classList.add("subtitle","text-center","mt-2","mb-2"),this.taskListContainer=document.createElement("div"),this.taskListContainer.classList.add("task-list-container"),this.appendChild(this.taskListTitle),this.appendChild(this.taskListContainer),this.taskListTitle.addEventListener("click",(()=>{this.visible=!this.visible,this.position()})),window.addEventListener("resize",(()=>{this.position()})),this.render()}}customElements.define("view-only-task-list",g);var v=g;var k=class{startTimer(){return new Promise((t=>{const e="Timer Finished";0===this.seconds&&0===this.minutes&&t(e);const i=Math.floor(Date.now()/1e3)+60*this.minutes+(this.seconds-1);this.timer(i);const s=setInterval((()=>{0===this.seconds&&0===this.minutes&&(t(e),clearInterval(s)),this.timer(i)}),1e3)}))}timer(t){let e=t-Math.floor(Date.now()/1e3);e<=0&&(e=0),this.minutes=Math.floor(e/60),this.seconds=e%60,null!==this.callbackEverySecond&&this.callbackEverySecond(this.minutes,this.seconds)}constructor(t,e,i){t>99&&(t=99),this.minutes=t,e>59&&(e=59),this.seconds=e,this.callbackEverySecond=i}};class b extends HTMLElement{reset(){this.text.textContent="START",this.classList.remove("timer-active")}clear(){this.text.textContent="All Done!"}createTimer(t,e){this.timer=new k(t,e,((t,e)=>{this.text.textContent="".concat(b.parseMinutes(t)," : ").concat(b.parseSeconds(e))}))}startTimer(){return this.text.textContent="".concat(b.parseMinutes(this.timer.minutes)," : ").concat(b.parseSeconds(this.timer.seconds)),this.classList.add("timer-active"),this.timer.startTimer()}static parseMinutes(t){return t<10?"0".concat(String(t)):String(t)}static parseSeconds(t){return 60===t||t>=60?"00":t<10?"0".concat(String(t)):String(t)}setColorGreen(){this.querySelector(".timer-image").classList.remove("red-tomato"),this.querySelector(".timer-image").classList.add("green-tomato")}setColorRed(){this.querySelector(".timer-image").classList.remove("green-tomato"),this.querySelector(".timer-image").classList.add("red-tomato")}setColorGold(){this.querySelector(".timer-image").classList.add("gold-tomato")}constructor(){super(),this.classList.add("w-100","h-100","d-flex","flex-column","align-items-center"),this.appendChild(document.querySelector("#timer-template").content.cloneNode(!0)),this.text=this.querySelector(".timer-text")}}customElements.define("pomo-timer",b);var C=b,E=o("kor14");a=o("6bnRN");class S extends HTMLElement{getChecked(){return this.checked}updateButton(){this.checked=!1,this.taskList=JSON.parse(a.get("TaskList")),null!=this.taskList&&(this.length=this.taskList.todo.length,this.button.textContent=this.taskList&&this.length>1?"Finish Task":"Finish Final Task")}constructor(t){super(),this.button=document.createElement("button"),this.button.classList.add("btn","btn-success","btn-lg"),this.updateButton(),this.button.addEventListener("click",(()=>{let e={};e=this.length>1?{title:"Move on to next task?",subtitle:" ",leftButton:"Yes",rightButton:"No"}:{title:"End session?",subtitle:" ",leftButton:"Yes",rightButton:"No"},E.default.prompt(e,!0).then((e=>{"left"===e?(this.checked=!0,t.bind(this,this)(),E.default.hide()):"right"===e&&E.default.hide()}))})),this.appendChild(this.button)}}customElements.define("finish-task-button",S);var w,T=S;a=o("6bnRN");w=new URL(o("gC69E").resolve("1aC9H"),import.meta.url).toString();var y;y=new URL(o("gC69E").resolve("dtDON"),import.meta.url).toString();const L=document.querySelector(".app-container"),x=document.querySelector("menu-icons");let N=!1,R=null;function q(){const t=Number(a.get("CurrentPomos"));return t>0&&t%4==0}function H(){let t=JSON.parse(a.get("History"));const{completed:e}=JSON.parse(a.get("TaskList"));t?t.tasklists.push(e):t={tasklists:[e]},a.set("History",JSON.stringify(t)),a.clearSessionData(),document.querySelector("stats-modal").open("./index.html")}function B(t){const e=JSON.parse(a.get("TaskList")),{length:i}=e.todo,s=document.querySelector(".app-title"),n=document.querySelector(".app-subtitle");let o="";"true"!==a.get("Timer")||t?q()?s.textContent="Long Break":s.textContent="Short Break":s.textContent="Pomodoro",0===i?(o="End of Session",N=!0,H()):"true"===a.get("Timer")?t?s.textContent="Focus: ".concat(e.todo[0].name):o="Focus: ".concat(e.todo[0].name):o=t&&i>1?"Next Task: ".concat(e.todo[0].name):1===i?"Final Task: ".concat(e.todo[0].name):"Current Task: ".concat(e.todo[0].name),n.textContent=o}function M(t){R.finishTask(),R.render(),B(t.getChecked()),t.updateButton()}function I(t){if(0===JSON.parse(a.get("TaskList")).todo.length)H();else{const e=a.get("Timer");t.reset(),"true"===e?(B(!1),t.setColorGreen()):(x.defaultMode(),document.querySelector(".app-subtitle").style.display="block",B(!1),t.setColorRed())}}function O(t,i){let s=!1;t.firstElementChild.addEventListener("click",(()=>{if(!s){if("true"===a.get("Timer")){x.focusMode();const e=document.querySelector(".app-title"),i=document.querySelector(".app-subtitle");e.textContent=i.textContent,i.style.display="none";const s=a.get("WorkSessionDuration");t.createTimer(s,0)}else if(q()){const e=a.get("LongBreakDuration");t.createTimer(e,0)}else{const e=a.get("ShortBreakDuration");t.createTimer(e,0)}const n=new T(M);t.appendChild(n),s=!0,t.startTimer().then((()=>{if(!N){const n=a.get("Timer");"true"===n&&(a.set("TotalPomos",Number(a.get("TotalPomos"))+1),a.set("CurrentPomos",Number(a.get("CurrentPomos"))+1),i.addPomo()),t.lastElementChild.remove(),"Notification"in window&&navigator.serviceWorker&&function(){const t=a.get("Timer"),i={icon:null,body:null,tag:"pomo-alert",silent:!0};"true"===t?(i.icon=e(w),i.body="Good Work! Time to recharge."):(i.icon=e(y),i.body="Break time is over. It's time to plug in!");let s=null;navigator.serviceWorker.getRegistration().then((t=>{s=t,t.showNotification("Electric Pomato",i).then((()=>s.getNotifications().then((t=>{setTimeout((()=>t.forEach((t=>t.close()))),5e3)}))))}))}(),a.set("Timer","false"===n),I(t),s=!1}}))}}))}function P(){const t=new C;R=new v,O(t,R),I(t),L.appendChild(t),L.appendChild(R)}window.addEventListener("load",(function(){null==a.get("Username")?window.location.href="index.html":"true"===a.get("Started")?P():(L.appendChild(new m),document.querySelector(".app-title").textContent="".concat(a.get("Username"),"'s Session"),L.querySelectorAll(".start-day-button").forEach((t=>{t.addEventListener("click",(()=>{a.set("Started",!0),a.set("Timer",!0),a.set("TotalPomos",0),a.set("CurrentPomos",0),L.lastElementChild.remove(),P()}))}))),"Notification"in window?"granted"===Notification.permission?console.log("Notifications permission ".concat(Notification.permission)):"denied"!==Notification.permission?Notification.requestPermission((t=>{"permission"in Notification||(Notification.permission=t),"granted"===t&&console.log("Notifications permission granted")})):console.log("Notifications permission ".concat(Notification.permission)):console.log("Error: Browser does not support notifications")}));