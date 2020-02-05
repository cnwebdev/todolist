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

  let delBtn = document.createElement("span");
  var label = document.createTextNode("\u00D7");
  delBtn.className = "delete";
  delBtn.appendChild(label);
  li.appendChild(delBtn);

  for (i = 0; i < close.length; i++) {
    del[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
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

// Setup event listener for add button
btnAdd.addEventListener('click', function () {
  console.log('Working');
  if (checkInput()) {
    addItems();
  }
});

// Creat X button and append it to each list item
const liList = document.querySelectorAll('li');
for (let i = 0; i < liList.length; i++) {
  let delBtn = document.createElement('span');
  let label = document.createTextNode('\u00D7');
  delBtn.className = 'delete';
  delBtn.appendChild(label);
  liList[i].appendChild(delBtn);
}

// Click of the delele "x" button to hide the todo item
let del = document.querySelectorAll('.delete');
console.log(del);

for (i = 0; i < del.length; i++) {
  del[i].addEventListener('click', function () {
    let div = this.parentElement;
    div.style.display = 'none';
  })
}

