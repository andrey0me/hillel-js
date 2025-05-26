$(document).ready(function () {
  // Отримуємо елементи за допомогою jQuery
  const $todoBoxEl = $('.js--todos-wrapper');
  const $todoFormEl = $('.js--form');
  const $formInputEl = $('.js--form__input');

  // Завантажуємо задачі з localStorage
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  // Функція для знаходження максимального ID
  function getMaxTaskId() {
    let maxId = 0;
    tasks.forEach(task => {
      if (maxId < task.id) {
        maxId = task.id;
      }
    });
    return maxId;
  }
  function loadTodoItems() {
    $todoBoxEl.empty();
    tasks.forEach(task => {
      const $li = $('<li>').addClass('todo-item list-group-item list-group-item-action');
      if (task.confirmed) {
        $li.addClass('todo-item--checked');
      }
      $li.html(`
                <input type="checkbox" ${task.confirmed ? 'checked' : ''}>
                <span class="todo-item__description">${task.taskName}</span>
                <button class="todo-item__delete btn btn-danger" type="button">Видалити</button>
            `);
      $li.find('input[type="checkbox"]').on('change', function () {
        confirmTask(task.id);
      });
      $li.find('.todo-item__delete').on('click', function () {
        delTodoItem(task.id);
      });
      $li.find('.todo-item__description').on('click', function () {
        $('#modalTaskText').text(task.taskName);
        $('#taskModal').modal('show');
      });
      $todoBoxEl.append($li);
    });
  }
  function addTodoItem(taskName) {
    const id = getMaxTaskId() + 1;
    let confirmed = false;
    tasks.push({
      id,
      taskName,
      confirmed
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    loadTodoItems();
    $formInputEl.val('');
  }
  function confirmTask(id) {
    let confirmTask = tasks.find(task => task.id === id);
    confirmTask.confirmed = !confirmTask.confirmed;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    loadTodoItems();
  }
  function delTodoItem(id) {
    let delIndex = tasks.findIndex(task => task.id === id);
    if (delIndex !== -1) {
      tasks.splice(delIndex, 1);
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
    loadTodoItems();
  }
  $todoFormEl.on('click', '.form__btn', function () {
    const taskName = $formInputEl.val().trim();
    if (taskName) {
      addTodoItem(taskName);
    }
  });
  loadTodoItems();
});