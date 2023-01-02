window.onload = retrieveToDosFromLocalStorage;

const todoInput = document.querySelector(".inputItem");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
let toDosList;

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
            localStorage.removeItem(i);
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

    // turnArrayIntoObject(toDoItem);
    createNewTodoItem(toDoItem);
    addToDosToLocalStorage(toDoItem);
}

// function turnArrayIntoObject(toDoItem) {
//     let objectArray = {
//         id: new Date(),
//         name: toDoItem,
//         isCompleted: false
//     };

//     return toDosList.push(objectArray);
// }

function createNewTodoItem(toDo) {
    todoList.insertAdjacentHTML("beforeend", toDo);
    todoInput.value = "";
}

function retrieveToDosFromLocalStorage() {
    if (localStorage.getItem("toDosList") === null) return;
    let localStorageList = JSON.parse(localStorage.getItem("toDosList"));
    localStorageList.forEach(toDo => {
        if (toDo === null) return;
        createNewTodoItem(toDo);
    });
}

function isToDoDuplicated(currentToDo) {
    return toDosList.some(element => element === currentToDo) ? true : false;
}

function addToDosToLocalStorage(toDoItem) {
    if (localStorage.getItem("toDosList") === null) {
        toDosList = [];
    } else {
        toDosList = JSON.parse(localStorage.getItem("toDosList"));
    }

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

