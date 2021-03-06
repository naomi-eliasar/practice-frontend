import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token"),
  profile: null,
  space: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      localStorage.setItem("token", action.payload.token);
      state.token = action.payload.token;
      state.profile = action.payload.user;
      state.space = action.payload.space;
    },
    logOut: (state, action) => {
      localStorage.removeItem("token");
      state.token = null;
      state.profile = null;
      state.space = null;
    },
    tokenStillValid: (state, action) => {
      state.profile = action.payload.user;
      state.space = action.payload.space;
    },
    storyDeleteSuccess: (state, action) => {
      const storyId = action.payload.storyId;
      state.space.Stories = state.space.Stories.filter(
        (story) => story.id !== storyId
      );
    },
    // addStory: (state, action) => {
    //   const { name, content, imageUrl } = action.payload;
    //   const newStory = {
    //     id: Math.floor(Math.random() * 1000),
    //     name,
    //     content,
    //     imageUrl,
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //     spaceId: state.space.id,
    //   };
    //   state.space.Stories.push(newStory);
    // },
    addStory: (state, action) => {
      state.space.Stories = [...state.space.Stories, action.payload];
    },
  },
});

export const {
  loginSuccess,
  logOut,
  tokenStillValid,
  storyDeleteSuccess,
  addStory,
} = userSlice.actions;

export default userSlice.reducer;
