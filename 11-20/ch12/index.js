const toggleBtn = document.querySelector(".switch");

toggleBtn.addEventListener("change", () => {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
});