//Exercício 12
/*Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
Ex.: 1, 1, 2, 3, 5, 8, 13, 21.*/

function fibonacci(n) {
    const fib = [1, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

console.log("Os 10 primeiros elementos da sequência de Fibonacci são:");
const fibSequence = fibonacci(10);
console.log(fibSequence.join(", "));
