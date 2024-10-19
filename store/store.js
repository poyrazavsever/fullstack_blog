import { configureStore } from '@reduxjs/toolkit';
import postsReducer from "../features/post/postSlice"
import categoriesReducer from "../features/category/categorySlice"
import authReducer from '../features/auth/authSlice';
import commentsReducer from "../features/comments/commentsSlice"

const store = configureStore({
  reducer: {
    posts: postsReducer,
    categories: categoriesReducer,
    auth: authReducer,
    comments: commentsReducer,
  },
});

export default store;
