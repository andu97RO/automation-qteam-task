const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout:7000,
  viewportHeight: 1080,
  viewportWidth: 1920,
  env: {
    url: "https://magento.softwaretestingboard.com/",
    username: "test@automation.com",
    password: "Password23@"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
