// DEPENDENCIAS
// O express gerencia as rotas e requisicoes da URL.
// Os meus Models
// E as configurações de páginas web (como as portas que iremos utilizar) 
const express = require('express')

// O body-parse serve para eu configurar na minha aplicacao que a troca de informacoes sera feita atraves do forma JSON.
const bodyParser = require('body-parser')

// O Consign gerencia os caminhos dos arquivos, tanto de configuração, quanto de visualizações.
const consign = require('consign')

// CONFIGURACOES
// Como express e uma funcao ele possui seus metodo entao devemos atribuir ele a uma variavel.
const app = express()

// Aqui eu estou configurando que o tipo de dado de visualizacao sera EJS(VIEWS)
app.set('view engine', 'ejs')
app.set('views', './views')

// Usando o metodo use do meu servidor app, para configurar o trafego de inforamcoes para JSON.
app.use(bodyParser.urlencoded({ extended: true }))

// O consign faz o import de varios arquivos ao meu "app" fazendo com que se por exemplo em uma rota eu precise colocar o arquivo de conexao com o banco de daos eu apenas faco assim: app.config.database(), facilitando a sua importacao e usabilidade em todos os arquivos do meu projeto.
consign()
   // O include eh o primeiro import a "app" inserindo dentro de app o arquivo de configuracao de conexao com o banco de dados e ele eh o primeiro porque os outros precisam deste arquivo.
  .include('./config/database.js')
   // O model vem depois porque ele que faz as query's SQL.  
   // Obs: O .then aguarda o retorno do include.
  .then('./models')
   // E as rotas em definem o que cada pagina vai renderizar e fazer.
  .then('./routes')
  // O .into e sempre o ultimo e ele significa aonde todos este importes irao.
  .into(app)
  // Obs: O consign exibe no console as funcoes/paginas importadas. 

// Exports
// Estou exportando o nosso "app" que possui o nosso express. Eu estou exportando ele para usar em outros arquiv que necessam do conteudo importado pelo consign
module.exports = app