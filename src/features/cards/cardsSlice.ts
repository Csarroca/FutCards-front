import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Card } from "./models/card";

const cardsInitialState: Card[] = [];

export const cardsSlice = createSlice({
  name: "cards",
  initialState: cardsInitialState,
  reducers: {
    loadAllCards: (previousCards, action: PayloadAction<Card[]>) => [
      ...action.payload,
    ],
  },
});

export const { loadAllCards: loadAllCardsActionCreator } = cardsSlice.actions;

export const cardsReducer = cardsSlice.reducer;

export default cardsReducer;
