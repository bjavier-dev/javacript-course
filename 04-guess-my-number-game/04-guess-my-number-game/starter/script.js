'use strict';

// Declare game state variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Select DOM elements
const numberEl = document.querySelector('.number');
const highscoreEl = document.querySelector('.highscore');
const guessInput = document.querySelector('.guess');
const messageEl = document.querySelector('.message');
const scoreEl = document.querySelector('.score');
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');

// Initialize UI
numberEl.textContent = '?';
highscoreEl.textContent = highscore;
scoreEl.textContent = score;
messageEl.textContent = 'Start guessing...';
guessInput.value = '';

// Game logic on Check button click
checkBtn.addEventListener('click', function () {
  const guess = Number(guessInput.value);
  console.log('Player guessed:', guess);

  if (!guess) {
    messageEl.textContent = '⛔️ Please enter a number!';
    return;
  }

  if (score < 1) {
    messageEl.textContent = '💥 You lost! Click Again to restart.';
    return;
  }

  if (guess === secretNumber) {
    messageEl.textContent = '🎉 Correct Number!';
    numberEl.textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      highscoreEl.textContent = highscore;
    }

    // Disable input and button on win
    guessInput.disabled = true;
    checkBtn.disabled = true;
  } else {
    if (guess > secretNumber) {
      messageEl.textContent = '📈 Too high!';
    } else {
      messageEl.textContent = '📉 Too low!';
    }
    score--;
    scoreEl.textContent = score;

    if (score < 1) {
      messageEl.textContent = '💥 You lost! Click Again to restart.';
      numberEl.textContent = secretNumber;
      guessInput.disabled = true;
      checkBtn.disabled = true;
    }
  }
});

// Reset game on Again button click
againBtn.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  messageEl.textContent = 'Start guessing...';
  scoreEl.textContent = score;
  numberEl.textContent = '?';
  guessInput.value = '';
  guessInput.disabled = false;
  checkBtn.disabled = false;
});

console.log('🎮 Game initialized!');
console.log('Secret number (for testing):', secretNumber);
