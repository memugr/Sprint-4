// Variables
const jokes = document.querySelector('.joke') as HTMLElement;
const btnNextJoke = document.getElementById('btn_nextjoke') as HTMLButtonElement;
const btnStart = document.getElementById('btn_start') as HTMLButtonElement;

// Set initial button visibility
btnNextJoke.style.display = 'none';
btnStart.style.display = 'inline-block';

const generateJokes = async () => {
    try {
        const setHeader = {
            headers: {
                Accept: "application/json"
            }
        }

        // Fetching API with async await
        const url = "https://icanhazdadjoke.com";
        const res = await fetch(url, setHeader);
        const data = await res.json();

        // Display the joke
        if (jokes) {
            jokes.innerHTML = data.joke;
        }

        // Toggle button visibility
        btnNextJoke.style.display = 'inline-block';
        btnStart.style.display = 'none';
    }
    catch (error) {
        console.log(`The error is ${error}`);
    }
}

// Add event listener to the "Start" button
if (btnStart) {
    btnStart.addEventListener('click', generateJokes)
}
// Event listener for "Next Joke" button
if (btnNextJoke) {
    btnNextJoke.addEventListener('click', generateJokes)
}
