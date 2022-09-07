import { waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import {
  deleteCardActionCreator,
  loadAllCardsActionCreator,
} from "../../features/cards/cardsSlice";
import mockedCard from "../../test-utils/mocks/mockCard";
import mockUseDispatch from "../../test-utils/mocks/mockUseAppDispatch";
import { renderHook } from "../../test-utils/render/customRender";
import useApi from "./useAPI";

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
    test("Then it should dispatch the deleteCard action with the recived id", async () => {
      const testId = "aass12312a";
      await act(async () => {
        await deleteCard();
      });

      await waitFor(() => {
        expect(mockUseDispatch).toHaveBeenCalledWith(
          deleteCardActionCreator(testId)
        );
      });
    });
  });
});
