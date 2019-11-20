'use strict';

const numberChoosenNode = document.querySelector('.number');
const submitButtonNode = document.querySelector('.submitButton');
const clueTextNode = document.querySelector('.clueDiv > .clueText');
const clueDivNode = document.querySelector('.clueDiv > .clue');
const attempsTextNode = document.querySelector('.attempsDiv > .attemps > .attempsNumber');
const maxNumber = 100;
const minNumber = 0;
let tryCounter = 0;


const getRandomNumber = max => Math.ceil(Math.random() * max);
const randomNumber = getRandomNumber(maxNumber);
console.log(`Mi número aleatorio es: ${randomNumber}.`);

function increaseCountClicks() {
  attempsTextNode.innerHTML = tryCounter ;
  tryCounter++;
  attempsTextNode.innerHTML = tryCounter;
}

function getClue() {
  if (numberChoosenNode.value == '' || numberChoosenNode.value > maxNumber || numberChoosenNode.value <= minNumber || isNaN(numberChoosenNode.value) === false) {
    clueTextNode.innerHTML = 'Debes introducir un número entre 1 y 100.';
    clueDivNode.innerHTML = '';
    //isNaN validation because I can write 'e' letter in spite of type number input.
  } else if (randomNumber > numberChoosenNode.value) {
    clueTextNode.innerHTML = 'Demadiado bajo.';
  } else if (randomNumber < numberChoosenNode.value) {
    clueTextNode.innerHTML = 'Demadiado alto.';
  } else {
    clueTextNode.innerHTML = '¡¡¡Has ganado, campeona!!!.';
  }
  increaseCountClicks()
}
function playGame(){
  getClue();
}
submitButtonNode.addEventListener('click', playGame);
