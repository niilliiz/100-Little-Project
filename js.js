/********************NAV SIDE**************************** */
const navBar = document.getElementsByClassName("navBar")[0];
const ul = document.getElementsByTagName("ul")[0];
const header = document.getElementsByTagName("header")[0];
const footer = document.getElementsByTagName("footer")[0];
const menu = document.getElementsByClassName("menu")[0];

let showMenu = true;
let items = [navBar, header, ul, footer];

const navItem = [
    [
        { title: "Dashboard", icon: ["fa", "fa-home"] },
        { title: "Report", icon: ["fa", "fa-bar-chart"] },
    ],
    [
        { title: "Analytics", icon: ["fa", "fa-pie-chart"] },
        { title: "Customers", icon: ["fa", "fa-group"] },
        { title: "Order", icon: ["fa", "fa-shopping-cart"] },
        { title: "Products", icon: ["fa", "fa-cubes"] },
        { title: "Invoice", icon: ["fa", "fa-inbox"] },
    ],
    [
        { title: "Outlet", icon: ["fa", "fa-shopping-bag"] },
        { title: "Employee", icon: ["fa", "fa-users"] },
        { title: "Shipment", icon: ["fa", "fa-truck"] },
        { title: "Marketing", icon: ["fa", "fa-line-chart"] },
    ],
];

navItem.map((category) => {
    category.map((item) => {
        if (item.title) {
            const li = document.createElement("li");
            const span = document.createElement("span");
            const anchorSpan = document.createElement("a");
            const anchorTitle = document.createElement("a");
            item.icon.map((classItem) => span.classList.add(classItem));
            anchorTitle.textContent = item.title;
            anchorTitle.classList.add("navList");
            anchorSpan.href = "/";
            anchorTitle.href = "/";
            anchorSpan.appendChild(span);
            li.appendChild(anchorSpan);
            li.appendChild(anchorTitle);
            ul.appendChild(li);
        }
    });
    const div = document.createElement("div");
    div.classList.add("separator");
    ul.appendChild(div);
});

menu.addEventListener("click", () => {
    showMenu = !showMenu;
    if (!showMenu) {
        items.forEach((item) => {
            console.dir(item);
            item.classList.add("hide");
        });
    }
    if (showMenu) {
        items.forEach((item) => {
            console.dir(item);
            item.classList.remove("hide");
        });
    }
});

/********************BTN SIX**************************** */

const btn6 = document.getElementsByClassName("btn6")[0];

function hoverHandler(e) {
    console.dir(e);
    const div = document.createElement("div");
    div.classList.add("radical");
    btn6.appendChild(div);
}
btn6.addEventListener("mouseover", (e) => hoverHandler(e));

console.dir(btn6);

/***
 * clientHeight: 65
clientLeft: 0
clientTop: 0
clientWidth: 140


clientX: 728
clientY: 317

offsetX: 126
offsetY: 64

        console.log(draggableItem.getBoundingClientRect());

 */