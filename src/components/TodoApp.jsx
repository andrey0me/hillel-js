import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addTodo } from '../features/todos/todoSlice';

export default function TodoApp() {
  const [input, setInput] = useState('');
  const todos = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    dispatch(addTodo(input.trim()));
    setInput('');
  };

  return (
    <div className="app">
      <h1>TODO</h1>
      <form onSubmit={handleSubmit} className="form input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Введіть задачу"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="btn btn-outline-secondary">
          Добавить
        </button>
      </form>

      <h2>TODOS</h2>
      <div className="list">
        {todos.map((todo, index) => (
          <div key={index} className="item">
            {todo}
          </div>
        ))}
      </div>

      <div className="footer">Всього: {todos.length}</div>
    </div>
  );
}
