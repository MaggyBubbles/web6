//Funktion, die den Score ausrechnen soll
//Derweil noch unfertig: wahrscheinlich so: array mit gesammelten Punkten kommt rein, addiert alles und git den Wert zurück
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

export function savePerformanceData(data: PlayerPerformanceData){
    let performanceData = JSON.stringify(data);
}

export async function fetchLeaderboard(): Promise<PlayerPerformanceData[]> {
    const response = await fetch('./leaderboard.json');
    const data = await response.json();
    return data;
}

export function myLeaderBoard(name: string, array: PlayerPerformanceData[]){
    let myLeaderBoard: any[] = [];
    array.forEach(element => {
        if(name === element.playerName){ myLeaderBoard.push(element);}
    });
    return myLeaderBoard;
}

function sortDescending(array: any[]): any[]{
    array.sort((a, b) => b - a); //inplace sortierung; ändert ursprungsarray
    return array;
}

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
