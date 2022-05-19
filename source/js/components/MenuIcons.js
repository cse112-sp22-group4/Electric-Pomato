/**
 * @file Creates a custom element to display the menu icons (info, setting, stats, and home)
 * @author Steven Harris
 * @author Alan Wang
 * Date: 05/11/2022
 */

import * as backend from '../backend.js';
import PopUp from '../classes/PopUp.js';

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

    // Assign references to the modals
    this.infoModal = document.querySelector('info-modal');
    this.settingsModal = document.querySelector('settings-modal');
    this.statsModal = document.querySelector('stats-modal');

    // Only add the icons if the user has signed in
    const username = backend.get('Username');
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
    this.infoButton.classList.remove('invisible');
    this.settingsButton.classList.remove('invisible');
    this.statsButton.classList.remove('invisible');
  }

  /**
  * Hides everything except the home icon
  */
  focusMode() {
    this.infoButton.classList.add('invisible');
    this.settingsButton.classList.add('invisible');
    this.statsButton.classList.add('invisible');
  }

  /**
  * Creates the info button to display the info popup
  */
  createInfoButton() {
    // Set up button
    const infoButton = document.createElement('button');
    infoButton.classList.add('m-2', 'rounded', 'p-2');
    const infoIcon = document.createElement('i');
    infoIcon.classList.add('fas', 'text-white', 'fa-info-circle');
    const infoText = document.createElement('div');
    infoText.classList.add('d-none', 'd-md-inline-block', 'text-white', 'ms-2');
    infoText.textContent = 'Info';

    infoButton.addEventListener('click', () => {
      this.infoModal.open();
    });

    this.infoButton = infoButton;
    infoButton.appendChild(infoIcon);
    infoButton.appendChild(infoText);
    this.appendChild(infoButton);
  }

  /**
  * Creates the settings button to display the settings popup
  */
  createSettingsButton() {
    // Set up button
    const settingsButton = document.createElement('button');
    settingsButton.classList.add('m-2', 'rounded', 'p-2');
    const settingsIcon = document.createElement('i');
    settingsIcon.classList.add('fas', 'text-white', 'fa-wrench');
    const settingsText = document.createElement('div');
    settingsText.classList.add('d-none', 'd-md-inline-block', 'text-white', 'ms-2');
    settingsText.textContent = 'Settings';

    settingsButton.addEventListener('click', () => {
      this.settingsModal.open();
    });

    this.settingsButton = settingsButton;
    settingsButton.appendChild(settingsIcon);
    settingsButton.appendChild(settingsText);
    this.appendChild(settingsButton);
  }

  /**
  * Creates the stats button to display the user's pomodoro statistics
  */
  createStatsButton() {
    // Set up button
    const statsButton = document.createElement('button');
    statsButton.classList.add('m-2', 'rounded', 'p-2');
    const statsIcon = document.createElement('i');
    statsIcon.classList.add('fas', 'fa-chart-bar', 'text-white');
    const statsText = document.createElement('div');
    statsText.classList.add('d-none', 'd-md-inline-block', 'text-white', 'ms-2');
    statsText.textContent = 'Stats';

    statsButton.addEventListener('click', () => {
      this.statsModal.open();
    });

    this.statsButton = statsButton;
    statsButton.appendChild(statsIcon);
    statsButton.appendChild(statsText);
    this.appendChild(statsButton);
  }

  /**
  * Creates the home button to redirect the user to the home page
  */
  createHomeButton() {
    // Set up button
    const homeButton = document.createElement('button');
    homeButton.classList.add('m-2', 'rounded', 'p-2');
    const homeIcon = document.createElement('i');
    homeIcon.classList.add('fas', 'fa-home', 'text-white');
    const homeText = document.createElement('div');
    homeText.classList.add('d-none', 'd-md-inline-block', 'text-white', 'ms-2');
    homeText.textContent = 'Home';

    // Pop up prompt
    const endMessage = {
      title: 'Leave this session and return to home page?',
      leftButton: 'Yes',
      rightButton: 'No',
    };

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
    this.homeButton = homeButton;
    homeButton.appendChild(homeIcon);
    homeButton.appendChild(homeText);
    this.appendChild(homeButton);
  }
}

customElements.define('menu-icons', MenuIcons);
export default MenuIcons;
