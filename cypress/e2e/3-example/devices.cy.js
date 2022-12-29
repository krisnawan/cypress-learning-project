describe('Device Tests', () => {
    it('1080p', () => {
        cy.viewport(1980, 1080);
        cy.visit('https://books.toscrape.com/')
        cy.wait(3000);
    });

    it('iPhone X', () => {
        cy.viewport('iphone-x');
        cy.visit('https://books.toscrape.com/')
        cy.wait(3000);
    });
})