const spinner = document.querySelector(".spinner");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

let deg = 0;

right.addEventListener("click", () => {
    deg += 45;
    spinner.style.transform = `rotateY(${deg}deg)  rotateX(10deg)`;
});

left.addEventListener("click", () => {
    deg -= 45;
    spinner.style.transform = `rotateY(${deg}deg) rotateX(-10deg)`;
});