var card_num = 0;

document.addEventListener('DOMContentLoaded', () => {
    const alertElement = document.getElementById('alert');
    const alertTextElement = document.getElementById('alert_text');
    const createCardButton = document.getElementById('createCardButton');
    const questionInput = document.getElementById('question');
    const answerInput = document.getElementById('answer');
    const cardQuestionElement = document.getElementById('question-box');
    let cards = [];

    alertElement.style.display = 'none';

    function showAlert(message) {
        alertTextElement.innerHTML = message;
        alertElement.style.opacity = 1;
        alertElement.style.display = 'block';
        let fadeEffect = setInterval(() => {
            if (!alertElement.style.opacity) {
                alertElement.style.opacity = 1;
            }
            if (alertElement.style.opacity > 0) {
                alertElement.style.opacity -= 0.005;
            }
        }, 10);
        alertElement.style.display = 'block';
    }

    createCardButton.addEventListener('click', () => {
        const question = questionInput.value;
        const answer = answerInput.value;

        console.log(question, answer);
        const card = new Card(question, answer);
        cards.push(card);
        showAlert('Card created');
        console.log(cards);
    });

    function nextCard() {
        if (cards.length > 0) {
            card_num = Math.floor(Math.random() * cards.length);
            const card = cards[card_num];
            cardQuestionElement.innerHTML = card.question;
        } else {
            showAlert('No cards available');
        }
    }

    function checkAnswer() {
        if (cards.length > 0) {
            if (cards[card_num].answer === answerInput.value) {
                showAlert('Correct');
            } else {
                showAlert('Incorrect');
            }
        } else {
            showAlert('No cards available');
        }
    }

    // Assuming Card is a constructor function or class defined elsewhere
    class Card {
        constructor(question, answer) {
            this.question = question;
            this.answer = answer;
        }
    }

    // Expose functions to global scope if needed
    window.nextCard = nextCard;
    window.checkAnswer = checkAnswer;
});