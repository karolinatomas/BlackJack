let firstCard = Math.round(Math.random() * 9 + 2);
let secondCard = Math.round(Math.random() * 9 + 2);
let cardsArray = [firstCard, secondCard];
let sum = 0;
let newCardRender;
let hasBlackJack = false;
let isAlive = true;
let beggining = true;
let message1 = "";
let message2 = "";
const cards = document.getElementById("card");
const sumText = document.getElementById("sum");
const messageText = document.getElementById("message-el");
messageText.textContent += 'Click on "START GAME"';
const button = document.getElementById("newGame");

console.log(firstCard, secondCard, sum);

function startGame() {
  if (cardsArray.length == 2 && sum === 0) {
    console.log(cards);
    renderGame();
  } else if (!isAlive || hasBlackJack) {
    messageText.textContent = "You haven´t start the game yet";
  } else {
  }
}
function renderGame() {
  beggining = false;
  sum = 0;
  for (let i = 0; i < cardsArray.length; i++) {
    sum += cardsArray[i];
  }
  cards.textContent = "Cards: " + cardsArray;
  sumText.textContent = "Sum: " + sum;
  if (sum < 21) {
    message1 = "Do you want to draw a new card?";
    message2 = 'Click on "NEW CARD"';
  } else if (sum === 21) {
    message1 = "You´ve got Blackjack";
    hasBlackJack = true;
  } else {
    message1 = "You are out of the game. ";
    message2 = 'Click on "NEW GAME" if you want.';
    isAlive = false;
  }
  messageText.textContent = message1 + message2;
  if (!isAlive || hasBlackJack) {
    button.style.visibility = "visible";
  }
}

function newCard() {
  if (!isAlive || beggining || hasBlackJack) {
    messageText.textContent = "You haven´t start the game yet";
  } else {
    newCardRender = Math.round(Math.random() * 9 + 2);
    cardsArray.push(newCardRender);
    console.log(cardsArray);
    renderGame();
  }
}

function newGame() {
  button.style.visibility = "hidden";
  cards.textContent = "Cards: ";
  sumText.textContent = "Sum: ";
  messageText.textContent = 'Click on "START GAME"';
  cardsArray = [];
  sum = 0;
  hasBlackJack = false;
  isAlive = true;
  beggining = true;
  console.log(cardsArray);
  firstCard = Math.round(Math.random() * 9 + 2);
  secondCard = Math.round(Math.random() * 9 + 2);
  cardsArray = [firstCard, secondCard];
}
