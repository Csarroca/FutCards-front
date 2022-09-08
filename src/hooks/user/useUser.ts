import { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { useAppDispatch } from "../../app/store/hooks";
import { User } from "../../features/users/models/User";
import { loginUsers, logoutUsers } from "../../features/users/UserSlice";
import { AuthData } from "../../types/interfaces";
import fetchToken from "../../utils/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

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

      successModal("Login successfully!");
      navigate("/cards");
    } catch (error) {
      errorModal("Password or username invalid");
    }
  };

  const logout = () => {
    dispatch<PayloadAction>(logoutUsers());
    localStorage.removeItem("token");
  };

  const register = async ({ userName, password }: AuthData) => {
    try {
      await axios.post(`${apiUrl}/users/register`, {
        userName,
        password,
      });

      successModal("Register successfully!");
      navigate("/login");
    } catch (error) {
      errorModal("Password or username invalid");
    }
  };

  return { register, login, logout };
};

export default useUser;
