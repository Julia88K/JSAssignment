

for (let i = 0; i < 13; i++) {
  console.log(Math.floor(Math.random() * 6) + 1);
}


for (let i = 1; i < 1024; i*=2) {
  console.log(i)
}

function numPower(num1, num2) {
  let sum = 1;
  for (let i = 1; i <= num2; i++) {
    sum = sum * num1;
  }
  return sum;
}
 let res = numPower(5, 3);
console.log(res);


const counterList = [];
let counter0 = 0;
let counter1 = 0;
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;
let counter5 = 0;
let counter6 = 0;
let counter7 = 0;
let counter8 = 0;
let counter9 = 0;
for (let i = 0; i < 10000; i++) {
  let number = Math.floor(Math.random() * 10);
  if (number === 0) {
    counter0++;
  } else if (number === 1) {
    counter1++;
  } else if (number === 2) {
    counter2++;
  } else if (number === 3) {
    counter3++;
  } else if (number === 4) {
    counter4++;
  } else if (number === 5) {
    counter5++;
  } else if (number === 6) {
    counter6++;
  } else if (number === 7) {
    counter7++;
  } else if (number === 8) {
    counter8++;
  } else if (number === 9) {
    counter9++;
  }
}

counterList.push(
  counter0, counter1, counter2, counter3, counter4,
  counter5, counter6, counter7, counter8, counter9
);

counterList.forEach((element, index) => {
  console.log(index + " has been counted " + element + " times");
});


//Nestlad forloop-variant

for (let i = 0; i < 10; i++) {
  let sumRes = 0;
  for (let j = 0; j < 10000; j++) {
    
  }
}
