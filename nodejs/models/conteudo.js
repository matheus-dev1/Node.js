// Basicamente este arquivo cria uma funcao anonima e faz o export por conta disso quando eu for chamar a funcao eu chamo pelo nome do arquivo "conteudo.js".
module.exports = function () {
    // Dentro desta funcao eu possuo outras diversas funcoes, para que eu consiga usar essas funcoes, eu preciso colocar o this.nomeDaFuncao e no final apenas usar o return this fazendo que quando eu fazer este import pelo consig(const query = app.models.conteudo) eu posso chamar qual quer uma que eu quiser.

    // E eu tambem estou criando funcoes genericas que devem receber parametro dos arquivo em que estao sendo chamados.

    // Obs: eu passo dois parametros para as funcos, o primeiro e a conexao e o segundo e a funcao de callback, o que esta dentro da funcao e algo estatico e nao eh alterado na sua chamada.
    this.getConteudo = function(connection, callback) {
      connection.query('SELECT * FROM conteudo', callback)
    }
  
    // O this aqui eh para garantir que esta funcao/metodo e este modulo e nao de outro!
    this.getConteudoRecente = function(connection, callback) {
      connection.query('SELECT * FROM conteudo ORDER BY id DESC LIMIT 3', callback)
    }
  
    this.getConteudoFrontend = function(connection, callback) {
      connection.query("SELECT * FROM conteudo WHERE categoria = 'frontend'", callback)
    }
  
    this.getConteudoBackend = function(connection, callback) {
      connection.query("SELECT * FROM conteudo WHERE categoria = 'backend'", callback)
    }
    // Esta uma funcao que usa a QUERY de INSERT e recebe mais dois parametros
    this.setConteudo = function(categoria, conteudo, connection, callback) {
        connection.query(
            `INSERT INTO conteudo(categoria, conteudo) VALUES('${categoria}', '${conteudo}')`,
            callback
        )
    }
    return this
  }