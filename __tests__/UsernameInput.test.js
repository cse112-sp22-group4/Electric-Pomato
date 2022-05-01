import UsernameInput from '../js/components/UsernameInput.js';
import * as backend from '../js/backend.js';

// Initialize the DOM with a UsernameInput element.
beforeEach(() => {
  // This mocks the setter method of window location so the href change in
  // UsernameInput doesn't throw an error
  const winLocation = window.location;
  delete window.location;
  window.location = {};
  Object.defineProperty(window.location, 'href', {
    get: jest.fn(() => winLocation),
    set: jest.fn((href) => href),
  });

  document.body.innerHTML = `
  <div class="col-12 col-lg-6">
    <start-container></start-container>
    <template id="username-input-template">
        <div class="d-flex justify-content-start align-items-center">
            <h2 class="subtitle">Are you ready to plug in?</h2>
            <img class="start-question-icon" src="img/plug.svg" alt="plug">
        </div>
        <div class="start-input-container mb-2">
            <input class="start-input" type="text" autofocus required>
            <div class="start-input-button">
                <img src="img/bolt.png" alt="bolt">
            </div>
        </div>
        <h5>Enter your name to start.</h5>
    </template>
  </div>`;

  localStorage.clear();
});

test('Blank Test', () => {
  const usernameInput = new UsernameInput();
  expect(usernameInput).not.toBeNull();
});

test('keyup Event Listener', () => {
  // Mimic the enter key press
  const keyboardEvent = new KeyboardEvent('keyup', {
    key: 'Enter',
    bubbles: true,
    cancelable: true,
    code: 'Enter',
    view: window,
  });
  const username = 'Jest';
  const usernameInput = new UsernameInput();

  // write username
  usernameInput.querySelector('.start-input').value = username;
  usernameInput.querySelector('.start-input').dispatchEvent(keyboardEvent);
  const localStorageUser = backend.get('Username');

  expect(localStorageUser).toBe(username);
  expect(true).toBe(true);
});
