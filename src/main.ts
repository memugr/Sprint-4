// GENERATE JOKES 1
// Variables
const jokes = document.querySelector('.joke') as HTMLElement;
const btnNextJoke = document.getElementById('btn_nextjoke') as HTMLButtonElement;
const btnStart = document.getElementById('btn_start') as HTMLButtonElement;
const messageElement = document.getElementById('message') as HTMLElement;

// Set initial button visibility
btnNextJoke.style.display = 'none';
btnStart.style.display = 'inline-block';

// Generate jokes from the API
const generateJokes = async () => {
    try {
        const setHeader = {
            headers: {
                Accept: "application/json"
            }
        };

        // Fetching API with async await
        const url = "https://icanhazdadjoke.com";
        const res = await fetch(url, setHeader);
        const data = await res.json();

        // Display the joke
        if (jokes) {
            jokes.innerHTML = data.joke;
        }

        // Clear the previous message
        messageElement.innerHTML = '';

        // Toggle button visibility
        btnNextJoke.style.display = 'inline-block';
        btnStart.style.display = 'none';

        // Enable score buttons
        enableScoreButtons();
    }
    catch (error) {
        console.log(`The error is ${error}`);
    }
}

// Enable score buttons
function enableScoreButtons(): void {
    document.querySelectorAll('.score .btn').forEach(button => {
        (button as HTMLButtonElement).disabled = false; // Enable buttons
    });
}

// GENERATE JOKES 2: CHUCK NORRIS
const generateJokes2 = async () => {
    try {
        const urlAPI = "https://api.chucknorris.io/jokes/random";
        const res = await fetch(urlAPI);
        const data = await res.json();
        
        // Display the joke
        if (jokes) {
            jokes.innerHTML = data.value;
        }

        // Clear the previous message
        messageElement.innerHTML = '';

        // Enable score buttons
        enableScoreButtons();

    } catch (error) {
        console.log(`The error is ${error}`);
    }
}

// Function to call a random joke generator and change background
const jokeCalling = () => {
    [generateJokes, generateJokes2][Math.floor(Math.random() * 2)]();
    backgroundChange();
}

// Event listeners for the "Start" & "Next Joke" buttons
if (btnStart) btnStart.addEventListener('click', jokeCalling);
if (btnNextJoke) btnNextJoke.addEventListener('click', jokeCalling);

// REPORT JOKES
interface JokeResult {
    joke: string;
    score: number;
    date: string;
}

// Array of results
const reportJokes: JokeResult[] = []

// Random messages for each score
const messages: { [key: number]: string[] } = {
    1: ["Oh, that's unfortunate.",
        "Better luck next time.",
        "Not funny at all!",
        "I hope the next joke is better!",
        "I'm sorry to hear that.",
        "*cries*",
        "I did not put that one!"],

    2: ["It's okay, I guess.",
        "A bit of a chuckle!",
        "Not too bad!",
        "Meh.",
        "I'm speechless… almost.",
        "Wasn't it enough?",
        "It could be better"],

    3: ["Hilarious!",
        "What a joke indeed!",
        "Comedy gold here, right?!",
        "Brilliant!",
        "The next one's gonna be better!",
        "Good one!",
        "Awesome!"]
};

// Function for handling each emoji button click
function report(score: number): void {
    const report: JokeResult = {
        joke: jokes.innerHTML,
        score: score,
        date: new Date().toISOString()
    }

    // Add each report to the array
    reportJokes.push(report);
    console.log(reportJokes);

    // Display a random message based on the score
    const scoreMessages = messages[score];
    const randomMessage = scoreMessages[Math.floor(Math.random() * scoreMessages.length)];
    messageElement.innerHTML = randomMessage;
}

// Disable score buttons initially
document.querySelectorAll('.score .btn').forEach(button => {
    (button as HTMLButtonElement).disabled = true; // Disable buttons
});

// WEATHER API
let tempWeather: string;

const weather = async () => {
    try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=41.389&lon=2.159&units=metric&appid=e7704bc895b4a8d2dfd4a29d404285b6');
        const data = await response.json();
        tempWeather = data.main.temp.toFixed(0) + 'ºC';
        const ico = data.weather[0].icon;

        document.getElementById('temperature')!.innerHTML = tempWeather;

        const icoURL = `http://openweathermap.org/img/w/${ico}.png`;
        const icoElement = document.createElement('img');
        icoElement.src = icoURL;
        document.getElementById('iconWeather')!.appendChild(icoElement);

    } catch (error) {
        console.log("Error calling API:", error)
    }
};

weather()

// BACKGROUND CHANGE
function backgroundChange() {
    const blobs: string[] = [
        "img/blob1.svg",
        "img/blob2.svg",
        "img/blob3.svg",
        "img/blob4.svg",
        "img/blob5.svg",
        "img/blob6.svg",
        "img/blob7.svg",
        "img/blob8.svg",
    ]

    const randomBackground: number = Math.floor(Math.random() * blobs.length);
    const selectedBlob: string = blobs[randomBackground];
    const blobElement = document.querySelector(".blob") as HTMLElement; 
    if (blobElement) {
        blobElement.style.backgroundImage = `url(${selectedBlob})`
    }
}
