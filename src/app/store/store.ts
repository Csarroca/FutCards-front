import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import cardsReducer from "../../features/cards/cardsSlice";
import usersReducer from "../../features/users/UserSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    cards: cardsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
