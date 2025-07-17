import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const HotelCard = ({ hotel }) => (
  <Card variant="outlined">
    <CardContent>
      <Typography variant="h6" color="primary">{hotel.name}</Typography>
      <Typography><strong>Address:</strong> {hotel.address}, {hotel.city}</Typography>
      <Typography><strong>Rating:</strong> {hotel.hotel_rating || 'N/A'}</Typography>
      {hotel.phone_number && (
        <Typography><strong>Phone:</strong> {hotel.phone_number}</Typography>
      )}
    </CardContent>
  </Card>
);

export default HotelCard;
