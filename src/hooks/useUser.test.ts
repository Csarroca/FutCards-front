import { renderHook } from "@testing-library/react";
import { toast } from "react-toastify";
import { AuthData } from "../types/interfaces";
import Wrapper from "../utils/Wrapper";
import useUser from "./useUser";

jest.mock("react-toastify");

jest.mock("../utils/auth", () => () => ({
  token: "234ffgg44",
  id: "24sdf",
  userName: "paco",
}));

describe("Given a useUser hook", () => {
  describe("When invoke register function with a mockUser", () => {
    test("Then it should post a new user", async () => {
      const mockUser: AuthData = {
        userName: "paco",
        password: "paco12345",
      };

      const {
        result: {
          current: { register },
        },
      } = renderHook(useUser, { wrapper: Wrapper });
      await register(mockUser);

      expect(toast.success).toHaveBeenCalledWith("Register successfully!", {
        position: toast.POSITION.TOP_CENTER,
      });
    });

    describe("When invoke register function with a mockUser without required properties", () => {
      test("Then it should send a modal error", async () => {
        const mockUser2: AuthData = {
          userName: "",
          password: "paco12345",
        };

        const {
          result: {
            current: { register },
          },
        } = renderHook(useUser, { wrapper: Wrapper });
        await register(mockUser2);

        expect(toast.error).toHaveBeenCalledWith(
          "Password or username invalid",
          {
            position: toast.POSITION.TOP_CENTER,
          }
        );
      });
    });
  });
  describe("When invoke login function with a mockUser", () => {
    test("Then it should return a token", async () => {
      const mockUser: AuthData = {
        userName: "paco",
        password: "paco12345",
      };

      const {
        result: {
          current: { login },
        },
      } = renderHook(useUser, { wrapper: Wrapper });
      await login(mockUser);

      expect(toast.success).toHaveBeenCalledWith("Login successfully!", {
        position: toast.POSITION.TOP_CENTER,
      });
    });

    describe("When invoke login function with a mockUser without required properties", () => {
      test("Then it should send a modal error", async () => {
        const mockUser2: AuthData = {
          userName: "",
          password: "paco12345",
        };

        const {
          result: {
            current: { login },
          },
        } = renderHook(useUser, { wrapper: Wrapper });
        await login(mockUser2);

        expect(toast.error).toHaveBeenCalledWith(
          "Password or username invalid",
          {
            position: toast.POSITION.TOP_CENTER,
          }
        );
      });
    });
  });
});
