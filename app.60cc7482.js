!function(){function t(t,e,n,i){Object.defineProperty(t,e,{get:n,set:i,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},o={},r=n.parcelRequireeb0a;null==r&&((r=function(t){if(t in i)return i[t].exports;if(t in o){var e=o[t];delete o[t];var n={id:t,exports:{}};return i[t]=n,e.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){o[t]=e},n.parcelRequireeb0a=r),r.register("gTwGg",(function(e,n){var i,o;t(e.exports,"register",(function(){return i}),(function(t){return i=t})),t(e.exports,"resolve",(function(){return o}),(function(t){return o=t}));var r={};i=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)r[e[n]]=t[e[n]]},o=function(t){var e=r[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),r.register("ai42B",(function(e,n){var i;t(e.exports,"getBundleURL",(function(){return i}),(function(t){return i=t}));var o={};function r(t){return(""+t).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}i=function(t){var e=o[t];return e||(e=function(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(t)return r(t[2])}return"/"}(),o[t]=e),e}})),r("gTwGg").register(JSON.parse('{"39PhU":"app.60cc7482.js","6ZGgG":"green-tomato.11c22c57.png","7EiQF":"red-tomato.0725a987.png","7WrkD":"favicon.24616066.ico","kTaRP":"favicon.24616066.ico","hrA6o":"notification-ping.09726ea8.mp3","kos78":"app.f2cedd7c.js"}'));var a=r("kN4dt"),s=r("6RjbW"),c=r("2tlwz"),u=r("9wqlD"),l=r("8pxQ1"),d=r("17uBT"),f=r("D7RPs"),h=r("jm4w9"),p={},m={};(m=function(t){if(Array.isArray(t))return t}).__esModule=!0,m.default=m;var v={};(v=function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var i,o,r=[],a=!0,s=!1;try{for(n=n.call(t);!(a=(i=n.next()).done)&&(r.push(i.value),!e||r.length!==e);a=!0);}catch(t){s=!0,o=t}finally{try{a||null==n.return||n.return()}finally{if(s)throw o}}return r}}).__esModule=!0,v.default=v;var y={},k={};(k=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}).__esModule=!0,k.default=k,(y=function(t,e){if(t){if("string"==typeof t)return k(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?k(t,e):void 0}}).__esModule=!0,y.default=y;var g={};(g=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}).__esModule=!0,g.default=g,(p=function(t,e){return m(t)||v(t,e)||y(t,e)||g()}).__esModule=!0,p.default=p;s=r("6RjbW"),c=r("2tlwz"),l=r("8pxQ1"),d=r("17uBT"),f=r("D7RPs"),h=r("jm4w9"),s=r("6RjbW"),c=r("2tlwz");var w=r("lt755"),b=function(){function t(){e(s)(this,t);var n=JSON.parse(w.get("TaskList"));null==n?this.reset():(this.todo=n.todo,this.completed=n.completed)}return e(c)(t,[{key:"reset",value:function(){this.todo=[],this.completed=[],this.save()}},{key:"save",value:function(){w.set("TaskList",JSON.stringify({todo:this.todo,completed:this.completed}))}},{key:"createTask",value:function(t,e){var n={name:t,expected:e,actual:0,time:0};this.todo.push(n),this.save()}},{key:"deleteTask",value:function(t){this.todo.splice(t,1),this.save()}},{key:"updateTask",value:function(t,e,n){t>=Object.keys(this.todo).length||(this.todo[t].name=e,this.todo[t].expected=n,this.save())}},{key:"addPomo",value:function(){this.todo[0].actual+=1,this.save()}},{key:"finishTask",value:function(t){t&&this.updateTime();var e=this.todo[0];this.completed.push(e),this.deleteTask(0)}},{key:"startTask",value:function(){this.startTime=Date.now()}},{key:"updateTime",value:function(){var t=(Date.now()-this.startTime)/1e3,e=60*w.get("WorkSessionDuration");this.todo[0].time+=t;var n=this.todo[0].time,i=Math.round(n/e);this.todo[0].actual=i,this.save()}}]),t}();function T(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=e(f)(t);if(n){var r=e(f)(this).constructor;i=Reflect.construct(o,arguments,r)}else i=o.apply(this,arguments);return e(d)(this,i)}}var R=function(t){e(l)(i,t);var n=T(i);function i(t){var o;return e(s)(this,i),(o=n.call(this)).editableTaskList=t,o.template=document.querySelector("#task-row-template").content,o.data=new b,o.resetEditingState(),o.data.todo.forEach((function(t,e){var n=t.name,i=t.expected;o.insertRow(e+1,n,i)})),o.connected=!1,o}return e(c)(i,[{key:"connectedCallback",value:function(){this.connected=!0}},{key:"addRow",value:function(t,e){this.data.createTask(t,Number(e)),this.insertRow(this.data.todo.length,t,e),this.editableTaskList.updateButtonState()}},{key:"resetEditingState",value:function(){this.editingRow=null,this.editingInputs=null,this.originalValues=null}},{key:"editRow",value:function(t,e){this.editingRow&&this.cancelEdit(),this.editingRow=t,this.editingInputs=e,this.originalValues=e.map((function(t){return t.value})),t.classList.add("edit-mode"),e.forEach((function(t){t.disabled=!1})),e[0].focus(),e[0].setSelectionRange(e[0].value.length,e[0].value.length)}},{key:"removeRow",value:function(t){this.editingRow&&this.cancelEdit(),this.data.deleteTask(Number(t.dataset.id)),t.remove(),Array.from(this.children).forEach((function(t,e){t.querySelector("input").value=e+1,t.dataset.id=e})),this.editableTaskList.updateButtonState()}},{key:"saveEdit",value:function(){var t=this.editingInputs.map((function(t){return t.value})),n=e(p)(t,2),i=n[0],o=n[1];this.data.updateTask(Number(this.editingRow.dataset.id),i,Number(o)),this.originalValues=[i,o],this.cancelEdit()}},{key:"cancelEdit",value:function(){var t=this;this.editingRow.classList.remove("edit-mode"),this.editingInputs.forEach((function(e,n){e.disabled=!0,e.value=t.originalValues[n]})),this.resetEditingState()}},{key:"insertRow",value:function(){for(var t=this,n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];var r=this.template.cloneNode(!0);this.appendChild(r);var a=this.lastElementChild,s=a.querySelectorAll("input"),c=Array.from(s).slice(-2),u=a.querySelectorAll("button"),l=e(p)(u,4),d=l[0],f=l[1],h=l[2],m=l[3],v=i[0];a.dataset.id=v-1,s.forEach((function(t,e){t.value=i[e]})),this.connected&&a.querySelector("tomato-slider").render(),c.forEach((function(n){n.addEventListener("keyup",(function(e){"Enter"!==e.code||h.disabled||t.saveEdit()})),n.addEventListener("input",(function(){var t=e(p)(c,2),n=t[0],i=t[1];0===n.value.length||Number(i.value)<1?h.disabled=!0:h.disabled=!1}))})),d.addEventListener("click",(function(){h.disabled=!1,t.editRow(a,c)})),f.addEventListener("click",(function(){t.removeRow(a)})),h.addEventListener("click",(function(){t.saveEdit()})),m.addEventListener("click",(function(){t.cancelEdit()}))}}]),i}(e(h)(HTMLElement));customElements.define("editable-task-list-body",R);var E=R;s=r("6RjbW"),c=r("2tlwz"),l=r("8pxQ1"),d=r("17uBT"),f=r("D7RPs");function S(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=e(f)(t);if(n){var r=e(f)(this).constructor;i=Reflect.construct(o,arguments,r)}else i=o.apply(this,arguments);return e(d)(this,i)}}var C=function(t){e(l)(i,t);var n=S(i);function i(){var t;e(s)(this,i),t=n.call(this);var o=document.querySelector("#add-row-template").content.cloneNode(!0);t.appendChild(o);var r=t.querySelectorAll("input"),a=e(p)(r,2);return t.nameInput=a[0],t.expectedInput=a[1],t.button=t.querySelector("button"),[t.nameInput,t.expectedInput].forEach((function(e){e.addEventListener("input",(function(){t.updateButtonState()}))})),[t.nameInput,t.expectedInput].forEach((function(e){e.addEventListener("keyup",(function(e){"Enter"!==e.code||t.button.disabled||t.addRow()}))})),t.button.addEventListener("click",(function(){t.addRow()})),t.resetCount=0,t}return e(c)(i,[{key:"connectedCallback",value:function(){this.reset()}},{key:"updateButtonState",value:function(){0===this.nameInput.value.length?this.button.disabled=!0:this.button.disabled=!1}},{key:"addRow",value:function(){this.previousElementSibling.addRow(this.nameInput.value,this.expectedInput.value),this.reset()}},{key:"reset",value:function(){this.nameInput.value="",this.expectedInput.value="1",this.nameInput.focus(),this.updateButtonState(),this.resetCount>0&&this.querySelector("tomato-slider").render(),this.resetCount+=1}}]),i}(e(h=r("jm4w9"))(HTMLElement));customElements.define("editable-task-list-input",C);var L=C;function x(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=e(f)(t);if(n){var r=e(f)(this).constructor;i=Reflect.construct(o,arguments,r)}else i=o.apply(this,arguments);return e(d)(this,i)}}var B=function(t){e(l)(i,t);var n=x(i);function i(){var t;e(s)(this,i),(t=n.call(this)).appendChild(document.querySelector("#edit-title-template").content.cloneNode(!0));var o=document.createElement("div");return o.classList.add("task-list-container"),t.appendChild(o),o.appendChild(document.querySelector("#edit-header-row-template").content.cloneNode(!0)),t.body=new E(e(u)(t)),o.appendChild(t.body),o.appendChild(new L),t}return e(c)(i,[{key:"connectedCallback",value:function(){this.updateButtonState()}},{key:"updateButtonState",value:function(){var t=this;this.querySelectorAll(".start-day-button").forEach((function(e){e.disabled=!(t.body.data.todo.length>0)}))}}]),i}(e(h)(HTMLElement));customElements.define("editable-task-list",B);var N=B;s=r("6RjbW"),c=r("2tlwz"),l=r("8pxQ1"),d=r("17uBT"),f=r("D7RPs"),h=r("jm4w9"),s=r("6RjbW"),c=r("2tlwz"),l=r("8pxQ1"),d=r("17uBT"),f=r("D7RPs");function q(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=e(f)(t);if(n){var r=e(f)(this).constructor;i=Reflect.construct(o,arguments,r)}else i=o.apply(this,arguments);return e(d)(this,i)}}var P=function(t){e(l)(i,t);var n=q(i);function i(t,o){var r;return e(s)(this,i),(r=n.call(this)).headerRowTemplate=document.querySelector("#view-header-row-template").content,r.rowTemplate=document.querySelector("#view-row-template").content,r.insertTitle(t),r.insertHeaderRow(),o.forEach((function(t,e){var n=t.name,i=t.expected,o=t.actual;r.insertRow(e+1,n,i,o)})),r}return e(c)(i,[{key:"insertTitle",value:function(t){var e=document.createElement("h3");e.classList.add("fw-bold","mb-0","ms-2"),e.textContent=t,this.appendChild(e)}},{key:"insertHeaderRow",value:function(){this.appendChild(this.headerRowTemplate.cloneNode(!0))}},{key:"insertRow",value:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var i=this.rowTemplate.cloneNode(!0);this.appendChild(i);var o=this.lastElementChild,r=o.querySelectorAll("span");r.forEach((function(t,n){t.textContent=e[n]}))}}]),i}(e(h=r("jm4w9"))(HTMLElement));customElements.define("view-only-task-list-section",P);var H=P;function M(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=e(f)(t);if(n){var r=e(f)(this).constructor;i=Reflect.construct(o,arguments,r)}else i=o.apply(this,arguments);return e(d)(this,i)}}var _=function(t){e(l)(i,t);var n=M(i);function i(){var t;return e(s)(this,i),(t=n.call(this)).data=new b,t.appContainer=document.querySelector(".app-container"),t.appHeader=document.querySelector(".app-header"),t.visible=!1,t.taskListTitle=document.createElement("h2"),t.taskListTitle.classList.add("subtitle","text-center","mt-2","mb-2"),t.taskListContainer=document.createElement("div"),t.taskListContainer.classList.add("task-list-container"),t.appendChild(t.taskListTitle),t.appendChild(t.taskListContainer),t.taskListTitle.addEventListener("click",(function(){t.visible=!t.visible,t.position()})),window.addEventListener("resize",(function(){t.position()})),t.render(),t}return e(c)(i,[{key:"connectedCallback",value:function(){this.position()}},{key:"render",value:function(){for(;this.taskListContainer.firstChild;)this.taskListContainer.removeChild(this.taskListContainer.firstChild);this.taskListContainer.appendChild(new H("To Do",this.data.todo)),this.data.completed.length>0&&this.taskListContainer.appendChild(new H("Completed",this.data.completed))}},{key:"position",value:function(){this.visible?(this.taskListTitle.innerHTML='<i class="fas fa-chevron-down"></i>',this.style.top="".concat(this.appHeader.offsetHeight,"px")):(this.taskListTitle.innerHTML='<i class="fas fa-chevron-up"></i>',this.style.top="".concat(this.appContainer.offsetHeight-(this.querySelector(".task-list-container").getBoundingClientRect().top-this.getBoundingClientRect().top),"px"))}},{key:"addPomo",value:function(){this.data.addPomo(),this.render()}},{key:"finishTask",value:function(t){this.data.finishTask(t),this.render()}},{key:"startTask",value:function(){this.data.startTask()}},{key:"updateTime",value:function(){this.data.updateTime(),this.render()}}]),i}(e(h)(HTMLElement));customElements.define("view-only-task-list",_);var A=_,D=(s=r("6RjbW"),c=r("2tlwz"),l=r("8pxQ1"),d=r("17uBT"),f=r("D7RPs"),h=r("jm4w9"),s=r("6RjbW"),c=r("2tlwz"),function(){function t(n,i,o){e(s)(this,t),n>99&&(n=99),this.minutes=n,i>59&&(i=59),this.seconds=i,this.callbackEverySecond=o}return e(c)(t,[{key:"startTimer",value:function(){var t=this;return new Promise((function(e){var n="Timer Finished";0===t.seconds&&0===t.minutes&&e(n);var i=Math.floor(Date.now()/1e3)+60*t.minutes+(t.seconds-1);t.timer(i);var o=setInterval((function(){0===t.seconds&&0===t.minutes&&(e(n),clearInterval(o)),t.timer(i)}),1e3)}))}},{key:"timer",value:function(t){var e=t-Math.floor(Date.now()/1e3);e<=0&&(e=0),this.minutes=Math.floor(e/60),this.seconds=e%60,null!==this.callbackEverySecond&&this.callbackEverySecond(this.minutes,this.seconds)}}]),t}());function j(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=e(f)(t);if(n){var r=e(f)(this).constructor;i=Reflect.construct(o,arguments,r)}else i=o.apply(this,arguments);return e(d)(this,i)}}var I=function(t){e(l)(i,t);var n=j(i);function i(){var t;return e(s)(this,i),(t=n.call(this)).classList.add("w-100","h-100","d-flex","flex-column","align-items-center"),t.appendChild(document.querySelector("#timer-template").content.cloneNode(!0)),t.text=t.querySelector(".timer-text"),t}return e(c)(i,[{key:"reset",value:function(){this.text.textContent="START",this.classList.remove("timer-active")}},{key:"clear",value:function(){this.text.textContent="All Done!"}},{key:"createTimer",value:function(t,e){var n=this,o=new Event("timerTick");this.timer=new D(t,e,(function(t,e){var r=i.parseMinutes(t),a=i.parseSeconds(e);n.text.textContent="".concat(r," : ").concat(a),o.text="".concat(r,":").concat(a),document.dispatchEvent(o)}))}},{key:"startTimer",value:function(){return this.text.textContent="".concat(i.parseMinutes(this.timer.minutes)," : ").concat(i.parseSeconds(this.timer.seconds)),this.classList.add("timer-active"),this.timer.startTimer()}},{key:"setColorGreen",value:function(){this.querySelector(".timer-image").classList.remove("red-tomato"),this.querySelector(".timer-image").classList.add("green-tomato")}},{key:"setColorRed",value:function(){this.querySelector(".timer-image").classList.remove("green-tomato"),this.querySelector(".timer-image").classList.add("red-tomato")}},{key:"setColorGold",value:function(){this.querySelector(".timer-image").classList.add("gold-tomato")}}],[{key:"parseMinutes",value:function(t){return t<10?"0".concat(String(t)):String(t)}},{key:"parseSeconds",value:function(t){return 60===t||t>=60?"00":t<10?"0".concat(String(t)):String(t)}}]),i}(e(h)(HTMLElement));customElements.define("pomo-timer",I);var O=I;s=r("6RjbW"),c=r("2tlwz"),u=r("9wqlD"),l=r("8pxQ1"),d=r("17uBT"),f=r("D7RPs"),h=r("jm4w9"),a=r("kN4dt"),w=r("lt755");function F(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=e(f)(t);if(n){var r=e(f)(this).constructor;i=Reflect.construct(o,arguments,r)}else i=o.apply(this,arguments);return e(d)(this,i)}}var U=function(t){e(l)(i,t);var n=F(i);function i(t){var o;return e(s)(this,i),(o=n.call(this)).button=document.createElement("button"),o.button.classList.add("btn","btn-success","btn-lg"),o.updateButton(),o.button.addEventListener("click",(function(){var n={};n=o.length>1?{title:"Move on to next task?",subtitle:" ",leftButton:"Yes",rightButton:"No"}:{title:"End session?",subtitle:" ",leftButton:"Yes",rightButton:"No"},a.default.prompt(n,!0).then((function(n){"left"===n?(o.checked=!0,t.bind(e(u)(o),e(u)(o))(),a.default.hide()):"right"===n&&a.default.hide()}))})),o.appendChild(o.button),o}return e(c)(i,[{key:"getChecked",value:function(){return this.checked}},{key:"updateButton",value:function(){this.checked=!1,this.taskList=JSON.parse(w.get("TaskList")),null!=this.taskList&&(this.length=this.taskList.todo.length,this.button.textContent=this.taskList&&this.length>1?"Finish Task":"Finish Final Task")}}]),i}(e(h)(HTMLElement));customElements.define("finish-task-button",U);var W,G=U,z=r("ly7tL");w=r("lt755");W=r("ai42B").getBundleURL("39PhU")+r("gTwGg").resolve("6ZGgG");var J;J=r("ai42B").getBundleURL("39PhU")+r("gTwGg").resolve("7EiQF");var Q;Q=r("ai42B").getBundleURL("39PhU")+r("gTwGg").resolve("7WrkD");var V,Y=new URL(Q);V=r("ai42B").getBundleURL("39PhU")+r("gTwGg").resolve("hrA6o");var $=new URL(V),Z=document.querySelector(".app-container"),K=document.querySelector("link[rel*='icon']"),X=document.querySelector("menu-icons"),tt=!1,et=null,nt="Electric Pomato";function it(){var t=Number(w.get("CurrentPomos"));return t>0&&t%4==0}function ot(t){document.title="".concat(t.text," - ").concat(nt)}function rt(){var t=JSON.parse(w.get("History")),e=JSON.parse(w.get("TaskList")).completed,n=new Date,i={date:"".concat(n.getMonth()+1,"/").concat(n.getDate(),"/").concat(n.getFullYear()),tasklist:e};t?t.sessions.push(i):t={sessions:[i]},w.set("History",JSON.stringify(t)),w.clearSessionData();var o=document.querySelector("stats-modal");z.default.hasEnoughSessions()?o.open("./index.html"):window.location.href="./index.html"}function at(t){var e=JSON.parse(w.get("TaskList")),n=e.todo.length,i=document.querySelector(".app-title"),o=document.querySelector(".app-subtitle"),r="";"true"!==w.get("Timer")||t?it()?i.textContent="Long Break":i.textContent="Short Break":i.textContent="Pomodoro",0===n?(r="End of Session",tt=!0,rt()):"true"===w.get("Timer")?t?i.textContent="Focus: ".concat(e.todo[0].name):r="Focus: ".concat(e.todo[0].name):r=t&&n>1?"Next Task: ".concat(e.todo[0].name):1===n?"Final Task: ".concat(e.todo[0].name):"Current Task: ".concat(e.todo[0].name),o.textContent=r}function st(t){et.finishTask("true"===w.get("Timer")&&"START"!==document.querySelector(".timer-text").textContent),at(t.getChecked()),t.updateButton(),et.startTask()}function ct(t){if(0===JSON.parse(w.get("TaskList")).todo.length)rt();else{var e=w.get("Timer");t.reset(),"true"===e?(at(!1),t.setColorGreen()):(X.defaultMode(),document.querySelector(".app-subtitle").style.display="block",at(!1),t.setColorRed())}}function ut(){var t=w.get("Timer"),n={icon:null,body:null,tag:"pomo-alert",silent:!0};"true"===t?(n.icon=e(W),n.body="Good Work! Time to recharge."):(n.icon=e(J),n.body="Break time is over. It's time to plug in!");var i=null;navigator.serviceWorker.getRegistration().then((function(t){i=t,t.showNotification("Electric Pomato",n).then((function(){return i.getNotifications().then((function(t){setTimeout((function(){return t.forEach((function(t){return t.close()}))}),5e3)}))})),new Audio($).play()}))}function lt(){var t,n,i,o=new O;et=new A,n=et,i=!1,(t=o).firstElementChild.addEventListener("click",(function(){if(!i){if(document.addEventListener("timerTick",ot),"true"===w.get("Timer")){K.href=e(W),nt="Plugged in!",X.focusMode(),n.startTask();var o=document.querySelector(".app-title"),r=document.querySelector(".app-subtitle");o.textContent=r.textContent,r.style.display="none";var s=w.get("WorkSessionDuration");t.createTimer(s,0)}else if(K.href=e(J),nt="Recharging...",it()){var c=w.get("LongBreakDuration");t.createTimer(c,0)}else{var u=w.get("ShortBreakDuration");t.createTimer(u,0)}var l=new G(st);t.appendChild(l),i=!0,t.startTimer().then((function(){if(!tt){document.removeEventListener("timerTick",ot),K.href=Y,nt="Electric Pomato",document.title=nt;var e=w.get("Timer");"true"===e&&(w.set("TotalPomos",Number(w.get("TotalPomos"))+1),w.set("CurrentPomos",Number(w.get("CurrentPomos"))+1),n.updateTime(),n.data.todo[0].actual===n.data.todo[0].expected&&a.default.prompt({title:"You have reached the expected Pomodoros for this task. Finish task or continue working?",leftButton:"Finish Task",rightButton:"Continue Working"},!1).then((function(t){"left"===t?(l.checked=!0,st(l),a.default.hide()):a.default.hide()}))),t.lastElementChild.remove(),"Notification"in window&&navigator.serviceWorker&&ut(),w.set("Timer","false"===e),ct(t),i=!1}}))}})),ct(o),Z.appendChild(o),Z.appendChild(et)}window.addEventListener("load",(function(){null==w.get("Username")?window.location.href="index.html":"true"===w.get("Started")?lt():(null===w.get("HasSeenInfo")&&(X.infoModal.open(),w.set("HasSeenInfo","true")),Z.appendChild(new N),document.querySelector(".app-title").textContent="".concat(w.get("Username"),"'s Session"),Z.querySelectorAll(".start-day-button").forEach((function(t){t.addEventListener("click",(function(){w.set("Started",!0),w.set("Timer",!0),w.set("TotalPomos",0),w.set("CurrentPomos",0),Z.lastElementChild.remove(),lt()}))}))),"Notification"in window?"granted"===Notification.permission?console.log("Notifications permission ".concat(Notification.permission)):"denied"!==Notification.permission?Notification.requestPermission((function(t){"permission"in Notification||(Notification.permission=t),"granted"===t&&console.log("Notifications permission granted")})):console.log("Notifications permission ".concat(Notification.permission)):console.log("Error: Browser does not support notifications")}))}();