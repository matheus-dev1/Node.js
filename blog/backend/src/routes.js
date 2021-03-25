// Abtraindo apenas a funcao Router do express.
const { Router } = require('express')

// instanciando o modulo de rotas do express
const routes = new Router

// Importando os controllers de postagens
const PostagensController = require('./controllers/PostagensController')

// PostagensController.indexAction eh o que sera executado quando o usuario entrar na rota /postagens.
routes.get('/postagens', PostagensController.indexAction)
routes.post('/postagens', PostagensController.registerPostagemAction)

// Exportando as nossas rotas.
module.exports = routes