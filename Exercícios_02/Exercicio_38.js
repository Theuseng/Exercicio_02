//Exercício 38
/*Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra
variável identificadora que calcule a operação conforme a informação contida nesta
variável:
1- soma dos elementos;
2- produto dos elementos;
3- média dos elementos;
4- ordene os elementos em ordem crescente;
5- mostre o vetor.*/

const prompt = require('prompt-sync')();

function lerVetor() {
    const vetor = [];
    console.log("Digite os 6 elementos do vetor:");
    for (let i = 0; i < 6; i++) {
        vetor[i] = parseFloat(prompt(`Elemento ${i + 1}: `));
    }
    return vetor;
}

function somaElementos(vetor) {
    let soma = 0;
    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i];
    }
    return soma;
}

function produtoElementos(vetor) {
    let produto = 1;
    for (let i = 0; i < vetor.length; i++) {
        produto *= vetor[i];
    }
    return produto;
}

function mediaElementos(vetor) {
    const soma = somaElementos(vetor);
    const media = soma / vetor.length;
    return media;
}

function ordenarVetor(vetor) {
    return vetor.slice().sort((a, b) => a - b);
}

function mostrarVetor(vetor) {
    console.log("Vetor:", vetor);
}

function mainExercicio38() {
    const vetor = lerVetor();
    const operacao = parseInt(prompt(`Escolha a operação a ser realizada:
1- Soma dos elementos
2- Produto dos elementos
3- Média dos elementos
4- Ordenar os elementos em ordem crescente
5- Mostrar o vetor

Digite o número da operação desejada: `));

    switch (operacao) {
        case 1:
            console.log("Soma dos elementos:", somaElementos(vetor));
            break;
        case 2:
            console.log("Produto dos elementos:", produtoElementos(vetor));
            break;
        case 3:
            console.log("Média dos elementos:", mediaElementos(vetor));
            break;
        case 4:
            console.log("Vetor ordenado:", ordenarVetor(vetor));
            break;
        case 5:
            mostrarVetor(vetor);
            break;
        default:
            console.log("Operação inválida.");
    }
}

mainExercicio38();
