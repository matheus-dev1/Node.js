module.exports = function (app) {
    app.get('/frontend', function (request, response) {
      const connection = app.config.database()
      const query = app.models.conteudo
  
      query.getConteudoFrontend(connection, function (error, result) {
        if (error) {
            console.log(error)
        } else {
            console.log(result)
            response.render('pages/frontend', { dados: result });
        }      
      })
    })
  }