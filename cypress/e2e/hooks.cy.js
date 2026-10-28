describe('Hooks', () => {
    before(() => {
        cy.log('Executa somente antes de todos os testes')
    })

    beforeEach(() => {
        cy.log('Executa antes de cada um dos testes')
    })

    afterEach(() => {
        cy.log('Executa após cada um dos testes')
    })

    after(() => {
        cy.log('Executa somente após todos os testes')
    })

    it('Teste 1', () => {
        cy.log('**Executa o teste 1**')
    })

    it('Teste 2', () => {
        cy.log('**Executa o teste 2**')
    })
    
    it('Teste 3', () => {
        cy.log('**Executa o teste 3**')
    })
})