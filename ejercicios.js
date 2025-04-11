//EJERCICIO 1
// 1.	Sumar elementos de un array:

function sumarElementos(array){
  return array.reduce((acumulador, valorActual) => acumulador + valorActual, 0); 
}

const numeros = [1, 2, 3, 4, 5];
console.log(sumarElementos(numeros)); //Resultado