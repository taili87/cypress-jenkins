// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
import 'cypress-file-upload';
import './commands'
///<reference types="Cypress/>"

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

