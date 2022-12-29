describe('Login with custom command Data', ()=>{
    it('should execute custom command', () => {
        cy.visit('http://zero.webappsecurity.com/login.html');
        cy.login('username', 'password')
    });
})