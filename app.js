/****************************************************************************
 * Simple Todo List App - Exercise
 */

// Select UI elements and assign to variable for later use
let inputBox = document.querySelector('.inputBox');
let btnAdd = document.querySelector('.btnAdd');
let liList = document.querySelectorAll('li');

// Setup input field event listener
inputBox.addEventListener('keyup', addItems);

// Setup event listener for add button
btnAdd.addEventListener('click', addItems);

// Check inputbox for user input data
function checkInput() {
  if (inputBox.value.length >= 3 && event.keyCode === 13) {
    return true;
  }
};

// Create element and add todo item to the list
function addItems() {
  if (checkInput()) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(inputBox.value));
    ul.appendChild(li);
    createDeleteButton();
    inputBox.value = '';
  }
};

// Create X button and append it to each list item
function createDeleteButton() {
  let liList = document.querySelectorAll('li');
  for (let i = 0; i < liList.length; i++) {
    let del = document.createElement('span');
    let label = document.createTextNode('x');
    del.className = 'done';
    del.appendChild(label);
    liList[i].appendChild(del);
  }
  let delBtn = document.querySelectorAll('.done');
  for (let i = 0; i < delBtn.length; i++) {
    delBtn[i].onclick = function () {
      let temp = this.parentElement;
      temp.style.display = 'none';
    }
  }
};
createDeleteButton();

// Add a checked mark when click on todo list
let todoItem = document.querySelector('ul');
todoItem.addEventListener('click', function (event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
  }
});


