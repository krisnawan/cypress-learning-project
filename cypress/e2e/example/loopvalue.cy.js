describe('Login with Fixture Data', ()=>{
    it('should try to login', () =>{
        cy.visit('http://zero.webappsecurity.com/login.html')

        cy.fixture('userDynamic')
        .its('data')
        .then(user => {
            user.forEach((user) => {
                const username = user.username;
                const password = user.password

                cy.get('#user_login').type(username)
                cy.get('#user_password').type(password)

                cy.contains('Sign in').click()
            })            
        })        
    })
})