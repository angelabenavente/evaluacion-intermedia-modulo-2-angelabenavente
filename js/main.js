'use strict';

const numberChoosenNode = document.querySelector('.number');
const submitButtonNode = document.querySelector('.submitButton');
const clueTextNode = document.querySelector('.clueDiv > .clue');
const attempsTextNode = document.querySelector('.attempsDiv > .attemps > .attempsNumber');

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const randomNumber = getRandomNumber(100);
console.log(`Mi número aleatorio es: ${randomNumber}.`);

function increaseCountClicks() {
  let tryCounter = parseInt(attempsTextNode.innerHTML);
  tryCounter = tryCounter + 1;
  attempsTextNode.innerHTML = tryCounter;
}

function getClue() {
  if (randomNumber === parseInt(numberChoosenNode.value)) {
    clueTextNode.innerHTML = '¡¡¡Has ganado, campeona!!!.';
  } else if (randomNumber > numberChoosenNode.value) {
    clueTextNode.innerHTML = 'Demadiado bajo.';
  } else if (randomNumber < numberChoosenNode.value) {
    clueTextNode.innerHTML = 'Demadiado alto.';
  } else if (isNaN(numberChoosenNode.value) ) {
    clueTextNode.innerHTML = 'Debe introducir un número.';
  } else if (parseInt(numberChoosenNode.value) == null || numberChoosenNode.value.length == 0 || /^\s*$/.test(numberChoosenNode.value) || parseInt(numberChoosenNode.value) < 0 || parseInt(numberChoosenNode.value) > 100 ) { clueTextNode.innerHTML = 'Debe introducir un número entre 1 y 100.'; }
  increaseCountClicks()
}

submitButtonNode.addEventListener('click', getClue);
