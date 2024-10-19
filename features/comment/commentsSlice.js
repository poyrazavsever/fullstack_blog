import { createSlice } from '@reduxjs/toolkit';
import { createCommentThunk, fetchCommentsByPostThunk } from './thunks';

const initialState = {
  comments: [],
  isLoading: false,
  error: null,
  success: false,
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    clearComments: (state) => {
      state.comments = [];
      state.success = false; // Temizleme sonrası success durumunu sıfırlayın
    },
  },
  extraReducers: (builder) => {
    // Yorum oluşturma
    builder
      .addCase(createCommentThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(createCommentThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.comments.push(action.payload.data); // Yeni yorumu ekleyin
        state.success = true;
      })
      .addCase(createCommentThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.success = false;
      });

    // Post'a göre yorumları çekme
    builder
      .addCase(fetchCommentsByPostThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCommentsByPostThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.comments = action.payload.data; // Yorumları güncelleyin
      })
      .addCase(fetchCommentsByPostThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { clearComments } = commentsSlice.actions;
export default commentsSlice.reducer;
