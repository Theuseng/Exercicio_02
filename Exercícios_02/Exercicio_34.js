//Exercício 34
/*Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique
cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as
multiplicações.*/

function criarMatriz50x50() {
    const matriz = [];
    for (let i = 0; i < 50; i++) {
        matriz[i] = [];
        for (let j = 0; j < 50; j++) {
            matriz[i][j] = Math.random() * 100;
        }
    }
    return matriz;
}

function multiplicarLinhasPeloElementoDiagonal(matriz) {
    for (let i = 0; i < 50; i++) {
        const elementoDiagonal = matriz[i][i];
        for (let j = 0; j < 50; j++) {
            matriz[i][j] *= elementoDiagonal;
        }
    }
    return matriz;
}

function mainExercicio34() {
    const matriz = criarMatriz50x50();
    const matrizModificada = multiplicarLinhasPeloElementoDiagonal(matriz);

    console.log("Matriz original (primeiras 5 linhas e 5 colunas):");
    console.table(matriz.slice(0, 5).map(row => row.slice(0, 5)));

    console.log("\nMatriz modificada (primeiras 5 linhas e 5 colunas após multiplicação):");
    console.table(matrizModificada.slice(0, 5).map(row => row.slice(0, 5)));
}

mainExercicio34();
