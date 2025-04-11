//EJERCICIO 4:
//Ordenar un array:
function ordenarArray(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                // Intercambia los elementos si estan en el orden incorrecto
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

const numeros = [12, 5, 7, 1, -3, 8, 0];
console.log(ordenarArray(numeros)); // Resultado
