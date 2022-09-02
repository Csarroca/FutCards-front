import axios from "axios";
import { UserRegister } from "../types/interfaces";
import useUser from "./useUser";

jest.mock("axios");
const apiUrl = process.env.REACT_APP_API_URL;

describe("Given a useUserApi hook", () => {
  describe("When invoke register function with a mockUser", () => {
    test("Then it should post a new user", async () => {
      const mockUser: UserRegister = {
        userName: "Paco",
        password: "paco123",
      };

      const { register } = useUser();
      await register(mockUser);

      expect(axios.post).toHaveBeenCalledWith(
        `${apiUrl}/users/register`,
        mockUser
      );
    });
  });
});
