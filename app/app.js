var app = require('../app/config/server')(app);
// Servidor Node com CommomJS

var rotaHome = require('./app/routes/home')(app);

app.listen(3000, function (){
    console.log("Servidor Rodando com Express")
})