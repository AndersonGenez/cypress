/// <reference types="Cypress" />
describe('Funcionalidad quejas', function() {
  it('Burla al usuario', function() {
    cy.visit('https://andersongenez.github.io/calculadora-Catu/')
    cy.get("#skin").should("include.text", "1,2,3,4")

  })
})