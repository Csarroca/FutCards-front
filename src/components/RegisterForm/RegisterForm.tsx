import React, { SyntheticEvent, useState } from "react";
import useUser from "../../hooks/user/useUser";
import Button from "../Button/Button";
import RegisterFormStyled from "./RegisterFormStyled";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterForm = (): JSX.Element => {
  const { register } = useUser();

  const initialState = {
    userName: "",
    password: "",
  };

  const [registerData, setRegisterData] = useState(initialState);

  const formValidate =
    registerData.userName !== "" && registerData.password !== "";

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    await register(registerData);
    setRegisterData(initialState);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({
      ...registerData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <RegisterFormStyled>
      <ToastContainer />
      <form onSubmit={handleSubmit} className="register" noValidate>
        <label htmlFor="userName">Username</label>

        <input
          className="register__input"
          id="userName"
          type="text"
          name="userName"
          placeholder="Username"
          required
          autoComplete="off"
          value={registerData.userName}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>

        <input
          className="register__input"
          id="password"
          type="password"
          name="password"
          placeholder="password"
          required
          autoComplete="off"
          value={registerData.password}
          onChange={handleChange}
        />

        <Button
          isDisabled={!formValidate}
          type={"submit"}
          className="register__submit"
          actionOnclick={() => {}}
          buttonText={"SING UP"}
        ></Button>
      </form>
    </RegisterFormStyled>
  );
};

export default RegisterForm;
