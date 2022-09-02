import { render, screen } from "@testing-library/react";
import Wrapper from "../../utils/Wrapper";
import RegisterPage from "./LoginPage";

describe("Given a RegisterPage component", () => {
  describe("When it is instanciated", () => {
    test("Then it should show a heading with 'Create an account' as a text", () => {
      const titleText = "Sign in";

      render(<RegisterPage />, { wrapper: Wrapper });

      const headingName = screen.getByRole("heading", { name: titleText });
      expect(headingName).toBeInTheDocument();
    });
  });
});
