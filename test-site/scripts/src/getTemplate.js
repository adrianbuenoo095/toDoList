export function getTemplate(contentValue) {
    if (contentValue === "") return;
    let template = `<li class="todo">
                      <div class="content">
                          <p>${contentValue}</p> 
                      </div>  
                      <div class="interactions" >
                          <div class="completeTaskCheck">
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
    return template;
}
