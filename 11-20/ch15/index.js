const accordions = document.querySelector(".accordionWrapper").children;

[...accordions].forEach((acc, index) =>
    acc.children[0].addEventListener("click", () => openAccordionHandler(index))
);

function openAccordionHandler(index) {
    [...accordions].forEach((acc, i) => {
        acc.children[0].classList.remove("openHeader");

        index != i &&
            acc.children[1].classList.toggle("openAccordion") &&
            acc.children[1].classList.remove("openAccordion");
    });

    if (
        accordions[index].children[1].classList.toggle("openAccordion") ||
        accordions[index].children[0].classList.toggle("openHeader")
    ) {
        accordions[index].children[1].classList.add("openAccordion");
        accordions[index].children[0].classList.add("openHeader");
    }
}