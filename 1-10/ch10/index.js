const burgerIcon = document.querySelector(".burgerIcon");
const logo = document.querySelector("h1");
const menu = document.querySelector(".menu");

let showMenu = false;

burgerIcon.addEventListener("click", () => {
    burgerIcon.classList.toggle("closeIcon");
    menu.classList.toggle("open");

    if (!showMenu) {
        showMenu = true;
        logo.style.color = "#fff";
        logo.style.transition = "color 0.3s ease-in-out";
    } else {
        showMenu = false;
        logo.style.color = "#000";
        logo.style.transition = "color 0.3s ease-in-out";
    }
});