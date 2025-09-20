'use strict';

// Selections
const modalEl = document.querySelector('.modal');
const overlayEl = document.querySelector('.overlay');
const btnCloseModalEl = document.querySelector('.close-modal');
const btnsOpenModalEl = document.querySelectorAll('.show-modal');

// Add focus management variables
let lastFocusedButton = null;

// Helper functions
const openModal = function () {
  modalEl.classList.remove('hidden');
  overlayEl.classList.remove('hidden');
  modalEl.focus();
  lastFocusedButton = document.activeElement;
};

const closeModal = function () {
  modalEl.classList.add('hidden');
  overlayEl.classList.add('hidden');
  if (lastFocusedButton) {
    lastFocusedButton.focus();
  }
};

// Event listeners
btnsOpenModalEl.forEach(btn => btn.addEventListener('click', openModal));
btnCloseModalEl.addEventListener('click', closeModal);
overlayEl.addEventListener('click', closeModal);

console.log('=== MODAL DEVLOPMENT: KEYBOARD EVENTS & ADVANCED UX ===');
console.log('Enhanced modal devlopment ready!');

console.log('Keyboard events test');

document.addEventListener('keydown', function (e) {
    console.log('Key pressed:', e);
    console.log('Key name:', e.key);
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        console.log('Escape key pressed');
    }
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modalEl.classList.contains('hidden')) {
        closeModal();
    }
});

// Let's add some debugging to see what's happening
document.addEventListener('keydown', function (e) {
  // Log what's happening for debugging
  console.log(
    'Key pressed:',
    e.key,
    'Modal visible:',
    !modalEl.classList.contains('hidden')
  );

  // Check if ESC key was pressed AND modal is visible
  if (e.key === 'Escape' && !modalEl.classList.contains('hidden')) {
    closeModal();
  }
});




