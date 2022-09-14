import { screen } from "@testing-library/react";
import { render } from "../../test-utils/render/customRender";
import { Wrapper } from "../../test-utils/render/Wrapper";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "../../app/store/store";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given an App component", () => {
  const mockLocalStorage = {
    setItem: jest.fn(),
    getItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn(),
    length: 1,
    key: jest.fn(),
  };
  beforeAll(() => {
    window.localStorage = mockLocalStorage;
  });
  describe("When instantiated", () => {
    test("Then it should show a heading with the app name and a footer with the copyright", () => {
      render(<App />, { wrapper: Wrapper });

      const header = screen.getByRole("img");

      expect(header).toBeInTheDocument();
    });
  });
  test("Then it take the token from the localStorage", () => {
    const mockToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMWE0NDgwZTljYjYxZjdlOTNhYWU0MyIsInVzZXJOYW1lIjoiY3Jpc3RpYW4iLCJpYXQiOjE2NjI2NjY1MDJ9.9VqDYs8GTajlmK8N3KEDcFBRzXRn-kNt0u6jgJ64Zfs";
    window.localStorage.setItem("token", mockToken);
    mockLocalStorage.getItem.mockReturnValue(mockToken);
    render(
      <Provider store={store}>
        <App />,
      </Provider>
    );

    expect(mockDispatch).toHaveBeenCalled();
  });
});
