describe('Login with Cypress.$ Function', ()=>{
    before(function() {
        cy.visit('http://zero.webappsecurity.com/login.html');
    })

    it('should execute login procedure', () => {        
        
        const userLogin = cy.get('#user_login')
        const userPassword = cy.get('#user_password')
        const userRememberMe = cy.get('#user_remember_me')
        const signInButton = cy.contains('Sign in')

        userLogin.type("username")
        userPassword.type("password")
        userRememberMe.click()
        signInButton.click()
    });
})