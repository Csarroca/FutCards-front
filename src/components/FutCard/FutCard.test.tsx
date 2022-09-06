import { getByAltText, render, screen } from "@testing-library/react";
import mockedCard from "../../test-utils/mocks/mockCard";
import Wrapper from "../../utils/Wrapper";
import FutCard from "./FutCard";

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
});
