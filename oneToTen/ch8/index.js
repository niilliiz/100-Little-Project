let theta = [];
const times = [3, 2, 1, 12, 11, 10, 9, 8, 7, 6, 5, 4];

function generateTheta(n) {
    let frag = 360 / n;
    for (let i = 0; i <= n; i++) {
        theta.push((frag / 180) * i * Math.PI);
    }
}

function generateDot(n, r) {
    const clock = document.querySelector(".analogClock");
    const clockHeight = window.getComputedStyle(clock).height.slice(0, -2);

    for (let i = 0; i < n; i++) {
        let dot = document.createElement("dot");
        dot.classList.add("dot");
        if (i % 5) {
            //smallDot
            dot.classList.add("smallDot");
        } else {
            //bigDot
            dot.classList.add("bigDot");
        }

        dot.posX = Math.round(r * Math.cos(theta[i]));
        dot.posY = Math.round(r * Math.sin(theta[i]));
        dot.style.top = clockHeight / 2 - parseInt(dot.posY) + "px";
        dot.style.left = clockHeight / 2 + parseInt(dot.posX) + "px";

        clock.appendChild(dot);
    }
    theta = [];
}

function generateNumber(n, r) {
    const clock = document.querySelector(".analogClock");
    const clockHeight = window.getComputedStyle(clock).height.slice(0, -2);

    for (let i = 0; i < n; i++) {
        let div = document.createElement("div");
        div.classList.add("time");

        div.textContent = times[i];

        div.posX = Math.round(r * Math.cos(theta[i]));
        div.posY = Math.round(r * Math.sin(theta[i]));
        div.style.top = clockHeight / 2 - parseInt(div.posY) + "px";
        div.style.left = clockHeight / 2 + parseInt(div.posX) + "px";

        clock.appendChild(div);
    }
    theta = [];
}

function showTimeHandler() {
    const now = new Date();
    const hour = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();
    const mSec = now.getMilliseconds();

    const hA = (hour + (min * 60 + sec) / 3600) * 30;
    const mA = ((min * 60 + sec) / 60) * 6;
    const sA = (sec + mSec / 1000) * 6;

    document.documentElement.style.setProperty(
        "--hour-hand-rotation",
        `${hA}deg`
    );
    document.documentElement.style.setProperty(
        "--minute-hand-rotation",
        `${mA}deg`
    );
    document.documentElement.style.setProperty(
        "--second-hand-rotation",
        `${sA}deg`
    );
}

setInterval(showTimeHandler, 50);

generateTheta(60);
generateDot(60, 235);

generateTheta(12);
generateNumber(12, 210);