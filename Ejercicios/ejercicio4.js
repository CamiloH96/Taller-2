const contarPalabras = function(cadena) {
    
    cadena = cadena.trim();// Eliminar espacios en blanco al inicio y al final de la cadena

    const palabras = cadena.split(/\s+/);// Dividir la cadena en palabras usando los espacios en blanco como delimitador
    
    const cantidadPalabras = palabras.length;// Contar la cantidad de palabras

    return cantidadPalabras;
};

const texto = process.argv[2];

const cantidadPalabras = contarPalabras(texto);

console.log(`La cantidad de palabras en la cadena es: ${cantidadPalabras}`);
