"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Declaración global array jokes
const reportAcudits = [];
document.addEventListener('DOMContentLoaded', () => {
    const jokeContent = document.querySelector('#jokeContent');
    const nextJokeButton = document.querySelector('#nextJoke');
    //Function para obtener un chiste desde la API
    const apiJoke = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield fetch("https://icanhazdadjoke.com/slack", {
                headers: {
                    'Accept': 'application/json'
                }
            });
            const data = yield response.json();
            const randomJoke = data.attachments[0].text;
            jokeContent.innerHTML = randomJoke;
            const currentDate = new Date().toISOString();
            const currentJoke = { joke: randomJoke, date: currentDate };
            reportAcudits.push(currentJoke);
            console.log(reportAcudits);
        }
        catch (error) {
            console.error("Error fetching joke:", error);
        }
    });
    apiJoke();
    nextJokeButton.addEventListener('click', apiJoke);
});
// Declaración de un array global para guardar las puntuaciones
function saveScore(puntuacion) {
    //Obtener el último chiste del array
    const lastJoke = reportAcudits.length - 1;
    if (lastJoke >= 0) {
        reportAcudits[lastJoke].score = puntuacion;
    }
    console.log(reportAcudits);
}
const buttonScore1 = document.getElementById('button1');
const buttonScore2 = document.getElementById('button2');
const buttonScore3 = document.getElementById('button3');
buttonScore1 === null || buttonScore1 === void 0 ? void 0 : buttonScore1.addEventListener('click', () => {
    saveScore(1);
});
buttonScore2 === null || buttonScore2 === void 0 ? void 0 : buttonScore2.addEventListener('click', () => {
    saveScore(2);
});
buttonScore3 === null || buttonScore3 === void 0 ? void 0 : buttonScore3.addEventListener('click', () => {
    saveScore(3);
});
