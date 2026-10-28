import Login from '../pages/login'
import inventory from '../pages/inventory'
    beforeEach(() => {
        // Arrange
        Login.visitarPagina()
    })
    it.only('Realizar login com sucesso', () => {
        // Act
        Login.preencherCredenciaisValidas()

        // Assert
        inventory.validarAcessoAPagina()
    })

    it('Realizar login informando credenciais inválidas', () => {    
        // Act
        Login.preencherCredenciaisInvalidas()

        // Assert
        Login.validarCredenciaisInvalidas()

    })
