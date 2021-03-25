module.exports = function() {
    this.getMensagem = function(connection, callback){
        connection.query('SELECT * FROM mensagem', callback)
    }

    this.setMensagem = function(nome, email, assunto, mensagem, connection, callback){
        connection.query(`INSERT INTO fullstackeletro.mensagem (nome, email, assunto, mensagem) VALUES('${nome}', '${email}', '${assunto}', '${mensagem}')`, callback)

    }

    return this
}