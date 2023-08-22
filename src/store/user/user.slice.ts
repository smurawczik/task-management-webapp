import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserFetchStatus } from "./user.types";

interface UserState {
  id: string;
  name: string;
  email: string;
  fetchStatus: UserFetchStatus;
}

const initialState: UserState = {
  id: "",
  name: "",
  email: "",
  fetchStatus: UserFetchStatus.IDLE,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.fetchStatus = UserFetchStatus.SUCCESS;
    },
    clearUser: (state) => {
      state.id = "";
      state.name = "";
      state.email = "";
    },
    setUserFetchStatus: (state, action: PayloadAction<UserFetchStatus>) => {
      state.fetchStatus = action.payload;
    },
  },
});

export const { setUser, setUserFetchStatus, clearUser } = userSlice.actions;

export default userSlice.reducer;
