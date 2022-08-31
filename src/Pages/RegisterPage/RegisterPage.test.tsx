import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import RegisterPage from "./RegisterPage";

describe("Given a RegisterPage component", () => {
  describe("When it is instanciated", () => {
    test("Then it should show a component RegisterForms", () => {
      render(
        <BrowserRouter>
          <RegisterPage />
        </BrowserRouter>
      );

      const nameHeading = screen.getByRole("list");
      expect(nameHeading).toBeInTheDocument();
    });
  });
});
