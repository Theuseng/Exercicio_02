//Exercício 46
/*Suponha que você tem um array de objetos onde cada objeto representa uma venda
com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total
de vendas por vendedor.*/

function sumarizarVendas(vendas) {
    let resumoVendas = {};
  
    vendas.forEach((venda) => {
      let vendedor = venda.vendedor;
      let valor = venda.valor;
  
      if (resumoVendas[vendedor]) {
        resumoVendas[vendedor] += valor;
      } else {
        resumoVendas[vendedor] = valor;
      }
    });
  
    return resumoVendas;
  }
  
  let vendas = [
    { vendedor: 'Alice', valor: 100 },
    { vendedor: 'Bob', valor: 200 },
    { vendedor: 'Alice', valor: 150 },
    { vendedor: 'Bob', valor: 50 },
    { vendedor: 'Charlie', valor: 300 }
  ];
  
  let totalVendasPorVendedor = sumarizarVendas(vendas);
  console.log(totalVendasPorVendedor);