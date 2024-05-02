function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        let factorial = 1;
        for (let i = 2; i <= numero; i++) {
            factorial *= i;
        }
        return factorial;
    }
}

let numero = parseInt(process.argv[2]);

let resultadoFactorial = calcularFactorial(numero);

console.log(`El factorial de ${numero} es: ${resultadoFactorial}`);