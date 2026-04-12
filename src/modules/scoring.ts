export interface Answer{
    answer : number | string,
    correctAnswer : number | string,
    category : string,
    difficulty : string
}

export interface PlayerPerformanceData{
    playerName : string;
    playerScore: number;
    playerPercentage: number;
}

//Daten werden im localStorage im Browser gespeichert
export async function savePerformanceData(data: PlayerPerformanceData){
    let performanceData = data;
    let leaderboard = JSON.parse(localStorage.getItem('leaderboard') || '[]');
    if(!leaderboard)
        {
            const response = await fetch('./leaderboard.json');
            leaderboard = await response.json();
        }
    leaderboard.push(performanceData);
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
    console.log('Daten wurdem im Leaderboard gespeichert');
}

//getestet funktioniert
export function calculateScore(answers : Answer[]) : number{
      
    let points : number = 0;

    answers.forEach(element => {
        if(element.answer === element.correctAnswer)
        {
            if(element.difficulty === 'easy'){ points += 1; }
            if(element.difficulty === 'medium'){ points += 2; }
            if(element.difficulty === 'hard'){ points += 3; }
        }
    });
    return points;
}

//getestet - funktioniert
export function calculatePercentage(answers : Answer[]) : number{
let percentage: number = 0;
let count: number = answers.length;
let correct: number = 0;
answers.forEach(element => {
    if(element.answer === element.correctAnswer){ correct ++;}
});
percentage = (correct/count)*100;
return percentage;
}
