import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHotelsRequest } from '../redux/actions';
import Spinner from '../components/Spinner';
import HotelCard from '../components/HotelCard';
import { Typography, Paper, Box } from '@mui/material';

const HotelsPage = () => {
  const dispatch = useDispatch();
  const hotels = useSelector(state => state.booking.hotels);
  const isLoading = useSelector(state => state.booking.isLoading);
  const formData = JSON.parse(localStorage.getItem('formData')) || {};

  useEffect(() => {
    dispatch(getHotelsRequest());
  }, [dispatch]);

  const filteredHotels = formData.destination
    ? hotels.filter(h => h.city === formData.destination)
    : hotels;

  if (isLoading) return <Spinner />;

  return (
    <Paper sx={{ padding: 4, backgroundColor: '#f0f8ff' }}>
      <Typography variant="h4" color="primary" gutterBottom>
        Hotels in {formData.destination || 'all destinations'}
      </Typography>
      <Box display="grid" gap={2}>
        {filteredHotels.length > 0 ? (
          filteredHotels.map(hotel => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))
        ) : (
          <Typography>No hotels found for the selected destination.</Typography>
        )}
      </Box>
    </Paper>
  );
};

export default HotelsPage;
