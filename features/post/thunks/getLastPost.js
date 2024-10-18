import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getLastPost = createAsyncThunk('posts/getLastPost', async () => {
  const response = await axios.get('http://localhost:5000/api/posts/latest');
  return response.data.data[0];
});
