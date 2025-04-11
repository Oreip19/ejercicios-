//EJERCICIO 17:
//Contador de intentos:
const readlineSync = require('readline-sync'); // Importa el módulo readline-sync.

const contraseñaCorrecta = "12345"; // Define la contraseña correcta.
let intentos = 0; // Inicializa el contador de intentos.

while (intentos < 3) {
    const entradaUsuario = readlineSync.question("Ingresa tu contraseña: ");
    // Solicita al usuario que ingrese su contraseña.

    if (entradaUsuario === contraseñaCorrecta) {
        console.log("Login exitoso."); // Mensaje si la contraseña es correcta.
        break; // Termina el bucle si el login es exitoso.
    } else {
        intentos++; // Incrementa el contador de intentos.
        console.log(`Contraseña incorrecta. Intentos restantes: ${3 - intentos}`);
    }

    if (intentos === 3) {
        console.log("Se agotaron los intentos. Acceso denegado."); // Mensaje al agotar los intentos.
    }
}

