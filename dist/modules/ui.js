import { fetchQuestions, shuffleArray } from './questions.js';
//Funktion, um die Frage auszugeben
let questions = [];
let currentIndex = 0;
let score = 0;
let playerName = "";
export async function startQuiz() {
    const inputDiv = document.getElementById("player-input");
    // Input + Button erzeugen
    inputDiv.innerHTML = `
        <input id="nameInput" placeholder="Dein Name" />
        <button id="startBtn">Start</button>
    `;
    // Klick-Event
    document.getElementById("startBtn").onclick = async () => {
        const input = document.getElementById("nameInput");
        if (input.value.trim() === "") {
            alert("Bitte Namen eingeben!");
            return;
        }
        playerName = input.value;
        document.getElementById("player-input").style.display = "none";
        questions = await fetchQuestions();
        questions = shuffleArray(questions).slice(0, 5);
        displayQuestion(0);
    };
}
export function displayQuestion(index) {
    const q = questions[index];
    const questionDiv = document.getElementById("question");
    const answersDiv = document.getElementById("answers");
    questionDiv.textContent = q.question;
    answersDiv.innerHTML = "";
    q.options.forEach(option => {
        const btn = document.createElement("button");
        btn.textContent = String(option);
        btn.onclick = () => handleAnswer(index, option);
        answersDiv.appendChild(btn);
    });
}
//hier kommt rein, was mit der Antwort passiert
//string | number ist vom interface Question in der Datei questions.ts
function handleAnswer(index, selectedOption) {
    const q = questions[index];
    const feedbackDiv = document.getElementById("feedback");
    if (selectedOption === q.answer) {
        score++;
        feedbackDiv.textContent = "Richtig!";
        feedbackDiv.style.color = "green";
    }
    else {
        feedbackDiv.textContent = "Falsch!";
        feedbackDiv.style.color = "red";
    }
    setTimeout(() => { feedbackDiv.textContent = ""; }, 1000);
    currentIndex += 1;
    if (currentIndex < questions.length) {
        displayQuestion(currentIndex);
    }
    else {
        endQuiz();
    }
}
function endQuiz() {
    document.getElementById("quiz-container").style.display = "none";
    displayScore({}, score, score, questions.length);
    saveResult();
}
function saveResult() {
    const player = {
        playerName: playerName,
        playerScore: score,
        playerPercentage: Math.round((score / questions.length) * 100)
    };
    const leaderboard = fetchLeaderboard();
    leaderboard.push(player);
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
}
function displayScore(categoryScores, totalScore, totalPoints, maxPoints) {
    // Ergebnis anzeigen
    const resultDiv = document.getElementById("result");
    document.getElementById("leaderboard").style.display = "block";
    resultDiv.innerHTML = `
        <h3>Congrats, ${playerName}!</h3>
        <p>Score: ${totalScore} / ${maxPoints}</p>
    `;
    const restartBtn = document.createElement("button");
    restartBtn.textContent = "Nochmal spielen";
    restartBtn.className = "restart-btn";
    restartBtn.onclick = () => {
        location.reload();
    };
    resultDiv.appendChild(restartBtn);
    // Leaderboard anzeigen
    const leaderboard = JSON.parse(localStorage.getItem("leaderboard") || "[]");
    const list = document.getElementById("leaderboard-list");
    list.innerHTML = "";
    leaderboard.forEach((p, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${p.playerName} — ${p.playerScore}`;
        list.appendChild(li);
    });
}
//Funktion muss noch geschrieben werden.
//Daten werden aus dem localStorage vom Browser geholt und von höchster Punktezahl bis niedrigster Punktezahl sortiert
//getestet funktioniert
export function fetchLeaderboard() {
    const storedData = localStorage.getItem('leaderboard');
    const data = JSON.parse(storedData || '[]');
    data.sort((a, b) => b.playerScore - a.playerScore);
    return data;
}
//Das LeaderBoard wird nach eingegebenen Namen gefiltert und nur passende Ergebisse in absteigender Reihenfolge nach Punktezahl ausgegeben
//getestet funktioniert
export function myLeaderBoard(name, array) {
    console.log("Anzahl Einträge gesamt:", array.length);
    const myLeaderBoard = array.filter(player => player.playerName === name);
    myLeaderBoard.sort((a, b) => b.playerScore - a.playerScore);
    return myLeaderBoard;
}
