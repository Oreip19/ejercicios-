//EJERCICIO 11:
//Generar una secuencia de Fibonacci:
function generarFibonacci(cantidad) {
    let fibonacci = [0, 1]; // Inicializa el array con los dos primeros numeros de la serie.
    for (let i = 2; i < cantidad; i++) {
        // Comienza en el indice 2, ya que los primeros dos numeros ya estan definidos.
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
        // Calcula el siguiente numero sumando los dos anteriores y lo agrega al array.
    }
    return fibonacci; // Devuelve el array con la secuencia completa.
}

const primeros10Fibonacci = generarFibonacci(10);
console.log(primeros10Fibonacci); // Resultado
