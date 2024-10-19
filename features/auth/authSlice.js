// src/redux/slices/authSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { loginThunk } from './thunks/loginThunk';
import { registerThunk } from './thunks/registerThunk';

const initialState = {
  user: null,
  isLoading: false,
  isAuthenticated: false,
  error: null,
  message: null,
  success: false, // Yeni ekleme
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem('token');
      state.success = false; // Logout sonrası success durumunu sıfırlayın
    },
  },
  extraReducers: (builder) => {
    builder
      // Login işlemi
      .addCase(loginThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.message = null;
        state.success = false; // Loading durumunda success sıfırlanır
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
        state.message = action.payload.message;
        state.success = true; // Başarılı girişte success durumu
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
        state.success = false; // Hata durumunda success sıfırlanır
      });

    // Register işlemi
    builder
      .addCase(registerThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.message = null;
        state.success = false; // Loading durumunda success sıfırlanır
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload.message;
        state.user = action.payload.data;
        state.success = true; // Başarılı kayıt durumunda success durumu
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.success = false; // Hata durumunda success sıfırlanır
      });
  },
});


export const { logout } = authSlice.actions;
export default authSlice.reducer;
