import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  user: {
    _id: '',
    usertype: '',
    friends: [],
  },
  token: null,
  posts: [],
  users: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.user.friends = action.payload.user.friends || [];
    },
    setLogout: (state) => {
      state.user = {
        _id: '',
        usertype: '',
        friends: [],
      };
      state.token = null;
    },
    setFriends: (state, action) => {
      if (state.user) {
        state.user.friends = action.payload.friends || [];
      } else {
        console.error("user friends non-existent :(");
      }
    },
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },
    setPost: (state, action) => {
      const updatedPosts = state.posts.map((post) => {
        if (post._id === action.payload.post._id) return action.payload.post;
        return post;
      });
      state.posts = updatedPosts;
    },
    setUsers: (state, action) => {
      state.users = action.payload.users;
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post._id !== action.payload.postId);
    },
    deleteRecipe: (state, action) => {
      state.recipes = state.recipes.filter((recipe) => recipe._id !== action.payload.recipeId);
    },
  },
});

export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost, setUsers, deletePost, deleteRecipe } = authSlice.actions;
export default authSlice.reducer;
