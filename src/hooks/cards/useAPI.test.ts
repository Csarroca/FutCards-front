import { waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import {
  deleteCardActionCreator,
  loadAllCardsActionCreator,
} from "../../features/cards/cardsSlice";
import mockedCard from "../../test-utils/mocks/mockCard";
import mockUseDispatch from "../../test-utils/mocks/mockUseAppDispatch";
import useApi from "./useAPI";
import { toast } from "react-toastify";
import Wrapper from "../../utils/Wrapper";
import { renderHook } from "../../test-utils/render/customRender";

jest.mock("react-toastify");

describe("Given a getAllCards function returned by a useAPI function", () => {
  describe("When it's called", () => {
    const {
      result: {
        current: { getAllCards },
      },
    } = renderHook(useApi);

    test("Then it should dispatch the load projects action with the received data", async () => {
      await act(async () => {
        await getAllCards();
      });

      await waitFor(() => {
        expect(mockUseDispatch).toHaveBeenCalledWith(
          loadAllCardsActionCreator([mockedCard])
        );
      });
    });
  });
});

describe("Given a deleteCard function returned by useAPI function", () => {
  const {
    result: {
      current: { deleteCard },
    },
  } = renderHook(useApi);

  describe("When it's called with a valid id", () => {
    test("Then it should dispatch the deleteCard action with the recived id and call succesModal function", async () => {
      jest.clearAllMocks();

      await act(async () => {
        await deleteCard(mockedCard.id);
      });

      await waitFor(() => {
        expect(mockUseDispatch).toHaveBeenCalledWith(
          deleteCardActionCreator(mockedCard.id)
        );
      });

      await waitFor(() => {
        expect(toast.success).toHaveBeenCalledWith(
          "Card deleted successfully!",
          {
            position: toast.POSITION.TOP_CENTER,
          }
        );
      });
    });
  });

  describe("When called with an invalid cardId", () => {
    test("Then it should not dispatch the delete action and should call errorModal function", async () => {
      await act(async () => {
        await deleteCard("badId");
      });

      await waitFor(() => {
        expect(mockUseDispatch).not.toHaveBeenCalledWith(
          deleteCardActionCreator(mockedCard.id)
        );
      });

      await waitFor(() => {
        expect(toast.error).toHaveBeenCalledWith("Error deleting card", {
          position: toast.POSITION.TOP_CENTER,
        });
      });
    });
  });
});

describe("Given a getCardById function", () => {
  describe("When it's invoke with an especific id", () => {
    test.only("Then it should return a 'FutCard' with that id", async () => {
      const {
        result: {
          current: { getCardById },
        },
      } = renderHook(useApi);

      const card = await getCardById(mockedCard.id);

      await expect(card).toBe(mockedCard);
    });
  });

  describe("When it's invoke with a wrong ID", () => {
    test("Then it should return a 'FutCard' with that id", async () => {
      const {
        result: {
          current: { getCardById },
        },
      } = renderHook(useApi);

      const card = await getCardById(mockedCard.id);

      await expect(card).not.toBe(mockedCard);
    });
  });
});
