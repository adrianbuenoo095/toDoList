///*
// * Add a filter to show Completed and in progress
// * Add a greeting
// * Add a list of todos for example for work or school.
// * Resposive for web and mobile
// * Add a search bar
(()=>{

    "user strict";
    
    const todoInput = document.querySelector(".inputIteam");
    const todoButton = document.querySelector(".todo-button");
    const todoList = document.querySelector(".todo-list");
    const deleteItem =  document.getElementById("deleteTask");
    
    deleteItem || deleteItem.addEventListener("ckick", removeItem)
    todoButton.addEventListener("click", addNewItem);
    
    function addNewItem(event) {
        debugger;
        event.preventDefault();
        let item = getItemTemplate(todoInput.value);
        todoList.insertAdjacentHTML("beforeend", item);
    }
    
    function removeItem(event) {
        debugger;
        event 
        alert("Hello brother");
    }
    
    function getItemTemplate(contentValue) {
    
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
                            <button" >
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </li>`;
    }
})();

