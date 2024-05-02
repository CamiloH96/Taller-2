function validarContrasena(contrasena) {

    const longitudMinima = 8;
    const tieneCaracterEspecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    const tieneNumero = /\d+/;
    const tieneMayuscula = /[A-Z]+/;
    const tieneMinuscula = /[a-z]+/;
    
    if (contrasena.length < longitudMinima) {
        console.log(`Tu contraseña no tiene la longitud suficiente`);
        return false;
    }
    
    if (!tieneCaracterEspecial.test(contrasena)) {
        console.log(`Tu contraseña no tiene caracteres especiales`);
        return false;
    }
    
    if (!tieneNumero.test(contrasena)) {
        console.log(`Tu contraseña no tiene numeros`);
        return false;
    }
    
    if (!tieneMayuscula.test(contrasena)) {
        console.log(`Tu contraseña no tiene mayusculas`);
        return false;
    }
    
    if (!tieneMinuscula.test(contrasena)) {
        console.log(`Tu contraseña no tiene minusculas`);
        return false;
    }

    console.log(`Contraseña correcta ${contrasena}`);
    return true;
}

contrasena = process.argv[2];
console.log(validarContrasena(contrasena));