describe('Sample Cypress test', () => {
    it('finds the content "type"', () => {
      cy.visit('/')
  
      cy.contains('Electric Pomato')
    })
  })