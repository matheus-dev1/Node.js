var Somar = function Somar (num1, num2) {
    return (num1 + num2);
}

var Subtrair = function Subtrair (num1, num2) {
    return (num1 - num2);
}

var Multiplicar = function Multiplicar (num1, num2) {
    return (num1 * num2);
}

var Dividir = function Dividir (num1, num2) {
    return (num1 / num2);
}

module.exports = Somar
// Eu transfomo esta funcao em um modulo e disponibilizo ela para poder ser exportada.
module.exports = Subtrair
module.exports = Multiplicar
module.exports = Dividir

console.log(Somar(5, 5));
console.log(Subtrair(10, 7));
console.log(Multiplicar(5, 5));
console.log(Dividir(10, 2));