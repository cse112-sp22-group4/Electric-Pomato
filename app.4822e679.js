!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},a=t.parcelRequireeb0a;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},t.parcelRequireeb0a=a),a("gTwGg").register(JSON.parse('{"39PhU":"app.4822e679.js","6ZGgG":"green-tomato.11c22c57.png","7EiQF":"red-tomato.0725a987.png","7WrkD":"favicon.24616066.ico","kTaRP":"favicon.24616066.ico","hrA6o":"notification-ping.09726ea8.mp3","kos78":"app.c608c85b.js","3nFOB":"app.8a8a07e1.js"}'));var o=a("kN4dt"),s=a("fNRGU"),r=(s=a("fNRGU"),a("cWFnV")),c=function(e){"use strict";s.inherits(n,e);var t=s.createSuper(n);function n(e){var i;return s.classCallCheck(this,n),(i=t.call(this)).editableTaskList=e,i.template=document.querySelector("#task-row-template").content,i.data=new r.default,i.resetEditingState(),i.data.todo.forEach((function(e,t){var n=e.name,a=e.expected;i.insertRow(t+1,n,a)})),i.connected=!1,i}return s.createClass(n,[{key:"connectedCallback",value:function(){this.connected=!0}},{key:"addRow",value:function(e,t){this.data.createTask(e,Number(t)),this.insertRow(this.data.todo.length,e,t),this.editableTaskList.updateButtonState()}},{key:"resetEditingState",value:function(){this.editingRow=null,this.editingInputs=null,this.originalValues=null}},{key:"editRow",value:function(e,t){this.editingRow&&this.cancelEdit(),document.querySelector("editable-task-list-input tomato-slider input[type=number]").disabled=!0,this.editingRow=e,this.editingInputs=t,this.originalValues=t.map((function(e){return e.value})),e.classList.add("edit-mode"),t.forEach((function(e){e.disabled=!1})),t[0].focus(),t[0].setSelectionRange(t[0].value.length,t[0].value.length)}},{key:"removeRow",value:function(e){this.editingRow&&this.cancelEdit(),this.data.deleteTask(Number(e.dataset.id)),e.remove();var t=["task-num-","task-name-","task-pomos-"];Array.from(this.children).forEach((function(e,n){e.querySelector("input").value=n+1,e.dataset.id=n,e.querySelectorAll("input").forEach((function(e,i){e.id=t[i]+(n+1)}))})),this.editableTaskList.updateButtonState()}},{key:"saveEdit",value:function(){var e=s.slicedToArray(this.editingInputs.map((function(e){return e.value})),2),t=e[0],n=e[1];this.data.updateTask(Number(this.editingRow.dataset.id),t,Number(n)),this.originalValues=[t,n],this.cancelEdit()}},{key:"cancelEdit",value:function(){var e=this;this.editingRow.classList.remove("edit-mode"),this.editingInputs.forEach((function(t,n){t.disabled=!0,t.value=e.originalValues[n]})),document.querySelector("editable-task-list-input tomato-slider input[type=number]").disabled=!1,this.resetEditingState()}},{key:"insertRow",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var i=this,a=this.template.cloneNode(!0);this.appendChild(a);var o=this.lastElementChild,r=o.querySelectorAll("input"),c=Array.from(r).slice(-2),l=s.slicedToArray(o.querySelectorAll("button"),4),u=l[0],d=l[1],h=l[2],m=l[3],p=s.slicedToArray(t,1),f=p[0];o.dataset.id=f-1;var v=["task-num-","task-name-","task-pomos-"];r.forEach((function(e,n){e.id=v[n]+t[0],e.value=t[n]})),this.connected&&o.querySelector("tomato-slider").render(),c.forEach((function(e){var t=i;e.addEventListener("keyup",(function(e){"Enter"!==e.code||h.disabled||t.saveEdit()})),e.addEventListener("input",(function(){var e=s.slicedToArray(c,2),t=e[0],n=e[1];0===t.value.length||Number(n.value)<1?h.disabled=!0:h.disabled=!1}))})),u.addEventListener("click",(function(){h.disabled=!1,i.editRow(o,c)})),d.addEventListener("click",(function(){i.removeRow(o)})),h.addEventListener("click",(function(){i.saveEdit()})),m.addEventListener("click",(function(){i.cancelEdit()}))}}]),n}(s.wrapNativeSuper(HTMLElement));customElements.define("editable-task-list-body",c);var l=c,u=function(e){"use strict";s.inherits(n,e);var t=s.createSuper(n);function n(){var e;s.classCallCheck(this,n),e=t.call(this);var i,a=document.querySelector("#add-row-template").content.cloneNode(!0);return e.appendChild(a),i=s.slicedToArray(e.querySelectorAll("input"),2),e.nameInput=i[0],e.expectedInput=i[1],e.button=e.querySelector("button"),[e.nameInput,e.expectedInput].forEach((function(t){t.addEventListener("input",(function(){e.updateButtonState()}))})),[e.nameInput,e.expectedInput].forEach((function(t){t.addEventListener("keyup",(function(t){"Enter"!==t.code||e.button.disabled||e.addRow()}))})),e.button.addEventListener("click",(function(){e.addRow()})),e.resetCount=0,e}return s.createClass(n,[{key:"connectedCallback",value:function(){this.reset()}},{key:"updateButtonState",value:function(){0===this.nameInput.value.length?this.button.disabled=!0:this.button.disabled=!1}},{key:"addRow",value:function(){this.previousElementSibling.addRow(this.nameInput.value,this.expectedInput.value),this.reset()}},{key:"reset",value:function(){this.nameInput.value="",this.expectedInput.value="1",this.nameInput.focus(),this.updateButtonState(),this.resetCount>0&&this.querySelector("tomato-slider").render(),this.resetCount+=1}}]),n}((s=a("fNRGU")).wrapNativeSuper(HTMLElement));customElements.define("editable-task-list-input",u);var d=u,h=function(e){"use strict";s.inherits(n,e);var t=s.createSuper(n);function n(){var e;s.classCallCheck(this,n),(e=t.call(this)).appendChild(document.querySelector("#edit-title-template").content.cloneNode(!0));var i=document.createElement("div");return i.classList.add("task-list-container"),e.appendChild(i),i.appendChild(document.querySelector("#edit-header-row-template").content.cloneNode(!0)),e.body=new l(s.assertThisInitialized(e)),i.appendChild(e.body),i.appendChild(new d),e}return s.createClass(n,[{key:"connectedCallback",value:function(){this.updateButtonState()}},{key:"updateButtonState",value:function(){var e=this;this.querySelectorAll(".start-day-button").forEach((function(t){t.disabled=!(e.body.data.todo.length>0)}))}}]),n}(s.wrapNativeSuper(HTMLElement));customElements.define("editable-task-list",h);var m=h,p=(s=a("fNRGU"),r=a("cWFnV"),function(e){"use strict";s.inherits(n,e);var t=s.createSuper(n);function n(e,i){var a;return s.classCallCheck(this,n),(a=t.call(this)).headerRowTemplate=document.querySelector("#view-header-row-template").content,a.rowTemplate=document.querySelector("#view-row-template").content,a.insertTitle(e),a.insertHeaderRow(),i.forEach((function(t,n){var i=t.name,o=t.expected,s=t.actual;a.insertRow(n+1,i,o,s,e)})),a}return s.createClass(n,[{key:"insertTitle",value:function(e){var t=document.createElement("h3");t.classList.add("fw-bold","mb-0","ms-2"),t.textContent=e,this.appendChild(t)}},{key:"insertHeaderRow",value:function(){this.appendChild(this.headerRowTemplate.cloneNode(!0))}},{key:"insertRow",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var i=this.rowTemplate.cloneNode(!0);this.appendChild(i);var a=this.lastElementChild,o=a.querySelectorAll("span"),s=["task-num-","task-name-","task-expected-","task-actual-"],r="Completed"===t[4]?"completed-":"todo-";o.forEach((function(e,n){e.id=r+s[n]+t[0],e.textContent=t[n]}))}}]),n}((s=a("fNRGU")).wrapNativeSuper(HTMLElement)));customElements.define("view-only-task-list-section",p);var f=p,v=function(e){"use strict";s.inherits(n,e);var t=s.createSuper(n);function n(){var e;return s.classCallCheck(this,n),(e=t.call(this)).data=new r.default,e.appContainer=document.querySelector(".app-container"),e.appHeader=document.querySelector(".app-header-container"),e.visible=!1,e.taskListTitle=document.createElement("h2"),e.taskListTitle.classList.add("subtitle","text-center","mt-2","mb-2"),e.taskListContainer=document.createElement("div"),e.taskListContainer.classList.add("task-list-container"),e.appendChild(e.taskListTitle),e.appendChild(e.taskListContainer),e.taskListTitle.addEventListener("click",(function(){e.visible=!e.visible,e.position()})),window.addEventListener("resize",(function(){e.position()})),e.render(),e}return s.createClass(n,[{key:"connectedCallback",value:function(){this.position()}},{key:"render",value:function(){for(;this.taskListContainer.firstChild;)this.taskListContainer.removeChild(this.taskListContainer.firstChild);this.taskListContainer.appendChild(new f("To Do",this.data.todo)),this.data.completed.length>0&&this.taskListContainer.appendChild(new f("Completed",this.data.completed))}},{key:"position",value:function(){this.visible?(this.taskListTitle.innerHTML='<i class="fas fa-chevron-down"></i>',this.style.top="".concat(this.appHeader.offsetHeight,"px")):(this.taskListTitle.innerHTML='<i class="fas fa-chevron-up"></i>',this.style.top="".concat(this.appContainer.offsetHeight-(this.querySelector(".task-list-container").getBoundingClientRect().top-this.getBoundingClientRect().top),"px"))}},{key:"addPomo",value:function(){this.data.addPomo(),this.render()}},{key:"finishTask",value:function(e){this.data.finishTask(e),this.render()}},{key:"startTask",value:function(){this.data.startTask()}},{key:"updateTime",value:function(){this.data.updateTime(),this.render()}}]),n}(s.wrapNativeSuper(HTMLElement));customElements.define("view-only-task-list",v);var k=v,g=(s=a("fNRGU"),s=a("fNRGU"),function(){"use strict";function e(t,n,i){s.classCallCheck(this,e),t>99&&(t=99),this.minutes=t,n>59&&(n=59),this.seconds=n,this.callbackEverySecond=i}return s.createClass(e,[{key:"startTimer",value:function(){var e=this;return new Promise((function(t){var n=e,i="Timer Finished";0===e.seconds&&0===e.minutes&&t(i);var a=Math.floor(Date.now()/1e3)+60*e.minutes+(e.seconds-1);e.timer(a);var o=setInterval((function(){0===n.seconds&&0===n.minutes&&(t(i),clearInterval(o)),n.timer(a)}),1e3)}))}},{key:"timer",value:function(e){var t=e-Math.floor(Date.now()/1e3);t<=0&&(t=0),this.minutes=Math.floor(t/60),this.seconds=t%60,null!==this.callbackEverySecond&&this.callbackEverySecond(this.minutes,this.seconds)}}]),e}()),y=a("lpe0u"),b=a("lt755"),S=function(e){"use strict";s.inherits(n,e);var t=s.createSuper(n);function n(){var e;return s.classCallCheck(this,n),(e=t.call(this)).theme=b.get("Icon"),e.classList.add("w-100","h-100","d-flex","flex-column","align-items-center"),e.innerHTML='\n      <div class="timer-container position-relative mh-100 mw-100">\n        <object id="timerIcon" class="w-100 h-100 position-absolute top-50 start-50 translate-middle" data='.concat(y.default[e.theme].urls[1],"></object>\n      </div>\n    "),e.text="START",e}return s.createClass(n,[{key:"reset",value:function(){this.text="START",this.getAttribute("icon-text")&&(this.setAttribute("icon-text","START"),this.classList.remove("timer-active"))}},{key:"createTimer",value:function(e,t){var i=this,a=new Event("timerTick");this.timer=new g(e,t,(function(e,t){var o=n.parseMinutes(e),s=n.parseSeconds(t);i.svgText.textContent="".concat(o," : ").concat(s),a.text="".concat(o,":").concat(s),document.dispatchEvent(a)}))}},{key:"startTimer",value:function(){return this.text="".concat(n.parseMinutes(this.timer.minutes)," : ").concat(n.parseSeconds(this.timer.seconds)),this.classList.add("timer-active"),this.timer.startTimer()}},{key:"setPomoIcon",value:function(){this.querySelector("#timerIcon").setAttribute("data",y.default[this.theme].urls[1])}},{key:"setBreakIcon",value:function(){this.querySelector("#timerIcon").setAttribute("data",y.default[this.theme].urls[2])}},{key:"render",value:function(){var e=this,t=this.querySelector("#timerIcon");t.addEventListener("load",(function(){var n=e,i=t.contentDocument;i.querySelector("svg").classList.value="w-100 h-100 position-absolute top-50 start-50 translate-middle",e.icon=i.querySelector("svg > g"),e.icon.classList.value="timer-image",e.icon.addEventListener("click",(function(){n.dispatchEvent(new CustomEvent("iconclick"),{bubbles:!0})})),e.svgText=i.querySelector(".timer-text"),e.svgText.textContent=e.text}))}},{key:"connectedCallback",value:function(){this.render()}},{key:"attributeChangedCallback",value:function(){this.svgText.textContent=this.text}}],[{key:"parseMinutes",value:function(e){return e<10?"0".concat(String(e)):String(e)}},{key:"parseSeconds",value:function(e){return 60===e||e>=60?"00":e<10?"0".concat(String(e)):String(e)}},{key:"observedAttributes",get:function(){return["icon-text"]}}]),n}(s.wrapNativeSuper(HTMLElement));customElements.define("pomo-timer",S);var T=S,C=(s=a("fNRGU"),b=a("lt755"),y=a("lpe0u"),function(e){"use strict";s.inherits(n,e);var t=s.createSuper(n);function n(){var e;if(s.classCallCheck(this,n),(e=t.call(this)).taskList=JSON.parse(b.get("TaskList")),e.currentTask=null,!e.taskList||0===e.taskList.todo.length)return s.possibleConstructorReturn(e);e.svgUrls=y.default[b.get("Icon")].urls;var i=document.createElement("template");return i.innerHTML='\n      <div class="remaining-pomos-container">\n        <h3>Planned Pomos</h3>\n        <div class="d-flex justify-content-center align-items-center icon-container"></div>\n      </div>\n    ',e.appendChild(i.content.cloneNode(!0)),e.setPomos(e.taskList),e.updateCompletedPomos(e.taskList),e}return s.createClass(n,[{key:"resetPomos",value:function(){this.querySelector(".icon-container").innerHTML=""}},{key:"setPomos",value:function(e){var t=this;this.resetPomos();var n=document.createElement("template");n.innerHTML='\n      <object class="remaining-pomos-icon" type="image/svg+xml" data=""></object>\n    ';for(var i=e.todo[0].expected,a=0;a<i;a++)this.querySelector(".icon-container").appendChild(n.content.cloneNode(!0));this.querySelectorAll(".remaining-pomos-icon").forEach((function(e){e.setAttribute("data",t.svgUrls[1])}))}},{key:"visibleMode",value:function(){this.querySelector(".remaining-pomos-container").classList.remove("invisible")}},{key:"hiddenMode",value:function(){this.querySelector(".remaining-pomos-container").classList.add("invisible")}},{key:"updateCompletedPomos",value:function(e){var t=e.todo[0].actual;this.querySelectorAll(".remaining-pomos-icon").forEach((function(e,n){n<t&&e.classList.add("completed")}))}}]),n}(s.wrapNativeSuper(HTMLElement)));customElements.define("remaining-pomos",C);var E=C,w=(s=a("fNRGU"),o=a("kN4dt"),b=a("lt755"),function(e){"use strict";s.inherits(n,e);var t=s.createSuper(n);function n(e){var i;return s.classCallCheck(this,n),(i=t.call(this)).button=document.createElement("button"),i.button.classList.add("btn","btn-success","btn-lg"),i.updateButton(),i.button.addEventListener("click",(function(){var t={};t=i.length>1?{title:"Move on to next task?",subtitle:" ",leftButton:"Yes",rightButton:"No"}:{title:"End session?",subtitle:" ",leftButton:"Yes",rightButton:"No"},o.default.prompt(t,!0).then((function(t){"left"===t?(i.checked=!0,e.bind(s.assertThisInitialized(i),s.assertThisInitialized(i))(),o.default.hide()):"right"===t&&o.default.hide()}))})),i.appendChild(i.button),i}return s.createClass(n,[{key:"getChecked",value:function(){return this.checked}},{key:"updateButton",value:function(){this.checked=!1,this.taskList=JSON.parse(b.get("TaskList")),null!=this.taskList&&(this.length=this.taskList.todo.length,this.button.textContent=this.taskList&&this.length>1?"Finish Task":"Finish Final Task")}}]),n}(s.wrapNativeSuper(HTMLElement)));customElements.define("finish-task-button",w);var L,N=w,R=a("ly7tL");b=a("lt755");L=a("ai42B").getBundleURL("39PhU")+a("gTwGg").resolve("6ZGgG");var x;x=a("ai42B").getBundleURL("39PhU")+a("gTwGg").resolve("7EiQF");var q;q=a("ai42B").getBundleURL("39PhU")+a("gTwGg").resolve("7WrkD");var A,H=new URL(q);A=a("ai42B").getBundleURL("39PhU")+a("gTwGg").resolve("hrA6o");var B=new URL(A),I=document.querySelector(".app-container"),P=document.querySelector("link[rel*='icon']"),M=document.querySelector("menu-icons"),U=!1,F=null,_=null,G=null,D="Electric Pomato";function O(){var e=Number(b.get("CurrentPomos"));return e>0&&e%4==0}function j(e){document.title="".concat(e.text," - ").concat(D)}function W(){var e=JSON.parse(b.get("History")),t=JSON.parse(b.get("TaskList")).completed,n=new Date,i={date:"".concat(n.getMonth()+1,"/").concat(n.getDate(),"/").concat(n.getFullYear()),tasklist:t};e?e.sessions.push(i):e={sessions:[i]},b.set("History",JSON.stringify(e)),b.clearSessionData();var a=document.querySelector("stats-modal");R.default.hasEnoughSessions()?a.open("./index.html"):window.location.href="./index.html"}function J(e){var t=JSON.parse(b.get("TaskList")),n=t.todo.length,i=document.querySelector(".app-title"),a=document.querySelector(".app-subtitle"),o="";"true"!==b.get("Timer")||e?O()?i.textContent="Long Break":i.textContent="Short Break":i.textContent="Pomodoro",0===n?(o="End of Session",U=!0,W()):"true"===b.get("Timer")?e?i.textContent="Focus: ".concat(t.todo[0].name):o="Focus: ".concat(t.todo[0].name):o=e&&n>1?"Next Task: ".concat(t.todo[0].name):1===n?"Final Task: ".concat(t.todo[0].name):"Current Task: ".concat(t.todo[0].name),a.textContent=o}function V(e){var t=document.querySelector("#timerIcon").contentDocument;G.finishTask("true"===b.get("Timer")&&"START"!==t.querySelector(".timer-text").textContent),G.data.todo.length>0&&_.setPomos(G.data),J(e.getChecked()),e.updateButton(),G.startTask()}function z(e){if(0===JSON.parse(b.get("TaskList")).todo.length)W();else{var t=b.get("Timer");e.reset(),"true"===t?(J(!1),e.setPomoIcon()):(M.defaultMode(),document.querySelector(".app-subtitle").style.display="block",J(!1),e.setBreakIcon())}}function Y(){var t=b.get("Timer"),n={icon:null,body:null,tag:"pomo-alert",silent:!0};"true"===t?(n.icon=e(L),n.body="Good Work! Time to recharge."):(n.icon=e(x),n.body="Break time is over. It's time to plug in!");var i=null;navigator.serviceWorker.getRegistration().then((function(e){i=e,e.showNotification("Electric Pomato",n).then((function(){return i.getNotifications().then((function(e){setTimeout((function(){return e.forEach((function(e){return e.close()}))}),5e3)}))})),new Audio(B).play()}))}function Q(){var t,n,i;F=new T,G=new k,_=new E,F.appendChild(_),n=G,i=!1,(t=F).addEventListener("iconclick",(function(){if(!i){if(document.addEventListener("timerTick",j),"true"===b.get("Timer")){P.href=e(L),D="Plugged in!",M.focusMode(),n.startTask();var a=document.querySelector(".app-title"),s=document.querySelector(".app-subtitle");a.textContent=s.textContent,s.style.display="none";var r=b.get("WorkSessionDuration");t.createTimer(r,0)}else if(P.href=e(x),D="Recharging...",O()){var c=b.get("LongBreakDuration");t.createTimer(c,0)}else{var l=b.get("ShortBreakDuration");t.createTimer(l,0)}_.hiddenMode();var u=new N(V);_.insertAdjacentElement("beforebegin",u),i=!0,t.startTimer().then((function(){if(!U){document.removeEventListener("timerTick",j),P.href=H,D="Electric Pomato",document.title=D;var e=b.get("Timer");"true"===e&&(b.set("TotalPomos",Number(b.get("TotalPomos"))+1),b.set("CurrentPomos",Number(b.get("CurrentPomos"))+1),n.updateTime(),_.updateCompletedPomos(n.data),n.data.todo[0].actual===n.data.todo[0].expected&&o.default.prompt({title:"You have completed the planned Pomodoros for this task. Finish task or continue working?",leftButton:"Finish Task",rightButton:"Continue Working"},!1).then((function(e){"left"===e?(u.checked=!0,V(u),o.default.hide()):o.default.hide()}))),t.querySelector("finish-task-button").remove(),"Notification"in window&&navigator.serviceWorker&&"granted"===Notification.permission&&Y(),b.set("Timer","false"===e),_.visibleMode(),z(t),i=!1}}))}})),z(F),I.appendChild(F),I.appendChild(G)}window.addEventListener("load",(function(){null==b.get("Username")?window.location.href="index.html":"true"===b.get("Started")?Q():(null===b.get("HasSeenInfo")&&(M.infoModal.open(),b.set("HasSeenInfo","true")),I.appendChild(new m),document.querySelector(".app-title").textContent="".concat(b.get("Username"),"'s Session"),I.querySelectorAll(".start-day-button").forEach((function(e){e.addEventListener("click",(function(){b.set("Started",!0),b.set("Timer",!0),b.set("TotalPomos",0),b.set("CurrentPomos",0),I.lastElementChild.remove(),Q()}))}))),"Notification"in window?"granted"===Notification.permission?console.log("Notifications permission ".concat(Notification.permission)):"denied"!==Notification.permission?Notification.requestPermission((function(e){"permission"in Notification||(Notification.permission=e),"granted"===e&&console.log("Notifications permission granted")})):console.log("Notifications permission ".concat(Notification.permission)):console.log("Error: Browser does not support notifications")}))}();