import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import RegisterPage from "../../Pages/RegisterPage/RegisterPage";
import AppStyled from "./AppStyled";
import LoginPage from "../../Pages/LoginPage/LoginPage";
import NotFoundPage from "../../Pages/NotFoundPage/NotFoundPage";
import CardsPage from "../../Pages/CardsPage/CardsPage";
import MyTeamPage from "../../Pages/MyTeamPage/MyTeamPage";
import CreateCardPage from "../../Pages/CreateCardPage/CreateCardPage";
import RouteProtector from "../RouteProtector/RouteProtector";
import Navbar from "../NavBar/Navbar";
import ReverseRouteProtector from "../RouteProtector/ReverseRouteProtector";
import { useAppDispatch } from "../../app/store/hooks";
import fetchToken from "../../utils/auth";
import { User } from "../../features/users/models/User";
import { loginUsers } from "../../features/users/UserSlice";
import { PayloadAction } from "@reduxjs/toolkit";

function App() {
  const token = localStorage.getItem("token");

  const dispach = useAppDispatch();

  if (token) {
    const user = fetchToken(token);
    dispach<PayloadAction<User>>(loginUsers(user));
  }

  return (
    <AppStyled>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route
          path="/login"
          element={
            <ReverseRouteProtector>
              <LoginPage />
            </ReverseRouteProtector>
          }
        />
        <Route
          path="/cards"
          element={
            <RouteProtector>
              <CardsPage />
            </RouteProtector>
          }
        />
        <Route path="/myTeam" element={<MyTeamPage />} />
        <Route path="/create" element={<CreateCardPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AppStyled>
  );
}

export default App;
