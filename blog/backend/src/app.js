// Models sao Query's de Bancos de Dados.
// Views sao nossas Paginas
// Controllers metodos que fazem a relacao views e controllers (Exemplo: regras de negocos e etcs)
// Um exemplo a o nosso controller fazer a soma dos dados recebidos pela View e depois de processado os dados ele passa para o Model o model registra em banco de dados!
// views -> controllers -> models
// views <- controllers <- models

// Importando Express
const express = require('express')
// Importando Cors
const cors = require('cors')

// Importando as rotas
const routes = require('./routes')

class App {
    // Sempre que a classe App e executada o constructor executa os que tem dentro dele.
    constructor() {
        // Instanciando meu servidor Express
        this.server = express()
        // Quando rotar executar os middlewares
        this.middlewares()
        // Executando as rotas.
        this.routes()
    }

    // Middlewares sao algumas definicoes/configuracoes do meu servidor.
    // middleware -> config do server
    middlewares() {
        // Transferencia de dados via JSON
        this.server.use(express.json())
        // Liberacao de consumo de aplicacoes externas.
        this.server.use(cors())
    }

    // Aqui estou criando um metodo para implementar as minhas rotas no meu servidor.
    routes() {
        this.server.use(routes)
        // Exemplo: this.server.get('/', => {})
    }
}

// instanciando App
// Obs: Eu nao preciso colocar parenteses na instancia dessa classe porque eu nao vou passar nenhum parametro. 
const app = new App

// EXportando nosso servidor. express()
module.exports = app.server