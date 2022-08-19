// * Add a filter to show Completed and in progress
// * Add a greeting
// * Add a list of toDOs for example for work or school.
// * Resposive for web and mobile
// * Add a search bar

window.onload = getLocalStorage;

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
    let userInputToDO = getItemTemplate(todoInput.value);
    if (userInputToDO === undefined || userInputToDO === null) {
        alert("Please enter a valid toDo");
        return;
    }
    addToDOsToLocalStorage(userInputToDO);
    // todoList.insertAdjacentHTML("beforeend", userInputToDO);
    // todoInput.value = "";
}

//TODO: Save toDOs to local storage
//TODO: Set toDOs to local storage {https://thecodingpie.medium.com/how-to-build-a-todo-list-app-with-javascript-and-local-storage-a884f4ea3ec}
function addToDOsToLocalStorage(toDoItem) {
    toDos.push(toDoItem);
    setItemLocalStorage(toDos);
}

function getLocalStorage() {
    let retrievedTasks = JSON.parse(localStorage.getItem("toDos"));
    retrievedTasks.forEach((task) => {
        if (task === null || task === undefined) return;
        todoList.insertAdjacentHTML("beforeend", task);
        todoInput.value = "";
    });
}

function setItemLocalStorage(task) {
    localStorage.setItem("toDos", JSON.stringify(task));
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
