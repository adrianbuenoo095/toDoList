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
addToDoButton.addEventListener("click", getToDosFromUser);
toDoItemList.addEventListener("click", removeToDos);
toDoItemList.addEventListener("click", completeToDos);
//#endregion

//#region addEventListeners callbacks functions
function getToDosFromUser(event) {
	event.preventDefault();
	let task = toDoInput?.value;
	if (!task) {
		alert("Please enter a valid toDo");
		return;
	}

	appendToDosToHtml(task);
	addToDosToLocalStorage(task);
}

function removeToDos() {
	let removeTrashIcons = document.querySelectorAll(".trash-btn");

	removeTrashIcons.forEach((trashIcon) => {
		trashIcon.addEventListener("click", updateLocalStorage);
	});
}

function completeToDos() {
	let completeCheckIcons = document.querySelectorAll(".complete-btn");

	completeCheckIcons.forEach((completeIcon) => {
		completeIcon.addEventListener("click", (event) => {
			console.log("hello");
		});
	});
}
//#endregion

function updateLocalStorage(event) {
	toDosList = isLocalStorageEmpty();
	const listOfToDos = toDoItemList.childNodes;

	for (let index = 0; index < listOfToDos.length; index++) {
		if (listOfToDos[index].contains(event.target)) {
			toDosList.splice(index, 1);
			toDoItemList.removeChild(listOfToDos[index]);
			localStorage.setItem("toDosList", JSON.stringify(toDosList));
			return;
		}
	}
}

function isLocalStorageEmpty() {
	return !localStorage.getItem("toDosList") ? toDosList = [] : JSON.parse(localStorage.getItem("toDosList"));
}

function retrieveToDosFromLocalStorage() {
	let localStorageList = isLocalStorageEmpty();
	localStorageList.forEach((toDo) => {
		if (!toDo) return;
		appendToDosToHtml(toDo);
	});
}

function appendToDosToHtml(toDo) {
	toDoItemList.insertAdjacentHTML("beforeend", getTemplate(toDo));
	toDoInput.value = "";
}

function addToDosToLocalStorage(toDo) {
	toDosList = isLocalStorageEmpty();
	toDosList.push(toDo);
	localStorage.setItem("toDosList", JSON.stringify(toDosList));
}
