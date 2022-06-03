/**
 * @file Creates and defines the functionality for the Pomo stats modal.
 * @author Alan Wang
 * @author Meshach Adoe
 * Date: 05/11/2022
 */
import Chart from 'chart.js/auto';
import lineConfig from '../constants/lineConfig.js';
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
            <div id=line-chart-colors>
              <span id=line-chart-expected-color></span>
              <span id=line-chart-actual-color></span>
            </div>
            <div class="modal-content">
              <h2 class="modal-title">Expected vs. Actual Pomos Per Session</h2>
              <div id="line-chart-container">
                <canvas id="line-chart-canvas"></canvas>
                <h3 id="line-chart-alt">You haven't completed enough sessions yet. <br> Finish sessions to start tracking your stats!</h3>
              </div>
              <button id="stats-close" class="btn btn-primary">Close</button>

        </div>
      </div>
    </div>`;

    // Get references to elements of modal
    this.wrapper = document.getElementById('stats-wrapper');
    this.closeButton = document.getElementById('stats-close');
    this.lineChartContainer = document.getElementById('line-chart-container');
    this.lineChartCanvas = document.getElementById('line-chart-canvas');
    this.lineChart = null;
    this.lineChartColors = document.getElementById('line-chart-colors');
    this.lineChartAlt = document.getElementById('line-chart-alt');
    this.redirectToOnClose = null;

    // Set up close button
    this.closeButton.addEventListener('click', () => {
      this.close();
    });
  }

  /**
   * Opens the stats modal, and sets the redirectURL variable if provided
   * @param {string} redirectURL - URL to redirect to when modal is closed
   */
  open(redirectURL = null) {
    this.wrapper.style.display = 'flex';
    if (redirectURL) {
      if (redirectURL === './index.html') {
        this.closeButton.textContent = 'Return to Homepage';
      }
      this.redirectToOnClose = redirectURL;
    }
    // Only show chart if user has enough recorded sessions
    if (!StatsModal.hasEnoughSessions()) {
      this.lineChartCanvas.style.display = 'none';
      this.lineChartAlt.style.display = 'flex';
    } else {
      this.lineChartCanvas.style.display = 'flex';
      this.lineChartAlt.style.display = 'none';
      this.loadLineChart();
    }
  }

  /*
   * Closes the stats modal
   */
  close() {
    // Clean up line chart if created
    if (this.lineChart != null) {
      this.lineChart.destroy();
      this.lineChart = null;
    }
    this.wrapper.style.display = 'none';
    if (this.redirectToOnClose) {
      window.location.href = this.redirectToOnClose;
    }
  }

  /**
   * Assembles the data from the history of sessions and renders the line graph.
   */
  loadLineChart() {
    const lineChartStyle = window.getComputedStyle(this.lineChartColors);
    const expectedColor = window.getComputedStyle(document.getElementById('line-chart-expected-color')).getPropertyValue('background-color');
    const actualColor = window.getComputedStyle(document.getElementById('line-chart-actual-color')).getPropertyValue('background-color');
    const { sessions } = JSON.parse(backend.get('History'));

    // Collect data for line chart
    const chartLabels = [];
    const expected = [];
    const actual = [];

    sessions.forEach((session) => {
      let expectedTotal = 0;
      let actualTotal = 0;
      session.tasklist.forEach((task) => {
        expectedTotal += task.expected;
        actualTotal += task.actual;
      });
      chartLabels.push(session.date);
      expected.push(expectedTotal);
      actual.push(actualTotal);
    });

    const chartData = {
      labels: chartLabels,
      datasets: [
        {
          label: 'Expected Pomos',
          backgroundColor: expectedColor,
          borderColor: expectedColor,
          data: expected,
        },
        {
          label: 'Actual Pomos',
          backgroundColor: actualColor,
          borderColor: actualColor,
          data: actual,
        },
      ],
    };

    // Make a copy of lineConfig for this chart
    const config = JSON.parse(JSON.stringify(lineConfig));

    // Plot the line chart
    config.data = chartData;
    Chart.defaults.color = lineChartStyle.getPropertyValue('color');
    Chart.defaults.borderColor = lineChartStyle.getPropertyValue('border-color');
    Chart.defaults.font.family = lineChartStyle.getPropertyValue('font-family');
    Chart.defaults.font.size = window.innerWidth > 1000 ? 16 : 8;
    this.lineChart = new Chart(this.lineChartCanvas, config);
  }

  /*
   * Checks whether user has enough sessions recorded to display stats modal
   * @returns {boolean} true if the user has enough sessions recorded in backend, false otherwise
   */
  static hasEnoughSessions() {
    const history = backend.get('History');
    return history != null && JSON.parse(backend.get('History')).sessions.length >= 3;
  }
}

customElements.define('stats-modal', StatsModal);
export default StatsModal;
