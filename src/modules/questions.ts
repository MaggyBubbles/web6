import { PlayerPerformanceData } from "./scoring";

//erstellt das Interface Question
export interface Question {
  category: string;
  question: string;
  options: (string | number)[];
  answer: string | number;
  difficulty: 'easy' | 'medium' | 'hard';
}

//Funktion, die die Fragen aus der JSON Datei holt
export async function fetchQuestions(): Promise<Question[]> {
  const response = await fetch('./questions.json');
  const data = await response.json();
  return data;
}


//Funktion, die ein Array mischt
export function shuffleArray(array: any[]): any[] {
    array.sort(() => Math.random() - 0.5);
  return array;
}


export function sortByDifficulty(array: any[])
{
  //Map (besteht aus key und value Paar) die dem String einen int zuweist, damit damit gerechnet werden kann     
 const sortByDifficulty : {[key: string]: number}= { 
      'easy': 1,
      'medium': 2,
      'hard': 3
    }

    array.sort((a, b) => (sortByDifficulty[a.difficulty]-sortByDifficulty[b.difficulty])); //inplace sortierung; ändert ursprungsarray
    return array;

}

//Funktion erstellt ein Array mit 5 Fragen
export function distributeQuestions(array : any[])
{
    const fiveQuestionLength : number = 5;
    let fiveQuestions : any[] = [];

    //Filtert nach Schwieriegkeit. "e" ist das aktuelle Element.
    // Die eingebaute Filterfunktion geht ähnlich wie eine forEach Schleife jeden Eintrag durch und nimmt Einträge
    //entsprechend des Filters heraus
    const easyQuestions = array.filter(e => e.difficulty === 'easy');
    const mediumQuestions = array.filter(e => e.difficulty === 'medium');
    const hardQuestions = array.filter(e => e.difficulty === 'hard');
     
    //Dieser Teil sorgt dafür, dass immer eine easy, eine medium, eine hard question ins Array reinkommt
    //solange, bis das Array seine maximale Größe erreicht hat.
    let i = 0;
    while (fiveQuestions.length < fiveQuestionLength)
    {
      if(fiveQuestions.length < fiveQuestionLength) {fiveQuestions.push(easyQuestions[i]);}
      if(fiveQuestions.length < fiveQuestionLength) { fiveQuestions.push(mediumQuestions[i]);}
      if(fiveQuestions.length < fiveQuestionLength) {  fiveQuestions.push(hardQuestions[i]);}
      i++;
    }

   //Damit zuerst die leichten, dann mittleren, dann schwierigen Fragen kommen, wird das Array noch sortiert
    fiveQuestions = sortByDifficulty(fiveQuestions);
 

    return fiveQuestions;
}   
