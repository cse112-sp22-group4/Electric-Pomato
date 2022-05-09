/**
 * @file Holds the Info class and defines its functionality.
 * @author Steven Harris
 * Date: 05/07/2022
 */

/**
 * Defines the Info class which controls opening and closing the info modal.
 */
class Info {
  /**
   * Constructs the info object
   */
  constructor() {
    this.DOM_ELEMENTS = {
      infoModal: document.getElementById('info-modal'),
      infoCloseButton: document.getElementById('info-close'),
    };
    // By default the info modal is not displayed
    this.DOM_ELEMENTS.infoModal.style.display = 'none';

    this.DOM_ELEMENTS.infoCloseButton.addEventListener('click', () => {
      this.closeInfo();
    });
  }

  /*
  * Opens the info modal
  */
  openInfo() {
    this.DOM_ELEMENTS.infoModal.style.display = 'block';
  }

  /**
  * Closes the info modal
  */
  closeInfo() {
    this.DOM_ELEMENTS.infoModal.style.display = 'none';
  }
}

export default Info;
