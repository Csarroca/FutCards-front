import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it's intantiated and it recives a text", () => {
    test("Then it should show the text recived", () => {
      const expextedButtonText = "button test";

      render(
        <Button
          buttonText="button test"
          className=""
          type="button"
          actionOnclick={() => {}}
          isDisabled={true}
        />
      );

      const buttonText = screen.getByRole("button", {
        name: expextedButtonText,
      });

      expect(buttonText).toBeInTheDocument();
    });
  });
  describe("When it recive  an action as a prop and the user clicks the button", () => {
    test("Then it should invoke the function inside the  action on click", async () => {
      const mockedAction = jest.fn();

      render(
        <Button
          buttonText="SING UP"
          className=""
          type="submit"
          actionOnclick={mockedAction}
          isDisabled={false}
        />
      );

      const button = screen.getByRole("button", {
        name: "SING UP",
      });
      await userEvent.click(button);

      expect(mockedAction).toHaveBeenCalled();
    });
  });
});
