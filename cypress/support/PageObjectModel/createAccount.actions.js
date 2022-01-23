import ElementMapper from '../../fixtures/elementMapper'
const em = new ElementMapper()
Cypress.Commands.add('launchSite', function(){
    cy.visit('/')
})
Cypress.Commands.add('clickRegisterTab', function(){
    cy.contains(em.registerButton).click({ force: true })
})
Cypress.Commands.add('fillInNewUserDetails', function(){
    cy.get(em.firstNameField).type(em.firstNameText)
    cy.get(em.lastNameField).type(em.firstNameText)
    cy.get(em.emailField).type(em.emailText)
    cy.get(em.phoneNumberField).type(em.phoneNumberText)
    cy.get(em.passwordField).type(em.passwordText)
})
Cypress.Commands.add('submitNewUserDetails', function(){
    cy.get(em.submitButton).click()
})
