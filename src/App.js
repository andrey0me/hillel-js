import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [emojis] = useState(['😀', '😂', '😍', '😎', '😡']);
  const [votes, setVotes] = useState({});
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    const savedVotes = JSON.parse(localStorage.getItem('votes'));
    if (savedVotes) {
      setVotes(savedVotes);
    }
  }, []);

  const incrementVote = (emoji) => {
    const newVotes = { ...votes };
    newVotes[emoji] = (newVotes[emoji] || 0) + 1;
    setVotes(newVotes);
    localStorage.setItem('votes', JSON.stringify(newVotes));
  };

  const showResults = () => {
    let maxVotes = -1;
    let winners = [];

    for (const emoji in votes) {
      const count = votes[emoji];
      if (count > maxVotes) {
        maxVotes = count;
        winners = [emoji];
      } else if (count === maxVotes) {
        winners.push(emoji);
      }
    }

    setWinner(winners);
  };

  const resetVotes = () => {
    localStorage.removeItem('votes');
    setVotes({});
    setWinner(null);
  };


  return (
  <div className="emoji-container">
    <h1>Голосування за смайлик</h1>

    <div className="emoji-list">
      {emojis.map((emoji) => (
        <button
          key={emoji}
          className="emoji-button"
          onClick={() => incrementVote(emoji)}
        >
          <div>{emoji}</div>
          <div className="vote-count">{votes[emoji] || 0}</div>
        </button>
      ))}
    </div>

    <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
      <button onClick={showResults} className="btn btn-success btn-lg">
        Відобразити результат
      </button>
      <button onClick={resetVotes} className="btn btn-outline-danger btn-lg">
        Очистити результати
      </button>
    </div>

    {winner && winner.length > 0 && (
      <div className="mt-5 text-center">
        <div className="border border-success rounded p-4 shadow-sm d-inline-block bg-light">
          <h4 className="text-success mb-3">🥇 Переможець голосування:</h4>
          {winner.length === 1 ? (
            <div style={{ fontSize: '3rem' }}>{winner[0]}</div>
          ) : (
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              {winner.map((e) => (
                <span key={e} style={{ fontSize: '3rem' }}>{e}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    )}
  </div>
);

}

export default App;