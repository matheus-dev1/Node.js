// Todos os arquivos de rotas esta o importadas para dentro de app. Ou seja quando eu for fazer a exportacao desta rota eu preciso passar como parametro app para que dentro da funcao eu possa usar as funcoes de app. Exemplo: app.get()
module.exports = function(app) {
    app.get('/cadastro', function(request, response) {
        // Como eu estou usando EJS e esta pagina esta dentro de um arquivo no caminho eu nao preciso passar views/
      response.render('pages/cadastro')
    })
  
    app.post('/cadastro/salvar', function(request, response) {
      // Aqui eu estou pegando dados enviados pelo body e desestruturando em dois valroes, categoria e conteudo. Request Body!
      let { categoria, conteudo } = request.body
      // Aqui eu estou passando por app, entrando no diretorio config e acessando a funcao de database que contem os atributos para a conexao.
     // Obs: esta linha esta OK gracas ao CONSIGN!!!
      const connection = app.config.database()
      // Aqui eu estou passando por app, entrando na pasta models e pegando todo o arquivo contuedo.js
      const query = app.models.conteudo

      // Aqui eu estou executando a funao setConteudo do aruivo models/conteudo.js e passando os parametos necessario para a execucao.
      query.setConteudo(categoria, conteudo, connection, function(error, result) {
        if (error) {
            console.log(error)
        } else {
            console.log(result)
        }
        // Obs: Aqui internamente esta a executando a query da funcao em que eu estou chamando.
      })
  
      query.getConteudoRecente(connection, function (error, result) {
        if (error) {
            console.log(error)
        } else {
            console.log(result)
            // Este objeto vai retornar para nos os dados da query para ser renderizado pelo arquivo ejs.
            response.render('pages/index', { dados: result })
        }
        })
    })
  }
  