//Exercício 43
/*Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto
combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência
sobre as do obj1 em caso de conflitos.*/

let obj1 = {
    nome: "João",
    idade: 30,
    cidade: "São Paulo",
  };
  
  let obj2 = {
    nome: "Maria",
    profissao: "Desenvolvedora",
    cidade: "Rio de Janeiro",
  };
  
  function combinarObjetos(obj1, obj2) {
    let resultado = {};
  
    for (let prop in obj1) {
      resultado[prop] = obj1[prop];
    }
  
    for (let prop in obj2) {
      resultado[prop] = obj2[prop];
    }
  
    return resultado;
  }
  
  let objCombinado = combinarObjetos(obj1, obj2);
  
  console.log("Objeto 1:");
  console.log(obj1);
  
  console.log("\nObjeto 2:");
  console.log(obj2);
  
  console.log("\nObjeto combinado, com obj2 sobrescrevendo obj1 em caso de conflitos:");
  console.log(objCombinado);
  