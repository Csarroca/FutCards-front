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

  const [input, setInput] = useState(initialState);

  const formValidate =
    registerData.userName !== "" && registerData.password !== "";

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    if (registerData.userName.length < 4) {
      setInput({ ...input, userName: "error" });
    } else if (registerData.password.length < 8) {
      setInput({ ...input, password: "error" });
    } else {
      await register(registerData);
      setRegisterData(initialState);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(initialState);

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
          className={`register__input ${input.userName}`}
          id="userName"
          type="text"
          name="userName"
          placeholder="Username"
          required
          autoComplete="off"
          value={registerData.userName}
          onChange={handleChange}
        />

        {input.userName === "error" && (
          <span className="error-text">
            {" "}
            The userName should have minimum 4 letters{" "}
          </span>
        )}

        <label htmlFor="password">Password</label>

        <input
          className={`register__input ${input.password}`}
          id="password"
          type="password"
          name="password"
          placeholder="password"
          required
          autoComplete="off"
          value={registerData.password}
          onChange={handleChange}
        />

        {input.password === "error" && (
          <span className="error-text">
            {" "}
            The password should have minimum 8 characters{" "}
          </span>
        )}

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
