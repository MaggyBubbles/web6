export function savePerformanceData(data) {
    let performanceData = JSON.stringify(data);
}
export async function fetchLeaderboard() {
    const response = await fetch('./leaderboard.json');
    const data = await response.json();
    return data;
}
export function myLeaderBoard(name, array) {
    let myLeaderBoard = [];
    array.forEach(element => {
        if (name === element.playerName) {
            myLeaderBoard.push(element);
        }
    });
    return myLeaderBoard;
}
function sortDescending(array) {
    array.sort((a, b) => b - a); //inplace sortierung; ändert ursprungsarray
    return array;
}
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
