import InfoModal from '../js/components/InfoModal.js';

// Initialize the DOM with a InfoModal element
document.body.innerHTML = `<info-modal></info-modal>`;

test('Check styling on open/close', () => {
  const infoModal = document.querySelector('info-modal');
  const wrapper = document.getElementById('info-wrapper');

  // Open the modal and expect that it is displayed
  infoModal.open();
  expect(wrapper.style.display).toBe('flex');

  // Close the modal and expect it is hidden
  infoModal.close();
  expect(wrapper.style.display).toBe('none');
}); 
