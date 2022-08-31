import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
