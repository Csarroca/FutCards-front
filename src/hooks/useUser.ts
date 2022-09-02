import { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { useAppDispatch } from "../app/store/hooks";
import { User } from "../features/users/models/User";
import { loginUsers } from "../features/users/UserSlice";
import { AuthData } from "../types/interfaces";
import fetchToken from "../utils/auth";

const useUser = () => {
  const apiUrl = process.env.REACT_APP_API_URL;

  const dispatch = useAppDispatch();

  const login = async ({ userName, password }: AuthData) => {
    try {
      const {
        data: {
          user: { token },
        },
      } = await axios.post(`${apiUrl}/users/login`, {
        userName,
        password,
      });

      const user = fetchToken(token);

      dispatch<PayloadAction<User>>(loginUsers(user));

      localStorage.setItem("token", user.token);
    } catch (error) {}
  };

  const register = async ({ userName, password }: AuthData) => {
    try {
      await axios.post(`${apiUrl}/users/register`, {
        userName,
        password,
      });
    } catch (error) {}
  };

  return { register, login };
};

export default useUser;
