//Exercício 39
/*Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o
vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B.*/

const prompt = require('prompt-sync')();

function lerVetorA() {
    const vetorA = [];
    console.log("Digite os 100 elementos do vetor A:");
    for (let i = 0; i < 100; i++) {
        vetorA[i] = parseInt(prompt(`Elemento ${i + 1}: `));
    }
    return vetorA;
}

function compactarVetor(vetorA) {
    const vetorB = [];
    let j = 0;
    for (let i = 0; i < vetorA.length; i++) {
        if (vetorA[i] > 0) {
            vetorB[j++] = vetorA[i];
        }
    }
    return vetorB;
}

function mainExercicio39() {
    const vetorA = lerVetorA();
    const vetorB = compactarVetor(vetorA);

    console.log("Vetor A:");
    console.log(vetorA);

    console.log("\nVetor B (após compactação):");
    console.log(vetorB);
}

mainExercicio39();