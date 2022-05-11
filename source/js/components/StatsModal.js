/**
 * @file Creates custom HTML element for a Pomo stats modal.
 * @author Alan Wang
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
   * Create and append custom elements.
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

    this.wrapper = document.getElementById("stats-wrapper");
    this.closeButton = document.getElementById("stats-close");
    this.lineChartAlt = document.getElementById("line-chart-alt");

    this.closeButton.addEventListener('click', () => {
      this.close();
    });

  }
  /**
   * Formats the data into an object that describes one line in the graph.
   * @param {string} name - Name of the line
   * @param {Array.<number>} data - Contains number of sessions (y-coordinate)
   * @param {string} color - Hexadecimal string of the line color
   * @returns {Object} Formatted line data
   */
  line(name, data, color) {
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
  loadLineChart() {
    // Remove old chart
    lineConfig.series = []; 

    // Generate new chart
    const { tasklists } = JSON.parse(backend.get('History'));

    const lines = ['expected', 'actual'];

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
      count++;
    });

    /* functional version
    lineConfig.series = lines.map((name) =>
      line(name, tasklists.map((tasklist) =>
        tasklist.reduce((total, task) => total + task[name], 0)
      ), rgba.pop())
    );
    */
    zingchart.render({
      id: 'line-chart',
      data: lineConfig,
      height: 500,
      width: '100%',
    });
  }

  open() {
    this.wrapper.style.display = "flex";
    if (backend.get('History') == null) {
      this.lineChartAlt.style.display = 'flex';
    } else {
      this.lineChartAlt.style.display = 'none';
      this.loadLineChart();
    }
  }

  close() {
    this.wrapper.style.display = "none";
  }
}

customElements.define('stats-modal', StatsModal);
export default StatsModal;