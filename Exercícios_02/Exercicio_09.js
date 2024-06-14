//Exercício 09
/*Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
funcionário.*/

const prompt = require("prompt-sync")();

function calcularTotalSalarios() {
    let totalHomens = 0;
    let totalMulheres = 0;
    let continuar = true;

    while (continuar) {
        const salario = parseFloat(prompt("Informe o salário do funcionário: "));
        const sexo = prompt("Informe o sexo do funcionário (M/F): ").toUpperCase();

        if (sexo === "M") {
            totalHomens += salario;
        } else if (sexo === "F") {
            totalMulheres += salario;
        } else {
            console.log("Sexo inválido.");
        }

        const continuarResposta = prompt("Deseja continuar? (S/N): ").toUpperCase();
        if (continuarResposta !== "S") {
            continuar = false;
        }
    }

    console.log(`Total pago aos homens: R$ ${totalHomens.toFixed(2)}`);
    console.log(`Total pago às mulheres: R$ ${totalMulheres.toFixed(2)}`);
}

calcularTotalSalarios();
