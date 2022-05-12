/**
 * @file Creates and defines the functionality for the Pomo stats modal.
 * @author Alan Wang
 * Date: 05/11/2022
 */
import zingchart from '../../dependencies/zingchart-es6.min.js';
import lineConfig from '../constants/lineConfig.js';
import { hex } from '../constants/lineColors.js';
import * as backend from '../backend.js';

/**
 * Constructs the HTML for the StatsModal
 * @extends HTMLElement
 */
class StatsModal extends HTMLElement {
  /**
   * Updates the HTML and adds event listeners
   */
  constructor() {
    super();

    this.innerHTML = `
    <div id="stats-wrapper" class="modal-wrapper">
      <div class="container">
            <div class="modal-content">
              <h2 class="modal-title">Expected vs. Actual Pomos Per Session</h2>
              <div id="line-chart">
                <h3 id="line-chart-alt">You don't have any sessions recorded.<br>Click "Create Session" to create a new session!</h3>
              </div>
              <button id="stats-close" class="btn btn-primary">Close</button>
        </div>
      </div>
    </div>`;

    // Get references to elements of modal
    this.wrapper = document.getElementById('stats-wrapper');
    this.closeButton = document.getElementById('stats-close');
    this.lineChartAlt = document.getElementById('line-chart-alt');

    // Set up close button
    this.closeButton.addEventListener('click', () => {
      this.close();
    });
  }

  /*
   * Opens the stats modal
   */
  open() {
    this.wrapper.style.display = 'flex';
    if (backend.get('History') == null) {
      this.lineChartAlt.style.display = 'flex';
    } else {
      this.lineChartAlt.style.display = 'none';
      StatsModal.loadLineChart();
    }
  }

  /*
   * Closes the stats modal
   */
  close() {
    this.wrapper.style.display = 'none';
  }

  /**
   * Formats the data into an object that describes one line in the graph.
   * @param {string} name - Name of the line
   * @param {Array.<number>} data - Contains number of sessions (y-coordinate)
   * @param {string} color - Hexadecimal string of the line color
   * @returns {Object} Formatted line data
   */
  static line(name, data, color) {
    return {
      text: name.charAt(0).toUpperCase() + name.slice(1),
      values: data,
      lineColor: color,
      lineWidth: '2px',
      marker: {
        type: 'square',
        backgroundColor: color,
        borderColor: color,
        shadow: false,
        size: 3,
      },
      highlightMarker: {
        backgroundColor: color,
        borderColor: color,
        size: 5,
      },
      palette: 0,
      shadow: false,
      visible: true,
    };
  }

  /**
   * Assembles the data from the history of sessions and renders the line graph.
   */
  static loadLineChart() {
    // Remove old chart
    lineConfig.series = [];

    // Generate new chart
    const { tasklists } = JSON.parse(backend.get('History'));

    const lines = ['expected', 'actual'];

    // Create line data for plotting expected and actual Pomos per session
    let count = 0;
    lines.forEach((name) => {
      const data = [];
      tasklists.forEach((session) => {
        let total = 0;
        session.forEach((task) => {
          total += task[name];
        });
        data.push(total);
      });
      lineConfig.series.push(this.line(name, data, hex[count]));
      count += 1;
    });

    /* functional version
    lineConfig.series = lines.map((name) =>
      line(name, tasklists.map((tasklist) =>
        tasklist.reduce((total, task) => total + task[name], 0)
      ), rgba.pop())
    );
    */

    // Generate chart using line data
    zingchart.render({
      id: 'line-chart',
      data: lineConfig,
      height: 500,
      width: '100%',
    });
  }
}

customElements.define('stats-modal', StatsModal);
export default StatsModal;
