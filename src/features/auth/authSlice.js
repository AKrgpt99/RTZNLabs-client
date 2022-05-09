import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { auth } from "./authApi";
import { useWeb3 } from "../../web3";

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

export const authenticate = createAsyncThunk(
  "user/authenticate",
  async (_, { rejectWithValue }) => {
    try {
      const web3 = useWeb3();

      if (!web3.getProvider()) {
        await web3.setProvider();
      }

      if (!web3.getToken()) {
        await web3.setToken();
      }

      const { user, error } = await auth({ token: web3.getToken() });
      if (error) {
        web3.reset();
        throw error;
      }

      return user.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authenticate.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(authenticate.fulfilled, (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
    });
    builder.addCase(authenticate.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
