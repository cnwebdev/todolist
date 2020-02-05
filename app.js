/****************************************************************************
 * Simple Todo List App - Exercise
 */

let inputBox = document.querySelector('.inputBox');
let todoList = document.querySelector('li');
let span = document.querySelector('span');
let ul = document.querySelector('ul');
console.log(ul);
console.log(span);
console.log(inputBox.value);

function createList() {

}

function addItems() {
  let li = document.createElement('li');
  li.appendChild(document.createTextNode(inputBox.value));
  ul.appendChild(li);
  inputBox.value = '';
}

function checkInput() {
  if (inputBox.value === '') {
    alert('Please enter todo item\'s name!');
  } else {
    return true;
  }
};

inputBox.addEventListener('keypress', function (event) {
  console.log(event.keyCode);
  if (event.keyCode === 13) {
    addItems();
  }
});

span.addEventListener('click', function () {
  console.log('Working');
  if (checkInput()) {
    addItems();
  }
});
