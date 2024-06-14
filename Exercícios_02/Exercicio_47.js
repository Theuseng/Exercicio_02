//Exercício 47
/*Crie uma função que transforme um objeto de entrada aplicando uma função
fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os
resultados.*/

function transformarObjeto(objeto, funcaoTransformacao) {
    let novoObjeto = {};
  
    for (let chave in objeto) {
      if (objeto.hasOwnProperty(chave)) {

        novoObjeto[chave] = funcaoTransformacao(objeto[chave]);
      }
    }
  
    return novoObjeto;
  }
  
  let objetoEntrada = {
    a: 1,
    b: 2,
    c: 3
  };
  
  function dobra(valor) {
    return valor * 2;
  }
  
  let objetoTransformado = transformarObjeto(objetoEntrada, dobra);
  console.log(objetoTransformado);