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
  success: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem('token');
      state.success = false;
    },
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
  },
  extraReducers: (builder) => {
    builder
      // Login işlemi
      .addCase(loginThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.message = null;
        state.success = false;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
        state.message = action.payload.message;
        state.success = true;
        // Token'ı localStorage'a kaydet
        localStorage.setItem('token', action.payload.token);
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
        state.success = false;
      })
      // Register işlemi
      .addCase(registerThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.message = null;
        state.success = false;
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload.message;
        state.user = action.payload.data;
        state.success = true;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.success = false;
      });
  },
});

export const { logout, setUser } = authSlice.actions;
export default authSlice.reducer;
