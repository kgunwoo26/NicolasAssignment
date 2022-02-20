const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-List");
let toDos = [];

function updateTodos(){
    localStorage.setItem("toDos",JSON.stringify(toDos));
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    console.log(li.id);
    toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
    updateTodos();
}



function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = 'x';
    button.addEventListener("click",deleteTodo);
    span.innerText = newTodo.text;
    li.appendChild(span);
    li.appendChild(button);
    todoList.append(li);
   

}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value ="";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    updateTodos();
}

todoForm.addEventListener("submit", handleToDoSubmit)

const savedToDos = localStorage.getItem("toDos");
if(savedToDos !== null){
    console.log(toDos);
    const parsedToDos = JSON.parse(savedToDos);
    toDos= parsedToDos;
    parsedToDos.forEach(paintTodo);
}
else{
    console.log("no");  
}