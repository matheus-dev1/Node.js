var http = require('http')
// SOLICITANDO O METODO HTTP E ARMAZENANDO EM HTTP
var server = http.createServer(function (req, res){
    // Criacao do servidor e como parametro uma funcao de callback com dois parametros, o request(dados do usuario enviado para o servidor) e request(os dados em que enviamos para os usuarios.)
    var categoria = req.url;
    // Pegando o valor do request via GET (URL do site) e armazenando na variavel categoria.
    if (categoria == "/frontend") {
        //MEtodo get ou seja, deve se passar o valor pela URL.
        res.end("<html><body>Fron-End | Vamos aprender node.js?</body></html>")
        //Exibe este conteudo no document.
    } else if (categoria == "/backend") {
        res.end("<html><body>Vamos aprender PHP e Node.js?</body></html>")
    } else if (categoria == "/servidores") {
        red.end("<html><body>Vamos aprender AWS, IBM, Azure?</body></html>")
    } else {
        res.end("<html><body>Hello Node</body></html>");
    }
});

server.listen(3000);
// Definindo a porta 3000.
console.log("Servidor Ativo!");
//No powersheel podemos verificar as nossas portas ativas com o comando netstat -a