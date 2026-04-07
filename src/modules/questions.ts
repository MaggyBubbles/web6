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
    //Math.random() liefert einen Wert zwischen 0 und 1 zurück
    //-0.5 macht das Ergebnis positiv oder negativ
    //sortFunktion: ändert cards(keine Kopie), negativer Wert: A vor B eingefügt und andersrum
  return array;
}