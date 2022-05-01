!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},o=e.parcelRequireeb0a;null==o&&((o=function(t){if(t in n)return n[t].exports;if(t in i){var e=i[t];delete i[t];var o={id:t,exports:{}};return n[t]=o,e.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){i[t]=e},e.parcelRequireeb0a=o);var r=o("6RjbW"),a=o("2tlwz"),s=o("9wqlD"),c=o("8pxQ1"),l=o("17uBT"),u=o("D7RPs"),d=o("jm4w9"),f={},h={};(h=function(t){if(Array.isArray(t))return t}).__esModule=!0,h.default=h;var m={};(m=function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var i,o,r=[],a=!0,s=!1;try{for(n=n.call(t);!(a=(i=n.next()).done)&&(r.push(i.value),!e||r.length!==e);a=!0);}catch(t){s=!0,o=t}finally{try{a||null==n.return||n.return()}finally{if(s)throw o}}return r}}).__esModule=!0,m.default=m;var p={},v={};(v=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}).__esModule=!0,v.default=v,(p=function(t,e){if(t){if("string"==typeof t)return v(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(t,e):void 0}}).__esModule=!0,p.default=p;var y={};(y=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}).__esModule=!0,y.default=y,(f=function(t,e){return h(t)||m(t,e)||p(t,e)||y()}).__esModule=!0,f.default=f;r=o("6RjbW"),a=o("2tlwz"),c=o("8pxQ1"),l=o("17uBT"),u=o("D7RPs"),d=o("jm4w9"),r=o("6RjbW"),a=o("2tlwz");function k(t){return localStorage.getItem(t)}function w(t,e){localStorage.setItem(t,e)}var b=function(){function e(){t(r)(this,e);var n=JSON.parse(k("TaskList"));null==n?this.reset():(this.todo=n.todo,this.completed=n.completed)}return t(a)(e,[{key:"reset",value:function(){this.todo=[],this.completed=[],this.save()}},{key:"save",value:function(){w("TaskList",JSON.stringify({todo:this.todo,completed:this.completed}))}},{key:"createTask",value:function(t,e){var n={name:t,expected:e,actual:0};this.todo.push(n),this.save()}},{key:"deleteTask",value:function(t){this.todo.splice(t,1),this.save()}},{key:"updateTask",value:function(t,e,n){t>=Object.keys(this.todo).length||(this.todo[t].name=e,this.todo[t].expected=n,this.save())}},{key:"addPomo",value:function(){this.todo[0].actual+=1,this.save()}},{key:"finishTask",value:function(){var t=this.todo[0];this.completed.push(t),this.deleteTask(0)}}]),e}();function g(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=t(u)(e);if(n){var r=t(u)(this).constructor;i=Reflect.construct(o,arguments,r)}else i=o.apply(this,arguments);return t(l)(this,i)}}var S=function(e){t(c)(i,e);var n=g(i);function i(e){var o;return t(r)(this,i),(o=n.call(this)).editableTaskList=e,o.template=document.querySelector("#task-row-template").content,o.data=new b,o.resetEditingState(),o.data.todo.forEach((function(t,e){var n=t.name,i=t.expected;o.insertRow(e+1,n,i)})),o.connected=!1,o}return t(a)(i,[{key:"connectedCallback",value:function(){this.connected=!0}},{key:"addRow",value:function(t,e){this.data.createTask(t,Number(e)),this.insertRow(this.data.todo.length,t,e),this.editableTaskList.updateButtonState()}},{key:"resetEditingState",value:function(){this.editingRow=null,this.editingInputs=null,this.originalValues=null}},{key:"editRow",value:function(t,e){this.editingRow&&this.cancelEdit(),this.editingRow=t,this.editingInputs=e,this.originalValues=e.map((function(t){return t.value})),t.classList.add("edit-mode"),e.forEach((function(t){t.disabled=!1})),e[0].focus(),e[0].setSelectionRange(e[0].value.length,e[0].value.length)}},{key:"removeRow",value:function(t){this.editingRow&&this.cancelEdit(),this.data.deleteTask(Number(t.dataset.id)),t.remove(),Array.from(this.children).forEach((function(t,e){t.querySelector("input").value=e+1,t.dataset.id=e})),this.editableTaskList.updateButtonState(),this.nextElementSibling.reset()}},{key:"saveEdit",value:function(){var e=this.editingInputs.map((function(t){return t.value})),n=t(f)(e,2),i=n[0],o=n[1];this.data.updateTask(Number(this.editingRow.dataset.id),i,Number(o)),this.originalValues=[i,o],this.cancelEdit()}},{key:"cancelEdit",value:function(){var t=this;this.editingRow.classList.remove("edit-mode"),this.editingInputs.forEach((function(e,n){e.disabled=!0,e.value=t.originalValues[n]})),this.resetEditingState(),this.nextElementSibling.reset()}},{key:"insertRow",value:function(){for(var e=this,n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];var r=this.template.cloneNode(!0);this.appendChild(r);var a=this.lastElementChild,s=a.querySelectorAll("input"),c=Array.from(s).slice(-2),l=a.querySelectorAll("button"),u=t(f)(l,4),d=u[0],h=u[1],m=u[2],p=u[3],v=i[0];a.dataset.id=v-1,s.forEach((function(t,e){t.value=i[e]})),this.connected&&a.querySelector("tomato-slider").render(),c.forEach((function(n){n.addEventListener("keyup",(function(t){"Enter"!==t.code||m.disabled||e.saveEdit()})),n.addEventListener("input",(function(){var e=t(f)(c,2),n=e[0],i=e[1];0===n.value.length||Number(i.value)<1?m.disabled=!0:m.disabled=!1}))})),d.addEventListener("click",(function(){m.disabled=!1,e.editRow(a,c)})),h.addEventListener("click",(function(){e.removeRow(a)})),m.addEventListener("click",(function(){e.saveEdit()})),p.addEventListener("click",(function(){e.cancelEdit()}))}}]),i}(t(d)(HTMLElement));customElements.define("editable-task-list-body",S);var T=S;r=o("6RjbW"),a=o("2tlwz"),c=o("8pxQ1"),l=o("17uBT"),u=o("D7RPs");function R(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=t(u)(e);if(n){var r=t(u)(this).constructor;i=Reflect.construct(o,arguments,r)}else i=o.apply(this,arguments);return t(l)(this,i)}}var E=function(e){t(c)(i,e);var n=R(i);function i(){var e;t(r)(this,i),e=n.call(this);var o=document.querySelector("#add-row-template").content.cloneNode(!0);e.appendChild(o);var a=e.querySelectorAll("input"),s=t(f)(a,2);return e.nameInput=s[0],e.expectedInput=s[1],e.button=e.querySelector("button"),[e.nameInput,e.expectedInput].forEach((function(t){t.addEventListener("input",(function(){e.updateButtonState()}))})),[e.nameInput,e.expectedInput].forEach((function(t){t.addEventListener("keyup",(function(t){"Enter"!==t.code||e.button.disabled||e.addRow()}))})),e.button.addEventListener("click",(function(){e.addRow()})),e.resetCount=0,e}return t(a)(i,[{key:"connectedCallback",value:function(){this.reset()}},{key:"updateButtonState",value:function(){0===this.nameInput.value.length?this.button.disabled=!0:this.button.disabled=!1}},{key:"addRow",value:function(){this.previousElementSibling.addRow(this.nameInput.value,this.expectedInput.value),this.reset()}},{key:"reset",value:function(){this.nameInput.value="",this.expectedInput.value="1",this.nameInput.focus(),this.updateButtonState(),this.resetCount>0&&this.querySelector("tomato-slider").render(),this.resetCount+=1}}]),i}(t(d=o("jm4w9"))(HTMLElement));customElements.define("editable-task-list-input",E);var C=E;function L(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=t(u)(e);if(n){var r=t(u)(this).constructor;i=Reflect.construct(o,arguments,r)}else i=o.apply(this,arguments);return t(l)(this,i)}}var x=function(e){t(c)(i,e);var n=L(i);function i(){var e;t(r)(this,i),(e=n.call(this)).appendChild(document.querySelector("#edit-title-template").content.cloneNode(!0));var o=document.createElement("div");return o.classList.add("task-list-container"),e.appendChild(o),o.appendChild(document.querySelector("#edit-header-row-template").content.cloneNode(!0)),e.body=new T(t(s)(e)),o.appendChild(e.body),o.appendChild(new C),e}return t(a)(i,[{key:"connectedCallback",value:function(){this.updateButtonState()}},{key:"updateButtonState",value:function(){var t=this;this.querySelectorAll(".start-day-button").forEach((function(e){e.disabled=!(t.body.data.todo.length>0)}))}}]),i}(t(d)(HTMLElement));customElements.define("editable-task-list",x);var q=x;r=o("6RjbW"),a=o("2tlwz"),c=o("8pxQ1"),l=o("17uBT"),u=o("D7RPs"),d=o("jm4w9"),r=o("6RjbW"),a=o("2tlwz"),c=o("8pxQ1"),l=o("17uBT"),u=o("D7RPs");function B(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=t(u)(e);if(n){var r=t(u)(this).constructor;i=Reflect.construct(o,arguments,r)}else i=o.apply(this,arguments);return t(l)(this,i)}}var N=function(e){t(c)(i,e);var n=B(i);function i(e,o){var a;return t(r)(this,i),(a=n.call(this)).headerRowTemplate=document.querySelector("#view-header-row-template").content,a.rowTemplate=document.querySelector("#view-row-template").content,a.insertTitle(e),a.insertHeaderRow(),o.forEach((function(t,e){var n=t.name,i=t.expected,o=t.actual;a.insertRow(e+1,n,i,o)})),a}return t(a)(i,[{key:"insertTitle",value:function(t){var e=document.createElement("h3");e.classList.add("fw-bold","mb-0"),e.textContent=t,this.appendChild(e)}},{key:"insertHeaderRow",value:function(){this.appendChild(this.headerRowTemplate.cloneNode(!0))}},{key:"insertRow",value:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var i=this.rowTemplate.cloneNode(!0);this.appendChild(i);var o=this.lastElementChild,r=o.querySelectorAll("input");r.forEach((function(t,n){t.value=e[n]}))}}]),i}(t(d=o("jm4w9"))(HTMLElement));customElements.define("view-only-task-list-section",N);var I=N;function P(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=t(u)(e);if(n){var r=t(u)(this).constructor;i=Reflect.construct(o,arguments,r)}else i=o.apply(this,arguments);return t(l)(this,i)}}var j=function(e){t(c)(i,e);var n=P(i);function i(){var e;return t(r)(this,i),(e=n.call(this)).data=new b,e.appContainer=document.querySelector(".app-container"),e.appHeader=document.querySelector(".app-header"),e.visible=!1,e.taskListTitle=document.createElement("h2"),e.taskListTitle.classList.add("subtitle","text-center","mt-2","mb-2"),e.taskListContainer=document.createElement("div"),e.taskListContainer.classList.add("task-list-container"),e.appendChild(e.taskListTitle),e.appendChild(e.taskListContainer),e.taskListTitle.addEventListener("click",(function(){e.visible=!e.visible,e.position()})),window.addEventListener("resize",(function(){e.position()})),e.render(),e}return t(a)(i,[{key:"connectedCallback",value:function(){this.position()}},{key:"render",value:function(){for(;this.taskListContainer.firstChild;)this.taskListContainer.removeChild(this.taskListContainer.firstChild);this.taskListContainer.appendChild(new I("To Do",this.data.todo)),this.data.completed.length>0&&this.taskListContainer.appendChild(new I("Completed",this.data.completed))}},{key:"position",value:function(){this.visible?(this.taskListTitle.innerHTML='<i class="fas fa-chevron-down"></i>',this.style.top="".concat(this.appHeader.offsetHeight,"px")):(this.taskListTitle.innerHTML='<i class="fas fa-chevron-up"></i>',this.style.top="".concat(this.appContainer.offsetHeight-(this.querySelector(".task-list-container").getBoundingClientRect().top-this.getBoundingClientRect().top),"px"))}},{key:"addPomo",value:function(){this.data.addPomo(),this.render()}},{key:"finishTask",value:function(){this.data.finishTask(),this.render()}}]),i}(t(d)(HTMLElement));customElements.define("view-only-task-list",j);var M=j,O=(r=o("6RjbW"),a=o("2tlwz"),c=o("8pxQ1"),l=o("17uBT"),u=o("D7RPs"),d=o("jm4w9"),r=o("6RjbW"),a=o("2tlwz"),function(){function e(n,i,o){t(r)(this,e),n>99&&(n=99),this.minutes=n,i>59&&(i=59),this.seconds=i,this.callbackEverySecond=o}return t(a)(e,[{key:"startTimer",value:function(){var t=this;return new Promise((function(e){var n="Timer Finished";null!==t.callbackEverySecond&&t.callbackEverySecond(t.minutes,t.seconds),0===t.seconds&&0!==t.minutes?(t.minutes-=1,t.seconds=60):0===t.seconds&&0===t.minutes&&e(n),t.seconds-=1;var i=setInterval((function(){null!==t.callbackEverySecond&&t.callbackEverySecond(t.minutes,t.seconds),0===t.seconds&&0!==t.minutes?(t.minutes-=1,t.seconds=60):0===t.seconds&&0===t.minutes&&(e(n),clearInterval(i)),t.seconds-=1}),1e3)}))}}]),e}());function A(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=t(u)(e);if(n){var r=t(u)(this).constructor;i=Reflect.construct(o,arguments,r)}else i=o.apply(this,arguments);return t(l)(this,i)}}var H=function(e){t(c)(i,e);var n=A(i);function i(){var e;return t(r)(this,i),(e=n.call(this)).classList.add("w-100","h-100","d-flex","flex-column","justify-content-center","align-items-center"),e.appendChild(document.querySelector("#timer-template").content.cloneNode(!0)),e.text=e.querySelector(".timer-text"),e}return t(a)(i,[{key:"reset",value:function(){this.text.textContent="START",this.classList.remove("timer-active")}},{key:"clear",value:function(){this.text.textContent="All Done!"}},{key:"createTimer",value:function(t,e){var n=this;this.timer=new O(t,e,(function(t,e){n.text.textContent="".concat(i.parseMinutes(t)," : ").concat(i.parseSeconds(e))}))}},{key:"startTimer",value:function(){return this.text.textContent="".concat(i.parseMinutes(this.timer.minutes)," : ").concat(i.parseSeconds(this.timer.seconds)),this.classList.add("timer-active"),this.timer.startTimer()}},{key:"setColorGreen",value:function(){this.querySelector(".timer-image").classList.remove("red-tomato"),this.querySelector(".timer-image").classList.add("green-tomato")}},{key:"setColorRed",value:function(){this.querySelector(".timer-image").classList.remove("green-tomato"),this.querySelector(".timer-image").classList.add("red-tomato")}},{key:"setColorGold",value:function(){this.querySelector(".timer-image").classList.add("gold-tomato")}}],[{key:"parseMinutes",value:function(t){return t<10?"0".concat(String(t)):String(t)}},{key:"parseSeconds",value:function(t){return 60===t||t>=60?"00":t<10?"0".concat(String(t)):String(t)}}]),i}(t(d)(HTMLElement));customElements.define("pomo-timer",H);var _=H;r=o("6RjbW"),a=o("2tlwz"),s=o("9wqlD"),c=o("8pxQ1"),l=o("17uBT"),u=o("D7RPs");function D(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=t(u)(e);if(n){var r=t(u)(this).constructor;i=Reflect.construct(o,arguments,r)}else i=o.apply(this,arguments);return t(l)(this,i)}}var W=function(e){t(c)(i,e);var n=D(i);function i(e){var o;t(r)(this,i),(o=n.call(this)).checked=!1;var a=JSON.parse(k("TaskList")),c=document.createElement("button");return c.classList.add("btn","btn-success","btn-lg"),c.textContent=a&&a.todo.length>1?"Finished Current Task":"Finished Final Task, End Session",o.appendChild(c),c.addEventListener("click",(function(){o.checked=!0,c.remove(),e.bind(t(s)(o),t(s)(o))()})),o}return t(a)(i,[{key:"getChecked",value:function(){return this.checked}}]),i}(t(d=o("jm4w9"))(HTMLElement));customElements.define("break-prompt",W);var z=W,J=(r=o("6RjbW"),a=o("2tlwz"),function(){function e(){t(r)(this,e)}return t(a)(e,null,[{key:"show",value:function(){document.querySelector("#notification").style.display="flex"}},{key:"hide",value:function(){document.querySelector("#notification").style.display="none"}},{key:"prompt",value:function(t,n){var i=t.title,o=t.subtitle,r=t.leftButton,a=t.rightButton;return document.querySelector("#notification-title").textContent=i||"",document.querySelector("#notification-subtitle").textContent=o||"",document.querySelector("#notif-left").textContent=r||"",document.querySelector("#notif-right").textContent=a||"",e.show(),new Promise((function(t){document.querySelector("#notification").onclick=function(i){i.target.querySelector("#notif-content")&&n&&(e.hide(),t("neither"))},document.querySelector("#notif-left").onclick=function(){t("left")},document.querySelector("#notif-right").onclick=function(){t("right")}}))}}]),e}()),F=document.querySelector(".app-container"),Q=!1;function U(){var t=JSON.parse(k("History")),e=JSON.parse(k("TaskList")).completed;t?t.tasklists.push(e):t={tasklists:[e]},w("History",JSON.stringify(t)),localStorage.removeItem("TaskList"),localStorage.removeItem("Started"),localStorage.removeItem("TotalPomos"),localStorage.removeItem("Timer");J.prompt({title:"Congratulations, you have finished this session!",subtitle:"What would you like to do next?",leftButton:"Start New Session",rightButton:"View Logs"},!1).then((function(t){"left"===t?window.location.href="./index.html":"right"===t&&(window.location.href="./done.html")}))}function V(t){var e=JSON.parse(k("TaskList")),n=e.todo.length,i="";if(0===n)i="End of Session",Q=!0,(new b).finishTask(),U();else if(t&&1===n){i="End of Session",Q=!0,(new b).finishTask(),U()}else i=t&&n-1==1?"Final Task: ".concat(e.todo[1].name):t&&n-1>1?"Next Task: ".concat(e.todo[1].name):1===n?"Final Task: ".concat(e.todo[0].name):"Current Task: ".concat(e.todo[0].name);document.querySelector(".app-title").textContent=i}function G(t){V(t.getChecked())}function $(t){if(0===JSON.parse(k("TaskList")).todo.length)U();else{var e=k("Timer");if(t.reset(),"true"===e)V(!1),t.setColorGreen(),t.createTimer(25,0);else{var n=Number(k("TotalPomos")),i=new z(G);V(!1),t.setColorRed(),t.appendChild(i),n>0&&n%4==0?t.createTimer(25,0):t.createTimer(5,0)}}}function K(t,e){var n=!1;t.firstElementChild.addEventListener("click",(function(){n||(n=!0,t.startTimer().then((function(){if(!Q){var i=k("Timer");"true"===i&&(w("TotalPomos",Number(k("TotalPomos"))+1),e.addPomo()),"false"===i&&(t.lastElementChild.getChecked()&&(e.finishTask(),e.render()),t.lastElementChild.remove()),"Notification"in window&&"granted"===Notification.permission&&function(){if("true"===k("Timer")){var t=new Notification("Electric Pomato",{icon:"img/green-tomato.ico",body:"Good Work! Time to recharge."});setTimeout(t.close.bind(t),5e3),t.addEventListener("click",(function(){window.focus()}))}else{var e=new Notification("Electric Pomato",{icon:"img/red-tomato.ico",body:"Break time is over. It's time to plug in!"});setTimeout(e.close.bind(e),5e3),e.addEventListener("click",(function(){window.focus()}))}}(),w("Timer","false"===i),$(t),n=!1}})))}))}function X(){var t=new _,e=new M;V(!1),K(t,e),$(t),F.appendChild(t),F.appendChild(e)}window.addEventListener("load",(function(){k("Username")?k("Started")?X():(F.appendChild(new q),document.querySelector(".app-title").textContent="".concat(k("Username"),"'s Day"),F.querySelectorAll(".start-day-button").forEach((function(t){t.addEventListener("click",(function(){w("Started",!0),w("Timer",!0),w("TotalPomos",0),F.lastElementChild.remove(),X()}))}))):window.location.href="index.html","Notification"in window?(console.log(Notification.permission),"denied"!==Notification.permission&&Notification.requestPermission()):console.log("This browser does not support notifications.")}))}();