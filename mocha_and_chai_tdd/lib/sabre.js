// a pasta lib e como se fosse as nossas funcoes normais de um projeto e a test e onde fica todos os nosso testes unitarios.
function corAtivada(personagem){
    // if(personagem === "Yoda"){
    //     return(
    //         "Verde"
    //     )
    // } else if(personagem === "YodaMal"){
    //     return(
    //         "Vermelho"
    //     )
    // }

    // Se personagem for igual a Yoda retorne Verde, se nao Retorne Vermelho
    return personagem === "Yoda" ? "Verde" : "Vermelho"
}

module.exports = corAtivada

// module.exports.corAtivada = corAtivada - Se eu importar desta maneira eu posso chamar o arquivo de uma maneira diferente. Por exemplo eu nomeei o modulo no outro aruivo de sabre, para eu poder usar a funcao em que eu importei eu devo usar o sabre.nomeDaFuncao()