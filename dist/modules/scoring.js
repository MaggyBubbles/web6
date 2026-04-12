//Daten werden im localStorage im Browser gespeichert
export async function savePerformanceData(data) {
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
