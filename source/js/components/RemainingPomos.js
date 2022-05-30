/**
 * @file Creates a custom element to display remaining planned pomos
 * @author Meshach Adoe
 * Date: 05/11/2022
 */

import * as backend from '../backend.js';
import TaskList from '../classes/TaskList.js';
import svgIcons from '../constants/themeIcons.js';

/**
 * Creates the HTML for the menu icons
 * @extends HTMLElement
 */

class RemainingPomos extends HTMLElement {
/**
* Creates the icons, their functionality and inserts them into the DOM
*/
  constructor() {
    super();
    this.taskList = new TaskList();
    this.currentTask = null;

    // console.log(this.taskList);
    this.svgUrls = svgIcons[backend.get('Icon')].urls;
    this.svgClasses = svgIcons[backend.get('Icon')].classes;

    const template = document.createElement('template');
    template.innerHTML = `
      <div class="d-flex justify-content-between align-items-center remaining-pomos-container">
        <h3>Remaining Planned Pomos</h3>
      </div>
    `;
    this.appendChild(template.content.cloneNode(true));

    this.setPomos(this.taskList);
    this.updateCompletedPomos(this.taskList);
  }

  resetPomos() {
    const pomoContainer = this.querySelector('.remaining-pomos-container');
    pomoContainer.innerHTML = `
      <div class="d-flex justify-content-between align-items-center remaining-pomos-container">
        <h3>Remaining Planned Pomos</h3>
      </div>
    `;
  }

  /**
  * Create all the icons
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
      this.querySelector('.remaining-pomos-container').appendChild(pomoTemplate.content.cloneNode(true));
    }

    this.querySelectorAll('.remaining-pomos-icon').forEach((object) => {
      object.setAttribute('data', this.svgUrls[1]);
    });
  }

  visibleMode() {
    this.querySelector('.remaining-pomos-container').classList.remove('invisible');
  }

  hiddenMode() {
    this.querySelector('.remaining-pomos-container').classList.add('invisible');
  }

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
