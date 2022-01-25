let theta = [];
const times = [3, 2, 1, 12, 11, 10, 9, 8, 7, 6, 5, 4];

function generateTheta(n) {
    let frag = 360 / n;
    for (let i = 0; i <= n; i++) {
        console.log(theta);
        theta.push((frag / 180) * i * Math.PI);
    }
}

function setUpCircle(n, r, element, type) {
    const clock = document.querySelector(element);
    const circleHeight = window.getComputedStyle(clock).height.slice(0, -2);
    for (let i = 0; i < n; i++) {
        let div = document.createElement("div");
        div.classList.add(type);

        if (type === "dot") {
            if (i % 5) {
                //smallDot
                div.classList.add("smallDot");
            } else {
                //bigDot
                div.classList.add("bigDot");
            }
        } else if (type === "time") {
            console.log(n);
            div.textContent = times[i];
        }

        div.posX = Math.round(r * Math.cos(theta[i])) + "px";
        div.posY = Math.round(r * Math.sin(theta[i])) + "px";
        div.style.top = circleHeight / 2 - parseInt(div.posY.slice(0, -2)) + "px";
        div.style.left = circleHeight / 2 + parseInt(div.posX.slice(0, -2)) + "px";

        clock.appendChild(div);
        console.log(theta);
    }
    theta = [];
}

generateTheta(60);
setUpCircle(60, 235, ".analogClock", "dot");
generateTheta(12);
setUpCircle(12, 215, ".analogClock", "time");