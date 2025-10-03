let listExample = [1,1,2,3,4,5,6,]

listExample.forEach(char => console.log(char));

/*
let move1 = [f,f,f];
let move2 = [r,r];
let move3 = [r,r,r];
let move4 = "Move forward.";

  move1.forEach(char => console.log("Move forward."));
  move2.forEach(char => console.log("Move right."));
  move1.forEach(char => console.log("Move forward."));
  move3.forEach(char => console.log("Move right."));
  move1.forEach(char => console.log("Move forward."));
  move3.forEach(char => console.log("Move right."));
  console.log("Move forward.");
  move2.forEach(char => console.log("Move right."));
  console.log("Move forward.");*/


let listMove = ["F", "F", "F", "R", "R", "F", "F", "F", "R", "R", "R", "F", "F", "F", "R", "R","R", "F", "R", "R", "F"]
listMove.forEach((move) => {
  if (move === "F") {
    console.log("Move forward.");
  }
  else if (move === "R") {
    console.log("Move right.");
  }
})


function sayManyThings() {
  console.log("I can say one thing.");
  return;
  console.log("But can I say many things?")
}

sayManyThings();


function alpha(n) {
  return n * n;
}

function beta(n,m) {
  return (n+m) / 2;
}

function gamma(namn,efternamn) {
  return `Welcome ${namn} ${efternamn}!`
}

console.log(gamma("Julia", "Kneppe"));
let result = alpha(8)
console.log(result);
