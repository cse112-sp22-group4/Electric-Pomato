var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},o=t.parcelRequireeb0a;null==o&&((o=function(t){if(t in e)return e[t].exports;if(t in n){var o=n[t];delete n[t];var s={id:t,exports:{}};return e[t]=s,o.call(s.exports,s,s.exports),s.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){n[t]=e},t.parcelRequireeb0a=o);var s=o("6bnRN");class i extends HTMLElement{revertToDefault(){this.pomDurationDrop.value=25,this.shortBreakDrop.value=5,this.longBreakDrop.value=25}static setDefaultValuesInStorage(){s.set("workSessionDuration",25),s.set("shortBreakDuration",5),s.set("longBreakDuration",25)}loadStoredInputValues(){this.pomDurationDrop.value=s.get("workSessionDuration"),this.shortBreakDrop.value=s.get("shortBreakDuration"),this.longBreakDrop.value=s.get("longBreakDuration")}saveSettings(){s.set("workSessionDuration",this.pomDurationDrop.value),s.set("shortBreakDuration",this.shortBreakDrop.value),s.set("longBreakDuration",this.longBreakDrop.value),this.close()}open(){this.loadStoredInputValues(),this.wrapper.style.display="flex"}close(){this.wrapper.style.display="none"}constructor(){super(),this.innerHTML='\n    <div id="settings-wrapper" class="modal-wrapper">\n      <div class="container">\n        <div id="settings-content" class="modal-content">\n          <h2 id="settings-text" class="modal-title">Settings</h2>\n          <form id="settings-container">\n            <label class="settings-row" for="pomo-duration-select" style="word-wrap:break-word">\n              Pomodoro Duration\n              <select class="settings-select" name="pomo-duration-select" id="pomo-duration-select">\n                <option value="20">20 min</option>\n                <option value="25">25 min</option>\n                <option value="30">30 min</option>\n                <option value="35">35 min</option>\n                <option value="40">40 min</option>\n                <option value="45">45 min</option>\n              </select>\n            </label>\n            <label class="settings-row" for="short-duration-select" style="word-wrap:break-word">\n                Short Break Duration\n                <select class="settings-select" name="short-duration-select" id="short-duration-select">\n                  <option value="3">3 min</option>\n                  <option value="5">5 min</option>\n                  <option value="7">7 min</option>\n                  <option value="10">10 min</option>\n                </select>\n            </label>\n            <label class="settings-row" for="long-duration-select" style="word-wrap:break-word">\n              Long Break Duration\n              <select class="settings-select" name="long-duration-select" id="long-duration-select">\n                <option value="15">15 min</option>\n                <option value="20">20 min</option>\n                <option value="25">25 min</option>\n                <option value="30">30 min</option>\n                <option value="35">35 min</option>\n                <option value="40">40 min</option>\n                <option value="45">45 min</option>\n              </select>\n            </label>\n          </form>\n          <button id="settings-default" type="button" class="btn btn-primary btn-block">Revert to recommended settings</button>\n          <div id="settings-buttons">\n            <div class="row">\n              <div class="col">\n                <button id="settings-close" type="button" class="btn btn-block">Cancel</button>\n              </div>\n              <div class="col">\n                <button id="settings-save" type="button" class="btn btn-success btn-block">Save</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>',this.wrapper=document.getElementById("settings-wrapper"),this.pomDurationDrop=document.getElementById("pomo-duration-select"),this.shortBreakDrop=document.getElementById("short-duration-select"),this.longBreakDrop=document.getElementById("long-duration-select"),this.closeButton=document.getElementById("settings-close"),this.saveButton=document.getElementById("settings-save"),this.defaultButton=document.getElementById("settings-default"),s.get("workSessionDuration")||i.setDefaultValuesInStorage(),this.closeButton.addEventListener("click",(()=>{this.close()})),this.saveButton.addEventListener("click",(()=>{this.saveSettings()})),this.defaultButton.addEventListener("click",(()=>{this.revertToDefault()}))}}customElements.define("settings-modal",i);