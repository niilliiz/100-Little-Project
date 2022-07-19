/*-----SWITCH THEME-----*/
const switchBtn = document.querySelector(".checkbox");

switchBtn.addEventListener("change", () => {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
});

/*-----ADD NEW TASK----- */
const addNewTask = document.querySelector(".newTask");
const checks = document.getElementsByClassName("check");
const lists = document.querySelector(".lists");

const tasks = [];

addNewTask.addEventListener("change", handleNewTask);

function handleNewTask(e) {
    const id = Math.floor(Math.random() * 2000);

    /*status=> 1 :completed 0:active null:all  */
    tasks.push({ id: id, title: e.target.value, status: 0 });

    listGenerator(tasks);
}

function listGenerator(array, state = null) {
    [...lists.children].map((node) => lists.removeChild(node));

    array
        .filter((task) => {
            if (state === null) {
                return task;
            } else {
                return task.status === state;
            }
        })
        .map((task) => {
            const li = elementGenerator(task.title, task.status);
            li.children[2].addEventListener("click", () =>
                deleteTaskHandler(task.id)
            );
            li.children[0].addEventListener("change", () =>
                handleCompleteTask(task.id)
            );

            lists.append(li);
            addNewTask.value = "";
        });
    setLeftTasksNumber(tasks);
}

/*----GENERATE NEW  LIST ELEMENT*/
function elementGenerator(content, isCompleted) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const label = document.createElement("label");
    const input = document.createElement("input");
    const deleteIcon = document.createElement("button");

    span.innerHTML = content;
    span.classList.add("title");

    label.classList.add("check");

    input.type = "checkbox";
    input.classList.add("checkbox");

    label.append(input);

    deleteIcon.classList.add("deleteIcon");

    li.classList.add("task");
    isCompleted ? li.classList.add("completed") : null;

    li.append(label);
    li.append(span);
    li.append(deleteIcon);

    return li;
}

/*------------DELETE TASK-------------- */
function deleteTaskHandler(id) {
    const index = tasks.findIndex((task) => task.id === id);
    tasks.splice(index, 1);

    listGenerator(tasks);
}

/*------------COMPLETE TASK-------------- */
function handleCompleteTask(id) {
    const index = tasks.findIndex((task) => task.id === id);
    tasks[index].status = 1;

    listGenerator(tasks);
}

/*------------FILTER LISTS-------------- */
const all = document.querySelector(".all");
const active = document.querySelector(".active");
const completed = document.querySelector(".completed");

all.addEventListener("click", () => {
    all.classList.toggle("current");
    active.classList.remove("current");
    completed.classList.remove("current");
    listGenerator(tasks, null);
});
active.addEventListener("click", () => {
    listGenerator(tasks, 0);
    active.classList.add("current");
    all.classList.remove("current");
    completed.classList.remove("current");
});
completed.addEventListener("click", () => {
    listGenerator(tasks, 1);
    completed.classList.toggle("current");
    active.classList.remove("current");
    all.classList.remove("current");
});

/*-----------------------CLEAR TASKS--------- */
const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
    tasks.splice(0, tasks.length);
    listGenerator(tasks);
    setLeftTasksNumber(tasks);
});

/*-------------------REMAINED TASKS-----------*/
const left = document.querySelector(".left");

function setLeftTasksNumber(array) {
    const length =
        array.length > 0 ? array.filter((item) => item.status !== 1).length : 0;
    left.innerHTML = length ? `${length} tasks left` : "list is empty";
}