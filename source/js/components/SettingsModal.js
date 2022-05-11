/**
 * @file Creates and defines the functionality of the settings modal.
 * @author Steven Harris
 * Date: 05/07/2022
 */

import * as backend from '../backend.js';

/**
 * Defines the Settings class which saves user preferences in local storage.
 */
class SettingsModal extends HTMLElement {
  /**
   * Updates the HTML and adds event listeners
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

    this.DOM_ELEMENTS = {
      settingsModal: document.getElementById('settings-modal'),
      pomDurationDrop: document.getElementById('pomo-duration-select'),
      shortBreakDrop: document.getElementById('short-duration-select'),
      longBreakDrop: document.getElementById('long-duration-select'),
      settingsCloseButton: document.getElementById('settings-close'),
      settingsSaveButton: document.getElementById('settings-save'),
      settingsDefaultButton: document.getElementById('settings-default'),
    };

    // By default the settings modal is not displayed
    this.DOM_ELEMENTS.settingsModal.style.display = 'none';

    // If local storage is not yet populated, set the default values
    if (!backend.get('workSessionDuration')) {
      SettingsModal.setDefaultValuesInStorage();
    }

    this.DOM_ELEMENTS.settingsCloseButton.addEventListener('click', () => {
      this.close();
    });
    this.DOM_ELEMENTS.settingsSaveButton.addEventListener('click', () => {
      this.saveSettings();
    });
    this.DOM_ELEMENTS.settingsDefaultButton.addEventListener('click', () => {
      this.revertToDefault();
    });
  }

  /**
   * Revert the settings back to their default values
   */
  revertToDefault() {
    this.DOM_ELEMENTS.pomDurationDrop.value = 25;
    this.DOM_ELEMENTS.shortBreakDrop.value = 5;
    this.DOM_ELEMENTS.longBreakDrop.value = 25;
  }

  /**
   * Sets default values to local storage variables
   */
  static setDefaultValuesInStorage() {
    backend.set('workSessionDuration', 25);
    backend.set('shortBreakDuration', 5);
    backend.set('longBreakDuration', 25);
  }

  /**
   * Populate the settings values with the stored preferences
   */
  loadStoredInputValues() {
    this.DOM_ELEMENTS.pomDurationDrop.value = backend.get('workSessionDuration');
    this.DOM_ELEMENTS.shortBreakDrop.value = backend.get('shortBreakDuration');
    this.DOM_ELEMENTS.longBreakDrop.value = backend.get('longBreakDuration');
  }

  /**
   * Save the preferences in local storage
   */
  saveSettings() {
    backend.set('workSessionDuration', this.DOM_ELEMENTS.pomDurationDrop.value);
    backend.set('shortBreakDuration', this.DOM_ELEMENTS.shortBreakDrop.value);
    backend.set('longBreakDuration', this.DOM_ELEMENTS.longBreakDrop.value);
    this.close();
  }

  /**
   * Opens the settings modal
   */
  open() {
    this.loadStoredInputValues();
    this.DOM_ELEMENTS.settingsModal.style.display = 'block';
  }

  /**
   * Closes the settings modal
   */
  close() {
    this.DOM_ELEMENTS.settingsModal.style.display = 'none';
  }
}

customElements.define('settings-modal', SettingsModal);
export default SettingsModal;
