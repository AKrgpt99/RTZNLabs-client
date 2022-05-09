import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getUserByAddress } from "./userApi";

const initialState = {
  user: null,
  users: [],
  loading: false,
  error: null,
};

export const fetchUser = createAsyncThunk(
  "users/fetchUser",
  async (address, { rejectWithValue }) => {
    try {
      const { user, error } = await getUserByAddress(address);
      if (error) {
        throw error;
      }

      return user.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err);
    }
  }
);

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
