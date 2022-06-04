/**
 * @file Creates a custom element to display remaining planned pomos
 * @author Meshach Adoe
 * Date: 05/11/2022
 */

import * as backend from '../backend.js';
import svgIcons from '../constants/themeIcons.js';

/**
 * Creates the HTML for the remaining pomo indicator
 * @extends HTMLElement
 */

class RemainingPomos extends HTMLElement {
  /**
   * constructor for Remaining Pomo Indicator
  */
  constructor() {
    super();
    this.taskList = JSON.parse(backend.get('TaskList'));
    this.currentTask = null;

    if (this.taskList.todo.length === 0) return;

    this.svgUrls = svgIcons[backend.get('Icon')].urls;

    const template = document.createElement('template');
    template.innerHTML = `
      <div class="remaining-pomos-container">
        <h3>Planned Pomos</h3>
        <div class="d-flex justify-content-center align-items-center icon-container"></div>
      </div>
    `;
    this.appendChild(template.content.cloneNode(true));

    this.setPomos(this.taskList);
    this.updateCompletedPomos(this.taskList);
  }

  /**
  * Reset remaining pomos icon container
  */

  resetPomos() {
    const pomoContainer = this.querySelector('.icon-container');
    pomoContainer.innerHTML = '';
  }

  /**
  * Set the number of pomos for the current task
  * @param {object} taskList - taskList object which contains expected pomos for current task
  */
  setPomos(taskList) {
    this.resetPomos();
    const pomoTemplate = document.createElement('template');
    pomoTemplate.innerHTML = `
      <object class="remaining-pomos-icon" type="image/svg+xml" data=""></object>
    `;

    const expectedPomos = taskList.todo[0].expected;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < expectedPomos; i++) {
      this.querySelector('.icon-container').appendChild(pomoTemplate.content.cloneNode(true));
    }

    this.querySelectorAll('.remaining-pomos-icon').forEach((object) => {
      object.setAttribute('data', this.svgUrls[1]);
    });
  }

  /**
  * Make the remaining pomo indicator visible
  */

  visibleMode() {
    this.querySelector('.remaining-pomos-container').classList.remove('invisible');
  }

  /**
  * Hide the remaining pomo indicator
  */

  hiddenMode() {
    this.querySelector('.remaining-pomos-container').classList.add('invisible');
  }

  /**
  * Update the number of completed pomos
  * @param {object} currTaskList - taskList object which contains actual pomos for current task
  */

  updateCompletedPomos(currTaskList) {
    const completedPomos = currTaskList.todo[0].actual;

    this.querySelectorAll('.remaining-pomos-icon').forEach((object, idx) => {
      if (idx < completedPomos) {
        object.classList.add('completed');
      }
    });
  }
}

customElements.define('remaining-pomos', RemainingPomos);
export default RemainingPomos;
