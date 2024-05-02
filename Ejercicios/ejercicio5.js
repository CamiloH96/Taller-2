function calcularAreaCirculo(radio) {
    const area = 3.1416 * radio ** 2;
    return area;
}

const radio = parseInt(process.argv[2]);

const area = calcularAreaCirculo(radio);

console.log(`El área del círculo con radio ${radio} es: ${area}`);