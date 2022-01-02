/******NAV SIDE************ */
const navBar = document.getElementsByClassName("navBar")[0];
const ul = document.createElement("ul");
const header = document.createElement("header");
const footer = document.createElement("footer");

const navItem = [
    [
        { title: "Dashboard", icon: ["fa", "sth"] },
        { title: "Report", icon: ["fa", "sth"] },
    ],
    [
        { title: "Analytics", icon: ["fa", "sth"] },
        { title: "Customers", icon: ["fa", "sth"] },
        { title: "Order", icon: ["fa", "sth"] },
        { title: "Products", icon: ["fa", "sth"] },
        { title: "Invoice", icon: ["fa", "sth"] },
    ],
    [
        { title: "Outlet", icon: ["fa", "sth"] },
        { title: "Employee", icon: ["fa", "sth"] },
        { title: "Shipment", icon: ["fa", "sth"] },
        { title: "Marketing", icon: ["fa", "sth"] },
    ],
];

header.textContent = "menu + name";
footer.textContent = "log + status+onlineStatus";

navBar.appendChild(header);

navItem.map((category) => {
    category.map((item) => {
        if (item.title) {
            const li = document.createElement("li");
            const span = document.createElement("span");
            const anchor = document.createElement("a");
            item.icon.map((classItem) => span.classList.add(classItem));
            anchor.textContent = item.title;
            li.appendChild(anchor);
            li.appendChild(span);
            ul.appendChild(li);
        }
    });
    const div = document.createElement("div");
    div.classList.add("separator");
    ul.appendChild(div);
});

navBar.appendChild(ul);
navBar.appendChild(footer);