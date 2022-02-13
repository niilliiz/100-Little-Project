const container = document.querySelector(".container");
const addInput = document.querySelector(".addInput");
const addBtn = document.querySelector(".addBtn");

const ul = document.createElement("ul");
ul.classList.add("tasksContainer");

container.append(ul);

let currentTask = {};

addBtn.addEventListener("click", inputChangeHandler);

addInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        inputChangeHandler();
    }
});

function inputChangeHandler() {
    currentTask = {};

    currentTask.title = addInput.value;
    currentTask.checked = false;
    addNewTaskHandler(currentTask);
}

function addNewTaskHandler(task) {
    addInput.value = "";

    const li = document.createElement("li");
    const div = document.createElement("div");
    const span = document.createElement("span");
    const trashIcon = document.createElement("i");
    const deleteBtn = document.createElement("button");
    const checkbox = document.createElement("button");

    span.textContent = task.title;
    checkbox.type = task.checked;

    li.setAttribute("id", id);

    li.classList.add("task");
    div.classList.add("wrapper");
    span.classList.add("title");
    trashIcon.classList.add("fa");
    trashIcon.classList.add("fa-trash");
    deleteBtn.classList.add("deleteBtn");
    checkbox.classList.add("checkbox");

    deleteBtn.appendChild(trashIcon);

    div.appendChild(checkbox);
    div.appendChild(span);

    li.appendChild(div);
    li.appendChild(deleteBtn);

    li.addEventListener("mouseover", mouseOverHandler);
    li.addEventListener("mouseleave", mouseLeaveHandler);
    checkbox.addEventListener("click", checkBoxClickingHandler);

    deleteBtn.addEventListener("click", deleteTaskHandler);

    ul.appendChild(li);
}

function mouseOverHandler() {
    this.children[1].classList.add("showBtn");
}

function mouseLeaveHandler() {
    this.children[1].classList.remove("showBtn");
}

function checkBoxClickingHandler() {
    this.parentElement.classList.add("checked");
}

function deleteTaskHandler() {
    const deletingTask = this.parentElement;
    deletingTask.classList.add("deletedTask");
}

// this challenge could've been written far better than this :(