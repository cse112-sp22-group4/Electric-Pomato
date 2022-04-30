import WelcomeMessage from '../js/components/WelcomeMessage.js';

beforeEach(() => {
  document.body.innerHTML = '<h1> Something </h1>';
});

test('WelcomeMessage construction', () => {
  const username = 'Jest';
  const welcomeMessage = new WelcomeMessage(username);
  expect(welcomeMessage.innerHTML).toContain(username);
  expect(welcomeMessage.getElementsByTagName('h2')[0].classList.contains('subtitle')).toBe(true);
});
