const fetch = require("node-fetch")

// Eu preciso tranformar a minha funcao em assincrona porque o fetch eh uma promessa!
async function enviaCep(cep) {
    // Para o consumo de API em node.js eu preciso da dependencia node-fetch.
    // E o resto e um padrao para consumo de API em JavaScript
    const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    // Este fetch e a mesma coisa que no React, porem nos regatamos o dados no backend e podemos fazer um tratamento dele.
    const cepJson = await res.json()

    return cepJson
}

module.exports = enviaCep