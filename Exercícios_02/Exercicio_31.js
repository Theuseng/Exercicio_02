//Exercício 31
/*Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros.
Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo
todos os elementos de V diferentes de A. Mostre os resultados.*/

const prompt = require('prompt-sync')();


function criarMatriz30x30() {
    const matriz = [];
    for (let i = 0; i < 30; i++) {
        matriz[i] = [];
        for (let j = 0; j < 30; j++) {
            matriz[i][j] = parseInt(prompt(`Digite o valor para V[${i + 1}][${j + 1}]: `));
        }
    }
    return matriz;
}

function contarValoresEExcluir(matriz, A) {
    const X = [];
    let countA = 0;

    for (let i = 0; i < 30; i++) {
        X[i] = [];
        for (let j = 0; j < 30; j++) {
            if (matriz[i][j] === A) {
                countA++;
            } else {
                X[i].push(matriz[i][j]);
            }
        }
    }

    return { countA, X };
}

function mainExercicio31() {
    const A = parseInt(prompt("Digite o valor de A: "));
    console.log("Preencha a matriz V[30][30]:");
    const matriz = criarMatriz30x30();

    const { countA, X } = contarValoresEExcluir(matriz, A);

    console.log(`\nQuantidade de valores iguais a ${A} na matriz: ${countA}`);
    console.log("\nMatriz X sem os valores iguais a A:");
    console.table(X);
}

mainExercicio31();
