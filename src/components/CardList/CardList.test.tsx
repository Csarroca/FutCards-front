import { render, screen } from "../../test-utils/render/customRender";
import Wrapper from "../../utils/Wrapper";
import CardList from "./CardList";

describe("Given a CardList component", () => {
  describe("When it's intantiated", () => {
    test("Then it should show a heading with 'CARDS LIST'", async () => {
      render(<CardList />, { wrapper: Wrapper });

      const heading = screen.getByRole("heading", { name: "CARDS LIST" });

      expect(heading).toBeInTheDocument();
    });
  });
  test("Then it should show the cards at the list", () => {
    render(<CardList />, { wrapper: Wrapper });

    const list = screen.getAllByRole("list");

    expect(list[0]).toBeInTheDocument();
  });
});
