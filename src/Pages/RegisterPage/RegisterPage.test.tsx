import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import RegisterPage from "./RegisterPage";

describe("Given a RegisterPage component", () => {
  describe("When it is instanciated", () => {
    test("Then it should show a heading with 'Create an account' as a text", () => {
      const titleText = "Create an account";
      render(
        <BrowserRouter>
          <RegisterPage />
        </BrowserRouter>
      );

      const headingName = screen.getByRole("heading", { name: titleText });
      expect(headingName).toBeInTheDocument();
    });
    test("Then it should show a Register component form", () => {
      render(
        <BrowserRouter>
          <RegisterPage />
        </BrowserRouter>
      );
      const form = screen.getByLabelText("Username");

      expect(form).toBeInTheDocument();
    });
  });
});
