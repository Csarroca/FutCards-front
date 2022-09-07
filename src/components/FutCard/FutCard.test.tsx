import { render, screen } from "@testing-library/react";
import mockedCard from "../../test-utils/mocks/mockCard";
import userEvent from "@testing-library/user-event";
import mockedUser from "../../test-utils/mocks/mockUser";
import Wrapper from "../../utils/Wrapper";
import FutCard from "./FutCard";

const mockDeleteCardFunction = jest.fn();
jest.mock("../../hooks/cards/useAPI", () => () => ({
  deleteCard: mockDeleteCardFunction,
}));

jest.mock("../../app/store/hooks", () => ({
  ...jest.requireActual("../../app/store/hooks"),
  useAppSelector: () => mockedUser,
}));

describe("Given a FutCard component", () => {
  describe("When instantiated with a card object as props", () => {
    test("Then it should show the image of the player, of the country flag, and the team", () => {
      render(<FutCard card={mockedCard} />, { wrapper: Wrapper });

      const expectedNumberOfImages = 3;
      const images = screen.getAllByRole("img");

      const renderedImages = [
        screen.getByAltText("country flag"),
        screen.getByAltText("club of football"),
        screen.getByAltText("player avatar"),
      ];

      expect(images).toHaveLength(expectedNumberOfImages);
      renderedImages.forEach((image) => expect(image).toBeInTheDocument());
    });

    test("Then it should show two stats list", () => {
      render(<FutCard card={mockedCard} />, { wrapper: Wrapper });

      const expectedNumberOfLists = 2;
      const lists = screen.getAllByRole("list", { name: "" });

      expect(lists).toHaveLength(expectedNumberOfLists);
    });
  });

  describe("When the user id and the card owner are the same", () => {
    test("then it should show an icon for delete the card", () => {
      render(<FutCard card={mockedCard} />, { wrapper: Wrapper });

      const icon = screen.getByTestId("delete");

      expect(icon).toBeInTheDocument();
    });
  });

  test("Then if user clicks the icon, the deleteCard function should be called", async () => {
    render(<FutCard card={mockedCard} />, { wrapper: Wrapper });

    const icon = screen.getByTestId("delete");
    await userEvent.click(icon);

    expect(mockDeleteCardFunction).toHaveBeenCalled();
  });
});
