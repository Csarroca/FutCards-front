import { PayloadAction } from "@reduxjs/toolkit";
import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../app/store/hooks";
import { loadAllCardsActionCreator } from "../../features/cards/cardsSlice";
import { Card } from "../../features/cards/models/card";

const useApi = () => {
  const url = process.env.REACT_APP_API_URL as string;

  const cards = useAppSelector(({ cards }) => cards);
  const dispatch = useAppDispatch();

  const getAllCards = useCallback(async () => {
    const response = await fetch(url);
    const { cards }: { cards: Card[] } = await response.json();

    dispatch<PayloadAction<Card[]>>(loadAllCardsActionCreator(cards));
  }, [dispatch, url]);

  return { cards, getAllCards };
};

export default useApi;
