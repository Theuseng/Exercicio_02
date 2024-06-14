//Exercício 06
//Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai tentar descobrir qual foi o valor sorteado.

const prompt = require("prompt-sync")();

function jogoAdivinhacao() {
    const numeroAleatorio = Math.floor(Math.random() * 5) + 1;
    let tentativas = 3;

    console.log("Adivinhe o número de 1 a 5!");

    while (tentativas > 0) {
        const palpite = parseInt(prompt(`Tentativa(s) restante(s): ${tentativas}. Palpite: `));

        if (palpite === numeroAleatorio) {
            console.log("Parabéns, você acertou!");
            return;
        } else {
            console.log("Tente novamente.");
            tentativas--;
        }
    }

    console.log(`Suas tentativas acabaram. O número era ${numeroAleatorio}.`);
}

jogoAdivinhacao();
