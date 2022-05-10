/**
 * @file Defines the functionality of the settings modal.
 * @author Steven Harris
 * Date: 05/07/2022
 */

import * as backend from '../backend.js';

/**
 * Defines the SettingsController class which saves user preferences in local storage.
 */
class SettingsController {
  /**
   * Constructs the SettingsController object.
   */
  constructor() {
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
      Settings.setDefaultValuesInStorage();
    }

    this.DOM_ELEMENTS.settingsCloseButton.addEventListener('click', () => {
      this.closeSettings();
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
    this.closeSettings();
  }

  /**
   * Opens the settings modal
   */
  openSettings() {
    this.loadStoredInputValues();
    this.DOM_ELEMENTS.settingsModal.style.display = 'block';
  }

  /**
   * Closes the settings modal
   */
  closeSettings() {
    this.DOM_ELEMENTS.settingsModal.style.display = 'none';
  }
}

export default SettingsController;
