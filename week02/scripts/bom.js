const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('________');
const li = document.createElement('li');
const deleteButton = document.createElement('button');
li.textContent = input.value;
deleteButton.textContent = '❌';
li.append(deleteButton);
list.append(li);

// button.addEventListener('click', function () {
//     if (input.value.trim() !== '') {...}
// });

