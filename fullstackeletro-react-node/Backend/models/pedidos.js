module.exports = function() {

    this.getPedidos = function(connection, callback){
        connection.query('SELECT * FROM pedidos', callback)
    }

    this.setPedidos = function(
        nome, 
        endereco, 
        telefone, 
        produto, 
        valor_uni, 
        qtd_produto,
        valor_total,
        connection, 
        callback) {
            connection.query(`
            INSERT INTO fullstackeletro.pedidos (nome_cli, endereco, telefone, produto, valor_uni, qtd_prod, valor_total) 
            VALUES('${nome}', '${endereco}', '${telefone}', '${produto}', '${valor_uni}', '${qtd_produto}', '${valor_total}')`, callback)
    }

    return this
}