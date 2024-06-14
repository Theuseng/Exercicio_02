//Exercício 37
/*Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa
o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de
respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do
aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12;
e mostre uma mensagem de “REPROVADO”, caso contrário.*/

const prompt = require('prompt-sync')();

function lerGabarito() {
    const gabarito = [];
    console.log("Digite o gabarito da prova:");
    for (let i = 0; i < 20; i++) {
        gabarito[i] = prompt(`Questão ${i + 1}: `);
    }
    return gabarito;
}

function lerRespostas(numeroAluno) {
    const respostas = [];
    console.log(`Digite as respostas do aluno ${numeroAluno}:`);
    for (let i = 0; i < 20; i++) {
        respostas[i] = prompt(`Questão ${i + 1}: `);
    }
    return respostas;
}

function contarAcertos(gabarito, respostas) {
    let acertos = 0;
    for (let i = 0; i < 20; i++) {
        if (gabarito[i] === respostas[i]) {
            acertos++;
        }
    }
    return acertos;
}

function mainExercicio40() {

    const gabarito = lerGabarito();

    for (let aluno = 1; aluno <= 50; aluno++) {
        console.log(`\nAluno ${aluno}:`);
        const respostas = lerRespostas(aluno);
        const acertos = contarAcertos(gabarito, respostas);
        
        console.log(`Número de acertos: ${acertos}`);
        
        if (acertos >= 12) {
            console.log("APROVADO");
        } else {
            console.log("REPROVADO");
        }
    }
}

mainExercicio40();