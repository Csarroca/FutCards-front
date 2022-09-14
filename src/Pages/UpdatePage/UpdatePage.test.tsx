import { render, screen } from "@testing-library/react";
import React from "react";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../app/store/store";
import mockedCard from "../../test-utils/mocks/mockCard";
import Wrapper from "../../utils/Wrapper";
import UpdatePage from "./UpdatePage";

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

describe("Given a UpdatePage component", () => {
  describe("When it is instanciated", () => {
    test("Then it should show a heading with 'CardsPage' as a text", () => {
      const buttonText = "UPDATE";

      render(<UpdatePage />, { wrapper: Wrapper });

      const headingName = screen.getByRole("button", { name: buttonText });

      expect(headingName).toBeInTheDocument();
    });
    test("And it should call the useState function", () => {
      let mockUseState;
      act(() => {
        mockUseState = jest.spyOn(React, "useState");
      });
      render(
        <Provider store={store}>
          <BrowserRouter>
            <UpdatePage />
          </BrowserRouter>
        </Provider>
      );

      expect(mockUseState).toHaveBeenCalled();
    });
  });
});
