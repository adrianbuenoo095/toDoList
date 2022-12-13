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
    console.log(createNewTodoItem(toDoItem));
}

function createNewTodoItem(toDoItem) {
    let toDoTask = toDoItem;
    console.log("this is from " + typeof (createNewTodoItem) + toDoTask);
    todoList.insertAdjacentHTML("beforeend", toDoTask);
    todoInput.value = "";
}

function getKeysFromLocalStorage() {

    for (let i = 0, len = localStorage.length; i < len; ++i) {
        console.log(localStorage.getItem(localStorage.key(i)));
        createNewTodoItem(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
}

//TODO: Save toDOs to local storage
//TODO: Set toDOs to local storage {https://thecodingpie.medium.com/how-to-build-a-todo-list-app-with-javascript-and-local-storage-a884f4ea3ec}
function addValuesToLocalStorage(task) {
    let toDosList = [];
    toDosList.push(task);
    toDosList.forEach((todoInputItem, toDoKey) => {
        toDoKey++;
        createNewTodoItem(localStorage.setItem(toDoKey, JSON.stringify(todoInputItem)));

    });
    return toDosList;
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
