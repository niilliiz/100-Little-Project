/***********DAY ONE***********************/

const state = ["idle", "loading", "done"];
const btn1 = document.getElementsByClassName("btn1")[0];

console.dir(btn1);

let currentState = 0;

btn1.addEventListener("click", (e) => {
    btn1.classList.remove(...state);
    currentState++;
    btn1.classList.add(`${state[currentState % state.length]}`);

    console.log(btn1.classList);
});

/***********DAY FOUR***********************/

const btn = document.querySelectorAll("button");
console.dir(btn);

const rate = document.getElementsByClassName("rate")[0];
const btn4 = document.getElementsByClassName("btn4")[0];
const star = document.getElementsByClassName("star")[0];

const countText = document.getElementsByClassName("count")[0];

const count = 27;

countText.textContent = `${count}`;
console.dir(star.classList);

btn4.addEventListener("click", () => {
    star.classList.remove("hoverStar");
    star.classList.add("flyingStar");
    console.dir(star.classList);
});