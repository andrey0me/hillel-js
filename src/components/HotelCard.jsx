import React from 'react';

const HotelCard = ({ hotel }) => (
  <div className="card mb-3 shadow-sm">
    <div className="card-body">
      <h5 className="card-title text-primary">{hotel.name}</h5>
      <p className="card-text">
        <strong>Address:</strong> {hotel.address}, {hotel.city}
      </p>
      <p className="card-text">
        <strong>Rating:</strong> {hotel.hotel_rating || 'N/A'}
      </p>
      {hotel.phone_number && (
        <p className="card-text">
          <strong>Phone:</strong> {hotel.phone_number}
        </p>
      )}
    </div>
  </div>
);

export default HotelCard;
