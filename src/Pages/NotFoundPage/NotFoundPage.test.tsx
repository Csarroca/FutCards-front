import { render, screen } from "@testing-library/react";
import Wrapper from "../../utils/Wrapper";
import NotFoundPage from "./NotFoundPage";

describe("Given a NotFoundPage component", () => {
  describe("When it's instanciated", () => {
    test("Then it should show an image with 'Referee with a red card' as alternative text", () => {
      const alternativeText = "A referee with a red card";

      render(<NotFoundPage />, { wrapper: Wrapper });

      const image = screen.getByRole("img", { name: alternativeText });

      expect(image).toBeInTheDocument();
    });
  });

  test("Then it should show two headings with '404' and 'Page not found as a text'", () => {
    const texth1 = "404";
    const texth2 = "Page not found";

    render(<NotFoundPage />, { wrapper: Wrapper });

    const heading1 = screen.getByRole("heading", { name: texth1 });
    const heading2 = screen.getByRole("heading", { name: texth2 });

    expect(heading1).toBeInTheDocument();
    expect(heading2).toBeInTheDocument();
  });

  test("Then it should show a Home icon to go back home page", () => {
    render(<NotFoundPage />, { wrapper: Wrapper });

    const headingName = screen.getByRole("link", { name: "" });

    expect(headingName).toBeInTheDocument();
  });
});
