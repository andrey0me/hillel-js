import React from 'react';

function CategorySelect() {
  return (
    <div className="mb-4">
      <label className="form-label">Виберіть категорію:</label>
      <select className="form-select">
        <option>People</option>
        <option>Planets</option>
        <option>Starships</option>
      </select>
    </div>
  );
}

export default CategorySelect;