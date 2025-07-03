import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSwapiData = createAsyncThunk(
  'swapi/fetchSwapiData',
  async (url, thunkAPI) => {
    const response = await axios.get(url);
    return response.data;
  }
);

const swapiSlice = createSlice({
  name: 'swapi',
  initialState: {
    data: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    clearData: (state) => {
      state.data = null;
      state.status = 'idle';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSwapiData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSwapiData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchSwapiData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { clearData } = swapiSlice.actions;
export default swapiSlice.reducer;
