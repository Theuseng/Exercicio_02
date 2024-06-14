//Exercício 33
/*Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os
elementos da diagonal principal com a média dos elementos da diagonal secundária.*/

const prompt = require('prompt-sync')();

function criarMatriz3x3() {
    const matriz = [];
    for (let i = 0; i < 3; i++) {
        matriz[i] = [];
        for (let j = 0; j < 3; j++) {
            matriz[i][j] = parseFloat(prompt(`Digite o valor para M[${i + 1}][${j + 1}]: `));
        }
    }
    return matriz;
}

function multiplicarDiagonalPelaMediaSecundaria(matriz) {
    let somaDiagonalSecundaria = 0;
    let countElementosDiagonalSecundaria = 0;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (i + j === 2) {
                somaDiagonalSecundaria += matriz[i][j];
                countElementosDiagonalSecundaria++;
            }
        }
    }

    const mediaDiagonalSecundaria = somaDiagonalSecundaria / countElementosDiagonalSecundaria;

    for (let i = 0; i < 3; i++) {
        matriz[i][i] *= mediaDiagonalSecundaria;
    }

    return matriz;
}

function mainExercicio33() {
    console.log("Preencha a matriz M[3][3]:");
    const matriz = criarMatriz3x3();

    const matrizModificada = multiplicarDiagonalPelaMediaSecundaria(matriz);

    console.log("\nMatriz original:");
    console.table(matriz);

    console.log("\nMatriz modificada (diagonal principal multiplicada pela média da diagonal secundária):");
    console.table(matrizModificada);
}

mainExercicio33();
