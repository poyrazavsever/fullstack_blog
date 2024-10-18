import { createSlice } from '@reduxjs/toolkit';
import {fetchPosts} from "./thunks/fetchPosts"
import { createPost } from './thunks/createPost';
import { findPostById } from './thunks/findPostById';
import { updatePost } from './thunks/updatePost';
import { getLastPost } from './thunks/getLastPost';

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    status: 'idle',
    error: null,
    currentPost: null, // Tek bir post tutmak için kullanılabilir
  },
  reducers: {},
  extraReducers: (builder) => {
    // fetchPosts
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });

    // createPost
    builder
      .addCase(createPost.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts.push(action.payload); // Yeni post ekleniyor
      })
      .addCase(createPost.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });

    // findPostById
    builder
      .addCase(findPostById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(findPostById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.currentPost = action.payload; // Tekil post state'e atanıyor
      })
      .addCase(findPostById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });

    // updatePost
    builder
      .addCase(updatePost.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const index = state.posts.findIndex(post => post._id === action.payload._id);
        if (index !== -1) {
          state.posts[index] = action.payload; // Post güncelleniyor
        }
      })
      .addCase(updatePost.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });

    // getLastPost
    builder
      .addCase(getLastPost.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getLastPost.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.currentPost = action.payload; // Son post atanıyor
      })
      .addCase(getLastPost.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default postsSlice.reducer;
