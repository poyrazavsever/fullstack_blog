import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCategories = createAsyncThunk('categories/fetch', async () => {
    const response = await axios.get('http://localhost:5000/api/categories/all');
    return response.data.data;
});
