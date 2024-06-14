//Exercício 40
/*Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao
resultado oficial da Loto. A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiros
cada), representando as apostas feitas. Compare os números das apostas com o
resultado oficial e mostre uma mensagem ("Ganhador") se todos os números
corresponderem ao resultado oficial. (Observação: não é necessário procurar por ternos
e quadras, apenas por quinas.)*/

const prompt = require('prompt-sync')();

function lerResultadoOficial() {
    const resultadoOficial = [];
    console.log("Digite os 5 números do resultado oficial:");
    for (let i = 0; i < 5; i++) {
        resultadoOficial[i] = parseInt(prompt(`Número ${i + 1}: `));
    }
    return resultadoOficial;
}

function lerApostas() {
    const apostas = [];
    for (let jogador = 1; jogador <= 50; jogador++) {
        const aposta = [];
        console.log(`\nJogador ${jogador}:`);
        for (let i = 0; i < 5; i++) {
            aposta[i] = parseInt(prompt(`Aposta ${i + 1}: `));
        }
        apostas.push(aposta);
    }
    return apostas;
}

function verificarGanhador(resultadoOficial, apostas) {
    for (let i = 0; i < apostas.length; i++) {
        let ganhou = true;
        for (let j = 0; j < 5; j++) {
            if (apostas[i][j] !== resultadoOficial[j]) {
                ganhou = false;
                break;
            }
        }
        if (ganhou) {
            console.log(`\nJogador ${i + 1} é o GANHADOR!`);
        }
    }
}

function mainExercicio40() {
    const resultadoOficial = lerResultadoOficial();
    const apostas = lerApostas();
    verificarGanhador(resultadoOficial, apostas);
}

mainExercicio40();