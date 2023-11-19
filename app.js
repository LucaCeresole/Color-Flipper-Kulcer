const colors = ["red", "yellow", "blue"];
const btn = document.querySelector(".btn");
const color = document.querySelector(".color");
const displayTextColor = document.querySelector(".display");
console.dir(btn);
btn.addEventListener("click", () => {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
  displayTextColor.style.color = colors[randomNumber];
  btn.style.color = colors[randomNumber];
});

const getRandomNumber = () => Math.floor(Math.random() * colors.length);
