//Exercício 07
/*Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
(popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
mostre o preço a ser pago de acordo com os dados a seguir:
Carros populares
- Até 100 Km percorridos: R$ 0,20 por Km
- Acima de 100 Km percorridos: R$ 0,10 por Km
Carros de luxo
- Até 200 Km percorridos: R$ 0,30 por Km
- Acima de 200 Km percorridos: R$ 0,25 por Km*/

const prompt = require("prompt-sync")();

function calcularAluguelCarro() {
    const tipoCarro = prompt("Qual é o tipo do carro (popular ou luxo)? ").toLowerCase();
    const diasAluguel = parseInt(prompt("Quantos dias de aluguel? "));
    const kmPercorridos = parseInt(prompt("Quantos Km foram percorridos? "));

    let precoBase = 0;
    let precoKm = 0;

    if (tipoCarro === "popular") {
        precoBase = 90 * diasAluguel;
        if (kmPercorridos <= 100) {
            precoKm = kmPercorridos * 0.2;
        } else {
            precoKm = 100 * 0.2 + (kmPercorridos - 100) * 0.1;
        }
    } else if (tipoCarro === "luxo") {
        precoBase = 150 * diasAluguel;
        if (kmPercorridos <= 200) {
            precoKm = kmPercorridos * 0.3;
        } else {
            precoKm = 200 * 0.3 + (kmPercorridos - 200) * 0.25;
        }
    } else {
        console.log("Tipo de carro inválido.");
        return;
    }

    const precoTotal = precoBase + precoKm;
    console.log(`O preço a ser pago é R$ ${precoTotal.toFixed(2)}.`);
}

calcularAluguelCarro();
