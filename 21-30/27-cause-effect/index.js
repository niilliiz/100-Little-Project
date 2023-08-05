import data from "./data.js";

const navList = document.querySelector(".navList");
const mainSection = document.querySelector(".main");

let currentItem = null;

// map data in aside
data.map((item) => {
  const li = document.createElement("li");
  const button = document.createElement("button");

  li.classList.add("navItem");
  li.setAttribute("id", item.id);
  button.classList.add("cta");

  button.textContent = item.name;
  button.addEventListener("click", () => handleShowContent(item.id));
  button.addEventListener("mouseenter", hadleHoveredState);
  button.addEventListener("mouseleave", hadleDiactiveState);

  li.appendChild(button);
  navList.appendChild(li);
});

function handleShowContent(id) {
  currentItem = id;

  mainSection.textContent = data.find((item) => item.id === id).name;
}

function hadleHoveredState(e) {
  this.classList.add("hovered");
}

function hadleDiactiveState(e) {
  this.classList.remove("leave", "hovered");
}

// *=> mouseenter and mouseleave => triggered only when mouse is entered or exit the bound element
// *=> mouseover and mouseout => triggered only when mouse is entered or exit the element or the element's children
