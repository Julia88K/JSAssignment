//Dungeon Game

let playerName = "Julia";
let playerAge = 11;
let leftHand = true;
let rightHand = false;


//Main-Function
function main(name, age, left, right) {
  greeting(name);
  checkEligibility(age);
  rightOrder(age, left, right);
}

main(playerName, playerAge, leftHand, rightHand)

//next step after checking eligibility
function rightOrder(age, left, right) {
  if (playerAge >= 12) {
    chooseEquipment(left, right);
    playerStart(age);
    rollDice();
  } else {
    console.log("See you again soon.");
  }
}

function greeting(name) {
  console.log("Welcome " + name + "!")
}

//Check players age
function checkEligibility(age) {
  if (age < 12) {
    console.log("You are too young to start the adventure!")
  }
  else {
    console.log("You are ready for the quest!")
  }
}


//Check equipment
function chooseEquipment(left, right, leftHandWeapon = "sword", rightHandWeapon = "axe") {
  if (left && right) {
    console.log("You are armed with a " + leftHandWeapon + " and a " + rightHandWeapon + "!");
  }
  else if (left && !right) {
    console.log("You are armed with a " + leftHandWeapon + "!");
  }
  else if (!left && right) {
    console.log("You are armed with" + rightHandWeapon + "!");
  }
  else {
    console.log("You are unarmed. Be careful!");
  }
}


//Check where player should start
function playerStart(age) {
  if (age < 12) {
    console.log("You are too young to start the adventure!");
  }
  else if (age > 12 && age < 18) {
    console.log("You start in beginners forest.");
  }
  else {
    console.log("You start in a dark dungeon.");
  }
}


//Get your Opponent
function rollDice() {
  let x = Math.floor(Math.random() * 6);
  if (x === 1) {
    console.log("You rolled a 1. Nothing happens.");
  }
  else if (x === 2) {
    console.log("You rolled a 2. Nothing happens.");
  }
  else if (x === 3) {
    console.log("You rolled a 3. A small monster appears.");
  }
  else if (x === 4) {
    console.log("You rolled a 4. A dragon appears.");
  }
  else {
    console.log("You rolled a 5. A big monster appears.");
  }
}



