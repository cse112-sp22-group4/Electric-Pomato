/**
 * @file Creates a custom element for the content of the settings modal.
 * @author Steven Harris
 */

/**
* Defines the HTML for the settings modal
* @extends HTMLElement
*/
class SettingsModal extends HTMLElement {
  /**
  * Sets the HTML
  */
  constructor() {
    super();
    this.innerHTML = `
    <div id="settings-modal">
      <div id="settings-box">
        <h2 id="settings-text">Settings</h2>
        <form id="settings-container">
          <label class="settings-row" for="pomo-duration-select" style="word-wrap:break-word">
            Pomodoro Duration
            <select class="settings-select" name="pomo-duration-select" id="pomo-duration-select">
              <option value="20">20 min</option>
              <option value="25">25 min</option>
              <option value="30">30 min</option>
              <option value="35">35 min</option>
              <option value="40">40 min</option>
              <option value="45">45 min</option>
            </select>
          </label>
          <label class="settings-row" for="short-duration-select" style="word-wrap:break-word">
              Short Break Duration
              <select class="settings-select" name="short-duration-select" id="short-duration-select">
                <option value="3">3 min</option>
                <option value="5">5 min</option>
                <option value="7">7 min</option>
                <option value="10">10 min</option>
              </select>
          </label>
          <label class="settings-row" for="long-duration-select" style="word-wrap:break-word">
            Long Break Duration
            <select class="settings-select" name="long-duration-select" id="long-duration-select">
              <option value="15">15 min</option>
              <option value="20">20 min</option>
              <option value="25">25 min</option>
              <option value="30">30 min</option>
              <option value="35">35 min</option>
              <option value="40">40 min</option>
              <option value="45">45 min</option>
            </select>
          </label>
        </form>
        <button id="settings-default" type="button" class="btn btn-primary btn-block">Revert to recommended settings</button>
        <div id="settings-buttons">
          <div class="row">
            <div class="col">
              <button id="settings-close" type="button" class="btn btn-block">Cancel</button>
            </div>
            <div class="col">
              <button id="settings-save" type="button" class="btn btn-success btn-block">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  }
}

customElements.define('settings-modal', SettingsModal);
export default SettingsModal;
