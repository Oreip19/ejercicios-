//EJERCICIO 16:
//Sumar solo los numeros impares entre 1 y 50:
let suma = 0;

for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0) { // Verifica si el número es impar.
        suma += i;
        if (suma > 500) { // Si la suma supera 500, detén el proceso.
            console.log("La suma supera 500. Proceso detenido.");
            break;
        }
    }
}

console.log(`Suma final: ${suma}`);
