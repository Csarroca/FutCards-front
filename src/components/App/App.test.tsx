import { screen } from "@testing-library/react";
import { render } from "../../test-utils/render/customRender";
import { Wrapper } from "../../test-utils/render/Wrapper";
import App from "./App";

describe("Given an App component", () => {
  describe("When instantiated", () => {
    test("Then it should show a heading with the app name and a footer with the copyright", () => {
      render(<App />, { Wrapper: Wrapper });

      const header = screen.getByRole("img");

      expect(header).toBeInTheDocument();
    });
  });
});
