//Exercício 48
/*Você recebe dois objetos que representam o inventário de duas lojas diferentes:
inventarioLojaA e inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse
item em estoque. Escreva uma função que combine os inventários em um único objeto.
Se um item aparecer em ambas as lojas, some as quantidades.*/

function combinarInventarios(inventarioA, inventarioB) {
    let inventarioCombinado = {};
  
    for (let item in inventarioA) {
      if (inventarioA.hasOwnProperty(item)) {
        inventarioCombinado[item] = inventarioA[item];
      }
    }
  
    for (let item in inventarioB) {
      if (inventarioB.hasOwnProperty(item)) {
        if (inventarioCombinado.hasOwnProperty(item)) {
          inventarioCombinado[item] += inventarioB[item];
        } else {
          inventarioCombinado[item] = inventarioB[item];
        }
      }
    }
  
    return inventarioCombinado;
  }
  
  let inventarioLojaA = {
    "camisa": 10,
    "calça": 5,
    "sapato": 2
  };
  
  let inventarioLojaB = {
    "camisa": 3,
    "calça": 7,
    "chapéu": 5
  };
  
  let inventarioCombinado = combinarInventarios(inventarioLojaA, inventarioLojaB);
  console.log(inventarioCombinado);  