import { createSlice } from "@reduxjs/toolkit";
import { fetchSneakers } from "./actionCreators";

const initialState = {
  isLoading: false,
  error: "",
  sneakers: [],
};

export const sneakersSlice = createSlice({
  name: "sneakers",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchSneakers.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.error = "";
      state.sneakers = action.payload;
    },
    [fetchSneakers.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchSneakers.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export const sneakersReducer = sneakersSlice.reducer;
