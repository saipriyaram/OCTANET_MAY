const todoList = document.getElementById('todo-list');
const addTaskForm = document.getElementById('add-task-form');
const newTaskInput = document.getElementById('new-task');

addTaskForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  const newTask = newTaskInput.value.trim();

  if (newTask) {
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    const label = document.createElement('label');

    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
      label.classList.toggle('completed');
    });
    label.textContent = newTask;

    listItem.appendChild(checkbox);
    listItem.appendChild(label);

    todoList.appendChild(listItem);

    newTaskInput.value = '';
  }
});
