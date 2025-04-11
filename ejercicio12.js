//EJERCICIO 12:
//Adivinar un numero:
const readlineSync = require('readline-sync'); // Usamos readline-sync para simplificar la interacción.

const numeroAleatorio = Math.floor(Math.random() * 10) + 1; // Genera un número aleatorio entre 1 y 10.
let adivinanza = 0; // Inicializamos la adivinanza como un número diferente.

while (adivinanza !== numeroAleatorio) {
    adivinanza = parseInt(readlineSync.question("Adivina el número (entre 1 y 10): ")); 
    // Pregunta al usuario y convierte la respuesta a número.

    if (adivinanza === numeroAleatorio) {
        console.log("¡Correcto! Adivinaste el número.");
    } else {
        console.log("Intenta nuevamente.");
    }
}
