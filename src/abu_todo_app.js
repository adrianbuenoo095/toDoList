//.some() method to check if the toDo is already in the list
// * Add a filter to show Completed and in progress
// * Add a greeting
// * Add a list of toDOs for example for work or school.
// * Responsive for web and mobile
// * Add a search bar
// * Add an error below the input field if the user does not enter a valid toDO


window.onload = getKeysFromLocalStorage;

const todoInput = document.querySelector(".inputItem");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const toDosList = [];

//Event Listener
// let deleteTrash = document.querySelectorAll(".fas.fa-trash");
todoList.addEventListener("click", deleteItem);
todoButton.addEventListener("click", newItem);

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

function newItem(event) {
    event.preventDefault();
    let toDoItem = getItemTemplate(todoInput?.value);
    if (toDoItem === undefined) {
        alert("Please enter a valid toDo");
        return;
    }

    toDosList.push(toDoItem);
    addToDosToLocalStorage();
}

function createNewTodoItem(toDo) {
    todoList.insertAdjacentHTML("beforeend", toDo);
    todoInput.value = "";
}

function getKeysFromLocalStorage() {
    const storageLength = localStorage.length
    for (let i = 1; i < storageLength; ++i) {
        const key = i;
        const todo = JSON.parse(localStorage.getItem(key));
        if (todo === null) return;
        createNewTodoItem(todo);
    }
}

function addToDosToLocalStorage() {
    const uniqueKey = 0;
    for (const toDo of toDosList) {
        uniqueKey++;
        localStorage.setItem(uniqueKey, JSON.stringify(toDo))
        createNewTodoItem(toDo);
    }
};

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
