/**
 * @file Creates a custom element to display the menu icons (info, setting, stats, and home)
 * @author Steven Harris
 */

import PopUp from '../classes/PopUp.js';
import * as backend from '../backend.js';

/**
* Creates the HTML for the menu icons
* @extends HTMLElement
*/
class MenuIcons extends HTMLElement {
  /**
  * Creates the icons, their functionality and inserts them into the DOM
  */
  constructor() {
    super();

    // Define the DOM elements that control the modals
    this.DOM_ELEMENTS = {
      infoModal: document.getElementById('info-modal'),
      infoCloseButton: document.getElementById('info-close'),
    };
    // By default the info popup is not displayed
    this.DOM_ELEMENTS.infoModal.style.display = 'none';

    this.DOM_ELEMENTS.infoCloseButton.addEventListener('click', () => {
      this.closeInfo();
    });

    const username = backend.get('Username');
    // Only add the icons if the user has signed in
    if (username) {
      this.createIcons();
    }
  }

  /**
  * Create all the icons
  */
  createIcons() {
    this.createInfoButton();
    this.createSettingsButton();
    this.createStatsButton();
    this.createHomeButton();
  }

  /**
  * Shows all icons
  */
  defaultMode() {
    this.DOM_ELEMENTS['info-button'].classList.remove('invisible');
    this.DOM_ELEMENTS['settings-button'].classList.remove('invisible');
    this.DOM_ELEMENTS['stats-button'].classList.remove('invisible');
  }

  /**
  * Hides everything except the home icon
  */
  focusMode() {
    this.DOM_ELEMENTS['info-button'].classList.add('invisible');
    this.DOM_ELEMENTS['settings-button'].classList.add('invisible');
    this.DOM_ELEMENTS['stats-button'].classList.add('invisible');
  }

  /**
  * Creates the info button to display the info popup
  */
  createInfoButton() {
    const infoButton = document.createElement('i');
    infoButton.classList.add('fas', 'fa-info-circle', 'text-white', 'm-4');
    infoButton.addEventListener('click', () => {
      this.openInfo();
    });
    this.DOM_ELEMENTS['info-button'] = infoButton;
    this.appendChild(infoButton);
  }

  /**
  * Creates the settings button to display the settings popup
  */
  createSettingsButton() {
    const settingsButton = document.createElement('i');
    settingsButton.classList.add('fas', 'fa-wrench', 'text-white', 'm-4');
    settingsButton.addEventListener('click', () => {
      // TODO
    });
    this.DOM_ELEMENTS['settings-button'] = settingsButton;
    this.appendChild(settingsButton);
  }

  /**
  * Creates the stats button to display the user's pomodoro statistics
  */
  createStatsButton() {
    const statsButton = document.createElement('a');
    statsButton.classList.add('fas', 'fa-chart-bar', 'text-white', 'm-4');
    statsButton.href = './done.html';
    this.DOM_ELEMENTS['stats-button'] = statsButton;
    this.appendChild(statsButton);
  }

  /**
  * Creates the home button to redirect the user to the home page
  */
  createHomeButton() {
    const homeButton = document.createElement('i');
    // Pop up prompt
    const endMessage = {
      title: 'Leave this session and return to home page?',
      leftButton: 'Yes',
      rightButton: 'No',
    };

    homeButton.classList.add('fas', 'fa-home', 'text-white', 'm-4');
    homeButton.addEventListener('click', () => {
      // Only display the popup on the app page
      if (document.URL.includes('app.html')) {
        PopUp.prompt(endMessage, false).then((result) => {
          if (result === 'left') {
            window.location.href = './index.html';
          } else {
            PopUp.hide();
          }
        });
      }
    });
    this.DOM_ELEMENTS['home-button'] = homeButton;
    this.appendChild(homeButton);
  }

  /*
  * Opens the info popup
  */
  openInfo() {
    this.DOM_ELEMENTS.infoModal.style.display = 'block';
  }

  /**
  * Closes the info popup
  */
  closeInfo() {
    this.DOM_ELEMENTS.infoModal.style.display = 'none';
  }
}

customElements.define('menu-icons', MenuIcons);
export default MenuIcons;