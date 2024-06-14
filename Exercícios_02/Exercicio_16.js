//Exercício 16
/*Crie uma lógica que preencha um vetor de 20 posições com números aleatórios
(entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e
depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados.*/

function preencherVetorAleatorio(tamanho) {
    const vetor = [];
    for (let i = 0; i < tamanho; i++) {
        vetor.push(Math.floor(Math.random() * 100)); 
    }
    return vetor;
}

function ordenarVetor(vetor) {
    return vetor.sort((a, b) => a - b);
}

const tamanhoVetor = 20;
const vetorAleatorio = preencherVetorAleatorio(tamanhoVetor);
console.log("Vetor gerado aleatoriamente:");
console.log(vetorAleatorio);

const vetorOrdenado = ordenarVetor(vetorAleatorio);
console.log("Vetor ordenado:");
console.log(vetorOrdenado);
