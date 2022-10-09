// var audio = new Audio("./sounds/boom.wav");
// audio.play();

const sounds = document.querySelectorAll(".sound");
const [...keys] = document.querySelectorAll("[data-key]");

document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

function keyDownHandler(e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (key !== null) {
        const sound = key.children[1].innerHTML;
        const audio = new Audio(`./sounds/${sound}.wav`);
        audio.play();
        key.classList.add("show");
    }
}

function keyUpHandler() {
    keys.forEach((key) => key.classList.remove("show"));
}