//EJERCICIO 7:
//Convertir nombres con minuscula a mayuscula:
function convertirAMayusculasClásico(array) {
    let arrayMayusculas = []; // Crear un nuevo array vacío
    for (let i = 0; i < array.length; i++) { 
        arrayMayusculas.push(array[i].toUpperCase()); // Convertir el nombre a mayúsculas y agregarlo al nuevo array
    }
    return arrayMayusculas; 
}

const nombres = ["nadin", "estephany", "rodrigo", "pedro"];
const nombresMayusculas = convertirAMayusculasClásico(nombres);
console.log(nombresMayusculas);// Resultado
