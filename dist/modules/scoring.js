//notwendig zu installieren: npm install --save-dev @types/node
//ts-node@10.9.2
//npx ts-node scoring.ts
//import * as fs from 'fs';  modernen anstatt const fs = require('fs'); 
//Daten werden im localStorage im Browser gespeichert
export async function savePerformanceData(data) {
    //fs.writeFileSync('.\.\leaderboard.json', performanceData);
    let performanceData = data;
    let leaderboard = JSON.parse(localStorage.getItem('leaderboard') || '[]');
    if (!leaderboard) {
        const response = await fetch('./leaderboard.json');
        leaderboard = await response.json();
    }
    leaderboard.push(performanceData);
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
    console.log('Daten wurdem im Leaderboard gespeichert');
}
/*export async function fetchLeaderboard(): Promise<PlayerPerformanceData[]> {
    const response = await fetch('./leaderboard.json');
    const data = await response.json();
    sortDescending(data);
    return data;
}*/
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
/*export function sortDescending(array: any[]): any[]{
    array.sort((a, b) => b - a); //inplace sortierung; ändert ursprungsarray
    return array;
}*/
//getestet funktioniert
export function calculateScore(answers) {
    let points = 0;
    answers.forEach(element => {
        if (element.answer === element.correctAnswer) {
            if (element.difficulty === 'easy') {
                points += 1;
            }
            if (element.difficulty === 'medium') {
                points += 2;
            }
            if (element.difficulty === 'hard') {
                points += 3;
            }
        }
    });
    return points;
}
//getestet - funktioniert
export function calculatePercentage(answers) {
    let percentage = 0;
    let count = answers.length;
    let correct = 0;
    answers.forEach(element => {
        if (element.answer === element.correctAnswer) {
            correct++;
        }
    });
    percentage = (correct / count) * 100;
    return percentage;
}
