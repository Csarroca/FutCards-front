import React, { SyntheticEvent, useState } from "react";
import useUser from "../../hooks/useUser";
import RegisterFormStyled from "./RegisterFormStyled";

const RegisterForm = (): JSX.Element => {
  const { register } = useUser();

  const [registerData, setRegisterData] = useState({
    userName: "",
    password: "",
  });

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    register(registerData);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({
      ...registerData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <RegisterFormStyled>
      <form
        onSubmit={handleSubmit}
        className="register
      "
      >
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

        <button type="submit" className="register__button">
          SING UP
        </button>
      </form>
    </RegisterFormStyled>
  );
};

export default RegisterForm;
