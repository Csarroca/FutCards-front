import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../app/store/store";
import Navbar from "./Navbar";

describe("Given a Navbar component", () => {
  describe("When it's instantiated", () => {
    test("Then it should show Create card inside the Navbar'", () => {
      const linkText1 = "Create card";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <Navbar />
          </BrowserRouter>
        </Provider>
      );
      const navItem = screen.getByRole("link", { name: linkText1 });

      expect(navItem).toBeInTheDocument();
    });

    test("Then it should show 'Cards' inside the Navbar", () => {
      const text = "Cards";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <Navbar />
          </BrowserRouter>
        </Provider>
      );
      const navItem = screen.getByRole("link", {
        name: text,
      });

      expect(navItem).toBeInTheDocument();
    });
    test("Then it should show 'My team' inside the navbar", () => {
      const text = "My team";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <Navbar />
          </BrowserRouter>
        </Provider>
      );
      const navItem = screen.getByRole("link", {
        name: text,
      });

      expect(navItem).toBeInTheDocument();
    });
  });
});
