import SettingsModal from '../js/components/SettingsModal.js';
import timerConstants from '../js/constants/timerConstants.js';
import * as backend from '../js/backend.js';

// Initialize the DOM with a StatsModal element
beforeEach(() => {
  backend.removeAll();
  document.body.innerHTML = `<settings-modal></settings-modal>`;
});

test('Check that local storage was initialized', () => {
  const workSessionDuration = Number(backend.get('WorkSessionDuration'));
  const shortBreakDuration = Number(backend.get('ShortBreakDuration'));
  const longBreakDuration = Number(backend.get('LongBreakDuration'));

  expect(workSessionDuration).toBe(timerConstants.DEFAULT_WORK_SESSION_DURATION);
  expect(shortBreakDuration).toBe(timerConstants.DEFAULT_SHORT_BREAK_DURATION);
  expect(longBreakDuration).toBe(timerConstants.DEFAULT_LONG_BREAK_DURATION);
});

test('Check that preferences are stored in local storage when saved', () => {
  const newWorkSessionDuration = 35;
  const newShortBreakDuration = 10;
  const newLongBreakDuration = 20;
  const settingsModal = document.querySelector('settings-modal');

  // Open the modal
  settingsModal.open();

  // Change the dropdown values
  document.getElementById('pomo-duration-select').value = newWorkSessionDuration;
  document.getElementById('short-duration-select').value = newShortBreakDuration;
  document.getElementById('long-duration-select').value = newLongBreakDuration;

  // Save the settings
  settingsModal.saveSettings();

  // Check that the values in local storage are updated
  const workSessionDuration = Number(backend.get('WorkSessionDuration'));
  const shortBreakDuration = Number(backend.get('ShortBreakDuration'));
  const longBreakDuration = Number(backend.get('LongBreakDuration'));

  expect(workSessionDuration).toBe(newWorkSessionDuration);
  expect(shortBreakDuration).toBe(newShortBreakDuration);
  expect(longBreakDuration).toBe(newLongBreakDuration);
});

test('Check that preferences are not stored when cancelled', () => {
  const newWorkSessionDuration = 35;
  const newShortBreakDuration = 10;
  const newLongBreakDuration = 20;
  const settingsModal = document.querySelector('settings-modal'); 

  // Open the modal
  settingsModal.open();

  // Change the dropdown values
  document.getElementById('pomo-duration-select').value = newWorkSessionDuration;
  document.getElementById('short-duration-select').value = newShortBreakDuration;
  document.getElementById('long-duration-select').value = newLongBreakDuration;

  // Close the modal
  settingsModal.close();

  // Check that the values in local storage are not updated
  const workSessionDuration = Number(backend.get('WorkSessionDuration'));
  const shortBreakDuration = Number(backend.get('ShortBreakDuration'));
  const longBreakDuration = Number(backend.get('LongBreakDuration'));

  expect(workSessionDuration).toBe(timerConstants.DEFAULT_WORK_SESSION_DURATION);
  expect(shortBreakDuration).toBe(timerConstants.DEFAULT_SHORT_BREAK_DURATION);
  expect(longBreakDuration).toBe(timerConstants.DEFAULT_LONG_BREAK_DURATION);
});

test('Check that the revert button resets the dropdowns', () => {
  const newWorkSessionDuration = 35;
  const newShortBreakDuration = 10;
  const newLongBreakDuration = 20;
  const settingsModal = document.querySelector('settings-modal');

  // Open the modal
  settingsModal.open();

  const pomDurationDrop = document.getElementById('pomo-duration-select');
  const shortBreakDrop = document.getElementById('short-duration-select');
  const longBreakDrop = document.getElementById('long-duration-select');

  // Change the dropdown values
  pomDurationDrop.value = newWorkSessionDuration;
  shortBreakDrop.value = newShortBreakDuration;
  longBreakDrop.value = newLongBreakDuration;

  // Reset the dropdowns
  settingsModal.revertToDefault();

  expect(Number(pomDurationDrop.value)).toBe(timerConstants.DEFAULT_WORK_SESSION_DURATION);
  expect(Number(shortBreakDrop.value)).toBe(timerConstants.DEFAULT_SHORT_BREAK_DURATION);
  expect(Number(longBreakDrop.value)).toBe(timerConstants.DEFAULT_LONG_BREAK_DURATION);
});

test('Check that the dropdowns are populated with local storage values', () => {
  const newWorkSessionDuration = 35;
  const newShortBreakDuration = 10;
  const newLongBreakDuration = 20;
  const settingsModal = document.querySelector('settings-modal');

  // Open the modal
  settingsModal.open();

  const pomDurationDrop = document.getElementById('pomo-duration-select');
  const shortBreakDrop = document.getElementById('short-duration-select');
  const longBreakDrop = document.getElementById('long-duration-select');

  // Change the dropdown values
  pomDurationDrop.value = newWorkSessionDuration;
  shortBreakDrop.value = newShortBreakDuration;
  longBreakDrop.value = newLongBreakDuration;

  // Save the settings
  settingsModal.saveSettings();

  // Open the modal again
  settingsModal.open();

  // Expect the dropdowns to contain the previously saved values
  expect(Number(pomDurationDrop.value)).toBe(newWorkSessionDuration);
  expect(Number(shortBreakDrop.value)).toBe(newShortBreakDuration);
  expect(Number(longBreakDrop.value)).toBe(newLongBreakDuration);
});

test('Check styling on open/close', () => {
  const settingsModal = document.querySelector('settings-modal'); 
  const wrapper = document.getElementById('settings-wrapper');

  // Open the modal and expect that it is displayed
  settingsModal.open();
  expect(wrapper.style.display).toBe('flex');

  // Close the modal and expect it is hidden
  settingsModal.close();
  expect(wrapper.style.display).toBe('none');
}); 