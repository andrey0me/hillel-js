import { useState } from 'react';

export default function Todo() {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);

  const add = () => {
    if (text.trim()) {
      setItems([...items, { id: Date.now(), text, completed: false }]);
      setText('');
    }
  };

  const toggle = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  const remove = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="container">
      <h1 className="mb-4">TODO список</h1>

      <div className="input-group mb-3">
        <input
          id="new-task"
          className="form-control"
          type="text"
          placeholder="Нова задача"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="btn btn-primary" onClick={add}>Додати</button>
      </div>

      <ul className="list-group">
        {items.map(item => (
          <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div className="form-check">
              <input
                className="form-check-input me-2"
                type="checkbox"
                checked={item.completed}
                onChange={() => toggle(item.id)}
              />
              <label
                className={`form-check-label ${item.completed ? 'text-decoration-line-through' : ''}`}
              >
                {item.text}
              </label>
            </div>
            <button className="btn btn-sm btn-danger" onClick={() => remove(item.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
