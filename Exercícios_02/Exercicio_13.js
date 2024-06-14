//Exercício 13
/*Crie um programa que preencha automaticamente (usando lógica, não apenas
atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
da sequência de Fibonacci.*/

function preencherVetorFibonacci(tamanho) {
    const fib = [1, 1];
    for (let i = 2; i < tamanho; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

const tamanhoVetor = 15;
const vetorFibonacci = preencherVetorFibonacci(tamanhoVetor);
console.log(`Vetor preenchido com os ${tamanhoVetor} primeiros números da sequência de Fibonacci:`);
console.log(vetorFibonacci.join(", "));
