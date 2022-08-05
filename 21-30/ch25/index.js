const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const search = document.querySelector(".search");
const lists = document.querySelector(".lists");

const cities = [];

fetch(endpoint)
  .then((response) => response.json())
  .then((data) => cities.push(...data));

function handleChangeInput(word, cities) {
  const regex = new RegExp(word, "gi");
  return cities.filter(
    (place) => place.city.match(regex) || place.state.match(regex)
  );
}

function handleKeyUp(e) {
  [...lists.children].forEach((child) => lists.removeChild(child));

  const filtered = handleChangeInput(e.target.value, cities);

  filtered.forEach((place) => generateListItem(place));
}

function generateListItem(place) {
  const li = document.createElement("li");
  const title = document.createElement("span");
  const population = document.createElement("span");

  title.innerHTML = `${place.state}, ${place.city}`;
  population.innerHTML = `${place.population}`;

  population.classList.add("population");

  li.append(title);
  li.append(population);

  lists.append(li);
}

search.addEventListener("keyup", handleKeyUp);

handleChangeInput("Bos", cities);
