//Dungeon Game

let playerName = "Julia";
let playerAge = 13;
let leftHand = false;
let rightHand = false;


//Check players age
function checkEligibility(playerAge) {
  if (playerAge < 12) {
    return "You are too young to start the adventure!"
  }
  else {
    return "You are ready for the quest!"
  }
}

let getEligibility = checkEligibility(playerAge)


//Check equipment
function chooseEquipment(leftHand, rightHand, leftWeapon, rightWeapon) {
  if (leftHand && rightHand) {
    return "You are armed with a " + leftWeapon + " and a " + rightWeapon + "!"
  }
  else if (leftHand && !rightHand) {
    return "You are armed with a " + leftWeapon + "!"
  }
  else if (!leftHand && rightHand) {
    return "You are armed with a " + rightWeapon + "!"
  }
  else {
    return "You are unarmed. Be careful!"
  }
}

let getEquipment = chooseEquipment(true, false, "sword", "axe")


//Check where player should start
function playerStart(playerAge) {
  if (playerAge < 12) {
    return "You are too young to start the adventure!"
  }
  else if (playerAge > 12 && playerAge < 18) {
    return "You start in beginners forest."
  }
  else {
    return "You start in a dark dungeon."
  }
}
 let getStart = playerStart(playerAge);


function Output(playerName) {
  console.log("Welcome " + playerName + "!")
  console.log(getEligibility)
  if (playerAge >= 12) {
    console.log(getEquipment)
    console.log(getStart)
  }
  else {
    return "See you again soon."
  }
}

let getOutput = Output(playerName)
console.log(getOutput)


//Get your Opponent
function rollDice() {
  let x = Math.floor(Math.random() * 6);
  if (x === 1) {
    return "You rolled a 1. Nothing happens."
  }
  else if (x === 2) {
    return "You rolled a 2. Nothing happens."
  }
  else if (x === 3) {
    return "You rolled a 3. A small monster appears."
  }
  else if (x === 4) {
    return "You rolled a 4. A dragon appears."
  }
  else {
    return "You rolled a 5. A big monster appears."
  }
}

let getFate = rollDice()
console.log(getFate)
