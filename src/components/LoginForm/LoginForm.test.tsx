import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "./LoginForm";

const mockUser = jest.fn();

jest.mock("../../hooks/useUser", () => () => ({
  login: mockUser,
}));

describe("Given a Register component", () => {
  describe("When its instantiaded", () => {
    test("Then it show a unsername and password inputs and a SING UP button", () => {
      render(<LoginForm />);

      const registerForm = [
        screen.getByText("Username"),
        screen.getByText("Password"),
        screen.getByRole("button", { name: "LOGIN" }),
      ];

      registerForm.forEach((element) => expect(element).toBeInTheDocument());
    });
  });

  describe("When a user fills every input", () => {
    test("Then every input should have what the users filled inside", async () => {
      const userName = "usertext";
      const userPassword = "userPasswd";
      render(<LoginForm />);

      const usernameInput = screen.getByLabelText(
        "Username"
      ) as HTMLInputElement;
      const passwordInput = screen.getByLabelText(
        "Password"
      ) as HTMLInputElement;

      await userEvent.type(usernameInput, userName);
      await userEvent.type(passwordInput, userPassword);

      expect(usernameInput.value).toBe(userName);
      expect(passwordInput.value).toBe(userPassword);
    });
  });
  describe("When all inputs are fullfiled and the user clicks on the submit button", () => {
    test("Then the login function will be called", async () => {
      const userName = "usertext";
      const userPassword = "userPasswd";
      render(<LoginForm />);

      const usernameInput = screen.getByLabelText(
        "Username"
      ) as HTMLInputElement;
      const passwordInput = screen.getByLabelText(
        "Password"
      ) as HTMLInputElement;

      const submitButton = screen.getByRole("button", { name: "LOGIN" });

      await userEvent.type(usernameInput, userName);
      await userEvent.type(passwordInput, userPassword);
      await userEvent.click(submitButton);

      expect(mockUser).toHaveBeenCalled();
    });
  });
});
