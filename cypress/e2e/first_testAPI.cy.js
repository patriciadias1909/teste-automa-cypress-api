/// <reference types="cypress"/>

    const { get } = require("lodash");

//feature
describe('Testes em API', () =>{
    beforeEach(() =>{
        cy.visit('https://wcaquino.me/cypress/componentes.html');
    })

    it('PRIMEIRO CASO DE TESTE: Testando o EndPoint', () =>{
        cy.request({
            method: "get",
            url:"https://viacep.com.br/ws/01001000/json"

        }).then((response)=>{

            //verificação de status code
            expect(response.status).to.equal(200);

            //verificação no response body se cep consultado é o mesmo
            expect(response.body.cep).to.equal("01001-000"); 

            //validar objetos retornados no response body

        })
    })
})