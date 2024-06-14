//Exercício 22
/*A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando
dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um
número não determinado de pessoas e retorne a média de salário da população, a média do número de filhos, o maior salário e o percentual de pessoas com salário até R$
350,00.*/

const prompt = require("prompt-sync")();

function analisarDadosPessoas() {
    const pessoas = [];
    const totalPessoas = 3; 

    for (let i = 0; i < totalPessoas; i++) {
        console.log(`Pessoa ${i + 1}:`);
        const salario = parseFloat(prompt("Digite o salário: "));
        const numFilhos = parseInt(prompt("Digite o número de filhos: "));
        pessoas.push({ salario: salario, numFilhos: numFilhos });
    }

    let somaSalarios = 0;
    let somaFilhos = 0;
    let maiorSalario = 0;
    let numPessoasAte350 = 0;

    for (let pessoa of pessoas) {
        somaSalarios += pessoa.salario;
        somaFilhos += pessoa.numFilhos;

        if (pessoa.salario > maiorSalario) {
            maiorSalario = pessoa.salario;
        }

        if (pessoa.salario <= 350) {
            numPessoasAte350++;
        }
    }

    const mediaSalarios = somaSalarios / totalPessoas;
    const mediaFilhos = somaFilhos / totalPessoas;
    const percentualAte350 = (numPessoasAte350 / totalPessoas) * 100;

    console.log(`Média de salário da população: R$ ${mediaSalarios.toFixed(2)}`);
    console.log(`Média do número de filhos: ${mediaFilhos.toFixed(2)}`);
    console.log(`Maior salário: R$ ${maiorSalario.toFixed(2)}`);
    console.log(`Percentual de pessoas com salário até R$ 350,00: ${percentualAte350.toFixed(2)}%`);
}

analisarDadosPessoas();
