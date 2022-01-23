import ElementMapper from '../../fixtures/elementMapper'
const em = new ElementMapper()
Cypress.Commands.add('launchSite', function(){
    cy.visit('/')
})
Cypress.Commands.add('login', function(){
    cy.get(em.loginEmailFiled).type(em.emailText)
    cy.get(em.loginPasswordField).type(em.loginPasswordText)
})
Cypress.Commands.add('signInUser', function(){
    cy.get(em.signInButton).click()
})
