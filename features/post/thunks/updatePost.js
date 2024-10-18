import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const updatePost = createAsyncThunk('posts/updatePost', async ({ updatedData }) => {
  const response = await axios.put(`http://localhost:5000/api/posts/update`, updatedData);
  return response.data; // Güncellenmiş post objesi dönecek
});
