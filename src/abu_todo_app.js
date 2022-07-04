///*
// * Add a filter to show Completed and in progress
// * Add a greeting
// * Add a list of toDOs for example for work or school.
// * Resposive for web and mobile
// * Add a search bar

let toDOs = JSON.parse(localStorage.getItem("toDOs")) || [];
const todoInput = document.querySelector(".inputIteam");
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
    alert("Please enter a valid todo");
    return;
  }

  let testing = savetoDOsToLocalStorage(userInputToDO);
  todoList.insertAdjacentHTML("beforeend", testing);
  todoInput.value = "";
}
//TODO: Save toDOs to local storage
//TODO: Set toDOs to local storage {https://thecodingpie.medium.com/how-to-build-a-todo-list-app-with-javascript-and-local-storage-a884f4ea3ec}
function savetoDOsToLocalStorage(inputIteam) {
  toDOs.push(inputIteam);
  localStorage.setItem("toDOs", JSON.stringify(toDOs));
  toDOs.forEach((element) => {
    if (element === null || element === undefined) return;
    // todoList.insertAdjacentHTML("beforeend", element);
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

savetoDOsToLocalStorage();
