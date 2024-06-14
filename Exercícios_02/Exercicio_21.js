//Exercício 21
/*Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e
retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal
= 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.*/

function pesoIdeal(alt, sexo) {
    if (sexo === 'M') {
        return 72.7 * alt - 58;
    } else if (sexo === 'F') {
        return 62.1 * alt - 44.7;
    } else {
        return 'Sexo inválido. Informe M para masculino ou F para feminino.';
    }
}


const altura = 1.75;
const sexo = 'M'; 
const peso = pesoIdeal(altura, sexo);
console.log(`O peso ideal para uma pessoa do sexo ${sexo} com altura ${altura} m é ${peso.toFixed(2)} kg.`);
