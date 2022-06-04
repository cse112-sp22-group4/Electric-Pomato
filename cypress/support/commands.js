/* eslint-disable no-undef */
// eslint-disable-next-line prefer-const
let LOCAL_STORAGE_MEMORY = {};

Cypress.Commands.add('saveLocalStorageCache', () => {
  Object.keys(localStorage).forEach((key) => {
    LOCAL_STORAGE_MEMORY[key] = localStorage[key];
  });
});

Cypress.Commands.add('restoreLocalStorageCache', () => {
  Object.keys(LOCAL_STORAGE_MEMORY).forEach((key) => {
    localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
  });
});

Cypress.Commands.add('getTimerContentDocument', (waitForSelector) => {
  return cy.get('#timerIcon')
    .its('0.contentDocument.documentElement')
    .should(body => {
      expect(Cypress.$(body).has(waitForSelector).length).gt(0)
    })
    .then(cy.wrap)
})

Cypress.Commands.add('getIconContentDocument', (waitForSelector) => {
  return cy.get('.legend-icon')
    .its('0.contentDocument.documentElement')
    .should(body => {
      expect(Cypress.$(body).has(waitForSelector).length).gt(0)
    })
    .then(cy.wrap)
})
