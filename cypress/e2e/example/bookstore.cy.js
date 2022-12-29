describe('Browser Actions', () => {
    it('should load correct url', () => {
        cy.visit('https://books.toscrape.com/', { timeout: 10000 })
        cy.url().should('include', 'toscrape.com')
    })

    it('should Click on Travel category', () => {
        cy.get('a')
            .contains('Travel')
            .click()
        cy.get('h1').contains('Travel')
    })

    it('should show correct price', () => {
        cy.get('.product_pod .product_price').contains('£45.17')
    })
})