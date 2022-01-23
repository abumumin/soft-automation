import ElementMapper from '../../fixtures/elementMapper'
const em = new ElementMapper()
Cypress.Commands.add('launchSite', function(){
    cy.visit('/')
})
Cypress.Commands.add('clickRegisterTab', function(){
    cy.contains(em.registerButton).click({ force: true })
})
Cypress.Commands.add('validateFirstName', function(){
    cy.get(em.firstNameField).type(em.firstNameText).clear();
    cy.get(em.firstNameErrorDisplay).should('have.text', em.firstNameErrorText)
})
Cypress.Commands.add('validateLastName', function(){
    cy.get(em.lastNameField).type(em.firstNameText).clear();
    cy.get(em.lastNameErrorDisplay).should('have.text', em.lastNameErrorText)
})
Cypress.Commands.add('validateEmail', function(){
    cy.get(em.emailField).type(em.emailText).clear();
    cy.get(em.emailErrorDisplay).should('have.text', em.emailErrorText)
})
Cypress.Commands.add('validatePhoneNumber', function(){
    cy.get(em.phoneNumberField).type(em.phoneNumberText).clear();
    cy.get(em.phoneNumberErrorDisplay).should('have.text', em.phoneNumberErrorText)
})
Cypress.Commands.add('validatePassword', function(){
    cy.get(em.passwordField).type(em.passwordText).clear();
    cy.get(em.passwordErrorDisplay).should('have.text', em.passwordErrorText)
})
Cypress.Commands.add('validateSubmit', function(){
    cy.get(em.submitButton).click()
})