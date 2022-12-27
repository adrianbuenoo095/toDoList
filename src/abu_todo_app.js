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
    console.log(toDosList.push(toDoItem));
    addToDosToLocalStorage();
}

function createNewTodoItem(toDo) {
    todoList.insertAdjacentHTML("beforeend", toDo);
    todoInput.value = "";
}

function getKeysFromLocalStorage() {
    if (!localStorage.length) return;
    let toDoList = JSON.parse(localStorage.getItem("toDosList"));
    toDoList.forEach(element => {
        createNewTodoItem(element);
    });
}

function isDuplicate(currentToDo) {
    let isItemDuplicate = toDosList.some(element => element.innerHTML === currentToDo.innerHTML);
    console.error(`Duplicate item: ${isItemDuplicate}`);
    return isItemDuplicate;
}

function addToDosToLocalStorage() {
    let testing = localStorage.setItem("toDosList", JSON.stringify(toDosList));
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
