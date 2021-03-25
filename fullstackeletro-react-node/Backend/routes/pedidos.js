module.exports = function(app){
    app.get('/pedidos', function(request, response) {
        const connection = app.config.database()
        const query = app.models.pedidos
        query.getPedidos(connection, function(error, result){
            if (error) {
                response.json(error)
            } else {
                response.json(result);
            }  
        })
    })
    
    app.post('/pedidos', function(request, response){
        const connection = app.config.database()
        const query = app.models.pedidos
        const { nome, endereco, telefone, produto, valor_uni, qtd_produto } = request.body
        const valor_total = valor_uni * qtd_produto
        query.setPedidos(nome, endereco, telefone, produto, valor_uni, qtd_produto, valor_total, connection,
            function(error, result){
                if (error) {
                    response.json(error)
                } else {
                    response.json(result)
                }  
        })
    })

}