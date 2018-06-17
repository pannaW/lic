import { Question } from './Question';

class Quiz{
	constructor(questions){
		this.score = 0;
		this.questionIndex = 0;
		this.questions = [];
		this.generateQuestions(questions);
	}
	generateQuestions(questions){
		[...questions].forEach(question => this.questions.push(new Question(question)));
	}
	getQuestion(){
		return this.questions[this.questionIndex];
	}
	isEnded(){
		return this.questions.length === this.questionIndex; 
	}
	isWinner(){
		return (this.score/this.questions.length) > 0.80;
	}
	guess(answer){
		if(this.getQuestion().isCorrect(answer)) {
			this.score++;
		}
		this.questionIndex++;
	}
}

export { Quiz };