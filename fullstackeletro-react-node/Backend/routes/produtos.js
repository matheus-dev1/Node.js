module.exports = function(app){
    app.get('/produtos', function(request, response){
        const connection = app.config.database()
        const query = app.models.produtos

        query.getProdutos(connection, function(error, result){
            if (error) {
                response.json(error)
            } else {
                response.json(result);
            }   
        })
    })
}