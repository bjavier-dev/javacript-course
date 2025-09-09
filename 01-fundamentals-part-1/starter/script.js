// // // // JavaScript Fundamentals - Part 1
// // // // We'll write our code here!

// // // let js = "amazing";
// // // console.log(40 + 8 + 23 - 10);
// // // console.log(js);

// // // console.log("=== VARIABLES ===");

// // // let firstName = "Jonas";
// // // console.log(firstName);

// // // let age = 30;
// // // console.log(age);
// // // age = 50;
// // // console.log(age);

// // // const birthYear = 1991;
// // // console.log(birthYear);

// // // const PI = 3.1415;
// // // console.log(PI);

// // // const country = "Philippines";
// // // const language = "Filipino";

// // // age = 25;
// // // age = 26;

// // // // good variable name
// // // // let firstName
// // // // let myCurrentJob
// // // // const PI


// // // //bad
// // // // let 3years
// // // // let jonas&matilda
// // // // let now

// // // console.log("=== DATA TYPES ===");

// // // // number
// // // let id = 12345;
// // // console.log(id);
// // // console.log(typeof id);

// // // // string
// // // let lastName = "Doe";
// // // console.log(lastName);
// // // console.log(typeof lastName);

// // // // boolean
// // // let javascriptIsFun = true;
// // // console.log(javascriptIsFun);
// // // console.log(typeof javascriptIsFun);

// // // // undefined
// // // let year;
// // // console.log(year);
// // // console.log(typeof year);

// // // let dynamicVariable = 40;
// // // console.log(dynamicVariable, typeof dynamicVariable);


// // // // change to a string
// // // dynamicVariable = "i am now a string!";
// // // console.log(dynamicVariable, typeof dynamicVariable);

// // // // change to boolean
// // // dynamicVariable = true;
// // // console.log(dynamicVariable, typeof dynamicVariable);

// // // basic math operators
// // console.log("=== MATH OPERATORS ===");

// // const ageJonas = now - 1991;
// // const ageSarah = now - 2018;
// // console.log(ageJonas, ageSarah);

// // // more math operators
// // console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// // console.log("Math operations:");
// // console.log("Addition:", 10 + 5);
// // console.log("Subtraction:", 20 - 8);
// // console.log("Multiplication:", 4 * 7);
// // console.log("Division:", 15 / 3);
// // console.log("Exponentiation:", 2 ** 3);

// // // math with strings
// // const firstName = "Jonas";
// // const lastName = "Doe";
// // console.log(firstName + " " + lastName);

// // console.log("Hello " + "World" + "!");

// // // assignment operators
// // console.log("=== ASSIGNMENT OPERATORS ===");

// // x += 10;
// // console.log("x starts as:", x);

// // x *= 4;
// // console.log("x starts as:", x);

// // x /= 2;
// // console.log("x starts as:", x);

// // x++;
// // console.log("x starts as:", x);

// // x--;
// // console.log("x starts as:", x);

// // x--;
// // console.log("x starts as:", x);

// // // comparison operators
// // console.log("=== COMPARISON OPERATORS ===");

// // console.log("Age comparison:");
// // console.log(ageJonas > ageSarah);
// // console.log(ageSarah >= 18); 
// // console.log(ageJonas < 30); 

// // console.log("Number comparisons:");
// // console.log(25 > 20);
// // console.log(15 < 10);
// // console.log(18 >= 18);
// // console.log(16 <= 15); 

// // const isFullAge = ageSarah >= 18;
// // console.log("Sarah is adult:", isFullAge); 

// // const isJonasOlder = ageJonas > ageSarah;
// // console.log("Jonas is older:", isJonasOlder);

// // console.log("Complex comparison:");
// // console.log(now - 1991 > now - 2018);

// // let z, y;
// // z = y = 25 - 10 - 5;
// // console.log(z, y);

// // const averageAge = (ageJonas + ageSarah) / 2;
// // console.log(ageJonas, ageSarah, averageAge);

// // const massMark = 78;
// // const heightMark = 1.69;
// // const massJohn = 92;
// // const heightJohn = 1.95;

// // const BMIMark = massMark / heightMark ** 2;
// // const BMIJohn = massJohn / heightJohn ** 2;

// // const markHigherBMI = BMIMark > BMIJohn;
// // console.log(BMIMark);
// // console.log(BMIJohn);
// // console.log(markHigherBMI);

// // strings and templay literals
// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonas =
//   "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);

// console.log(`I'm ${2037 - 1991} years old`);
// console.log(`Math works here: ${2 + 3} equals five`);

// const age = 15;
// if (age >= 18) {
//   console.log('Sarahh can have a driving license');
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarahh is too young. Wait another ${yearsLeft} years`);
// }

// // truthy and falsy values
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));
// console.log(Boolean(""));

// ////////////////////////////////////
// // Coding Challenge #2

// // Reuse your BMI calculation from Challenge #1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// // Your if/else statement here:
// // Compare BMIs and create intelligent messages
// // Use template literals for beautiful output
// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
// } else {
//   console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
// }

//type coversion and coersion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);
console.log(typeof String(23));

// automatic type coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" / "2");
console.log("23" * "2");

let n = "1" + 1;
console.log(n);

n = n - 1;
console.log(n);

//type conversion = explicit/manual (recommend)
// type coercion = implict/automatic (javascript does itself)

// equality - strict

const age = 18;
if (age === 18) console.log("You just became an adult!");
if (age == 18) console.log("You just became an adult! (loose)");

console.log('18' === 18);
console.log('18' == 18); // coercion happens
console.log(18 === 18);

// why == can be dangerous
console.log('0' == 0);
console.log('0' == false);
console.log(0 == false);
console.log(null === undefined); // special case

console.log('' == 0);
console.log('   ' == 0);

// best practice
const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log('Cool! 23 is an amazing number!');
} else if (favourite === 7) {
  console.log('7 is also a cool number!');
} else if (favourite === 9) {
  console.log('9 is also a cool number!');
} else if (favourite !== 23) {
  console.log('Number is not 23 or 7 or 9');
}

if (favourite !== 23) console.log('Why not 23?');

// logical operators

const hasDriversLicense = true; //A
const hasGoodVision = true; //B

console.log(`AND OPERATOR: ${hasDriversLicense && hasGoodVision}`);
console.log(`OR OPERATOR: ${hasDriversLicense || hasGoodVision}`);
console.log(`NOT OPERATOR: ${!hasDriversLicense}`);

const isTired = false; //C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Bernard can drive!');
} else {
  console.log('Someone else should drive...');
}

age = 20;
const hasPermission = true;
const hasExperience = true;

if (age >= 18 && hasPermission && hasExperience) {
  console.log('Approved to drive');
} else {
  console.log('Not approved to drive');
}

console.log("Age 20, permission true, experience false:",
  (age >= 18 && hasPermission && hasExperience));
const age1 = 19; // Try different values
const hasID = true; // Try different values
const isVIP = false; // Try different values

// Your logic here:
// if (...) {
if ((age >= 21 && hasID) || isVIP) {
//   console.log('Welcome to the club!');
  console.log('Welcome to the club!');
// } else {
} else {
//   console.log('Sorry, you cannot enter');
  console.log('Sorry, you cannot enter');
}
// }

////////////////////////////////////
// The Conditional (Ternary) Operator

const age2 = 23;

// Basic ternary: condition ? valueIfTrue : valueIfFalse
const drink = age2 >= 18 ? "wine" : "water";
console.log(drink);

// Equivalent if/else (more verbose)
let drink2;
if (age2 >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);

////////////////////////////////////
// Coding Challenge #4

const bill = 40; // Test with 275, 40, and 430

// Step 1: Create the tip calculation using ternary operator
// Rule: 15% if between 50-300, otherwise 20%
// Hint: bill >= 50 && bill <= 300

const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

// Step 2: Create beautiful output with template literal
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

// Expected outputs:
// Bill 275: "The bill was 275, the tip was 41.25, and the total value 316.25"
// Bill 40:  "The bill was 40, the tip was 8, and the total value 48"
// Bill 430: "The bill was 430, the tip was 86, and the total value 516"