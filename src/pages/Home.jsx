import { useState } from 'react';

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (!input.trim()) return;
    setTasks([...tasks, { text: input, completed: false }]);
    setInput('');
  };

  const toggle = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTodo = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="container mt-4">
      <h2>Список завдань</h2>
      <div className="input-group mb-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="form-control"
        />
        <button onClick={addTodo} className="btn btn-success">Додати</button>
      </div>
      <ul className="list-group">
        {tasks.map((task, i) => (
          <li
            key={i}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span
              onClick={() => toggle(i)}
              style={{ cursor: 'pointer' }}
              className={task.completed ? 'text-decoration-line-through' : ''}
            >
              {task.text}
            </span>
            <button className="btn btn-sm btn-danger" onClick={() => deleteTodo(i)}>Видалити</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
