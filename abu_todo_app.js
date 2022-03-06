///*
// * Add a filter to show Completed and in progress
// * Add a greeting
// * Add a list of todos for example for work or school.
// * Resposive for web and mobile
// * Add a search bar


let todos = JSON.parse(localStorage.getItem("todos")) || [];
const todoInput = document.querySelector(".inputIteam");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listener
// let deleteTrash = document.querySelectorAll(".fas.fa-trash");
todoList.addEventListener("click", deleteItem);
todoButton.addEventListener("click", addNewItem);

//#region Delete item from list 
function deleteItem(event) {
    const item = todoList.children;
    for (let i = 0; i < item.length; i++) {
        if (item[i].contains(event.target)) {
            todoList.removeChild(item[i]);
            localStorage.removeItem("todos");
        }
    }
}
//#endregion

function addNewItem(event) {
    debugger;
    event.preventDefault();
    let userInputToDO = getItemTemplate(todoInput.value);
    if (userInputToDO === undefined) {
        alert("Please enter a valid todo");
        return;
    }
    todoList.insertAdjacentHTML("beforeend", userInputToDO);
    todoInput.value = "";
    saveToDosToLocalStorage(userInputToDO);
}
//TODO: Save todos to local storage
//TODO: Set todos to local storage {https://thecodingpie.medium.com/how-to-build-a-todo-list-app-with-javascript-and-local-storage-a884f4ea3ec}
function saveToDosToLocalStorage(inputIteam) {
    todos.push(inputIteam);
    localStorage.setItem("todos", JSON.stringify(todos));
    todos.forEach(element => {
        if (element === null || element === undefined) return;
       
        todoList.insertAdjacentHTML("beforeend", element);

    });
}

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
saveToDosToLocalStorage();