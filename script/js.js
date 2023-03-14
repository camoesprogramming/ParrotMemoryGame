let numberOfCards;
const arrayOfCards = [

  `<div class="card" onclick="flipThisCard(this)">
  <div class="front-face face">
    <img src="./img/front.png" alt="">
  </div>
  <div class="back-face face">
    <img src="./img/bobrossparrot.gif" alt="">
  </div>
</div>`,

  `<div class="card" onclick="flipThisCard(this)">
  <div class="front-face face">
    <img src="./img/front.png" alt="">
  </div>
  <div class="back-face face">
    <img src="./img/bobrossparrot.gif" alt="">
  </div>
</div>`,

  `<div class="card" onclick="flipThisCard(this)">
  <div class="front-face face">
    <img src="./img/front.png" alt="">
  </div>
  <div class="back-face face">
    <img src="./img/explodyparrot.gif" alt="">
  </div>
</div>`,

  `<div class="card" onclick="flipThisCard(this)">
  <div class="front-face face">
    <img src="./img/front.png" alt="">
  </div>
  <div class="back-face face">
    <img src="./img/explodyparrot.gif" alt="">
  </div>
</div>`,

  `<div class="card" onclick="flipThisCard(this)">
  <div class="front-face face">
    <img src="./img/front.png" alt="">
  </div>
  <div class="back-face face">
    <img src="./img/fiestaparrot.gif" alt="">
  </div>
</div>`,

  `<div class="card" onclick="flipThisCard(this)">
  <div class="front-face face">
    <img src="./img/front.png" alt="">
  </div>
  <div class="back-face face">
    <img src="./img/fiestaparrot.gif" alt="">
  </div>
</div>`,

  `<div class="card" onclick="flipThisCard(this)">
  <div class="front-face face">
    <img src="./img/front.png" alt="">
  </div>
  <div class="back-face face">
    <img src="./img/metalparrot.gif" alt="">
  </div>
</div>`,

  `<div class="card" onclick="flipThisCard(this)">
  <div class="front-face face">
    <img src="./img/front.png" alt="">
  </div>
  <div class="back-face face">
    <img src="./img/metalparrot.gif" alt="">
  </div>
</div>`,

  `<div class="card" onclick="flipThisCard(this)">
  <div class="front-face face">
    <img src="./img/front.png" alt="">
  </div>
  <div class="back-face face">
    <img src="./img/revertitparrot.gif" alt="">
  </div>
</div>`,

  `<div class="card" onclick="flipThisCard(this)">
  <div class="front-face face">
    <img src="./img/front.png" alt="">
  </div>
  <div class="back-face face">
    <img src="./img/revertitparrot.gif" alt="">
  </div>
</div>`,

  `<div class="card" onclick="flipThisCard(this)">
  <div class="front-face face">
    <img src="./img/front.png" alt="">
  </div>
  <div class="back-face face">
    <img src="./img/tripletsparrot.gif" alt="">
  </div>
</div>`,

  `<div class="card" onclick="flipThisCard(this)">
  <div class="front-face face">
    <img src="./img/front.png" alt="">
  </div>
  <div class="back-face face">
    <img src="./img/tripletsparrot.gif" alt="">
  </div>
</div>`,

  `<div class="card" onclick="flipThisCard(this)">
  <div class="front-face face">
    <img src="./img/front.png" alt="">
  </div>
  <div class="back-face face">
    <img src="./img/unicornparrot.gif" alt="">
  </div>
</div>`,

  `<div class="card" onclick="flipThisCard(this)">
  <div class="front-face face">
    <img src="./img/front.png" alt="">
  </div>
  <div class="back-face face">
    <img src="./img/unicornparrot.gif" alt="">
  </div>
</div>`

]
const selectedArrayOfCards = []

// function for asking how mand cards? only pairs from 6 to 14
function howManyCards() {
   numberOfCards = prompt('How many cards do you wanna play with? enter a number from 6 to 14 (The number must be pair).')
// while the number of cards is not pair nor a number between 4 and 14, we ask how many cards the player wants to play.
  while(numberOfCards < 4 || numberOfCards > 14 || numberOfCards % 2 !== 0) {
    numberOfCards = prompt('How many cards do you wanna play with? enter a number from 6 to 14 (The number must be pair).')
  }
  
  // we call the function to insert the number of cards on the html code.
  insertingNumberOfCards();
}

howManyCards();

// function for inserting number of cards
function insertingNumberOfCards() {

// a loop for inserting the inserted number of cards on the array;
  for (let i = 0; i < numberOfCards; i++) {
    selectedArrayOfCards.push(arrayOfCards[i])
  }

// we randomize the array with the selected cards;
  selectedArrayOfCards.sort(randomizer)
  
// we grab the div '.cards' and insert the code of the expected number of cards on the HTML code using a loop.
  let insertCardsOnHTML = document.querySelector('.cards');
  for (let i = 0; i < selectedArrayOfCards.length; i++) {
    insertCardsOnHTML.innerHTML += selectedArrayOfCards[i];
  }

}

// function for shuffling cards 
function randomizer() { 
	return Math.random() - 0.5; 
}


// function for flipping the clicked card.
function flipThisCard(clickedCard) {

let verifyFirstFlippedCard = document.querySelector('.first-turned-card');

let verifySecondFlippedCard = document.querySelector('.second-turned-card');

let verifyIfCardIsFlipped = clickedCard.classList.contains('already-turned')



//we check if there is a flipped card, if there isn't we flip it and add the first turned card class
  if (verifyFirstFlippedCard === null && !verifyIfCardIsFlipped) {

  let turnFrontFaceClickedCard = clickedCard.querySelector('.front-face')
  turnFrontFaceClickedCard.classList.add('turn-front-face')

  let turnBackFaceClickedCard = clickedCard.querySelector('.back-face')
  turnBackFaceClickedCard.classList.add('turn-back-face')
  
  clickedCard.classList.add('first-turned-card')



  }

// if there is a already flipped card, we flip the other card and add the class second turned card. We then call the function to check if they are equal
  if (verifyFirstFlippedCard !== null && verifySecondFlippedCard === null && !verifyIfCardIsFlipped) {

  let turnFrontFaceClickedCard = clickedCard.querySelector('.front-face')
  turnFrontFaceClickedCard.classList.add('turn-front-face')

  let turnBackFaceClickedCard = clickedCard.querySelector('.back-face')
  turnBackFaceClickedCard.classList.add('turn-back-face')

  clickedCard.classList.add('second-turned-card')

  setTimeout(checkFlippedCards, 1000)
  countPlays ++
  }

  

  


}

let countPlays = 0;
let TurnedCards = 0;

// function to check if the turned cards are equal.
function checkFlippedCards () {

  let grabFirstCard = document.querySelector('.first-turned-card');
 
  let grabSecondCard = document.querySelector('.second-turned-card');

  if (grabFirstCard.innerHTML === grabSecondCard.innerHTML) {
    grabFirstCard.classList.add('already-turned');
    grabFirstCard.classList.remove('first-turned-card');
    grabSecondCard.classList.add('already-turned');
    grabSecondCard.classList.remove('second-turned-card');

    TurnedCards +=2
    checkIfGameIsOver()
  } else {

    let removeFrontFaceTurnFirstCard = grabFirstCard.querySelector('.front-face')
    let removeBackFaceTurnFirstCard = grabFirstCard.querySelector('.back-face');

    removeFrontFaceTurnFirstCard.classList.remove('turn-front-face');
    removeBackFaceTurnFirstCard.classList.remove('turn-back-face');

    let removeFrontFaceTurnSecondCard = grabSecondCard.querySelector('.front-face')
    let removeBackFaceTurnSecondCard = grabSecondCard.querySelector('.back-face');

    removeFrontFaceTurnSecondCard.classList.remove('turn-front-face');
    removeBackFaceTurnSecondCard.classList.remove('turn-back-face');

    grabFirstCard.classList.remove('first-turned-card');
    grabSecondCard.classList.remove('second-turned-card')
  }

}

function checkIfGameIsOver() {
  if (TurnedCards == numberOfCards) {
    alert(`You have won the game in ${countPlays} guesses!`)
  }
}

