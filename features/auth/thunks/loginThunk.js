// src/redux/thunks/loginThunk.js
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const loginThunk = createAsyncThunk('auth/login', async (userData, { rejectWithValue }) => {
  try {
    const response = await axios.post('http://localhost:5000/api/login', userData);
    const { token } = response.data;

    // Token'ı localStorage'a kaydet
    localStorage.setItem('token', token);

    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data.message || 'Login failed');
  }
});
