// Do modulo mongoose eu vou exportar uma classe chamda Schema que me retonar um classe que possibilitar eu criar uma base de dados. E tambem vou exportar o model que vai ser responsavel por criar a collection desta base de dados.
const { Schema, model } = require("mongoose")

// Aqui eu dou o nome da instancia da minha base de dados.
// Dentro de Schema eu passo um objeto contendo todos os campos em que um documento devera ter na minha base de dados.
// Obs: A palabra Schema no final do nome da nossa base de dados e padrao!
const escolarecodeSchema = new Schema({
    nome: {
        type: String
    },
    sobrenome: {
        type: String
    },
    data_registro: {
        // Este tipo data recebe uma dado do tipo data/horario
        type: Date,
        // A propriedade default faz com que este campo receba algo por padrao, neste caso eu estou colocando que por padrao deve ser inserido data atual do religio do meu computador.
        default: new Date
    }
    // type: Schema.Types.ObjectId | Este type deve receber um ObjetoId 
    // O type define qual o tipo de dado este campo ira receber.
})

// Para criar/seleciono a collection na nossa base de dados nos precisamos passar para a funaco model, o nome da collection e de qual Schema(base de dados) esta collection pertence.
const colaboradoresModel = model("colaboradores", escolarecodeSchema)

// Depois no exportamos.
module.exports = colaboradoresModel