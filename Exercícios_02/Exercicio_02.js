//Exercício 02
/*Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km 
h^-1, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.*/

const prompt = require("prompt-sync")();

function verificarMultaVelocidade() {
    const velocidade = parseInt(prompt("Qual é a velocidade do carro (em km/h)? "));

    if (velocidade > 80) {
        const valorMulta = (velocidade - 80) * 5;
        console.log(`Você foi multado! O valor da multa é R$ ${valorMulta.toFixed(2)}.`);
    } else {
        console.log("Você está dentro do limite de velocidade.");
    }
}

verificarMultaVelocidade();
