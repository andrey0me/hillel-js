let todoBoxEl = document.getElementById("todo-list-box");

function getMaxDivElId() {
    let todoItems = document.querySelectorAll(".todo-item");
    let maxId = 0;

    todoItems.forEach(item => {
        let id = parseInt(item.id.replace("div-", ""), 10);
        if (!isNaN(id) && id > maxId) {
            maxId = id;
        }
    });

    return maxId;
}


function addTodoItem(taskName) {
    let maxId = getMaxDivElId();
    let newId = maxId + 1;

    let newDiv = document.createElement("div");
    newDiv.className = "todo-item";
    newDiv.id = `div-${newId}`;

    let newLi = document.createElement("li");
    newLi.className = "todo-item-name";
    newLi.textContent = taskName || `Завдання ${newId}`;

    let newButton = document.createElement("button");
    newButton.id = `del-${newId}`;
    newButton.name = "del";
    newButton.type = "button";
    newButton.className = "btn-del";
    newButton.textContent = "Видалити";

    newDiv.appendChild(newLi);
    newDiv.appendChild(newButton);

    todoUl = document.getElementById("todo-ul");

    todoUl.appendChild(newDiv);
}

function delTodoItem(elId) {
    todoEl = document.getElementById(elId);
    todoEl.remove();
}

todoBoxEl.addEventListener("click", function (event) {

    if ((event.target.tagName === 'BUTTON') && (event.target.name === "del")) {
        delTodoItem(`div-${event.target.id.replace("del-", "")}`);
    }

    if ((event.target.tagName === 'BUTTON') && (event.target.name === "add")) {

        let addElName = document.getElementById("input-add");
        addTodoItem(addElName.value);
    }

});