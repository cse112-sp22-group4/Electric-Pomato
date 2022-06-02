/* eslint-disable jest/expect-expect */
/* eslint-disable no-undef */
describe('Login start Pomo flow', () => {
  before(() => {
    cy.visit('/');
    cy.clearLocalStorage();
  });

  // Restore local storage
  beforeEach(() => {
    cy.restoreLocalStorageCache();
  });

  // Store local storage
  afterEach(() => {
    cy.saveLocalStorageCache();
  });

  // Enter user name and press enter
  it('Enter name check for new page', () => {
    cy.get('.start-input').type('Name{enter}');
    cy.url().should('include', '/app.html');
  });

  // Ensure the app.html page has the right title
  it('Check app title', () => {
    // Check for info-modal on first login
    cy.get('.card:nth-child(1) .card-title').should('have.text', 'Plan');

    // Close the modal
    cy.get('#info-close').click();

    // Check for title
    cy.get('.app-title').should('have.text', "Name's Session");
  });

  // Add tasks using both keyboard shortcut and clicking
  it('Test add task operations', () => {
    // Task 1 with one tomato
    cy.get('.task-list').type('Task 1{enter}');

    // Check the tomato-slider is updated
    cy.get('tomato-slider input')
      .should('have.value', '1');
    cy.get('object[id=0]')
      .invoke('attr', 'data')
      .should('contain', 'tomGreen');
    cy.get('object[id=1]')
      .invoke('attr', 'data')
      .should('contain', 'tomWhite');

    // Task 2 with 3 tomatos
    cy.get('.task-list').type('Task 2');
    cy.get('editable-task-list-input tomato-slider').click('center');
    cy.get('.task-list').type('{enter}');

    // Check the tomato-slider is updated
    cy.get('editable-task-list-body > div:nth-child(2) tomato-slider input')
      .should('have.value', '3');
    cy.get('editable-task-list-body > div:nth-child(2) object[id=2]')
      .invoke('attr', 'data')
      .should('contain', 'tomGreen');

    // Start the day
    cy.get('editable-task-list > div.g-0.row > div.col-lg-2.d-lg-flex.d-none > button').click();
  });

  // Start the pomo timer
});
