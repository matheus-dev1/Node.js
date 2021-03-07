const app = require('./src/config/server')
const connection = require('./src/config/connection')

// Estou importando a collection da base de dados
const colaboradoresModel = require('./src/models/Colaboradores')

// Minha arrow function tem que ser assincrona porque eu preciso que ao enviar os dados ele espere os dadso ficarem disponiveis para que eu possa exibir.
app.post("/", async (req, res) => {
    const { nome } = req.body

    // Eu uso "await" para esperar que tudo esteja enviado e pronto para que a variavel "result" receba os dados do documento enviado. 
    // E eu tenho uma funcao dentro da minha collection "colaboradoresModel" chamada ".create()" que basicamente eh o insert do MONGODB, porem no MONGOOSE! 
    let result = await colaboradoresModel.create({
        nome: nome
    })
    res.json(result)
})

// Eu tenho que fazer a mesma coisa em relacao a async porque eu preciso esperar o processo de buscar e armazenamento dos dados na minha variavel para depois exibi-las.
app.get("/", async (req, res) => {
    const { nome } = req.body

    // Comando ".find()" igual a SELECT do MySQL
    let result = await colaboradoresModel.find({nome: nome})

    res.json(result)
})

// Aqui eu vou encontrar um valor no campo e sempre fazer um update que no caso e apenas da versao do documento.
app.put("/versionDoc", async (req, res) => {
    const { nome } = req.body
    // O operado $inc faz o incremento de alguma coisa, aqui no caso eu estou incrementando +1 na versao do documento.
    let result = await colaboradoresModel.findOneAndUpdate({nome: nome}, {$inc: {"__v": 1}})

    res.json(result)
})

// Aqui eu vou procurar pelo route params e fazer um update.
app.put("/:nome", async (req, res) => {
    // pegando valor de params
    const { nome } = req.params
    // Pegando os valores de body
    const { novoNome, sobrenome } = req.body
    // Atualizando os campos nome e sobrenome do nome encontrado.
    let result = await colaboradoresModel.updateOne({nome: nome}, {$set: {nome: novoNome, sobrenome: sobrenome}})

    res.json(result)
})

// Aqui eu vou deletar um documento pelo nome e sobrenome encontrado pelo corpo da requisicao.
app.delete("/delete", async (req, res) => {
    // Nome e sobre nome pelo corpo da requisicao.
    const { nome, sobrenome } = req.body
    // Delete one, deletar apenas um documento por vez.
    let result = await colaboradoresModel.deleteOne({nome: nome, $and: [{sobrenome: sobrenome}]})

    res.json(result)
})