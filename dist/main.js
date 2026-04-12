import { startQuiz } from "./modules/ui.js";
startQuiz();
/* Test
//Alles was hier steht sind Tests, um die Funktionalität zu überprüfen. Kann alles Auskommentiert werden!
//await wird hier gebraucht, weil data sonst eventuell leer ist, da die Daten von fetchQuestion noch nicht geladen sind.
let data = await fetchQuestions();

console.log('Data before shuffle');
data.forEach(element => {
    
    console.log(element.category, element.options, element.answer);
    
});

data = shuffleArray(data);
console.log('Data after shuffle');
data.forEach(element => {
    
    console.log(element.category, element.options, element.answer);
    
});
console.log('These are the five questions: ');
let currentQuestions : any[] = distributeQuestions(data);
currentQuestions.forEach(element => {
    console.log(element.category, element.question, element.answer);
    console.log(element.difficulty);
});


const quiz = document.getElementById('quiz-container');
currentQuestions.forEach(element => {
    const question = document.createElement('div');
    question.textContent = element.question;
    question.classList = 'question';
    if(quiz){ quiz.appendChild(question); }//quiz eventuell NULL daher mit if-Abfrage überprüfen
   
});

let test : Answer[] =
[
    {answer: "3", correctAnswer: "3", category: "math", difficulty: "easy"},
    {answer: "Mona Lisa", correctAnswer: "Mona Lisa", category: "cultue", difficulty: "medium"},
    {answer: "4", correctAnswer: "4", category: "math", difficulty: "easy"},
    {answer: "5", correctAnswer: "5", category: "math", difficulty: "medium"},
    {answer: "4", correctAnswer: "3", category: "math", difficulty: "hard"},
]

let test2 : Answer[] =
    [{answer: "3", correctAnswer: "3", category: "math", difficulty: "easy"},
    {answer: "Mona Lisa", correctAnswer: "Mona Lisa", category: "cultue", difficulty: "medium"},
    {answer: "4", correctAnswer: "4", category: "math", difficulty: "easy"},
    {answer: "5", correctAnswer: "5", category: "math", difficulty: "medium"},
    {answer: "3", correctAnswer: "3", category: "math", difficulty: "hard"},
]
let test3 : Answer[] =
    [{answer: "3", correctAnswer: "3", category: "math", difficulty: "easy"},
    {answer: "Mona Lisa", correctAnswer: "Mona Lisa", category: "cultue", difficulty: "medium"},
    {answer: "4", correctAnswer: "4", category: "math", difficulty: "easy"},
    {answer: "5", correctAnswer: "5", category: "math", difficulty: "medium"},
    {answer: "2", correctAnswer: "3", category: "math", difficulty: "hard"},
]
console.log(test);

let testresult = calculateScore(test);
console.log(testresult);
let testpercent = calculatePercentage(test);
console.log('Answered ' + testpercent + '% correctly');

let testresult2 = calculateScore(test2);
let testpercent2 = calculatePercentage(test2);
let testresult3 = calculateScore(test3);
let testpercent3 = calculatePercentage(test3);
let player1 : PlayerPerformanceData =  {playerName: "Violett", playerScore: testresult, playerPercentage: testpercent};
savePerformanceData(player1);

let player2 : PlayerPerformanceData =  {playerName: "Augusta", playerScore: testresult2, playerPercentage: testpercent2};
savePerformanceData(player2);

let player3 :  PlayerPerformanceData =  {playerName: "Augusta", playerScore: testresult3, playerPercentage: testpercent3};
savePerformanceData(player3);

let board = fetchLeaderboard();
console.log('The whle leaderboard: ');
board.forEach(element => {
    console.log('Player Name: ' + element.playerName);
    console.log('Player Percentage: ' + element.playerPercentage);
    console.log('Player Score: ' + element.playerScore);
    console.log(element);
});

console.log('My LeaderBoard of Augusta: ');
let myBoard = myLeaderBoard('Augusta', board);
myBoard.forEach(element => {
     console.log('Player Name: ' + element.playerName);
    console.log('Player Percentage: ' + element.playerPercentage);
    console.log('Player Score: ' + element.playerScore);
});

*/
