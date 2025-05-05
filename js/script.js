let todoBoxEl = document.getElementsByClassName("js--todos-wrapper")[0];
let todoFormEl = document.getElementsByClassName("js--form")[0];
//localStorage.clear();
let tasks = JSON.parse(localStorage.getItem('tasks')) || []

function getMaxTaskId () {
    let maxId = 0
    tasks.forEach((task) => {
        if (maxId < task.id) {
            maxId = task.id;
        }
    });

    return maxId;
}


function loadTodoItems() {
    todoBoxEl.innerHTML = '';

    tasks.forEach((task) => {
        const li = document.createElement('li');
        li.classList.add("todo-item")
        if (task.confirmed) {
            li.classList.add("todo-item--checked")
        }    
        li.innerHTML = 
            `<input type="checkbox" ${task.confirmed ? "checked" : ""} onchange="confirmTask(${task.id})">
             <span class="todo-item__description">${task.taskName}</span>
             <button class="todo-item__delete" type="button" onclick="delTodoItem(${task.id})">Видалити</button>`;
        todoBoxEl.appendChild(li);
    });
}

function addTodoItem(taskName) {
    const id = getMaxTaskId() + 1; 
    let confirmed = false;
    tasks.push({id, taskName, confirmed})
    localStorage.setItem('tasks', JSON.stringify(tasks));
    loadTodoItems();
}

function confirmTask (id) {
    let confirmTask = tasks.find(task => task.id === id);
    confirmTask.confirmed = !confirmTask.confirmed;
    loadTodoItems();
}

function delTodoItem(id) {
    let delIndex = tasks.findIndex(task => task.id === id);
    if (delIndex !== -1) {
        tasks.splice(delIndex, 1);
      }
    
    loadTodoItems();
}

todoFormEl.addEventListener("click", function (event) {

    if ((event.target.tagName === 'BUTTON') && (event.target.className === "form__btn")) {
        let addElName = document.getElementsByClassName("js--form__input")[0].value;
        addTodoItem(addElName);
    }
})

document.addEventListener("DOMContentLoaded", function () {
    loadTodoItems();
})