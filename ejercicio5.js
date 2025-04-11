//EJERCICIO 5:
//Buscar un elemento:
const nombres = ["Saul", "Alberth", "Andre", "Alice", "Nadin"];

function buscarNombre(array, nombreBuscado) {
    let posicion = array.indexOf(nombreBuscado);
    if (posicion !== -1) {
        return `El nombre "${nombreBuscado}" está en la posición ${posicion}.`;
    } else {
        return `El nombre "${nombreBuscado}" no está en la lista.`;
    }
}

console.log(buscarNombre(nombres, "Alice")); 
console.log(buscarNombre(nombres, "Juan")); // Resultados
