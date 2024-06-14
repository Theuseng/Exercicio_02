//Exercício 03
/*Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
R$ 0.45 para viagens mais longas.*/

const prompt = require("prompt-sync")();

function calcularPrecoPassagem() {
    const distancia = parseInt(prompt("Qual é a distância que você deseja percorrer (em km)? "));

    if (distancia <= 200) {
        const preco = distancia * 0.5;
        console.log(`O preço da passagem é R$ ${preco.toFixed(2)}.`);
    } else {
        const preco = distancia * 0.45;
        console.log(`O preço da passagem é R$ ${preco.toFixed(2)}.`);
    }
}

calcularPrecoPassagem();
