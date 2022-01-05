const dragItem = document.querySelector(".dragItem");
const body = document.getElementsByTagName("body")[0];

let isDragging = false;
let dx, dy;

dragItem.addEventListener("mousedown", (e) => {
    const x = e.pageX || e.clientX;
    const y = e.pageY || e.clientY;

    dx = x - dragItem.offsetLeft;
    dy = y - dragItem.offsetTop;

    isDragging = true;
});

document.addEventListener("mousemove", (e) => {
    if (isDragging) {
        const x = e.clientX || e.pageX;
        const y = e.clientY || e.pageY;

        const top = y - dy;
        const left = x - dx;

        dragItem.style.top = `${top}px`;
        dragItem.style.left = `${left}px`;
    }
});

document.addEventListener("mouseup", () => {
    isDragging = false;
});