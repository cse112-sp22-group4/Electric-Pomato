/**
 * @file Creates a custom element for the tomato slider to estimate the number of pomodoros.
 * @author Andy Young
 */

/**
 * Constructs the HTML for the view only task list section.
 * @extends HTMLElement
 */
class ViewOnlyTaskListSection extends HTMLElement {
  /**
   * Constructor for ViewOnlyTaskListSection
   * @param {string} title - title of the task list.
   * @param {Array.<Object>} data - describes each task's name, expected and actual pomos.
   */
  constructor(title, data) {
    super();

    this.headerRowTemplate = document.querySelector('#view-header-row-template').content;
    this.rowTemplate = document.querySelector('#view-row-template').content;

    this.insertTitle(title);
    this.insertHeaderRow();
    data.forEach(({ name, expected, actual }, i) => {
      if (name.length > 12) {
        name = `${name.substring(0, 12)}...`;
      }
      this.insertRow(i + 1, name, expected, actual);
    });
  }

  /**
   * Insert a title.
   * @param {string} title - "Completed" or "To Do".
   */
  insertTitle(title) {
    const h3 = document.createElement('h3');
    h3.classList.add('fw-bold', 'mb-0', 'ms-2');
    h3.textContent = title;
    this.appendChild(h3);
  }

  /**
   * Insert header row.
   */
  insertHeaderRow() {
    this.appendChild(this.headerRowTemplate.cloneNode(true));
  }

  /**
   * Insert a row.
   * @param  {...any} arg - args data.
   */
  insertRow(...args) {
    const clone = this.rowTemplate.cloneNode(true);
    this.appendChild(clone);

    const row = this.lastElementChild;
    const spans = row.querySelectorAll('span');

    spans.forEach((span, i) => {
      span.textContent = args[i];
    });
  }
}

customElements.define('view-only-task-list-section', ViewOnlyTaskListSection);
export default ViewOnlyTaskListSection;
