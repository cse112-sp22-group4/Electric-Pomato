!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequireeb0a;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequireeb0a=a);var i=a("2tlwz"),o=a("6RjbW"),c=a("8pxQ1"),l=a("17uBT"),s=a("D7RPs"),u=a("jm4w9"),d=(o=a("6RjbW"),i=a("2tlwz"),c=a("8pxQ1"),l=a("17uBT"),s=a("D7RPs"),u=a("jm4w9"),o=a("6RjbW"),i=a("2tlwz"),a("lt755")),f=function(){function t(){e(o)(this,t);var n=JSON.parse(d.get("TaskList"));null==n?this.reset():(this.todo=n.todo,this.completed=n.completed)}return e(i)(t,[{key:"reset",value:function(){this.todo=[],this.completed=[],this.save()}},{key:"save",value:function(){d.set("TaskList",JSON.stringify({todo:this.todo,completed:this.completed}))}},{key:"createTask",value:function(e,t){var n={name:e,expected:t,actual:0};this.todo.push(n),this.save()}},{key:"deleteTask",value:function(e){this.todo.splice(e,1),this.save()}},{key:"updateTask",value:function(e,t,n){e>=Object.keys(this.todo).length||(this.todo[e].name=t,this.todo[e].expected=n,this.save())}},{key:"addPomo",value:function(){this.todo[0].actual+=1,this.save()}},{key:"finishTask",value:function(){var e=this.todo[0];this.completed.push(e),this.deleteTask(0)}}]),t}(),h=a("kN4dt");d=a("lt755");function p(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=e(s)(t);if(n){var i=e(s)(this).constructor;r=Reflect.construct(a,arguments,i)}else r=a.apply(this,arguments);return e(l)(this,r)}}var v=function(t){e(c)(r,t);var n=p(r);function r(){var t;e(o)(this,r),(t=n.call(this)).classList.add("row");var a=r.createButtonContainer();a.classList.add("mb-3","mb-xxl-0");var i=r.createButtonContainer();t.appendChild(a),t.appendChild(i),a.appendChild(r.createButton());var c=new f;return(c.todo.length>0||c.completed.length>0)&&i.appendChild(r.createAnchor()),t}return e(i)(r,null,[{key:"createButtonContainer",value:function(){var e=document.createElement("div");return e.classList.add("col-12","col-xxl-6"),e}},{key:"createButton",value:function(){var e=document.createElement("button"),t=document.createTextNode("Create New Session");return e.classList.add("btn","btn-success","btn-lg","btn-block"),e.appendChild(t),e.addEventListener("click",(function(){if((new f).todo.length>0){h.default.prompt({title:"You already have an existing session, creating a new one will overwrite it!",subtitle:"Continue anyway?",leftButton:"Yes",rightButton:"No"},!0).then((function(e){"left"===e?(d.clearSessionData(),window.location.href="./app.html"):"right"===e&&h.default.hide()}))}else window.location.href="./app.html"})),e}},{key:"createAnchor",value:function(){var e=document.createElement("a"),t=document.createTextNode("Resume My Session");return e.href="app.html",e.classList.add("btn","btn-secondary","btn-lg","btn-block"),e.appendChild(t),e}}]),r}(e(u)(HTMLElement));customElements.define("start-buttons",v);var m=v;i=a("2tlwz"),o=a("6RjbW"),c=a("8pxQ1"),l=a("17uBT"),s=a("D7RPs"),u=a("jm4w9"),d=a("lt755");function y(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=e(s)(t);if(n){var i=e(s)(this).constructor;r=Reflect.construct(a,arguments,i)}else r=a.apply(this,arguments);return e(l)(this,r)}}var E=function(t){e(c)(r,t);var n=y(r);function r(){var t;e(o)(this,r),(t=n.call(this)).appendChild(document.querySelector("#username-input-template").content.cloneNode(!0));var a=t.querySelector(".start-input"),i=t.querySelector(".start-input-button");return a.addEventListener("keyup",(function(e){"Enter"===e.code&&i.click()})),i.addEventListener("click",(function(){a.value.length<1||(d.set("Username",a.value),window.location.href="./app.html")})),t}return e(i)(r)}(e(u)(HTMLElement));customElements.define("username-input",E);var b=E;o=a("6RjbW"),i=a("2tlwz"),c=a("8pxQ1"),l=a("17uBT"),s=a("D7RPs"),u=a("jm4w9"),d=a("lt755");function k(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=e(s)(t);if(n){var i=e(s)(this).constructor;r=Reflect.construct(a,arguments,i)}else r=a.apply(this,arguments);return e(l)(this,r)}}var w=function(t){e(c)(r,t);var n=k(r);function r(t){var a;return e(o)(this,r),(a=n.call(this)).container=document.createElement("div"),a.container.classList.add("d-flex","align-items-center","justify-content-between","mb-3","flex-wrap"),a.appendChild(a.container),a.enterDefaultMode(t),a}return e(i)(r,[{key:"createEditNameButton",value:function(){var e=this,t=document.createElement("i");return t.classList.add("fas","fa-pencil-alt","text-warning","edit-icon"),t.addEventListener("click",(function(){e.enterEditMode()})),t}},{key:"createFinishEditButton",value:function(){var e=this,t=document.createElement("button");t.classList.add("save-btn");var n=document.createElement("i");return n.classList.add("fas","fa-check","text-success","save-icon"),t.appendChild(n),t.addEventListener("click",(function(){var t=e.container.firstChild.value;t.length>0?d.set("Username",t):t=d.get("Username"),e.enterDefaultMode(t)})),t}},{key:"createCancelEditButton",value:function(){var e=this,t=document.createElement("i");return t.classList.add("fas","fa-times","text-danger","cancel-icon"),t.addEventListener("click",(function(){var t=d.get("Username");e.enterDefaultMode(t)})),t}},{key:"enterEditMode",value:function(){var e=this,t=document.createElement("input");for(t.value=d.get("Username"),t.classList.add("edit-name");this.container.lastElementChild;)this.container.removeChild(this.container.lastElementChild);this.container.appendChild(t),this.container.appendChild(this.createFinishEditButton()),this.container.appendChild(this.createCancelEditButton()),t.addEventListener("keyup",(function(t){"Enter"===t.code&&e.querySelector(".save-btn").click()})),t.addEventListener("input",(function(){t.value.length>0?e.querySelector(".save-btn").disabled=!1:e.querySelector(".save-btn").disabled=!0})),t.focus()}},{key:"enterDefaultMode",value:function(e){var t=document.createElement("h2"),n=document.createTextNode("Welcome Back, ".concat(e,"!"));for(t.appendChild(n),t.classList.add("subtitle","mb-0");this.container.lastElementChild;)this.container.removeChild(this.container.lastElementChild);this.container.appendChild(t),this.container.appendChild(this.createEditNameButton())}}]),r}(e(u)(HTMLElement));customElements.define("welcome-message",w);var C=w;d=a("lt755");function R(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=e(s)(t);if(n){var i=e(s)(this).constructor;r=Reflect.construct(a,arguments,i)}else r=a.apply(this,arguments);return e(l)(this,r)}}var g=function(t){e(c)(r,t);var n=R(r);function r(){var t;e(o)(this,r),t=n.call(this);var a=d.get("Username");return a?(t.appendChild(new C(a)),t.appendChild(new m)):t.appendChild(new b),t}return e(i)(r)}(e(u)(HTMLElement));customElements.define("start-container",g)}();