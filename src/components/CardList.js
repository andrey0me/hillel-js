import React from 'react';

function CardList() {
  return (
    <div className="row">
      {[1, 2, 3].map((_, i) => (
        <div className="col-md-4" key={i}>
          <div className="card mb-4 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Character Name</h5>
              <p className="card-text">Height: ...</p>
              <p className="card-text">Mass: ...</p>
              <p className="card-text">Birth Year: ...</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardList;