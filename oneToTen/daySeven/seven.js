const dragItem = document.querySelector(".dragItem");

const body = document.getElementsByTagName("body")[0];

console.dir(dragItem);

let mousePo = { x: 0, y: 0 };
let itemPo = { x: 0, y: 0 };

let area = {};

let isDragging = false;

dragItem.addEventListener("mousedown", (e) => {
    console.dir(e);

    mousePo.y = e.pageY || e.clientY;
    mousePo.x = e.pageX || e.clientX;

    itemPo.x = dragItem.offsetLeft;
    itemPo.y = dragItem.offsetTop;

    area.x = mousePo.x - itemPo.x;
    area.y = mousePo.y - itemPo.y;

    isDragging = true;
});

document.addEventListener("mousemove", (e) => {
    if (isDragging) {
        const currMousePoX = e.clientX || e.pageX;
        const currMousePoY = e.clientY || e.pageY;

        const top = currMousePoY - area.y;
        const left = currMousePoX - area.x;

        dragItem.style.top = `${top}px`;
        dragItem.style.left = `${left}px`;
    }
});

document.addEventListener("mouseup", () => {
    isDragging = false;
});