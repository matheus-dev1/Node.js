const mysql = require('mysql')

const Connection = function () {
    // Aqui eu exibo uma mensamgem no console caso a conexao de certo!
  console.log('Sucesso ao conectar ao Banco de Dados')

    // Este return e padrao, toda funcao tem que retornar algo.
    // Estou usando o objeto "mysql" e usando o metodo createConnection deste metodo para uma conexao com o banco de dados.
  return (mysql.createConnection({
    host: 'localhost',
    user: 'Teste',
    password: '',
    database: 'fullstackeletro',
  }))
}


module.exports = function () {
    return Connection
} 