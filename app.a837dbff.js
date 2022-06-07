var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequireeb0a;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var s={id:e,exports:{}};return t[e]=s,o.call(s.exports,s,s.exports),s.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequireeb0a=o);var s=o("6bnRN");var i={DEFAULT_WORK_SESSION_DURATION:25,DEFAULT_SHORT_BREAK_DURATION:5,DEFAULT_LONG_BREAK_DURATION:25},a=o("7CQMC");class l extends HTMLElement{revertToDefault(){this.pomDurationDrop.value=i.DEFAULT_WORK_SESSION_DURATION,this.shortBreakDrop.value=i.DEFAULT_SHORT_BREAK_DURATION,this.longBreakDrop.value=i.DEFAULT_LONG_BREAK_DURATION,this.themesDrop.value=a.default.DEFAULT,"default"!==this.iconsDrop.value&&this.iconsDrop.setAttribute("changed","true"),this.iconsDrop.value="default",this.audioDrop.value="on",document.documentElement.classList.value=`theme-${a.default.DEFAULT}`}static setDefaultValuesInStorage(){s.set("WorkSessionDuration",i.DEFAULT_WORK_SESSION_DURATION),s.set("ShortBreakDuration",i.DEFAULT_SHORT_BREAK_DURATION),s.set("LongBreakDuration",i.DEFAULT_LONG_BREAK_DURATION),s.set("Icon","default"),s.set("UserTheme",a.default.DEFAULT),s.set("AudioToggle","on")}loadStoredInputValues(){this.pomDurationDrop.value=s.get("WorkSessionDuration"),this.shortBreakDrop.value=s.get("ShortBreakDuration"),this.longBreakDrop.value=s.get("LongBreakDuration"),this.themesDrop.value=s.get("UserTheme"),this.iconsDrop.value=s.get("Icon"),this.audioDrop.value=s.get("AudioToggle")}saveSettings(){s.set("WorkSessionDuration",this.pomDurationDrop.value),s.set("ShortBreakDuration",this.shortBreakDrop.value),s.set("LongBreakDuration",this.longBreakDrop.value),s.set("UserTheme",this.themesDrop.value),s.set("Icon",this.iconsDrop.value),s.set("AudioToggle",this.audioDrop.value),"true"===this.iconsDrop.getAttribute("changed")&&location.reload(),this.close()}open(){this.loadStoredInputValues(),this.wrapper.style.display="flex"}close(){this.wrapper.style.display="none",document.documentElement.classList.value=`theme-${s.get("UserTheme")}`}constructor(){super(),this.innerHTML='\n    <div id="settings-wrapper" class="modal-wrapper">\n      <div class="container">\n        <div id="settings-content" class="modal-content">\n          <h2 id="settings-text" class="modal-title">Settings</h2>\n          <form id="settings-container">\n            <label class="settings-row" for="pomo-duration-select">\n              <span class="settings-item" id="pomo-text">Pomodoro Duration</span>\n              <select class="settings-select" name="pomo-duration-select" id="pomo-duration-select">\n                <option value="20">20 min</option>\n                <option value="25">25 min</option>\n                <option value="30">30 min</option>\n                <option value="35">35 min</option>\n                <option value="40">40 min</option>\n                <option value="45">45 min</option>\n              </select>\n            </label>\n            <label class="settings-row" for="short-duration-select">\n              <span class="settings-item" id="short-break-text">Short Break Duration</span>\n              <select class="settings-select" name="short-duration-select" id="short-duration-select">\n                <option value="3">3 min</option>\n                <option value="5">5 min</option>\n                <option value="7">7 min</option>\n                <option value="10">10 min</option>\n              </select>\n            </label>\n            <label class="settings-row" for="long-duration-select">\n              <span class="settings-item" id="long-break-text">Long Break Duration</span>\n              <select class="settings-select" name="long-duration-select" id="long-duration-select">\n                <option value="15">15 min</option>\n                <option value="20">20 min</option>\n                <option value="25">25 min</option>\n                <option value="30">30 min</option>\n                <option value="35">35 min</option>\n                <option value="40">40 min</option>\n                <option value="45">45 min</option>\n              </select>\n            </label>\n            <label class="settings-row" for="themes-select">\n              <span class="settings-item" id="themes-text">Theme</span>\n              <select class="settings-select" name="themes-select" id="themes-select">\n                <option value="default">Default</option>\n                <option value="dark">Dark</option>\n              </select>\n            </label>\n            <label class="settings-row" for="icon-select">\n            <span class="settings-item" id="icon-text">Icon</span>\n            <select class="settings-select" name="icon-select" id="icon-select" changed="false">\n              <option value="default">Default</option>\n              <option value="bomb">Bomb</option>\n            </select>\n          </label>\n          <label class="settings-row" for="audio-select">\n            <span class="settings-item" id="audio-text">Audio Notifications</span>\n            <select class="settings-select" name="audio-select" id="audio-select" changed="false">\n              <option value="on">On</option>\n              <option value="off">Off</option>\n            </select>\n          </label>\n          </form>\n          <button id="settings-default" type="button" class="btn btn-primary btn-block">Revert to recommended settings</button>\n          <div id="settings-buttons">\n            <div class="row">\n              <div class="col">\n                <button id="settings-close" type="button" class="btn btn-block">Cancel</button>\n              </div>\n              <div class="col">\n                <button id="settings-save" type="button" class="btn btn-success btn-block">Save</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>',this.wrapper=document.getElementById("settings-wrapper"),this.pomDurationDrop=document.getElementById("pomo-duration-select"),this.shortBreakDrop=document.getElementById("short-duration-select"),this.longBreakDrop=document.getElementById("long-duration-select"),this.themesDrop=document.getElementById("themes-select"),this.iconsDrop=document.getElementById("icon-select"),this.audioDrop=document.getElementById("audio-select"),this.closeButton=document.getElementById("settings-close"),this.saveButton=document.getElementById("settings-save"),this.defaultButton=document.getElementById("settings-default"),s.get("WorkSessionDuration")||l.setDefaultValuesInStorage(),this.themesDrop.addEventListener("change",(()=>{document.documentElement.classList.value=`theme-${this.themesDrop.value}`})),this.iconsDrop.addEventListener("change",(()=>{this.iconsDrop.setAttribute("changed",!0)})),this.closeButton.addEventListener("click",(()=>{this.close()})),this.saveButton.addEventListener("click",(()=>{this.saveSettings()})),this.defaultButton.addEventListener("click",(()=>{this.revertToDefault()}))}}customElements.define("settings-modal",l);