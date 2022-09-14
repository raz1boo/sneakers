import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../constants/api";
import { ISneakersProps } from "../../types/IData";

export const fetchSneakers = createAsyncThunk(API_URL, async (_, thunkAPI) => {
  try {
    const response = await axios.get<ISneakersProps[]>(API_URL);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue("Something wrong");
  }
});
