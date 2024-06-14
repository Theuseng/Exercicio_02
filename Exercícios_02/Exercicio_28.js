//Exercício 28
/*Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no
item:
a) a soma dos elementos acima da diagonal principal;
b) a soma dos elementos abaixo da diagonal principal;*/

const prompt = require('prompt-sync')();

function criarMatriz() {
    const matriz = [];
    for (let i = 0; i < 10; i++) {
        matriz[i] = [];
        for (let j = 0; j < 10; j++) {
            matriz[i][j] = parseFloat(prompt(`Digite o valor para M[${i + 1}][${j + 1}]: `));
        }
    }
    return matriz;
}

function calcularSomasDiagonalPrincipal(matriz) {
    let somaAcimaDiagonal = 0;
    let somaAbaixoDiagonal = 0;

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (i < j) {
                somaAcimaDiagonal += matriz[i][j];
            } else if (i > j) {
                somaAbaixoDiagonal += matriz[i][j];
            }
        }
    }

    return { somaAcimaDiagonal, somaAbaixoDiagonal };
}

function mainExercicio28() {
    console.log("Preencha a matriz 10x10:");
    const matriz = criarMatriz();
    const { somaAcimaDiagonal, somaAbaixoDiagonal } = calcularSomasDiagonalPrincipal(matriz);

    console.log("\nMatriz inserida:");
    console.table(matriz);

    console.log(`\nSoma dos elementos acima da diagonal principal: ${somaAcimaDiagonal}`);
    console.log(`Soma dos elementos abaixo da diagonal principal: ${somaAbaixoDiagonal}`);
}

mainExercicio28();
