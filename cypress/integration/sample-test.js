describe('Sample Cypress test', () => {
    it('Check for website title"', () => {
      cy.visit('/')
  
      cy.contains('Electric Pomato')
    })
  })