//Exercício 23
/*Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da
diagonal principal são iguais a 1 e os demais são nulos.*/

function criarMatrizIdentidade(dimensao) {
    const matriz = [];

    for (let i = 0; i < dimensao; i++) {
        matriz[i] = [];
        for (let j = 0; j < dimensao; j++) {
            if (i === j) {
                matriz[i][j] = 1;
            } else {
                matriz[i][j] = 0;
            }
        }
    }

    return matriz;
}

const dimensao = 7;
const matrizIdentidade = criarMatrizIdentidade(dimensao);

console.log("Matriz Identidade MI[1..7,1..7]:");
for (let i = 0; i < dimensao; i++) {
    console.log(matrizIdentidade[i].join(" "));
}
