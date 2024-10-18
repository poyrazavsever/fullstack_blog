import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get('http://localhost:5000/api/posts/all');
  return response.data.data; // "data" içindeki array'i döndürüyoruz
});
