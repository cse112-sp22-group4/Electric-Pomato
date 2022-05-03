/**
 * @file Displays the button to redirect to logs page when there are items in History.
 * @author Andy Young
 * @author Xingyu Zhu
 */

import * as backend from './backend.js';
/**
 * Constructs the HTML for the "View Logs" button
 * @extends HTMLElement
 */
class LogsButton extends HTMLElement {
  /**
  * constructor for LogsButton
  */
  constructor() {
    super();

    const history = JSON.parse(backend.get('History'));

    if (history && history.tasklists.length > 0) {
      const a = document.createElement('a');
      a.classList.add('btn', 'btn-info', 'btn-lg');
      a.href = './done.html';
      a.textContent = 'View Logs';
      this.appendChild(a);
    }
  }
}

customElements.define('logs-button', LogsButton);
export default LogsButton;
