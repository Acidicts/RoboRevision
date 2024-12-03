var cards = [];

document.body.onload = function() {
    document.getElementById('alert').style.display = 'none';
}

function Alert(message) {
    document.getElementById('alert_text').innerHTML = message;
    document.getElementById('alert').style.display = 'block';
}

document.getElementById('createCardButton').onclick = function() {
    var question = document.getElementById('question').value;
    var answer = document.getElementById('answer').value;
    cards.push(new Card(question, answer));
    Alert('Card created');
    console.log(cards);
};

function nextCard() {
    if (cards.length > 0) {
        var card = cards[Math.floor(Math.random() * cards.length)];
        document.querySelector('.card-question').innerHTML = card.question;
    } else {
        Alert('No cards available');
    }
}

function checkAnswer() {
    if (cards.length > 0) {
        var card = cards[Math.floor(Math.random() * cards.length)];
        document.querySelector('.card-answer').innerHTML = card.answer;
    } else {
        Alert('No cards available');
    }
}

class Card {
    constructor(question, answer) {
        this.question = question;
        this.answer = answer;
    }
}