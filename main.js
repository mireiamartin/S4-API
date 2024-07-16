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
            console.log(randomJoke);
        }
        catch (error) {
            console.error("Error fetching joke:", error);
        }
    });
    apiJoke();
    nextJokeButton.addEventListener('click', apiJoke);
});
