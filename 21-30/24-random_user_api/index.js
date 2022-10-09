const CONTENT = {
    name: "",
    cell: "",
    email: "",
    location: "",
    login: "",
    dob: "",
};

const MONTHS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

document.addEventListener("DOMContentLoaded", getData);

const icons = document.querySelectorAll(".icon");
const title = document.querySelector(".title");
const info = document.querySelector(".info");
const active = document.querySelector(".icon[data-name");
const button = document.querySelector("button");
const thumbnail = document.querySelector(".thumbnail");

async function getData() {
    let promise = await fetch("https://randomuser.me/api/").catch((error) => {
        title.innerHTML = "Please try again";
    });
    let results = await promise.json().then((response) => response.results[0]);

    title.innerHTML = "My name is";
    info.innerHTML = `${results.name.first} ${results.name.last}`;
    active.classList.add("active");

    thumbnail.src = results.picture.thumbnail;

    for (let i in CONTENT) {
        if (i === "name") {
            CONTENT[i] = `${results[i].first} ${results[i].last}`;
        } else if (i === "location") {
            CONTENT[i] = `${results[i].country}, ${results[i].city}`;
        } else if (i === "login") {
            CONTENT[i] = `${results[i].password}`;
        } else if (i === "dob") {
            const date = new Date(results[i].date);
            const year = date.getFullYear();
            const month = MONTHS[date.getUTCMonth()];
            const day = date.getDate();

            CONTENT[i] = `${year}, ${month}, ${day}`;
        } else {
            CONTENT[i] = results[i];
        }
    }

    icons.forEach((icon) => {
        icon.addEventListener("mouseover", (e) => handleMouseOver(e, CONTENT));
    });
    icons.forEach((icon) =>
        icon.addEventListener("mouseleave", handleMouseLeave)
    );
}

function handleMouseOver(e, content) {
    icons.forEach((icon) => icon.classList.remove("active"));
    const icon = e.target;
    const [key, value] = Object.entries(icon.dataset)[0];

    title.innerHTML = value;
    info.innerHTML = content[key];

    icon.classList.add("active");
}

function handleMouseLeave(e) {
    e.target.classList.remove("active");
}

button.addEventListener("click", getData);