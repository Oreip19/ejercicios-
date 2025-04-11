//EJERCICIO 19:
//Imprimir la serie de Fibonacci hasta que un numero supere 100:
let fibonacci = [0, 1];
let i = 2;

while (true) {
    let nuevoNumero = fibonacci[i - 1] + fibonacci[i - 2];
    if (nuevoNumero > 100) {
        break; // Detén el proceso cuando el número supere 100.
    }
    fibonacci.push(nuevoNumero);
    i++;
}

console.log(fibonacci);
