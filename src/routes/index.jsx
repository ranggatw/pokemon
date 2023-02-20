import React from "react";
import { Routes, Route, Navigate } from "react-router";
import LoginPage from "../pages/login";
import AuthLayout from "../layouts/auth";
import HomePage from "../pages/home";
import HomeLayout from "../layouts/home";
import PokemonLibrary from "../pages/library";
import GetPokemon from "../pages/pokemon";
import Profile from "../pages/profile";

const Routing = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Navigate to="/login" replace />} />
      <Route exact path="/" element={<AuthLayout />}>
        <Route exact path="/login" element={<LoginPage />} />
      </Route>
      <Route exact path="/" element={<HomeLayout />}>
        <Route exact path="/home" element={<HomePage />} />
        <Route exact path="/library" element={<PokemonLibrary />} />
        <Route exact path="/pokemon" element={<GetPokemon />} />
        <Route exact path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default Routing;
