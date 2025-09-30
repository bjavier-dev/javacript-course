// Behind the Scenes Development Hour 1 - Scoping & Hoisting
'use strict';

console.log('=== BEHIND THE SCENES: SCOPING & HOISTING ===');

// ... [everything above stays the same] ...

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

// Detached function call (FIXED with bind)
const greetFunction = person.greet.bind(person);
greetFunction(); // "Hello, I am Jonas"

// This breaks in event handlers (browser only!)
if (typeof document !== 'undefined') {
  const button = document.querySelector('button');
  if (button) {
    button.addEventListener('click', () => person.greet());
    button.addEventListener('click', person.greet.bind(person));
  }
}

const obj = {
  name: 'Object',
  regularMethod: function () {
    console.log('Regular:', this.name); // this = obj
  },
  arrowMethod() {
    console.log('Arrow fixed:', this.name);
  },
};

obj.regularMethod();
obj.arrowMethod();

const quiz = {
  name: 'Quiz Object',
  regularMethod() {
    console.log('Regular:', this.name);
  },
  arrowMethod() {
    console.log('Arrow fixed:', this.name);
  },
};

quiz.regularMethod();
quiz.arrowMethod();

const timer = {
  name: 'Timer',
  start: function () {
    console.log(`${this.name} starting...`);
    const self = this;
    setTimeout(function () {
      console.log(`${self.name} finished`);
    }, 1000);
  },
  startModern: function () {
    console.log(`${this.name} starting modern...`);
    setTimeout(() => {
      console.log(`${this.name} finished modern`);
    }, 1500);
  },
};

timer.start();
timer.startModern();

const user = {
  name: 'Alice',
  hobbies: ['reading', 'coding', 'gaming'],
  printHobbiesBad() {
    this.hobbies.forEach(hobby => {
      console.log(`${this.name} likes ${hobby}`);
    });
  },
  printHobbiesGood() {
    this.hobbies.forEach(hobby => {
      console.log(`${this.name} likes ${hobby}`);
    });
  },
};

user.printHobbiesBad();
user.printHobbiesGood();

const functionTypes = {
  regularFunction: function () {
    console.log('Arguments length:', arguments.length);
    console.log('First argument:', arguments[0]);
  },
  arrowFunction: () => {
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

const userCard = {
  name: 'Sarah',
  setupEvents() {
    console.log('Event setup for:', this.name);
  },
};
userCard.setupEvents();

const calculator = {
  numbers: [1, 2, 3, 4, 5],
  multiplier: 2,
  processNumbers() {
    return this.numbers.map(num => num * this.multiplier);
  },
};
console.log('Processed numbers:', calculator.processNumbers());

const myTimer = {
  name: 'My Timer',
  startCountdown() {
    console.log(`${this.name} starting countdown...`);
    setTimeout(() => {
      console.log(`${this.name} countdown finished!`);
    }, 1000);
  },
};
myTimer.startCountdown();

// PRIMITIVES IN STACK
let age = 30;
let oldAge = age;
age = 31;
console.log('age:', age);
console.log('oldAge:', oldAge);

function changeAge(person, newAge) {
  person.age = newAge;
  return person;
}
const originalPerson = { name: 'Sarah', age: 25 };
const updatedPerson = changeAge(originalPerson, 30);
console.log('original:', originalPerson);
console.log('updated:', updatedPerson);
console.log('same object?:', originalPerson === updatedPerson);

const original = {
  name: 'Alice',
  age: 28,
  hobbies: ['reading', 'coding'],
};
const shallowCopy = { ...original };
shallowCopy.name = 'Bob';
console.log('original name:', original.name);
console.log('copy name:', shallowCopy.name);
shallowCopy.hobbies.push('gaming');
console.log('original hobbies:', original.hobbies);
console.log('copy hobbies:', shallowCopy.hobbies);

const anotherCopy = Object.assign({}, original);
console.log('Object.assign copy:', anotherCopy);

const deepOriginal = {
  name: 'Charlie',
  age: 32,
  address: { city: 'Paris', country: 'France' },
  hobbies: ['travel', 'photography'],
};
const deepCopy = structuredClone(deepOriginal);
deepCopy.address.city = 'London';
deepCopy.hobbies.push('cooking');
console.log('original address:', deepOriginal.address);
console.log('copy address:', deepCopy.address);
console.log('original hobbies:', deepOriginal.hobbies);
console.log('copy hobbies:', deepCopy.hobbies);

const problemObject = {
  name: 'Test',
  date: new Date(),
  method: function () {
    return 'hello';
  },
  undefinedValue: undefined,
};
const brokenCopy = JSON.parse(JSON.stringify(problemObject));
console.log('Broken copy:', brokenCopy);
const workingCopy = structuredClone(problemObject);
console.log('Working copy:', workingCopy);

const userManager = {
  users: [],
  addUser: function (userData) {
    const userCopy = structuredClone(userData);
    this.users.push(userCopy);
    return this;
  },
  getUsers: function () {
    return [...this.users];
  },
};
const originalUser = { name: 'John', preferences: { theme: 'dark' } };
userManager.addUser(originalUser);
originalUser.name = 'Modified';
console.log('Original changed:', originalUser);
console.log('Stored user:', userManager.getUsers()[0]);

// 1. Hoisting and TDZ
function demonstrateThis() {
  console.log('this in strict mode:', this);
}
demonstrateThis();

const readOnlyObj = Object.freeze({ name: 'Frozen' });
try {
  readOnlyObj.name = 'Changed';
  console.log('Mutation succeeded');
} catch (error) {
  console.log('Strict mode caught error:', error.message);
}
