const filtrarNumerosPares = function(array) {
    return array.filter(numero => numero % 2 === 0);
};


const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pares = filtrarNumerosPares(numeros);

console.log("Números pares:", pares);