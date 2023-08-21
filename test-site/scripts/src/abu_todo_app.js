import { getTemplate } from "../src/getTemplate.js";

/**
 * @author Adrian Bueno <adrianbueno095@gmail.com>
 */

//load content
window.addEventListener("DOMContentLoaded", retrieveTodosFromLocalStorage);

const todoInput = document.querySelector(".inputItem");
const addtodoButton = document.querySelector(".todo-button");
const todoItemList = document.querySelector(".todo-list");
let todos = [];

//#region Event Listeners
addtodoButton.addEventListener("click", gettodosFromUser);
todoItemList.addEventListener("click", removetodos);
todoItemList.addEventListener("click", completetodos);
//#endregion

//#region addEventListeners callbacks functions
function gettodosFromUser(event) {
	event.preventDefault();
	let task = todoInput?.value;
	if (!task) {
		alert("Please enter a valid todo");
		return;
	}

	appendTodosToHtml(task);
	addTodosToLocalStorage(task);
}

function removetodos() {
	let removeTrashIcons = document.querySelectorAll(".trash-btn");

	removeTrashIcons.forEach((trashIcon) => {
		trashIcon.addEventListener("click", updateLocalStorage);
	});
}

function completetodos() {
	let completeCheckIcons = document.querySelectorAll(".complete-btn");

	completeCheckIcons.forEach((completeIcon) => {
		completeIcon.addEventListener("click", (event) => {
			console.log("hello");
		});
	});
}
//#endregion

function updateLocalStorage(event) {
	todos = isLocalStorageEmpty();
	const listOftodos = todoItemList.childNodes;

	for (let index = 0; index < listOftodos.length; index++) {
		if (listOftodos[index].contains(event.target)) {
			todos.splice(index, 1);
			todoItemList.removeChild(listOftodos[index]);
			localStorage.setItem("todos", JSON.stringify(todos));
			return;
		}
	}
}

function isLocalStorageEmpty() {
	return !localStorage.getItem("todos") ? todos : JSON.parse(localStorage.getItem("todos"));
}

function retrieveTodosFromLocalStorage() {
	let localStorageList = isLocalStorageEmpty();
	localStorageList.forEach((todo) => {
		if (!todo) return;
		appendTodosToHtml(todo);
	});
}

function appendTodosToHtml(todo) {
	todoItemList.insertAdjacentHTML("beforeend", getTemplate(todo));
	todoInput.value = "";
}

function addTodosToLocalStorage(todo) {
	todos = isLocalStorageEmpty();
	todos.push(todo);
	localStorage.setItem("todos", JSON.stringify(todos));
}
