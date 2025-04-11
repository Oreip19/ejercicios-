//EJERCICIO 18:
//Sumar hasta que el usuario ingrese 0:
const readlineSync = require('readline-sync'); // Importa el módulo readline-sync.

let suma = 0; // Inicializa la variable para almacenar la suma.
let numero; // Declara la variable para almacenar el número ingresado.

do {
    numero = parseInt(readlineSync.question("Ingresa un número (0 para terminar): "));
    // Solicita al usuario que ingrese un número.
    
    if (numero !== 0) {
        suma += numero; // Suma el número si no es 0.
    }
} while (numero !== 0);
// Repite el bucle mientras el número ingresado sea diferente de 0.

console.log(`La suma total es: ${suma}`);
// Imprime la suma total cuando el usuario ingresa 0.
