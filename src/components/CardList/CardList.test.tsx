import { render, screen } from "../../test-utils/render/customRender";
import Wrapper from "../../utils/Wrapper";
import CardList from "./CardList";

describe("Given a CardList component", () => {
  describe("When it's intantiated", () => {
    test("Then it should show the cards at the list", () => {
      render(<CardList />, { wrapper: Wrapper });

      const list = screen.getAllByRole("list");

      expect(list[0]).toBeInTheDocument();
    });
  });
});
