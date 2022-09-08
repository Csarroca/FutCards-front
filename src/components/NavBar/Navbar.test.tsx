import { render, screen } from "@testing-library/react";
import * as router from "react-router";
import Navbar from "./Navbar";
import { Wrapper } from "../../test-utils/render/Wrapper";
import userEvent from "@testing-library/user-event";

const mockLogout = jest.fn();

jest.mock("../../hooks/user/useUser", () => () => ({
  logout: mockLogout,
}));

describe("Given a Navbar component", () => {
  const mockNavigate = jest.fn();

  beforeEach(() => {
    jest.spyOn(router, "useNavigate").mockImplementation(() => mockNavigate);
  });

  afterEach(() => jest.resetAllMocks());
  describe("When it's instantiated", () => {
    beforeEach(() => {
      const mockLocation = {
        pathname: "/cards",
        Location: "",
        key: "",
        search: "",
        hash: "",
        state: "",
      };

      jest.spyOn(router, "useLocation").mockImplementation(() => mockLocation);
    });

    test("Then it should show 'Create card','Cards','My team','Logout' inside the Navbar'", () => {
      const text1 = "Create card";
      const text2 = "Cards";
      const text3 = "My team";
      const text4 = "Logout";

      render(<Navbar />, { wrapper: Wrapper });

      const navItem = [
        screen.getByRole("link", { name: text1 }),
        screen.getByRole("link", {
          name: text2,
        }),
        screen.getByRole("link", {
          name: text3,
        }),
        screen.getByRole("link", {
          name: text4,
        }),
      ];

      navItem.forEach((element) => expect(element).toBeInTheDocument());
    });
    describe("and the path is '/cards'", () => {
      test("Then it should be rendered", () => {
        render(<Navbar />, { wrapper: Wrapper });

        const resultNav = screen.getByRole("navigation");

        expect(resultNav).toBeInTheDocument();
      });
      describe("and the user clicks logout", () => {
        test("then it will be logout and redirect to login page", async () => {
          const mockLocation = {
            pathname: "/destinos",
            Location: "",
            key: "",
            search: "",
            hash: "",
            state: "",
          };

          render(<Navbar />, { wrapper: Wrapper });

          jest
            .spyOn(router, "useLocation")
            .mockImplementation(() => mockLocation);

          const linkLogout = screen.getByRole("link", { name: "Logout" });
          await userEvent.click(linkLogout);

          expect(mockNavigate).toHaveBeenCalled();
        });
      });
    });
  });
});
