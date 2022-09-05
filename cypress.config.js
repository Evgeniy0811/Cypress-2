const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: '4ms74a',
  retries: 2,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://qamid.tmweb.ru',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
