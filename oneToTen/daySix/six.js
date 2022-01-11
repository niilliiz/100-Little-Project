const boxes = document.querySelectorAll(".box");
const xBtn = document.querySelector(".xBtn");
const oBtn = document.querySelector(".oBtn");
const turn = document.querySelector(".turn");
const result = document.querySelector(".result");
const reset = document.querySelector(".reset");

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
    let won = false;
    let count = 0;
    let currPlayer;

    // console.log(currPlayer);

    result.textContent = "";
    result.style.display = "none";
    turn.style.display = "block";
    turn.textContent = `First Choose X|O`;
    xBtn.classList.remove("active");
    oBtn.classList.remove("active");

    for (let i = 0; i < boxes.length; i++) {
        // console.log(boxes[i].classList);
        boxes[i].textContent = "";
        boxes[i].classList.remove("full", "X", "O", "won");
        boxes[i].addEventListener("click", clickBoxHandler);
    }

    function clickBoxHandler() {
        const currentBox = this;

        if (!this.classList.contains("full") && currPlayer) {
            // console.log(currPlayer);
            currentBox.textContent = currPlayer;
            currentBox.classList.add("full", currPlayer);

            handleNextTurn(currentBox);
        }
    }

    function handleNextTurn(currBox) {
        currBox.removeEventListener("click", clickBoxHandler);

        // console.log(currBox);

        count++;
        setNextPlayerHandler();

        if (count > 4) {
            winCheckingHandler();
        }
    }

    function setNextPlayerHandler() {
        if (currPlayer === "X") {
            currPlayer = "O";
            oBtn.classList.add("active");
            xBtn.classList.remove("active");

            turn.textContent = `${currPlayer} Turn`;
        }
        if (currPlayer === "O") {
            currPlayer = "X";
            turn.textContent = `${currPlayer} Turn`;
            xBtn.classList.add("active");
            oBtn.classList.remove("active");
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
                won = true;

                result.style.display = "block";
                result.textContent = "X won";

                turn.style.display = "none";

                b1.classList.add("won");
                b2.classList.add("won");
                b3.classList.add("won");

                clearBoardHandler();
            }
            if (
                b1.classList.contains("O") &&
                b2.classList.contains("O") &&
                b3.classList.contains("O")
            ) {
                won = true;

                result.style.display = "block";
                result.textContent = "O won";

                turn.style.display = "none";

                b1.classList.add("won");
                b2.classList.add("won");
                b3.classList.add("won");

                clearBoardHandler();
            }
            if (!won && count > 8) {
                result.style.display = "block";
                result.textContent = "XO draw";

                turn.style.display = "none";

                clearBoardHandler();
            }
        }
    }

    function clearBoardHandler() {
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].removeEventListener("click", clickBoxHandler);
        }
    }

    reset.addEventListener("click", createBoard);

    xBtn.addEventListener("click", () => {
        currPlayer = "X";
        turn.textContent = `${currPlayer} Turn`;
        xBtn.classList.add("active");
        oBtn.classList.remove("active");
    });
    oBtn.addEventListener("click", () => {
        currPlayer = "O";
        turn.textContent = `${currPlayer} Turn`;
        oBtn.classList.add("active");
        xBtn.classList.remove("active");
    });
}

/**
 * /TODO:
 * 1- style: turn and result<================
 * 2- reset btn -> doesn't work correctly
 * 3- divide the code to different function
 * 4- what happens after someOne won -> 1- must finish the game with animate and reset the board after it.<=========================
 * 5- player 1 , 2
 * 6- after clicked on each item, disable them
 * 7- win or loose animation <=====================
 * 8- u can replace the turn text with result like the game
 */