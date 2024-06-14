//Exercício 10
/*Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
a) O somatório entre todos os valores;
b) Qual foi o menor valor digitado;
c) A média entre todos os valores;
d) Quantos valores são pares.*/

const prompt = require("prompt-sync")();

function lerNumeros() {
    let soma = 0;
    let menor = Number.MAX_SAFE_INTEGER;
    let totalValores = 0;
    let totalPares = 0;
    let continuar = true;

    do {
        const numero = parseFloat(prompt("Informe um número:"));
        soma += numero;
        totalValores++;

        if (numero < menor) {
            menor = numero;
        }

        if (numero % 2 === 0) {
            totalPares++;
        }

        continuar = prompt("Deseja continuar? (S/N)").toUpperCase() === "S";
    } while (continuar);

    const media = soma / totalValores;
    console.log(`Somatório: ${soma}`);
    console.log(`Menor valor: ${menor}`);
    console.log(`Média: ${media.toFixed(2)}`);
    console.log(`Total de valores pares: ${totalPares}`);
}

lerNumeros();
