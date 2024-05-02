const calcularImpuestos = (function() {
    const porcentajeImpuesto = 0.15;
    
    return function(monto) {
        const impuestos = monto * porcentajeImpuesto;
        console.log(`El monto de impuestos a pagar es: ${impuestos}`);
        return impuestos;
    };
})();

const monto = parseInt(process.argv[2])
const impuestos = calcularImpuestos(monto);