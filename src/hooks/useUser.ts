import { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { useAppDispatch } from "../app/store/hooks";
import { User } from "../features/users/models/User";
import { loginUsers } from "../features/users/UserSlice";
import { AuthData } from "../types/interfaces";
import fetchToken from "../utils/auth";
import { toast } from "react-toastify";

export const successModal = (message: string) =>
  toast.success(message, {
    position: toast.POSITION.TOP_CENTER,
  });

export const errorModal = (error: string) =>
  toast.error(error, {
    position: toast.POSITION.TOP_CENTER,
  });

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
      debugger;
      const user = fetchToken(token);

      dispatch<PayloadAction<User>>(loginUsers(user));

      localStorage.setItem("token", user.token);

      successModal("Login successfully!");
    } catch (error) {
      errorModal("Password or username invalid");
    }
  };

  const register = async ({ userName, password }: AuthData) => {
    try {
      await axios.post(`${apiUrl}/users/register`, {
        userName,
        password,
      });
      successModal("Register successfully!");
    } catch (error) {
      errorModal("Password or username invalid");
    }
  };

  return { register, login };
};

export default useUser;
