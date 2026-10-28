describe('Fazer checkout com um produto com sucesso', () => {
    beforeEach(() => {
        // Arrange
        cy.visit('https://www.saucedemo.com/')
        
        cy.get('[data-test="username"]').type(Cypress.env('username'))

        cy.get('[data-test="password"]').type(Cypress.env('password'))

        cy.get('[data-test="login-button"]').click()
    })
    
    it('adicionar item ao carrinho com sucesso e ir para o carrinho', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()

        cy.screenshot('produto adicionado')

        cy.get('[data-test="shopping-cart-badge"]').click()

        cy.screenshot('carrinho')

        cy.get('[data-test="checkout"]').click()

        cy.screenshot('checkout')
    })

    it('preencher informações do checkout com sucesso', () => {
            cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()

        cy.screenshot('produto adicionado')

        cy.get('[data-test="shopping-cart-badge"]').click()

        cy.screenshot('carrinho')

        cy.get('[data-test="checkout"]').click()

        cy.screenshot('checkout')

        cy.get('[data-test="firstName"]').type('John')

        cy.get('[data-test="lastName"]').type('Doe')

        cy.get('[data-test="postalCode"]').type('12345')

        cy.get('[data-test="continue"]').click()

        cy.screenshot('informações preenchidas')

        cy.get('[data-test="finish"]').click()

        cy.screenshot('finalizar pedido')
    })


})