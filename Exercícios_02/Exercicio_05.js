//Exercício 05
//Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).

const prompt = require("prompt-sync")();

function jogarJoKenPo() {
    console.log("Escolha: 1 para Pedra, 2 para Papel, 3 para Tesoura");
    const escolhaUsuario = parseInt(prompt("Sua escolha: "));
    const escolhaComputador = Math.floor(Math.random() * 3) + 1;

    if (escolhaUsuario < 1 || escolhaUsuario > 3) {
        console.log("Escolha inválida. Tente novamente.");
        return;
    }

    console.log(`Computador escolheu: ${escolhaComputador}`);

    if (escolhaUsuario === escolhaComputador) {
        console.log("Empate!");
    } else if (
        (escolhaUsuario === 1 && escolhaComputador === 3) ||
        (escolhaUsuario === 2 && escolhaComputador === 1) ||
        (escolhaUsuario === 3 && escolhaComputador === 2)
    ) {
        console.log("Você ganhou!");
    } else {
        console.log("Você perdeu!");
    }
}

jogarJoKenPo();
