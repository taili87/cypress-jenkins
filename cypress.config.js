const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://qavbox.github.io/demo',
    chromeWebSecurity: false,
  
  },
})