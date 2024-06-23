import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define the loginUser thunk
export const loginUser = createAsyncThunk("auth/login", async (credential, THUNK_API) => {
  try {
    const res = await axios.post("https://ur-assets-management-system-backend.onrender.com/api/v1/auth/login", credential);
    localStorage.setItem("user", JSON.stringify(res.data.data));
    return res.data;
  } catch (err) {
    return THUNK_API.rejectWithValue(err.response.data);
  }
});

// Retrieve auth data from localStorage
const storedAuthData = localStorage.getItem("user");

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: storedAuthData ? JSON.parse(storedAuthData) : null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.error = null;
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
