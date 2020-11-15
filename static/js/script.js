var id = {
	'storein': 'abc',
	storeout: 'def',
}
a = 'storein'
console.log(id[a])
console.log(flex-blackjack-row-2.length());

function ageInDays () {
	var birthYear = prompt('Birth Year: ');
	var ageInDayss = (2020 - birthYear) * 365;
	var h1 = document.createElement('h1');
	h1.setAttribute('id', 'ageInDays');
	var textAnswer = document.createTextNode('You are ' + ageInDayss+ ' days old.');
	h1.appendChild(textAnswer);
	document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
	document.getElementById('ageInDays').remove();
}

function load_image() {
	var img = document.createElement('img');
	img.setAttribute('src', 'https://thecatapi.com/api/images/get?format=src&type=gif&size=small');
	document.getElementById('cat-generator').appendChild(img);
}

function randomChoice() {
	var objects = ['rock', 'paper', 'scissor'];
	var num = Math.floor(Math.random() * 3);
	return objects[num];
}

function decideWinner(userChoice, botChoice) {
	var forWinning = {
		'rock': {'rock': 0.5, 'paper': 0, 'scissor': 1},
		'paper': {'rock': 1, 'paper': 0.5, 'scissor': 0},
		'scissor': {'rock': 0, 'paper': 1, 'scissor': 0.5}
	}

	var userScore = forWinning[userChoice][botChoice];
	var compScore = forWinning[botChoice][userChoice];

	return [userScore, compScore];

}

function finalMessage(result) {
	var message;

	if (result[0] === 0) {
		message = {'message': 'You lost', 'color': 'red'};
	}
	else if (result[0] === 0.5) {
		message = {'message': 'Tie Game', 'color': 'yellow'};
	}
	else {
		message = {'message': 'You Won', 'color': 'green'};
	}

	return message;
}

function rpsFrontEnd(userChoiceId, botChoiceId, message) {
	user = document.getElementById(userChoiceId);
	bot = document.getElementById(botChoiceId);

	document.getElementById('rock').remove();
	document.getElementById('paper').remove();
	document.getElementById('scissor').remove();

	var userDiv = document.createElement('div');
	userDiv.setAttribute('style', 'box-shadow: 0px 10px 50px rgba(37, 50, 233, 1)');
	var botDiv = document.createElement('div');
	botDiv.setAttribute('style', 'box-shadow: 0px 10px 50px rgba(243, 38, 24, 1)');
	var messageDiv = document.createElement('div');

	userDiv.appendChild(user);
	messageDiv.innerHTML = "<h1 style='color: " + message['color'] +"; font-size: 60px;'>" + message['message'] + "</h1>"
	botDiv.appendChild(bot);

	document.getElementById('flex-box-rps-div').appendChild(userDiv);
	document.getElementById('flex-box-rps-div').appendChild(messageDiv);
	document.getElementById('flex-box-rps-div').appendChild(botDiv);
}

function rpsGame(image) {
	var userChoiceId = image.id;
	var botChoiceId = randomChoice();
	var result = decideWinner(userChoiceId, botChoiceId);
	var message = finalMessage(result);
	rpsFrontEnd(userChoiceId, botChoiceId, message);
}



var allButtons = document.getElementsByTagName('button');

var copyAllButtons = [];
for (let i=0; i < allButtons.length; i++) {
	if (allButtons[i].id === 'blackjack-hit-button' || allButtons[i].id === 'blackjack-stand-button') {
		copyAllButtons.push(allButtons[i].classList[2]);
	}else {
		copyAllButtons.push(allButtons[i].classList[1]);
	}
}

function buttonsRed() {
	for (let i=0; i < allButtons.length; i++) {
		if (allButtons[i].id === 'blackjack-hit-button' || allButtons[i].id === 'blackjack-stand-button') {
			allButtons[i].classList.remove(allButtons[i].classList[2]);
			allButtons[i].classList.add('btn-danger');
		}else {
			allButtons[i].classList.remove(allButtons[i].classList[1]);
			allButtons[i].classList.add('btn-danger');	
		}
	}
}

function buttonsGreen() {
	for (let i=0; i < allButtons.length; i++) {
		if (allButtons[i].id === 'blackjack-hit-button' || allButtons[i].id === 'blackjack-stand-button') {
			allButtons[i].classList.remove(allButtons[i].classList[2]);
			allButtons[i].classList.add('btn-success');
		}else {
			allButtons[i].classList.remove(allButtons[i].classList[1]);
			allButtons[i].classList.add('btn-success');	
		}
	}
}

function buttonsRandom() {
	colors = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning'];

	for (let i=0; i < allButtons.length; i++) {
		if (allButtons[i].id === 'blackjack-hit-button' || allButtons[i].id === 'blackjack-stand-button') {
			allButtons[i].classList.remove(allButtons[i].classList[2]);
			allButtons[i].classList.add(colors[Math.floor(Math.random() * 4)]);
		}else {
			allButtons[i].classList.remove(allButtons[i].classList[1]);
			allButtons[i].classList.add(colors[Math.floor(Math.random() * 4)]);	
		}
	}
}

function buttonsReset() {
	for (let i=0; i < allButtons.length; i++) {
		if (allButtons[i].id === 'blackjack-hit-button' || allButtons[i].id === 'blackjack-stand-button') {
			allButtons[i].classList.remove(allButtons[i].classList[2]);
			allButtons[i].classList.add(copyAllButtons[i]);
		}else {
			allButtons[i].classList.remove(allButtons[i].classList[1]);
			allButtons[i].classList.add(copyAllButtons[i]);	
		}
	}
}

function buttonColorChange(selectedButton) {
	if (selectedButton.value === 'red') {
		buttonsRed();
	}
	else if (selectedButton.value === 'green') {
		buttonsGreen();
	}
	else if (selectedButton.value === 'random') {
		buttonsRandom();
	}
	else {
		buttonsReset();
	}
}



let blackjackGame = {
	'you': {'scoreSpan': '#your-score', 'div': '#your-box', 'score': 0, 'wins': 0, 'losses': 0, 'draws': 0},
	'dealer': {'scoreSpan': '#dealer-score', 'div': '#dealer-box', 'score': 0},
	'cards': [
		['2', 2],
		['3', 3],
		['4', 4],
		['5', 5],
		['6', 6],
		['7', 7],
		['8', 8],
		['9', 9],
		['10', 10],
		['J', 10],
		['Q', 10],
		['K', 10],
		['A', 11, 1],
	],
	'isStand': false,
	'turnsOver': false,
}


const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];

const hitSound = new Audio('static/sounds/swish.m4a');
const winSound = new Audio('static/sounds/cash.mp3');
const loseSound = new Audio('static/sounds/aww.mp3');

document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);
document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);
document.querySelector('#blackjack-stand-button').addEventListener('click', blackjackStand);

 
function blackjackHit() {
	if (! blackjackGame['isStand']) {
		let card = randomCard();
		showCard(YOU, card);
		updateScore(YOU, card);
		showScore(YOU);
	}
}

function showCard(activePlayer, card) {
	if (activePlayer['score'] <= 21) {
		let cardImage = document.createElement('img');
		cardImage.src = `static/images/${card[0]}.png`;
		document.querySelector(activePlayer['div']).appendChild(cardImage);
		hitSound.play();
	}
}


function randomCard() {
	return blackjackGame['cards'][Math.floor(Math.random() * 13)];
}


function updateScore(activePlayer, card) {
	if (card[0] == 'A') {
		if (activePlayer['score'] + card[1] <= 21) {
			activePlayer['score'] += card[1]
		}else {
			activePlayer['score'] += card[2]
		}
	}else {
		activePlayer['score'] += card[1];
	}
}


function showScore(activePlayer) {
	if (activePlayer['score'] <= 21) {
		document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
	}else {
		document.querySelector(activePlayer['scoreSpan']).textContent = 'BUSTED!!';
		document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
	}
}


function blackjackDeal() {
	if (blackjackGame['turnsOver']) {
		let yourCards = document.querySelector('#your-box').querySelectorAll('img');

		for (let i=0; i < yourCards.length; i++) {
			yourCards[i].remove();
		}

		let dealerCards = document.querySelector('#dealer-box').querySelectorAll('img');

		for (let i=0; i < dealerCards.length; i++) {
			dealerCards[i].remove();
		}

		YOU['score'] = 0;
		DEALER['score'] = 0;
		document.querySelector(YOU['scoreSpan']).textContent = 0;
		document.querySelector(YOU['scoreSpan']).style.color = 'white';

		document.querySelector(DEALER['scoreSpan']).textContent = 0;
		document.querySelector(DEALER['scoreSpan']).style.color = 'white';

		document.querySelector('#blackjack-result').textContent = 'Let\'s Play';
		document.querySelector('#blackjack-result').style.color = 'black';

		blackjackGame['isStand'] = false;
		blackjackGame['turnsOver'] = false;
	}

}


function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}


async function blackjackStand() {
	blackjackGame['isStand'] = true;

	if (! blackjackGame['turnsOver']) {
		if (YOU['score'] < 22) {
			while (DEALER['score'] < YOU['score']) {
				let card = randomCard();
				showCard(DEALER, card);
				updateScore(DEALER, card);
				showScore(DEALER);
				await sleep(1000);
		}
	}else {
		while (DEALER['score'] <= 15) {
			let card = randomCard();
			showCard(DEALER, card);
			updateScore(DEALER, card);
			showScore(DEALER);
			await sleep(1000);
		}
	}


		let winner = computeWinner();
		updateTable(winner);
		showResult(winner);
		blackjackGame['turnsOver'] = true;
	}
}


function computeWinner() {
	let winner;

	if (YOU['score'] <= 21) {
		if (YOU['score'] > DEALER['score'] || DEALER['score'] > 21) {
			winner = YOU;
		}else if (DEALER['score'] > YOU['score']) {
			winner = DEALER;
		}else if (YOU['score'] === DEALER['score']) {
			winner = winner;
		}
	}else if (YOU['score'] > 21) {
		if (DEALER['score'] < YOU['score'] && DEALER['score'] <= 21) {
			winner = DEALER;
		}else if (DEALER['score'] > 21) {
			winner = winner;
		}
	}

	return winner;
}


function showResult(winner) {
	let message, messageColor;

	if (winner === YOU) {
		message = 'You Won!';
		messageColor = 'green';
		winSound.play();
	}else if (winner === DEALER) {
		message = 'You Lost!'
		messageColor = 'red';
		loseSound.play();
	}else {
		message = 'Tie Game!';
		messageColor = 'black';
	}

	document.querySelector('#blackjack-result').textContent = message;
	document.querySelector('#blackjack-result').style.color = messageColor;
}

function updateTable(winner) {
	if (winner === YOU) {
		YOU['wins'] += 1;
	}else if (winner === DEALER) {
		YOU['losses'] += 1;
	}else {
		YOU['draws'] += 1;
	}

	document.querySelector('#wins').textContent = YOU['wins'];
	document.querySelector('#losses').textContent = YOU['losses'];
	document.querySelector('#draws').textContent = YOU['draws'];
}















