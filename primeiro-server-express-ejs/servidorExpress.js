var express = require('express');
// Utilizando a dependencia Express/SOLICITANDO O PACOTE EXPRESS
var app = express();
// app vai ser a nossa variavel onde armazenamos a funcao express() que e o nosso servidor, entao se a gente pode usar o metodo .get
// usa o res.render para renderizar arquivos ejs
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    // res.send("<html><body>Hello World</body></html>");
    res.render('index')
});
app.get('/backend', function (req, res) {
    // res.send("<html><body>Vamos aprender NodeJS?</body></html>")
    res.render('backend')
});
app.get('/frontend', function (req, res) {
    // res.send("<html><body>Vamos aprender ReactJS?</body></html>")
    res.render('frontend')
});
app.get('/servidores', function (req, res) {
    // res.send("<html><body>Vamos aprender PHP?</body></html>")
    res.render('servidores')
});
app.listen(3001, function() {
    console.log("Servidores rodando com Express");
});