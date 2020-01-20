/// <reference types="Cypress" />
describe('Funcionalidad quejas', function() {
  it('Burla al usuario', function() {
    cy.visit('http://automationpractice.com/')
    cy.contains("Faded")
    cy.contains("Add to cart").click()
    cy.contains("Proceed to checkout").click()
    cy.get("#cart_quantity_up_1_1_0_0").click()
    cy.get("#cart_quantity_up_1_1_0_0").click()
    cy.get("#total_price").should("contains.text", "$51.53")
  })
})