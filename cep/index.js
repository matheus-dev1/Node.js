const express = require("express")
const bodyParser = require("body-parser")
const enviaCep = require('./functions/enviaCep')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine', 'ejs')

app.set('views', './src/views')

app.get('/', (req, res) => {
    res.render('index')
})

// Por estar consumindo uma API eu tambem preciso deixar esta arrow function como assincrona.
app.post('/envia-cep', async (req, res) => {
    const { cep } = req.body
    const cepJson = await enviaCep(cep)
    console.log(cepJson)
    res.render('resultado', {dados: cepJson})
})

app.listen(3333)