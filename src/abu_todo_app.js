window.onload = retrieveToDosFromLocalStorage;

const todoInput = document.querySelector(".inputItem");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");


//Event Listener
// let deleteTrash = document.querySelectorAll(".fas.fa-trash");
todoList.addEventListener("click", deleteItem);
todoButton.addEventListener("click", newItem);

//#region Delete item from list
function deleteItem(event) {
    let toDosList = isLocalStorageEmpty();

    const item = todoList.childNodes;
    for (let index = 0; index < item.length; index++) {
        if (item[index].contains(event.target)) {
            toDosList.splice(item[index], 1);
            console.log(todoList.removeChild(item[index]));
            localStorage.setItem("toDosList", JSON.stringify(toDosList));
            return; // Use setItem instead of removing from the localstorage
        }
    }
}
function isLocalStorageEmpty() {
    let toDosList;
    if (!localStorage.getItem("toDosList")) {
        toDosList = [];
    } else {
        toDosList = JSON.parse(localStorage.getItem("toDosList"));
    }

    return toDosList;
}

//#endregion

function newItem(event) {
    event.preventDefault();
    let toDoItem = getItemTemplate(todoInput?.value);
    if (toDoItem === undefined) {
        alert("Please enter a valid toDo");
        return;
    }

    createNewTodoItem(toDoItem);
    addToDosToLocalStorage(toDoItem)
}

function createNewTodoItem(toDo) {
    todoList.insertAdjacentHTML("beforeend", toDo);
    todoInput.value = "";
}

function retrieveToDosFromLocalStorage() {
    if (!localStorage.getItem("toDosList")) return;
    let localStorageList = JSON.parse(localStorage.getItem("toDosList"));

    localStorageList.forEach(toDo => {
        if (toDo === null) return;
        createNewTodoItem(toDo);
    });
}

function addToDosToLocalStorage(toDoItem) {
    let toDosList = isLocalStorageEmpty();

    toDosList.push(toDoItem);
    localStorage.setItem("toDosList", JSON.stringify(toDosList));
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
                            <index class="fas fa-check"></index>
                        </button>
                    </div>
                    <div class="deleteTask">
                        <button class="trash-btn">
                            <index class="fas fa-trash"></index>
                        </button>
                    </div>
                </div>
            </li>`;
}
//#endregion

