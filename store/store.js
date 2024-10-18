import { configureStore } from '@reduxjs/toolkit';
import postsReducer from "../features/post/postSlice"
import categoriesReducer from "../features/category/categorySlice"

const store = configureStore({
  reducer: {
    posts: postsReducer,
    categories: categoriesReducer
  },
});

export default store;
