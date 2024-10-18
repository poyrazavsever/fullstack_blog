import { createSlice } from '@reduxjs/toolkit';
import { createCategory } from './thunk/createCategory';
import { fetchCategories } from './thunk/fetchCategories';

const initialState = {
    categories: [],
    loading: false,
    error: null,
};

const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Kategorileri alma
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.loading = false;
                state.categories = action.payload; // Kategorileri güncelle
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message; // Hata mesajını ayarla
            })
            // Yeni kategori oluşturma
            .addCase(createCategory.pending, (state) => {
                state.loading = true;
            })
            .addCase(createCategory.fulfilled, (state, action) => {
                state.loading = false;
                state.categories.push(action.payload); // Yeni kategoriyi ekle
            })
            .addCase(createCategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message; // Hata mesajını ayarla
            });
    },
});

// Kategorileri dışa aktar
export const selectCategories = (state) => state.categories.categories;
export const selectLoading = (state) => state.categories.loading;
export const selectError = (state) => state.categories.error;

export default categorySlice.reducer;
