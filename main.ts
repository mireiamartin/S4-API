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
            console.log(randomJoke)
        } catch (error) {
            console.error("Error fetching joke:", error);
        }
    };

    apiJoke();

    nextJokeButton.addEventListener('click', apiJoke);
});