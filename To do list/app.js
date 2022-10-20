// selectors

const todoInput = document.querySelector('.todoInput');
const todoBtn = document.querySelector('.todoBtn');
const todo = document.querySelector('.todoItem');
const todoList = document.querySelector('.todoList');
const deletebtn = document.querySelector('.deletebtn');


// event listeners
todoBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', deletecheck);

// functions
function addTodo(event){
    event.preventDefault();

    // Todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todoContainer");

    // create new list
    const newTodo= document.createElement('li');
    newTodo.innerText=todoInput.value;
    newTodo.classList.add('todoItem');
    todoDiv.appendChild(newTodo);

    // check the tick button
    const completedButton = document.createElement('button');
    completedButton.innerHTML='<i class="fa fa-check" aria-hidden="true"></i>';
    completedButton.classList.add("completebtn");
    todoDiv.appendChild(completedButton);

    // check the delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML='<i class="fa fa-trash" aria-hidden="true"></i>';
    deleteButton.classList.add("deletebtn");
    todoDiv.appendChild(deleteButton);

    // append to list
    todoList.appendChild(todoDiv);

    // clear input values
    todoInput.value="";
}

// function to delete and check
function deletecheck(e)
{
    console.log(e.target);
    
    // delete button
    if (item.classList[0]=="deletebtn")
    {
        const todoItem = item.parentElement;
        todoItem.remove();
    }

    // tick button
    if(item.classList[0]=="completebtn")
    {
        const todoItem = item.parentElement;
        todoItem.classList.toggle("completed");

    }

}