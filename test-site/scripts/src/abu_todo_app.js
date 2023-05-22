import { getTemplate } from "../src/getTemplate.js";

/**
 * @author Adrian Bueno <adrianbueno095@gmail.con>
 */
//How to add just the content and not the whole template?


//load content
window.addEventListener("DOMContentLoaded", isLocalStorageEmpty);

const toDoInput = document.querySelector(".inputItem");
const addToDoButton = document.querySelector(".todo-button");
const toDoItemList = document.querySelector(".todo-list");
let toDosList = [];

//#region Event Listeners
addToDoButton.addEventListener("click", getToDoFromUser);
toDoItemList.addEventListener("click", removeToDos);
toDoItemList.addEventListener("click", completeToDos);
//#endregion

//#region addEventListeners callbacks functions
function getToDoFromUser(event) {
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

	removeTrashIcons.forEach((removeTrashIcon) => {
		removeTrashIcon.addEventListener("click", updateLocalStorage);
	});
}

function completeToDos() {
	let completeCheckIcons = document.querySelectorAll(".complete-btn");

	completeCheckIcons.forEach((completeCheckIcon) => {
		completeCheckIcon.addEventListener("click", (event) => { });
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
	if (!localStorage.getItem("toDosList")){
		alert("localStorageis empty");
		return;
	};
	toDosList = retrieveToDosFromLocalStorage();

	return toDosList;
}

function retrieveToDosFromLocalStorage() {
	let getToDosFromLocalStorage = isLocalStorageEmpty();
	getToDosFromLocalStorage.forEach((toDo) => {
		if (!toDo) return;
		appendToDosToHtml(toDo);
	});
}

function appendToDosToHtml(toDo) {
	toDoItemList.insertAdjacentHTML("beforeend", getTemplate(toDo));
	toDoInput.value = "";
}

function addToDosToLocalStorage() {
	toDosList = isLocalStorageEmpty();
	toDosList.push(toDoItemList);
	localStorage.setItem("toDosList", JSON.stringify(toDosList));
}
