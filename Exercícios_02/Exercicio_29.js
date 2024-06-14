//Exercício 29
/*Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
a) da linha 4 de M;
b) da coluna 2 de M;
c) da diagonal principal;
d) todos os elementos da matriz M.
Escrever essas somas e a matriz.*/

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

function calcularSomasExercicio29(matriz) {
    const resultado = {
        somaLinha4: 0,
        somaColuna2: 0,
        somaDiagonalPrincipal: 0,
        somaTotal: 0
    };

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            resultado.somaTotal += matriz[i][j];

            if (i === 3) { 
                resultado.somaLinha4 += matriz[i][j];
            }

            if (j === 1) { 
                resultado.somaColuna2 += matriz[i][j];
            }

            if (i === j) { 
                resultado.somaDiagonalPrincipal += matriz[i][j];
            }
        }
    }

    return resultado;
}

function mainExercicio29() {
    console.log("Preencha a matriz 5x5:");
    const matriz = criarMatriz5x5();
    const resultado = calcularSomasExercicio29(matriz);

    console.log("\nMatriz inserida:");
    console.table(matriz);

    console.log(`\nSoma da linha 4: ${resultado.somaLinha4}`);
    console.log(`Soma da coluna 2: ${resultado.somaColuna2}`);
    console.log(`Soma da diagonal principal: ${resultado.somaDiagonalPrincipal}`);
    console.log(`Soma total da matriz: ${resultado.somaTotal}`);
}

mainExercicio29();
