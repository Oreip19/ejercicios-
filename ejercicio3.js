//EJERCICIO 3:
//Contar elementos pares:
function ContarElementosPares(array){
    let contador = 0;
    for (let i = 0; i < array.length; i++) {
        if(array[i] % 2 === 0) {
            contador++;
        }
    }
    return contador;
        
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(ContarElementosPares(numeros)); //Resultado