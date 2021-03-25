// Modulo do MySQL
const mysql = require('mysql')

// Criando uma conexao com o banco de dados.
const connection = mysql.createConnection({
    host: "localhost",
    user: "Teste",
    password: "",
    datavbase: "blog_node"
})

// Exportando a conexao.
module.exports = connection