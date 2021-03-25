module.exports = function(app){
    app.get('/mensagem', function(request, response){
        const connection = app.config.database()
        const query = app.models.mensagem
        query.getMensagem(connection, function(error, result){
            if (error) {
                response.json(error)
            } else {
                response.json(result);
            }  
        })
    })

    app.post('/mensagem', function(request, response){
        const connection = app.config.database()
        const query = app.models.mensagem
        const { nome, email, assunto, mensagem } = request.body
        query.setMensagem(nome, email, assunto, mensagem, connection, 
            function(error, result){
                if (error) {
                    response.json(error)
                } else {
                    response.json(result)
                }  
            })
    })
}