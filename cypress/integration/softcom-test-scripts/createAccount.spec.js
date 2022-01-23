describe('testing real RunTime Error on the app', function () {
    before(function () {
        cy.launchSite()
        cy.clickRegisterTab()
    })
    it ('User Should be able to clickRegisterTab',function(){
        cy.clickRegisterTab()
    })
    it ('User Should be able to fillInNewUserDetails',function(){
        cy.fillInNewUserDetails()
    })
    it ('User Should be able to submitNewUserDetails',function(){
        cy.submitNewUserDetails()
    })
})