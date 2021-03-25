const postagem = require('../models/Postagem.js')

// O nome do arquivo e em maiusculo e tem o Controller.
// E a classe tem que ter o mesmo nome do arquivo e ter apenas esta classe.
class PostagensController {
    //Actions - Metodo
    indexAction(req, res) {
        // Aqui eu estou definindo o metodo getAll do model Postagem e passando como parametro req, res. Para que ele possa executar o res.send() ou res.json()
        postagem.getAll(req, res)
    }

    // Aqui eu estou definindo a minha Action!
    registerPostagemAction(req, res) {
        const { titulo, descricao } = req.body
        // Aqui eu estou atribuindo ao metodo titulo do model Postagem o valor do corpo da requisicao titulo.
        postagem.titulo = titulo
        // Aqui a mesma coisa com a descricao.
        postagem.descricao = descricao
        // Executando o metodo de registerPostagem do model Postagem
        postagem.registerPostagem(req, res)
    }
}

// Eu ja importo esta classe instanciando ela, para que o arquivo que importa-la nao percisar instanciar.
module.exports = new PostagensController