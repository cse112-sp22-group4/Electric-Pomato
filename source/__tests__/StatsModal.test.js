import StatsModal from '../js/components/StatsModal.js'
import * as backend from '../js/backend.js'

// mock ResizeObserver for chart.js
window.ResizeObserver =
    window.ResizeObserver ||
    jest.fn().mockImplementation(() => ({
        disconnect: jest.fn(),
        observe: jest.fn(),
        unobserve: jest.fn(),
    }));

// Initialize the DOM with a StatsModal element
beforeEach(() => {
  const winLocation = window.location;
  delete window.location;
  window.location = {};
  Object.defineProperty(window.location, 'href', {
    get: jest.fn(() => winLocation),
    set: jest.fn((href) => href),
  });
  document.body.innerHTML = `<stats-modal></stats-modal>`; 

  localStorage.clear(); 
}); 

test('Open with empty task history', () => {
  const statsModal = document.querySelector("stats-modal"); 
  const wrapper = document.getElementById("stats-wrapper");
  const lineChart = document.getElementById("line-chart-canvas"); 
  const lineChartAlt = document.getElementById("line-chart-alt");

  // open stats modal with empty localStorage
  statsModal.open(); 
  expect(wrapper.style.display).toBe('flex'); 
  expect(lineChartAlt.style.display).toBe('flex'); 
  expect(lineChart.style.display).toBe('none');
}); 

test('Open with too small task history', () => {
  const statsModal = document.querySelector("stats-modal"); 
  const wrapper = document.getElementById("stats-wrapper");
  const lineChart = document.getElementById("line-chart-canvas"); 
  const lineChartAlt = document.getElementById("line-chart-alt");

  // populate localStorage with task history
  localStorage.setItem("History", JSON.stringify({"sessions":[{"date":"5/25/2022","tasklist":[{"name":"test","expected":3,"actual":0},{"name":"test","expected":3,"actual":0}]},{"date":"5/25/2022","tasklist":[{"name":"test","expected":3,"actual":0},{"name":"test","expected":4,"actual":0}]}]}));
  
  // open stats modal 
  statsModal.open(); 
  expect(wrapper.style.display).toBe('flex'); 
  expect(lineChartAlt.style.display).toBe('flex'); 
  expect(lineChart.style.display).toBe('none');
}); 

test('Open with large enough task history', () => {
  const statsModal = document.querySelector("stats-modal"); 
  const wrapper = document.getElementById("stats-wrapper");
  const lineChart = document.getElementById("line-chart-canvas"); 
  const lineChartAlt = document.getElementById("line-chart-alt");

  // populate localStorage with task history
  localStorage.setItem("History", JSON.stringify({"sessions":[{"date":"5/25/2022","tasklist":[{"name":"test","expected":3,"actual":0},{"name":"test","expected":3,"actual":0}]},{"date":"5/25/2022","tasklist":[{"name":"test","expected":3,"actual":0},{"name":"test","expected":4,"actual":0}]},{"date":"5/25/2022","tasklist":[{"name":"test","expected":3,"actual":0},{"name":"test","expected":3,"actual":0}]}]}));
  
  // open stats modal 
  statsModal.open(); 
  expect(wrapper.style.display).toBe('flex'); 
  expect(lineChartAlt.style.display).toBe('none');
  expect(lineChart.style.display).toBe('flex');

}); 

test('Close after opening', () => {
  const statsModal = document.querySelector("stats-modal"); 
  const wrapper = document.getElementById("stats-wrapper");
  const lineChartAlt = document.getElementById("line-chart-alt");
  
  // open stats modal 
  statsModal.open(); 

  expect(wrapper.style.display).toBe('flex'); 
  expect(lineChartAlt.style.display).toBe('flex'); 

  // close stats modal
  statsModal.close(); 

  expect(wrapper.style.display).toBe('none'); 
}); 

test('Close using close button', () => {
  const statsModal = document.querySelector("stats-modal"); 
  const closeButton = document.getElementById("stats-close");
  const wrapper = document.getElementById("stats-wrapper");
  const lineChartAlt = document.getElementById("line-chart-alt");
  
  // open stats modal 
  statsModal.open(); 

  expect(wrapper.style.display).toBe('flex'); 
  expect(lineChartAlt.style.display).toBe('flex'); 

  // close stats modal
  closeButton.click(); 
  
  expect(wrapper.style.display).toBe('none'); 
}); 