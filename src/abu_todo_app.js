// * Add a filter to show Completed and in progress
// * Add a greeting
// * Add a list of toDOs for example for work or school.
// * Resposive for web and mobile
// * Add a search bar
// * Add an error below the input field if the user does not enter a valid toDO

// window.onload = getNewItem;

let toDos = [];
const todoInput = document.querySelector(".inputItem");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listener
// let deleteTrash = document.querySelectorAll(".fas.fa-trash");
todoList.addEventListener("click", deleteItem);
todoButton.addEventListener("click", getNewItem);

//#region Delete item from list
function deleteItem(event) {
    const item = todoList.children;
    for (let i = 0; i < item.length; i++) {
        if (item[i].contains(event.target)) {
            todoList.removeChild(item[i]);
            localStorage.removeItem("toDOs");
        }
    }
}
//#endregion

function getNewItem(event) {
    event.preventDefault();
    let toDoItem = getItemTemplate(todoInput?.value);
    if (toDoItem === undefined) {
        alert("Please enter a valid toDo");
        return;
    }
    todoList.insertAdjacentHTML("beforeend", toDoItem);
    todoInput.value = "";
}




//TODO: Save toDOs to local storage
//TODO: Set toDOs to local storage {https://thecodingpie.medium.com/how-to-build-a-todo-list-app-with-javascript-and-local-storage-a884f4ea3ec}
function addValuesToLocalStorage(toDoItem) {
    let toDoTask = toDos.push(toDoItem);
    setItemLocalStorage(toDoTask);
    return toDoTask;

}

function getLocalStorage() {
    let retrievedTasks = JSON.parse(localStorage.getItem());
    let tasks = retrievedTasks.forEach((task) => {
        if (task === null || task === undefined) return;
        todoList.insertAdjacentHTML("beforeend", task);
        todoInput.value = "";
    });
    return tasks;
}

function setItemLocalStorage(task) {
    let taskList = getLocalStorage();
    toDos.push(taskList);
    for (let i = 0; i < toDos.length; i++) {
        let key = i;
        localStorage.setItem(key, JSON.stringify(task));
    }
    return localStorage.setItem("toDos", JSON.stringify(task));
}

//#region Get item template
function getItemTemplate(contentValue) {
    if (contentValue === "") return;
    return `<li class="todo">
                <div class="content">
                    <p>${contentValue}</p> 
                </div>  
                <div class="interactions" >
                    <div class="completeTask">
                        <button class="complete-btn">
                            <i class="fas fa-check"></i>
                        </button>
                    </div>
                    <div class="deleteTask">
                        <button class="trash-btn">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </li>`;
}
//#endregion
