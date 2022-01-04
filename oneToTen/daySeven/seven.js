const draggableItem = document.getElementsByClassName("draggableItem")[0]
const body = document.getElementsByTagName("body")[0]
console.dir(draggableItem.style);

let pX = null
let pY = null



draggableItem.addEventListener("mousedown", (e) => {
        e.preventDefault()
        e.stopPropagation();
        console.log(draggableItem.getBoundingClientRect());

        pX = e.pageX - draggableItem.getBoundingClientRect().x
        pY = e.pageY - draggableItem.getBoundingClientRect().y
        console.log("down: " + pX, pY);
    })
    // body.addEventListener("mousemove", (e) => {
    //     e.preventDefault()
    //     e.stopPropagation();
    //     pX = e.pageX
    //     pY = e.pageY
    //         // console.log("move: " + pX, pY);
    //     draggableItem.style.left = `${pX}px`
    //     draggableItem.style.top = `${pY}px`

// })
// body.addEventListener("mouseup", (e) => {
//     e.preventDefault()
//     e.stopPropagation();

//     pX = e.pageX
//     pY = e.pageY
//         // console.log("up: " + pX, pY);
//     draggableItem.style.left = `${pX}px`
//     draggableItem.style.top = `${pY}px`
// })