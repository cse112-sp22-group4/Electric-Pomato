!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=e.parcelRequireeb0a;null==i&&((i=function(t){if(t in n)return n[t].exports;if(t in o){var e=o[t];delete o[t];var i={id:t,exports:{}};return n[t]=i,e.call(i.exports,i,i.exports),i.exports}var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){o[t]=e},e.parcelRequireeb0a=i);var s=i("6RjbW"),a=i("2tlwz"),l=i("8pxQ1"),r=i("17uBT"),u=i("D7RPs"),c=i("jm4w9"),p=i("lt755"),d={DEFAULT_WORK_SESSION_DURATION:25,DEFAULT_SHORT_BREAK_DURATION:5,DEFAULT_LONG_BREAK_DURATION:25};function v(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,i=t(u)(e);if(n){var s=t(u)(this).constructor;o=Reflect.construct(i,arguments,s)}else o=i.apply(this,arguments);return t(r)(this,o)}}var f=function(e){t(l)(o,e);var n=v(o);function o(){var e;return t(s)(this,o),(e=n.call(this)).innerHTML='\n    <div id="settings-wrapper" class="modal-wrapper">\n      <div class="container">\n        <div id="settings-content" class="modal-content">\n          <h2 id="settings-text" class="modal-title">Settings</h2>\n          <form id="settings-container">\n            <label class="settings-row" for="pomo-duration-select">\n              <span class="settings-item" id="pomo-text">Pomodoro Duration</span>\n              <select class="settings-select" name="pomo-duration-select" id="pomo-duration-select">\n                <option value="20">20 min</option>\n                <option value="25">25 min</option>\n                <option value="30">30 min</option>\n                <option value="35">35 min</option>\n                <option value="40">40 min</option>\n                <option value="45">45 min</option>\n              </select>\n            </label>\n            <label class="settings-row" for="short-duration-select">\n              <span class="settings-item" id="short-break-text">Short Break Duration</span>\n              <select class="settings-select" name="short-duration-select" id="short-duration-select">\n                <option value="3">3 min</option>\n                <option value="5">5 min</option>\n                <option value="7">7 min</option>\n                <option value="10">10 min</option>\n              </select>\n            </label>\n            <label class="settings-row" for="long-duration-select">\n              <span class="settings-item" id="long-break-text">Long Break Duration</span>\n              <select class="settings-select" name="long-duration-select" id="long-duration-select">\n                <option value="15">15 min</option>\n                <option value="20">20 min</option>\n                <option value="25">25 min</option>\n                <option value="30">30 min</option>\n                <option value="35">35 min</option>\n                <option value="40">40 min</option>\n                <option value="45">45 min</option>\n              </select>\n            </label>\n          </form>\n          <button id="settings-default" type="button" class="btn btn-primary btn-block">Revert to recommended settings</button>\n          <div id="settings-buttons">\n            <div class="row">\n              <div class="col">\n                <button id="settings-close" type="button" class="btn btn-block">Cancel</button>\n              </div>\n              <div class="col">\n                <button id="settings-save" type="button" class="btn btn-success btn-block">Save</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>',e.wrapper=document.getElementById("settings-wrapper"),e.pomDurationDrop=document.getElementById("pomo-duration-select"),e.shortBreakDrop=document.getElementById("short-duration-select"),e.longBreakDrop=document.getElementById("long-duration-select"),e.closeButton=document.getElementById("settings-close"),e.saveButton=document.getElementById("settings-save"),e.defaultButton=document.getElementById("settings-default"),p.get("WorkSessionDuration")||o.setDefaultValuesInStorage(),e.closeButton.addEventListener("click",(function(){e.close()})),e.saveButton.addEventListener("click",(function(){e.saveSettings()})),e.defaultButton.addEventListener("click",(function(){e.revertToDefault()})),e}return t(a)(o,[{key:"revertToDefault",value:function(){this.pomDurationDrop.value=d.DEFAULT_WORK_SESSION_DURATION,this.shortBreakDrop.value=d.DEFAULT_SHORT_BREAK_DURATION,this.longBreakDrop.value=d.DEFAULT_LONG_BREAK_DURATION}},{key:"loadStoredInputValues",value:function(){this.pomDurationDrop.value=p.get("WorkSessionDuration"),this.shortBreakDrop.value=p.get("ShortBreakDuration"),this.longBreakDrop.value=p.get("LongBreakDuration")}},{key:"saveSettings",value:function(){p.set("WorkSessionDuration",this.pomDurationDrop.value),p.set("ShortBreakDuration",this.shortBreakDrop.value),p.set("LongBreakDuration",this.longBreakDrop.value),this.close()}},{key:"open",value:function(){this.loadStoredInputValues(),this.wrapper.style.display="flex"}},{key:"close",value:function(){this.wrapper.style.display="none"}}],[{key:"setDefaultValuesInStorage",value:function(){p.set("WorkSessionDuration",d.DEFAULT_WORK_SESSION_DURATION),p.set("ShortBreakDuration",d.DEFAULT_SHORT_BREAK_DURATION),p.set("LongBreakDuration",d.DEFAULT_LONG_BREAK_DURATION)}}]),o}(t(c)(HTMLElement));customElements.define("settings-modal",f)}();