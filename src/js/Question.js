class Question {
	constructor(question){
		this.text = question.text;
		this.choices = question.choices;
		this.correctAnswer = question.correctAnswer;
	}
	isCorrect(userAnswer){
		return userAnswer === this.correctAnswer;
	}
}

export { Question };