// features/comments/thunks/createCommentThunk.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const createCommentThunk = createAsyncThunk(
    'comments/createComment',
    async (commentData, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:5000/api/comments', commentData);
            return response.data; // Başarılı bir şekilde yanıt döner
        } catch (error) {
            // Hata durumunda yanıtı döndür
            return rejectWithValue(error.response.data);
        }
    }
);
