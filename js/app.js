console.log ("Hello World");

console.log ("This is line 1.");
console.log ("This is line 2");
console.log ("This is line 3"); console.log ("This is line 4");
console.log ("This is line 5");

console.log ("This is line 6");

//Detta ska ej printas
/* Julia */
/* 2025-10-01 */
/* julia.kneppe@medieinstitutet.se */

console.log ("This line is visible.")

/* avoid the var variable */

let numberExample;
numberExample = 3;

numberExample -= 1;
console.log(numberExample);

const line1 = "green bottles hanging on the wall";
const line2 = "And if one green bottle,should accidentally fall, there will be"
let numberOfBottles = 10;

while (numberOfBottles >= 1) {
  console.log(numberOfBottles);
  console.log(line1);
  console.log(numberOfBottles);
  console.log(line1);
  console.log(line2)
  numberOfBottles -= 1
}
console.log(numberOfBottles);
console.log(line1);


let  gold = 50;
gold = gold  + 10;
gold += 10;
++gold //increment by one
 //Implement a program that takes an input km/h and displays the result in m/s.
let kmh = 72
kmh /= 3.6
console.log(kmh);
// Implement a program that takes a number input for minutes and displays the results in seconds.
let minutes = 3;
minutes *= 60;
console.log(minutes);
// Implement a program that takes two numbers as input and displays their division result.
let a = 11;
let b = 4;
console.log(a/b);
// Implement a program that calculates the remainder of dividing two numbers and displays the result.
let number1 = 11;
let number2 = 4;
console.log(number1%number2);
//let variabler är blockbound


//Implement a program hat calculates the area of a circle using a number input for the radius and displays the result.
function myFirstFunction(i) {
  return Math.PI * i**2;
}

let result1;
result1 = myFirstFunction(2);
console.log(result1);


// Implement a program that takes a number input and displays its negation.
function myNegation(int) {
  return -int;
}

let result2;
result2 = myNegation(11);
console.log(result2);


//Implement a program that calculates the BMI of a person using the weight in kilograms and their height in meters.
function myBMI(kg,m) {
  return kg / m**2;
}

let result3;
result3 = myBMI(70, 1.82);
console.log(result3);


//Implement a program that calculates the length of the hypotenuse of a right triangle using the lengths of the other two sides as inputs. Display the result
function myHypotenuse(a,b) {
  return (a**2 + b**2)**0,5;
}

let result4;
result4 = myHypotenuse(3,4);
console.log(result4);


//Implement a program that takes a number input representing seconds and converts it to minutes and remaining seconds, then displays the result
function myMinutes(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes} minute(s) and ${remainingSeconds} second(s)`;
}

let result5;
result5 = myMinutes(111);
console.log(result5);


//Fibonacci-sequence
 function myFibonacci() {
   for (let i = 0; i <= 25; i++) {
     if (i === 0 || i === 1 || i === 2 || i === 3 || i === 5 || i === 8 || i === 13 || i === 21) {
      console.log(i);
     }
   };

 }

 let result6;
 result6 = myFibonacci();
 console.log(result6);
