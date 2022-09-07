import { PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../app/store/hooks";
import {
  deleteCardActionCreator,
  loadAllCardsActionCreator,
} from "../../features/cards/cardsSlice";
import { Card } from "../../features/cards/models/card";
import { toast } from "react-toastify";

export const successModal = (message: string) =>
  toast.success(message, {
    position: toast.POSITION.TOP_CENTER,
  });

export const errorModal = (error: string) =>
  toast.error(error, {
    position: toast.POSITION.TOP_CENTER,
  });

const url = process.env.REACT_APP_API_URL as string;

const useApi = () => {
  const cards = useAppSelector(({ cards }) => cards);
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.users);

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

  const deleteCard = useCallback(
    async (cardId: string) => {
      try {
        await axios.delete(`${url}/cards/${cardId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        dispatch(deleteCardActionCreator(cardId));
        successModal("Card deleted successfully!");
      } catch (error) {
        errorModal("Error deleting card");
      }
    },
    [dispatch, token]
  );

  return { cards, getAllCards, deleteCard };
};

export default useApi;
