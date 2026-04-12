import { distributeQuestions, fetchQuestions, Question, shuffleArray} from "./modules/questions.js";
import { Answer, calculatePercentage, calculateScore, PlayerPerformanceData, savePerformanceData} from "./modules/scoring.js";
import { fetchLeaderboard, myLeaderBoard } from "./modules/ui.js";
import { startQuiz } from "./modules/ui.js";


startQuiz();

