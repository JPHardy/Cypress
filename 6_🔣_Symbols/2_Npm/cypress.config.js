const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://verbose-guacamole-6w5jqx7v65cgjq-44067.app.github.dev', // Added https://
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: false,
    chromeWebSecurity: false, // Keep this for now to bypass security issues
  },
});