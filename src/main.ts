import { distributeQuestions, fetchQuestions, Question, shuffleArray} from "./modules/questions.js";
import { calculateScore } from "./modules/scoring.js";

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

