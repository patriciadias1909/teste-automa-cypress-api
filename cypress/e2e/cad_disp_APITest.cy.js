/// <reference types="cypress"/>

//feature
describe('Buscar dispositivos', () => {

    it('Buscar um dispositivo em especifico', () => {
        cy.request({
            method: "GET",
            url:"https://api.restful-api.dev/objects/7",
            failOnStatusCode:false 
        })
            .then((response) => {
                //validação de status code
                expect(response.status).to.equal(200)
                //validação do retorno do objeto
                expect(response.body.name).to.equal("Apple MacBook Pro 16")
                expect(response.body.name).not.empty
                expect(response.body.data.year).equal(2019)
                expect(response.body.data.year).not.string
                expect(response.body.data['CPU model']).not.empty
                expect(response.body.data['Hard disk size']).not.empty
            })

    })       

    it('Cadastrar um dipositivo novo', () => {
        cy.request({
            method: "POST",
            url:"https://api.restful-api.dev/objects/",
            body: {
                "name": "Notebook Lenovo ThinkPad",
                "data": {
                   "year": 2023,
                   "price": 6359.99,
                   "CPU model": "Intel Core i9",
                   "Hard disk size": "2 TB",
                   "Cor": "Preto"
                }
            },
            failOnStatusCode: false 
        })    
            .then((response) => {
                //validação de status code
                expect(response.status).to.equal(200)
            })

    }) 

})