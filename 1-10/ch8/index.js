// let theta = [];
// const times = [3, 2, 1, 12, 11, 10, 9, 8, 7, 6, 5, 4];

// function generateTheta(n) {
//     let frag = 360 / n;
//     for (let i = 0; i <= n; i++) {
//         theta.push((frag / 180) * i * Math.PI);
//     }
// }

// function generateDot(n, r) {
//     const clock = document.querySelector(".analogClock");
//     const clockHeight = window.getComputedStyle(clock).height.slice(0, -2);

//     for (let i = 0; i < n; i++) {
//         let dot = document.createElement("dot");
//         dot.classList.add("dot");
//         if (i % 5) {
//             //smallDot
//             dot.classList.add("smallDot");
//         } else {
//             //bigDot
//             dot.classList.add("bigDot");
//         }

//         dot.posX = Math.round(r * Math.cos(theta[i]));
//         dot.posY = Math.round(r * Math.sin(theta[i]));
//         dot.style.top = clockHeight / 2 - parseInt(dot.posY) + "px";
//         dot.style.left = clockHeight / 2 + parseInt(dot.posX) + "px";

//         clock.appendChild(dot);
//     }
//     theta = [];
// }

// function generateNumber(n, r) {
//     const clock = document.querySelector(".analogClock");
//     const clockHeight = window.getComputedStyle(clock).height.slice(0, -2);

//     for (let i = 0; i < n; i++) {
//         let div = document.createElement("div");
//         div.classList.add("time");

//         div.textContent = times[i];

//         div.posX = Math.round(r * Math.cos(theta[i]));
//         div.posY = Math.round(r * Math.sin(theta[i]));
//         div.style.top = clockHeight / 2 - parseInt(div.posY) + "px";
//         div.style.left = clockHeight / 2 + parseInt(div.posX) + "px";

//         clock.appendChild(div);
//     }
//     theta = [];
// }

// function showTimeHandler() {
//     const hourHand = document.querySelector(".hourHand");
//     const minuteHand = document.querySelector(".minuteHand");
//     const secondHand = document.querySelector(".secondHand");

//     const now = new Date();
//     const hour = now.getHours();
//     const min = now.getMinutes();
//     const sec = now.getSeconds();
//     const mSec = now.getMilliseconds();

//     const hA = (hour + (min * 60 + sec) / 3600) * 30;
//     const mA = (min + sec / 60) * 6;
//     const sA = (sec + mSec / 1000) * 6;

//     document.documentElement.style.setProperty(
//         "--hour-hand-rotation",
//         `${hA}deg`
//     );
//     document.documentElement.style.setProperty(
//         "--minute-hand-rotation",
//         `${mA}deg`
//     );
//     document.documentElement.style.setProperty(
//         "--second-hand-rotation",
//         `${sA}deg`
//     );
// }

// setInterval(showTimeHandler, 50);

// generateTheta(60);
// generateDot(60, 235);

// generateTheta(12);
// generateNumber(12, 210);

const clock = document.querySelector(".clock");
const clockHeight = window.getComputedStyle(clock).height.slice(0, -2);

function elementGenerator(htmlCode) {
    const div = document.createElement("div");
    div.innerHTML = htmlCode;

    return div.firstChild;
}

function generateTheta(n, i) {
    const fragment = 360 / n;
    return (fragment * i * Math.PI) / 180;
}

function calculateSin(theta) {
    return Math.sin(theta);
}

function calculateCos(theta) {
    return Math.cos(theta);
}

function clockDotGenerator() {
    const dots = elementGenerator('<div class="dots"></div>');

    for (let i = 0; i < 60; i++) {
        const theta = generateTheta(60, i);
        const sin = calculateSin(theta);
        const cos = calculateCos(theta);

        const dot = elementGenerator('<div class="dot"></div>');

        dot.style.top = `${250 + sin * 233}px`;
        dot.style.left = `${250 + cos * 233}px`;

        if (i % 5 === 0) {
            dot.classList.add("big");
        }

        dots.appendChild(dot);
    }
    clock.appendChild(dots);
}

function clockNumberGenerator() {
    const numbers = elementGenerator('<div class="nums"></div>');

    for (let i = 1; i <= 12; i++) {
        const theta = generateTheta(12, i - 3);
        const sin = calculateSin(theta);
        const cos = calculateCos(theta);

        const num = elementGenerator(`<div class='num'>${i}</div>`);

        if (!(i % 3)) {
            num.classList.add("big");
        }

        num.style.top = `${250 + sin * 205}px`;
        num.style.left = `${250 + cos * 205}px`;

        numbers.appendChild(num);
    }
    clock.appendChild(numbers);
}

function clockHandsGenerator() {
    const hands = elementGenerator('<div class="hands"></div>');

    const pivot = elementGenerator('<div class="pivot"></div>');

    const hourHand = elementGenerator('<div class="hour hand"></div>');
    const minuteHand = elementGenerator('<div class="minute hand"></div>');
    const secondHand = elementGenerator('<div class="second hand"></div>');

    hands.appendChild(hourHand);
    hands.appendChild(minuteHand);
    hands.appendChild(secondHand);
    hands.appendChild(pivot);

    clock.appendChild(hands);
}

function showTimeHandler() {
    const now = new Date();
    const hour = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();
    const ms = now.getMilliseconds();

    const ha = (hour + (min * 60 + sec) / 3600) * 30;
    const ma = (min + sec / 60) * 6;
    const sa = (sec + ms / 1000) * 6;

    document.documentElement.style.setProperty(
        "--hour-hand-rotation",
        `${ha}deg`
    );
    document.documentElement.style.setProperty(
        "--minute-hand-rotation",
        `${ma}deg`
    );
    document.documentElement.style.setProperty(
        "--second-hand-rotation",
        `${sa}deg`
    );
}

clockDotGenerator();
clockNumberGenerator();
clockHandsGenerator();

showTimeHandler();

setInterval(showTimeHandler, 50);