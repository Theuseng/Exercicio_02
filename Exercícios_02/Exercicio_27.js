//Exercício 27
/*Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura,
multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em
um vetor V(36). Escrever o vetor V no final.*/

const prompt = require('prompt-sync')();

function multiplicarMatrizPorA(M, A) {
    const V = [];
    let index = 0;

    for (let i = 0; i < M.length; i++) {
        for (let j = 0; j < M[i].length; j++) {
            const valorMultiplicado = M[i][j] * A;
            V[index++] = valorMultiplicado;
        }
    }

    return V;
}

function main() {

    const M = [];
    for (let i = 0; i < 6; i++) {
        M[i] = [];
        for (let j = 0; j < 6; j++) {
            M[i][j] = parseInt(prompt(`Digite o valor M[${i + 1}][${j + 1}]: `));
        }
    }

    const A = parseFloat(prompt("Digite o valor A: "));

    const V = multiplicarMatrizPorA(M, A);

    console.log("Vetor V:");
    console.log(V);
}

main();
