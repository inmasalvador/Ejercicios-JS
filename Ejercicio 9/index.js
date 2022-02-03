// array que contiene numeros aleatorios;
const number = [253, 8575, 1, 20, 562, 1233, 25, 27, 258, 254, 7485, 2683];

//filtrado de números pares con filter();
const number_pares = number.filter(function(numero) {
    return numero % 2 == 0;
});
//pintamso en la consola;
console.log(number_pares);

//filtrado de números impares con filter();
const number_impares = number.filter(function(numero) {
    return numero % 2 != 0;
});
//pintamso en la consola;
console.log(number_impares);