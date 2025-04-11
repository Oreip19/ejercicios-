//EJERCICIO 9:
//Obtener el multiplo de 5:
function obtenerPrimerMultiploDeCinco(array) {
    return array.find(numero => numero % 5 === 0); 
    // Usa 'find' para recorrer el array y devolver el primer número que cumple la condición de ser divisible entre 5.
}

const numeros = [12, 22, 35, 40, 51, 60];
console.log(obtenerPrimerMultiploDeCinco(numeros)); // Resultado
