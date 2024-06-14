//Exercício 30
/*Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que
contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz
e os vetores criados.*/

const prompt = require("prompt-sync")();

function criarMatriz5x5() {
    const matriz = [];
    for (let i = 0; i < 5; i++) {
        matriz[i] = [];
        for (let j = 0; j < 5; j++) {
            matriz[i][j] = parseFloat(prompt(`Digite o valor para M[${i + 1}][${j + 1}]: `));
        }
    }
    return matriz;
}

function calcularSomasLinhasColunas(matriz) {
    const SL = [];
    const SC = [];

    for (let i = 0; i < 5; i++) {
        SL[i] = 0;
        SC[i] = 0;
        for (let j = 0; j < 5; j++) {
            SL[i] += matriz[i][j]; 
            SC[j] += matriz[i][j]; 
        }
    }

    return { SL, SC };
}

function mainExercicio30() {
    console.log("Preencha a matriz 5x5:");
    const matriz = criarMatriz5x5();
    const { SL, SC } = calcularSomasLinhasColunas(matriz);

    console.log("\nMatriz inserida:");
    console.table(matriz);

    console.log("\nVetor SL (soma das linhas):");
    console.log(SL);

    console.log("\nVetor SC (soma das colunas):");
    console.log(SC);
}

mainExercicio30();
