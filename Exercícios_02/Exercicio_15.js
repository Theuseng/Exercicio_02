//Exercício 15
/*Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
final, mostre quais são os números pares que foram digitados e em que posições eles
estão armazenados.*/

const prompt = require("prompt-sync")();

function encontrarNumerosPares() {
    const numeros = [];
    const quantidadeNumeros = 10;

    for (let i = 0; i < quantidadeNumeros; i++) {
        const numero = parseInt(prompt(`Digite o ${i + 1}º número inteiro: `));
        numeros.push(numero);
    }

    const numerosPares = [];
    for (let i = 0; i < quantidadeNumeros; i++) {
        if (numeros[i] % 2 === 0) {
            numerosPares.push({
                numero: numeros[i],
                posicao: i + 1
            });
        }
    }

    console.log("Números pares encontrados e suas posições:");
    numerosPares.forEach(item => {
        console.log(`Número ${item.numero} na posição ${item.posicao}`);
    });
}

encontrarNumerosPares();
