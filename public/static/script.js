let iterations = 0;
let letters = "ABVDEFGHIJKLMNOPQRSTUVWXYZ";
document.querySelector("h6").onmouseover = (event) => {
  event.target.innerText = event.target.innerText
    .split("")
    .map((letter) => letters(Math.floor(Math.random() * 26)))
    .join("");
};
