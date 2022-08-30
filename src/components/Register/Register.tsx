import React, { useState } from "react";

const Register = (): JSX.Element => {
  const [registerData, setRegisterData] = useState({
    userName: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({
      ...registerData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <h2>Create an account</h2>

      <form>
        <div>
          <label htmlFor="">Username</label>

          <input
            type="text"
            name="userName"
            placeholder="Username"
            required
            autoComplete="off"
            value={registerData.userName}
            onChange={handleChange}
          />
          <label htmlFor="">Password</label>

          <input
            type="password"
            name="passwd"
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

export default Register;
