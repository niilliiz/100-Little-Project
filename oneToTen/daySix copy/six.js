const rgb = document.querySelector(".rgb");

const body = document.getElementsByTagName("body")[0];
const redElement = document.getElementsByClassName("red")[0];
const greenElement = document.getElementsByClassName("green")[0];
const blueElement = document.getElementsByClassName("blue")[0];
const color = document.getElementsByClassName("color")[0];

redElement.addEventListener("input", setColor);
greenElement.addEventListener("input", setColor);
blueElement.addEventListener("input", setColor);

let red = 54;
let green = 54;
let blue = 54;

function setColor() {
    red = redElement.value;
    green = greenElement.value;
    blue = blueElement.value;

    redElement.style.background = `linear-gradient(to right, rgb(0,${green},${blue}), rgb(255,${green},${blue}))`;
    greenElement.style.background = `linear-gradient(to right, rgb(${red},0,${blue}), rgb(${red},255,${blue}))`;
    blueElement.style.background = `linear-gradient(to right, rgb(${red},${green},0), rgb(${red},${green},255))`;

    color.style.background = `rgb(${red},${green},${blue})`;

    body.style.background = ` linear-gradient(to right, rgba(${red},${green},${blue},0.5), rgb(255,0,0.5) 100%)`;
    console.dir(color.style.background);
}