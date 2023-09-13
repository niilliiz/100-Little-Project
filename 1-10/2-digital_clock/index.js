const clockContainer = document.getElementsByClassName("digitalClock")[0];

let innerTxt;

const newDiv = document.createElement("div");
newDiv.classList.add("ingredientBackgrounds");
clockContainer.appendChild(newDiv);
setInterval(() => {
  const today = new Date();

  innerTxt = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
  newDiv.textContent = innerTxt;
  console.log("dffd");
}, 1000);
