//Exercício 42
/*Crie um objeto chamado dados que contém várias propriedades, incluindo números,
strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
propriedades que são arrays.*/

let dados = {
    nome: "João",
    idade: 30,
    numeros: [1, 2, 3, 4],
    endereco: {
      rua: "Rua das Flores",
      cidade: "São Paulo",
    },
    interesses: ["JavaScript", "Node.js", "React"],
    ativo: true,
  };
  
  function filtrarPropriedadesArrays(objeto) {
    let resultado = {};
  
    for (let chave in objeto) {
      if (Array.isArray(objeto[chave])) {
        resultado[chave] = objeto[chave];
      }
    }
  
    return resultado;
  }
  
  let dadosApenasArrays = filtrarPropriedadesArrays(dados);
  
  console.log("Dados originais:");
  console.log(dados);
  
  console.log("\nDados filtrados contendo apenas arrays:");
  console.log(dadosApenasArrays);
  