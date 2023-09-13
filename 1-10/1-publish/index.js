const state = ["idle", "loading", "done"];
const btn1 = document.getElementsByClassName("btn1")[0];

let currentState = 0;

btn1.addEventListener("click", (e) => {
  btn1.classList.remove(...state);
  currentState++;
  btn1.classList.add(`${state[currentState % state.length]}`);
});
