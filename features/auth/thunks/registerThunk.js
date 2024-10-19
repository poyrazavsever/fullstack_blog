// features/auth/thunks/registerThunk.js
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const registerThunk = createAsyncThunk('auth/register', async (userData, { rejectWithValue }) => {
  try {
    const response = await axios.post('http://localhost:5000/api/register', userData);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data.message || 'Registration failed');
  }
});
