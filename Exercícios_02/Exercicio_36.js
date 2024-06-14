//Exercício 36
/*Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de
um teste da loteria esportiva. Leia, a seguir, para cada um dos 100 apostadores, o número
do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o
número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva
o número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a
mensagem "Parabéns, tu foi o GANHADOR".*/

const prompt = require('prompt-sync')();

function lerGabarito() {
    const gabarito = [];
    for (let i = 0; i < 13; i++) {
        gabarito[i] = parseInt(prompt(`Digite a resposta correta para a questão ${i + 1}: `));
    }
    return gabarito;
}

function lerRespostas(numeroApostador) {
    const respostas = [];
    for (let i = 0; i < 13; i++) {
        respostas[i] = parseInt(prompt(`Digite a resposta do apostador ${numeroApostador} para a questão ${i + 1}: `));
    }
    return respostas;
}

function contarAcertos(gabarito, respostas) {
    let acertos = 0;
    for (let i = 0; i < 13; i++) {
        if (gabarito[i] === respostas[i]) {
            acertos++;
        }
    }
    return acertos;
}

function mainExercicio34() {

    console.log("Digite o gabarito:");
    const gabarito = lerGabarito();

    for (let apostador = 1; apostador <= 100; apostador++) {
        console.log(`Apostador ${apostador}:`);
        const respostas = lerRespostas(apostador);
        const acertos = contarAcertos(gabarito, respostas);
        
        console.log(`Número de acertos: ${acertos}`);
        
        if (acertos === 13) {
            console.log("Parabéns, você foi o GANHADOR!");
        }
        console.log(); 
    }
}

mainExercicio34();
