var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},o=t.parcelRequireeb0a;null==o&&((o=function(t){if(t in e)return e[t].exports;if(t in n){var o=n[t];delete n[t];var s={id:t,exports:{}};return e[t]=s,o.call(s.exports,s,s.exports),s.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){n[t]=e},t.parcelRequireeb0a=o);var s=o("6bnRN");var i={DEFAULT_WORK_SESSION_DURATION:25,DEFAULT_SHORT_BREAK_DURATION:5,DEFAULT_LONG_BREAK_DURATION:25};class a extends HTMLElement{revertToDefault(){this.pomDurationDrop.value=i.DEFAULT_WORK_SESSION_DURATION,this.shortBreakDrop.value=i.DEFAULT_SHORT_BREAK_DURATION,this.longBreakDrop.value=i.DEFAULT_LONG_BREAK_DURATION}static setDefaultValuesInStorage(){s.set("WorkSessionDuration",i.DEFAULT_WORK_SESSION_DURATION),s.set("ShortBreakDuration",i.DEFAULT_SHORT_BREAK_DURATION),s.set("LongBreakDuration",i.DEFAULT_LONG_BREAK_DURATION)}loadStoredInputValues(){this.pomDurationDrop.value=s.get("WorkSessionDuration"),this.shortBreakDrop.value=s.get("ShortBreakDuration"),this.longBreakDrop.value=s.get("LongBreakDuration")}saveSettings(){s.set("WorkSessionDuration",this.pomDurationDrop.value),s.set("ShortBreakDuration",this.shortBreakDrop.value),s.set("LongBreakDuration",this.longBreakDrop.value),this.close()}open(){this.loadStoredInputValues(),this.wrapper.style.display="flex"}close(){this.wrapper.style.display="none"}constructor(){super(),this.innerHTML='\n    <div id="settings-wrapper" class="modal-wrapper">\n      <div class="container">\n        <div id="settings-content" class="modal-content">\n          <h2 id="settings-text" class="modal-title">Settings</h2>\n          <form id="settings-container">\n            <label class="settings-row" for="pomo-duration-select">\n              <span class="settings-item" id="pomo-text">Pomodoro Duration</span>\n              <select class="settings-select" name="pomo-duration-select" id="pomo-duration-select">\n                <option value="20">20 min</option>\n                <option value="25">25 min</option>\n                <option value="30">30 min</option>\n                <option value="35">35 min</option>\n                <option value="40">40 min</option>\n                <option value="45">45 min</option>\n              </select>\n            </label>\n            <label class="settings-row" for="short-duration-select">\n              <span class="settings-item" id="short-break-text">Short Break Duration</span>\n              <select class="settings-select" name="short-duration-select" id="short-duration-select">\n                <option value="3">3 min</option>\n                <option value="5">5 min</option>\n                <option value="7">7 min</option>\n                <option value="10">10 min</option>\n              </select>\n            </label>\n            <label class="settings-row" for="long-duration-select">\n              <span class="settings-item" id="long-break-text">Long Break Duration</span>\n              <select class="settings-select" name="long-duration-select" id="long-duration-select">\n                <option value="15">15 min</option>\n                <option value="20">20 min</option>\n                <option value="25">25 min</option>\n                <option value="30">30 min</option>\n                <option value="35">35 min</option>\n                <option value="40">40 min</option>\n                <option value="45">45 min</option>\n              </select>\n            </label>\n          </form>\n          <button id="settings-default" type="button" class="btn btn-primary btn-block">Revert to recommended settings</button>\n          <div id="settings-buttons">\n            <div class="row">\n              <div class="col">\n                <button id="settings-close" type="button" class="btn btn-block">Cancel</button>\n              </div>\n              <div class="col">\n                <button id="settings-save" type="button" class="btn btn-success btn-block">Save</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>',this.wrapper=document.getElementById("settings-wrapper"),this.pomDurationDrop=document.getElementById("pomo-duration-select"),this.shortBreakDrop=document.getElementById("short-duration-select"),this.longBreakDrop=document.getElementById("long-duration-select"),this.closeButton=document.getElementById("settings-close"),this.saveButton=document.getElementById("settings-save"),this.defaultButton=document.getElementById("settings-default"),s.get("WorkSessionDuration")||a.setDefaultValuesInStorage(),this.closeButton.addEventListener("click",(()=>{this.close()})),this.saveButton.addEventListener("click",(()=>{this.saveSettings()})),this.defaultButton.addEventListener("click",(()=>{this.revertToDefault()}))}}customElements.define("settings-modal",a);