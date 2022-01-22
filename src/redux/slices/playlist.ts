import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosRequestConfig } from "axios";
import { apiEndpoints } from "../../services/api";
import { getData } from "../../utils/storage";
import axios from "axios";
import { RootState } from "..";

interface PlaylistState {
  isLoading: boolean;
  data: any;
  isError: boolean;
}

const initialState: PlaylistState = {
  isLoading: false,
  data: [],
  isError: false,
};

const plalistSlice = createSlice({
  name: "plalist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserPlaylist.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUserPlaylist.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.isLoading = false;
    });
    builder.addCase(fetchUserPlaylist.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const playlistSelector = (state: RootState) => state.playlist;
export default plalistSlice.reducer;

export const fetchUserPlaylist = createAsyncThunk("user/playlist", async () => {
  const token = await getData("@access_token");
  const userId: any = await getData("@userid");
  const url = apiEndpoints.getUserPlaylist(userId);

  const config: AxiosRequestConfig = {
    url: url,
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await axios(config);
    console.log("plalist", response.data);
    return response.data;
  } catch (error) {
    return error;
  }
});
