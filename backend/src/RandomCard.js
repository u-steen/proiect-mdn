
const cards = require('./cards');
const crypto = require('crypto');


function selectRandomCard(deck) {
    const randomIndex = crypto.randomInt(0, deck.length);
    const selectedCard = deck[randomIndex];
    deck.splice(randomIndex, 1); // Elimin cartea din deck
    return selectedCard;
}

const deck = [...cards]; // Copiem array-ul de carti

function drawAndLogCard() {
    if (deck.length === 0) {
        console.log("No more cards in the deck!");
        return;
    }

    const randomCard = selectRandomCard(deck);
    console.log("Randomly selected card:", randomCard);
}
drawAndLogCard();
drawAndLogCard();
drawAndLogCard();
drawAndLogCard();
drawAndLogCard();
