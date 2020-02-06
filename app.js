/****************************************************************************
 * Simple Todo List App - Exercise
 */

// Select UI elements and assign to variable for later use
let inputBox = document.querySelector('.inputBox');
let btnAdd = document.querySelector('.btnAdd');
let liList = document.querySelectorAll('li');

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

// Setup event listener for add button
btnAdd.addEventListener('click', function () {
  console.log('Working');
  if (checkInput()) {
    addItems();
  }
});

// Create element and add todo item to the list
function addItems() {
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  li.appendChild(document.createTextNode(inputBox.value));
  ul.appendChild(li);
  inputBox.value = '';

  createDeleteButton();
  // updateList();
}

// Create X button and append it to each list item
function createDeleteButton() {
  let liList = document.querySelectorAll('li');
  for (let i = 0; i < liList.length; i++) {
    let del = document.createElement('span');
    let label = document.createTextNode('x');
    del.className = 'delete';
    del.appendChild(label);
    liList[i].appendChild(del);

    let delBtn = document.querySelectorAll('.delete');
    for (let i = 0; i < delBtn.length; i++) {
      delBtn[i].onclick = function () {
        let temp = this.parentElement;
        temp.style.display = 'none';
      }
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


