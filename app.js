/****************************************************************************
 * Simple Todo List App - Exercise
 */

// Select UI elements and assign to variable for later use
let inputBox = document.querySelector('.inputBox');
let todoList = document.querySelector('li');
let btnAdd = document.querySelector('.btnAdd');
let ul = document.querySelector('ul');
console.log(ul);
console.log(btnAdd);

function createList() {

}

// Create element and add todo item to the list
function addItems() {
  let li = document.createElement('li');
  li.appendChild(document.createTextNode(inputBox.value));
  ul.appendChild(li);
  inputBox.value = '';
}

// Check the input field for user input data
function checkInput() {
  if (inputBox.value === '') {
    alert('Please enter todo item\'s name!');
  } else {
    return true;
  }
};

// Setup input field event listener
inputBox.addEventListener('keypress', function (event) {
  console.log(event.keyCode);
  if (event.keyCode === 13) {
    addItems();
  }
});

// Setup add event listener for add button
btnAdd.addEventListener('click', function () {
  console.log('Working');
  if (checkInput()) {
    addItems();
  }
});

// Creat X button and append it to each list item
const liList = document.querySelectorAll('li');
for (let i = 0; i < liList.length; i++) {
  let del = document.createElement('span');
  let label = document.createTextNode('\u00D7');
  del.className = 'delete';
  del.appendChild(label);
  liList[i].appendChild(del);
}
