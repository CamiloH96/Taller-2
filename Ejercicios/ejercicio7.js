function palindromo(palabra) {

    palabra = palabra.toLowerCase().replace(/\s/g, '');// Convertir la palabra a minúsculas y eliminar los espacios en blanco

    const longitud = palabra.length;

    for (let i = 0; i < longitud / 2; i++) {

        if (palabra[i] !== palabra[longitud - 1 - i]) {
            console.log(`La palabra no es palandroma ${palabra}`);
            return false;
        }
    }
    console.log(`La palabra si es palandroma ${palabra}`);
    return true;
}

let palabra = process.argv[2];

console.log(palindromo(palabra));