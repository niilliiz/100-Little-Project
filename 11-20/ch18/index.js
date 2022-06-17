const carousel = document.querySelector(".carousel").children;
const arrows = document.querySelectorAll(".carousel--arrow ");

let active = 1;
const count = 3;

arrows.forEach((arrow) =>
    arrow.addEventListener("click", () => {
        arrow.classList.contains("carousel--arrow__leftArrow") ?
            handleNextActiveCard(-1) :
            handleNextActiveCard(1);
    })
);

function handleNextActiveCard(step) {
    active = (active - step) % count;
    active = active < 0 ? count + active : active;
    handleMoveCarousel(step);
    handleBg(step);
}

function handleMoveCarousel(dir) {
    const active = document.querySelector(".active");
    const pR = document.querySelector(".pRotate");
    const nR = document.querySelector(".nRotate");
    if (dir === 1) {
        handleClasslist(active, "active", "remove");
        handleClasslist(active, "inactive", "add");
        handleClasslist(active, "nRotate", "add");

        handleClasslist(nR, "pRotate", "add");
        handleClasslist(nR, "nRotate", "remove");

        handleClasslist(pR, "inactive", "remove");
        handleClasslist(pR, "active", "add");
        handleClasslist(pR, "pRotate", "remove");

        nR.style.zIndex = "10";
        active.style.zIndex = "20";
        pR.style.zIndex = "30";
    } else if (dir === -1) {
        handleClasslist(active, "active", "remove");
        handleClasslist(active, "inactive", "add");
        handleClasslist(active, "pRotate", "add");

        handleClasslist(pR, "nRotate", "add");
        handleClasslist(pR, "pRotate", "remove");

        handleClasslist(nR, "inactive", "remove");
        handleClasslist(nR, "active", "add");
        handleClasslist(nR, "nRotate", "remove");

        nR.style.zIndex = "30";
        active.style.zIndex = "20";
        pR.style.zIndex = "10";
    }
}

function handleClasslist(elm, className, method) {
    elm.classList[method](className);
}

function handleBg(dir) {
    const current = document.querySelector(".current");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");

    if (dir === 1) {
        handleClasslist(current, "current", "remove");
        handleClasslist(current, "next", "add");

        handleClasslist(next, "next", "remove");
        handleClasslist(next, "prev", "add");

        handleClasslist(prev, "current", "add");
        handleClasslist(prev, "prev", "remove");

        current.style.zIndex = "20";
        next.style.zIndex = "-10";
        prev.style.zIndex = "30";
    } else if (dir === -1) {
        handleClasslist(current, "current", "remove");
        handleClasslist(current, "prev", "add");

        handleClasslist(prev, "next", "add");
        handleClasslist(prev, "prev", "remove");

        handleClasslist(next, "current", "add");
        handleClasslist(next, "next", "remove");

        current.style.zIndex = "20";
        prev.style.zIndex = "-10";
        next.style.zIndex = "30";
    }
}