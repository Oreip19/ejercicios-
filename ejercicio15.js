//EJERCICIO 15:
//Mostrar menu hasta que el usuario salga:
const readlineSync = require('readline-sync'); // Importa el módulo readline-sync.

let opcion;
do {
    console.log("\nMenú:");
    console.log("1. Opción 1");
    console.log("2. Opción 2");
    console.log("3. Salir");
    // Imprime el menú con las opciones disponibles.

    opcion = parseInt(readlineSync.question("Elige una opción: "));
    // Solicita al usuario que elija una opción y convierte la entrada a número entero.

    switch (opcion) {
        case 1:
            console.log("Seleccionaste Opción 1.");
            break;
        case 2:
            console.log("Seleccionaste Opción 2.");
            break;
        case 3:
            console.log("Saliendo del menú...");
            break;
        default:
            console.log("Opción inválida. Por favor, elige una opción válida.");
            // Muestra un mensaje de error si el usuario ingresa una opción no válida.
    }
} while (opcion !== 3);
// El bucle se repite hasta que el usuario elija la opción 3 para salir.
