// // JavaScript Fundamentals - Part 1
// // We'll write our code here!

// let js = "amazing";
// console.log(40 + 8 + 23 - 10);
// console.log(js);

// console.log("=== VARIABLES ===");

// let firstName = "Jonas";
// console.log(firstName);

// let age = 30;
// console.log(age);
// age = 50;
// console.log(age);

// const birthYear = 1991;
// console.log(birthYear);

// const PI = 3.1415;
// console.log(PI);

// const country = "Philippines";
// const language = "Filipino";

// age = 25;
// age = 26;

// // good variable name
// // let firstName
// // let myCurrentJob
// // const PI


// //bad
// // let 3years
// // let jonas&matilda
// // let now

// console.log("=== DATA TYPES ===");

// // number
// let id = 12345;
// console.log(id);
// console.log(typeof id);

// // string
// let lastName = "Doe";
// console.log(lastName);
// console.log(typeof lastName);

// // boolean
// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// console.log(typeof javascriptIsFun);

// // undefined
// let year;
// console.log(year);
// console.log(typeof year);

// let dynamicVariable = 40;
// console.log(dynamicVariable, typeof dynamicVariable);


// // change to a string
// dynamicVariable = "i am now a string!";
// console.log(dynamicVariable, typeof dynamicVariable);

// // change to boolean
// dynamicVariable = true;
// console.log(dynamicVariable, typeof dynamicVariable);

// basic math operators
console.log("=== MATH OPERATORS ===");

const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

// more math operators
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
console.log("Math operations:");
console.log("Addition:", 10 + 5);
console.log("Subtraction:", 20 - 8);
console.log("Multiplication:", 4 * 7);
console.log("Division:", 15 / 3);
console.log("Exponentiation:", 2 ** 3);

// math with strings
const firstName = "Jonas";
const lastName = "Doe";
console.log(firstName + " " + lastName);

console.log("Hello " + "World" + "!");

// assignment operators
console.log("=== ASSIGNMENT OPERATORS ===");

x += 10;
console.log("x starts as:", x);

x *= 4;
console.log("x starts as:", x);

x /= 2;
console.log("x starts as:", x);

x++;
console.log("x starts as:", x);

x--;
console.log("x starts as:", x);

x--;
console.log("x starts as:", x);

// comparison operators
console.log("=== COMPARISON OPERATORS ===");

console.log("Age comparison:");
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18); 
console.log(ageJonas < 30); 

console.log("Number comparisons:");
console.log(25 > 20);
console.log(15 < 10);
console.log(18 >= 18);
console.log(16 <= 15); 

const isFullAge = ageSarah >= 18;
console.log("Sarah is adult:", isFullAge); 

const isJonasOlder = ageJonas > ageSarah;
console.log("Jonas is older:", isJonasOlder);

console.log("Complex comparison:");
console.log(now - 1991 > now - 2018);

let z, y;
z = y = 25 - 10 - 5;
console.log(z, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);