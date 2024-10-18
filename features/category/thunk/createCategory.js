import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const createCategory = createAsyncThunk(
    'categories/createCategory',
    async (categoryData, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:5000/api/categories', categoryData);
            return response.data; // Başarılı bir şekilde dönen veriyi geri döndür
        } catch (error) {
            return rejectWithValue(error.response.data); // Hata durumunda geri döndür
        }
    }
);
