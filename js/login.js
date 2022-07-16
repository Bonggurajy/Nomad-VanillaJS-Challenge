//variables
const $loginForm = document.querySelector('#loginForm');
const $loginInput = document.querySelector('#loginInput');
const $greeting = document.querySelector('#greeting');
const $introWrapper = document.querySelector('#introWrapper');
const $todoListsWrapper = document.querySelector('#todoListsWrapper');

//Functions

function onLoginFormSubmit (event) {
  event.preventDefault();
  const username = $loginInput.value;
  localStorage.setItem('username', username);
  paintGreeting(username);
}

function paintGreeting (username) {
  $greeting.innerText = `Welcome, ${username}`;
  $introWrapper.classList.add('hidden');
  $todoListsWrapper.classList.remove('hidden');
}

const savedUsername = localStorage.getItem('username');

if(savedUsername !== null) {
  paintGreeting(savedUsername);
}

$loginForm.addEventListener('submit', onLoginFormSubmit);