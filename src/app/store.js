import { configureStore } from '@reduxjs/toolkit';
import swapiReducer from '../features/swapi/swapiSlice';

export const store = configureStore({
  reducer: {
    swapi: swapiReducer,
  },
});
