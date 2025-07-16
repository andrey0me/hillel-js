import React from 'react';

const HotelCard = ({ hotel }) => (
  <div className="card mb-3">
    <div className="card-body">
      <h5 className="card-title">{hotel.name}</h5>
      <p className="card-text">{hotel.address}, {hotel.city}</p>
      <p className="card-text">Rating: {hotel.hotel_rating || 'N/A'}</p>
    </div>
  </div>
);

export default HotelCard;
