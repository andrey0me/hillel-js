import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, loadTodos, clearTodos } from '../features/todos/todoSlice';
import { v4 as uuidv4 } from 'uuid';

export default function TodoForm() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch(addTodo({ id: uuidv4(), text, completed: false }));
    setText('');
  };

  return (
    <>
      <form className="input-group mb-3" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Нове завдання"
        />
        <button className="btn btn-success" type="submit">Додати</button>
      </form>

      <div className="d-flex gap-2 mb-4">
        <button className="btn btn-primary" onClick={() => dispatch(loadTodos())}>Завантажити</button>
        <button className="btn btn-danger" onClick={() => dispatch(clearTodos())}>Очистити</button>
      </div>
    </>
  );
}
