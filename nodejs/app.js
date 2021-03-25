// O arquivo server.js sao as configuracoes, dependencias e rotas.
// Entao eu estou puxando tudo isso pra app.js onde contem o meu servidor.
const app = require('./config/server')

app.listen(3000, function () {
    console.log('Servidor rodando com express!')
  })