const rgb = document.querySelector(".rgb");

const body = document.getElementsByTagName("body")[0];
const redElmnt = document.getElementsByClassName("red")[0];
const greenElmnt = document.getElementsByClassName("green")[0];
const blueElmnt = document.getElementsByClassName("blue")[0];
const color = document.getElementsByClassName("color")[0];

redElmnt.addEventListener("input", setColor);
greenElmnt.addEventListener("input", setColor);
blueElmnt.addEventListener("input", setColor);

let red = 54;
let green = 54;
let blue = 54;

function setColor() {
  red = redElmnt.value;
  green = greenElmnt.value;
  blue = blueElmnt.value;

  redElmnt.style.background = `linear-gradient(to right, rgb(0,${green},${blue}), rgb(255,${green},${blue}))`;
  greenElmnt.style.background = `linear-gradient(to right, rgb(${red},0,${blue}), rgb(${red},255,${blue}))`;
  blueElmnt.style.background = `linear-gradient(to right, rgb(${red},${green},0), rgb(${red},${green},255))`;

  color.style.background = `rgb(${red},${green},${blue})`;

  body.style.background = ` linear-gradient(to right, rgba(${red},${green},${blue},0.5), rgb(255,0,0.5) 100%)`;
}
