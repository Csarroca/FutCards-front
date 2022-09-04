import { render, screen } from "@testing-library/react";
import Wrapper from "../../utils/Wrapper";
import CreateCardPage from "./CreateCardPage";

describe("Given a CardsPage component", () => {
  describe("When it is instanciated", () => {
    test("Then it should show a heading with 'CardsPage' as a text", () => {
      const pageTitle = "CreateCardPage";

      render(<CreateCardPage />, { wrapper: Wrapper });

      const headingName = screen.getByRole("heading", { name: pageTitle });

      expect(headingName).toBeInTheDocument();
    });
  });
});
