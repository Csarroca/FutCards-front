import { PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../app/store/hooks";
import {
  createCardActionCreator,
  deleteCardActionCreator,
  loadAllCardsActionCreator,
} from "../../features/cards/cardsSlice";
import { Card, ProtoCard } from "../../features/cards/models/card";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

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

  const createCard = async (newCard: ProtoCard) => {
    try {
      const { data } = await axios.post(`${url}/cards/create`, newCard, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch(createCardActionCreator(data));

      successModal("Card created successfully!");
    } catch (error) {
      errorModal("Error creating card");
    }
  };
  const getCardById = useCallback(async (cardId: string) => {
    try {
      const {
        data: { card },
      } = await axios.get(`${url}/cards/${cardId}`);
      return card;
    } catch (error) {
      errorModal("Can not show details from this card");
    }
  }, []);

  const updateCard = async (formData: FormData, id: string) => {
    let response;
    const token = localStorage.getItem("token");
    try {
      response = await axios.put(`${url}/cards/updateCard/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      navigate("/cards");
      return response.data;
    } catch (error) {
      errorModal("Can not update  this card");
    }
  };

  return {
    cards,
    getAllCards,
    deleteCard,
    createCard,
    getCardById,
    updateCard,
  };
};

export default useApi;
