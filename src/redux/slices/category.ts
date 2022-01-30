import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosRequestConfig } from "axios";
import { apiEndpoints } from "../../services/api";
import { getData } from "../../utils/storage";
import axios from "axios";
import { RootState } from "..";
import axiosInstance from "../../services/axiosInterceptor";

interface CategoryState {
  isLoading: boolean;
  category: any;
  isError: boolean;
}

const initialState: CategoryState = {
  isLoading: false,
  category: [],
  isError: false,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCategories.fulfilled, (state, { payload }) => {
      state.category = payload;
      state.isLoading = false;
    });
    builder.addCase(fetchCategories.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const categorySelector = (state: RootState) => state.category;
export default categorySlice.reducer;

export const fetchCategories = createAsyncThunk("user/category", async () => {
  const userId: any = await getData("@userid");
  const url = apiEndpoints.getCategories();

  try {
    const response = await axiosInstance.get(url);

    return response.data;
  } catch (error) {
    return error;
  }
});
