/* eslint-disable jest/expect-expect */
/* eslint-disable no-undef */
describe('Login start Pomo flow', () => {
  before(() => {
    cy.visit('/');
  });

  // Unregister serviceWorker before every test
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

  // Enter user name and press enter
  it('Enter name check for new page', () => {
    cy.get('.start-input').type('Name{enter}');
    cy.url().should('include', '/app.html');
  });

  // Ensure the app.html page has the right title
  it('Check app title', () => {
    cy.get('.app-title').should('have.text', 'Name\'s Day');
  });

  // Add tasks using both keyboard shortcut and clicking
  it('Test add task operations', () => {
    // Task 1 with one tomato
    cy.get('editable-task-list-input > div > div:nth-child(3)').type('Task1{enter}');
    cy.get('editable-task-list-body > div > div.col-12.col-lg-3.col-sm-5 > tomato-slider > div > svg:nth-child(1) > g').should('have.class', 'green-tomato');

    // Task 2 with 3 tomatos
    cy.get('editable-task-list-input > div > div:nth-child(3)').type('Task2');
    const thirdTom = cy.get('editable-task-list-input > div > div:nth-child(5) > tomato-slider > div > svg:nth-child(3) > g');
    thirdTom.click();
    thirdTom.should('have.class', 'red-tomato');
    cy.get('editable-task-list-input > div > div.col-12.col-lg-2 > button').click();
    cy.get('editable-task-list-body > div:nth-child(2) > div.col-12.col-lg-3.col-sm-5 > tomato-slider > div > svg:nth-child(3) > g').should('have.class', 'green-tomato');

    // Start the day
    cy.get('editable-task-list > div.g-0.row > div.col-lg-2.d-lg-flex.d-none > button').click();
  });
});
