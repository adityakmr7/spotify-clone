import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "..";
import { storeData } from "../../utils/storage";
import axios, { AxiosRequestConfig } from "axios";

interface UserState {
  isLoading: boolean;
  isAuthenticated: boolean;
  userData: "";
}

const initialState: UserState = {
  isLoading: true,
  isAuthenticated: false,
  userData: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state) => {
      state.isLoading = true;
    },
    getUserSuccess: (state, { payload }) => {
      state.userData = payload;
      state.isAuthenticated = true;
      state.isLoading = false;
    },
  },
});

export const userSelector = (state: RootState) => state.user;

export const { getUser, getUserSuccess } = userSlice.actions;

export default userSlice.reducer;

export const getCurrentUser = (access_token: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(getUser());
    try {
      const config: AxiosRequestConfig = {
        method: "GET",
        url: "https://api.spotify.com/v1/me",
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
      };
      const response = await axios(config);
      storeData("@userData", JSON.stringify(response.data));
      storeData("@userid", response.data.id);
      getUserSuccess(response.data);
      return response.data;
    } catch (error) {
      console.log("Error", error);
    }
  };
};
