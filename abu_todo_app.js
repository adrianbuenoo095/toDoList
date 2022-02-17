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
    const todoList = document.querySelector(".todo-list")
    todoButton.addEventListener("click", addNewItem);

    let deleteTrash = document.querySelectorAll(".fas.fa-trash")
    if(deleteTrash.length === 0) return;
    deleteTrash.forEach(element => {
        element.addEventListener("click", deleteItem);
        
    });

    function deleteItem(event){
        const item = todoList.children;
       for (let i = 0; i < item.length; i++) {
              if(item[i].contains(event.target)){
                todoList.removeChild(item[i]);
              }
         
       }
    }

    function addNewItem(event) {
        event.preventDefault();
        let item = getItemTemplate(todoInput.value);
        let testinng = todoList.insertAdjacentHTML("beforeend", item);
        // saveToLocalstorage(item);
    }

    // function saveToLocalstorage(item){
    //     debugger;
    //     let todoItems = getLocalStorage();
    //     let testing = getItemTemplate(todoButton.value);
    //     if(testing.value === "") return;

    //     todoItems.setItem(testing.value, testing.value);
    //     Location.reload();
    //     for (let i = 0; i < todoItems.length; i++) {
    //         const key = todoItems.key(i);
    //         const value = todoItems.getItem(key);

    //         todoList.innerHTML += `<li>${value}</li>`;
            
    //     }
    //     localStorage.getItem("todoItems", JSON.stringify(todoItems));
    // }
    function getLocalStorage(){
        return localStorage;
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
                            <button" class="delete">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </li>`;
    }
})();