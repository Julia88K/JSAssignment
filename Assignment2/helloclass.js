let paraGraph1 = document.getElementById("para1");

let paraGraph2 = document.getElementById("para2");


const button = document.getElementById("testButton");
button.addEventListener("click", () => {
  paraGraph1.innerHTML = "I LOADED JAVASCRIPT";
})
let clickCount = 0;
const button2 = document.getElementById("myButton");
button2.addEventListener("click", () => {
  clickCount++;
  if (clickCount === 1) {
    paraGraph2.innerHTML = "JavaScript is HTMLs best friend!"
  }
  else if (clickCount === 2) {
    paraGraph2.innerHTML = "CSS is also a team member!"
  }
  else {
    paraGraph2.innerHTML = "You clicked more than twice!"
  }
})

const button3 = document.getElementById("myButton2");
button3.addEventListener("click", () => {
  let tempPara = document.createElement("p");
  tempPara.textContent = "Hello Class!";
  let tempImg = document.createElement("img");
  tempImg.src = "https://upload.wikimedia.org/wikipedia/commons/6/6e/Golde33443.jpg"
  tempPara.classList.add("pClass");

  document.body.appendChild(tempPara);
  document.body.appendChild(tempImg);
})


const listFruits = ["Apple", "Banana", "Cherry", "Mango"];
const divWrapper = document.getElementById("divWrapper");
const ulTemp = document.createElement("ul");
listFruits.forEach(fruit => {
  let liTemp = document.createElement("li");
  liTemp.textContent = fruit;
  ulTemp.appendChild(liTemp);
})

divWrapper.appendChild(ulTemp);


const listSubways = ["Röda Linjen", "Gröna Linjen", "Blåa Linjen", "Tvärbanan"];
const favoriteDiv = document.getElementById("favoriteDiv");
const ulTemp2 = document.createElement("ul");
listSubways.forEach((line) => {
let liTemp2 = document.createElement("li");
liTemp2.textContent = line;
ulTemp2.appendChild(liTemp2);
})
 favoriteDiv.appendChild(ulTemp2);
