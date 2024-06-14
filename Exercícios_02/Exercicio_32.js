//Exercício 32
/*Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de
cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a
matriz lida e a modificada.*/

const prompt = require('prompt-sync')();

function criarMatriz12x13() {
    const matriz = [];
    for (let i = 0; i < 12; i++) {
        matriz[i] = [];
        for (let j = 0; j < 13; j++) {
            matriz[i][j] = parseFloat(prompt(`Digite o valor para M[${i + 1}][${j + 1}]: `));
        }
    }
    return matriz;
}

function dividirLinhasPeloMaiorElemento(matriz) {
    for (let i = 0; i < 12; i++) {
        let maiorElemento = Math.max(...matriz[i].map(Math.abs)); 
        if (maiorElemento === 0) maiorElemento = 1; 

        for (let j = 0; j < 13; j++) {
            matriz[i][j] /= maiorElemento;
        }
    }
    return matriz;
}

function mainExercicio32() {
    console.log("Preencha a matriz M[12][13]:");
    const matriz = criarMatriz12x13();

    const matrizModificada = dividirLinhasPeloMaiorElemento(matriz);

    console.log("\nMatriz original:");
    console.table(matriz);

    console.log("\nMatriz modificada (linhas divididas pelo maior elemento em módulo da linha):");
    console.table(matrizModificada);
}

mainExercicio32();
