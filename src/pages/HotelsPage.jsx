import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHotelsRequest } from '../redux/actions';
import Spinner from '../components/Spinner';
import HotelCard from '../components/HotelCard';

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
    <div>
      <h2>Available Hotels in {formData.destination || 'all destinations'}</h2>
      {filteredHotels.map(hotel => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
};

export default HotelsPage;
