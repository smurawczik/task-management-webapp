import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserFetchStatus, UserState } from "./user.types";

const initialState: UserState = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  roles: [],
  fetchStatus: UserFetchStatus.IDLE,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.id = action.payload.id;
      state.firstName = action.payload.firstName;
      state.email = action.payload.email;
      state.fetchStatus = UserFetchStatus.SUCCESS;
    },
    clearUser: (state) => {
      state.id = "";
      state.firstName = "";
      state.email = "";
    },
    setUserFetchStatus: (state, action: PayloadAction<UserFetchStatus>) => {
      state.fetchStatus = action.payload;
    },
  },
});

export const { setUser, setUserFetchStatus, clearUser } = userSlice.actions;

export default userSlice.reducer;
