var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
// GENERATE JOKES 1
// Variables
var jokes = document.querySelector('.joke');
var btnNextJoke = document.getElementById('btn_nextjoke');
var btnStart = document.getElementById('btn_start');
var messageElement = document.getElementById('message');
// Set initial button visibility
btnNextJoke.style.display = 'none';
btnStart.style.display = 'inline-block';
// Generate jokes from the API
var generateJokes = function () { return __awaiter(_this, void 0, void 0, function () {
    var setHeader, url, res, data, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                setHeader = {
                    headers: {
                        Accept: "application/json"
                    }
                };
                url = "https://icanhazdadjoke.com";
                return [4 /*yield*/, fetch(url, setHeader)];
            case 1:
                res = _a.sent();
                return [4 /*yield*/, res.json()];
            case 2:
                data = _a.sent();
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
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                console.log("The error is ".concat(error_1));
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
// Enable score buttons
function enableScoreButtons() {
    document.querySelectorAll('.score .btn').forEach(function (button) {
        button.disabled = false; // Enable buttons
    });
}
// GENERATE JOKES 2: CHUCK NORRIS
var generateJokes2 = function () { return __awaiter(_this, void 0, void 0, function () {
    var urlAPI, res, data, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                urlAPI = "https://api.chucknorris.io/jokes/random";
                return [4 /*yield*/, fetch(urlAPI)];
            case 1:
                res = _a.sent();
                return [4 /*yield*/, res.json()];
            case 2:
                data = _a.sent();
                // Display the joke
                if (jokes) {
                    jokes.innerHTML = data.value;
                }
                // Clear the previous message
                messageElement.innerHTML = '';
                // Enable score buttons
                enableScoreButtons();
                return [3 /*break*/, 4];
            case 3:
                error_2 = _a.sent();
                console.log("The error is ".concat(error_2));
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
// Function to call a random joke generator and change background
var jokeCalling = function () {
    [generateJokes, generateJokes2][Math.floor(Math.random() * 2)]();
    backgroundChange();
};
// Event listeners for the "Start" & "Next Joke" buttons
if (btnStart)
    btnStart.addEventListener('click', jokeCalling);
if (btnNextJoke)
    btnNextJoke.addEventListener('click', jokeCalling);
// Array of results
var reportJokes = [];
// Random messages for each score
var messages = {
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
function report(score) {
    var report = {
        joke: jokes.innerHTML,
        score: score,
        date: new Date().toISOString()
    };
    // Add each report to the array
    reportJokes.push(report);
    console.log(reportJokes);
    // Display a random message based on the score
    var scoreMessages = messages[score];
    var randomMessage = scoreMessages[Math.floor(Math.random() * scoreMessages.length)];
    messageElement.innerHTML = randomMessage;
}
// Disable score buttons initially
document.querySelectorAll('.score .btn').forEach(function (button) {
    button.disabled = true; // Disable buttons
});
// WEATHER API
var tempWeather;
var weather = function () { return __awaiter(_this, void 0, void 0, function () {
    var response, data, ico, icoURL, icoElement, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, fetch('https://api.openweathermap.org/data/2.5/weather?lat=41.389&lon=2.159&units=metric&appid=e7704bc895b4a8d2dfd4a29d404285b6')];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                data = _a.sent();
                tempWeather = data.main.temp.toFixed(0) + 'ºC';
                ico = data.weather[0].icon;
                document.getElementById('temperature').innerHTML = tempWeather;
                icoURL = "http://openweathermap.org/img/w/".concat(ico, ".png");
                icoElement = document.createElement('img');
                icoElement.src = icoURL;
                document.getElementById('iconWeather').appendChild(icoElement);
                return [3 /*break*/, 4];
            case 3:
                error_3 = _a.sent();
                console.log("Error calling API:", error_3);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
weather();
// BACKGROUND CHANGE
function backgroundChange() {
    var blobs = [
        "img/blob1.svg",
        "img/blob2.svg",
        "img/blob3.svg",
        "img/blob4.svg",
        "img/blob5.svg",
        "img/blob6.svg",
        "img/blob7.svg",
        "img/blob8.svg",
    ];
    var randomBackground = Math.floor(Math.random() * blobs.length);
    var selectedBlob = blobs[randomBackground];
    var blobElement = document.querySelector(".blob");
    if (blobElement) {
        blobElement.style.backgroundImage = "url(".concat(selectedBlob, ")");
    }
}
