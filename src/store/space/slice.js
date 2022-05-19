import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  spaces: [],
  detailSpace: null,
};

export const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    spacesFetched: (state, action) => {
      state.spaces = action.payload;
      state.loading = false;
    },
    detailsSpaceFetched: (state, action) => {
      state.detailSpace = action.payload;
      state.loading = false;
    },
  },
});

export const { startLoading, spacesFetched, detailsSpaceFetched } =
  feedSlice.actions;

export default feedSlice.reducer;
