import { createAsyncThunk } from "@reduxjs/toolkit";
import { authFailure, authRequest, authSuccess } from "../reducers/Auth";
import store from "../store";
import { signIn, signUp } from "../services/authService";

const { dispatch } = store;
export const handleSignin = createAsyncThunk(
  "auth/signin",
  async (credentials: object, thunkAPI) => {
    try {
      await dispatch(authRequest());
      const { data } = await signIn(credentials);
      localStorage.setItem("token", data.token);
      localStorage.setItem("isLoggedIn", Boolean(data?.token));
      dispatch(authSuccess(data));
    } catch (err) {
      //@ts-ignore
      dispatch(authFailure(err?.response?.data || "Authentication failed"));
    }
  }
);

export const handleSignUp = createAsyncThunk(
  "auth/signup",
  async (credentials: object, thunkAPI) => {
    try {
      // await dispatch(authRequest());
      const { data } = await signUp(credentials);
      console.log(data);
      // let data = credentials;
      return data;
    } catch (err) {
      // @ts-ignore
      dispatch(authFailure(err?.response.data || "Problem signing up"));
    }
  }
);
