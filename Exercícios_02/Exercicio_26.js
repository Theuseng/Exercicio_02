//Exercício 26
/*Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto
P[1..3,1..5].*/

function multiplicarMatrizes(A, B) {
    const numLinhasA = A.length;
    const numColunasA = A[0].length;
    const numLinhasB = B.length;
    const numColunasB = B[0].length;

    if (numColunasA !== numLinhasB) {
        throw new Error("Número de colunas de A deve ser igual ao número de linhas de B.");
    }

    const P = [];

    for (let i = 0; i < numLinhasA; i++) {
        P[i] = [];
        for (let j = 0; j < numColunasB; j++) {
            P[i][j] = 0;
            for (let k = 0; k < numColunasA; k++) {
                P[i][j] += A[i][k] * B[k][j];
            }
        }
    }

    return P;
}

const A = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15]
];

const B = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0]
];

const P = multiplicarMatrizes(A, B);

console.log("Matriz Produto P[1..3,1..5]:");
for (let i = 0; i < P.length; i++) {
    console.log(P[i].join(" "));
}
