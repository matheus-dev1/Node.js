module.exports = function () {
    this.getProdutos = function(connection, callback){
        connection.query('SELECT * FROM produtos', callback)
    }
    return this
}