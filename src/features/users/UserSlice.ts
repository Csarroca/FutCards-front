import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "./models/User";

const usersInitialState: User = {
  id: "",
  userName: "",
  token: "",
};

export const usersSlice = createSlice({
  name: "users",
  initialState: usersInitialState,
  reducers: {
    loginUsers: (previousUsers, action: PayloadAction<User>) => action.payload,
    logoutUsers: (previousUsers, action: PayloadAction) => usersInitialState,
  },
});

export const { loginUsers, logoutUsers } = usersSlice.actions;

export const usersReducer = usersSlice.reducer;

export default usersReducer;
