import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emojis: ['😀', '😂', '😍', '😎', '😡'],
      votes: {},
      winner: null
    }
  }

  componentDidMount() {
    const savedVotes = JSON.parse(localStorage.getItem('votes'));
    if (savedVotes) {
      this.setState({ votes: savedVotes });
    }
  }

  incrementVote = (emoji) => {
    const newVotes = { ...this.state.votes };
    newVotes[emoji] = (newVotes[emoji] || 0) + 1;
    this.setState({ votes: newVotes });
    localStorage.setItem('votes', JSON.stringify(newVotes));
  };

  showResults = () => {
    const { votes } = this.state;

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

    this.setState({ winner: winners });
  };

  resetVotes = () => {
    localStorage.removeItem('votes');
    this.setState({
      votes: {},
      winner: null
    });
  };


  render() {
    return (
      <div className="emoji-container">
        <h1>Голосування за смайлик</h1>

        <div className="emoji-list">
          {this.state.emojis.map((emoji) => (
            <button
              key={emoji}
              className="emoji-button"
              onClick={() => this.incrementVote(emoji)}
            >
              <div>{emoji}</div>
              <div className="vote-count">{this.state.votes[emoji] || 0}</div>
            </button>

          ))}
        </div>
        <div className="text-center mt-4">
          <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
            <button
              onClick={this.showResults}
              className="btn btn-success btn-lg"
            >
              Show Results
            </button>

            <button
              onClick={this.resetVotes}
              className="btn btn-outline-danger btn-lg"
            >
              Очистити результати
            </button>
          </div>
          {this.state.winner && (
            <div className="mt-5 text-center">
              <div className="border border-success rounded p-4 shadow-sm d-inline-block bg-light">
                <h4 className="text-success mb-3">🥇 Переможець голосування:</h4>
                {Array.isArray(this.state.winner) ? (
                  <div className="d-flex justify-content-center gap-3 flex-wrap">
                    {this.state.winner.map((e) => (
                      <span key={e} style={{ fontSize: '3rem' }}>{e}</span>
                    ))}
                  </div>
                ) : (
                  <div style={{ fontSize: '4rem' }}>{this.state.winner}</div>
                )}
              </div>
            </div>
          )}

        </div>
      </div>
    );
  }
}

export default App;
