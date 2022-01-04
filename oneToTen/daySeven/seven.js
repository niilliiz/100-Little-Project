const dragItem = document.querySelector(".dragItem");

const body = document.getElementsByTagName("body")[0];

console.dir(dragItem);

let mousePo = { x: 0, y: 0 };
let itemPo = { x: 0, y: 0 };

let clickedPo = {};

let isDragging = false;

dragItem.addEventListener("mousedown", (e) => {
    console.dir(e);

    mousePo.y = e.pageY || e.clientY;
    mousePo.x = e.pageX || e.clientX;

    itemPo.x = dragItem.offsetLeft;
    itemPo.y = dragItem.offsetTop;

    clickedPo.x = mousePo.x - itemPo.x;
    clickedPo.y = mousePo.y - itemPo.y;

    isDragging = true;
});

document.addEventListener("mousemove", (e) => {
    if (isDragging) {
        const currMousePoX = e.clientX || e.pageX;
        const currMousePoY = e.clientY || e.pageY;

        const top = currMousePoY - clickedPo.y;
        const left = currMousePoX - clickedPo.x;

        dragItem.style.top = `${top}px`;
        dragItem.style.left = `${left}px`;
    }
});

document.addEventListener("mouseup", () => {
    isDragging = false;
});