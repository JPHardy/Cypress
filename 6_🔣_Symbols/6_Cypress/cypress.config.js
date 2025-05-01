const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    supportFile: false,
    baseUrl: "https://www.google.com",
    screenshotsFolder: "/cypress/screenshots",
    video: false,
    specPattern: "cypress/integration/**/*.js",
    setupNodeEvents(on, config) {
      on("before:browser:launch", (browser, launchOptions) => {
        if (browser.name === "chrome") {
          launchOptions.args.push("--disable-gpu");
        }
        return launchOptions;
      });
    },
  },
});