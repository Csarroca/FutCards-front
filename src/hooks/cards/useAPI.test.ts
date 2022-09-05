import { waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { loadAllCardsActionCreator } from "../../features/cards/cardsSlice";
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
