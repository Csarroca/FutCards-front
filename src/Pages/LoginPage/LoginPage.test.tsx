import { render, screen } from "@testing-library/react";
import Wrapper from "../../utils/Wrapper";
import LoginPage from "./LoginPage";

describe("Given a LoginPage component", () => {
  describe("When it is instanciated", () => {
    test("Then it should show a heading with 'Log in' as a text and a button with 'Create an account' as a text inside", () => {
      const titleText = "Sign in";
      const buttonText = "REGISTER";

      render(<LoginPage />, { wrapper: Wrapper });

      const headingName = screen.getByRole("heading", { name: titleText });
      const createAccountButton = screen.getByRole("button", {
        name: buttonText,
      });

      expect(headingName).toBeInTheDocument();
      expect(createAccountButton).toBeInTheDocument();
    });
  });
});
