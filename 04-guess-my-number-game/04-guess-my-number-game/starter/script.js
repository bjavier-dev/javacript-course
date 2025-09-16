'use strict';

// Game Development Hour 1 - Game Foundation & DOM Basics

console.log('=== GAME DEVELOPMENT: GUESS MY NUMBER ===');

/*
What We're Building Today:
- A complete "Guess My Number" game
- Player guesses a number between 1-20
- Game provides feedback: "Too high!" or "Too low!"
- Score tracking and high score system
- Visual feedback and professional polish

This teaches us DOM manipulation - how JavaScript talks to HTML!
*/

console.log('Goal: Build a complete interactive game from scratch');
console.log('Focus: DOM manipulation, game state, and user interaction');

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
const guessInput = document.querySelector('.guess');

numberEl.textContent = 15;
highscoreEl.textContent = 100;
guessInput.value = 7;

console.log('Number:', numberEl);
console.log('Highscore:', highscoreEl);
console.log('Guess:', guessInput);

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
