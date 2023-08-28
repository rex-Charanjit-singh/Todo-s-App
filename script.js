const todo = document.getElementById("toinput");
const list = document.getElementById("todo-list");
function addtask(){
    if(todo.value ===''){
        alert("you must write something!");
    } else {
        let li = document.createElement('li');
        li.textContent = todo.value;
        list.appendChild(li);
    }
}
