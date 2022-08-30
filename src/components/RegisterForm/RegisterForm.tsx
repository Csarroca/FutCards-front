import React, { SyntheticEvent, useState } from "react";

const RegisterForm = (): JSX.Element => {
  const [registerData, setRegisterData] = useState({
    userName: "",
    password: "",
  });

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    //register(registerData);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({
      ...registerData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <h2>Create an account</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userName">Username</label>

          <input
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
            id="password"
            type="password"
            name="password"
            placeholder="password"
            required
            autoComplete="off"
            value={registerData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">SING UP </button>
      </form>
    </>
  );
};

export default RegisterForm;
