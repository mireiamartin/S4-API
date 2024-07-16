// Declaración global array jokes
const reportAcudits: { joke: string, score?: number, date: string }[] = [];

document.addEventListener('DOMContentLoaded', () => {
    const jokeContent = document.querySelector('#jokeContent') as HTMLElement;
    const nextJokeButton = document.querySelector('#nextJoke') as HTMLElement;

    //Function para obtener un chiste desde la API
    const apiJoke = async () => {
        try {
            const response = await fetch("https://icanhazdadjoke.com/slack", {
                headers: {
                    'Accept': 'application/json'
                }
            });
            const data = await response.json();
            const randomJoke = data.attachments[0].text;
            jokeContent.innerHTML = randomJoke;

            const currentDate = new Date().toISOString();
            const currentJoke = { joke: randomJoke, date: currentDate };
            reportAcudits.push(currentJoke);
            console.log(reportAcudits);
        } catch (error) {
            console.error("Error fetching joke:", error);
        }
    };

    apiJoke();

    nextJokeButton.addEventListener('click', apiJoke);
});

// Declaración de un arreglo global para guardar las puntuaciones
let scores: number[] = [];

function saveScore(puntuacion: number) {

    //Obtener el último chiste del array
    const lastJoke = reportAcudits.length - 1;
    if (lastJoke >= 0) {
        reportAcudits[lastJoke].score = puntuacion;
    }

    scores.push(puntuacion);

    console.log(reportAcudits);
}

const buttonScore1 = document.getElementById('button1');
const buttonScore2 = document.getElementById('button2');
const buttonScore3 = document.getElementById('button3');

buttonScore1?.addEventListener('click', () => {
    saveScore(1);
});

buttonScore2?.addEventListener('click', () => {
    saveScore(2);
});

buttonScore3?.addEventListener('click', () => {
    saveScore(3);
});