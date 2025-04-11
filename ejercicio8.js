//EJERCICIO 8:
//Sumar solo numeros positivos:
function sumarPositivos(array) {
    return array.filter(numero => numero > 0) // Filtra solo los numeros positivos para la suma
                .reduce((acum, num) => acum + num, 0); // Suma los numeros positivos.
}

const numeros = [-3, 5, -1, 8, -2, 6];
console.log(sumarPositivos(numeros)); // Resultado
