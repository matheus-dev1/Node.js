// Nesta linha eu estou importando o MySQL e atribuindo este objeto com varios outros metodos (Exemplo: createConnection, para criar uma conexao com o banco de dados.) na varaivel mysql.
const mysql = require('mysql')

// Estou criando uma conexao com o banco de dados atraves de uma funcao anonima e armazenando esta funcao na variavel connectionMySQL que a partir de agora tem uma funcao atribuinda nela.
const connectionMySQL = function () {
    // Aqui eu exibo uma mensamgem no console caso a conexao de certo!
  console.log('Sucesso ao conectar ao Banco de Dados')

    // Este return e padrao, toda funcao tem que retornar algo.
    // Estou usando o objeto "mysql" e usando o metodo createConnection deste metodo para uma conexao com o banco de dados.
  return (connection = mysql.createConnection({
    // Aqui eu estou definindo o endereco do meu banco de dados no meu caso que eu estou usando SQL no meu computador local eu uso "localhost"
    host: 'localhost',
    // O usuario que esta acessando o banco de dados.
    user: 'Teste',
    // A senha do usuario do banco de dados.
    password: '',
    // E qual a base de dados eu estou acessando.
    database: 'projeto_node',
  }))
}

// Aqui eu vou exportar a funcao connectionMySQL, porem no CONSIGN eu ja faco o import deste arquivo, por isso eu nao preciso importar tambem o require do mysql. E obrigatoriamente eu preciso retorna-lo como uma funcao porque eu vou chamar este metodo em outros arquivos por exemplo o backend.js
module.exports = function () {
    return connectionMySQL
}
