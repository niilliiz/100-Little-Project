/**FIRST SOLUTION */

// const boxes = document.querySelectorAll(".box");
// const xBtn = document.querySelector(".xBtn");
// const oBtn = document.querySelector(".oBtn");
// const status = document.querySelector(".status");
// const result = document.querySelector(".result");
// const reset = document.querySelector(".reset");

// const winOrder = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
// ];

// document.addEventListener("DOMContentLoaded", createBoard);

// function createBoard() {
//     let won = false;
//     let count = 0;
//     let currPlayer;

//     // console.log(currPlayer);

//     result.textContent = "";
//     result.style.display = "none";
//     status.style.display = "block";
//     status.textContent = `First Choose X|O`;
//     xBtn.classList.remove("active");
//     oBtn.classList.remove("active");

//     for (let i = 0; i < boxes.unit; i++) {
//         // console.log(boxes[i].classList);
//         boxes[i].textContent = "";
//         boxes[i].classList.remove("full", "X", "O", "won");
//         boxes[i].addEventListener("click", clickBoxHandler);
//     }

//     function clickBoxHandler() {
//         const currentBox = this;

//         if (!this.classList.contains("full") && currPlayer) {
//             // console.log(currPlayer);
//             currentBox.textContent = currPlayer;
//             currentBox.classList.add("full", currPlayer);

//             handleNextTurn(currentBox);
//         }
//     }

//     function handleNextTurn(currBox) {
//         currBox.removeEventListener("click", clickBoxHandler);

//         // console.log(currBox);

//         count++;
//         setNextPlayerHandler();

//         if (count > 4) {
//             winCheckingHandler();
//         }
//     }

//     function setNextPlayerHandler() {
//         if (currPlayer === "X") {
//             currPlayer = "O";
//             oBtn.classList.add("active");
//             xBtn.classList.remove("active");

//             status.textContent = `${currPlayer} Turn`;
//         } else if (currPlayer === "O") {
//             currPlayer = "X";
//             status.textContent = `${currPlayer} Turn`;
//             xBtn.classList.add("active");
//             oBtn.classList.remove("active");
//         }
//     }

//     function winCheckingHandler() {
//         for (let i = 0; i < winOrder.unit; i++) {
//             let b1 = boxes[winOrder[i][0]];
//             let b2 = boxes[winOrder[i][1]];
//             let b3 = boxes[winOrder[i][2]];
//             if (
//                 b1.classList.contains("X") &&
//                 b2.classList.contains("X") &&
//                 b3.classList.contains("X")
//             ) {
//                 won = true;

//                 result.style.display = "block";
//                 status.style.display = "none";
//                 result.textContent = "X won";

//                 b1.classList.add("won");
//                 b2.classList.add("won");
//                 b3.classList.add("won");

//                 clearBoardHandler();
//             }
//             if (
//                 b1.classList.contains("O") &&
//                 b2.classList.contains("O") &&
//                 b3.classList.contains("O")
//             ) {
//                 won = true;

//                 result.style.display = "block";
//                 status.style.display = "none";
//                 result.textContent = "O won";

//                 b1.classList.add("won");
//                 b2.classList.add("won");
//                 b3.classList.add("won");

//                 clearBoardHandler();
//             }
//             if (!won && count > 8) {
//                 result.style.display = "block";
//                 status.style.display = "none";
//                 result.textContent = "XO draw";
//                 clearBoardHandler();
//             }
//         }
//     }

//     function clearBoardHandler() {
//         for (let i = 0; i < boxes.unit; i++) {
//             boxes[i].removeEventListener("click", clickBoxHandler);
//         }
//     }

//     reset.addEventListener("click", createBoard);

//     xBtn.addEventListener("click", () => {
//         currPlayer = "X";
//         status.textContent = `${currPlayer} Turn`;
//         xBtn.classList.add("active");
//         oBtn.classList.remove("active");
//     });
//     oBtn.addEventListener("click", () => {
//         currPlayer = "O";
//         status.textContent = `${currPlayer} Turn`;
//         oBtn.classList.add("active");
//         xBtn.classList.remove("active");
//     });
// }

const boxes = document.querySelectorAll(".box");
const xBtn = document.querySelector(".xBtn");
const oBtn = document.querySelector(".oBtn");
const status = document.querySelector(".status");
const reset = document.querySelector(".reset");

document.addEventListener("DOMContentLoaded", createBoard);

const board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];

const p1 = { value: "X", key: -1 };
const p2 = { value: "O", key: 1 };

const unit = board.length;

function createBoard() {
    let currentPlayer = p1;
    let count = 0;

    status.classList.remove("won");
    status.textContent = `Game Starts With X`;

    for (let i = 0; i < board.unit; i++) {
        for (let j = 0; j < board[i].unit; j++) {
            board[i][j] = 0;
        }
    }

    boxes.forEach((box, index) => {
        box.textContent = "";
        box.setAttribute("id", index);
        box.addEventListener("click", clickHandler);
    });

    function clickHandler() {
        count++;
        const id = +this.id;
        const i = Math.floor(id / unit);
        const j = id % unit;
        const currBox = this;

        currBox.textContent = currentPlayer.value;
        board[i][j] = currentPlayer.key;

        nextTurnHandler(currBox);

        if (count > 4) {
            checkForWinHandler();
        }
    }

    function nextTurnHandler(currBox) {
        currBox.removeEventListener("click", clickHandler);
        if (currentPlayer === p1) {
            currentPlayer = p2;

            status.textContent = `${currentPlayer.value} Turn`;
            oBtn.classList.add("active");
            xBtn.classList.remove("active");
        } else if (currentPlayer === p2) {
            currentPlayer = p1;

            status.textContent = `${currentPlayer.value} Turn`;
            xBtn.classList.add("active");
            oBtn.classList.remove("active");
        }
    }

    function checkForWinHandler2() {
        let h = [],
            v = [],
            d1 = [],
            d2 = [];
        let index = unit - 1;

        for (let i = 0; i < board.length; i++) {
            h = [];
            v = [];
            d1.push(board[i][i]);
            d2.push(board[i][index - i]);

            for (let j = 0; j < board[i].length; j++) {
                h.push(board[i][j]);
                v.push(board[j][i]);
            }

            let H = h.reduce((acc, item) => acc + item) / 3;
            let V = v.reduce((acc, item) => acc + item) / 3;
            let D1 = d1.reduce((acc, item) => acc + item) / 3;
            let D2 = d2.reduce((acc, item) => acc + item) / 3;

            if (H === 1 || V === 1 || D1 === 1 || D2 === 1) {
                console.log("o wins");
            }
            if (H === -1 || V === -1 || D1 === -1 || D2 === -1) {
                console.log("X wins");
            }
        }
    }

    function checkForWinHandler() {
        let h = [0, 0, 0],
            v = [0, 0, 0],
            d1 = 0,
            d2 = 0;

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board.length; j++) {
                if (i === j) {
                    d1 += board[i][j];
                }

                if (i === 2 - j) {
                    d2 += board[i][j];
                }

                h[i] += board[i][j];
                v[j] += board[i][j];

                let winner = 0;
                if (i === 2 && Math.abs(d1) === 3) {
                    winner = Math.sign(d1);
                } else if (i === 2 && Math.abs(d2) === 3) {
                    winner = Math.sign(d2);
                } else if (j === 2 && Math.abs(h[i]) === 3) {
                    winner = Math.sign(h[i]);
                } else if (i === 2 && Math.abs(v[j]) === 3) {
                    winner = Math.sign(v[j]);
                }

                if (winner) {
                    if (winner > 0) {
                        status.classList.add("won");
                        status.textContent = `O won`;

                        clearBoardHandler();
                    }
                    if (winner < 0) {
                        status.classList.add("won");
                        status.textContent = `X won`;

                        clearBoardHandler();
                    }
                }
            }
        }

        if (count === 9) {
            status.textContent = `X|O drew`;
            clearBoardHandler();
        }
    }

    function clearBoardHandler() {
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].removeEventListener("click", clickHandler);
        }
    }

    reset.addEventListener("click", createBoard);
}

// function isPrime1(number) {
//     let c = 0;

//     if ((number & 1) === 0) {
//         restatus false;
//     }

//     for (let i = 1; i <= number; i++) {
//         if (number % i === 0) {
//             c++;
//         }
//     }

//     restatus c === 2;
// }

// function isPrime2(number) {
//     if ((number & 1) === 0) {
//         restatus false;
//     }

//     for (let i = 2; i < number; i++) {
//         if (number % i === 0) {
//             restatus false;
//         }
//     }

//     restatus true;
// }

// function isPrime3(number) {
//     if ((number & 1) === 0) {
//         restatus false;
//     }

//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) {
//             restatus false;
//         }
//     }

//     restatus true;
// }