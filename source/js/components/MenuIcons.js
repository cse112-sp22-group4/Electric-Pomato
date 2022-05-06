/**
 * @file Creates a custom element to display the menu icons (info, setting, stats, and home).
 * @author Steven Harris
 */

/**
* Creates the HTML for the menu icons.
* @extends HTMLElement
*/
class MenuIcons extends HTMLElement {
  /**
  * Creates the icons, their functionality and inserts them into the DOM.
  */
  constructor() {
    super();

    // Define the DOM elements that control the modals
    this.DOM_ELEMENTS = {
      infoModal: document.getElementById('info-modal'),
      infoCloseButton: document.getElementById('info-close')
    };
    // By default the popup is not displayed
    this.DOM_ELEMENTS.infoModal.style.display = 'none';

    this.DOM_ELEMENTS.infoCloseButton.addEventListener('click', () => {
      this.closeInfo();
    });  

    // Create the icons
    this.createInfoButton();
    this.createSettingsButton();
    this.createStatsButton();
    this.createHomeButton();
  }

  /**
  * Creates the info button to display the info popup.
  */
  createInfoButton() {
    const infoButton = document.createElement('i');
    infoButton.classList.add('fas', 'fa-info-circle', 'text-white', 'm-4');
    infoButton.addEventListener('click', () => {
      this.openInfo();
    });
    this.appendChild(infoButton);
  }

  /**
  * Creates the seettings button to display the settings popup.
  */
  createSettingsButton() {
    const settingsButton = document.createElement('i');
    settingsButton.classList.add('fas', 'fa-wrench', 'text-white', 'm-4');
    settingsButton.addEventListener('click', () => {
      // TODO
    });
    this.appendChild(settingsButton);
  }

  /**
  * Creates the stats button to display the user's pomodoro statistics
  */
  createStatsButton() {
    const statsButton = document.createElement('a');
    statsButton.classList.add('fas', 'fa-chart-bar', 'text-white', 'm-4');
    statsButton.href = './done.html';
    this.appendChild(statsButton);
  }

  /**
  * Creates the home button to redirect the user to the home page.
  */
  createHomeButton() {
    const homeButton = document.createElement('a');
    homeButton.classList.add('fas', 'fa-home', 'text-white', 'm-4');
    homeButton.href = './';
    this.appendChild(homeButton);
  }

  /*
  * Opens the info popup.
  */
  openInfo() {
    this.DOM_ELEMENTS.infoModal.style.display = 'block';
  }

  /**
  * Closes the info popup.
  */
  closeInfo() {
    this.DOM_ELEMENTS.infoModal.style.display = 'none';
  }
}

customElements.define('menu-icons', MenuIcons);
export default MenuIcons;
