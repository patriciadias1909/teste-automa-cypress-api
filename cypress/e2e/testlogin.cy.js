/// <reference types="cypress"/>

//feature
describe('Login', () => {
    //cenários
        it('Login com sucesso', () => {

            //1 - Acessar o site - Tela de login
            cy.visit('/login')

            //2 - Escrever no campo E-mail
            cy.get('#user').type('patriciadias@qazando.com.br')

            //3 - Escrever no campo Senha
            cy.get('#password').type('casa1909')

             //4 - Clicar em Login
            cy.get('#btnLogin').click()

            //5 - Verificar se o login foi realizado com sucesso
            cy.url().should('include', '/my-account')
    } )
})


    //cenários
         it('E-mail invalido', () => {

                //1 - Acessar o site - Tela de login
                    cy.visit('/login')
        
                //2 - Escrever no campo E-mail
                    cy.get('#user').type('testeinvalido@email.com.br')
        
                //3 - Escrever no campo Senha
                    cy.get('#password').type('casa1909')
        
                //4 - Clicar em Login
                    cy.get('#btnLogin').click()
        } )


    //cenários

        it('Senha invalida', () => {

                //1 - Acessar o site - Tela de login
                    cy.visit('/login')
        
                //2 - Escrever no campo E-mail
                    cy.get('#user').type('emailtestesenhainvl@qazando.com.br')
        
                //3 - Escrever no campo Senha
                    cy.get('#password').type('1234567890-000000')
        
                //4 - Clicar em Login
                    cy.get('#btnLogin').click()
         } )

