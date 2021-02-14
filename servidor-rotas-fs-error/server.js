let http = require('http')
let fileSystem = require('fs')

let server = http.createServer(function(request, response) {
    let pagina = request.url
    if (pagina == '/index') {
        fileSystem.readFile(__dirname + '/index.html', function(error, html){
            if (error == true) {
                console.log(error)
            } else {
                response.end(html)
            }
        });
    } else if (pagina == '/index2') {
        fileSystem.readFile(__dirname + '/index2.html', function(error, html) {
                if (error == true) {
                    console.log(error)
                } else {
                    response.end(html)
                } 
        });
    }
});

server.listen(3000, function(){
    console.log('Servidor Ativo!')
})