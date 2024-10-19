import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCommentsByPostThunk = createAsyncThunk(
  'comments/fetchCommentsByPost',
  async (postId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/comments/byPost`, { postId });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
