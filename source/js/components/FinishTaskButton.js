/**
 * @file Creates a custom element for the button to start the timer session.
 * @author Xingyu Zhu
 */

import PopUp from '../classes/PopUp.js';
import * as backend from '../backend.js';
/**
  * Constructs the HTML for the finish task buttons
  * @extends HTMLElement
  */
class FinishTaskButton extends HTMLElement {
  /**
   * constructor for FinishTaskButtons
  */
  constructor(callback) {
    super();
    // Create the button element
    this.button = document.createElement('button');
    this.button.classList.add('btn', 'btn-success', 'btn-lg');
    this.updateButton();
    this.button.addEventListener('click', () => {
      let warning = {};
      // Display end session instead of finish task warning if only 1 task left
      if (this.length > 1) {
        warning = {
          title: 'Are you sure you want to finish this task early?',
          subtitle: ' ',
          leftButton: 'Yes',
          rightButton: 'No',
        };
      } else {
        warning = {
          title: 'End session?',
          subtitle: ' ',
          leftButton: 'Yes',
          rightButton: 'No',
        };
      }
      PopUp.prompt(warning, true).then((result) => {
        if (result === 'left') {
          this.checked = true;
          callback.bind(this, this)();
          PopUp.hide();
        } else if (result === 'right') {
          PopUp.hide();
        }
      });
    });
    this.appendChild(this.button);
  }

  /**
  * Get whether checkbox is checked.
  * @return {boolean} Checked property
  */
  getChecked() {
    return this.checked;
  }

  /**
   * Updates button text according to backend
   */
  updateButton() {
    this.checked = false;
    this.taskList = JSON.parse(backend.get('TaskList'));
    if (this.taskList != null) {
      this.length = this.taskList.todo.length;
      this.button.textContent = this.taskList && this.length > 1 ? 'Finish Task' : 'Finish Final Task';
    }
  }
}

customElements.define('finish-task-button', FinishTaskButton);
export default FinishTaskButton;
