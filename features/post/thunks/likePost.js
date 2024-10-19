// likePost.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const likePost = createAsyncThunk(
  "posts/likePost",
  async ({ userId, postId }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`http://localhost:5000/api/posts/like`, {
        userId,
        postId,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
