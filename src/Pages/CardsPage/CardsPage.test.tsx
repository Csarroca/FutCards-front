import { render, screen } from "@testing-library/react";
import Wrapper from "../../utils/Wrapper";
import CardsPage from "./CardsPage";

describe("Given a CardsPage component", () => {
  describe("When it is instanciated", () => {
    test("Then it should show a CardList component", () => {
      render(<CardsPage />, { wrapper: Wrapper });

      const cardList = screen.getByRole("list", { name: "" });

      expect(cardList).toBeInTheDocument();
    });
  });
});
