import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import RegisterPage from "../../Pages/RegisterPage/RegisterPage";
import AppStyled from "./AppStyled";
import LoginPage from "../../Pages/LoginPage/LoginPage";

function App() {
  return (
    <AppStyled>
      <Header />
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </AppStyled>
  );
}

export default App;
