//EJERCICIO 6:
//Revertir array:
function RevertirArray(array){
    let arrayInvertido = []; // Crear un nuevo array vacío
    for (let i = array.length - 1; i >= 0; i--){
        arrayInvertido.push(array[i]); //Agrega los elementos de fin a comienzo
    }
    return arrayInvertido;
}

const numeros = [1, 2, 3, 4, 5, 6]
console.log(RevertirArray(numeros)); //Resultado