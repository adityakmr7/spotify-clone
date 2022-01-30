import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { RootState } from "..";
import { apiEndpoints } from "../../services/api";
import axiosInstance from "../../services/axiosInterceptor";
import { getData } from "../../utils/storage";
interface State {
  isLoading: boolean;
  isError: boolean;
  release: any;
}
const initialState: State = {
  isLoading: true,
  release: [],
  isError: false,
};

const albumSlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(albumRelease.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(albumRelease.fulfilled, (state, { payload }) => {
      state.release = payload;
      state.isLoading = false;
    });
    builder.addCase(albumRelease.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const albumSelector = (state: RootState) => state.album;
export default albumSlice.reducer;

export const albumRelease = createAsyncThunk(
  "/browse/new-release",
  async () => {
    const url = apiEndpoints.getNewRelease();

    try {
      const response: AxiosResponse = await axiosInstance.get(url);

      return response.data;
    } catch (error) {
      return error;
    }
  }
);
