import { getTemplate } from "../src/getTemplate.js";

/**
 * @author Adrian Bueno <adrianbueno095@gmail.con>
 */
//How to add just the content and not the whole template?


//load content
window.addEventListener("DOMContentLoaded", retrieveToDosFromLocalStorage);

const toDoInput = document.querySelector(".inputItem");
const addToDoButton = document.querySelector(".todo-button");
const toDoItemList = document.querySelector(".todo-list");
let toDosList = [];

//#region Event Listeners
addToDoButton.addEventListener("click", toDoInput);
toDoItemList.addEventListener("click", removeToDos);
toDoItemList.addEventListener("click", completeToDos);
//#endregion

//#region addEventListeners callbacks functions
function toDoInput(event) {
	event.preventDefault();
	let toDoItemList = toDoInput?.value;
	if (toDoItemList === undefined) {
		alert("Please enter a valid toDo");
		return;
	}

	appendToDosToHtml(toDoItemList);
	addToDosToLocalStorage(toDoItemList);
}

function removeToDos() {
	let removeTrashIcons = document.querySelectorAll(".trash-btn");

	removeTrashIcons.forEach((removeTrashIcon) => {
		removeTrashIcon.addEventListener("click", updatesLocalStorage);
	});
}

function completeToDos() {
	let completeCheckIcons = document.querySelectorAll(".complete-btn");

	completeCheckIcons.forEach((completeCheckIcon) => {
		completeCheckIcon.addEventListener("click", (event) => { });
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
	toDoItemList.insertAdjacentHTML("beforeend", getTemplate(toDo));
	toDoInput.value = "";
}

function addToDosToLocalStorage(toDoItemList) {
	toDosList = isLocalStorageEmpty();
	toDosList.push(toDoItemList);
	localStorage.setItem("toDosList", JSON.stringify(toDosList));
}
