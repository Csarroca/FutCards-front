import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Wrapper from "../../utils/Wrapper";
import RegisterPage from "./RegisterPage";

describe("Given a RegisterPage component", () => {
  describe("When it is instanciated", () => {
    test("Then it should show a heading with 'Create an account' as a text", () => {
      const titleText = "Create an account";

      render(<RegisterPage />, { wrapper: Wrapper });

      const headingName = screen.getByRole("heading", { name: titleText });
      expect(headingName).toBeInTheDocument();
    });
    test("Then it should show a Register component form", () => {
      render(<RegisterPage />, { wrapper: Wrapper });

      const form = screen.getByLabelText("Username");

      expect(form).toBeInTheDocument();
    });
  });
});
