//Exercício 20
/*Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
Matrícula:
Nome:
Salário bruto:
Dedução INSS:
Salário líquido:
(Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do
INSS).*/

const prompt = require("prompt-sync")();

function calcularContracheque() {
    const numeroFuncionarios = 80; 
    const funcionarios = [];


    for (let i = 0; i < numeroFuncionarios; i++) {
        console.log(`Funcionário ${i + 1}:`);
        const matricula = prompt("Matrícula: ");
        const nome = prompt("Nome: ");
        const salarioBruto = parseFloat(prompt("Salário bruto: "));
        const deducaoINSS = salarioBruto * 0.12;
        const salarioLiquido = salarioBruto - deducaoINSS;

        funcionarios.push({
            matricula: matricula,
            nome: nome,
            salarioBruto: salarioBruto,
            deducaoINSS: deducaoINSS,
            salarioLiquido: salarioLiquido
        });

        console.log(); 
    }

    console.log("Contracheque dos funcionários:");
    funcionarios.forEach((funcionario, index) => {
        console.log(`Funcionário ${index + 1}:`);
        console.log(`Matrícula: ${funcionario.matricula}`);
        console.log(`Nome: ${funcionario.nome}`);
        console.log(`Salário bruto: R$ ${funcionario.salarioBruto.toFixed(2)}`);
        console.log(`Dedução INSS: R$ ${funcionario.deducaoINSS.toFixed(2)}`);
        console.log(`Salário líquido: R$ ${funcionario.salarioLiquido.toFixed(2)}`);
        console.log(); 
    });
}

calcularContracheque();
