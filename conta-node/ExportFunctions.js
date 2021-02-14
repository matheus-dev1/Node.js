// var Somar = require('./ContaNome')

var Dividir = require('./Dividir')
var Somar = require('./Somar')
var Multiplicar = require('./Multiplicar')
var Subtrair = require('./Subtrair')

// Nos importamos as funcoes por arquivo e nao por funcoes propriamente ditas.

console.log(Somar(5, 5));
console.log(Subtrair(10, 7));
console.log(Multiplicar(5, 5));
console.log(Dividir(10, 2));