const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://verbose-guacamole-6w5jqx7v65cgjq-3000.app.github.dev', // Replace with actual URL
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: false,
    chromeWebSecurity: false, // Disables web security (use cautiously)
  },
});