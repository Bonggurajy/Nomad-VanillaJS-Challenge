//Variables
const $toDoForm = document.querySelector('#toDoForm');
const $toDoInput = document.querySelector('#toDoInput');
const $toDoListContainer = document.querySelector('#toDoListContainer')

let toDos = [];

//Functions
function onToDoFormSubmit(event) {
  event.preventDefault();
  const newToDo = $toDoInput.value;
  $toDoInput.value = "";
  saveToDos(newToDo);
  paintToDo(newToDo);
}

function saveToDos (newToDo) {
  toDos.push(newToDo);
  const savedToDos = JSON.stringify(toDos);
  localStorage.setItem('toDos', savedToDos);
}

const savedToDos = localStorage.getItem('toDos');

if(savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}


function paintToDo (newToDo) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.innerText = newToDo;
  const button = document.createElement('button');
  button.innerText = "❌"
  li.appendChild(span);
  li.appendChild(button);
  $toDoListContainer.appendChild(li); 
  li.classList.add('list-style');
  button.classList.add('delete-btn-style');

  button.addEventListener('click' , deleteToDo)
}

function deleteToDo (event) {
    const deleteList = event.target.parentElement;
    deleteList.remove();
}


$toDoForm.addEventListener('submit', onToDoFormSubmit);