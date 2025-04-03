// google.spec.js
describe('Google Homepage', () => {
    it('successfully loads Google.com', () => {
      // Visit Google homepage
      cy.visit('https://www.google.com')
      
      // Verify the title contains 'Google'
      cy.title().should('include', 'Google')
      
      // Verify the search input field exists
      cy.get('input[name="q"]').should('exist')
      
      // Optional: Type something in the search box
      cy.get('input[name="q"]').type('Cypress testing')
      
      // Optional: Submit the search
      cy.get('input[name="q"]').type('{enter}')
      
      // Optional: Verify search results page loaded
      cy.url().should('include', '/search')
    })
  })