const { check, validationResult } = require('express-validator')

// Eu apenas import crypto aqui por esta a unica pagina que faz iso desta dependencia.
const crypto = require('crypto');

// Todos os arquivos de rotas esta o importadas para dentro de app. Ou seja quando eu for fazer a exportacao desta rota eu preciso passar como parametro app para que dentro da funcao eu possa usar as funcoes de app. Exemplo: app.get()
module.exports = function(app) {
    app.get('/cadastro', function(request, response) {
        // Como eu estou usando EJS e esta pagina esta dentro de um arquivo no caminho eu nao preciso passar views/

        response.render('pages/cadastro', {
          // Aqui eu estou exibindo(renderizando) e passando como parametro o objeto "validacao" os outros dois objetos: errors e dados, sendo que erros e dados estao setados inicialmente como vazios para que o teste de erro da pagina cadastro.ejs nao seja verdadeiro!!!
          validacao: {
            errors: {},
            dados: {}
          }
        })
    })
  
    app.post('/cadastro/salvar',[
      // Aqui eu estou checando se o campo (name="") conteudo da pagina cadastro.ejs atende os requisitos: 1. Nao esta vazia e possui entre 10 ou 20 caracteres.
      check('conteudo', 'Conteudo obrigatorio (Minimo 10 caracteres, maximo 20 caracteres)')
        // Segundo parametro vai para o objeto ".msg" de "errors"
        .exists()
        .isLength({
          min: 10,
          max: 20
      })
    ], function(request, response) {

      // Aqui eu estou pegando dados enviados pelo body e desestruturando em dois valroes, categoria e conteudo. Request Body!
      let { categoria, conteudo } = request.body

      // Esta funcao validationResult recebe o parametro de requisicoes e monitora se ocorreu algum erro nos requests(neste caso apenas no campo conteudo). Se encontrar ele envia todos os erros encontrados para a variavel errros.
      const errors = validationResult(request)

      // Aqui eu estou criando uma hash do tipo MD5, definindo o que eu vou cryptografar, compilar em Hexadecimal e no final armazenando em passwordEncrypted.
      // Obs: Apenas funciona assim com a linha desta maneira: crypto.createHash("md5").update(conteudo).digest("hex")
      const passwordEncrypted = crypto.createHash("md5").update(conteudo).digest("hex")

      // Depois de criptografada eu coloco em conteudo para que seja inserida em BD.
      conteudo = passwordEncrypted

      // Aqui eu verifico se a variavel errors esta vazia, se estiver apenas exiba uma mensagem mostrando que tudo deu certo!
      if (!errors.isEmpty()) {
          console.log(errors)
          // Eu tenho que usar o return para que o resto da pagina nao seja carregada.
          return (
            response.render('pages/cadastro', {
              // Obs: o objeto "validacao" e um objeto que eu crio aqui porem, no meu arquivo ejs se eu precisar usar o conteudo deste objeto eu preciso usar o mesmo nome.
              // Nesta parte nos ja sabemos que os erros nao estao vazios entao, eu passao os valores dos errors para "validacao".
              validacao: errors,
              dados: conteudo
            })
          )
      }

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
        // Result e o resultado da minha consulta SQL (Query)
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
  