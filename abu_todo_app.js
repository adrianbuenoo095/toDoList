///*
// * Add a filter to show Completed and in progress
// * Add a greeting
// * Add a list of todos for example for work or school.
// * Resposive for web and mobile
// * Add a search bar

        let todos =  JSON.parse(localStorage.getItem("todos")) || [];
        const todoInput = document.querySelector(".inputIteam");
        const todoButton = document.querySelector(".todo-button");
        const todoList = document.querySelector(".todo-list");
        
        todoList.addEventListener("click", deleteItem);
        todoButton.addEventListener("click", addNewItem);
            
            //#region Delete item from list 
            function deleteItem(event) {
                const item = todoList.children;
                for (let i = 0; i < item.length; i++) {
                    if (item[i].contains(event.target)) {
                        todoList.removeChild(item[i]);
                        removeTodoFromLocalStorage(item[i]);
                    }
                }
            }
            //#endregion
            
            function removeTodoFromLocalStorage(item) {
               localStorage.removeItem("todos");
            }
        
            function addNewItem(event) {
                debugger;
                event.preventDefault();
                let userInputToDO = getItemTemplate(todoInput.value);
                if(userInputToDO === undefined){
                    alert("Please enter a valid todo");
                    return;
                } 
                //todoList.insertAdjacentHTML("beforeend", userInputToDO);
                saveToDosToLocalStorage(userInputToDO);
            }
            //TODO: Save todos to local storage
            //TODO: Set todos to local storage {https://thecodingpie.medium.com/how-to-build-a-todo-list-app-with-javascript-and-local-storage-a884f4ea3ec}
            function saveToDosToLocalStorage(userInputToDO) {
                debugger;
                todos.push(userInputToDO);
                localStorage.setItem("todos", JSON.stringify(todos));
                todos.forEach(element => {
                    if(element === null || element === undefined) return;
                    todoList.insertAdjacentHTML("beforeend", element);
                    return;
                });
            }
            
            function getItemTemplate(contentValue) {
                if (contentValue === "") return;
                return `<li>
                            <div class="content">
                                <p>${contentValue}</p> 
                            </div>  
                            <div class="interactions" >
                                <div class="completeTask">
                                    <button >
                                        <i class="fas fa-check"></i>
                                    </button>
                                </div>
                                <div id="deleteTask">
                                    <button" class="delete">
                                        <i class="fas fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                        </li>`;
        
            }
            saveToDosToLocalStorage();
