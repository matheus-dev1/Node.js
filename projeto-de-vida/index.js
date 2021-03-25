// O --save serve para registrar a dependencia em que eu estou instalando no meu package.json.

// Nos podemos instalar diversas dependecias no node apenas dando um espaco entre as depencias Exemplo: npm install express nodemon commonjs. Aqui eu estou instalando 3 dependencias de uma so vez.

// Cria meu projeto node: "npm init" gera o meu arquivo package.json eu posso passar o pamatro -y para aceitar todas as perguntas.
// 1. Primeiro ele pergunta o nome do nosso projeto. Se voce nao passar nada ele usa o nome do meu diretorio.
// 2. A versao do meu projeto, e isso eu defino tambem! Se voce estiver criando a versao eh 1.0.0
// 3. A descricao do projeto!
// 4. O entre point da nossa a aplicacao, o arquivo principal, podemos mudar mas normalmente ele inicia com index.js
// 5. Script de Teste
// 6. Definir um repositorio para este projeto, passando o link do repositorio no github.
// 7. Definir algumas palavras chaves para o projeto.
// 8. Nome de quem criou o projeto.
// 9. E tambem uma licensa de projeto como a da MIT por exemplo.
// 10. E no final me da um preview de como vai ficar o arquivo package.json e me pergunta se ele pode criar o arquivo.

// O arquivo package-lock.json eh como se fosse um documentodo seu projeto com os registro de tudo que voce fez.

// Se por exemplo voce instalar uma depencia e vir outras depencias junto com ele eh porque o projeto em que voce installou necessita destes outras depencias para rodas e isso esta escrito no package.json da depencia que voce instalou.

// Para iniciar um projeto node ja criado e configurado nos usadmos o "node ./index.js" sendo que index.js e o nosso arquivo principal.

// Express e uma funcao que possui diversos metodos(dentro dele);
// Eu nao preciso passar caminho relativo ou absoluto em require porque quando eu nao passo nada ele apenas buscar DEPENDENCIA em NODE_MODULES, mas quando eu passo um caminho eu estou procurando um arquivo.
// const express = require("express") ################################################################

// Para usar este tipo de importacao nos podemos usar a dependencia Sucrase ou colocar no nosso package.json "type": "module"
// Sucrase e um transpilador.
// Este pacote do Sucrase é uma dependência de desenvolvimento, não será usada na aplicação final.
// npm install --save-dev sucrase 
// Para utiliza-lo, simplesmente execute sucrase-node <arquivo> em vez de node <arquivo>, assim, ele vai executar o sucrase para interpretar a sintaxe ES6.
// Para usar com o nodemon deve se criar um arquivo "nodemon.json" e colocar:
// {
//     "execMap":{
//         "js":"node -r sucrase/register"
//     }
// }
import express from 'express'
// o cors serve para dar acesso da nossa aplicacao acessar a nossa API
import cors from 'cors'
import mysql from 'mysql'

// Uma boa pratica pra saber metodos sobre o objeto express e dar um console.log() para saber tudo o que ele pode fazer e assim voce vai pesquisando, e isso pode ser feito com qualquer linguagem.
// console.log(express().set)

const server = express()

// Por padrao a nossa aplicacao(express) entende que nos estamos enviando os dados no formato "Multipart Form", porem com o body eu vou enviar os dados no formato Json, entao eu preciso configurar o meu express para compreender o envio de dados em json.

// Midware da aplicacao.
// Aqui eu estou setando o trafeco(ENVIANDO) de dados apenas em formato json.
server.use(express.json())
// Obs: Normalmente as configuracoes de dependencias sao feitas apos o import de dependencias.
server.use(cors())

// Criando a conexao com o banco de dados.
const connection = mysql.createConnection({
    host: "localhost",
    user: "Teste",
    password: "",
    database: "projeto_de_vida"
})

// ########################################## QUERY PARAMS ###########################################
// server.get("/usuarios", (request, response) => {
    // Query Param / Query String == Parecido com o metodo GET do FORM do HTML.
    // Exemplo: localhost:3333/usuarios?name=Matheus

//     let nameQueryParam = request.query.name
//     response.send(`Bem vindo, ${nameQueryParam}`)
// })
// ########################################## QUERY PARAMS ###########################################

// ########################################## ROUTE PARAMS ###########################################
// server.get('/usuarios/:rg', (request, response) => {
    // O Route param recebe o valor do parametro igual ao nome dados, por exemplo aqui eu dei o nome rg, entao quando eu passar um parametro onde esta rg eu vou capturar este valor. Exemplo: localhost:3333/usuarios/43434

    // let nameRouteParam = request.params.rg
    // response.send(`Numero do RG: ${nameRouteParam}`)
//     let { rg } = request.params
//     response.send(`Numero do RG: ${rg}`)
// })
// ########################################## ROUTE PARAMS ###########################################

// const usuarios2 = [["Matheus", "Ramon", "Guilherme"], ["aaa", "bbb", "ccc"]]
const usuarios = ["Matheus", "Ramon", "Guilherme"]

// A ideia e usar as mesmas rotas. Exemplo: "/usuarios"

// SELECT * FROM usuarios
// O verbo http GET sempre e usado para EXIBIR dados nao para enviar, alterar ou deletar!
server.get('/usuarios', (request, response) => {
    connection.query("SELECT * FROM projeto_de_vida.usuarios", (error, result) => {
        if (error) {
            response.json(error)
        } else {
            response.status(200).json(result)
        }
    })

    // Exibir os dados em Json. response.json() pode receber arrays e objetos literais.
    // response.json(usuarios)
})

// SELECT * FROM usuarios WHERE id = id
// Eu posso passar mais de uma parametro(ROUTE PARAMS) pela URL.
server.get("/usuarios/:id", (request, response) => {
    const { id } = request.params
    connection.query(`SELECT * FROM projeto_de_vida.usuarios WHERE id = ${id}`, (error, result) => {
        if (error) {
            response.json(error)
        } else {
            response.status(200).json(result)
        }
    })

    // Aqui eu estou resgarando dois parametros da minha ulr atraves do verbo http get
    // response.json(usuarios2[index][id])
})

// ########################################## REQUEST BODY ###########################################
// INSERT INTO usuarios(name) values('${name}')
server.post("/usuarios", (request, response) => {
    // body e como se fosse a tag <body></body> do html e ele contem todos as propriedades names "name=", entao por exemplo no Insomnia eu tenho que escrever um objeto literal porque eu vou passar qual e o valor da propriedade name "name=" e qual o valor da propriedade. Exemplo: 
    // { "name": "Matheus" } e no Insomnia formato JSON!!! 
    const { name } = request.body
    
    // Metodo .push do JavaScript para inserir dados em um array.
    // usuarios.push(name)
    // response.json("Usuario Cadastrado")

    connection.query(`INSERT INTO usuarios(name) values('${name}')`, (error, result) => {
        if (error) {
            response.json(error)
        } else {
            response.status(201).json(result)
        }
    })
})
// ########################################## REQUEST BODY ###########################################

// UPDATE usuarios SET name = '${ :name }' WHERE id = ${ :index }
server.put("/usuarios/:index", (request, response) => {
    // 1- Recuperando o parametro index.
    // Recuperando o parametro da URL
    const { index } = request.params
    // 2- Recuperando os dados enviados pelo corpo da requisicao.
    // Recuperando valor enviado no Body
    const { name } = request.body

    connection.query(`UPDATE usuarios SET name = '${name}' WHERE id = ${index}`, (error, result) => {
        if (error) {
            response.json(error)
        } else {
            response.status(200).json(result)
        }
    })

    // Alterando o valor do array na posicao do indice com o valor do dado recebido do corpo da requisicao.
    // usuarios[index] = name

    // Exibindo o valor do array depois do UPDATE.
    // response.json(usuarios)
})

// DELETE FROM usuarios WHERE id = { :index }
server.delete("/usuarios/:index", (request, response) => {
    // const request = {
    //     params: {
    //         index: 1
    //     }
    // }
    // Cria uma variavel index e ao mesmo tempo puxa o atributo de params.
    // Funciona com Arrays e objetos
    const { index } = request.params

    connection.query(`DELETE FROM usuarios WHERE id = ${ index }`, (error, result) => {
        if (error) {
            response.json(error)
        } else {
            response.status(200).json(result)
        }
    })

    // O metodo splice remove um ou mais indices de um array.
    // O primeiro parametro do splice e qual indice sera deletado, e o segundo e quantos indices depois dele sera deletado.
    // Se eu passar apenas um parametro ele vai deletar o que valor que eu coloquei e o restante "para tras".
    // usuarios.splice(index, 1)
    // response.json(usuarios)
})

// Normalmente usam a porta 3333
server.listen(3333, () => {
    // Eu estou abrindo uma funcao de call back mas sem motivo, eu posso fazer isso com qualquer metodo, porque eu estou chamando este evento.
    console.log('Rodando o servidor')
})

// Nodemon - Monitora toda mundanca feita no projeto e quando alguma mudanca e feita no codigo ele atualiza o servidor! - Para iniciar o servidor com o nodemon  temos que usar o comando "nodemon ./index.js" - intalacao global do nodemon: "npm install nodemon -g"

// Nos podemos criar scripts dentro do package.json para automatizar algumas tarefas no nosso projeto node. Colocando dentro de "scripts" o nome e a tarefa. Exemplo: "start": "node ./index.js" - Para rodar nos temos que usar o "npm run start"

// REST eh uma arquitetura para o desenvolvimento de API. Tendo 4 principais regras para a sua construcao.

// REST FULL - Eh considerado uma API REST FULL quando voce atende as 4 e/ou mais regras REST.

// REST: conjunto de princípios de arquitetura.
// RESTful: capacidade de determinado sistema aplicar os princípios de REST.

// Metodos/Verbos HTTP comparados com SQL.
// GET == SELECT
// POST == INSERT
// PUT = UPDATE
// DELETE = DELETE

//Exemplo sem o conceito de REST
// https://localhost:3333/usuarios == GET
// https://localhost:3333/usuarios/salvar == POST
// https://localhost:3333/usuarios/atualizar == POST
// https://localhost:3333/usuarios/remover == POST

//Exemplo, utilizando o conceito de REST
// https://localhost:3333/usuarios == GET
// https://localhost:3333/usuarios == POST
// https://localhost:3333/usuarios/:id == PUT
// https://localhost:3333/usuarios/:id == DELETE

// Por padrao o navegador entende o verbo/metodo HTTP GET!