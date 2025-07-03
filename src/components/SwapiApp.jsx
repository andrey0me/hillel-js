import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { fetchSwapiData, clearData } from '../features/swapi/swapiSlice';

export default function SwapiApp() {
  const [url, setUrl] = useState('https://swapi.py4e.com/api/people/1');
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.swapi);

  const handleFetch = () => {
    dispatch(fetchSwapiData(url));
  };

  return (
    <div className="container py-4">
      <h2>SWAPI</h2>

      <div className="input-group mb-3">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="form-control"
        />
        <button onClick={handleFetch} className="btn btn-secondary">
          Get info
        </button>
      </div>

      <div>
        {status === 'loading' && <p>Загрузка...</p>}
        {status === 'failed' && <p className="text-danger">Ошибка: {error}</p>}
        {data && (
          <pre className="bg-light p-3 rounded border">
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
      </div>

      <button
        className="btn btn-warning mt-3"
        onClick={() => dispatch(clearData())}
      >
        Clear
      </button>
    </div>
  );
}
