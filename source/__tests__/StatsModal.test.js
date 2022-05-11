import StatsModal from '../js/components/StatsModal.js'
import * as backend from '../js/backend.js'

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
  const lineChart = document.getElementById("line-chart"); 
  const lineChartAlt = document.getElementById("line-chart-alt");

  // open stats modal with empty localStorage
  statsModal.open(); 
  expect(wrapper.style.display).toBe('flex'); 
  expect(lineChartAlt.style.display).toBe('flex'); 
  expect(lineChart.children.length).toBe(1);
}); 

test('Open with non-empty task history', () => {
  const statsModal = document.querySelector("stats-modal"); 
  const wrapper = document.getElementById("stats-wrapper");
  const lineChart = document.getElementById("line-chart"); 
  const lineChartAlt = document.getElementById("line-chart-alt");

  // populate localStorage with task history
  localStorage.setItem("History", JSON.stringify({"tasklists":[[{"name":"sdada","expected":1,"actual":1}, {"name":"sdada","expected":1,"actual":1}], [{"name":"sdada","expected":1,"actual":1}, {"name":"sdada","expected":1,"actual":1}]]}));
  
  // open stats modal 
  statsModal.open(); 

  expect(wrapper.style.display).toBe('flex'); 
  expect(lineChartAlt.style.display).toBe('none'); 
  expect(lineChart.children.length).toBe(2);
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