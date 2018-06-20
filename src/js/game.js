import { Quiz } from './Quiz';
import questions from '../data/questions.json';
import messages from '../data/messages.json';
let quiz = [];

document.addEventListener('DOMContentLoaded', () => {
	
    function animateValue(cl, start, end, duration) {
		let current = start;
		const range = end - start;
		const stepTime = Math.abs(Math.floor(duration / range));
		const increment = end > start ? 1 : -1;
		const obj = document.querySelector(cl);
		const timer = setInterval(() => {
			current += increment;
			obj.innerHTML = current;
			const clSuccess = 'result__score--success';
			if (current >= quiz.questions.length * 0.8 && document.querySelector('.'+clSuccess) === null) {
				obj.classList.add(clSuccess);
				obj.nextElementSibling.classList.add(clSuccess);
			}

			if (current == end) {
				clearInterval(timer);
			}
		}, stepTime);
	}

	function renderEndView() {
		const quizBody = document.querySelector('.jsQuizBody');
		const message = messages.find(message => message.win == quiz.isWinner());
		const headerClass = quiz.isWinner() ? 'success' : 'failure';
    
		quizBody.innerHTML = `<div class="result">
                                <p class="result__score result__score--number"> ${0}</p>
                                <p class="result__score"> poprawnych odpowiedzi </p>
                                <div class="result__message">
                                    <h2 class="result__header result__header--${headerClass}"> ${message.message}</h2>
                                    <p class="result__text">${message.description}</p>
                                </div>
                            </div>`;
 
		animateValue('.result__score', 0, quiz.score, 2000);
		setInterval(() => { document.querySelector('.result__message').classList.add('result__message--visible');
		}, 2000);
	}
    
	function submitAnswerEvent(){
		const btn = document.querySelector('.jsNext');
		btn.addEventListener('click', checkAnswer);
	}
    
	function showQuestion(){
		const questionNumber = document.querySelector('.jsQuizQNumber');
		questionNumber.innerHTML = `${quiz.questionIndex + 1}.&shy;&shy;`;
		const question = document.querySelector('.jsQuizQText');
		question.innerHTML = quiz.getQuestion().text;
	}
    
	function showProgress(){
		const quizProgress = document.querySelector('.jsProgress');
		quizProgress.innerHTML = `Pytanie ${quiz.questionIndex + 1} z ${quiz.questions.length}`;
	}
    
	function showChoices(){
		const choices = document.querySelectorAll('.jsAnswerLabel');
		let question = quiz.getQuestion();
        
		[...choices].forEach(choice => {
			let input = choice.nextElementSibling;
			choice.innerHTML = question.choices[input.value];
		});
	}
    
	function displayQuestion() {
		showQuestion();
		showProgress();
		showChoices();
	}
    
	function play() {
		if (quiz.isEnded()) {
			renderEndView();
		} else {
			displayQuestion();
		}
	}

	function checkAnswer() {
		let answerIndex = document.querySelector('.jsAnswer input:checked').value;
		quiz.guess(answerIndex);
		play();
	}

	function start() {
		quiz = new Quiz(questions);
		submitAnswerEvent();
		play();
	}

	start();
    
});
