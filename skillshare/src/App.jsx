import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Registration/Register";
import MainLayout from "./components/Layout/MainLayout";
import AuthLayout from "./components/Layout/AuthLayout";
import Hero from "./components/Hero/Hero";
import { Toaster } from "react-hot-toast";
import Login from "./components/Login/Login";

const App = () => {
  return (
    <>
      <Toaster positon="top-right" reverseOrder={false} />
      <Routes>
        {/* //main layout-shows navbar,hero etc */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Hero />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
