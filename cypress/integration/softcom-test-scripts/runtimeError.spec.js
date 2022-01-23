describe('testing real RunTime Error on the app', function () {
    before(function () {
        cy.launchSite()
        cy.clickRegisterTab()
    })
    it ('should validate First Name Field',function(){
        cy.validateFirstName()
    })
    it ('should validate Last Name Field',function(){
        cy.validateLastName()
    })
    it ('should validate Email Field',function(){
        cy.validateEmail()
    })
    it ('should validate Phone Number Field',function(){
        cy.validatePhoneNumber()
    })
    it ('should validate Password Field',function(){
        cy.validatePassword()
    })
    it ('should validate Submit Button',function(){
        cy.validateSubmit()
    })
})
