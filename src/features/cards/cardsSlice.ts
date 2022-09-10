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
    deleteCard: (previousCards, action: PayloadAction<string>) =>
      previousCards.filter((card) => card.id !== action.payload),

    createCard: (previousCards, action: PayloadAction<Card>) => [
      ...previousCards,
      action.payload,
    ],
    updateCard: (previousState, action: PayloadAction<Card>) => {
      return previousState.map((card) =>
        card.id === action.payload.id ? action.payload : card
      );
    },
  },
});

export const { loadAllCards: loadAllCardsActionCreator } = cardsSlice.actions;

export const { deleteCard: deleteCardActionCreator } = cardsSlice.actions;

export const { createCard: createCardActionCreator } = cardsSlice.actions;

export const cardsReducer = cardsSlice.reducer;

export default cardsReducer;
