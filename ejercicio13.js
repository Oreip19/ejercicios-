//EJERCICIO 13:
//Contar regresivamente desde un numero:
const readlineSync = require('readline-sync'); // Importa el módulo readline-sync.

let numero = parseInt(readlineSync.question("Ingresa un número para iniciar la cuenta regresiva: ")); 
// Solicita al usuario que ingrese un número.

while (numero >= 0) {
    console.log(numero); // Imprime el número actual.
    numero--; // Decrementa el número.
}
