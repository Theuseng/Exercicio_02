//Exercício 35
/*Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores
conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor
estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada
vetor pode ser preenchido quantas vezes forem necessárias.*/

const prompt = require('prompt-sync')();

function separarParesImpares() {
    const vetorPares = [];
    const vetorImpares = [];
    let countPares = 0;
    let countImpares = 0;
    let valor;

    for (let i = 1; i <= 30; i++) {
        valor = parseInt(prompt(`Digite o ${i}º valor: `));
        if (valor % 2 === 0) {
            vetorPares[countPares++] = valor;
            if (countPares === 5) {
                console.log("Vetor de pares completo:", vetorPares);
                countPares = 0;
            }
        } else {
            vetorImpares[countImpares++] = valor;
            if (countImpares === 5) {
                console.log("Vetor de ímpares completo:", vetorImpares);
                countImpares = 0;
            }
        }
    }

    console.log("Vetor de pares final:", vetorPares);
    console.log("Vetor de ímpares final:", vetorImpares);
}

separarParesImpares();
