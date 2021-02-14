var express = require('express')
var app = express()

app.get('/', function(request, response){
    response.sendFile(__dirname + '/artigos.html');
});

app.get('/contato', function(request, response){
    response.sendFile(__dirname + '/contato.html');
});

app.get('*', function(request, response){
    // Qualquer outra coisa que nao foi definida.
    response.sendFile(__dirname + '/error.html');
});

app.listen(3000, function() {
    console.log("Servidores rodando com Express");
});