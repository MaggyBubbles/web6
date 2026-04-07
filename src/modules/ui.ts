import { fetchQuestions, Question, shuffleArray } from './questions.js';
import { calculateScore } from './scoring.js';

//Funktion, um die Frage auszugeben (noch nicht implementiert, nur ein bisschen rum gespielt mit let date = fetchQuestion)
export function displayQuestion(index: number): void {
   let data = fetchQuestions();
   console.log(data);
}

function handleAnswer(index: number, selectedOption: string | number): void {
    //hier kommt rein, was mit der Antwort passiert
    //string | number ist vom interface Question
}

function displayScore(categoryScores: { [category: string]: { correct: number; total: number; points: number; } }, totalScore: number, totalPoints: number, maxPoints: number): void {
    //Funktion muss noch geschrieben werden. categoryScores muss wahrscheinlich als interface in scoring erstellt werden?
}