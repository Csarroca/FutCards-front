import { PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../app/store/hooks";
import { loadAllCardsActionCreator } from "../../features/cards/cardsSlice";
import { Card } from "../../features/cards/models/card";

const url = process.env.REACT_APP_API_URL as string;

const useApi = () => {
  const cards = useAppSelector(({ cards }) => cards);
  const dispatch = useAppDispatch();

  const getAllCards = useCallback(async () => {
    try {
      const { data }: AxiosResponse<Card[]> = await axios.get(`${url}/cards`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.token}`,
        },
      });
      dispatch<PayloadAction<Card[]>>(loadAllCardsActionCreator(data));
    } catch (error) {}
  }, [dispatch]);

  return { cards, getAllCards };
};

export default useApi;
