import { render, screen } from "@testing-library/react";
import Wrapper from "../../utils/Wrapper";
import RegisterPage from "./RegisterPage";

describe("Given a RegisterPage component", () => {
  describe("When it is instanciated", () => {
    test("Then it should show a heading with 'Create an account' as a text", () => {
      const titleText = "REGISTER";

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
  test("Then it should show an arrow icon link to go back to login page", () => {
    render(<RegisterPage />, { wrapper: Wrapper });

    const headingName = screen.getByRole("link", { name: "" });

    expect(headingName).toBeInTheDocument();
  });
});
