const btn = document.querySelector(".btn");
const container = document.querySelector(".container");

btn.addEventListener("mouseover", handleMoveOver);
btn.addEventListener("mouseleave", handleMoveLeave);

function handleMoveOver() {
    container.classList.add("hovered");
}

function handleMoveLeave() {
    container.classList.remove("hovered");
}