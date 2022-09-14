import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import mockedCard from "../../test-utils/mocks/mockCard";
import { Wrapper } from "../../test-utils/render/Wrapper";
import CardsForm from "./CardsForm";

describe("Given a cards form", () => {
  describe("When redered", () => {
    test("Then it should show 12 labels", () => {
      render(
        <Wrapper>
          <CardsForm card={mockedCard} textButton="" />
        </Wrapper>
      );
      const labels = [
        screen.getByText("Name"),
        screen.getByText("Pace"),
        screen.getByText("Dribbling"),
        screen.getByText("Shooting"),
        screen.getByText("Defense"),
        screen.getByText("Passing"),
        screen.getByText("Physical"),
        screen.getByText("Height cm"),
        screen.getByText("Age"),
        screen.getByText("Foot"),
        screen.getByText("Position"),
        screen.getByText("Image"),
      ];

      labels.forEach((label) => {
        expect(label).toBeInTheDocument();
      });
    });

    test("And then it should also show a submit button", () => {
      render(
        <Wrapper>
          <CardsForm card={mockedCard} textButton="" />
        </Wrapper>
      );
      const button = screen.getByRole("button");

      expect(button).toBeInTheDocument();
    });

    test("Then, on submit, it should be submitted", async () => {
      render(
        <Wrapper>
          <CardsForm card={mockedCard} textButton="" />
        </Wrapper>
      );
      const Form = screen.getByTestId("form");
      const mockSubmit = jest.fn();
      axios.post = jest.fn();
      Form.onsubmit = mockSubmit;
      const submitButton = screen.getByRole("button");
      await userEvent.click(submitButton);

      expect(mockSubmit).toHaveBeenCalled();
    });
  });
});
