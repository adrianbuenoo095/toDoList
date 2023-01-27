window.addEventListener("load", (event) => {
  onLoad = retrieveItemsFromLocalStorage();
});

const todoInput = document.querySelector(".inputItem");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
let toDosList = [];

//Event Listeners
todoButton.addEventListener("click", addNewItems);
todoList.addEventListener("click", iterateThroughtAllTrashIcons);
todoList.addEventListener("click", testingFunction);

function iterateThroughtAllTrashIcons() {
  let deleteTrashIcon = document.querySelectorAll(".trash-btn");
  deleteTrashIcon.forEach((trashIcon) => {
    if (trashIcon === null) return;
    trashIcon.addEventListener("click", deleteItemsFromlocalStorage);
  });
}

function completesToDos() {
  let completeCheckIcon = document.querySelectorAll(".complete-btn");
  completeCheckIcon.forEach((element) => {
    console.log(element);
    element.addEventListener("click", testingFunction);
  });
}

function testingFunction(event) {
  event.target.style.filter = "grayscale(100%)";
}
//#region Deletes item from list
function deleteItemsFromlocalStorage(event) {
  toDosList = isLocalStorageEmpty();
  const item = todoList.childNodes;

  for (let index = 0; index < item.length; index++) {
    if (item[index].contains(event.target)) {
      toDosList.splice(index, 1);
      todoList.removeChild(item[index]);
      localStorage.setItem("toDosList", JSON.stringify(toDosList));
      return;
    }
  }
}
//#endregion

function addNewItems(event) {
  event.preventDefault();
  let toDoItem = getItemTemplate(todoInput?.value);
  if (toDoItem === undefined) {
    alert("Please enter a valid toDo");
    return;
  }

  createNewTodoItem(toDoItem);
  addTodosToLocalStorage(toDoItem);
}

function isLocalStorageEmpty() {
  if (!localStorage.getItem("toDosList")) {
    toDosList = [];
  } else {
    toDosList = JSON.parse(localStorage.getItem("toDosList"));
  }
  return toDosList;
}

function retrieveItemsFromLocalStorage() {
  if (!localStorage.getItem("toDosList")) return;
  let localStorageList = JSON.parse(localStorage.getItem("toDosList"));

  localStorageList.forEach((toDo) => {
    if (toDo === null) return;
    createNewTodoItem(toDo);
  });
}

function createNewTodoItem(toDo) {
  todoList.insertAdjacentHTML("beforeend", toDo);
  todoInput.value = "";
}

function addTodosToLocalStorage(toDoItem) {
  toDosList = isLocalStorageEmpty();

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
                        <div class="completeTaskCheck">
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
