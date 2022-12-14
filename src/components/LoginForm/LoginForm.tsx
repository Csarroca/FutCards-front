import React, { SyntheticEvent, useState } from "react";
import useUser from "../../hooks/user/useUser";
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

    setLoginData(initialState);
    await login(loginData);
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
          className="login__input"
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
          className="login__input"
          id="password"
          type="password"
          name="password"
          placeholder="Password"
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
          buttonText={"LOGIN"}
        ></Button>
      </form>
    </LoginFormStyled>
  );
};

export default LoginForm;
