/**
 * @file Creates and defines the functionality of the settings modal.
 * @author Steven Harris
 * @author Alan Wang
 * Date: 05/11/2022
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
    <div id="settings-wrapper" class="modal-wrapper">
      <div class="container">
        <div id="settings-content" class="modal-content">
          <h2 id="settings-text" class="modal-title">Settings</h2>
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
      </div>
    </div>`;

    // Set references to elements of modal
    this.wrapper = document.getElementById('settings-wrapper');
    this.pomDurationDrop = document.getElementById('pomo-duration-select');
    this.shortBreakDrop = document.getElementById('short-duration-select');
    this.longBreakDrop = document.getElementById('long-duration-select');
    this.closeButton = document.getElementById('settings-close');
    this.saveButton = document.getElementById('settings-save');
    this.defaultButton = document.getElementById('settings-default');

    // If local storage is not yet populated, set the default values
    if (!backend.get('workSessionDuration')) {
      SettingsModal.setDefaultValuesInStorage();
    }

    // Set up buttons
    this.closeButton.addEventListener('click', () => {
      this.close();
    });
    this.saveButton.addEventListener('click', () => {
      this.saveSettings();
    });
    this.defaultButton.addEventListener('click', () => {
      this.revertToDefault();
    });
  }

  /**
   * Revert the settings back to their default values
   */
  revertToDefault() {
    this.pomDurationDrop.value = 25;
    this.shortBreakDrop.value = 5;
    this.longBreakDrop.value = 25;
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
    this.pomDurationDrop.value = backend.get('workSessionDuration');
    this.shortBreakDrop.value = backend.get('shortBreakDuration');
    this.longBreakDrop.value = backend.get('longBreakDuration');
  }

  /**
   * Save the preferences in local storage
   */
  saveSettings() {
    backend.set('workSessionDuration', this.pomDurationDrop.value);
    backend.set('shortBreakDuration', this.shortBreakDrop.value);
    backend.set('longBreakDuration', this.longBreakDrop.value);
    this.close();
  }

  /**
   * Opens the settings modal
   */
  open() {
    this.loadStoredInputValues();
    this.wrapper.style.display = 'flex';
  }

  /**
   * Closes the settings modal
   */
  close() {
    this.wrapper.style.display = 'none';
  }
}

customElements.define('settings-modal', SettingsModal);
export default SettingsModal;
