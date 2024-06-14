//Exercício 45
/*Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é
o número de vezes que a string aparece no array.*/

function contarStrings(array) {
    let contador = {};
  
    array.forEach((string) => {

      if (contador[string]) {
        contador[string]++;
      } else {
        contador[string] = 1;
      }
    });
  
    return contador;
  }
  
  
  let arrayStrings = ['maçã', 'laranja', 'banana', 'maçã', 'laranja', 'uva', 'laranja'];
  let objetoContador = contarStrings(arrayStrings);
  console.log(objetoContador);
  