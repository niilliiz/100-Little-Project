const theta = [];
const times = [3, 2, 1, 12, 11, 10, 9, 8, 7, 6, 5, 4];

function generateTheta(n, r, element) {
    let frag = 360 / n;
    for (let i = 0; i <= n; i++) {
        theta.push((frag / 180) * i * Math.PI);
    }
    setUpClock(n, r, element);
}

function setUpClock(n, r, element) {
    const clock = document.querySelector(element);
    const circleHeight = window.getComputedStyle(clock).height.slice(0, -2);
    for (let i = 0; i < n; i++) {
        let dot = document.createElement("div");
        dot.classList.add("dot");

        if (i % 5) {
            //smallDot
            dot.classList.add("smallDot");
        } else {
            //big dot
            dot.classList.add("bigDot");
            // if ()
            const span = document.createElement("span");
            span.classList.add("time");
            span.textContent = times[i / 5];
            dot.appendChild(span);
        }

        dot.posX = Math.round(r * Math.cos(theta[i])) + "px";
        dot.posY = Math.round(r * Math.sin(theta[i])) + "px";
        dot.style.top = circleHeight / 2 - parseInt(dot.posY.slice(0, -2)) + "px";
        dot.style.left = circleHeight / 2 + parseInt(dot.posX.slice(0, -2)) + "px";

        clock.appendChild(dot);
    }
}

generateTheta(60, 235, ".analogClock");