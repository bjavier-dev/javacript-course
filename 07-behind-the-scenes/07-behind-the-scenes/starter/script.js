// Behind the Scenes Development Hour 1 - Scoping & Hoisting
'use strict';

console.log('=== BEHIND THE SCENES: SCOPING & HOISTING ===');

/*
In this hour, we'll explore:
1. How JavaScript executes code (execution contexts)
2. Where variables are accessible (scoping)
3. Why some code works before declaration (hoisting)
4. How to avoid common pitfalls (TDZ and strict mode)

This foundation is crucial for understanding JavaScript's behavior!
*/

// Global Execution Context
console.log('Starting program');

function alpha() {
  console.log('alpha:start');
  beta();
  console.log('alpha:end');
}

function beta() {
  console.log('beta');
}

alpha();
// Expected: alpha:start → beta → alpha:end

function outerFunction() {
  console.log('Outer function start');
  innerFunction();
  console.log('Outer function end');
}

function innerFunction() {
  console.log('Inner function');
  console.trace(); // Add this to see the call stack
}

outerFunction();

const globalVar = 'I am global';

function anyFunction() {
  console.log(globalVar); // Accessible everywhere
}

function myFunction() {
  const functionVar = 'I am function-scoped';
  console.log(functionVar); // Works here
}
// console.log(functionVar); // Error: not accessible outside

if (true) {
  let blockVar = 'I am block-scoped';
  const alsoBlockVar = 'Me too';
  var notBlockScoped = 'I leak out'; // var ignores block scope
}

// console.log(blockVar); // Error: not accessible
// console.log(alsoBlockVar); // Error: not accessible
console.log(notBlockScoped); // Works! var leaks out

const outer = 'global';

function demoScope() {
  const inner = 'function';
  if (true) {
    const blockConst = 'block';
    var functionVar = 'var-function-scoped';
    console.log(outer, inner, blockConst, functionVar);
  }
  // blockConst is NOT accessible here
  console.log(outer, inner, 'blockConst not here', functionVar);
}

demoScope();

// 🔹 Scope chain example
const name = 'GlobalName';

function a() {
  const name = 'FunctionName';
  function b() {
    console.log(name); // 'FunctionName' via scope chain
  }
  b();
}

a();

// 🔹 Variable hoisting examples
console.log(varX); // undefined (var hoisted, initialized to undefined)
// console.log(letX); // ReferenceError (TDZ)
// console.log(constX); // ReferenceError (TDZ)

var varX = 1;
let letX = 2;
const constX = 3;

console.log(varX); // 1
console.log(letX); // 2
console.log(constX); // 3

// 🔹 Function hoisting examples
console.log(addDecl(2, 3)); // 5 (function declaration hoisted)
// console.log(addExpr(2, 3)); // ReferenceError in TDZ
// console.log(addArrow(2, 3)); // ReferenceError in TDZ

function addDecl(a, b) {
  return a + b;
}
const addExpr = function (a, b) {
  return a + b;
};
const addArrow = (a, b) => a + b;

// Now all work:
console.log(addDecl(2, 3)); // 5
console.log(addExpr(2, 3)); // 5
console.log(addArrow(2, 3)); // 5

// 🔹 TDZ Fix Example
// Bad: TDZ
// console.log(apiUrl); // ReferenceError
// const apiUrl = 'https://example.com';

// Good: declare before use
const apiUrl = 'https://example.com';
console.log(apiUrl);

// 1) Hoisting expectation
// console.log(title); // Uncomment to test: TDZ with let
let title = 'Behind the Scenes';

// 2) Scope chain expectation
function outerScopeExample() {
  const label = 'outer';
  function innerScopeExample() {
    console.log('scope:', label); // expect 'outer'
  }
  innerScopeExample();
}
outerScopeExample();

// 3) Call stack expectation
function one() {
  two();
}
function two() {
  console.log('stack: two');
}
one(); // expect 'stack: two' 

const person = {
  name: 'Jonas',
  greet: function () {
    console.log(`Hello, I am ${this.name}`);
  },
};

// Method borrowing
const anotherPerson = { name: 'Sarah' };
anotherPerson.greet = person.greet;
anotherPerson.greet(); // "Hello, I am Sarah"

// Detached function call
const greetFunction = person.greet;
greetFunction(); // "Hello, I am undefined" (in strict mode)

// This breaks in event handlers
const button = document.querySelector('button');
button.addEventListener('click', person.greet); // `this` becomes the button element!

// Fix: use arrow function wrapper
button.addEventListener('click', () => person.greet());
// Or bind the method
button.addEventListener('click', person.greet.bind(person));

const obj = {
  name: 'Object',

  regularMethod: function () {
    console.log('Regular:', this.name); // this = obj
  },

  arrowMethod: () => {
    console.log('Arrow:', this.name); // this = global (undefined in strict mode)
  },
};

obj.regularMethod(); // "Regular: Object"
obj.arrowMethod(); // "Arrow: undefined"

const quiz = {
  name: 'Quiz Object',
  regularMethod() {
    console.log('Regular:', this.name);
  },
  arrowMethod: () => {
    console.log('Arrow:', this.name);
  },
};

quiz.regularMethod(); // Predict: ?
quiz.arrowMethod(); // Predict: ?

const timer = {
  name: 'Timer',

  // Old approach with self = this
  start: function () {
    console.log(`${this.name} starting...`);
    const self = this;

    setTimeout(function () {
      console.log(`${self.name} finished`);
    }, 1000);
  },

  // Modern approach with arrow function
  startModern: function () {
    console.log(`${this.name} starting modern...`);

    setTimeout(() => {
      console.log(`${this.name} finished modern`); // this works!
    }, 1500);
  },
};

timer.start(); // Uses self = this approach
timer.startModern(); // Uses arrow function approach

const user = {
  name: 'Alice',
  hobbies: ['reading', 'coding', 'gaming'],

  // BROKEN: arrow function loses `this`
  printHobbiesBad: () => {
    this.hobbies.forEach(hobby => {
      console.log(`${this.name} likes ${hobby}`); // this.name is undefined!
    });
  },

  // FIXED: regular function preserves `this`
  printHobbiesGood() {
    this.hobbies.forEach(hobby => {
      console.log(`${this.name} likes ${hobby}`); // this.name works!
    });
  },
};

user.printHobbiesBad(); // Fails - this.name is undefined
user.printHobbiesGood(); // Works - shows all hobbies

const functionTypes = {
  regularFunction: function () {
    console.log('Arguments length:', arguments.length);
    console.log('First argument:', arguments[0]);
  },

  arrowFunction: () => {
    // console.log(arguments); // ReferenceError: arguments is not defined
    console.log('Arrow function called');
  },

  modernFunction: (...args) => {
    console.log('Args length:', args.length);
    console.log('First arg:', args[0]);
  },
};

functionTypes.regularFunction('hello', 'world');
functionTypes.arrowFunction('test');
functionTypes.modernFunction('modern', 'approach');

// Event handlers and this binding
const userCard = {
  name: 'Sarah',
  // element: document.querySelector('.user-card'), // Commented for demo

  setupEvents() {
    // BROKEN: this becomes the button element
    // this.element.addEventListener('click', function() {
    //   console.log('Clicked user:', this.name); // this = button element!
    // });

    // FIXED: arrow function preserves outer this
    // this.element.addEventListener('click', () => {
    //   console.log('Clicked user:', this.name); // this = userCard object!
    // });

    console.log('Event setup for:', this.name);
  },
};

userCard.setupEvents();

// Array methods with this context
const calculator = {
  numbers: [1, 2, 3, 4, 5],
  multiplier: 2,

  processNumbers() {
    return this.numbers.map(num => num * this.multiplier);
  },
};

console.log('Processed numbers:', calculator.processNumbers()); // [2, 4, 6, 8, 10]

const myTimer = {
  name: 'My Timer',

  startCountdown() {
    console.log(`${this.name} starting countdown...`);

    // Your code here: use setTimeout with arrow function
    // to log "${this.name} countdown finished!" after 1 second
  },
};

myTimer.startCountdown();