//Exercício 19
/*Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
repetição. Escrever cada um deles no formato HH.MM.SS.*/

const prompt = require("prompt-sync")();

function validarHorarios() {
    const horarios = [];
    const quantidadeHorarios = 5;

    function lerHorario(i) {
        if (i < quantidadeHorarios) {
            const horario = prompt(`Digite o ${i + 1}º horário (HH:MM:SS): `);
            if (/^([01]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/.test(horario)) {
                horarios.push(horario);
                lerHorario(i + 1);
            } else {
                console.log("Horário inválido. Digite no formato HH:MM:SS.");
                lerHorario(i);
            }
        } else {
            console.log("Horários válidos digitados:");
            horarios.forEach((h, index) => {
                console.log(`${index + 1}: ${h}`);
            });
        }
    }

    lerHorario(0);
}

validarHorarios();
