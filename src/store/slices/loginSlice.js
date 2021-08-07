import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLogin: false,
    user: null,
  },
  reducers: {
    setLoggedIn: (state, action) => {
      state.isLogin = true;
      state.user = action.payload;
    },
    setLogout: (state) => {
      state.isLogin = false;
      state.user = null;
    },
  },
});

export const { setLoggedIn, setLogout } = loginSlice.actions;

export default loginSlice.reducer;
