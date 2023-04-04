    Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
        cy.get('#firstName').type('Carol')
        cy.get('#lastName').type('Felicio')
        cy.get('#email').type('caroline.felicio@gmail.com')
        cy.get('#open-text-area').type('Teste com metodo customizado')
        cy.contains('button', 'Enviar').click()
    })