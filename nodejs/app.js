// O arquivo server.js sao as configuracoes, dependencias e rotas.
// Entao eu estou puxando tudo isso pra app.js onde contem o meu servidor.
var app = require('./config/server')

console.log(app)

app.listen(3000, function () {
    console.log('Servidor rodando com express!')
  })