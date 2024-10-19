import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "./thunks/fetchPosts";
import { createPost } from "./thunks/createPost";
import { findPostById } from "./thunks/findPostById";
import { updatePost } from "./thunks/updatePost";
import { getLastPost } from "./thunks/getLastPost";
import { likePost } from "./thunks/likePost"; // Thunk'ı import et

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    status: "idle",
    error: null,
    currentPost: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // fetchPosts
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });

    // createPost
    builder
      .addCase(createPost.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts.push(action.payload);
      })
      .addCase(createPost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });

    // findPostById
    builder
      .addCase(findPostById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(findPostById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.currentPost = action.payload;
      })
      .addCase(findPostById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        console.error("Error finding post by ID: ", action.error.message);
      });

    // updatePost
    builder
      .addCase(updatePost.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        state.status = "succeeded";
        const index = state.posts.findIndex(
          (post) => post._id === action.payload._id
        );
        if (index !== -1) {
          state.posts[index] = action.payload;
        }
      })
      .addCase(updatePost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });

    // getLastPost
    builder
      .addCase(getLastPost.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getLastPost.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.currentPost = action.payload;
      })
      .addCase(getLastPost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });

    // likePost
    builder
      .addCase(likePost.pending, (state) => {
        state.status = "loading";
      })
      .addCase(likePost.fulfilled, (state, action) => {
        state.status = "succeeded";
        const postId = action.meta.arg.postId;
        const index = state.posts.findIndex((post) => post._id === postId);

        if (index !== -1) {
          // Burada action.payload'ı kontrol etmelisin; sunucudan dönen veriyi al
          // Eğer sunucu beğeni sayısını döndürüyor ise:
          state.posts[index].likes = action.payload.likes; // veya direkt likes sayısını ayarlayabilirsin

          // Eğer currentPost güncellenmeli ise:
          if (state.currentPost && state.currentPost._id === postId) {
            state.currentPost.likes = action.payload.likes; // Güncellenmiş beğeni sayısını currentPost'a ata
          }
        }
      })
      .addCase(likePost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default postsSlice.reducer;
