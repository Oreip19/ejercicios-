//EJERCICIO 1
// 1.	Sumar elementos de un array:

function sumarElementos(array){
  return array.reduce((acumulador, valorActual) => acumulador + valorActual, 0); 
}

const numeros = [1, 2, 3, 4, 5];
console.log(sumarElementos(numeros)); //Resultado

//EJERCICIO 2
// 2. Numero mayor y menor:
function mayorYmenor(array){
  if(array.length === 0){
    return "The array this empty"
  }
  let mayor = array[0];
  let menor = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > mayor) {
        mayor = array[i];
    }
    if (array[i] < menor) {
        menor = array[i];
    }
  }
  return {mayor, menor};

}

const numeros = [12, 5, 7, 99, -3, 0, 18];
console.log(mayorYmenor(numeros));