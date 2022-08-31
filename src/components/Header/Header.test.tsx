import Header from "./Header";
import { screen, render } from "@testing-library/react";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an imagen with the alternative text 'Nations logo' in the header", () => {
      const alternativeText = "Logo of FutCards";

      render(<Header />);
      const picture = screen.getByRole("img", {
        name: alternativeText,
      });

      expect(picture).toBeInTheDocument();
    });

    test("Then it should not show an h1 with the text FutCards", () => {
      const titleContent = "FutCards";

      render(<Header />);

      const title = screen.getByText(titleContent);

      expect(title).toBeInTheDocument();
    });
  });
});
