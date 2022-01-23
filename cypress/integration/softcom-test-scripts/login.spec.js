describe('testing real RunTime Error on the app', function () {
    before(function () {
        cy.launchSite()
   })

   it ('User Should be able to fill In Credentials',function(){
    cy.login()
    })
    it ('User Should be able to sign In User',function(){
    cy.signInUser()
    })


})
