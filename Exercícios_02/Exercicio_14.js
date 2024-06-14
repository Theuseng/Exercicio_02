//Exercício 14
/*Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
que eles foram informados.*/


const prompt = require("prompt-sync")();

function listarNomesInversamente() {
    const nomes = [];
    const quantidadeNomes = 7;

    function lerNome(i) {
        if (i < quantidadeNomes) {
            const nome = prompt(`Digite o ${i + 1}º nome: `);
            nomes.push(nome);
            lerNome(i + 1);
        } else {
            console.log("Lista de nomes na ordem inversa:");
            for (let j = nomes.length - 1; j >= 0; j--) {
                console.log(nomes[j]);
            }
        }
    }

    lerNome(0);
}

listarNomesInversamente();

