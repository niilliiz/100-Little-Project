/***********DAY FOUR***********************/

const rate = document.getElementsByClassName("rate")[0];
const btn4 = document.getElementsByClassName("btn4")[0];
const star = document.getElementsByClassName("star")[0];
const span = document.getElementsByClassName("fa-star")[0];

const countText = document.getElementsByClassName("count")[0];

let count = 27;

countText.textContent = `${count}`;
console.dir(star.classList);

btn4.addEventListener("click", flyingStar);

function flyingStar() {
    // star.classList.remove("hoverStar");
    span.style.color = "#ffd700";
    star.classList.add("flyingStar");
}

btn4.addEventListener("click", addCount);

function addCount() {
    setTimeout(() => {
        count++;

        countText.textContent = count;
        countText.style.color = "#ffd700";
    }, 600);
    btn4.removeEventListener("click", addCount);
    btn4.removeEventListener("click", flyingStar);
}

/******NAV SIDE************ */
const navBar = document.getElementsByClassName("navBar")[0];

const navItem = [
    [
        { title: "Dashboard", icon: "" },
        { title: "Report", icon: "" },
    ],
    [
        { title: "Analytics", icon: "" },
        { title: "Customers", icon: "" },
        { title: "Order", icon: "" },
        { title: "Products", icon: "" },
        { title: "Invoice", icon: "" },
    ],
    [
        { title: "Outlet", icon: "" },
        { title: "Employee", icon: "" },
        { title: "Shipment", icon: "" },
        { title: "Marketing", icon: "" },
    ],
];