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

const rate = document.getElementsByClassName("rate")[0];
const btn4 = document.getElementsByClassName("btn4")[0];
const star = document.getElementsByClassName("star")[0];
const span = document.getElementsByClassName("fa-star")[0];

const countText = document.getElementsByClassName("count")[0];

let count = 27;

countText.textContent = `${count}`;
console.dir(star.classList);

btn4.addEventListener("click", flyingStar);

function flyingStar() {
    // star.classList.remove("hoverStar");
    span.style.color = "#ffd700";
    star.classList.add("flyingStar");
}

btn4.addEventListener("click", addCount);

function addCount() {
    setTimeout(() => {
        count++;

        countText.textContent = count;
        countText.style.color = "#ffd700";
    }, 600);
    btn4.removeEventListener("click", addCount);
    btn4.removeEventListener("click", flyingStar);
}