import { PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../app/store/hooks";
import {
  createCardActionCreator,
  deleteCardActionCreator,
  loadAllCardsActionCreator,
  updateCardActionCreator,
} from "../../features/cards/cardsSlice";
import { Card } from "../../features/cards/models/card";
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
export const loadingModal = (loading: string) =>
  toast.loading(loading, {
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

  const createCard = async (newCard: FormData) => {
    try {
      const { data } = await axios.post(`${url}/cards/create`, newCard, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch(createCardActionCreator(data));

      toast.success("Card created successfully!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/cards");
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

  const updateCard = async (updatedCard: FormData, id: string) => {
    const token = localStorage.getItem("token");
    try {
      const { data } = await axios.put(
        `${url}/cards/updateCard/${id}`,
        updatedCard,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      successModal("Card updated successfully!");

      dispatch(updateCardActionCreator(data));
      navigate("/cards");
    } catch (error) {
      errorModal("Can not update  this card");
    }
  };

  const getByPosition = async (position: string) => {
    try {
      const {
        data: { cards },
      } = await axios.get(`${url}/cards/position/${position}`);

      if (cards.length === 0) {
        errorModal("Can not find cards with this position");

        return;
      }

      dispatch(loadAllCardsActionCreator(cards));
    } catch (error) {
      errorModal("Problem at finding cards");
    }
  };

  return {
    cards,
    getAllCards,
    deleteCard,
    createCard,
    getCardById,
    updateCard,
    getByPosition,
  };
};

export default useApi;
