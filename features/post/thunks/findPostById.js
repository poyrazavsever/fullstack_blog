import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const findPostById = createAsyncThunk('posts/findPostById', async (id) => {
  const response = await axios.post('http://localhost:5000/api/posts/findById', { id }); // postId'yi obje olarak gönder
  return response.data.data;
});
