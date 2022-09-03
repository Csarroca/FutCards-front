import React, { SyntheticEvent, useState } from "react";
import useUser from "../../hooks/useUser";
import Button from "../Button/Button";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginFormStyled from "./LoginFormStyled";

const LoginForm = (): JSX.Element => {
  const { login } = useUser();

  const initialState = {
    userName: "",
    password: "",
  };

  const [loginData, setLoginData] = useState(initialState);

  const formValidate = loginData.userName !== "" && loginData.password !== "";

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    await login(loginData);
    setLoginData(initialState);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <LoginFormStyled>
      <ToastContainer />
      <form onSubmit={handleSubmit} className="login" noValidate>
        <label htmlFor="userName">Username</label>

        <input
          className="Login__input"
          id="userName"
          type="text"
          name="userName"
          placeholder="Username"
          required
          autoComplete="off"
          value={loginData.userName}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>

        <input
          className="Login__input"
          id="password"
          type="password"
          name="password"
          placeholder="password"
          required
          autoComplete="off"
          value={loginData.password}
          onChange={handleChange}
        />

        <Button
          isDisabled={!formValidate}
          type={"submit"}
          className="greenButton"
          actionOnclick={() => {}}
          buttonText={"Login"}
        ></Button>
      </form>
    </LoginFormStyled>
  );
};

export default LoginForm;
