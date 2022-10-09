const container = document.querySelector(".container");

// const name = "processing";
const c = 875;
const b = 35;
const length = [...container.children].length;

const rules = [];

[...container.children].reverse().map((_, index) => setAnimationRule(index));
// console.log([...container.children].reverse().map((box) => console.log(box)));

function setAnimationRule(index) {
    const current = (length - (index + 1)) * b;
    const goal = c - (index + 1) * b;
    const offset = goal - current;
    let endPoint = Math.floor((offset / b) * 100);
    let rule = `0%{transform:translate(0%)}`;
    rule += `100%{transform:translateX(${endPoint}%)}`;
    rules.push(rule);
}

rules.map((rule, index) =>
    document.styleSheets[2].insertRule(
        "@keyframes " + `processing${index}` + "{" + rule + "}"
    )
);

[...container.children].map((elm, index) => {
    const delay = 1 - index / 2;
    elm.style.animationDelay = `${delay}s`;
    elm.style.animationName = `processing${index}`;
});

setInterval(() => {
    const delay = 1 - index / 2;
    elm.style.animationDelay = `${delay}s`;
    elm.style.animationName = `processing${index + 1}`;
    document.styleSheets[2].deleteRule[index];
}, 6000);