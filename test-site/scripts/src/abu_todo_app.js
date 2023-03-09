import { getTemplate } from "../src/getTemplate.js";

/**
 * @author Adrian Bueno <adrianbueno095@gmail.con>
 */

//load content
window.addEventListener("DOMContentLoaded", retrieveToDosFromLocalStorage);

const toDoInput = document.querySelector(".inputItem");
const addToDoButton = document.querySelector(".todo-button");
const toDoItemList = document.querySelector(".todo-list");
let toDosList = [];

//#region Event Listeners
addToDoButton.addEventListener("click", createNewTodos);
toDoItemList.addEventListener("click", removeToDos);
toDoItemList.addEventListener("click", completeToDos);
//#endregion

//#region addEventListeners callbacks functions
function createNewTodos(event) {
  event.preventDefault();
  let toDoItemList = getTemplate(toDoInput?.value);
  if (toDoItemList === undefined) {
    alert("Please enter a valid toDo");
    return;
  }

  appendToDosToHtml(toDoItemList);
  addToDosToLocalStorage(toDoItemList);
}

function removeToDos() {
  let trashIcons = document.querySelectorAll(".trash-btn");
  trashIcons.forEach((trashIcon) => {
    if (trashIcon === null) return;
    trashIcon.addEventListener("click", updatesLocalStorage);
  });
}

function completeToDos() {
  let completeCheckIcons = document.querySelectorAll(".complete-btn");
  completeCheckIcons.forEach((checkIcon) => {
    checkIcon.addEventListener("click", () => { console.log("helloooo, this is a test") })
  });
}
//#endregion

function updatesLocalStorage(event) {
  toDosList = isLocalStorageEmpty();
  const toDoItemLists = toDoItemList.childNodes;

  for (let index = 0; index < toDoItemLists.length; index++) {
    if (toDoItemLists[index].contains(event.target)) {
      toDosList.splice(index, 1);
      toDoItemList.removeChild(toDoItemLists[index]);
      localStorage.setItem("toDosList", JSON.stringify(toDosList));
      return;
    }
  }
}

function isLocalStorageEmpty() {
  if (!localStorage.getItem("toDosList")) {
    toDosList = [];
  } else {
    toDosList = JSON.parse(localStorage.getItem("toDosList"));
  }
  return toDosList;
}

function retrieveToDosFromLocalStorage() {
  if (!localStorage.getItem("toDosList")) return;
  let toDosFromLocalStorage = JSON.parse(localStorage.getItem("toDosList"));

  toDosFromLocalStorage.forEach((toDo) => {
    if (toDo === null) return;
    appendToDosToHtml(toDo);
  });
}

function appendToDosToHtml(toDo) {
  toDoItemList.insertAdjacentHTML("beforeend", toDo);
  toDoInput.value = "";
}

function addToDosToLocalStorage(toDoItemList) {
  toDosList = isLocalStorageEmpty();

  toDosList.push(toDoItemList);
  localStorage.setItem("toDosList", JSON.stringify(toDosList));
}
