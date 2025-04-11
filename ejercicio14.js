//EJERCICIO 14:
//Validar entrada de usuario:
const readlineSync = require('readline-sync'); // Importa el módulo readline-sync.

let numero;
do {
    numero = parseInt(readlineSync.question("Ingresa un número mayor que 0: "));
    // Solicita al usuario que ingrese un número mayor que 0.
    
    if (numero <= 0 || isNaN(numero)) {
        console.log("Entrada inválida. Por favor, intenta nuevamente.");
        // Si el número no es válido, se muestra un mensaje y se vuelve a pedir.
    }
} while (numero <= 0 || isNaN(numero));
// Repite el bucle hasta que el usuario ingrese un número mayor que 0.

console.log(`Número válido ingresado: ${numero}`);
// Muestra el número válido que se ingresó.
