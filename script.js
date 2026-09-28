let seconds = 0;
let matchTime = document.getElementById("matchTime");
let timer;
let currentTeam = "A";

let teamATime = 0;
let teamBTime = 0;

let teamATimeDisplay = document.getElementById("teamATime");
let teamBTimeDisplay = document.getElementById("teamBTime");

let teamAPossessionDisplay = document.getElementById("teamApossesssion");
let teamBPossessionDisplay = document.getElementById("teamBpossesssion");

function startTimer() {
    timer = setInterval(function(){
    seconds = seconds + 1;

    if (currentTeam === "A") {
    teamATime = teamATime + 1;
} else {
    teamBTime = teamBTime + 1;
}

teamATimeDisplay.textContent = formatTime(teamATime);
teamBTimeDisplay.textContent = formatTime(teamBTime);

let teamAPossession = (teamATime / seconds) * 100;
let teamBPossession = (teamBTime / seconds) * 100;

teamAPossessionDisplay.textContent =
    teamAPossession.toFixed(0) + "%";

teamBPossessionDisplay.textContent =
    teamBPossession.toFixed(0) + "%";

    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;

    matchTime.textContent =
        String(minutes).padStart(2, "0") + ":" +
        String(remainingSeconds).padStart(2, "0");
}, 1000);
}

function pauseTimer() {
    clearInterval(timer);
}

function changeTeam(team) {
    currentTeam = team;
}

function formatTime(totalSeconds) {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    return String(minutes).padStart(2, "0") + ":" +
           String(seconds).padStart(2, "0");
}

function resetTimer() {
    clearInterval(timer);

    seconds = 0;

    matchTime.textContent = "00:00";
}

// Keyboard controls
document.addEventListener("keydown", function(event))