import { render, screen } from "@testing-library/react";
import Wrapper from "../../utils/Wrapper";
import MyTeamPage from "./MyTeamPage";

describe("Given a MyTeamPage page component", () => {
  describe("When it is instanciated", () => {
    test("Then it should show a heading with 'CardsPage' as a text", () => {
      const pageTitle = "My team page";

      render(<MyTeamPage />, { wrapper: Wrapper });

      const headingName = screen.getByRole("heading", { name: pageTitle });

      expect(headingName).toBeInTheDocument();
    });
  });
});
