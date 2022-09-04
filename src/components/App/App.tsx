import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import RegisterPage from "../../Pages/RegisterPage/RegisterPage";
import AppStyled from "./AppStyled";
import LoginPage from "../../Pages/LoginPage/LoginPage";
import NotFoundPage from "../../Pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <AppStyled>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AppStyled>
  );
}

export default App;
