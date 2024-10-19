import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const createCommentThunk = createAsyncThunk(
  'comments/createComment',
  async ({ content, userId, postId }, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:5000/api/comments', {
        content,
        user: userId,
        post: postId,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
