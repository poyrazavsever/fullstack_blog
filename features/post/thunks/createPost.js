import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const createPost = createAsyncThunk('posts/createPost', async (newPost) => {
  const response = await axios.post('http://localhost:5000/api/create-post', newPost);
  return response.data;
});
