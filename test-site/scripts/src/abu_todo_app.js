import { getTemplate } from "../src/getTemplate.js";

window.addEventListener("DOMContentLoaded", retrieveToDosFromLocalStorage);

const toDoInput = document.querySelector(".inputItem");
const addToDoButton = document.querySelector(".todo-button");
const toDoItemList = document.querySelector(".todo-list");
let toDosList = [];

//Event Listeners
addToDoButton.addEventListener("click", addNewItems);
toDoItemList.addEventListener("click", iterateThroughtAllTrashElements);
toDoItemList.addEventListener("click", completesToDos);

//#region addEventListeners callbacks functions
function iterateThroughtAllTrashElements() {
  let trashIcons = document.querySelectorAll(".trash-btn");
  trashIcons.forEach((trashIcon) => {
    if (trashIcon === null) return;
    trashIcon.addEventListener("click", updateLocalStorage);
  });
}

function completesToDos() {
  let completeCheckIcons = document.querySelectorAll(".complete-btn");
  completeCheckIcons.forEach((checkIcon) => {});
}

function updateLocalStorage(event) {
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

function addNewItems(event) {
  event.preventDefault();
  let toDoItemList = getTemplate(toDoInput?.value);
  if (toDoItemList === undefined) {
    alert("Please enter a valid toDo");
    return;
  }

  createNewTodo(toDoItemList);
  addToDoToLocalStorage(toDoItemList);
}
//#endregion

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
    createNewTodo(toDo);
  });
}

function createNewTodo(toDo) {
  toDoItemList.insertAdjacentHTML("beforeend", toDo);
  toDoInput.value = "";
}

function addToDoToLocalStorage(toDoItemList) {
  toDosList = isLocalStorageEmpty();

  toDosList.push(toDoItemList);
  localStorage.setItem("toDosList", JSON.stringify(toDosList));
}
