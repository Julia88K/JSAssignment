let paraGraph1 = document.getElementById("para1");

let paraGraph2 = document.getElementById("para2");


const button = document.getElementById("testButton");
button.addEventListener("click", () => {
  paraGraph1.innerHTML = "I LOADED JAVASCRIPT";
})
let clickCount = 0;
const button2 = document.getElementById("secretButton");
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


