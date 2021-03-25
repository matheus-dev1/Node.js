module.exports = function(app) {
    app.get('/backend', function (request, response) {
      const connection = app.config.database()
      const query = app.models.conteudo

      query.getConteudoBackend(connection, function(error, result) {
        if (error) {
            console.log(error)
        } else {
            console.log(result)
            response.render('pages/backend', { dados: result });
        }      
      })
    })
  }
  