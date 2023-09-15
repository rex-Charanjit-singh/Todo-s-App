const todo = document.getElementById("toinput");
const btn = document.getElementById("inbtn");
const btnchange = document.getElementById("inbtn").innerHTML;
const edit_alert = document.getElementById("edit_alert");
const data = document.getElementById("rec");
let userName = document.getElementById("user");
userName.innerText = "To the todo's app";
let userArray = [];
let edit_id = null;

let obj = localStorage.getItem('user');
if(obj!= null){
    userArray = JSON.parse(obj);
}

displayInfo();

btn.onclick=()=>{
    const name = todo.value;
    if(name!=''){
        if(edit_id!=null){
            //edit
            userArray.splice(edit_id, 1, {'name': name});
            edit_id = null;
        } else {
            // insert
            userArray.unshift({'name': name});
        }
       saveInfo(userArray);
       todo.value = '';
       btn.innerHTML = btnchange;
    } else {
        alert("You must write something");
    }
}

function saveInfo(ary){
    let str = JSON.stringify(userArray);
    localStorage.setItem('user',str);
    displayInfo();
    edit_alert.innerText = "" 
}

function displayInfo(){
    let state = '';
    userArray.forEach((user,i) =>{
        state += `<tr>
        <th scope="row">${i+1}</th>
        <td style="width: 60%">${user.name}</td>
        <td><i class="btn btn-success fa-regular fa-pen-to-square" onclick="editInfo(${i})"></i> <i class="btn btn-success fa-solid fa-trash" onclick="deleteInfo(${i})"></i></td>
      </tr>`;
    });
    data.innerHTML = state;
}

function editInfo(id){
    edit_alert.innerText = "Alert! edit in search bar."   
    edit_id = id;
    todo.value = userArray[id].name;
    btn.innerHTML = '<i class="fa-solid fa-floppy-disk"></i>';
}

function deleteInfo(id){
    userArray.splice(id, 1);
    saveInfo(userArray);
}
