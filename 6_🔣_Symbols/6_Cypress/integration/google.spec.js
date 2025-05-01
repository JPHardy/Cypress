// google.spec.js
describe('Google Homepage', () => {
    it('successfully loads Google.com', () => {
      // Visit Google homepage
      cy.visit('https://www.google.com')
      
      // Verify the title contains 'Google'
      cy.title().should('include', 'Google')
      
      // Take a screenshot of the search results page
      cy.screenshot('google');

      // Verify the screenshot exists
      cy.readFile('/cypress/screenshots/google.spec.js/google.png').should('exist')
    })
  })