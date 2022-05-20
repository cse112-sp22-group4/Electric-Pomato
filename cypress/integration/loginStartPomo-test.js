/* eslint-disable jest/expect-expect */
/* eslint-disable no-undef */
describe('Login start Pomo flow', () => {
  before(() => {
    cy.visit('/');
  });

  beforeEach(() => {
    if (window.navigator && navigator.serviceWorker) {
      navigator.serviceWorker.getRegistrations()
        .then((registrations) => {
          registrations.forEach((registration) => {
            registration.unregister();
          });
        });
    }
  });

  it('Enter name check for new page', () => {
    cy.get('.start-input').type('Name{enter}');
    cy.url().should('include', '/app.html');
  });

  it('Check app title', () => {
    cy.get('.app-title').should('have.text', 'Name\'s Day');
  });
});
