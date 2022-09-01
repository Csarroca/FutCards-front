import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import RegisterPage from "../../Pages/RegisterPage/RegisterPage";
import AppStyled from "./AppStyled";

function App() {
  return (
    <AppStyled>
      <Header />
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </AppStyled>
  );
}

export default App;
