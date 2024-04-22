
const cards = require('./cards');

const crypto = require('crypto');

function selectRandomCard() {
    const randomIndex = crypto.randomInt(0, cards.length);

    return cards[randomIndex];
}

const randomCard = selectRandomCard();
console.log("Randomly selected card:", randomCard);