module.exports = function(app) {
    app.get('/', function(request, response) {
      const connection = app.config.database()
      const query = app.models.conteudo
  
      query.getConteudoRecente(connection, function (error, result) {
        if (error) {
            console.log(error)
        } else {
            console.log(result)
            response.render('pages/index', { dados: result });
        }        
      })
    })
  }
  