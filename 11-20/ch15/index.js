const accordions = document.querySelector(".accordionWrapper").children;

[...accordions].forEach((acc, index) =>
    acc.children[0].addEventListener("click", () => openAccordionHandler(index))
);

function openAccordionHandler(index) {
    if (accordions[index].children[1].classList.toggle("openAccordion")) {
        accordions[index].children[1].classList.add = "openAccordion";
    }

    [...accordions].forEach(
        (acc, i) =>
        index != i &&
        acc.children[1].classList.toggle("openAccordion") &&
        acc.children[1].classList.remove("openAccordion")
    );
}