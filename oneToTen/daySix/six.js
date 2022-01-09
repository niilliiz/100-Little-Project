const boxes = document.querySelectorAll(".box");
const xBtn = document.querySelector(".xBtn");
const oBtn = document.querySelector(".oBtn");
const turn = document.querySelector(".turn");
const result = document.querySelector(".result");
const reset = document.querySelector(".reset");

let currPlayer = "X";
let count = 0;

const winOrder = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

document.addEventListener("DOMContentLoaded", createBoard);

function createBoard() {
    count = 0;
    currPlayer = "X";

    result.style.display = "none";
    turn.style.display = "block";
    turn.textContent = `${currPlayer} Turn`;

    for (let i = 0; i < boxes.length; i++) {
        console.log(boxes[i].classList);
        boxes[i].textContent = "";
        boxes[i].classList.remove("X");
        boxes[i].classList.remove("O");
        boxes[i].addEventListener("click", () => clickBoxHandler.call(boxes[i]));
    }
}

function clickBoxHandler() {
    this.textContent = currPlayer;
    this.classList.add(currPlayer);
    handleNextTurn();
}

// function removeListenerHandler(box) {
//     box.removeEventListener("click", clickBoxHandler, true);
// }

function handleNextTurn() {
    count++;
    if (count <= 4) {
        setNextPlayerHandler();
    } else if (count > 4 && count < 9) {
        winCheckingHandler();
        if (count !== 0) {
            setNextPlayerHandler();
        }
    }
}

function setNextPlayerHandler() {
    if (currPlayer === "X") {
        currPlayer = "O";
        turn.textContent = `${currPlayer} Turn`;
    } else {
        currPlayer = "X";
        turn.textContent = `${currPlayer} Turn`;
    }
}

function winCheckingHandler() {
    for (let i = 0; i < winOrder.length; i++) {
        let b1 = boxes[winOrder[i][0]];
        let b2 = boxes[winOrder[i][1]];
        let b3 = boxes[winOrder[i][2]];
        if (
            b1.classList.contains("X") &&
            b2.classList.contains("X") &&
            b3.classList.contains("X")
        ) {
            result.style.display = "block";
            turn.style.display = "none";

            result.textContent = "X won";
            count = 0;
            return;
        }
        if (
            b1.classList.contains("O") &&
            b2.classList.contains("O") &&
            b3.classList.contains("O")
        ) {
            result.style.display = "block";
            turn.style.display = "none";
            result.textContent = "O won";
            count = 0;
            return;
        }
    }
}

reset.addEventListener("click", createBoard);

/**
 * /TODO:
 * 1- style: turn
 * 2- reset btn -> doesn't work correctly
 * 3- divide the code to different function
 * 4- what happens after someOne won -> 1- must finish the game with animate and reset the board after it.
 * 5- player 1 , 2
 * 6- after clicked n each item, disable them
 * 7- win or loose animation
 * 8- u can replace the turn text with result like the game
 */