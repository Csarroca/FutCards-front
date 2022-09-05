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
