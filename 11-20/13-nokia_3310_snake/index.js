document.addEventListener("DOMContentLoaded", createBoard);

const squares = document.querySelector(".squares");
const reset = document.querySelector(".reset");
const score = document.querySelector(".score");
let snake = null;
let apple;
let dir = 1;
let unit = 20;
let result = 0;
let snakeInterval = null;
let appleInterval = null;

function createBoard() {
  dir = 1;
  snake = [2, 1, 0];
  result = 0;

  //dir=1 => right, dir=-1 => left, dir=21 => down, dir=-21 => up

  snakeInterval = setInterval(() => setSnake(dir), 1000);
  snake.forEach((part) => squares.children[part].classList.add("snake"));
  squares.style.borderColor = "#555";

  setRandomLocationForApple();
  appleInterval = setInterval(setRandomLocationForApple, 3000);

  document.addEventListener("keyup", (e) => moveSnakeControlHandler(e));
}

function setSnake(dir) {
  const tail = snake.pop();
  snake.unshift(snake[0] + dir);
  const status = checkSnakePlace();
  if (!status) {
    isAteApple(tail);
  } else {
    hitTheEdge();
  }
}

function moveSnakeControlHandler(e) {
  if (e.key === "ArrowUp") {
    dir = -unit;
    setSnake(dir);
  } else if (e.key === "ArrowDown") {
    dir = unit;
    setSnake(dir);
  } else if (e.key === "ArrowRight") {
    dir = 1;
    setSnake(dir);
  } else if (e.key === "ArrowLeft") {
    dir = -1;
    setSnake(dir);
  }
}

function moveSnake() {
  clearClassList([...squares.children], "snake");

  snake.forEach((part) => squares.children[part].classList.add("snake"));
}

function setRandomLocationForApple() {
  clearClassList([...squares.children], "apple");

  apple = Math.floor(Math.random() * 398);

  if (!squares.children[apple].classList.contains("snake")) {
    squares.children[apple].classList.add("apple");
  }
}

function checkSnakePlace() {
  const head = snake[0];
  const tail = snake[length - 1];
  let hit = false;
  if (
    (!((head - dir) % unit) && dir === -1) ||
    (!(head % unit) && dir === 1) ||
    (head < 0 && dir === -unit) ||
    (head >= unit * unit && dir === unit) ||
    squares.children[head + dir].classList.contains("snake")
  ) {
    hit = true;
    return hit;
  }
  return hit;
}

function isAteApple(tail) {
  const head = snake[0];
  if (squares.children[head].classList.contains("apple")) {
    squares.children[apple].classList.remove("apple");

    snake.push(tail);
    result++;
    score.innerHTML = result;
    setRandomLocationForApple();
  }
  moveSnake();
}

function hitTheEdge() {
  clearInterval(appleInterval);
  clearInterval(snakeInterval);
  squares.style.borderColor = "#a02f2f";
  // document.removeEventListener("keyup", moveSnakeControlHandler);
  score.innerHTML = 0;
  appleInterval = null;
  snakeInterval = null;
}

function clearClassList(lists, className) {
  lists.forEach((item) => item.classList.remove(className));
}

reset.addEventListener("click", createBoard);
