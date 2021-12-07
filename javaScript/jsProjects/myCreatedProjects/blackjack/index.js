let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1;
    if (randomCard === 1) {
        return 11
    } else if (randomCard > 10) {
        return 10
    } else {
        return randomCard
    }
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame();
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message;
}

function newCard() {
    let newCard = getRandomCard();
    cards.push(newCard)
    sum += newCard;
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1] + " " + cards[2];
    renderGame();
}



