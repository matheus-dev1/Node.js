// Modulo mongoose serve para usar de forma mais simples o mongodb com node.js
const mongoose = require('mongoose')

// Criando um funcao que nos retornar a conexao com o banco de dados do MongoDB
function connection(){
    // A funcao connect do mongoose recebe como parametro o host com a porta e o nome do banco.
    // useNewUrlParser: true | Eh um novo formato em que ele vai analisar esta string de conexao.
    // useUnifiedTopology: true | Isso deixa o monitoramento do nosso banco de dados ativo.
    mongoose.connect("mongodb://localhost:27017/escolarecode", {useNewUrlParser: true, useUnifiedTopology: true})
    // Um parametro de connect e o .then() que pode se assimilar ao Try do try-catch, e ele eh executado qunado a conexao foi bem sucedida.
    .then(() => {
        // Dentro do .then() tenho uma funcao de callback que me retonar no console uma string com "1"
        console.log("1")
    })
    // catch eh caso ocorra um erro na conexao com o banco ele executa o catch, e ele possui um parametro que e o erro do porque a conexao nao foi bem sucedida.
    .catch((error) => {
        console.log(error)
    })
}

module.exports = connection()