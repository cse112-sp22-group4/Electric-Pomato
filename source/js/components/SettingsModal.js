/**
 * @file Creates and defines the functionality of the settings modal.
 * @author Steven Harris
 * @author Alan Wang
 * Date: 05/11/2022
 */

import * as backend from '../backend.js';
import timerConstants from '../constants/timerConstants.js';
import userThemes from '../constants/userThemes.js';

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
            <label class="settings-row" for="pomo-duration-select">
              <span class="settings-item" id="pomo-text">Pomodoro Duration</span>
              <select class="settings-select" name="pomo-duration-select" id="pomo-duration-select">
                <option value="20">20 min</option>
                <option value="25">25 min</option>
                <option value="30">30 min</option>
                <option value="35">35 min</option>
                <option value="40">40 min</option>
                <option value="45">45 min</option>
              </select>
            </label>
            <label class="settings-row" for="short-duration-select">
              <span class="settings-item" id="short-break-text">Short Break Duration</span>
              <select class="settings-select" name="short-duration-select" id="short-duration-select">
                <option value="3">3 min</option>
                <option value="5">5 min</option>
                <option value="7">7 min</option>
                <option value="10">10 min</option>
              </select>
            </label>
            <label class="settings-row" for="long-duration-select">
              <span class="settings-item" id="long-break-text">Long Break Duration</span>
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
            <label class="settings-row" for="themes-select">
              <span class="settings-item" id="themes-text">Theme</span>
              <select class="settings-select" name="themes-select" id="themes-select">
                <option value="default">Default</option>
                <option value="dark">Dark</option>
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
    this.themesDrop = document.getElementById('themes-select');
    this.closeButton = document.getElementById('settings-close');
    this.saveButton = document.getElementById('settings-save');
    this.defaultButton = document.getElementById('settings-default');

    // If local storage is not yet populated, set the default values
    if (!backend.get('WorkSessionDuration')) {
      SettingsModal.setDefaultValuesInStorage();
    }

    this.themesDrop.addEventListener('change', () => {
      document.documentElement.classList.value = `theme-${this.themesDrop.value}`;
    });

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
    this.pomDurationDrop.value = timerConstants.DEFAULT_WORK_SESSION_DURATION;
    this.shortBreakDrop.value = timerConstants.DEFAULT_SHORT_BREAK_DURATION;
    this.longBreakDrop.value = timerConstants.DEFAULT_LONG_BREAK_DURATION;
    this.themesDrop.value = userThemes.DEFAULT;
    document.documentElement.classList.value = `theme-${userThemes.DEFAULT}`;
  }

  /**
   * Sets default values to local storage variables
   */
  static setDefaultValuesInStorage() {
    backend.set('WorkSessionDuration', timerConstants.DEFAULT_WORK_SESSION_DURATION);
    backend.set('ShortBreakDuration', timerConstants.DEFAULT_SHORT_BREAK_DURATION);
    backend.set('LongBreakDuration', timerConstants.DEFAULT_LONG_BREAK_DURATION);
    backend.set('UserTheme', userThemes.DEFAULT);
  }

  /**
   * Populate the settings values with the stored preferences
   */
  loadStoredInputValues() {
    this.pomDurationDrop.value = backend.get('WorkSessionDuration');
    this.shortBreakDrop.value = backend.get('ShortBreakDuration');
    this.longBreakDrop.value = backend.get('LongBreakDuration');
    this.themesDrop.value = backend.get('UserTheme');
  }

  /**
   * Save the preferences in local storage
   */
  saveSettings() {
    backend.set('WorkSessionDuration', this.pomDurationDrop.value);
    backend.set('ShortBreakDuration', this.shortBreakDrop.value);
    backend.set('LongBreakDuration', this.longBreakDrop.value);
    backend.set('UserTheme', this.themesDrop.value);
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
    document.documentElement.classList.value = `theme-${backend.get('UserTheme')}`;
  }
}

customElements.define('settings-modal', SettingsModal);
export default SettingsModal;
