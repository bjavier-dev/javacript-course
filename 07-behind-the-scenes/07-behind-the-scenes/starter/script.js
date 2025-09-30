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
