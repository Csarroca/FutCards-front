import { render, screen } from "@testing-library/react";
import Filter from "./Filter";
import UserEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import { store } from "../../app/store/store";

const mockUseApi = {
  getAllCards: jest.fn(),
  getByPosition: jest.fn(),
};
jest.mock("../../hooks/cards/useAPI", () => () => mockUseApi);

beforeEach(() => jest.clearAllMocks());

describe("Given a filter component", () => {
  describe("When it's instantiated", () => {
    test("Then it should show an input select", () => {
      const label = "Position";
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Filter />
          </Provider>
        </BrowserRouter>
      );
      const select = screen.getByLabelText(label);

      expect(select).toBeInTheDocument();
    });

    test("And it should show 5 options to choose", () => {
      const expectedLenght = 5;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <Filter />
          </Provider>
        </BrowserRouter>
      );
      const options = screen.getAllByRole("option");

      expect(options).toHaveLength(expectedLenght);
    });

    test("And when the user choose an option it should call de useState", async () => {
      const mockUseState = jest.spyOn(React, "useState");

      render(
        <BrowserRouter>
          <Provider store={store}>
            <Filter />
          </Provider>
        </BrowserRouter>
      );
      const button = screen.getByRole("button");
      await UserEvent.click(button);
      const input = screen.getByLabelText("Position");

      expect(input).toHaveValue("All");
      expect(mockUseApi.getAllCards).toHaveBeenCalled();
      expect(mockUseState).toHaveBeenCalledTimes(2);
    });

    test("And when the user choose the All option getByPosition method", async () => {
      jest.restoreAllMocks();

      const option = "st";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <Filter />
          </Provider>
        </BrowserRouter>
      );
      const button = screen.getByRole("button");
      const input = screen.getByLabelText("Position");
      await UserEvent.selectOptions(input, option);
      await UserEvent.click(button);

      expect(mockUseApi.getByPosition).toHaveBeenCalled();
      expect(input).toHaveValue(option);
    });
  });
});
