//Exercício 44
/*Escreva uma função que conte quantas propriedades do tipo string existem em um
objeto e retorne esse número.*/

function contarPropriedadesString(objeto) {
    let contador = 0;
  
    for (let chave in objeto) {

      if (typeof objeto[chave] === 'string') {
        contador++;
      }
    }
  
    return contador;
  }
  
  
  let pessoa = {
    nome: 'João',
    idade: 30,
    cidade: 'São Paulo',
    profissao: 'Desenvolvedor',
  };
  
  let numeroStrings = contarPropriedadesString(pessoa);
  console.log(`Número de propriedades do tipo string: ${numeroStrings}`);
  