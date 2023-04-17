import { createAsyncThunk } from "@reduxjs/toolkit";
import { authFailure, authRequest, authSuccess } from "../reducers/Auth";
import store from "../store";

const { dispatch } = store;
export const handleSignin = createAsyncThunk(
  "auth/signin",
  async (data: object, thunkAPI) => {
    try {
      await dispatch(authRequest());
      await setTimeout(() => dispatch(authSuccess(data)));
    } catch (err) {
      dispatch(authFailure);
    }
  }
);
