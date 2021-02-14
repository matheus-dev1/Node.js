let http = require('http')
let fileSystem = require('fs')

let server = http.createServer(function(request, response) {
    let pagina = request.url
    if (pagina == '/index') {
        fileSystem.readFile(__dirname + '/index.html', function(error, html) {
            response.end(html)
            console.log(__dirname)
            console.log(error)
            console.log(html)
        }); 
    } else if (pagina == '/index2') {
        fileSystem.readFile(__dirname + '/index2.html', function(error, html) {
            response.end(html)
            console.log(__dirname)
            console.log(error)
            console.log(html)
        });
    }
});

server.listen(3000, function () {
    console.log('Servidor Ativo.')
})