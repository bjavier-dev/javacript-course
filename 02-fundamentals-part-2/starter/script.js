// // // console.log('Fundamentals Part 2');
 
// // // // functions - Declaration and Expressions
// // // console.log("=== FUNCTIONS ===");
 
// // // // Function declaration
// // // function logger() {
// // //   console.log("My name is Jonas");
// // // }
 
// // // logger();
// // // logger();
// // // logger();
 
// // // function fruitProcessor(apples, oranges) {
// // //   console.log(apples, oranges);
// // //   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
// // //   return juice;
// // // }
 
// // // const appleJuice = fruitProcessor(5, 0);
// // // console.log(appleJuice);
 
// // // const appleOrangeJuice = fruitProcessor(2, 4);
// // // console.log(appleOrangeJuice);
 
// // // const juice1 = fruitProcessor(5, 0);
// // // const juice2 = fruitProcessor(2, 4);
// // // const juice3 = fruitProcessor(3, 2);
 
// // // // function expressions
 
// // // const calcAge = function (birthYear) {
// // //   return 2037 - birthYear;
// // // };
 
// // // const age1 = calcAge(2000);
// // // console.log(age1);
 
// // // function calcAge2(birthYear, currentYear) {
// // //     const age = currentYear - birthYear;
// // //     return age;
// // // }
 
// // // const myAge = calcAge2(2000, 2025);
// // // const someonesAge = calcAge2(1995, 2025);
 
// // // console.log(`I am ${myAge} years old`);
// // // console.log(`She is ${someonesAge} years old`);
 
// // // function introduce(firstName, lastName, age) {
// // //   const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old.`;
// // //   return introduction;
// // // }
 
// // // console.log(introduce("Jonas", "Scmedtmann", 46));
// // // console.log(introduce("Sarah"));
 
// // // function calcAge3(birthYear) {
// // //     return 2037 - birthYear;
// // // }
 
// // // function yearsUntilRetirement(birthYear, firstName) {
// // //     const age = calcAge3 (birthYear);
// // //     const retirement = 65 - age;
 
// // //     if (retirement > 0) {
// // //         return `${firstName} retires in ${retirement} years`;
// // //     } else {
// // //         return `${firstName} has already retired.`;
// // //     }
// // // }
 
// // // console.log(yearsUntilRetirement(1991, "Jonas"));
// // // console.log(yearsUntilRetirement(1950, "Mike"));
 
 
// // // // global scope
// // // const globalVar = `I am global`;
 
// // // function testScope () {
// // //     const localVar = `I am local`;
// // //     console.log(globalVar);
// // //     console.log(localVar);
// // // }
 
// // // testScope();
// // // console.log(globalVar);
// // // // console.log(localVar);
 
// // // const userName = "Jonas"; // Global
 
// // // function createWelcomeMessage(user) {
// // //   const message = `Welcome back, ${user}!`; // Local to function
// // //   const timestamp = new Date().toLocaleTimeString(); // Local to function
 
// // //   return `${message} Current time: ${timestamp}`;
// // // }
 
// // // console.log(createWelcomeMessage(userName));
// // // // console.log(message); // Error - message is local to function
 
// // // ////////////////////////////////////
// // // // Coding Challenge #1
 
// // // // Function to calculate average of 3 scores
// // // function calcAverage(score1, score2, score3) {
// // //   return (score1 + score2 + score3) / 3;
// // // }
 
// // // // Function to check winner
// // // function checkWinner(avgDolphins, avgKoalas) {
// // //   if (avgDolphins >= 2 * avgKoalas) {
// // //     return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
// // //   } else if (avgKoalas >= 2 * avgDolphins) {
// // //     return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
// // //   } else {
// // //     return `No team wins (${avgDolphins} vs. ${avgKoalas})`;
// // //   }
// // // }
 
// // // // Test Data 1
// // // let scoreDolphins = calcAverage(44, 23, 71);
// // // let scoreKoalas = calcAverage(65, 54, 49);
// // // console.log(checkWinner(scoreDolphins, scoreKoalas));
 
// // // // Test Data 2
// // // scoreDolphins = calcAverage(85, 54, 41);
// // // scoreKoalas = calcAverage(23, 34, 27);
// // // console.log(checkWinner(scoreDolphins, scoreKoalas));
 
// // // const student1Grade = 85;
 
// // // const grades =  [85, 92, 78, 96, 88];
// // // console.log(grades);
 
// // // const mixed = ["Jonas", 27, true, grades];
// // // console.log(mixed);
 
// // // const years = new Array (1991, 1984, 2008, 2020);
// // // console.log(years);
 
// // // // access array elements
// // // // zero based
// // // //start at 0 to up, not start at
// // // console.log(grades[0]);
// // // console.log(grades[3]);
 
// // // console.log(grades.length);
// // // console.log(grades[0]);
// // // grades[0] = 99;
// // // console.log(grades[0]);
// // // console.log(grades);
// // // console.log(grades[0]);
 
// // // const calcAge = function(birthYear) {
// // //     return 2025 - birthYear;
// // // }
 
// // // const ages = [calcAge(2000), calcAge(1995), calcAge(1991)];
// // // console.log(ages);
// // // ages[1] = calcAge(1950);
// // // console.log(ages);
 
// // // // array methods = add elements
 
// // // const friends = ["Michael", "Steven", "Peter"];
// // // console.log(friends);
// // // const newLength = friends.push("Jay");
// // // console.log(friends);
// // // console.log(newLength);
 
// // // friends.unshift("John");
// // // console.log(friends);
 
// // // // remove elements
 
// // // const popped = friends.pop();
// // // console.log(popped);
// // // console.log(friends);
 
// // // const shifted = friends.shift();
// // // console.log(friends);
 
// // // // pop()
// // // // shift()
 
// // // console.log(friends.indexOf("Michael"));
// // // console.log(friends.indexOf("John"))
 
// // // console.log(friends.includes("Michael"))
// // // console.log(friends.includes("John"))
 
// // // // array iteration = loops
 
// // // for (let i = 0; i < friends.length; i++) {
// // //   console.log(friends[i]);
// // // }
 
// // // friends.forEach(function (friend, index) {
// // //     console.log();
// // // });
 
// // // const newgrades = [85, 92, 78, 96, 88, 74];
// // // let total = 0;
 
// // // for (let i = 0; i < grades.length; i++) {
// // //   total += grades[i];
// // // }
 
// // // const average = total / grades.length;
// // // console.log(`Average grade: ${average.toFixed(2)}`);
 
// // // let passedCount = 0;
// // // grades.forEach((grade) => {
// // //   if (grade >= 70) passedCount++;
// // // });
// // // console.log(`${passedCount} out of ${grades.length} students passed`);
 
// // ////////////////////////////////////
// // // Coding Challenge #2 - Student Grade Manager
 
// // const grades = [78, 85, 92, 67, 88, 95, 73, 82];
 
// // // Function to calculate average
// // function calculateAverage(grades) {
// //   let total = 0;
// //   for (let i = 0; i < grades.length; i++) {
// //     total += grades[i];
// //   }
// //   return total / grades.length;
// // }
 
// // // Function to find highest grade
// // function findHighestGrade(grades) {
// //   let highest = grades[0];
// //   for (let i = 1; i < grades.length; i++) {
// //     if (grades[i] > highest) {
// //       highest = grades[i];
// //     }
// //   }
// //   return highest;
// // }
 
// // // Function to find lowest grade
// // function findLowestGrade(grades) {
// //   let lowest = grades[0];
// //   for (let i = 1; i < grades.length; i++) {
// //     if (grades[i] < lowest) {
// //       lowest = grades[i];
// //     }
// //   }
// //   return lowest;
// // }
 
// // // Function to count passing students
// // function countPassing(grades, passingGrade) {
// //   let count = 0;
// //   for (let i = 0; i < grades.length; i++) {
// //     if (grades[i] >= passingGrade) {
// //       count++;
// //     }
// //   }
// //   return count;
// // }
 
// // // Generate complete report
// // const average = calculateAverage(grades);
// // const highest = findHighestGrade(grades);
// // const lowest = findLowestGrade(grades);
// // const passing = countPassing(grades, 70);
 
// // console.log("=== GRADE REPORT ===");
// // console.log(`Average: ${average.toFixed(2)}`);
// // console.log(`Highest: ${highest}`);
// // console.log(`Lowest: ${lowest}`);
// // console.log(`Passing students: ${passing} out of ${grades.length}`);

// /////////////////////////////////////////
// // HOUR 3

// // PROBLEMS WITH ARRAY
// const bernardJavier = [
//     "Bernard",
//     "Javier",
//     2025 - 2000,
//     "teacher",
//     ["Michael", "Peter", "Jordan"],
// ];

// console.log(bernardJavier[0]);
// console.log(bernardJavier[1]);

// const bernardObject = {
//     firstName: "Bernard",
//     lastName: "Javier",
//     age: 2025 - 2000,
//     job: "teacher",
//     friends: ["Michael", "Peter", "Jordan"]
// };
// console.log(bernardObject);

// // Property access methods
// // Dot notation
// console.log(bernardObject.firstName);
// console.log(bernardObject.lastName);
// console.log(bernardObject.age);

// console.log(bernardObject["firstName"]);
// console.log(bernardObject["lastName"]);
// console.log(bernardObject["age"]);

// const nameKey = "Name";
// console.log(bernardObject["first" + nameKey]);

// // Modifying existing properties
// bernardObject.job = "Programmer";
// bernardObject["age"] = 30;
// console.log(bernardObject);

// // add new properties
// bernardObject.location = "Philippines";
// bernardObject["twitter"] = "@bernardjavier";
// bernardObject.hasDriverLicense = true;
// console.log(bernardObject);

// // When to use dot vs bracket notation
// const property = "job";
// console.log(bernardObject[property]);

// Objects vs Arrays Decision Making

// Arrays
const listOfYears = [1991, 1984, 2008, 2020];
const shoppingList = ["apples", "bananas", "oranges"];
const testScores = [85, 92, 78, 90];

// Objects
const person = {
    name: "John",
    age: 20,
    occupation: "programmer"
};
const car = {
    make: "Toyota",
    model: "Camry",
    year: 2020
};

// objects can contain arrays, arrays can contain objects
const student = {
    name: 'Sarah',
    grades: [85, 92, 78],
    address: {
        steet: "123 Main St",
        city: "New York",
    },
};

console.log(student.grades[0]);
console.log(student.address.city);

const john = {
    firstName: "John",
    lastName: "Doe",
    birthYear: 1995,
    job: "teacher",
    friends: ["Michael", "Peter", "Steven"],
    hasDriverLicense: true,

    calcAge: function(birthYear) {
        return 2025 - this.birthYear;
    },
}

console.log(john.calcAge());

const johnImproved = {
    firstName: "John",
    lastName: "Doe",
    birthYear: 1995,
    job: "teacher",
    friends: ["Michael", "Peter", "Steven"],
    hasDriverLicense: true,

    calcAge: function() {
        this.age = 2025 - this.birthYear;
        return this.age;
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.age}-year-old ${this.job}
        , and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license.`;
    }
};

console.log(johnImproved.calcAge());
console.log(johnImproved.age);
console.log(johnImproved.getSummary());
