// Os models sao declarados com a primeira letra maiuscula e no singular.

const connection = require('../config/connection.js')

// Model eh a abstracao da minha tabela de banco de dados.
class Postagem {
    // o construtor aqui e usado para definir os atributos da nossa classe que sao representadas como as colunas da nossa tabela Postagens.
    constructor() {
        this.id
        this.titulo
        this.descricao
    }

    // Metodo
    // Aqui eu estou criando estes metodo para serem usados no Controller
    getAll(req, res) {
        connection.query('SELECT * FROM blog_node.postagens', (error, result) => {
            if(error){
                res.json(error)
            } else {
                res.json(result)
            }
        })
    }

    // Criando um metodo para fazer uma postagem e inserir no banco de dados.
    registerPostagem(req, res) {
        connection.query(`INSERT INTO blog_node.postagens(titulo, descricao)
        VALUES('${this.titulo}', '${this.descricao}')`, (error, result) => {
            if (error) {
                res.json(error)
            } else {
                res.status(201).send("Cadastrado!")
            }
        })
    }
}

// Exportando a instancia da classe postagem.
module.exports = new Postagem