import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const findPostById = createAsyncThunk('posts/findPostById', async (postId) => {
  const response = await axios.post(`http://localhost:5000/api/posts/findById`, postId);
  return response.data.data; // Belirtilen ID'ye sahip post dönecek
});
