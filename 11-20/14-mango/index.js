/**-----------------CARDS------------------ */
const cards = document.querySelector(".cards");

const albums = [
    { src: "img2.jpg", title: "Swimwear 2022" },
    { src: "img6.webp", title: "Key Trends" },
    { src: "img8.webp", title: "Party and events" },
    { src: "img1.webp", title: "Accessories Edition" },
    { src: "img5.webp", title: "Must-haves" },
    { src: "img4.webp", title: "Online Exclusive" },
    { src: "img3.webp", title: "Jackets and Suit Jackets" },
    { src: "img7.webp", title: "Dresses and Jumpsuits" },
    { src: "img9.webp", title: "Shoes" },
];

albums.map((img) => {
    const div = document.createElement("div");
    const imgContainer = document.createElement("div");
    const span = document.createElement("span");
    const anchor = document.createElement("a");

    span.innerHTML = img.title;
    anchor.href = "#";
    anchor.innerHTML = "Discover more";

    imgContainer.style.backgroundImage = `url(./asset/homeImage/album/${img.src})`;

    div.classList.add("card");
    span.classList.add("title");
    anchor.classList.add("link");
    imgContainer.classList.add("imgContainer");

    div.appendChild(imgContainer);
    div.appendChild(span);
    div.appendChild(anchor);

    cards.appendChild(div);
});

/**-----------------SLIDER----------------------- */
const slides = document.querySelector(".slides");

for (let i = 1; i < 5; i++) {
    const div = document.createElement("div");
    const slideImageContainer = document.createElement("div");
    const anchor = document.createElement("a");

    slideImageContainer.style.backgroundImage = `url(./asset/homeImage/slider/${i}.webp)`;

    div.classList.add("slide");
    slideImageContainer.classList.add("slideImageContainer");
    div.appendChild(anchor);
    anchor.appendChild(slideImageContainer);
    slides.appendChild(div);
}

/**-----------------others----------------------- */
const others = document.querySelector(".others");

const othersImage = [
    { src: "1.jpg", text: "Men" },
    { src: "2.jpg", text: "Kids" },
];

othersImage.forEach((img) => {
    const div = document.createElement("div");
    const othersImageContainer = document.createElement("div");
    const anchor = document.createElement("a");
    const button = document.createElement("button");

    othersImageContainer.style.backgroundImage = `url(./asset/homeImage/others/${img.src})`;
    button.textContent = img.text;

    div.classList.add("other");
    othersImageContainer.classList.add("othersImageContainer");
    button.classList.add("button", "othersBtn");

    div.appendChild(anchor);
    div.appendChild(button);
    anchor.appendChild(othersImageContainer);
    others.appendChild(div);
});

/**-----------------LISTS----------------------- */
const clothesList = document.querySelector(".clothesList");
const accessoriesList = document.querySelector(".accessoriesList");
const womanArea = document.querySelector(".womanArea");

const clothes = [
    "Dresses and Jumpsuits",
    "Shirts",
    "T-shirts and Tops",
    "Jackets and Suit Jackets",
    "Cardigans and Sweaters",
    "Sweatshirts",
    "Coats",
    "Trousers",
    "Jeans",
    "Skirts",
    "Bikinis and Swimsuits",
    "Sportswear",
    "Underwear and Lingerie",
    "Pyjamas",
];

const Accessories = [
    "Shoes",
    "Bags",
    "Jewellery",
    "Wallets and Cases",
    "Belts",
    "Sunglasses",
    "Hats",
    "Scarves",
    "Hats",
    "Beauty",
    "More accessories",
];

const cList = document.createElement("ul");

clothesList.appendChild(cList);

const aList = document.createElement("ul");

accessoriesList.appendChild(aList);

listMaker(Accessories, aList);
listMaker(clothes, cList);

function listMaker(arr, parent) {
    arr.forEach((item) => {
        const li = document.createElement("li");
        const anchor = document.createElement("a");

        anchor.textContent = item;

        li.appendChild(anchor);
        parent.appendChild(li);
    });
}

/**----------------------HOVER WOMAN */

const footer = document.querySelector("footer");
const woman = document.querySelector(".womanCategory");
const separator = document.querySelector(".separator ");

woman.addEventListener("mousemove", () => {
    footer.style.bottom = "-350px";
    footer.style.borderTopColor = "#d5d5d6";
    separator.style.opacity = "0";
    separator.style.marginTop = "0";
});
woman.addEventListener("mouseleave", () => {
    footer.style.bottom = "-190px";
    footer.style.borderTopColor = "transparent";
    separator.style.opacity = "1";
    separator.style.marginTop = "80px";
});