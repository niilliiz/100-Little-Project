const boxes = document.querySelectorAll(".box");
const xBtn = document.querySelector(".xBtn");
const oBtn = document.querySelector(".oBtn");
const turn = document.querySelector(".turn");
const result = document.querySelector(".result");
const reset = document.querySelector(".reset");

let currentTurn = 0;
let currPlayer = "X";
const turns = [1, 2];
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
    currentTurn = 0;
    turn.textContent = currPlayer;

    result.textContent = "";
    turn.textContent = currPlayer;

    boxes.forEach((box) => {
        box.textContent = "";
        box.classList.remove("X");
        box.classList.remove("O");
        box.addEventListener("click", () => clickBoxHandler(box));
    });
}

function clickBoxHandler(box) {
    count++;
    currentTurn++;
    currentTurn = turns[(currentTurn + 1) % turns.length];

    box.textContent = currPlayer;
    box.classList.add(currPlayer);
    box.removeEventListener("click", clickBoxHandler);

    handleNextTurn();
}

function handleNextTurn() {
    handleWinChecking();

    if (currPlayer === "X") {
        currPlayer = "O";
        turn.textContent = currPlayer;
    } else {
        currPlayer = "X";
        turn.textContent = currPlayer;
    }
}

function handleWinChecking() {
    if (count > 4 && count < 9) {
        for (let i = 0; i < winOrder.length; i++) {
            let b1 = boxes[winOrder[i][0]];
            let b2 = boxes[winOrder[i][1]];
            let b3 = boxes[winOrder[i][2]];
            if (
                b1.classList.contains("X") &&
                b2.classList.contains("X") &&
                b3.classList.contains("X")
            ) {
                result.textContent = "X won";
                return;
            }
            if (
                b1.classList.contains("O") &&
                b2.classList.contains("O") &&
                b3.classList.contains("O")
            ) {
                result.textContent = "O won";
                return;
            }
        }
    }
    if (count > 8) {
        result.textContent = "XO DRAW";
    }
}

boxes.forEach((box) =>
    box.addEventListener("click", () => {
        // count++;
        // currentTurn++;
        // currentTurn = turns[(currentTurn + 1) % turns.length];

        // box.textContent = currPlayer;
        // box.classList.add(currPlayer);
        // if (count <= 4) {
        //     if (currPlayer === "X") {
        //         currPlayer = "O";
        //         turn.textContent = currPlayer;
        //     } else {
        //         currPlayer = "X";
        //         turn.textContent = currPlayer;
        //     }
        // }
        if ((count > 4) & (count < 9)) {
            if (currPlayer === "X") {
                currPlayer = "O";
                turn.textContent = currPlayer;
            } else {
                currPlayer = "X";
                turn.textContent = currPlayer;
            }
        }
    })
);

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