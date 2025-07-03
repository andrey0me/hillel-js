import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodo, editTodo } from '../features/todos/todoSlice';
import { useState } from 'react';

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleEdit = () => {
    if (editing && text !== todo.text) {
      dispatch(editTodo({ id: todo.id, text }));
    }
    setEditing(!editing);
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div className="form-check">
        <input
          className="form-check-input me-2"
          type="checkbox"
          checked={todo.completed}
          onChange={() => dispatch(toggleTodo(todo.id))}
        />
        {editing ? (
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="form-control d-inline-block w-auto"
          />
        ) : (
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
          </span>
        )}
      </div>
      <div>
        <button className="btn btn-sm btn-outline-secondary me-2" onClick={handleEdit}>
          {editing ? 'Зберегти' : 'Редагувати'}
        </button>
        <button className="btn btn-sm btn-outline-danger" onClick={() => dispatch(removeTodo(todo.id))}>
          Видалити
        </button>
      </div>
    </li>
  );
}
