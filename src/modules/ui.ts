import { fetchQuestions, Question, shuffleArray } from './questions.js';
import { calculateScore } from './scoring.js';

//Funktion, um die Frage auszugeben (noch nicht implementiert)
export function displayQuestion(index: number): void {
   
}

function handleAnswer(index: number, selectedOption: string | number): void {
    //hier kommt rein, was mit der Antwort passiert
    //string | number ist vom interface Question in der Datei questions.ts
}

function displayScore(categoryScores: { [category: string]: { correct: number; total: number; points: number; } }, totalScore: number, totalPoints: number, maxPoints: number): void {
    //Funktion muss noch geschrieben werden.
}