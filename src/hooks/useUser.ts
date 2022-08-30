import axios from "axios";
import { UserRegister } from "../types/interfaces";

const apiUrl = process.env.REACT_APP_API_URL;

const useUser = () => {
  const register = async ({ userName, password }: UserRegister) => {
    try {
      await axios.post(`${apiUrl}/users/register`, {
        userName,
        password,
      });
    } catch (error) {}
  };

  return { register };
};

export default useUser;
