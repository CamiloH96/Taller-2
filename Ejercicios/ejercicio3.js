const ordenarAscendente = array => array.sort((a, b) => a - b);


let numeros = [5, 2, 9, 1, 7];
let numerosOrdenados = ordenarAscendente(numeros);
console.log(`Array ordenado de manera ascendente: ${numerosOrdenados}`);