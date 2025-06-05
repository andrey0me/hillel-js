import { useState, useEffect } from 'react';
import './scss/main.scss';

function App() {
  const [category, setCategory] = useState('people');
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://swapi.py4e.com/api/${category}/`)
      .then((res) => res.json())
      .then((data) => setData(data.results))
      .catch((err) => console.error(err));
  }, [category]);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">SWAPI Browser</h1>

      <div className="mb-4">
        <label className="form-label">Виберіть категорію:</label>
        <select
          className="form-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="people">People</option>
          <option value="planets">Planets</option>
          <option value="starships">Starships</option>
        </select>
      </div>

      <div className="row">
        {data.length > 0 ? (
          data.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{item.name || item.title}</h5>
                  <ul className="list-unstyled">
                    {category === 'people' && (
                      <>
                        <li>Height: {item.height}</li>
                        <li>Mass: {item.mass}</li>
                        <li>Birth Year: {item.birth_year}</li>
                      </>
                    )}
                    {category === 'planets' && (
                      <>
                        <li>Climate: {item.climate}</li>
                        <li>Population: {item.population}</li>
                        <li>Gravity: {item.gravity}</li>
                      </>
                    )}
                    {category === 'starships' && (
                      <>
                        <li>Model: {item.model}</li>
                        <li>Manufacturer: {item.manufacturer}</li>
                        <li>Cost: {item.cost_in_credits} credits</li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Завантаження...</p>
        )}
      </div>
    </div>
  );
}

export default App;
