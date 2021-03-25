let http = require('http');
let fileSystem = require('fs');

let server = http.createServer(function(request, response) {
    let pagina = request.url;
    if (pagina == '/') {
        fileSystem.readFile(__dirname + '/artigos.html', function(error, html) {
            if (error) {
                //Se der algum problema com a leitura do arquivo ele me retorna o primeiro objeto(error) que e o erro que ocorreu.
                var numError = error.errno;
                // por exemplo eu alterei o meu arquivo para artigos1.html porem eu estou chamando artigos.html entao ele vai em retornar um erro falando que a pagina em que eu estou querendo ler nao existe porque e este o erro -4058.
                console.log(numError)
                // Obs: Sempre teste se determinada e uma plavra eh um objeto e se possui seu metodos.
                response.end("<html><body>Numero do erro:" + numError +  "</body></html>");
            } else {
                response.end(html);
            }
        });
    } else if (pagina == '/contato') {
        fileSystem.readFile(__dirname + '/contato.html', function(error, html) {
            if (error) {
                var numError = error.errno;
                console.log(numError)
                // Obs: Sempre teste se determinada e uma plavra eh um objeto e se possui seu metodos.
                response.end("<html><body>" + numError +  "</body></html>");
            } else {
                response.end(html);
            }
        });
    } else {
        fileSystem.readFile(__dirname + '/error.html', function(error, html) {
            if (error) {
                let numError = error.errno;
                response.end("<html><body>" + numError +  "</body></html>");
            } else {
                response.end(html);
            }
        });
    }
});

server.listen(3000, function() {
    console.log("Servidor Ativo!");
});
