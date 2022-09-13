import { render, screen } from "@testing-library/react";
import React from "react";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../app/store/store";
import mockedCard from "../../test-utils/mocks/mockCard";
import Wrapper from "../../utils/Wrapper";
import DetailedCardPage from "./DetailedCardPage";

const mockNavigate = jest.fn().mockReturnValue(mockedCard.id);

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ id: mockedCard.id }),
  useNavigate: () => mockNavigate,
}));

const mockUseApi = {
  getCardById: jest.fn().mockResolvedValue(mockedCard),
};

jest.mock("../../hooks/cards/useAPI", () => () => mockUseApi);

describe("Given a DetailedCardPage component", () => {
  describe("When it's instantiated", () => {
    test("Then should show  a DetailedCard with two button", async () => {
      render(<DetailedCardPage />, { wrapper: Wrapper });
      const expectedTextButton = "EDIT";
      const expectedTextButton2 = "DELETE";

      const button = screen.getByRole("button", { name: expectedTextButton });
      const button2 = screen.getByRole("button", { name: expectedTextButton2 });

      expect(button).toBeInTheDocument();
      expect(button2).toBeInTheDocument();
    });

    test("And it should call the useState function", () => {
      let mockUseState;
      act(() => {
        mockUseState = jest.spyOn(React, "useState");
      });
      render(
        <Provider store={store}>
          <BrowserRouter>
            <DetailedCardPage />
          </BrowserRouter>
        </Provider>
      );

      expect(mockUseState).toHaveBeenCalled();
    });
  });
});
