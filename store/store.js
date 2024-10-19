import { configureStore } from '@reduxjs/toolkit';
import postsReducer from "../features/post/postSlice"
import categoriesReducer from "../features/category/categorySlice"
import authReducer from '../features/auth/authSlice';

const store = configureStore({
  reducer: {
    posts: postsReducer,
    categories: categoriesReducer,
    auth: authReducer,
  },
});

export default store;
