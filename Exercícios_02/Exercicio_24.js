//Exercício 24
/*Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
quantidade de elementos negativos da linha correspondente de M.*/

function contarNegativosPorLinha(matriz) {
    const vetorC = [];

    for (let i = 0; i < matriz.length; i++) {
        let count = 0;
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] < 0) {
                count++;
            }
        }
        vetorC.push(count);
    }

    return vetorC;
}

const matrizM = [
    [1, 2, -3, 4, -5, 6, -7, 8],
    [9, -10, 11, -12, 13, 14, 15, 16],
    [-17, 18, 19, -20, 21, 22, -23, 24]
];

const vetorC = contarNegativosPorLinha(matrizM);

console.log("Vetor C:");
console.log(vetorC);
