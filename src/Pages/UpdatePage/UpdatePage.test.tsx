import { render, screen } from "@testing-library/react";
import Wrapper from "../../utils/Wrapper";
import UpdatePage from "./UpdatePage";

describe("Given a UpdatePage component", () => {
  describe("When it is instanciated", () => {
    test("Then it should show a heading with 'CardsPage' as a text", () => {
      const buttonText = "UPDATE";

      render(<UpdatePage />, { wrapper: Wrapper });

      const headingName = screen.getByRole("button", { name: buttonText });

      expect(headingName).toBeInTheDocument();
    });
  });
});
