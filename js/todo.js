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
  const newToDoObj = {
    text : newToDo,
    id : Date.now(),
  }
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

function saveToDos () {
  localStorage.setItem('toDos', JSON.stringify(toDos));
}

const savedToDos = localStorage.getItem('toDos');

if(savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}


function paintToDo (newToDo) {
  const li = document.createElement('li');
  li.id = newToDo.id;
  const span = document.createElement('span');
  span.innerText = newToDo.text;
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
    toDos = toDos.filter((item) => { return item.id !== parseInt(deleteList.id) } );
    deleteList.remove();
    saveToDos();
}


$toDoForm.addEventListener('submit', onToDoFormSubmit);