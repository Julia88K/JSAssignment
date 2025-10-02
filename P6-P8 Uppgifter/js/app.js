/* const age = 24;
const birthyear = 2002;
let condition = age === 22 || birthyear === 2002

console.log(age === 26 && birthyear === 2002); //false
console.log(age === 24 && birthyear === 2002)  //true
console.log(age === 22 || birthyear === 2002); //true
console.log(condition);  // true

function getAge() {
  return age;
}

let ages = getAge()
console.log(ages);
let results = getAge();
results = 26;
console.log(results); */

//Do a few age checks:
const birthyear = 2010;
let isChild;
let isTeenager;
let isAdult;
let age = 2025 - birthyear;

isChild = age > 0 && age <= 10;

isTeenager = age > 10 && age <= 17;

isAdult = age > 17;

console.log("You are a child: " + isChild);
console.log("You are a teenager: " + isTeenager);
console.log("You are an adult: " + isAdult);

/* const age = 8;
if (age > 17) {
  console.log("You can buy beer!")
 */

/*
const age = 22;
let button = false;
if (button == true) {
console.log("clicked");
}
else {
console.log("not clicked")
}
let clicked = age > 18 || button == true? console.log("Ternary clicked") : console.log("Ternary not clicked");
 */


let birthYear = 2000;
let favoriteNumber = 21;
let Age = 2025 - birthYear;

if (birthYear >= 2015) {
  console.log("You are a child!");
}
else if (birthYear < 2015 && birthYear >= 2008) {
  console.log("You are a teenager!");
}
else {
  console.log("You are a an adult!");
}

const greaterNumber = 24;
if (greaterNumber > Age) {
  console.log("The greater number is " + greaterNumber);
}
else if (greaterNumber < Age) {
  console.log("The age is " + Age);
}

let numberOfGreaters = greaterNumber > 20? console.log("The greater number is: 24") : console.log("The greater number is another number.")


if (favoriteNumber % 2 === 1){
  console.log("Your favourite number is an odd number.")
}

let favourite = favoriteNumber % 2 ===1? console.log("Your favourite number is an odd number.") : console.log("Your favourite number is an even number.")
