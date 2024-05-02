let suma = (num1,num2) => num1 + num2;

let num1 = parseInt(process.argv[2]);
let num2 = parseInt(process.argv[3]);

let resultado = suma(num1, num2);

console.log(`resultado de ${num1} + ${num2} = ${resultado}`)