import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";

describe("Given a Navbar component", () => {
  describe("When it's instantiated", () => {
    test("Then it should show Create card inside the Navbar'", () => {
      const linkText1 = "Create card";

      render(
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      );
      const navItem = screen.getByRole("link", { name: linkText1 });

      expect(navItem).toBeInTheDocument();
    });

    test("Then it should show 'Cards' inside the Navbar", () => {
      const text = "Cards";

      render(
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      );
      const navItem = screen.getByRole("link", {
        name: text,
      });

      expect(navItem).toBeInTheDocument();
    });
    test("Then it should show 'My team' inside the navbar", () => {
      const text = "My team";

      render(
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      );
      const navItem = screen.getByRole("link", {
        name: text,
      });

      expect(navItem).toBeInTheDocument();
    });
  });
});
