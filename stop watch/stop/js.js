const stopWatch = document.getElementsByClassName("stopWatch")[0]

const start = document.getElementsByClassName("start")[0]
const stop = document.getElementsByClassName("stop")[0]
const reset = document.getElementsByClassName("reset")[0]

let round = 60;

let sec = 0;
let min = 0
let hour = 0;

let sTxt = fixText(sec)
let mTxt = fixText(min);
let hTxt = fixText(hour)

let startTimer;
let timer = 200


const container = document.createElement("div")
let innerText = `${hTxt}:${mTxt}:${sTxt}`
container.textContent = innerText

stopWatch.prepend(container)

function startWatch() {
    const newLocal = 100;
    startTimer = setInterval(() => {

        sec = (sec + 1)
        min = Math.floor((sec / round));
        hour = Math.floor(min / round);

        sTxt = fixText(sec % round);
        mTxt = fixText(min);
        hTxt = fixText(hour);

        innerText = `${hTxt}:${mTxt}:${sTxt}`
        container.textContent = innerText

    }, timer)
}

function fixText(value) {
    if (value < 10) {
        return `0${value}`
    }
    return value
}



start.addEventListener("click", startWatch)
stop.addEventListener("click", () => {
    clearInterval(startTimer)
})


reset.addEventListener("click", () => {
    sec = 0;
    min = 0
    hour = 0;

    sTxt = fixText(sec)
    mTxt = fixText(min);
    hTxt = fixText(hour)
    innerText = `${hTxt}:${mTxt}:${sTxt}`
    container.textContent = innerText

    clearInterval(startTimer)
})