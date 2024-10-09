import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface initialState {
  isSignup: boolean;
  data: object | any;
  isLoggedIn: boolean;
  loading: boolean;
}

const authReducer = createSlice({
  name: "auth",
  initialState: {
    isSignup: false,
    data: {},
    isLoggedIn: false,
    loading: false,
  } as initialState,
  reducers: {
    toggleForm: (state) => {
      state.isSignup = !state.isSignup;
    },
    authRequest: (state) => {
      state.loading = true;
    },
    authSuccess: (state, action) => {
      console.log(action.payload);
      state.data = action.payload;
      state.loading = false;
      state.isLoggedIn = Boolean(
        action.payload?.data?.user || action?.payload?.user
      );
    },
    authFailure: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.isLoggedIn = false;
    },
    logout: (state) => {
      state.data = {};
      state.loading = false;
      state.isLoggedIn = false;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(handleSignin.pending, (state, action) => {
  //       state.loading = true;
  //     })
  //     .addCase(handleSignin.fulfilled, (state, action) => {
  //       state.data = action.payload;
  //       state.loading = false;
  //       state.isLoggedIn = true;
  //     })
  //     .addCase(handleSignin.rejected, (state, action) => {
  //       state.data = action.payload;
  //       state.loading = false;
  //       state.isLoggedIn = false;
  //     });
  // },
});
export const { toggleForm, authFailure, authRequest, authSuccess, logout } =
  authReducer.actions;
export default authReducer.reducer;
