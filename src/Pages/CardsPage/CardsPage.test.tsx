import { render, screen } from "@testing-library/react";
import Wrapper from "../../utils/Wrapper";
import CardsPage from "./CardsPage";

describe("Given a CardsPage component", () => {
  describe("When it is instanciated", () => {
    xtest("Then it should show a navbar and a FutCard component", () => {
      render(<CardsPage />, { wrapper: Wrapper });

      const navbar = screen.getByRole("navigation", { name: "" });

      expect(navbar).toBeInTheDocument();
    });
    xtest("Then it should show a FutCard list", () => {});
  });
});
