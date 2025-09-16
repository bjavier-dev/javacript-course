'use strict';

// // Game Development Hour 1 - Game Foundation & DOM Basics

// console.log('=== GAME DEVELOPMENT: GUESS MY NUMBER ===');

// /*
// What We're Building Today:
// - A complete "Guess My Number" game
// - Player guesses a number between 1-20
// - Game provides feedback: "Too high!" or "Too low!"
// - Score tracking and high score system
// - Visual feedback and professional polish

// This teaches us DOM manipulation - how JavaScript talks to HTML!
// */

// console.log('Goal: Build a complete interactive game from scratch');
// console.log('Focus: DOM manipulation, game state, and user interaction');

////////////////////////////////////
// ** ADDITION: Define secretNumber and score early so they exist for first event listener **
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

////////////////////////////////////
// DOM Element Selection - The Foundation
console.log('=== DOM ELEMENT SELECTION ===');

// Select elements by class name
const messageEl = document.querySelector('.message');
console.log(messageEl); // Shows the HTML element

// Select elements by class name
const scoreEl = document.querySelector('.score');
console.log(scoreEl);

// Select input elements
const guessEl = document.querySelector('.guess');
console.log(guessEl);

// Reading element content
console.log('Current message:', messageEl.textContent);
console.log('Current score:', scoreEl.textContent);

// Modifying element content
messageEl.textContent = 'Hello from JavaScript!';
scoreEl.textContent = '15';

console.log('Elements updated!');

// Input elements use .value property
const guessInput = document.querySelector('.guess');

// Reading input value
console.log('Current guess:', guessInput.value);

// Setting input value
guessInput.value = '10';
console.log('Guess set to:', guessInput.value);

// Practice selecting and modifying elements:
// 1. Select the number display and change it to 15
// 2. Select the highscore and set it to 100
// 3. Select the guess input and set a value
// 4. Log all the elements to the console

// Your code here...
const numberEl = document.querySelector('.number');
const highscoreEl = document.querySelector('.highscore');
const guessInput2 = document.querySelector('.guess');

numberEl.textContent = 15;
highscoreEl.textContent = 100;
guessInput2.value = 7;

console.log('Number:', numberEl);
console.log('Highscore:', highscoreEl);
console.log('Guess:', guessInput2);

// Create your own game state variables:
// 1. Create a player name variable
// 2. Create an attempts counter
// 3. Create a game active boolean
// 4. Create a random number between 1-10 (easier for testing)
// 5. Display all variables in the console

// Your code here...
let playerName = 'Player';
let attempts = 0;
let gameActive = true;
let easySecret = Math.trunc(Math.random() * 10) + 1;

console.log('Player:', playerName);
console.log('Attempts:', attempts);
console.log('Game active:', gameActive);
console.log('Easy secret number:', easySecret);

////////////////////////////////////
// Event Listeners - Making Buttons Interactive

// Add click event to the Check button
document.querySelector('.check').addEventListener('click', function () {
  console.log('Check button clicked!');

  // Get the player's guess and convert to number
  const guess = Number(document.querySelector('.guess').value);
  console.log('Player guessed:', guess);

  // Basic game logic - check if guess is correct
  if (guess === secretNumber) {
    console.log('Correct guess!');
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
  } else if (guess > secretNumber) {
    console.log('Too high!');
    document.querySelector('.message').textContent = '📈 Too high!';
  } else if (guess < secretNumber) {
    console.log('Too low!');
    document.querySelector('.message').textContent = '📉 Too low!';
  }
});

// Always convert input to number for comparison
const guess = Number(document.querySelector('.guess').value);

// Why we need Number():
console.log('Input as string:', document.querySelector('.guess').value);
console.log('Input as number:', Number(document.querySelector('.guess').value));
console.log('String comparison:', '15' === 15);
console.log('Number comparison:', 15 === 15);

////////////////////////////////////
// Game Foundation Verification

console.log('🎮 Game Foundation Complete!');
console.log('✅ DOM element selection working');
console.log('✅ Game state variables initialized');
console.log('✅ Event listeners responding');
console.log('✅ Basic game logic implemented');
console.log('Ready for advanced features in Hour 2!');

// Test your game one more time
console.log('Secret number for testing:', secretNumber);
console.log('Try to guess it!');

////////////////////////////////////
// Score tracking - reduce score for wrong guesses

// Add this inside your event listener, after the game logic
if (guess === secretNumber) {
  // ... existing win logic ...
} else if (guess > secretNumber) {
  console.log('Too high!');
  document.querySelector('.message').textContent = '📈 Too high!';
  // Say: "Add score decrementing here"
  score--;
} else if (guess < secretNumber) {
  console.log('Too low!');
  document.querySelector('.message').textContent = '📉 Too low!';
  // Say: "Add score decrementing here"
  score--;
}

// Update the score display after both wrong guesses
document.querySelector('.score').textContent = score;

////////////////////////////////////
// Win condition - detect when player wins

if (guess === secretNumber) {
  console.log('Correct guess!');
  document.querySelector('.message').textContent = '🎉 Correct Number!';
  document.querySelector('.number').textContent = secretNumber;

  // Check if this is a new high score
  if (score > highscore) {
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
  }

  // Show win message and disable further guessing
  document.querySelector('.message').textContent = '🎉 You won!';
  document.querySelector('.guess').disabled = true;
  document.querySelector('.check').disabled = true;
}

////////////////////////////////////
// Lose condition - detect when player loses

// Add this after the score display update
if (score < 1) {
  document.querySelector('.message').textContent = '💥 You lost!';
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('.guess').disabled = true;
  document.querySelector('.check').disabled = true;
}

////////////////////////////////////
// Game restart - reset everything for new game

document.querySelector('.again').addEventListener('click', function () {
  // Reset game state
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // Reset display
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';

  // Re-enable input and button
  document.querySelector('.guess').disabled = false;
  document.querySelector('.check').disabled = false;
});

////////////////////////////////////
// Enhanced Game Verification

console.log('🎮 Enhanced Game Complete!');
console.log('✅ Score tracking working');
console.log('✅ Win/lose conditions implemented');
console.log('✅ Game restart functionality working');
console.log('✅ Complete game experience ready');
console.log('Ready for visual polish in Hour 3!');

// Test your complete game
console.log('Test: Try to win, try to lose, then restart!');

////////////////////////////////////
// Visual feedback - change styles based on game state

// WIN: set background to green
if (guess === secretNumber) {
  // ... your existing win logic ...
  document.body.style.backgroundColor = 'green';
}

// LOSE: set background to red (place inside your lose condition)
if (score < 1) {
  // ... your existing lose logic ...
  document.body.style.backgroundColor = 'red';
}

// RESTART: clear inline background so CSS default applies (inside the Again! handler)
document.querySelector('.again').addEventListener('click', function () {
  // ... your existing restart logic ...
  document.body.style.backgroundColor = '';
});

////////////////////////////////////
// Input validation - check for valid input

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // 1) Missing input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
    return; // stop here
  }

  // 2) Out of range
  if (guess < 1 || guess > 20) {
    document.querySelector('.message').textContent =
      'Number must be between 1 and 20!';
    return; // stop here
  }

  // ... your existing game logic (win / too high / too low / update score / lose) ...
});

////////////////////////////////////
// Constants & Selectors (with suffixes to avoid conflicts)

const MIN_NUMBER1 = 1;
const MAX_NUMBER1 = 20;
const START_SCORE1 = 20;

const bodyEl1 = document.body;
const messageEl1 = document.querySelector('.message');
const numberEl1 = document.querySelector('.number');
const scoreEl1 = document.querySelector('.score');
const highscoreEl1 = document.querySelector('.highscore');
const guessInputEl1 = document.querySelector('.guess');
const checkBtnEl1 = document.querySelector('.check');
const againBtnEl1 = document.querySelector('.again');

////////////////////////////////////
// UI Helpers (with suffixes)

function setMessage1(text) {
  messageEl1.textContent = text;
}
function setNumber1(value) {
  numberEl1.textContent = value;
}
function setScore1(value) {
  scoreEl1.textContent = value;
}
function setHighscore1(value) {
  highscoreEl1.textContent = value;
}
function setBackground1(color) {
  bodyEl1.style.backgroundColor = color;
}
function disablePlay1(disabled) {
  guessInputEl1.disabled = disabled;
  checkBtnEl1.disabled = disabled;
}
function clearInput1() {
  guessInputEl1.value = '';
}

////////////////////////////////////
// Game State & Reset

let secretNumber1 = Math.trunc(Math.random() * MAX_NUMBER1) + MIN_NUMBER1;
let score1 = START_SCORE1;
let highscore1 = 0;

function resetGameState1() {
  score1 = START_SCORE1;
  secretNumber1 = Math.trunc(Math.random() * MAX_NUMBER1) + MIN_NUMBER1;
}

function renderInitialUI1() {
  setMessage1('Start guessing...');
  setNumber1('?');
  setScore1(score1);
  clearInput1();
  disablePlay1(false);
  setBackground1('');
}

// Call on load
renderInitialUI1();

////////////////////////////////////
// Handlers

checkBtnEl1.addEventListener('click', function () {
  const guess = Number(guessInputEl1.value);

  if (!guess) return setMessage1('No number!');
  if (guess < MIN_NUMBER1 || guess > MAX_NUMBER1)
    return setMessage1(
      `Number must be between ${MIN_NUMBER1} and ${MAX_NUMBER1}!`
    );

  if (guess === secretNumber1) {
    setMessage1('🎉 Correct Number!');
    setNumber1(secretNumber1);
    setBackground1('green');
    if (score1 > highscore1) {
      highscore1 = score1;
      setHighscore1(highscore1);
    }
    disablePlay1(true);
    clearInput1();
    return;
  }

  setMessage1(guess > secretNumber1 ? '📈 Too high!' : '📉 Too low!');
  score1--;
  setScore1(score1);

  if (score1 < 1) {
    setMessage1('💥 You lost!');
    setNumber1(secretNumber1);
    setBackground1('red');
    disablePlay1(true);
    clearInput1();
  }
});

againBtnEl1.addEventListener('click', function () {
  resetGameState1();
  renderInitialUI1();
  guessInputEl1.focus();
});

// Enter key submits when possible
window.addEventListener('keydown', function (e) {
  if (e.key === 'Enter' && !checkBtnEl1.disabled) {
    checkBtnEl1.click();
  }
});

// Focus input on restart
againBtnEl1.addEventListener('click', function () {
  guessInputEl1.focus();
});
