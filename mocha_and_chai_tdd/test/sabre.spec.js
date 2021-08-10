// Importando o modulo "chai"
const chai = require('chai')
const expect = chai.expect
const corAtivada = require('../lib/sabre')

// Primeiramente definimos uma teste que nao ira passar.
// Depois vamos tentar arrumar este teste.

// A funcao describe, possui uma descricao do que o teste fara.
describe("cores dos sabres de luz", () => {

    it("deve ativar a cor verde", () => {
        // Na funcao expect estamos colocando a funcao corAtivada com o valor Yoda em seu parametro e esta funcao esta vindo do arquivo sabre.js
        // Se o retorno for igual a Verde, o teste passou com sucesso.
        expect(corAtivada("Yoda")).to.equal("Verde")
    })

    it("deve ativar a cor vermelha", () => {
        expect(corAtivada("YodaMal")).to.equal("Vermelho")
    })
})

// Use "mocha" para executar!