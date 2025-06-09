const apiUrl = 'http://localhost:5000/api/todos';

const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('todo-list');

// Загрузить задачи из API
async function loadTodos() {
  try {
    const res = await axios.get(apiUrl);
    list.innerHTML = '';

    res.data.forEach(todo => {
      const li = document.createElement('li');
      li.className = 'list-group-item d-flex align-items-center justify-content-between';

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = todo.completed;
      checkbox.className = 'form-check-input me-2';
      checkbox.dataset.id = todo._id;

      const text = document.createElement('span');
      text.textContent = todo.title;
      if (todo.completed) text.style.textDecoration = 'line-through';

      const wrapper = document.createElement('div');
      wrapper.className = 'd-flex align-items-center flex-grow-1';
      wrapper.appendChild(checkbox);
      wrapper.appendChild(text);

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'X';
      deleteBtn.className = 'btn btn-danger btn-sm ms-2';
      deleteBtn.dataset.id = todo._id;

      li.appendChild(wrapper);
      li.appendChild(deleteBtn);
      list.appendChild(li);
    });
  } catch (err) {
    console.error('Ошибка загрузки задач:', err);
  }
}

// Добавить задачу
addBtn.addEventListener('click', async () => {
  const title = input.value.trim();
  if (!title) return;

  try {
    await axios.post(apiUrl, { title });
    input.value = '';
    await loadTodos();
  } catch (err) {
    console.error('Ошибка добавления задачи:', err);
  }
});

// Делегирование событий для чекбоксов и удаления
list.addEventListener('click', async (e) => {
  const id = e.target.dataset.id;
  if (!id) return;

  if (e.target.tagName === 'BUTTON') {
    await axios.delete(`${apiUrl}/${id}`);
    await loadTodos();
  }

  if (e.target.type === 'checkbox') {
    await axios.put(`${apiUrl}/${id}`, { completed: e.target.checked });
    await loadTodos();
  }
});

loadTodos();
